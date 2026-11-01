// scratch/build_master_edges.js
// Defines the 28 canonical channels and generates consistent, persistent edges for all 16 quarters

const masterChannels = [
  // ─── Big Tech -> NVIDIA (Continuous GPU Purchasing) ────────────
  { id: 'msft_nvda_gpu', s: 'msft', t: 'nvda', f: 'gpu_purchase', nameEN: 'Azure GPU Procurement', nameKO: 'Azure 가속기 서버 조달' },
  { id: 'goog_nvda_gpu', s: 'goog', t: 'nvda', f: 'gpu_purchase', nameEN: 'GCP GPU Procurement', nameKO: 'GCP 가속기 서버 조달' },
  { id: 'amzn_nvda_gpu', s: 'amzn', t: 'nvda', f: 'gpu_purchase', nameEN: 'AWS UltraCluster GPU Procurement', nameKO: 'AWS 울트라클러스터 GPU 조달' },
  { id: 'meta_nvda_gpu', s: 'meta', t: 'nvda', f: 'gpu_purchase', nameEN: 'Meta AI Data Center GPU Procurement', nameKO: '메타 AI 데이터센터 GPU 조달' },

  // ─── NVIDIA -> Semiconductor Supply Chain ──────────────────────
  { id: 'nvda_tsmc_gpu', s: 'nvda', t: 'tsmc', f: 'gpu_purchase', nameEN: 'TSMC Advanced Packaging (CoWoS) & Wafers', nameKO: 'TSMC 선단 공정 웨이퍼 및 CoWoS 패키징 발주' },
  { id: 'nvda_skhynix_hbm', s: 'nvda', t: 'skhynix', f: 'hbm_purchase', nameEN: 'SK Hynix HBM3/HBM3E/HBM4 Procurement', nameKO: 'SK하이닉스 HBM3/HBM3E/HBM4 조달' },
  { id: 'nvda_samsung_hbm', s: 'nvda', t: 'samsung', f: 'hbm_purchase', nameEN: 'Samsung Electronics HBM3E/HBM4 & DRAM Supply', nameKO: '삼성전자 HBM3E/HBM4 및 고성능 메모리 공급' },

  // ─── Lithography Equipment (ASML) ──────────────────────────────
  { id: 'tsmc_asml_equip', s: 'tsmc', t: 'asml', f: 'equipment_purchase', nameEN: 'TSMC EUV/High-NA Lithography Orders', nameKO: 'TSMC 선단 노광 장비(EUV/High-NA) 발주' },
  { id: 'samsung_asml_equip', s: 'samsung', t: 'asml', f: 'equipment_purchase', nameEN: 'Samsung Pyeongtaek EUV Line Expansion', nameKO: '삼성전자 평택 캠퍼스 EUV 라인 장비 조달' },
  { id: 'skhynix_asml_equip', s: 'skhynix', t: 'asml', f: 'equipment_purchase', nameEN: 'SK Hynix 1b/1c nm HBM DRAM EUV Scanners', nameKO: 'SK하이닉스 HBM 전용 EUV 노광 장비 도입' },

  // ─── Custom ASICs (Broadcom) ───────────────────────────────────
  { id: 'goog_avgo_gpu', s: 'goog', t: 'avgo', f: 'gpu_purchase', nameEN: 'Google TPU Custom Silicon Design', nameKO: '구글 TPU 맞춤형 ASIC 및 네트워킹 지출' },
  { id: 'meta_avgo_gpu', s: 'meta', t: 'avgo', f: 'gpu_purchase', nameEN: 'Meta MTIA Custom Accelerator Silicon', nameKO: '메타 MTIA 자체 가속기 개발 지출' },

  // ─── Microsoft <-> OpenAI (The Reciprocal Circular Loop) ───────
  { id: 'msft_openai_credit', s: 'msft', t: 'openai', f: 'cloud_credit', nameEN: 'Microsoft Azure Compute Credits', nameKO: 'MS의 Azure 클라우드 컴퓨팅 크레딧 지원' },
  { id: 'openai_msft_spend', s: 'openai', t: 'msft', f: 'cloud_credit', nameEN: 'OpenAI Azure Data Center Hosting Bills', nameKO: '오픈AI의 Azure 인프라 이용료 지출' },

  // ─── Amazon & Google <-> Anthropic Loop ────────────────────────
  { id: 'amzn_anthropic_equity', s: 'amzn', t: 'anthropic', f: 'equity_investment', nameEN: 'Amazon Strategic Capital Tranche', nameKO: '아마존 전략적 투자 트랜치' },
  { id: 'anthropic_amzn_spend', s: 'anthropic', t: 'amzn', f: 'cloud_credit', nameEN: 'Anthropic AWS Bedrock Compute Spend', nameKO: '앤트로픽의 AWS 베드록 인프라 이용료 지출' },
  { id: 'goog_anthropic_equity', s: 'goog', t: 'anthropic', f: 'equity_investment', nameEN: 'Google Strategic Capital Commitment', nameKO: '구글 전략적 투자 및 파트너십 약정' },

  // ─── Neocloud & GPU Debt Financing (CoreWeave) ─────────────────
  { id: 'vc_coreweave_debt', s: 'vc_sovereign', t: 'coreweave', f: 'debt_collateral', nameEN: 'GPU-Collateralized Private Debt Facility', nameKO: 'GPU 담보 사모 부채 조달 (블랙스톤/마그네타)' },
  { id: 'coreweave_nvda_gpu', s: 'coreweave', t: 'nvda', f: 'gpu_purchase', nameEN: 'CoreWeave GPU Fleet Additions', nameKO: '코어위브의 엔비디아 GPU 대량 구매' },
  { id: 'nvda_coreweave_equity', s: 'nvda', t: 'coreweave', f: 'equity_investment', nameEN: 'NVIDIA Strategic Equity in Neocloud', nameKO: '엔비디아의 코어위브 전략적 지분 투자' },
  { id: 'coreweave_vc_refinance', s: 'coreweave', t: 'vc_sovereign', f: 'debt_collateral', nameEN: 'GPU Debt Refinancing & Securitization', nameKO: 'GPU 부채 만기 연장 및 자산유동화(차환)' },

  // ─── Milestone Deals & Alliances ───────────────────────────────
  { id: 'vc_openai_equity', s: 'vc_sovereign', t: 'openai', f: 'equity_investment', nameEN: 'OpenAI Growth Equity Syndicate', nameKO: '오픈AI 대규모 벤처 투자 유치' },
  { id: 'xai_nvda_gpu', s: 'xai', t: 'nvda', f: 'gpu_purchase', nameEN: 'xAI Memphis Colossus Cluster GPU Deployments', nameKO: 'xAI 멤피스 콜로서스 GPU 구매' },
  { id: 'skhynix_tsmc_foundry', s: 'skhynix', t: 'tsmc', f: 'gpu_purchase', nameEN: 'HBM4 Logic Base Die TSMC Foundry Allocation', nameKO: 'HBM4 베이스 다이 TSMC 선단 파운드리 발주' },

  // ─── End-User Real Revenue Streams (External Cash) ─────────────
  { id: 'market_openai_rev', s: 'end_market', t: 'openai', f: 'enterprise_revenue', nameEN: 'ChatGPT Plus & Enterprise API Revenue', nameKO: 'ChatGPT 유료 구독 및 엔터프라이즈 API 실매출' },
  { id: 'market_msft_rev', s: 'end_market', t: 'msft', f: 'enterprise_revenue', nameEN: 'M365 Copilot & Azure AI Enterprise Billings', nameKO: 'M365 코파일럿 및 Azure AI 실매출' },
  { id: 'market_anthropic_rev', s: 'end_market', t: 'anthropic', f: 'enterprise_revenue', nameEN: 'Claude Enterprise API Token Billings', nameKO: 'Claude 엔터프라이즈 API 토큰 실매출' },
  { id: 'market_deepseek_rev', s: 'end_market', t: 'deepseek', f: 'enterprise_revenue', nameEN: 'DeepSeek Low-Cost Reasoning API Revenue', nameKO: '딥시크 저비용 추론 API 토큰 실매출' }
];

