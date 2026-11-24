/**
 * Fernora Application Controller
 * Coordinates:
 *  - Direct lag-free workspace entry (zero WebGL / hero-scroll hijacking)
 *  - Canva-like Template Discovery (Search, Subject Tabs, Purpose Filters, Sort, Favorites)
 *  - Leak-free Hover Slide-Peek with thumbnail image optimization
 *  - Interactive 40+ Slide Morph Previewer (Keyboard-guarded, Filmstrip, Auto-play, Fullscreen)
 *  - AI Presentation Generator Studio
 *  - Canva Integration Bridge & Async Layout-Aware .pptx Export
 */
(() => {
  'use strict';

  const { SUBJECTS, PURPOSES, TEMPLATES, buildSlidesForTemplate } = window.FERNORA_DATA;
  const { renderStaticSlideHTML, updateMorphStage } = window.FERNORA_RENDERER;
  const { exportDeckToPPTX } = window.FERNORA_PPTX;

  // ---------- Helpers ----------
  function normalizeText(str) {
    return String(str || '')
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/đ/g, 'd');
  }

  let toastTimer = null;
  function showToast(msg) {
    const el = document.getElementById('toast');
    if (!el) return;
    el.textContent = msg;
    el.classList.add('is-shown');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => el.classList.remove('is-shown'), 3000);
  }

  function copyText(text, label) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(() => {
        showToast(`Đã sao chép ${label || text}`);
      }).catch(() => showToast(`Mã màu: ${text}`));
    } else {
      showToast(`Mã màu: ${text}`);
    }
  }

  function getTotalSlidesCount() {
    return TEMPLATES.reduce((sum, t) => sum + (Number(t.slideCount) || 0), 0);
  }

  function getTemplateChapterCount(template) {
    return Array.isArray(template && template.chapters) && template.chapters.length
      ? template.chapters.length
      : 5;
  }

  // ---------- Resilient Favorites Persistence ----------
  const STORAGE_KEY = 'fernora_favorites_v1';

  function loadFavorites() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return new Set();
      const parsed = JSON.parse(raw);
      if (!Array.isArray(parsed)) return new Set();
      return new Set(parsed.filter(id => typeof id === 'string'));
    } catch (_) {
      return new Set();
    }
  }

  // ---------- State ----------
  const state = {
    subject: 'all',
    purpose: 'all',
    query: '',
    sort: 'popular',
    onlyFavs: false,
    favorites: loadFavorites(),
    // Previewer state
    activeTemplate: null,
    activeSlides: [],
    activeIndex: 0,
    morphEnabled: true,
    autoplayTimer: null,
    // Canva modal context
    canvaTemplate: null,
    canvaSlides: null
  };

  let isExportingPptx = false;

  // Cache default 40+ slides per template lazily
  const defaultDeckCache = new Map();
  function getDefaultSlides(template) {
    if (!defaultDeckCache.has(template.id)) {
      defaultDeckCache.set(template.id, buildSlidesForTemplate(template));
    }
    return defaultDeckCache.get(template.id);
  }

  function saveFavorites() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify([...state.favorites]));
    } catch (_) {
      // Ignore storage quota / privacy mode errors
    }
    const countEl = document.getElementById('fav-count');
    if (countEl) countEl.textContent = String(state.favorites.size);
  }

  // ---------- Direct Workspace Boot & Scroll Helpers ----------
  const templatesView = document.getElementById('templates-view');
  const navTemplates = document.getElementById('nav-templates');
  const navHome = document.getElementById('nav-home');
  const navHowto = document.getElementById('nav-howto');
  const navCreate = document.getElementById('nav-create');
  const goBtn = document.getElementById('go');
  const backToHeroBtn = document.getElementById('back-to-hero');
  const openHowtoBtn = document.getElementById('open-howto');
  const openAiHeroBtn = document.getElementById('open-ai-hero');
  const howtoStartBtn = document.getElementById('howto-start-btn');

  function ensureWorkspaceVisible() {
    if (window.__fernoraRevealUI) window.__fernoraRevealUI();
    document.body.classList.add('view-templates');
    if (templatesView) templatesView.setAttribute('aria-hidden', 'false');
    if (navTemplates) navTemplates.classList.add('is-active');
  }

  function scrollWorkspaceTop() {
    ensureWorkspaceVisible();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (templatesView && typeof templatesView.scrollTo === 'function') {
      templatesView.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  // ---------- Modals ----------
  const MODAL_STACK_ORDER = ['canva-modal', 'ai-modal', 'howto-modal', 'preview-modal'];

  function isModalOpen(id) {
    const el = document.getElementById(id);
    return Boolean(el && el.classList.contains('is-open'));
  }

  function openModal(id) {
    const el = document.getElementById(id);
    if (!el) return;
    el.classList.add('is-open');
  }

  function closeModal(id) {
    const el = document.getElementById(id);
    if (!el) return;
    el.classList.remove('is-open');
    if (id === 'preview-modal') {
      stopAutoplay();
    }
  }

  function closeAllModals() {
    MODAL_STACK_ORDER.forEach(closeModal);
  }

  document.querySelectorAll('[data-close-modal]').forEach(btn => {
    btn.addEventListener('click', () => closeModal(btn.getAttribute('data-close-modal')));
  });

  document.querySelectorAll('.modal-backdrop').forEach(backdrop => {
    backdrop.addEventListener('click', e => {
      if (e.target === backdrop) closeModal(backdrop.id);
    });
  });

  // ---------- Discovery Filters & Rendering ----------
  const subjectTabsEl = document.getElementById('subject-tabs');
  const purposeTabsEl = document.getElementById('purpose-tabs');
  const gridEl = document.getElementById('templates-grid');
  const searchInput = document.getElementById('tpl-search');
  const searchClear = document.getElementById('tpl-search-clear');
  const sortSelect = document.getElementById('tpl-sort');
  const favFilterBtn = document.getElementById('fav-filter-btn');
  const resultsSummary = document.getElementById('results-summary');
  const quickTagsEl = document.getElementById('quick-tags');

  function syncDynamicCounts() {
    const tplCount = TEMPLATES.length;
    const totalSlides = getTotalSlidesCount();

    const eyebrow = document.querySelector('.tpl-eyebrow');
    if (eyebrow) {
      eyebrow.textContent = `Fernora · ${tplCount} bộ mẫu học thuật · ${totalSlides}+ slide chuẩn Morph`;
    }
    const statTemplates = document.getElementById('stat-total-templates');
    if (statTemplates) statTemplates.textContent = String(tplCount);
    const statSlides = document.getElementById('stat-total-slides');
    if (statSlides) statSlides.textContent = `${totalSlides}+`;
    if (howtoStartBtn) {
      howtoStartBtn.textContent = `Khám phá ${tplCount} bộ mẫu ngay →`;
    }
  }

  function renderFilterChips() {
    if (subjectTabsEl) {
      const subjHtml = ['<span class="strip-label">Môn học</span>'];
      SUBJECTS.forEach(s => {
        const count = s.id === 'all'
          ? TEMPLATES.length
          : TEMPLATES.filter(t => t.subject === s.id).length;
        const active = state.subject === s.id ? 'is-active' : '';
        subjHtml.push(
          `<button type="button" class="chip ${active}" role="tab" aria-selected="${state.subject === s.id}" data-subject="${s.id}">
            ${s.short} <span class="chip-count">${count}</span>
          </button>`
        );
      });
      subjectTabsEl.innerHTML = subjHtml.join('');
    }

    if (purposeTabsEl) {
      const purpHtml = ['<span class="strip-label">Mục đích</span>'];
      PURPOSES.forEach(p => {
        const active = state.purpose === p.id ? 'is-active' : '';
        purpHtml.push(
          `<button type="button" class="chip purpose-chip ${active}" data-purpose="${p.id}">
            ${p.label}
          </button>`
        );
      });
      purposeTabsEl.innerHTML = purpHtml.join('');
    }
  }

  function getFilteredTemplates() {
    const q = normalizeText(state.query.trim());
    let list = TEMPLATES.filter(t => {
      if (state.subject !== 'all' && t.subject !== state.subject) return false;
      if (state.purpose !== 'all' && !t.purposes.includes(state.purpose)) return false;
      if (state.onlyFavs && !state.favorites.has(t.id)) return false;
      if (q) {
        const hay = normalizeText([
          t.title,
          t.subjectLabel,
          t.styleTag,
          t.description,
          ...(t.purposeLabels || []),
          ...(t.chapters || []),
          ...(t.topics || [])
        ].join(' '));
        if (!hay.includes(q)) return false;
      }
      return true;
    });

    list = [...list];
    if (state.sort === 'popular') {
      list.sort((a, b) => b.popularity - a.popularity);
    } else if (state.sort === 'slides') {
      list.sort((a, b) => b.slideCount - a.slideCount);
    } else if (state.sort === 'newest') {
      list.sort((a, b) => Number(b.isNew) - Number(a.isNew) || b.popularity - a.popularity);
    } else if (state.sort === 'name') {
      list.sort((a, b) => a.title.localeCompare(b.title, 'vi'));
    }
    return list;
  }

  // Leak-free hover slide-peek timer registry
  const peekTimers = new WeakMap();
  const activePeekTimers = new Set();

  function clearAllPeekTimers() {
    activePeekTimers.forEach(id => clearInterval(id));
    activePeekTimers.clear();
  }

  function resolvePeekIndices(tpl, deckLength) {
    const raw = Array.isArray(tpl.peekIndices) && tpl.peekIndices.length
      ? tpl.peekIndices
      : [0, 4, 6, 8];
    const valid = raw
      .map(i => Number(i))
      .filter(i => Number.isInteger(i) && i >= 0 && i < deckLength);
    return valid.length ? valid : [0];
  }

  function renderTemplatesGrid() {
    clearAllPeekTimers();
    if (!gridEl) return;

    const list = getFilteredTemplates();
    const totalSlidesShown = list.reduce((sum, t) => sum + (Number(t.slideCount) || 0), 0);
    if (resultsSummary) {
      resultsSummary.innerHTML = `Đang hiển thị <strong>${list.length}</strong> / ${TEMPLATES.length} bộ mẫu (${totalSlidesShown} slides sẵn sàng)`;
    }

    if (list.length === 0) {
      gridEl.innerHTML = `
        <div class="empty-state">
          <h3>Chưa tìm thấy bộ mẫu phù hợp</h3>
          <p>Thử đổi từ khóa tìm kiếm hoặc đặt lại bộ lọc môn học và mục đích.</p>
          <button type="button" class="btn-cream" id="reset-filters-btn">Xem lại toàn bộ ${TEMPLATES.length} bộ mẫu</button>
        </div>`;
      const resetBtn = document.getElementById('reset-filters-btn');
      if (resetBtn) {
        resetBtn.addEventListener('click', () => {
          state.subject = 'all';
          state.purpose = 'all';
          state.query = '';
          state.onlyFavs = false;
          if (searchInput) searchInput.value = '';
          if (searchClear) searchClear.classList.remove('visible');
          if (favFilterBtn) {
            favFilterBtn.classList.remove('is-active');
            favFilterBtn.setAttribute('aria-pressed', 'false');
          }
          renderFilterChips();
          renderTemplatesGrid();
        });
      }
      return;
    }

    gridEl.innerHTML = list.map(tpl => {
      const deck = getDefaultSlides(tpl);
      const coverSlide = deck[0];
      const isFav = state.favorites.has(tpl.id);
      const peekIndices = resolvePeekIndices(tpl, deck.length);
      const dotsHtml = peekIndices.map((_, idx) => `<span${idx === 0 ? ' class="active"' : ''}></span>`).join('');
      return `
        <article class="tpl-card" data-tpl-id="${tpl.id}">
          <div class="tpl-preview-wrap" data-action="preview" data-tpl-id="${tpl.id}" title="Bấm để xem trọn bộ ${tpl.slideCount} slide với hiệu ứng Morph">
            <div class="tpl-badges-top">
              <div class="tpl-badge-group">
                <span class="tpl-pill">${tpl.slideCount} slides</span>
                <span class="tpl-pill tpl-pill-morph">✦ Morph</span>
              </div>
              <button type="button" class="tpl-fav-btn ${isFav ? 'is-fav' : ''}" data-action="fav" data-tpl-id="${tpl.id}" aria-label="Lưu bộ mẫu yêu thích" aria-pressed="${isFav}">
                ${isFav ? '★' : '☆'}
              </button>
            </div>
            <div class="tpl-slide-slot">${renderStaticSlideHTML(tpl, coverSlide, deck.length, { variant: 'thumb' })}</div>
            <div class="tpl-hover-overlay">
              <div class="tpl-peek-dots">${dotsHtml}</div>
              <span class="tpl-open-hint">Xem ${tpl.slideCount} slides →</span>
            </div>
          </div>

          <div class="tpl-card-body">
            <div class="tpl-card-meta">
              <span>${tpl.subjectLabel} · ${tpl.styleTag}</span>
              <span class="tpl-palette-dots" title="Bảng màu của bộ mẫu">
                <i style="background:${tpl.palette.bg}"></i>
                <i style="background:${tpl.palette.accent}"></i>
                <i style="background:${tpl.palette.accent2}"></i>
              </span>
            </div>
            <h3 class="tpl-card-title">${tpl.title}</h3>
            <p class="tpl-card-desc">${tpl.description}</p>
            <div class="tpl-purpose-row">
              ${(tpl.purposeLabels || []).map(l => `<span class="tpl-purpose-tag">${l}</span>`).join('')}
              <span class="tpl-purpose-tag">Canva ✓</span>
            </div>
            <div class="tpl-card-actions">
              <button type="button" class="card-btn card-btn-primary" data-action="preview" data-tpl-id="${tpl.id}">Xem ${tpl.slideCount} slide</button>
              <button type="button" class="card-btn card-btn-ai" data-action="ai" data-tpl-id="${tpl.id}">✦ Dùng với AI</button>
              <button type="button" class="card-btn card-btn-canva" data-action="canva" data-tpl-id="${tpl.id}" title="Mở & chỉnh sửa trên Canva">C</button>
            </div>
          </div>
        </article>`;
    }).join('');

    // Attach leak-free hover slide-peek cycling on each card preview
    gridEl.querySelectorAll('.tpl-preview-wrap').forEach(wrap => {
      const id = wrap.getAttribute('data-tpl-id');
      const tpl = TEMPLATES.find(t => t.id === id);
      if (!tpl) return;
      const deck = getDefaultSlides(tpl);
      const peekIndices = resolvePeekIndices(tpl, deck.length);
      const slot = wrap.querySelector('.tpl-slide-slot');
      const dots = wrap.querySelectorAll('.tpl-peek-dots span');

      const stopPeek = () => {
        const existing = peekTimers.get(wrap);
        if (existing) {
          clearInterval(existing);
          activePeekTimers.delete(existing);
          peekTimers.delete(wrap);
        }
      };

      wrap.addEventListener('pointerenter', () => {
        stopPeek();
        if (peekIndices.length <= 1) return;
        let step = 0;
        const timer = setInterval(() => {
          step = (step + 1) % peekIndices.length;
          const slide = deck[peekIndices[step]] || deck[0];
          if (slot) slot.innerHTML = renderStaticSlideHTML(tpl, slide, deck.length, { variant: 'thumb' });
          dots.forEach((d, idx) => d.classList.toggle('active', idx === step));
        }, 1250);
        peekTimers.set(wrap, timer);
        activePeekTimers.add(timer);
      });

      const resetPeek = () => {
        stopPeek();
        if (slot) slot.innerHTML = renderStaticSlideHTML(tpl, deck[0], deck.length, { variant: 'thumb' });
        dots.forEach((d, idx) => d.classList.toggle('active', idx === 0));
      };

      wrap.addEventListener('pointerleave', resetPeek);
      wrap.addEventListener('blur', resetPeek);
    });
  }

  // Delegate filter clicks
  if (subjectTabsEl) {
    subjectTabsEl.addEventListener('click', e => {
      const btn = e.target.closest('[data-subject]');
      if (!btn) return;
      state.subject = btn.getAttribute('data-subject');
      renderFilterChips();
      renderTemplatesGrid();
    });
  }

  if (purposeTabsEl) {
    purposeTabsEl.addEventListener('click', e => {
      const btn = e.target.closest('[data-purpose]');
      if (!btn) return;
      state.purpose = btn.getAttribute('data-purpose');
      renderFilterChips();
      renderTemplatesGrid();
    });
  }

  if (searchInput) {
    searchInput.addEventListener('input', () => {
      state.query = searchInput.value;
      if (searchClear) searchClear.classList.toggle('visible', state.query.length > 0);
      renderTemplatesGrid();
    });
  }

  if (searchClear) {
    searchClear.addEventListener('click', () => {
      state.query = '';
      if (searchInput) {
        searchInput.value = '';
        searchInput.focus();
      }
      searchClear.classList.remove('visible');
      renderTemplatesGrid();
    });
  }

  if (sortSelect) {
    sortSelect.addEventListener('change', () => {
      state.sort = sortSelect.value;
      renderTemplatesGrid();
    });
  }

  if (favFilterBtn) {
    favFilterBtn.addEventListener('click', () => {
      state.onlyFavs = !state.onlyFavs;
      favFilterBtn.classList.toggle('is-active', state.onlyFavs);
      favFilterBtn.setAttribute('aria-pressed', String(state.onlyFavs));
      renderTemplatesGrid();
    });
  }

  if (quickTagsEl) {
    quickTagsEl.addEventListener('click', e => {
      const tag = e.target.closest('[data-query]');
      if (!tag) return;
      const q = tag.getAttribute('data-query');
      state.query = q;
      if (searchInput) searchInput.value = q;
      if (searchClear) searchClear.classList.add('visible');
      renderTemplatesGrid();
    });
  }

  // Delegate card actions
  if (gridEl) {
    gridEl.addEventListener('click', e => {
      const favBtn = e.target.closest('[data-action="fav"]');
      if (favBtn) {
        e.stopPropagation();
        const id = favBtn.getAttribute('data-tpl-id');
        if (state.favorites.has(id)) {
          state.favorites.delete(id);
          showToast('Đã bỏ khỏi danh sách yêu thích');
        } else {
          state.favorites.add(id);
          showToast('Đã lưu mẫu slide vào mục yêu thích ★');
        }
        saveFavorites();
        renderTemplatesGrid();
        return;
      }

      const actionEl = e.target.closest('[data-action]');
      if (!actionEl) return;
      const action = actionEl.getAttribute('data-action');
      const id = actionEl.getAttribute('data-tpl-id');
      const tpl = TEMPLATES.find(t => t.id === id);
      if (!tpl) return;

      if (action === 'preview') {
        openPreviewModal(tpl, getDefaultSlides(tpl));
      } else if (action === 'ai') {
        openAIModal(tpl.id);
      } else if (action === 'canva') {
        openCanvaModal(tpl, getDefaultSlides(tpl));
      }
    });
  }

  // ---------- Async PPTX Export Orchestrator ----------
  async function handlePptxExport(triggerBtn, template, slides) {
    if (!template || !slides || !slides.length) return;
    if (isExportingPptx) {
      showToast('Đang xuất tệp .pptx, vui lòng đợi trong giây lát...');
      return;
    }

    isExportingPptx = true;
    const exportBtns = [
      document.getElementById('side-download-pptx'),
      document.getElementById('pm-export-pptx'),
      document.getElementById('canva-download-btn'),
      document.getElementById('canva-download-pptx')
    ].filter(Boolean);

    const savedHtml = triggerBtn ? triggerBtn.innerHTML : '';
    exportBtns.forEach(btn => { btn.disabled = true; });
    if (triggerBtn) triggerBtn.textContent = 'Đang chuẩn bị .pptx...';

    try {
      const result = await exportDeckToPPTX(template, slides, {
        embedImages: true,
        onProgress(done, total) {
          if (triggerBtn) {
            triggerBtn.textContent = `Đang xuất .pptx (${done}/${total})...`;
          }
        }
      });

      if (result && result.embeddedImages > 0) {
        showToast(`Đã xuất ${result.slideCount} slides (.pptx, nhúng ${result.embeddedImages} ảnh minh họa) — sẵn sàng nhập vào Canva!`);
      } else if (result && result.failedImages > 0) {
        showToast(`Đã xuất ${result.slideCount} slides (.pptx, dùng khung minh họa cho ${result.failedImages} ảnh ngoại tuyến) — sẵn sàng nhập vào Canva!`);
      } else {
        showToast(`Đã tải xuống tệp .pptx (${slides.length} slides) sẵn sàng nhập vào Canva!`);
      }
    } catch (err) {
      console.error('PPTX export error:', err);
      showToast('Không thể xuất tệp .pptx. Vui lòng thử lại.');
    } finally {
      isExportingPptx = false;
      exportBtns.forEach(btn => { btn.disabled = false; });
      if (triggerBtn) triggerBtn.innerHTML = savedHtml;
    }
  }

  // ---------- 40+ Slide Morph Previewer Modal ----------
  const morphStageEl = document.getElementById('morph-stage');
  const slideCounterEl = document.getElementById('slide-counter');
  const filmstripEl = document.getElementById('slide-filmstrip');
  const previewTitleEl = document.getElementById('preview-title');
  const previewSubEl = document.getElementById('preview-subtitle');
  const sideDescEl = document.getElementById('side-desc');
  const sideSwatchesEl = document.getElementById('side-swatches');
  const sideSpecsEl = document.getElementById('side-specs');
  const toggleMorphBtn = document.getElementById('toggle-morph');
  const toggleAutoplayBtn = document.getElementById('toggle-autoplay');

  function renderSwatches(container, palette) {
    if (!container || !palette) return;
    const swatches = [
      { label: 'Nền', hex: palette.bg },
      { label: 'Chính', hex: palette.accent },
      { label: 'Phụ', hex: palette.accent2 },
      { label: 'Chữ', hex: palette.ink }
    ];
    container.innerHTML = swatches.map(sw => `
      <button type="button" class="swatch-btn" data-hex="${sw.hex}" title="Sao chép ${sw.hex}">
        <i style="background:${sw.hex}"></i>
        <span>${String(sw.hex).toUpperCase()}</span>
      </button>`).join('');
  }

  function renderCurrentSlide() {
    if (!state.activeTemplate || !state.activeSlides.length) return;
    const slide = state.activeSlides[state.activeIndex];
    if (morphStageEl) {
      updateMorphStage(morphStageEl, state.activeTemplate, slide, state.activeSlides.length, state.morphEnabled);
    }

    const cur = String(state.activeIndex + 1).padStart(2, '0');
    const tot = String(state.activeSlides.length).padStart(2, '0');
    if (slideCounterEl) slideCounterEl.textContent = `${cur} / ${tot}`;

    if (filmstripEl) {
      filmstripEl.querySelectorAll('.thumb-item').forEach((item, idx) => {
        const isCur = idx === state.activeIndex;
        item.classList.toggle('is-current', isCur);
        if (isCur) {
          item.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
        }
      });
    }
  }

  function openPreviewModal(template, slides, customLabel) {
    stopAutoplay();
    state.activeTemplate = template;
    state.activeSlides = slides;
    state.activeIndex = 0;

    const chapterCount = getTemplateChapterCount(template);
    if (previewTitleEl) previewTitleEl.textContent = customLabel || template.title;
    if (previewSubEl) {
      previewSubEl.textContent = `${template.subjectLabel} · ${slides.length} slides · ${template.styleTag} · Chuyển cảnh Morph`;
    }
    if (sideDescEl) sideDescEl.textContent = template.description;
    if (sideSpecsEl) {
      sideSpecsEl.innerHTML = `
        <strong>Đánh giá độ dễ đọc:</strong> ${template.teacherScore}<br>
        <strong>Số lượng slide:</strong> ${slides.length} trang (${chapterCount} chương)<br>
        <strong>Bộ chữ:</strong> ${template.fonts.display} &amp; ${template.fonts.body}<br>
        <strong>Tương thích:</strong> Trình chiếu Morph &amp; Nhập trực tiếp vào Canva (.pptx)
      `;
    }
    renderSwatches(sideSwatchesEl, template.palette);

    // Build all 40+ thumbnails in the filmstrip using lightweight thumb variant
    if (filmstripEl) {
      filmstripEl.innerHTML = slides.map((sl, idx) => `
        <button type="button" class="thumb-item ${idx === 0 ? 'is-current' : ''}" data-slide-index="${idx}">
          <div class="thumb-box">${renderStaticSlideHTML(template, sl, slides.length, { variant: 'thumb' })}</div>
          <span class="thumb-label">${String(idx + 1).padStart(2, '0')}. ${sl.title || sl.chapterName}</span>
        </button>`).join('');
    }

    renderCurrentSlide();
    openModal('preview-modal');
  }

  function stepSlide(delta) {
    if (!state.activeSlides.length) return;
    state.activeIndex = (state.activeIndex + delta + state.activeSlides.length) % state.activeSlides.length;
    renderCurrentSlide();
  }

  function stopAutoplay() {
    if (state.autoplayTimer) {
      clearInterval(state.autoplayTimer);
      state.autoplayTimer = null;
    }
    if (toggleAutoplayBtn) {
      toggleAutoplayBtn.classList.remove('is-active');
      toggleAutoplayBtn.setAttribute('aria-pressed', 'false');
      toggleAutoplayBtn.textContent = '▶ Tự chạy';
    }
  }

  function toggleAutoplay() {
    if (state.autoplayTimer) {
      stopAutoplay();
      return;
    }
    if (toggleAutoplayBtn) {
      toggleAutoplayBtn.classList.add('is-active');
      toggleAutoplayBtn.setAttribute('aria-pressed', 'true');
      toggleAutoplayBtn.textContent = '❚❚ Tạm dừng';
    }
    state.autoplayTimer = setInterval(() => stepSlide(1), 2300);
  }

  const slidePrevBtn = document.getElementById('slide-prev');
  const slideNextBtn = document.getElementById('slide-next');
  const toggleFullscreenBtn = document.getElementById('toggle-fullscreen');
  if (slidePrevBtn) slidePrevBtn.addEventListener('click', () => stepSlide(-1));
  if (slideNextBtn) slideNextBtn.addEventListener('click', () => stepSlide(1));
  if (toggleAutoplayBtn) toggleAutoplayBtn.addEventListener('click', toggleAutoplay);

  if (toggleMorphBtn) {
    toggleMorphBtn.addEventListener('click', () => {
      state.morphEnabled = !state.morphEnabled;
      toggleMorphBtn.classList.toggle('is-active', state.morphEnabled);
      toggleMorphBtn.setAttribute('aria-pressed', String(state.morphEnabled));
      toggleMorphBtn.textContent = state.morphEnabled ? '✦ Morph: Bật' : '✦ Morph: Tắt';
      renderCurrentSlide();
    });
  }

  if (toggleFullscreenBtn) {
    toggleFullscreenBtn.addEventListener('click', () => {
      const stageFrame = morphStageEl ? morphStageEl.closest('.stage-frame') : null;
      if (!stageFrame) return;
      if (!document.fullscreenElement) {
        stageFrame.requestFullscreen().catch(() => showToast('Trình duyệt không hỗ trợ toàn màn hình'));
      } else {
        document.exitFullscreen().catch(() => {});
      }
    });
  }

  if (filmstripEl) {
    filmstripEl.addEventListener('click', e => {
      const item = e.target.closest('[data-slide-index]');
      if (!item) return;
      state.activeIndex = Number(item.getAttribute('data-slide-index'));
      renderCurrentSlide();
    });
  }

  if (sideSwatchesEl) {
    sideSwatchesEl.addEventListener('click', e => {
      const btn = e.target.closest('[data-hex]');
      if (btn) copyText(btn.getAttribute('data-hex'), btn.getAttribute('data-hex'));
    });
  }

  const previewUseAiBtn = document.getElementById('preview-use-ai');
  if (previewUseAiBtn) {
    previewUseAiBtn.addEventListener('click', () => {
      const tplId = state.activeTemplate ? state.activeTemplate.id : TEMPLATES[0].id;
      closeModal('preview-modal');
      openAIModal(tplId);
    });
  }

  const previewOpenCanvaBtn = document.getElementById('preview-open-canva');
  if (previewOpenCanvaBtn) {
    previewOpenCanvaBtn.addEventListener('click', () => {
      if (!state.activeTemplate) return;
      openCanvaModal(state.activeTemplate, state.activeSlides);
    });
  }

  const sideCanvaGuideBtn = document.getElementById('side-canva-guide');
  if (sideCanvaGuideBtn) {
    sideCanvaGuideBtn.addEventListener('click', () => {
      if (!state.activeTemplate) return;
      openCanvaModal(state.activeTemplate, state.activeSlides);
    });
  }

  ['side-download-pptx', 'pm-export-pptx'].forEach(id => {
    const btn = document.getElementById(id);
    if (btn) {
      btn.addEventListener('click', async () => {
        if (!state.activeTemplate) return;
        await handlePptxExport(btn, state.activeTemplate, state.activeSlides);
      });
    }
  });

  // Guarded keyboard navigation in previewer
  const INTERACTIVE_SELECTOR = 'input, textarea, select, button, [contenteditable="true"]';

  function isInteractiveFocus(target) {
    const active = document.activeElement;
    if (target && typeof target.closest === 'function' && target.closest(INTERACTIVE_SELECTOR)) {
      return true;
    }
    if (active && typeof active.closest === 'function' && active.closest(INTERACTIVE_SELECTOR)) {
      return true;
    }
    return false;
  }

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      // Close the top-most open modal first
      for (const modalId of MODAL_STACK_ORDER) {
        if (isModalOpen(modalId)) {
          closeModal(modalId);
          return;
        }
      }
      return;
    }

    // Only allow previewer shortcuts when preview-modal is open, no higher modal is open,
    // and focus/target is not inside an interactive form control or button.
    if (!isModalOpen('preview-modal')) return;
    if (isModalOpen('canva-modal') || isModalOpen('ai-modal') || isModalOpen('howto-modal')) return;
    if (isInteractiveFocus(e.target)) return;

    if (e.key === 'ArrowRight') {
      e.preventDefault();
      stepSlide(1);
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      stepSlide(-1);
    } else if (e.key === ' ') {
      e.preventDefault();
      toggleAutoplay();
    }
  });

  // ---------- AI Presentation Generator Modal ----------
  const aiSelect = document.getElementById('ai-template-select');
  const aiForm = document.getElementById('ai-form');
  const aiStatus = document.getElementById('ai-status');
  const aiSubmitBtn = document.getElementById('ai-submit-btn');

  function populateAITemplateSelect() {
    if (!aiSelect) return;
    aiSelect.innerHTML = TEMPLATES.map(t =>
      `<option value="${t.id}">[${t.subjectLabel}] ${t.title} (${t.slideCount} slides)</option>`
    ).join('');
  }

  function openAIModal(preselectId) {
    if (preselectId && aiSelect) aiSelect.value = preselectId;
    if (aiStatus) {
      aiStatus.classList.remove('visible');
      aiStatus.textContent = '';
    }
    if (aiSubmitBtn) aiSubmitBtn.disabled = false;
    openModal('ai-modal');
  }

  if (aiForm) {
    aiForm.addEventListener('submit', e => {
      e.preventDefault();
      const tpl = TEMPLATES.find(t => t.id === (aiSelect ? aiSelect.value : '')) || TEMPLATES[0];
      const promptEl = document.getElementById('ai-prompt');
      const titleEl = document.getElementById('ai-title');
      const studentEl = document.getElementById('ai-student');
      const classEl = document.getElementById('ai-class');
      const teacherEl = document.getElementById('ai-teacher');
      const countEl = document.getElementById('ai-slide-count');

      const promptVal = promptEl ? promptEl.value.trim() : '';
      const titleVal = (titleEl ? titleEl.value.trim() : '')
        || (promptVal.slice(0, 56) + (promptVal.length > 56 ? '…' : ''))
        || tpl.title;
      const studentVal = (studentEl ? studentEl.value.trim() : '') || 'Học sinh Fernora';
      const classVal = (classEl ? classEl.value.trim() : '') || 'Lớp 11A1';
      const teacherVal = (teacherEl ? teacherEl.value.trim() : '') || 'GVHD: Thầy/Cô bộ môn';
      const slideCount = Number(countEl ? countEl.value : 44) || 44;
      const chapterCount = getTemplateChapterCount(tpl);

      if (aiSubmitBtn) aiSubmitBtn.disabled = true;
      if (aiStatus) {
        aiStatus.classList.add('visible');
        aiStatus.textContent = `✦ Bước 1/3: AI đang phân tích đề bài và chia ${chapterCount} chương nội dung...`;
      }

      setTimeout(() => {
        if (aiStatus) {
          aiStatus.textContent = `✦ Bước 2/3: Đang dựng ${slideCount} bố cục slide chuẩn giáo viên và liên kết điểm neo Morph...`;
        }
      }, 550);

      setTimeout(() => {
        if (aiStatus) {
          aiStatus.textContent = '✦ Bước 3/3: Đang hoàn thiện bộ slide sẵn sàng trình chiếu & xuất Canva...';
        }
      }, 1150);

      setTimeout(() => {
        const generatedSlides = buildSlidesForTemplate(tpl, {
          title: titleVal,
          prompt: promptVal,
          student: studentVal,
          className: classVal,
          teacher: teacherVal,
          slideCount
        });
        if (aiSubmitBtn) aiSubmitBtn.disabled = false;
        closeModal('ai-modal');
        ensureWorkspaceVisible();
        openPreviewModal(tpl, generatedSlides, `${titleVal} (AI tạo)`);
        showToast(`AI đã tạo xong ${generatedSlides.length} slides chuẩn Morph!`);
      }, 1650);
    });
  }

  // ---------- Canva Integration Bridge Modal ----------
  const canvaSwatchesEl = document.getElementById('canva-swatches');
  const canvaSubEl = document.getElementById('canva-modal-sub');
  const canvaLaunchLink = document.getElementById('canva-launch-link');

  function openCanvaModal(template, slides) {
    state.canvaTemplate = template;
    state.canvaSlides = slides || getDefaultSlides(template);
    if (canvaSubEl) {
      canvaSubEl.textContent = `Bộ mẫu "${template.title}" (${state.canvaSlides.length} slides) sẵn sàng đưa sang Canva chỉnh sửa.`;
    }
    renderSwatches(canvaSwatchesEl, template.palette);
    if (canvaLaunchLink) {
      canvaLaunchLink.href = template.canvaUrl || 'https://www.canva.com/create/presentations/';
    }
    openModal('canva-modal');
  }

  if (canvaSwatchesEl) {
    canvaSwatchesEl.addEventListener('click', e => {
      const btn = e.target.closest('[data-hex]');
      if (btn) copyText(btn.getAttribute('data-hex'), btn.getAttribute('data-hex'));
    });
  }

  ['canva-download-btn', 'canva-download-pptx'].forEach(id => {
    const btn = document.getElementById(id);
    if (btn) {
      btn.addEventListener('click', async () => {
        if (!state.canvaTemplate || !state.canvaSlides) return;
        await handlePptxExport(btn, state.canvaTemplate, state.canvaSlides);
      });
    }
  });

  // ---------- Navigation Bindings (All Null-Guarded) ----------
  if (navTemplates) {
    navTemplates.addEventListener('click', e => {
      e.preventDefault();
      closeAllModals();
      scrollWorkspaceTop();
    });
  }

  if (navHome) {
    navHome.addEventListener('click', e => {
      e.preventDefault();
      closeAllModals();
      scrollWorkspaceTop();
    });
  }

  if (goBtn) {
    goBtn.addEventListener('click', e => {
      e.preventDefault();
      scrollWorkspaceTop();
    });
  }

  if (backToHeroBtn) {
    backToHeroBtn.addEventListener('click', e => {
      e.preventDefault();
      scrollWorkspaceTop();
    });
  }

  if (navHowto) {
    navHowto.addEventListener('click', e => {
      e.preventDefault();
      openModal('howto-modal');
    });
  }

  if (openHowtoBtn) {
    openHowtoBtn.addEventListener('click', () => {
      openModal('howto-modal');
    });
  }

  if (howtoStartBtn) {
    howtoStartBtn.addEventListener('click', () => {
      closeModal('howto-modal');
      ensureWorkspaceVisible();
      if (gridEl && typeof gridEl.scrollIntoView === 'function') {
        gridEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  }

  if (navCreate) {
    navCreate.addEventListener('click', e => {
      e.preventDefault();
      openAIModal();
    });
  }

  if (openAiHeroBtn) {
    openAiHeroBtn.addEventListener('click', () => {
      openAIModal();
    });
  }

  // ---------- Init ----------
  ensureWorkspaceVisible();
  syncDynamicCounts();
  populateAITemplateSelect();
  saveFavorites();
  renderFilterChips();
  renderTemplatesGrid();
})();
