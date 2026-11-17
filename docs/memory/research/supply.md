# Memory Supply, Demand, Wafer Capacity & Cycle Dataset (`supply.json`)

**Date:** 2026-11-17  
**Domain:** `supply` (DRAM 2000–2026E, NAND 2000–2026E, HDD 2010–2026E)

---

## 1. Methodology & Traceability

1. **Vendor Market Shares (`vendorShare`, %):**
   - **DRAM (2000–2026E):** Sourced from TrendForce (DRAMeXchange) quarterly/annual branded DRAM revenue and bit trackers (`S1`) and historical Gartner Dataquest / iSuppli reports (`S2`). Covers `samsung`, `skhynix` (Hyundai/Hynix), `micron`, `elpida` (NEC/Hitachi/Mitsubishi DRAM JV formed 1999, bankrupt Feb 2012, acquired by Micron in July 2013 → `0%` from 2014), `qimonda` (Infineon memory spin-off, insolvent Jan 2009 → `0%` from 2010), `nanya`, `cxmt` (ChangXin Memory Technologies, commercial entry 2020), and `others` (Winbond, Powerchip/PSMC, ProMOS, Mosel Vitelic, early Toshiba/Mitsubishi).
   - **NAND Flash (2000–2026E):** Sourced from TrendForce (`S8`), Omdia / IHS Markit / Forward Insights (`S9`), and JV disclosures (`S10`). Covers `samsung`, `kioxia` (Toshiba Memory prior to Oct 2019 rebranding), `wdc` (SanDisk prior to May 2016 acquisition by Western Digital), `skhynix` (including Solidigm after Dec 2021 Phase 1 closing of Intel NAND acquisition), `micron`, `intel` (standalone IMFT/Dalian share through 2021 → `0%` from 2022), `ymtc` (Yangtze Memory Technologies, commercial 3D Xtacking volume from 2020), and `others` (Renesas, STMicroelectronics, Macronix, Winbond).
   - **HDD (2010–2026E):** Sourced from Coughlin Associates (`S11`), TRENDFOCUS (`S12`), and company Form 10-K / earnings releases (`S13`). Covers `seagate`, `wdc`, and `toshiba` on an exabyte-shipped basis. For 2010–2011, shares and exabytes are presented on a pro-forma consolidated basis (WDC includes HGST acquired Mar 2012; Seagate includes Samsung HDD acquired Dec 2011; Toshiba includes Fujitsu HDD acquired 2009–2010) so the three surviving OEMs sum to 100.0% across the entire 2010–2026 series.

2. **Wafer Capacity (`waferCapacityKwpm`, 300mm-Equivalent kWPM):**
   - Represents year-end active 300mm-equivalent wafer starts per month in thousands (`kWPM`), sourced from TrendForce, TechInsights (formerly IC Insights), SemiAnalysis, and company fab disclosures (`S3`, `S4`, `S7`, `S10`).
   - For 2000–2005 (when 200mm lines still represented a substantial share of DRAM and NAND output), 200mm wafer starts are converted into 300mm-equivalents using the standard $2.25\times$ wafer surface area ratio and flagged `E`.
   - Kioxia and Western Digital joint-venture fabs (Yokkaichi and Kitakami Flash Ventures) are split according to each partner's respective wafer allocation (~55–57% Kioxia, ~43–45% WDC).
   - The 2023 drop in active kWPM reflects coordinated industry utilization cuts (down to 55–70% across Samsung, SK hynix, Micron, and Kioxia/WDC) during the post-pandemic inventory glut.

3. **Bit Supply, Bit Demand & Market Cycle (`bitShipmentsEB`, `bitDemandEB`, `bitSupplyGrowthPct`, `bitDemandGrowthPct`, `cycle`):**
   - `bitShipmentsEB` (total decimal exabytes shipped, $1\text{ EB} = 10^{18}\text{ bytes} = 8\text{ billion Gb}$) is aligned with the historical capacity series in `nand_nor.json` and `hdd_tape.json`, and with TrendForce / Mirae Asset gigabit shipment totals for DRAM (`S5`, e.g., 210B Gb = 26.3 EB in 2023, 247B Gb = 30.9 EB in 2024, 303B Gb = 37.9 EB in 2025).
   - `bitDemandEB` is derived from `bitShipmentsEB` and the annual supply/demand sufficiency ratio reported by TrendForce (`S1`, `S5`, `S8`) and Coughlin/TRENDFOCUS (`S11`, `S12`):
     - During `"shortage"` years (e.g., 2017–2018 cloud/mobile supercycle, 2021 pandemic crunch, 2024–2026E AI/HBM/eSSD/nearline tightness, 2011–2012 Thailand HDD floods), unfulfilled end-demand exceeds shipped supply by **+3% to +10%**.
     - During `"glut"` years (e.g., 2001 dot-com bust, 2007–2008 Vista/GFC crash, 2011–2012 DRAM winter, 2019 datacenter digestion, 2022–2023 post-pandemic inventory correction), actual end-demand trails shipped supply by **6% to 11%** as excess bits accumulate in supplier and OEM inventories.
     - During `"balanced"` years, `bitDemandEB` is within **±1%** of `bitShipmentsEB`.