// Matrix of values for all 16 quarters: [2023-Q1 ... 2026-Q4]
const quarterAmounts = {
  // Hyperscalers -> NVDA
  msft_nvda_gpu:       [2.8, 3.6, 3.8, 4.4,   5.2, 6.4, 7.8, 9.2,   10.5, 12.0, 13.2, 14.0,   14.5, 15.0, 15.5, 16.0],
  goog_nvda_gpu:       [2.2, 2.6, 2.8, 3.2,   3.8, 4.6, 5.5, 6.8,    7.8,  8.9,  9.8, 10.5,   11.0, 11.5, 12.0, 12.5],
  amzn_nvda_gpu:       [2.1, 2.8, 3.0, 3.6,   4.4, 5.4, 6.6, 7.9,    9.0, 10.2, 11.5, 12.2,   12.5, 13.0, 13.5, 14.0],
  meta_nvda_gpu:       [2.0, 2.5, 2.7, 3.4,   4.2, 5.2, 6.4, 7.6,    8.8,  9.8, 10.8, 11.6,   12.0, 12.5, 13.0, 13.5],

  // NVDA -> Supply Chain
  nvda_tsmc_gpu:       [2.2, 2.8, 3.2, 3.8,   4.6, 5.8, 7.2, 8.6,    9.8, 11.2, 12.5, 13.2,   13.5, 14.0, 14.5, 15.0],
  nvda_skhynix_hbm:    [0.8, 1.2, 1.6, 2.0,   2.6, 3.3, 4.1, 4.9,    5.5,  6.0,  6.4,  6.8,    7.0,  7.2,  7.5,  7.8],
  nvda_samsung_hbm:    [0.3, 0.4, 0.5, 0.7,   1.0, 1.5, 2.2, 3.0,    3.8,  4.4,  4.9,  5.3,    5.6,  5.9,  6.2,  6.5],

  // Supply Chain -> ASML
  tsmc_asml_equip:     [1.5, 1.6, 1.7, 1.8,   2.0, 2.3, 2.6, 2.9,    3.2,  3.4,  3.6,  3.8,    3.9,  4.0,  4.1,  4.2],
  samsung_asml_equip:  [1.1, 1.2, 1.2, 1.3,   1.5, 1.7, 1.9, 2.1,    2.3,  2.5,  2.7,  2.8,    2.9,  3.0,  3.1,  3.2],
  skhynix_asml_equip:  [0.6, 0.7, 0.7, 0.8,   1.0, 1.2, 1.4, 1.6,    1.8,  2.0,  2.1,  2.2,    2.3,  2.4,  2.4,  2.5],

  // Custom ASICs (Broadcom)
  goog_avgo_gpu:       [0.7, 0.8, 0.8, 1.0,   1.3, 1.6, 2.0, 2.5,    3.0,  3.4,  3.8,  4.1,    4.3,  4.5,  4.7,  5.0],
  meta_avgo_gpu:       [0.0, 0.5, 0.6, 0.8,   1.1, 1.4, 1.8, 2.2,    2.6,  2.9,  3.2,  3.5,    3.7,  3.9,  4.1,  4.3],

  // MSFT <-> OpenAI (Reciprocal Loop)
  msft_openai_credit:  [2.5, 2.2, 2.0, 2.5,   2.8, 3.0, 3.2, 3.5,    3.8,  4.0,  4.2,  4.4,    4.5,  4.6,  4.8,  5.0],
  openai_msft_spend:   [0.35, 0.5, 0.7, 0.95, 1.2, 1.5, 1.9, 2.4,    2.9,  3.4,  3.9,  4.4,    4.8,  5.2,  5.5,  5.8],

  // Amazon & Google <-> Anthropic
  amzn_anthropic_equity: [0.0, 0.0, 1.25, 0.0, 2.75, 0.0, 0.0, 0.0,  4.0,  0.0,  0.0,  0.0,    3.0,  0.0,  0.0,  0.0],
  anthropic_amzn_spend:  [0.0, 0.0, 0.4, 0.6,  0.8, 1.1, 1.4, 1.8,   2.2,  2.6,  3.0,  3.3,    3.5,  3.8,  4.0,  4.2],
  goog_anthropic_equity: [0.0, 0.0, 0.0, 2.0,  0.0, 0.0, 0.0, 0.0,   0.0,  1.5,  0.0, 0.0,    0.0,  2.0,  0.0,  0.0],

  // CoreWeave GPU Debt & Financing
  vc_coreweave_debt:     [0.0, 0.0, 2.3, 0.0,  0.0, 7.5, 0.0, 0.0,   0.0,  0.0,  6.0,  0.0,    0.0,  0.0,  0.0,  0.0],
  coreweave_nvda_gpu:    [0.0, 0.4, 2.1, 2.5,  3.2, 5.5, 4.2, 4.8,   5.2,  5.8,  6.5,  7.0,    7.2,  7.4,  7.6,  7.8],
  nvda_coreweave_equity: [0.0, 0.1, 0.0, 0.0,  0.0, 0.5, 0.0, 0.0,   0.0,  0.8,  0.0,  0.0,    0.0,  0.0,  0.0,  0.0],
  coreweave_vc_refinance:[0.0, 0.0, 0.0, 0.0,  0.0, 0.0, 0.8, 1.1,   1.5,  1.8,  2.2,  2.6,    2.8,  3.0,  3.2,  3.4],

  // Milestone Deals & Alliances
  vc_openai_equity:      [0.0, 0.0, 0.0, 0.0,  0.0, 0.0, 0.0, 6.6,   0.0,  0.0,  0.0,  8.0,    0.0,  0.0, 10.0,  0.0],
  xai_nvda_gpu:          [0.0, 0.0, 0.0, 0.2,  0.5, 1.8, 3.5, 2.2,   2.8,  4.0,  3.2,  4.5,    5.0,  4.2,  5.5,  5.0],
  skhynix_tsmc_foundry:  [0.0, 0.0, 0.0, 0.0,  0.0, 0.5, 0.7, 0.9,   1.2,  1.5,  1.8,  2.1,    2.5,  2.8,  3.0,  3.2],

  // End-User Real Revenue Streams
  market_openai_rev:     [0.2, 0.35, 0.5, 0.7, 1.0, 1.4, 2.0, 2.7,   3.5,  4.4,  5.5,  6.8,    8.2,  9.8, 11.5, 13.5],
  market_msft_rev:       [0.6, 0.75, 1.0, 1.3, 1.7, 2.2, 2.8, 3.6,   4.8,  6.2,  7.8,  9.8,   12.0, 14.5, 17.5, 21.0],
  market_anthropic_rev:  [0.0, 0.0, 0.08, 0.15, 0.3, 0.5, 0.8, 1.2,  1.8,  2.5,  3.4,  4.5,    5.8,  7.2,  8.8, 10.5],
  market_deepseek_rev:   [0.01, 0.02, 0.03, 0.04, 0.05, 0.08, 0.12, 0.2, 0.45, 0.7, 1.1, 1.6, 2.2, 2.9,  3.7,  4.5]
};

