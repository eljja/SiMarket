// ai_capital.js - Global AI Capital Flow & Ouroboros Loop Engine (English)

document.addEventListener('DOMContentLoaded', () => {
  // ─── Application State ───────────────────────────────────────
  let activeIndex = 2; // Default to 2024 (peak circularity debate)
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

  // ─── Initialize ECharts ──────────────────────────────────────
  const networkChart = echarts.init(networkChartDom);
  const barChart = echarts.init(barChartDom);

  // ─── Node Sizing & Visual Helpers ────────────────────────────
  function calcNodeSize(marketCap) {
    // Square root scaling with clamping for visual legibility
    return Math.round(Math.max(26, Math.min(82, 16 + Math.sqrt(marketCap) * 1.05)));
  }

  function calcEdgeWidth(amount) {
    return Math.max(2, Math.min(18, Math.sqrt(amount) * 2.4));
  }

  function isLightMode() {
    return document.body.classList.contains('theme-light');
  }

  // ─── Force Graph Options ─────────────────────────────────────
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

    const nodesData = filteredNodes.map(n => {
      const catDef = window.categoryDefinitions[n.category] || { color: '#00e5ff' };
      const isSelected = n.id === selectedEntityId;
      return {
        id: n.id,
        name: n.name,
        category: catDef.name,
        symbolSize: calcNodeSize(n.marketCap),
        value: n.marketCap,
        itemStyle: {
          color: catDef.color,
          borderColor: isSelected ? '#ffffff' : (isLight ? 'rgba(0,0,0,0.2)' : 'rgba(255,255,255,0.3)'),
          borderWidth: isSelected ? 4 : 1.5,
          shadowBlur: isSelected ? 20 : 8,
          shadowColor: catDef.color
        },
        label: {
          show: true,
          position: 'bottom',
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
        const flowDef = window.flowTypeDefinitions[e.flowType] || { color: '#38bdf8' };
        const isConnected = e.source === selectedEntityId || e.target === selectedEntityId;
        return {
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
              <div style="font-size: 0.85rem;"><strong>Annual AI Capex:</strong> $${n.aiCapex.toLocaleString()} B</div>
              <div style="font-size: 0.85rem;"><strong>AI Hardware/Service Revenue:</strong> $${n.aiRevenue.toLocaleString()} B</div>
              <div style="font-size: 0.75rem; color: #ffb300; margin-top: 6px;">👉 Click node to view financial ties</div>
            `;
          } else if (params.dataType === 'edge') {
            const e = params.data.raw;
            const flowDef = window.flowTypeDefinitions[e.flowType] || { name: e.flowType };
            return `
              <div style="font-weight: 700; color: #ffb300; margin-bottom: 4px;">${flowDef.name}</div>
              <div style="font-size: 0.95rem; font-weight: 800; color: var(--accent-primary); margin-bottom: 4px;">$${e.amount.toLocaleString()} Billion</div>
              <div style="font-size: 0.82rem; max-width: 260px; line-height: 1.4;">${e.desc}</div>
            `;
          }
        }
      },
      legend: { show: false },
      animationDuration: 800,
      animationEasingUpdate: 'cubicOut',
      series: [
        {
          type: 'graph',
          layout: 'force',
          data: nodesData,
          links: edgesData,
          categories: categories,
          roam: true,
          draggable: true,
          edgeSymbol: ['none', 'arrow'],
          edgeSymbolSize: 8,
          force: {
            repulsion: 500,
            edgeLength: [90, 240],
            gravity: 0.11,
            friction: 0.6
          },
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
      // Entity AI Capex Ranking
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
          text: `Annual AI Capex Ranking (${period.year})`,
          textStyle: { color: textColor, fontSize: 13, fontWeight: 700 },
          top: 0,
          left: 0
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: { type: 'shadow' },
          formatter: (p) => `${p[0].name}: <strong>$${p[0].value} B</strong>`
        },
        grid: { top: 35, bottom: 25, left: 110, right: 35 },
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
      // Sequoia Deficit Gap View: Cumulative Capex vs. Real End-User Revenue across timeline
      const years = timeline.map(p => p.year.toString());
      const capexData = timeline.map(p => p.macroMetrics.totalAiCapex);
      const revenueData = timeline.map(p => p.macroMetrics.realEndUserRevenue);

      return {
        title: {
          text: 'The $600B Question: Capex vs. Real Revenue',
          textStyle: { color: textColor, fontSize: 13, fontWeight: 700 },
          top: 0,
          left: 0
        },
        tooltip: {
          trigger: 'axis',
          formatter: (p) => `
            <strong>${p[0].name}</strong><br/>
            ${p[0].marker} ${p[0].seriesName}: <strong>$${p[0].value} B</strong><br/>
            ${p[1].marker} ${p[1].seriesName}: <strong>$${p[1].value} B</strong><br/>
            <span style="color: #f43f5e; font-weight: 700;">Deficit Gap: $${(p[0].value - p[1].value).toFixed(1)} B</span>
          `
        },
        legend: {
          data: ['AI Capex Outlay', 'Real Software Revenue'],
          textStyle: { color: subColor, fontSize: 11 },
          top: 0,
          right: 0
        },
        grid: { top: 40, bottom: 25, left: 45, right: 20 },
        xAxis: {
          type: 'category',
          data: years,
          axisLabel: { color: textColor, fontWeight: 600 }
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
            data: capexData,
            itemStyle: { color: '#ffb300', borderRadius: [4, 4, 0, 0] }
          },
          {
            name: 'Real Software Revenue',
            type: 'bar',
            data: revenueData,
            itemStyle: { color: '#00e5ff', borderRadius: [4, 4, 0, 0] }
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
    dossierCapex.textContent = `$${node.aiCapex.toLocaleString()} B`;
    dossierRev.textContent = `$${node.aiRevenue.toLocaleString()} B`;
    dossierDesc.textContent = node.desc;
    dossierYear.textContent = period.year.toString();

    // Direct flows connected to this entity
    const connectedEdges = period.edges.filter(e => e.source === node.id || e.target === node.id);
    dossierFlows.innerHTML = '';

    if (connectedEdges.length === 0) {
      dossierFlows.innerHTML = '<div style="font-size: 0.78rem; color: var(--text-muted);">No major tracked external circular links in this period.</div>';
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
        <span style="font-family: var(--font-mono); font-weight: 800; color: var(--accent-primary);">$${e.amount}B</span>
      `;
      dossierFlows.appendChild(item);
    });
  }

  // ─── Update UI on Timeline Change ────────────────────────────
  function updateUI() {
    const period = timeline[activeIndex];

    // Update Indicators
    timelineSlider.value = activeIndex;
    currentPeriodLabel.textContent = period.year.toString();
    networkYearDisplay.textContent = period.year.toString();

    kpiCapexVal.textContent = period.macroMetrics.totalAiCapex.toFixed(1);
    kpiRevenueVal.textContent = period.macroMetrics.realEndUserRevenue.toFixed(1);
    kpiDeficitVal.textContent = period.macroMetrics.capexRevenueDeficit.toFixed(1);
    kpiCircularVal.textContent = period.macroMetrics.circularRatio.toString();

    // Update Charts
    networkChart.setOption(getNetworkOptions(period));
    barChart.setOption(getBarChartOptions(period));

    // Update Dossier
    updateEntityDossier();
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
  });

  // ─── Initial Execution ───────────────────────────────────────
  updateUI();
});
