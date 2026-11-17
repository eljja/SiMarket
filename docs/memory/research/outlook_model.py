#!/usr/bin/env python3
"""
Deterministic generator for 2025-2035 Memory & Storage Demand Outlook (outlook.json).

Covers 5 memory/storage technologies (DRAM excl. HBM, HBM, NAND Flash, HDD, Tape)
across 7 application segments:
  - ai_dc:      AI data center (accelerator HBM, AI server DRAM, AI eSSD, AI data lake HDD)
  - cloud_dc:   Conventional cloud / enterprise data center (general server DRAM, eSSD, nearline HDD, tape archive)
  - pc:         Personal PCs / notebooks / workstations (client DRAM, client SSD, client HDD)
  - smartphone: Mobile smartphones (LPDDR, UFS/eMMC)
  - auto:       Automotive incl. autonomous driving (ADAS/SDV LPDDR, automotive UFS/PCIe NAND)
  - robot:      Robotics (humanoid + industrial/warehouse/service robots, onboard LPDDR + UFS/NVMe NAND)
  - edge_other: Edge/IoT, consumer electronics, industrial, networking, gaming consoles, surveillance

Metrics:
  - capacityEB:  Annual memory + storage capacity shipped (Exabytes, 1 EB = 10^18 bytes)
  - revenueBusd: Annual memory + storage revenue (US$ billions, nominal)

Scenarios: bear, base, bull (2025 baseline identical across all scenarios; bull >= base >= bear every year).
All figures rounded to 3 significant digits to avoid false precision.
"""

import json
import math
from pathlib import Path

YEARS = list(range(2025, 2036))  # 2025..2035 (11 years)
SEGMENTS = [
    "ai_dc",
    "cloud_dc",
    "pc",
    "smartphone",
    "auto",
    "robot",
    "edge_other",
]
SCENARIOS = ["bear", "base", "bull"]


def sig_round(val: float, sig: int = 3) -> float:
    """Round a positive float to `sig` significant digits."""
    if val == 0:
        return 0.0
    digits = sig - 1 - int(math.floor(math.log10(abs(val))))
    rounded = round(val, digits)
    # Clean floating point representation
    if digits <= 0:
        return float(int(rounded))
    return float(f"{rounded:.{digits}f}")


# ---------------------------------------------------------------------------
# 1. 2025 Technology Baselines (anchored to authoritative 2025 industry reports)
# ---------------------------------------------------------------------------
# Total 2025 Capacity = 34.3 + 3.2 + 1020 + 1560 + 160 = 2,777.5 EB (~2.78 ZB)
# Total 2025 Revenue  = 105.0 + 32.0 + 70.0 + 25.2 + 1.8 = $234.0B
BASELINE_2025_BY_TECH = {
    "dram": {
        "v": 105.0,
        "revenueBusd": 105.0,
        "capacityEB": 34.3,
        "priceUsdPerGB": 3.06,
        "unit": "USD_B (v/revenueBusd) and EB (capacityEB)",
        "q": "R",
        "src": ["S1", "S2", "S3"],
    },
    "hbm": {
        "v": 32.0,
        "revenueBusd": 32.0,
        "capacityEB": 3.2,
        "priceUsdPerGB": 10.0,
        "unit": "USD_B (v/revenueBusd) and EB (capacityEB)",
        "q": "R",
        "src": ["S1", "S2", "S4"],
    },
    "nand": {
        "v": 70.0,
        "revenueBusd": 70.0,
        "capacityEB": 1020.0,
        "priceUsdPerGB": 0.0686,
        "unit": "USD_B (v/revenueBusd) and EB (capacityEB)",
        "q": "R",
        "src": ["S1", "S3", "S5"],
    },
    "hdd": {
        "v": 25.2,
        "revenueBusd": 25.2,
        "capacityEB": 1560.0,
        "priceUsdPerGB": 0.0162,
        "unit": "USD_B (v/revenueBusd) and EB (capacityEB)",
        "q": "R",
        "src": ["S6", "S7"],
    },
    "tape": {
        "v": 1.8,
        "revenueBusd": 1.8,
        "capacityEB": 160.0,
        "priceUsdPerGB": 0.0113,
        "unit": "USD_B (v/revenueBusd) and EB (capacityEB)",
        "q": "R",
        "src": ["S8"],
    },
}

