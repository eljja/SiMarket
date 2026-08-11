# SiMarket - Global Semiconductor Market Intelligence Dashboard (1970–2026)

🌐 **[한국어 설명 (Korean)](README_KO.md)** | **Live Dashboard:** **[https://eljja.github.io/SiMarket/](https://eljja.github.io/SiMarket/)**

An interactive, high-fidelity data visualization dashboard tracing the historical market size, segment revenues, and vendor shares of the global semiconductor industry from 1970 through the AI-driven computing peak in 2026.

![SiMarket Preview](simarket_preview.png)

---

## 🚀 Project Overview (What this Repo Did)

This repository hosts a multi-market, dual-language semiconductor market intelligence dashboard. Starting as a basic DRAM tracker, the project has evolved into a comprehensive analytics suite that covers:
* **10 Dashboard Categories**: Traces the market size and vendor shares across 10 distinct sub-sectors:
  1. **Total Semiconductor** (Aggregate dollar revenue model)
  2. **DRAM** (Dynamic Random-Access Memory)
  3. **Flash Memory** (NAND & NOR Flash)
  4. **Logic IC** (Microprocessors, GPUs, and custom accelerators)
  5. **Analog** (RF, Power Management, and Op-Amps)
  6. **Opto & CIS** (Image sensors and optical electronics)
  7. **Power & Discrete** (IGBTs, MOSFETs, and wide-bandgap SiC/GaN devices)
  8. **MCU** (Microcontrollers)
  9. **Foundry** (Pure-play wafer fabrication)
  10. **Fabless** (Design-only semiconductor vendors)
* **Rigorous Data Auditing & Reconciliation**: Restructured the historical timeline database (from 2006 to 2026 Q2) using actual quarterly dollar revenues reported in corporate SEC filings, eliminating synthetic share formula anomalies (such as NVIDIA's 2023 Q1 share spike) and reconciling individual segment totals with aggregate semiconductor revenues.
* **Dual-Language Parallelization**: Fully localized interactive tooltips, charts, statistics cards, and chronological milestones across both English (`index.html` / `app.js` / `data.js`) and Korean (`index_ko.html` / `app_ko.js` / `data_ko.js`).

---

## 🎯 Core Strategy & Visualization Features

The dashboard is designed to provide actionable business intelligence through a premium user interface:
* **Dynamic Bar Chart Race (ECharts)**: Animates market share rankings over time, allowing users to watch historical corporate rises, acquisitions, and consolidation cycles.
* **Dual-Metric Toggle**: Switches between **Revenue (USD Billions)** and **Byte Capacity Shipped** (specifically for DRAM/Flash memory capacity scaling) or **Wafer Capacity/Device Units** where applicable.
* **Logarithmic Scale Trend Lines**: Displays the exponential scale of silicon shipment volumes spanning 9+ orders of magnitude over 50 years.
* **Glassmorphic Dark Theme**: A responsive UI built using modern glassmorphism design tokens, subtle CSS micro-animations, and dynamic visual color mapping per vendor.
* **SEO & Crawl Optimization**: Pre-configured with a 3D microprocessor favicon, custom `sitemap.xml`, and strict canonical mapping to enable indexing by search engines.

---

## 📌 Development Status (Where it Stands)

- [x] **10-Category Coverage**: Complete database covering all major silicon categories from 1970 to 2026 Q2.
- [x] **Rigorous Mathematics**: Verified that segment sums match the total aggregate dollar market size.
- [x] **Consolidation History**: Accurately maps major M&A events (e.g., Micron acquiring Elpida, AMD spinning off GlobalFoundries, Renesas MCU consolidation).
- [x] **Last Updated Timestamp**: Integrates an automated date badge in the header, indicating the last build date.
- [x] **Data Audit Tool**: Implements a Node.js validation test suite (`verify_data.js`) to guarantee sum-to-100% share compliance.

---

## 🔄 Update & Execution Cycle

The database is designed to be updated on a **quarterly cycle** as semiconductor leaders publish their fiscal reports:

1. **Update generator inputs**: Adjust parameters and quarterly revenue metrics inside `scratch/generate_data.py`.
2. **Compile database**: Run the generator script to compile and format the output databases:
   ```bash
   python scratch/generate_data.py
   ```
3. **Verify data integrity**: Execute the automated validation test to verify math and remote sync:
   ```bash
   node scratch/verify_data.js
   ```
4. **Deploy live**: Commit and push changes to `main` branch. GitHub Actions automatically deploys the static files to GitHub Pages.

---

## 📂 Directory Structure

```
SiMarket/
├── index.html          # Main English dashboard layout
├── index_ko.html       # Main Korean dashboard layout
├── style.css           # Premium dark-theme stylesheet
├── app.js              # English interactive playback & ECharts binding
├── app_ko.js           # Korean interactive playback & ECharts binding
├── data.js             # Compiled English database (1970-2026)
├── data_ko.js          # Compiled Korean database (1970-2026)
├── robots.txt          # Crawler instructions
├── sitemap.xml         # XML sitemap for SEO
├── favicon.png         # 3D Microchip Favicon
├── simarket_preview.png # Dashboard visual preview for README
└── scratch/
    ├── generate_data.py # Automated database compiler
    └── verify_data.js   # Validation test suite
```

---

## 🧪 Database Validation

To ensure no mathematical errors are introduced during updates, run the validation script:
```bash
node scratch/verify_data.js
```
The script will perform a:
* **Sum-to-100% check**: Validates that all market shares sum to exactly 100% (+/- 0.1% floating-point tolerance).
* **Cross-segment revenue check**: Confirms that DRAM + Flash + Logic + Analog + Opto + Power + MCU revenues match the aggregate total semiconductor revenue.
* **Remote checksum check**: Pulls down the remote file from `github.io` and compares its SHA-256 hash to confirm successful page deployment.

---

## 📄 License

This project is licensed under the **Apache License 2.0** - see the [LICENSE](LICENSE) file for details.

