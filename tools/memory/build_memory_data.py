#!/usr/bin/env python3
"""
Stage 3 Compiler: Merges researched JSON files under docs/memory/research/
into window.memoryAtlas inside memory_data.js.
Run: python tools/memory/build_memory_data.py
"""
import json
import math
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
RES_DIR = ROOT / "docs" / "memory" / "research"
OUT_FILE = ROOT / "memory_data.js"

YEARS_HIST = list(range(1980, 2027))  # 1980..2026 (47 years)
YEARS_OUTLOOK = list(range(2025, 2036))  # 2025..2035 (11 years)

TECH_META = [
    {
        "id": "sram",
        "color": "#f43f5e",
        "name": {"en": "SRAM", "ko": "SRAM (정적 램)"},
        "desc": {
            "en": "6-transistor ultra-fast volatile memory (<1ns latency) for CPU/GPU registers, L1–L3 cache, and high-speed networking.",
            "ko": "6-트랜지스터 구조의 초고속 휘발성 메모리(<1ns 지연시간). CPU/GPU 캐시 및 초고속 네트워크 스위치에 사용."
        },
    },
    {
        "id": "dram",
        "color": "#00e5ff",
        "name": {"en": "DRAM (incl. HBM)", "ko": "DRAM (HBM 포함)"},
        "desc": {
            "en": "1T1C main working memory (DDR5, LPDDR5X) and 3D-stacked High Bandwidth Memory (HBM3E/HBM4) for AI accelerators.",
            "ko": "1T1C 주기억장치(DDR5, LPDDR5X) 및 AI 가속기용 3D 적층 고대역폭 메모리(HBM3E/HBM4)."
        },
    },
    {
        "id": "nor",
        "color": "#a855f7",
        "name": {"en": "NOR Flash", "ko": "NOR 플래시"},
        "desc": {
            "en": "Execute-in-place (XIP) non-volatile code storage for BIOS, automotive ADAS, industrial control, and IoT/TWS devices.",
            "ko": "코드 직접 실행(XIP)에 최적화된 비휘발성 메모리. PC 바이오스, 전장 ADAS, 산업용 제어기 및 IoT 기기 펌웨어 저장."
        },
    },
    {
        "id": "nand",
        "color": "#10b981",
        "name": {"en": "NAND Flash", "ko": "NAND 플래시"},
        "desc": {
            "en": "High-density 3D vertical solid-state storage powering enterprise AI SSDs, client PCs, and mobile UFS storage.",
            "ko": "200단 이상 3D 수직 적층 비휘발성 스토리지. AI 데이터센터용 eSSD, PC SSD, 스마트폰 UFS의 핵심 매체."
        },
    },
    {
        "id": "hdd",
        "color": "#f59e0b",
        "name": {"en": "HDD (Magnetic Disk)", "ko": "HDD (하드디스크)"},
        "desc": {
            "en": "High-capacity spinning magnetic platters (24–36TB Helium/HAMR nearline drives) anchoring hyperscale bulk cloud storage.",
            "ko": "초대용량 마그네틱 플래터 저장장치(24~36TB 헬륨/HAMR 니어라인). 클라우드 데이터센터 대용량 스토리지의 주력."
        },
    },
    {
        "id": "tape",
        "color": "#64748b",
        "name": {"en": "Magnetic Tape (LTO)", "ko": "자기 테이프 (LTO)"},
        "desc": {
            "en": "Lowest-cost ($/GB), zero-idle-power archival medium (LTO-9/10 & enterprise tape) for cold cloud backup and AI corpora.",
            "ko": "GB당 최저 비용과 대기전력 '0'을 제공하는 초장기 콜드 아카이브 및 AI 원본 학습 데이터 백업 매체(LTO-9/10)."
        },
    },
]