4. **HBM Revenue (`hbmRevenueBusd`, 2015–2026E):**
   - Tracks global High Bandwidth Memory revenue in nominal US$ billions from initial HBM1 commercialization (`$0.05B` in 2015) and HBM2/2E HPC adoption (`$0.18B–$1.8B` across 2016–2022) to the Generative AI breakout (`$4.4B` in 2023, `$14.5B` in 2024, `$34.0B` in 2025, and `$54.6B` estimated in 2026E on HBM3E 12-hi and HBM4 ramps), sourced from Yole Group, TrendForce, and BofA Global Research (`S6`, `S1`).

---

## 2. Caveats & Data Quality Confidence

- **Quality Flags:**
  - `R` (Reported): Direct annual/quarterly vendor shares, bit shipments, and post-2010 fab capacity figures from TrendForce, Gartner, Coughlin Associates, TRENDFOCUS, and company filings (2000–2025).
  - `E` (Estimated): 2026 full-year projections (`2026E`), pre-2010 300mm-equivalent wafer conversions, early HBM niche revenues (2015–2021), and structural end-demand (`bitDemandEB`) derived from sufficiency ratios.
- **Revenue vs. Bit Share Nuance (2023–2026E DRAM):** Because HBM commands a $4\times–5\times$ ASP premium per bit over commodity DDR4/DDR5 while consuming $\sim3\times$ the wafer area per bit ("TSV wafer penalty"), SK hynix's revenue market share surged to 33.5–34.5% in 2024–2025 even while Samsung retained the largest total DRAM wafer capacity (`615–660 kWPM`). Meanwhile, CXMT's wafer capacity expanded rapidly (`200–330 kWPM` in 2024–2026E) on mature DDR4/LPDDR4X/LPDDR5 nodes, translating to a lower revenue share (`3.5–6.5%`) than its raw wafer share due to lower blended ASPs and die density.

---

## 3. Summary Tables (Selected Milestone Years)

### 3.1 DRAM Supply, Capacity, HBM & Cycle (2000–2026E)

| Year | Samsung (%) | SK hynix (%) | Micron (%) | Elpida (%) | Qimonda (%) | Nanya (%) | CXMT (%) | Others (%) | Total kWPM | Shipped (EB) | Demand (EB) | HBM ($B) | Cycle |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---|
| **2000** | 23.0 | 19.0 | 17.0 | 9.0 | 10.0 | 3.0 | 0.0 | 19.0 | 420 | 0.038 | 0.040 | — | shortage |
| **2005** | 32.1 | 16.4 | 15.4 | 7.1 | 12.7 | 5.0 | 0.0 | 11.3 | 870 | 0.285 | 0.282 | — | balanced |
| **2008** | 30.0 | 20.5 | 10.5 | 13.2 | 9.8 | 4.2 | 0.0 | 11.8 | 1,220 | 1.03 | 0.927 | — | glut |
| **2010** | 37.5 | 21.5 | 13.0 | 14.5 | 0.0 | 4.5 | 0.0 | 9.0 | 1,130 | 2.12 | 2.14 | — | balanced |
| **2013** | 38.0 | 26.5 | 21.5 | 6.5 | 0.0 | 3.5 | 0.0 | 4.0 | 1,095 | 5.04 | 5.29 | — | shortage |
| **2015** | 45.0 | 27.8 | 20.5 | 0.0 | 0.0 | 3.0 | 0.0 | 3.7 | 1,150 | 7.63 | 7.25 | 0.05 | glut |
| **2017** | 45.8 | 28.0 | 21.5 | 0.0 | 0.0 | 2.4 | 0.0 | 2.3 | 1,220 | 11.0 | 11.7 | 0.32 | shortage |
| **2018** | 43.9 | 29.5 | 22.1 | 0.0 | 0.0 | 2.5 | 0.0 | 2.0 | 1,290 | 13.4 | 13.9 | 0.45 | shortage |
| **2019** | 45.5 | 28.7 | 21.5 | 0.0 | 0.0 | 2.5 | 0.0 | 1.8 | 1,315 | 16.0 | 15.0 | 0.42 | glut |
| **2020** | 42.1 | 29.2 | 23.5 | 0.0 | 0.0 | 2.6 | 0.3 | 2.3 | 1,395 | 18.3 | 18.5 | 0.65 | balanced |
| **2022** | 42.5 | 28.0 | 24.0 | 0.0 | 0.0 | 2.0 | 1.5 | 2.0 | 1,590 | 23.5 | 21.4 | 1.80 | glut |
| **2023** | 41.5 | 31.0 | 21.5 | 0.0 | 0.0 | 1.7 | 2.5 | 1.8 | 1,475 | 26.3 | 24.7 | 4.40 | glut |
| **2024** | 40.0 | 33.5 | 20.5 | 0.0 | 0.0 | 1.2 | 3.5 | 1.3 | 1,740 | 30.9 | 32.4 | 14.5 | shortage |
| **2025** | 36.5 | 34.5 | 21.8 | 0.0 | 0.0 | 1.0 | 5.0 | 1.2 | 1,940 | 37.9 | 40.2 | 34.0 | shortage |
| **2026E** | 36.0 | 34.0 | 21.5 | 0.0 | 0.0 | 0.9 | 6.5 | 1.1 | 2,085 | 45.0 | 48.2 | 54.6 | shortage |

