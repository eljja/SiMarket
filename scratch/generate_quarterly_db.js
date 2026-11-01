// scratch/generate_quarterly_db.js
// Builds the 22-period dataset: 6 Foundational Eras (2017-2022) + 16 Quarters (2023 Q1 - 2026 Q4)
const fs = require('fs');
const path = require('path');
const { masterChannels, quarterAmounts, getEdgeDescription } = require('./build_master_edges.js');
const prevDataEn = require('../ai_capital_data.js');
const prevDataKo = require('../ai_capital_data_ko.js');

const categoryDefinitionsEN = prevDataEn.categoryDefinitions;
const flowTypeDefinitionsEN = prevDataEn.flowTypeDefinitions;
const categoryDefinitionsKO = prevDataKo.categoryDefinitions;
const flowTypeDefinitionsKO = prevDataKo.flowTypeDefinitions;

// Extract entity base definitions
const entityBase = {};
prevDataEn.aiCapitalTimelineData[0].nodes.forEach((n, idx) => {
  const nKo = prevDataKo.aiCapitalTimelineData[0].nodes[idx];
  entityBase[n.id] = {
    category: n.category,
    nameEN: n.name,
    nameKO: nKo.name,
    descEN: n.desc,
    descKO: nKo.desc,
    initialX: n.initialX,
    initialY: n.initialY
  };
});

