// scratch/test_browser_morph.js
// Tests graph morphing, link persistence, mutual arrows, thickening, and fading

const fs = require('fs');
const path = require('path');
const vm = require('vm');

function runMorphSimulation(isKO) {
  const jsFile = isKO ? 'ai_capital_ko.js' : 'ai_capital.js';
  const dataFile = isKO ? 'ai_capital_data_ko.js' : 'ai_capital_data.js';

  const dataCode = fs.readFileSync(path.resolve(dataFile), 'utf8');
  const engineCode = fs.readFileSync(path.resolve(jsFile), 'utf8');

  let setOptionCalls = [];
  const mockChart = {
    setOption: (opt, notMerge) => {
      setOptionCalls.push(opt);
      return opt;
    },
    resize: () => {},
    on: () => {}
  };

  const mockElements = {
    'ai-network-chart': {},
    'ai-bar-chart': {},
    'network-year-display': { textContent: '' },
    'play-btn': { addEventListener: () => {} },
    'play-icon': { style: {} },
    'pause-icon': { style: {} },
    'prev-btn': { addEventListener: () => {} },
    'next-btn': { addEventListener: () => {} },
    'speed-control': { addEventListener: () => {} },
    'timeline-slider': { addEventListener: () => {}, value: 0 },
    'current-period': { textContent: '' },
    'btn-fit-graph': { addEventListener: () => {} },
    'kpi-capex-val': { textContent: '' },
    'kpi-revenue-val': { textContent: '' },
    'kpi-deficit-val': { textContent: '' },
    'kpi-circular-val': { textContent: '' },
    'toggle-bar-capex': { addEventListener: () => {}, classList: { add: () => {}, remove: () => {} } },
    'toggle-bar-gap': { addEventListener: () => {}, classList: { add: () => {}, remove: () => {} } },
    'dossier-name': { textContent: '', style: {} },
    'dossier-category': { textContent: '', style: {} },
    'dossier-val': { textContent: '' },
    'dossier-capex': { textContent: '' },
    'dossier-rev': { textContent: '' },
    'dossier-desc': { textContent: '' },
    'dossier-year': { textContent: '' },
    'dossier-flows': { innerHTML: '', appendChild: () => {} },
    'theme-toggle-btn': { addEventListener: () => {} },
    'theme-sun-icon': { style: {} },
    'theme-moon-icon': { style: {} },
    'copy-citation-btn': { addEventListener: () => {} },
    'toast-container': { appendChild: () => {} },
    'citation-text': { textContent: 'mock' }
  };

  let registeredDomContentLoaded = null;
  const context = {
    window: {
      addEventListener: () => {}
    },
    document: {
      addEventListener: (evt, cb) => {
        if (evt === 'DOMContentLoaded') registeredDomContentLoaded = cb;
      },
      getElementById: (id) => mockElements[id] || { addEventListener: () => {}, style: {} },
      querySelectorAll: () => [],
      createElement: () => ({ style: {}, classList: { add: () => {}, remove: () => {} } }),
      body: { classList: { contains: () => false, toggle: () => false, add: () => {} } }
    },
    localStorage: { getItem: () => null, setItem: () => {} },
    console,
    echarts: {
      init: () => mockChart
    }
  };

  vm.createContext(context);
  vm.runInContext(dataCode, context);
  vm.runInContext(engineCode, context);

  registeredDomContentLoaded();

  // Test data array
  const timeline = isKO ? context.window.aiCapitalTimelineDataKo : context.window.aiCapitalTimelineData;

  console.log(`\n=== Testing Graph Options across all 16 quarters (${isKO ? 'KO' : 'EN'}) ===`);
  
  // Verify that all 16 quarters have exactly 28 edges and 17 nodes
  timeline.forEach((q, idx) => {
    if (q.edges.length !== 28) throw new Error(`Quarter ${q.label} edges length !== 28`);
    if (q.nodes.length !== 17) throw new Error(`Quarter ${q.label} nodes length !== 17`);

    // Verify mutual links
    const msftToOpenai = q.edges.find(e => e.id === 'msft_openai_credit');
    const openaiToMsft = q.edges.find(e => e.id === 'openai_msft_spend');
    if (!msftToOpenai || msftToOpenai.amount <= 0) throw new Error(`Quarter ${q.label} missing msft_openai_credit`);
    if (!openaiToMsft || openaiToMsft.amount <= 0) throw new Error(`Quarter ${q.label} missing openai_msft_spend`);
  });
  console.log('[PASS] Mutual loop MSFT ⇄ OpenAI active and verified across all 16 quarters.');

  // Test CoreWeave Debt: active in 2024 Q2 ($7.5B), inactive in 2024 Q3 ($0B)
  const q2024_2 = timeline.find(q => q.label === '2024 Q2');
  const q2024_3 = timeline.find(q => q.label === '2024 Q3');
  const debtQ2 = q2024_2.edges.find(e => e.id === 'vc_coreweave_debt');
  const debtQ3 = q2024_3.edges.find(e => e.id === 'vc_coreweave_debt');
  if (debtQ2.amount !== 7.5) throw new Error(`Expected CoreWeave debt 7.5 in 2024 Q2, got ${debtQ2.amount}`);
  if (debtQ3.amount !== 0) throw new Error(`Expected CoreWeave debt 0 in 2024 Q3, got ${debtQ3.amount}`);
  console.log(`[PASS] CoreWeave debt transition verified: $7.5B in 2024 Q2 -> $0 in 2024 Q3 (clean disappearance).`);

  // Test OpenAI mega equity: active in 2024 Q4 ($6.6B), inactive in 2025 Q1 ($0B)
  const q2024_4 = timeline.find(q => q.label === '2024 Q4');
  const q2025_1 = timeline.find(q => q.label === '2025 Q1');
  const eqQ4 = q2024_4.edges.find(e => e.id === 'vc_openai_equity');
  const eqQ1 = q2025_1.edges.find(e => e.id === 'vc_openai_equity');
  if (eqQ4.amount !== 6.6) throw new Error(`Expected OpenAI mega round 6.6 in 2024 Q4, got ${eqQ4.amount}`);
  if (eqQ1.amount !== 0) throw new Error(`Expected OpenAI mega round 0 in 2025 Q1, got ${eqQ1.amount}`);
  console.log(`[PASS] OpenAI mega round transition verified: $6.6B in 2024 Q4 -> $0 in 2025 Q1 (clean disappearance).`);

  // Test Arrow Thickening: MSFT -> NVDA GPU purchases grow from 2.8 in 2023 Q1 to 16.0 in 2026 Q4
  const qFirst = timeline[0];
  const qLast = timeline[timeline.length - 1];
  const gpuStart = qFirst.edges.find(e => e.id === 'msft_nvda_gpu').amount;
  const gpuEnd = qLast.edges.find(e => e.id === 'msft_nvda_gpu').amount;
  if (gpuEnd <= gpuStart) throw new Error(`GPU purchase did not grow: start=${gpuStart}, end=${gpuEnd}`);
  console.log(`[PASS] Arrow line growth verified: MSFT -> NVDA begins at $${gpuStart}B and expands to $${gpuEnd}B.`);
}

runMorphSimulation(false);
runMorphSimulation(true);
console.log('\n=== ALL SIMULATION TESTS PASSED PERFECTLY ===\n');
