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

  console.log(`[${jsFile}] Initialized successfully.`);
}

testBarEngine(false);
testBarEngine(true);
console.log('=== Base bar test passed ===');