# ---------------------------------------------------------------------------
# 2. 2025 Segment Baselines & 2025-2035 Compound Growth Parameters
# ---------------------------------------------------------------------------
# Bottom-up 2025 reconciliation across segments:
#   ai_dc:      3.2 EB HBM ($32.0B) + 8.8 EB DDR5 ($32.0B) + 180 EB eSSD ($17.1B) + 158 EB nearline HDD ($2.6B)
#               = 350 EB, $83.7B
#   cloud_dc:   9.2 EB DDR5 ($28.0B) + 260 EB eSSD ($19.5B) + 1230 EB nearline HDD ($19.7B) + 160 EB tape ($1.8B)
#               = 1660 EB, $69.0B
#   pc:         4.1 EB DRAM ($11.0B) + 195 EB cSSD ($11.0B) + 81 EB cHDD ($1.4B)
#               = 280 EB, $23.4B
#   smartphone: 9.4 EB LPDDR ($24.0B) + 235 EB UFS/eMMC ($13.4B)
#               = 244 EB, $37.4B
#   auto:       1.2 EB auto DRAM ($4.3B) + 18.8 EB auto NAND ($3.7B)
#               = 20.0 EB, $8.0B
#   robot:      0.07 EB LPDDR5 ($0.35B) + 0.83 EB UFS/NVMe ($0.25B)
#               = 0.90 EB, $0.60B
#   edge_other: 1.53 EB DRAM/GDDR ($5.35B) + 131.2 EB NAND ($5.05B) + 91 EB surveillance/NAS HDD ($1.50B)
#               = 224 EB, $11.9B
#   TOTAL 2025: 2,778.9 EB (~2,778 EB), $234.0B

SEGMENT_PARAMS = {
    "ai_dc": {
        "cap_2025": 350.0,
        "rev_2025": 83.7,
        "cap_cagr": {"bear": 0.195, "base": 0.245, "bull": 0.295},
        "rev_cagr": {"bear": 0.095, "base": 0.138, "bull": 0.178},
        # 2026-2027 AI memory supercycle price/allocation wave (normalizes by 2029-2035)
        "supercycle_rev_bump": {
            "bear": [1.00, 1.08, 1.10, 1.04, 1.01, 1.00, 1.00, 1.00, 1.00, 1.00, 1.00],
            "base": [1.00, 1.14, 1.18, 1.08, 1.03, 1.00, 1.00, 1.00, 1.00, 1.00, 1.00],
            "bull": [1.00, 1.20, 1.26, 1.12, 1.05, 1.00, 1.00, 1.00, 1.00, 1.00, 1.00],
        },
    },
    "cloud_dc": {
        "cap_2025": 1660.0,
        "rev_2025": 69.0,
        "cap_cagr": {"bear": 0.145, "base": 0.180, "bull": 0.215},
        "rev_cagr": {"bear": 0.052, "base": 0.080, "bull": 0.110},
        "supercycle_rev_bump": {
            "bear": [1.00, 1.05, 1.06, 1.02, 1.00, 1.00, 1.00, 1.00, 1.00, 1.00, 1.00],
            "base": [1.00, 1.09, 1.11, 1.05, 1.02, 1.00, 1.00, 1.00, 1.00, 1.00, 1.00],
            "bull": [1.00, 1.13, 1.16, 1.08, 1.03, 1.00, 1.00, 1.00, 1.00, 1.00, 1.00],
        },
    },
    "pc": {
        "cap_2025": 280.0,
        "rev_2025": 23.4,
        "cap_cagr": {"bear": 0.085, "base": 0.112, "bull": 0.140},
        "rev_cagr": {"bear": 0.018, "base": 0.041, "bull": 0.065},
        "supercycle_rev_bump": {
            "bear": [1.00, 1.03, 1.03, 1.01, 1.00, 1.00, 1.00, 1.00, 1.00, 1.00, 1.00],
            "base": [1.00, 1.06, 1.07, 1.03, 1.01, 1.00, 1.00, 1.00, 1.00, 1.00, 1.00],
            "bull": [1.00, 1.09, 1.11, 1.05, 1.02, 1.00, 1.00, 1.00, 1.00, 1.00, 1.00],
        },
    },
    "smartphone": {
        "cap_2025": 244.0,
        "rev_2025": 37.4,
        "cap_cagr": {"bear": 0.092, "base": 0.120, "bull": 0.150},
        "rev_cagr": {"bear": 0.022, "base": 0.045, "bull": 0.070},
        "supercycle_rev_bump": {
            "bear": [1.00, 1.03, 1.03, 1.01, 1.00, 1.00, 1.00, 1.00, 1.00, 1.00, 1.00],
            "base": [1.00, 1.06, 1.07, 1.03, 1.01, 1.00, 1.00, 1.00, 1.00, 1.00, 1.00],
            "bull": [1.00, 1.09, 1.11, 1.05, 1.02, 1.00, 1.00, 1.00, 1.00, 1.00, 1.00],
        },
    },
    "auto": {
        "cap_2025": 20.0,
        "rev_2025": 8.0,
        "cap_cagr": {"bear": 0.180, "base": 0.225, "bull": 0.275},
        "rev_cagr": {"bear": 0.088, "base": 0.122, "bull": 0.158},
        "supercycle_rev_bump": {
            "bear": [1.00, 1.02, 1.02, 1.01, 1.00, 1.00, 1.00, 1.00, 1.00, 1.00, 1.00],
            "base": [1.00, 1.04, 1.05, 1.02, 1.01, 1.00, 1.00, 1.00, 1.00, 1.00, 1.00],
            "bull": [1.00, 1.06, 1.08, 1.04, 1.02, 1.00, 1.00, 1.00, 1.00, 1.00, 1.00],
        },
    },
    "robot": {
        "cap_2025": 0.90,
        "rev_2025": 0.60,
        "cap_cagr": {"bear": 0.340, "base": 0.415, "bull": 0.485},
        "rev_cagr": {"bear": 0.220, "base": 0.285, "bull": 0.345},
        "supercycle_rev_bump": {
            "bear": [1.00, 1.00, 1.00, 1.00, 1.00, 1.00, 1.00, 1.00, 1.00, 1.00, 1.00],
            "base": [1.00, 1.02, 1.03, 1.01, 1.00, 1.00, 1.00, 1.00, 1.00, 1.00, 1.00],
            "bull": [1.00, 1.04, 1.06, 1.03, 1.01, 1.00, 1.00, 1.00, 1.00, 1.00, 1.00],
        },
    },
    "edge_other": {
        "cap_2025": 224.0,
        "rev_2025": 11.9,
        "cap_cagr": {"bear": 0.100, "base": 0.130, "bull": 0.160},
        "rev_cagr": {"bear": 0.035, "base": 0.060, "bull": 0.085},
        "supercycle_rev_bump": {
            "bear": [1.00, 1.02, 1.02, 1.01, 1.00, 1.00, 1.00, 1.00, 1.00, 1.00, 1.00],
            "base": [1.00, 1.04, 1.05, 1.02, 1.01, 1.00, 1.00, 1.00, 1.00, 1.00, 1.00],
            "bull": [1.00, 1.06, 1.08, 1.04, 1.02, 1.00, 1.00, 1.00, 1.00, 1.00, 1.00],
        },
    },
}

