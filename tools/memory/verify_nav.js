// Stage 1/4 test: 3-app navigation + Si Market sub-menu.
// Run: node tools/memory/verify_nav.js
const fs = require('fs');
const path = require('path');
const root = path.resolve(__dirname, '..', '..');

const pages = [
  { file: 'index.html', lang: 'en', active: 'index.html' },
  { file: 'index_ko.html', lang: 'ko', active: 'index_ko.html' },
  { file: 'ai_capital.html', lang: 'en', active: 'ai_capital.html' },
  { file: 'ai_capital_ko.html', lang: 'ko', active: 'ai_capital_ko.html' },
  { file: 'memory.html', lang: 'en', active: 'memory.html' },
  { file: 'memory_ko.html', lang: 'ko', active: 'memory_ko.html' }
];
const onlyExisting = process.argv.includes('--existing-only');
const TAB_IDS = ['tab-total', 'tab-dram', 'tab-flash', 'tab-logic', 'tab-analog', 'tab-opto', 'tab-power', 'tab-mcu', 'tab-foundry', 'tab-fabless'];

let failures = 0;
const fail = (msg) => { failures++; console.error('[FAIL] ' + msg); };

for (const p of pages) {
  const fp = path.join(root, p.file);
  if (!fs.existsSync(fp)) {
    if (onlyExisting) { console.log('[SKIP] ' + p.file + ' (not created yet)'); continue; }
    fail(p.file + ' does not exist'); continue;
  }
  const html = fs.readFileSync(fp, 'utf8');
  const sfx = p.lang === 'ko' ? '_ko' : '';
  const expectedHrefs = ['index' + sfx + '.html', 'ai_capital' + sfx + '.html', 'memory' + sfx + '.html'];

  const navMatch = html.match(/<nav[^>]*class="[^"]*\bapp-nav\b[^"]*"[^>]*>([\s\S]*?)<\/nav>/);
  if (!navMatch) { fail(p.file + ': nav.app-nav missing'); continue; }
  const links = [...navMatch[1].matchAll(/<a\b([^>]*)>/g)].map(m => m[1]).filter(a => /\bapp-nav-link\b/.test(a));
  if (links.length !== 3) fail(p.file + ': expected 3 a.app-nav-link, got ' + links.length);
  const hrefs = links.map(a => (a.match(/href="([^"]+)"/) || [])[1]);
  if (JSON.stringify(hrefs) !== JSON.stringify(expectedHrefs)) fail(p.file + ': hrefs ' + JSON.stringify(hrefs) + ' != ' + JSON.stringify(expectedHrefs));
  const actives = links.filter(a => /class="[^"]*\bactive\b/.test(a));
  if (actives.length !== 1) fail(p.file + ': expected exactly 1 active link, got ' + actives.length);
  else if (!actives[0].includes('href="' + p.active + '"')) fail(p.file + ': active link should be ' + p.active);

  const headerBlock = (html.match(/<header[\s\S]*?<\/header>/) || [''])[0];
  if (!headerBlock.includes('app-nav')) fail(p.file + ': app-nav must be inside <header>');

  if (p.file.startsWith('index')) {
    if (headerBlock.includes('market-selector')) fail(p.file + ': .market-selector must NOT be inside <header>');
    const sub = html.match(/<nav[^>]*class="[^"]*\bsub-menu-bar\b[^"]*"[^>]*>([\s\S]*?)<\/nav>/);
    if (!sub) { fail(p.file + ': nav.sub-menu-bar missing'); continue; }
    if (!sub[1].includes('market-selector')) fail(p.file + ': .market-selector must be inside .sub-menu-bar');
    for (const id of TAB_IDS) if (!sub[1].includes('id="' + id + '"')) fail(p.file + ': missing #' + id + ' in sub-menu');
  }
  if (!failures) console.log('[PASS] ' + p.file);
}
if (failures) { console.error(failures + ' failure(s)'); process.exit(1); }
console.log('=== NAV TESTS PASSED ===');
