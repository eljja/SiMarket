// scratch/generate_datasets.js
// Generates ai_capital_data.js (EN) and ai_capital_data_ko.js (KO) with 16 quarters (2023 Q1 ~ 2026 Q4)
// and 17 entities including Samsung, SK Hynix, Broadcom, ASML, DeepSeek, etc.

const fs = require('fs');
const path = require('path');

// ─── Categories & Flow Types (EN) ──────────────────────────────
const categoryDefinitionsEN = {
  hyperscaler: { name: 'Hyperscalers (Big Tech Cloud)', color: '#38bdf8' },
  chipmaker: { name: 'AI Silicon & Foundry', color: '#10b981' },
  semiconductor_supply: { name: 'Memory & Lithography', color: '#06b6d4' },
  ai_lab: { name: 'Frontier AI Labs', color: '#f43f5e' },
  neocloud: { name: 'Neoclouds (GPU Debt)', color: '#fbbf24' },
  venture_capital: { name: 'VC & Sovereign Funds', color: '#a855f7' },
  end_market: { name: 'Real End-User Market', color: '#3b82f6' }
};

const categoryDefinitionsKO = {
  hyperscaler: { name: '빅테크 하이퍼스케일러 (클라우드)', color: '#38bdf8' },
  chipmaker: { name: 'AI 칩셋 & 파운드리 (NVIDIA/TSMC/AVGO)', color: '#10b981' },
  semiconductor_supply: { name: '메모리 & 반도체 장비 (삼성/SK/ASML)', color: '#06b6d4' },
  ai_lab: { name: '프론티어 AI 랩스 (OpenAI/Anthropic/xAI/DeepSeek)', color: '#f43f5e' },
  neocloud: { name: '네오클라우드 (GPU 담보 부채)', color: '#fbbf24' },
  venture_capital: { name: '벤처캐피탈 & 국부펀드', color: '#a855f7' },
  end_market: { name: '실제 최종 사용자 시장 (소프트웨어 매출)', color: '#3b82f6' }
};

const flowTypeDefinitionsEN = {
  equity_investment: { name: 'Equity Investment (Cash / Stake)', color: '#ffb300' },
  cloud_credit: { name: 'Cloud Compute Credits (Equity Swap)', color: '#00e5ff' },
  gpu_purchase: { name: 'GPU & Accelerator Outlays (NVIDIA/Broadcom)', color: '#10b981' },
  hbm_purchase: { name: 'HBM Memory Procurement (SK Hynix / Samsung)', color: '#06b6d4' },
  equipment_purchase: { name: 'EUV Lithography Procurement (ASML)', color: '#14b8a6' },
  debt_collateral: { name: 'GPU-Collateralized Debt (Vendor Financing)', color: '#a855f7' },
  enterprise_revenue: { name: 'Real End-User Software & API Revenue', color: '#38bdf8' }
};

const flowTypeDefinitionsKO = {
  equity_investment: { name: '지분 투자 (현금 / 지분 인수)', color: '#ffb300' },
  cloud_credit: { name: '클라우드 컴퓨팅 크레딧 (지분 교환)', color: '#00e5ff' },
  gpu_purchase: { name: 'GPU 및 가속기 하드웨어 구매 (NVIDIA/Broadcom)', color: '#10b981' },
  hbm_purchase: { name: 'HBM 메모리 반도체 조달 (SK하이닉스/삼성전자)', color: '#06b6d4' },
  equipment_purchase: { name: 'EUV 노광 장비 조달 (ASML)', color: '#14b8a6' },
  debt_collateral: { name: 'GPU 담보 부채 조달 (벤더 파이낸싱)', color: '#a855f7' },
  enterprise_revenue: { name: '실제 최종 기업 소프트웨어 및 API 매출', color: '#38bdf8' }
};

// ─── Initial Pre-bounded Coordinates (Prevents Out-of-Bounds) ──
// Coordinate layout centered at (0, 0) inside ~640 x 480 canvas bounds
const entityCoordinates = {
  // Frontier AI Labs (Inner Cluster - Center Left)
  openai: { initialX: -60, initialY: -55 },
  anthropic: { initialX: 55, initialY: -55 },
  xai: { initialX: 75, initialY: 45 },
  deepseek: { initialX: -75, initialY: 45 },
  // Neocloud (Inner Center Down)
  coreweave: { initialX: 0, initialY: 85 },
  // Hyperscalers & NVIDIA (Middle Orbit - Radius ~170-190)
  msft: { initialX: -140, initialY: -130 },
  goog: { initialX: -185, initialY: 5 },
  amzn: { initialX: 140, initialY: -130 },
  meta: { initialX: 185, initialY: 5 },
  nvda: { initialX: 0, initialY: -10 },
  // Semiconductor Supply Chain & Capital (Outer Orbit - Radius ~250-280)
  tsmc: { initialX: -130, initialY: 190 },
  skhynix: { initialX: -20, initialY: -210 },
  samsung: { initialX: 110, initialY: -195 },
  avgo: { initialX: -215, initialY: 115 },
  asml: { initialX: 20, initialY: 235 },
  vc_sovereign: { initialX: 220, initialY: 155 },
  end_market: { initialX: -230, initialY: -170 }
};

console.log('Coordinates defined for', Object.keys(entityCoordinates).length, 'entities.');