# ---------------------------------------------------------------------------
# 3. 2035 Technology Mix (% of 2035 Total Capacity and Revenue, summing to 100)
# ---------------------------------------------------------------------------
# Note: `techMix2035` provides the revenue share (%) across dram, hbm, nand, hdd, tape
# (where HBM's structural weight is clearly visible), while `techMix2035Capacity` and
# `techMix2035Revenue` explicitly provide both the capacity-EB share (%) and revenue-USD share (%).
TECH_MIX_2035_REVENUE = {
    "bear": {"dram": 33.0, "hbm": 19.5, "nand": 37.0, "hdd": 9.6, "tape": 0.9},
    "base": {"dram": 32.0, "hbm": 23.0, "nand": 36.0, "hdd": 8.3, "tape": 0.7},
    "bull": {"dram": 30.5, "hbm": 26.5, "nand": 35.0, "hdd": 7.4, "tape": 0.6},
}

TECH_MIX_2035_CAPACITY = {
    "bear": {"dram": 1.4, "hbm": 0.2, "nand": 41.4, "hdd": 50.0, "tape": 7.0},
    "base": {"dram": 1.5, "hbm": 0.3, "nand": 43.2, "hdd": 48.2, "tape": 6.8},
    "bull": {"dram": 1.6, "hbm": 0.4, "nand": 45.0, "hdd": 46.5, "tape": 6.5},
}

