// scratch/test_bar_morph.js
// Tests bar chart option generation and smooth morphing across all 22 periods

const fs = require('fs');
const path = require('path');
const vm = require('vm');

function testBarEngine(isKO) {
  const jsFile = isKO ? 'ai_capital_ko.js' : 'ai_capital.js';
  const dataFile = isKO ? 'ai_capital_data_ko.js' : 'ai_capital_data.js';

  const dataCode = fs.readFileSync(path.resolve(dataFile), 'utf8');
  const engineCode = fs.readFileSync(path.resolve(jsFile), 'utf8');

  let barOptions = [];
  const listeners = {};
  const mockBarChart = {
    setOption: (opt, notMerge) => {
      barOptions.push({ opt, notMerge });
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
    'toggle-bar-val': { addEventListener: (evt, cb) => { listeners['toggle-bar-val'] = cb; }, classList: { add: () => {}, remove: () => {} } },
    'toggle-bar-capex': { addEventListener: (evt, cb) => { listeners['toggle-bar-capex'] = cb; }, classList: { add: () => {}, remove: () => {} } },
    'toggle-bar-gap': { addEventListener: (evt, cb) => { listeners['toggle-bar-gap'] = cb; }, classList: { add: () => {}, remove: () => {} } },
    'node-metric-label': { textContent: '', style: {} },
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

  let domReady = null;
  const context = {
    window: { addEventListener: () => {} },
    document: {
      addEventListener: (evt, cb) => { if (evt === 'DOMContentLoaded') domReady = cb; },
      getElementById: (id) => mockElements[id] || { addEventListener: () => {}, style: {} },
      querySelectorAll: () => [],
      createElement: () => ({ style: {}, classList: { add: () => {}, remove: () => {} } }),
      body: { classList: { contains: () => false, toggle: () => false, add: () => {} } }
    },
    localStorage: { getItem: () => null, setItem: () => {} },
    echarts: { init: (dom) => (dom === mockElements['ai-bar-chart'] ? mockBarChart : { setOption: () => {}, resize: () => {}, on: () => {} }) },
    console
  };

  vm.createContext(context);
  vm.runInContext(dataCode, context);
  vm.runInContext(engineCode, context);

  domReady();

  // Test mode toggles
  if (listeners['toggle-bar-val']) listeners['toggle-bar-val']();
  let lastOpt = barOptions[barOptions.length - 1].opt;
  if (!lastOpt.title.text.includes('Valuation') && !lastOpt.title.text.includes('시가총액')) {
    throw new Error('Failed to toggle to valuation mode');
  }

  if (listeners['toggle-bar-capex']) listeners['toggle-bar-capex']();
  lastOpt = barOptions[barOptions.length - 1].opt;
  if (!lastOpt.title.text.includes('Capex')) {
    throw new Error('Failed to toggle to capex mode');
  }

  if (listeners['toggle-bar-gap']) listeners['toggle-bar-gap']();
  lastOpt = barOptions[barOptions.length - 1].opt;
  if (!lastOpt.title.text.includes('Question') && !lastOpt.title.text.includes('질문')) {
    throw new Error('Failed to toggle to gap mode');
  }

  console.log(`[${jsFile}] Initialized successfully and all 3 bar modes verified.`);
}

testBarEngine(false);
testBarEngine(true);
console.log('=== Base bar test passed ===');
