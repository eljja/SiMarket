# AI Capital Circulation & Ouroboros Loop Analysis Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build an interconnected interactive web application linked with SiMarket that models, visualizes, and analyzes the AI industry's circular financing flows ("Ouroboros loop") and Capex-Revenue gap from 2022 to 2026 via an interactive Force-Directed Knowledge Graph and synchronized Bar Chart.

**Architecture:** Client-side static architecture powered by vanilla ES6+ JavaScript and Apache ECharts. Data is pre-compiled into bilingual JSON structures (`ai_capital_data.js` and `ai_capital_data_ko.js`) capturing annual snapshots of entity market valuations, Capex, revenues, and directed transaction links. The UI provides a timeline playback engine, graph inspection drawers, dual-mode bar charts, and bidirectional cross-navigation with SiMarket.

**Tech Stack:** Vanilla JavaScript (ES6+), HTML5, CSS3 Glassmorphism, Apache ECharts 5.4.3, Node.js (verification suite).

**Spec:** `docs/superpowers/specs/2026-11-01-ai-capital-flow-design.md`

## Global Constraints
- **Zero Framework Overhead**: Vanilla JS and standard DOM APIs consistent with SiMarket architecture.
- **Dual-Language Parity**: English (`ai_capital.html`, `ai_capital_data.js`, `ai_capital.js`) and Korean (`ai_capital_ko.html`, `ai_capital_data_ko.js`, `ai_capital_ko.js`) must maintain 100% data and structural parity.
- **Theme Support**: Seamless Dark Mode and Light Mode switching with CSS custom properties.
- **Data Integrity**: All flow links, node IDs, and metrics across 2022–2026 must be validated by `scratch/verify_ai_capital.js` with zero errors.
- **Non-Destructive Integration**: Existing SiMarket dashboard functionality, charts, and performance must remain completely uncompromised.

## Review Focus
- Link and node synchronization when scrubbing the timeline slider across 2022–2026.
- Perceptual readability of node sizes (avoiding giant hyperscalers rendering startups invisible while preserving scale hierarchy).
- Force graph physics stability (avoiding edge tangling or jitter during playback).
- Mobile responsive layout for graph canvas, bar charts, and drawer modals.
- Bidirectional link integrity between `index.html` and `ai_capital.html`.

---

### Task 1: Comprehensive Data Models & Verification Test Suite

**Files:**
- Create: `scratch/verify_ai_capital.js`
- Create: `ai_capital_data.js`
- Create: `ai_capital_data_ko.js`

**Interfaces:**
- Produces: `window.aiCapitalTimelineData`, `window.aiCapitalTimelineDataKo`, `window.flowTypeDefinitions`, `window.categoryDefinitions`

- [ ] **Step 1: Write the failing verification test in `scratch/verify_ai_capital.js`**
Write a Node.js script that checks that `ai_capital_data.js` and `ai_capital_data_ko.js` exist, can be parsed, have periods for 2022, 2023, 2024, 2025, and 2026, have valid non-empty nodes and directed edges where `source` and `target` match defined node IDs, and have matching node structures between English and Korean datasets.

- [ ] **Step 2: Run verification test to verify it fails**
Run: `node scratch/verify_ai_capital.js`
Expected: FAIL (files missing).

- [ ] **Step 3: Implement `ai_capital_data.js` and `ai_capital_data_ko.js`**
Construct the complete empirical dataset covering 2022 through 2026:
- **Entities**: Microsoft, Alphabet/Google, Amazon/AWS, Meta, NVIDIA, TSMC, OpenAI, Anthropic, xAI, CoreWeave, Sequoia & VCs, End-User Enterprise Market.
- **Node Properties**: `id`, `name`, `category`, `marketCap`, `aiCapex`, `aiRevenue`, `desc`.
- **Edge Properties**: `source`, `target`, `flowType`, `amount` ($B), `desc`.
- **Annual Metrics**: Aggregated Capex vs. Real End-User Revenue gap, circular financing ratio.

- [ ] **Step 4: Run verification test to verify it passes**
Run: `node scratch/verify_ai_capital.js`
Expected: PASS with 0 errors and 0 warnings.