const foundationalPeriods = [
  // ─── 2017: Genesis ────────────────────────────────────────────────
  {
    id: '2017', year: 2017, quarter: null, label: '2017',
    dateRangeEN: 'Full Year 2017', dateRangeKO: '2017년 전체',
    titleEN: '2017: Genesis — "Attention Is All You Need" & NVIDIA Volta V100',
    titleKO: '2017년: AI의 태동 — 트랜스포머 아키텍처와 엔비디아 볼타 V100의 탄생',
    summaryEN: 'Google Brain researchers publish "Attention Is All You Need", introducing the Transformer architecture. NVIDIA launches the Volta V100 featuring the world\'s first Tensor Cores. OpenAI operates as a non-profit research lab with ~30 staff. Total industry AI capex is under $3.5B.',
    summaryKO: '구글 브레인 연구팀이 트랜스포머 아키텍처를 제시한 논문 "Attention Is All You Need"를 발표하며 현대 생성형 AI의 막을 엽니다. 엔비디아는 사상 최초의 텐서 코어를 탑재한 V100 GPU를 출시합니다. OpenAI는 30여 명의 비영리 연구소에 불과하며, 업계 전체 AI 설비투자는 35억 달러 수준입니다.',
    macro: { totalAiCapex: 3.2, realEndUserRevenue: 0.1, circularRatio: 12 },
    caps: {
      msft: 660, goog: 710, amzn: 560, meta: 510,
      nvda: 118, tsmc: 200, avgo: 105,
      skhynix: 50, samsung: 320, asml: 70,
      openai: 0.3, anthropic: 0, xai: 0, deepseek: 0,
      coreweave: 0.05, vc_sovereign: 250, end_market: 400
    },
    nodeMetrics: {
      msft: { capex: 0.9, rev: 0.05 }, goog: { capex: 1.1, rev: 0.05 }, amzn: { capex: 0.8, rev: 0.02 }, meta: { capex: 0.5, rev: 0.01 },
      nvda: { capex: 0.1, rev: 0.9 }, tsmc: { capex: 2.8, rev: 8.2 }, avgo: { capex: 0.05, rev: 0.4 },
      skhynix: { capex: 0.8, rev: 0.2 }, samsung: { capex: 3.2, rev: 0.4 }, asml: { capex: 0.15, rev: 2.2 },
      openai: { capex: 0.02, rev: 0.0 }, anthropic: { capex: 0, rev: 0 }, xai: { capex: 0, rev: 0 }, deepseek: { capex: 0, rev: 0 },
      coreweave: { capex: 0.01, rev: 0.0 }, vc_sovereign: { capex: 0, rev: 0 }, end_market: { capex: 0, rev: 0.1 }
    },
    unformed: ['anthropic', 'xai', 'deepseek'],
    highGrowth: ['goog', 'nvda']
  },

  // ─── 2018: Pretraining Revolution ─────────────────────────────────
  {
    id: '2018', year: 2018, quarter: null, label: '2018',
    dateRangeEN: 'Full Year 2018', dateRangeKO: '2018년 전체',
    titleEN: '2018: Pretraining Era — BERT, GPT-1 & Turing Architecture',
    titleKO: '2018년: 사전학습 혁명 — 구글 BERT와 OpenAI GPT-1의 등장',
    summaryEN: 'Google introduces BERT, setting state-of-the-art across all NLP benchmarks. OpenAI publishes GPT-1, pioneering unsupervised pre-training. NVIDIA launches the Turing architecture (T4) as deep learning shifts from convolutional nets to foundational language models.',
    summaryKO: '구글이 자연어 처리의 판도를 바꾼 BERT를 발표하고, OpenAI는 비지도 사전학습 기반의 GPT-1을 공개합니다. 엔비디아는 튜링(T4) 아키텍처를 출시하며, 딥러닝 산업이 언어 기반 파운데이션 모델로 전환되기 시작합니다.',
    macro: { totalAiCapex: 5.4, realEndUserRevenue: 0.2, circularRatio: 18 },
    caps: {
      msft: 780, goog: 725, amzn: 730, meta: 375,
      nvda: 81, tsmc: 190, avgo: 100,
      skhynix: 45, samsung: 280, asml: 65,
      openai: 0.5, anthropic: 0, xai: 0, deepseek: 0,
      coreweave: 0.05, vc_sovereign: 280, end_market: 480
    },
    nodeMetrics: {
      msft: { capex: 1.2, rev: 0.08 }, goog: { capex: 1.6, rev: 0.08 }, amzn: { capex: 1.1, rev: 0.04 }, meta: { capex: 0.8, rev: 0.02 },
      nvda: { capex: 0.15, rev: 1.3 }, tsmc: { capex: 3.1, rev: 8.8 }, avgo: { capex: 0.08, rev: 0.5 },
      skhynix: { capex: 0.9, rev: 0.3 }, samsung: { capex: 3.5, rev: 0.5 }, asml: { capex: 0.2, rev: 2.5 },
      openai: { capex: 0.04, rev: 0.01 }, anthropic: { capex: 0, rev: 0 }, xai: { capex: 0, rev: 0 }, deepseek: { capex: 0, rev: 0 },
      coreweave: { capex: 0.02, rev: 0.0 }, vc_sovereign: { capex: 0, rev: 0 }, end_market: { capex: 0, rev: 0.2 }
    },
    unformed: ['anthropic', 'xai', 'deepseek'],
    highGrowth: ['goog', 'openai']
  },

  // ─── 2019: Foundation Alliance ────────────────────────────────────
  {
    id: '2019', year: 2019, quarter: null, label: '2019',
    dateRangeEN: 'Full Year 2019', dateRangeKO: '2019년 전체',
    titleEN: '2019: The Foundation Bet — Microsoft’s $1B Partnership with OpenAI',
    titleKO: '2019년: 10억 달러의 결단 — 마이크로소프트와 OpenAI의 독점 동맹',
    summaryEN: 'Microsoft invests $1B into OpenAI to co-build an exclusive Azure supercomputer with 10,000 GPUs. OpenAI transitions to a "capped-profit" entity. OpenAI publishes GPT-2, initially deemed "too dangerous to release" due to synthetic text coherence.',
    summaryKO: '마이크로소프트가 OpenAI에 10억 달러를 투자하며 독점 Azure 클라우드 컴퓨팅 파트너십을 체결하고 1만 장의 GPU 전용 슈퍼컴퓨터를 구축합니다. OpenAI는 영리법인을 설립하고 GPT-2를 발표하며 생성형 AI의 상업적 잠재력을 증명합니다.',
    macro: { totalAiCapex: 8.8, realEndUserRevenue: 0.35, circularRatio: 28 },
    caps: {
      msft: 1200, goog: 920, amzn: 920, meta: 585,
      nvda: 144, tsmc: 290, avgo: 125,
      skhynix: 55, samsung: 330, asml: 125,
      openai: 1.0, anthropic: 0, xai: 0, deepseek: 0,
      coreweave: 0.08, vc_sovereign: 320, end_market: 580
    },
    nodeMetrics: {
      msft: { capex: 2.1, rev: 0.12 }, goog: { capex: 2.2, rev: 0.12 }, amzn: { capex: 1.8, rev: 0.08 }, meta: { capex: 1.2, rev: 0.04 },
      nvda: { capex: 0.25, rev: 2.1 }, tsmc: { capex: 4.2, rev: 9.8 }, avgo: { capex: 0.1, rev: 0.65 },
      skhynix: { capex: 1.1, rev: 0.4 }, samsung: { capex: 4.2, rev: 0.65 }, asml: { capex: 0.3, rev: 3.2 },
      openai: { capex: 0.12, rev: 0.02 }, anthropic: { capex: 0, rev: 0 }, xai: { capex: 0, rev: 0 }, deepseek: { capex: 0, rev: 0 },
      coreweave: { capex: 0.05, rev: 0.01 }, vc_sovereign: { capex: 0, rev: 0 }, end_market: { capex: 0, rev: 0.35 }
    },
    unformed: ['anthropic', 'xai', 'deepseek'],
    highGrowth: ['msft', 'openai']
  },

  // ─── 2020: Scaling Laws ───────────────────────────────────────────
  {
    id: '2020', year: 2020, quarter: null, label: '2020',
    dateRangeEN: 'Full Year 2020', dateRangeKO: '2020년 전체',
    titleEN: '2020: GPT-3 & Scaling Laws Shock — NVIDIA Ampere A100 Launch',
    titleKO: '2020년: GPT-3와 스케일링 법칙의 충격 — 엔비디아 암페어 A100 출시',
    summaryEN: 'OpenAI unveils GPT-3 (175 billion parameters), shocking the world with few-shot reasoning. Jared Kaplan et al. codify the neural scaling laws: performance scales predictably with compute. NVIDIA launches the Ampere A100 on TSMC 7nm with HBM2e, establishing an enterprise monopoly.',
    summaryKO: 'OpenAI가 1,750억 개 매개변수의 GPT-3를 발표하여 전 세계에 충격을 안깁니다. 딥러닝 성능이 컴퓨팅 파워에 비례해 정량적으로 향상된다는 "스케일링 법칙"이 확립됩니다. 엔비디아는 TSMC 7nm 및 HBM2e 기반의 암페어 A100을 출시하며 AI 인프라 독점의 기틀을 다집니다.',
    macro: { totalAiCapex: 13.5, realEndUserRevenue: 0.45, circularRatio: 35 },
    caps: {
      msft: 1680, goog: 1180, amzn: 1630, meta: 775,
      nvda: 323, tsmc: 450, avgo: 175,
      skhynix: 65, samsung: 430, asml: 195,
      openai: 5.0, anthropic: 0, xai: 0, deepseek: 0,
      coreweave: 0.15, vc_sovereign: 380, end_market: 720
    },
    nodeMetrics: {
      msft: { capex: 3.5, rev: 0.18 }, goog: { capex: 3.2, rev: 0.18 }, amzn: { capex: 2.8, rev: 0.12 }, meta: { capex: 2.0, rev: 0.06 },
      nvda: { capex: 0.35, rev: 3.4 }, tsmc: { capex: 5.8, rev: 12.2 }, avgo: { capex: 0.12, rev: 0.9 },
      skhynix: { capex: 1.3, rev: 0.6 }, samsung: { capex: 5.5, rev: 0.8 }, asml: { capex: 0.4, rev: 4.2 },
      openai: { capex: 0.25, rev: 0.05 }, anthropic: { capex: 0, rev: 0 }, xai: { capex: 0, rev: 0 }, deepseek: { capex: 0, rev: 0 },
      coreweave: { capex: 0.08, rev: 0.02 }, vc_sovereign: { capex: 0, rev: 0 }, end_market: { capex: 0, rev: 0.45 }
    },
    unformed: ['anthropic', 'xai', 'deepseek'],
    highGrowth: ['openai', 'nvda']
  },

  // ─── 2021: Commercialization & Anthropic Founded ─────────────────
  {
    id: '2021', year: 2021, quarter: null, label: '2021',
    dateRangeEN: 'Full Year 2021', dateRangeKO: '2021년 전체',
    titleEN: '2021: Commercialization & Anthropic Founded — DALL-E & Codex',
    titleKO: '2021년: 앤트로픽의 탄생과 상용화 — DALL-E와 코덱스의 등장',
    summaryEN: 'Dario Amodei, Daniela Amodei, and senior researchers leave OpenAI over commercialization and safety disagreements to establish Anthropic. OpenAI launches DALL-E 1 and Codex (powering GitHub Copilot). Commercial API access opens, laying the foundation for generative software.',
    summaryKO: 'Dario Amodei를 비롯한 핵심 연구진이 안전성과 상업화 방향성에 대한 이견으로 OpenAI를 떠나 앤트로픽(Anthropic)을 설립합니다. OpenAI는 DALL-E 1과 Codex(깃허브 코파일럿 기반)를 공개하며 기업용 API 상용화의 물꼬를 틉니다.',
    macro: { totalAiCapex: 18.2, realEndUserRevenue: 0.6, circularRatio: 40 },
    caps: {
      msft: 2500, goog: 1900, amzn: 1700, meta: 935,
      nvda: 735, tsmc: 620, avgo: 270,
      skhynix: 78, samsung: 450, asml: 310,
      openai: 14.0, anthropic: 1.0, xai: 0, deepseek: 0,
      coreweave: 0.4, vc_sovereign: 450, end_market: 950
    },
    nodeMetrics: {
      msft: { capex: 4.8, rev: 0.25 }, goog: { capex: 4.4, rev: 0.22 }, amzn: { capex: 3.8, rev: 0.16 }, meta: { capex: 3.2, rev: 0.08 },
      nvda: { capex: 0.45, rev: 5.2 }, tsmc: { capex: 7.2, rev: 14.5 }, avgo: { capex: 0.15, rev: 1.2 },
      skhynix: { capex: 1.5, rev: 0.8 }, samsung: { capex: 6.8, rev: 1.0 }, asml: { capex: 0.45, rev: 5.5 },
      openai: { capex: 0.35, rev: 0.1 }, anthropic: { capex: 0.05, rev: 0.01 }, xai: { capex: 0, rev: 0 }, deepseek: { capex: 0, rev: 0 },
      coreweave: { capex: 0.15, rev: 0.04 }, vc_sovereign: { capex: 0, rev: 0 }, end_market: { capex: 0, rev: 0.6 }
    },
    unformed: ['xai', 'deepseek'],
    highGrowth: ['anthropic', 'openai', 'nvda']
  },

  // ─── 2022: The Inflection Point ───────────────────────────────────
  {
    id: '2022', year: 2022, quarter: null, label: '2022',
    dateRangeEN: 'Full Year 2022', dateRangeKO: '2022년 전체',
    titleEN: '2022: The Inflection Point — ChatGPT Unleashed (Nov 30, 2022)',
    titleKO: '2022년: 역사의 변곡점 — ChatGPT의 전격 출시 (2022년 11월 30일)',
    summaryEN: 'Midjourney and Stable Diffusion spark image generation mania. NVIDIA introduces the Hopper H100 with Transformer Engine. On November 30, 2022, OpenAI releases ChatGPT as a free research preview; within five days, it reaches one million users, igniting the global generative AI race.',
    summaryKO: '스테이블 디퓨전과 미드저니가 이미지 생성 돌풍을 일으키고, 엔비디아는 트랜스포머 엔진을 탑재한 H100 GPU를 공개합니다. 2022년 11월 30일, OpenAI가 ChatGPT를 공개하자 불과 5일 만에 100만 사용자를 모으며 인류 역사상 가장 거대한 생성형 AI 골드러시가 촉발됩니다.',
    macro: { totalAiCapex: 22.8, realEndUserRevenue: 0.7, circularRatio: 44 },
    caps: {
      msft: 1780, goog: 1150, amzn: 860, meta: 320,
      nvda: 360, tsmc: 380, avgo: 230,
      skhynix: 48, samsung: 290, asml: 220,
      openai: 20.0, anthropic: 4.0, xai: 0, deepseek: 0,
      coreweave: 1.0, vc_sovereign: 480, end_market: 1100
    },
    nodeMetrics: {
      msft: { capex: 5.8, rev: 0.35 }, goog: { capex: 5.2, rev: 0.2 }, amzn: { capex: 5.4, rev: 0.18 }, meta: { capex: 4.8, rev: 0.1 },
      nvda: { capex: 0.55, rev: 6.8 }, tsmc: { capex: 8.5, rev: 15.5 }, avgo: { capex: 0.18, rev: 1.5 },
      skhynix: { capex: 1.6, rev: 0.75 }, samsung: { capex: 7.5, rev: 1.1 }, asml: { capex: 0.5, rev: 6.2 },
      openai: { capex: 0.45, rev: 0.15 }, anthropic: { capex: 0.1, rev: 0.02 }, xai: { capex: 0, rev: 0 }, deepseek: { capex: 0, rev: 0 },
      coreweave: { capex: 0.25, rev: 0.06 }, vc_sovereign: { capex: 0, rev: 0 }, end_market: { capex: 0, rev: 0.7 }
    },
    unformed: ['xai', 'deepseek'],
    highGrowth: ['openai']
  }
];

