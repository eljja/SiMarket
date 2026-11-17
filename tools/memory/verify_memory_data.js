// Stage 3 verification suite: validates window.memoryAtlas in memory_data.js
// Run: node tools/memory/verify_memory_data.js
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const root = path.resolve(__dirname, '..', '..');
const dataPath = path.join(root, 'memory_data.js');

let errors = 0;
function check(cond, msg) {
  if (!cond) {
    errors++;
    console.error('[FAIL] ' + msg);
  }
}

if (!fs.existsSync(dataPath)) {
  console.error('[FAIL] memory_data.js does not exist yet');
  process.exit(1);
}

const code = fs.readFileSync(dataPath, 'utf8');
const sandbox = { window: {} };
vm.createContext(sandbox);
vm.runInContext(code, sandbox);

const db = sandbox.window.memoryAtlas;
check(db && typeof db === 'object', 'window.memoryAtlas must be an object');
if (!db) process.exit(1);

// 1. Meta & Sources
check(db.meta && db.meta.historyStart === 1980 && db.meta.estimateYear === 2026 && db.meta.outlookEnd === 2035, 'meta bounds invalid');
check(Array.isArray(db.sources) && db.sources.length >= 10, 'sources must be array with >= 10 entries');
const sourceIds = new Set((db.sources || []).map(s => s.id));
(db.sources || []).forEach(s => {
  check(s.id && s.publisher && s.title && s.url, `source ${s.id} missing fields`);
});

function checkBilingual(obj, label) {
  check(obj && typeof obj.en === 'string' && obj.en.trim().length > 0 && typeof obj.ko === 'string' && obj.ko.trim().length > 0, `${label} must have non-empty {en, ko}`);
}

