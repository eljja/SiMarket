// Memory Atlas Interactive Analytics Engine (Bilingual EN/KO)
document.addEventListener('DOMContentLoaded', () => {
  const db = window.memoryAtlas;
  if (!db) {
    console.error('window.memoryAtlas dataset not found.');
    return;
  }

  const LANG = (document.documentElement && document.documentElement.lang === 'ko') ? 'ko' : 'en';
  function t(val) {
    if (!val) return '';
    if (typeof val === 'string') return val;
    return val[LANG] || val.en || '';
  }

  const UI = {
    en: {
      revUnit: '$B', capUnit: 'EB', priceUnit: '$/GB',
      histTitleRev: 'Global Memory & Storage Market Revenue (1980–2026E)',
      histTitleCap: 'Global Memory & Storage Capacity Shipped (1980–2026E, Log Scale)',
      histTitlePrc: 'Historical Price per Gigabyte Trajectory (1980–2026E, Log Scale)',
      histSub: '6-tier hierarchy: SRAM · DRAM · NOR · NAND · HDD · Magnetic Tape',
      supTitle: (tech) => `${tech.toUpperCase()} Vendor Bit Supply vs. Actual Demand & Price Cycle`,
      supSub: 'Stacked Bars = Vendor Bit Supply (EB) | White Line = Bit Demand (EB) | Gold Line = ASP ($/GB, Log)',
      outTitleCap: (scn) => `2025–2035 Memory & Storage Capacity Demand Forecast (${scn.toUpperCase()} Scenario)`,
      outTitleRev: (scn) => `2025–2035 Memory & Storage Spend Forecast (${scn.toUpperCase()} Scenario)`,
      outSub: '7 Demand Sinks: AI DC · Cloud DC · PC · Smartphone · Autonomous Auto · Robotics · Edge/IoT',
      sideHistA: (yr, m) => `${yr} Tier Ranking (${m})`,
      sideHistB: (yr) => `${yr} Revenue ($B) vs. Capacity (EB) Share`,
      sideSupA: (yr, tech) => `${yr} ${tech.toUpperCase()} Vendor Market Share (%)`,
      sideSupB: (tech) => `${tech.toUpperCase()} Supply-Demand Sufficiency Balance (%)`,
      sideOutA: (scn) => `2025–2035 Segment CAGR (${scn.toUpperCase()})`,
      sideOutB: (scn) => `2035 Capacity Mix by Technology (${scn.toUpperCase()})`,
      supplyBarSuffix: 'Supply',
      demandLine: 'Actual Demand (EB)',
      priceLine: 'Blended ASP ($/GB)',
      shortage: 'Shortage',
      balanced: 'Balanced',
      glut: 'Oversupply (Glut)',
      colTier: 'Tier / Segment',
      colRev: 'Revenue',
      colCap: 'Capacity',
      colPrc: 'Price ($/GB)',
      colFlag: 'Flag',
      colVendor: 'Vendor',
      colShare: 'Bit Share',
      colWafer: 'Wafer (kWPM)',
      colSupplyEB: 'Supply (EB)',
      col2025: '2025',
      col2035: '2035',
      colCagr: '10Y CAGR',
      toastCopied: 'Citation copied to clipboard!'
    },
    ko: {
      revUnit: '$B (십억달러)', capUnit: 'EB (엑사바이트)', priceUnit: '$/GB',
      histTitleRev: '글로벌 6대 메모리·스토리지 매출액 추이 (1980–2026E)',
      histTitleCap: '글로벌 6대 메모리·스토리지 출하 용량 추이 (1980–2026E, 로그 스케일)',
      histTitlePrc: '메모리 계층별 1GB당 평균 가격 하락 곡선 (1980–2026E, 로그 스케일)',
      histSub: '6대 계층: SRAM · DRAM · NOR · NAND · HDD · 자기 테이프(Tape)',
      supTitle: (tech) => `${tech.toUpperCase()} 업체별 공급량 vs. 실수요 곡선 및 가격 사이클`,
      supSub: '누적 막대 = 제조사별 공급 용량(EB) | 흰색 실선 = 실수요(EB) | 금색 점선 = 평균단가($/GB, 우측 로그축)',
      outTitleCap: (scn) => `2025–2035 수요처별 메모리·스토리지 출하 용량 전망 (${scn.toUpperCase()} 시나리오)`,
      outTitleRev: (scn) => `2025–2035 수요처별 메모리·스토리지 지출 금액 전망 (${scn.toUpperCase()} 시나리오)`,
      outSub: '7대 수요처: AI 데이터센터 · 일반 클라우드 · PC · 스마트폰 · 자율주행/전장 · 로봇 · 엣지/IoT',
      sideHistA: (yr, m) => `${yr}년 메모리 계층별 순위 (${m})`,
      sideHistB: (yr) => `${yr}년 매출액($B) vs. 용량(EB) 점유율 비교`,
      sideSupA: (yr, tech) => `${yr}년 ${tech.toUpperCase()} 제조사별 출하 점유율 (%)`,
      sideSupB: (tech) => `${tech.toUpperCase()} 연도별 수급 과부족률 (공급÷수요−1, %)`,
      sideOutA: (scn) => `2025–2035 수요처별 연평균 성장률 CAGR (${scn.toUpperCase()})`,
      sideOutB: (scn) => `2035년 메모리 매체별 용량 비중 (${scn.toUpperCase()})`,
      supplyBarSuffix: '공급',
      demandLine: '실수요 (EB)',
      priceLine: '평균 단가 ($/GB)',
      shortage: '공급부족 (Shortage)',
      balanced: '수급균형 (Balanced)',
      glut: '공급과잉 (Glut)',
      colTier: '구분',
      colRev: '매출 ($B)',
      colCap: '용량 (EB)',
      colPrc: '단가 ($/GB)',
      colFlag: '등급',
      colVendor: '제조사',
      colShare: '점유율',
      colWafer: '웨이퍼(kWPM)',
      colSupplyEB: '공급량(EB)',
      col2025: '2025년',
      col2035: '2035년',
      colCagr: '10년 CAGR',
      toastCopied: '인용 문구가 클립보드에 복사되었습니다!'
    }
  }[LANG];

  const state = {
    view: 'history',        // 'history' | 'supply' | 'outlook'
    metric: 'revenue',      // 'revenue' | 'capacity' | 'price'
    techFilter: 'all',      // 'all' | 'sram' | 'dram' | 'nor' | 'nand' | 'hdd' | 'tape'
    supplyTech: 'dram',     // 'dram' | 'nand' | 'hdd'
    scenario: 'base',       // 'bear' | 'base' | 'bull'
    outMetric: 'capacity',  // 'capacity' | 'revenue'
    yearIndex: 45,          // index in active timeline (default 2025 in history)
    playing: false
  };

  let playTimer = null;

  // DOM References
  const el = (id) => document.getElementById(id);
  const mainChartDom = el('mem-main-chart');
  const sideChartADom = el('mem-side-chart-a');
  const sideChartBDom = el('mem-side-chart-b');

  const mainChart = echarts.init(mainChartDom);
  const sideChartA = echarts.init(sideChartADom);
  const sideChartB = echarts.init(sideChartBDom);

  function isLightMode() {
    return document.body.classList.contains('theme-light');
  }

  function themePalette() {
    const light = isLightMode();
    return {
      light,
      text: light ? '#0f172a' : '#f3f4f6',
      sub: light ? '#475569' : '#9ca3af',
      gridLine: light ? 'rgba(15, 23, 42, 0.08)' : 'rgba(255, 255, 255, 0.07)',
      tooltipBg: light ? 'rgba(255, 255, 255, 0.96)' : 'rgba(13, 20, 35, 0.95)',
      tooltipBorder: light ? 'rgba(15, 23, 42, 0.15)' : 'rgba(0, 229, 255, 0.35)'
    };
  }

  function formatNum(v, decimals = 2) {
    if (v === null || v === undefined || !Number.isFinite(v)) return '—';
    if (Math.abs(v) >= 1000) return v.toLocaleString(undefined, { maximumFractionDigits: 1 });
    if (Math.abs(v) >= 10) return v.toFixed(1);
    if (Math.abs(v) >= 1) return v.toFixed(decimals);
    if (Math.abs(v) >= 0.01) return v.toFixed(3);
    if (Math.abs(v) >= 0.0001) return v.toFixed(5);
    return v.toExponential(2);
  }

  function activeYearsArray() {
    if (state.view === 'history') return db.history.years;
    if (state.view === 'supply') return db.supply[state.supplyTech].years;
    return db.outlook.years;
  }

  function clampYearIndex() {
    const yrs = activeYearsArray();
    if (state.yearIndex < 0) state.yearIndex = 0;
    if (state.yearIndex >= yrs.length) state.yearIndex = yrs.length - 1;
  }

  // ─── 1. Build History Main Chart Option ──────────────────────
  function buildHistoryOption(st = state) {
    const pal = themePalette();
    const h = db.history;
    const years = h.years.map(String);
    const metric = st.metric;
    const isLog = metric === 'capacity' || metric === 'price';
    const selYear = String(h.years[Math.min(st.yearIndex, h.years.length - 1)]);

    const series = db.techs.map((tech) => {
      const visible = st.techFilter === 'all' || st.techFilter === tech.id;
      const rawArr = h[metric][tech.id] || [];
      const qArr = (h.quality && h.quality[metric] && h.quality[metric][tech.id]) || [];

      const data = rawArr.map((v, i) => {
        if (!visible) return null;
        if (v === null || v === undefined || !Number.isFinite(v)) return null;
        if (isLog && v <= 0) return null;
        return {
          value: v,
          flag: qArr[i] || 'R'
        };
      });

      const baseSeries = {
        name: t(tech.name),
        type: 'line',
        smooth: 0.25,
        showSymbol: false,
        symbolSize: 6,
        itemStyle: { color: tech.color },
        lineStyle: { width: isLog ? 2.5 : 1.8, color: tech.color },
        data
      };

      if (!isLog) {
        baseSeries.stack = st.techFilter === 'all' ? 'total_rev' : undefined;
        baseSeries.areaStyle = { opacity: 0.42, color: tech.color };
      }
      return baseSeries;
    });

    // Attach vertical year cursor markLine & 2026E forecast band to first series
    if (series.length > 0) {
      series[0].markLine = {
        silent: true,
        symbol: ['none', 'none'],
        lineStyle: { color: '#00e5ff', width: 1.5, type: 'dashed' },
        label: { show: true, formatter: selYear, color: '#00e5ff', fontWeight: 700, fontSize: 11 },
        data: [{ xAxis: selYear }]
      };
    }

    const unitLabel = metric === 'revenue' ? UI.revUnit : (metric === 'capacity' ? UI.capUnit : UI.priceUnit);

    return {
      backgroundColor: 'transparent',
      animation: true,
      animationDuration: 450,
      tooltip: {
        trigger: 'axis',
        backgroundColor: pal.tooltipBg,
        borderColor: pal.tooltipBorder,
        textStyle: { color: pal.text, fontSize: 12 },
        formatter: (params) => {
          if (!Array.isArray(params) || !params.length) return '';
          const yr = params[0].axisValue;
          let html = `<div style="font-weight:800;margin-bottom:6px;color:#00e5ff;">${yr} (${unitLabel})</div>`;
          params.forEach(p => {
            const val = p.data && typeof p.data === 'object' ? p.data.value : p.value;
            if (val === null || val === undefined) return;
            const flag = (p.data && p.data.flag) || 'R';
            html += `<div style="display:flex;justify-content:space-between;gap:14px;line-height:1.55;">
              <span>${p.marker} ${p.seriesName}</span>
              <span style="font-family:JetBrains Mono,monospace;font-weight:700;">${formatNum(val)} <small style="opacity:0.7;">[${flag}]</small></span>
            </div>`;
          });
          return html;
        }
      },
      legend: {
        top: 6,
        textStyle: { color: pal.text, fontSize: 11, fontWeight: 600 },
        itemWidth: 14,
        itemHeight: 8
      },
      grid: { top: 44, left: 18, right: 24, bottom: 24, containLabel: true },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: years,
        axisLabel: { color: pal.sub, fontSize: 11 },
        axisLine: { lineStyle: { color: pal.gridLine } }
      },
      yAxis: {
        type: isLog ? 'log' : 'value',
        logBase: 10,
        name: unitLabel,
        nameTextStyle: { color: pal.sub, fontSize: 11 },
        axisLabel: {
          color: pal.sub,
          fontSize: 10.5,
          formatter: (v) => formatNum(v, 0)
        },
        splitLine: { lineStyle: { color: pal.gridLine } }
      },
      series
    };
  }

  // ─── 2. Build Supply · Demand · Price Option ─────────────────
  function buildSupplyOption(st = state) {
    const pal = themePalette();
    const sup = db.supply[st.supplyTech];
    const years = sup.years.map(String);
    const selYear = String(sup.years[Math.min(st.yearIndex, sup.years.length - 1)]);

    // Build cycle markArea bands for shortage / glut
    const markAreas = [];
    sup.cycle.forEach((cyc, idx) => {
      if (cyc === 'shortage' || cyc === 'glut') {
        const yStr = String(sup.years[idx]);
        markAreas.push([
          {
            xAxis: yStr,
            itemStyle: {
              color: cyc === 'shortage' ? 'rgba(244, 63, 94, 0.08)' : 'rgba(56, 189, 248, 0.07)'
            }
          },
          { xAxis: yStr }
        ]);
      }
    });

    const vendorSeries = sup.vendors.map((v, vIdx) => ({
      name: `${t(v.name)}`,
      type: 'bar',
      stack: 'vendor_supply',
      yAxisIndex: 0,
      itemStyle: { color: v.color },
      emphasis: { focus: 'series' },
      data: sup.bitSupply[v.id].map(x => (x !== null && x >= 0 ? x : 0)),
      markArea: vIdx === 0 && markAreas.length ? { silent: true, data: markAreas } : undefined,
      markLine: vIdx === 0 ? {
        silent: true,
        symbol: ['none', 'none'],
        lineStyle: { color: '#00e5ff', width: 1.5, type: 'dashed' },
        label: { show: true, formatter: selYear, color: '#00e5ff', fontWeight: 700, fontSize: 11 },
        data: [{ xAxis: selYear }]
      } : undefined
    }));

    const demandSeries = {
      name: UI.demandLine,
      type: 'line',
      yAxisIndex: 0,
      smooth: 0.2,
      symbol: 'circle',
      symbolSize: 6,
      itemStyle: { color: pal.light ? '#0f172a' : '#ffffff' },
      lineStyle: { width: 3, color: pal.light ? '#0f172a' : '#ffffff' },
      data: sup.demand
    };

    const priceSeries = {
      name: UI.priceLine,
      type: 'line',
      yAxisIndex: 1,
      smooth: 0.2,
      symbol: 'diamond',
      symbolSize: 6,
      itemStyle: { color: '#fbbf24' },
      lineStyle: { width: 2.5, type: 'dashed', color: '#fbbf24' },
      data: sup.price.map(p => (p && p > 0 ? p : null))
    };

    return {
      backgroundColor: 'transparent',
      animation: true,
      animationDuration: 450,
      tooltip: {
        trigger: 'axis',
        backgroundColor: pal.tooltipBg,
        borderColor: pal.tooltipBorder,
        textStyle: { color: pal.text, fontSize: 12 }
      },
      legend: {
        top: 4,
        textStyle: { color: pal.text, fontSize: 10.5, fontWeight: 600 },
        itemWidth: 12,
        itemHeight: 8
      },
      grid: { top: 48, left: 18, right: 24, bottom: 24, containLabel: true },
      xAxis: {
        type: 'category',
        data: years,
        axisLabel: { color: pal.sub, fontSize: 11 }
      },
      yAxis: [
        {
          type: 'value',
          name: 'EB',
          nameTextStyle: { color: pal.sub, fontSize: 11 },
          axisLabel: { color: pal.sub, fontSize: 10.5 },
          splitLine: { lineStyle: { color: pal.gridLine } }
        },
        {
          type: 'log',
          logBase: 10,
          name: '$/GB (Log)',
          nameTextStyle: { color: '#fbbf24', fontSize: 11 },
          axisLabel: { color: '#fbbf24', fontSize: 10.5, formatter: (v) => '$' + formatNum(v, 2) },
          splitLine: { show: false }
        }
      ],
      series: [...vendorSeries, demandSeries, priceSeries]
    };
  }

  // ─── 3. Build 10-Year Outlook Option (2025–2035) ─────────────
  function buildOutlookOption(st = state) {
    const pal = themePalette();
    const out = db.outlook;
    const years = out.years.map(String);
    const scnData = out.scenarios[st.scenario][st.outMetric];
    const selYear = String(out.years[Math.min(st.yearIndex, out.years.length - 1)]);
    const unitLabel = st.outMetric === 'capacity' ? UI.capUnit : UI.revUnit;

    const series = out.segments.map((seg, idx) => ({
      name: t(seg.name),
      type: 'line',
      stack: 'outlook_total',
      smooth: 0.3,
      showSymbol: false,
      itemStyle: { color: seg.color },
      lineStyle: { width: 2, color: seg.color },
      areaStyle: { opacity: 0.48, color: seg.color },
      data: scnData[seg.id],
      markLine: idx === 0 ? {
        silent: true,
        symbol: ['none', 'none'],
        lineStyle: { color: '#00e5ff', width: 1.5, type: 'dashed' },
        label: { show: true, formatter: selYear, color: '#00e5ff', fontWeight: 700, fontSize: 11 },
        data: [{ xAxis: selYear }]
      } : undefined
    }));

    return {
      backgroundColor: 'transparent',
      animation: true,
      animationDuration: 450,
      tooltip: {
        trigger: 'axis',
        backgroundColor: pal.tooltipBg,
        borderColor: pal.tooltipBorder,
        textStyle: { color: pal.text, fontSize: 12 }
      },
      legend: {
        top: 4,
        textStyle: { color: pal.text, fontSize: 10.5, fontWeight: 600 },
        itemWidth: 12,
        itemHeight: 8
      },
      grid: { top: 48, left: 18, right: 24, bottom: 24, containLabel: true },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: years,
        axisLabel: { color: pal.sub, fontSize: 11 }
      },
      yAxis: {
        type: 'value',
        name: unitLabel,
        nameTextStyle: { color: pal.sub, fontSize: 11 },
        axisLabel: { color: pal.sub, fontSize: 10.5 },
        splitLine: { lineStyle: { color: pal.gridLine } }
      },
      series
    };
  }

  // ─── 4. Build Synchronized Sidebar Sub-Charts ────────────────
  function buildSideOptions(st = state) {
    const pal = themePalette();
    if (st.view === 'history') {
      const h = db.history;
      const idx = Math.min(st.yearIndex, h.years.length - 1);
      const items = db.techs
        .map(tech => ({
          name: t(tech.name),
          val: h[st.metric][tech.id][idx],
          rev: h.revenue[tech.id][idx] || 0,
          cap: h.capacity[tech.id][idx] || 0,
          color: tech.color
        }))
        .filter(x => x.val !== null && x.val > 0)
        .sort((a, b) => a.val - b.val);

      const isLog = st.metric !== 'revenue';
      const optA = {
        backgroundColor: 'transparent',
        grid: { top: 10, bottom: 18, left: 12, right: 48, containLabel: true },
        xAxis: {
          type: isLog ? 'log' : 'value',
          axisLabel: { color: pal.sub, fontSize: 9.5, formatter: (v) => formatNum(v, 0) },
          splitLine: { lineStyle: { color: pal.gridLine } }
        },
        yAxis: {
          type: 'category',
          data: items.map(x => x.name),
          axisTick: { show: true, alignWithLabel: true, interval: 0 },
          axisLabel: { interval: 0, color: pal.text, fontSize: 10.5, fontWeight: 600 }
        },
        series: [{
          type: 'bar',
          data: items.map(x => ({ value: x.val, itemStyle: { color: x.color, borderRadius: [0, 4, 4, 0] } })),
          label: {
            show: true,
            position: 'right',
            color: pal.text,
            fontSize: 10,
            fontWeight: 700,
            formatter: (p) => formatNum(p.value, 2)
          }
        }]
      };

      const totalRev = items.reduce((a, x) => a + x.rev, 0) || 1;
      const totalCap = items.reduce((a, x) => a + x.cap, 0) || 1;
      const optB = {
        backgroundColor: 'transparent',
        tooltip: { trigger: 'axis', axisPointer: { type: 'shadow' } },
        legend: { top: 0, textStyle: { color: pal.text, fontSize: 10 } },
        grid: { top: 26, bottom: 18, left: 12, right: 24, containLabel: true },
        xAxis: { type: 'value', max: 100, axisLabel: { color: pal.sub, fontSize: 9.5, formatter: '{value}%' }, splitLine: { lineStyle: { color: pal.gridLine } } },
        yAxis: {
          type: 'category',
          data: db.techs.map(x => t(x.name)),
          axisTick: { show: true, alignWithLabel: true, interval: 0 },
          axisLabel: { interval: 0, color: pal.text, fontSize: 10, fontWeight: 600 }
        },
        series: [
          {
            name: LANG === 'ko' ? '매출 비중(%)' : 'Rev Share (%)',
            type: 'bar',
            itemStyle: { color: '#00e5ff' },
            data: db.techs.map(tech => Number((((h.revenue[tech.id][idx] || 0) / totalRev) * 100).toFixed(1)))
          },
          {
            name: LANG === 'ko' ? '용량 비중(%)' : 'Cap Share (%)',
            type: 'bar',
            itemStyle: { color: '#10b981' },
            data: db.techs.map(tech => Number((((h.capacity[tech.id][idx] || 0) / totalCap) * 100).toFixed(1)))
          }
        ]
      };
      return { a: optA, b: optB };
    }

    if (st.view === 'supply') {
      const sup = db.supply[st.supplyTech];
      const idx = Math.min(st.yearIndex, sup.years.length - 1);
      const vItems = sup.vendors
        .map(v => ({ name: t(v.name), share: sup.vendorShare[v.id][idx] || 0, color: v.color }))
        .filter(x => x.share > 0)
        .sort((a, b) => a.share - b.share);

      const optA = {
        backgroundColor: 'transparent',
        grid: { top: 10, bottom: 18, left: 12, right: 44, containLabel: true },
        xAxis: { type: 'value', max: 100, axisLabel: { color: pal.sub, fontSize: 9.5, formatter: '{value}%' }, splitLine: { lineStyle: { color: pal.gridLine } } },
        yAxis: {
          type: 'category',
          data: vItems.map(x => x.name),
          axisTick: { show: true, alignWithLabel: true, interval: 0 },
          axisLabel: { interval: 0, color: pal.text, fontSize: 10, fontWeight: 600 }
        },
        series: [{
          type: 'bar',
          data: vItems.map(x => ({ value: Number(x.share.toFixed(1)), itemStyle: { color: x.color, borderRadius: [0, 4, 4, 0] } })),
          label: { show: true, position: 'right', formatter: '{c}%', color: pal.text, fontSize: 10, fontWeight: 700 }
        }]
      };

      const gapPct = sup.years.map((_, i) => {
        const s = sup.supplyTotal[i] || 1;
        const d = sup.demand[i] || 1;
        return Number((((s - d) / d) * 100).toFixed(1));
      });

      const optB = {
        backgroundColor: 'transparent',
        tooltip: { trigger: 'axis' },
        grid: { top: 14, bottom: 22, left: 12, right: 16, containLabel: true },
        xAxis: { type: 'category', data: sup.years.map(String), axisLabel: { color: pal.sub, fontSize: 9.5 } },
        yAxis: { type: 'value', axisLabel: { color: pal.sub, fontSize: 9.5, formatter: '{value}%' }, splitLine: { lineStyle: { color: pal.gridLine } } },
        series: [{
          type: 'bar',
          data: gapPct.map(v => ({
            value: v,
            itemStyle: { color: v < 0 ? '#f43f5e' : '#38bdf8', borderRadius: v >= 0 ? [3, 3, 0, 0] : [0, 0, 3, 3] }
          }))
        }]
      };
      return { a: optA, b: optB };
    }

    // Outlook side charts
    const out = db.outlook;
    const scn = out.scenarios[st.scenario][st.outMetric];
    const cagrItems = out.segments.map(seg => {
      const v0 = scn[seg.id][0] || 1;
      const v10 = scn[seg.id][10] || 1;
      const cagr = (Math.pow(v10 / v0, 1 / 10) - 1) * 100;
      return { name: t(seg.name), cagr: Number(cagr.toFixed(1)), color: seg.color };
    }).sort((a, b) => a.cagr - b.cagr);

    const optA = {
      backgroundColor: 'transparent',
      grid: { top: 8, bottom: 18, left: 12, right: 44, containLabel: true },
      xAxis: { type: 'value', axisLabel: { color: pal.sub, fontSize: 9.5, formatter: '{value}%' }, splitLine: { lineStyle: { color: pal.gridLine } } },
      yAxis: {
        type: 'category',
        data: cagrItems.map(x => x.name),
        axisTick: { show: true, alignWithLabel: true, interval: 0 },
        axisLabel: { interval: 0, color: pal.text, fontSize: 9.5, fontWeight: 600 }
      },
      series: [{
        type: 'bar',
        data: cagrItems.map(x => ({ value: x.cagr, itemStyle: { color: x.color, borderRadius: [0, 4, 4, 0] } })),
        label: { show: true, position: 'right', formatter: '{c}%', color: pal.text, fontSize: 9.5, fontWeight: 700 }
      }]
    };

    const mix = out.techMix2035[st.scenario];
    const mixKeys = [
      { id: 'hbm', label: 'HBM', color: '#f43f5e' },
      { id: 'dram', label: 'DRAM (DDR/LPDDR)', color: '#00e5ff' },
      { id: 'nand', label: 'NAND Flash', color: '#10b981' },
      { id: 'hdd', label: 'Nearline HDD', color: '#f59e0b' },
      { id: 'tape', label: 'Archival Tape', color: '#64748b' }
    ];
    const optB = {
      backgroundColor: 'transparent',
      grid: { top: 8, bottom: 18, left: 12, right: 44, containLabel: true },
      xAxis: { type: 'value', max: 100, axisLabel: { color: pal.sub, fontSize: 9.5, formatter: '{value}%' }, splitLine: { lineStyle: { color: pal.gridLine } } },
      yAxis: {
        type: 'category',
        data: mixKeys.map(k => k.label),
        axisTick: { show: true, alignWithLabel: true, interval: 0 },
        axisLabel: { interval: 0, color: pal.text, fontSize: 10, fontWeight: 600 }
      },
      series: [{
        type: 'bar',
        data: mixKeys.map(k => ({ value: mix[k.id] || 0, itemStyle: { color: k.color, borderRadius: [0, 4, 4, 0] } })),
        label: { show: true, position: 'right', formatter: '{c}%', color: pal.text, fontSize: 10, fontWeight: 700 }
      }]
    };
    return { a: optA, b: optB };
  }

  // ─── 5. Render Side Table, KPIs, Milestones & Sources ────────
  function updateKPIsAndTable() {
    const h = db.history;
    const yrs = activeYearsArray();
    clampYearIndex();
    const selYear = yrs[state.yearIndex];

    // Map selected year to history index (or closest) for top KPIs
    const hIdx = Math.max(0, h.years.indexOf(selYear <= 2026 ? selYear : 2026));
    const totalRev = db.techs.reduce((a, tech) => a + (h.revenue[tech.id][hIdx] || 0), 0);
    const totalCap = db.techs.reduce((a, tech) => a + (h.capacity[tech.id][hIdx] || 0), 0);
    const dramPrc = h.price.dram[hIdx];
    const nandPrc = h.price.nand[hIdx];

    if (el('kpi-mem-rev')) el('kpi-mem-rev').textContent = totalRev.toFixed(1);
    if (el('kpi-mem-cap')) el('kpi-mem-cap').textContent = formatNum(totalCap, 1);
    if (el('kpi-dram-price')) el('kpi-dram-price').textContent = formatNum(dramPrc, 2);
    if (el('kpi-nand-price')) el('kpi-nand-price').textContent = formatNum(nandPrc, 3);
    if (el('mem-year-display')) el('mem-year-display').textContent = String(selYear);
    if (el('current-period')) el('current-period').textContent = selYear === 2026 && state.view !== 'outlook' ? '2026E' : String(selYear);

    const slider = el('timeline-slider');
    if (slider) {
      slider.min = '0';
      slider.max = String(yrs.length - 1);
      slider.value = String(state.yearIndex);
    }

    // Side table HTML
    const tableBox = el('side-table');
    if (tableBox) {
      if (state.view === 'history') {
        const rows = db.techs.map(tech => {
          const r = h.revenue[tech.id][state.yearIndex];
          const c = h.capacity[tech.id][state.yearIndex];
          const p = h.price[tech.id][state.yearIndex];
          const q = (h.quality.revenue[tech.id][state.yearIndex]) || '—';
          return `<tr>
            <td><span class="mem-tech-dot" style="background:${tech.color};margin-right:5px;"></span><strong>${t(tech.name)}</strong></td>
            <td class="num">${r !== null ? '$' + formatNum(r, 2) + 'B' : '—'}</td>
            <td class="num">${c !== null ? formatNum(c, 3) + ' EB' : '—'}</td>
            <td class="num">${p !== null ? '$' + formatNum(p, 3) : '—'}</td>
            <td class="num"><span class="q-badge q-${q}">${q}</span></td>
          </tr>`;
        }).join('');
        tableBox.innerHTML = `<table class="mem-data-table">
          <thead><tr><th>${UI.colTier}</th><th class="num">${UI.colRev}</th><th class="num">${UI.colCap}</th><th class="num">${UI.colPrc}</th><th class="num">${UI.colFlag}</th></tr></thead>
          <tbody>${rows}</tbody>
        </table>`;
      } else if (state.view === 'supply') {
        const sup = db.supply[state.supplyTech];
        const rows = sup.vendors.map(v => {
          const sh = sup.vendorShare[v.id][state.yearIndex];
          const eb = sup.bitSupply[v.id][state.yearIndex];
          const kw = sup.waferCapacity && sup.waferCapacity[v.id] ? sup.waferCapacity[v.id][state.yearIndex] : null;
          return `<tr>
            <td><span class="mem-tech-dot" style="background:${v.color};margin-right:5px;"></span><strong>${t(v.name)}</strong></td>
            <td class="num">${sh ? sh.toFixed(1) + '%' : '—'}</td>
            <td class="num">${eb ? formatNum(eb, 2) + ' EB' : '—'}</td>
            <td class="num">${kw ? kw.toLocaleString() : '—'}</td>
          </tr>`;
        }).join('');
        tableBox.innerHTML = `<table class="mem-data-table">
          <thead><tr><th>${UI.colVendor}</th><th class="num">${UI.colShare}</th><th class="num">${UI.colSupplyEB}</th><th class="num">${UI.colWafer}</th></tr></thead>
          <tbody>${rows}</tbody>
        </table>`;
      } else {
        const out = db.outlook;
        const scn = out.scenarios[state.scenario][state.outMetric];
        const unit = state.outMetric === 'capacity' ? ' EB' : 'B';
        const pref = state.outMetric === 'revenue' ? '$' : '';
        const rows = out.segments.map(seg => {
          const v0 = scn[seg.id][0];
          const v10 = scn[seg.id][10];
          const cagr = ((Math.pow(v10 / v0, 1 / 10) - 1) * 100).toFixed(1);
          return `<tr>
            <td><span class="mem-tech-dot" style="background:${seg.color};margin-right:5px;"></span><strong>${t(seg.name)}</strong></td>
            <td class="num">${pref}${formatNum(v0, 1)}${unit}</td>
            <td class="num">${pref}${formatNum(v10, 1)}${unit}</td>
            <td class="num" style="color:#10b981;font-weight:700;">+${cagr}%</td>
          </tr>`;
        }).join('');
        tableBox.innerHTML = `<table class="mem-data-table">
          <thead><tr><th>${UI.colTier}</th><th class="num">${UI.col2025}</th><th class="num">${UI.col2035}</th><th class="num">${UI.colCagr}</th></tr></thead>
          <tbody>${rows}</tbody>
        </table>`;
      }
    }
  }

  function renderMilestonesAndSources() {
    const msBox = el('milestone-list');
    if (msBox && Array.isArray(db.milestones)) {
      msBox.innerHTML = db.milestones.map(m => `
        <div class="mem-milestone-item">
          <strong>[${m.year}]</strong> ${t(m.text)}
        </div>
      `).join('');
    }
    const srcBox = el('sources-list');
    if (srcBox && Array.isArray(db.sources)) {
      srcBox.innerHTML = db.sources.map(s => `
        <div class="source-item-card">
          <span class="source-id-tag">[${s.id}] ${s.publisher}</span>
          <a href="${s.url}" target="_blank" rel="noopener noreferrer">${s.title}</a>
        </div>
      `).join('');
    }
  }

  function render() {
    clampYearIndex();
    const yrs = activeYearsArray();
    const selYear = yrs[state.yearIndex];

    // Toggle visible control groups
    if (el('ctrl-group-history')) el('ctrl-group-history').style.display = state.view === 'history' ? 'inline-flex' : 'none';
    if (el('mem-tech-filter-row')) el('mem-tech-filter-row').style.display = state.view === 'history' ? 'flex' : 'none';
    if (el('ctrl-group-supply')) el('ctrl-group-supply').style.display = state.view === 'supply' ? 'inline-flex' : 'none';
    if (el('ctrl-group-outlook-scn')) el('ctrl-group-outlook-scn').style.display = state.view === 'outlook' ? 'inline-flex' : 'none';
    if (el('ctrl-group-outlook-met')) el('ctrl-group-outlook-met').style.display = state.view === 'outlook' ? 'inline-flex' : 'none';

    if (state.view === 'history') {
      if (el('mem-main-title')) {
        el('mem-main-title').textContent = state.metric === 'revenue' ? UI.histTitleRev : (state.metric === 'capacity' ? UI.histTitleCap : UI.histTitlePrc);
      }
      if (el('mem-main-subtitle')) el('mem-main-subtitle').textContent = UI.histSub;
      if (el('side-title-a')) el('side-title-a').textContent = UI.sideHistA(selYear, state.metric.toUpperCase());
      if (el('side-title-b')) el('side-title-b').textContent = UI.sideHistB(selYear);
      mainChart.setOption(buildHistoryOption(state), true);
    } else if (state.view === 'supply') {
      if (el('mem-main-title')) el('mem-main-title').textContent = UI.supTitle(state.supplyTech);
      if (el('mem-main-subtitle')) el('mem-main-subtitle').textContent = UI.supSub;
      if (el('side-title-a')) el('side-title-a').textContent = UI.sideSupA(selYear, state.supplyTech);
      if (el('side-title-b')) el('side-title-b').textContent = UI.sideSupB(state.supplyTech);
      mainChart.setOption(buildSupplyOption(state), true);
    } else {
      if (el('mem-main-title')) {
        el('mem-main-title').textContent = state.outMetric === 'capacity' ? UI.outTitleCap(state.scenario) : UI.outTitleRev(state.scenario);
      }
      if (el('mem-main-subtitle')) el('mem-main-subtitle').textContent = UI.outSub;
      if (el('side-title-a')) el('side-title-a').textContent = UI.sideOutA(state.scenario);
      if (el('side-title-b')) el('side-title-b').textContent = UI.sideOutB(state.scenario);
      mainChart.setOption(buildOutlookOption(state), true);
    }

    const sideOpts = buildSideOptions(state);
    sideChartA.setOption(sideOpts.a, true);
    sideChartB.setOption(sideOpts.b, true);
    updateKPIsAndTable();
  }

  function setView(viewId) {
    pause();
    state.view = viewId;
    const yrs = activeYearsArray();
    state.yearIndex = viewId === 'outlook' ? yrs.length - 1 : Math.max(0, yrs.length - 2);
    ['history', 'supply', 'outlook'].forEach(v => {
      const btn = el('view-' + v);
      if (btn) btn.classList.toggle('active', v === viewId);
    });
    render();
  }

  // ─── Playback Controls (Single Pass) ─────────────────────────
  function play() {
    if (state.playing) return;
    const yrs = activeYearsArray();
    if (state.yearIndex >= yrs.length - 1) {
      state.yearIndex = 0;
      render();
    }
    state.playing = true;
    if (el('play-icon')) el('play-icon').style.display = 'none';
    if (el('pause-icon')) el('pause-icon').style.display = 'block';

    const speed = parseInt((el('speed-control') && el('speed-control').value) || '600', 10);
    playTimer = setInterval(() => {
      const curYrs = activeYearsArray();
      if (state.yearIndex < curYrs.length - 1) {
        state.yearIndex++;
        render();
        if (state.yearIndex >= curYrs.length - 1) {
          pause();
        }
      } else {
        pause();
      }
    }, speed);
  }

  function pause() {
    state.playing = false;
    if (playTimer) {
      clearInterval(playTimer);
      playTimer = null;
    }
    if (el('play-icon')) el('play-icon').style.display = 'block';
    if (el('pause-icon')) el('pause-icon').style.display = 'none';
  }

  // ─── Event Wiring ────────────────────────────────────────────
  ['history', 'supply', 'outlook'].forEach(v => {
    const b = el('view-' + v);
    if (b) b.addEventListener('click', () => setView(v));
  });

  ['revenue', 'capacity', 'price'].forEach(m => {
    const b = el('metric-' + m);
    if (b) b.addEventListener('click', () => {
      state.metric = m;
      ['revenue', 'capacity', 'price'].forEach(k => {
        const btn = el('metric-' + k);
        if (btn) btn.classList.toggle('active', k === m);
      });
      render();
    });
  });

  ['dram', 'nand', 'hdd'].forEach(st => {
    const b = el('supply-' + st);
    if (b) b.addEventListener('click', () => {
      state.supplyTech = st;
      state.yearIndex = db.supply[st].years.length - 2;
      ['dram', 'nand', 'hdd'].forEach(k => {
        const btn = el('supply-' + k);
        if (btn) btn.classList.toggle('active', k === st);
      });
      render();
    });
  });

  ['bear', 'base', 'bull'].forEach(scn => {
    const b = el('scn-' + scn);
    if (b) b.addEventListener('click', () => {
      state.scenario = scn;
      ['bear', 'base', 'bull'].forEach(k => {
        const btn = el('scn-' + k);
        if (btn) btn.classList.toggle('active', k === scn);
      });
      render();
    });
  });

  ['capacity', 'revenue'].forEach(om => {
    const b = el('out-' + om);
    if (b) b.addEventListener('click', () => {
      state.outMetric = om;
      ['capacity', 'revenue'].forEach(k => {
        const btn = el('out-' + k);
        if (btn) btn.classList.toggle('active', k === om);
      });
      render();
    });
  });

  document.querySelectorAll('.mem-tech-pill').forEach(pill => {
    pill.addEventListener('click', () => {
      state.techFilter = pill.dataset.tech || 'all';
      document.querySelectorAll('.mem-tech-pill').forEach(p => p.classList.toggle('active', p === pill));
      render();
    });
  });

  if (el('play-btn')) el('play-btn').addEventListener('click', () => (state.playing ? pause() : play()));
  if (el('prev-btn')) el('prev-btn').addEventListener('click', () => { pause(); state.yearIndex = Math.max(0, state.yearIndex - 1); render(); });
  if (el('next-btn')) el('next-btn').addEventListener('click', () => { pause(); state.yearIndex = Math.min(activeYearsArray().length - 1, state.yearIndex + 1); render(); });
  if (el('timeline-slider')) {
    el('timeline-slider').addEventListener('input', (e) => {
      pause();
      state.yearIndex = parseInt(e.target.value, 10) || 0;
      render();
    });
  }

  // Theme Toggle
  const themeBtn = el('theme-toggle-btn');
  if (themeBtn) {
    const saved = localStorage.getItem('simarket_theme');
    if (saved === 'light') {
      document.body.classList.add('theme-light');
      if (el('theme-sun-icon')) el('theme-sun-icon').style.display = 'none';
      if (el('theme-moon-icon')) el('theme-moon-icon').style.display = 'block';
    }
    themeBtn.addEventListener('click', () => {
      const isLight = document.body.classList.toggle('theme-light');
      localStorage.setItem('simarket_theme', isLight ? 'light' : 'dark');
      if (el('theme-sun-icon')) el('theme-sun-icon').style.display = isLight ? 'none' : 'block';
      if (el('theme-moon-icon')) el('theme-moon-icon').style.display = isLight ? 'block' : 'none';
      render();
    });
  }

  // Copy Citation
  if (el('copy-citation-btn')) {
    el('copy-citation-btn').addEventListener('click', () => {
      const txt = el('citation-text') ? el('citation-text').textContent : window.location.href;
      if (navigator.clipboard) navigator.clipboard.writeText(txt);
    });
  }

  window.addEventListener('resize', () => {
    mainChart.resize();
    sideChartA.resize();
    sideChartB.resize();
  });

  renderMilestonesAndSources();
  render();

  window.__memoryAtlasTest = {
    state,
    t,
    buildHistoryOption,
    buildSupplyOption,
    buildOutlookOption,
    buildSideOptions,
    render,
    setView
  };
});