// Quarterly contextual edge narrative builders
function getEdgeDescription(channel, quarterIndex, amount, isKO) {
  const qLabels = [
    '2023 Q1', '2023 Q2', '2023 Q3', '2023 Q4',
    '2024 Q1', '2024 Q2', '2024 Q3', '2024 Q4',
    '2025 Q1', '2025 Q2', '2025 Q3', '2025 Q4',
    '2026 Q1', '2026 Q2', '2026 Q3', '2026 Q4'
  ];
  const qLabel = qLabels[quarterIndex];

  if (amount === 0) {
    if (channel.id === 'vc_coreweave_debt') {
      return isKO
        ? `${qLabel}: 기존 GPU 담보 부채 차입 집행 완료; 해당 분기 신규 부채 조달 없음.`
        : `${qLabel}: Previous GPU debt facility drawn down; no new private debt tranche active.`;
    }
    if (channel.id === 'vc_openai_equity') {
      return isKO
        ? `${qLabel}: 기존 지분 조달 자금 집행 중; 해당 분기 대규모 신규 벤처 지분 유치 없음.`
        : `${qLabel}: Operating on existing treasury; no primary mega equity financing tranche active.`;
    }
    if (channel.id === 'amzn_anthropic_equity') {
      return isKO
        ? `${qLabel}: 기존 체결 투자 트랜치 이행 중; 해당 분기 신규 지분 납입 없음.`
        : `${qLabel}: Operating under active cloud agreement; no new primary equity capital call.`;
    }
    if (channel.id === 'goog_anthropic_equity') {
      return isKO
        ? `${qLabel}: 파트너십 약정 유지; 해당 분기 신규 지분 납입 없음.`
        : `${qLabel}: Partnership active; no secondary equity injection in this quarter.`;
    }
    if (channel.id === 'nvda_coreweave_equity') {
      return isKO
        ? `${qLabel}: 지분 관계 유지; 해당 분기 신규 지분 취득 없음.`
        : `${qLabel}: Strategic partnership active; no incremental equity transaction this quarter.`;
    }
    return isKO
      ? `${qLabel}: 해당 분기 활성 거래 없음 (종료 또는 개시 전).`
      : `${qLabel}: Inactive or concluded channel for this period.`;
  }

  // Active amounts descriptions
  switch (channel.id) {
    case 'msft_nvda_gpu':
      return isKO
        ? `${qLabel}: Azure AI 인프라 확충을 위해 엔비디아 가속기 서버에 $${amount}B 집행.`
        : `${qLabel}: Microsoft allocates $${amount}B to procure NVIDIA accelerator server clusters for Azure AI.`;
    case 'goog_nvda_gpu':
      return isKO
        ? `${qLabel}: 구글 클라우드(GCP) AI 하이퍼컴퓨터 확장을 위해 엔비디아 가속기에 $${amount}B 발주.`
        : `${qLabel}: Google deploys $${amount}B for NVIDIA GPU clusters alongside custom TPU silicon.`;
    case 'amzn_nvda_gpu':
      return isKO
        ? `${qLabel}: AWS UltraCluster 확장 및 EC2 인스턴스를 위해 엔비디아에 $${amount}B 지출.`
        : `${qLabel}: Amazon AWS purchases $${amount}B in NVIDIA GPUs for scalable UltraClusters.`;
    case 'meta_nvda_gpu':
      return isKO
        ? `${qLabel}: LLaMA 모델 학습 및 메타 AI 데이터센터를 위해 엔비디아 GPU에 $${amount}B 구매 집행.`
        : `${qLabel}: Meta allocates $${amount}B to NVIDIA GPUs for next-gen LLaMA model clusters.`;

    case 'nvda_tsmc_gpu':
      return isKO
        ? `${qLabel}: 엔비디아가 TSMC의 선단 노드 웨이퍼 및 CoWoS 어드밴스드 패키징에 $${amount}B 발주.`
        : `${qLabel}: NVIDIA awards TSMC $${amount}B for leading-edge wafer allocation and CoWoS packaging.`;
    case 'nvda_skhynix_hbm':
      return isKO
        ? `${qLabel}: 엔비디아가 SK하이닉스의 고대역폭메모리(HBM3/HBM3E/HBM4) 공급에 $${amount}B 지출.`
        : `${qLabel}: NVIDIA procures $${amount}B of exclusive HBM3/HBM3E/HBM4 stacks from SK Hynix.`;
    case 'nvda_samsung_hbm':
      return isKO
        ? `${qLabel}: 엔비디아가 삼성전자로부터 HBM3E/HBM4 및 초고속 DRAM/SSD에 $${amount}B 조달.`
        : `${qLabel}: NVIDIA secures $${amount}B in HBM3E/HBM4 and advanced memory supply from Samsung Electronics.`;

    case 'tsmc_asml_equip':
      return isKO
        ? `${qLabel}: TSMC가 3nm/2nm/A16 라인 증설을 위해 ASML 선단 EUV/High-NA 장비에 $${amount}B 지출.`
        : `${qLabel}: TSMC invests $${amount}B in ASML EUV and High-NA lithography scanners for 2nm/A16 fab lines.`;
    case 'samsung_asml_equip':
      return isKO
        ? `${qLabel}: 삼성전자가 평택 캠퍼스 및 선단 DRAM 라인 확충을 위해 ASML 장비에 $${amount}B 발주.`
        : `${qLabel}: Samsung Electronics commits $${amount}B for ASML EUV scanners for DRAM and foundry fabs.`;
    case 'skhynix_asml_equip':
      return isKO
        ? `${qLabel}: SK하이닉스가 1b/1c nm HBM DRAM 양산 강화를 위해 ASML EUV 장비에 $${amount}B 도입.`
        : `${qLabel}: SK Hynix procures $${amount}B of ASML EUV systems for 1b/1c-nm HBM DRAM mass production.`;

    case 'goog_avgo_gpu':
      return isKO
        ? `${qLabel}: 구글이 맞춤형 TPU(v4/v5/v6) ASIC 설계 및 네트워킹을 위해 브로드컴에 $${amount}B 지출.`
        : `${qLabel}: Google pays Broadcom $${amount}B for custom TPU ASIC co-design and optical interconnects.`;
    case 'meta_avgo_gpu':
      return isKO
        ? `${qLabel}: 메타가 자체 추론/학습 가속기 MTIA 설계 및 네트워킹을 위해 브로드컴에 $${amount}B 지출.`
        : `${qLabel}: Meta allocates $${amount}B to Broadcom for MTIA proprietary accelerator silicon design.`;

    case 'msft_openai_credit':
      return isKO
        ? `${qLabel}: MS가 오픈AI에 클라우드 컴퓨팅 크레딧 및 전략적 인프라 비용으로 $${amount}B 공급.`
        : `${qLabel}: Microsoft supplies OpenAI with $${amount}B in Azure compute credits and dedicated infrastructure.`;
    case 'openai_msft_spend':
      return isKO
        ? `${qLabel}: 오픈AI가 ChatGPT 및 API 호스팅을 위한 Azure 데이터센터 사용료로 MS에 $${amount}B 지불.`
        : `${qLabel}: OpenAI spends $${amount}B in hosting fees and compute consumption paid directly to Microsoft Azure.`;

    case 'amzn_anthropic_equity':
      return isKO
        ? `${qLabel}: 아마존이 앤트로픽에 전략적 투자 트랜치 $${amount}B를 직접 납입.`
        : `${qLabel}: Amazon executes a strategic growth capital tranche of $${amount}B into Anthropic.`;
    case 'anthropic_amzn_spend':
      return isKO
        ? `${qLabel}: 앤트로픽이 Claude 모델 학습 및 Bedrock 서비스를 위해 AWS 인프라 비용 $${amount}B 지출.`
        : `${qLabel}: Anthropic pays $${amount}B to AWS for Bedrock compute clusters and Trainium workloads.`;
    case 'goog_anthropic_equity':
      return isKO
        ? `${qLabel}: 구글이 앤트로픽에 $${amount}B 규모의 전략적 자본 투자를 집행.`
        : `${qLabel}: Google injects $${amount}B strategic growth equity into Anthropic alongside GCP partnership.`;

    case 'vc_coreweave_debt':
      return isKO
        ? `${qLabel}: 블랙스톤/마그네타 등 사모펀드가 GPU를 담보로 코어위브에 $${amount}B 사모 대출 공급.`
        : `${qLabel}: Private debt syndicate (Blackstone, Magnetar) provides $${amount}B loan collateralized by GPUs.`;
    case 'coreweave_nvda_gpu':
      return isKO
        ? `${qLabel}: 코어위브가 조달한 자본/부채로 엔비디아 최신 GPU에 $${amount}B 대규모 구매 집행.`
        : `${qLabel}: CoreWeave purchases $${amount}B of NVIDIA GPUs to expand its AI cloud cluster fleet.`;
    case 'nvda_coreweave_equity':
      return isKO
        ? `${qLabel}: 엔비디아가 핵심 네오클라우드 고객사인 코어위브에 $${amount}B 전략적 지분 투자.`
        : `${qLabel}: NVIDIA invests $${amount}B strategic equity into Neocloud partner CoreWeave.`;
    case 'coreweave_vc_refinance':
      return isKO
        ? `${qLabel}: 코어위브가 GPU 자산유동화(ABS) 및 부채 차환을 통해 사모대출 시장에 $${amount}B 상환/차환.`
        : `${qLabel}: CoreWeave executes $${amount}B in asset-backed securitization (ABS) and debt refinancing.`;

    case 'vc_openai_equity':
      return isKO
        ? `${qLabel}: 글로벌 벤처/국부펀드 신디케이트가 오픈AI에 $${amount}B 규모 메가 지분 투자 유치.`
        : `${qLabel}: Global VC and sovereign syndicates inject $${amount}B growth equity into OpenAI.`;
    case 'xai_nvda_gpu':
      return isKO
        ? `${qLabel}: xAI가 멤피스 '콜로서스' 등 초대형 슈퍼클러스터용 엔비디아 GPU에 $${amount}B 직접 구매.`
        : `${qLabel}: xAI purchases $${amount}B of NVIDIA liquid-cooled GPUs for the Memphis Colossus supercluster.`;
    case 'skhynix_tsmc_foundry':
      return isKO
        ? `${qLabel}: SK하이닉스가 HBM4 맞춤형 베이스 다이 생산을 위해 TSMC 선단 파운드리에 $${amount}B 발주.`
        : `${qLabel}: SK Hynix contracts TSMC advanced foundry for $${amount}B to produce custom HBM4 logic base dies.`;

    case 'market_openai_rev':
      return isKO
        ? `${qLabel}: 전 세계 기업 및 유료 사용자의 ChatGPT Plus 및 API 실매출 $${amount}B 달성.`
        : `${qLabel}: Global enterprises and subscribers generate $${amount}B in verified ChatGPT and API software revenue.`;
    case 'market_msft_rev':
      return isKO
        ? `${qLabel}: 포춘 500대 기업의 M365 Copilot 및 Azure AI 기업 실매출 $${amount}B 기록.`
        : `${qLabel}: Enterprise clients deliver $${amount}B in Microsoft 365 Copilot and Azure AI commercial revenue.`;
    case 'market_anthropic_rev':
      return isKO
        ? `${qLabel}: Claude 3.5 Sonnet 엔터프라이즈 API 토큰 소비 실매출 $${amount}B 달성.`
        : `${qLabel}: Enterprise software clients generate $${amount}B in Claude API token billing revenue.`;
    case 'market_deepseek_rev':
      return isKO
        ? `${qLabel}: 저비용 고효율 오픈 추론 모델 DeepSeek-R1 API 토큰 실매출 $${amount}B 달성.`
        : `${qLabel}: DeepSeek generates $${amount}B in low-cost high-efficiency reasoning API token revenue.`;

    default:
      return isKO
        ? `${qLabel}: ${channel.nameKO} $${amount}B 분기 거래 집행.`
        : `${qLabel}: ${channel.nameEN} quarterly volume of $${amount}B.`;
  }
}

module.exports = {
  masterChannels,
  quarterAmounts,
  getEdgeDescription
};