- [ ] **Step 5: Commit**
```bash
git add scratch/verify_ai_capital.js ai_capital_data.js ai_capital_data_ko.js
git commit -m "feat(data): Implement 2022-2026 AI capital circulation datasets and verification test"
```

---

### Task 2: Page Scaffolding & Responsive Styling

**Files:**
- Create: `ai_capital.css`
- Create: `ai_capital.html`
- Create: `ai_capital_ko.html`

**Interfaces:**
- Consumes: CSS variables from `style.css`
- Produces: Dashboard DOM structure with `.graph-container`, `.bar-container`, `.timeline-bar`, `.dossier-panel`, `.insights-section`

- [ ] **Step 1: Create `ai_capital.css`**
Implement styling for:
- Navigation bar with SiMarket cross-link pill, language toggle, and theme switch.
- Split-screen / dual-view grid: Left column (Interactive Force Graph), Right column (Comparative Bar Chart & Entity Dossier).
- Timeline control bar matching SiMarket's look and feel.
- Dark & Light mode theme overrides.
- Responsive breakpoints for desktop, tablet, and mobile.

- [ ] **Step 2: Create `ai_capital.html` (English)**
Construct the semantic HTML structure:
- Meta tags, OpenGraph social cards, Schema.org JSON-LD structured data.
- ECharts CDN script tag.
- Header, navigation pill, timeline controls, canvas containers, and educational FAQ/insights layer.

- [ ] **Step 3: Create `ai_capital_ko.html` (Korean)**
Construct the localized Korean version with matching IDs and localized labels.

- [ ] **Step 4: Verify syntax and layout integrity**
Run: `node -e "['ai_capital.html', 'ai_capital_ko.html'].forEach(f => require('fs').readFileSync(f, 'utf8'))"`
Expected: Clean read with zero syntax faults.

- [ ] **Step 5: Commit**
```bash
git add ai_capital.css ai_capital.html ai_capital_ko.html
git commit -m "feat(ui): Scaffold AI Capital Circulation dashboard pages and stylesheet"
```

---

### Task 3: Interactive Force Graph & Knowledge Network Engine

**Files:**
- Create: `ai_capital.js`
- Create: `ai_capital_ko.js`

**Interfaces:**
- Consumes: `ai_capital_data.js`, `ai_capital_data_ko.js`, Apache ECharts
- Produces: `initForceGraph()`, `updateGraphView()`, `showEntityDossier()`, `showEdgeDossier()`

- [ ] **Step 1: Implement Force Graph initialization in `ai_capital.js`**
Configure ECharts `series[type='graph']`:
- `layout: 'force'`, `force: { repulsion: 450, edgeLength: [80, 220], gravity: 0.12 }`.
- Node visual scale using square-root damping: `Math.max(26, Math.min(84, 18 + Math.sqrt(valuation) * 0.95))`.
- Directed edge symbols (`edgeSymbol: ['none', 'arrow']`, `edgeSymbolSize: 8`).
- Edge width calculation: `Math.max(2, Math.min(18, Math.sqrt(amount) * 2.2))`.
- Category color mappings and legend filtering.

- [ ] **Step 2: Implement node & edge click inspector**
Add interactive click handlers:
- Clicking a node highlights its direct inbound/outbound financial flows and opens an Entity Dossier modal showing Capex, Revenue, Market Cap, and key circular ties.
- Clicking an edge reveals transaction details, financing instrument, and risk classification.

- [ ] **Step 3: Implement localized engine in `ai_capital_ko.js`**
Port the graph engine with Korean tooltips, categories, and inspector labels.

- [ ] **Step 4: Verify JS syntax**
Run: `node --check ai_capital.js ai_capital_ko.js`
Expected: PASS.

- [ ] **Step 5: Commit**
```bash
git add ai_capital.js ai_capital_ko.js
git commit -m "feat(graph): Implement interactive force-directed knowledge network and transaction inspector"
```

---

### Task 4: Comparative Bar Chart & Timeline Playback Sync