# ---------------------------------------------------------------------------
# 4. Bilingual Per-Segment Assumptions & Traceable Sources
# ---------------------------------------------------------------------------
ASSUMPTIONS = [
    {
        "segment": "ai_dc",
        "en": (
            "AI Data Center (2025 baseline: 350 EB, $83.7B): Anchored to ~1.7M AI servers (~6.8M AI accelerators) "
            "consuming 3.2 EB of HBM ($32.0B), 8.8 EB of DDR5/LPDDR5X host DRAM ($32.0B), 180 EB of high-density "
            "TLC/QLC enterprise SSDs ($17.1B), and 158 EB of AI training data-lake nearline HDD ($2.6B). "
            "2025–2035 Base CAGR is 24.5% in capacity (to 3,130 EB; Bear 19.5% / Bull 29.5%) and 13.8% in revenue "
            "(to $305B; Bear 9.5% / Bull 17.8%) as HBM stacks scale from 80–192 GB (HBM3e) to 512 GB–1.5 TB (HBM4/5/6) "
            "and agentic RAG/KV-cache workloads drive petabyte-scale QLC/PLC eSSD per rack."
        ),
        "ko": (
            "AI 데이터센터 (2025년 기준: 350 EB, $83.7B): 약 170만 대의 AI 서버(가속기 약 680만 개)가 HBM 3.2 EB($32.0B), "
            "호스트 DDR5/LPDDR5X DRAM 8.8 EB($32.0B), 고집적 TLC/QLC 기업용 SSD 180 EB($17.1B), 학습 데이터 레이크용 "
            "니어라인 HDD 158 EB($2.6B)를 소비하는 것으로 산정. HBM 용량이 80~192GB(HBM3e)에서 512GB~1.5TB(HBM4/5/6)로 확대되고 "
            "에이전트형 RAG/KV-캐시용 QLC/PLC eSSD 탑재가 급증함에 따라 2025~2035년 기본(Base) 연평균 성장률(CAGR)은 용량 기준 24.5%"
            "(2035년 3,130 EB; 약세 19.5% / 강세 29.5%), 매출 기준 13.8%(2035년 $305B; 약세 9.5% / 강세 17.8%)로 전망."
        ),
        "src": ["S1", "S2", "S4", "S5"],
    },
    {
        "segment": "cloud_dc",
        "en": (
            "Conventional Cloud & Enterprise DC (2025 baseline: 1,660 EB, $69.0B): Comprises ~11.8M general-purpose servers "
            "(~780 GB DDR5/DDR4 per server = 9.2 EB, $28.0B), 260 EB of general cloud/enterprise SSD ($19.5B), 1,230 EB of "
            "nearline enterprise HDD ($19.7B), and 160 EB of LTO/enterprise archival tape ($1.8B). "
            "2025–2035 Base CAGR is 18.0% in capacity (to 8,690 EB; Bear 14.5% / Bull 21.5%) and 8.0% in revenue "
            "(to $149B; Bear 5.2% / Bull 11.0%), driven by HAMR nearline HDDs scaling from 24–30 TB to 60–100 TB and LTO-10/11/12 cold archives."
        ),
        "ko": (
            "일반 클라우드 및 엔터프라이즈 데이터센터 (2025년 기준: 1,660 EB, $69.0B): 범용 서버 약 1,180만 대(대당 약 780GB DRAM = 9.2 EB, $28.0B), "
            "기업용 SSD 260 EB($19.5B), 니어라인 HDD 1,230 EB($19.7B), LTO/엔터프라이즈 아카이브 테이프 160 EB($1.8B)로 구성. "
            "HAMR 기반 니어라인 HDD의 디스크당 용량 확대(24~30TB→60~100TB)와 LTO-10/11/12 콜드 아카이브 확장에 힘입어 "
            "2025~2035년 기본(Base) CAGR은 용량 18.0%(2035년 8,690 EB; 약세 14.5% / 강세 21.5%), 매출 8.0%(2035년 $149B; 약세 5.2% / 강세 11.0%)로 전망."
        ),
        "src": ["S1", "S5", "S6", "S7", "S8"],
    },
    {
        "segment": "pc",
        "en": (
            "Personal PCs & Notebooks (2025 baseline: 280 EB, $23.4B): Based on Gartner/IDC 2025 shipments of 270M units "
            "with average ~15.2 GB DRAM (4.1 EB, $11.0B), ~720 GB client SSD (195 EB, $11.0B), and legacy desktop/external HDD (81 EB, $1.4B). "
            "2025–2035 Base CAGR is 11.2% in capacity (to 810 EB; Bear 8.5% / Bull 14.0%) and 4.1% in revenue "
            "(to $35.0B; Bear 1.8% / Bull 6.5%) as AI PC adoption pushes average DRAM to 32–64 GB and client SSDs to 1.8–3.0 TB while client HDDs phase out."
        ),
        "ko": (
            "개인용 PC 및 노트북 (2025년 기준: 280 EB, $23.4B): Gartner/IDC 기준 2025년 PC 출하량 2억 7,000만 대, 대당 평균 DRAM 15.2GB(4.1 EB, $11.0B), "
            "클라이언트 SSD 720GB(195 EB, $11.0B), 데스크톱/외장 HDD(81 EB, $1.4B) 기반. 온디바이스 AI PC 보급으로 대당 평균 DRAM이 32~64GB, "
            "SSD가 1.8~3.0TB로 증가하고 클라이언트 HDD는 단계적으로 퇴출되면서 2025~2035년 기본(Base) CAGR은 용량 11.2%(2035년 810 EB; 약세 8.5% / 강세 14.0%), "
            "매출 4.1%(2035년 $35.0B; 약세 1.8% / 강세 6.5%)로 전망."
        ),
        "src": ["S3", "S9"],
    },
    {
        "segment": "smartphone",
        "en": (
            "Smartphones (2025 baseline: 244 EB, $37.4B): Anchored to IDC/Counterpoint 2025 shipments of 1.25B units "
            "with Counterpoint's 8.4 GB average mobile LPDDR (9.4 EB incl. module overhead, $24.0B; ~25% of global DRAM bits) "
            "and ~188 GB average UFS/eMMC NAND (235 EB, $13.4B). "
            "2025–2035 Base CAGR is 12.0% in capacity (to 758 EB; Bear 9.2% / Bull 15.0%) and 4.5% in revenue "
            "(to $58.0B; Bear 2.2% / Bull 7.0%) as multimodal on-device AI agents lift average phone DRAM to 16–24 GB and storage to 450–750 GB."
        ),
        "ko": (
            "스마트폰 (2025년 기준: 244 EB, $37.4B): IDC/Counterpoint 기준 2025년 스마트폰 출하량 12억 5,000만 대, 대당 평균 모바일 LPDDR 8.4GB"
            "(9.4 EB, $24.0B; 글로벌 DRAM 비트 수요의 약 25%) 및 평균 UFS/eMMC 188GB(235 EB, $13.4B) 반영. "
            "온디바이스 멀티모달 AI 에이전트 탑재로 대당 평균 DRAM이 16~24GB, 낸드가 450~750GB로 확대되며 2025~2035년 기본(Base) CAGR은 "
            "용량 12.0%(2035년 758 EB; 약세 9.2% / 강세 15.0%), 매출 4.5%(2035년 $58.0B; 약세 2.2% / 강세 7.0%)로 전망."
        ),
        "src": ["S3", "S10"],
    },
    {
        "segment": "auto",
        "en": (
            "Automotive & Autonomous Driving (2025 baseline: 20.0 EB, $8.0B): Covers ~90M global vehicles with fleet-average "
            "~13.3 GB automotive LPDDR/DDR (1.2 EB, $4.3B) and ~200 GB automotive UFS/eMMC NAND (18.8 EB, $3.7B), matching Yole/Micron's "
            "~$8.0B automotive memory baseline. 2025–2035 Base CAGR is 22.5% in capacity (to 152 EB; Bear 18.0% / Bull 27.5%) and "
            "12.2% in revenue (to $25.3B; Bear 8.8% / Bull 15.8%) as L2+/L3/L4 ADAS and centralized SDV zonal architectures scale toward "
            "64–256 GB LPDDR5X/6 and 1–4 TB PCIe/UFS automotive flash per vehicle."
        ),
        "ko": (
            "자동차 및 자율주행 (2025년 기준: 20.0 EB, $8.0B): 글로벌 자동차 생산 약 9,000만 대 기준 대당 평균 차량용 DRAM 13.3GB(1.2 EB, $4.3B) 및 "
            "차량용 UFS/eMMC 낸드 200GB(18.8 EB, $3.7B)로 Yole/Micron의 차량용 메모리 시장 규모(약 $8.0B)에 부합. "
            "L2+/L3/L4 자율주행 및 SDV(소프트웨어 정의 차량) 중앙집중형 아키텍처 확산으로 대당 64~256GB LPDDR5X/6 및 1~4TB 차량용 낸드 탑재가 늘어나며 "
            "2025~2035년 기본(Base) CAGR은 용량 22.5%(2035년 152 EB; 약세 18.0% / 강세 27.5%), 매출 12.2%(2035년 $25.3B; 약세 8.8% / 강세 15.8%)로 전망."
        ),
        "src": ["S11", "S12"],
    },
    {
        "segment": "robot",
        "en": (
            "Robotics — Humanoid, Industrial & Service (2025 baseline: 0.90 EB, $0.60B): Anchored to IFR 2025 shipments of "
            "603k industrial robots, ~250k commercial/warehouse service robots, ~7k–15k early humanoid robots, and ~20M consumer SLAM robots "
            "(0.07 EB LPDDR5 at $0.35B + 0.83 EB UFS/NVMe at $0.25B). 2025–2035 Base CAGR is the highest of any segment at 41.5% in capacity "
            "(to 29.1 EB; Bear 34.0% / Bull 48.5%) and 28.5% in revenue (to $7.4B; Bear 22.0% / Bull 34.5%), driven by Goldman Sachs' "
            "Physical AI forecast of 890k humanoids in 2030 and 6.5M in 2035 (with 64–128 GB LPDDR5X/6 and 1–4 TB NAND per humanoid)."
        ),
        "ko": (
            "로보틱스 — 휴머노이드·산업용·서비스 로봇 (2025년 기준: 0.90 EB, $0.60B): IFR 2025년 통계 기준 산업용 로봇 60.3만 대, 상업/물류 서비스 로봇 약 25만 대, "
            "초기 휴머노이드 7천~1.5만 대 및 소비자용 로봇 약 2,000만 대(LPDDR5 0.07 EB $0.35B + 낸드 0.83 EB $0.25B) 반영. "
            "골드만삭스 '피지컬 AI' 전망(휴머노이드 연간 출하량 2030년 89만 대, 2035년 650만 대)과 대당 64~128GB LPDDR5X/6 및 1~4TB 낸드 탑재에 힘입어 "
            "전 세그먼트 중 가장 높은 2025~2035년 기본(Base) 용량 CAGR 41.5%(2035년 29.1 EB; 약세 34.0% / 강세 48.5%) 및 매출 CAGR 28.5%"
            "(2035년 $7.4B; 약세 22.0% / 강세 34.5%)를 기록할 전망."
        ),
        "src": ["S13", "S14", "S15"],
    },
    {
        "segment": "edge_other",
        "en": (
            "Edge/IoT, Consumer, Industrial, Networking & Gaming (2025 baseline: 224 EB, $11.9B): Includes discrete GPUs, "
            "gaming consoles, 5G/telecom networking, smart TVs, industrial IoT, removable flash, and edge surveillance NVR HDDs "
            "(1.53 EB DRAM at $5.35B + 131.2 EB NAND at $5.05B + 91 EB edge/surveillance HDD at $1.50B). "
            "2025–2035 Base CAGR is 13.0% in capacity (to 760 EB; Bear 10.0% / Bull 16.0%) and 6.0% in revenue "
            "(to $21.3B; Bear 3.5% / Bull 8.5%) driven by edge AI gateways, AR/VR devices, and multi-camera 4K/8K smart video analytics."
        ),
        "ko": (
            "엣지/IoT, 가전, 산업용, 네트워크 및 게이밍 (2025년 기준: 224 EB, $11.9B): 외장 GPU, 게임 콘솔, 5G/통신 장비, 스마트 TV, 산업용 IoT, "
            "외장 스토리지 및 지능형 영상보안(NVR) HDD(DRAM 1.53 EB $5.35B + 낸드 131.2 EB $5.05B + 엣지/보안 HDD 91 EB $1.50B) 포함. "
            "엣지 AI 게이트웨이, AR/VR 기기, 4K/8K 멀티카메라 영상분석 확산으로 2025~2035년 기본(Base) CAGR은 용량 13.0%"
            "(2035년 760 EB; 약세 10.0% / 강세 16.0%), 매출 6.0%(2035년 $21.3B; 약세 3.5% / 강세 8.5%)로 전망."
        ),
        "src": ["S1", "S3", "S6"],
    },
]

