# Memory Atlas — Design Spec (SiMarket 3rd app)

Date: 2026-11-17 · Owner: SiMarket · Status: APPROVED (user: "계획 세우고 바로 진행해")

## 1. What the user asked for (verbatim intent)
1. A third app next to **Si Market** and **AI Capital Flow**: a global **memory usage history + forecast** system.
2. Six storage technologies: **SRAM / DRAM / NOR / NAND / HDD / Tape**.
3. History from the past to now, **both value (USD) and capacity (bytes)**, with a layout equivalent to the existing plots (playback timeline, main chart, sidebar analytics).
4. **Accuracy is the top priority** ("정확성이 생명").
5. **Supply vs demand**: major vendors' production capacity (from public info) vs actual consumption, and the resulting **price** path.
6. **10-year outlook** by demand segment: AI, autonomous driving, robots, data center, personal PC, and other sinks (smartphone, IoT/edge, consumer, industrial) — one dedicated graph.
7. Work must be **planned and documented per stage** so another LLM can continue with the same quality.
8. Navigation: with a 3rd app, move Si Market's market tabs (`Total Semiconductor … Fabless`) **one row down into a sub-menu**.

## 2. Product structure
Pages: `memory.html` (EN) and `memory_ko.html` (KO). Shared header with a 3-item **app nav**:
`📊 Si Market` · `🔄 AI Capital Flow` · `💾 Memory Atlas` (active item highlighted). Same nav on all 6 HTML pages.

Memory Atlas has its own **sub-menu bar** (same component as Si Market's new sub-menu) with 3 views:

| View id | Label (EN / KO) | Main chart | Sidebar |
|---|---|---|---|
| `history` | Usage History / 사용량 히스토리 | Time series 1980→2025(+2026E) of the 6 techs. Metric toggle **Revenue (US$B)** / **Capacity (EB shipped)** / **Price ($/GB)**. Revenue = stacked area; Capacity & Price = log-scale lines. Playback progressively reveals years; vertical marker on the selected year. | Year snapshot ranking bar (6 techs), share donut, KPI cards, milestone card for the year |
| `supply` | Supply · Demand · Price / 수급·가격 | Tech selector **DRAM / NAND / HDD**. Stacked bars = vendor bit-supply (EB) by vendor; line = bit demand (EB); 2nd axis (log) = avg price $/GB. Shaded bands for shortage / glut years. | Sufficiency ratio (supply/demand −1, %), vendor share for selected year, wafer capacity (kWPM) table by vendor, cycle note |
| `outlook` | 10-Year Outlook / 10년 전망 | 2025→2035 stacked area of memory+storage demand by **segment**: AI data center (training/inference incl. HBM), conventional cloud/enterprise DC, PC, smartphone, automotive/autonomous, robotics (humanoid/industrial), edge/IoT & other. Toggle **Capacity (EB)** / **Revenue (US$B)**; scenario toggle **Bear / Base / Bull**. | Segment CAGR table, tech mix in 2035 (DRAM/HBM/NAND/HDD/Tape), key assumptions list with sources |

Common blocks (copied from existing pages for visual parity): hero marketing bar, KPI ribbon (4 KPIs for the selected year), insights section, citation box, **Sources & Data Quality** section listing every source id.

## 3. Accuracy policy (non-negotiable)
- Every numeric datapoint carries a **quality flag**: `R` = reported by an authoritative publisher (WSTS, Gartner, TrendForce, IC Insights/TechInsights, Yole, IDC, company filings, Coughlin, LTO Program, Backblaze, John C. McCallum price tables); `E` = estimate derived from sources (method written in the research note); `I` = interpolated between R/E points; `F` = forecast.
- Every series has at least one **source id**; sources are listed on the page.
- UI renders `E/I` points with dashed lines / hatched style and `F` region with a shaded "Forecast" band, and tooltips show the flag + source.
- Consistency checks enforced by tests: Price ≈ Revenue / Capacity within tolerance where all three are given (for DRAM, NAND, HDD); no negative values; monotone year axis; EN/KO text parity; vendor shares sum to 100 ± 1 %.
- Where public data does not exist (e.g., SRAM bits shipped, NOR in 1980s), we either omit (null) or mark `E` with an explicit method. **Never invent precision**: round to 2–3 significant digits.
- Start year **1980** for history (earliest year with defensible data for most techs; earlier years are too sparse). NOR starts 1988, NAND 1989, values null before.

## 4. Data architecture
Single data file `memory_data.js` (bilingual text inline as `{en, ko}`), single engine `memory.js` (language from `<html lang>`), one stylesheet `memory.css`. This deviates from the EN/KO file duplication of older apps on purpose: one source of truth for numbers removes the parity risk.

```js
window.memoryAtlas = {
  meta: { version, buildDate, historyStart: 1980, historyEnd: 2025, estimateYear: 2026, outlookEnd: 2035 },
  techs: [ { id: 'sram'|'dram'|'nor'|'nand'|'hdd'|'tape', color, name: {en,ko}, desc: {en,ko} } ],
  history: {
    years: [1980, …, 2026],
    revenue:  { <techId>: [ number|null ] },   // US$ billions, nominal
    capacity: { <techId>: [ number|null ] },   // exabytes shipped that year (1 EB = 1e18 B)
    price:    { <techId>: [ number|null ] },   // US$ per GB, nominal, annual average
    quality:  { revenue|capacity|price: { <techId>: [ 'R'|'E'|'I'|'F'|null ] } },
    sources:  { revenue|capacity|price: { <techId>: [sourceId, …] } }
  },
  supply: {
    <'dram'|'nand'|'hdd'>: {
      years: [ … ],
      vendors: [ { id, name: {en,ko}, color } ],
      bitSupply: { <vendorId>: [EB|null] },      // HDD: EB shipped by vendor
      waferCapacity: { <vendorId>: [kWPM|null] },// DRAM/NAND only, year-end wafer starts/month
      demand: [EB], price: [$/GB],
      cycle: [ 'shortage'|'balanced'|'glut' ],
      quality: { … }, sources: [ … ]
    }
  },
  outlook: {
    years: [2025, …, 2035],
    segments: [ { id: 'ai_dc'|'cloud_dc'|'pc'|'smartphone'|'auto'|'robot'|'edge_other', color, name:{en,ko} } ],
    scenarios: { bear|base|bull: { capacity: { <segId>: [EB] }, revenue: { <segId>: [US$B] } } },
    techMix2035: { bear|base|bull: { dram, hbm, nand, hdd, tape } },   // % of capacity
    assumptions: [ { text:{en,ko}, sources:[…] } ]
  },
  milestones: [ { year, tech, text: {en,ko} } ],
  sources: [ { id, publisher, title, url, accessed } ]
};
```

Pipeline: research JSON (`docs/memory/research/*.json`) → `tools/memory/build_memory_data.py` → `memory_data.js`. The build script is the only writer of `memory_data.js`.

## 5. Si Market navigation change
- `index.html` / `index_ko.html`: header keeps logo + lang + theme on the left and the new 3-item app nav on the right. The existing `.market-selector` (10 tab buttons, same ids `tab-total` … `tab-fabless`) moves into a new `<nav class="glass-panel sub-menu-bar">` directly below the header. Button ids and `app.js` logic unchanged.
- The old inline "AI Capital Flow" gold link button in the logo area is removed (replaced by the app nav).
- `ai_capital*.html`: right-side 2-pill nav replaced by the same 3-item app nav.

## 6. Non-goals
- No backend, no live data fetching. Static GitHub Pages.
- No per-quarter granularity (annual only; supply view may show 2026 as `E`).
