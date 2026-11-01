// scratch/test_single_play.js
// Tests that playback runs once through the timeline and stops automatically at the end without infinite looping

const fs = require('fs');
const path = require('path');
const vm = require('vm');

function testPlayLogic(isKO) {
  const jsFile = isKO ? 'ai_capital_ko.js' : 'ai_capital.js';
  const dataFile = isKO ? 'ai_capital_data_ko.js' : 'ai_capital_data.js';

  const dataCode = fs.readFileSync(path.resolve(dataFile), 'utf8');
  let engineCode = fs.readFileSync(path.resolve(jsFile), 'utf8');

  // Override playSpeed to 5ms for rapid simulation
  engineCode = engineCode.replace('let playSpeed = 1000;', 'let playSpeed = 5;');

  let playClickCb = null;
  const mockElements = {
    'ai-network-chart': {},
    'ai-bar-chart': {},
    'network-year-display': { textContent: '' },
    'play-btn': { addEventListener: (evt, cb) => { if (evt === 'click') playClickCb = cb; } },
    'play-icon': { style: { display: 'block' } },
    'pause-icon': { style: { display: 'none' } },
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
    window: { addEventListener: () => {} },
    document: {
      addEventListener: (evt, cb) => { if (evt === 'DOMContentLoaded') registeredDomContentLoaded = cb; },
      getElementById: (id) => mockElements[id] || { addEventListener: () => {}, style: {} },
      querySelectorAll: () => [],
      createElement: () => ({ style: {}, classList: { add: () => {}, remove: () => {} } }),
      body: { classList: { contains: () => false, toggle: () => false, add: () => {} } }
    },
    localStorage: { getItem: () => null, setItem: () => {} },
    setInterval: global.setInterval,
    clearInterval: global.clearInterval,
    console,
    echarts: {
      init: () => ({
        setOption: () => {},
        resize: () => {},
        on: () => {}
      })
    }
  };

  vm.createContext(context);
  vm.runInContext(dataCode, context);
  vm.runInContext(engineCode, context);

  registeredDomContentLoaded();

  if (!playClickCb) throw new Error('play-btn click listener not attached');

  return new Promise((resolve, reject) => {
    // 1. Initial play from default activeIndex
    console.log(`[${jsFile}] Starting play...`);
    playClickCb();

    // Check during playback
    if (mockElements['play-icon'].style.display !== 'none' || mockElements['pause-icon'].style.display !== 'block') {
      return reject(new Error('Play icons not toggled on play start'));
    }

    setTimeout(() => {
      const endVal = parseInt(mockElements['timeline-slider'].value, 10);
      console.log(`[${jsFile}] Reached timeline end. Slider value: ${endVal}`);
      if (endVal !== 21) return reject(new Error(`Expected to reach index 21, got ${endVal}`));
      if (mockElements['play-icon'].style.display !== 'block' || mockElements['pause-icon'].style.display !== 'none') {
        return reject(new Error('Play icon not restored on playback completion'));
      }

      // Wait a bit more to ensure no infinite loop
      setTimeout(() => {
        const afterWaitVal = parseInt(mockElements['timeline-slider'].value, 10);
        if (afterWaitVal !== 21) return reject(new Error(`Infinite loop detected! Slider moved to ${afterWaitVal}`));
        console.log(`[${jsFile}] [PASS] Playback halted at index 21 without infinite loop.`);

        // 2. Click play again when at index 21: should restart from 0 and stop at 21
        console.log(`[${jsFile}] Re-triggering play from index 21 (should restart from 0)...`);
        playClickCb();

        setTimeout(() => {
          const replayVal = parseInt(mockElements['timeline-slider'].value, 10);
          if (replayVal !== 21) return reject(new Error(`Expected replay to reach index 21, got ${replayVal}`));
          if (mockElements['play-icon'].style.display !== 'block') {
            return reject(new Error('Play icon not restored on replay completion'));
          }
          console.log(`[${jsFile}] [PASS] Replay from start ran to 21 and cleanly halted.`);
          resolve();
        }, 400);
      }, 50);
    }, 150);
  });
}

async function runAll() {
  await testPlayLogic(false);
  await testPlayLogic(true);
  console.log('\n=== ALL PLAYBACK STOP TESTS PASSED ===\n');
}

runAll().catch(err => {
  console.error(err);
  process.exit(1);
});
