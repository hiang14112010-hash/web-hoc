/**
 * Fernora 16:9 Editorial Slide Renderer & Morph Engine
 * Renders 20 human-crafted editorial slide layouts, 4 surface-polarity tones
 * (light / dark / accent / photo), lazy web-sourced media frames with bespoke
 * vector fallback (zero broken images), 19 distinct multi-layered SVG motifs,
 * and interconnected Morph transition layers.
 */
(function (global) {
  'use strict';

  const VALID_TONES = { light: 1, dark: 1, accent: 1, photo: 1 };
  const TONE_CLASSES = ['tone-light', 'tone-dark', 'tone-accent', 'tone-photo'];
  const POLARITY_CLASSES = ['deck-dark', 'deck-light', 'accent-is-light', 'accent-is-dark'];

  const DEFAULT_PALETTE = {
    bg: '#f7f4ec',
    surface: '#ffffff',
    surfaceAlt: '#ede8dc',
    ink: '#171d24',
    muted: '#58626e',
    accent: '#1f4e79',
    accent2: '#c58b2a',
    soft: 'rgba(31, 78, 121, 0.1)'
  };

  const DEFAULT_MORPH = {
    orb1: { x: 84, y: 18, size: 34, radius: '50%', opacity: 0.14, rot: 0 },
    orb2: { x: 14, y: 86, size: 28, radius: '50%', opacity: 0.1, rot: 12 },
    frame: { x: 4, y: 6, w: 92, h: 88, radius: 18, opacity: 0.08 },
    ribbon: { x: 6, y: 92, w: 22, opacity: 0.35 }
  };

  function esc(str) {
    return String(str == null ? '' : str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function escAttr(str) {
    return esc(str);
  }

  function sanitizeUrl(url) {
    if (typeof url !== 'string') return '';
    const trimmed = url.trim();
    if (!trimmed) return '';
    // Allow https://, http://, or safe relative paths (no scheme before first slash)
    if (/^https?:\/\/[^\s"'<>]+$/i.test(trimmed)) return trimmed;
    if (/^(?:\/(?!\/)|\.\/|\.\.\/|[a-zA-Z0-9_\-]+(?:\/|$))[^\s"'<>]*$/.test(trimmed) && !/^[a-zA-Z][a-zA-Z0-9+.-]*:/.test(trimmed)) {
      return trimmed;
    }
    return '';
  }

  function sanitizeFocalPoint(fp) {
    if (typeof fp !== 'string') return '50% 50%';
    const cleaned = fp.trim().replace(/\s+/g, ' ');
    if (/^(?:(?:left|right|top|bottom|center|\d{1,3}(?:\.\d+)?%)(?:\s+(?:left|right|top|bottom|center|\d{1,3}(?:\.\d+)?%))?)$/i.test(cleaned)) {
      return cleaned;
    }
    return '50% 50%';
  }

  function sanitizeRadius(r, fallback) {
    if (typeof r === 'number' && Number.isFinite(r)) return `${Math.max(0, Math.min(200, r))}px`;
    if (typeof r === 'string') {
      const cleaned = r.trim();
      if (/^[\d.\s%pxcqw\/-]{1,40}$/i.test(cleaned)) return cleaned;
    }
    return fallback;
  }

  function numVal(v, fallback) {
    const n = Number(v);
    return Number.isFinite(n) ? n : fallback;
  }

  function normalizeTone(tone) {
    const t = typeof tone === 'string' ? tone.trim().toLowerCase() : 'light';
    return VALID_TONES[t] ? t : 'light';
  }

  function parseHexRGB(color) {
    if (typeof color !== 'string') return null;
    const m = color.trim().match(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i);
    if (!m) return null;
    let hex = m[1];
    if (hex.length === 3) {
      hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }
    return {
      r: parseInt(hex.slice(0, 2), 16),
      g: parseInt(hex.slice(2, 4), 16),
      b: parseInt(hex.slice(4, 6), 16)
    };
  }

  function relativeLuminance(color) {
    const rgb = parseHexRGB(color);
    if (!rgb) return 0.5;
    const lin = [rgb.r, rgb.g, rgb.b].map(c => {
      const s = c / 255;
      return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
    });
    return 0.2126 * lin[0] + 0.7152 * lin[1] + 0.0722 * lin[2];
  }

  function isDarkColor(color) {
    return relativeLuminance(color) < 0.28;
  }

  function normalizePalette(raw) {
    const p = Object.assign({}, DEFAULT_PALETTE, raw || {});
    return p;
  }

  function normalizeMorph(raw) {
    const m = raw || {};
    return {
      orb1: Object.assign({}, DEFAULT_MORPH.orb1, m.orb1 || {}),
      orb2: Object.assign({}, DEFAULT_MORPH.orb2, m.orb2 || {}),
      frame: Object.assign({}, DEFAULT_MORPH.frame, m.frame || {}),
      ribbon: Object.assign({}, DEFAULT_MORPH.ribbon, m.ribbon || {})
    };
  }

  /**
   * Generates multi-layered, architectural, subject-authentic editorial SVG art.
   * All 19 motif identifiers produce distinct compositions.
   */
  function renderMotifSVG(motif, rawPalette) {
    const p = normalizePalette(rawPalette);
    const a1 = escAttr(p.accent);
    const a2 = escAttr(p.accent2);
    const ink = escAttr(p.ink);

    switch (motif) {
      case 'geometry':
        return `<svg viewBox="0 0 320 260" fill="none" xmlns="http://www.w3.org/2000/svg" class="motif-svg">
          <g stroke="${ink}" stroke-opacity="0.11" stroke-width="0.9">
            <line x1="20" y1="220" x2="300" y2="220"/><line x1="52" y1="18" x2="52" y2="244"/>
            <line x1="112" y1="24" x2="112" y2="236" stroke-dasharray="3 4"/>
            <line x1="192" y1="24" x2="192" y2="236" stroke-dasharray="3 4"/>
            <line x1="262" y1="24" x2="262" y2="236" stroke-dasharray="3 4"/>
            <line x1="28" y1="140" x2="296" y2="140" stroke-dasharray="3 4"/>
          </g>
          <path d="M112 220 L112 134 C 138 92, 160 95, 192 120 L192 220 Z" fill="${a1}" fill-opacity="0.16"/>
          <path d="M52 204 C 95 190, 126 66, 176 112 C 216 146, 246 56, 292 40" stroke="${a1}" stroke-width="2.8" stroke-linecap="round"/>
          <polygon points="186,54 266,98 226,174 146,130" stroke="${a2}" stroke-width="1.8" fill="${a2}" fill-opacity="0.09"/>
          <line x1="146" y1="130" x2="266" y2="98" stroke="${a2}" stroke-opacity="0.45" stroke-width="1.1" stroke-dasharray="4 3"/>
          <circle cx="112" cy="134" r="9" fill="${a1}" fill-opacity="0.16"/><circle cx="112" cy="134" r="4.5" fill="${a1}"/>
          <circle cx="192" cy="120" r="9" fill="${a2}" fill-opacity="0.2"/><circle cx="192" cy="120" r="4.5" fill="${a2}"/>
          <circle cx="266" cy="98" r="3.5" fill="${ink}" fill-opacity="0.55"/>
        </svg>`;

      case 'data':
        return `<svg viewBox="0 0 320 260" fill="none" xmlns="http://www.w3.org/2000/svg" class="motif-svg">
          <g stroke="${ink}" stroke-opacity="0.1" stroke-width="0.9">
            <line x1="26" y1="70" x2="294" y2="70" stroke-dasharray="3 4"/>
            <line x1="26" y1="120" x2="294" y2="120" stroke-dasharray="3 4"/>
            <line x1="26" y1="170" x2="294" y2="170" stroke-dasharray="3 4"/>
          </g>
          <line x1="26" y1="216" x2="294" y2="216" stroke="${ink}" stroke-opacity="0.26" stroke-width="1.5"/>
          <path d="M32 215 C 82 212, 108 54, 160 54 C 212 54, 238 212, 288 215" stroke="${a1}" stroke-width="2.6" fill="${a1}" fill-opacity="0.1"/>
          <rect x="58" y="158" width="24" height="57" rx="4" fill="${a1}" fill-opacity="0.32"/>
          <rect x="98" y="114" width="24" height="101" rx="4" fill="${a1}" fill-opacity="0.52"/>
          <rect x="148" y="68" width="24" height="147" rx="4" fill="${a1}"/>
          <rect x="196" y="106" width="24" height="109" rx="4" fill="${a2}" fill-opacity="0.78"/>
          <rect x="236" y="146" width="24" height="69" rx="4" fill="${a2}" fill-opacity="0.44"/>
          <line x1="160" y1="34" x2="160" y2="216" stroke="${a2}" stroke-width="1.3" stroke-dasharray="4 3"/>
          <circle cx="160" cy="54" r="9" fill="${a2}" fill-opacity="0.22"/><circle cx="160" cy="54" r="4.8" fill="${a2}"/>
        </svg>`;

      case 'matrix':
        return `<svg viewBox="0 0 320 260" fill="none" xmlns="http://www.w3.org/2000/svg" class="motif-svg">
          <path d="M58 38 H40 V222 H58" stroke="${a1}" stroke-width="3" stroke-linecap="round"/>
          <path d="M262 38 H280 V222 H262" stroke="${a1}" stroke-width="3" stroke-linecap="round"/>
          <rect x="74" y="58" width="46" height="38" rx="8" fill="${a1}" fill-opacity="0.18" stroke="${a1}" stroke-opacity="0.35"/>
          <rect x="137" y="58" width="46" height="38" rx="8" fill="${a2}" fill-opacity="0.12"/>
          <rect x="200" y="58" width="46" height="38" rx="8" fill="${a1}" fill-opacity="0.1"/>
          <rect x="74" y="111" width="46" height="38" rx="8" fill="${a2}" fill-opacity="0.12"/>
          <rect x="137" y="111" width="46" height="38" rx="8" fill="${a1}" fill-opacity="0.88"/>
          <rect x="200" y="111" width="46" height="38" rx="8" fill="${a2}" fill-opacity="0.18"/>
          <rect x="74" y="164" width="46" height="38" rx="8" fill="${a1}" fill-opacity="0.1"/>
          <rect x="137" y="164" width="46" height="38" rx="8" fill="${a2}" fill-opacity="0.12"/>
          <rect x="200" y="164" width="46" height="38" rx="8" fill="${a2}" fill-opacity="0.76"/>
          <line x1="97" y1="77" x2="223" y2="183" stroke="${a2}" stroke-width="1.8" stroke-dasharray="5 4"/>
          <circle cx="97" cy="77" r="4" fill="${a1}"/><circle cx="160" cy="130" r="4.5" fill="#ffffff"/><circle cx="223" cy="183" r="4" fill="#ffffff"/>
        </svg>`;

      case 'molecule':
        return `<svg viewBox="0 0 320 260" fill="none" xmlns="http://www.w3.org/2000/svg" class="motif-svg">
          <circle cx="130" cy="128" r="76" stroke="${ink}" stroke-opacity="0.08" stroke-width="1" stroke-dasharray="4 4"/>
          <polygon points="130,66 184,97 184,159 130,190 76,159 76,97" stroke="${a1}" stroke-width="2.8" fill="${a1}" fill-opacity="0.08"/>
          <polygon points="130,82 170,105 170,151 130,174 90,151 90,105" stroke="${a1}" stroke-opacity="0.35" stroke-width="1.2" stroke-dasharray="5 3"/>
          <circle cx="130" cy="128" r="22" stroke="${a2}" stroke-width="1.6" stroke-dasharray="5 3"/>
          <line x1="184" y1="97" x2="240" y2="70" stroke="${a1}" stroke-width="2.4"/>
          <line x1="240" y1="70" x2="276" y2="112" stroke="${a2}" stroke-width="2.4"/>
          <line x1="184" y1="159" x2="234" y2="194" stroke="${a1}" stroke-width="2.4"/>
          <line x1="76" y1="97" x2="38" y2="72" stroke="${a2}" stroke-width="2.4"/>
          <circle cx="130" cy="66" r="7.5" fill="${a1}"/><circle cx="184" cy="97" r="7.5" fill="${a1}"/>
          <circle cx="184" cy="159" r="7.5" fill="${a1}"/><circle cx="130" cy="190" r="7.5" fill="${a1}"/>
          <circle cx="76" cy="159" r="7.5" fill="${a1}"/><circle cx="76" cy="97" r="7.5" fill="${a1}"/>
          <circle cx="240" cy="70" r="11" fill="${a2}"/><circle cx="276" cy="112" r="6.5" fill="${ink}" fill-opacity="0.45"/>
          <circle cx="234" cy="194" r="8.5" fill="${a2}" fill-opacity="0.82"/><circle cx="38" cy="72" r="8.5" fill="${a2}"/>
        </svg>`;

      case 'atom':
        return `<svg viewBox="0 0 320 260" fill="none" xmlns="http://www.w3.org/2000/svg" class="motif-svg">
          <circle cx="160" cy="130" r="96" stroke="${ink}" stroke-opacity="0.09" stroke-width="1" stroke-dasharray="3 5"/>
          <ellipse cx="160" cy="130" rx="112" ry="42" stroke="${a1}" stroke-width="2" transform="rotate(28 160 130)"/>
          <ellipse cx="160" cy="130" rx="112" ry="42" stroke="${a2}" stroke-width="2" transform="rotate(-28 160 130)"/>
          <ellipse cx="160" cy="130" rx="112" ry="42" stroke="${ink}" stroke-opacity="0.28" stroke-width="1.5" transform="rotate(90 160 130)"/>
          <circle cx="160" cy="130" r="32" fill="${a1}" fill-opacity="0.14"/>
          <circle cx="160" cy="130" r="18" fill="${a1}"/>
          <circle cx="154" cy="124" r="4" fill="#ffffff" fill-opacity="0.45"/>
          <circle cx="246" cy="176" r="6" fill="${a2}"/><circle cx="74" cy="84" r="6" fill="${a2}"/>
          <circle cx="160" cy="18" r="5.5" fill="${a1}"/>
        </svg>`;

      case 'helix':
        return `<svg viewBox="0 0 320 260" fill="none" xmlns="http://www.w3.org/2000/svg" class="motif-svg">
          <path d="M46 46 C 112 46, 114 130, 178 130 C 242 130, 244 214, 286 214" stroke="${a1}" stroke-width="3.4" stroke-linecap="round"/>
          <path d="M46 214 C 112 214, 114 130, 178 130 C 242 130, 244 46, 286 46" stroke="${a2}" stroke-width="3.4" stroke-linecap="round"/>
          <g stroke="${ink}" stroke-opacity="0.28" stroke-width="1.8" stroke-linecap="round">
            <line x1="68" y1="54" x2="68" y2="206"/><line x1="94" y1="74" x2="94" y2="186"/>
            <line x1="120" y1="100" x2="120" y2="160"/><line x1="214" y1="100" x2="214" y2="160"/>
            <line x1="240" y1="74" x2="240" y2="186"/><line x1="266" y1="54" x2="266" y2="206"/>
          </g>
          <circle cx="68" cy="54" r="5" fill="${a1}"/><circle cx="68" cy="206" r="5" fill="${a2}"/>
          <circle cx="178" cy="130" r="11" fill="${a1}" fill-opacity="0.18"/><circle cx="178" cy="130" r="6" fill="${a1}"/>
          <circle cx="240" cy="74" r="5" fill="${a2}"/><circle cx="240" cy="186" r="5" fill="${a1}"/>
        </svg>`;

      case 'botanical':
        return `<svg viewBox="0 0 320 260" fill="none" xmlns="http://www.w3.org/2000/svg" class="motif-svg">
          <circle cx="164" cy="132" r="94" stroke="${a1}" stroke-opacity="0.14" stroke-width="1.2" stroke-dasharray="4 4"/>
          <path d="M160 236 C 158 170, 162 110, 176 34" stroke="${a1}" stroke-width="2.6" stroke-linecap="round"/>
          <path d="M162 194 C 108 184, 80 146, 98 110 C 128 114, 152 146, 162 194 Z" fill="${a1}" fill-opacity="0.2" stroke="${a1}" stroke-width="1.7"/>
          <path d="M165 152 C 218 144, 246 106, 228 72 C 198 76, 174 108, 165 152 Z" fill="${a1}" fill-opacity="0.3" stroke="${a1}" stroke-width="1.7"/>
          <path d="M168 110 C 124 100, 108 70, 126 44 C 148 52, 162 76, 168 110 Z" fill="${a2}" fill-opacity="0.26" stroke="${a2}" stroke-width="1.6"/>
          <circle cx="228" cy="188" r="22" stroke="${a2}" stroke-width="1.4" stroke-dasharray="4 3"/>
          <circle cx="88" cy="64" r="12" fill="${a2}" fill-opacity="0.18"/>
        </svg>`;

      case 'pulse':
        return `<svg viewBox="0 0 320 260" fill="none" xmlns="http://www.w3.org/2000/svg" class="motif-svg">
          <circle cx="160" cy="130" r="94" stroke="${a1}" stroke-opacity="0.15" stroke-width="1.2" stroke-dasharray="4 4"/>
          <circle cx="160" cy="130" r="62" stroke="${a1}" stroke-opacity="0.22" stroke-width="1.4"/>
          <circle cx="160" cy="130" r="36" fill="${a1}" fill-opacity="0.1"/>
          <path d="M22 134 H92 L114 92 L140 186 L168 58 L194 156 L214 134 H298" stroke="${a1}" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"/>
          <circle cx="168" cy="58" r="9" fill="${a2}" fill-opacity="0.24"/><circle cx="168" cy="58" r="4.8" fill="${a2}"/>
          <circle cx="140" cy="186" r="4.5" fill="${a1}"/>
        </svg>`;

      case 'wave':
        return `<svg viewBox="0 0 320 260" fill="none" xmlns="http://www.w3.org/2000/svg" class="motif-svg">
          <line x1="20" y1="130" x2="300" y2="130" stroke="${ink}" stroke-opacity="0.2" stroke-dasharray="4 4"/>
          <polygon points="160,44 236,196 84,196" stroke="${a1}" stroke-width="1.6" fill="${a1}" fill-opacity="0.08"/>
          <path d="M20 130 Q 60 48, 100 130 T 180 130 T 260 130 T 300 130" stroke="${a1}" stroke-width="3" fill="none"/>
          <path d="M20 130 Q 60 202, 100 130 T 180 130 T 260 130 T 300 130" stroke="${a2}" stroke-width="2.1" stroke-opacity="0.85" fill="none"/>
          <circle cx="100" cy="130" r="5" fill="${a1}"/><circle cx="180" cy="130" r="5" fill="${a2}"/><circle cx="260" cy="130" r="4.5" fill="${a1}"/>
        </svg>`;

      case 'orbit':
        return `<svg viewBox="0 0 320 260" fill="none" xmlns="http://www.w3.org/2000/svg" class="motif-svg">
          <circle cx="160" cy="130" r="102" stroke="${ink}" stroke-opacity="0.14" stroke-width="1.1"/>
          <ellipse cx="160" cy="130" rx="124" ry="48" stroke="${a1}" stroke-width="1.8" transform="rotate(-18 160 130)"/>
          <ellipse cx="160" cy="130" rx="76" ry="30" stroke="${a2}" stroke-width="1.5" stroke-dasharray="5 4" transform="rotate(14 160 130)"/>
          <circle cx="160" cy="130" r="38" fill="${a1}" fill-opacity="0.14"/>
          <circle cx="160" cy="130" r="22" fill="${a1}"/>
          <circle cx="268" cy="96" r="10" fill="${a2}"/>
          <circle cx="86" cy="112" r="5.5" fill="${ink}" fill-opacity="0.65"/>
          <circle cx="222" cy="182" r="3.5" fill="${a1}"/><circle cx="72" cy="54" r="2.5" fill="${a2}"/>
        </svg>`;

      case 'circuit':
        return `<svg viewBox="0 0 320 260" fill="none" xmlns="http://www.w3.org/2000/svg" class="motif-svg">
          <rect x="114" y="84" width="92" height="92" rx="14" stroke="${a1}" stroke-width="2.4" fill="${a1}" fill-opacity="0.1"/>
          <rect x="134" y="104" width="52" height="52" rx="8" stroke="${a2}" stroke-width="1.6" fill="${a2}" fill-opacity="0.18"/>
          <g stroke="${a1}" stroke-width="2" stroke-linecap="round">
            <path d="M114 106 H66 L48 88"/><path d="M114 130 H44"/><path d="M114 154 H72 L52 174"/>
            <path d="M206 106 H254 L272 88"/><path d="M206 130 H276"/><path d="M206 154 H248 L268 174"/>
            <path d="M142 84 V44"/><path d="M178 84 V52 L198 34"/><path d="M160 176 V220"/>
          </g>
          <circle cx="48" cy="88" r="5" fill="${a2}"/><circle cx="44" cy="130" r="5" fill="${a1}"/>
          <circle cx="272" cy="88" r="5" fill="${a2}"/><circle cx="276" cy="130" r="5" fill="${a1}"/>
          <circle cx="160" cy="130" r="8" fill="${a1}"/>
        </svg>`;

      case 'neural':
        return `<svg viewBox="0 0 320 260" fill="none" xmlns="http://www.w3.org/2000/svg" class="motif-svg">
          <g stroke="${a1}" stroke-opacity="0.38" stroke-width="1.6">
            <line x1="62" y1="68" x2="156" y2="52"/><line x1="62" y1="68" x2="156" y2="130"/>
            <line x1="62" y1="130" x2="156" y2="52"/><line x1="62" y1="130" x2="156" y2="130"/><line x1="62" y1="130" x2="156" y2="208"/>
            <line x1="62" y1="192" x2="156" y2="130"/><line x1="62" y1="192" x2="156" y2="208"/>
            <line x1="156" y1="52" x2="256" y2="96"/><line x1="156" y1="130" x2="256" y2="96"/>
            <line x1="156" y1="130" x2="256" y2="164"/><line x1="156" y1="208" x2="256" y2="164"/>
          </g>
          <circle cx="62" cy="68" r="10" fill="${a1}"/><circle cx="62" cy="130" r="10" fill="${a1}" fill-opacity="0.72"/><circle cx="62" cy="192" r="10" fill="${a1}"/>
          <circle cx="156" cy="52" r="9" fill="${a2}"/><circle cx="156" cy="130" r="14" fill="${a1}"/><circle cx="156" cy="208" r="9" fill="${a2}"/>
          <circle cx="256" cy="96" r="12" fill="${a2}"/><circle cx="256" cy="164" r="12" fill="${a1}"/>
        </svg>`;

      case 'heritage':
        return `<svg viewBox="0 0 320 260" fill="none" xmlns="http://www.w3.org/2000/svg" class="motif-svg">
          <circle cx="160" cy="128" r="92" stroke="${a1}" stroke-width="2" stroke-opacity="0.48"/>
          <circle cx="160" cy="128" r="68" stroke="${a2}" stroke-width="1.6" stroke-dasharray="6 4"/>
          <circle cx="160" cy="128" r="40" fill="${a1}" fill-opacity="0.14" stroke="${a1}" stroke-width="1.8"/>
          <polygon points="160,54 170,114 230,128 170,142 160,202 150,142 90,128 150,114" fill="${a2}" fill-opacity="0.78"/>
          <circle cx="160" cy="128" r="10" fill="${a1}"/>
          <line x1="40" y1="234" x2="280" y2="234" stroke="${ink}" stroke-opacity="0.22" stroke-width="1.5"/>
        </svg>`;

      case 'pillar':
        return `<svg viewBox="0 0 320 260" fill="none" xmlns="http://www.w3.org/2000/svg" class="motif-svg">
          <polygon points="160,34 274,78 46,78" stroke="${a1}" stroke-width="2.2" fill="${a1}" fill-opacity="0.1"/>
          <rect x="56" y="78" width="208" height="12" rx="3" fill="${a2}" fill-opacity="0.32"/>
          <g stroke="${a1}" stroke-width="2" fill="${a1}" fill-opacity="0.08">
            <rect x="76" y="96" width="24" height="106" rx="3"/>
            <rect x="148" y="96" width="24" height="106" rx="3"/>
            <rect x="220" y="96" width="24" height="106" rx="3"/>
          </g>
          <rect x="48" y="204" width="224" height="12" rx="3" fill="${a1}" fill-opacity="0.22"/>
          <rect x="34" y="218" width="252" height="10" rx="3" fill="${ink}" fill-opacity="0.14"/>
        </svg>`;

      case 'archive':
        return `<svg viewBox="0 0 320 260" fill="none" xmlns="http://www.w3.org/2000/svg" class="motif-svg">
          <rect x="52" y="34" width="166" height="192" rx="10" stroke="${a1}" stroke-width="2" fill="${a1}" fill-opacity="0.07"/>
          <rect x="102" y="54" width="166" height="172" rx="10" stroke="${a2}" stroke-width="1.8" fill="${a2}" fill-opacity="0.09"/>
          <g stroke="${ink}" stroke-opacity="0.26" stroke-width="1.8" stroke-linecap="round">
            <line x1="126" y1="90" x2="238" y2="90"/><line x1="126" y1="114" x2="222" y2="114"/>
            <line x1="126" y1="138" x2="232" y2="138"/><line x1="126" y1="162" x2="196" y2="162"/>
          </g>
          <circle cx="224" cy="186" r="20" stroke="${a1}" stroke-width="2" fill="${a1}" fill-opacity="0.16"/>
          <circle cx="224" cy="186" r="9" fill="${a2}"/>
        </svg>`;

      case 'contour':
        return `<svg viewBox="0 0 320 260" fill="none" xmlns="http://www.w3.org/2000/svg" class="motif-svg">
          <path d="M34 168 C 50 92, 128 52, 204 70 C 270 86, 294 148, 256 198 C 218 244, 72 232, 34 168 Z" stroke="${a1}" stroke-width="1.9" fill="${a1}" fill-opacity="0.07"/>
          <path d="M72 160 C 86 110, 140 84, 192 96 C 236 106, 252 148, 226 180 C 198 214, 96 204, 72 160 Z" stroke="${a1}" stroke-width="1.8" fill="${a1}" fill-opacity="0.12"/>
          <path d="M112 152 C 122 124, 152 112, 182 120 C 206 126, 214 150, 198 168 C 182 186, 126 178, 112 152 Z" stroke="${a2}" stroke-width="2" fill="${a2}" fill-opacity="0.22"/>
          <line x1="164" y1="42" x2="164" y2="224" stroke="${ink}" stroke-opacity="0.14" stroke-dasharray="3 4"/>
          <line x1="38" y1="146" x2="286" y2="146" stroke="${ink}" stroke-opacity="0.14" stroke-dasharray="3 4"/>
          <circle cx="164" cy="146" r="5.5" fill="${a2}"/>
        </svg>`;

      case 'urban':
        return `<svg viewBox="0 0 320 260" fill="none" xmlns="http://www.w3.org/2000/svg" class="motif-svg">
          <line x1="28" y1="216" x2="292" y2="216" stroke="${ink}" stroke-opacity="0.28" stroke-width="1.6"/>
          <rect x="46" y="128" width="40" height="88" rx="4" stroke="${a1}" stroke-width="1.8" fill="${a1}" fill-opacity="0.12"/>
          <rect x="98" y="72" width="48" height="144" rx="4" stroke="${a1}" stroke-width="2.2" fill="${a1}" fill-opacity="0.22"/>
          <rect x="158" y="48" width="52" height="168" rx="4" stroke="${a2}" stroke-width="2.2" fill="${a2}" fill-opacity="0.18"/>
          <rect x="222" y="106" width="46" height="110" rx="4" stroke="${a1}" stroke-width="1.8" fill="${a1}" fill-opacity="0.14"/>
          <path d="M52 100 Q 124 38, 184 68 T 274 86" stroke="${a2}" stroke-width="2" stroke-dasharray="5 4"/>
          <circle cx="184" cy="68" r="5" fill="${a2}"/>
        </svg>`;

      case 'poetry':
        return `<svg viewBox="0 0 320 260" fill="none" xmlns="http://www.w3.org/2000/svg" class="motif-svg">
          <circle cx="160" cy="126" r="88" stroke="${a1}" stroke-width="1.6" fill="${a1}" fill-opacity="0.06"/>
          <circle cx="160" cy="126" r="68" stroke="${a2}" stroke-opacity="0.35" stroke-width="1.2" stroke-dasharray="4 4"/>
          <path d="M88 176 C 132 152, 182 106, 232 62" stroke="${a1}" stroke-width="2.6" stroke-linecap="round"/>
          <path d="M232 62 C 206 68, 174 86, 150 114 C 176 114, 208 96, 232 62 Z" fill="${a2}" fill-opacity="0.4"/>
          <line x1="86" y1="198" x2="234" y2="198" stroke="${ink}" stroke-opacity="0.22" stroke-width="1.5"/>
          <line x1="112" y1="212" x2="208" y2="212" stroke="${ink}" stroke-opacity="0.16" stroke-width="1.5"/>
        </svg>`;

      default: // editorial
        return `<svg viewBox="0 0 320 260" fill="none" xmlns="http://www.w3.org/2000/svg" class="motif-svg">
          <rect x="44" y="34" width="232" height="192" rx="14" stroke="${a1}" stroke-width="1.8" fill="${a1}" fill-opacity="0.05"/>
          <line x1="160" y1="34" x2="160" y2="226" stroke="${ink}" stroke-opacity="0.16" stroke-width="1.2"/>
          <rect x="64" y="58" width="76" height="58" rx="8" fill="${a1}" fill-opacity="0.18" stroke="${a1}" stroke-width="1.4"/>
          <line x1="64" y1="136" x2="140" y2="136" stroke="${ink}" stroke-opacity="0.3" stroke-width="2"/>
          <line x1="64" y1="154" x2="128" y2="154" stroke="${ink}" stroke-opacity="0.2" stroke-width="1.8"/>
          <line x1="180" y1="68" x2="256" y2="68" stroke="${a2}" stroke-width="2.4"/>
          <line x1="180" y1="90" x2="246" y2="90" stroke="${ink}" stroke-opacity="0.26" stroke-width="1.8"/>
          <line x1="180" y1="110" x2="252" y2="110" stroke="${ink}" stroke-opacity="0.22" stroke-width="1.8"/>
          <rect x="180" y="136" width="76" height="66" rx="8" fill="${a2}" fill-opacity="0.16" stroke="${a2}" stroke-width="1.4"/>
        </svg>`;
    }
  }

  /**
   * Generates CSS inline style variables for a template's palette, including
   * computed WCAG-safe on-accent ink color.
   */
  function getPaletteStyle(rawPalette) {
    const p = normalizePalette(rawPalette);
    const accentIsLight = !isDarkColor(p.accent);
    const onAccent = accentIsLight ? '#0f1419' : '#ffffff';
    const onAccentMuted = accentIsLight ? 'rgba(15, 20, 25, 0.72)' : 'rgba(255, 255, 255, 0.8)';
    return [
      `--s-bg:${escAttr(p.bg)}`,
      `--s-surface:${escAttr(p.surface)}`,
      `--s-surface-alt:${escAttr(p.surfaceAlt)}`,
      `--s-ink:${escAttr(p.ink)}`,
      `--s-muted:${escAttr(p.muted)}`,
      `--s-accent:${escAttr(p.accent)}`,
      `--s-accent2:${escAttr(p.accent2)}`,
      `--s-soft:${escAttr(p.soft)}`,
      `--s-on-accent:${onAccent}`,
      `--s-on-accent-muted:${onAccentMuted}`
    ].join(';');
  }

  function getCanvasModifierClasses(rawPalette, tone) {
    const p = normalizePalette(rawPalette);
    const normalizedTone = normalizeTone(tone);
    const deckClass = isDarkColor(p.bg) ? 'deck-dark' : 'deck-light';
    const accentClass = isDarkColor(p.accent) ? 'accent-is-dark' : 'accent-is-light';
    return {
      toneClass: `tone-${normalizedTone}`,
      deckClass,
      accentClass
    };
  }

  function renderMediaCredit(media, variant) {
    if (!media || !media.credit) return '';
    const credit = esc(media.credit);
    const source = sanitizeUrl(media.sourceUrl);
    return variant !== 'thumb' && /^https?:\/\//i.test(source)
      ? `<a class="sl-media-source" href="${escAttr(source)}" target="_blank" rel="noopener noreferrer">${credit}</a>`
      : credit;
  }

  /**
   * Renders a resilient editorial media frame with lazy loading, thumbnail/stage
   * resolution switching, object-position focal point, caption/credit bar, and
   * bespoke SVG fallback underneath so zero broken-image icons ever appear.
   */
  function renderMediaFrame(media, template, opts) {
    const options = opts || {};
    const variant = options.variant === 'thumb' ? 'thumb' : 'stage';
    const extraClass = options.extraClass ? ` ${options.extraClass}` : '';
    const showCaption = options.showCaption !== false;
    const showCredit = options.showCredit !== false;
    const badgeText = options.fallbackLabel || (media && media.caption) || (template && template.subjectLabel) || 'Minh họa';

    const rawUrl = media
      ? (variant === 'thumb'
        ? media.localThumbUrl || media.thumbUrl || media.localUrl || media.url
        : media.localUrl || media.url || media.localThumbUrl || media.thumbUrl)
      : '';
    const src = sanitizeUrl(rawUrl);
    const focal = sanitizeFocalPoint(media && media.focalPoint);
    const alt = escAttr((media && media.alt) || badgeText);
    const cap = (showCaption && media && media.caption) ? esc(media.caption) : '';
    const credit = showCredit ? renderMediaCredit(media, variant) : '';
    const fitClass = media && media.fit === 'contain' ? ' is-contained-media' : '';

    return `
      <figure class="sl-media-frame${extraClass}${fitClass}${src ? '' : ' is-fallback'}">
        <div class="sl-media-fallback" aria-hidden="true">
          <div class="sl-fallback-grid"></div>
          <div class="sl-fallback-wash"></div>
          <div class="sl-fallback-motif">${renderMotifSVG(template && template.motif, template && template.palette)}</div>
          <div class="sl-fallback-badge">${esc(badgeText)}</div>
        </div>
        ${src ? `<img
          src="${escAttr(src)}"
          alt="${alt}"
          loading="lazy"
          decoding="async"
          referrerpolicy="no-referrer"
          style="object-position:${focal}"
          onload="this.closest('.sl-media-frame').classList.add('is-loaded')"
          onerror="this.closest('.sl-media-frame').classList.add('is-fallback')"
        >` : ''}
        ${(cap || credit) ? `
          <figcaption class="sl-media-meta">
            ${cap ? `<span class="sl-media-cap">${cap}</span>` : '<span></span>'}
            ${credit ? `<span class="sl-media-credit">${credit}</span>` : ''}
          </figcaption>
        ` : ''}
      </figure>`;
  }

  /**
   * Renders the inner content HTML for any of the 20 editorial slide layouts.
   */
  function renderSlideContentHTML(template, slide, totalSlides, opts) {
    const tpl = template || { palette: DEFAULT_PALETTE, subjectLabel: 'Fernora', motif: 'editorial' };
    const sl = slide || {};
    const p = normalizePalette(tpl.palette);
    const variant = (opts && opts.variant === 'thumb') ? 'thumb' : 'stage';
    const numStr = String(numVal(sl.number, 1)).padStart(2, '0');
    const totalStr = String(Math.max(1, numVal(totalSlides, 1))).padStart(2, '0');
    const footer = `
      <div class="sl-foot">
        <span class="sl-foot-brand">${esc(tpl.subjectLabel || '')}${sl.chapterName ? ` · ${esc(sl.chapterName)}` : ''}</span>
        <span class="sl-foot-num">${numStr} / ${totalStr}</span>
      </div>`;

    switch (sl.layout) {
      /* ==================== 1. COVER ==================== */
      case 'cover':
        return `
          <div class="sl-inner sl-cover${sl.media ? ' has-media' : ''}">
            <div class="sl-cover-left">
              <div class="sl-kicker sl-kicker-pill"><i class="sl-kicker-dot" aria-hidden="true"></i>${esc(sl.kicker || tpl.subjectLabel)}</div>
              <h2 class="sl-cover-title">${esc(sl.title)}</h2>
              ${sl.subtitle ? `<p class="sl-cover-sub">${esc(sl.subtitle)}</p>` : ''}
              <div class="sl-meta-row">
                ${(sl.meta || []).map(m => `<span class="sl-meta-chip">${esc(m)}</span>`).join('')}
              </div>
            </div>
            <div class="sl-cover-right">
              ${sl.media
                ? `<div class="sl-cover-plate">${renderMediaFrame(sl.media, tpl, { variant, fallbackLabel: sl.title || tpl.subjectLabel })}</div>`
                : `<div class="sl-visual-card sl-visual-arch">${renderMotifSVG(tpl.motif, p)}</div>`}
            </div>
          </div>`;

      /* ==================== 2. AGENDA ==================== */
      case 'agenda':
        return `
          <div class="sl-inner sl-agenda">
            <div class="sl-agenda-head">
              <div>
                <div class="sl-kicker">${esc(sl.kicker || 'Mục lục')}</div>
                <h2 class="sl-h2">${esc(sl.title)}</h2>
                <div class="sl-accent-rule"></div>
              </div>
              <div class="sl-mini-art">
                ${sl.media
                  ? renderMediaFrame(sl.media, tpl, { variant, showCredit: false, fallbackLabel: sl.title })
                  : renderMotifSVG(tpl.motif, p)}
              </div>
            </div>
            <div class="sl-agenda-list">
              ${(sl.items || []).map((it, idx) => `
                <div class="sl-agenda-item">
                  <span class="sl-agenda-num">${esc(it.num || String(idx + 1).padStart(2, '0'))}</span>
                  <div class="sl-agenda-copy">
                    <div class="sl-agenda-title">${esc(it.title)}</div>
                    ${it.desc ? `<div class="sl-agenda-desc">${esc(it.desc)}</div>` : ''}
                  </div>
                </div>`).join('')}
            </div>
            ${footer}
          </div>`;

      /* ==================== 3. OBJECTIVES (Editorial Numbered Index) ==================== */
      case 'objectives':
        return `
          <div class="sl-inner sl-objectives">
            <div class="sl-head-block">
              <div class="sl-kicker">${esc(sl.kicker || 'Mục tiêu')}</div>
              <h2 class="sl-h2">${esc(sl.title)}</h2>
            </div>
            <div class="sl-obj-index">
              ${(sl.cards || []).map((c, idx) => `
                <div class="sl-obj-row">
                  <div class="sl-obj-num">${esc(c.num || String(idx + 1).padStart(2, '0'))}</div>
                  <div class="sl-obj-rule" aria-hidden="true"></div>
                  <div class="sl-obj-main">
                    <div class="sl-obj-title">${esc(c.title)}</div>
                    ${c.tag ? `<span class="sl-obj-tag">${esc(c.tag)}</span>` : ''}
                  </div>
                  <p class="sl-obj-body">${esc(c.body)}</p>
                </div>`).join('')}
            </div>
            ${footer}
          </div>`;

      /* ==================== 4. SECTION BREAK ==================== */
      case 'section-break':
        return `
          <div class="sl-inner sl-section-break${sl.media ? ' has-media' : ''}">
            <div class="sl-break-content">
              <div class="sl-big-num">${esc(sl.bigNum || numStr)}</div>
              <div class="sl-accent-rule"></div>
              <div class="sl-kicker">${esc(sl.kicker)}</div>
              <h2 class="sl-break-title">${esc(sl.title)}</h2>
              ${sl.subtitle ? `<p class="sl-break-sub">${esc(sl.subtitle)}</p>` : ''}
            </div>
            ${sl.media ? `<div class="sl-break-media">${renderMediaFrame(sl.media, tpl, { variant, showCaption: false, fallbackLabel: sl.title })}</div>` : ''}
            ${footer}
          </div>`;

      /* ==================== 5. SPLIT VISUAL ==================== */
      case 'split-visual':
        return `
          <div class="sl-inner sl-split">
            <div class="sl-split-text">
              <div class="sl-kicker">${esc(sl.kicker)}</div>
              <h2 class="sl-h2">${esc(sl.title)}</h2>
              ${sl.lead ? `<p class="sl-lead">${esc(sl.lead)}</p>` : ''}
              <ul class="sl-bullets">
                ${(sl.bullets || []).map(b => `<li><span></span><div>${esc(b)}</div></li>`).join('')}
              </ul>
            </div>
            <div class="sl-split-vis">
              ${sl.media
                ? renderMediaFrame(sl.media, tpl, { variant, fallbackLabel: sl.visualCaption || sl.title })
                : `<div class="sl-visual-card sl-visual-arch">
                    ${renderMotifSVG(tpl.motif, p)}
                    ${sl.visualCaption ? `<div class="sl-vis-cap">${esc(sl.visualCaption)}</div>` : ''}
                  </div>`}
            </div>
            ${footer}
          </div>`;

      /* ==================== 6. FORMULA SPOTLIGHT ==================== */
      case 'formula-spotlight':
        return `
          <div class="sl-inner sl-formula">
            <div class="sl-head-block">
              <div class="sl-kicker">${esc(sl.kicker)}</div>
              <h2 class="sl-h2">${esc(sl.title)}</h2>
            </div>
            <div class="sl-formula-box">
              <span class="sl-formula-corner tl" aria-hidden="true"></span>
              <span class="sl-formula-corner br" aria-hidden="true"></span>
              <div class="sl-formula-text">${esc(sl.formula)}</div>
            </div>
            <div class="sl-annot-row">
              ${(sl.annotations || []).map(a => `
                <div class="sl-annot">
                  <span class="sl-annot-tag">${esc(a.tag)}</span>
                  <p>${esc(a.text)}</p>
                </div>`).join('')}
            </div>
            ${footer}
          </div>`;

      /* ==================== 7. DATA CHART ==================== */
      case 'data-chart': {
        const bars = sl.bars || [];
        const max = Math.max(bars.every(b => b.unit == null || b.unit === '%') ? 100 : 1,
          ...bars.map(b => numVal(b.val, 0)));
        return `
          <div class="sl-inner sl-chart">
            <div class="sl-head-block">
              <div class="sl-kicker">${esc(sl.kicker)}</div>
              <h2 class="sl-h2">${esc(sl.title)}</h2>
            </div>
            <div class="sl-chart-body">
              <div class="sl-bars">
                ${bars.map(b => {
                  const pct = Math.max(0, numVal(b.val, 0)) / max * 100;
                  const unit = b.unit ?? '%';
                  return `
                    <div class="sl-bar-row">
                      <div class="sl-bar-top"><span>${esc(b.label)}</span><strong>${esc(b.val)}${unit && unit !== '%' ? ' ' : ''}${esc(unit)}</strong></div>
                      <div class="sl-bar-track"><div class="sl-bar-fill" style="width:${pct}%"></div></div>
                    </div>`;
                }).join('')}
              </div>
              <div class="sl-insight-card">
                <div class="sl-accent-rule sl-rule-sm"></div>
                <div class="sl-card-tag">${esc(sl.insightTitle || 'Nhận định chính')}</div>
                <p class="sl-card-body">${esc(sl.insightBody || sl.lead || '')}</p>
                ${sl.media ? `<div class="sl-chart-inset">${renderMediaFrame(sl.media, tpl, { variant, showCaption: false, showCredit: false, fallbackLabel: sl.insightTitle || sl.title })}</div>` : ''}
              </div>
            </div>
            ${footer}
          </div>`;

      }

      /* ==================== 8. TIMELINE (Connected Axis + Alternating Nodes) ==================== */
      case 'timeline': {
        const steps = sl.steps || [];
        return `
          <div class="sl-inner sl-timeline">
            <div class="sl-head-block">
              <div class="sl-kicker">${esc(sl.kicker)}</div>
              <h2 class="sl-h2">${esc(sl.title)}</h2>
            </div>
            <div class="sl-tl-axis-wrap" style="--tl-count:${Math.max(1, steps.length)}">
              <div class="sl-tl-spine" aria-hidden="true"></div>
              <div class="sl-tl-nodes">
                ${steps.map((st, idx) => `
                  <div class="sl-tl-item ${idx % 2 === 0 ? 'is-top' : 'is-bottom'}">
                    <div class="sl-tl-card">
                      <span class="sl-tl-badge">${esc(st.step || String(idx + 1).padStart(2, '0'))}</span>
                      <div class="sl-tl-title">${esc(st.title)}</div>
                      <p class="sl-tl-desc">${esc(st.desc)}</p>
                    </div>
                    <div class="sl-tl-stem" aria-hidden="true"></div>
                    <div class="sl-tl-marker" aria-hidden="true"><span></span></div>
                  </div>`).join('')}
              </div>
            </div>
            ${footer}
          </div>`;
      }

      /* ==================== 9. COMPARISON ==================== */
      case 'comparison':
        return `
          <div class="sl-inner sl-compare">
            <div class="sl-head-block">
              <div class="sl-kicker">${esc(sl.kicker)}</div>
              <h2 class="sl-h2">${esc(sl.title)}</h2>
            </div>
            <div class="sl-cmp-wrap">
              <div class="sl-cmp-col">
                <div class="sl-cmp-head">${esc(sl.leftTitle)}</div>
                <ul class="sl-bullets">
                  ${(sl.leftPoints || []).map(pt => `<li><span></span><div>${esc(pt)}</div></li>`).join('')}
                </ul>
              </div>
              <div class="sl-cmp-vs" aria-hidden="true">VS</div>
              <div class="sl-cmp-col sl-cmp-alt">
                <div class="sl-cmp-head">${esc(sl.rightTitle)}</div>
                <ul class="sl-bullets">
                  ${(sl.rightPoints || []).map(pt => `<li><span></span><div>${esc(pt)}</div></li>`).join('')}
                </ul>
              </div>
            </div>
            ${footer}
          </div>`;

      /* ==================== 10. BENTO GRID (Asymmetric 2-Row Mosaic) ==================== */
      case 'bento-grid': {
        const cards = sl.cards || [];
        const leadCard = cards[0];
        const restCards = cards.slice(1, 4);
        const countClass = restCards.length >= 3 ? 'is-four' : 'is-three';
        return `
          <div class="sl-inner sl-bento">
            <div class="sl-head-block">
              <div class="sl-kicker">${esc(sl.kicker)}</div>
              <h2 class="sl-h2">${esc(sl.title)}</h2>
            </div>
            <div class="sl-bento-mosaic ${countClass}">
              ${leadCard ? `
                <div class="sl-bento-tile sl-bento-lead${sl.media ? ' has-photo' : ''}">
                  ${sl.media
                    ? `${renderMediaFrame(sl.media, tpl, { variant, showCaption: false, showCredit: false, extraClass: 'sl-bento-bg-media', fallbackLabel: leadCard.title })}
                       <div class="sl-bento-scrim" aria-hidden="true"></div>`
                    : `<div class="sl-bento-watermark" aria-hidden="true">${renderMotifSVG(tpl.motif, p)}</div>`}
                  <div class="sl-bento-lead-content">
                    <div class="sl-bento-top-row">
                      ${leadCard.tag ? `<span class="sl-card-tag">${esc(leadCard.tag)}</span>` : ''}
                      ${leadCard.stat ? `<span class="sl-stat-pill">${esc(leadCard.stat)}</span>` : ''}
                    </div>
                    <div class="sl-card-title">${esc(leadCard.title)}</div>
                    <p class="sl-card-body">${esc(leadCard.body)}</p>
                  </div>
                </div>` : ''}
              ${restCards.map(c => `
                <div class="sl-bento-tile">
                  <div class="sl-bento-top-row">
                    <span class="sl-card-tag">${esc(c.tag || c.num || '')}</span>
                    ${c.stat ? `<span class="sl-stat-pill">${esc(c.stat)}</span>` : ''}
                  </div>
                  <div class="sl-card-title">${esc(c.title)}</div>
                  <p class="sl-card-body">${esc(c.body)}</p>
                </div>`).join('')}
            </div>
            ${footer}
          </div>`;
      }

      /* ==================== 11. PROCESS FLOW (Chevron Workflow + Outcome) ==================== */
      case 'process-flow': {
        const steps = sl.steps || [];
        return `
          <div class="sl-inner sl-process">
            <div class="sl-head-block">
              <div class="sl-kicker">${esc(sl.kicker)}</div>
              <h2 class="sl-h2">${esc(sl.title)}</h2>
            </div>
            <div class="sl-proc-flow">
              ${steps.map((st, idx) => {
                const isLast = idx === steps.length - 1 && steps.length > 1;
                return `
                  <div class="sl-proc-stage${isLast ? ' is-outcome' : ''}">
                    <div class="sl-proc-head">
                      <span class="sl-proc-num">${isLast ? '★ ' : ''}${String(idx + 1).padStart(2, '0')}</span>
                      <span class="sl-proc-step-lbl">${esc(isLast ? 'Kết quả' : (st.step || `Bước ${idx + 1}`))}</span>
                    </div>
                    <div class="sl-card-title">${esc(st.title)}</div>
                    <p class="sl-card-body">${esc(st.desc)}</p>
                  </div>
                  ${idx < steps.length - 1 ? `<div class="sl-proc-arrow" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none"><path d="M9 5l7 7-7 7" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg></div>` : ''}`;
              }).join('')}
            </div>
            ${footer}
          </div>`;
      }

      /* ==================== 12. QUOTE FOCUS ==================== */
      case 'quote-focus':
        return `
          <div class="sl-inner sl-quote${sl.media ? ' has-backdrop' : ''}">
            ${sl.media ? `
              <div class="sl-quote-bg" aria-hidden="true">
                ${renderMediaFrame(sl.media, tpl, { variant, showCaption: false, showCredit: false, fallbackLabel: sl.author || sl.kicker })}
                <div class="sl-quote-scrim"></div>
              </div>` : ''}
            <div class="sl-quote-inner">
              <div class="sl-kicker">${esc(sl.kicker)}</div>
              <div class="sl-quote-mark" aria-hidden="true">“</div>
              <blockquote class="sl-quote-text">${esc(sl.quote)}</blockquote>
              <div class="sl-quote-divider" aria-hidden="true"></div>
              ${sl.author ? `<div class="sl-quote-author">${esc(sl.author)}</div>` : ''}
              ${sl.note ? `<p class="sl-quote-note">${esc(sl.note)}</p>` : ''}
            </div>
            ${footer}
          </div>`;

      /* ==================== 13. QUIZ CHECK ==================== */
      case 'quiz-check':
        return `
          <div class="sl-inner sl-quiz">
            <div class="sl-head-block">
              <div class="sl-kicker">${esc(sl.kicker || 'Kiểm tra nhanh')}</div>
              <h2 class="sl-h2">${esc(sl.title)}</h2>
            </div>
            <div class="sl-quiz-grid">
              ${(sl.options || []).map((opt, idx) => {
                const letter = ['A', 'B', 'C', 'D'][idx] || String(idx + 1);
                const isRight = idx === sl.answer;
                return `
                  <div class="sl-quiz-opt${isRight ? ' is-answer' : ''}">
                    <span class="sl-quiz-letter">${letter}</span>
                    <span class="sl-quiz-text">${esc(opt)}</span>
                    ${isRight ? '<span class="sl-quiz-check" aria-hidden="true">✓</span>' : ''}
                  </div>`;
              }).join('')}
            </div>
            ${footer}
          </div>`;

      /* ==================== 14. HERO PHOTO BLEED (NEW) ==================== */
      case 'hero-photo-bleed':
        return `
          <div class="sl-inner sl-hero-bleed">
            <div class="sl-hero-bg">
              ${renderMediaFrame(sl.media, tpl, { variant, showCaption: false, showCredit: false, fallbackLabel: sl.title || tpl.subjectLabel })}
              <div class="sl-hero-scrim" aria-hidden="true"></div>
            </div>
            <div class="sl-hero-foreground">
              <div class="sl-hero-top">
                <span class="sl-hero-pill">${esc(sl.kicker || tpl.subjectLabel)}</span>
                <span class="sl-hero-num">${numStr} / ${totalStr}</span>
              </div>
              <div class="sl-hero-bottom">
                <h2 class="sl-hero-title">${esc(sl.title)}</h2>
                ${(sl.lead || sl.subtitle) ? `<p class="sl-hero-lead">${esc(sl.lead || sl.subtitle)}</p>` : ''}
                <div class="sl-hero-footrow">
                  <div class="sl-hero-meta">
                    ${(sl.meta || []).map(m => `<span class="sl-hero-chip">${esc(m)}</span>`).join('')}
                    ${(sl.media && sl.media.caption && sl.media.caption !== sl.title) ? `<span class="sl-hero-cap">${esc(sl.media.caption)}</span>` : ''}
                  </div>
                  ${(sl.media && sl.media.credit) ? `<span class="sl-hero-credit">${renderMediaCredit(sl.media, variant)}</span>` : ''}
                </div>
              </div>
            </div>
          </div>`;

      /* ==================== 15. EDITORIAL SPLIT PHOTO (NEW) ==================== */
      case 'editorial-split-photo': {
        const pos = sl.mediaPosition === 'left' ? 'left' : 'right';
        const bulletList = (sl.bullets && sl.bullets.length)
          ? sl.bullets
          : (sl.items || []).map(it => `${it.title}${it.desc ? ` — ${it.desc}` : ''}`);
        const photoCol = `
          <div class="sl-esplit-media">
            ${renderMediaFrame(sl.media, tpl, { variant, showCaption: false, showCredit: false, fallbackLabel: sl.title })}
            ${((sl.media && (sl.media.caption || sl.media.credit)) || sl.visualCaption) ? `
              <div class="sl-esplit-badge">
                <div class="sl-esplit-badge-cap">${sl.media && sl.media.caption === sl.title ? '' : esc((sl.media && sl.media.caption) || sl.visualCaption || '')}</div>
                ${(sl.media && sl.media.credit) ? `<div class="sl-esplit-badge-credit">${renderMediaCredit(sl.media, variant)}</div>` : ''}
              </div>` : ''}
          </div>`;
        const textCol = `
          <div class="sl-esplit-copy">
            <div class="sl-esplit-body">
              <div class="sl-kicker">${esc(sl.kicker)}</div>
              <h2 class="sl-h2">${esc(sl.title)}</h2>
              ${(sl.lead || sl.subtitle) ? `<p class="sl-lead">${esc(sl.lead || sl.subtitle)}</p>` : ''}
              ${bulletList.length ? `
                <ul class="sl-bullets">
                  ${bulletList.slice(0, 4).map(b => `<li><span></span><div>${esc(b)}</div></li>`).join('')}
                </ul>` : ''}
            </div>
            <div class="sl-esplit-foot">
              <span>${esc(tpl.subjectLabel || '')}${sl.chapterName ? ` · ${esc(sl.chapterName)}` : ''}</span>
              <span class="sl-foot-num">${numStr} / ${totalStr}</span>
            </div>
          </div>`;
        return `
          <div class="sl-inner sl-esplit is-media-${pos}">
            ${pos === 'left' ? photoCol + textCol : textCol + photoCol}
          </div>`;
      }

      /* ==================== 16. PHOTO GALLERY TRIPTYCH (NEW) ==================== */
      case 'photo-gallery-triptych': {
        const rawGallery = Array.isArray(sl.gallery) ? sl.gallery.filter(Boolean) : [];
        const plates = [0, 1, 2].map(i => {
          if (rawGallery[i]) return rawGallery[i];
          if (i === 0 && sl.media) return sl.media;
          return {
            url: '',
            thumbUrl: '',
            alt: sl.title || tpl.subjectLabel,
            caption: (sl.bullets && sl.bullets[i]) || (sl.items && sl.items[i] && sl.items[i].title) || `Tư liệu ${String(i + 1).padStart(2, '0')}`,
            credit: ''
          };
        });
        return `
          <div class="sl-inner sl-triptych">
            <div class="sl-triptych-head">
              <div>
                <div class="sl-kicker">${esc(sl.kicker || 'Bộ sưu tập tư liệu')}</div>
                <h2 class="sl-h2">${esc(sl.title)}</h2>
              </div>
              ${sl.subtitle ? `<p class="sl-triptych-sub">${esc(sl.subtitle)}</p>` : ''}
            </div>
            <div class="sl-triptych-grid">
              ${plates.map((plate, idx) => `
                <div class="sl-triptych-plate ${idx === 0 ? 'is-hero-plate' : 'is-sub-plate'}">
                  ${renderMediaFrame(plate, tpl, { variant, showCaption: false, showCredit: false, fallbackLabel: plate.caption || sl.title })}
                  <div class="sl-plate-overlay">
                    <span class="sl-plate-num">${String(idx + 1).padStart(2, '0')}</span>
                    <div class="sl-plate-text">
                      ${plate.caption ? `<div class="sl-plate-cap">${esc(plate.caption)}</div>` : ''}
                      ${plate.credit ? `<div class="sl-plate-credit">${renderMediaCredit(plate, variant)}</div>` : ''}
                    </div>
                  </div>
                </div>`).join('')}
            </div>
            ${footer}
          </div>`;
      }

      /* ==================== 17. STAT SHOWCASE (NEW) ==================== */
      case 'stat-showcase': {
        const hs = sl.heroStat || {
          value: sl.bigNum || '100%',
          unit: '',
          label: sl.title || '',
          context: sl.lead || sl.subtitle || ''
        };
        const calloutCards = (sl.cards && sl.cards.length)
          ? sl.cards.slice(0, 3)
          : (sl.bullets || []).slice(0, 3).map((b, i) => ({ tag: `Điểm ${i + 1}`, title: b, body: '' }));
        return `
          <div class="sl-inner sl-stat-show">
            <div class="sl-stat-top${sl.media ? ' has-inset' : ''}">
              <div class="sl-stat-hero">
                <div class="sl-kicker">${esc(sl.kicker || 'Con số biết nói')}</div>
                <div class="sl-stat-metric">
                  <span class="sl-stat-value">${esc(hs.value)}</span>
                  ${hs.unit ? `<span class="sl-stat-unit">${esc(hs.unit)}</span>` : ''}
                </div>
                <h2 class="sl-stat-label">${esc(hs.label || sl.title)}</h2>
                ${hs.context ? `<p class="sl-stat-context">${esc(hs.context)}</p>` : ''}
              </div>
              ${sl.media ? `<div class="sl-stat-inset">${renderMediaFrame(sl.media, tpl, { variant, showCredit: false, fallbackLabel: hs.label || sl.title })}</div>` : ''}
            </div>
            ${calloutCards.length ? `
              <div class="sl-stat-cards" style="--stat-cols:${calloutCards.length}">
                ${calloutCards.map((c, idx) => `
                  <div class="sl-stat-card">
                    <div class="sl-card-tag">${esc(c.tag || c.num || String(idx + 1).padStart(2, '0'))}</div>
                    <div class="sl-stat-card-title">${esc(c.title)}</div>
                    ${c.body ? `<p class="sl-stat-card-body">${esc(c.body)}</p>` : ''}
                  </div>`).join('')}
              </div>` : ''}
            ${footer}
          </div>`;
      }

      /* ==================== 18. ANNOTATED DIAGRAM (NEW) ==================== */
      case 'annotated-diagram': {
        const callouts = (sl.callouts && sl.callouts.length)
          ? sl.callouts.slice(0, 4)
          : (sl.annotations && sl.annotations.length)
            ? sl.annotations.slice(0, 4).map((a, i) => ({ num: String(i + 1).padStart(2, '0'), label: a.tag, text: a.text }))
            : (sl.bullets || []).slice(0, 4).map((b, i) => ({ num: String(i + 1).padStart(2, '0'), label: `Chú giải ${i + 1}`, text: b }));
        return `
          <div class="sl-inner sl-diagram">
            <div class="sl-head-block">
              <div class="sl-kicker">${esc(sl.kicker || 'Sơ đồ giải phẫu & chú giải')}</div>
              <h2 class="sl-h2">${esc(sl.title)}</h2>
            </div>
            <div class="sl-diagram-body">
              <div class="sl-diagram-plate">
                ${sl.media
                  ? renderMediaFrame(sl.media, tpl, { variant, fallbackLabel: sl.visualCaption || sl.title })
                  : `<div class="sl-diagram-blueprint">
                      <div class="sl-fallback-grid" aria-hidden="true"></div>
                      ${renderMotifSVG(tpl.motif, p)}
                      ${sl.visualCaption ? `<div class="sl-vis-cap">${esc(sl.visualCaption)}</div>` : ''}
                    </div>`}
                ${!sl.media ? `<div class="sl-diagram-pins" aria-hidden="true">
                  ${callouts.map((c, idx) => `<span class="sl-diagram-dot dot-${idx + 1}">${esc(c.num || String(idx + 1).padStart(2, '0'))}</span>`).join('')}
                </div>` : ''}
              </div>
              <div class="sl-callout-list">
                ${callouts.map((c, idx) => `
                  <div class="sl-callout-item">
                    <span class="sl-callout-pin">${esc(c.num || String(idx + 1).padStart(2, '0'))}</span>
                    <div class="sl-callout-copy">
                      <div class="sl-callout-label">${esc(c.label)}</div>
                      <p class="sl-callout-text">${esc(c.text)}</p>
                    </div>
                  </div>`).join('')}
              </div>
            </div>
            ${footer}
          </div>`;
      }

      /* ==================== 19. CASE STUDY CARD (NEW) ==================== */
      case 'case-study-card': {
        const cs = sl.caseStudy || {};
        const metaChips = (cs.meta && cs.meta.length) ? cs.meta : (sl.meta || []);
        const contextText = cs.context || sl.lead || sl.subtitle || '';
        const mechanismText = cs.mechanism || (sl.bullets && sl.bullets[0]) || '';
        const takeawayText = cs.takeaway || (sl.bullets && sl.bullets[1]) || sl.note || '';
        return `
          <div class="sl-inner sl-case">
            <div class="sl-case-left">
              <div class="sl-case-photo">
                ${renderMediaFrame(sl.media, tpl, { variant, fallbackLabel: sl.title })}
              </div>
              ${metaChips.length ? `
                <div class="sl-case-meta">
                  ${metaChips.slice(0, 3).map(m => `<span class="sl-case-chip">${esc(m)}</span>`).join('')}
                </div>` : ''}
            </div>
            <div class="sl-case-right">
              <div class="sl-kicker">${esc(sl.kicker || 'Nghiên cứu điển hình')}</div>
              <h2 class="sl-h2">${esc(sl.title)}</h2>
              <div class="sl-case-stages">
                <div class="sl-case-stage">
                  <span class="sl-case-badge">01</span>
                  <div>
                    <div class="sl-case-st-lbl">Bối cảnh</div>
                    <p class="sl-case-st-txt">${esc(contextText)}</p>
                  </div>
                </div>
                <div class="sl-case-stage">
                  <span class="sl-case-badge">02</span>
                  <div>
                    <div class="sl-case-st-lbl">Cơ chế / Diễn biến</div>
                    <p class="sl-case-st-txt">${esc(mechanismText)}</p>
                  </div>
                </div>
                <div class="sl-case-stage is-takeaway">
                  <span class="sl-case-badge">03</span>
                  <div>
                    <div class="sl-case-st-lbl">Ý nghĩa</div>
                    <p class="sl-case-st-txt">${esc(takeawayText)}</p>
                  </div>
                </div>
              </div>
            </div>
            ${footer}
          </div>`;
      }

      /* ==================== 20. SUMMARY CLOSING ==================== */
      default:
        return `
          <div class="sl-inner sl-closing${sl.media ? ' has-backdrop' : ''}">
            ${sl.media ? `
              <div class="sl-quote-bg" aria-hidden="true">
                ${renderMediaFrame(sl.media, tpl, { variant, showCaption: false, showCredit: false, fallbackLabel: sl.title })}
                <div class="sl-quote-scrim"></div>
              </div>` : ''}
            <div class="sl-closing-inner">
              <div class="sl-kicker">${esc(sl.kicker)}</div>
              <div class="sl-closing-rule" aria-hidden="true"></div>
              <h2 class="sl-closing-title">${esc(sl.title)}</h2>
              ${sl.subtitle ? `<p class="sl-closing-sub">${esc(sl.subtitle)}</p>` : ''}
              ${sl.note ? `<div class="sl-closing-note">${esc(sl.note)}</div>` : ''}
            </div>
            ${footer}
          </div>`;
    }
  }

  /**
   * Renders a self-contained static slide canvas (used for template cards, hover-peek & filmstrip).
   * @param {object} template
   * @param {object} slide
   * @param {number} totalSlides
   * @param {{ variant?: 'stage' | 'thumb' }} [opts]
   */
  function renderStaticSlideHTML(template, slide, totalSlides, opts) {
    const tpl = template || { palette: DEFAULT_PALETTE };
    const sl = slide || {};
    const m = normalizeMorph(sl.morph);
    const mods = getCanvasModifierClasses(tpl.palette, sl.tone);
    const classes = `slide-canvas ${mods.toneClass} ${mods.deckClass} ${mods.accentClass}`;
    const orb1Size = numVal(m.orb1.size, 34);
    const orb2Size = numVal(m.orb2.size, 28);

    return `
      <div class="${classes}" style="${getPaletteStyle(tpl.palette)}">
        <div class="morph-layer" aria-hidden="true">
          <div class="morph-orb morph-orb-1" style="left:${numVal(m.orb1.x, 84)}%;top:${numVal(m.orb1.y, 18)}%;width:${orb1Size}%;height:${orb1Size * 1.45}%;border-radius:${sanitizeRadius(m.orb1.radius, '50%')};opacity:${numVal(m.orb1.opacity, 0.14)};transform:translate(-50%,-50%) rotate(${numVal(m.orb1.rot, 0)}deg)"></div>
          <div class="morph-orb morph-orb-2" style="left:${numVal(m.orb2.x, 14)}%;top:${numVal(m.orb2.y, 86)}%;width:${orb2Size}%;height:${orb2Size * 1.45}%;border-radius:${sanitizeRadius(m.orb2.radius, '50%')};opacity:${numVal(m.orb2.opacity, 0.1)};transform:translate(-50%,-50%) rotate(${numVal(m.orb2.rot, 0)}deg)"></div>
          <div class="morph-frame" style="left:${numVal(m.frame.x, 4)}%;top:${numVal(m.frame.y, 6)}%;width:${numVal(m.frame.w, 92)}%;height:${numVal(m.frame.h, 88)}%;border-radius:${sanitizeRadius(m.frame.radius, '18px')};opacity:${numVal(m.frame.opacity, 0.08)}"></div>
          <div class="morph-ribbon" style="left:${numVal(m.ribbon.x, 6)}%;top:${numVal(m.ribbon.y, 92)}%;width:${numVal(m.ribbon.w, 22)}%;opacity:${numVal(m.ribbon.opacity, 0.35)}"></div>
        </div>
        <div class="slide-content-layer">${renderSlideContentHTML(tpl, sl, totalSlides, opts)}</div>
      </div>`;
  }

  /**
   * Updates the persistent interactive Morph stage when moving between slides.
   */
  function updateMorphStage(stageEl, template, slide, totalSlides, morphEnabled) {
    if (!stageEl) return;
    const tpl = template || { palette: DEFAULT_PALETTE };
    const sl = slide || {};
    const m = normalizeMorph(sl.morph);
    const mods = getCanvasModifierClasses(tpl.palette, sl.tone);

    stageEl.setAttribute('style', getPaletteStyle(tpl.palette));
    stageEl.classList.toggle('morph-off', !morphEnabled);

    // Cleanly reset & apply surface tone + deck/accent polarity classes
    TONE_CLASSES.forEach(c => stageEl.classList.remove(c));
    POLARITY_CLASSES.forEach(c => stageEl.classList.remove(c));
    stageEl.classList.add(mods.toneClass, mods.deckClass, mods.accentClass);

    const orb1 = stageEl.querySelector('.morph-orb-1');
    const orb2 = stageEl.querySelector('.morph-orb-2');
    const frame = stageEl.querySelector('.morph-frame');
    const ribbon = stageEl.querySelector('.morph-ribbon');
    const contentLayer = stageEl.querySelector('.slide-content-layer');

    if (orb1) {
      const s1 = numVal(m.orb1.size, 34);
      orb1.style.left = `${numVal(m.orb1.x, 84)}%`;
      orb1.style.top = `${numVal(m.orb1.y, 18)}%`;
      orb1.style.width = `${s1}%`;
      orb1.style.height = `${s1 * 1.45}%`;
      orb1.style.borderRadius = sanitizeRadius(m.orb1.radius, '50%');
      orb1.style.opacity = String(numVal(m.orb1.opacity, 0.14));
      orb1.style.transform = `translate(-50%,-50%) rotate(${numVal(m.orb1.rot, 0)}deg)`;
    }
    if (orb2) {
      const s2 = numVal(m.orb2.size, 28);
      orb2.style.left = `${numVal(m.orb2.x, 14)}%`;
      orb2.style.top = `${numVal(m.orb2.y, 86)}%`;
      orb2.style.width = `${s2}%`;
      orb2.style.height = `${s2 * 1.45}%`;
      orb2.style.borderRadius = sanitizeRadius(m.orb2.radius, '50%');
      orb2.style.opacity = String(numVal(m.orb2.opacity, 0.1));
      orb2.style.transform = `translate(-50%,-50%) rotate(${numVal(m.orb2.rot, 0)}deg)`;
    }
    if (frame) {
      frame.style.left = `${numVal(m.frame.x, 4)}%`;
      frame.style.top = `${numVal(m.frame.y, 6)}%`;
      frame.style.width = `${numVal(m.frame.w, 92)}%`;
      frame.style.height = `${numVal(m.frame.h, 88)}%`;
      frame.style.borderRadius = sanitizeRadius(m.frame.radius, '18px');
      frame.style.opacity = String(numVal(m.frame.opacity, 0.08));
    }
    if (ribbon) {
      ribbon.style.left = `${numVal(m.ribbon.x, 6)}%`;
      ribbon.style.top = `${numVal(m.ribbon.y, 92)}%`;
      ribbon.style.width = `${numVal(m.ribbon.w, 22)}%`;
      ribbon.style.opacity = String(numVal(m.ribbon.opacity, 0.35));
    }

    if (contentLayer) {
      contentLayer.classList.remove('is-entering');
      contentLayer.innerHTML = renderSlideContentHTML(tpl, sl, totalSlides, { variant: 'stage' });
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
