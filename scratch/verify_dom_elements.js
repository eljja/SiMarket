// scratch/verify_dom_elements.js
const fs = require('fs');

const requiredIds = [
  'ai-network-chart',
  'ai-bar-chart',
  'network-year-display',
  'play-btn',
  'play-icon',
  'pause-icon',
  'prev-btn',
  'next-btn',
  'speed-control',
  'timeline-slider',
  'current-period',
  'btn-fit-graph',
  'kpi-capex-val',
  'kpi-revenue-val',
  'kpi-deficit-val',
  'kpi-circular-val',
  'toggle-bar-capex',
  'toggle-bar-gap',
  'dossier-name',
  'dossier-category',
  'dossier-val',
  'dossier-capex',
  'dossier-rev',
  'dossier-desc',
  'dossier-year',
  'dossier-flows',
  'theme-toggle-btn',
  'theme-sun-icon',
  'theme-moon-icon',
  'copy-citation-btn',
  'toast-container'
];

function verifyHtml(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  console.log(`Checking ${filePath}...`);
  for (const id of requiredIds) {
    if (!content.includes(`id="${id}"`)) {
      throw new Error(`Missing required element id="${id}" in ${filePath}`);
    }
  }
  console.log(`[PASS] All ${requiredIds.length} required DOM IDs present in ${filePath}`);
}

verifyHtml('ai_capital.html');
verifyHtml('ai_capital_ko.html');