// 2. Tech definitions
const EXPECTED_TECHS = ['sram', 'dram', 'nor', 'nand', 'hdd', 'tape'];
check(Array.isArray(db.techs) && JSON.stringify(db.techs.map(t => t.id)) === JSON.stringify(EXPECTED_TECHS), 'techs must match exact 6 ids');
(db.techs || []).forEach(t => {
  check(/^#[0-9a-fA-F]{6}$/.test(t.color), `tech ${t.id} invalid color`);
  checkBilingual(t.name, `tech ${t.id}.name`);
  checkBilingual(t.desc, `tech ${t.id}.desc`);
});

// 3. History (1980..2026)
const h = db.history;
check(h && Array.isArray(h.years) && h.years.length === 47 && h.years[0] === 1980 && h.years[46] === 2026, 'history.years must be 1980..2026 (47 years)');
const VALID_FLAGS = new Set(['R', 'E', 'I', 'F']);

for (const metric of ['revenue', 'capacity', 'price']) {
  check(h[metric] && typeof h[metric] === 'object', `history.${metric} missing`);
  for (const tid of EXPECTED_TECHS) {
    const arr = h[metric][tid];
    const qArr = h.quality && h.quality[metric] && h.quality[metric][tid];
    const srcArr = h.sources && h.sources[metric] && h.sources[metric][tid];
    check(Array.isArray(arr) && arr.length === 47, `history.${metric}.${tid} length must be 47`);
    check(Array.isArray(qArr) && qArr.length === 47, `history.quality.${metric}.${tid} length must be 47`);
    check(Array.isArray(srcArr) && srcArr.length >= 1 && srcArr.every(id => sourceIds.has(id)), `history.sources.${metric}.${tid} invalid source ids`);
    if (!Array.isArray(arr) || !Array.isArray(qArr)) continue;

    let nonNullCount = 0;
    arr.forEach((v, idx) => {
      const yr = h.years[idx];
      if (tid === 'nor' && yr < 1988) check(v === null, `nor.${metric}[${yr}] must be null before 1988`);
      if (tid === 'nand' && yr < 1989) check(v === null, `nand.${metric}[${yr}] must be null before 1989`);
      if (v !== null) {
        nonNullCount++;
        check(typeof v === 'number' && Number.isFinite(v) && v > 0, `history.${metric}.${tid}[${yr}] must be > 0 (got ${v})`);
        check(VALID_FLAGS.has(qArr[idx]), `history.quality.${metric}.${tid}[${yr}] invalid flag ${qArr[idx]}`);
      }
    });
    check(nonNullCount >= 25, `history.${metric}.${tid} has too few non-null points (${nonNullCount})`);
  }
}

// Revenue / Capacity ≈ Price consistency check for dram, nand, hdd
for (const tid of ['dram', 'nand', 'hdd']) {
  h.years.forEach((yr, idx) => {
    const rev = h.revenue[tid][idx];
    const cap = h.capacity[tid][idx];
    const prc = h.price[tid][idx];
    if (rev !== null && cap !== null && prc !== null) {
      const implied = rev / cap;
      const relDiff = Math.abs(prc - implied) / prc;
      check(relDiff <= 0.35, `Consistency ${tid}[${yr}]: price=${prc} vs rev/cap=${implied.toFixed(4)} (diff ${(relDiff * 100).toFixed(1)}%)`);
    }
  });
}

// 4. Supply / Demand / Price
check(db.supply && typeof db.supply === 'object', 'supply object missing');
for (const st of ['dram', 'nand', 'hdd']) {
  const s = db.supply[st];
  check(s && Array.isArray(s.years) && s.years.length >= 15, `supply.${st}.years invalid`);
  if (!s) continue;
  const nY = s.years.length;
  check(Array.isArray(s.vendors) && s.vendors.length >= 3, `supply.${st}.vendors invalid`);
  s.vendors.forEach(v => {
    checkBilingual(v.name, `supply.${st}.vendor.${v.id}`);
    check(Array.isArray(s.vendorShare[v.id]) && s.vendorShare[v.id].length === nY, `supply.${st}.vendorShare.${v.id} length mismatch`);
    check(Array.isArray(s.bitSupply[v.id]) && s.bitSupply[v.id].length === nY, `supply.${st}.bitSupply.${v.id} length mismatch`);
  });
  for (let i = 0; i < nY; i++) {
    const sumShare = s.vendors.reduce((acc, v) => acc + (s.vendorShare[v.id][i] || 0), 0);
    check(Math.abs(sumShare - 100) <= 1.5, `supply.${st} year ${s.years[i]} vendorShare sum=${sumShare.toFixed(1)}`);
  }
  check(Array.isArray(s.demand) && s.demand.length === nY && s.demand.every(x => x > 0), `supply.${st}.demand invalid`);
  check(Array.isArray(s.supplyTotal) && s.supplyTotal.length === nY && s.supplyTotal.every(x => x > 0), `supply.${st}.supplyTotal invalid`);
  check(Array.isArray(s.price) && s.price.length === nY && s.price.every(x => x > 0), `supply.${st}.price invalid`);
  check(Array.isArray(s.cycle) && s.cycle.length === nY && s.cycle.every(c => ['shortage', 'balanced', 'glut'].includes(c)), `supply.${st}.cycle invalid`);
}

// 5. Outlook (2025..2035)
const out = db.outlook;
const EXPECTED_SEGS = ['ai_dc', 'cloud_dc', 'pc', 'smartphone', 'auto', 'robot', 'edge_other'];
check(out && Array.isArray(out.years) && out.years.length === 11 && out.years[0] === 2025 && out.years[10] === 2035, 'outlook.years must be 2025..2035');
check(Array.isArray(out.segments) && JSON.stringify(out.segments.map(s => s.id)) === JSON.stringify(EXPECTED_SEGS), 'outlook.segments mismatch');
out.segments.forEach(s => checkBilingual(s.name, `outlook.segment.${s.id}`));

for (const scn of ['bear', 'base', 'bull']) {
  const sc = out.scenarios && out.scenarios[scn];
  check(sc && sc.capacity && sc.revenue, `outlook.scenarios.${scn} missing`);
  for (const seg of EXPECTED_SEGS) {
    check(Array.isArray(sc.capacity[seg]) && sc.capacity[seg].length === 11 && sc.capacity[seg].every(x => x > 0), `outlook.${scn}.capacity.${seg} invalid`);
    check(Array.isArray(sc.revenue[seg]) && sc.revenue[seg].length === 11 && sc.revenue[seg].every(x => x > 0), `outlook.${scn}.revenue.${seg} invalid`);
  }
  const mix = out.techMix2035 && out.techMix2035[scn];
  check(mix && typeof mix === 'object', `outlook.techMix2035.${scn} missing`);
  if (mix) {
    const sumMix = ['dram', 'hbm', 'nand', 'hdd', 'tape'].reduce((a, k) => a + (mix[k] || 0), 0);
    check(Math.abs(sumMix - 100) <= 1.0, `outlook.techMix2035.${scn} sum=${sumMix}`);
  }
}

// Scenario ordering check: bull >= base >= bear for every year
for (let i = 0; i < 11; i++) {
  for (const m of ['capacity', 'revenue']) {
    const sum = (scn) => EXPECTED_SEGS.reduce((a, seg) => a + out.scenarios[scn][m][seg][i], 0);
    const bBear = sum('bear'), bBase = sum('base'), bBull = sum('bull');
    check(bBull + 1e-6 >= bBase && bBase + 1e-6 >= bBear, `outlook ${m} year ${out.years[i]} order violated: bear=${bBear}, base=${bBase}, bull=${bBull}`);
    if (i === 0) {
      check(Math.abs(bBull - bBear) / bBase <= 0.02, `outlook ${m} 2025 baseline must match across scenarios`);
    }
  }
}

check(Array.isArray(out.assumptions) && out.assumptions.length >= 6, 'outlook.assumptions must have >= 6 items');
out.assumptions.forEach((a, i) => checkBilingual(a.text, `outlook.assumptions[${i}]`));
check(Array.isArray(db.milestones) && db.milestones.length >= 12, 'milestones must have >= 12 items');
db.milestones.forEach((m, i) => checkBilingual(m.text, `milestones[${i}]`));

if (errors > 0) {
  console.error(`=== FAILED with ${errors} error(s) ===`);
  process.exit(1);
}
console.log('=== ALL MEMORY ATLAS DATA CHECKS PASSED (0 errors) ===');