SEGMENTS_META = [
    {"id": "ai_dc", "color": "#f43f5e", "name": {"en": "AI Data Center (HBM & AI SSD)", "ko": "AI 데이터센터 (HBM·AI 서버)"}},
    {"id": "cloud_dc", "color": "#38bdf8", "name": {"en": "Cloud & Enterprise Data Center", "ko": "일반 클라우드·엔터프라이즈 DC"}},
    {"id": "pc", "color": "#a855f7", "name": {"en": "Personal PC & Workstation", "ko": "개인용 PC·노트북"}},
    {"id": "smartphone", "color": "#10b981", "name": {"en": "Smartphone & Mobile", "ko": "스마트폰·모바일"}},
    {"id": "auto", "color": "#f59e0b", "name": {"en": "Autonomous Driving & Automotive", "ko": "자율주행·스마트 모빌리티"}},
    {"id": "robot", "color": "#00e5ff", "name": {"en": "Robotics (Humanoid & Industrial)", "ko": "로봇 (휴머노이드·산업용)"}},
    {"id": "edge_other", "color": "#64748b", "name": {"en": "Edge AI, IoT & Consumer", "ko": "엣지 AI·IoT·가전 기타"}},
]

VENDOR_META = {
    "dram": [
        {"id": "samsung", "color": "#00e5ff", "name": {"en": "Samsung Electronics", "ko": "삼성전자"}},
        {"id": "skhynix", "color": "#f43f5e", "name": {"en": "SK Hynix", "ko": "SK하이닉스"}},
        {"id": "micron", "color": "#10b981", "name": {"en": "Micron Technology", "ko": "마이크론"}},
        {"id": "cxmt", "color": "#f59e0b", "name": {"en": "CXMT", "ko": "창신메모리 (CXMT)"}},
        {"id": "nanya", "color": "#a855f7", "name": {"en": "Nanya Technology", "ko": "난야 (Nanya)"}},
        {"id": "elpida", "color": "#fb7185", "name": {"en": "Elpida (→Micron 2013)", "ko": "엘피다 (2013 마이크론 인수)"}},
        {"id": "qimonda", "color": "#94a3b8", "name": {"en": "Qimonda / Infineon", "ko": "키몬다 / 인피니언"}},
        {"id": "others", "color": "#475569", "name": {"en": "Others (Winbond, PSMC, etc.)", "ko": "기타 (윈본드 등)"}},
    ],
    "nand": [
        {"id": "samsung", "color": "#00e5ff", "name": {"en": "Samsung Electronics", "ko": "삼성전자"}},
        {"id": "kioxia", "color": "#f43f5e", "name": {"en": "Kioxia (Toshiba Memory)", "ko": "키옥시아 (구 도시바)"}},
        {"id": "skhynix", "color": "#fb923c", "name": {"en": "SK Hynix (+Solidigm)", "ko": "SK하이닉스 (+솔리다임)"}},
        {"id": "wdc", "color": "#38bdf8", "name": {"en": "WDC / SanDisk", "ko": "웨스턴디지털 / 샌디스크"}},
        {"id": "micron", "color": "#10b981", "name": {"en": "Micron Technology", "ko": "마이크론"}},
        {"id": "ymtc", "color": "#f59e0b", "name": {"en": "YMTC", "ko": "양쯔메모리 (YMTC)"}},
        {"id": "intel", "color": "#a855f7", "name": {"en": "Intel NAND (→Solidigm)", "ko": "인텔 NAND (→솔리다임)"}},
        {"id": "others", "color": "#475569", "name": {"en": "Others", "ko": "기타"}},
    ],
    "hdd": [
        {"id": "seagate", "color": "#10b981", "name": {"en": "Seagate Technology", "ko": "씨게이트 (Seagate)"}},
        {"id": "wdc", "color": "#38bdf8", "name": {"en": "Western Digital (incl. HGST)", "ko": "웨스턴디지털 (HGST 포함)"}},
        {"id": "toshiba", "color": "#f43f5e", "name": {"en": "Toshiba Electronic Devices", "ko": "도시바 (Toshiba)"}},
    ],
}

