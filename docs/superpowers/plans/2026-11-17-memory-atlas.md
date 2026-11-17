# Memory Atlas Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.
> **Before starting any task, read `docs/memory/HANDOFF.md`** — it records what is already done, decisions taken, and gotchas. Update it at the end of every task.

**Goal:** Add a third SiMarket app, *Memory Atlas*, showing 1980–2026 usage history (US$ and EB) of SRAM/DRAM/NOR/NAND/HDD/Tape, supply-vs-demand-vs-price for DRAM/NAND/HDD, and a 2025–2035 demand outlook by application segment; and move Si Market's market tabs into a sub-menu row.

**Architecture:** Static pages (`memory.html`, `memory_ko.html`) + one engine (`memory.js`) + one stylesheet (`memory.css`) + one generated bilingual data file (`memory_data.js`). Data is researched into sourced JSON files under `docs/memory/research/`, compiled by `tools/memory/build_memory_data.py`, and validated by `tools/memory/verify_memory_data.js`.

**Tech Stack:** Vanilla JS (ES2018), Apache ECharts 5.4.3 (CDN, same as other pages), CSS custom properties from `style.css`, Python 3 (build), Node.js (tests, uses repo `node_modules/echarts` for SSR smoke tests).

**Spec:** `docs/superpowers/specs/2026-11-17-memory-atlas-design.md`

## Global Constraints
- Accuracy policy of spec §3 applies to every number: quality flag `R|E|I|F`, ≥1 source id per series, 2–3 significant digits.
- History years 1980–2025 actual, 2026 = `E`; outlook 2025–2035.
- Units: revenue US$ billions nominal; capacity exabytes shipped per year (1 EB = 10^18 bytes, decimal); price US$/GB nominal annual average.
- Tech ids exactly: `sram, dram, nor, nand, hdd, tape`. Segment ids exactly: `ai_dc, cloud_dc, pc, smartphone, auto, robot, edge_other`. Supply ids exactly: `dram, nand, hdd`.
- EN/KO parity: every user-visible string in data is `{en, ko}`; `memory.html` and `memory_ko.html` are structurally identical (same element ids).
- Do not break existing pages: `index*.html`, `ai_capital*.html` must keep working; existing scratch tests must pass.
- Push to GitHub: clear token first: `$env:GITHUB_TOKEN=''; git push origin main` (run in pwsh directly, NOT via `powershell -Command "..."` which mangles `$env`).

## Review Focus
- Log-scale charts with `null`/0 values (NOR before 1988, NAND before 1989) must not crash or draw to -∞ → engine maps 0/null to `null` and test asserts no `0` in log series.
- Switching view/metric/scenario while playback is running must not leave stale series → engine uses `setOption(opt, true)` on view change; test toggles all combos.
- Mobile ≤768px: sub-menu bars scroll horizontally, charts keep ≥320px height.
- Light theme: all chart text colors re-read from theme on toggle.
- Si Market deep links (`#dram/2024_Q1`) must still select the right tab after the nav move (ids unchanged).

---

### Stage 0: Planning docs ✅
Files: this plan, spec, `docs/memory/HANDOFF.md`.

### Stage 1: Navigation restructure (Si Market sub-menu + 3-app nav)
**Files:** Modify `index.html`, `index_ko.html`, `ai_capital.html`, `ai_capital_ko.html`, `style.css` (append `/* App Nav & Sub-menu */` block). Test: `tools/memory/verify_nav.js`.
- [ ] Write `tools/memory/verify_nav.js`: for each of the 6 HTML files assert an element `nav.app-nav` with 3 `a.app-nav-link` hrefs (`index[_ko].html`, `ai_capital[_ko].html`, `memory[_ko].html`) of the same language, exactly one `.active`; for `index*.html` assert `.sub-menu-bar .market-selector` contains the 10 ids `tab-total, tab-dram, tab-flash, tab-logic, tab-analog, tab-opto, tab-power, tab-mcu, tab-foundry, tab-fabless` and that `.market-selector` is NOT inside `<header>`.
- [ ] Run → FAIL. Implement. Run → PASS. Run existing `scratch/*` tests → PASS.
- [ ] Commit `feat(nav): 3-app navigation and Si Market sub-menu`.

