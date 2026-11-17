# Memory & Storage 10-Year Demand Outlook (2025–2035) — Methodology & Research Documentation

## 1. Executive Summary & Methodology

This document records the methodology, 2025 baseline reconciliation, per-segment assumptions (in English and Korean), scenario definitions, sensitivity analysis, and caveats for the **Memory Atlas 2025–2035 Demand Outlook** (`outlook.json`, generated deterministically by `outlook_model.py`).

### Core Modeling Principles
1. **Dual-Axis 2025 Baseline Reconciliation (Top-Down × Bottom-Up):**
   - **Top-Down by Technology:** The 2025 global memory and storage baseline is anchored to authoritative industry trackers across five technologies: **Conventional DRAM** (`dram`, excl. HBM), **High Bandwidth Memory** (`hbm`), **NAND Flash** (`nand`), **Hard Disk Drives** (`hdd`), and **Magnetic Tape** (`tape`), totaling **2,777.5 EB** (~2.78 ZB) of shipped capacity and **$234.0B** in nominal revenue.
   - **Bottom-Up by Application Segment:** Each of the seven application segments (`ai_dc`, `cloud_dc`, `pc`, `smartphone`, `auto`, `robot`, `edge_other`) is constructed bottom-up from 2025 unit shipments × average memory/storage content per unit × segment-specific ASP ($/GB), summing to **2,778.9 EB** (within 0.05% due to 3-significant-digit rounding) and **$234.0B** in 2025.
2. **Compound Capacity & Revenue Trajectories (2025–2035):**
   - **Capacity (`capacityEB`, decimal Exabytes, $1\text{ EB} = 10^{18}\text{ bytes}$):** Driven by annual device/system shipments multiplied by average memory/storage capacity per unit across Bear, Base, and Bull adoption curves.
   - **Revenue (`revenueBusd`, nominal US$ billions):** Driven by bit demand growth compounded with secular cost-per-bit ($/GB) curves and modulated in **2026–2028** to reflect the historical **2026–2027 AI memory supercycle ("memflation")** reported by TrendForce and Yole Group, followed by greenfield wafer fab additions (Samsung Yongin/Pyeongtaek, SK hynix Cheongju M15X/Yongin, Micron Idaho/New York/Hiroshima) normalizing pricing from 2028–2030 onward.
3. **Strict Scenario Invariants & Significant-Digit Discipline:**
   - All 2025 baseline figures are identical across `bear`, `base`, and `bull` scenarios.
   - For every year in `2025..2035`, `bull >= base >= bear` holds strictly for **every individual segment** as well as the **aggregate industry total**.
   - Every generated number is rounded to **3 significant digits** (`sig_round(val, 3)`) so precision is never fabricated.

---

## 2. 2025 Baseline Reconciliation Matrix (Technology × Segment)

### 2.1 2025 Technology Baselines (`baseline2025ByTech`)

| Tech ID | Technology Scope | 2025 Capacity (EB) | 2025 Revenue ($B) | Implied Avg Price ($/GB) | Quality Flag | Primary Sources |
|---|---|---:|---:|---:|:---:|---|
| `dram` | Conventional DRAM (DDR4/DDR5, LPDDR4X/5/5X, GDDR6/7; excl. HBM) | 34.3 | 105.0 | $3.06 | `R` | TrendForce (`S1`, `S2`), Yole (`S3`) |
| `hbm` | High Bandwidth Memory (HBM3, HBM3e, early HBM4 stacks) | 3.2 | 32.0 | $10.00 | `R` | TrendForce (`S1`, `S2`), Goldman Sachs (`S4`) |
| `nand` | 3D NAND Flash (Enterprise SSD, Client SSD, UFS/eMMC, Auto/Ind) | 1,020.0 | 70.0 | $0.0686 | `R` | TrendForce (`S1`), Yole (`S3`), Trendfocus (`S5`) |
| `hdd` | Hard Disk Drives (Nearline Enterprise HDD, Client & Surveillance HDD) | 1,560.0 | 25.2 | $0.0162 | `R` | Coughlin Associates (`S6`), IDC/Seagate/WDC (`S7`) |
| `tape` | Magnetic Tape Media & Automation (LTO-9/10 Ultrium & Enterprise Tape) | 160.0 | 1.8 | $0.0113 | `R` | LTO Program (`S8`, 160.3 EB compressed) |
| **Total** | **All Memory + Storage Technologies (2025)** | **2,777.5** | **234.0** | **$0.0842** | **`R`** | **Reconciled Global Total** |

