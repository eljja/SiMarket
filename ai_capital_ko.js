// ai_capital_ko.js - 글로벌 AI 자금 순환 및 오우로보로스 분석 엔진 (한국어)
// 10개년 대서사 에디션 (2017 ~ 2026 Q4)

document.addEventListener('DOMContentLoaded', () => {
  // ─── 애플리케이션 상태 ─────────────────────────────────────────
  let activeIndex = 12; // 기본값: 2024년 3분기 (세쿼이아의 $600B 질문 및 순환 정점기)
  let isPlaying = false;
  let playInterval = null;
  let playSpeed = 1000;
  let activeCategoryFilter = 'all';
  let activeBarMode = 'capex'; // 'capex' 또는 'gap'
  let selectedEntityId = 'nvda'; // 기본 선택 기업

  const timeline = window.aiCapitalTimelineDataKo;
  if (!timeline || !timeline.length) {
    console.error('aiCapitalTimelineDataKo not loaded');
    return;
  }

  // ─── DOM 엘리먼트 ────────────────────────────────────────────
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

  // 슬라이더 범위 설정
  if (timelineSlider) {
    timelineSlider.min = '0';
    timelineSlider.max = (timeline.length - 1).toString();
    timelineSlider.value = activeIndex.toString();
  }

  // ─── ECharts 인스턴스 초기화 ──────────────────────────────────
  const networkChart = echarts.init(networkChartDom);
  const barChart = echarts.init(barChartDom);

  // ─── 노드 크기 및 시각 헬퍼 ────────────────────────────────────
  function calcNodeSize(marketCap, isFormed = true) {
    if (!isFormed || !marketCap || marketCap <= 0) return 0;
    // 동적 서브리니어 스케일: $0.3B 비영리 연구소(18px)부터 $3.8T 거대 기업(114px)까지 6배 직경 스케일
    return Math.round(Math.max(18, Math.min(115, 14 + Math.pow(marketCap, 0.44) * 2.65)));
  }

  function calcEdgeWidth(amount) {
    if (!amount || amount <= 0) return 0;
    return Math.max(2.0, Math.min(18, Math.sqrt(amount) * 2.8));
  }

  function isLightMode() {
    return document.body.classList.contains('theme-light');
  }

  // ─── 정적 시맨틱 픽셀 좌표 앵커 ────────────────────────────────
  const normalizedCoords = {
    // 하드웨어 코어 (중앙)
    nvda: { x: 0.48, y: 0.48 },

    // 메모리 & 파운드리 (상단 및 하단 중앙)
    skhynix: { x: 0.38, y: 0.12 },
    samsung: { x: 0.58, y: 0.12 },
    tsmc: { x: 0.48, y: 0.80 },
    asml: { x: 0.62, y: 0.94 },
    avgo: { x: 0.32, y: 0.82 },

    // 빅테크 하이퍼스케일러 (좌측 날개)
    meta: { x: 0.10, y: 0.26 },
    msft: { x: 0.25, y: 0.35 },
    goog: { x: 0.16, y: 0.54 },
    amzn: { x: 0.25, y: 0.70 },

    // 프론티어 AI 랩스 & 네오클라우드 (우측 날개)
    deepseek: { x: 0.74, y: 0.16 },
    openai: { x: 0.70, y: 0.36 },
    xai: { x: 0.88, y: 0.30 },
    anthropic: { x: 0.80, y: 0.54 },
    coreweave: { x: 0.72, y: 0.72 },

    // 자본 & 실제 시장 (외곽 플랭크)
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

  // ─── 네트워크 그래프 옵션 (자연스러운 모핑 및 포톤 파티클 애니메이션) ────────
  function getNetworkOptions(period) {
    const isLight = isLightMode();
    const categories = Object.keys(window.categoryDefinitionsKo).map(k => ({
      name: window.categoryDefinitionsKo[k].name
    }));

    // 카테고리 필터링
    const filteredNodes = period.nodes.filter(n => {
      if (activeCategoryFilter === 'all') return true;
      return n.category === activeCategoryFilter;
    });
    const allowedNodeIds = new Set(filteredNodes.map(n => n.id));
    const coords = getNodePixelCoordinates();
    const width = networkChartDom.clientWidth || 840;
    const height = networkChartDom.clientHeight || 580;

    const nodesData = filteredNodes.map(n => {
      const catDef = window.categoryDefinitionsKo[n.category] || { color: '#00e5ff', name: n.category };
      const isSelected = n.id === selectedEntityId;
      const isFormed = n.isFormed !== false;
      const isHighGrowth = n.isHighGrowth === true;
      const nodeSize = calcNodeSize(n.marketCap, isFormed);
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
        const flowDef = (window.flowTypeDefinitionsKo || {})[e.flowType] || { color: '#38bdf8', name: e.flowType };
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
          symbolSize: isActive ? [4, 9] : [0, 0],
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

    // ─── 역동적인 흐름을 시각화하는 광자(Photon) 파티클 스트림 ───
    const linesData = [];
    period.edges.forEach(e => {
      if (!e.amount || e.amount <= 0) return;
      const srcNode = filteredNodes.find(n => n.id === e.source);
      const tgtNode = filteredNodes.find(n => n.id === e.target);
      if (!srcNode || !tgtNode || srcNode.isFormed === false || tgtNode.isFormed === false) return;

      const p1 = coords[e.source];
      const p2 = coords[e.target];
      if (!p1 || !p2) return;

      const flowDef = (window.flowTypeDefinitionsKo || {})[e.flowType] || { color: '#00e5ff' };
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
          symbolSize: Math.max(4.5, Math.min(8.5, 3.6 + Math.sqrt(e.amount) * 0.8)),
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
        textStyle: { color: isLight ? '#0f172a' : '#f3f4f6', fontFamily: 'Pretendard, -apple-system, sans-serif' },
        formatter: (params) => {
          if (params.dataType === 'node') {
            const n = params.data.raw;
            if (n.isFormed === false) return '';
            return `
              <div style="font-weight: 700; font-size: 1rem; color: var(--accent-primary); margin-bottom: 4px;">${n.name}</div>
              <div style="font-size: 0.8rem; color: ${isLight ? '#475569' : '#9ca3af'}; margin-bottom: 6px;">${params.data.category}</div>
              <div style="font-size: 0.85rem;"><strong>기업 가치 / 시가총액:</strong> $${n.marketCap.toLocaleString()} B (약 ${(n.marketCap * 1.35).toFixed(0)}조 원)</div>
              <div style="font-size: 0.85rem;"><strong>분기 AI 설비투자(Capex):</strong> $${n.aiCapex.toLocaleString()} B/분기</div>
              <div style="font-size: 0.85rem;"><strong>분기 AI 매출:</strong> $${n.aiRevenue.toLocaleString()} B/분기</div>
              <div style="font-size: 0.75rem; color: #ffb300; margin-top: 6px;">👉 노드를 클릭하면 관련 자금 거래가 집중 표시됩니다</div>
            `;
          } else if (params.dataType === 'edge') {
            const e = params.data.raw;
            if (!e || !e.amount || e.amount <= 0) return '';
            const flowDef = (window.flowTypeDefinitionsKo || {})[e.flowType] || { name: e.flowType };
            return `
              <div style="font-weight: 700; color: #ffb300; margin-bottom: 4px;">${flowDef.name}</div>
              <div style="font-size: 0.95rem; font-weight: 800; color: var(--accent-primary); margin-bottom: 4px;">분기당 $${e.amount.toLocaleString()} Billion (약 ${(e.amount * 1.35).toFixed(1)}조 원)</div>
              <div style="font-size: 0.82rem; max-width: 280px; line-height: 1.4;">${e.desc}</div>
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
          edgeSymbolSize: [4, 9],
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

  // ─── 비교 막대 차트 옵션 ───────────────────────────────────────
  function getBarChartOptions(period) {
    const isLight = isLightMode();
    const textColor = isLight ? '#0f172a' : '#f3f4f6';
    const subColor = isLight ? '#475569' : '#9ca3af';

    if (activeBarMode === 'capex') {
      // 해당 분기 AI Capex 지출 기업 순위
      const sortedNodes = [...period.nodes]
        .filter(n => n.aiCapex > 0)
        .sort((a, b) => a.aiCapex - b.aiCapex);

      const yData = sortedNodes.map(n => n.name);
      const xData = sortedNodes.map(n => ({
        value: n.aiCapex,
        itemStyle: {
          color: (window.categoryDefinitionsKo[n.category] || {}).color || '#38bdf8',
          borderRadius: [0, 6, 6, 0]
        }
      }));

      return {
        title: {
          text: `분기별 기업 AI 설비투자 순위 (${period.label})`,
          textStyle: { color: textColor, fontSize: 13, fontWeight: 700 },
          top: 0,
          left: 0
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: { type: 'shadow' },
          formatter: (p) => `${p[0].name}: <strong>$${p[0].value} B/분기</strong> (연간 환산: ~$${(p[0].value * 4).toFixed(1)}B/년)`
        },
        grid: { top: 35, bottom: 25, left: 135, right: 35 },
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
      // 세쿼이아 6000억 달러 적자 갭 뷰: 22개 전체 시기 Capex vs 실제 매출 비교
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
          text: '세쿼이아의 질문: 분기별 Capex vs 실제 매출 격차',
          textStyle: { color: textColor, fontSize: 13, fontWeight: 700 },
          top: 0,
          left: 0
        },
        tooltip: {
          trigger: 'axis',
          formatter: (p) => `
            <strong>${p[0].name}</strong><br/>
            ${p[0].marker} ${p[0].seriesName}: <strong>$${p[0].value} B/분기</strong><br/>
            ${p[1].marker} ${p[1].seriesName}: <strong>$${p[1].value} B/분기</strong><br/>
            <span style="color: #f43f5e; font-weight: 700;">분기 미회수 적자: $${(p[0].value - p[1].value).toFixed(1)} B</span>
          `
        },
        legend: {
          data: ['AI 인프라 Capex 지출', '실제 소프트웨어 실매출'],
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
            name: 'AI 인프라 Capex 지출',
            type: 'bar',
            data: capexData
          },
          {
            name: '실제 소프트웨어 실매출',
            type: 'bar',
            data: revenueData
          }
        ]
      };
    }
  }

  // ─── 기업 및 거래 Dossier 카드 렌더러 ──────────────────────────
  function updateEntityDossier() {
    const period = timeline[activeIndex];
    let node = period.nodes.find(n => n.id === selectedEntityId);
    if (!node) {
      node = period.nodes.find(n => n.isFormed !== false) || period.nodes[0];
    }
    const catDef = window.categoryDefinitionsKo[node.category] || { name: node.category, color: '#38bdf8' };

    dossierName.textContent = node.name;
    dossierName.style.color = catDef.color;
    dossierCategory.textContent = catDef.name;
    dossierCategory.style.borderColor = catDef.color;
    dossierYear.textContent = period.label;

    if (node.isFormed === false) {
      dossierVal.textContent = '설립 이전';
      dossierCapex.textContent = '$0 B';
      dossierRev.textContent = '$0 B';
      dossierDesc.textContent = `${node.name}은(는) ${period.label} 시점에 아직 설립되지 않았습니다. 이후 분기에 본격적으로 글로벌 AI 생태계에 합류합니다.`;
      dossierFlows.innerHTML = '<div style="font-size: 0.78rem; color: var(--text-muted); padding: 8px 0;">설립 이전 시기입니다. 이후 분기에서 활성화됩니다.</div>';
      return;
    }

    dossierVal.textContent = `$${node.marketCap.toLocaleString()} B (약 ${(node.marketCap * 1.35).toFixed(0)}조 원)`;
    dossierCapex.textContent = `$${node.aiCapex.toLocaleString()} B/분기`;
    dossierRev.textContent = `$${node.aiRevenue.toLocaleString()} B/분기`;
    dossierDesc.textContent = node.desc;

    // 해당 기업에 연결된 분기별 실질 거래 목록 (활성 거래만)
    const connectedEdges = period.edges.filter(e => (e.source === node.id || e.target === node.id) && e.amount > 0);
    dossierFlows.innerHTML = '';

    if (connectedEdges.length === 0) {
      dossierFlows.innerHTML = '<div style="font-size: 0.78rem; color: var(--text-muted); padding: 8px 0;">이 시기에는 추적된 대규모 외부 거래가 없습니다.</div>';
      return;
    }

    connectedEdges.forEach(e => {
      const isOutbound = e.source === node.id;
      const otherId = isOutbound ? e.target : e.source;
      const otherNode = period.nodes.find(n => n.id === otherId) || { name: otherId };
      const flowDef = window.flowTypeDefinitionsKo[e.flowType] || { name: e.flowType, color: '#38bdf8' };

      const item = document.createElement('div');
      item.className = 'flow-item-pill';
      item.style.borderLeftColor = flowDef.color;
      item.innerHTML = `
        <div style="display: flex; flex-direction: column; gap: 2px;">
          <span style="font-weight: 700; color: var(--text-primary);">
            ${isOutbound ? '➔ 지급/발주 대상:' : '⬅ 수령/공급처:'} <strong>${otherNode.name}</strong>
          </span>
          <span style="font-size: 0.7rem; color: ${flowDef.color};">${flowDef.name}</span>
        </div>
        <span style="font-family: var(--font-mono); font-weight: 800; color: var(--accent-primary);">$${e.amount}B/Q</span>
      `;
      dossierFlows.appendChild(item);
    });
  }

  // ─── 타임라인 변경 시 전체 UI 동기화 ────────────────────────────
  function updateUI() {
    const period = timeline[activeIndex];

    // 지표 업데이트
    timelineSlider.value = activeIndex;
    currentPeriodLabel.textContent = `${period.label} (${period.dateRange})`;
    networkYearDisplay.textContent = period.label;

    kpiCapexVal.textContent = period.macroMetrics.totalAiCapex.toFixed(1);
    kpiRevenueVal.textContent = period.macroMetrics.realEndUserRevenue.toFixed(1);
    kpiDeficitVal.textContent = period.macroMetrics.capexRevenueDeficit.toFixed(1);
    kpiCircularVal.textContent = period.macroMetrics.circularRatio.toString();

    // 차트 업데이트
    networkChart.setOption(getNetworkOptions(period));
    barChart.setOption(getBarChartOptions(period), true);

    // Dossier 업데이트
    updateEntityDossier();
  }

  // ─── 화면 맞춤 (Fit View to Screen) ────────────────────────────
  function resetGraphView() {
    networkChart.setOption({
      series: [{
        zoom: 1.0,
        center: ['50%', '50%']
      }]
    });
    showToast('그래프를 중앙에 맞춰 가득 채웠습니다.');
  }

  if (btnFitGraph) {
    btnFitGraph.addEventListener('click', resetGraphView);
  }

  // ─── 타임라인 재생/일시정지 제어 (1회 재생 후 자동 정지) ────────────
  function play() {
    if (isPlaying) return;

    // 타임라인 끝에 도달한 상태에서 재생을 누르면 처음부터 다시 재생
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

  // ─── 카테고리 필터 버튼 ───────────────────────────────────────
  document.querySelectorAll('.legend-pill').forEach(pill => {
    pill.addEventListener('click', () => {
      document.querySelectorAll('.legend-pill').forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      activeCategoryFilter = pill.getAttribute('data-filter') || 'all';
      updateUI();
    });
  });

  // ─── 비교 막대 모드 토글 ───────────────────────────────────────
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

  // ─── 노드 클릭 인터랙션 ───────────────────────────────────────
  networkChart.on('click', (params) => {
    if (params.dataType === 'node') {
      selectedEntityId = params.data.id;
      updateUI();
    }
  });

  // ─── 토스트 알림 헬퍼 ──────────────────────────────────────────
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

  // ─── 인용구 복사 핸들러 ────────────────────────────────────────
  if (copyCitationBtn) {
    copyCitationBtn.addEventListener('click', () => {
      const citationText = document.getElementById('citation-text')?.textContent || '출처: SiMarket AI Capital Flow (https://eljja.github.io/SiMarket/ai_capital_ko.html)';
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(citationText).then(() => {
          showToast('인용 출처가 클립보드에 복사되었습니다!');
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
        showToast('인용 출처가 클립보드에 복사되었습니다!');
      }
    });
  }

  // ─── 다크 / 라이트 모드 전환 ──────────────────────────────────
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

  // ─── 키보드 화살표 단축키 지원 ─────────────────────────────────
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

  // ─── 리사이즈 반응형 ──────────────────────────────────────────
  window.addEventListener('resize', () => {
    networkChart.resize();
    barChart.resize();
    updateUI();
  });

  // ─── 최초 초기화 실행 ──────────────────────────────────────────
  updateUI();
});
