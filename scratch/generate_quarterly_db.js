// scratch/generate_quarterly_db.js
// Builds the 16-quarter dataset for 2023 Q1 through 2026 Q4
const fs = require('fs');
const path = require('path');

const quartersConfig = [
  // ─── 2023 ──────────────────────────────────────────────────────────
  {
    id: '2023-Q1', year: 2023, quarter: 1, label: '2023 Q1',
    dateRangeEN: 'Jan - Mar 2023', dateRangeKO: '2023년 1월 ~ 3월',
    titleEN: '2023 Q1: ChatGPT Explosion & Microsoft’s $10B Commitment',
    titleKO: '2023년 1분기: ChatGPT 폭발적 성장과 MS의 100억 달러 투자',
    summaryEN: 'ChatGPT crosses 100M monthly active users in record time. Microsoft announces a multi-billion dollar extension with OpenAI (mostly Azure compute credits). Google declares "Code Red", and hyperscalers scramble to secure preliminary A100/H100 allocations.',
    summaryKO: 'ChatGPT가 역사상 최단기간 1억 MAU를 돌파합니다. 마이크로소프트는 OpenAI에 100억 달러 규모의 파트너십을 발표(대부분 Azure 클라우드 크레딧)하며, 구글은 코드 레드를 발령하고 빅테크들은 A100/H100 GPU 확보 경쟁에 돌입합니다.',
    macro: { totalAiCapex: 25.6, realEndUserRevenue: 0.8, circularRatio: 48 },
    caps: {
      msft: 2150, goog: 1320, amzn: 1050, meta: 540,
      nvda: 680, tsmc: 460, avgo: 260,
      skhynix: 55, samsung: 340, asml: 260,
      openai: 29, anthropic: 4, xai: 8, deepseek: 1.5,
      coreweave: 2, vc_sovereign: 500, end_market: 1200
    },
    nodeMetrics: {
      msft: { capex: 6.8, rev: 0.4 }, goog: { capex: 6.3, rev: 0.2 }, amzn: { capex: 6.5, rev: 0.2 }, meta: { capex: 6.0, rev: 0.1 },
      nvda: { capex: 0.6, rev: 4.3 }, tsmc: { capex: 9.9, rev: 16.7 }, avgo: { capex: 0.2, rev: 1.8 },
      skhynix: { capex: 1.8, rev: 0.8 }, samsung: { capex: 8.5, rev: 1.2 }, asml: { capex: 0.5, rev: 7.2 },
      openai: { capex: 0.4, rev: 0.2 }, anthropic: { capex: 0.1, rev: 0.02 }, xai: { capex: 0.1, rev: 0.0 }, deepseek: { capex: 0.05, rev: 0.01 },
      coreweave: { capex: 0.2, rev: 0.05 }, vc_sovereign: { capex: 0, rev: 0 }, end_market: { capex: 0, rev: 0.8 }
    },
    edges: [
      { s: 'msft', t: 'openai', f: 'cloud_credit', a: 2.5, dEN: 'Initial quarterly compute credits deployed on Azure cluster.', dKO: 'Azure 클러스터 기반 초기 분기 컴퓨팅 크레딧 집행.' },
      { s: 'openai', t: 'msft', f: 'cloud_credit', a: 0.35, dEN: 'Consuming Azure data centers for GPT-3.5 and GPT-4 inference.', dKO: 'GPT-3.5 및 GPT-4 추론을 위한 Azure 데이터센터 사용료 지불.' },
      { s: 'msft', t: 'nvda', f: 'gpu_purchase', a: 2.8, dEN: 'Procuring A100/H100 accelerator servers for Azure OpenAI service.', dKO: 'Azure OpenAI 서비스를 위한 A100/H100 가속기 서버 발주.' },
      { s: 'goog', t: 'nvda', f: 'gpu_purchase', a: 2.2, dEN: 'Purchasing NVIDIA GPUs alongside internal TPU clusters.', dKO: '자체 TPU 클러스터와 병행하여 엔비디아 GPU 확보.' },
      { s: 'amzn', t: 'nvda', f: 'gpu_purchase', a: 2.1, dEN: 'AWS EC2 P4d/P5 instance hardware procurement.', dKO: 'AWS EC2 P4d/P5 인스턴스 확충을 위한 하드웨어 조달.' },
      { s: 'meta', t: 'nvda', f: 'gpu_purchase', a: 2.0, dEN: 'AI Research SuperCluster (RSC) build-out with NVIDIA Hopper.', dKO: '엔비디아 호퍼 기반 AI 연구용 슈퍼클러스터(RSC) 구축.' },
      { s: 'nvda', t: 'tsmc', f: 'gpu_purchase', a: 2.2, dEN: 'Wafer allocation on TSMC 4N process and CoWoS packaging.', dKO: 'TSMC 4N 공정 웨이퍼 및 CoWoS 어드밴스드 패키징 라인 예약.' },
      { s: 'nvda', t: 'skhynix', f: 'hbm_purchase', a: 0.8, dEN: 'Exclusive procurement of HBM3 memory stacks for H100 SXM.', dKO: 'H100 SXM용 HBM3 메모리 독점 공급 조달 계약.' },
      { s: 'nvda', t: 'samsung', f: 'hbm_purchase', a: 0.3, dEN: 'Standard GDDR6 and early HBM2E/HBM3 qualification lots.', dKO: '표준 GDDR6 및 초기 HBM 공급 협상.' },
      { s: 'tsmc', t: 'asml', f: 'equipment_purchase', a: 1.5, dEN: 'Procuring EUV lithography systems for 3nm/5nm lines.', dKO: '3nm/5nm 생산 라인을 위한 EUV 노광 장비 조달.' },
      { s: 'samsung', t: 'asml', f: 'equipment_purchase', a: 1.1, dEN: 'EUV tool deliveries for advanced DRAM and foundry.', dKO: '선단 DRAM 및 파운드리용 EUV 노광 장비 도입.' },
      { s: 'skhynix', t: 'asml', f: 'equipment_purchase', a: 0.6, dEN: 'EUV equipment for 1a/1b nm HBM DRAM production.', dKO: '1a/1b nm HBM 제조용 EUV 노광기 도입.' },
      { s: 'goog', t: 'avgo', f: 'gpu_purchase', a: 0.7, dEN: 'Co-developing TPU v4/v5e ASICs and optical interconnects.', dKO: 'TPU v4/v5e ASIC 공동 개발 및 광학 상호연결망 구축.' },
      { s: 'vc_sovereign', t: 'anthropic', f: 'equity_investment', a: 0.4, dEN: 'Series B safety and alignment venture financing.', dKO: 'AI 정렬 및 안전성 연구를 위한 시리즈 B 벤처 투자.' },
      { s: 'end_market', t: 'openai', f: 'enterprise_revenue', a: 0.2, dEN: 'ChatGPT Plus $20/mo subscriptions and early developer API keys.', dKO: 'ChatGPT Plus 유료 구독 및 개발자 API 사용료 결제.' },
      { s: 'end_market', t: 'msft', f: 'enterprise_revenue', a: 0.6, dEN: 'Enterprise Azure OpenAI Service token consumption.', dKO: '기업용 Azure OpenAI 서비스 토큰 사용료 매출.' }
    ]
  },

  {
    id: '2023-Q2', year: 2023, quarter: 2, label: '2023 Q2',
    dateRangeEN: 'Apr - Jun 2023', dateRangeKO: '2023년 4월 ~ 6월',
    titleEN: '2023 Q2: NVIDIA’s Historic Guidance & The H100 Shortage',
    titleKO: '2023년 2분기: 엔비디아의 어닝 서프라이즈와 H100 품귀 사태',
    summaryEN: 'NVIDIA shocks financial markets with an unprecedented revenue forecast ($11B vs $7B consensus), driven by Data Center demand. H100 lead times exceed 40 weeks. TSMC CoWoS advanced packaging capacity is identified as the singular bottleneck in the AI supply chain.',
    summaryKO: '엔비디아가 데이터센터 수요 폭발로 월가 컨센서스를 64% 상회하는 역사적인 실적 가이던스를 제시합니다. H100 대기 기간이 40주를 넘어서며, TSMC의 CoWoS 어드밴스드 패키징이 전 세계 AI 생태계의 최대 병목으로 부상합니다.',
    macro: { totalAiCapex: 27.9, realEndUserRevenue: 1.2, circularRatio: 54 },
    caps: {
      msft: 2480, goog: 1510, amzn: 1320, meta: 740,
      nvda: 1050, tsmc: 520, avgo: 350,
      skhynix: 65, samsung: 360, asml: 290,
      openai: 45, anthropic: 8, xai: 12, deepseek: 2.2,
      coreweave: 3.5, vc_sovereign: 500, end_market: 1200
    },
    nodeMetrics: {
      msft: { capex: 8.2, rev: 0.6 }, goog: { capex: 6.9, rev: 0.35 }, amzn: { capex: 7.4, rev: 0.3 }, meta: { capex: 6.4, rev: 0.15 },
      nvda: { capex: 0.8, rev: 10.3 }, tsmc: { capex: 8.2, rev: 15.7 }, avgo: { capex: 0.25, rev: 2.1 },
      skhynix: { capex: 1.6, rev: 1.3 }, samsung: { capex: 8.9, rev: 1.5 }, asml: { capex: 0.5, rev: 7.5 },
      openai: { capex: 0.6, rev: 0.35 }, anthropic: { capex: 0.2, rev: 0.05 }, xai: { capex: 0.2, rev: 0.01 }, deepseek: { capex: 0.08, rev: 0.02 },
      coreweave: { capex: 0.5, rev: 0.1 }, vc_sovereign: { capex: 0, rev: 0 }, end_market: { capex: 0, rev: 1.2 }
    },
    edges: [
      { s: 'msft', t: 'nvda', f: 'gpu_purchase', a: 3.6, dEN: 'Aggressive procurement of H100 SXM modules.', dKO: 'H100 SXM 모듈 대규모 선제 발주.' },
      { s: 'goog', t: 'nvda', f: 'gpu_purchase', a: 2.6, dEN: 'Expanding A100/H100 GPU clusters in GCP.', dKO: '구글 클라우드 내 엔비디아 가속기 클러스터 증설.' },
      { s: 'amzn', t: 'nvda', f: 'gpu_purchase', a: 2.8, dEN: 'AWS UltraClusters rollout with EFA networking.', dKO: 'EFA 네트워킹 기반 AWS 울트라클러스터 구축.' },
      { s: 'meta', t: 'nvda', f: 'gpu_purchase', a: 2.5, dEN: 'Securing Hopper chips for LLaMA 2 training runs.', dKO: 'LLaMA 2 학습을 위한 호퍼 GPU 물량 확보.' },
      { s: 'nvda', t: 'tsmc', f: 'gpu_purchase', a: 2.8, dEN: 'Contracting emergency CoWoS expansion with TSMC.', dKO: 'TSMC에 CoWoS 패키징 긴급 증설 요청 및 웨이퍼 발주.' },
      { s: 'nvda', t: 'skhynix', f: 'hbm_purchase', a: 1.2, dEN: 'Mass purchasing HBM3 stacks; SK Hynix captures >85% market share.', dKO: 'HBM3 적층 메모리 대량 구매(SK하이닉스 점유율 85% 이상 장악).' },
      { s: 'nvda', t: 'samsung', f: 'hbm_purchase', a: 0.4, dEN: 'DRAM and enterprise SSD procurement for DGX systems.', dKO: 'DGX 서버 시스템용 고성능 DRAM 및 기업용 SSD 공급.' },
      { s: 'tsmc', t: 'asml', f: 'equipment_purchase', a: 1.6, dEN: 'EUV system installments at Fab 18.', dKO: 'Fab 18 선단 3nm 라인 EUV 시스템 반입.' },
      { s: 'skhynix', t: 'asml', f: 'equipment_purchase', a: 0.7, dEN: 'Procuring lithography tools to scale 1b-nm HBM DRAM.', dKO: '1b nm HBM 생산능력 확대를 위한 노광 장비 조달.' },
      { s: 'samsung', t: 'asml', f: 'equipment_purchase', a: 1.2, dEN: 'Pyeongtaek Campus EUV lines expansion.', dKO: '평택 캠퍼스 선단 라인 EUV 장비 지속 도입.' },
      { s: 'meta', t: 'avgo', f: 'gpu_purchase', a: 0.5, dEN: 'MTIA v1 accelerator ASIC design collaboration.', dKO: '자체 AI 가속기 MTIA v1 개발 협력.' },
      { s: 'end_market', t: 'openai', f: 'enterprise_revenue', a: 0.35, dEN: 'ChatGPT Plus run-rate acceleration.', dKO: '유료 개인 및 초기 비즈니스 구독 매출 급증.' },
      { s: 'end_market', t: 'msft', f: 'enterprise_revenue', a: 0.75, dEN: 'Azure AI services deployed in Fortune 500 pilots.', dKO: '포춘 500대 기업의 Azure AI 파일럿 도입 매출.' }
    ]
  },

  {
    id: '2023-Q3', year: 2023, quarter: 3, label: '2023 Q3',
    dateRangeEN: 'Jul - Sep 2023', dateRangeKO: '2023년 7월 ~ 9월',
    titleEN: '2023 Q3: Rise of Neocloud GPU Debt & Amazon-Anthropic Alliance',
    titleKO: '2023년 3분기: GPU 담보 부채의 태동과 아마존-앤트로픽 동맹',
    summaryEN: 'CoreWeave raises $2.3B in debt from Blackstone and Magnetar collateralized entirely by NVIDIA H100 GPUs. Amazon commits up to $4B to Anthropic, securing AWS as its primary cloud and Trainium customer. The circular financing loop deepens.',
    summaryKO: '코어위브가 엔비디아 H100 GPU 자체를 담보로 블랙스톤과 마그네타로부터 23억 달러의 부채를 조달합니다. 아마존은 앤트로픽에 최대 40억 달러 투자를 발표하며 AWS 독점 클라우드 계약을 체결합니다. 자금 순환 고리가 본격화됩니다.',
    macro: { totalAiCapex: 30.6, realEndUserRevenue: 1.6, circularRatio: 59 },
    caps: {
      msft: 2350, goog: 1650, amzn: 1340, meta: 780,
      nvda: 1100, tsmc: 480, avgo: 340,
      skhynix: 60, samsung: 345, asml: 240,
      openai: 65, anthropic: 14, xai: 14, deepseek: 3.0,
      coreweave: 5.5, vc_sovereign: 500, end_market: 1200
    },
    nodeMetrics: {
      msft: { capex: 8.9, rev: 0.7 }, goog: { capex: 8.1, rev: 0.45 }, amzn: { capex: 8.0, rev: 0.35 }, meta: { capex: 6.8, rev: 0.2 },
      nvda: { capex: 0.9, rev: 14.5 }, tsmc: { capex: 7.1, rev: 17.3 }, avgo: { capex: 0.3, rev: 2.3 },
      skhynix: { capex: 1.7, rev: 1.7 }, samsung: { capex: 8.8, rev: 1.7 }, asml: { capex: 0.6, rev: 7.3 },
      openai: { capex: 0.7, rev: 0.5 }, anthropic: { capex: 0.3, rev: 0.08 }, xai: { capex: 0.2, rev: 0.01 }, deepseek: { capex: 0.1, rev: 0.03 },
      coreweave: { capex: 1.2, rev: 0.15 }, vc_sovereign: { capex: 0, rev: 0 }, end_market: { capex: 0, rev: 1.6 }
    },
    edges: [
      { s: 'vc_sovereign', t: 'coreweave', f: 'debt_collateral', a: 2.3, dEN: 'Blackstone & Magnetar provide $2.3B debt backed by H100 collateral.', dKO: '블랙스톤/마그네타가 H100 GPU를 담보로 23억 달러 사모 대출 제공.' },
      { s: 'coreweave', t: 'nvda', f: 'gpu_purchase', a: 2.1, dEN: 'Deploying debt proceeds to purchase tens of thousands of H100s.', dKO: '조달한 부채로 엔비디아에 수만 장의 H100 추가 발주.' },
      { s: 'amzn', t: 'anthropic', f: 'equity_investment', a: 1.25, dEN: 'First tranche of $4B investment; Anthropic chooses AWS Bedrock.', dKO: '40억 달러 중 1차 트랜치(12.5억 달러) 집행 및 AWS 우선 계약.' },
      { s: 'anthropic', t: 'amzn', f: 'cloud_credit', a: 0.4, dEN: 'Cloud compute spend on AWS Trainium and GPU clusters.', dKO: 'AWS 인프라에서 Claude 학습 및 추론 컴퓨팅 비용 집행.' },
      { s: 'msft', t: 'nvda', f: 'gpu_purchase', a: 3.8, dEN: 'Ongoing mega-orders for Azure OpenAI data centers.', dKO: 'Azure 인프라용 대규모 가속기 지속 구매.' },
      { s: 'nvda', t: 'skhynix', f: 'hbm_purchase', a: 1.6, dEN: 'SK Hynix operating at 100% HBM3 capacity for NVIDIA.', dKO: 'SK하이닉스 HBM3 라인 100% 가동 및 전량 엔비디아 납품.' },
      { s: 'nvda', t: 'tsmc', f: 'gpu_purchase', a: 3.2, dEN: 'TSMC confirms 2x CoWoS capacity expansion roadmap.', dKO: 'TSMC, 엔비디아 요청에 따라 CoWoS 패키징 생산량 2배 확대 추진.' },
      { s: 'goog', t: 'avgo', f: 'gpu_purchase', a: 0.8, dEN: 'Scaling TPU v5p supercomputers with Broadcom switches.', dKO: '브로드컴 스위치와 결합된 TPU v5p 슈퍼컴퓨터 증설.' },
      { s: 'end_market', t: 'openai', f: 'enterprise_revenue', a: 0.5, dEN: 'Enterprise ChatGPT subscriptions launched for corporate clients.', dKO: '기업 전용 ChatGPT Enterprise 요금제 출시로 매출 확대.' }
    ]
  },

  {
    id: '2023-Q4', year: 2023, quarter: 4, label: '2023 Q4',
    dateRangeEN: 'Oct - Dec 2023', dateRangeKO: '2023년 10월 ~ 12월',
    titleEN: '2023 Q4: Frontier Lab Turmoil & CoWoS Packaging Peak Bottleneck',
    titleKO: '2023년 4분기: 오픈AI 이사회 사태와 TSMC CoWoS 패키징 병목',
    summaryEN: 'Sam Altman is fired and reinstated at OpenAI within 5 days; Microsoft secures an observer seat. Google announces Gemini 1.0. SK Hynix records a dramatic turnaround to memory operating profit driven entirely by HBM3 pricing power. ASML delivers the world’s first High-NA EUV system.',
    summaryKO: '오픈AI의 샘 올트먼 해임 및 5일 만의 복귀 사태가 발생하며 MS가 이사회 참관인 자격을 얻습니다. 구글은 제미나이 1.0을 공개하고, SK하이닉스는 HBM3의 압도적 수익성에 힘입어 D램 흑자 전환에 성공합니다. ASML은 최초의 High-NA EUV 장비를 출하합니다.',
    macro: { totalAiCapex: 37.4, realEndUserRevenue: 2.2, circularRatio: 63 },
    caps: {
      msft: 2790, goog: 1760, amzn: 1570, meta: 910,
      nvda: 1220, tsmc: 540, avgo: 520,
      skhynix: 75, samsung: 380, asml: 290,
      openai: 86, anthropic: 18, xai: 15, deepseek: 4.5,
      coreweave: 7.0, vc_sovereign: 500, end_market: 1200
    },
    nodeMetrics: {
      msft: { capex: 9.7, rev: 0.9 }, goog: { capex: 11.0, rev: 0.6 }, amzn: { capex: 8.8, rev: 0.45 }, meta: { capex: 7.9, rev: 0.25 },
      nvda: { capex: 1.0, rev: 18.4 }, tsmc: { capex: 7.3, rev: 19.6 }, avgo: { capex: 0.35, rev: 2.6 },
      skhynix: { capex: 1.9, rev: 2.1 }, samsung: { capex: 9.2, rev: 2.0 }, asml: { capex: 0.6, rev: 7.8 },
      openai: { capex: 0.9, rev: 0.7 }, anthropic: { capex: 0.4, rev: 0.1 }, xai: { capex: 0.3, rev: 0.02 }, deepseek: { capex: 0.15, rev: 0.04 },
      coreweave: { capex: 1.5, rev: 0.25 }, vc_sovereign: { capex: 0, rev: 0 }, end_market: { capex: 0, rev: 2.2 }
    },
    edges: [
      { s: 'msft', t: 'openai', f: 'cloud_credit', a: 3.5, dEN: 'Azure compute infrastructure commitment expanded post-Altman return.', dKO: '올트먼 복귀 후 거버넌스 안정화와 함께 Azure 전용 인프라 확충.' },
      { s: 'openai', t: 'msft', f: 'cloud_credit', a: 0.8, dEN: 'OpenAI spends heavily on Azure compute for GPT-4 Turbo rollout.', dKO: 'GPT-4 Turbo 출시로 Azure 데이터센터 사용량 급증.' },
      { s: 'goog', t: 'anthropic', f: 'equity_investment', a: 1.0, dEN: 'Google commits $2B in tranches, starting with $500M initial cash.', dKO: '구글의 앤트로픽 추가 20억 달러 투자 약정 및 클라우드 연계.' },
      { s: 'msft', t: 'nvda', f: 'gpu_purchase', a: 4.2, dEN: 'Largest global customer for NVIDIA H100 clusters.', dKO: '엔비디아 H100 최대 단일 구매 고객으로 등극.' },
      { s: 'meta', t: 'nvda', f: 'gpu_purchase', a: 3.0, dEN: 'Preparing fleet for LLaMA 3 multi-modal training.', dKO: 'LLaMA 3 대형 모델 훈련을 위한 가속기 대량 확보.' },
      { s: 'nvda', t: 'skhynix', f: 'hbm_purchase', a: 1.9, dEN: 'HBM3 ASP surges as NVIDIA secures full 2024 supply line.', dKO: '2024년 HBM3 물량 완판 및 판가 프리미엄 반영.' },
      { s: 'nvda', t: 'samsung', f: 'hbm_purchase', a: 0.6, dEN: 'Sampling early HBM3E 24GB modules.', dKO: '초기 HBM3E 24GB 샘플 공급 및 퀄 테스트 개시.' },
      { s: 'tsmc', t: 'asml', f: 'equipment_purchase', a: 1.8, dEN: 'High-NA EUV trial agreements and N3E tooling.', dKO: 'N3E 공정 안정화 및 High-NA EUV 시험 장비 도입 계약.' },
      { s: 'end_market', t: 'msft', f: 'enterprise_revenue', a: 1.0, dEN: 'General availability of Microsoft 365 Copilot ($30/user/mo).', dKO: '월 30달러 M365 코파일럿 상용 출시로 기업 라이선스 매출 개시.' }
    ]
  },

  // ─── 2024 ──────────────────────────────────────────────────────────
  {
    id: '2024-Q1', year: 2024, quarter: 1, label: '2024 Q1',
    dateRangeEN: 'Jan - Mar 2024', dateRangeKO: '2024년 1월 ~ 3월',
    titleEN: '2024 Q1: Blackwell B200 Revealed & Samsung’s 12-Hi HBM3E Strike',
    titleKO: '2024년 1분기: 블랙웰 B200 공개와 삼성전자 12단 HBM3E 승부수',
    summaryEN: 'NVIDIA GTC 2024 unveils the Blackwell B200 GPU with 208B transistors. Mark Zuckerberg reveals Meta will accumulate 350,000 H100s. Samsung announces the world’s first 12-layer 36GB HBM3E. Broadcom’s AI networking and custom ASIC revenue surges +280% on Google TPU demand.',
    summaryKO: '엔비디아 GTC 2024에서 2,080억 개 트랜지스터의 차세대 블랙웰 B200이 공개됩니다. 저커버그는 메타가 연내 35만 개의 H100을 확보할 것이라 발표합니다. 삼성전자는 세계 최초 12단 36GB HBM3E 개발을 선언하며 반격에 나서고, 브로드컴은 맞춤형 ASIC 수요로 AI 매출이 280% 급증합니다.',
    macro: { totalAiCapex: 45.5, realEndUserRevenue: 3.2, circularRatio: 67 },
    caps: {
      msft: 3120, goog: 1910, amzn: 1870, meta: 1250,
      nvda: 2250, tsmc: 690, avgo: 610,
      skhynix: 95, samsung: 410, asml: 380,
      openai: 110, anthropic: 24, xai: 24, deepseek: 6.0,
      coreweave: 10.0, vc_sovereign: 500, end_market: 1200
    },
    nodeMetrics: {
      msft: { capex: 11.5, rev: 1.2 }, goog: { capex: 12.0, rev: 0.9 }, amzn: { capex: 13.0, rev: 0.7 }, meta: { capex: 9.0, rev: 0.4 },
      nvda: { capex: 1.1, rev: 22.6 }, tsmc: { capex: 7.9, rev: 18.9 }, avgo: { capex: 0.4, rev: 3.1 },
      skhynix: { capex: 2.2, rev: 2.8 }, samsung: { capex: 9.5, rev: 2.4 }, asml: { capex: 0.6, rev: 5.7 },
      openai: { capex: 1.2, rev: 0.9 }, anthropic: { capex: 0.6, rev: 0.15 }, xai: { capex: 0.5, rev: 0.05 }, deepseek: { capex: 0.2, rev: 0.08 },
      coreweave: { capex: 2.0, rev: 0.4 }, vc_sovereign: { capex: 0, rev: 0 }, end_market: { capex: 0, rev: 3.2 }
    },
    edges: [
      { s: 'msft', t: 'nvda', f: 'gpu_purchase', a: 4.8, dEN: 'Pre-ordering GB200 NVL72 liquid-cooled super-pods.', dKO: 'GB200 NVL72 수랭식 슈퍼팟 시스템 선제 예약 주문.' },
      { s: 'meta', t: 'nvda', f: 'gpu_purchase', a: 3.8, dEN: 'Meta accelerates toward 600k H100 compute equivalents.', dKO: '연말까지 60만 개 H100 환산 컴퓨팅 확보를 위한 공격적 매입.' },
      { s: 'amzn', t: 'nvda', f: 'gpu_purchase', a: 3.5, dEN: 'AWS Ceiba project deployment with NVIDIA Grace Hopper.', dKO: '엔비디아 그레이스 호퍼 기반 AWS 세이바 프로젝트 진행.' },
      { s: 'nvda', t: 'skhynix', f: 'hbm_purchase', a: 2.5, dEN: 'SK Hynix starts world-first volume mass production of HBM3E 8-Hi.', dKO: 'SK하이닉스, 세계 최초 8단 HBM3E 대량 양산 및 엔비디아 독점 공급.' },
      { s: 'samsung', t: 'nvda', f: 'hbm_purchase', a: 0.8, dEN: 'Samsung samples 12-layer HBM3E for qualification testing.', dKO: '삼성전자 12단 HBM3E 퀄 테스트용 샘플 공급.' },
      { s: 'goog', t: 'avgo', f: 'gpu_purchase', a: 1.2, dEN: 'Google TPU v5e and v5p custom ASIC manufacturing fees.', dKO: '구글 TPU v5e/v5p 주문형 반도체 설계 및 제조 지출.' },
      { s: 'nvda', t: 'tsmc', f: 'gpu_purchase', a: 4.5, dEN: 'TSMC CoWoS-S and CoWoS-L packaging lines booked to 100%.', dKO: '블랙웰 양산을 위한 TSMC CoWoS-L 라인 전량 예약.' },
      { s: 'end_market', t: 'openai', f: 'enterprise_revenue', a: 0.9, dEN: 'Enterprise ChatGPT customer base surpasses 600,000.', dKO: '엔터프라이즈 ChatGPT 유료 고객사 60만 개 돌파.' }
    ]
  },

  {
    id: '2024-Q2', year: 2024, quarter: 2, label: '2024 Q2',
    dateRangeEN: 'Apr - Jun 2024', dateRangeKO: '2024년 4월 ~ 6월',
    titleEN: '2024 Q2: The $600B Question & Neocloud Mega-Debt Facilities',
    titleKO: '2024년 2분기: 세쿼이아의 6000억 달러 질문과 메가 부채 조달',
    summaryEN: 'Sequoia Capital publishes "AI’s $600B Question", highlighting the staggering gap between data center capex and end-user revenues. CoreWeave raises an astonishing $7.5B debt facility led by Blackstone. NVIDIA briefly becomes the world’s most valuable public company ($3.34T).',
    summaryKO: '세쿼이아 캐피탈이 데이터센터 투자와 최종 수익 간의 거대한 괴리를 경고하는 "AI의 6000억 달러 질문"을 발표합니다. 코어위브는 블랙스톤 주도로 75억 달러의 사상 최대 GPU 담보 부채를 조달합니다. 엔비디아는 시총 3.34조 달러로 세계 1위에 등극합니다.',
    macro: { totalAiCapex: 53.1, realEndUserRevenue: 4.5, circularRatio: 69 },
    caps: {
      msft: 3320, goog: 2210, amzn: 2020, meta: 1320,
      nvda: 3100, tsmc: 820, avgo: 740,
      skhynix: 120, samsung: 430, asml: 410,
      openai: 135, anthropic: 30, xai: 30, deepseek: 8.0,
      coreweave: 16.0, vc_sovereign: 500, end_market: 1200
    },
    nodeMetrics: {
      msft: { capex: 13.9, rev: 1.5 }, goog: { capex: 13.2, rev: 1.1 }, amzn: { capex: 15.5, rev: 0.9 }, meta: { capex: 10.5, rev: 0.5 },
      nvda: { capex: 1.2, rev: 26.3 }, tsmc: { capex: 8.5, rev: 20.8 }, avgo: { capex: 0.45, rev: 3.5 },
      skhynix: { capex: 2.5, rev: 3.5 }, samsung: { capex: 9.8, rev: 2.9 }, asml: { capex: 0.6, rev: 6.8 },
      openai: { capex: 1.8, rev: 1.1 }, anthropic: { capex: 0.9, rev: 0.22 }, xai: { capex: 0.9, rev: 0.08 }, deepseek: { capex: 0.3, rev: 0.12 },
      coreweave: { capex: 3.2, rev: 0.55 }, vc_sovereign: { capex: 0, rev: 0 }, end_market: { capex: 0, rev: 4.5 }
    },
    edges: [
      { s: 'vc_sovereign', t: 'coreweave', f: 'debt_collateral', a: 7.5, dEN: 'Blackstone, Carlyle & Magnetar lead $7.5B debt facility backed by H100/Blackwell.', dKO: '블랙스톤/칼라일이 주도하는 75억 달러 규모의 GPU 담보 부채 조달.' },
      { s: 'coreweave', t: 'nvda', f: 'gpu_purchase', a: 5.5, dEN: 'Pouring billions into NVIDIA Hopper and Blackwell server allocations.', dKO: '조달 부채를 엔비디아 서버 클러스터 구매에 직접 투입.' },
      { s: 'nvda', t: 'coreweave', f: 'equity_investment', a: 0.3, dEN: 'NVIDIA participates in CoreWeave equity rounds to lock captive demand.', dKO: '수요 보장을 위해 엔비디아가 코어위브 지분에 직접 재투자.' },
      { s: 'nvda', t: 'skhynix', f: 'hbm_purchase', a: 3.2, dEN: 'SK Hynix posts record quarterly operating profit led by HBM pricing.', dKO: 'HBM 판가 급등으로 SK하이닉스 분기 영업이익 사상 최대치 갱신.' },
      { s: 'nvda', t: 'tsmc', f: 'gpu_purchase', a: 5.5, dEN: 'TSMC expands CoWoS outlays to meet Blackwell dual-die requirements.', dKO: '블랙웰 듀얼 다이 패키징을 위한 TSMC 지출 급증.' },
      { s: 'amzn', t: 'anthropic', f: 'equity_investment', a: 2.0, dEN: 'Amazon closes final $2.75B of $4B pledge.', dKO: '아마존의 앤트로픽 40억 달러 투자 잔여분 완납.' },
      { s: 'anthropic', t: 'amzn', f: 'cloud_credit', a: 0.7, dEN: 'Claude 3.5 Sonnet trained on AWS Bedrock instances.', dKO: 'Claude 3.5 Sonnet의 AWS 베드록 인프라 학습 비용 정산.' },
      { s: 'end_market', t: 'msft', f: 'enterprise_revenue', a: 1.5, dEN: 'Microsoft Copilot and Azure AI API enterprise billings.', dKO: 'M365 코파일럿 및 Azure AI API 엔터프라이즈 결제.' }
    ]
  },

  {
    id: '2024-Q3', year: 2024, quarter: 3, label: '2024 Q3',
    dateRangeEN: 'Jul - Sep 2024', dateRangeKO: '2024년 7월 ~ 9월',
    titleEN: '2024 Q3: xAI Colossus 100K Cluster & OpenAI’s $157B Mega-Round',
    titleKO: '2024년 3분기: xAI 10만 개 콜로서스 가동과 오픈AI 1570억 달러 투자 유치',
    summaryEN: 'Elon Musk’s xAI brings "Colossus" (100,000 liquid-cooled H100 cluster in Memphis) online in an unprecedented 122 days. OpenAI raises $6.6B at a $157B valuation from Thrive, SoftBank, and Microsoft. SK Hynix begins the world’s first volume mass production of 12-layer HBM3E.',
    summaryKO: '일론 머스크의 xAI가 10만 개의 H100 수랭식 클러스터 "콜로서스"를 122일 만에 가동합니다. 오픈AI는 1,570억 달러 기업가치로 66억 달러의 메가 라운드를 유치합니다. SK하이닉스는 세계 최초로 12단 HBM3E 양산에 돌입합니다.',
    macro: { totalAiCapex: 55.4, realEndUserRevenue: 5.8, circularRatio: 66 },
    caps: {
      msft: 3200, goog: 2050, amzn: 1950, meta: 1450,
      nvda: 3000, tsmc: 880, avgo: 720,
      skhynix: 110, samsung: 390, asml: 370,
      openai: 157, anthropic: 35, xai: 45, deepseek: 11.0,
      coreweave: 18.0, vc_sovereign: 500, end_market: 1200
    },
    nodeMetrics: {
      msft: { capex: 14.9, rev: 1.8 }, goog: { capex: 13.1, rev: 1.3 }, amzn: { capex: 16.2, rev: 1.1 }, meta: { capex: 11.2, rev: 0.6 },
      nvda: { capex: 1.3, rev: 30.8 }, tsmc: { capex: 8.8, rev: 23.5 }, avgo: { capex: 0.5, rev: 3.8 },
      skhynix: { capex: 2.8, rev: 4.1 }, samsung: { capex: 10.1, rev: 3.2 }, asml: { capex: 0.7, rev: 8.2 },
      openai: { capex: 2.2, rev: 1.3 }, anthropic: { capex: 1.1, rev: 0.3 }, xai: { capex: 2.5, rev: 0.1 }, deepseek: { capex: 0.4, rev: 0.18 },
      coreweave: { capex: 3.8, rev: 0.7 }, vc_sovereign: { capex: 0, rev: 0 }, end_market: { capex: 0, rev: 5.8 }
    },
    edges: [
      { s: 'vc_sovereign', t: 'openai', f: 'equity_investment', a: 6.6, dEN: 'Thrive, SoftBank, MGX, and Microsoft lead $6.6B syndicate at $157B valuation.', dKO: '스라이브/소프트뱅크/MS 주도로 1,570억 달러 기업가치에 66억 달러 투자.' },
      { s: 'xai', t: 'nvda', f: 'gpu_purchase', a: 3.5, dEN: 'Purchasing 100,000 H100s for Memphis Colossus data center.', dKO: '멤피스 콜로서스 데이터센터 구축을 위한 10만 개 H100 직구매.' },
      { s: 'nvda', t: 'skhynix', f: 'hbm_purchase', a: 3.6, dEN: 'SK Hynix starts volume production of 12-layer HBM3E (36GB).', dKO: 'SK하이닉스, 세계 최초 12단 36GB HBM3E 양산 출하.' },
      { s: 'nvda', t: 'samsung', f: 'hbm_purchase', a: 1.2, dEN: 'Samsung passes PRA validation tests for 8-Hi HBM3E.', dKO: '삼성전자 8단 HBM3E 양산 승인(PRA) 및 공급 확대.' },
      { s: 'openai', t: 'msft', f: 'cloud_credit', a: 1.5, dEN: 'Training cluster spend for next-generation Strawberry (o1).', dKO: '추론 모델 Strawberry(o1) 훈련을 위한 Azure 비용 지출.' },
      { s: 'tsmc', t: 'asml', f: 'equipment_purchase', a: 2.1, dEN: 'Procuring additional EUV scanners for 3nm capacity ramp.', dKO: '3nm 공정 확충을 위한 추가 EUV 노광 장비 반입.' },
      { s: 'end_market', t: 'openai', f: 'enterprise_revenue', a: 1.3, dEN: 'OpenAI annualized revenue surpasses $4B.', dKO: '오픈AI 연간 환산 매출 40억 달러 돌파.' }
    ]
  },

  {
    id: '2024-Q4', year: 2024, quarter: 4, label: '2024 Q4',
    dateRangeEN: 'Oct - Dec 2024', dateRangeKO: '2024년 10월 ~ 12월',
    titleEN: '2024 Q4: Test-Time Reasoning (o1) & Custom Silicon Boom',
    titleKO: '2024년 4분기: 추론 혁신(o1)과 브로드컴·빅테크 자체 ASIC 급성장',
    summaryEN: 'OpenAI officially releases the o1 reasoning model series, demonstrating that test-time compute scaling is a viable third dimension of AI scaling. Broadcom projects $12B+ in annual AI ASIC revenue as Google scales TPU v5p and Meta deploys MTIA. TSMC 3nm fabs run at 100% capacity.',
    summaryKO: '오픈AI가 추론형 AI 모델 o1을 공식 출시하며 테스트 시간 컴퓨팅(Test-time Compute)이라는 새로운 확장 패러다임을 확립합니다. 브로드컴은 구글 TPU 및 메타 MTIA 수요에 힘입어 연간 AI 반도체 매출 120억 달러 이상을 전망합니다. TSMC 3nm 가동률은 100%에 도달합니다.',
    macro: { totalAiCapex: 57.9, realEndUserRevenue: 7.4, circularRatio: 64 },
    caps: {
      msft: 3250, goog: 2180, amzn: 2080, meta: 1520,
      nvda: 3350, tsmc: 920, avgo: 790,
      skhynix: 125, samsung: 380, asml: 390,
      openai: 170, anthropic: 42, xai: 50, deepseek: 14.0,
      coreweave: 19.0, vc_sovereign: 500, end_market: 1200
    },
    nodeMetrics: {
      msft: { capex: 15.5, rev: 2.2 }, goog: { capex: 13.5, rev: 1.6 }, amzn: { capex: 16.8, rev: 1.3 }, meta: { capex: 12.1, rev: 0.8 },
      nvda: { capex: 1.4, rev: 35.0 }, tsmc: { capex: 9.2, rev: 25.5 }, avgo: { capex: 0.55, rev: 4.2 },
      skhynix: { capex: 3.1, rev: 4.8 }, samsung: { capex: 10.5, rev: 3.8 }, asml: { capex: 0.7, rev: 8.5 },
      openai: { capex: 2.6, rev: 1.8 }, anthropic: { capex: 1.4, rev: 0.4 }, xai: { capex: 1.8, rev: 0.15 }, deepseek: { capex: 0.5, rev: 0.25 },
      coreweave: { capex: 4.2, rev: 0.9 }, vc_sovereign: { capex: 0, rev: 0 }, end_market: { capex: 0, rev: 7.4 }
    },
    edges: [
      { s: 'msft', t: 'nvda', f: 'gpu_purchase', a: 5.2, dEN: 'Mega procurement of GB200 and H200 accelerators.', dKO: 'GB200 및 H200 가속기 대규모 조달 집행.' },
      { s: 'goog', t: 'avgo', f: 'gpu_purchase', a: 1.8, dEN: 'Broadcom designs and manufactures Google TPU v5p and TPU v6 nodes.', dKO: '구글 TPU v5p 및 차세대 TPU v6 맞춤형 칩 생산 비용.' },
      { s: 'meta', t: 'avgo', f: 'gpu_purchase', a: 1.1, dEN: 'Meta MTIA v2 ASIC acceleration and Arista/Broadcom Ethernet.', dKO: '메타 차세대 MTIA 가속기 및 AI 백본 네트워킹 구축.' },
      { s: 'nvda', t: 'skhynix', f: 'hbm_purchase', a: 4.0, dEN: 'Blackwell production consumes massive quantities of 8-Hi & 12-Hi HBM3E.', dKO: '블랙웰 가속기 양산에 따른 8단/12단 HBM3E 대량 흡수.' },
      { s: 'nvda', t: 'samsung', f: 'hbm_purchase', a: 1.5, dEN: 'Samsung qualifies 12-Hi HBM3E with NVIDIA customers.', dKO: '삼성전자 12단 HBM3E 주요 엔비디아 고객사 승인 공급.' },
      { s: 'nvda', t: 'tsmc', f: 'gpu_purchase', a: 6.8, dEN: 'TSMC CoWoS capacity surpasses 35k wafers/month.', dKO: 'TSMC CoWoS 생산능력 월 3만 5천 장 돌파.' },
      { s: 'end_market', t: 'openai', f: 'enterprise_revenue', a: 1.8, dEN: 'o1 reasoning API pricing commands premium token margins.', dKO: 'o1 추론 모델 API의 고단가 토큰 판매로 매출 신장.' },
      { s: 'end_market', t: 'msft', f: 'enterprise_revenue', a: 2.2, dEN: 'Enterprise Copilot seat expansions and Azure AI services.', dKO: '대기업 엔터프라이즈 코파일럿 좌석 확대 및 매출 가속.' }
    ]
  },

  // ─── 2025 ──────────────────────────────────────────────────────────
  {
    id: '2025-Q1', year: 2025, quarter: 1, label: '2025 Q1',
    dateRangeEN: 'Jan - Mar 2025', dateRangeKO: '2025년 1월 ~ 3월',
    titleEN: '2025 Q1: DeepSeek Shock, Algorithmic Efficiency & Stargate Blueprint',
    titleKO: '2025년 1분기: 딥시크 쇼크와 알고리즘 효율성, 1000억 달러 스타게이트 구상',
    summaryEN: 'DeepSeek releases DeepSeek-R1, demonstrating frontier reasoning parity at a fraction of reported training cost, sparking intense debates on algorithmic efficiency vs capex intensity. Meanwhile, Microsoft and OpenAI outline plans for "Stargate", a 5-gigawatt supercomputing complex.',
    summaryKO: '중국 딥시크가 극도로 낮은 훈련 비용으로 최고 수준의 추론 성능을 달성한 DeepSeek-R1을 공개하며, 글로벌 금융시장에 알고리즘 효율성과 Capex 지속성에 대한 충격을 던집니다. 한편 MS와 OpenAI는 1,000억 달러 규모의 5GW 슈퍼데이터센터 "스타게이트" 청사진을 구체화합니다.',
    macro: { totalAiCapex: 63.6, realEndUserRevenue: 8.9, circularRatio: 62 },
    caps: {
      msft: 3380, goog: 2280, amzn: 2200, meta: 1580,
      nvda: 3450, tsmc: 950, avgo: 820,
      skhynix: 130, samsung: 400, asml: 410,
      openai: 190, anthropic: 52, xai: 55, deepseek: 22.0,
      coreweave: 22.0, vc_sovereign: 500, end_market: 1200
    },
    nodeMetrics: {
      msft: { capex: 17.5, rev: 2.6 }, goog: { capex: 15.5, rev: 1.9 }, amzn: { capex: 17.8, rev: 1.5 }, meta: { capex: 12.8, rev: 1.0 },
      nvda: { capex: 1.5, rev: 36.5 }, tsmc: { capex: 9.5, rev: 26.8 }, avgo: { capex: 0.6, rev: 4.5 },
      skhynix: { capex: 3.5, rev: 5.2 }, samsung: { capex: 11.0, rev: 4.2 }, asml: { capex: 0.8, rev: 8.8 },
      openai: { capex: 3.2, rev: 2.2 }, anthropic: { capex: 1.8, rev: 0.6 }, xai: { capex: 2.0, rev: 0.25 }, deepseek: { capex: 0.4, rev: 0.45 },
      coreweave: { capex: 4.8, rev: 1.1 }, vc_sovereign: { capex: 0, rev: 0 }, end_market: { capex: 0, rev: 8.9 }
    },
    edges: [
      { s: 'msft', t: 'openai', f: 'cloud_credit', a: 4.0, dEN: 'Stargate site acquisition and preliminary nuclear energy PPAs.', dKO: '스타게이트 부지 매입 및 원자력 PPA 전력 공급 계약 착수.' },
      { s: 'openai', t: 'msft', f: 'cloud_credit', a: 2.1, dEN: 'OpenAI Azure spend scales with daily user traffic and enterprise inference.', dKO: '일일 활성 사용자 및 기업 추론 트래픽 폭증에 따른 Azure 비용 정산.' },
      { s: 'msft', t: 'nvda', f: 'gpu_purchase', a: 6.2, dEN: 'Blackwell GB200 volume deliveries begin to Azure data centers.', dKO: 'Azure 데이터센터향 블랙웰 GB200 양산 물량 본격 반입.' },
      { s: 'amzn', t: 'nvda', f: 'gpu_purchase', a: 5.5, dEN: 'AWS expands Blackwell UltraClusters.', dKO: 'AWS 차세대 블랙웰 울트라클러스터 증설.' },
      { s: 'nvda', t: 'skhynix', f: 'hbm_purchase', a: 4.5, dEN: 'SK Hynix ships majority share of 12-Hi HBM3E for B200.', dKO: 'B200용 12단 HBM3E 메모리 지배적 물량 공급 지속.' },
      { s: 'nvda', t: 'samsung', f: 'hbm_purchase', a: 2.0, dEN: 'Samsung expands HBM3E shipments across enterprise tier.', dKO: '엔터프라이즈 가속기향 삼성전자 HBM3E 공급량 확대.' },
      { s: 'tsmc', t: 'asml', f: 'equipment_purchase', a: 2.4, dEN: 'High-NA EUV system integration for 2nm trial production.', dKO: '2nm 시험 양산을 위한 High-NA EUV 장비 라인 통합.' },
      { s: 'end_market', t: 'deepseek', f: 'enterprise_revenue', a: 0.45, dEN: 'Global developers adopt DeepSeek open-weights API for low inference cost.', dKO: '극도의 저비용 추론 매력으로 글로벌 개발자 DeepSeek API 대거 채택.' }
    ]
  },

  {
    id: '2025-Q2', year: 2025, quarter: 2, label: '2025 Q2',
    dateRangeEN: 'Apr - Jun 2025', dateRangeKO: '2025년 4월 ~ 6월',
    titleEN: '2025 Q2: Blackwell Volume Deployment & Samsung HBM3E Qualification',
    titleKO: '2025년 2분기: 블랙웰 GB200 양산 출하와 삼성전자 HBM3E 공급 본격화',
    summaryEN: 'NVIDIA accelerates shipments of GB200 NVL72 liquid-cooled rack systems at $3M+ per cabinet. Samsung completes supply qualification for top-tier AI accelerator clients. Hyperscaler quarterly Capex surpasses $68B, straining regional electrical grids and substation supply chains.',
    summaryKO: '엔비디아가 랙당 300만 달러를 호가하는 GB200 NVL72 수랭식 캐비닛을 본격 출하합니다. 삼성전자는 글로벌 최고 티어 고객사향 HBM3E 공급 퀄을 완료합니다. 빅테크 분기 Capex가 680억 달러를 돌파하며 전력망과 변전소 인프라에 병목이 발생합니다.',
    macro: { totalAiCapex: 69.0, realEndUserRevenue: 10.5, circularRatio: 60 },
    caps: {
      msft: 3520, goog: 2350, amzn: 2310, meta: 1640,
      nvda: 3650, tsmc: 980, avgo: 860,
      skhynix: 135, samsung: 420, asml: 430,
      openai: 210, anthropic: 60, xai: 62, deepseek: 26.0,
      coreweave: 25.0, vc_sovereign: 500, end_market: 1200
    },
    nodeMetrics: {
      msft: { capex: 19.2, rev: 3.0 }, goog: { capex: 16.8, rev: 2.2 }, amzn: { capex: 19.5, rev: 1.8 }, meta: { capex: 13.5, rev: 1.2 },
      nvda: { capex: 1.6, rev: 39.2 }, tsmc: { capex: 9.8, rev: 28.1 }, avgo: { capex: 0.65, rev: 4.8 },
      skhynix: { capex: 3.8, rev: 5.6 }, samsung: { capex: 11.5, rev: 4.9 }, asml: { capex: 0.8, rev: 9.0 },
      openai: { capex: 3.8, rev: 2.5 }, anthropic: { capex: 2.0, rev: 0.8 }, xai: { capex: 2.2, rev: 0.3 }, deepseek: { capex: 0.5, rev: 0.5 },
      coreweave: { capex: 5.2, rev: 1.3 }, vc_sovereign: { capex: 0, rev: 0 }, end_market: { capex: 0, rev: 10.5 }
    },
    edges: [
      { s: 'msft', t: 'nvda', f: 'gpu_purchase', a: 6.8, dEN: 'Procuring thousands of liquid-cooled GB200 server racks.', dKO: '수랭식 GB200 서버 랙 수천 대 조달 집행.' },
      { s: 'goog', t: 'nvda', f: 'gpu_purchase', a: 4.5, dEN: 'Deploying Blackwell alongside internal TPU v6 clusters.', dKO: '자체 TPU v6 클러스터와 병행하여 블랙웰 대규모 반입.' },
      { s: 'meta', t: 'nvda', f: 'gpu_purchase', a: 5.2, dEN: 'Meta mega data center campuses across the US.', dKO: '미국 전역의 메타 초대형 데이터센터 캠퍼스 인프라 확충.' },
      { s: 'nvda', t: 'skhynix', f: 'hbm_purchase', a: 4.8, dEN: 'SK Hynix remains primary 12-layer HBM3E supplier.', dKO: 'SK하이닉스, 12단 HBM3E 최대 공급 지위 지속 수성.' },
      { s: 'nvda', t: 'samsung', f: 'hbm_purchase', a: 2.6, dEN: 'Samsung expands volume shipments of HBM3E to tier-1 server makers.', dKO: '삼성전자 HBM3E 대량 양산 납품 본격 확대.' },
      { s: 'nvda', t: 'tsmc', f: 'gpu_purchase', a: 7.5, dEN: 'TSMC CoWoS capacity climbs to 42,000 wafers per month.', dKO: 'TSMC CoWoS 생산능력 월 4만 2천 장으로 확대.' },
      { s: 'end_market', t: 'msft', f: 'enterprise_revenue', a: 3.0, dEN: 'Azure Copilot Studio agent workflows adopted across Global 2000.', dKO: '글로벌 2000대 기업의 Azure 코파일럿 스튜디오 에이전트 도입.' }
    ]
  },

  {
    id: '2025-Q3', year: 2025, quarter: 3, label: '2025 Q3',
    dateRangeEN: 'Jul - Sep 2025', dateRangeKO: '2025년 7월 ~ 9월',
    titleEN: '2025 Q3: The 3-Year Depreciation Cliff & Neocloud Refinancing',
    titleKO: '2025년 3분기: 3년 감가상각 절벽 도래와 GPU 부채 리파이낸싱 압박',
    summaryEN: 'First-generation 2022/2023 H100 clusters enter their 3-year corporate depreciation window, losing rental pricing power as Blackwell becomes the industry standard. Neoclouds face collateral valuation tests from private credit lenders while enterprise AI agent spending accelerates.',
    summaryKO: '2022~2023년에 도입된 1세대 H100 클러스터가 3년 감가상각 주기에 진입하며 임대료 하락 압박을 받습니다. 블랙웰이 표준으로 자리잡으면서 네오클라우드들은 사모펀드 대출 담보 가치 재평가에 직면하지만, 기업용 AI 에이전트 실매출은 성장세를 이어갑니다.',
    macro: { totalAiCapex: 71.9, realEndUserRevenue: 12.1, circularRatio: 58 },
    caps: {
      msft: 3450, goog: 2340, amzn: 2280, meta: 1610,
      nvda: 3580, tsmc: 960, avgo: 840,
      skhynix: 130, samsung: 410, asml: 415,
      openai: 220, anthropic: 65, xai: 60, deepseek: 28.0,
      coreweave: 28.0, vc_sovereign: 500, end_market: 1200
    },
    nodeMetrics: {
      msft: { capex: 20.5, rev: 3.3 }, goog: { capex: 17.2, rev: 2.5 }, amzn: { capex: 20.0, rev: 2.1 }, meta: { capex: 14.2, rev: 1.4 },
      nvda: { capex: 1.7, rev: 41.0 }, tsmc: { capex: 10.0, rev: 29.2 }, avgo: { capex: 0.7, rev: 5.1 },
      skhynix: { capex: 4.0, rev: 5.8 }, samsung: { capex: 11.8, rev: 5.3 }, asml: { capex: 0.8, rev: 9.1 },
      openai: { capex: 4.2, rev: 2.8 }, anthropic: { capex: 2.2, rev: 1.0 }, xai: { capex: 2.5, rev: 0.35 }, deepseek: { capex: 0.6, rev: 0.6 },
      coreweave: { capex: 5.5, rev: 1.5 }, vc_sovereign: { capex: 0, rev: 0 }, end_market: { capex: 0, rev: 12.1 }
    },
    edges: [
      { s: 'coreweave', t: 'vc_sovereign', f: 'debt_collateral', a: 2.5, dEN: 'Refinancing maturing 2023 debt facilities with asset-backed bonds.', dKO: '2023년 만기 도래 부채를 자산유동화 채권으로 차환(리파이낸싱).' },
      { s: 'coreweave', t: 'nvda', f: 'gpu_purchase', a: 4.0, dEN: 'Transitioning cluster capacity from Hopper to Blackwell.', dKO: '호퍼 중심에서 블랙웰 인프라로의 전환을 위한 신규 발주.' },
      { s: 'msft', t: 'nvda', f: 'gpu_purchase', a: 7.0, dEN: 'Continued Blackwell deployments for enterprise cloud services.', dKO: '엔터프라이즈 클라우드 지원을 위한 블랙웰 지속 도입.' },
      { s: 'nvda', t: 'skhynix', f: 'hbm_purchase', a: 5.0, dEN: 'SK Hynix operating at full capacity for 12-layer HBM3E.', dKO: 'SK하이닉스 12단 HBM3E 풀가동 및 안정적 공급.' },
      { s: 'nvda', t: 'samsung', f: 'hbm_purchase', a: 3.0, dEN: 'Samsung memory division posts strong HBM revenue contribution.', dKO: '삼성전자 메모리 사업부 HBM 매출 비중 대폭 확대.' },
      { s: 'goog', t: 'avgo', f: 'gpu_purchase', a: 2.2, dEN: 'Google TPU v6 custom silicon ramp across primary data centers.', dKO: '구글 TPU v6 자체 가속기 대규모 양산 및 데이터센터 배치.' },
      { s: 'end_market', t: 'openai', f: 'enterprise_revenue', a: 2.8, dEN: 'Agentic coding and deterministic workflows drive corporate ROI.', dKO: '코딩 에이전트 및 결정론적 업무 자동화로 기업 결제 급증.' }
    ]
  },

  {
    id: '2025-Q4', year: 2025, quarter: 4, label: '2025 Q4',
    dateRangeEN: 'Oct - Dec 2025', dateRangeKO: '2025년 10월 ~ 12월',
    titleEN: '2025 Q4: Hyperscaler Custom ASIC Inference Surge & Power Limits',
    titleKO: '2025년 4분기: 빅테크 자체 ASIC 추론 비중 35% 돌파와 데이터센터 전력 한계',
    summaryEN: 'Hyperscaler custom silicon (Google TPU v6, AWS Trainium2, Meta MTIA v2) handles over 35% of hyperscaler internal batch inference workloads. Data center capacity becomes strictly power-constrained. TSMC CoWoS capacity surpasses 45,000 wafers/month.',
    summaryKO: '구글 TPU v6, 아마존 트레니엄2, 메타 MTIA v2 등 빅테크 자체 ASIC이 내부 배치 추론 작업의 35% 이상을 처리하기 시작합니다. 데이터센터 증설의 핵심 병목이 칩 공급에서 전력망 용량으로 완전히 이동하며, TSMC CoWoS 생산능력은 월 4만 5천 장을 넘어섭니다.',
    macro: { totalAiCapex: 75.3, realEndUserRevenue: 14.2, circularRatio: 56 },
    caps: {
      msft: 3580, goog: 2420, amzn: 2360, meta: 1680,
      nvda: 3720, tsmc: 1010, avgo: 880,
      skhynix: 138, samsung: 430, asml: 435,
      openai: 240, anthropic: 72, xai: 65, deepseek: 30.0,
      coreweave: 30.0, vc_sovereign: 500, end_market: 1200
    },
    nodeMetrics: {
      msft: { capex: 21.5, rev: 3.6 }, goog: { capex: 18.5, rev: 2.8 }, amzn: { capex: 20.8, rev: 2.4 }, meta: { capex: 15.0, rev: 1.6 },
      nvda: { capex: 1.8, rev: 43.5 }, tsmc: { capex: 10.2, rev: 30.5 }, avgo: { capex: 0.75, rev: 5.5 },
      skhynix: { capex: 4.2, rev: 6.2 }, samsung: { capex: 12.0, rev: 5.8 }, asml: { capex: 0.8, rev: 9.3 },
      openai: { capex: 4.6, rev: 3.2 }, anthropic: { capex: 2.5, rev: 1.2 }, xai: { capex: 2.8, rev: 0.4 }, deepseek: { capex: 0.7, rev: 0.7 },
      coreweave: { capex: 5.8, rev: 1.8 }, vc_sovereign: { capex: 0, rev: 0 }, end_market: { capex: 0, rev: 14.2 }
    },
    edges: [
      { s: 'goog', t: 'avgo', f: 'gpu_purchase', a: 2.5, dEN: 'TPU v6 scaling drives Broadcom custom ASIC networking segment.', dKO: 'TPU v6 대규모 양산으로 브로드컴 맞춤형 칩 부문 급성장.' },
      { s: 'meta', t: 'avgo', f: 'gpu_purchase', a: 1.6, dEN: 'Meta deploys MTIA v2 across ranking and recommendation nodes.', dKO: '메타 랭킹 및 추천 시스템에 MTIA v2 자체 칩 전면 배치.' },
      { s: 'msft', t: 'nvda', f: 'gpu_purchase', a: 7.2, dEN: 'Hyperscalers maintain high GPU purchases for third-party cloud customers.', dKO: '외부 클라우드 고객 유치를 위한 최신 GPU 지속 확보.' },
      { s: 'nvda', t: 'skhynix', f: 'hbm_purchase', a: 5.2, dEN: 'HBM3E sales drive record annual free cash flow for SK Hynix.', dKO: 'HBM3E 판매 호조로 SK하이닉스 사상 최대 연간 잉여현금흐름 창출.' },
      { s: 'nvda', t: 'samsung', f: 'hbm_purchase', a: 3.4, dEN: 'Samsung ships 12-layer HBM3E at scale for AI servers.', dKO: '삼성전자 12단 HBM3E 대량 양산 및 주요 AI 서버 공급.' },
      { s: 'end_market', t: 'openai', f: 'enterprise_revenue', a: 3.2, dEN: 'OpenAI quarterly enterprise run-rate approaches $3.2B.', dKO: '오픈AI 분기 실매출 32억 달러 육박.' },
      { s: 'end_market', t: 'msft', f: 'enterprise_revenue', a: 3.6, dEN: 'Enterprise software suites embed agentic copilot capabilities.', dKO: '엔터프라이즈 코파일럿 소프트웨어 수익화 안착.' }
    ]
  },

  // ─── 2026 ──────────────────────────────────────────────────────────
  {
    id: '2026-Q1', year: 2026, quarter: 1, label: '2026 Q1',
    dateRangeEN: 'Jan - Mar 2026', dateRangeKO: '2026년 1월 ~ 3월',
    titleEN: '2026 Q1: Global Antitrust Probes into Circular Cloud Credit Swaps',
    titleKO: '2026년 1분기: 순환 클라우드 크레딧 및 벤더 락인에 대한 글로벌 반독점 조사',
    summaryEN: 'Antitrust regulators (US FTC, EU Commission, UK CMA) formally scrutinize circular cloud credit swaps and captive vendor lock-ins between Hyperscalers and frontier labs. NVIDIA previews the Vera Rubin architecture featuring next-generation HBM4 memory.',
    summaryKO: '미국 FTC, 유럽연합 집행위, 영국 CMA가 빅테크와 프론티어 AI 랩스 간의 순환형 클라우드 크레딧 교환 및 벤더 락인 계약에 대해 공식 조사에 착수합니다. 엔비디아는 차세대 HBM4를 탑재한 베라 루빈(Vera Rubin) 아키텍처를 공개합니다.',
    macro: { totalAiCapex: 77.1, realEndUserRevenue: 16.0, circularRatio: 52 },
    caps: {
      msft: 3620, goog: 2480, amzn: 2420, meta: 1720,
      nvda: 3750, tsmc: 1040, avgo: 910,
      skhynix: 142, samsung: 440, asml: 440,
      openai: 255, anthropic: 78, xai: 68, deepseek: 32.0,
      coreweave: 32.0, vc_sovereign: 500, end_market: 1200
    },
    nodeMetrics: {
      msft: { capex: 21.8, rev: 4.0 }, goog: { capex: 18.8, rev: 3.2 }, amzn: { capex: 21.0, rev: 2.7 }, meta: { capex: 15.5, rev: 1.8 },
      nvda: { capex: 1.9, rev: 44.0 }, tsmc: { capex: 10.5, rev: 31.8 }, avgo: { capex: 0.8, rev: 5.8 },
      skhynix: { capex: 4.4, rev: 6.5 }, samsung: { capex: 12.2, rev: 6.2 }, asml: { capex: 0.8, rev: 9.5 },
      openai: { capex: 4.8, rev: 3.5 }, anthropic: { capex: 2.6, rev: 1.4 }, xai: { capex: 3.0, rev: 0.5 }, deepseek: { capex: 0.8, rev: 0.8 },
      coreweave: { capex: 6.0, rev: 2.0 }, vc_sovereign: { capex: 0, rev: 0 }, end_market: { capex: 0, rev: 16.0 }
    },
    edges: [
      { s: 'msft', t: 'openai', f: 'cloud_credit', a: 3.2, dEN: 'Restructuring cloud partnership into commercial fee structure for antitrust compliance.', dKO: '반독점 규제 준수를 위해 순환 크레딧을 상업적 현금 수수료 모델로 전환.' },
      { s: 'openai', t: 'msft', f: 'cloud_credit', a: 2.8, dEN: 'Direct commercial payments for dedicated Stargate computing zones.', dKO: '전용 스타게이트 컴퓨팅 존 사용에 따른 직접 현금 결제.' },
      { s: 'msft', t: 'nvda', f: 'gpu_purchase', a: 7.2, dEN: 'Procuring Vera Rubin and Blackwell systems.', dKO: '베라 루빈 및 차세대 블랙웰 시스템 조달.' },
      { s: 'nvda', t: 'skhynix', f: 'hbm_purchase', a: 5.4, dEN: 'SK Hynix samples 16-layer HBM3E and early HBM4.', dKO: 'SK하이닉스, 16단 HBM3E 및 초기 HBM4 샘플 공급.' },
      { s: 'nvda', t: 'samsung', f: 'hbm_purchase', a: 3.6, dEN: 'Samsung develops custom HBM4 base dies on 4nm foundry.', dKO: '삼성전자, 4nm 파운드리 기반 맞춤형 HBM4 베이스 다이 개발 공급.' },
      { s: 'nvda', t: 'tsmc', f: 'gpu_purchase', a: 8.0, dEN: 'TSMC 2nm N2 process reservation agreements.', dKO: 'TSMC 선단 2nm N2 공정 생산 라인 사전 예약 계약.' },
      { s: 'end_market', t: 'openai', f: 'enterprise_revenue', a: 3.5, dEN: 'Corporate agentic workflow licenses.', dKO: '기업용 자율 에이전트 워크플로우 라이선스 매출 성장.' }
    ]
  },

  {
    id: '2026-Q2', year: 2026, quarter: 2, label: '2026 Q2',
    dateRangeEN: 'Apr - Jun 2026', dateRangeKO: '2026년 4월 ~ 6월',
    titleEN: '2026 Q2: Next-Gen HBM4 Tape-Out & The TSMC Base Die Alliance',
    titleKO: '2026년 2분기: HBM4 테이프아웃과 TSMC 로직 베이스 다이 연합',
    summaryEN: 'Samsung and SK Hynix tape out next-generation HBM4 modules utilizing advanced logic base dies fabricated at TSMC. The semiconductor supply chain forms deep cross-industry alliances to overcome thermal and bandwidth limits as AI hardware transitions to 2nm.',
    summaryKO: '삼성전자와 SK하이닉스가 TSMC 선단 로직 베이스 다이를 결합한 차세대 HBM4 테이프아웃을 단행합니다. AI 반도체가 2nm로 진입함에 따라 발열과 대역폭 한계를 극복하기 위해 메모리-파운드리 간 초격차 연합이 강화됩니다.',
    macro: { totalAiCapex: 80.0, realEndUserRevenue: 18.2, circularRatio: 50 },
    caps: {
      msft: 3710, goog: 2520, amzn: 2460, meta: 1760,
      nvda: 3850, tsmc: 1060, avgo: 930,
      skhynix: 145, samsung: 450, asml: 450,
      openai: 270, anthropic: 82, xai: 72, deepseek: 34.0,
      coreweave: 34.0, vc_sovereign: 500, end_market: 1200
    },
    nodeMetrics: {
      msft: { capex: 22.5, rev: 4.3 }, goog: { capex: 19.5, rev: 3.5 }, amzn: { capex: 22.0, rev: 3.0 }, meta: { capex: 16.0, rev: 2.0 },
      nvda: { capex: 2.0, rev: 46.5 }, tsmc: { capex: 10.8, rev: 33.0 }, avgo: { capex: 0.85, rev: 6.2 },
      skhynix: { capex: 4.6, rev: 6.8 }, samsung: { capex: 12.5, rev: 6.5 }, asml: { capex: 0.9, rev: 9.8 },
      openai: { capex: 5.0, rev: 3.8 }, anthropic: { capex: 2.8, rev: 1.6 }, xai: { capex: 3.2, rev: 0.6 }, deepseek: { capex: 0.9, rev: 0.9 },
      coreweave: { capex: 6.2, rev: 2.2 }, vc_sovereign: { capex: 0, rev: 0 }, end_market: { capex: 0, rev: 18.2 }
    },
    edges: [
      { s: 'skhynix', t: 'tsmc', f: 'gpu_purchase', a: 1.5, dEN: 'SK Hynix contracts TSMC 4nm/3nm foundries for custom HBM4 base dies.', dKO: 'SK하이닉스, HBM4 베이스 다이 생산을 위해 TSMC 파운드리 활용.' },
      { s: 'samsung', t: 'nvda', f: 'hbm_purchase', a: 4.0, dEN: 'Samsung provides one-stop turnkey HBM4 solutions (memory + 4nm foundry).', dKO: '삼성전자, 메모리+파운드리 턴키 기반 HBM4 솔루션 납품 확대.' },
      { s: 'nvda', t: 'skhynix', f: 'hbm_purchase', a: 5.8, dEN: 'NVIDIA secures vast majority of next-gen Rubin memory allocations.', dKO: '루빈 아키텍처용 HBM 공급 물량 완판 확보.' },
      { s: 'nvda', t: 'tsmc', f: 'gpu_purchase', a: 8.5, dEN: 'TSMC volume production of 2nm nanosheet wafer lots.', dKO: 'TSMC 2nm 나노시트 웨이퍼 양산 라인 가동.' },
      { s: 'goog', t: 'avgo', f: 'gpu_purchase', a: 2.8, dEN: 'Google deploys 7th-gen TPU ASIC across global regions.', dKO: '구글 7세대 TPU 맞춤형 ASIC 전 세계 리전 배치.' },
      { s: 'end_market', t: 'msft', f: 'enterprise_revenue', a: 4.3, dEN: 'Copilot agentic features reach high enterprise adoption.', dKO: '기업 내 M365 코파일럿 에이전트 기능 도입 가속.' }
    ]
  },

  {
    id: '2026-Q3', year: 2026, quarter: 3, label: '2026 Q3',
    dateRangeEN: 'Jul - Sep 2026', dateRangeKO: '2026년 7월 ~ 9월',
    titleEN: '2026 Q3: The Capex Wall & The Real ROI Monetization Reckoning',
    titleKO: '2026년 3분기: Capex 장벽 도달과 실제 소프트웨어 수익화 시험대',
    summaryEN: 'The AI industry reaches the "Capex Wall": Hyperscaler quarterly spending exceeds $82B ($330B annual run-rate) while quarterly real software revenue reaches $20.5B, sustaining a quarterly deficit of $62B+. Unviable AI wrappers face shutdowns, while true utility platforms command high recurring enterprise revenue.',
    summaryKO: 'AI 산업이 이른바 "Capex 장벽"에 도달합니다. 빅테크 분기 설비투자가 825억 달러(연간 3,300억 달러 런레이트)에 달하지만 실제 소프트웨어 분기 매출은 205억 달러에 그쳐 분기당 620억 달러 이상의 미회수 적자가 지속됩니다. 단순 래퍼 스타트업은 도태되고 실질적 유틸리티 플랫폼만 살아남습니다.',
    macro: { totalAiCapex: 82.5, realEndUserRevenue: 20.5, circularRatio: 48 },
    caps: {
      msft: 3650, goog: 2550, amzn: 2480, meta: 1780,
      nvda: 3780, tsmc: 1080, avgo: 920,
      skhynix: 140, samsung: 445, asml: 440,
      openai: 280, anthropic: 85, xai: 75, deepseek: 35.0,
      coreweave: 35.0, vc_sovereign: 500, end_market: 1200
    },
    nodeMetrics: {
      msft: { capex: 22.2, rev: 4.5 }, goog: { capex: 19.0, rev: 3.8 }, amzn: { capex: 21.5, rev: 3.3 }, meta: { capex: 15.8, rev: 2.2 },
      nvda: { capex: 2.0, rev: 47.0 }, tsmc: { capex: 11.0, rev: 34.0 }, avgo: { capex: 0.9, rev: 6.5 },
      skhynix: { capex: 4.8, rev: 7.0 }, samsung: { capex: 12.8, rev: 6.8 }, asml: { capex: 0.9, rev: 10.0 },
      openai: { capex: 5.2, rev: 4.2 }, anthropic: { capex: 3.0, rev: 1.8 }, xai: { capex: 3.5, rev: 0.7 }, deepseek: { capex: 1.0, rev: 1.0 },
      coreweave: { capex: 6.5, rev: 2.5 }, vc_sovereign: { capex: 0, rev: 0 }, end_market: { capex: 0, rev: 20.5 }
    },
    edges: [
      { s: 'msft', t: 'nvda', f: 'gpu_purchase', a: 7.5, dEN: 'Procuring next-gen AI supercomputers.', dKO: '차세대 슈퍼컴퓨터 인프라 조달 지속.' },
      { s: 'amzn', t: 'nvda', f: 'gpu_purchase', a: 6.5, dEN: 'AWS datacenter infrastructure outlays.', dKO: 'AWS 대형 데이터센터 인프라 확장 지속.' },
      { s: 'nvda', t: 'skhynix', f: 'hbm_purchase', a: 6.0, dEN: 'SK Hynix remains critical monopoly supplier of premium HBM.', dKO: 'SK하이닉스 고대역폭 메모리 독점적 공급 수혜 지속.' },
      { s: 'nvda', t: 'samsung', f: 'hbm_purchase', a: 4.2, dEN: 'Samsung supplies HBM4 across high-volume AI hardware tiers.', dKO: '삼성전자 HBM4 양산 출하로 강력한 실적 기여.' },
      { s: 'nvda', t: 'tsmc', f: 'gpu_purchase', a: 8.8, dEN: 'Wafer and advanced packaging orders at TSMC.', dKO: 'TSMC 선단 패키징 및 웨이퍼 최대 주문.' },
      { s: 'end_market', t: 'openai', f: 'enterprise_revenue', a: 4.2, dEN: 'Enterprise workflows deliver verifiable productivity gains.', dKO: '검증된 업무 생산성을 입증한 기업용 에이전트 결제 확대.' },
      { s: 'end_market', t: 'msft', f: 'enterprise_revenue', a: 4.5, dEN: 'Commercial cloud AI bookings exceed $18B annualized run-rate.', dKO: '상업용 클라우드 AI 매출 연간 환산 180억 달러 돌파.' }
    ]
  },

  {
    id: '2026-Q4', year: 2026, quarter: 4, label: '2026 Q4',
    dateRangeEN: 'Oct - Dec 2026', dateRangeKO: '2026년 10월 ~ 12월',
    titleEN: '2026 Q4: Sustainable Multi-Agent Equilibrium & Maturing Capital Cycle',
    titleKO: '2026년 4분기: 자율 멀티 에이전트 정착과 지속 가능한 자본 균형',
    summaryEN: 'Capital allocation shifts from brute-force pre-training scaling toward highly optimized autonomous multi-agent systems and edge inference. Big Tech capex growth moderates to sustainable replacement rates, while the semiconductor supply chain (Foundry, HBM, Equipment) maintains structural profitability.',
    summaryKO: '자본 배분이 무차별적인 사전학습 확장 경쟁에서 최적화된 자율 멀티 에이전트 시스템 및 엣지 추론으로 전환됩니다. 빅테크 Capex 증가율은 지속 가능한 유지보수 수준으로 연착륙하며, 반도체 공급망(파운드리, HBM, 장비)은 구조적 수익성을 확립합니다.',
    macro: { totalAiCapex: 83.9, realEndUserRevenue: 23.1, circularRatio: 45 },
    caps: {
      msft: 3780, goog: 2600, amzn: 2520, meta: 1820,
      nvda: 3820, tsmc: 1100, avgo: 950,
      skhynix: 148, samsung: 460, asml: 460,
      openai: 290, anthropic: 88, xai: 78, deepseek: 38.0,
      coreweave: 36.0, vc_sovereign: 500, end_market: 1200
    },
    nodeMetrics: {
      msft: { capex: 22.0, rev: 4.7 }, goog: { capex: 19.2, rev: 4.0 }, amzn: { capex: 21.2, rev: 3.5 }, meta: { capex: 15.5, rev: 2.4 },
      nvda: { capex: 2.1, rev: 46.5 }, tsmc: { capex: 11.2, rev: 34.5 }, avgo: { capex: 0.95, rev: 6.8 },
      skhynix: { capex: 4.8, rev: 7.2 }, samsung: { capex: 13.0, rev: 7.0 }, asml: { capex: 0.9, rev: 10.2 },
      openai: { capex: 5.4, rev: 4.5 }, anthropic: { capex: 3.2, rev: 2.0 }, xai: { capex: 3.6, rev: 0.8 }, deepseek: { capex: 1.1, rev: 1.2 },
      coreweave: { capex: 6.8, rev: 2.8 }, vc_sovereign: { capex: 0, rev: 0 }, end_market: { capex: 0, rev: 23.1 }
    },
    edges: [
      { s: 'msft', t: 'nvda', f: 'gpu_purchase', a: 7.0, dEN: 'Steady-state replacement and next-gen Rubin GPU procurement.', dKO: '차세대 루빈 GPU 및 주기적 교체 수요에 따른 안정적 발주.' },
      { s: 'amzn', t: 'nvda', f: 'gpu_purchase', a: 6.2, dEN: 'AWS fleet maintenance and enterprise AI workload capacity.', dKO: 'AWS 가속기 클라우드 유지보수 및 용량 확충.' },
      { s: 'nvda', t: 'skhynix', f: 'hbm_purchase', a: 6.2, dEN: 'Long-term HBM4 and HBM4E multi-year supply contracts.', dKO: '차세대 HBM4 및 HBM4E 다년 장기 공급 계약 체결.' },
      { s: 'nvda', t: 'samsung', f: 'hbm_purchase', a: 4.5, dEN: 'Samsung turnkey HBM4 solutions deployed at scale.', dKO: '삼성전자 HBM4 턴키 솔루션 대량 출하 및 공급 다변화.' },
      { s: 'nvda', t: 'tsmc', f: 'gpu_purchase', a: 9.0, dEN: 'TSMC advanced packaging and 2nm production run at peak efficiency.', dKO: 'TSMC 2nm 및 첨단 패키징 라인의 고효율 대량 양산.' },
      { s: 'tsmc', t: 'asml', f: 'equipment_purchase', a: 2.5, dEN: 'Commercial High-NA EUV lithography tooling deliveries.', dKO: 'High-NA EUV 상용 양산 장비 지속 반입.' },
      { s: 'end_market', t: 'openai', f: 'enterprise_revenue', a: 4.5, dEN: 'Enterprise autonomous multi-agent platform subscriptions.', dKO: '자율 멀티 에이전트 플랫폼 엔터프라이즈 구독 매출.' },
      { s: 'end_market', t: 'msft', f: 'enterprise_revenue', a: 4.7, dEN: 'Office 365 Copilot autonomous agents enterprise penetration.', dKO: 'M365 코파일럿 자율 에이전트의 광범위한 기업 침투율 달성.' }
    ]
  }
];

