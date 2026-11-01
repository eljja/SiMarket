// ai_capital_ko.js - 글로벌 AI 자금 순환 및 오우로보로스 분석 엔진 (한국어)
// 분기별 에디션 (2023 Q1 ~ 2026 Q4)

document.addEventListener('DOMContentLoaded', () => {
  // ─── 애플리케이션 상태 ─────────────────────────────────────────
  let activeIndex = 6; // 기본값: 2024년 3분기 (세쿼이아의 $600B 질문 및 순환 정점기)
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
  function calcNodeSize(marketCap) {
    // 24px ~ 76px 사이의 부드러운 제곱근 감쇠 스케일링으로 시총 위계 보존 및 화면 밖 이탈 원천 방지
    return Math.round(Math.max(24, Math.min(76, 16 + Math.sqrt(marketCap) * 0.95)));
  }

  function calcEdgeWidth(amount) {
    return Math.max(2, Math.min(18, Math.sqrt(amount) * 2.5));
  }

  function isLightMode() {
    return document.body.classList.contains('theme-light');
  }

  // ─── 네트워크 그래프 옵션 ──────────────────────────────────────
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

    const nodesData = filteredNodes.map(n => {
      const catDef = window.categoryDefinitionsKo[n.category] || { color: '#00e5ff', name: n.category };
      const isSelected = n.id === selectedEntityId;
      return {
        id: n.id,
        name: n.name,
        category: catDef.name,
        symbolSize: calcNodeSize(n.marketCap),
        value: n.marketCap,
        // 사전에 안전하게 바운딩된 좌표 앵커 (초기 팽창으로 인한 화면 이탈 방지)
        x: n.initialX,
        y: n.initialY,
        itemStyle: {
          color: catDef.color,
          borderColor: isSelected ? '#ffffff' : (isLight ? 'rgba(0,0,0,0.2)' : 'rgba(255,255,255,0.3)'),
          borderWidth: isSelected ? 4 : 1.5,
          shadowBlur: isSelected ? 22 : 8,
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
        const flowDef = window.flowTypeDefinitionsKo[e.flowType] || { color: '#38bdf8', name: e.flowType };
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
        textStyle: { color: isLight ? '#0f172a' : '#f3f4f6', fontFamily: 'Pretendard, -apple-system, sans-serif' },
        formatter: (params) => {
          if (params.dataType === 'node') {
            const n = params.data.raw;
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
            const flowDef = window.flowTypeDefinitionsKo[e.flowType] || { name: e.flowType };
            return `
              <div style="font-weight: 700; color: #ffb300; margin-bottom: 4px;">${flowDef.name}</div>
              <div style="font-size: 0.95rem; font-weight: 800; color: var(--accent-primary); margin-bottom: 4px;">분기당 $${e.amount.toLocaleString()} Billion (약 ${(e.amount * 1.35).toFixed(1)}조 원)</div>
              <div style="font-size: 0.82rem; max-width: 280px; line-height: 1.4;">${e.desc}</div>
            `;
          }
        }
      },
      legend: { show: false },
      animationDuration: 700,
      animationEasingUpdate: 'cubicOut',
      series: [
        {
          type: 'graph',
          layout: 'force',
          data: nodesData,
          links: edgesData,
          categories: categories,
          center: ['50%', '50%'],
          zoom: 0.82,
          roam: true,
          draggable: true,
          scaleLimit: { min: 0.45, max: 2.2 },
          edgeSymbol: ['none', 'arrow'],
          edgeSymbolSize: 7,
          // 노드가 화면 밖으로 이탈하지 않도록 중력과 반발력을 정밀 튜닝
          force: {
            repulsion: 220,
            edgeLength: [50, 130],
            gravity: 0.28,
            friction: 0.75
          },
          emphasis: {
            focus: 'adjacency',
            lineStyle: { width: 5 }
          }
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
      // 세쿼이아 6000억 달러 적자 갭 뷰: 16개 전체 분기 Capex vs 실제 매출 비교
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
    const node = period.nodes.find(n => n.id === selectedEntityId) || period.nodes[0];
    const catDef = window.categoryDefinitionsKo[node.category] || { name: node.category, color: '#38bdf8' };

    dossierName.textContent = node.name;
    dossierName.style.color = catDef.color;
    dossierCategory.textContent = catDef.name;
    dossierCategory.style.borderColor = catDef.color;
    dossierVal.textContent = `$${node.marketCap.toLocaleString()} B`;
    dossierCapex.textContent = `$${node.aiCapex.toLocaleString()} B/분기`;
    dossierRev.textContent = `$${node.aiRevenue.toLocaleString()} B/분기`;
    dossierDesc.textContent = node.desc;
    dossierYear.textContent = period.label;

    // 해당 기업에 연결된 분기별 거래 목록
    const connectedEdges = period.edges.filter(e => e.source === node.id || e.target === node.id);
    dossierFlows.innerHTML = '';

    if (connectedEdges.length === 0) {
      dossierFlows.innerHTML = '<div style="font-size: 0.78rem; color: var(--text-muted); padding: 8px 0;">이 분기에는 추적된 대규모 외부 거래가 없습니다.</div>';
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
        zoom: 0.82,
        center: ['50%', '50%']
      }]
    });
    showToast('그래프 화면을 캔버스 중앙에 최적 비율로 맞췄습니다.');
  }

  if (btnFitGraph) {
    btnFitGraph.addEventListener('click', resetGraphView);
  }

  // ─── 타임라인 재생/일시정지 제어 ────────────────────────────────
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

  // ─── 리사이즈 반응형 ──────────────────────────────────────────
  window.addEventListener('resize', () => {
    networkChart.resize();
    barChart.resize();
  });

  // ─── 최초 초기화 실행 ──────────────────────────────────────────
  updateUI();
});