// Map 16 quarters from previous dataset
const quarterlyPeriods = prevDataEn.aiCapitalTimelineData.map((qEn, qIdx) => {
  const qKo = prevDataKo.aiCapitalTimelineData[qIdx];
  const unformed = ['2023-Q1', '2023-Q2'].includes(qEn.periodId) ? ['xai', 'deepseek'] : [];
  
  let highGrowth = [];
  if (qEn.periodId === '2023-Q1') highGrowth = ['openai', 'msft'];
  else if (qEn.periodId === '2023-Q2') highGrowth = ['nvda', 'tsmc'];
  else if (qEn.periodId === '2023-Q3') highGrowth = ['coreweave', 'amzn'];
  else if (qEn.periodId === '2023-Q4') highGrowth = ['goog', 'anthropic'];
  else if (qEn.periodId === '2024-Q1') highGrowth = ['nvda', 'skhynix'];
  else if (qEn.periodId === '2024-Q2') highGrowth = ['coreweave', 'tsmc'];
  else if (qEn.periodId === '2024-Q3') highGrowth = ['xai', 'nvda'];
  else if (qEn.periodId === '2024-Q4') highGrowth = ['openai', 'samsung'];
  else if (qEn.periodId === '2025-Q1') highGrowth = ['deepseek', 'anthropic'];
  else if (qEn.periodId === '2025-Q2') highGrowth = ['goog', 'avgo'];
  else if (qEn.periodId === '2025-Q3') highGrowth = ['coreweave', 'nvda'];
  else if (qEn.periodId === '2025-Q4') highGrowth = ['openai', 'msft'];
  else if (qEn.periodId === '2026-Q1') highGrowth = ['skhynix', 'tsmc'];
  else if (qEn.periodId === '2026-Q2') highGrowth = ['asml', 'samsung'];
  else highGrowth = ['nvda', 'openai'];

  const caps = {};
  const nodeMetrics = {};
  qEn.nodes.forEach(n => {
    caps[n.id] = n.marketCap;
    nodeMetrics[n.id] = { capex: n.aiCapex, rev: n.aiRevenue };
  });

  return {
    id: qEn.periodId,
    year: qEn.year,
    quarter: qEn.quarter,
    label: qEn.label,
    dateRangeEN: qEn.dateRange,
    dateRangeKO: qKo.dateRange,
    titleEN: qEn.title,
    titleKO: qKo.title,
    summaryEN: qEn.summary,
    summaryKO: qKo.summary,
    macro: {
      totalAiCapex: qEn.macroMetrics.totalAiCapex,
      realEndUserRevenue: qEn.macroMetrics.realEndUserRevenue,
      circularRatio: qEn.macroMetrics.circularRatio
    },
    caps: caps,
    nodeMetrics: nodeMetrics,
    unformed: unformed,
    highGrowth: highGrowth
  };
});

