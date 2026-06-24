// app.js - Main Application Logic for DRAM Market History Dashboard

document.addEventListener('DOMContentLoaded', () => {
  // Application State
  let activeIndex = 0;
  let isPlaying = false;
  let playInterval = null;
  let playSpeed = 1000; // ms per step
  let currentMetric = 'revenue'; // 'revenue' or 'bytes'
  
  // DOM Elements
  const playBtn = document.getElementById('play-btn');
  const playIcon = document.getElementById('play-icon');
  const pauseIcon = document.getElementById('pause-icon');
  const speedControl = document.getElementById('speed-control');
  const timelineSlider = document.getElementById('timeline-slider');
  const currentPeriodLabel = document.getElementById('current-period');
  const toggleRevenueBtn = document.getElementById('toggle-revenue');
  const toggleBytesBtn = document.getElementById('toggle-bytes');
  
  const statRevenueVal = document.getElementById('stat-revenue-val');
  const statCapacityVal = document.getElementById('stat-capacity-val');
  const statCapacityUnit = document.getElementById('stat-capacity-unit');
  const milestoneContent = document.getElementById('milestone-text');
  
  const floatingYearDisplay = document.getElementById('floating-year-display');
  
  // Setup timeline slider range
  timelineSlider.min = 0;
  timelineSlider.max = dramTimelineData.length - 1;
  timelineSlider.value = 0;

  // Initialize ECharts instances
  const raceChartDom = document.getElementById('race-chart');
  const raceChart = echarts.init(raceChartDom);
  
  const trendChartDom = document.getElementById('trend-chart');
  const trendChart = echarts.init(trendChartDom);

  // Helper: Format Bytes into human-readable units (Exabytes, Petabytes, etc.)
  function formatBytes(bytes) {
    if (bytes === 0) return { val: '0', unit: 'Bytes' };
    const k = 1000;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB'];
    const i = Math.floor(Math.log10(bytes) / 3);
    const val = parseFloat((bytes / Math.pow(k, i)).toFixed(2));
    return {
      val: val.toLocaleString(),
      unit: sizes[i]
    };
  }

  // Setup options for the Trend Area/Line Chart (Dual Y-Axis: Revenue & Capacity Log scale)
  function getTrendChartOptions() {
    const dates = dramTimelineData.map(d => d.label);
    const revenues = dramTimelineData.map(d => d.total_revenue);
    const capacities = dramTimelineData.map(d => d.total_bytes);

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
        borderColor: 'rgba(0, 229, 255, 0.2)',
        textStyle: {
          color: '#f3f4f6',
          fontFamily: 'Outfit'
        }
      },
      grid: {
        top: 40,
        bottom: 30,
        left: 55,
        right: 55
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
          interval: function(index, value) {
            // Show label every 10 steps or if it's the last one
            return index % 12 === 0 || index === dates.length - 1;
          }
        }
      },
      yAxis: [
        {
          type: 'value',
          name: 'Revenue',
          position: 'left',
          axisLine: {
            show: true,
            lineStyle: {
              color: 'rgba(0, 229, 255, 0.3)'
            }
          },
          axisLabel: {
            formatter: '${value}B',
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
          name: 'Capacity',
          position: 'right',
          logBase: 10,
          axisLine: {
            show: true,
            lineStyle: {
              color: 'rgba(168, 85, 247, 0.3)'
            }
          },
          axisLabel: {
            formatter: function(value) {
              // Convert raw byte logarithm labels to readable labels
              if (value >= 1e18) return (value / 1e18) + 'EB';
              if (value >= 1e15) return (value / 1e15) + 'PB';
              if (value >= 1e12) return (value / 1e12) + 'TB';
              if (value >= 1e9) return (value / 1e9) + 'GB';
              if (value >= 1e6) return (value / 1e6) + 'MB';
              return value;
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
            color: '#00e5ff',
            width: 2
          },
          areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: 'rgba(0, 229, 255, 0.25)' },
              { offset: 1, color: 'rgba(0, 229, 255, 0.0)' }
            ])
          }
        },
        {
          name: 'Total Capacity',
          type: 'line',
          yAxisIndex: 1,
          smooth: true,
          showSymbol: false,
          data: capacities,
          lineStyle: {
            color: '#a855f7',
            width: 2
          }
        }
      ]
    };
  }

  // Update Trend Chart vertical line cursor
  function updateTrendChartCursor() {
    const label = dramTimelineData[activeIndex].label;
    trendChart.setOption({
      series: [
        {
          name: 'Total Revenue',
          markLine: {
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

  // Update Main Bar Chart Race
  function updateRaceChart() {
    const activeData = dramTimelineData[activeIndex];
    const totalRev = activeData.total_revenue;
    const totalCap = activeData.total_bytes;
    const shares = activeData.shares;
    
    // Calculate sizes based on selected metric
    const chartData = [];
    for (const [company, share] of Object.entries(shares)) {
      let value = 0;
      if (currentMetric === 'revenue') {
        value = totalRev * (share / 100);
      } else {
        value = totalCap * (share / 100);
      }
      
      chartData.push({
        name: company,
        value: parseFloat(value.toFixed(4)),
        share: share,
        itemStyle: {
          color: dramCompanyColors[company] || dramCompanyColors['Others'],
          borderRadius: [0, 4, 4, 0],
          shadowBlur: 8,
          shadowColor: (dramCompanyColors[company] || dramCompanyColors['Others']) + '55'
        }
      });
    }

    // Sort descending by value
    chartData.sort((a, b) => b.value - a.value);

    // Dynamic scale helper for xAxis label formatter
    const isRev = currentMetric === 'revenue';
    
    const option = {
      backgroundColor: 'transparent',
      grid: {
        top: 10,
        bottom: 20,
        left: 140,
        right: 90
      },
      xAxis: {
        type: 'value',
        max: 'maxData',
        splitLine: {
          lineStyle: {
            color: 'rgba(255, 255, 255, 0.04)'
          }
        },
        axisLabel: {
          color: '#9ca3af',
          fontFamily: 'Outfit',
          formatter: function(value) {
            if (isRev) {
              return '$' + value.toFixed(1) + 'B';
            } else {
              const formatted = formatBytes(value);
              return formatted.val + ' ' + formatted.unit;
            }
          }
        }
      },
      yAxis: {
        type: 'category',
        data: chartData.map(item => item.name),
        inverse: true,
        max: 8, // Show top 9 companies
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
            value: 0
          },
          label: {
            show: true,
            position: 'right',
            valueAnimation: true,
            color: '#f3f4f6',
            fontFamily: 'JetBrains Mono',
            fontWeight: 600,
            fontSize: 12,
            formatter: function(params) {
              const share = params.data.share;
              if (isRev) {
                return `$${params.value.toFixed(2)}B (${share}%)`;
              } else {
                const formatted = formatBytes(params.value);
                return `${formatted.val}${formatted.unit} (${share}%)`;
              }
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

  // Update dashboard controls and stats cards
  function updateUI() {
    const activeData = dramTimelineData[activeIndex];
    
    // Label and slider update
    currentPeriodLabel.textContent = activeData.label;
    floatingYearDisplay.textContent = activeData.label.split(' ')[0]; // Show only year in huge display
    timelineSlider.value = activeIndex;
    
    // Stats cards update
    statRevenueVal.textContent = activeData.total_revenue.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    
    const formattedCap = formatBytes(activeData.total_bytes);
    statCapacityVal.textContent = formattedCap.val;
    statCapacityUnit.textContent = formattedCap.unit;
    
    // Milestone update
    if (activeData.milestone) {
      milestoneContent.textContent = activeData.milestone;
      milestoneContent.classList.remove('empty');
      // Highlight effect
      milestoneContent.parentElement.style.borderColor = 'var(--accent-gold)';
      setTimeout(() => {
        milestoneContent.parentElement.style.borderColor = 'var(--panel-border)';
      }, 800);
    } else {
      milestoneContent.textContent = "No major industry event recorded for this period.";
      milestoneContent.classList.add('empty');
    }

    // Refresh charts
    updateRaceChart();
    updateTrendChartCursor();
  }

  // Timer loop for Playback
  function playTimeline() {
    if (activeIndex >= dramTimelineData.length - 1) {
      activeIndex = 0; // Loop back
    }
    
    playInterval = setInterval(() => {
      if (activeIndex < dramTimelineData.length - 1) {
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
    
    // UI update
    pauseIcon.style.display = 'none';
    playIcon.style.display = 'block';
  }

  // Event Listeners
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
    
    // Reset timer with new speed if playing
    if (isPlaying) {
      clearInterval(playInterval);
      playTimeline();
    }
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
    updateRaceChart();
  });

  toggleBytesBtn.addEventListener('click', () => {
    if (currentMetric === 'bytes') return;
    currentMetric = 'bytes';
    toggleBytesBtn.classList.add('active');
    toggleRevenueBtn.classList.remove('active');
    updateRaceChart();
  });

  // Handle window resizing
  window.addEventListener('resize', () => {
    raceChart.resize();
    trendChart.resize();
  });

  // Initial execution
  trendChart.setOption(getTrendChartOptions());
  updateUI();
});
