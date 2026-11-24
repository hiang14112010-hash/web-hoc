/**
 * Fernora 16:9 Slide Renderer & Morph Engine
 * Renders 14 unique academic slide layouts + bespoke subject SVG illustrations
 * + interconnected Morph transition layers.
 */
(function (global) {
  'use strict';

  function esc(str) {
    return String(str == null ? '' : str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  /**
   * Generates crisp, subject-authentic vector art for covers and split-visual slides.
   */
  function renderMotifSVG(motif, palette) {
    const a1 = palette.accent;
    const a2 = palette.accent2;
    const ink = palette.ink;

    switch (motif) {
      case 'geometry':
        return `<svg viewBox="0 0 320 260" fill="none" xmlns="http://www.w3.org/2000/svg" class="motif-svg">
          <g stroke="${ink}" stroke-opacity="0.14" stroke-width="1">
            <line x1="20" y1="220" x2="300" y2="220"/><line x1="50" y1="20" x2="50" y2="245"/>
            <line x1="110" y1="20" x2="110" y2="245" stroke-dasharray="4 4"/>
            <line x1="190" y1="20" x2="190" y2="245" stroke-dasharray="4 4"/>
            <line x1="260" y1="20" x2="260" y2="245" stroke-dasharray="4 4"/>
          </g>
          <path d="M50 205 C 95 190, 125 65, 175 110 C 215 145, 245 55, 290 40" stroke="${a1}" stroke-width="3" stroke-linecap="round"/>
          <path d="M110 220 L110 135 C 138 90, 158 94, 190 120 L190 220 Z" fill="${a1}" fill-opacity="0.16"/>
          <polygon points="185,58 262,102 222,175 145,131" stroke="${a2}" stroke-width="2" fill="${a2}" fill-opacity="0.09"/>
          <circle cx="110" cy="135" r="5" fill="${a1}"/><circle cx="190" cy="120" r="5" fill="${a2}"/>
          <circle cx="262" cy="102" r="4" fill="${ink}" fill-opacity="0.5"/>
        </svg>`;

      case 'data':
        return `<svg viewBox="0 0 320 260" fill="none" xmlns="http://www.w3.org/2000/svg" class="motif-svg">
          <line x1="26" y1="215" x2="294" y2="215" stroke="${ink}" stroke-opacity="0.2" stroke-width="1.5"/>
          <path d="M34 214 C 82 212, 108 55, 160 55 C 212 55, 238 212, 286 214" stroke="${a1}" stroke-width="3" fill="${a1}" fill-opacity="0.12"/>
          <rect x="64" y="156" width="24" height="58" rx="4" fill="${a1}" fill-opacity="0.35"/>
          <rect x="104" y="114" width="24" height="100" rx="4" fill="${a1}" fill-opacity="0.55"/>
          <rect x="148" y="68" width="24" height="146" rx="4" fill="${a1}"/>
          <rect x="192" y="106" width="24" height="108" rx="4" fill="${a2}" fill-opacity="0.8"/>
          <rect x="232" y="148" width="24" height="66" rx="4" fill="${a2}" fill-opacity="0.45"/>
          <circle cx="160" cy="55" r="5.5" fill="${a2}"/>
        </svg>`;

      case 'matrix':
        return `<svg viewBox="0 0 320 260" fill="none" xmlns="http://www.w3.org/2000/svg" class="motif-svg">
          <path d="M56 42 H40 V218 H56" stroke="${a1}" stroke-width="3" stroke-linecap="round"/>
          <path d="M264 42 H280 V218 H264" stroke="${a1}" stroke-width="3" stroke-linecap="round"/>
          <rect x="74" y="62" width="44" height="36" rx="8" fill="${a1}" fill-opacity="0.18"/>
          <rect x="138" y="62" width="44" height="36" rx="8" fill="${a2}" fill-opacity="0.14"/>
          <rect x="202" y="62" width="44" height="36" rx="8" fill="${a1}" fill-opacity="0.12"/>
          <rect x="74" y="112" width="44" height="36" rx="8" fill="${a2}" fill-opacity="0.14"/>
          <rect x="138" y="112" width="44" height="36" rx="8" fill="${a1}" fill-opacity="0.85"/>
          <rect x="202" y="112" width="44" height="36" rx="8" fill="${a2}" fill-opacity="0.18"/>
          <rect x="74" y="162" width="44" height="36" rx="8" fill="${a1}" fill-opacity="0.12"/>
          <rect x="138" y="162" width="44" height="36" rx="8" fill="${a2}" fill-opacity="0.14"/>
          <rect x="202" y="162" width="44" height="36" rx="8" fill="${a2}" fill-opacity="0.72"/>
          <line x1="96" y1="80" x2="224" y2="180" stroke="${a2}" stroke-width="2" stroke-dasharray="5 5"/>
        </svg>`;

      case 'molecule':
        return `<svg viewBox="0 0 320 260" fill="none" xmlns="http://www.w3.org/2000/svg" class="motif-svg">
          <polygon points="130,68 182,98 182,158 130,188 78,158 78,98" stroke="${a1}" stroke-width="3" fill="${a1}" fill-opacity="0.09"/>
          <circle cx="130" cy="128" r="28" stroke="${a1}" stroke-width="1.8" stroke-dasharray="6 4"/>
          <line x1="182" y1="98" x2="238" y2="72" stroke="${a1}" stroke-width="2.5"/>
          <line x1="238" y1="72" x2="274" y2="112" stroke="${a2}" stroke-width="2.5"/>
          <line x1="182" y1="158" x2="232" y2="192" stroke="${a1}" stroke-width="2.5"/>
          <line x1="78" y1="98" x2="40" y2="74" stroke="${a2}" stroke-width="2.5"/>
          <circle cx="130" cy="68" r="8" fill="${a1}"/><circle cx="182" cy="98" r="8" fill="${a1}"/>
          <circle cx="182" cy="158" r="8" fill="${a1}"/><circle cx="130" cy="188" r="8" fill="${a1}"/>
          <circle cx="78" cy="158" r="8" fill="${a1}"/><circle cx="78" cy="98" r="8" fill="${a1}"/>
          <circle cx="238" cy="72" r="11" fill="${a2}"/><circle cx="274" cy="112" r="7" fill="${ink}" fill-opacity="0.45"/>
          <circle cx="232" cy="192" r="9" fill="${a2}" fill-opacity="0.8"/><circle cx="40" cy="74" r="9" fill="${a2}"/>
        </svg>`;

      case 'atom':
        return `<svg viewBox="0 0 320 260" fill="none" xmlns="http://www.w3.org/2000/svg" class="motif-svg">
          <ellipse cx="160" cy="130" rx="110" ry="42" stroke="${a1}" stroke-width="2" transform="rotate(28 160 130)"/>
          <ellipse cx="160" cy="130" rx="110" ry="42" stroke="${a2}" stroke-width="2" transform="rotate(-28 160 130)"/>
          <ellipse cx="160" cy="130" rx="110" ry="42" stroke="${ink}" stroke-opacity="0.28" stroke-width="1.6" transform="rotate(90 160 130)"/>
          <circle cx="160" cy="130" r="18" fill="${a1}"/>
          <circle cx="160" cy="130" r="30" fill="${a1}" fill-opacity="0.16"/>
          <circle cx="246" cy="176" r="6" fill="${a2}"/><circle cx="76" cy="84" r="6" fill="${a2}"/>
          <circle cx="160" cy="22" r="6" fill="${a1}"/>
        </svg>`;

      case 'helix':
        return `<svg viewBox="0 0 320 260" fill="none" xmlns="http://www.w3.org/2000/svg" class="motif-svg">
          <path d="M56 44 C 120 44, 120 130, 184 130 C 248 130, 248 216, 286 216" stroke="${a1}" stroke-width="3.5" stroke-linecap="round"/>
          <path d="M56 216 C 120 216, 120 130, 184 130 C 248 130, 248 44, 286 44" stroke="${a2}" stroke-width="3.5" stroke-linecap="round"/>
          <g stroke="${ink}" stroke-opacity="0.28" stroke-width="2">
            <line x1="74" y1="54" x2="74" y2="206"/><line x1="100" y1="74" x2="100" y2="186"/>
            <line x1="224" y1="90" x2="224" y2="170"/><line x1="252" y1="62" x2="252" y2="198"/>
          </g>
          <circle cx="74" cy="54" r="5" fill="${a1}"/><circle cx="74" cy="206" r="5" fill="${a2}"/>
          <circle cx="152" cy="130" r="7" fill="${a1}"/><circle cx="252" cy="62" r="5" fill="${a2}"/>
          <circle cx="252" cy="198" r="5" fill="${a1}"/>
        </svg>`;

      case 'botanical':
        return `<svg viewBox="0 0 320 260" fill="none" xmlns="http://www.w3.org/2000/svg" class="motif-svg">
          <path d="M160 232 C 158 168, 162 110, 174 36" stroke="${a1}" stroke-width="2.8" stroke-linecap="round"/>
          <path d="M162 192 C 110 184, 82 146, 98 112 C 126 116, 152 146, 162 192 Z" fill="${a1}" fill-opacity="0.22" stroke="${a1}" stroke-width="1.8"/>
          <path d="M165 152 C 216 144, 244 106, 228 74 C 198 78, 174 108, 165 152 Z" fill="${a1}" fill-opacity="0.32" stroke="${a1}" stroke-width="1.8"/>
          <path d="M168 112 C 126 102, 108 72, 126 48 C 148 54, 162 78, 168 112 Z" fill="${a2}" fill-opacity="0.26" stroke="${a2}" stroke-width="1.6"/>
          <circle cx="226" cy="186" r="24" stroke="${a2}" stroke-width="1.4" stroke-dasharray="4 4"/>
          <circle cx="90" cy="66" r="14" fill="${a2}" fill-opacity="0.16"/>
        </svg>`;

      case 'pulse':
        return `<svg viewBox="0 0 320 260" fill="none" xmlns="http://www.w3.org/2000/svg" class="motif-svg">
          <circle cx="160" cy="130" r="88" stroke="${a1}" stroke-opacity="0.18" stroke-width="1.5"/>
          <circle cx="160" cy="130" r="56" fill="${a1}" fill-opacity="0.09"/>
          <path d="M24 134 H96 L116 94 L142 184 L168 62 L192 152 L212 134 H296" stroke="${a1}" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"/>
          <circle cx="168" cy="62" r="5.5" fill="${a2}"/>
          <circle cx="142" cy="184" r="4.5" fill="${a1}"/>
        </svg>`;

      case 'wave':
        return `<svg viewBox="0 0 320 260" fill="none" xmlns="http://www.w3.org/2000/svg" class="motif-svg">
          <path d="M20 130 Q 60 52, 100 130 T 180 130 T 260 130 T 300 130" stroke="${a1}" stroke-width="3" fill="none"/>
          <path d="M20 130 Q 60 198, 100 130 T 180 130 T 260 130 T 300 130" stroke="${a2}" stroke-width="2.2" stroke-opacity="0.85" fill="none"/>
          <polygon points="130,68 190,188 70,188" stroke="${a1}" stroke-width="1.8" fill="${a1}" fill-opacity="0.09"/>
          <line x1="20" y1="130" x2="300" y2="130" stroke="${ink}" stroke-opacity="0.2" stroke-dasharray="4 4"/>
          <circle cx="100" cy="130" r="4.5" fill="${a1}"/><circle cx="180" cy="130" r="4.5" fill="${a2}"/>
        </svg>`;

      case 'orbit':
        return `<svg viewBox="0 0 320 260" fill="none" xmlns="http://www.w3.org/2000/svg" class="motif-svg">
          <circle cx="160" cy="130" r="98" stroke="${ink}" stroke-opacity="0.16" stroke-width="1.2"/>
          <ellipse cx="160" cy="130" rx="122" ry="48" stroke="${a1}" stroke-width="1.8" transform="rotate(-18 160 130)"/>
          <ellipse cx="160" cy="130" rx="74" ry="30" stroke="${a2}" stroke-width="1.5" stroke-dasharray="5 4" transform="rotate(14 160 130)"/>
          <circle cx="160" cy="130" r="24" fill="${a1}"/>
          <circle cx="160" cy="130" r="36" fill="${a1}" fill-opacity="0.16"/>
          <circle cx="268" cy="96" r="9" fill="${a2}"/>
          <circle cx="88" cy="112" r="5.5" fill="${ink}" fill-opacity="0.7"/>
        </svg>`;

      case 'circuit':
      case 'neural':
        return `<svg viewBox="0 0 320 260" fill="none" xmlns="http://www.w3.org/2000/svg" class="motif-svg">
          <g stroke="${a1}" stroke-opacity="0.45" stroke-width="1.8">
            <line x1="68" y1="74" x2="160" y2="56"/><line x1="68" y1="74" x2="160" y2="130"/>
            <line x1="68" y1="186" x2="160" y2="130"/><line x1="68" y1="186" x2="160" y2="204"/>
            <line x1="160" y1="56" x2="252" y2="104"/><line x1="160" y1="130" x2="252" y2="104"/>
            <line x1="160" y1="130" x2="252" y2="166"/><line x1="160" y1="204" x2="252" y2="166"/>
          </g>
          <circle cx="68" cy="74" r="11" fill="${a1}"/><circle cx="68" cy="186" r="11" fill="${a1}"/>
          <circle cx="160" cy="56" r="9" fill="${a2}"/><circle cx="160" cy="130" r="14" fill="${a1}"/>
          <circle cx="160" cy="204" r="9" fill="${a2}"/>
          <circle cx="252" cy="104" r="12" fill="${a2}"/><circle cx="252" cy="166" r="12" fill="${a1}"/>
        </svg>`;

      case 'heritage':
      case 'pillar':
      case 'archive':
        return `<svg viewBox="0 0 320 260" fill="none" xmlns="http://www.w3.org/2000/svg" class="motif-svg">
          <circle cx="160" cy="130" r="88" stroke="${a1}" stroke-width="2" stroke-opacity="0.5"/>
          <circle cx="160" cy="130" r="64" stroke="${a2}" stroke-width="1.6" stroke-dasharray="6 4"/>
          <circle cx="160" cy="130" r="38" fill="${a1}" fill-opacity="0.14" stroke="${a1}" stroke-width="2"/>
          <polygon points="160,64 170,118 224,130 170,142 160,196 150,142 96,130 150,118" fill="${a2}" fill-opacity="0.72"/>
          <line x1="40" y1="232" x2="280" y2="232" stroke="${ink}" stroke-opacity="0.22" stroke-width="1.5"/>
        </svg>`;

      case 'contour':
      case 'urban':
        return `<svg viewBox="0 0 320 260" fill="none" xmlns="http://www.w3.org/2000/svg" class="motif-svg">
          <path d="M36 168 C 52 94, 128 54, 202 72 C 268 88, 294 148, 256 196 C 218 242, 74 230, 36 168 Z" stroke="${a1}" stroke-width="2" fill="${a1}" fill-opacity="0.08"/>
          <path d="M74 160 C 86 112, 140 86, 192 98 C 236 108, 252 148, 226 180 C 198 212, 98 202, 74 160 Z" stroke="${a1}" stroke-width="1.8" fill="${a1}" fill-opacity="0.12"/>
          <path d="M114 152 C 122 126, 152 114, 182 122 C 206 128, 214 150, 198 168 C 182 184, 128 178, 114 152 Z" stroke="${a2}" stroke-width="2" fill="${a2}" fill-opacity="0.22"/>
          <circle cx="164" cy="146" r="5" fill="${a2}"/>
        </svg>`;

      default: // poetry / editorial
        return `<svg viewBox="0 0 320 260" fill="none" xmlns="http://www.w3.org/2000/svg" class="motif-svg">
          <rect x="64" y="34" width="192" height="192" rx="96" stroke="${a1}" stroke-width="1.8" fill="${a1}" fill-opacity="0.07"/>
          <path d="M92 174 C 132 152, 182 108, 228 66" stroke="${a1}" stroke-width="2.6" stroke-linecap="round"/>
          <path d="M228 66 C 204 72, 174 88, 152 114 C 176 114, 206 98, 228 66 Z" fill="${a2}" fill-opacity="0.38"/>
          <line x1="88" y1="196" x2="232" y2="196" stroke="${ink}" stroke-opacity="0.22" stroke-width="1.5"/>
          <line x1="114" y1="210" x2="206" y2="210" stroke="${ink}" stroke-opacity="0.16" stroke-width="1.5"/>
        </svg>`;
    }
  }

  /**
   * Generates CSS inline style variables for a template's palette.
   */
  function getPaletteStyle(palette) {
    return [
      `--s-bg:${palette.bg}`,
      `--s-surface:${palette.surface}`,
      `--s-surface-alt:${palette.surfaceAlt}`,
      `--s-ink:${palette.ink}`,
      `--s-muted:${palette.muted}`,
      `--s-accent:${palette.accent}`,
      `--s-accent2:${palette.accent2}`,
      `--s-soft:${palette.soft}`
    ].join(';');
  }

  /**
   * Renders the inner content HTML for a specific slide layout.
   */
  function renderSlideContentHTML(template, slide, totalSlides) {
    const p = template.palette;
    const numStr = String(slide.number).padStart(2, '0');
    const totalStr = String(totalSlides).padStart(2, '0');
    const footer = `
      <div class="sl-foot">
        <span class="sl-foot-brand">${esc(template.subjectLabel)} · ${esc(slide.chapterName)}</span>
        <span class="sl-foot-num">${numStr} / ${totalStr}</span>
      </div>`;

    switch (slide.layout) {
      case 'cover':
        return `
          <div class="sl-inner sl-cover">
            <div class="sl-cover-left">
              <div class="sl-kicker">${esc(slide.kicker)}</div>
              <h2 class="sl-cover-title">${esc(slide.title)}</h2>
              <p class="sl-cover-sub">${esc(slide.subtitle)}</p>
              <div class="sl-meta-row">
                ${(slide.meta || []).map(m => `<span class="sl-meta-chip">${esc(m)}</span>`).join('')}
              </div>
            </div>
            <div class="sl-cover-right">
              <div class="sl-visual-card">${renderMotifSVG(template.motif, p)}</div>
            </div>
          </div>`;

      case 'agenda':
        return `
          <div class="sl-inner sl-agenda">
            <div class="sl-agenda-head">
              <div class="sl-kicker">${esc(slide.kicker)}</div>
              <h2 class="sl-h2">${esc(slide.title)}</h2>
              <div class="sl-mini-art">${renderMotifSVG(template.motif, p)}</div>
            </div>
            <div class="sl-agenda-list">
              ${(slide.items || []).map(it => `
                <div class="sl-agenda-item">
                  <span class="sl-agenda-num">${esc(it.num)}</span>
                  <div>
                    <div class="sl-agenda-title">${esc(it.title)}</div>
                    <div class="sl-agenda-desc">${esc(it.desc)}</div>
                  </div>
                </div>`).join('')}
            </div>
            ${footer}
          </div>`;

      case 'objectives':
        return `
          <div class="sl-inner sl-objectives">
            <div class="sl-head-block">
              <div class="sl-kicker">${esc(slide.kicker)}</div>
              <h2 class="sl-h2">${esc(slide.title)}</h2>
            </div>
            <div class="sl-obj-grid">
              ${(slide.cards || []).map(c => `
                <div class="sl-card">
                  <div class="sl-card-num">${esc(c.num)}</div>
                  <div class="sl-card-title">${esc(c.title)}</div>
                  <p class="sl-card-body">${esc(c.body)}</p>
                </div>`).join('')}
            </div>
            ${footer}
          </div>`;

      case 'section-break':
        return `
          <div class="sl-inner sl-section-break">
            <div class="sl-big-num">${esc(slide.bigNum)}</div>
            <div class="sl-kicker">${esc(slide.kicker)}</div>
            <h2 class="sl-break-title">${esc(slide.title)}</h2>
            <p class="sl-break-sub">${esc(slide.subtitle)}</p>
            ${footer}
          </div>`;

      case 'split-visual':
        return `
          <div class="sl-inner sl-split">
            <div class="sl-split-text">
              <div class="sl-kicker">${esc(slide.kicker)}</div>
              <h2 class="sl-h2">${esc(slide.title)}</h2>
              <p class="sl-lead">${esc(slide.lead)}</p>
              <ul class="sl-bullets">
                ${(slide.bullets || []).map(b => `<li><span></span>${esc(b)}</li>`).join('')}
              </ul>
            </div>
            <div class="sl-split-vis">
              <div class="sl-visual-card">
                ${renderMotifSVG(template.motif, p)}
                <div class="sl-vis-cap">${esc(slide.visualCaption)}</div>
              </div>
            </div>
            ${footer}
          </div>`;

      case 'formula-spotlight':
        return `
          <div class="sl-inner sl-formula">
            <div class="sl-head-block">
              <div class="sl-kicker">${esc(slide.kicker)}</div>
              <h2 class="sl-h2">${esc(slide.title)}</h2>
            </div>
            <div class="sl-formula-box">
              <div class="sl-formula-text">${esc(slide.formula)}</div>
            </div>
            <div class="sl-annot-row">
              ${(slide.annotations || []).map(a => `
                <div class="sl-annot">
                  <span class="sl-annot-tag">${esc(a.tag)}</span>
                  <p>${esc(a.text)}</p>
                </div>`).join('')}
            </div>
            ${footer}
          </div>`;

      case 'data-chart':
        return `
          <div class="sl-inner sl-chart">
            <div class="sl-head-block">
              <div class="sl-kicker">${esc(slide.kicker)}</div>
              <h2 class="sl-h2">${esc(slide.title)}</h2>
            </div>
            <div class="sl-chart-body">
              <div class="sl-bars">
                ${(slide.bars || []).map(b => `
                  <div class="sl-bar-row">
                    <div class="sl-bar-top"><span>${esc(b.label)}</span><strong>${b.val}%</strong></div>
                    <div class="sl-bar-track"><div class="sl-bar-fill" style="width:${b.val}%"></div></div>
                  </div>`).join('')}
              </div>
              <div class="sl-insight-card">
                <div class="sl-card-tag">${esc(slide.insightTitle)}</div>
                <p class="sl-card-body">${esc(slide.insightBody)}</p>
              </div>
            </div>
            ${footer}
          </div>`;

      case 'timeline':
        return `
          <div class="sl-inner sl-timeline">
            <div class="sl-head-block">
              <div class="sl-kicker">${esc(slide.kicker)}</div>
              <h2 class="sl-h2">${esc(slide.title)}</h2>
            </div>
            <div class="sl-tl-track">
              ${(slide.steps || []).map(st => `
                <div class="sl-tl-node">
                  <div class="sl-tl-dot">${esc(st.step)}</div>
                  <div class="sl-tl-title">${esc(st.title)}</div>
                  <p class="sl-tl-desc">${esc(st.desc)}</p>
                </div>`).join('')}
            </div>
            ${footer}
          </div>`;

      case 'comparison':
        return `
          <div class="sl-inner sl-compare">
            <div class="sl-head-block">
              <div class="sl-kicker">${esc(slide.kicker)}</div>
              <h2 class="sl-h2">${esc(slide.title)}</h2>
            </div>
            <div class="sl-cmp-grid">
              <div class="sl-cmp-col">
                <div class="sl-cmp-head">${esc(slide.leftTitle)}</div>
                <ul class="sl-bullets">
                  ${(slide.leftPoints || []).map(pt => `<li><span></span>${esc(pt)}</li>`).join('')}
                </ul>
              </div>
              <div class="sl-cmp-col sl-cmp-alt">
                <div class="sl-cmp-head">${esc(slide.rightTitle)}</div>
                <ul class="sl-bullets">
                  ${(slide.rightPoints || []).map(pt => `<li><span></span>${esc(pt)}</li>`).join('')}
                </ul>
              </div>
            </div>
            ${footer}
          </div>`;

      case 'bento-grid':
        return `
          <div class="sl-inner sl-bento">
            <div class="sl-head-block">
              <div class="sl-kicker">${esc(slide.kicker)}</div>
              <h2 class="sl-h2">${esc(slide.title)}</h2>
            </div>
            <div class="sl-bento-grid">
              ${(slide.cards || []).map((c, idx) => `
                <div class="sl-card ${idx === 0 ? 'sl-card-lead' : ''}">
                  <div class="sl-card-tag">${esc(c.tag)}</div>
                  <div class="sl-card-title">${esc(c.title)}</div>
                  <p class="sl-card-body">${esc(c.body)}</p>
                </div>`).join('')}
            </div>
            ${footer}
          </div>`;

      case 'process-flow':
        return `
          <div class="sl-inner sl-process">
            <div class="sl-head-block">
              <div class="sl-kicker">${esc(slide.kicker)}</div>
              <h2 class="sl-h2">${esc(slide.title)}</h2>
            </div>
            <div class="sl-proc-row">
              ${(slide.steps || []).map((st, idx) => `
                <div class="sl-proc-card">
                  <div class="sl-proc-num">Bước ${idx + 1}</div>
                  <div class="sl-card-title">${esc(st.title)}</div>
                  <p class="sl-card-body">${esc(st.desc)}</p>
                </div>`).join('')}
            </div>
            ${footer}
          </div>`;

      case 'quote-focus':
        return `
          <div class="sl-inner sl-quote">
            <div class="sl-kicker">${esc(slide.kicker)}</div>
            <div class="sl-quote-mark">“</div>
            <blockquote class="sl-quote-text">${esc(slide.quote)}</blockquote>
            <div class="sl-quote-author">— ${esc(slide.author)}</div>
            <p class="sl-quote-note">${esc(slide.note)}</p>
            ${footer}
          </div>`;

      case 'quiz-check':
        return `
          <div class="sl-inner sl-quiz">
            <div class="sl-head-block">
              <div class="sl-kicker">${esc(slide.kicker)}</div>
              <h2 class="sl-h2">${esc(slide.title)}</h2>
            </div>
            <div class="sl-quiz-grid">
              ${(slide.options || []).map((opt, idx) => {
                const letter = ['A', 'B', 'C', 'D'][idx] || 'A';
                const isRight = idx === slide.answer;
                return `
                  <div class="sl-quiz-opt ${isRight ? 'is-answer' : ''}">
                    <span class="sl-quiz-letter">${letter}</span>
                    <span>${esc(opt)}</span>
                  </div>`;
              }).join('')}
            </div>
            ${footer}
          </div>`;

      default: // summary-closing
        return `
          <div class="sl-inner sl-closing">
            <div class="sl-kicker">${esc(slide.kicker)}</div>
            <h2 class="sl-closing-title">${esc(slide.title)}</h2>
            <p class="sl-closing-sub">${esc(slide.subtitle)}</p>
            <div class="sl-closing-note">${esc(slide.note)}</div>
            ${footer}
          </div>`;
    }
  }

  /**
   * Renders a self-contained static slide canvas (used for template cards & thumbnails).
   */
  function renderStaticSlideHTML(template, slide, totalSlides) {
    const m = slide.morph;
    return `
      <div class="slide-canvas" style="${getPaletteStyle(template.palette)}">
        <div class="morph-layer" aria-hidden="true">
          <div class="morph-orb morph-orb-1" style="left:${m.orb1.x}%;top:${m.orb1.y}%;width:${m.orb1.size}%;height:${m.orb1.size * 1.45}%;border-radius:${m.orb1.radius};opacity:${m.orb1.opacity};transform:translate(-50%,-50%) rotate(${m.orb1.rot}deg)"></div>
          <div class="morph-orb morph-orb-2" style="left:${m.orb2.x}%;top:${m.orb2.y}%;width:${m.orb2.size}%;height:${m.orb2.size * 1.45}%;border-radius:${m.orb2.radius};opacity:${m.orb2.opacity};transform:translate(-50%,-50%) rotate(${m.orb2.rot}deg)"></div>
          <div class="morph-frame" style="left:${m.frame.x}%;top:${m.frame.y}%;width:${m.frame.w}%;height:${m.frame.h}%;border-radius:${m.frame.radius};opacity:${m.frame.opacity}"></div>
          <div class="morph-ribbon" style="left:${m.ribbon.x}%;top:${m.ribbon.y}%;width:${m.ribbon.w}%;opacity:${m.ribbon.opacity}"></div>
        </div>
        <div class="slide-content-layer">${renderSlideContentHTML(template, slide, totalSlides)}</div>
      </div>`;
  }

  /**
   * Updates the persistent interactive Morph stage when moving between slides.
   */
  function updateMorphStage(stageEl, template, slide, totalSlides, morphEnabled) {
    stageEl.setAttribute('style', getPaletteStyle(template.palette));
    stageEl.classList.toggle('morph-off', !morphEnabled);

    const m = slide.morph;
    const orb1 = stageEl.querySelector('.morph-orb-1');
    const orb2 = stageEl.querySelector('.morph-orb-2');
    const frame = stageEl.querySelector('.morph-frame');
    const ribbon = stageEl.querySelector('.morph-ribbon');
    const contentLayer = stageEl.querySelector('.slide-content-layer');

    if (orb1) {
      orb1.style.left = `${m.orb1.x}%`;
      orb1.style.top = `${m.orb1.y}%`;
      orb1.style.width = `${m.orb1.size}%`;
      orb1.style.height = `${m.orb1.size * 1.45}%`;
      orb1.style.borderRadius = m.orb1.radius;
      orb1.style.opacity = String(m.orb1.opacity);
      orb1.style.transform = `translate(-50%,-50%) rotate(${m.orb1.rot}deg)`;
    }
    if (orb2) {
      orb2.style.left = `${m.orb2.x}%`;
      orb2.style.top = `${m.orb2.y}%`;
      orb2.style.width = `${m.orb2.size}%`;
      orb2.style.height = `${m.orb2.size * 1.45}%`;
      orb2.style.borderRadius = m.orb2.radius;
      orb2.style.opacity = String(m.orb2.opacity);
      orb2.style.transform = `translate(-50%,-50%) rotate(${m.orb2.rot}deg)`;
    }
    if (frame) {
      frame.style.left = `${m.frame.x}%`;
      frame.style.top = `${m.frame.y}%`;
      frame.style.width = `${m.frame.w}%`;
      frame.style.height = `${m.frame.h}%`;
      frame.style.borderRadius = m.frame.radius;
      frame.style.opacity = String(m.frame.opacity);
    }
    if (ribbon) {
      ribbon.style.left = `${m.ribbon.x}%`;
      ribbon.style.top = `${m.ribbon.y}%`;
      ribbon.style.width = `${m.ribbon.w}%`;
      ribbon.style.opacity = String(m.ribbon.opacity);
    }

    if (contentLayer) {
      contentLayer.classList.remove('is-entering');
      contentLayer.innerHTML = renderSlideContentHTML(template, slide, totalSlides);
      // Trigger smooth Morph content settle
      void contentLayer.offsetWidth;
      contentLayer.classList.add('is-entering');
    }
  }

  global.FERNORA_RENDERER = {
    renderStaticSlideHTML,
    updateMorphStage,
    renderMotifSVG
  };
})(window);
