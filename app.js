/**
 * Fernora Application Controller
 * Coordinates:
 *  - Smooth Hero <-> Slide Templates transition (Bottom Floral Horizon first -> Content second)
 *  - Canva-like Template Discovery (Search, Subject Tabs, Purpose Filters, Sort, Favorites)
 *  - Interactive 40+ Slide Morph Previewer (Keyboard, Filmstrip, Auto-play, Fullscreen)
 *  - AI Presentation Generator Studio
 *  - Canva Integration Bridge & Real .pptx Export
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
    toastTimer = setTimeout(() => el.classList.remove('is-shown'), 2600);
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

  // ---------- State ----------
  const STORAGE_KEY = 'fernora_favorites_v1';
  const state = {
    view: 'hero',
    subject: 'all',
    purpose: 'all',
    query: '',
    sort: 'popular',
    onlyFavs: false,
    favorites: new Set(JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')),
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
      // Ignore storage quota errors
    }
    const countEl = document.getElementById('fav-count');
    if (countEl) countEl.textContent = String(state.favorites.size);
  }

  // ---------- View Transitions (Bottom Floral First -> Content Second) ----------
  const templatesView = document.getElementById('templates-view');
  const navTemplates = document.getElementById('nav-templates');
  const navHome = document.getElementById('nav-home');
  const navHowto = document.getElementById('nav-howto');
  const navCreate = document.getElementById('nav-create');
  const goBtn = document.getElementById('go');

  function showTemplatesView(updateHash = true) {
    if (state.view === 'templates') return;
    state.view = 'templates';
    document.body.classList.add('view-templates');
    templatesView.setAttribute('aria-hidden', 'false');
    navTemplates.classList.add('is-active');
    if (window.__fernoraValley && typeof window.__fernoraValley.stopHoverTransition === 'function') {
      window.__fernoraValley.stopHoverTransition();
    }
    if (updateHash && window.location.hash !== '#mau-slide') {
      history.pushState(null, '', '#mau-slide');
    }
    templatesView.scrollTop = 0;
  }

  function showHeroView(updateHash = true) {
    if (state.view === 'hero') return;
    state.view = 'hero';
    document.body.classList.remove('view-templates');
    templatesView.setAttribute('aria-hidden', 'true');
    navTemplates.classList.remove('is-active');
    if (updateHash && window.location.hash === '#mau-slide') {
      history.pushState(null, '', '#home');
    }
  }

  // ---------- Modals ----------
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
    ['preview-modal', 'ai-modal', 'canva-modal', 'howto-modal'].forEach(closeModal);
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

  function renderFilterChips() {
    // Subject tabs
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

    // Purpose chips
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
          ...t.purposeLabels,
          ...t.chapters,
          ...t.topics
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

  // Hover slide-peek intervals per card
  const peekTimers = new WeakMap();

  function renderTemplatesGrid() {
    const list = getFilteredTemplates();
    const totalSlidesShown = list.reduce((sum, t) => sum + t.slideCount, 0);
    resultsSummary.innerHTML = `Đang hiển thị <strong>${list.length}</strong> / ${TEMPLATES.length} bộ mẫu (${totalSlidesShown} slides sẵn sàng)`;

    if (list.length === 0) {
      gridEl.innerHTML = `
        <div class="empty-state">
          <h3>Chưa tìm thấy bộ mẫu phù hợp</h3>
          <p>Thử đổi từ khóa tìm kiếm hoặc đặt lại bộ lọc môn học và mục đích.</p>
          <button type="button" class="btn-cream" id="reset-filters-btn">Xem lại toàn bộ 20 bộ mẫu</button>
        </div>`;
      const resetBtn = document.getElementById('reset-filters-btn');
      if (resetBtn) {
        resetBtn.addEventListener('click', () => {
          state.subject = 'all';
          state.purpose = 'all';
          state.query = '';
          state.onlyFavs = false;
          searchInput.value = '';
          searchClear.classList.remove('visible');
          favFilterBtn.classList.remove('is-active');
          favFilterBtn.setAttribute('aria-pressed', 'false');
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
            <div class="tpl-slide-slot">${renderStaticSlideHTML(tpl, coverSlide, deck.length)}</div>
            <div class="tpl-hover-overlay">
              <div class="tpl-peek-dots">
                <span class="active"></span><span></span><span></span><span></span>
              </div>
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
              ${tpl.purposeLabels.map(l => `<span class="tpl-purpose-tag">${l}</span>`).join('')}
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

    // Attach smooth hover slide-peek cycling on each card preview
    gridEl.querySelectorAll('.tpl-preview-wrap').forEach(wrap => {
      const id = wrap.getAttribute('data-tpl-id');
      const tpl = TEMPLATES.find(t => t.id === id);
      if (!tpl) return;
      const deck = getDefaultSlides(tpl);
      const peekIndices = [0, 5, 6, 8]; // Cover, Split Visual, Formula, Data Chart
      const slot = wrap.querySelector('.tpl-slide-slot');
      const dots = wrap.querySelectorAll('.tpl-peek-dots span');

      wrap.addEventListener('pointerenter', () => {
        let step = 0;
        const timer = setInterval(() => {
          step = (step + 1) % peekIndices.length;
          const slide = deck[peekIndices[step]] || deck[0];
          slot.innerHTML = renderStaticSlideHTML(tpl, slide, deck.length);
          dots.forEach((d, idx) => d.classList.toggle('active', idx === step));
        }, 1250);
        peekTimers.set(wrap, timer);
      });

      wrap.addEventListener('pointerleave', () => {
        const timer = peekTimers.get(wrap);
        if (timer) clearInterval(timer);
        peekTimers.delete(wrap);
        slot.innerHTML = renderStaticSlideHTML(tpl, deck[0], deck.length);
        dots.forEach((d, idx) => d.classList.toggle('active', idx === 0));
      });
    });
  }

  // Delegate filter clicks
  subjectTabsEl.addEventListener('click', e => {
    const btn = e.target.closest('[data-subject]');
    if (!btn) return;
    state.subject = btn.getAttribute('data-subject');
    renderFilterChips();
    renderTemplatesGrid();
  });

  purposeTabsEl.addEventListener('click', e => {
    const btn = e.target.closest('[data-purpose]');
    if (!btn) return;
    state.purpose = btn.getAttribute('data-purpose');
    renderFilterChips();
    renderTemplatesGrid();
  });

  searchInput.addEventListener('input', () => {
    state.query = searchInput.value;
    searchClear.classList.toggle('visible', state.query.length > 0);
    renderTemplatesGrid();
  });

  searchClear.addEventListener('click', () => {
    state.query = '';
    searchInput.value = '';
    searchClear.classList.remove('visible');
    searchInput.focus();
    renderTemplatesGrid();
  });

  sortSelect.addEventListener('change', () => {
    state.sort = sortSelect.value;
    renderTemplatesGrid();
  });

  favFilterBtn.addEventListener('click', () => {
    state.onlyFavs = !state.onlyFavs;
    favFilterBtn.classList.toggle('is-active', state.onlyFavs);
    favFilterBtn.setAttribute('aria-pressed', String(state.onlyFavs));
    renderTemplatesGrid();
  });

  document.getElementById('quick-tags').addEventListener('click', e => {
    const tag = e.target.closest('[data-query]');
    if (!tag) return;
    const q = tag.getAttribute('data-query');
    state.query = q;
    searchInput.value = q;
    searchClear.classList.add('visible');
    renderTemplatesGrid();
  });

  // Delegate card actions
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
    const swatches = [
      { label: 'Nền', hex: palette.bg },
      { label: 'Chính', hex: palette.accent },
      { label: 'Phụ', hex: palette.accent2 },
      { label: 'Chữ', hex: palette.ink }
    ];
    container.innerHTML = swatches.map(sw => `
      <button type="button" class="swatch-btn" data-hex="${sw.hex}" title="Sao chép ${sw.hex}">
        <i style="background:${sw.hex}"></i>
        <span>${sw.hex.toUpperCase()}</span>
      </button>`).join('');
  }

  function renderCurrentSlide() {
    if (!state.activeTemplate || !state.activeSlides.length) return;
    const slide = state.activeSlides[state.activeIndex];
    updateMorphStage(morphStageEl, state.activeTemplate, slide, state.activeSlides.length, state.morphEnabled);

    const cur = String(state.activeIndex + 1).padStart(2, '0');
    const tot = String(state.activeSlides.length).padStart(2, '0');
    slideCounterEl.textContent = `${cur} / ${tot}`;

    filmstripEl.querySelectorAll('.thumb-item').forEach((item, idx) => {
      const isCur = idx === state.activeIndex;
      item.classList.toggle('is-current', isCur);
      if (isCur) {
        item.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
      }
    });
  }

  function openPreviewModal(template, slides, customLabel) {
    stopAutoplay();
    state.activeTemplate = template;
    state.activeSlides = slides;
    state.activeIndex = 0;

    previewTitleEl.textContent = customLabel || template.title;
    previewSubEl.textContent = `${template.subjectLabel} · ${slides.length} slides · ${template.styleTag} · Chuyển cảnh Morph`;
    sideDescEl.textContent = template.description;
    sideSpecsEl.innerHTML = `
      <strong>Đánh giá độ dễ đọc:</strong> ${template.teacherScore}<br>
      <strong>Số lượng slide:</strong> ${slides.length} trang (5 chương)<br>
      <strong>Bộ chữ:</strong> ${template.fonts.display} &amp; ${template.fonts.body}<br>
      <strong>Tương thích:</strong> Trình chiếu Morph &amp; Nhập trực tiếp vào Canva (.pptx)
    `;
    renderSwatches(sideSwatchesEl, template.palette);

    // Build all 40+ thumbnails in the filmstrip
    filmstripEl.innerHTML = slides.map((sl, idx) => `
      <button type="button" class="thumb-item ${idx === 0 ? 'is-current' : ''}" data-slide-index="${idx}">
        <div class="thumb-box">${renderStaticSlideHTML(template, sl, slides.length)}</div>
        <span class="thumb-label">${String(idx + 1).padStart(2, '0')}. ${sl.title || sl.chapterName}</span>
      </button>`).join('');

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
    toggleAutoplayBtn.classList.remove('is-active');
    toggleAutoplayBtn.setAttribute('aria-pressed', 'false');
    toggleAutoplayBtn.textContent = '▶ Tự chạy';
  }

  function toggleAutoplay() {
    if (state.autoplayTimer) {
      stopAutoplay();
      return;
    }
    toggleAutoplayBtn.classList.add('is-active');
    toggleAutoplayBtn.setAttribute('aria-pressed', 'true');
    toggleAutoplayBtn.textContent = '❚❚ Tạm dừng';
    state.autoplayTimer = setInterval(() => stepSlide(1), 2300);
  }

  document.getElementById('slide-prev').addEventListener('click', () => stepSlide(-1));
  document.getElementById('slide-next').addEventListener('click', () => stepSlide(1));
  toggleAutoplayBtn.addEventListener('click', toggleAutoplay);

  toggleMorphBtn.addEventListener('click', () => {
    state.morphEnabled = !state.morphEnabled;
    toggleMorphBtn.classList.toggle('is-active', state.morphEnabled);
    toggleMorphBtn.setAttribute('aria-pressed', String(state.morphEnabled));
    toggleMorphBtn.textContent = state.morphEnabled ? '✦ Morph: Bật' : '✦ Morph: Tắt';
    renderCurrentSlide();
  });

  document.getElementById('toggle-fullscreen').addEventListener('click', () => {
    const stageFrame = morphStageEl.closest('.stage-frame');
    if (!stageFrame) return;
    if (!document.fullscreenElement) {
      stageFrame.requestFullscreen().catch(() => showToast('Trình duyệt không hỗ trợ toàn màn hình'));
    } else {
      document.exitFullscreen().catch(() => {});
    }
  });

  filmstripEl.addEventListener('click', e => {
    const item = e.target.closest('[data-slide-index]');
    if (!item) return;
    state.activeIndex = Number(item.getAttribute('data-slide-index'));
    renderCurrentSlide();
  });

  sideSwatchesEl.addEventListener('click', e => {
    const btn = e.target.closest('[data-hex]');
    if (btn) copyText(btn.getAttribute('data-hex'), btn.getAttribute('data-hex'));
  });

  document.getElementById('preview-use-ai').addEventListener('click', () => {
    const tplId = state.activeTemplate ? state.activeTemplate.id : TEMPLATES[0].id;
    closeModal('preview-modal');
    openAIModal(tplId);
  });

  document.getElementById('preview-open-canva').addEventListener('click', () => {
    if (!state.activeTemplate) return;
    openCanvaModal(state.activeTemplate, state.activeSlides);
  });

  document.getElementById('side-canva-guide').addEventListener('click', () => {
    if (!state.activeTemplate) return;
    openCanvaModal(state.activeTemplate, state.activeSlides);
  });

  document.getElementById('side-download-pptx').addEventListener('click', () => {
    if (!state.activeTemplate) return;
    exportDeckToPPTX(state.activeTemplate, state.activeSlides);
    showToast(`Đã tải xuống tệp .pptx (${state.activeSlides.length} slides) sẵn sàng nhập vào Canva!`);
  });

  // Keyboard navigation in previewer
  document.addEventListener('keydown', e => {
    const previewOpen = document.getElementById('preview-modal').classList.contains('is-open');
    if (e.key === 'Escape') {
      closeAllModals();
      return;
    }
    if (!previewOpen) return;
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
    aiSelect.innerHTML = TEMPLATES.map(t =>
      `<option value="${t.id}">[${t.subjectLabel}] ${t.title} (${t.slideCount} slides)</option>`
    ).join('');
  }

  function openAIModal(preselectId) {
    if (preselectId) aiSelect.value = preselectId;
    aiStatus.classList.remove('visible');
    aiStatus.textContent = '';
    aiSubmitBtn.disabled = false;
    openModal('ai-modal');
  }

  aiForm.addEventListener('submit', e => {
    e.preventDefault();
    const tpl = TEMPLATES.find(t => t.id === aiSelect.value) || TEMPLATES[0];
    const promptVal = document.getElementById('ai-prompt').value.trim();
    const titleVal = document.getElementById('ai-title').value.trim() || (promptVal.slice(0, 56) + (promptVal.length > 56 ? '…' : '')) || tpl.title;
    const studentVal = document.getElementById('ai-student').value.trim() || 'Học sinh Fernora';
    const classVal = document.getElementById('ai-class').value.trim() || 'Lớp 11A1';
    const teacherVal = document.getElementById('ai-teacher').value.trim() || 'GVHD: Thầy/Cô bộ môn';
    const slideCount = Number(document.getElementById('ai-slide-count').value) || 44;

    aiSubmitBtn.disabled = true;
    aiStatus.classList.add('visible');
    aiStatus.textContent = '✦ Bước 1/3: AI đang phân tích đề bài và chia 5 chương nội dung...';

    setTimeout(() => {
      aiStatus.textContent = `✦ Bước 2/3: Đang dựng ${slideCount} bố cục slide chuẩn giáo viên và liên kết điểm neo Morph...`;
    }, 550);

    setTimeout(() => {
      aiStatus.textContent = '✦ Bước 3/3: Đang hoàn thiện bộ slide sẵn sàng trình chiếu & xuất Canva...';
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
      aiSubmitBtn.disabled = false;
      closeModal('ai-modal');
      showTemplatesView(true);
      openPreviewModal(tpl, generatedSlides, `${titleVal} (AI tạo)`);
      showToast(`AI đã tạo xong ${generatedSlides.length} slides chuẩn Morph!`);
    }, 1650);
  });

  // ---------- Canva Integration Bridge Modal ----------
  const canvaSwatchesEl = document.getElementById('canva-swatches');
  const canvaSubEl = document.getElementById('canva-modal-sub');
  const canvaDownloadBtn = document.getElementById('canva-download-btn');
  const canvaLaunchLink = document.getElementById('canva-launch-link');

  function openCanvaModal(template, slides) {
    state.canvaTemplate = template;
    state.canvaSlides = slides || getDefaultSlides(template);
    canvaSubEl.textContent = `Bộ mẫu "${template.title}" (${state.canvaSlides.length} slides) sẵn sàng đưa sang Canva chỉnh sửa.`;
    renderSwatches(canvaSwatchesEl, template.palette);
    canvaLaunchLink.href = template.canvaUrl || 'https://www.canva.com/create/presentations/';
    openModal('canva-modal');
  }

  canvaSwatchesEl.addEventListener('click', e => {
    const btn = e.target.closest('[data-hex]');
    if (btn) copyText(btn.getAttribute('data-hex'), btn.getAttribute('data-hex'));
  });

  canvaDownloadBtn.addEventListener('click', () => {
    if (!state.canvaTemplate || !state.canvaSlides) return;
    exportDeckToPPTX(state.canvaTemplate, state.canvaSlides);
    showToast(`Đã xuất ${state.canvaSlides.length} slides (.pptx) — hãy kéo thả vào Canva!`);
  });

  // ---------- Navigation Bindings ----------
  navTemplates.addEventListener('click', e => {
    e.preventDefault();
    showTemplatesView(true);
  });

  goBtn.addEventListener('click', e => {
    e.preventDefault();
    showTemplatesView(true);
  });

  navHome.addEventListener('click', e => {
    e.preventDefault();
    closeAllModals();
    showHeroView(true);
  });

  document.getElementById('back-to-hero').addEventListener('click', () => {
    showHeroView(true);
  });

  navHowto.addEventListener('click', e => {
    e.preventDefault();
    openModal('howto-modal');
  });

  document.getElementById('howto-start-btn').addEventListener('click', () => {
    closeModal('howto-modal');
    showTemplatesView(true);
  });

  navCreate.addEventListener('click', e => {
    e.preventDefault();
    openAIModal();
  });

  document.getElementById('open-ai-hero').addEventListener('click', () => {
    openAIModal();
  });

  window.addEventListener('popstate', () => {
    if (window.location.hash === '#mau-slide') {
      showTemplatesView(false);
    } else {
      showHeroView(false);
    }
  });

  // ---------- Init ----------
  populateAITemplateSelect();
  saveFavorites();
  renderFilterChips();
  renderTemplatesGrid();

  if (window.location.hash === '#mau-slide') {
    showTemplatesView(false);
  }
})();