### 2.2 2025 Segment × Technology Breakdown

| Segment ID | HBM (EB / $B) | Conv. DRAM (EB / $B) | NAND Flash (EB / $B) | HDD (EB / $B) | Tape (EB / $B) | **2025 Segment Total (EB / $B)** |
|---|---:|---:|---:|---:|---:|---:|
| `ai_dc` | 3.2 EB / $32.0B | 8.8 EB / $32.0B | 180.0 EB / $17.1B | 158.0 EB / $2.6B | 0.0 EB / $0.0B | **350.0 EB / $83.7B** |
| `cloud_dc` | 0.0 EB / $0.0B | 9.2 EB / $28.0B | 260.0 EB / $19.5B | 1,230.0 EB / $19.7B | 160.0 EB / $1.8B | **1,660.0 EB / $69.0B** |
| `pc` | 0.0 EB / $0.0B | 4.1 EB / $11.0B | 195.0 EB / $11.0B | 81.0 EB / $1.4B | 0.0 EB / $0.0B | **280.0 EB / $23.4B** |
| `smartphone` | 0.0 EB / $0.0B | 9.4 EB / $24.0B | 235.0 EB / $13.4B | 0.0 EB / $0.0B | 0.0 EB / $0.0B | **244.0 EB / $37.4B** |
| `auto` | 0.0 EB / $0.0B | 1.2 EB / $4.3B | 18.8 EB / $3.7B | 0.0 EB / $0.0B | 0.0 EB / $0.0B | **20.0 EB / $8.0B** |
| `robot` | 0.0 EB / $0.0B | 0.07 EB / $0.35B | 0.83 EB / $0.25B | 0.0 EB / $0.0B | 0.0 EB / $0.0B | **0.90 EB / $0.60B** |
| `edge_other` | 0.0 EB / $0.0B | 1.53 EB / $5.35B | 131.2 EB / $5.05B | 91.0 EB / $1.5B | 0.0 EB / $0.0B | **224.0 EB / $11.9B** |
| **Total** | **3.2 EB / $32.0B** | **34.3 EB / $105.0B** | **1,020.8 EB / $70.0B** | **1,560.0 EB / $25.2B** | **160.0 EB / $1.8B** | **2,778.9 EB / $234.0B** |

---

## 3. Per-Segment Assumptions Table (English & Korean)

### 3.1 Quantitative Summary by Segment (2025 vs. 2035)

| Segment ID | 2025 Cap (EB) | 2035 Cap Bear / Base / Bull (EB) | Cap CAGR Bear / Base / Bull | 2025 Rev ($B) | 2035 Rev Bear / Base / Bull ($B) | Rev CAGR Bear / Base / Bull | Sources |
|---|---:|---:|---:|---:|---:|---:|---|
| `ai_dc` | 350 | 2,080 / **3,130** / 4,640 | 19.5% / **24.5%** / 29.5% | 83.7 | 207 / **305** / 431 | 9.5% / **13.8%** / 17.8% | `S1, S2, S4, S5` |
| `cloud_dc` | 1,660 | 6,430 / **8,690** / 11,600 | 14.5% / **18.0%** / 21.5% | 69.0 | 115 / **149** / 196 | 5.2% / **8.0%** / 11.0% | `S1, S5, S6, S7, S8` |
| `pc` | 280 | 633 / **809** / 1,040 | 8.5% / **11.2%** / 14.0% | 23.4 | 28.0 / **35.0** / 43.9 | 1.8% / **4.1%** / 6.5% | `S3, S9` |
| `smartphone` | 244 | 588 / **758** / 987 | 9.2% / **12.0%** / 15.0% | 37.4 | 46.5 / **58.1** / 73.6 | 2.2% / **4.5%** / 7.0% | `S3, S10` |
| `auto` | 20.0 | 105 / **152** / 227 | 18.0% / **22.5%** / 27.5% | 8.0 | 18.6 / **25.3** / 34.7 | 8.8% / **12.2%** / 15.8% | `S11, S12` |
| `robot` | 0.90 | 16.8 / **29.0** / 46.9 | 34.0% / **41.5%** / 48.5% | 0.60 | 4.38 / **7.37** / 11.6 | 22.0% / **28.5%** / 34.5% | `S13, S14, S15` |
| `edge_other` | 224 | 581 / **760** / 988 | 10.0% / **13.0%** / 16.0% | 11.9 | 16.8 / **21.3** / 26.9 | 3.5% / **6.0%** / 8.5% | `S1, S3, S6` |
| **Total** | **2,778.9** | **10,433.8 / 14,328.0 / 19,528.9** | **14.1% / 17.8% / 21.5%** | **234.0** | **436.3 / 601.1 / 817.7** | **6.4% / 9.9% / 13.3%** | `S1–S15` |

