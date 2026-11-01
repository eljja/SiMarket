// scratch/verify_ai_capital.js
// Verification suite for AI Capital Circulation & Ouroboros Loop dataset

const fs = require('fs');
const path = require('path');
const vm = require('vm');

function loadScript(filePath) {
  if (!fs.existsSync(filePath)) {
    throw new Error(`File not found: ${filePath}`);
  }
  const code = fs.readFileSync(filePath, 'utf8');
  const context = { window: {}, console };
  vm.createContext(context);
  vm.runInContext(code, context);
  return context;
}

console.log('=== Step 1: Loading AI Capital Datasets ===');
const enFile = path.resolve('ai_capital_data.js');
const koFile = path.resolve('ai_capital_data_ko.js');

const enCtx = loadScript(enFile);
const koCtx = loadScript(koFile);

const enData = enCtx.window.aiCapitalTimelineData || enCtx.aiCapitalTimelineData;
const koData = koCtx.window.aiCapitalTimelineDataKo || koCtx.aiCapitalTimelineDataKo;

if (!enData || !Array.isArray(enData)) {
  throw new Error('English aiCapitalTimelineData is missing or not an array');
}
if (!koData || !Array.isArray(koData)) {
  throw new Error('Korean aiCapitalTimelineDataKo is missing or not an array');
}

console.log(`[PASS] Both datasets loaded successfully. Length: EN=${enData.length}, KO=${koData.length}`);

const requiredYears = [2022, 2023, 2024, 2025, 2026];
console.log('=== Step 2: Validating Timeline Years & Periods ===');

const enYears = enData.map(d => d.year);
const koYears = koData.map(d => d.year);

for (const y of requiredYears) {
  if (!enYears.includes(y)) throw new Error(`English dataset missing year: ${y}`);
  if (!koYears.includes(y)) throw new Error(`Korean dataset missing year: ${y}`);
}
console.log(`[PASS] All required years (${requiredYears.join(', ')}) present in both datasets.`);

console.log('=== Step 3: Validating Nodes and Directed Edges Integrity ===');

enData.forEach((period, idx) => {
  const koPeriod = koData[idx];
  const year = period.year;

  if (period.year !== koPeriod.year) {
    throw new Error(`Year mismatch at index ${idx}: EN=${period.year}, KO=${koPeriod.year}`);
  }

  // Validate Nodes
  const enNodeIds = new Set();
  period.nodes.forEach(node => {
    if (!node.id || typeof node.id !== 'string') {
      throw new Error(`[${year}] Node missing valid id: ${JSON.stringify(node)}`);
    }
    if (enNodeIds.has(node.id)) {
      throw new Error(`[${year}] Duplicate node id: ${node.id}`);
    }
    enNodeIds.add(node.id);

    if (typeof node.marketCap !== 'number' || node.marketCap <= 0) {
      throw new Error(`[${year}] Node ${node.id} has invalid marketCap: ${node.marketCap}`);
    }
    if (typeof node.aiCapex !== 'number' || node.aiCapex < 0) {
      throw new Error(`[${year}] Node ${node.id} has invalid aiCapex: ${node.aiCapex}`);
    }
    if (typeof node.aiRevenue !== 'number' || node.aiRevenue < 0) {
      throw new Error(`[${year}] Node ${node.id} has invalid aiRevenue: ${node.aiRevenue}`);
    }
  });

  // Verify Korean Node Parity
  const koNodeIds = new Set(koPeriod.nodes.map(n => n.id));
  if (enNodeIds.size !== koNodeIds.size) {
    throw new Error(`[${year}] Node count mismatch: EN=${enNodeIds.size}, KO=${koNodeIds.size}`);
  }
  for (const id of enNodeIds) {
    if (!koNodeIds.has(id)) {
      throw new Error(`[${year}] Node ${id} missing in Korean dataset`);
    }
  }

  // Validate Directed Edges
  period.edges.forEach((edge, eIdx) => {
    if (!enNodeIds.has(edge.source)) {
      throw new Error(`[${year}] Edge #${eIdx} invalid source: ${edge.source}`);
    }
    if (!enNodeIds.has(edge.target)) {
      throw new Error(`[${year}] Edge #${eIdx} invalid target: ${edge.target}`);
    }
    if (typeof edge.amount !== 'number' || edge.amount <= 0) {
      throw new Error(`[${year}] Edge #${eIdx} invalid amount: ${edge.amount}`);
    }
    if (!edge.flowType || typeof edge.flowType !== 'string') {
      throw new Error(`[${year}] Edge #${eIdx} missing flowType`);
    }
  });

  // Validate Korean Edges Parity
  if (period.edges.length !== koPeriod.edges.length) {
    throw new Error(`[${year}] Edge count mismatch: EN=${period.edges.length}, KO=${koPeriod.edges.length}`);
  }

  console.log(`[PASS] Year ${year}: ${period.nodes.length} nodes, ${period.edges.length} flow links validated.`);
});

console.log('=== Step 4: Validating Macro Aggregations (Capex vs Revenue Gap) ===');
enData.forEach(p => {
  if (typeof p.macroMetrics?.totalAiCapex !== 'number' || p.macroMetrics.totalAiCapex <= 0) {
    throw new Error(`[${p.year}] Invalid macro totalAiCapex`);
  }
  if (typeof p.macroMetrics?.realEndUserRevenue !== 'number' || p.macroMetrics.realEndUserRevenue <= 0) {
    throw new Error(`[${p.year}] Invalid macro realEndUserRevenue`);
  }
});

console.log('\n✅ ALL VERIFICATION CHECKS PASSED: 0 Errors, 0 Warnings.\n');
process.exit(0);