### Stage 2: Research datasets (parallelizable, one file per domain)
Output folder `docs/memory/research/`. Each domain produces `<domain>.json` + `<domain>.md` (method, caveats, source list). JSON format:
```json
{ "domain": "dram_sram", "units": {"revenue":"USD_B","capacity":"EB","price":"USD_per_GB"},
  "series": { "dram": { "revenue": { "1980": {"v": 0.6, "q": "R", "src": ["S1"]} }, "capacity": {}, "price": {} } },
  "sources": { "S1": {"publisher":"", "title":"", "url":"", "accessed":"2026-11-17"} },
  "notes": [""] }
```
Domains:
- [ ] `dram_sram` — DRAM & SRAM revenue, EB shipped, $/GB, 1980–2026E.
- [ ] `nand_nor` — NAND (1989+) & NOR (1988+) same three series.
- [ ] `hdd_tape` — HDD & tape media/drives revenue, EB shipped, $/GB, 1980–2026E.
- [ ] `supply` — DRAM/NAND vendor bit supply share & wafer capacity (kWPM) 2000–2026E, bit demand, cycle labels; HDD EB by vendor (Seagate/WDC/Toshiba) 2010–2026E.
- [ ] `outlook` — 2024/2025 baseline demand by segment + 2035 bear/base/bull with CAGR assumptions & sources.
- [ ] Reviewer pass: spot-check ≥10 R points per domain against cited sources; fix or downgrade flag.

### Stage 3: Build pipeline + data tests
**Files:** Create `tools/memory/build_memory_data.py`, `tools/memory/verify_memory_data.js`, generated `memory_data.js`.
- [ ] Write `verify_memory_data.js` asserting: schema of spec §4; years 1980..2026 contiguous; each array length == years length; quality flag present for every non-null value; all `src` ids exist in `sources`; no negative numbers; for dram/nand/hdd in years where all 3 exist `|price − revenue/capacity| / price ≤ 0.35`; vendor shares per year sum 100±1; outlook bull ≥ base ≥ bear for totals every year; every `{en,ko}` has both non-empty.
- [ ] Run → FAIL. Implement build script (merges research JSON, linear-interpolates gaps ≤3 years with flag `I`, writes `memory_data.js` as `window.memoryAtlas = {...};`). Run → PASS.
- [ ] Commit `feat(memory): sourced dataset + build pipeline`.

### Stage 4: Page shell (HTML/CSS)
**Files:** Create `memory.html`, `memory_ko.html`, `memory.css`.
Element ids (both languages): `mem-subnav` buttons `view-history|view-supply|view-outlook`; metric buttons `metric-revenue|metric-capacity|metric-price`; supply selector `supply-dram|supply-nand|supply-hdd`; scenario `scn-bear|scn-base|scn-bull`; outlook metric `out-capacity|out-revenue`; charts `mem-main-chart`, `mem-side-chart-a`, `mem-side-chart-b`; KPIs `kpi-mem-rev, kpi-mem-cap, kpi-dram-price, kpi-nand-price`; timeline `prev-btn, play-btn, next-btn, speed-control, timeline-slider, current-period`; `mem-year-display`, `milestone-list`, `side-table`, `sources-list`, `theme-toggle-btn`, `copy-citation-btn`, `toast-container`.
- [ ] Extend `verify_nav.js` → memory pages pass; add `tools/memory/verify_memory_dom.js` asserting all ids above exist in both files.
- [ ] Commit `feat(memory): page shell`.

### Stage 5: Engine `memory.js`
Public functions (module-scoped inside DOMContentLoaded, exposed on `window.__memoryAtlasTest` for tests): `buildHistoryOption(state) → EChartsOption`, `buildSupplyOption(state)`, `buildOutlookOption(state)`, `buildSideOptions(state) → {a, b}`, `render()`, `setView(id)`, `t(obj) → string` (picks `en|ko`). `state = {view, metric, supplyTech, scenario, outMetric, yearIndex, playing}`.
- [ ] Write `tools/memory/test_memory_engine.js` (vm sandbox like `scratch/test_browser_morph.js`; then real ECharts SSR render of each option for every view × metric × scenario × first/last year; assert no throw, series count, log axes contain no 0).
- [ ] Run → FAIL. Implement. Run → PASS.
- [ ] Commit `feat(memory): interactive engine`.

### Stage 6: Content, SEO, sitemap, README
- [ ] Insights cards (3), sources list rendering, citation text, JSON-LD, `sitemap.xml` entries for `memory.html` / `memory_ko.html`, README sections.
- [ ] Commit, push, watch Pages deploy, curl-verify live.

### Stage 7: Final review
- [ ] Fresh reviewer: whole-branch review vs spec + accuracy spot-check. Fix findings. Update HANDOFF.