### 3.2 Bilingual Assumption Details (`EN` & `KO`)

| Segment | Language | Detailed Assumption Statement (Units × Content × Pricing & Sources) |
|---|---|---|
| `ai_dc` | **EN** | AI Data Center (2025 baseline: 350 EB, $83.7B): Anchored to ~1.7M AI servers (~6.8M AI accelerators) consuming 3.2 EB of HBM ($32.0B), 8.8 EB of DDR5/LPDDR5X host DRAM ($32.0B), 180 EB of high-density TLC/QLC enterprise SSDs ($17.1B), and 158 EB of AI training data-lake nearline HDD ($2.6B). 2025–2035 Base CAGR is 24.5% in capacity (to 3,130 EB; Bear 19.5% / Bull 29.5%) and 13.8% in revenue (to $305B; Bear 9.5% / Bull 17.8%) as HBM stacks scale from 80–192 GB (HBM3e) to 512 GB–1.5 TB (HBM4/5/6) and agentic RAG/KV-cache workloads drive petabyte-scale QLC/PLC eSSD per rack. |
| `ai_dc` | **KO** | AI 데이터센터 (2025년 기준: 350 EB, $83.7B): 약 170만 대의 AI 서버(가속기 약 680만 개)가 HBM 3.2 EB($32.0B), 호스트 DDR5/LPDDR5X DRAM 8.8 EB($32.0B), 고집적 TLC/QLC 기업용 SSD 180 EB($17.1B), 학습 데이터 레이크용 니어라인 HDD 158 EB($2.6B)를 소비하는 것으로 산정. HBM 용량이 80~192GB(HBM3e)에서 512GB~1.5TB(HBM4/5/6)로 확대되고 에이전트형 RAG/KV-캐시용 QLC/PLC eSSD 탑재가 급증함에 따라 2025~2035년 기본(Base) 연평균 성장률(CAGR)은 용량 기준 24.5%(2035년 3,130 EB; 약세 19.5% / 강세 29.5%), 매출 기준 13.8%(2035년 $305B; 약세 9.5% / 강세 17.8%)로 전망. |
| `cloud_dc` | **EN** | Conventional Cloud & Enterprise DC (2025 baseline: 1,660 EB, $69.0B): Comprises ~11.8M general-purpose servers (~780 GB DDR5/DDR4 per server = 9.2 EB, $28.0B), 260 EB of general cloud/enterprise SSD ($19.5B), 1,230 EB of nearline enterprise HDD ($19.7B), and 160 EB of LTO/enterprise archival tape ($1.8B). 2025–2035 Base CAGR is 18.0% in capacity (to 8,690 EB; Bear 14.5% / Bull 21.5%) and 8.0% in revenue (to $149B; Bear 5.2% / Bull 11.0%), driven by HAMR nearline HDDs scaling from 24–30 TB to 60–100 TB and LTO-10/11/12 cold archives. |
| `cloud_dc` | **KO** | 일반 클라우드 및 엔터프라이즈 데이터센터 (2025년 기준: 1,660 EB, $69.0B): 범용 서버 약 1,180만 대(대당 약 780GB DRAM = 9.2 EB, $28.0B), 기업용 SSD 260 EB($19.5B), 니어라인 HDD 1,230 EB($19.7B), LTO/엔터프라이즈 아카이브 테이프 160 EB($1.8B)로 구성. HAMR 기반 니어라인 HDD의 디스크당 용량 확대(24~30TB→60~100TB)와 LTO-10/11/12 콜드 아카이브 확장에 힘입어 2025~2035년 기본(Base) CAGR은 용량 18.0%(2035년 8,690 EB; 약세 14.5% / 강세 21.5%), 매출 8.0%(2035년 $149B; 약세 5.2% / 강세 11.0%)로 전망. |
| `pc` | **EN** | Personal PCs & Notebooks (2025 baseline: 280 EB, $23.4B): Based on Gartner/IDC 2025 shipments of 270M units with average ~15.2 GB DRAM (4.1 EB, $11.0B), ~720 GB client SSD (195 EB, $11.0B), and legacy desktop/external HDD (81 EB, $1.4B). 2025–2035 Base CAGR is 11.2% in capacity (to 810 EB; Bear 8.5% / Bull 14.0%) and 4.1% in revenue (to $35.0B; Bear 1.8% / Bull 6.5%) as AI PC adoption pushes average DRAM to 32–64 GB and client SSDs to 1.8–3.0 TB while client HDDs phase out. |
| `pc` | **KO** | 개인용 PC 및 노트북 (2025년 기준: 280 EB, $23.4B): Gartner/IDC 기준 2025년 PC 출하량 2억 7,000만 대, 대당 평균 DRAM 15.2GB(4.1 EB, $11.0B), 클라이언트 SSD 720GB(195 EB, $11.0B), 데스크톱/외장 HDD(81 EB, $1.4B) 기반. 온디바이스 AI PC 보급으로 대당 평균 DRAM이 32~64GB, SSD가 1.8~3.0TB로 증가하고 클라이언트 HDD는 단계적으로 퇴출되면서 2025~2035년 기본(Base) CAGR은 용량 11.2%(2035년 810 EB; 약세 8.5% / 강세 14.0%), 매출 4.1%(2035년 $35.0B; 약세 1.8% / 강세 6.5%)로 전망. |
| `smartphone` | **EN** | Smartphones (2025 baseline: 244 EB, $37.4B): Anchored to IDC/Counterpoint 2025 shipments of 1.25B units with Counterpoint's 8.4 GB average mobile LPDDR (9.4 EB incl. module overhead, $24.0B; ~25% of global DRAM bits) and ~188 GB average UFS/eMMC NAND (235 EB, $13.4B). 2025–2035 Base CAGR is 12.0% in capacity (to 758 EB; Bear 9.2% / Bull 15.0%) and 4.5% in revenue (to $58.0B; Bear 2.2% / Bull 7.0%) as multimodal on-device AI agents lift average phone DRAM to 16–24 GB and storage to 450–750 GB. |
| `smartphone` | **KO** | 스마트폰 (2025년 기준: 244 EB, $37.4B): IDC/Counterpoint 기준 2025년 스마트폰 출하량 12억 5,000만 대, 대당 평균 모바일 LPDDR 8.4GB(9.4 EB, $24.0B; 글로벌 DRAM 비트 수요의 약 25%) 및 평균 UFS/eMMC 188GB(235 EB, $13.4B) 반영. 온디바이스 멀티모달 AI 에이전트 탑재로 대당 평균 DRAM이 16~24GB, 낸드가 450~750GB로 확대되며 2025~2035년 기본(Base) CAGR은 용량 12.0%(2035년 758 EB; 약세 9.2% / 강세 15.0%), 매출 4.5%(2035년 $58.0B; 약세 2.2% / 강세 7.0%)로 전망. |
| `auto` | **EN** | Automotive & Autonomous Driving (2025 baseline: 20.0 EB, $8.0B): Covers ~90M global vehicles with fleet-average ~13.3 GB automotive LPDDR/DDR (1.2 EB, $4.3B) and ~200 GB automotive UFS/eMMC NAND (18.8 EB, $3.7B), matching Yole/Micron's ~$8.0B automotive memory baseline. 2025–2035 Base CAGR is 22.5% in capacity (to 152 EB; Bear 18.0% / Bull 27.5%) and 12.2% in revenue (to $25.3B; Bear 8.8% / Bull 15.8%) as L2+/L3/L4 ADAS and centralized SDV zonal architectures scale toward 64–256 GB LPDDR5X/6 and 1–4 TB PCIe/UFS automotive flash per vehicle. |
| `auto` | **KO** | 자동차 및 자율주행 (2025년 기준: 20.0 EB, $8.0B): 글로벌 자동차 생산 약 9,000만 대 기준 대당 평균 차량용 DRAM 13.3GB(1.2 EB, $4.3B) 및 차량용 UFS/eMMC 낸드 200GB(18.8 EB, $3.7B)로 Yole/Micron의 차량용 메모리 시장 규모(약 $8.0B)에 부합. L2+/L3/L4 자율주행 및 SDV(소프트웨어 정의 차량) 중앙집중형 아키텍처 확산으로 대당 64~256GB LPDDR5X/6 및 1~4TB 차량용 낸드 탑재가 늘어나며 2025~2035년 기본(Base) CAGR은 용량 22.5%(2035년 152 EB; 약세 18.0% / 강세 27.5%), 매출 12.2%(2035년 $25.3B; 약세 8.8% / 강세 15.8%)로 전망. |
| `robot` | **EN** | Robotics — Humanoid, Industrial & Service (2025 baseline: 0.90 EB, $0.60B): Anchored to IFR 2025 shipments of 603k industrial robots, ~250k commercial/warehouse service robots, ~7k–15k early humanoid robots, and ~20M consumer SLAM robots (0.07 EB LPDDR5 at $0.35B + 0.83 EB UFS/NVMe at $0.25B). 2025–2035 Base CAGR is the highest of any segment at 41.5% in capacity (to 29.1 EB; Bear 34.0% / Bull 48.5%) and 28.5% in revenue (to $7.4B; Bear 22.0% / Bull 34.5%), driven by Goldman Sachs' Physical AI forecast of 890k humanoids in 2030 and 6.5M in 2035 (with 64–128 GB LPDDR5X/6 and 1–4 TB NAND per humanoid). |
| `robot` | **KO** | 로보틱스 — 휴머노이드·산업용·서비스 로봇 (2025년 기준: 0.90 EB, $0.60B): IFR 2025년 통계 기준 산업용 로봇 60.3만 대, 상업/물류 서비스 로봇 약 25만 대, 초기 휴머노이드 7천~1.5만 대 및 소비자용 로봇 약 2,000만 대(LPDDR5 0.07 EB $0.35B + 낸드 0.83 EB $0.25B) 반영. 골드만삭스 '피지컬 AI' 전망(휴머노이드 연간 출하량 2030년 89만 대, 2035년 650만 대)과 대당 64~128GB LPDDR5X/6 및 1~4TB 낸드 탑재에 힘입어 전 세그먼트 중 가장 높은 2025~2035년 기본(Base) 용량 CAGR 41.5%(2035년 29.1 EB; 약세 34.0% / 강세 48.5%) 및 매출 CAGR 28.5%(2035년 $7.4B; 약세 22.0% / 강세 34.5%)를 기록할 전망. |
| `edge_other` | **EN** | Edge/IoT, Consumer, Industrial, Networking & Gaming (2025 baseline: 224 EB, $11.9B): Includes discrete GPUs, gaming consoles, 5G/telecom networking, smart TVs, industrial IoT, removable flash, and edge surveillance NVR HDDs (1.53 EB DRAM at $5.35B + 131.2 EB NAND at $5.05B + 91 EB edge/surveillance HDD at $1.50B). 2025–2035 Base CAGR is 13.0% in capacity (to 760 EB; Bear 10.0% / Bull 16.0%) and 6.0% in revenue (to $21.3B; Bear 3.5% / Bull 8.5%) driven by edge AI gateways, AR/VR devices, and multi-camera 4K/8K smart video analytics. |
| `edge_other` | **KO** | 엣지/IoT, 가전, 산업용, 네트워크 및 게이밍 (2025년 기준: 224 EB, $11.9B): 외장 GPU, 게임 콘솔, 5G/통신 장비, 스마트 TV, 산업용 IoT, 외장 스토리지 및 지능형 영상보안(NVR) HDD(DRAM 1.53 EB $5.35B + 낸드 131.2 EB $5.05B + 엣지/보안 HDD 91 EB $1.50B) 포함. 엣지 AI 게이트웨이, AR/VR 기기, 4K/8K 멀티카메라 영상분석 확산으로 2025~2035년 기본(Base) CAGR은 용량 13.0%(2035년 760 EB; 약세 10.0% / 강세 16.0%), 매출 6.0%(2035년 $21.3B; 약세 3.5% / 강세 8.5%)로 전망. |

