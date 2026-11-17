# HDD & Magnetic Tape Historical Market Dataset (1980–2026E)

## 1. Scope & Definitions

This dataset (`docs/memory/research/hdd_tape.json`) provides annual worldwide market metrics for **Hard Disk Drives (HDD)** and **Magnetic Tape Storage (Tape)** across 47 years (`1980`–`2026`, with `2026` flagged `"E"`).

| Metric | Key | Unit | Definition |
| :--- | :--- | :--- | :--- |
| **Revenue** | `revenue` | `USD_B` | Worldwide annual nominal revenue in US$ billions ($10^9$ USD). **HDD**: finished rigid disk drive revenue across all manufacturers. **Tape**: worldwide computer/enterprise magnetic tape media (cartridge/reel) revenue, following the Fontana & Decad (IBM Systems, MSST 2018 / Library of Congress 2019) standard so that `revenue / capacity = price` holds identically. *(Total tape ecosystem revenue including drives and automated libraries is documented in Section 4 below for reference.)* |
| **Capacity Shipped** | `capacity` | `EB` | Worldwide annual **native (uncompressed)** storage capacity shipped in decimal Exabytes ($1\text{ EB} = 10^{18}\text{ bytes} = 10^9\text{ GB}$). |
| **Price per GB** | `price` | `USD_per_GB` | Worldwide annual average nominal price in US$ per decimal gigabyte ($\text{US\$}/\text{GB}$). For **HDD**, blended industry ASP ($\$/\text{GB}$) reconciled with McCallum (`jcmit.net/diskprice.htm`), Our World in Data, and Backblaze enterprise HDD purchasing data. For **Tape**, native cartridge media cost per GB ($\$/\text{GB}$). |

---

## 2. Methodology & Consistency Reconciliation

### 2.1 Identity Verification: $\text{Price (\$/GB)} \approx \frac{\text{Revenue (US\$B)}}{\text{Capacity (EB)}}$
Because $1\text{ US\$B} = 10^9\text{ US\$}$ and $1\text{ EB} = 10^9\text{ GB}$, the ratio $\frac{\text{Revenue (US\$B)}}{\text{Capacity (EB)}}$ has exact units of $\text{US\$}/\text{GB}$.
- For every single year from `1980` to `2026` across both `hdd` and `tape`, all three series (`revenue`, `capacity`, `price`) satisfy:
  $$\frac{|\text{price} - (\text{revenue} / \text{capacity})|}{\text{price}} \le 0.02 \quad (\le 2\%)$$
  which is far tighter than the project-wide $35\%$ tolerance (`verify_memory_data.js`).
- All numeric values are rounded to **2–3 significant digits** to avoid artificial precision.
- Where two of the three metrics are directly reported (`"R"`) by primary sources and the third is derived via the identity or reconciled across series, the derived metric is flagged `"E"`. Intermediate years between multi-year anchor points are log-linearly or linearly interpolated and flagged `"I"` while preserving the identity $\text{price} = \text{revenue} / \text{capacity}$.

