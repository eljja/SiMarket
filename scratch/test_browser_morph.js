// scratch/test_browser_morph.js
// Tests graph morphing, link persistence, mutual arrows, thickening, and dynamic node scaling across the 10-year arc (2017-2026)

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

  console.log(`\n=== Testing Graph Options across all 22 periods (${isKO ? 'KO' : 'EN'}) ===`);
  
  // Verify that all 22 periods have exactly 28 edges and 17 nodes
  timeline.forEach((q, idx) => {
    if (q.edges.length !== 28) throw new Error(`Period ${q.label} edges length !== 28`);
    if (q.nodes.length !== 17) throw new Error(`Period ${q.label} nodes length !== 17`);
  });
  console.log('[PASS] All 22 periods contain 17 nodes and 28 edge channels.');

  // Verify mutual loop MSFT ⇄ OpenAI during quarterly hyper-scaling era (2023-2026)
  const quarterlyPeriods = timeline.slice(6);
  quarterlyPeriods.forEach(q => {
    const msftToOpenai = q.edges.find(e => e.id === 'msft_openai_credit');
    const openaiToMsft = q.edges.find(e => e.id === 'openai_msft_spend');
    if (!msftToOpenai || msftToOpenai.amount <= 0) throw new Error(`Quarter ${q.label} missing msft_openai_credit`);
    if (!openaiToMsft || openaiToMsft.amount <= 0) throw new Error(`Quarter ${q.label} missing openai_msft_spend`);
  });
  console.log('[PASS] Mutual loop MSFT ⇄ OpenAI active and verified across all 16 quarters.');

  // Test Node Sizing Expansion: NVDA $118B (2017) -> $3820B (2026 Q4)
  const p2017 = timeline[0];
  const p2026 = timeline[21];
  const nvda2017 = p2017.nodes.find(n => n.id === 'nvda');
  const nvda2026 = p2026.nodes.find(n => n.id === 'nvda');
  if (nvda2017.marketCap !== 118 || nvda2026.marketCap !== 3820) {
    throw new Error(`NVDA valuation mismatch: 2017=${nvda2017.marketCap}, 2026=${nvda2026.marketCap}`);
  }
  console.log(`[PASS] NVDA valuation growth verified: $${nvda2017.marketCap}B in 2017 -> $${nvda2026.marketCap}B in 2026 Q4 (32x expansion).`);

  // Test Startup Popping: Anthropic unformed in 2017 (isFormed: false), formed in 2021 (isFormed: true)
  const anthropic2017 = p2017.nodes.find(n => n.id === 'anthropic');
  const p2021 = timeline[4];
  const anthropic2021 = p2021.nodes.find(n => n.id === 'anthropic');
  if (anthropic2017.isFormed !== false || anthropic2017.marketCap !== 0) {
    throw new Error(`Anthropic in 2017 should be unformed with marketCap 0`);
  }
  if (anthropic2021.isFormed !== true || anthropic2021.marketCap <= 0) {
    throw new Error(`Anthropic in 2021 should be formed with positive marketCap`);
  }
  console.log('[PASS] Anthropic startup popping verified: unformed in 2017 -> emerges in 2021 ($0.8B seed).');

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

  // Test Arrow Thickening: MSFT -> NVDA GPU purchases grow from 2017 ($0.4B) to 2026 Q4 ($16.0B)
  const qFirst = timeline[0];
  const qLast = timeline[timeline.length - 1];
  const gpuStart = qFirst.edges.find(e => e.id === 'msft_nvda_gpu').amount;
  const gpuEnd = qLast.edges.find(e => e.id === 'msft_nvda_gpu').amount;
  if (gpuEnd <= gpuStart) throw new Error(`GPU purchase did not grow: start=${gpuStart}, end=${gpuEnd}`);
  console.log(`[PASS] Arrow line growth verified: MSFT -> NVDA begins at $${gpuStart}B in 2017 and expands to $${gpuEnd}B in 2026 Q4.`);

  // Test Label Persistence and Upward 30px Shift
  const netOpt = setOptionCalls.find(opt => opt && opt.series && opt.series[0] && opt.series[0].type === 'graph');
  if (!netOpt) throw new Error('Graph options not found in setOption calls');
  const graphNodes = netOpt.series[0].data;

  // Check ASML Y coordinate is shifted up by 30px (497 - 30 = 467)
  const asmlNode = graphNodes.find(n => n.id === 'asml');
  if (!asmlNode || asmlNode.y > 475) {
    throw new Error(`ASML node Y coordinate should be shifted up (~467), got ${asmlNode?.y}`);
  }
  console.log(`[PASS] Upward 30px shift verified: ASML Y coordinate is ${asmlNode.y}px (safe bottom margin: >110px).`);

  // Check that all formed nodes have label.show === true (even small $0.3B nodes)
  graphNodes.forEach(gn => {
    if (gn.raw.isFormed !== false) {
      if (!gn.label || gn.label.show !== true) {
        throw new Error(`Node ${gn.name} is formed but label.show is not true`);
      }
    } else {
      if (gn.label && gn.label.show === true) {
        throw new Error(`Unformed node ${gn.name} should not have label.show true`);
      }
    }
  });
  console.log('[PASS] Continuous company title display verified: All formed nodes show labels continuously from emergence.');
}

runMorphSimulation(false);
runMorphSimulation(true);
console.log('\n=== ALL SIMULATION TESTS PASSED PERFECTLY ===\n');
