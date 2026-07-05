// app_ko.js - 글로벌 반도체 시장 대시보드 로직 (8개 시장 한국어 판)

document.addEventListener('DOMContentLoaded', () => {
  // ─── 애플리케이션 상태 ───────────────────────────────────────
  let currentMarket = 'total'; // 'total', 'dram', 'flash', 'logic', 'analog', 'opto', 'power', 'mcu'
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

  // 탭 스위처 버튼 명칭 리스트
  const marketTabs = ['total', 'dram', 'flash', 'logic', 'analog', 'opto', 'power', 'mcu'];

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
    return mcuTimelineData;
  }

  function getActiveCompanyColors() {
    if (currentMarket === 'total') return totalCompanyColors;
    if (currentMarket === 'dram') return dramCompanyColors;
    if (currentMarket === 'flash') return flashCompanyColors;
    if (currentMarket === 'logic') return logicCompanyColors;
    if (currentMarket === 'analog') return analogCompanyColors;
    if (currentMarket === 'opto') return optoCompanyColors;
    if (currentMarket === 'power') return powerCompanyColors;
    return mcuCompanyColors;
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
    total:  { accent: '#38bdf8', glow: 'rgba(56, 189, 248, 0.35)', trendRight: 'rgba(255, 255, 255, 0.3)', trendRightLine: '#ffffff' },
    dram:  { accent: '#00e5ff', glow: 'rgba(0, 229, 255, 0.35)', trendRight: 'rgba(168, 85, 247, 0.4)', trendRightLine: '#a855f7' },
    flash: { accent: '#e6007e', glow: 'rgba(230, 0, 126, 0.35)', trendRight: 'rgba(255, 98, 0, 0.4)',   trendRightLine: '#ff6200' },
    logic: { accent: '#76b900', glow: 'rgba(118, 185, 0, 0.35)', trendRight: 'rgba(255, 179, 0, 0.4)',   trendRightLine: '#ffb300' },
    analog: { accent: '#ff9100', glow: 'rgba(255, 145, 0, 0.35)', trendRight: 'rgba(56, 189, 248, 0.4)', trendRightLine: '#38bdf8' },
    opto: { accent: '#ff2a85', glow: 'rgba(255, 42, 133, 0.35)', trendRight: 'rgba(0, 229, 255, 0.4)',  trendRightLine: '#00e5ff' },
    power: { accent: '#ffd600', glow: 'rgba(255, 214, 0, 0.35)', trendRight: 'rgba(0, 191, 165, 0.4)',  trendRightLine: '#00bfa5' },
    mcu: { accent: '#00bfa5', glow: 'rgba(0, 191, 165, 0.35)', trendRight: 'rgba(168, 85, 247, 0.4)', trendRightLine: '#a855f7' }
  };

  function getTheme() {
    return marketThemes[currentMarket] || marketThemes.total;
  }

  function getRightAxisName() {
    if (currentMarket === 'logic') return '트랜지스터 수량';
    if (currentMarket === 'total') return '통합 출하 지수';
    if (currentMarket === 'analog') return '아날로그 출하량';
    if (currentMarket === 'opto') return '센서 및 광소자 수량';
    if (currentMarket === 'power') return '전력/개별소자 수량';
    if (currentMarket === 'mcu') return 'MCU 출하량';
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

    return {
      backgroundColor: 'transparent',
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          label: {
            backgroundColor: '#0a0f1d'
          }
        },
        backgroundColor: 'rgba(13, 20, 35, 0.95)',
        borderColor: theme.accent + '33',
        textStyle: {
          color: '#f3f4f6',
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
            color: 'rgba(255, 255, 255, 0.1)'
          }
        },
        axisLabel: {
          color: '#9ca3af',
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
          nameTextStyle: { color: '#9ca3af', fontFamily: 'Outfit', fontSize: 11 },
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
            color: '#9ca3af',
            fontFamily: 'Outfit'
          },
          splitLine: {
            lineStyle: {
              color: 'rgba(255, 255, 255, 0.03)'
            }
          }
        },
        {
          type: 'log',
          name: capName,
          nameTextStyle: { color: '#9ca3af', fontFamily: 'Outfit', fontSize: 11 },
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
              return fmt.val + fmt.unit.replace(/개|Byte|트랜지스터|아날로그|센서|광소자|전력|개별소자|MCU|통합 출하량|생산 용량|출하 지수|\(|\)/g, '').trim();
            },
            color: '#9ca3af',
            fontFamily: 'Outfit'
          },
          splitLine: {
            show: false
          }
        }
      ],
      series: [
        {
          name: '총 매출액',
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
          name: '총 매출액',
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

    // 데이터 가드
    if (!shares || Object.keys(shares).length === 0 || totalRev <= 0) {
      raceChart.setOption({
        backgroundColor: 'transparent',
        title: {
          text: '해당 기간의 시장 데이터가 없습니다',
          left: 'center',
          top: 'center',
          textStyle: {
            color: 'rgba(255,255,255,0.2)',
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

    // 전체보기인 경우 상위 20대 기업, 개별 영역은 10대 기업 노출
    const maxBars = currentMarket === 'total' ? 19 : 8;
    const yAxisMax = Math.max(0, Math.min(chartData.length - 1, maxBars));

    const maxValue = chartData.length > 0 ? chartData[0].value : 1;
    const axisFormatter = makeAxisFormatter(maxValue, isRev);
    const theme = getTheme();

    const option = {
      backgroundColor: 'transparent',
      title: {
        text: '',
        show: false
      },
      tooltip: {
        trigger: 'item',
        backgroundColor: 'rgba(13, 20, 35, 0.95)',
        borderColor: theme.accent + '33',
        textStyle: {
          color: '#f3f4f6',
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
        left: 140,
        right: 100
      },
      xAxis: {
        type: 'value',
        max: 'dataMax',
        splitLine: {
          lineStyle: {
            color: 'rgba(255, 255, 255, 0.04)'
          }
        },
        axisLabel: {
          color: '#9ca3af',
          fontFamily: 'Outfit',
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
            color: 'rgba(255, 255, 255, 0.1)'
          }
        },
        axisLabel: {
          color: '#fff',
          fontFamily: 'Outfit',
          fontSize: 13,
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
            color: '#f3f4f6',
            fontWeight: 500,
            fontSize: 12,
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
      milestoneList.innerHTML = '';
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

      if (activeMilestones.length === 0) {
        milestoneList.innerHTML = '<div class="milestone-item empty" style="font-style: italic; color: var(--text-muted);">아직 기록된 주요 반도체 업계 이벤트가 없습니다.</div>';
      } else {
        activeMilestones.forEach(m => {
          const item = document.createElement('div');
          item.className = 'milestone-item';
          
          if (m.index === latestMilestoneIndex) {
            item.classList.add('active');
          } else {
            item.classList.add('past');
          }

          item.innerHTML = `
            <span class="milestone-year">${m.label}</span>
            <p class="milestone-text">${m.text}</p>
          `;
          milestoneList.appendChild(item);
        });

        setTimeout(() => {
          if (milestoneList) {
            milestoneList.scrollTop = milestoneList.scrollHeight;
          }
        }, 50);
      }
    }

    updateRaceChart();
    updateTrendChartCursor();
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

      document.body.className = 'market-' + market;

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

      updateUI();

      setTimeout(() => {
        raceChart.resize();
        trendChart.resize();
        dashboardGrid.classList.remove('transitioning');
      }, 60);
    }, 150);
  }

  // ─── 이벤트 리스너 ───────────────────────────────────────────
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

  let resizeTimeout;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      raceChart.resize();
      trendChart.resize();
    }, 100);
  });

  // ─── 초기 구동 ───────────────────────────────────────────────
  document.body.className = 'market-total';

  const initData = getActiveTimelineData();
  timelineSlider.max = initData.length - 1;
  activeIndex = getSmartStartIndex(initData);

  animatedRevenue = initData[activeIndex].total_revenue;
  animatedCapacity = initData[activeIndex].total_bytes;

  const capName = getRightAxisName();
  toggleBytesBtn.textContent = capName;
  statCapacityLabel.textContent = '총 ' + capName + ' 출하량';

  trendChart.setOption(getTrendChartOptions());
  updateUI();
});