SOURCES = {
    "S1": {
        "publisher": "TrendForce",
        "title": "Global DRAM and NAND Flash Industry Revenue, Bit Shipment & AI Server Memory Allocation Tracker (2024–2027)",
        "url": "https://www.trendforce.com/presscenter/news",
        "accessed": "2026-11-17",
    },
    "S2": {
        "publisher": "TrendForce / SK hynix & Micron Investor Presentations",
        "title": "High Bandwidth Memory (HBM3e/HBM4) Share of DRAM Revenue (~20–23%) and Wafer/Bit Supply Analysis (2025–2026)",
        "url": "https://www.trendforce.com/presscenter/news",
        "accessed": "2026-11-17",
    },
    "S3": {
        "publisher": "Yole Group",
        "title": "Status of the Memory Industry: DRAM & NAND Application Bit Demand Split (Server ~50%, Mobile ~25%, PC ~11%)",
        "url": "https://www.yolegroup.com/industry-news/",
        "accessed": "2026-11-17",
    },
    "S4": {
        "publisher": "Goldman Sachs Global Investment Research",
        "title": "Global HBM Total Addressable Market (TAM) & AI Accelerator Memory Scaling Outlook (2025–2030E)",
        "url": "https://www.goldmansachs.com/insights/",
        "accessed": "2026-11-17",
    },
    "S5": {
        "publisher": "Trendfocus / TrendForce",
        "title": "Global NAND Flash & Enterprise QLC SSD Exabyte Shipment Run-Rate and AI Data Center Storage Share (2024–2026)",
        "url": "https://www.storagenewsletter.com/",
        "accessed": "2026-11-17",
    },
    "S6": {
        "publisher": "Coughlin Associates / Forbes Storage Reports (Tom Coughlin)",
        "title": "2025 Hard Disk Drive (HDD) Exabyte Shipments (~1,560 EB) and Quarterly Revenue Tracker (WDC, Seagate, Toshiba)",
        "url": "https://www.forbes.com/sites/tomcoughlin/",
        "accessed": "2026-11-17",
    },
    "S7": {
        "publisher": "IDC / Seagate & Western Digital Investor Relations",
        "title": "Worldwide Hard Disk Drive & Nearline Mass-Capacity Storage Forecast and HAMR Mozaic Roadmap (2025–2035)",
        "url": "https://www.idc.com/",
        "accessed": "2026-11-17",
    },
    "S8": {
        "publisher": "LTO Program (HPE, IBM, Quantum)",
        "title": "Annual LTO Ultrium Tape Media Capacity Shipment Report (176.5 EB in 2024, 160.3 EB in 2025, LTO-10/11/12 Roadmap)",
        "url": "https://www.lto.org/",
        "accessed": "2026-11-17",
    },
    "S9": {
        "publisher": "Gartner & IDC",
        "title": "Worldwide PC Shipments (270M Units in 2025) and AI PC Memory/Storage Configuration Forecast",
        "url": "https://www.gartner.com/en/newsroom",
        "accessed": "2026-11-17",
    },
    "S10": {
        "publisher": "Counterpoint Research & IDC",
        "title": "Global Smartphone Shipments (1.25B Units in 2025) and Average Smartphone DRAM Capacity Tracker (8.4 GB in 2025)",
        "url": "https://www.counterpointresearch.com/",
        "accessed": "2026-11-17",
    },
    "S11": {
        "publisher": "Yole Group & Micron Technology Automotive Segment",
        "title": "Automotive Memory Market Outlook ($8.0B in 2025) and ADAS Level 2+ to Level 5 Autonomous Vehicle Content Multipliers",
        "url": "https://www.micron.com/solutions/automotive",
        "accessed": "2026-11-17",
    },
    "S12": {
        "publisher": "Gartner & Persistence Market Research",
        "title": "Software-Defined Vehicle (SDV) Zonal Architecture DRAM & Automotive NAND Flash Forecast (2025–2035)",
        "url": "https://www.gartner.com/",
        "accessed": "2026-11-17",
    },
    "S13": {
        "publisher": "Goldman Sachs & Morgan Stanley Research",
        "title": "Physical AI & Global Humanoid Robot Shipment Outlook (890k Units in 2030, 6.5M Units in 2035; $138B TAM)",
        "url": "https://www.morganstanley.com/insights",
        "accessed": "2026-11-17",
    },
    "S14": {
        "publisher": "International Federation of Robotics (IFR)",
        "title": "World Robotics 2025 Report: Industrial Robots (603k Units) and Professional Service/Logistics Robots (250k Units)",
        "url": "https://ifr.org/worldrobotics/",
        "accessed": "2026-11-17",
    },
    "S15": {
        "publisher": "Counterpoint Research",
        "title": "Humanoid & Embodied AI Onboard Compute Memory Trajectory (~39 GB DRAM by 2030, 64–128 GB by 2035)",
        "url": "https://www.counterpointresearch.com/",
        "accessed": "2026-11-17",
    },
}

