// Stage 5 Engine Test Suite: tests memory.js in both EN and KO + real ECharts SSR rendering
// Run: node tools/memory/test_memory_engine.js
const fs = require('fs');
const path = require('path');
const vm = require('vm');
const echarts = require('echarts');

const root = path.resolve(__dirname, '..', '..');
const dataPath = path.join(root, 'memory_data.js');
const enginePath = path.join(root, 'memory.js');

if (!fs.existsSync(dataPath) || !fs.existsSync(enginePath)) {
  console.error('[FAIL] memory_data.js or memory.js missing');
  process.exit(1);
}

const dataCode = fs.readFileSync(dataPath, 'utf8');
const engineCode = fs.readFileSync(enginePath, 'utf8');

let errors = 0;
function assert(cond, msg) {
  if (!cond) {
    errors++;
    console.error('[FAIL] ' + msg);
  }
}

for (const lang of ['en', 'ko']) {
  const elements = {};
  function makeEl(id) {
    return {
      id,
      textContent: '',
      innerHTML: '',
      value: '45',
      min: '0',
      max: '46',
      style: { display: 'block' },
      dataset: { tech: 'all' },
      clientWidth: 840,
      clientHeight: 520,
      listeners: {},
      classList: {
        _set: new Set(id === 'view-history' || id === 'metric-revenue' || id === 'supply-dram' || id === 'scn-base' || id === 'out-capacity' ? ['active'] : []),
        add(c) { this._set.add(c); },
        remove(c) { this._set.delete(c); },
        toggle(c, force) {
          if (force === undefined) {
            if (this._set.has(c)) { this._set.delete(c); return false; }
            this._set.add(c); return true;
          }
          if (force) this._set.add(c); else this._set.delete(c);
          return force;
        },
        contains(c) { return this._set.has(c); }
      },
      addEventListener(evt, fn) { this.listeners[evt] = fn; },
      appendChild() {}
    };
  }

  const pills = ['all', 'sram', 'dram', 'nor', 'nand', 'hdd', 'tape'].map(t => {
    const el = makeEl('pill-' + t);
    el.dataset.tech = t;
    if (t === 'all') el.classList.add('active');
    return el;
  });

  const sandbox = {
    window: {
      addEventListener() {},
      location: { href: `https://eljja.github.io/SiMarket/memory${lang === 'ko' ? '_ko' : ''}.html`, hash: '' }
    },
    document: {
      documentElement: { lang },
      body: { classList: { contains: () => false, toggle: () => false, add: () => {} } },
      addEventListener(evt, cb) { if (evt === 'DOMContentLoaded') this._onReady = cb; },
      getElementById(id) {
        if (!elements[id]) elements[id] = makeEl(id);
        return elements[id];
      },
      querySelectorAll(sel) {
        if (sel.includes('mem-tech-pill')) return pills;
        return [];
      },
      createElement(tag) { return makeEl(tag); }
    },
    localStorage: { getItem: () => null, setItem: () => {} },
    navigator: { clipboard: { writeText: () => Promise.resolve() } },
    echarts: {
      init() {
        return {
          setOption(opt) { this.lastOpt = opt; },
          resize() {},
          on() {},
          getDataURL: () => 'data:image/png;base64,00'
        };
      }
    },
    setInterval: (fn) => { sandbox._intervalFn = fn; return 99; },
    clearInterval: () => { sandbox._intervalFn = null; },
    setTimeout: (fn) => fn(),
    console
  };

  vm.createContext(sandbox);
  vm.runInContext(dataCode, sandbox);
  vm.runInContext(engineCode, sandbox);
  if (sandbox.document._onReady) sandbox.document._onReady();

  const api = sandbox.window.__memoryAtlasTest;
  assert(api && typeof api === 'object', `[${lang}] window.__memoryAtlasTest not exposed`);
  if (!api) continue;

  // 1. Test History Options across all 3 metrics & ECharts SSR
  for (const metric of ['revenue', 'capacity', 'price']) {
    for (const yIdx of [0, 15, 30, 45, 46]) {
      api.state.view = 'history';
      api.state.metric = metric;
      api.state.yearIndex = yIdx;
      const opt = api.buildHistoryOption(api.state);
      assert(opt && Array.isArray(opt.series) && opt.series.length === 6, `[${lang}] history(${metric}, idx=${yIdx}) must have 6 series`);

      if (opt.yAxis && opt.yAxis.type === 'log') {
        opt.series.forEach(s => {
          s.data.forEach(d => {
            const v = d && typeof d === 'object' ? d.value : d;
            assert(v === null || (typeof v === 'number' && v > 0), `[${lang}] log series ${s.name} has non-positive value ${v}`);
          });
        });
      }

      const chart = echarts.init(null, null, { renderer: 'svg', ssr: true, width: 840, height: 520 });
      chart.setOption(opt);
      const svg = chart.renderToSVGString();
      assert(svg.includes('<svg') && svg.length > 1000, `[${lang}] SSR history(${metric}) failed`);
      chart.dispose();
    }
  }

  // 2. Test Supply Options across DRAM, NAND, HDD & ECharts SSR
  for (const st of ['dram', 'nand', 'hdd']) {
    api.state.view = 'supply';
    api.state.supplyTech = st;
    api.state.yearIndex = 10;
    const opt = api.buildSupplyOption(api.state);
    assert(opt && Array.isArray(opt.series) && opt.series.length >= 4, `[${lang}] supply(${st}) invalid series`);
    const chart = echarts.init(null, null, { renderer: 'svg', ssr: true, width: 840, height: 520 });
    chart.setOption(opt);
    const svg = chart.renderToSVGString();
    assert(svg.includes('<svg') && svg.length > 1000, `[${lang}] SSR supply(${st}) failed`);
    chart.dispose();
  }

  // 3. Test Outlook Options across bear/base/bull & capacity/revenue & ECharts SSR
  for (const scn of ['bear', 'base', 'bull']) {
    for (const om of ['capacity', 'revenue']) {
      api.state.view = 'outlook';
      api.state.scenario = scn;
      api.state.outMetric = om;
      api.state.yearIndex = 10;
      const opt = api.buildOutlookOption(api.state);
      assert(opt && Array.isArray(opt.series) && opt.series.length === 7, `[${lang}] outlook(${scn}, ${om}) must have 7 segment series`);
      const chart = echarts.init(null, null, { renderer: 'svg', ssr: true, width: 840, height: 520 });
      chart.setOption(opt);
      const svg = chart.renderToSVGString();
      assert(svg.includes('<svg') && svg.length > 1000, `[${lang}] SSR outlook(${scn}, ${om}) failed`);
      chart.dispose();
    }
  }

  // 4. Test Side Charts for each view
  for (const v of ['history', 'supply', 'outlook']) {
    api.setView(v);
    const side = api.buildSideOptions(api.state);
    assert(side && side.a && side.b, `[${lang}] buildSideOptions(${v}) missing a or b`);
    for (const key of ['a', 'b']) {
      const c = echarts.init(null, null, { renderer: 'svg', ssr: true, width: 380, height: 230 });
      c.setOption(side[key]);
      const svg = c.renderToSVGString();
      assert(svg.includes('<svg') && svg.length > 400, `[${lang}] SSR side chart ${v}.${key} failed`);
      c.dispose();
    }
  }

  // 5. Test single-pass playback halts at timeline end
  api.setView('history');
  api.state.yearIndex = 0;
  elements['play-btn'].listeners.click();
  let guard = 0;
  while (sandbox._intervalFn && guard < 100) {
    sandbox._intervalFn();
    guard++;
  }
  assert(guard < 100 && !sandbox._intervalFn && api.state.yearIndex === 46, `[${lang}] playback did not halt cleanly at end (idx=${api.state.yearIndex})`);
  console.log(`[PASS] [${lang.toUpperCase()}] All views, SSR charts, log safety, side charts, and playback verified.`);
}

if (errors > 0) {
  console.error(`=== ENGINE TESTS FAILED (${errors} errors) ===`);
  process.exit(1);
}
console.log('=== ALL MEMORY ATLAS ENGINE TESTS PASSED ===');
