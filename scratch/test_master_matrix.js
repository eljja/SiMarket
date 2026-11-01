// scratch/test_master_matrix.js
// Tests the 28-channel master edge matrix across 16 quarters

const masterChannels = [
  // Big Tech -> NVIDIA
  { id: 'msft_nvda_gpu', s: 'msft', t: 'nvda', f: 'gpu_purchase', dEN: 'Azure GPU Procurement', dKO: 'Azure 가속기 서버 조달' },
  { id: 'goog_nvda_gpu', s: 'goog', t: 'nvda', f: 'gpu_purchase', dEN: 'GCP GPU Procurement', dKO: 'GCP 가속기 서버 조달' },
  { id: 'amzn_nvda_gpu', s: 'amzn', t: 'nvda', f: 'gpu_purchase', dEN: 'AWS UltraCluster GPU Procurement', dKO: 'AWS 울트라클러스터 GPU 조달' },
  { id: 'meta_nvda_gpu', s: 'meta', t: 'nvda', f: 'gpu_purchase', dEN: 'Meta AI Data Center GPU Procurement', dKO: '메타 AI 데이터센터 GPU 조달' },

  // NVIDIA -> Supply Chain
  { id: 'nvda_tsmc_gpu', s: 'nvda', t: 'tsmc', f: 'gpu_purchase', dEN: 'TSMC CoWoS Packaging & Wafer Lots', dKO: 'TSMC 선단 공정 웨이퍼 및 CoWoS 패키징' },
  { id: 'nvda_skhynix_hbm', s: 'nvda', t: 'skhynix', f: 'hbm_purchase', dEN: 'SK Hynix HBM3/HBM3E/HBM4 Allocation', dKO: 'SK하이닉스 HBM3/HBM3E/HBM4 독점 조달' },
  { id: 'nvda_samsung_hbm', s: 'nvda', t: 'samsung', f: 'hbm_purchase', dEN: 'Samsung HBM3E/HBM4 & Memory Supply', dKO: '삼성전자 HBM3E/HBM4 및 메모리 공급' },

  // Lithography Equipment (ASML)
  { id: 'tsmc_asml_equip', s: 'tsmc', t: 'asml', f: 'equipment_purchase', dEN: 'TSMC EUV/High-NA Scanners', dKO: 'TSMC 선단 EUV/High-NA 노광 장비 조달' },
  { id: 'samsung_asml_equip', s: 'samsung', t: 'asml', f: 'equipment_purchase', dEN: 'Samsung EUV Lithography Fleet', dKO: '삼성전자 EUV 노광 장비 도입' },
  { id: 'skhynix_asml_equip', s: 'skhynix', t: 'asml', f: 'equipment_purchase', dEN: 'SK Hynix 1b/1c HBM EUV Lines', dKO: 'SK하이닉스 HBM 전용 EUV 노광 장비' },

  // Custom ASICs (Broadcom)
  { id: 'goog_avgo_gpu', s: 'goog', t: 'avgo', f: 'gpu_purchase', dEN: 'Google TPU Custom Silicon Design', dKO: '구글 TPU 맞춤형 ASIC 및 네트워킹' },
  { id: 'meta_avgo_gpu', s: 'meta', t: 'avgo', f: 'gpu_purchase', dEN: 'Meta MTIA Custom Accelerator Silicon', dKO: '메타 MTIA 자체 가속기 개발' },

  // Microsoft <-> OpenAI (Circular Loop)
  { id: 'msft_openai_credit', s: 'msft', t: 'openai', f: 'cloud_credit', dEN: 'Azure Compute Credits & Capital Injection', dKO: 'MS의 Azure 컴퓨팅 크레딧 및 투자 집행' },
  { id: 'openai_msft_spend', s: 'openai', t: 'msft', f: 'cloud_credit', dEN: 'OpenAI Azure Data Center Hosting Bills', dKO: '오픈AI의 Azure 인프라 이용료 지출' },

  // Amazon & Google <-> Anthropic Loop
  { id: 'amzn_anthropic_equity', s: 'amzn', t: 'anthropic', f: 'equity_investment', dEN: 'Amazon Strategic Capital Tranche', dKO: '아마존 전략적 투자 트랜치' },
  { id: 'anthropic_amzn_spend', s: 'anthropic', t: 'amzn', f: 'cloud_credit', dEN: 'Anthropic AWS Bedrock Compute Spend', dKO: '앤트로픽의 AWS 베드록 인프라 이용료' },
  { id: 'goog_anthropic_equity', s: 'goog', t: 'anthropic', f: 'equity_investment', dEN: 'Google Strategic Capital Commitment', dKO: '구글 전략적 투자 약정' },

  // Neocloud & GPU Debt Financing (CoreWeave)
  { id: 'vc_coreweave_debt', s: 'vc_sovereign', t: 'coreweave', f: 'debt_collateral', dEN: 'GPU-Collateralized Private Debt Facility', dKO: 'GPU 담보 사모 대출 (블랙스톤/마그네타)' },
  { id: 'coreweave_nvda_gpu', s: 'coreweave', t: 'nvda', f: 'gpu_purchase', dEN: 'CoreWeave GPU Fleet Additions', dKO: '코어위브의 엔비디아 GPU 대량 구매' },
  { id: 'nvda_coreweave_equity', s: 'nvda', t: 'coreweave', f: 'equity_investment', dEN: 'NVIDIA Strategic Equity in Neocloud', dKO: '엔비디아의 코어위브 전략적 지분 투자' },
  { id: 'coreweave_vc_refinance', s: 'coreweave', t: 'vc_sovereign', f: 'debt_collateral', dEN: 'GPU Debt Refinancing & Securitization', dKO: 'GPU 부채 만기 연장 및 자산유동화(차환)' },

  // Milestone Deals & Alliances
  { id: 'vc_openai_equity', s: 'vc_sovereign', t: 'openai', f: 'equity_investment', dEN: 'OpenAI Growth Equity Syndicate', dKO: '오픈AI 대규모 벤처 투자 유치' },
  { id: 'xai_nvda_gpu', s: 'xai', t: 'nvda', f: 'gpu_purchase', dEN: 'xAI Memphis Colossus 100k GPU Cluster', dKO: 'xAI 멤피스 콜로서스 10만 개 GPU 구매' },
  { id: 'skhynix_tsmc_foundry', s: 'skhynix', t: 'tsmc', f: 'gpu_purchase', dEN: 'HBM4 Logic Base Die Foundry Allocation', dKO: 'HBM4 베이스 다이 TSMC 선단 파운드리 발주' },

  // End-User Real Revenue Streams
  { id: 'market_openai_rev', s: 'end_market', t: 'openai', f: 'enterprise_revenue', dEN: 'ChatGPT Plus & Enterprise API Revenue', dKO: 'ChatGPT 유료 구독 및 API 실매출' },
  { id: 'market_msft_rev', s: 'end_market', t: 'msft', f: 'enterprise_revenue', dEN: 'M365 Copilot & Azure AI Enterprise Billings', dKO: 'M365 코파일럿 및 Azure AI 실매출' },
  { id: 'market_anthropic_rev', s: 'end_market', t: 'anthropic', f: 'enterprise_revenue', dEN: 'Claude Enterprise API Token Billings', dKO: 'Claude 엔터프라이즈 API 토큰 실매출' },
  { id: 'market_deepseek_rev', s: 'end_market', t: 'deepseek', f: 'enterprise_revenue', dEN: 'DeepSeek Low-Cost Reasoning API Revenue', dKO: '딥시크 저비용 추론 API 토큰 실매출' }
];

console.log('Channels count:', masterChannels.length);
