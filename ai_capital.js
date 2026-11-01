// ai_capital.js - Global AI Capital Flow & Ouroboros Loop Engine (English)
// Quarterly Edition (2023 Q1 - 2026 Q4)

document.addEventListener('DOMContentLoaded', () => {
  // ─── Application State ───────────────────────────────────────
  let activeIndex = 6; // Default to 2024 Q3 (The $600B Question & Peak Circularity)
  let isPlaying = false;
  let playInterval = null;
  let playSpeed = 1000;
  let activeCategoryFilter = 'all';
  let activeBarMode = 'capex'; // 'capex' or 'gap'
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
  function calcNodeSize(marketCap) {
    // Bold, prominent node sizes [34, 95] to clearly fill the space and command visual attention
    return Math.round(Math.max(34, Math.min(95, 22 + Math.sqrt(marketCap) * 1.18)));
  }

  function calcEdgeWidth(amount) {
    return Math.max(2.5, Math.min(18, Math.sqrt(amount) * 2.8));
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

    const nodesData = filteredNodes.map(n => {
      const catDef = window.categoryDefinitions[n.category] || { color: '#00e5ff', name: n.category };
      const isSelected = n.id === selectedEntityId;
      const pos = coords[n.id] || { x: 400, y: 290 };
      return {
        id: n.id,
        name: n.name,
        category: catDef.name,
        symbolSize: calcNodeSize(n.marketCap),
        value: n.marketCap,
        x: pos.x,
        y: pos.y,
        fixed: true,
        itemStyle: {
          color: catDef.color,
          borderColor: isSelected ? '#ffffff' : (isLight ? 'rgba(0,0,0,0.2)' : 'rgba(255,255,255,0.3)'),
          borderWidth: isSelected ? 4 : 1.5,
          shadowBlur: isSelected ? 24 : 10,
          shadowColor: catDef.color
        },
        label: {
          show: true,
          position: 'bottom',
          distance: 6,
          formatter: '{b}',
          fontSize: 11,
          fontWeight: 600,
          color: isLight ? '#0f172a' : '#f3f4f6'
        },
        raw: n
      };
    });

    const edgesData = period.edges
      .filter(e => allowedNodeIds.has(e.source) && allowedNodeIds.has(e.target))
      .map(e => {
        const flowDef = window.flowTypeDefinitions[e.flowType] || { color: '#38bdf8', name: e.flowType };
        const isConnected = e.source === selectedEntityId || e.target === selectedEntityId;
        return {
          id: `${e.source}_${e.target}_${e.flowType}`,
          source: e.source,
          target: e.target,
          value: e.amount,
          lineStyle: {
            width: calcEdgeWidth(e.amount),
            color: flowDef.color,
            curveness: 0.16,
            opacity: selectedEntityId ? (isConnected ? 0.95 : 0.2) : 0.75
          },
          raw: e
        };
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
            return `
              <div style="font-weight: 700; font-size: 1rem; color: var(--accent-primary); margin-bottom: 4px;">${n.name}</div>
              <div style="font-size: 0.8rem; color: ${isLight ? '#475569' : '#9ca3af'}; margin-bottom: 6px;">${params.data.category}</div>
              <div style="font-size: 0.85rem;"><strong>Enterprise Value:</strong> $${n.marketCap.toLocaleString()} B</div>
              <div style="font-size: 0.85rem;"><strong>Quarterly AI Capex:</strong> $${n.aiCapex.toLocaleString()} B/Q</div>
              <div style="font-size: 0.85rem;"><strong>Quarterly AI Revenue:</strong> $${n.aiRevenue.toLocaleString()} B/Q</div>
              <div style="font-size: 0.75rem; color: #ffb300; margin-top: 6px;">👉 Click node to view financial ties</div>
            `;
          } else if (params.dataType === 'edge') {
            const e = params.data.raw;
            const flowDef = window.flowTypeDefinitions[e.flowType] || { name: e.flowType };
            return `
              <div style="font-weight: 700; color: #ffb300; margin-bottom: 4px;">${flowDef.name}</div>
              <div style="font-size: 0.95rem; font-weight: 800; color: var(--accent-primary); margin-bottom: 4px;">$${e.amount.toLocaleString()} Billion / Quarter</div>
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
      series: [
        {
          type: 'graph',
          layout: 'none',
          data: nodesData,
          links: edgesData,
          categories: categories,
          center: ['50%', '50%'],
          zoom: 1.0,
          roam: true,
          draggable: true,
          scaleLimit: { min: 0.5, max: 2.5 },
          edgeSymbol: ['none', 'arrow'],
          edgeSymbolSize: [4, 9],
          emphasis: {
            focus: 'adjacency',
            lineStyle: { width: 6 }
          }
        }
      ]
    };
  }

  // ─── Comparative Bar Chart Options ───────────────────────────
  function getBarChartOptions(period) {
    const isLight = isLightMode();
    const textColor = isLight ? '#0f172a' : '#f3f4f6';
    const subColor = isLight ? '#475569' : '#9ca3af';

    if (activeBarMode === 'capex') {
      // Entity AI Capex Ranking for Active Quarter
      const sortedNodes = [...period.nodes]
        .filter(n => n.aiCapex > 0)
        .sort((a, b) => a.aiCapex - b.aiCapex);

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
        xAxis: {
          type: 'value',
          axisLabel: { color: subColor, formatter: '${value}B' },
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
      // Sequoia Deficit Gap View: Capex vs. Real End-User Revenue across all 16 quarters
      const labels = timeline.map(p => p.label);
      const capexData = timeline.map((p, idx) => ({
        value: p.macroMetrics.totalAiCapex,
        itemStyle: {
          color: idx === activeIndex ? '#f43f5e' : 'rgba(244, 63, 94, 0.65)',
          borderRadius: [4, 4, 0, 0]
        }
      }));
      const revenueData = timeline.map((p, idx) => ({
        value: p.macroMetrics.realEndUserRevenue,
        itemStyle: {
          color: idx === activeIndex ? '#00e5ff' : 'rgba(0, 229, 255, 0.65)',
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
    const node = period.nodes.find(n => n.id === selectedEntityId) || period.nodes[0];
    const catDef = window.categoryDefinitions[node.category] || { name: node.category, color: '#38bdf8' };

    dossierName.textContent = node.name;
    dossierName.style.color = catDef.color;
    dossierCategory.textContent = catDef.name;
    dossierCategory.style.borderColor = catDef.color;
    dossierVal.textContent = `$${node.marketCap.toLocaleString()} B`;
    dossierCapex.textContent = `$${node.aiCapex.toLocaleString()} B/Q`;
    dossierRev.textContent = `$${node.aiRevenue.toLocaleString()} B/Q`;
    dossierDesc.textContent = node.desc;
    dossierYear.textContent = period.label;

    // Direct flows connected to this entity
    const connectedEdges = period.edges.filter(e => e.source === node.id || e.target === node.id);
    dossierFlows.innerHTML = '';

    if (connectedEdges.length === 0) {
      dossierFlows.innerHTML = '<div style="font-size: 0.78rem; color: var(--text-muted); padding: 8px 0;">No major external transaction tracked in this quarter.</div>';
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

    kpiCapexVal.textContent = period.macroMetrics.totalAiCapex.toFixed(1);
    kpiRevenueVal.textContent = period.macroMetrics.realEndUserRevenue.toFixed(1);
    kpiDeficitVal.textContent = period.macroMetrics.capexRevenueDeficit.toFixed(1);
    kpiCircularVal.textContent = period.macroMetrics.circularRatio.toString();

    // Update Charts
    networkChart.setOption(getNetworkOptions(period));
    barChart.setOption(getBarChartOptions(period), true);

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

  // ─── Playback Control Logic ──────────────────────────────────
  function play() {
    if (isPlaying) return;
    isPlaying = true;
    playIcon.style.display = 'none';
    pauseIcon.style.display = 'block';

    playInterval = setInterval(() => {
      activeIndex = (activeIndex + 1) % timeline.length;
      updateUI();
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
    activeIndex = (activeIndex - 1 + timeline.length) % timeline.length;
    updateUI();
  });

  nextBtn.addEventListener('click', () => {
    pause();
    activeIndex = (activeIndex + 1) % timeline.length;
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

  // ─── Bar Mode Toggle ─────────────────────────────────────────
  toggleBarCapex.addEventListener('click', () => {
    toggleBarCapex.classList.add('active');
    toggleBarGap.classList.remove('active');
    activeBarMode = 'capex';
    barChart.setOption(getBarChartOptions(timeline[activeIndex]), true);
  });

  toggleBarGap.addEventListener('click', () => {
    toggleBarGap.classList.add('active');
    toggleBarCapex.classList.remove('active');
    activeBarMode = 'gap';
    barChart.setOption(getBarChartOptions(timeline[activeIndex]), true);
  });

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

  // ─── Resize Handler ──────────────────────────────────────────
  window.addEventListener('resize', () => {
    networkChart.resize();
    barChart.resize();
    updateUI();
  });

  // ─── Initial Execution ───────────────────────────────────────
  updateUI();
});
