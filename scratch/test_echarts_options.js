// scratch/test_echarts_options.js
const fs = require('fs');
const path = require('path');
const vm = require('vm');

function createBrowserMock(jsFile, dataFile, isKO) {
  const dataCode = fs.readFileSync(path.resolve(dataFile), 'utf8');
  const engineCode = fs.readFileSync(path.resolve(jsFile), 'utf8');

  let registeredDomContentLoaded = null;
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
      init: () => ({
        setOption: (opt) => opt,
        resize: () => {},
        on: () => {}
      })
    }
  };

  vm.createContext(context);
  vm.runInContext(dataCode, context);
  vm.runInContext(engineCode, context);

  if (!registeredDomContentLoaded) throw new Error('DOMContentLoaded listener not registered');
  registeredDomContentLoaded();
  console.log(`[PASS] ${jsFile} initialized cleanly with DOMContentLoaded without errors.`);
}

createBrowserMock('ai_capital.js', 'ai_capital_data.js', false);
createBrowserMock('ai_capital_ko.js', 'ai_capital_data_ko.js', true);
