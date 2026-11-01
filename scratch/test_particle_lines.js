// scratch/test_particle_lines.js
// Tests configuration of dual-layer ECharts graph + lines particle stream

const normalizedCoords = {
  nvda: { x: 0.48, y: 0.48 },
  skhynix: { x: 0.38, y: 0.12 },
  samsung: { x: 0.58, y: 0.12 },
  tsmc: { x: 0.48, y: 0.80 },
  asml: { x: 0.62, y: 0.94 },
  avgo: { x: 0.32, y: 0.82 },
  meta: { x: 0.10, y: 0.26 },
  msft: { x: 0.25, y: 0.35 },
  goog: { x: 0.16, y: 0.54 },
  amzn: { x: 0.25, y: 0.70 },
  deepseek: { x: 0.74, y: 0.16 },
  openai: { x: 0.70, y: 0.36 },
  xai: { x: 0.88, y: 0.30 },
  anthropic: { x: 0.80, y: 0.54 },
  coreweave: { x: 0.72, y: 0.72 },
  end_market: { x: 0.08, y: 0.74 },
  vc_sovereign: { x: 0.90, y: 0.72 }
};

const W = 840;
const H = 580;
const padX = 65;
const padY = 55;
const usableW = W - padX * 2;
const usableH = H - padY * 2;

function getPixelCoords() {
  const map = {};
  for (const id in normalizedCoords) {
    map[id] = [
      Math.round(padX + normalizedCoords[id].x * usableW),
      Math.round(padY + normalizedCoords[id].y * usableH)
    ];
  }
  return map;
}

const coords = getPixelCoords();
console.log('Sample node pixel coords:', coords.nvda, coords.msft, coords.openai);

// For lines series: data items have coords: [ [x1, y1], [x2, y2] ]
const testEdges = [
  { source: 'msft', target: 'openai', amount: 2.5, color: '#00e5ff' },
  { source: 'openai', target: 'msft', amount: 0.35, color: '#38bdf8' },
  { source: 'msft', target: 'nvda', amount: 2.8, color: '#10b981' }
];

const linesData = testEdges.map(e => ({
  coords: [coords[e.source], coords[e.target]],
  lineStyle: {
    curveness: 0.16,
    color: e.color
  },
  effect: {
    show: e.amount > 0,
    period: Math.max(2, Math.min(6, 7 - Math.sqrt(e.amount))),
    trailLength: 0.3,
    symbol: 'arrow',
    symbolSize: Math.max(4, Math.min(8, 3 + Math.sqrt(e.amount))),
    color: '#ffffff'
  }
}));

console.log('Constructed linesData length:', linesData.length);
console.log('First particle line:', JSON.stringify(linesData[0], null, 2));
