// app_ko.js - Semiconductor Market Dashboard Logic (Korean Localized)

document.addEventListener('DOMContentLoaded', () => {
  // ─── Application State ───────────────────────────────────────
  let currentMarket = 'dram'; // 'dram', 'flash', or 'logic'
  let activeIndex = 0;
  let isPlaying = false;
  let playInterval = null;
  let playSpeed = 1000; // ms per step
  let currentMetric = 'revenue'; // 'revenue' or 'bytes'

  // Animated counter state
  let animatedRevenue = 0;
  let animatedCapacity = 0;
  let counterAnimFrame = null;

  // ─── DOM Elements ────────────────────────────────────────────
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

  // Tab Switcher Buttons
  const tabDram = document.getElementById('tab-dram');
  const tabFlash = document.getElementById('tab-flash');
  const tabLogic = document.getElementById('tab-logic');

  // ─── Initialize ECharts ──────────────────────────────────────
  const raceChartDom = document.getElementById('race-chart');
  const raceChart = echarts.init(raceChartDom);

  const trendChartDom = document.getElementById('trend-chart');
  const trendChart = echarts.init(trendChartDom);

  // ─── Data Accessors ──────────────────────────────────────────
  function getActiveTimelineData() {
    if (currentMarket === 'dram') return dramTimelineData;
    if (currentMarket === 'flash') return flashTimelineData;
    return logicTimelineData;
  }

  function getActiveCompanyColors() {
    if (currentMarket === 'dram') return dramCompanyColors;
    if (currentMarket === 'flash') return flashCompanyColors;
    return logicCompanyColors;
  }

  // ─── Smart Start Index ───────────────────────────────────────
  // Find the first index with non-zero revenue (skips empty early years)
  function getSmartStartIndex(timelineData) {
    for (let i = 0; i < timelineData.length; i++) {
      if (timelineData[i].total_revenue > 0 && Object.keys(timelineData[i].shares).length > 0) {
        return i;
      }
    }
    return 0;
  }

  // ─── Formatting Helpers ──────────────────────────────────────
  function formatBytes(bytes) {
    if (!bytes || bytes <= 0) return { val: '0', unit: 'Byte' };
    const k = 1000;
    const sizes = ['Byte', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB'];
    const i = Math.max(0, Math.min(Math.floor(Math.log10(bytes) / 3), sizes.length - 1));
    const val = parseFloat((bytes / Math.pow(k, i)).toFixed(2));
    return {
      val: val.toLocaleString(),
      unit: sizes[i]
    };
  }

  function formatTransistors(count) {
    if (!count || count <= 0) return { val: '0', unit: '개' };
    const k = 1000;
    const sizes = ['', 'K', 'M', 'B', 'T', 'QD', 'QT', 'SX'];
    const i = Math.max(0, Math.min(Math.floor(Math.log10(count) / 3), sizes.length - 1));
    const val = parseFloat((count / Math.pow(k, i)).toFixed(2));
    return {
      val: val.toLocaleString(),
      unit: (sizes[i] ? sizes[i] : '') + '개 (트랜지스터)'
    };
  }

  function formatMetricValue(value) {
    if (currentMarket === 'logic') {
      return formatTransistors(value);
    }
    return formatBytes(value);
  }

  // Fixed-scale axis formatter — picks one unit for all ticks based on max value
  function makeAxisFormatter(maxValue, isRevenue) {
    if (isRevenue) {
      return function(value) {
        return '$' + value.toFixed(1) + 'B';
      };
    }

    const isLogic = currentMarket === 'logic';

    if (isLogic) {
      // Transistor units
      const units = [
        { threshold: 1e21, divisor: 1e21, suffix: 'SX' },
        { threshold: 1e18, divisor: 1e18, suffix: 'QT' },
        { threshold: 1e15, divisor: 1e15, suffix: 'QD' },
        { threshold: 1e12, divisor: 1e12, suffix: 'T' },
        { threshold: 1e9,  divisor: 1e9,  suffix: 'B' },
        { threshold: 1e6,  divisor: 1e6,  suffix: 'M' },
        { threshold: 1e3,  divisor: 1e3,  suffix: 'K' },
      ];
      let chosenUnit = { divisor: 1, suffix: '' };
      for (const u of units) {
        if (maxValue >= u.threshold) { chosenUnit = u; break; }
      }
      return function(value) {
        if (value === 0) return '0';
        return (value / chosenUnit.divisor).toFixed(1) + chosenUnit.suffix;
      };
    } else {
      // Byte units
      const units = [
        { threshold: 1e18, divisor: 1e18, suffix: 'EB' },
        { threshold: 1e15, divisor: 1e15, suffix: 'PB' },
        { threshold: 1e12, divisor: 1e12, suffix: 'TB' },
        { threshold: 1e9,  divisor: 1e9,  suffix: 'GB' },
        { threshold: 1e6,  divisor: 1e6,  suffix: 'MB' },
        { threshold: 1e3,  divisor: 1e3,  suffix: 'KB' },
      ];
      let chosenUnit = { divisor: 1, suffix: 'B' };
      for (const u of units) {
        if (maxValue >= u.threshold) { chosenUnit = u; break; }
      }
      return function(value) {
        if (value === 0) return '0';
        return (value / chosenUnit.divisor).toFixed(1) + chosenUnit.suffix;
      };
    }
  }

  // ─── Market Theme Colors ─────────────────────────────────────
  const marketThemes = {
    dram:  { accent: '#00e5ff', glow: 'rgba(0, 229, 255, 0.35)', trendRight: 'rgba(168, 85, 247, 0.4)', trendRightLine: '#a855f7' },
    flash: { accent: '#e6007e', glow: 'rgba(230, 0, 126, 0.35)', trendRight: 'rgba(255, 98, 0, 0.4)',   trendRightLine: '#ff6200' },
    logic: { accent: '#76b900', glow: 'rgba(118, 185, 0, 0.35)', trendRight: 'rgba(255, 179, 0, 0.4)',   trendRightLine: '#ffb300' }
  };

  function getTheme() {
    return marketThemes[currentMarket] || marketThemes.dram;
  }

  // ─── Trend Chart ─────────────────────────────────────────────
  function getTrendChartOptions() {
    const timelineData = getActiveTimelineData();
    const dates = timelineData.map(d => d.label);
    const revenues = timelineData.map(d => d.total_revenue);
    const capacities = timelineData.map(d => (d.total_bytes > 0 ? d.total_bytes : null));

    const isLogic = currentMarket === 'logic';
    const capName = isLogic ? '트랜지스터 수량' : '생산 용량';
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
              let seriesName = p.seriesName;
              if (seriesName === 'Total Revenue') {
                seriesName = '총 매출액';
                valStr = '$' + p.value.toFixed(2) + 'B (십억 달러)';
              } else if (seriesName === 'Total Transistors') {
                seriesName = '총 트랜지스터 수량';
                const fmt = formatMetricValue(p.value);
                valStr = fmt.val + ' ' + fmt.unit;
              } else if (seriesName === 'Total Capacity') {
                seriesName = '총 생산 용량';
                const fmt = formatMetricValue(p.value);
                valStr = fmt.val + ' ' + fmt.unit;
              } else {
                valStr = p.value;
              }
              html += '<div>' + p.marker + ' ' + seriesName + ': <b>' + valStr + '</b></div>';
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
              if (isLogic) {
                if (value >= 1e21) return (value / 1e21).toFixed(0) + 'SX';
                if (value >= 1e18) return (value / 1e18).toFixed(0) + 'QT';
                if (value >= 1e15) return (value / 1e15).toFixed(0) + 'QD';
                if (value >= 1e12) return (value / 1e12).toFixed(0) + 'T';
                if (value >= 1e9)  return (value / 1e9).toFixed(0)  + 'B';
                if (value >= 1e6)  return (value / 1e6).toFixed(0)  + 'M';
                if (value >= 1e3)  return (value / 1e3).toFixed(0)  + 'K';
                return value;
              } else {
                if (value >= 1e18) return (value / 1e18).toFixed(0) + 'EB';
                if (value >= 1e15) return (value / 1e15).toFixed(0) + 'PB';
                if (value >= 1e12) return (value / 1e12).toFixed(0) + 'TB';
                if (value >= 1e9)  return (value / 1e9).toFixed(0)  + 'GB';
                if (value >= 1e6)  return (value / 1e6).toFixed(0)  + 'MB';
                if (value >= 1e3)  return (value / 1e3).toFixed(0)  + 'KB';
                return value;
              }
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
          name: 'Total Revenue',
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
          name: isLogic ? 'Total Transistors' : 'Total Capacity',
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

  // Clear markLine properly by using full option replacement
  function updateTrendChartCursor() {
    if (typeof trendChart === 'undefined' || !trendChart) return;
    const timelineData = getActiveTimelineData();
    if (!timelineData || activeIndex >= timelineData.length) return;
    const label = timelineData[activeIndex].label;

    trendChart.setOption({
      series: [
        {
          name: 'Total Revenue',
          markLine: {
            silent: true,
            symbol: 'none',
            label: { show: false },
            lineStyle: {
              color: 'rgba(255, 179, 0, 0.8)',
              type: 'dashed',
              width: 1.5
            },
            data: [{ xAxis: label }]
          }
        }
      ]
    });
  }

  // ─── Race Bar Chart ──────────────────────────────────────────
  function updateRaceChart() {
    if (typeof raceChart === 'undefined' || !raceChart) return;
    const timelineData = getActiveTimelineData();
    const companyColors = getActiveCompanyColors();

    if (!timelineData || activeIndex >= timelineData.length) return;
    const activeData = timelineData[activeIndex];

    const totalRev = activeData.total_revenue;
    const totalCap = activeData.total_bytes;
    const shares = activeData.shares;

    if (!shares || Object.keys(shares).length === 0 || totalRev <= 0) {
      raceChart.setOption({
        backgroundColor: 'transparent',
        title: {
          text: '이 기간의 시장 데이터가 없습니다',
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
        value: value,
        name: company,
        share: share,
        itemStyle: {
          color: companyColors[company] || '#778899',
          borderRadius: [0, 4, 4, 0]
        }
      });
    }

    chartData.sort((a, b) => b.value - a.value);

    // Fixed-scale logic for x-axis
    const maxVal = chartData.length > 0 ? Math.max(...chartData.map(d => d.value)) : 100;
    const axisFormatter = makeAxisFormatter(maxVal, isRev);

    const theme = getTheme();
    const yAxisMax = Math.min(10, chartData.length - 1);

    const option = {
      backgroundColor: 'transparent',
      title: { show: false },
      tooltip: {
        show: true,
        trigger: 'item',
        backgroundColor: 'rgba(13, 20, 35, 0.95)',
        borderColor: theme.accent + '33',
        textStyle: {
          color: '#f3f4f6',
          fontFamily: 'Outfit'
        },
        formatter: function(params) {
          const activeData = timelineData[activeIndex];
          const share = activeData.shares[params.name] || 0;
          
          let valStr = '';
          if (isRev) {
            valStr = '$' + params.value.toFixed(2) + 'B (십억 달러)';
          } else {
            const fmt = formatMetricValue(params.value);
            valStr = fmt.val + ' ' + fmt.unit;
          }
          
          return `<div style="font-weight:600;margin-bottom:4px;">${params.name}</div>
                  <div>시장 점유율: <b>${share}%</b></div>
                  <div>${isRev ? '매출액' : (currentMarket === 'logic' ? '트랜지스터 수량' : '생산 용량')}: <b>${valStr}</b></div>`;
        }
      },
      grid: {
        top: 20,
        bottom: 30,
        left: 110,
        right: 80
      },
      xAxis: {
        type: 'value',
        axisLabel: {
          formatter: axisFormatter,
          color: '#9ca3af',
          fontFamily: 'Outfit',
          fontSize: 11
        },
        splitLine: {
          lineStyle: {
            color: 'rgba(255, 255, 255, 0.03)'
          }
        }
      },
      yAxis: {
        type: 'category',
        data: chartData.map(d => d.name),
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
          label: {
            show: true,
            position: 'right',
            valueAnimation: true,
            color: '#f3f4f6',
            fontFamily: 'JetBrains Mono',
            fontWeight: 600,
            fontSize: 11,
            formatter: function(params) {
              const d = params.data;
              if (!d) return '';
              const share = d.share != null ? d.share : 0;
              const val = typeof params.value === 'number' ? params.value : 0;
              if (isRev) {
                return '$' + val.toFixed(2) + 'B (' + share.toFixed(1) + '%)';
              } else {
                const formatted = formatMetricValue(val);
                return formatted.val + ' ' + formatted.unit + ' (' + share.toFixed(1) + '%)';
              }
            }
          },
          barMaxWidth: 28
        }
      ],
      animationDuration: 0,
      animationDurationUpdate: isPlaying ? playSpeed : 500,
      animationEasing: 'linear',
      animationEasingUpdate: 'linear'
    };

    raceChart.setOption(option);
  }

  // ─── Animated Counter ────────────────────────────────────────
  function animateCounters(targetRevenue, targetCapacity) {
    if (counterAnimFrame) cancelAnimationFrame(counterAnimFrame);

    const startRevenue = animatedRevenue;
    const startCapacity = animatedCapacity;
    const duration = 400; // ms
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

  // ─── Update UI (Master) ──────────────────────────────────────
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
        milestoneList.innerHTML = '<div class="milestone-item empty" style="font-style: italic; color: var(--text-muted);">아직 기록된 주요 사건이 없습니다.</div>';
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

  // ─── Playback Controls ───────────────────────────────────────
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

  // ─── Market Switcher (Tabs) ──────────────────────────────────
  function switchMarket(market) {
    if (currentMarket === market) return;
    pauseTimeline();

    dashboardGrid.classList.add('transitioning');

    setTimeout(() => {
      currentMarket = market;

      document.body.className = 'market-' + market;

      [tabDram, tabFlash, tabLogic].forEach(tab => tab.classList.remove('active'));
      if (market === 'dram') tabDram.classList.add('active');
      else if (market === 'flash') tabFlash.classList.add('active');
      else if (market === 'logic') tabLogic.classList.add('active');

      const isLogic = market === 'logic';
      toggleBytesBtn.textContent = isLogic ? '트랜지스터 수량' : '생산 용량 (Byte)';
      statCapacityLabel.textContent = isLogic ? '전체 트랜지스터 수량' : '전체 생산 용량';

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

  // ─── Event Listeners ─────────────────────────────────────────
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

  tabDram.addEventListener('click', () => switchMarket('dram'));
  tabFlash.addEventListener('click', () => switchMarket('flash'));
  tabLogic.addEventListener('click', () => switchMarket('logic'));

  let resizeTimeout;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      raceChart.resize();
      trendChart.resize();
    }, 100);
  });

  // ─── Initial Execution ───────────────────────────────────────
  document.body.className = 'market-dram';

  const initData = getActiveTimelineData();
  timelineSlider.max = initData.length - 1;
  activeIndex = getSmartStartIndex(initData);

  animatedRevenue = initData[activeIndex].total_revenue;
  animatedCapacity = initData[activeIndex].total_bytes;

  trendChart.setOption(getTrendChartOptions());
  updateUI();
});