const all22Periods = [...foundationalPeriods, ...quarterlyPeriods];
console.log('Total periods combined:', all22Periods.length);

function buildDataset(isKO) {
  return all22Periods.map((q, pIdx) => {
    const unformedSet = new Set(q.unformed || []);
    const highGrowthSet = new Set(q.highGrowth || []);

    const nodes = Object.keys(entityBase).map(id => {
      const base = entityBase[id];
      const isFormed = !unformedSet.has(id);
      const isHighGrowth = highGrowthSet.has(id);
      const m = q.nodeMetrics[id] || { capex: 0, rev: 0 };
      const cap = q.caps[id] || 0;

      return {
        id: id,
        name: isKO ? base.nameKO : base.nameEN,
        category: base.category,
        marketCap: isFormed ? cap : 0,
        aiCapex: isFormed ? m.capex : 0,
        aiRevenue: isFormed ? m.rev : 0,
        isFormed: isFormed,
        isHighGrowth: isHighGrowth,
        desc: isKO ? base.descKO : base.descEN,
        initialX: base.initialX,
        initialY: base.initialY
      };
    });

    const edges = masterChannels.map(ch => {
      const amount = quarterAmounts[ch.id][pIdx];
      const srcNode = nodes.find(n => n.id === ch.s);
      const tgtNode = nodes.find(n => n.id === ch.t);
      const isChannelActive = amount > 0 && srcNode && srcNode.isFormed && tgtNode && tgtNode.isFormed;

      return {
        id: ch.id,
        source: ch.s,
        target: ch.t,
        flowType: ch.f,
        amount: isChannelActive ? amount : 0,
        desc: getEdgeDescription(ch, pIdx, isChannelActive ? amount : 0, isKO)
      };
    });

    const capexDeficit = parseFloat((q.macro.totalAiCapex - q.macro.realEndUserRevenue).toFixed(1));
    const annualizedRunRate = q.quarter ? parseFloat((q.macro.totalAiCapex * 4).toFixed(1)) : q.macro.totalAiCapex;

    return {
      periodId: q.id,
      year: q.year,
      quarter: q.quarter,
      label: q.label,
      dateRange: isKO ? q.dateRangeKO : q.dateRangeEN,
      title: isKO ? q.titleKO : q.titleEN,
      summary: isKO ? q.summaryKO : q.summaryEN,
      macroMetrics: {
        totalAiCapex: q.macro.totalAiCapex,
        realEndUserRevenue: q.macro.realEndUserRevenue,
        capexRevenueDeficit: capexDeficit,
        circularRatio: q.macro.circularRatio,
        annualizedCapexRunRate: annualizedRunRate
      },
      nodes: nodes,
      edges: edges
    };
  });
}