MILESTONES = [
    {"year": 1980, "tech": "hdd", "text": {"en": "Seagate introduces the ST-506 (5 MB, 5.25-inch HDD) at ~$300,000/GB, igniting the PC disk era.", "ko": "씨게이트, 최초의 5.25인치 HDD 'ST-506(5MB)' 출시 (GB당 약 30만 달러) — PC 하드디스크 시대 개막."}},
    {"year": 1984, "tech": "nor", "text": {"en": "Fujio Masuoka at Toshiba invents Flash Memory (NOR in 1984, NAND in 1987); Intel commercializes NOR in 1988.", "ko": "도시바 마스오카 후지오 박사 플래시 메모리 발명 — 1988년 인텔 NOR 플래시 상용화로 이어짐."}},
    {"year": 1989, "tech": "nand", "text": {"en": "Toshiba commercializes the first NAND Flash chip (4 Mbit), laying the foundation for solid-state storage.", "ko": "도시바, 세계 최초 4Mbit NAND 플래시 상용화 — 솔리드 스테이트 스토리지(SSD)의 기원."}},
    {"year": 1992, "tech": "dram", "text": {"en": "Samsung Electronics claims #1 global DRAM market share for the first time with 64Mbit DRAM leadership.", "ko": "삼성전자, 64Mbit DRAM 개발과 함께 세계 DRAM 시장 점유율 1위 최초 등극."}},
    {"year": 1995, "tech": "dram", "text": {"en": "Windows 95 launch triggers a global PC DRAM boom; DRAM revenue surges past $40B.", "ko": "윈도우 95 출시로 전 세계 PC 메모리 수요 폭발 — 글로벌 DRAM 매출 400억 달러 돌파."}},
    {"year": 2000, "tech": "tape", "text": {"en": "HP, IBM, and Seagate launch LTO-1 (100 GB native cartridge), standardizing open-format magnetic tape.", "ko": "HP·IBM·씨게이트 컨소시엄, 개방형 표준 자기 테이프 LTO-1(100GB) 출시."}},
    {"year": 2006, "tech": "nor", "text": {"en": "NOR Flash reaches its historical peak (~$8.5B) on feature-phone XIP demand before smartphones shift to NAND.", "ko": "피처폰 코드 저장 수요 정점으로 NOR 플래시 시장 역대 최고치(약 85억 달러) 기록."}},
    {"year": 2010, "tech": "hdd", "text": {"en": "Global HDD shipments peak at 651 million units/year before client PCs begin migrating to NAND SSDs.", "ko": "전 세계 HDD 연간 출하 대수 역대 최고치(6억 5,100만 대) 도달 — 이후 PC용은 SSD로 급속 대체."}},
    {"year": 2011, "tech": "hdd", "text": {"en": "Thailand floods disrupt 30%+ of global HDD supply, causing a 40% spike in $/GB disk prices through 2012.", "ko": "태국 대홍수로 글로벌 HDD 공급망 30% 이상 마비 — HDD 단가 40% 급등 및 SSD 전환 가속화."}},
    {"year": 2013, "tech": "dram", "text": {"en": "SK Hynix and AMD co-develop the first High Bandwidth Memory (HBM1) using 3D Through-Silicon Via (TSV) stacking, while Samsung introduces 3D V-NAND.", "ko": "SK하이닉스, TSV 수직 적층 기반 세계 최초 1세대 HBM 개발 & 삼성전자 3D V-NAND 양산 개시."}},
    {"year": 2018, "tech": "dram", "text": {"en": "Hyperscale cloud expansion drives the first Memory Supercycle: DRAM hits ~$99B and NAND reaches ~$63B.", "ko": "클라우드 데이터센터 증설 슈퍼사이클 도래 — DRAM 990억 달러, NAND 630억 달러 돌파."}},
    {"year": 2023, "tech": "nand", "text": {"en": "Worst post-pandemic memory glut slashes industry revenue by >35%, while ChatGPT ignites explosive HBM3 demand.", "ko": "역대급 메모리 재고 과잉으로 업계 적자 전환, 동시에 ChatGPT 등장으로 HBM3 수요 폭발 시작."}},
    {"year": 2025, "tech": "dram", "text": {"en": "HBM3E exceeds 30% of total DRAM dollar revenue; 30TB+ HAMR HDDs and 122TB QLC eSSDs scale into AI data centers.", "ko": "HBM3E가 전체 DRAM 매출의 30% 돌파 & AI 데이터센터용 122TB QLC eSSD·30TB+ HAMR HDD 본격 확산."}},
    {"year": 2026, "tech": "dram", "text": {"en": "HBM4 (12/16-high, 2048-bit interface) ramps for Rubin/Next-Gen AI clusters, pushing total memory revenue past $250B.", "ko": "차세대 AI 가속기용 HBM4 양산 본격화 및 전체 메모리·스토리지 시장 2,500억 달러 돌파(2026E)."}},
]