---

## 4. Scenario Definitions (`bear`, `base`, `bull`)

### 4.1 `base` (Consensus Structural AI & Embodied Compute Expansion)
- **AI & Data Center:** Hyperscaler AI CapEx grows steadily after the 2025–2027 supercycle; HBM4/HBM5/HBM6 stacks scale to 512 GB–1 TB per accelerator; CXL pooled DRAM and 60–122 TB QLC/PLC enterprise SSDs become standard in inference clusters; HAMR nearline HDDs reach 60–80 TB by 2035.
- **Client & Edge:** AI PCs and AI smartphones standardize on 24–32 GB DRAM (PC) and 16–20 GB LPDDR (smartphone).
- **Physical AI (`auto` & `robot`):** L2+/L3 ADAS exceeds 50% of new vehicle production by 2035, with L4 robotaxi/autonomous trucking fleets scaling commercially; humanoid robot shipments follow Goldman Sachs' updated Physical AI trajectory (**890k/yr in 2030 → 6.5M/yr in 2035**).

### 4.2 `bear` (Macro/Power Bottlenecks, Monetization Lag & CapEx Digestion)
- **AI & Data Center:** Data center power grid bottlenecks and slower enterprise AI ROI trigger a 2028–2030 CapEx digestion phase; model quantization (FP4/INT4/1.58-bit weights) reduces HBM and eSSD per-token requirements; aggregate capacity CAGR slows to **14.1%** (reaching **10.4 ZB** and **$436B** by 2035).
- **Physical AI (`auto` & `robot`):** Regulatory delays for L3/L4 autonomous vehicles and slower factory/commercial qualification keep humanoid shipments around ~2.5M units/yr by 2035.

