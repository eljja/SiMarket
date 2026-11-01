// scratch/build_datasets.js
// Generates complete ai_capital_data.js and ai_capital_data_ko.js
const fs = require('fs');
const path = require('path');

const entitiesMeta = {
  // Hyperscalers
  msft: {
    category: 'hyperscaler',
    nameEN: 'Microsoft',
    nameKO: '마이크로소프트',
    initialX: -140,
    initialY: -130
  },
  goog: {
    category: 'hyperscaler',
    nameEN: 'Alphabet / Google',
    nameKO: '알파벳 / 구글',
    initialX: -185,
    initialY: 5
  },
  amzn: {
    category: 'hyperscaler',
    nameEN: 'Amazon / AWS',
    nameKO: '아마존 / AWS',
    initialX: 140,
    initialY: -130
  },
  meta: {
    category: 'hyperscaler',
    nameEN: 'Meta Platforms',
    nameKO: '메타 플랫폼스',
    initialX: 185,
    initialY: 5
  },

  // AI Silicon & Foundry
  nvda: {
    category: 'chipmaker',
    nameEN: 'NVIDIA',
    nameKO: '엔비디아',
    initialX: 0,
    initialY: -10
  },
  tsmc: {
    category: 'chipmaker',
    nameEN: 'TSMC',
    nameKO: 'TSMC',
    initialX: -130,
    initialY: 190
  },
  avgo: {
    category: 'chipmaker',
    nameEN: 'Broadcom',
    nameKO: '브로드컴',
    initialX: -215,
    initialY: 115
  },

  // Memory & Lithography
  skhynix: {
    category: 'semiconductor_supply',
    nameEN: 'SK Hynix',
    nameKO: 'SK하이닉스',
    initialX: -20,
    initialY: -210
  },
  samsung: {
    category: 'semiconductor_supply',
    nameEN: 'Samsung Electronics',
    nameKO: '삼성전자',
    initialX: 110,
    initialY: -195
  },
  asml: {
    category: 'semiconductor_supply',
    nameEN: 'ASML',
    nameKO: 'ASML',
    initialX: 20,
    initialY: 235
  },

  // Frontier AI Labs
  openai: {
    category: 'ai_lab',
    nameEN: 'OpenAI',
    nameKO: '오픈AI',
    initialX: -60,
    initialY: -55
  },
  anthropic: {
    category: 'ai_lab',
    nameEN: 'Anthropic',
    nameKO: '앤트로픽',
    initialX: 55,
    initialY: -55
  },
  xai: {
    category: 'ai_lab',
    nameEN: 'xAI',
    nameKO: 'xAI',
    initialX: 75,
    initialY: 45
  },
  deepseek: {
    category: 'ai_lab',
    nameEN: 'DeepSeek',
    nameKO: '딥시크 (DeepSeek)',
    initialX: -75,
    initialY: 45
  },

  // Neocloud
  coreweave: {
    category: 'neocloud',
    nameEN: 'CoreWeave',
    nameKO: '코어위브',
    initialX: 0,
    initialY: 85
  },

  // VC & Sovereign
  vc_sovereign: {
    category: 'venture_capital',
    nameEN: 'VC & Sovereign Funds',
    nameKO: '벤처캐피탈 & 국부펀드',
    initialX: 220,
    initialY: 155
  },

  // End Market
  end_market: {
    category: 'end_market',
    nameEN: 'Enterprise & End Users',
    nameKO: '실제 기업 & 최종 사용자 시장',
    initialX: -230,
    initialY: -170
  }
};

console.log('Entities meta configured:', Object.keys(entitiesMeta).length);
