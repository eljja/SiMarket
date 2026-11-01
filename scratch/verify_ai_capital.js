// scratch/verify_ai_capital.js
// Verification suite for AI Capital Circulation & Supply Chain quarterly dataset

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

console.log('=== Step 1: Loading Quarterly AI Capital Datasets ===');
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

const requiredQuarters = [
  '2023 Q1', '2023 Q2', '2023 Q3', '2023 Q4',
  '2024 Q1', '2024 Q2', '2024 Q3', '2024 Q4',
  '2025 Q1', '2025 Q2', '2025 Q3', '2025 Q4',
  '2026 Q1', '2026 Q2', '2026 Q3', '2026 Q4'
];

console.log('=== Step 2: Validating Timeline Quarters & Sequence ===');
if (enData.length !== 16 || koData.length !== 16) {
  throw new Error(`Expected 16 quarters, got EN=${enData.length}, KO=${koData.length}`);
}

const enLabels = enData.map(d => d.label);
const koLabels = koData.map(d => d.label);

for (let i = 0; i < requiredQuarters.length; i++) {
  const req = requiredQuarters[i];
  if (enLabels[i] !== req) throw new Error(`English dataset label mismatch at ${i}: got ${enLabels[i]}, expected ${req}`);
  if (koLabels[i] !== req) throw new Error(`Korean dataset label mismatch at ${i}: got ${koLabels[i]}, expected ${req}`);
}
console.log(`[PASS] All 16 quarters (${requiredQuarters[0]} to ${requiredQuarters[15]}) match perfectly.`);

console.log('=== Step 3: Validating 17 Nodes, Coordinates & Edge Integrity ===');
const requiredEntities = [
  'msft', 'goog', 'amzn', 'meta',
  'nvda', 'tsmc', 'avgo',
  'skhynix', 'samsung', 'asml',
  'openai', 'anthropic', 'xai', 'deepseek',
  'coreweave', 'vc_sovereign', 'end_market'
];

enData.forEach((period, idx) => {
  const koPeriod = koData[idx];
  const qId = period.label;

  // Validate Node IDs
  const enNodeIds = new Set();
  period.nodes.forEach(node => {
    if (!node.id || typeof node.id !== 'string') {
      throw new Error(`[${qId}] Node missing valid id: ${JSON.stringify(node)}`);
    }
    if (enNodeIds.has(node.id)) {
      throw new Error(`[${qId}] Duplicate node id: ${node.id}`);
    }
    enNodeIds.add(node.id);

    if (typeof node.marketCap !== 'number' || node.marketCap <= 0) {
      throw new Error(`[${qId}] Node ${node.id} has invalid marketCap: ${node.marketCap}`);
    }
    if (typeof node.aiCapex !== 'number' || node.aiCapex < 0) {
      throw new Error(`[${qId}] Node ${node.id} has invalid aiCapex: ${node.aiCapex}`);
    }
    if (typeof node.aiRevenue !== 'number' || node.aiRevenue < 0) {
      throw new Error(`[${qId}] Node ${node.id} has invalid aiRevenue: ${node.aiRevenue}`);
    }
    if (typeof node.initialX !== 'number' || typeof node.initialY !== 'number') {
      throw new Error(`[${qId}] Node ${node.id} missing initial coordinates!`);
    }
    // Verify coordinates stay within safe bounds [-300, 300]
    if (Math.abs(node.initialX) > 300 || Math.abs(node.initialY) > 280) {
      throw new Error(`[${qId}] Node ${node.id} initial coordinate outside safe bounds: x=${node.initialX}, y=${node.initialY}`);
    }
  });

  // Verify all 17 required entities are present
  for (const ent of requiredEntities) {
    if (!enNodeIds.has(ent)) {
      throw new Error(`[${qId}] Missing required entity: ${ent}`);
    }
  }

  // Verify Korean Node Parity
  const koNodeIds = new Set(koPeriod.nodes.map(n => n.id));
  if (enNodeIds.size !== koNodeIds.size) {
    throw new Error(`[${qId}] Node count mismatch: EN=${enNodeIds.size}, KO=${koNodeIds.size}`);
  }
  for (const id of enNodeIds) {
    if (!koNodeIds.has(id)) {
      throw new Error(`[${qId}] Node ${id} missing in Korean dataset`);
    }
  }

  // Validate Directed Edges
  period.edges.forEach((edge, eIdx) => {
    if (!enNodeIds.has(edge.source)) {
      throw new Error(`[${qId}] Edge #${eIdx} invalid source: ${edge.source}`);
    }
    if (!enNodeIds.has(edge.target)) {
      throw new Error(`[${qId}] Edge #${eIdx} invalid target: ${edge.target}`);
    }
    if (typeof edge.amount !== 'number' || edge.amount <= 0) {
      throw new Error(`[${qId}] Edge #${eIdx} invalid amount: ${edge.amount}`);
    }
    if (!edge.flowType || typeof edge.flowType !== 'string') {
      throw new Error(`[${qId}] Edge #${eIdx} missing flowType: ${JSON.stringify(edge)}`);
    }
  });

  // Validate Macro Metrics
  const m = period.macroMetrics;
  if (!m.totalAiCapex || !m.realEndUserRevenue || !m.capexRevenueDeficit || !m.circularRatio) {
    throw new Error(`[${qId}] Incomplete macro metrics: ${JSON.stringify(m)}`);
  }
  const calcDeficit = parseFloat((m.totalAiCapex - m.realEndUserRevenue).toFixed(1));
  if (Math.abs(calcDeficit - m.capexRevenueDeficit) > 0.15) {
    throw new Error(`[${qId}] Deficit mismatch: calculated=${calcDeficit}, recorded=${m.capexRevenueDeficit}`);
  }
});

console.log(`[PASS] All 16 quarters, 17 entities, bounded coordinates, and directed edges validated with 0 errors!`);
console.log('=== Verification Complete ===');
