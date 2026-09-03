// app_ko.js - 글로벌 반도체 시장 대시보드 로직 (10개 시장 한국어 판)

document.addEventListener('DOMContentLoaded', () => {
  // ─── 애플리케이션 상태 ───────────────────────────────────────
  let currentMarket = 'total'; // 'total', 'dram', 'flash', 'logic', 'analog', 'opto', 'power', 'mcu', 'foundry', 'fabless'
  let activeIndex = 0;
  let isPlaying = false;
  let playInterval = null;
  let playSpeed = 1000; // ms per step
  let currentMetric = 'revenue'; // 'revenue' or 'bytes'

  // 애니메이션 카운터 상태
  let animatedRevenue = 0;
  let animatedCapacity = 0;
  let counterAnimFrame = null;

  // ─── DOM 엘리먼트 ────────────────────────────────────────────
  const playBtn = document.getElementById('play-btn');
  const playIcon = document.getElementById('play-icon');
  const pauseIcon = document.getElementById('pause-icon');
  const speedControl = document.getElementById('speed-control');
  const timelineSlider = document.getElementById('timeline-slider');
  const currentPeriodLabel = document.getElementById('current-period');
  const toggleRevenueBtn = document.getElementById('toggle-revenue');
  const toggleBytesBtn = document.getElementById('toggle-bytes');

  const statRevenueLabel = document.getElementById('stat-revenue-label');
  const statRevenueVal = document.getElementById('stat-revenue-val');
  const statCapacityLabel = document.getElementById('stat-capacity-label');
  const statCapacityVal = document.getElementById('stat-capacity-val');
  const statCapacityUnit = document.getElementById('stat-capacity-unit');
  const milestoneList = document.getElementById('milestone-list');
  const floatingYearDisplay = document.getElementById('floating-year-display');
  const dashboardGrid = document.querySelector('.dashboard-grid');

  // 최근 업데이트 날짜 및 분기 갱신 필요 여부 배지 설정
  const lastUpdatedBadge = document.getElementById('last-updated-badge');
  const updateStatusBadge = document.getElementById('update-status-badge');

  if (lastUpdatedBadge && typeof lastUpdatedDate !== 'undefined') {
    lastUpdatedBadge.textContent = `최근 업데이트: ${lastUpdatedDate}`;

    if (updateStatusBadge) {
      const buildDate = new Date(lastUpdatedDate);
      const now = new Date();
      const diffDays = Math.floor((now - buildDate) / (1000 * 60 * 60 * 24));

      if (isNaN(diffDays) || diffDays < 90) {
        updateStatusBadge.className = 'status-badge up-to-date';
        updateStatusBadge.innerHTML = '🟢 최신 상태';
        updateStatusBadge.title = `데이터 생성일: ${lastUpdatedDate} (${diffDays >= 0 ? diffDays : 0}일 전 빌드됨)`;
      } else {
        updateStatusBadge.className = 'status-badge update-due';
        updateStatusBadge.innerHTML = `🟡 분기 업데이트 필요 (${diffDays}일 경과)`;
        updateStatusBadge.title = `분기 실적 데이터 갱신 권장! (${lastUpdatedDate} 생성 기준 ${diffDays}일 경과)`;
      }
    }
  }

  // 탭 스위처 버튼 명칭 리스트
  const marketTabs = ['total', 'dram', 'flash', 'logic', 'analog', 'opto', 'power', 'mcu', 'foundry', 'fabless'];

  // ─── ECharts 초기화 ──────────────────────────────────────────
  const raceChartDom = document.getElementById('race-chart');
  const raceChart = echarts.init(raceChartDom);

  const trendChartDom = document.getElementById('trend-chart');
  const trendChart = echarts.init(trendChartDom);

  // ─── 데이터 접근자 ──────────────────────────────────────────
  function getActiveTimelineData() {
    if (currentMarket === 'total') return totalTimelineData;
    if (currentMarket === 'dram') return dramTimelineData;
    if (currentMarket === 'flash') return flashTimelineData;
    if (currentMarket === 'logic') return logicTimelineData;
    if (currentMarket === 'analog') return analogTimelineData;
    if (currentMarket === 'opto') return optoTimelineData;
    if (currentMarket === 'power') return powerTimelineData;
    if (currentMarket === 'mcu') return mcuTimelineData;
    if (currentMarket === 'foundry') return foundryTimelineData;
    return fablessTimelineData;
  }

  function getActiveCompanyColors() {
    if (currentMarket === 'total') return totalCompanyColors;
    if (currentMarket === 'dram') return dramCompanyColors;
    if (currentMarket === 'flash') return flashCompanyColors;
    if (currentMarket === 'logic') return logicCompanyColors;
    if (currentMarket === 'analog') return analogCompanyColors;
    if (currentMarket === 'opto') return optoCompanyColors;
    if (currentMarket === 'power') return powerCompanyColors;
    if (currentMarket === 'mcu') return mcuCompanyColors;
    if (currentMarket === 'foundry') return foundryCompanyColors;
    return fablessCompanyColors;
  }

  // ─── 스마트 시작 인덱스 탐색 ─────────────────────────────────
  function getSmartStartIndex(timelineData) {
    for (let i = 0; i < timelineData.length; i++) {
      if (timelineData[i].total_revenue > 0 && Object.keys(timelineData[i].shares).length > 0) {
        return i;
      }
    }
    return 0;
  }

  // ─── 포맷팅 헬퍼 ─────────────────────────────────────────────
  function formatMetricValue(value) {
    if (!value || value <= 0) {
      if (currentMarket === 'dram' || currentMarket === 'flash') {
        return { val: '0', unit: 'Byte' };
      }
      if (currentMarket === 'logic') {
        return { val: '0', unit: '개 (트랜지스터)' };
      }
      if (currentMarket === 'foundry') {
        return { val: '0', unit: '장의 웨이퍼' };
      }
      return { val: '0', unit: '개' };
    }
    const k = 1000;
    
    // 용량 포맷 (DRAM / Flash)
    if (currentMarket === 'dram' || currentMarket === 'flash') {
      const sizes = ['Byte', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB'];
      const i = Math.max(0, Math.min(Math.floor(Math.log10(value) / 3), sizes.length - 1));
      const val = parseFloat((value / Math.pow(k, i)).toFixed(2));
      return { val: val.toLocaleString(), unit: sizes[i] };
    }
    
    // 개수 포맷
    let unitLabel = '개';
    if (currentMarket === 'logic') unitLabel = '개 (트랜지스터)';
    else if (currentMarket === 'total') unitLabel = '개 (통합 출하량)';
    else if (currentMarket === 'analog') unitLabel = '개 (아날로그)';
    else if (currentMarket === 'opto') unitLabel = '개 (센서/광소자)';
    else if (currentMarket === 'power') unitLabel = '개 (전력/개별소자)';
    else if (currentMarket === 'mcu') unitLabel = '개 (MCU)';
    else if (currentMarket === 'foundry') unitLabel = '장의 웨이퍼';
    else if (currentMarket === 'fabless') unitLabel = '개 (칩셋/다이)';

    const sizes = ['', 'K', 'M', 'B', 'T', 'QD', 'QT'];
    const i = Math.max(0, Math.min(Math.floor(Math.log10(value) / 3), sizes.length - 1));
    const val = parseFloat((value / Math.pow(k, i)).toFixed(2));
    return {
      val: val.toLocaleString(),
      unit: (sizes[i] ? sizes[i] : '') + unitLabel
    };
  }

  // 일관적인 축 포맷 생성기
  function makeAxisFormatter(maxValue, isRevenue) {
    if (isRevenue) {
      return function(value) {
        return '$' + value.toFixed(1) + 'B';
      };
    }

    const isBytes = (currentMarket === 'dram' || currentMarket === 'flash');
    const suffixList = isBytes 
      ? ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB']
      : ['', 'K', 'M', 'B', 'T', 'QD', 'QT'];

    const divisorList = [1, 1e3, 1e6, 1e9, 1e12, 1e15, 1e18];

    let idx = 0;
    for (let i = 0; i < divisorList.length; i++) {
      if (maxValue >= divisorList[i]) {
        idx = i;
      }
    }

    const divisor = divisorList[idx];
    const suffix = suffixList[idx];

    return function(value) {
      if (value === 0) return '0';
      return (value / divisor).toFixed(1) + suffix;
    };
  }

  // ─── 마켓 테마 설정 ──────────────────────────────────────────
  const marketThemes = {
    total:   { accent: '#38bdf8', glow: 'rgba(56, 189, 248, 0.35)', trendRight: 'rgba(255, 255, 255, 0.3)', trendRightLine: '#ffffff' },
    dram:   { accent: '#00e5ff', glow: 'rgba(0, 229, 255, 0.35)', trendRight: 'rgba(168, 85, 247, 0.4)', trendRightLine: '#a855f7' },
    flash:  { accent: '#e6007e', glow: 'rgba(230, 0, 126, 0.35)', trendRight: 'rgba(255, 98, 0, 0.4)',   trendRightLine: '#ff6200' },
    logic:  { accent: '#76b900', glow: 'rgba(118, 185, 0, 0.35)', trendRight: 'rgba(255, 179, 0, 0.4)',   trendRightLine: '#ffb300' },
    analog: { accent: '#ff9100', glow: 'rgba(255, 145, 0, 0.35)', trendRight: 'rgba(56, 189, 248, 0.4)', trendRightLine: '#38bdf8' },
    opto:   { accent: '#ff2a85', glow: 'rgba(255, 42, 133, 0.35)', trendRight: 'rgba(0, 229, 255, 0.4)',  trendRightLine: '#00e5ff' },
    power:  { accent: '#ffd600', glow: 'rgba(255, 214, 0, 0.35)', trendRight: 'rgba(0, 191, 165, 0.4)',  trendRightLine: '#00bfa5' },
    mcu:    { accent: '#00bfa5', glow: 'rgba(0, 191, 165, 0.35)', trendRight: 'rgba(168, 85, 247, 0.4)', trendRightLine: '#a855f7' },
    foundry:{ accent: '#f43f5e', glow: 'rgba(244, 63, 94, 0.35)', trendRight: 'rgba(56, 189, 248, 0.4)', trendRightLine: '#38bdf8' },
    fabless:{ accent: '#8b5cf6', glow: 'rgba(139, 92, 246, 0.35)', trendRight: 'rgba(0, 229, 255, 0.4)', trendRightLine: '#00e5ff' }
  };

  function getTheme() {
    const isLight = document.body.classList.contains('theme-light');
    if (isLight) {
      const lightThemes = {
        total:   { accent: '#0284c7', glow: 'rgba(2, 132, 199, 0.25)', trendRight: 'rgba(99, 102, 241, 0.5)', trendRightLine: '#6366f1' },
        dram:    { accent: '#0097a7', glow: 'rgba(0, 151, 167, 0.25)', trendRight: 'rgba(156, 39, 176, 0.5)', trendRightLine: '#9c27b0' },
        flash:   { accent: '#d81b60', glow: 'rgba(216, 27, 96, 0.25)', trendRight: 'rgba(2, 136, 209, 0.5)',   trendRightLine: '#0288d1' },
        logic:   { accent: '#4d7c0f', glow: 'rgba(77, 124, 15, 0.25)', trendRight: 'rgba(217, 119, 6, 0.5)',   trendRightLine: '#d97706' },
        analog:  { accent: '#ea580c', glow: 'rgba(234, 88, 12, 0.25)', trendRight: 'rgba(13, 148, 136, 0.5)', trendRightLine: '#0d9488' },
        opto:    { accent: '#db2777', glow: 'rgba(219, 39, 119, 0.25)', trendRight: 'rgba(202, 138, 4, 0.5)',  trendRightLine: '#ca8a04' },
        power:   { accent: '#ca8a04', glow: 'rgba(202, 138, 4, 0.25)', trendRight: 'rgba(37, 99, 235, 0.5)',  trendRightLine: '#2563eb' },
        mcu:     { accent: '#0f766e', glow: 'rgba(15, 118, 110, 0.25)', trendRight: 'rgba(192, 38, 211, 0.5)', trendRightLine: '#c026d3' },
        foundry: { accent: '#e11d48', glow: 'rgba(225, 29, 72, 0.25)', trendRight: 'rgba(2, 132, 199, 0.5)', trendRightLine: '#0284c7' },
        fabless: { accent: '#7c3aed', glow: 'rgba(124, 58, 237, 0.25)', trendRight: 'rgba(5, 150, 105, 0.5)', trendRightLine: '#059669' }
      };
      return lightThemes[currentMarket] || lightThemes.total;
    }
    return marketThemes[currentMarket] || marketThemes.total;
  }

  function getRightAxisName() {
    if (currentMarket === 'logic') return '트랜지스터 수량';
    if (currentMarket === 'total') return '통합 출하 지수';
    if (currentMarket === 'analog') return '아날로그 출하량';
    if (currentMarket === 'opto') return '센서 및 광소자 수량';
    if (currentMarket === 'power') return '전력/개별소자 수량';
    if (currentMarket === 'mcu') return 'MCU 출하량';
    if (currentMarket === 'foundry') return '웨이퍼 생산 용량';
    if (currentMarket === 'fabless') return '칩셋/다이 출하량';
    return '생산 용량';
  }

  // ─── 트렌드 차트 옵션 설정 ─────────────────────────────────────
  function getTrendChartOptions() {
    const timelineData = getActiveTimelineData();
    const dates = timelineData.map(d => d.label);
    const revenues = timelineData.map(d => d.total_revenue);
    const capacities = timelineData.map(d => (d.total_bytes > 0 ? d.total_bytes : null));

    const capName = getRightAxisName();
    const theme = getTheme();
    const isLight = document.body.classList.contains('theme-light');
    const textColor = isLight ? '#475569' : '#9ca3af';
    const textPrimary = isLight ? '#0f172a' : '#f3f4f6';
    const splitLineColor = isLight ? 'rgba(0, 0, 0, 0.05)' : 'rgba(255, 255, 255, 0.03)';
    const axisLineColor = isLight ? 'rgba(15, 23, 42, 0.15)' : 'rgba(255, 255, 255, 0.1)';
    const tooltipBg = isLight ? 'rgba(255, 255, 255, 0.96)' : 'rgba(13, 20, 35, 0.95)';
    const tooltipBorder = isLight ? 'rgba(15, 23, 42, 0.12)' : theme.accent + '33';

    return {
      backgroundColor: 'transparent',
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          label: {
            backgroundColor: isLight ? '#e2e8f0' : '#0a0f1d',
            color: textPrimary
          }
        },
        backgroundColor: tooltipBg,
        borderColor: tooltipBorder,
        textStyle: {
          color: textPrimary,
          fontFamily: 'Outfit'
        },
        formatter: function(params) {
          let html = '<div style="font-weight:600;margin-bottom:4px;">' + params[0].axisValue + '</div>';
          params.forEach(p => {
            if (p.value != null) {
              let valStr;
              if (p.seriesIndex === 0) {
                valStr = '$' + p.value.toFixed(2) + 'B';
              } else {
                const fmt = formatMetricValue(p.value);
                valStr = fmt.val + ' ' + fmt.unit;
              }
              html += '<div>' + p.marker + ' ' + p.seriesName + ': <b>' + valStr + '</b></div>';
            }
          });
          return html;
        }
      },
      grid: {
        top: 40,
        bottom: 30,
        left: 60,
        right: 70
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: dates,
        axisLine: {
          lineStyle: {
            color: axisLineColor
          }
        },
        axisLabel: {
          color: textColor,
          fontFamily: 'Outfit',
          interval: function(index) {
            const label = dates[index];
            if (!label) return false;
            const year = parseInt(label);
            if (isNaN(year)) return false;
            return (label.indexOf('Q') === -1) && (year % 5 === 0);
          }
        }
      },
      yAxis: [
        {
          type: 'value',
          name: '매출액 ($B)',
          nameTextStyle: { color: textColor, fontFamily: 'Outfit', fontSize: 11 },
          position: 'left',
          axisLine: {
            show: true,
            lineStyle: {
              color: theme.accent + '4D'
            }
          },
          axisLabel: {
            formatter: function(value) {
              if (value >= 1000) return '$' + (value / 1000).toFixed(0) + 'T';
              if (value >= 1) return '$' + value.toFixed(0) + 'B';
              return '$' + (value * 1000).toFixed(0) + 'M';
            },
            color: textColor,
            fontFamily: 'Outfit'
          },
          splitLine: {
            lineStyle: {
              color: splitLineColor
            }
          }
        },
        {
          type: 'log',
          name: capName,
          nameTextStyle: { color: textColor, fontFamily: 'Outfit', fontSize: 11 },
          position: 'right',
          logBase: 10,
          axisLine: {
            show: true,
            lineStyle: {
              color: theme.trendRight
            }
          },
          axisLabel: {
            formatter: function(value) {
              const fmt = formatMetricValue(value);
              return fmt.val + fmt.unit.replace(/개|Byte|트랜지스터|아날로그|센서|광소자|전력|개별소자|MCU|통합 출하량|생산 용량|출하 지수|웨이퍼|칩셋|다이|\(|\)/g, '').trim();
            },
            color: textColor,
            fontFamily: 'Outfit'
          },
          splitLine: {
            show: false
          }
        }
      ],
      series: [
        {
          name: '전체 매출액',
          type: 'line',
          yAxisIndex: 0,
          smooth: true,
          showSymbol: false,
          data: revenues,
          lineStyle: {
            color: theme.accent,
            width: 2
          },
          areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: theme.accent + '40' },
              { offset: 1, color: theme.accent + '00' }
            ])
          }
        },
        {
          name: capName,
          type: 'line',
          yAxisIndex: 1,
          smooth: true,
          showSymbol: false,
          data: capacities,
          connectNulls: true,
          lineStyle: {
            color: theme.trendRightLine,
            width: 2
          }
        }
      ]
    };
  }

  function updateTrendChartCursor() {
    if (typeof trendChart === 'undefined' || !trendChart) return;
    const timelineData = getActiveTimelineData();
    if (!timelineData || activeIndex >= timelineData.length) return;
    const label = timelineData[activeIndex].label;
    const theme = getTheme();

    trendChart.setOption({
      series: [
        {
          name: '전체 매출액',
          markLine: {
            silent: true,
            symbol: 'none',
            label: { show: false },
            lineStyle: {
              color: theme.accent,
              type: 'dashed',
              width: 1
            },
            data: [{ xAxis: label }]
          }
        },
        {
          name: getRightAxisName(),
          markLine: {
            silent: true,
            symbol: 'none',
            label: { show: false },
            lineStyle: {
              color: theme.trendRightLine,
              type: 'dashed',
              width: 1
            },
            data: [{ xAxis: label }]
          }
        }
      ]
    });
  }

  // ─── 바 차트 레이스 (실시간 랭킹 시각화) ─────────────────────────
  function updateRaceChart() {
    if (typeof raceChart === 'undefined' || !raceChart) return;

    const timelineData = getActiveTimelineData();
    if (!timelineData || timelineData.length === 0) return;

    const companyColors = getActiveCompanyColors();
    const activeData = timelineData[activeIndex];

    const totalRev = activeData.total_revenue;
    const totalCap = activeData.total_bytes;
    const shares = activeData.shares;

    const isLight = document.body.classList.contains('theme-light');
    const textColor = isLight ? '#475569' : '#9ca3af';
    const textPrimary = isLight ? '#0f172a' : '#ffffff';
    const splitLineColor = isLight ? 'rgba(0, 0, 0, 0.05)' : 'rgba(255, 255, 255, 0.04)';
    const axisLineColor = isLight ? 'rgba(15, 23, 42, 0.15)' : 'rgba(255, 255, 255, 0.1)';
    const tooltipBg = isLight ? 'rgba(255, 255, 255, 0.96)' : 'rgba(13, 20, 35, 0.95)';
    const tooltipBorder = isLight ? 'rgba(15, 23, 42, 0.12)' : getTheme().accent + '33';

    // 데이터 가드
    if (!shares || Object.keys(shares).length === 0 || totalRev <= 0) {
      raceChart.setOption({
        backgroundColor: 'transparent',
        title: {
          text: '해당 기간의 시장 데이터가 없습니다',
          left: 'center',
          top: 'center',
          textStyle: {
            color: isLight ? 'rgba(15, 23, 42, 0.3)' : 'rgba(255, 255, 255, 0.2)',
            fontFamily: 'Outfit',
            fontSize: 18,
            fontWeight: 400
          }
        },
        xAxis: { show: false },
        yAxis: { show: false },
        series: []
      }, true);
      return;
    }

    const isRev = currentMetric === 'revenue';
    const chartData = [];
    for (const [company, share] of Object.entries(shares)) {
      if (share <= 0) continue;
      let value = 0;
      if (isRev) {
        value = totalRev * (share / 100);
      } else {
        value = totalCap * (share / 100);
      }

      chartData.push({
        name: company,
        value: parseFloat(value.toFixed(4)),
        share: share,
        itemStyle: {
          color: companyColors[company] || companyColors['Others'],
          borderRadius: [0, 4, 4, 0],
          shadowBlur: 8,
          shadowColor: (companyColors[company] || companyColors['Others']) + '55'
        }
      });
    }

    chartData.sort((a, b) => b.value - a.value);

    const maxBars = currentMarket === 'total' ? 19 : 8;
    const yAxisMax = Math.max(0, Math.min(chartData.length - 1, maxBars));

    const maxValue = chartData.length > 0 ? chartData[0].value : 1;
    const axisFormatter = makeAxisFormatter(maxValue, isRev);

    const isMobile = window.innerWidth <= 600;
    const gridLeft = isMobile ? 100 : 140;
    const gridRight = isMobile ? 65 : 100;
    const labelFontSize = isMobile ? 11 : 13;
    const barLabelFontSize = isMobile ? 10.5 : 12;

    const option = {
      backgroundColor: 'transparent',
      title: {
        text: '',
        show: false
      },
      tooltip: {
        trigger: 'item',
        backgroundColor: tooltipBg,
        borderColor: tooltipBorder,
        textStyle: {
          color: isLight ? '#0f172a' : '#f3f4f6',
          fontFamily: 'Outfit',
          fontSize: 13
        },
        formatter: function(params) {
          const d = params.data;
          if (!d) return '';
          let valStr;
          if (isRev) {
            valStr = '$' + params.value.toFixed(2) + 'B';
          } else {
            const fmt = formatMetricValue(params.value);
            valStr = fmt.val + ' ' + fmt.unit;
          }
          const share = d.share != null ? d.share : 0;
          return '<b>' + d.name + '</b><br/>' +
            '점유율: ' + share.toFixed(1) + '%<br/>' +
            (isRev ? '매출액: ' : '출하량: ') + valStr;
        }
      },
      grid: {
        top: 10,
        bottom: 20,
        left: gridLeft,
        right: gridRight
      },
      xAxis: {
        type: 'value',
        max: 'dataMax',
        splitLine: {
          lineStyle: {
            color: splitLineColor
          }
        },
        axisLabel: {
          color: textColor,
          fontFamily: 'Outfit',
          fontSize: isMobile ? 10 : 11,
          formatter: axisFormatter
        }
      },
      yAxis: {
        type: 'category',
        data: chartData.map(item => item.name),
        inverse: true,
        max: yAxisMax,
        axisLine: {
          lineStyle: {
            color: axisLineColor
          }
        },
        axisLabel: {
          color: textPrimary,
          fontFamily: 'Outfit',
          fontSize: labelFontSize,
          fontWeight: 500
        },
        animationDuration: 300,
        animationDurationUpdate: 300
      },
      series: [
        {
          realtimeSort: true,
          seriesLayoutBy: 'column',
          type: 'bar',
          data: chartData,
          encode: {
            x: 'value',
            y: 'name'
          },
          label: {
            show: true,
            position: 'right',
            valueAnimation: true,
            fontFamily: 'Outfit',
            color: isLight ? '#0f172a' : '#f3f4f6',
            fontWeight: 500,
            fontSize: barLabelFontSize,
            formatter: function(params) {
              const d = params.data;
              if (!d) return '';
              return d.share.toFixed(1) + '%';
            }
          }
        }
      ],
      animationDuration: 0,
      animationDurationUpdate: playSpeed,
      animationEasing: 'linear',
      animationEasingUpdate: 'linear'
    };

    raceChart.setOption(option);
  }

  // ─── 카운터 숫자 애니메이션 ──────────────────────────────────
  function animateCounters(targetRevenue, targetCapacity) {
    if (counterAnimFrame) cancelAnimationFrame(counterAnimFrame);

    const startRevenue = animatedRevenue;
    const startCapacity = animatedCapacity;
    const duration = 400;
    const startTime = performance.now();

    function step(now) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);

      animatedRevenue = startRevenue + (targetRevenue - startRevenue) * eased;
      animatedCapacity = startCapacity + (targetCapacity - startCapacity) * eased;

      if (statRevenueVal) {
        statRevenueVal.textContent = animatedRevenue.toLocaleString(undefined, {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2
        });
      }

      const formattedCap = formatMetricValue(animatedCapacity);
      if (statCapacityVal) statCapacityVal.textContent = formattedCap.val;
      if (statCapacityUnit) statCapacityUnit.textContent = formattedCap.unit;

      if (progress < 1) {
        counterAnimFrame = requestAnimationFrame(step);
      }
    }

    counterAnimFrame = requestAnimationFrame(step);
  }

  // ─── UI 갱신 마스터 함수 ──────────────────────────────────────
  function updateUI() {
    const timelineData = getActiveTimelineData();
    if (!timelineData || timelineData.length === 0) return;
    if (activeIndex >= timelineData.length) {
      activeIndex = timelineData.length - 1;
    }
    const activeData = timelineData[activeIndex];
    if (!activeData) return;

    if (currentPeriodLabel) currentPeriodLabel.textContent = activeData.label;
    if (floatingYearDisplay) floatingYearDisplay.textContent = activeData.label;
    if (timelineSlider) timelineSlider.value = activeIndex;

    animateCounters(activeData.total_revenue, activeData.total_bytes);

    if (milestoneList) {
      let latestMilestoneIndex = -1;
      const activeMilestones = [];
      for (let i = 0; i <= activeIndex; i++) {
        if (timelineData[i] && timelineData[i].milestone && timelineData[i].milestone.trim() !== '') {
          activeMilestones.push({
            index: i,
            label: timelineData[i].label,
            text: timelineData[i].milestone
          });
          latestMilestoneIndex = i;
        }
      }

      const milestoneKey = `${activeMilestones.length}_${latestMilestoneIndex}`;
      if (milestoneList.dataset.lastKey !== milestoneKey) {
        milestoneList.dataset.lastKey = milestoneKey;
        milestoneList.innerHTML = '';

        if (activeMilestones.length === 0) {
          milestoneList.innerHTML = '<div class="milestone-item empty" style="font-style: italic; color: var(--text-muted);">아직 기록된 주요 반도체 업계 이벤트가 없습니다.</div>';
        } else {
          activeMilestones.forEach(m => {
            const item = document.createElement('div');
            item.className = 'milestone-item' + (m.index === latestMilestoneIndex ? ' active' : ' past');
            item.title = `${m.label} 시점으로 이동`;
            item.setAttribute('role', 'button');
            item.setAttribute('tabindex', '0');

            item.innerHTML = `
              <span class="milestone-year">${m.label}</span>
              <p class="milestone-text">${m.text}</p>
            `;

            item.addEventListener('click', () => {
              pauseTimeline();
              activeIndex = m.index;
              updateUI();
            });

            item.addEventListener('keydown', (e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                pauseTimeline();
                activeIndex = m.index;
                updateUI();
              }
            });

            milestoneList.appendChild(item);
          });

          setTimeout(() => {
            if (milestoneList) {
              milestoneList.scrollTop = milestoneList.scrollHeight;
            }
          }, 40);
        }
      }
    }

    updateRaceChart();
    updateTrendChartCursor();
    updateURLHash();
  }

  // ─── 재생 제어 ──────────────────────────────────────────────
  function playTimeline() {
    const timelineData = getActiveTimelineData();
    if (activeIndex >= timelineData.length - 1) {
      activeIndex = getSmartStartIndex(timelineData);
    }

    playInterval = setInterval(() => {
      const currentData = getActiveTimelineData();
      if (activeIndex < currentData.length - 1) {
        activeIndex++;
        updateUI();
      } else {
        pauseTimeline();
      }
    }, playSpeed);
  }

  function pauseTimeline() {
    isPlaying = false;
    clearInterval(playInterval);
    playInterval = null;

    pauseIcon.style.display = 'none';
    playIcon.style.display = 'block';
  }

  // ─── 마켓 전환 (탭 브라우징) ──────────────────────────────────
  function switchMarket(market) {
    if (currentMarket === market) return;
    pauseTimeline();

    dashboardGrid.classList.add('transitioning');

    setTimeout(() => {
      currentMarket = market;

      const isLight = document.body.classList.contains('theme-light');
      document.body.className = (isLight ? 'theme-light ' : '') + 'market-' + market;

      // 액티브 탭 클래스 변경
      marketTabs.forEach(t => {
        const tabEl = document.getElementById('tab-' + t);
        if (tabEl) {
          if (t === market) tabEl.classList.add('active');
          else tabEl.classList.remove('active');
        }
      });

      // 마켓 유형별 레이블 갱신
      const capName = getRightAxisName();
      toggleBytesBtn.textContent = capName;
      statCapacityLabel.textContent = '총 ' + capName + ' 출하량';

      const timelineData = getActiveTimelineData();
      timelineSlider.max = timelineData.length - 1;

      const smartStart = getSmartStartIndex(timelineData);
      activeIndex = smartStart;

      animatedRevenue = timelineData[activeIndex].total_revenue;
      animatedCapacity = timelineData[activeIndex].total_bytes;

      trendChart.setOption(getTrendChartOptions(), true);
      raceChart.clear();

      if (milestoneList) milestoneList.dataset.lastKey = '';
      updateUI();

      setTimeout(() => {
        raceChart.resize();
        trendChart.resize();
        dashboardGrid.classList.remove('transitioning');
      }, 60);
    }, 150);
  }

  // ─── URL 딥링크 ──────────────────────────────────────────────
  function updateURLHash() {
    const data = getActiveTimelineData();
    if (!data || !data[activeIndex]) return;
    const label = data[activeIndex].label.replace(/\s+/g, '_');
    const hash = `#${currentMarket}/${label}`;
    if (window.location.hash !== hash) {
      history.replaceState(null, '', hash);
    }
  }

  function parseURLHash() {
    const rawHash = window.location.hash.substring(1);
    if (!rawHash) return false;
    const parts = rawHash.split('/');
    const market = parts[0];
    const periodLabel = parts[1] ? parts[1].replace(/_/g, ' ') : '';
    if (marketTabs.includes(market)) {
      currentMarket = market;
      const data = getActiveTimelineData();
      timelineSlider.max = data.length - 1;
      let foundIdx = -1;
      if (periodLabel) {
        foundIdx = data.findIndex(d => d.label.toLowerCase() === periodLabel.toLowerCase());
      }
      if (foundIdx >= 0) {
        activeIndex = foundIdx;
      } else {
        activeIndex = getSmartStartIndex(data);
      }
      return true;
    }
    return false;
  }

  // ─── 이벤트 리스너 ───────────────────────────────────────────
  const prevBtn = document.getElementById('prev-btn');
  const nextBtn = document.getElementById('next-btn');

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      pauseTimeline();
      const timelineData = getActiveTimelineData();
      if (activeIndex > 0) {
        activeIndex--;
      } else {
        activeIndex = timelineData.length - 1;
      }
      updateUI();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      pauseTimeline();
      const timelineData = getActiveTimelineData();
      if (activeIndex < timelineData.length - 1) {
        activeIndex++;
      } else {
        activeIndex = 0;
      }
      updateUI();
    });
  }

  playBtn.addEventListener('click', () => {
    if (isPlaying) {
      pauseTimeline();
    } else {
      isPlaying = true;
      playIcon.style.display = 'none';
      pauseIcon.style.display = 'block';
      playTimeline();
    }
  });

  speedControl.addEventListener('change', (e) => {
    playSpeed = parseInt(e.target.value);
    if (isPlaying) {
      clearInterval(playInterval);
      playTimeline();
    }
    updateRaceChart();
  });

  timelineSlider.addEventListener('input', (e) => {
    pauseTimeline();
    activeIndex = parseInt(e.target.value);
    updateUI();
  });

  toggleRevenueBtn.addEventListener('click', () => {
    if (currentMetric === 'revenue') return;
    currentMetric = 'revenue';
    toggleRevenueBtn.classList.add('active');
    toggleBytesBtn.classList.remove('active');
    toggleRevenueBtn.setAttribute('aria-pressed', 'true');
    toggleBytesBtn.setAttribute('aria-pressed', 'false');
    updateRaceChart();
  });

  toggleBytesBtn.addEventListener('click', () => {
    if (currentMetric === 'bytes') return;
    currentMetric = 'bytes';
    toggleBytesBtn.classList.add('active');
    toggleRevenueBtn.classList.remove('active');
    toggleBytesBtn.setAttribute('aria-pressed', 'true');
    toggleRevenueBtn.setAttribute('aria-pressed', 'false');
    updateRaceChart();
  });

  // 탭 클릭 동적 바인딩
  marketTabs.forEach(t => {
    const tabEl = document.getElementById('tab-' + t);
    if (tabEl) {
      tabEl.addEventListener('click', () => switchMarket(t));
    }
  });

  // 해시 변경 및 브라우저 뒤로가기/앞으로가기 감지
  window.addEventListener('hashchange', () => {
    if (parseURLHash()) {
      const isLight = document.body.classList.contains('theme-light');
      document.body.className = (isLight ? 'theme-light ' : '') + 'market-' + currentMarket;
      marketTabs.forEach(t => {
        const tabEl = document.getElementById('tab-' + t);
        if (tabEl) {
          if (t === currentMarket) tabEl.classList.add('active');
          else tabEl.classList.remove('active');
        }
      });
      trendChart.setOption(getTrendChartOptions(), true);
      updateUI();
    }
  });

  let resizeTimeout;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      raceChart.resize();
      trendChart.resize();
    }, 100);
  });

  // ─── 테마 전환 토글 ──────────────────────────────────────────
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  const sunIcon = document.getElementById('theme-sun-icon');
  const moonIcon = document.getElementById('theme-moon-icon');

  function applyTheme(themeName) {
    if (themeName === 'light') {
      document.body.classList.add('theme-light');
      if (sunIcon) sunIcon.style.display = 'none';
      if (moonIcon) moonIcon.style.display = 'inline-block';
    } else {
      document.body.classList.remove('theme-light');
      if (sunIcon) sunIcon.style.display = 'inline-block';
      if (moonIcon) moonIcon.style.display = 'none';
    }
  }

  const savedTheme = localStorage.getItem('simarket_theme') || 'dark';
  applyTheme(savedTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const isCurrentlyLight = document.body.classList.contains('theme-light');
      const newTheme = isCurrentlyLight ? 'dark' : 'light';
      applyTheme(newTheme);
      localStorage.setItem('simarket_theme', newTheme);

      updateRaceChart();
      if (typeof trendChart !== 'undefined' && trendChart) {
        trendChart.setOption(getTrendChartOptions(), true);
      }
    });
  }

  // ─── 트렌드 차트 클릭 시 해당 분기 이동 (Click-to-Seek) ─────────
  trendChart.on('click', (params) => {
    let targetLabel = null;
    if (params.name) {
      targetLabel = params.name;
    } else if (params.data && params.data[0]) {
      targetLabel = params.data[0];
    }
    if (targetLabel) {
      const data = getActiveTimelineData();
      const idx = data.findIndex(d => d.label === targetLabel);
      if (idx >= 0) {
        pauseTimeline();
        activeIndex = idx;
        updateUI();
      }
    }
  });

  trendChart.getZr().on('click', (params) => {
    const pointInPixel = [params.offsetX, params.offsetY];
    if (trendChart.containPixel('grid', pointInPixel)) {
      const xIndex = trendChart.convertFromPixel({ seriesIndex: 0 }, pointInPixel)[0];
      const data = getActiveTimelineData();
      const rounded = Math.round(xIndex);
      if (rounded >= 0 && rounded < data.length) {
        pauseTimeline();
        activeIndex = rounded;
        updateUI();
      }
    }
  });

  // ─── 키보드 단축키 지원 (Presentation Shortcuts) ─────────────────
  window.addEventListener('keydown', (e) => {
    const activeEl = document.activeElement;
    const tag = activeEl ? activeEl.tagName.toLowerCase() : '';
    if (tag === 'input' || tag === 'textarea' || tag === 'select') return;

    if (e.code === 'Space') {
      e.preventDefault();
      playBtn.click();
    } else if (e.code === 'ArrowLeft') {
      e.preventDefault();
      if (prevBtn) prevBtn.click();
    } else if (e.code === 'ArrowRight') {
      e.preventDefault();
      if (nextBtn) nextBtn.click();
    } else if (e.code === 'ArrowUp') {
      e.preventDefault();
      if (speedControl.selectedIndex > 0) {
        speedControl.selectedIndex--;
        speedControl.dispatchEvent(new Event('change'));
        showToast(`재생 속도: ${speedControl.options[speedControl.selectedIndex].text}`);
      }
    } else if (e.code === 'ArrowDown') {
      e.preventDefault();
      if (speedControl.selectedIndex < speedControl.options.length - 1) {
        speedControl.selectedIndex++;
        speedControl.dispatchEvent(new Event('change'));
        showToast(`재생 속도: ${speedControl.options[speedControl.selectedIndex].text}`);
      }
    } else if (e.key === 'm' || e.key === 'M') {
      e.preventDefault();
      if (currentMetric === 'revenue') {
        toggleBytesBtn.click();
      } else {
        toggleRevenueBtn.click();
      }
    } else if (e.key === 't' || e.key === 'T') {
      e.preventDefault();
      if (themeToggleBtn) themeToggleBtn.click();
    }
  });

  // ─── 토스트 알림 헬퍼 ──────────────────────────────────────────
  const toastContainer = document.getElementById('toast-container');
  function showToast(message, icon = '✓') {
    if (!toastContainer) return;
    const toast = document.createElement('div');
    toast.className = 'toast-msg';
    toast.innerHTML = `<span style="font-weight:700;">${icon}</span> <span>${message}</span>`;
    toastContainer.appendChild(toast);
    requestAnimationFrame(() => toast.classList.add('show'));
    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 300);
    }, 2400);
  }

  // ─── 차트 고화질 PNG 이미지 내보내기 ───────────────────────────
  const exportPngBtn = document.getElementById('export-png-btn');
  if (exportPngBtn) {
    exportPngBtn.addEventListener('click', () => {
      const isLight = document.body.classList.contains('theme-light');
      const data = getActiveTimelineData();
      const periodLabel = (data && data[activeIndex]) ? data[activeIndex].label.replace(/\s+/g, '_') : 'period';
      const filename = `SiMarket_${currentMarket}_${periodLabel}.png`;

      const dataUrl = raceChart.getDataURL({
        type: 'png',
        pixelRatio: 2,
        backgroundColor: isLight ? '#f8fafc' : '#0a0f1d'
      });

      const downloadLink = document.createElement('a');
      downloadLink.href = dataUrl;
      downloadLink.download = filename;
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);

      showToast(`이미지 저장 완료: ${filename}`);
    });
  }

  // ─── 현재 시점 공유 링크 복사 ─────────────────────────────────
  const shareLinkBtn = document.getElementById('share-link-btn');
  if (shareLinkBtn) {
    shareLinkBtn.addEventListener('click', () => {
      updateURLHash();
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(window.location.href).then(() => {
          showToast('공유 링크가 클립보드에 복사되었습니다!');
        }).catch(() => {
          fallbackCopy();
        });
      } else {
        fallbackCopy();
      }

      function fallbackCopy() {
        const dummy = document.createElement('input');
        dummy.value = window.location.href;
        document.body.appendChild(dummy);
        dummy.select();
        document.execCommand('copy');
        document.body.removeChild(dummy);
        showToast('공유 링크가 클립보드에 복사되었습니다!');
      }
    });
  }

  // ─── 초기 구동 ───────────────────────────────────────────────
  const hasHash = parseURLHash();
  const themeClass = document.body.classList.contains('theme-light') ? 'theme-light market-' + currentMarket : 'market-' + currentMarket;
  document.body.className = themeClass;

  marketTabs.forEach(t => {
    const tabEl = document.getElementById('tab-' + t);
    if (tabEl) {
      if (t === currentMarket) tabEl.classList.add('active');
      else tabEl.classList.remove('active');
    }
  });

  const initData = getActiveTimelineData();
  timelineSlider.max = initData.length - 1;
  if (!hasHash) {
    activeIndex = getSmartStartIndex(initData);
  }

  animatedRevenue = initData[activeIndex].total_revenue;
  animatedCapacity = initData[activeIndex].total_bytes;

  const capName = getRightAxisName();
  toggleBytesBtn.textContent = capName;
  statCapacityLabel.textContent = '총 ' + capName + ' 출하량';

  trendChart.setOption(getTrendChartOptions());
  updateUI();
});