### 2.2 HDD Methodology by Era
1. **1980–1987 (Mainframe & Early Microcomputer Winchester Era)**:
   - Anchored on **Disk/Trend Reports** (`S1`) and **Computer History Museum (CHM)** historical syntheses (`S7`) for industry revenue ($4.0\text{B}$ in 1980 when the Seagate ST-506 5.25" HDD and IBM 3380 mainframe DASD launched; $14.5\text{B}$ in 1985 when active HDD makers peaked at ~75 vendors) and **John C. McCallum's** disk price tables (`S5`) reconciled with Disk/Trend blended ASPs ($220/\text{MB} = \$220,000/\text{GB}$ in 1980; $\$48.3/\text{MB} = \$48,300/\text{GB}$ in 1985). Capacity is derived as $\text{revenue}/\text{price}$ ($18\text{ TB} = 0.000018\text{ EB}$ in 1980; $300\text{ TB} = 0.00030\text{ EB}$ in 1985).
2. **1988–1999 (Exact Disk/Trend / IDEMA Tabular Series)**:
   - Sourced directly (`"R"`) from the published **IDEMA / Disk/Trend** historical ledger (`S1`), which reports exact annual worldwide HDD revenue and terabytes shipped for every year from 1988 ($20,424\text{M}$, $1,770\text{ TB}$, $\$11.54/\text{MB}$) through 1999 ($32,400\text{M}$, $1,393,435\text{ TB} = 1.39\text{ EB}$, $\$0.023/\text{MB}$).
3. **2000–2007 (Dot-Com Adjustment & Perpendicular Magnetic Recording Transition)**:
   - Reconciles **Coughlin Associates / CHM** revenue milestones (`S3`, `S7`)—capturing the historic 2001 dot-com revenue contraction ($22.5\text{B}$) and the 2005 commercialization of Perpendicular Magnetic Recording ($28.8\text{B}$, $36.0\text{ EB}$ across ~375M drives)—with **McCallum / Our World in Data** $/GB benchmarks (`S5`: $\$10.5/\text{GB}$ in 2000; $\$0.80/\text{GB}$ in 2005).
4. **2008–2018 (IBM Storage Landscape / Fontana & Decad Series)**:
   - Sourced directly (`"R"`) from **R. E. Fontana & G. M. Decad (IBM Systems, MSST 2018 & Library of Congress Digital Preservation 2019)** (`S2`), which compiles quarterly public financial filings from Seagate, Western Digital, and Toshiba alongside **TRENDFOCUS** exabyte tracking (`S4`) and **Backblaze** enterprise drive cost-per-GB (`S6`).
   - Captures the **2010 unit shipment peak** (~651–652M units, $330\text{ EB}$, $\$33.0\text{B}$, $\$0.100/\text{GB}$) and the **2012 revenue peak** ($\$37.5\text{B}$, $380\text{ EB}$, $\$0.099/\text{GB}$) caused by acute supply shortages after the late-2011 Thailand floods.
5. **2019–2026E (Hyperscale Nearline & AI Data Center Era)**:
   - Sourced from **Dr. Thomas Coughlin (Coughlin Associates / *Forbes*)** (`S3`) and **TRENDFOCUS** (`S4`).
   - Captures the first >1 Zettabyte year in **2020** ($1,020\text{ EB}$, $\$21.4\text{B}$), the post-COVID hyperscale surge in **2021** ($1,340\text{ EB}$, $\$25.5\text{B}$), the **2022–2023 storage recession** trough ($897\text{ EB}$ and $\$13.4\text{B}$ across 127M units in 2023), the AI data center rebound in **2024** ($1,340\text{ EB}$ [reported $1,337\text{ EB}$], $\$19.8\text{B}$) and **2025** ($1,620\text{ EB}$ [reported $1,620.95\text{ EB}$], $\$23.3\text{B}$ [reported $\$23,267\text{M}$]), and Coughlin's **2026E** projection (+27% exabytes to $2,060\text{ EB}$; +50% revenue to $\$34.9\text{B}$ as HAMR/ePMR nearline ASPs rise).

### 2.3 Magnetic Tape Methodology by Era
1. **Native vs. Compressed Capacity Convention**:
   - Beginning in 2015, the **LTO Program Consortium (HPE, IBM, Quantum)** (`S8`) published annual press releases citing total LTO tape capacity shipped on a **compressed** basis (assuming a $2.5:1$ compression factor for LTO-6 through LTO-9, and $2.0:1$ for LTO-1 through LTO-5).
   - To maintain physical parity with uncompressed HDD/NAND exabytes and native cartridge $\$/\text{GB}$ pricing, this dataset follows **Fontana & Decad (IBM Systems, MSST 2018)** (`S2`) and reports **NATIVE (uncompressed)** tape capacity shipped in `capacity`:
     - **2008–2018**: Exact native PB/EB figures reported by Fontana & Decad (`S2`) from **Santa Clara Consulting Group (SCCG)** (`S9`) and LTO Consortium cartridge data ($11.1\text{ EB}$ in 2008 $\rightarrow$ $44.9\text{ EB}$ in 2017 and $44.0\text{ EB}$ in 2018 during the Fujifilm–Sony LTO-8 patent dispute).
     - **2019–2026E**: Official LTO Program Consortium compressed exabyte totals (`S8`) divided by the standard $2.5$ compression ratio:
       - `2019`: $114.08\text{ EB}_{\text{comp}} \div 2.5 = 45.6\text{ EB}_{\text{native}}$
       - `2020`: $105.2\text{ EB}_{\text{comp}} \div 2.5 = 42.1\text{ EB}_{\text{native}}$
       - `2021`: $148.0\text{ EB}_{\text{comp}} \div 2.5 = 59.2\text{ EB}_{\text{native}}$
       - `2022`: $148.3\text{ EB}_{\text{comp}} \div 2.5 = 59.3\text{ EB}_{\text{native}}$
       - `2023`: $152.9\text{ EB}_{\text{comp}} \div 2.5 = 61.2\text{ EB}_{\text{native}}$
       - `2024`: $176.5\text{ EB}_{\text{comp}} \div 2.5 = 70.6\text{ EB}_{\text{native}}$ *(all-time record year)*
       - `2025`: $160.3\text{ EB}_{\text{comp}} \div 2.5 = 64.1\text{ EB}_{\text{native}}$
       - `2026E`: $\sim 175\text{ EB}_{\text{comp}} \div 2.5 = 70.0\text{ EB}_{\text{native}}$
     - *(Note: IBM 3592 / Oracle T10000 proprietary enterprise tape cartridges add roughly 5–8% to native LTO capacity in the 2010s–2020s, but lack a public annual ledger; following Fontana & Decad `S2`, post-2008 figures reflect the standardized LTO ledger.)*
2. **1980–2007 Tape Media Evolution**:
   - Tracks the progression from 9-track half-inch open-reel computer tape ($6250\text{ bpi}$, ~100–140 MB native per reel at ~$\$20/\text{reel} \approx \$200/\text{GB}$ in 1980) to **IBM 3480** 200 MB cartridges in 1984–1985 ($\sim\$110/\text{GB}$ blended), **IBM 3490 / DEC DLT III / Exabyte 8mm / DAT** in 1990 ($\sim\$28/\text{GB}$), **IBM 3590 Magstar (10 GB) / Quantum DLTtape IV (20 GB)** in 1995 ($\sim\$4.50/\text{GB}$), **LTO-1 (100 GB native)** in 2000 ($\sim\$1.05/\text{GB}$), and **LTO-3 (400 GB native)** in 2005 ($\sim\$0.25/\text{GB}$).

---

## 3. Source Mapping

| Source ID | Publisher / Author | Title / Scope | Series Covered |
| :--- | :--- | :--- | :--- |
| `S1` | IDEMA / James N. Porter (*Disk/Trend Reports*) | *Historical Worldwide Rigid Disk Drive Industry Revenue and Terabytes Shipped (1980–1999)* | HDD revenue, capacity, price (1980–1999) |
| `S2` | IEEE MSST / IBM Systems (R. E. Fontana & G. M. Decad) | *A Ten Year (2008–2017) and 11-Year (2008–2018) Storage Landscape: LTO Tape Media, HDD, NAND* | HDD & Tape revenue, capacity, price (2008–2018) |
| `S3` | Coughlin Associates / *Forbes* (Dr. Thomas Coughlin) | *Digital Storage Technology Newsletter & Annual HDD Market Reviews (2018–2026 Projections)* | HDD revenue, capacity, price (2000–2007, 2018–2026E) |
| `S4` | TRENDFOCUS / *StorageNewsletter* | *SDAS Quarterly & Annual Worldwide HDD Exabyte and Unit Shipment Reports (2010–2025)* | HDD capacity & revenue (2010–2025) |
| `S5` | John C. McCallum / Our World in Data | *Disk Drive Prices (1955–2024) (`jcmit.net/diskprice.htm`) & Historical Cost of Computer Memory and Storage* | HDD price & capacity (1980–2010) |
| `S6` | Backblaze | *Hard Drive Cost Per Gigabyte Over Time (2009–2025)* | HDD price (2009–2025) |
| `S7` | Computer History Museum (CHM) / UC San Diego ISIC | *Storage Engine: Timeline and Market History of Magnetic Disk Drives* | HDD revenue milestones (1980–2007) |
| `S8` | LTO Program Consortium (HPE, IBM, Quantum) | *Annual LTO Tape Media Capacity Shipment Reports (2000–2025)* | Tape capacity & revenue (2000–2026E) |
| `S9` | Santa Clara Consulting Group (SCCG) / IBM Archives | *Worldwide Backup Tape Tracker & Historical Magnetic Tape Media Reports (1980–2015)* | Tape revenue, capacity, price (1980–2014) |
| `S10` | Tape Storage Council / LTO Ultrium Pricing Trackers | *LTO-1 through LTO-9 Native Cartridge Capacity and $/GB Benchmarks (2000–2026)* | Tape price & revenue (2000–2026E) |

---

## 4. Anchor-Year Summary Table (1980–2026E)

The table below presents all 14 anchor years for **HDD** and **Tape** as stored in `hdd_tape.json`, alongside two supplementary reference columns for Tape (LTO 2.5:1 Compressed Capacity and Total Ecosystem Hardware+Media Revenue):

| Year | HDD Revenue (`USD_B`) | HDD Capacity (`EB` Native) | HDD Price (`$/GB`) | HDD Flags (`R/C/P`) | Tape Media Rev (`USD_B`) | Tape Capacity (`EB` Native) | Tape Media Price (`$/GB`) | Tape Flags (`R/C/P`) | *[Ref] Tape Compressed (`EB`)* | *[Ref] Total Tape Drives+Media (`USD_B`)* |
| :--- | ---: | ---: | ---: | :---: | ---: | ---: | ---: | :---: | ---: | ---: |
| **1980** | 4.0 | 0.000018 | 220,000 | R / E / R | 0.70 | 0.0035 | 200 | E / E / R | 0.0035 | ~2.2 |
| **1985** | 14.5 | 0.00030 | 48,300 | R / E / R | 1.10 | 0.010 | 110 | E / E / R | 0.010 | ~3.4 |
| **1990** | 25.6 | 0.00373 | 6,860 | R / R / R | 1.40 | 0.050 | 28.0 | E / E / R | 0.085 | ~4.2 |
| **1995** | 26.6 | 0.0807 | 330 | R / R / R | 1.62 | 0.36 | 4.50 | E / E / R | 0.72 | ~4.8 |
| **2000** | 29.5 | 2.80 | 10.5 | E / E / R | 1.47 | 1.40 | 1.05 | E / E / R | 2.80 | ~4.5 |
| **2005** | 28.8 | 36.0 | 0.80 | E / E / R | 1.15 | 4.60 | 0.250 | E / E / R | 9.20 | ~2.8 |
| **2010** | 33.0 | 330 | 0.100 | R / R / R | 0.70 | 15.3 | 0.046 | R / R / R | 30.7 | 1.56 (SCCG) |
| **2012** | 37.5 | 380 | 0.099 | R / R / R | 0.62 | 20.7 | 0.030 | R / R / R | 45.0 | ~1.35 |
| **2015** | 28.3 | 565 | 0.050 | R / R / R | 0.59 | 33.0 | 0.018 | R / R / R | 76.0 | ~1.15 |
| **2020** | 21.4 | 1,020 | 0.021 | R / R / R | 0.34 | 42.1 | 0.0081 | E / R / R | 105.2 | ~1.10 |
| **2023** | 13.4 | 897 | 0.015 | R / R / E | 0.39 | 61.2 | 0.0064 | E / R / E | 152.9 | ~1.25 |
| **2024** | 19.8 | 1,340 | 0.0148 | R / R / E | 0.42 | 70.6 | 0.0060 | E / R / R | 176.5 | ~1.35 |
| **2025** | 23.3 | 1,620 | 0.0144 | R / R / E | 0.37 | 64.1 | 0.0058 | E / R / R | 160.3 | ~1.30 |
| **2026E** | 34.9 | 2,060 | 0.0169 | E / E / E | 0.39 | 70.0 | 0.0055 | E / E / E | 175.0 | ~1.35 |

---

## 5. Caveats & Confidence Assessment

1. **Pre-1988 HDD & Pre-2008 Tape Granularity (Medium Confidence, Flagged `E`/`I`)**:
   - While **Disk/Trend** (`S1`) provides exact annual numbers for `1988`–`1999` and **Fontana & Decad** (`S2`) provides exact annual numbers for `2008`–`2018`, earlier decades (`1980`–`1987` for HDD; `1980`–`2007` for Tape) rely on 5-year anchor benchmarks from Disk/Trend, CHM, SCCG, and McCallum price tables with log-linear interpolation (`"I"`) for intermediate years.
2. **Retail Lowest $/GB vs. Blended Industry ASP $/GB (High Confidence)**:
   - John C. McCallum's table (`S5`) tracks the *lowest retail microcomputer drive price* in a given month/year, whereas $\text{Revenue}/\text{Capacity}$ measures the *industry-wide blended ASP* (which includes high-margin enterprise 10K/15K RPM SAS and mainframe DASD drives). During the 1980s and 1990s, Disk/Trend's blended ASP tracks McCallum's retail curve closely with a constant enterprise mix premium; from 2008 onward, nearline hyperscale drives dominate total exabytes shipped, converging blended ASP and Backblaze bulk enterprise drive cost (`S6`) to within 10–20%.
3. **Tape Media vs. Tape Hardware/Library Scope (High Confidence)**:
   - Using **tape media (cartridge) revenue** in the JSON series ensures that $\text{price (\$/GB)} \approx \text{revenue (US\$B)} / \text{capacity (EB)}$ holds rigorously at the cartridge level ($\sim\$0.006/\text{GB}$ native in 2024–2025, or ~2.5x cheaper per native GB than nearline HDD). Including tape drives and automated libraries adds roughly $\$0.8\text{B}$–$\$1.0\text{B}/\text{yr}$ in hardware revenue in the 2010s–2020s (bringing total tape hardware+media ecosystem revenue to $\sim\$1.1\text{B}$–$\$1.4\text{B}/\text{yr}$).