console.log('Quarters prepared:', quartersConfig.length);

// ─── Entity Definitions ───────────────────────────────────────────
const entityBase = {
  msft: {
    category: 'hyperscaler',
    nameEN: 'Microsoft', nameKO: '마이크로소프트',
    initialX: -140, initialY: -130,
    descEN: 'World cloud leader, strategic backer of OpenAI with Azure exclusive integration, developer of Maia AI ASICs.',
    descKO: '세계 최고 클라우드 기업, Azure 기반 OpenAI 독점 파트너십 및 자체 Maia AI 가속기 개발.'
  },
  goog: {
    category: 'hyperscaler',
    nameEN: 'Alphabet / Google', nameKO: '알파벳 / 구글',
    initialX: -185, initialY: 5,
    descEN: 'Pioneer of Transformer architecture; custom TPU v4/v5/v6 silicon with Google DeepMind & Gemini.',
    descKO: '트랜스포머 아키텍처 창시자, 자체 TPU v4/v5/v6 가속기 및 제미나이(Gemini) 생태계 구축.'
  },
  amzn: {
    category: 'hyperscaler',
    nameEN: 'Amazon / AWS', nameKO: '아마존 / AWS',
    initialX: 140, initialY: -130,
    descEN: 'World’s largest cloud provider (AWS), key investor in Anthropic ($4B), developing Trainium2 & Inferentia.',
    descKO: '세계 1위 클라우드 AWS, 앤트로픽 핵심 투자사(40억 달러)이자 자체 Trainium2/Inferentia 가속기 개발.'
  },
  meta: {
    category: 'hyperscaler',
    nameEN: 'Meta Platforms', nameKO: '메타 플랫폼스',
    initialX: 185, initialY: 5,
    descEN: 'Open-source frontier AI champion (LLaMA series), massive GPU cluster operator, MTIA custom silicon.',
    descKO: '오픈소스 AI 생태계 주도(LLaMA 시리즈), 60만 개 이상의 GPU 클러스터 운용 및 MTIA 자체 반도체 개발.'
  },

  nvda: {
    category: 'chipmaker',
    nameEN: 'NVIDIA', nameKO: '엔비디아',
    initialX: 0, initialY: -10,
    descEN: 'Global GPU monopoly (A100/H100/B200/Rubin) and proprietary CUDA software moat capturing 75%+ gross margins.',
    descKO: '글로벌 AI GPU 독점(H100/B200/루빈) 및 CUDA 소프트웨어 생태계를 기반으로 75% 이상의 마진 향유.'
  },
  tsmc: {
    category: 'chipmaker',
    nameEN: 'TSMC', nameKO: 'TSMC',
    initialX: -130, initialY: 190,
    descEN: 'World’s exclusive pure-play foundry and CoWoS advanced packaging monopoly powering all advanced AI accelerators.',
    descKO: '엔비디아, 애플, 브로드컴 등 전 세계 모든 선단 AI 가속기를 제조하는 독점적 파운드리 및 CoWoS 패키징 선도자.'
  },
  avgo: {
    category: 'chipmaker',
    nameEN: 'Broadcom', nameKO: '브로드컴',
    initialX: -215, initialY: 115,
    descEN: 'Leader in custom AI ASICs (Google TPU, Meta MTIA) and high-speed Tomahawk/Jericho AI networking fabrics.',
    descKO: '빅테크 맞춤형 AI ASIC(구글 TPU, 메타 MTIA) 및 초고속 AI 데이터센터 스위치/네트워킹 독점 기업.'
  },

  skhynix: {
    category: 'semiconductor_supply',
    nameEN: 'SK Hynix', nameKO: 'SK하이닉스',
    initialX: -20, initialY: -210,
    descEN: 'World’s undisputed leader in High Bandwidth Memory (HBM3, HBM3E, HBM4), primary memory supplier to NVIDIA.',
    descKO: '엔비디아에 HBM3/HBM3E를 사실상 독점 공급하며 AI 메모리 초격차를 달성한 글로벌 HBM 1위 기업.'
  },
  samsung: {
    category: 'semiconductor_supply',
    nameEN: 'Samsung Electronics', nameKO: '삼성전자',
    initialX: 110, initialY: -195,
    descEN: 'World’s largest memory semiconductor producer, pioneer of 12-layer HBM3E and turnkey foundry/memory solutions.',
    descKO: '세계 최대 메모리 반도체 제조사이자 12단 HBM3E 및 메모리-파운드리 턴키 솔루션을 보유한 종합 반도체 기업.'
  },
  asml: {
    category: 'semiconductor_supply',
    nameEN: 'ASML', nameKO: 'ASML',
    initialX: 20, initialY: 235,
    descEN: 'Monopoly provider of EUV and High-NA EUV lithography equipment essential for 3nm/2nm advanced semiconductor nodes.',
    descKO: '3nm 및 2nm 선단 반도체 제조에 필수적인 EUV 및 High-NA 극자외선 노광 장비를 독점 공급하는 네덜란드 장비사.'
  },

  openai: {
    category: 'ai_lab',
    nameEN: 'OpenAI', nameKO: '오픈AI',
    initialX: -60, initialY: -55,
    descEN: 'Frontier AI lab creator of ChatGPT, GPT-4, and o1 reasoning models; key partner in the $100B Stargate campus.',
    descKO: 'ChatGPT, GPT-4, o1 추론 모델을 개발한 프론티어 AI 선도 기업이자 1,000억 달러 스타게이트 프로젝트 파트너.'
  },
  anthropic: {
    category: 'ai_lab',
    nameEN: 'Anthropic', nameKO: '앤트로픽',
    initialX: 55, initialY: -55,
    descEN: 'Frontier safety lab creator of Claude 3.5 Sonnet and Computer Use; backed by multi-billion commitments from Amazon & Google.',
    descKO: 'Claude 3.5 및 컴퓨터 제어 AI를 개발한 프론티어 연구소로, 아마존과 구글로부터 대규모 자본 유치.'
  },
  xai: {
    category: 'ai_lab',
    nameEN: 'xAI', nameKO: 'xAI',
    initialX: 75, initialY: 45,
    descEN: 'Elon Musk’s AI frontier initiative operating the world’s largest 100k+ liquid-cooled Colossus supercluster in Memphis.',
    descKO: '일론 머스크가 설립한 프론티어 랩으로, 멤피스에 10만 개 규모의 세계 최대 수랭식 슈퍼클러스터 ‘콜로서스’ 운용.'
  },
  deepseek: {
    category: 'ai_lab',
    nameEN: 'DeepSeek', nameKO: '딥시크 (DeepSeek)',
    initialX: -75, initialY: 45,
    descEN: 'Pioneered extreme algorithmic efficiency and low-cost open reasoning models (DeepSeek-V3 & R1) disrupting capex intensity.',
    descKO: '극단적 알고리즘 효율화와 저비용 오픈 추론 모델(DeepSeek-R1)로 무차별적 고비용 Capex 경쟁 구도를 뒤흔든 연구소.'
  },

  coreweave: {
    category: 'neocloud',
    nameEN: 'CoreWeave', nameKO: '코어위브',
    initialX: 0, initialY: 85,
    descEN: 'Pioneer of GPU-collateralized debt financing ($2.3B in 2023, $7.5B in 2024), scaling specialized Neocloud infrastructure.',
    descKO: 'GPU 자체를 담보로 사모펀드로부터 수십억 달러의 부채를 조달해 GPU를 재구매하는 네오클라우드 벤더 파이낸싱의 상징.'
  },

  vc_sovereign: {
    category: 'venture_capital',
    nameEN: 'VC & Sovereign Funds', nameKO: '벤처캐피탈 & 국부펀드',
    initialX: 220, initialY: 155,
    descEN: 'Global venture syndicates (Sequoia, a16z, Thrive, SoftBank) and sovereign wealth funds (MGX, PIF) funding mega-rounds.',
    descKO: '세쿼이아, 소프트뱅크, a16z 및 중동 국부펀드(MGX, PIF) 등 AI 메가 라운드 및 사모 부채를 공급하는 자본 풀.'
  },

  end_market: {
    category: 'end_market',
    nameEN: 'Enterprise & End Users', nameKO: '실제 기업 & 최종 사용자 시장',
    initialX: -230, initialY: -170,
    descEN: 'Real-world corporate IT budgets, developer API billing, and consumer subscriptions representing verified software revenue.',
    descKO: '실제 기업 IT 예산, 개발자 API 사용료, 유료 소비자 구독 등 AI 생태계의 유일한 외부 실질 현금 유입원.'
  }
};

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