NOTES = [
    "All 2025 baseline figures are identical across bear, base, and bull scenarios and reconcile both across the 7 application segments (2,778.9 EB, $234.0B) and across the 5 technologies (dram 34.3 EB / $105.0B, hbm 3.2 EB / $32.0B, nand 1,020 EB / $70.0B, hdd 1,560 EB / $25.2B, tape 160 EB / $1.8B).",
    "Capacity is reported in decimal Exabytes (1 EB = 10^18 bytes); tape follows the LTO Program standard reporting convention (compressed exabytes). Revenue is reported in nominal US$ billions.",
    "Revenue trajectories incorporate the 2026–2027 AI memory supercycle ('memflation' contract price surge reported by TrendForce and Yole Group) followed by greenfield fab capacity normalization in 2028–2030 and secular compound growth through 2035.",
    "techMix2035 reports the 2035 revenue percentage split across dram, hbm, nand, hdd, and tape (summing to 100.0%), while techMix2035Capacity and techMix2035Revenue provide the explicit 2035 capacity-EB and revenue-USD percentage mixes side by side.",
    "All generated numbers are rounded to 3 significant digits in compliance with the Memory Atlas accuracy policy.",
]


def build_outlook() -> dict:
    scenarios_out = {}
    for scn in SCENARIOS:
        cap_dict = {}
        rev_dict = {}
        for seg in SEGMENTS:
            p = SEGMENT_PARAMS[seg]
            c0 = p["cap_2025"]
            r0 = p["rev_2025"]
            c_cagr = p["cap_cagr"][scn]
            r_cagr = p["rev_cagr"][scn]
            bumps = p["supercycle_rev_bump"][scn]

            cap_series = []
            rev_series = []
            for idx, _yr in enumerate(YEARS):
                if idx == 0:
                    cap_val = sig_round(c0, 3)
                    rev_val = sig_round(r0, 3)
                else:
                    cap_val = sig_round(c0 * ((1.0 + c_cagr) ** idx), 3)
                    rev_val = sig_round(r0 * ((1.0 + r_cagr) ** idx) * bumps[idx], 3)
                cap_series.append(cap_val)
                rev_series.append(rev_val)

            cap_dict[seg] = cap_series
            rev_dict[seg] = rev_series

        scenarios_out[scn] = {
            "capacityEB": cap_dict,
            "revenueBusd": rev_dict,
        }

    data = {
        "domain": "outlook",
        "years": YEARS,
        "segments": SEGMENTS,
        "scenarios": scenarios_out,
        "baseline2025ByTech": BASELINE_2025_BY_TECH,
        "techMix2035": TECH_MIX_2035_REVENUE,
        "techMix2035Capacity": TECH_MIX_2035_CAPACITY,
        "techMix2035Revenue": TECH_MIX_2035_REVENUE,
        "assumptions": ASSUMPTIONS,
        "sources": SOURCES,
        "notes": NOTES,
    }
    return data


