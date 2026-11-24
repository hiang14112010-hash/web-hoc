# Project: Fernora (`web-hoc`) — Lag-Free Entry, Authentic Valley Flowers & Editorial Presentations

## Architecture
Fernora is a zero-build static web application (HTML/CSS/vanilla JS) deployed via GitHub Pages (`https://hiang14112010-hash/web-hoc`).
- **Entry & Atmospheric Layer (`index.html`, `style.css`, `hero.js`)**: Instant, zero-lag direct landing into the dark-emerald night-meadow Fernora workspace (0 WebGL contexts, 0 `vendor/*.js` Three.js bundles, 0 continuous `requestAnimationFrame` loops). Optional ambient audio (`valley/audio/ge-ambient.mp3`) is lazy-loaded only on explicit `#sound` click. Bottom floral horizon (`#floral-horizon`) renders 9–11 curated pure-CSS botanical sprites sliced directly from `valley/flowers/pool_summer.png` (`1500×1312`, `8×7` grid) with moonlit glow, ground mist, staggered CSS sway, and subtle drifting `valley/dust-particle.png` motes.
- **Presentation Data Layer (`templates-data.js`)**: 20 subject-specific presentation decks across 8 Vietnamese academic subjects (856+ slides total). Provides rich, non-repeating content pools (multiple distinct formulas, quotes, quizzes, comparisons, timelines, processes, datasets, case studies, hero stats), 4 discipline-tuned pacing profiles, 20 `MORPH_PRESETS`, and 5–8 verified Wikimedia Commons `Special:FilePath` illustrative images per deck.
- **Editorial Slide Renderer & Styles (`slide-renderer.js`, `templates.css`)**: Renders 20 distinct editorial slide layouts on a proportional `16:9` `cqw` canvas with per-slide surface polarity (`light` / `dark` / `accent` / `photo`), Morph transition engine, lazy thumbnail (`480px`) vs stage (`1200px`) image loading, photo captions/credits, and automatic `.is-fallback` bespoke vector/editorial fallback so zero broken-image icons ever appear.
- **PPTX Export & App Controller (`pptx-exporter.js`, `app.js`)**: Zero-dependency `async` layout-aware OOXML `.pptx` exporter supporting all 20 layouts, slide tone backgrounds, new schema fields, and CORS-safe image fetch + Canvas JPEG normalization + `ppt/media/imageN.jpg` + `<p:pic>` embedding with graceful styled-frame fallback. `app.js` manages filtering, diacritic-insensitive search, favorites, hover-peek, 40+ slide Morph previewer, AI Studio modal, and Canva bridge.

## Code Layout
| Path | Owner Milestone | Purpose |
|------|-----------------|---------|
| `.gitignore` | M1 | Ignore `.agents/`, `.DS_Store`, `node_modules/` |
| `index.html` | M1 | Entry document, streamlined zero-lag workspace header, `#floral-horizon` sprite markup, modals, clean script tags (no `vendor/*.js`) |
| `style.css` | M1 | Base night-valley atmosphere, top nav, authentic sparse CSS-sprite `#floral-horizon` & dust motes |
| `hero.js` | M1 | Lightweight (<50 lines) ambient audio lazy-loader & minimal compatibility shim (0 WebGL, 0 rAF loop) |
| `slide-renderer.js` | M2 | 20 editorial slide layouts, `.sl-media-frame` + `.is-fallback` renderer, upgraded SVG motifs, Morph stage updater |
| `templates.css` | M2 | Discovery dock, cards, 20 slide layout styles (`cqw`), surface tone polarity (`.tone-dark`/`.tone-accent`/`.tone-photo`), media frame/fallback styles, previewer/modals (old SVG floral CSS removed) |
| `templates-data.js` | M3 | 20 decks (856+ slides), verified Wikimedia Commons `Special:FilePath` imagery, non-repeating per-deck content pools, 4 discipline pacing profiles, 20 `MORPH_PRESETS` |
| `pptx-exporter.js` | M4 | Async layout-aware OOXML `.pptx` exporter with CORS image fetch, Canvas JPEG resize/embed, and graceful fallback |
| `app.js` | M4 | Discovery/filter/search/favorites, hardened `localStorage`, null-safe hero bindings, leak-free hover-peek, `{ variant: 'thumb' }` filmstrip, async PPTX button states, modal keyboard guards |
| `tests/e2e/` | E2E Track | Opaque-box 4-tier Playwright + Node + PPTX ZIP/XML E2E test suite |