**Files:**
- Modify: `ai_capital.js`
- Modify: `ai_capital_ko.js`

**Interfaces:**
- Consumes: `aiCapitalTimelineData`, `aiCapitalTimelineDataKo`
- Produces: `initBarChart()`, `updateBarChart()`, `syncTimeline()`, `playTimeline()`

- [ ] **Step 1: Implement multi-mode Bar Chart in `ai_capital.js`**
Provide two analytical bar chart modes:
1. **Entity AI Capex Ranking**: Horizontal ranked bars showing annual AI spending by company with category colors.
2. **The Sequoia AI Question (Gap View)**: Side-by-side or stacked bars contrasting Cumulative AI Infrastructure Capex against Real End-User AI Revenue.

- [ ] **Step 2: Implement timeline playback controller**
Implement:
- Play/pause toggle, step forward/backward buttons, speed dropdown (0.5s, 1s, 2s).
- Timeline slider tracking years 2022, 2023, 2024, 2025, 2026.
- Smooth transition updates synchronizing both the Force Graph and the Bar Chart simultaneously.

- [ ] **Step 3: Replicate in `ai_capital_ko.js`**
Ensure identical functionality and localized number formatting ($B, 조 원).

- [ ] **Step 4: Verify JS syntax**
Run: `node --check ai_capital.js ai_capital_ko.js`
Expected: PASS.

- [ ] **Step 5: Commit**
```bash
git add ai_capital.js ai_capital_ko.js
git commit -m "feat(timeline): Implement synchronized bar chart racer and timeline playback controller"
```

---

### Task 5: Bidirectional Navigation & Site Integration

**Files:**
- Modify: `index.html`
- Modify: `index_ko.html`
- Modify: `style.css`
- Modify: `sitemap.xml`

**Interfaces:**
- Consumes: Links between `index.html` and `ai_capital.html`
- Produces: Cross-navigation pills and updated sitemap entries

- [ ] **Step 1: Add cross-navigation pill in `index.html` & `index_ko.html`**
Add an aesthetic navigation button in the header:
- `index.html`: Link to `ai_capital.html` ("🔄 AI Capital Flow & Ouroboros Analysis").
- `index_ko.html`: Link to `ai_capital_ko.html` ("🔄 AI 자금 순환 및 라운드트리핑 분석").

- [ ] **Step 2: Add reciprocal cross-navigation in `ai_capital.html` & `ai_capital_ko.html`**
- `ai_capital.html`: Link back to `index.html` ("📊 Semiconductor Market Intelligence").
- `ai_capital_ko.html`: Link back to `index_ko.html` ("📊 글로벌 반도체 시장 점유율").

- [ ] **Step 3: Update `sitemap.xml`**
Add `ai_capital.html` and `ai_capital_ko.html` with `<lastmod>2026-11-01</lastmod>` and priority `0.9`.

- [ ] **Step 4: Verify XML and HTML syntax**
Run: `node scratch/verify_seo.js`
Expected: PASS.

- [ ] **Step 5: Commit**
```bash
git add index.html index_ko.html style.css sitemap.xml
git commit -m "feat(nav): Integrate bidirectional cross-navigation and update sitemap"
```

---

### Task 6: End-to-End Verification & GitHub Pages Deployment

**Files:**
- Test: `scratch/verify_ai_capital.js`
- Test: `scratch/verify_data.js`
- Test: `scratch/verify_seo.js`

- [ ] **Step 1: Run all verification suites**
Run:
- `node scratch/verify_ai_capital.js`
- `node scratch/verify_data.js`
- `node scratch/verify_seo.js`
- `node --check app.js app_ko.js data.js data_ko.js ai_capital.js ai_capital_ko.js ai_capital_data.js ai_capital_data_ko.js`
Expected: All suites exit with code 0.

- [ ] **Step 2: Push to GitHub repository**
Execute:
`$env:GITHUB_TOKEN="" ; git push origin main`

- [ ] **Step 3: Verify GitHub Pages deployment**
Check `gh run list --limit 1` and verify HTTP 200 responses on both English and Korean live endpoints.