def verify_outlook(data: dict) -> None:
    assert data["domain"] == "outlook"
    assert data["years"] == list(range(2025, 2036))
    assert len(data["years"]) == 11
    assert data["segments"] == SEGMENTS

    # 1. Check scenarios structure, lengths, 2025 baseline identity, and bull >= base >= bear
    for metric in ["capacityEB", "revenueBusd"]:
        for seg in SEGMENTS:
            bear_arr = data["scenarios"]["bear"][metric][seg]
            base_arr = data["scenarios"]["base"][metric][seg]
            bull_arr = data["scenarios"]["bull"][metric][seg]
            assert len(bear_arr) == 11 and len(base_arr) == 11 and len(bull_arr) == 11
            # 2025 identical
            assert bear_arr[0] == base_arr[0] == bull_arr[0], f"2025 mismatch for {seg} {metric}"
            # Monotone scenario ordering per segment per year
            for i, yr in enumerate(YEARS):
                assert bear_arr[i] > 0, f"Non-positive value at {seg} {yr}"
                assert bull_arr[i] >= base_arr[i] >= bear_arr[i], (
                    f"Ordering violated for {seg} {metric} in {yr}: "
                    f"bear={bear_arr[i]}, base={base_arr[i]}, bull={bull_arr[i]}"
                )

        # Total ordering per year
        for i, yr in enumerate(YEARS):
            tot_bear = sum(data["scenarios"]["bear"][metric][s][i] for s in SEGMENTS)
            tot_base = sum(data["scenarios"]["base"][metric][s][i] for s in SEGMENTS)
            tot_bull = sum(data["scenarios"]["bull"][metric][s][i] for s in SEGMENTS)
            if i == 0:
                assert abs(tot_bear - tot_base) < 1e-9 and abs(tot_base - tot_bull) < 1e-9
            assert tot_bull >= tot_base >= tot_bear, f"Total ordering violated in {yr} for {metric}"

    # 2. Check techMix2035 sums to 100
    for mix_key in ["techMix2035", "techMix2035Capacity", "techMix2035Revenue"]:
        for scn in SCENARIOS:
            mix = data[mix_key][scn]
            assert set(mix.keys()) == {"dram", "hbm", "nand", "hdd", "tape"}
            total_pct = round(sum(mix.values()), 4)
            assert abs(total_pct - 100.0) < 1e-6, f"{mix_key}.{scn} sums to {total_pct}, expected 100.0"

    # 3. Check sources traceability
    known_sources = set(data["sources"].keys())
    for tech, info in data["baseline2025ByTech"].items():
        assert "v" in info and "src" in info and len(info["src"]) >= 1
        for s_id in info["src"]:
            assert s_id in known_sources, f"Unknown source {s_id} in baseline2025ByTech.{tech}"

    for item in data["assumptions"]:
        assert item["segment"] in SEGMENTS
        assert item["en"].strip() and item["ko"].strip()
        assert len(item["src"]) >= 1
        for s_id in item["src"]:
            assert s_id in known_sources, f"Unknown source {s_id} in assumptions for {item['segment']}"


def main() -> None:
    out_dir = Path(__file__).resolve().parent
    out_path = out_dir / "outlook.json"
    data = build_outlook()
    verify_outlook(data)
    out_path.write_text(json.dumps(data, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
    print(f"Successfully generated and verified: {out_path}")


if __name__ == "__main__":
    main()
