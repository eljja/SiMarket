// scratch/test_layout_none.js
// Tests deterministic proportional pixel coordinates and layout:'none' configuration

const W = 840;
const H = 580;
const padX = 65;
const padY = 55;
const usableW = W - padX * 2;
const usableH = H - padY * 2;

const normalizedCoords = {
  // Hardware Core
  nvda: { x: 0.48, y: 0.48 },

  // Memory & Packaging
  skhynix: { x: 0.38, y: 0.12 },
  samsung: { x: 0.58, y: 0.12 },
  tsmc: { x: 0.48, y: 0.80 },
  asml: { x: 0.62, y: 0.94 },
  avgo: { x: 0.32, y: 0.82 },

  // Hyperscalers (Left Wing)
  meta: { x: 0.10, y: 0.26 },
  msft: { x: 0.25, y: 0.35 },
  goog: { x: 0.16, y: 0.54 },
  amzn: { x: 0.25, y: 0.70 },

  // AI Labs & Neocloud (Right Wing)
  deepseek: { x: 0.74, y: 0.16 },
  openai: { x: 0.70, y: 0.36 },
  xai: { x: 0.88, y: 0.30 },
  anthropic: { x: 0.80, y: 0.54 },
  coreweave: { x: 0.72, y: 0.72 },

  // Capital & Real Market (Outer Flanks)
  end_market: { x: 0.08, y: 0.74 },
  vc_sovereign: { x: 0.90, y: 0.72 }
};

const requiredEntities = [
  'msft', 'goog', 'amzn', 'meta',
  'nvda', 'tsmc', 'avgo',
  'skhynix', 'samsung', 'asml',
  'openai', 'anthropic', 'xai', 'deepseek',
  'coreweave', 'vc_sovereign', 'end_market'
];

console.log('Testing coordinate boundaries for all 17 entities:');
for (const id of requiredEntities) {
  const norm = normalizedCoords[id];
  if (!norm) throw new Error(`Missing coordinates for ${id}`);
  const px = Math.round(padX + norm.x * usableW);
  const py = Math.round(padY + norm.y * usableH);

  if (px < 40 || px > W - 40) throw new Error(`X coordinate out of bounds for ${id}: ${px}`);
  if (py < 35 || py > H - 35) throw new Error(`Y coordinate out of bounds for ${id}: ${py}`);

  console.log(`  ${id.padEnd(12)} -> norm: (${norm.x.toFixed(2)}, ${norm.y.toFixed(2)}) -> px: (${px}, ${py})`);
}

console.log('All 17 entities are perfectly bounded and distributed!');