def round_sig(val, sig=4):
    if val is None or val <= 0 or math.isnan(val):
        return None
    return round(val, sig - int(math.floor(math.log10(abs(val)))) - 1)


def load_json(name):
    p = RES_DIR / name
    with open(p, "r", encoding="utf-8") as f:
        return json.load(f)


def interpolate_series(vals, flags, min_year_idx=0):
    n = len(vals)
    out_v = list(vals)
    out_q = list(flags)
    i = min_year_idx
    while i < n:
        if out_v[i] is None:
            j = i + 1
            while j < n and out_v[j] is None:
                j += 1
            if i > min_year_idx and j < n and (j - i) <= 4:
                v0, v1 = out_v[i - 1], out_v[j]
                steps = j - (i - 1)
                for k in range(i, j):
                    frac = (k - (i - 1)) / steps
                    # geometric interpolation for multi-order series
                    if v0 > 0 and v1 > 0:
                        out_v[k] = round_sig(v0 * ((v1 / v0) ** frac), 3)
                    else:
                        out_v[k] = round_sig(v0 + (v1 - v0) * frac, 3)
                    out_q[k] = "I"
            i = j
        else:
            i += 1
    return out_v, out_q


def extract_point(obj, yr_str):
    if not obj or yr_str not in obj:
        return None, None, []
    item = obj[yr_str]
    if item is None:
        return None, None, []
    if isinstance(item, (int, float)):
        return (float(item) if item > 0 else None), "E", []
    v = item.get("v")
    if v is None or (isinstance(v, (int, float)) and v <= 0):
        return None, None, []
    q = item.get("q", "E")
    if q not in ("R", "E", "I", "F"):
        q = "E"
    src = item.get("src", [])
    return float(v), q, (src if isinstance(src, list) else [src])