// ─── Write English Dataset ─────────────────────────────────────────
const enData = buildDataset(false);
const enOutput = `// ai_capital_data.js - Global AI Capital Circulation & Supply Chain Empirical Database (10-Year Arc: 2017 - 2026 Q4)

(function () {
  const categoryDefinitions = ${JSON.stringify(categoryDefinitionsEN, null, 2)};
  const flowTypeDefinitions = ${JSON.stringify(flowTypeDefinitionsEN, null, 2)};
  const aiCapitalTimelineData = ${JSON.stringify(enData, null, 2)};

  if (typeof window !== 'undefined') {
    window.categoryDefinitions = categoryDefinitions;
    window.flowTypeDefinitions = flowTypeDefinitions;
    window.aiCapitalTimelineData = aiCapitalTimelineData;
  }
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = { categoryDefinitions, flowTypeDefinitions, aiCapitalTimelineData };
  }
})();
`;

fs.writeFileSync(path.resolve('ai_capital_data.js'), enOutput, 'utf8');
console.log('Successfully generated ai_capital_data.js (EN) with 22 periods');

// ─── Write Korean Dataset ──────────────────────────────────────────
const koData = buildDataset(true);
const koOutput = `// ai_capital_data_ko.js - 글로벌 AI 자금 순환 및 반도체 공급망 실증 데이터베이스 (10개년: 2017 ~ 2026 Q4)

(function () {
  const categoryDefinitionsKo = ${JSON.stringify(categoryDefinitionsKO, null, 2)};
  const flowTypeDefinitionsKo = ${JSON.stringify(flowTypeDefinitionsKO, null, 2)};
  const aiCapitalTimelineDataKo = ${JSON.stringify(koData, null, 2)};

  if (typeof window !== 'undefined') {
    window.categoryDefinitionsKo = categoryDefinitionsKo;
    window.flowTypeDefinitionsKo = flowTypeDefinitionsKo;
    window.aiCapitalTimelineDataKo = aiCapitalTimelineDataKo;
  }
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
      categoryDefinitions: categoryDefinitionsKo,
      flowTypeDefinitions: flowTypeDefinitionsKo,
      aiCapitalTimelineData: aiCapitalTimelineDataKo
    };
  }
})();
`;

fs.writeFileSync(path.resolve('ai_capital_data_ko.js'), koOutput, 'utf8');
console.log('Successfully generated ai_capital_data_ko.js (KO) with 22 periods');
