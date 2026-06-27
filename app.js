// app.js - Semiconductor Market Dashboard Logic (Bug-fixed & Enhanced)

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
    if (!bytes || bytes <= 0) return { val: '0', unit: 'Bytes' };
    const k = 1000;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB'];
    const i = Math.max(0, Math.min(Math.floor(Math.log10(bytes) / 3), sizes.length - 1));
    const val = parseFloat((bytes / Math.pow(k, i)).toFixed(2));
    return {
      val: val.toLocaleString(),
      unit: sizes[i]
    };
  }

  function formatTransistors(count) {
    if (!count || count <= 0) return { val: '0', unit: 'Transistors' };
    const k = 1000;
    const sizes = ['', 'K', 'M', 'B', 'T', 'QD', 'QT', 'SX'];
    const i = Math.max(0, Math.min(Math.floor(Math.log10(count) / 3), sizes.length - 1));
    const val = parseFloat((count / Math.pow(k, i)).toFixed(2));
    return {
      val: val.toLocaleString(),
      unit: (sizes[i] ? sizes[i] + ' ' : '') + 'Transistors'
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

  // makeBarLabelFormatter removed in favor of inline 2D array formatting

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
    // BUG FIX #2: Replace 0 with null for log axis (log(0) is undefined)
    const capacities = timelineData.map(d => (d.total_bytes > 0 ? d.total_bytes : null));

    const isLogic = currentMarket === 'logic';
    const capName = isLogic ? 'Transistors' : 'Capacity';
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
            // Show every ~5th year label for readability
            const label = dates[index];
            if (!label) return false;
            const year = parseInt(label);
            if (isNaN(year)) return false;
            // Show full year labels (not quarters) at ~5-year intervals
            return (label.indexOf('Q') === -1) && (year % 5 === 0);
          }
        }
      },
      yAxis: [
        {
          type: 'value',
          name: 'Revenue ($B)',
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
          connectNulls: true, // BUG FIX #2: Connect line across null gaps
          lineStyle: {
            color: theme.trendRightLine,
            width: 2
          }
        }
      ]
    };
  }

  // BUG FIX #8: Clear markLine properly by using full option replacement for markLine
  function updateTrendChartCursor() {
    if (typeof trendChart === 'undefined' || !trendChart) return;
    const timelineData = getActiveTimelineData();
    if (!timelineData || activeIndex >= timelineData.length) return;
    const label = timelineData[activeIndex].label;
    const theme = getTheme();

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

    // BUG FIX #1: Guard against empty shares
    if (!shares || Object.keys(shares).length === 0 || totalRev <= 0) {
      raceChart.setOption({
        backgroundColor: 'transparent',
        title: {
          text: 'No market data for this period',
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
      }, true); // true = notMerge to clear old chart
      return;
    }

    // Calculate sizes based on selected metric
    const isRev = currentMetric === 'revenue';
    const chartData = [];
    for (const [company, share] of Object.entries(shares)) {
      if (share <= 0) continue; // Skip zero-share companies for cleaner chart
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

    // Sort descending by value in JS
    chartData.sort((a, b) => b.value - a.value);

    // BUG FIX #5: Dynamic yAxis max based on actual data count (at least 0)
    const yAxisMax = Math.max(0, Math.min(chartData.length - 1, 8));

    // BUG FIX #4: Consistent scale formatter
    const maxValue = chartData.length > 0 ? chartData[0].value : 1;
    const axisFormatter = makeAxisFormatter(maxValue, isRev);

    const theme = getTheme();

    const option = {
      backgroundColor: 'transparent',
      title: {
        text: '', // clear empty placeholder if it was there
        show: false
      },
      // BUG FIX #6: Add tooltip
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
            'Share: ' + share.toFixed(1) + '%<br/>' +
            (isRev ? 'Revenue: ' : 'Capacity: ') + valStr;
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
        data: chartData.map(item => item.name), // Set yAxis categories explicitly every frame to prevent locked category scales
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
      // BUG FIX #3: Use current playSpeed for animation duration
      animationDurationUpdate: isPlaying ? playSpeed : 500,
      animationEasing: 'linear',
      animationEasingUpdate: 'linear'
    };

    // Remove true (notMerge) parameter to enable ECharts option merging for smooth transition animations
    raceChart.setOption(option);
  }

  // ─── Animated Counter ────────────────────────────────────────
  // IMPROVEMENT #13: Smooth interpolated number counting animation
  function animateCounters(targetRevenue, targetCapacity) {
    if (counterAnimFrame) cancelAnimationFrame(counterAnimFrame);

    const startRevenue = animatedRevenue;
    const startCapacity = animatedCapacity;
    const duration = 400; // ms
    const startTime = performance.now();

    function step(now) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
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

    // Label and slider update
    if (currentPeriodLabel) currentPeriodLabel.textContent = activeData.label;
    if (floatingYearDisplay) floatingYearDisplay.textContent = activeData.label;
    if (timelineSlider) timelineSlider.value = activeIndex;

    // Stats cards — animated (Improvement #13)
    animateCounters(activeData.total_revenue, activeData.total_bytes);

    // Milestone stream update
    if (milestoneList) {
      milestoneList.innerHTML = '';
      let latestMilestoneIndex = -1;

      // Find all milestones up to the current activeIndex
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
        milestoneList.innerHTML = '<div class="milestone-item empty" style="font-style: italic; color: var(--text-muted);">No major industry events recorded yet.</div>';
      } else {
        activeMilestones.forEach(m => {
          const item = document.createElement('div');
          item.className = 'milestone-item';
          
          // If this is the latest milestone, mark it as active; otherwise past (grayed out)
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

        // Scroll container to the bottom so older events scroll out upwards
        setTimeout(() => {
          if (milestoneList) {
            milestoneList.scrollTop = milestoneList.scrollHeight;
          }
        }, 50);
      }
    }

    // Refresh charts
    updateRaceChart();
    updateTrendChartCursor();
  }

  // ─── Playback Controls ───────────────────────────────────────
  function playTimeline() {
    const timelineData = getActiveTimelineData();
    if (activeIndex >= timelineData.length - 1) {
      activeIndex = getSmartStartIndex(timelineData); // Loop back to smart start
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

    // IMPROVEMENT #16: Tab transition animation
    dashboardGrid.classList.add('transitioning');

    // Small delay for CSS transition to start
    setTimeout(() => {
      currentMarket = market;

      // Apply market-specific theme class to body (Improvement #14)
      document.body.className = 'market-' + market;

      // Update active tab buttons
      [tabDram, tabFlash, tabLogic].forEach(tab => tab.classList.remove('active'));
      if (market === 'dram') tabDram.classList.add('active');
      else if (market === 'flash') tabFlash.classList.add('active');
      else if (market === 'logic') tabLogic.classList.add('active');

      // Update labels and metric controls based on market type
      const isLogic = market === 'logic';
      toggleBytesBtn.textContent = isLogic ? 'Transistors' : 'Capacity (Bytes)';
      statCapacityLabel.textContent = isLogic ? 'Total Transistors Shipped' : 'Total Capacity Shipped';

      // Capping active index + smart start (Improvement #12)
      const timelineData = getActiveTimelineData();
      timelineSlider.max = timelineData.length - 1;

      // Jump to smart start for this market
      const smartStart = getSmartStartIndex(timelineData);
      activeIndex = smartStart;

      // Reset animated counter state for smooth transition
      animatedRevenue = timelineData[activeIndex].total_revenue;
      animatedCapacity = timelineData[activeIndex].total_bytes;

      // Reinitialize trend chart configuration (full replace)
      trendChart.setOption(getTrendChartOptions(), true);

      // Clear the race chart to avoid blending companies from different markets
      raceChart.clear();

      // Update complete dashboard
      updateUI();

      // BUG FIX #7: Resize charts after tab switch
      setTimeout(() => {
        raceChart.resize();
        trendChart.resize();
        dashboardGrid.classList.remove('transitioning');
      }, 60);
    }, 150); // Wait for fade-out transition
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

  // BUG FIX #3: Re-render chart on speed change for animation sync
  speedControl.addEventListener('change', (e) => {
    playSpeed = parseInt(e.target.value);
    if (isPlaying) {
      clearInterval(playInterval);
      playTimeline();
    }
    // Update chart animation duration to match
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

  // Bind tab clicks
  tabDram.addEventListener('click', () => switchMarket('dram'));
  tabFlash.addEventListener('click', () => switchMarket('flash'));
  tabLogic.addEventListener('click', () => switchMarket('logic'));

  // Handle window resizing
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
  // BUG FIX #9: Set slider max on init
  timelineSlider.max = initData.length - 1;
  activeIndex = getSmartStartIndex(initData);

  // Set initial animated values (no animation for first render)
  animatedRevenue = initData[activeIndex].total_revenue;
  animatedCapacity = initData[activeIndex].total_bytes;

  trendChart.setOption(getTrendChartOptions());
  updateUI();
});
