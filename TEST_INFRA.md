# Fernora (`web-hoc`) — E2E Test Infrastructure (`TEST_INFRA.md`)

## 1. Testing Philosophy & Methodology
This test suite uses an **opaque-box, requirement-driven 4-tier E2E methodology** derived strictly from `PROJECT.md` interface contracts and `ORIGINAL_REQUEST.md` user requirements. Tests interact with Fernora as a real user in headless Chromium (via Playwright) and validate exported `.pptx` archives using standard ZIP + OOXML XML parsers, plus invariant checks on the 20 presentation decks via Node/browser evaluation.

### Environment & Tooling
- **Python**: `3.12` (standard library `http.server`, `zipfile`, `xml.etree.ElementTree`, `socket`, `subprocess`)
- **Playwright**: `1.65.2` (headless Chromium from `/opt/ms-playwright`)
- **Node.js**: `v22` (for fast, deterministic content-invariant verification across all 20 decks / 856+ slides)
- **Local Server**: Managed automatically by `tests/e2e/run_e2e.py` on an ephemeral localhost port (`127.0.0.1:0` / dynamically bound free port) serving the repository root, cleanly terminated on exit.

### Container Network & Media Testing Strategy
Because outbound HTTP is blocked in the container environment, external Wikimedia Commons `<img>` URLs naturally trigger `onerror` in headless Chromium. Media verification therefore enforces **three complementary invariants**:
1. **URL Contract Check**: Every `media.url` / `media.thumbUrl` (and `gallery[].url` / `gallery[].thumbUrl`) across all 20 decks is a well-formed `https://commons.wikimedia.org/wiki/Special:FilePath/...` URL using `?width=1200` (stage) and `?width=480` (thumbnail), with non-empty Vietnamese `alt`, `caption`, and `credit`.
2. **Offline Graceful Fallback Check**: When external images fail/are blocked in headless Chromium, `.sl-media-frame.is-fallback` activates cleanly and `.sl-media-fallback` renders visible SVG/editorial fallback art with **zero broken-image icons** (`img` is hidden via CSS or cleanly replaced).
3. **Mocked Online Image Load Check**: Using Playwright `page.route` to intercept a Wikimedia URL and serve a valid local PNG/JPEG payload, `.sl-media-frame.is-loaded` activates and `img.naturalWidth > 0`.

---

## 2. Feature Inventory Mapping (F1–F12)

| Feature | Description | Covered In Tiers |
|---------|-------------|------------------|
| **F1** | Git Sync & `.gitignore` Hygiene | Verified at repo level; suite keeps workspace clean |
| **F2** | Zero-Lag Entry (0 WebGL, 0 `vendor/*.js`, 0 continuous `rAF`, load < 1.5s, 0 console/page errors) | Tier 1, Tier 2, Tier 4 |
| **F3** | Lazy Ambient Audio (`ge-ambient.mp3` not fetched on load; lazy-loaded only on `#sound` click) | Tier 1 |
| **F4** | Authentic Sparse Bottom Flowers (`#floral-horizon.floral-botanical`, `pool_summer.png` 1500×1312, 9–11 `.botanical-sprite`, 0 `.floral-svg`) | Tier 1, Tier 2 |
| **F5** | 20 Editorial Slide Layouts (14 existing + 6 new layouts rendered without error) | Tier 1, Tier 3, Tier 4 |
| **F6** | Per-Slide Surface Polarity (`.tone-light`, `.tone-dark`, `.tone-accent`, `.tone-photo`; `>= 3` distinct tones/deck) | Tier 1, Tier 3 |
| **F7** | Media Frame, Lazy Thumbs (`480px` vs `1200px`), Captions/Credits, `.is-fallback` & `.is-loaded` | Tier 1, Tier 2, Tier 3 |
| **F8** | Verified Web Illustrative Imagery (all 20 decks, `Special:FilePath`, `?width=1200`/`480`, `>= 10` slides with media/deck) | Tier 1, Tier 3 |
| **F9** | Non-Repetitive Human-Crafted Slide Content (`>= 856` slides, `consecSameLayout === 0`, 0 duplicate quizzes/formulas/quotes/comparisons per deck) | Tier 3, Tier 4 |
| **F10** | Async Layout-Aware PPTX Exporter (download completes, valid ZIP, valid OOXML XML, slide count matches, tone/content/media handling) | Tier 1, Tier 3, Tier 4 |
| **F11** | App Controller Hardening (`localStorage` resilience, null-safe hero, hover-peek cleanup, modal keyboard isolation, `#nav-home` scroll, dynamic counts) | Tier 1, Tier 2, Tier 3 |
| **F12** | Opaque-Box 4-Tier E2E Test Suite (`tests/e2e/run_e2e.py`) | Tiers 1–4 |