### 3.2 NAND Flash Supply, Capacity & Cycle (2000–2026E)

| Year | Samsung (%) | Kioxia/Toshiba (%) | WDC/SanDisk (%) | SK hynix (%) | Micron (%) | Intel (%) | YMTC (%) | Others (%) | Total kWPM | Shipped (EB) | Demand (EB) | Cycle |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---|
| **2000** | 36.0 | 38.0 | 12.0 | 0.0 | 0.0 | 0.0 | 0.0 | 14.0 | 33 | 0.003 | 0.003 | balanced |
| **2005** | 48.0 | 22.0 | 11.0 | 11.0 | 2.0 | 0.0 | 0.0 | 6.0 | 278 | 0.60 | 0.60 | balanced |
| **2010** | 32.5 | 33.0 | 13.5 | 9.5 | 6.0 | 4.0 | 0.0 | 1.5 | 810 | 16.4 | 16.6 | balanced |
| **2015** | 33.5 | 19.5 | 15.0 | 10.5 | 12.5 | 7.5 | 0.0 | 1.5 | 1,245 | 95.0 | 89.3 | glut |
| **2017** | 37.0 | 17.0 | 15.5 | 11.0 | 11.5 | 6.5 | 0.0 | 1.5 | 1,385 | 175 | 186 | shortage |
| **2019** | 33.5 | 19.0 | 14.5 | 10.5 | 12.0 | 8.8 | 0.0 | 1.7 | 1,480 | 350 | 326 | glut |
| **2020** | 33.2 | 19.3 | 14.6 | 11.5 | 11.2 | 8.2 | 0.8 | 1.2 | 1,580 | 470 | 475 | balanced |
| **2021** | 34.0 | 18.8 | 13.8 | 13.2 | 10.8 | 6.2 | 2.0 | 1.2 | 1,690 | 570 | 593 | shortage |
| **2022** | 33.0 | 17.8 | 13.2 | 18.5 | 11.5 | 0.0 | 4.5 | 1.5 | 1,765 | 610 | 555 | glut |
| **2023** | 31.5 | 14.5 | 14.5 | 19.0 | 11.8 | 0.0 | 7.0 | 1.7 | 1,368 | 640 | 589 | glut |
| **2024** | 31.0 | 14.2 | 12.8 | 20.5 | 12.0 | 0.0 | 8.0 | 1.5 | 1,593 | 760 | 768 | balanced |
| **2025** | 30.0 | 14.5 | 12.5 | 20.5 | 12.0 | 0.0 | 9.0 | 1.5 | 1,688 | 870 | 914 | shortage |
| **2026E** | 29.5 | 14.5 | 12.0 | 20.5 | 12.0 | 0.0 | 10.0 | 1.5 | 1,763 | 1,050 | 1,110 | shortage |

### 3.3 HDD Supply, Vendor Exabytes, Units & Cycle (2010–2026E)