## Feature Inventory
Every Survey feature assigned a milestone (none unassigned).

| # | Feature | Description | Milestone | Source |
|---|---------|-------------|-----------|--------|
| F1 | Git Sync & `.gitignore` Hygiene | Sync from `origin/main` (`c53312c5`, PR #2 merged), branch `feat/lag-free-floral-and-crafted-slides`, add `.gitignore` excluding `.agents/` | M1 | survey_3 |
| F2 | Zero-Lag Entry (Eliminate WebGL) | Remove all 17 `vendor/*.js` scripts, `#valley` WebGL canvas, `#loader` 2.5s blocker, and continuous `rAF`; instant direct landing (<150ms FCP) | M1 | survey_1, ORIGINAL_REQUEST |
| F3 | Lazy Ambient Audio | Remove eager 3.2 MB `ge-ambient.mp3` fetch; lazy-load via native `Audio` only when user clicks `#sound` | M1 | survey_1 |
| F4 | Authentic Sparse Bottom Flowers (`#floral-horizon`) | Replace ugly SVG `#floral-horizon` with 9–11 curated CSS sprites sliced from `valley/flowers/pool_summer.png` (`8×7` grid) + ground mist + gentle CSS sway + subtle dust motes; responsive mobile layout | M1 | survey_1, ORIGINAL_REQUEST |
| F5 | 20 Editorial Slide Layouts | Expand `slide-renderer.js` & `templates.css` from 14 → 20 layouts (`hero-photo-bleed`, `editorial-split-photo`, `photo-gallery-triptych`, `stat-showcase`, `annotated-diagram`, `case-study-card`), visually differentiate `timeline` vs `process-flow` and `objectives` vs `bento-grid`, upgrade `cover` & `quote-focus` | M2 | survey_2, ORIGINAL_REQUEST |
| F6 | Per-Slide Surface Polarity (`tone`) | Add `.tone-light`, `.tone-dark`, `.tone-accent`, `.tone-photo` surface modifiers for dramatic editorial rhythm within every deck | M2 | survey_2 |
| F7 | Media Frame, Lazy Thumbs & Artistic Fallback | Render `.sl-media-frame` with `loading="lazy" decoding="async" referrerpolicy="no-referrer"`, `thumbUrl` (480px) vs `url` (1200px), captions/credits, and `onerror` `.is-fallback` bespoke vector/editorial backdrop (zero broken-image icons) | M2 | survey_2, survey_3 |
| F8 | Verified Web Illustrative Imagery (All 20 Decks) | Curate 5–8 verified Wikimedia Commons `Special:FilePath` illustrative images per deck (exact filenames verified via `google_search`) with Vietnamese `alt`, academic `caption`, and `credit` | M3 | survey_2, ORIGINAL_REQUEST |
| F9 | Non-Repetitive Human-Crafted Slide Content | Eliminate boilerplate & repeated formulas/quotes/quizzes/comparisons/timelines/processes across all 20 decks (856+ slides); add 4 discipline pacing profiles; enforce 0 consecutive identical layouts and >=3 surface tones per deck | M3 | survey_2, ORIGINAL_REQUEST |
| F10 | Async Layout-Aware PPTX Exporter | Upgrade `pptx-exporter.js` to `async` with layout-specific EMU geometry, `slide.tone` backgrounds, new schema fields, CORS fetch + Canvas JPEG normalization + `ppt/media/imageN.jpg` + `<p:pic>` with graceful fallback | M4 | survey_3 |
| F11 | App Controller Hardening | Fix `localStorage` try/catch, null-guard hero DOM bindings, clear `peekTimers` on re-render, pass `{ variant: 'thumb' }` for cards/peek/filmstrip, async PPTX loading/progress button state, top-modal keyboard guard, dynamic counts | M4 | survey_3 |
| F12 | Opaque-Box 4-Tier E2E Test Suite | Playwright + Node + PPTX ZIP/XML suite covering performance, zero console errors, floral sprites, slide diversity/media fallbacks, filters/search/favorites/previewer/AI Studio/PPTX export, and responsive viewports | E2E Track | survey_3, ORIGINAL_REQUEST |
| F13 | Final Integration, Tier 5 Hardening & GitHub PR | Pass 100% E2E Tiers 1–4, run Tier 5 adversarial hardening, verify clean git status (zero `.agents/` files), push branch & open GitHub PR | M5 | survey_3, ORIGINAL_REQUEST |

## Milestones
| # | Name | Scope | Dependencies | Status |
|---|------|-------|-------------|--------|
| M1 | Branch Setup, Zero-Lag Entry & Sparse Floral Horizon | F1, F2, F3, F4 (`.gitignore`, `index.html`, `style.css`, `hero.js`) | none | DONE |
| M2 | Editorial Slide Renderer & Stylesheet (20 Layouts) | F5, F6, F7 (`slide-renderer.js`, `templates.css`) | M1 | IN_PROGRESS |
| M3 | Rich Non-Repetitive Decks & Verified Web Imagery | F8, F9 (`templates-data.js`) | M1 | IN_PROGRESS |
| M4 | Async Layout-Aware PPTX Exporter & App Hardening | F10, F11 (`pptx-exporter.js`, `app.js`) | M1 | IN_PROGRESS |
| E2E | E2E Testing Track (Tiers 1–4) | F12 (`TEST_INFRA.md`, `TEST_READY.md`, `tests/e2e/`) | M1 | IN_PROGRESS |
| M5 | Final Milestone (E2E Pass, Tier 5 Hardening & PR) | F13 (integration fixes, Tiers 1–4 pass, Tier 5 adversarial, GitHub PR) | M2, M3, M4, E2E | PLANNED |

## Interface Contracts

### 1. Unified Slide Object Schema (`templates-data.js` → `slide-renderer.js` & `pptx-exporter.js`)
Every slide returned by `window.FERNORA_DATA.buildSlidesForTemplate(template, custom)` MUST conform to:
```js
{
  number: number,               // 1-indexed
  layout: string,               // One of 20 layouts:
                                // Existing 14: 'cover', 'agenda', 'objectives', 'section-break',
                                //   'split-visual', 'formula-spotlight', 'data-chart', 'timeline',
                                //   'comparison', 'bento-grid', 'process-flow', 'quote-focus',
                                //   'quiz-check', 'summary-closing'
                                // New 6: 'hero-photo-bleed', 'editorial-split-photo',
                                //   'photo-gallery-triptych', 'stat-showcase',
                                //   'annotated-diagram', 'case-study-card'
  tone: 'light' | 'dark' | 'accent' | 'photo', // Default 'light'
  chapterIndex: number,
  chapterName: string,
  kicker?: string,
  title?: string,
  subtitle?: string,
  lead?: string,
  note?: string,
  bigNum?: string,
  meta?: string[],
  bullets?: string[],
  items?: { num: string, title: string, desc: string }[],
  cards?: { num?: string, tag?: string, title: string, body: string, stat?: string }[],
  formula?: string,
  annotations?: { tag: string, text: string }[],
  bars?: { label: string, val: number, unit?: string }[],
  insightTitle?: string,
  insightBody?: string,
  steps?: { step: string, title: string, desc: string }[],
  leftTitle?: string, leftPoints?: string[],
  rightTitle?: string, rightPoints?: string[],
  quote?: string, author?: string,
  options?: string[], answer?: number,
  // Web-sourced illustrative media (optional, backward-compatible)
  media?: {
    url: string,                // Full stage image URL (e.g. Wikimedia Special:FilePath/...?width=1200)
    thumbUrl: string,           // Lightweight thumb URL (e.g. ?width=480)
    alt: string,                // Vietnamese alt text
    caption?: string,           // Academic caption
    credit?: string,            // License/source attribution
    focalPoint?: string         // CSS object-position, e.g. '50% 35%'
  },
  mediaPosition?: 'left' | 'right', // For editorial-split-photo
  heroStat?: { value: string, unit?: string, label: string, context?: string }, // For stat-showcase
  gallery?: Array<{ url: string, thumbUrl: string, alt: string, caption?: string, credit?: string, focalPoint?: string }>, // 3 items for photo-gallery-triptych
  callouts?: Array<{ num: string, label: string, text: string }>, // 3–4 pins for annotated-diagram
  caseStudy?: { meta?: string[], context: string, mechanism: string, takeaway: string }, // For case-study-card
  visualCaption?: string,
  morph: {
    orb1: { x: number, y: number, size: number, radius: string, opacity: number, rot: number },
    orb2: { x: number, y: number, size: number, radius: string, opacity: number, rot: number },
    frame: { x: number, y: number, w: number, h: number, radius: number, opacity: number },
    ribbon: { x: number, y: number, w: number, opacity: number }
  }
}
```
Each `Template` object in `window.FERNORA_DATA.TEMPLATES` may also include `peekIndices?: number[]` (4 diverse slide indices for hover-peek) and `coverMedia?: SlideMedia`.

### 2. Renderer API (`slide-renderer.js` → `app.js`)
- `window.FERNORA_RENDERER = { renderStaticSlideHTML, updateMorphStage, renderMotifSVG }`
- `renderStaticSlideHTML(template, slide, totalSlides, opts)`:
  - `opts` is optional; `{ variant: 'stage' | 'thumb' }` (default `'stage'`).
  - Uses `media.thumbUrl || media.url` when `variant === 'thumb'`, else `media.url`.
  - Every `<img>` MUST include `loading="lazy" decoding="async" referrerpolicy="no-referrer"`, an `onload` handler adding `.is-loaded` to `.sl-media-frame`, and an `onerror` handler adding `.is-fallback` to `.sl-media-frame` so `.sl-media-fallback` cleanly replaces any failed image (0 broken-image icons).
- `updateMorphStage(stageEl, template, slide, totalSlides, morphEnabled)`:
  - Updates `.slide-canvas` tone class (`.tone-light`/`.tone-dark`/`.tone-accent`/`.tone-photo`) alongside the 4 morph layers and `.slide-content-layer`.

### 3. PPTX Exporter API (`pptx-exporter.js` → `app.js`)
- `window.FERNORA_PPTX = { exportDeckToPPTX }`
- `async function exportDeckToPPTX(template, slides, optionsOrFileName)`
  - Supports both legacy string `fileName` and `{ fileName?: string, onProgress?: (done: number, total: number) => void, embedImages?: boolean }`.
  - Returns `Promise<{ fileName: string, slideCount: number, embeddedImages: number, failedImages: number, byteLength: number }>`.
  - Handles all 20 layouts, reflects `slide.tone` in slide background, reads all new fields (`heroStat`, `callouts`, `caseStudy`, `gallery`, `media.caption`/`credit`), fetches images with CORS + timeout + Canvas JPEG normalization (max `1280×720`, quality `0.80`), and falls back cleanly to a styled accent frame on offline/CORS error.

### 4. Floral Horizon Contract (`index.html`, `style.css` ↔ `templates.css`)
- `#floral-horizon` uses class `floral-horizon floral-botanical` styled in `style.css` using `valley/flowers/pool_summer.png` (`background-size: 800% 700%`, `background-position: calc(var(--c) * 100% / 7) calc(var(--r) * 100% / 6)`, `clip-path: inset(1px)`).
- 9–11 curated sprites framing bottom-left and bottom-right corners (leaving center open & uncluttered), plus optional 6–8 drifting `valley/dust-particle.png` motes.
- `templates.css` (owned by M2) removes the legacy SVG `.floral-horizon` / `.floral-svg` CSS rules so `style.css` is the single source of truth.

### 5. Git & Workspace Hygiene Contract
- Active branch: `feat/lag-free-floral-and-crafted-slides` branched from `origin/main`.
- `.gitignore` MUST ignore `.agents/`, `.DS_Store`, `node_modules/`.
- `.git/info/exclude` ignores `PROJECT.md`, `TEST_INFRA.md`, `TEST_READY.md` so orchestration state files are never committed to the repo.