---

## 3. Suite Structure & Coverage Thresholds

```
tests/e2e/
├── run_e2e.py            # CLI entry point: --tier 1|2|3|4|all, ephemeral HTTP server, summary table
├── common.py             # Shared helpers: HTTP server, Playwright browser launch, mock PNG generator, PPTX ZIP/XML validator
├── tier1_features.py     # Tier 1: Feature Coverage (>= 5 tests per feature area; >= 25 tests total)
├── tier2_boundaries.py   # Tier 2: Boundary & Corner Cases (resilience, offline/online media, modals, responsive, reduced motion)
├── tier3_invariants.py   # Tier 3: Cross-Feature Combinations & All-20-Deck Content Quality Invariants
└── tier4_scenarios.py    # Tier 4: 6 Real-World End-User Vietnamese Student Workflows
```

### Tier Coverage Thresholds
- **Tier 1 (`tier1_features.py`)**: >= 5 independent tests per feature area:
  1. Zero-lag entry & lazy audio (load < 1.5s, 0 `vendor/*.js`, 0 WebGL contexts, 0 continuous `rAF`, 0 console/page errors, lazy audio).
  2. Authentic bottom floral horizon (`#floral-horizon.floral-botanical`, `pool_summer.png` 1500×1312, 9–11 `.botanical-sprite`, 0 `.floral-svg`, dust motes/framing).
  3. Discovery UI (8 subjects, 20 templates, purpose chips, Vietnamese diacritic-insensitive search, quick tags, sort modes, favorites persistence).
  4. Morph Previewer (40+ slides, Next/Prev, keyboard nav, filmstrip lazy thumbs, Morph toggle, Autoplay, swatch copy).
  5. AI Studio modal, Canva modal & async `.pptx` download + valid ZIP/OOXML XML check.
- **Tier 2 (`tier2_boundaries.py`)**: Corrupted `localStorage` JSON resilience, empty search + reset, offline image `.is-fallback` zero broken images, mocked online image `.is-loaded`, stacked modal keyboard isolation (`#canva-modal` over `#preview-modal`), `#nav-home` smooth scroll without hiding `#templates-view`, responsive viewports (`1440×900`, `768×1024`, `390×844`) zero horizontal overflow, `prefers-reduced-motion`.
- **Tier 3 (`tier3_invariants.py`)**: All 20 decks invariants (`>= 856` total slides, `consecSameLayout === 0`, `withMedia >= 10` per deck, `distinctTones >= 3` per deck, `0` duplicate quizzes/formulas/quotes/comparisons per deck, valid Wikimedia `Special:FilePath` URLs, all 20 layouts render cleanly) + multi-step cross-feature UI workflow (filter + search + favorite + reload + previewer + AI Studio + `.pptx` export).
- **Tier 4 (`tier4_scenarios.py`)**: 6 full end-user Vietnamese student workflows (Toán Giải tích STEM deck, Lịch sử VN documentary deck, Sinh học DNA lab deck, Ngữ văn literary deck, AI custom 44-slide deck → Morph review → `.pptx` download & XML validation, mobile `390×844` student browsing).

---

## 4. Runner Invocation

```bash
# Run individual tiers
python3 tests/e2e/run_e2e.py --tier 1
python3 tests/e2e/run_e2e.py --tier 2
python3 tests/e2e/run_e2e.py --tier 3
python3 tests/e2e/run_e2e.py --tier 4

# Run all 4 tiers
python3 tests/e2e/run_e2e.py --tier all
```

### Exit Codes & Output
- Prints a formatted pass/fail summary table grouped by tier, including per-test duration and failure diagnostics.
- Exits `0` **only** if every test in the requested tier(s) passes; exits `1` if any test fails or errors.