| Year | Seagate (EB) | WDC (EB) | Toshiba (EB) | Seagate (%) | WDC (%) | Toshiba (%) | Total Shipped (EB) | Demand (EB) | Units (M) | Cycle |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---|
| **2010** | 132 | 145 | 53 | 40.0 | 43.9 | 16.1 | 330 | 330 | 651 | balanced |
| **2011** | 134 | 144 | 57 | 40.0 | 43.0 | 17.0 | 335 | 369 | 580 | shortage |
| **2012** | 163 | 160 | 57 | 42.9 | 42.1 | 15.0 | 380 | 410 | 535 | shortage |
| **2015** | 231 | 242 | 92 | 40.9 | 42.9 | 16.2 | 565 | 537 | 469 | glut |
| **2018** | 385 | 394 | 159 | 41.0 | 42.0 | 17.0 | 938 | 947 | 370 | balanced |
| **2020** | 428 | 418 | 174 | 42.0 | 41.0 | 17.0 | 1,020 | 1,030 | 260 | balanced |
| **2021** | 563 | 549 | 228 | 42.0 | 41.0 | 17.0 | 1,340 | 1,390 | 259 | shortage |
| **2022** | 462 | 451 | 187 | 42.0 | 41.0 | 17.0 | 1,100 | 1,000 | 172 | glut |
| **2023** | 368 | 377 | 152 | 41.0 | 42.0 | 17.0 | 897 | 825 | 127 | glut |
| **2024** | 563 | 630 | 147 | 42.0 | 47.0 | 11.0 | 1,340 | 1,390 | 124 | shortage |
| **2025** | 677 | 761 | 182 | 41.8 | 47.0 | 11.2 | 1,620 | 1,700 | 124 | shortage |
| **2026E** | 873 | 950 | 237 | 42.4 | 46.1 | 11.5 | 2,060 | 2,160 | 126 | shortage |

---

## 4. Sources (`S1`–`S13`)

- **S1:** TrendForce (DRAMeXchange) — *Global DRAM Branded Revenue & Market Share Quarterly/Annual Tracker (2000–2026)* (`https://www.trendforce.com/research/dram`)
- **S2:** Gartner Dataquest / iSuppli (Omdia) — *Historical Worldwide DRAM Market Share and Consolidation Analysis (2000–2013)* (`https://www.eetimes.com/samsung-gains-dram-share-in-2005-says-gartner/`)
- **S3:** TrendForce & TechInsights (IC Insights) — *Global Memory Fab Wafer Capacity Breakdown (300mm-Equivalent kWPM, 2000–2026)* (`https://www.trendforce.com/presscenter/news/20240415-12110.html`)
- **S4:** SemiAnalysis & Omdia — *DRAM & HBM Wafer Capacity, TSV Area Penalty, and Fab Utilization Analysis (2020–2026)* (`https://www.semianalysis.com/`)
- **S5:** TrendForce & Mirae Asset Securities — *Global DRAM Bit Shipment & Demand Growth (Billion Gb / Exabytes, 2000–2026)* (`https://www.trendforce.com/presscenter/news/20231018-11885.html`)
- **S6:** Yole Group & Bank of America Global Research — *Status of the Memory Industry & High Bandwidth Memory (HBM) Market Outlook (2015–2026)* (`https://www.yolegroup.com/product/report/status-of-the-memory-industry-2024/`)
- **S7:** Samsung Electronics, SK hynix, Micron, Nanya, Elpida, Qimonda — *Company Annual Reports, Form 10-K Filings, and Investor Presentations (2000–2025)* (`https://investors.micron.com/financial-information/annual-reports`)
- **S8:** TrendForce (DRAMeXchange) — *Global NAND Flash Revenue & Bit Shipment Market Share by Vendor (2000–2026)* (`https://www.trendforce.com/research/nandflash`)
- **S9:** Omdia (IHS Markit) & Forward Insights — *Historical NAND Flash Market Share, Planar-to-3D Transition, and Bit Growth (2000–2022)* (`https://omdia.tech.informa.com/topic-pages/semiconductors`)
- **S10:** Kioxia (Toshiba Memory), Western Digital (SanDisk), Solidigm (Intel), YMTC — *Flash Ventures JV Disclosures, Annual Filings, and Fab Capacity Reports (2005–2025)* (`https://www.westerndigital.com/company/investor-relations`)
- **S11:** Coughlin Associates (Dr. Thomas Coughlin / Forbes) — *Digital Storage Technology Newsletter & Annual HDD Exabyte/Unit Shipment Reports (2010–2025)* (`https://www.forbes.com/sites/tomcoughlin/`)
- **S12:** TRENDFOCUS — *Quarterly and Annual Hard Disk Drive (HDD) Market Share, Units, and Exabytes Shipped (2010–2026)* (`https://www.trendfocus.com/`)
- **S13:** Seagate Technology, Western Digital, Toshiba Electronic Devices — *Quarterly Earnings Releases & Form 10-K Storage Capacity (EB) Disclosures (2010–2025)* (`https://investors.seagate.com/`)
