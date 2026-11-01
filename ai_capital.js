// ai_capital.js - Global AI Capital Flow & Ouroboros Loop Engine (English)
// Quarterly Edition (2023 Q1 - 2026 Q4)

document.addEventListener('DOMContentLoaded', () => {
  // ─── Application State ───────────────────────────────────────
  let activeIndex = 0; // Default to 2017 (Genesis & Transformer Dawn Era)
  let isPlaying = false;
  let playInterval = null;
  let playSpeed = 1000;
  let activeCategoryFilter = 'all';
  let activeBarMode = 'valuation'; // 'valuation' (matches network nodes 1:1), 'capex', or 'gap'
  let activeNodeMetric = 'marketCap'; // 'marketCap' or 'aiCapex'
  let selectedEntityId = 'nvda'; // Default selected entity

  const timeline = window.aiCapitalTimelineData;
  if (!timeline || !timeline.length) {
    console.error('aiCapitalTimelineData not loaded');
    return;
  }

  // ─── DOM Elements ────────────────────────────────────────────
  const networkChartDom = document.getElementById('ai-network-chart');
  const barChartDom = document.getElementById('ai-bar-chart');
  const networkYearDisplay = document.getElementById('network-year-display');
  const nodeMetricLabel = document.getElementById('node-metric-label');

  const playBtn = document.getElementById('play-btn');
  const playIcon = document.getElementById('play-icon');
  const pauseIcon = document.getElementById('pause-icon');
  const prevBtn = document.getElementById('prev-btn');
  const nextBtn = document.getElementById('next-btn');
  const speedControl = document.getElementById('speed-control');
  const timelineSlider = document.getElementById('timeline-slider');
  const currentPeriodLabel = document.getElementById('current-period');
  const btnFitGraph = document.getElementById('btn-fit-graph');

  const kpiCapexVal = document.getElementById('kpi-capex-val');
  const kpiRevenueVal = document.getElementById('kpi-revenue-val');
  const kpiDeficitVal = document.getElementById('kpi-deficit-val');
  const kpiCircularVal = document.getElementById('kpi-circular-val');

  const toggleBarVal = document.getElementById('toggle-bar-val');
  const toggleBarCapex = document.getElementById('toggle-bar-capex');
  const toggleBarGap = document.getElementById('toggle-bar-gap');

  const dossierName = document.getElementById('dossier-name');
  const dossierCategory = document.getElementById('dossier-category');
  const dossierVal = document.getElementById('dossier-val');
  const dossierCapex = document.getElementById('dossier-capex');
  const dossierRev = document.getElementById('dossier-rev');
  const dossierDesc = document.getElementById('dossier-desc');
  const dossierYear = document.getElementById('dossier-year');
  const dossierFlows = document.getElementById('dossier-flows');

  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  const themeSunIcon = document.getElementById('theme-sun-icon');
  const themeMoonIcon = document.getElementById('theme-moon-icon');
  const copyCitationBtn = document.getElementById('copy-citation-btn');
  const toastContainer = document.getElementById('toast-container');

  // Configure slider bounds
  if (timelineSlider) {
    timelineSlider.min = '0';
    timelineSlider.max = (timeline.length - 1).toString();
    timelineSlider.value = activeIndex.toString();
  }

  // ─── Initialize ECharts ──────────────────────────────────────
  const networkChart = echarts.init(networkChartDom);
  const barChart = echarts.init(barChartDom);

  // ─── Node Sizing & Visual Helpers ────────────────────────────
  function calcNodeSize(nodeOrMarketCap, metric = activeNodeMetric) {
    if (typeof nodeOrMarketCap === 'number') {
      const mc = nodeOrMarketCap;
      if (mc <= 0) return 0;
      return Math.round(Math.max(18, Math.min(115, 14 + Math.pow(mc, 0.44) * 2.65)));
    }
    const node = nodeOrMarketCap;
    if (!node || node.isFormed === false) return 0;

    if (metric === 'aiCapex') {
      const capex = node.aiCapex || 0;
      if (capex <= 0) return 14;
      // Capex sub-linear scale: $0.02B -> 16px, $1B -> 34px, $10B -> 72px, $22B -> 108px
      return Math.round(Math.max(16, Math.min(115, 14 + Math.pow(capex, 0.52) * 19.5)));
    } else {
      // Market Cap sub-linear scale: $0.3B -> 18px, $100B -> 38px, $1T -> 72px, $3.8T -> 114px
      const mc = node.marketCap || 0;
      if (mc <= 0) return 0;
      return Math.round(Math.max(18, Math.min(115, 14 + Math.pow(mc, 0.44) * 2.65)));
    }
  }

  function calcEdgeWidth(amount) {
    if (!amount || amount <= 0) return 0;
    return Math.max(2.0, Math.min(18, Math.sqrt(amount) * 2.8));
  }

  function calcArrowSize(amount) {
    if (!amount || amount <= 0) return 0;
    // 2x larger triangular arrowhead (18px ~ 26px) so destination is unmistakably clear
    return Math.round(Math.max(18, Math.min(26, 16 + Math.sqrt(amount) * 1.8)));
  }

  function isLightMode() {
    return document.body.classList.contains('theme-light');
  }

  // ─── Deterministic Semantic Pixel Coordinates ─────────────────
  const normalizedCoords = {
    // Hardware Core (Center)
    nvda: { x: 0.48, y: 0.48 },

    // Memory & Foundry (Top & Bottom Center)
    skhynix: { x: 0.38, y: 0.12 },
    samsung: { x: 0.58, y: 0.12 },
    tsmc: { x: 0.48, y: 0.80 },
    asml: { x: 0.62, y: 0.94 },
    avgo: { x: 0.32, y: 0.82 },

    // Hyperscalers (Left Wing)
    meta: { x: 0.10, y: 0.26 },
    msft: { x: 0.25, y: 0.35 },
    goog: { x: 0.16, y: 0.54 },
    amzn: { x: 0.25, y: 0.70 },

    // AI Labs & Neocloud (Right Wing)
    deepseek: { x: 0.74, y: 0.16 },
    openai: { x: 0.70, y: 0.36 },
    xai: { x: 0.88, y: 0.30 },
    anthropic: { x: 0.80, y: 0.54 },
    coreweave: { x: 0.72, y: 0.72 },

    // Capital & Real Market (Outer Flanks)
    end_market: { x: 0.08, y: 0.74 },
    vc_sovereign: { x: 0.90, y: 0.72 }
  };

  function getNodePixelCoordinates() {
    const width = networkChartDom.clientWidth || 840;
    const height = networkChartDom.clientHeight || 580;
    const padX = 65;
    const padY = 55;
    const usableW = width - padX * 2;
    const usableH = height - padY * 2;

    const pixelCoords = {};
    for (const id in normalizedCoords) {
      pixelCoords[id] = {
        x: Math.round(padX + normalizedCoords[id].x * usableW),
        y: Math.round(padY + normalizedCoords[id].y * usableH)
      };
    }
    return pixelCoords;
  }

  // ─── Morphing Graph Options (Smooth Temporal Transitions) ───
  function getNetworkOptions(period) {
    const isLight = isLightMode();
    const categories = Object.keys(window.categoryDefinitions).map(k => ({
      name: window.categoryDefinitions[k].name
    }));

    // Filter nodes if a specific category is active
    const filteredNodes = period.nodes.filter(n => {
      if (activeCategoryFilter === 'all') return true;
      return n.category === activeCategoryFilter;
    });
    const allowedNodeIds = new Set(filteredNodes.map(n => n.id));
    const coords = getNodePixelCoordinates();
    const width = networkChartDom.clientWidth || 840;
    const height = networkChartDom.clientHeight || 580;

    const nodesData = filteredNodes.map(n => {
      const catDef = window.categoryDefinitions[n.category] || { color: '#00e5ff', name: n.category };
      const isSelected = n.id === selectedEntityId;
      const isFormed = n.isFormed !== false;
      const isHighGrowth = n.isHighGrowth === true;
      const nodeSize = calcNodeSize(n, activeNodeMetric);
      const pos = coords[n.id] || { x: 400, y: 290 };

      return {
        id: n.id,
        name: n.name,
        category: catDef.name,
        symbolSize: nodeSize,
        value: n.marketCap,
        x: pos.x,
        y: pos.y,
        fixed: true,
        itemStyle: {
          color: catDef.color,
          borderColor: isSelected ? '#ffffff' : (isHighGrowth ? '#00e5ff' : (isLight ? 'rgba(0,0,0,0.2)' : 'rgba(255,255,255,0.4)')),
          borderWidth: isSelected ? 4 : (isHighGrowth ? 3 : 1.5),
          shadowBlur: isHighGrowth ? 28 : (isSelected ? 24 : 10),
          shadowColor: isHighGrowth ? '#00e5ff' : (isSelected ? '#ffffff' : catDef.color),
          opacity: isFormed ? 1.0 : 0.0
        },
        label: {
          show: isFormed && nodeSize > 20,
          position: 'bottom',
          distance: 6,
          formatter: '{b}',
          fontSize: Math.max(9, Math.min(13, 8 + Math.sqrt(nodeSize) * 0.45)),
          fontWeight: 700,
          color: isLight ? '#0f172a' : '#f3f4f6'
        },
        raw: n
      };
    });

    const edgesData = period.edges
      .filter(e => allowedNodeIds.has(e.source) && allowedNodeIds.has(e.target))
      .map(e => {
        const flowDef = (window.flowTypeDefinitions || {})[e.flowType] || { color: '#38bdf8', name: e.flowType };
        const isConnected = e.source === selectedEntityId || e.target === selectedEntityId;
        const srcNode = filteredNodes.find(n => n.id === e.source);
        const tgtNode = filteredNodes.find(n => n.id === e.target);
        const isBothFormed = srcNode && tgtNode && srcNode.isFormed !== false && tgtNode.isFormed !== false;
        const isActive = isBothFormed && e.amount > 0;

        return {
          id: e.id || `${e.source}_${e.target}_${e.flowType}`,
          source: e.source,
          target: e.target,
          value: e.amount,
          symbol: isActive ? ['none', 'arrow'] : ['none', 'none'],
          symbolSize: isActive ? [0, calcArrowSize(e.amount)] : [0, 0],
          lineStyle: {
            width: isActive ? calcEdgeWidth(e.amount) : 0,
            color: flowDef.color,
            curveness: 0.16,
            opacity: isActive ? (selectedEntityId ? (isConnected ? 0.95 : 0.15) : 0.8) : 0
          },
          emphasis: {
            disabled: !isActive,
            lineStyle: {
              width: isActive ? calcEdgeWidth(e.amount) + 2 : 0,
              opacity: 1
            }
          },
          raw: e
        };
      });

    // ─── Dynamic Flowing Photon Particles Layer ──────────────────
    const linesData = [];
    period.edges.forEach(e => {
      if (!e.amount || e.amount <= 0) return;
      const srcNode = filteredNodes.find(n => n.id === e.source);
      const tgtNode = filteredNodes.find(n => n.id === e.target);
      if (!srcNode || !tgtNode || srcNode.isFormed === false || tgtNode.isFormed === false) return;

      const p1 = coords[e.source];
      const p2 = coords[e.target];
      if (!p1 || !p2) return;

      const flowDef = (window.flowTypeDefinitions || {})[e.flowType] || { color: '#00e5ff' };
      const isConnected = e.source === selectedEntityId || e.target === selectedEntityId;

      linesData.push({
        coords: [
          [p1.x, p1.y],
          [p2.x, p2.y]
        ],
        lineStyle: {
          curveness: 0.16,
          width: 0,
          opacity: 0
        },
        effect: {
          show: true,
          period: Math.max(2.0, Math.min(5.0, 5.8 - Math.sqrt(e.amount) * 0.75)),
          trailLength: 0.35,
          symbol: 'arrow',
          symbolSize: Math.max(8.0, Math.min(15.0, 7.0 + Math.sqrt(e.amount) * 1.5)),
          color: selectedEntityId ? (isConnected ? '#ffffff' : 'rgba(255,255,255,0.3)') : (flowDef.color || '#ffffff'),
          loop: true
        }
      });
    });

    return {
      tooltip: {
        trigger: 'item',
        backgroundColor: isLight ? 'rgba(255, 255, 255, 0.96)' : 'rgba(13, 20, 35, 0.94)',
        borderColor: isLight ? 'rgba(15, 23, 42, 0.15)' : 'rgba(0, 229, 255, 0.4)',
        textStyle: { color: isLight ? '#0f172a' : '#f3f4f6', fontFamily: 'Outfit, sans-serif' },
        formatter: (params) => {
          if (params.dataType === 'node') {
            const n = params.data.raw;
            if (n.isFormed === false) return '';
            const isValMetric = activeNodeMetric === 'marketCap';
            return `
              <div style="font-weight: 700; font-size: 1rem; color: var(--accent-primary); margin-bottom: 4px;">${n.name}</div>
              <div style="font-size: 0.8rem; color: ${isLight ? '#475569' : '#9ca3af'}; margin-bottom: 6px;">${params.data.category}</div>
              <div style="font-size: 0.85rem; ${isValMetric ? 'color: var(--accent-primary); font-weight: 700;' : ''}"><strong>Enterprise Value:</strong> $${n.marketCap.toLocaleString()} B ${isValMetric ? '👈 (Node Size)' : ''}</div>
              <div style="font-size: 0.85rem; ${!isValMetric ? 'color: #10b981; font-weight: 700;' : ''}"><strong>AI Capex:</strong> $${n.aiCapex.toLocaleString()} B/Q ${!isValMetric ? '👈 (Node Size)' : ''}</div>
              <div style="font-size: 0.85rem;"><strong>AI Revenue:</strong> $${n.aiRevenue.toLocaleString()} B/Q</div>
              <div style="font-size: 0.75rem; color: #ffb300; margin-top: 6px;">👉 Click node to view financial ties</div>
            `;
          } else if (params.dataType === 'edge') {
            const e = params.data.raw;
            if (!e || !e.amount || e.amount <= 0) return '';
            const flowDef = (window.flowTypeDefinitions || {})[e.flowType] || { name: e.flowType };
            return `
              <div style="font-weight: 700; color: #ffb300; margin-bottom: 4px;">${flowDef.name}</div>
              <div style="font-size: 0.95rem; font-weight: 800; color: var(--accent-primary); margin-bottom: 4px;">$${e.amount.toLocaleString()} Billion</div>
              <div style="font-size: 0.82rem; max-width: 260px; line-height: 1.4;">${e.desc}</div>
            `;
          }
        }
      },
      legend: { show: false },
      animation: true,
      animationDuration: 750,
      animationDurationUpdate: 750,
      animationEasingUpdate: 'cubicInOut',
      xAxis: { type: 'value', min: 0, max: width, show: false },
      yAxis: { type: 'value', min: 0, max: height, inverse: true, show: false },
      grid: { left: 0, top: 0, right: 0, bottom: 0 },
      series: [
        {
          type: 'graph',
          layout: 'none',
          zlevel: 1,
          data: nodesData,
          links: edgesData,
          categories: categories,
          center: ['50%', '50%'],
          zoom: 1.0,
          roam: true,
          draggable: true,
          scaleLimit: { min: 0.5, max: 2.5 },
          edgeSymbol: ['none', 'arrow'],
          edgeSymbolSize: [0, 18],
          emphasis: {
            focus: 'adjacency',
            lineStyle: { width: 6 }
          }
        },
        {
          type: 'lines',
          coordinateSystem: 'cartesian2d',
          zlevel: 2,
          polyline: false,
          silent: true,
          data: linesData
        }
      ]
    };
  }

  // ─── Comparative Bar Chart Options ───────────────────────────
  function getBarChartOptions(period) {
    const isLight = isLightMode();
    const textColor = isLight ? '#0f172a' : '#f3f4f6';
    const subColor = isLight ? '#475569' : '#9ca3af';

    if (activeBarMode === 'valuation') {
      // Entity Market Cap Ranking for Active Period (100% synchronized with network circle sizes)
      const sortedNodes = [...period.nodes]
        .filter(n => n.isFormed !== false && n.marketCap > 0)
        .sort((a, b) => a.marketCap - b.marketCap);

      const maxVal = sortedNodes.length ? Math.max(...sortedNodes.map(n => n.marketCap)) : 100;
      const xMax = Math.max(500, Math.ceil((maxVal * 1.1) / 500) * 500);
      const xInterval = xMax <= 1000 ? 200 : (xMax <= 2000 ? 500 : 1000);

      const yData = sortedNodes.map(n => n.name);
      const xData = sortedNodes.map(n => ({
        value: n.marketCap,
        itemStyle: {
          color: (window.categoryDefinitions[n.category] || {}).color || '#38bdf8',
          borderRadius: [0, 6, 6, 0]
        }
      }));

      return {
        title: {
          text: `Enterprise Valuation Ranking (${period.label})`,
          subtext: 'Matches network circle sizes 1:1',
          textStyle: { color: textColor, fontSize: 13, fontWeight: 700 },
          subtextStyle: { color: subColor, fontSize: 10 },
          top: 0,
          left: 0
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: { type: 'shadow' },
          formatter: (p) => `${p[0].name}: <strong>$${p[0].value.toLocaleString()} B</strong> (Enterprise Value)`
        },
        grid: { top: 40, bottom: 25, left: 125, right: 40 },
        animation: true,
        animationDuration: 600,
        animationDurationUpdate: 600,
        animationEasingUpdate: 'cubicInOut',
        xAxis: {
          type: 'value',
          min: 0,
          max: xMax,
          interval: xInterval,
          axisLabel: { color: subColor, formatter: '${value}B', fontSize: 10 },
          splitLine: { lineStyle: { color: isLight ? 'rgba(0,0,0,0.06)' : 'rgba(255,255,255,0.06)' } }
        },
        yAxis: {
          type: 'category',
          data: yData,
          axisLabel: { color: textColor, fontSize: 11, fontWeight: 600 }
        },
        series: [
          {
            type: 'bar',
            data: xData,
            label: {
              show: true,
              position: 'right',
              formatter: (params) => `$${params.value >= 1000 ? (params.value / 1000).toFixed(1) + 'T' : params.value + 'B'}`,
              color: textColor,
              fontSize: 10,
              fontWeight: 700
            }
          }
        ]
      };
    } else if (activeBarMode === 'capex') {
      // Entity AI Capex Ranking for Active Period
      const sortedNodes = [...period.nodes]
        .filter(n => n.aiCapex > 0)
        .sort((a, b) => a.aiCapex - b.aiCapex);

      const maxVal = sortedNodes.length ? Math.max(...sortedNodes.map(n => n.aiCapex)) : 1;
      // Natural expanding X-scale ceiling ($5B -> $10B -> $15B -> $20B -> $25B -> $30B)
      const xMax = Math.max(5, Math.ceil((maxVal * 1.15) / 5) * 5);
      const xInterval = xMax <= 5 ? 1 : (xMax === 10 ? 2 : (xMax === 15 ? 3 : 5));

      const yData = sortedNodes.map(n => n.name);
      const xData = sortedNodes.map(n => ({
        value: n.aiCapex,
        itemStyle: {
          color: (window.categoryDefinitions[n.category] || {}).color || '#38bdf8',
          borderRadius: [0, 6, 6, 0]
        }
      }));

      return {
        title: {
          text: `Quarterly AI Capex Ranking (${period.label})`,
          textStyle: { color: textColor, fontSize: 13, fontWeight: 700 },
          top: 0,
          left: 0
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: { type: 'shadow' },
          formatter: (p) => `${p[0].name}: <strong>$${p[0].value} B/Q</strong> (Annualized: ~$${(p[0].value * 4).toFixed(1)}B/yr)`
        },
        grid: { top: 35, bottom: 25, left: 125, right: 35 },
        animation: true,
        animationDuration: 600,
        animationDurationUpdate: 600,
        animationEasingUpdate: 'cubicInOut',
        xAxis: {
          type: 'value',
          min: 0,
          max: xMax,
          interval: xInterval,
          axisLabel: { color: subColor, formatter: '${value}B', fontSize: 10 },
          splitLine: { lineStyle: { color: isLight ? 'rgba(0,0,0,0.06)' : 'rgba(255,255,255,0.06)' } }
        },
        yAxis: {
          type: 'category',
          data: yData,
          axisLabel: { color: textColor, fontSize: 11, fontWeight: 600 }
        },
        series: [
          {
            type: 'bar',
            data: xData,
            label: {
              show: true,
              position: 'right',
              formatter: '${c}B',
              color: textColor,
              fontSize: 10,
              fontWeight: 700
            }
          }
        ]
      };
    } else {
      // Sequoia Deficit Gap View: Capex vs. Real End-User Revenue across all 22 periods
      const labels = timeline.map(p => p.label);
      const capexData = timeline.map((p, idx) => ({
        value: p.macroMetrics.totalAiCapex,
        itemStyle: {
          color: idx === activeIndex ? '#f43f5e' : (idx < activeIndex ? 'rgba(244, 63, 94, 0.7)' : 'rgba(244, 63, 94, 0.2)'),
          borderRadius: [4, 4, 0, 0]
        }
      }));
      const revenueData = timeline.map((p, idx) => ({
        value: p.macroMetrics.realEndUserRevenue,
        itemStyle: {
          color: idx === activeIndex ? '#00e5ff' : (idx < activeIndex ? 'rgba(0, 229, 255, 0.7)' : 'rgba(0, 229, 255, 0.2)'),
          borderRadius: [4, 4, 0, 0]
        }
      }));

      return {
        title: {
          text: 'The $600B Question: Quarterly Capex vs. Real Revenue',
          textStyle: { color: textColor, fontSize: 13, fontWeight: 700 },
          top: 0,
          left: 0
        },
        tooltip: {
          trigger: 'axis',
          formatter: (p) => `
            <strong>${p[0].name}</strong><br/>
            ${p[0].marker} ${p[0].seriesName}: <strong>$${p[0].value} B/Q</strong><br/>
            ${p[1].marker} ${p[1].seriesName}: <strong>$${p[1].value} B/Q</strong><br/>
            <span style="color: #f43f5e; font-weight: 700;">Quarterly Deficit: $${(p[0].value - p[1].value).toFixed(1)} B</span>
          `
        },
        legend: {
          data: ['AI Capex Outlay', 'Real Software Revenue'],
          textStyle: { color: subColor, fontSize: 11 },
          top: 0,
          right: 0
        },
        grid: { top: 40, bottom: 35, left: 45, right: 20 },
        animation: true,
        animationDuration: 600,
        animationDurationUpdate: 600,
        animationEasingUpdate: 'cubicInOut',
        xAxis: {
          type: 'category',
          data: labels,
          axisLabel: {
            color: subColor,
            fontSize: 9,
            rotate: 35,
            interval: 0
          }
        },
        yAxis: {
          type: 'value',
          axisLabel: { color: subColor, formatter: '${value}B' },
          splitLine: { lineStyle: { color: isLight ? 'rgba(0,0,0,0.06)' : 'rgba(255,255,255,0.06)' } }
        },
        series: [
          {
            name: 'AI Capex Outlay',
            type: 'bar',
            data: capexData
          },
          {
            name: 'Real Software Revenue',
            type: 'bar',
            data: revenueData
          }
        ]
      };
    }
  }

  // ─── Entity & Transaction Dossier Renderer ───────────────────
  function updateEntityDossier() {
    const period = timeline[activeIndex];
    let node = period.nodes.find(n => n.id === selectedEntityId);
    if (!node) {
      node = period.nodes.find(n => n.isFormed !== false) || period.nodes[0];
    }
    const catDef = window.categoryDefinitions[node.category] || { name: node.category, color: '#38bdf8' };

    dossierName.textContent = node.name;
    dossierName.style.color = catDef.color;
    dossierCategory.textContent = catDef.name;
    dossierCategory.style.borderColor = catDef.color;
    dossierYear.textContent = period.label;

    if (node.isFormed === false) {
      dossierVal.textContent = 'Pre-Foundation';
      dossierCapex.textContent = '$0 B';
      dossierRev.textContent = '$0 B';
      dossierDesc.textContent = `${node.name} has not yet been founded in ${period.label}. It enters the global AI ecosystem in later periods.`;
      dossierFlows.innerHTML = '<div style="font-size: 0.78rem; color: var(--text-muted); padding: 8px 0;">Pre-foundation era. Entity active in subsequent periods.</div>';
      return;
    }

    dossierVal.textContent = `$${node.marketCap.toLocaleString()} B`;
    dossierCapex.textContent = `$${node.aiCapex.toLocaleString()} B/Q`;
    dossierRev.textContent = `$${node.aiRevenue.toLocaleString()} B/Q`;
    dossierDesc.textContent = node.desc;

    // Direct flows connected to this entity (active transactions only)
    const connectedEdges = period.edges.filter(e => (e.source === node.id || e.target === node.id) && e.amount > 0);
    dossierFlows.innerHTML = '';

    if (connectedEdges.length === 0) {
      dossierFlows.innerHTML = '<div style="font-size: 0.78rem; color: var(--text-muted); padding: 8px 0;">No major external transaction tracked in this period.</div>';
      return;
    }

    connectedEdges.forEach(e => {
      const isOutbound = e.source === node.id;
      const otherId = isOutbound ? e.target : e.source;
      const otherNode = period.nodes.find(n => n.id === otherId) || { name: otherId };
      const flowDef = window.flowTypeDefinitions[e.flowType] || { name: e.flowType, color: '#38bdf8' };

      const item = document.createElement('div');
      item.className = 'flow-item-pill';
      item.style.borderLeftColor = flowDef.color;
      item.innerHTML = `
        <div style="display: flex; flex-direction: column; gap: 2px;">
          <span style="font-weight: 700; color: var(--text-primary);">
            ${isOutbound ? '➔ Sent to' : '⬅ Received from'} <strong>${otherNode.name}</strong>
          </span>
          <span style="font-size: 0.7rem; color: ${flowDef.color};">${flowDef.name}</span>
        </div>
        <span style="font-family: var(--font-mono); font-weight: 800; color: var(--accent-primary);">$${e.amount}B/Q</span>
      `;
      dossierFlows.appendChild(item);
    });
  }

  // ─── Update UI on Timeline Change ────────────────────────────
  function updateUI() {
    const period = timeline[activeIndex];

    // Update Indicators
    timelineSlider.value = activeIndex;
    currentPeriodLabel.textContent = `${period.label} (${period.dateRange})`;
    networkYearDisplay.textContent = period.label;

    if (nodeMetricLabel) {
      if (activeNodeMetric === 'aiCapex') {
        nodeMetricLabel.textContent = 'AI Infrastructure Capex ($B/Q)';
        nodeMetricLabel.style.color = '#10b981';
      } else {
        nodeMetricLabel.textContent = 'Enterprise Value (Market Cap)';
        nodeMetricLabel.style.color = 'var(--accent-primary)';
      }
    }

    kpiCapexVal.textContent = period.macroMetrics.totalAiCapex.toFixed(1);
    kpiRevenueVal.textContent = period.macroMetrics.realEndUserRevenue.toFixed(1);
    kpiDeficitVal.textContent = period.macroMetrics.capexRevenueDeficit.toFixed(1);
    kpiCircularVal.textContent = period.macroMetrics.circularRatio.toString();

    // Update Charts (smooth animation and axis morphing)
    networkChart.setOption(getNetworkOptions(period));
    barChart.setOption(getBarChartOptions(period), false);

    // Update Dossier
    updateEntityDossier();
  }

  // ─── Fit View to Screen (Center & Fill Canvas) ────────────────
  function resetGraphView() {
    networkChart.setOption({
      series: [{
        zoom: 1.0,
        center: ['50%', '50%']
      }]
    });
    showToast('Graph centered and expanded to fill canvas.');
  }

  if (btnFitGraph) {
    btnFitGraph.addEventListener('click', resetGraphView);
  }

  // ─── Playback Control Logic (Single Pass Playthrough) ─────────
  function play() {
    if (isPlaying) return;

    // If already at the end of the timeline, restart from the beginning
    if (activeIndex >= timeline.length - 1) {
      activeIndex = 0;
      updateUI();
    }

    isPlaying = true;
    playIcon.style.display = 'none';
    pauseIcon.style.display = 'block';

    playInterval = setInterval(() => {
      if (activeIndex < timeline.length - 1) {
        activeIndex++;
        updateUI();
        if (activeIndex === timeline.length - 1) {
          pause();
        }
      } else {
        pause();
      }
    }, playSpeed);
  }

  function pause() {
    isPlaying = false;
    if (playInterval) clearInterval(playInterval);
    playIcon.style.display = 'block';
    pauseIcon.style.display = 'none';
  }

  function togglePlay() {
    if (isPlaying) pause();
    else play();
  }

  playBtn.addEventListener('click', togglePlay);

  prevBtn.addEventListener('click', () => {
    pause();
    activeIndex = Math.max(0, activeIndex - 1);
    updateUI();
  });

  nextBtn.addEventListener('click', () => {
    pause();
    activeIndex = Math.min(timeline.length - 1, activeIndex + 1);
    updateUI();
  });

  timelineSlider.addEventListener('input', (e) => {
    pause();
    activeIndex = parseInt(e.target.value, 10);
    updateUI();
  });

  speedControl.addEventListener('change', (e) => {
    playSpeed = parseInt(e.target.value, 10);
    if (isPlaying) {
      pause();
      play();
    }
  });

  // ─── Graph Category Filters ──────────────────────────────────
  document.querySelectorAll('.legend-pill').forEach(pill => {
    pill.addEventListener('click', () => {
      document.querySelectorAll('.legend-pill').forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      activeCategoryFilter = pill.getAttribute('data-filter') || 'all';
      updateUI();
    });
  });

  // ─── Bar Mode & Metric Synchronization Toggle ────────────────
  function setBarMode(mode) {
    activeBarMode = mode;
    [toggleBarVal, toggleBarCapex, toggleBarGap].forEach(btn => {
      if (btn) btn.classList.remove('active');
    });

    if (mode === 'valuation') {
      if (toggleBarVal) toggleBarVal.classList.add('active');
      activeNodeMetric = 'marketCap';
    } else if (mode === 'capex') {
      if (toggleBarCapex) toggleBarCapex.classList.add('active');
      activeNodeMetric = 'aiCapex';
    } else if (mode === 'gap') {
      if (toggleBarGap) toggleBarGap.classList.add('active');
    }

    // Pass true when swapping axis layout mode so ECharts resets scales properly
    barChart.setOption(getBarChartOptions(timeline[activeIndex]), true);
    networkChart.setOption(getNetworkOptions(timeline[activeIndex]));
    updateUI();
  }

  if (toggleBarVal) toggleBarVal.addEventListener('click', () => setBarMode('valuation'));
  if (toggleBarCapex) toggleBarCapex.addEventListener('click', () => setBarMode('capex'));
  if (toggleBarGap) toggleBarGap.addEventListener('click', () => setBarMode('gap'));

  // ─── Node Click Inspection ───────────────────────────────────
  networkChart.on('click', (params) => {
    if (params.dataType === 'node') {
      selectedEntityId = params.data.id;
      updateUI();
    }
  });

  // ─── Toast Helper ────────────────────────────────────────────
  function showToast(msg) {
    if (!toastContainer) return;
    const toast = document.createElement('div');
    toast.className = 'toast-msg show';
    toast.textContent = msg;
    toastContainer.appendChild(toast);
    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 300);
    }, 2500);
  }

  // ─── Copy Citation Handler ───────────────────────────────────
  if (copyCitationBtn) {
    copyCitationBtn.addEventListener('click', () => {
      const citationText = document.getElementById('citation-text')?.textContent || 'Source: SiMarket AI Capital Flow (https://eljja.github.io/SiMarket/ai_capital.html)';
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(citationText).then(() => {
          showToast('Citation copied to clipboard!');
        }).catch(() => fallbackCopy());
      } else {
        fallbackCopy();
      }

      function fallbackCopy() {
        const dummy = document.createElement('input');
        dummy.value = citationText;
        document.body.appendChild(dummy);
        dummy.select();
        document.execCommand('copy');
        document.body.removeChild(dummy);
        showToast('Citation copied to clipboard!');
      }
    });
  }

  // ─── Theme Switcher ──────────────────────────────────────────
  if (themeToggleBtn) {
    const savedTheme = localStorage.getItem('simarket_theme');
    if (savedTheme === 'light') {
      document.body.classList.add('theme-light');
      if (themeSunIcon) themeSunIcon.style.display = 'none';
      if (themeMoonIcon) themeMoonIcon.style.display = 'block';
    }

    themeToggleBtn.addEventListener('click', () => {
      const isLight = document.body.classList.toggle('theme-light');
      localStorage.setItem('simarket_theme', isLight ? 'light' : 'dark');
      if (themeSunIcon && themeMoonIcon) {
        themeSunIcon.style.display = isLight ? 'none' : 'block';
        themeMoonIcon.style.display = isLight ? 'block' : 'none';
      }
      updateUI();
    });
  }

  // ─── Keyboard Arrow Controls ─────────────────────────────────
  window.addEventListener('keydown', (e) => {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
    if (e.key === 'ArrowLeft') {
      pause();
      activeIndex = Math.max(0, activeIndex - 1);
      updateUI();
    } else if (e.key === 'ArrowRight') {
      pause();
      activeIndex = Math.min(timeline.length - 1, activeIndex + 1);
      updateUI();
    } else if (e.key === ' ') {
      e.preventDefault();
      togglePlay();
    }
  });

  // ─── Resize Handler ──────────────────────────────────────────
  window.addEventListener('resize', () => {
    networkChart.resize();
    barChart.resize();
    updateUI();
  });

  // ─── Initial Execution ───────────────────────────────────────
  updateUI();
});
