// Stage 4 DOM verification suite: checks memory.html and memory_ko.html
// Run: node tools/memory/verify_memory_dom.js
const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..', '..');
const REQUIRED_IDS = [
  'mem-subnav',
  'view-history', 'view-supply', 'view-outlook',
  'metric-revenue', 'metric-capacity', 'metric-price',
  'supply-dram', 'supply-nand', 'supply-hdd',
  'scn-bear', 'scn-base', 'scn-bull',
  'out-capacity', 'out-revenue',
  'mem-main-chart', 'mem-side-chart-a', 'mem-side-chart-b',
  'kpi-mem-rev', 'kpi-mem-cap', 'kpi-dram-price', 'kpi-nand-price',
  'prev-btn', 'play-btn', 'next-btn', 'speed-control', 'timeline-slider', 'current-period',
  'mem-year-display', 'milestone-list', 'side-table', 'sources-list',
  'theme-toggle-btn', 'copy-citation-btn', 'toast-container'
];

let errors = 0;
for (const file of ['memory.html', 'memory_ko.html']) {
  const fp = path.join(root, file);
  if (!fs.existsSync(fp)) {
    errors++;
    console.error(`[FAIL] ${file} does not exist`);
    continue;
  }
  const html = fs.readFileSync(fp, 'utf8');
  for (const id of REQUIRED_IDS) {
    if (!html.includes(`id="${id}"`)) {
      errors++;
      console.error(`[FAIL] ${file} missing id="${id}"`);
    }
  }
  if (!html.includes('memory_data.js') || !html.includes('memory.js') || !html.includes('memory.css')) {
    errors++;
    console.error(`[FAIL] ${file} missing required asset reference (memory_data.js / memory.js / memory.css)`);
  }
  const expectedLang = file === 'memory_ko.html' ? 'ko' : 'en';
  if (!new RegExp(`<html[^>]*lang="${expectedLang}"`).test(html)) {
    errors++;
    console.error(`[FAIL] ${file} must have <html lang="${expectedLang}">`);
  }
}

if (errors > 0) {
  console.error(`=== DOM VERIFICATION FAILED (${errors} errors) ===`);
  process.exit(1);
}
console.log('=== ALL MEMORY ATLAS DOM CHECKS PASSED ===');