function buildDataset(isKO) {
  return quartersConfig.map(q => {
    const nodes = Object.keys(entityBase).map(id => {
      const base = entityBase[id];
      const m = q.nodeMetrics[id] || { capex: 0, rev: 0 };
      const cap = q.caps[id] || 100;
      return {
        id: id,
        name: isKO ? base.nameKO : base.nameEN,
        category: base.category,
        marketCap: cap,
        aiCapex: m.capex,
        aiRevenue: m.rev,
        desc: isKO ? base.descKO : base.descEN,
        initialX: base.initialX,
        initialY: base.initialY
      };
    });

    const edges = q.edges.map(e => ({
      source: e.s,
      target: e.t,
      flowType: e.f,
      amount: e.a,
      desc: isKO ? e.dKO : e.dEN
    }));

    const capexDeficit = parseFloat((q.macro.totalAiCapex - q.macro.realEndUserRevenue).toFixed(1));
    const annualizedRunRate = parseFloat((q.macro.totalAiCapex * 4).toFixed(1));

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
const enOutput = `// ai_capital_data.js - Global AI Capital Circulation & Supply Chain Empirical Database (Quarterly 2023 Q1 - 2026 Q4)

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
console.log('Successfully generated ai_capital_data.js (EN)');

// ─── Write Korean Dataset ──────────────────────────────────────────
const koData = buildDataset(true);
const koOutput = `// ai_capital_data_ko.js - 글로벌 AI 자금 순환 및 반도체 공급망 실증 데이터베이스 (분기별 2023 Q1 ~ 2026 Q4)

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
console.log('Successfully generated ai_capital_data_ko.js (KO)');