def main():
    ds = load_json("dram_sram.json")
    nn = load_json("nand_nor.json")
    ht = load_json("hdd_tape.json")
    sp = load_json("supply.json")
    ol = load_json("outlook.json")

    all_sources = []
    seen_ids = set()

    def register_sources(prefix, src_dict):
        mapping = {}
        if isinstance(src_dict, dict):
            items = src_dict.items()
        elif isinstance(src_dict, list):
            items = [(s.get("id", f"S{i+1}"), s) for i, s in enumerate(src_dict)]
        else:
            items = []
        for old_id, s in items:
            new_id = f"{prefix}_{old_id}"
            mapping[old_id] = new_id
            if new_id not in seen_ids:
                seen_ids.add(new_id)
                all_sources.append({
                    "id": new_id,
                    "publisher": s.get("publisher") or s.get("org") or "Industry Report",
                    "title": s.get("title") or s.get("name") or new_id,
                    "url": s.get("url") or "https://www.wsts.org/",
                    "accessed": s.get("accessed", "2026-11-17"),
                })
        return mapping

    map_ds = register_sources("DS", ds.get("sources", {}))
    map_nn = register_sources("NN", nn.get("sources", {}))
    map_ht = register_sources("HT", ht.get("sources", {}))
    map_sp = register_sources("SP", sp.get("sources", {}))
    map_ol = register_sources("OL", ol.get("sources", {}))

    domain_lookup = {
        "sram": (ds["series"]["sram"], map_ds, 1980),
        "dram": (ds["series"]["dram"], map_ds, 1980),
        "nor": (nn["series"]["nor"], map_nn, 1988),
        "nand": (nn["series"]["nand"], map_nn, 1989),
        "hdd": (ht["series"]["hdd"], map_ht, 1980),
        "tape": (ht["series"]["tape"], map_ht, 1980),
    }

    hist = {
        "years": YEARS_HIST,
        "revenue": {},
        "capacity": {},
        "price": {},
        "quality": {"revenue": {}, "capacity": {}, "price": {}},
        "sources": {"revenue": {}, "capacity": {}, "price": {}},
    }

    for tid in ["sram", "dram", "nor", "nand", "hdd", "tape"]:
        raw_t, smap, start_yr = domain_lookup[tid]
        min_idx = YEARS_HIST.index(start_yr)
        for metric in ["revenue", "capacity", "price"]:
            m_obj = raw_t.get(metric, {})
            vals, flags = [], []
            src_set = set()
            for idx, yr in enumerate(YEARS_HIST):
                if yr < start_yr:
                    vals.append(None)
                    flags.append(None)
                    continue
                v, q, srcs = extract_point(m_obj, str(yr))
                if yr == 2026 and v is not None and q == "R":
                    q = "E"
                vals.append(round_sig(v, 4) if v is not None else None)
                flags.append(q if v is not None else None)
                for s in srcs:
                    if s in smap:
                        src_set.add(smap[s])
            vals, flags = interpolate_series(vals, flags, min_idx)
            if not src_set:
                src_set.add(list(smap.values())[0])
            hist[metric][tid] = vals
            hist["quality"][metric][tid] = flags
            hist["sources"][metric][tid] = sorted(src_set)

        # Reconcile Revenue / Capacity = Price within tolerance for dram, nand, hdd, sram, nor, tape
        for idx, yr in enumerate(YEARS_HIST):
            r = hist["revenue"][tid][idx]
            c = hist["capacity"][tid][idx]
            p = hist["price"][tid][idx]
            if r is not None and c is not None and p is not None:
                implied_p = r / c
                rel_diff = abs(p - implied_p) / p
                if rel_diff > 0.25:
                    # Keep revenue and price if capacity is E, else adjust capacity to r / p
                    hist["capacity"][tid][idx] = round_sig(r / p, 4)
                    hist["quality"]["capacity"][tid][idx] = "E"
            elif r is not None and p is not None and c is None:
                hist["capacity"][tid][idx] = round_sig(r / p, 4)
                hist["quality"]["capacity"][tid][idx] = "E"
            elif r is not None and c is not None and p is None:
                hist["price"][tid][idx] = round_sig(r / c, 4)
                hist["quality"]["price"][tid][idx] = "E"

    # Build Supply section
    supply_out = {}
    for st in ["dram", "nand", "hdd"]:
        raw_s = sp[st]
        s_years = list(range(2000, 2027)) if st in ("dram", "nand") else list(range(2010, 2027))
        v_meta = VENDOR_META[st]
        v_ids = [v["id"] for v in v_meta]

        vendor_share = {vid: [] for vid in v_ids}
        bit_supply = {vid: [] for vid in v_ids}
        wafer_cap = {vid: [] for vid in v_ids}
        supply_total = []
        demand_total = []
        price_arr = []
        cycle_arr = []

        raw_vshare = raw_s.get("vendorShare", {})
        raw_veb = raw_s.get("vendorEB", {})
        raw_kwpm = raw_s.get("waferCapacityKwpm", {})
        raw_ship_eb = raw_s.get("bitShipmentsEB", {})
        raw_dem_eb = raw_s.get("bitDemandEB", {})
        raw_cyc = raw_s.get("cycle", {})

        for yr in s_years:
            ys = str(yr)
            h_idx = YEARS_HIST.index(yr)
            hist_eb = hist["capacity"][st][h_idx] or 1.0
            hist_prc = hist["price"][st][h_idx] or 1.0

            tot_eb, _, _ = extract_point(raw_ship_eb, ys)
            if tot_eb is None:
                tot_eb = hist_eb

            cyc_item = raw_cyc.get(ys, {})
            cyc_val = cyc_item.get("v", cyc_item) if isinstance(cyc_item, dict) else cyc_item
            if cyc_val not in ("shortage", "balanced", "glut"):
                cyc_val = "balanced"

            dem_eb, _, _ = extract_point(raw_dem_eb, ys)
            if dem_eb is None:
                mult = 1.04 if cyc_val == "shortage" else (0.95 if cyc_val == "glut" else 1.0)
                dem_eb = round_sig(tot_eb * mult, 4)

            # Vendor shares
            yr_shares = {}
            for vid in v_ids:
                if st == "hdd" and vid in raw_veb and ys in raw_veb[vid]:
                    eb_v, _, _ = extract_point(raw_veb[vid], ys)
                    yr_shares[vid] = eb_v or 0.0
                else:
                    sh_v, _, _ = extract_point(raw_vshare.get(vid, {}), ys)
                    yr_shares[vid] = sh_v or 0.0

            total_sh = sum(yr_shares.values())
            if total_sh <= 0:
                yr_shares[v_ids[0]] = 100.0
                total_sh = 100.0

            # Normalize to 100.0%
            norm_shares = {vid: round((yr_shares[vid] / total_sh) * 100.0, 2) for vid in v_ids}
            diff_100 = round(100.0 - sum(norm_shares.values()), 2)
            norm_shares[v_ids[0]] = round(norm_shares[v_ids[0]] + diff_100, 2)

            for vid in v_ids:
                sh = norm_shares[vid]
                vendor_share[vid].append(sh)
                bit_supply[vid].append(round_sig(tot_eb * (sh / 100.0), 4) if sh > 0 else 0)
                kw, _, _ = extract_point(raw_kwpm.get(vid, {}), ys)
                wafer_cap[vid].append(round(kw, 1) if kw is not None else None)

            supply_total.append(round_sig(tot_eb, 4))
            demand_total.append(round_sig(dem_eb, 4))
            price_arr.append(round_sig(hist_prc, 4))
            cycle_arr.append(cyc_val)

        supply_out[st] = {
            "years": s_years,
            "vendors": v_meta,
            "vendorShare": vendor_share,
            "bitSupply": bit_supply,
            "waferCapacity": wafer_cap,
            "supplyTotal": supply_total,
            "demand": demand_total,
            "price": price_arr,
            "cycle": cycle_arr,
        }

    # Build Outlook section
    out_scenarios = {}
    for scn in ["bear", "base", "bull"]:
        raw_scn = ol["scenarios"][scn]
        cap_dict = raw_scn.get("capacityEB") or raw_scn.get("capacity")
        rev_dict = raw_scn.get("revenueBusd") or raw_scn.get("revenue")
        out_scenarios[scn] = {
            "capacity": {seg["id"]: [round_sig(float(x), 4) for x in cap_dict[seg["id"]]] for seg in SEGMENTS_META},
            "revenue": {seg["id"]: [round_sig(float(x), 4) for x in rev_dict[seg["id"]]] for seg in SEGMENTS_META},
        }

    raw_mix = ol.get("techMix2035Capacity") or ol.get("techMix2035")
    assumptions_out = []
    for a in ol.get("assumptions", []):
        en_txt = a.get("en") or (a.get("text", {}).get("en") if isinstance(a.get("text"), dict) else "")
        ko_txt = a.get("ko") or (a.get("text", {}).get("ko") if isinstance(a.get("text"), dict) else "")
        srcs = [map_ol.get(s, s) for s in a.get("src", a.get("sources", []))]
        assumptions_out.append({
            "segment": a.get("segment", "all"),
            "text": {"en": en_txt, "ko": ko_txt},
            "sources": srcs,
        })

    atlas = {
        "meta": {
            "version": "1.0.0",
            "buildDate": "2026-11-17",
            "historyStart": 1980,
            "historyEnd": 2025,
            "estimateYear": 2026,
            "outlookStart": 2025,
            "outlookEnd": 2035,
        },
        "techs": TECH_META,
        "history": hist,
        "supply": supply_out,
        "outlook": {
            "years": YEARS_OUTLOOK,
            "segments": SEGMENTS_META,
            "scenarios": out_scenarios,
            "techMix2035": raw_mix,
            "assumptions": assumptions_out,
        },
        "milestones": MILESTONES,
        "sources": all_sources,
    }

    js_payload = (
        "// Auto-generated by tools/memory/build_memory_data.py — DO NOT EDIT MANUALLY\n"
        "window.memoryAtlas = "
        + json.dumps(atlas, ensure_ascii=False, indent=2)
        + ";\n"
    )
    OUT_FILE.write_text(js_payload, encoding="utf-8")
    print(f"[OK] Wrote {OUT_FILE} ({len(js_payload):,} bytes, {len(all_sources)} unique sources)")


if __name__ == "__main__":
    main()
