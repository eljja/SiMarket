// scratch/test_browser_morph.js
// Tests transition between quarters in layout:none mode

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const dataCode = fs.readFileSync(path.resolve('ai_capital_data.js'), 'utf8');

const ctx = { window: {}, console };
vm.createContext(ctx);
vm.runInContext(dataCode, ctx);

const timeline = ctx.window.aiCapitalTimelineData;

console.log(`Timeline loaded with ${timeline.length} quarters.`);

// Test transition between 2023 Q1 (idx 0), 2023 Q2 (idx 1), and 2024 Q3 (idx 6)
const q1 = timeline[0];
const q2 = timeline[1];
const q6 = timeline[6];

console.log(`Q1 edges: ${q1.edges.length}, Q2 edges: ${q2.edges.length}, Q6 edges: ${q6.edges.length}`);

// Check edge key tracking
const q1Edges = new Set(q1.edges.map(e => `${e.source}_${e.target}_${e.flowType}`));
const q2Edges = new Set(q2.edges.map(e => `${e.source}_${e.target}_${e.flowType}`));

let commonCount = 0;
for (const k of q2Edges) {
  if (q1Edges.has(k)) commonCount++;
}

console.log(`Common transaction lines between Q1 and Q2: ${commonCount} (these will smoothly tween thickness!)`);
console.log(`New transaction lines in Q2: ${q2Edges.size - commonCount} (these will smoothly fade in!)`);
