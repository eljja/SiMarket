// scratch/test_metrics_scale.js
// Test script to verify natural X-scale expansion in metrics bar chart

const fs = require('fs');
const path = require('path');

const data = require('../ai_capital_data.js');
const timeline = data.aiCapitalTimelineData;

console.log('=== Testing Capex Ranking X-Scale across all 22 periods ===');

function calcXMax(sortedNodes) {
  const maxVal = sortedNodes.length ? Math.max(...sortedNodes.map(n => n.aiCapex)) : 1;
  return Math.max(5, Math.ceil((maxVal * 1.15) / 5) * 5);
}

timeline.forEach((period, idx) => {
  const sortedNodes = [...period.nodes]
    .filter(n => n.aiCapex > 0)
    .sort((a, b) => a.aiCapex - b.aiCapex);
  
  const maxCapex = sortedNodes.length ? Math.max(...sortedNodes.map(n => n.aiCapex)) : 0;
  const xMax = calcXMax(sortedNodes);
  console.log(`[Period ${idx.toString().padStart(2, ' ')}: ${period.label.padEnd(8, ' ')}] Max Capex: $${maxCapex.toFixed(1).padStart(4, ' ')}B  -->  xMax: $${xMax}B`);
});
