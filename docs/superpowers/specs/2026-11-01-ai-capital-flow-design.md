# AI Capital Circulation & Ouroboros Loop Analysis - Design Specification

## 1. Executive Overview & Problem Context

The global Artificial Intelligence industry has entered an unprecedented capital cycle characterized by **"Circular Financing" (순환금융 / Round-tripping)** and **"Vendor Financing" (판매자 금융)**.

While billions of dollars flow through the ecosystem, market analysts, regulators, and venture funds (notably Sequoia's *"The $600B AI Question"*) have raised alarms:
1. **Cloud Credit Swaps**: Big Tech hyperscalers invest billions in frontier AI startups, which is immediately returned as cloud infrastructure revenue.
2. **NVIDIA's Reinvestment Loop**: Hardware profits are reinvested into AI startups and Neoclouds (e.g., CoreWeave), which borrow billions using GPUs as collateral to buy even more GPUs.
3. **The Capex vs. Revenue Gap**: Over $250B+ in annual hardware and data center Capex is chasing only $20B-$35B in real enterprise/consumer software revenue.

This project builds an interconnected interactive web application linked to SiMarket that visually exposes, tracks, and analyzes this capital network across **2022 to 2026**.

---

## 2. System Architecture & Requirements

### 2.1 File Map
- `ai_capital.html`: English landing page and dashboard.
- `ai_capital_ko.html`: Korean localized landing page and dashboard.
- `ai_capital.css`: Stylesheet extending the SiMarket semiconductor glassmorphic aesthetic (with Light/Dark theme compatibility, graph canvas layout, and dossier drawer).
- `ai_capital_data.js`: English graph database (nodes, edges, bar chart metrics, timeline narratives from 2022 to 2026).
- `ai_capital_data_ko.js`: Korean localized graph database.
- `ai_capital.js`: English chart engine, ECharts force graph controller, timeline animator, node-link click inspectors, bar chart sync.
- `ai_capital_ko.js`: Korean chart engine and UI handlers.
- `index.html` & `index_ko.html`: Modified to include bidirectional navigation pills linking SiMarket and AI Capital Flow.
- `sitemap.xml`: Updated to include `ai_capital.html` and `ai_capital_ko.html`.

### 2.2 Core Visualization Components
1. **Interactive Knowledge Graph (`type: 'graph', layout: 'force'`)**:
   - **Nodes**: Enterprise entities (Hyperscalers, Chipmakers, AI Labs, Neoclouds, Venture/Sovereign, Real Revenue End-Market).
   - **Node Sizing**: Scaled meaningfully to Enterprise Value / Market Cap via square-root damping: `Math.max(26, Math.min(84, 18 + Math.sqrt(valuation) * 0.95))`.
   - **Links (Edges)**: Directed financial flows with edge thickness proportional to transaction volume ($ Billions): `Math.max(2, Math.min(18, Math.sqrt(amount) * 2.2))`.
   - **Edge Types & Color Coding**:
     - Equity & Debt Investment (Gold / Amber `#ffb300`)
     - Cloud Compute Credits (Cyan `#00e5ff`)
     - GPU Hardware Purchases (Emerald `#10b981`)
     - GPU-Backed Debt Collateral (Purple `#a855f7`)
     - Real End-User Software Revenue (Sky Blue `#38bdf8`)
   - **Interactivity**: Node hover/click reveals an Entity Financial Dossier; edge hover/click displays transaction instrument details.

2. **Comparative Bar Chart / Metric Racer**:
   - Toggleable between:
     - **Entity AI Capex Rankings** (Annual hardware/infrastructure spending)
     - **The Sequoia Gap: Cumulative Capex vs. End-User Revenue** (Visualizing the widening deficit)
     - **Circular Capital Ratio** (% of AI lab revenues funded by their own investors)

3. **Year-by-Year Timeline Controller (2022–2026)**:
   - Slider + Play/Pause button + Speed selector (0.5s, 1s, 2s).
   - Dynamically transitions graph nodes, edge thicknesses, and bar chart values across the 5 pivotal years:
     - **2022**: Pre-ChatGPT foundations (MSFT OpenAI investment, modest Capex).
     - **2023**: Generative AI explosion (ChatGPT launch, H100 shortages, Big Tech cloud lock-in).
     - **2024**: The Circular Apex ($600B Question, Neocloud debt collateral boom, Anthropic multi-billion bidding).
     - **2025**: The Stargate & Infrastructure Rush ($100B+ cluster plans, B200 transitions, vendor financing under scrutiny).
     - **2026**: Monetization Reckoning & Capex Wall (Antitrust probes, enterprise ROI friction, ASIC competition).

4. **Executive Structural Intelligence & Risk Breakdown**:
   - Explanatory architecture cards detailing the 3 core loops and 4 bubble risk vectors.
   - Citation & academic attribution magnet.