### 4.3 `bull` (Ubiquitous Agentic AI, Sovereign Clouds & Accelerated Physical AI)
- **AI & Data Center:** Continuous test-time compute, multi-modal video generation, persistent agentic memory, and sovereign AI build-outs keep HBM and QLC/PLC eSSD in structural shortage; 3D DRAM and >500-layer 3D NAND command sustained pricing power; aggregate capacity CAGR reaches **21.5%** (**19.5 ZB** and **$818B** by 2035).
- **Physical AI (`auto` & `robot`):** Rapid commercialization of L4 autonomous vehicles and general-purpose humanoid robots (~11M units/yr by 2035, aligned with Morgan Stanley's accelerated adoption curve) turns physical AI into a major memory sink.

---

## 5. 2035 Technology Mix (`techMix2035`)

Both **Revenue Mix (%)** and **Capacity Mix (%)** by technology in 2035 are provided in `outlook.json` (`techMix2035` / `techMix2035Revenue` and `techMix2035Capacity`), each summing to **100.0%**:

| Technology | 2025 Cap Share (%) | 2035 Cap Share (`bear` / `base` / `bull` %) | 2025 Rev Share (%) | 2035 Rev Share (`bear` / `base` / `bull` %) |
|---|---:|---:|---:|---:|
| `dram` (excl. HBM) | 1.2% | 1.4% / **1.5%** / 1.6% | 44.9% | 33.0% / **32.0%** / 30.5% |
| `hbm` | 0.1% | 0.2% / **0.3%** / 0.4% | 13.7% | 19.5% / **23.0%** / 26.5% |
| `nand` | 36.7% | 41.4% / **43.2%** / 45.0% | 29.9% | 37.0% / **36.0%** / 35.0% |
| `hdd` | 56.2% | 50.0% / **48.2%** / 46.5% | 10.8% | 9.6% / **8.3%** / 7.4% |
| `tape` | 5.8% | 7.0% / **6.8%** / 6.5% | 0.8% | 0.9% / **0.7%** / 0.6% |
| **Total** | **100.0%** | **100.0% / 100.0% / 100.0%** | **100.0%** | **100.0% / 100.0% / 100.0%** |

---

## 6. Sensitivity Analysis & Key Caveats

1. **AI Memory Price Elasticity & Cyclicality:** Memory and storage revenues are historically subject to 3–4 year boom-bust inventory and wafer-capex cycles (often ±30–50% YoY ASP swings). While our model explicitly captures the 2026–2027 AI supercycle spike and subsequent 2028–2029 normalization, years 2030–2035 represent smoothed secular trendlines rather than attempting to time future inventory cycles in 2032 or 2034.
2. **HBM Wafer Trade-Off ("Conversion Gap"):** As documented by TrendForce (`S2`), HBM consumes ~3× the wafer area per bit of standard DDR5 due to larger die sizes, TSV overhead, and stacking yields. A ±5% shift in HBM bit share alters conventional DRAM wafer availability by ~15%, creating strong cross-segment price coupling between `ai_dc` and consumer segments (`pc`, `smartphone`).
3. **QLC/PLC Enterprise SSD vs. Nearline HAMR HDD Substitution:** In the Base case, QLC/PLC NAND captures warm AI data-lake and inference RAG tiers (lifting NAND to 43.2% of total EB by 2035), while HAMR nearline HDD retains a ~3.5–4.5× $/TB advantage for massive cloud object storage (48.2% of total EB). Faster-than-expected PLC NAND scaling or slower HAMR areal-density ramps could shift 5–8% of total exabytes from `hdd` to `nand`.
4. **Tape Compression Convention:** Following the official LTO Program (`S8`) reporting standard, tape capacity is reported on a 2.5:1 compressed exabyte basis (160.3 EB in 2025). On a native uncompressed basis, 2025 LTO shipments correspond to ~64 EB.

---

## 7. Source Registry (`S1`–`S15`)

- **`S1` (TrendForce):** *Global DRAM and NAND Flash Industry Revenue, Bit Shipment & AI Server Memory Allocation Tracker (2024–2027)* — https://www.trendforce.com/presscenter/news
- **`S2` (TrendForce / SK hynix & Micron IR):** *High Bandwidth Memory (HBM3e/HBM4) Share of DRAM Revenue (~20–23%) and Wafer/Bit Supply Analysis (2025–2026)* — https://www.trendforce.com/presscenter/news
- **`S3` (Yole Group):** *Status of the Memory Industry: DRAM & NAND Application Bit Demand Split (Server ~50%, Mobile ~25%, PC ~11%)* — https://www.yolegroup.com/industry-news/
- **`S4` (Goldman Sachs Global Investment Research):** *Global HBM Total Addressable Market (TAM) & AI Accelerator Memory Scaling Outlook (2025–2030E)* — https://www.goldmansachs.com/insights/
- **`S5` (Trendfocus / TrendForce):** *Global NAND Flash & Enterprise QLC SSD Exabyte Shipment Run-Rate and AI Data Center Storage Share (2024–2026)* — https://www.storagenewsletter.com/
- **`S6` (Coughlin Associates / Forbes Storage Reports):** *2025 Hard Disk Drive (HDD) Exabyte Shipments (~1,560 EB) and Quarterly Revenue Tracker (WDC, Seagate, Toshiba)* — https://www.forbes.com/sites/tomcoughlin/
- **`S7` (IDC / Seagate & Western Digital IR):** *Worldwide Hard Disk Drive & Nearline Mass-Capacity Storage Forecast and HAMR Mozaic Roadmap (2025–2035)* — https://www.idc.com/
- **`S8` (LTO Program — HPE, IBM, Quantum):** *Annual LTO Ultrium Tape Media Capacity Shipment Report (176.5 EB in 2024, 160.3 EB in 2025, LTO-10/11/12 Roadmap)* — https://www.lto.org/
- **`S9` (Gartner & IDC):** *Worldwide PC Shipments (270M Units in 2025) and AI PC Memory/Storage Configuration Forecast* — https://www.gartner.com/en/newsroom
- **`S10` (Counterpoint Research & IDC):** *Global Smartphone Shipments (1.25B Units in 2025) and Average Smartphone DRAM Capacity Tracker (8.4 GB in 2025)* — https://www.counterpointresearch.com/
- **`S11` (Yole Group & Micron Automotive):** *Automotive Memory Market Outlook ($8.0B in 2025) and ADAS Level 2+ to Level 5 Autonomous Vehicle Content Multipliers* — https://www.micron.com/solutions/automotive
- **`S12` (Gartner & Persistence Market Research):** *Software-Defined Vehicle (SDV) Zonal Architecture DRAM & Automotive NAND Flash Forecast (2025–2035)* — https://www.gartner.com/
- **`S13` (Goldman Sachs & Morgan Stanley Research):** *Physical AI & Global Humanoid Robot Shipment Outlook (890k Units in 2030, 6.5M Units in 2035; $138B TAM)* — https://www.morganstanley.com/insights
- **`S14` (International Federation of Robotics — IFR):** *World Robotics 2025 Report: Industrial Robots (603k Units) and Professional Service/Logistics Robots (250k Units)* — https://ifr.org/worldrobotics/
- **`S15` (Counterpoint Research):** *Humanoid & Embodied AI Onboard Compute Memory Trajectory (~39 GB DRAM by 2030, 64–128 GB by 2035)* — https://www.counterpointresearch.com/
