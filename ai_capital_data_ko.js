// ai_capital_data_ko.js - 글로벌 AI 자금 순환 및 반도체 공급망 실증 데이터베이스 (10개년: 2017 ~ 2026 Q4)

(function () {
  const categoryDefinitionsKo = {
  "hyperscaler": {
    "name": "빅테크 하이퍼스케일러 (클라우드)",
    "color": "#38bdf8"
  },
  "chipmaker": {
    "name": "AI 칩셋 & 파운드리 (NVIDIA/TSMC/AVGO)",
    "color": "#10b981"
  },
  "semiconductor_supply": {
    "name": "메모리 & 반도체 장비 (삼성/SK/ASML)",
    "color": "#06b6d4"
  },
  "ai_lab": {
    "name": "프론티어 AI 랩스 (OpenAI/Anthropic/xAI/DeepSeek)",
    "color": "#f43f5e"
  },
  "neocloud": {
    "name": "네오클라우드 (GPU 담보 부채)",
    "color": "#fbbf24"
  },
  "venture_capital": {
    "name": "벤처캐피탈 & 국부펀드",
    "color": "#a855f7"
  },
  "end_market": {
    "name": "실제 최종 사용자 시장 (소프트웨어 매출)",
    "color": "#3b82f6"
  }
};
  const flowTypeDefinitionsKo = {
  "equity_investment": {
    "name": "지분 투자 (현금 / 지분 인수)",
    "color": "#ffb300"
  },
  "cloud_credit": {
    "name": "클라우드 컴퓨팅 크레딧 (지분 교환)",
    "color": "#00e5ff"
  },
  "gpu_purchase": {
    "name": "GPU 및 가속기 하드웨어 구매 (NVIDIA/Broadcom)",
    "color": "#10b981"
  },
  "hbm_purchase": {
    "name": "HBM 메모리 반도체 조달 (SK하이닉스/삼성전자)",
    "color": "#06b6d4"
  },
  "equipment_purchase": {
    "name": "EUV 노광 장비 조달 (ASML)",
    "color": "#14b8a6"
  },
  "debt_collateral": {
    "name": "GPU 담보 부채 조달 (벤더 파이낸싱)",
    "color": "#a855f7"
  },
  "enterprise_revenue": {
    "name": "실제 최종 기업 소프트웨어 및 API 매출",
    "color": "#38bdf8"
  }
};
  const aiCapitalTimelineDataKo = [
  {
    "periodId": "2017",
    "year": 2017,
    "quarter": null,
    "label": "2017",
    "dateRange": "2017년 전체",
    "title": "2017년: AI의 태동 — 트랜스포머 아키텍처와 엔비디아 볼타 V100의 탄생",
    "summary": "구글 브레인 연구팀이 트랜스포머 아키텍처를 제시한 논문 \"Attention Is All You Need\"를 발표하며 현대 생성형 AI의 막을 엽니다. 엔비디아는 사상 최초의 텐서 코어를 탑재한 V100 GPU를 출시합니다. OpenAI는 30여 명의 비영리 연구소에 불과하며, 업계 전체 AI 설비투자는 35억 달러 수준입니다.",
    "macroMetrics": {
      "totalAiCapex": 3.2,
      "realEndUserRevenue": 0.1,
      "capexRevenueDeficit": 3.1,
      "circularRatio": 12,
      "annualizedCapexRunRate": 3.2
    },
    "nodes": [
      {
        "id": "msft",
        "name": "마이크로소프트",
        "category": "hyperscaler",
        "marketCap": 660,
        "aiCapex": 0.9,
        "aiRevenue": 0.05,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "세계 최고 클라우드 기업, Azure 기반 OpenAI 독점 파트너십 및 자체 Maia AI 가속기 개발.",
        "initialX": -140,
        "initialY": -130
      },
      {
        "id": "goog",
        "name": "알파벳 / 구글",
        "category": "hyperscaler",
        "marketCap": 710,
        "aiCapex": 1.1,
        "aiRevenue": 0.05,
        "isFormed": true,
        "isHighGrowth": true,
        "desc": "트랜스포머 아키텍처 창시자, 자체 TPU v4/v5/v6 가속기 및 제미나이(Gemini) 생태계 구축.",
        "initialX": -185,
        "initialY": 5
      },
      {
        "id": "amzn",
        "name": "아마존 / AWS",
        "category": "hyperscaler",
        "marketCap": 560,
        "aiCapex": 0.8,
        "aiRevenue": 0.02,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "세계 1위 클라우드 AWS, 앤트로픽 핵심 투자사(40억 달러)이자 자체 Trainium2/Inferentia 가속기 개발.",
        "initialX": 140,
        "initialY": -130
      },
      {
        "id": "meta",
        "name": "메타 플랫폼스",
        "category": "hyperscaler",
        "marketCap": 510,
        "aiCapex": 0.5,
        "aiRevenue": 0.01,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "오픈소스 AI 생태계 주도(LLaMA 시리즈), 60만 개 이상의 GPU 클러스터 운용 및 MTIA 자체 반도체 개발.",
        "initialX": 185,
        "initialY": 5
      },
      {
        "id": "nvda",
        "name": "엔비디아",
        "category": "chipmaker",
        "marketCap": 118,
        "aiCapex": 0.1,
        "aiRevenue": 0.9,
        "isFormed": true,
        "isHighGrowth": true,
        "desc": "글로벌 AI GPU 독점(H100/B200/루빈) 및 CUDA 소프트웨어 생태계를 기반으로 75% 이상의 마진 향유.",
        "initialX": 0,
        "initialY": -10
      },
      {
        "id": "tsmc",
        "name": "TSMC",
        "category": "chipmaker",
        "marketCap": 200,
        "aiCapex": 2.8,
        "aiRevenue": 8.2,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "엔비디아, 애플, 브로드컴 등 전 세계 모든 선단 AI 가속기를 제조하는 독점적 파운드리 및 CoWoS 패키징 선도자.",
        "initialX": -130,
        "initialY": 190
      },
      {
        "id": "avgo",
        "name": "브로드컴",
        "category": "chipmaker",
        "marketCap": 105,
        "aiCapex": 0.05,
        "aiRevenue": 0.4,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "빅테크 맞춤형 AI ASIC(구글 TPU, 메타 MTIA) 및 초고속 AI 데이터센터 스위치/네트워킹 독점 기업.",
        "initialX": -215,
        "initialY": 115
      },
      {
        "id": "skhynix",
        "name": "SK하이닉스",
        "category": "semiconductor_supply",
        "marketCap": 50,
        "aiCapex": 0.8,
        "aiRevenue": 0.2,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "엔비디아에 HBM3/HBM3E를 사실상 독점 공급하며 AI 메모리 초격차를 달성한 글로벌 HBM 1위 기업.",
        "initialX": -20,
        "initialY": -210
      },
      {
        "id": "samsung",
        "name": "삼성전자",
        "category": "semiconductor_supply",
        "marketCap": 320,
        "aiCapex": 3.2,
        "aiRevenue": 0.4,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "세계 최대 메모리 반도체 제조사이자 12단 HBM3E 및 메모리-파운드리 턴키 솔루션을 보유한 종합 반도체 기업.",
        "initialX": 110,
        "initialY": -195
      },
      {
        "id": "asml",
        "name": "ASML",
        "category": "semiconductor_supply",
        "marketCap": 70,
        "aiCapex": 0.15,
        "aiRevenue": 2.2,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "3nm 및 2nm 선단 반도체 제조에 필수적인 EUV 및 High-NA 극자외선 노광 장비를 독점 공급하는 네덜란드 장비사.",
        "initialX": 20,
        "initialY": 235
      },
      {
        "id": "openai",
        "name": "오픈AI",
        "category": "ai_lab",
        "marketCap": 0.3,
        "aiCapex": 0.02,
        "aiRevenue": 0,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "ChatGPT, GPT-4, o1 추론 모델을 개발한 프론티어 AI 선도 기업이자 1,000억 달러 스타게이트 프로젝트 파트너.",
        "initialX": -60,
        "initialY": -55
      },
      {
        "id": "anthropic",
        "name": "앤트로픽",
        "category": "ai_lab",
        "marketCap": 0,
        "aiCapex": 0,
        "aiRevenue": 0,
        "isFormed": false,
        "isHighGrowth": false,
        "desc": "Claude 3.5 및 컴퓨터 제어 AI를 개발한 프론티어 연구소로, 아마존과 구글로부터 대규모 자본 유치.",
        "initialX": 55,
        "initialY": -55
      },
      {
        "id": "xai",
        "name": "xAI",
        "category": "ai_lab",
        "marketCap": 0,
        "aiCapex": 0,
        "aiRevenue": 0,
        "isFormed": false,
        "isHighGrowth": false,
        "desc": "일론 머스크가 설립한 프론티어 랩으로, 멤피스에 10만 개 규모의 세계 최대 수랭식 슈퍼클러스터 ‘콜로서스’ 운용.",
        "initialX": 75,
        "initialY": 45
      },
      {
        "id": "deepseek",
        "name": "딥시크 (DeepSeek)",
        "category": "ai_lab",
        "marketCap": 0,
        "aiCapex": 0,
        "aiRevenue": 0,
        "isFormed": false,
        "isHighGrowth": false,
        "desc": "극단적 알고리즘 효율화와 저비용 오픈 추론 모델(DeepSeek-R1)로 무차별적 고비용 Capex 경쟁 구도를 뒤흔든 연구소.",
        "initialX": -75,
        "initialY": 45
      },
      {
        "id": "coreweave",
        "name": "코어위브",
        "category": "neocloud",
        "marketCap": 0.05,
        "aiCapex": 0.01,
        "aiRevenue": 0,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "GPU 자체를 담보로 사모펀드로부터 수십억 달러의 부채를 조달해 GPU를 재구매하는 네오클라우드 벤더 파이낸싱의 상징.",
        "initialX": 0,
        "initialY": 85
      },
      {
        "id": "vc_sovereign",
        "name": "벤처캐피탈 & 국부펀드",
        "category": "venture_capital",
        "marketCap": 250,
        "aiCapex": 0,
        "aiRevenue": 0,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "세쿼이아, 소프트뱅크, a16z 및 중동 국부펀드(MGX, PIF) 등 AI 메가 라운드 및 사모 부채를 공급하는 자본 풀.",
        "initialX": 220,
        "initialY": 155
      },
      {
        "id": "end_market",
        "name": "실제 기업 & 최종 사용자 시장",
        "category": "end_market",
        "marketCap": 400,
        "aiCapex": 0,
        "aiRevenue": 0.1,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "실제 기업 IT 예산, 개발자 API 사용료, 유료 소비자 구독 등 AI 생태계의 유일한 외부 실질 현금 유입원.",
        "initialX": -230,
        "initialY": -170
      }
    ],
    "edges": [
      {
        "id": "msft_nvda_gpu",
        "source": "msft",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 0.3,
        "desc": "2017: Azure AI 인프라 확충을 위해 엔비디아 가속기 서버에 $0.3B 집행."
      },
      {
        "id": "goog_nvda_gpu",
        "source": "goog",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 0.4,
        "desc": "2017: 구글 클라우드(GCP) AI 하이퍼컴퓨터 확장을 위해 엔비디아 가속기에 $0.4B 발주."
      },
      {
        "id": "amzn_nvda_gpu",
        "source": "amzn",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 0.2,
        "desc": "2017: AWS UltraCluster 확장 및 EC2 인스턴스를 위해 엔비디아에 $0.2B 지출."
      },
      {
        "id": "meta_nvda_gpu",
        "source": "meta",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 0.1,
        "desc": "2017: LLaMA 모델 학습 및 메타 AI 데이터센터를 위해 엔비디아 GPU에 $0.1B 구매 집행."
      },
      {
        "id": "nvda_tsmc_gpu",
        "source": "nvda",
        "target": "tsmc",
        "flowType": "gpu_purchase",
        "amount": 0.5,
        "desc": "2017: 엔비디아가 TSMC의 선단 노드 웨이퍼 및 CoWoS 어드밴스드 패키징에 $0.5B 발주."
      },
      {
        "id": "nvda_skhynix_hbm",
        "source": "nvda",
        "target": "skhynix",
        "flowType": "hbm_purchase",
        "amount": 0.15,
        "desc": "2017: 엔비디아가 SK하이닉스의 고대역폭메모리(HBM) 공급에 $0.15B 지출."
      },
      {
        "id": "nvda_samsung_hbm",
        "source": "nvda",
        "target": "samsung",
        "flowType": "hbm_purchase",
        "amount": 0.1,
        "desc": "2017: 엔비디아가 삼성전자로부터 HBM 및 초고속 DRAM/SSD에 $0.1B 조달."
      },
      {
        "id": "tsmc_asml_equip",
        "source": "tsmc",
        "target": "asml",
        "flowType": "equipment_purchase",
        "amount": 0.6,
        "desc": "2017: TSMC가 선단 공정 라인 증설을 위해 ASML EUV/High-NA 장비에 $0.6B 지출."
      },
      {
        "id": "samsung_asml_equip",
        "source": "samsung",
        "target": "asml",
        "flowType": "equipment_purchase",
        "amount": 0.5,
        "desc": "2017: 삼성전자가 선단 DRAM 및 파운드리 확충을 위해 ASML 장비에 $0.5B 발주."
      },
      {
        "id": "skhynix_asml_equip",
        "source": "skhynix",
        "target": "asml",
        "flowType": "equipment_purchase",
        "amount": 0.3,
        "desc": "2017: SK하이닉스가 선단 HBM DRAM 양산 강화를 위해 ASML EUV 장비에 $0.3B 도입."
      },
      {
        "id": "goog_avgo_gpu",
        "source": "goog",
        "target": "avgo",
        "flowType": "gpu_purchase",
        "amount": 0.3,
        "desc": "2017: 구글이 맞춤형 TPU ASIC 설계 및 네트워킹을 위해 브로드컴에 $0.3B 지출."
      },
      {
        "id": "meta_avgo_gpu",
        "source": "meta",
        "target": "avgo",
        "flowType": "gpu_purchase",
        "amount": 0,
        "desc": "2017: 해당 기간 활성 거래 없음 (개시 전 또는 종료)."
      },
      {
        "id": "msft_openai_credit",
        "source": "msft",
        "target": "openai",
        "flowType": "cloud_credit",
        "amount": 0,
        "desc": "2017: 해당 기간 활성 거래 없음 (개시 전 또는 종료)."
      },
      {
        "id": "openai_msft_spend",
        "source": "openai",
        "target": "msft",
        "flowType": "cloud_credit",
        "amount": 0,
        "desc": "2017: 해당 기간 활성 거래 없음 (개시 전 또는 종료)."
      },
      {
        "id": "amzn_anthropic_equity",
        "source": "amzn",
        "target": "anthropic",
        "flowType": "equity_investment",
        "amount": 0,
        "desc": "2017: 기존 체결 투자 트랜치 이행 중; 해당 기간 신규 지분 납입 없음."
      },
      {
        "id": "anthropic_amzn_spend",
        "source": "anthropic",
        "target": "amzn",
        "flowType": "cloud_credit",
        "amount": 0,
        "desc": "2017: 해당 기간 활성 거래 없음 (개시 전 또는 종료)."
      },
      {
        "id": "goog_anthropic_equity",
        "source": "goog",
        "target": "anthropic",
        "flowType": "equity_investment",
        "amount": 0,
        "desc": "2017: 파트너십 약정 유지; 해당 기간 신규 지분 납입 없음."
      },
      {
        "id": "vc_coreweave_debt",
        "source": "vc_sovereign",
        "target": "coreweave",
        "flowType": "debt_collateral",
        "amount": 0,
        "desc": "2017: 기존 GPU 담보 부채 차입 집행 완료; 해당 기간 신규 부채 조달 없음."
      },
      {
        "id": "coreweave_nvda_gpu",
        "source": "coreweave",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 0.02,
        "desc": "2017: 코어위브가 엔비디아 최신 GPU에 $0.02B 대규모 구매 집행."
      },
      {
        "id": "nvda_coreweave_equity",
        "source": "nvda",
        "target": "coreweave",
        "flowType": "equity_investment",
        "amount": 0,
        "desc": "2017: 지분 관계 유지; 해당 기간 신규 지분 취득 없음."
      },
      {
        "id": "coreweave_vc_refinance",
        "source": "coreweave",
        "target": "vc_sovereign",
        "flowType": "debt_collateral",
        "amount": 0,
        "desc": "2017: 해당 기간 활성 거래 없음 (개시 전 또는 종료)."
      },
      {
        "id": "vc_openai_equity",
        "source": "vc_sovereign",
        "target": "openai",
        "flowType": "equity_investment",
        "amount": 0,
        "desc": "2017: 기존 지분 조달 자금 집행 중; 해당 기간 대규모 신규 벤처 지분 유치 없음."
      },
      {
        "id": "xai_nvda_gpu",
        "source": "xai",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 0,
        "desc": "2017: 해당 기간 활성 거래 없음 (개시 전 또는 종료)."
      },
      {
        "id": "skhynix_tsmc_foundry",
        "source": "skhynix",
        "target": "tsmc",
        "flowType": "gpu_purchase",
        "amount": 0,
        "desc": "2017: 해당 기간 활성 거래 없음 (개시 전 또는 종료)."
      },
      {
        "id": "market_openai_rev",
        "source": "end_market",
        "target": "openai",
        "flowType": "enterprise_revenue",
        "amount": 0.01,
        "desc": "2017: 기업 및 유료 사용자의 OpenAI 소프트웨어 및 API 실매출 $0.01B 달성."
      },
      {
        "id": "market_msft_rev",
        "source": "end_market",
        "target": "msft",
        "flowType": "enterprise_revenue",
        "amount": 0.05,
        "desc": "2017: M365 Copilot 및 Azure AI 기업 실매출 $0.05B 기록."
      },
      {
        "id": "market_anthropic_rev",
        "source": "end_market",
        "target": "anthropic",
        "flowType": "enterprise_revenue",
        "amount": 0,
        "desc": "2017: 해당 기간 활성 거래 없음 (개시 전 또는 종료)."
      },
      {
        "id": "market_deepseek_rev",
        "source": "end_market",
        "target": "deepseek",
        "flowType": "enterprise_revenue",
        "amount": 0,
        "desc": "2017: 해당 기간 활성 거래 없음 (개시 전 또는 종료)."
      }
    ]
  },
  {
    "periodId": "2018",
    "year": 2018,
    "quarter": null,
    "label": "2018",
    "dateRange": "2018년 전체",
    "title": "2018년: 사전학습 혁명 — 구글 BERT와 OpenAI GPT-1의 등장",
    "summary": "구글이 자연어 처리의 판도를 바꾼 BERT를 발표하고, OpenAI는 비지도 사전학습 기반의 GPT-1을 공개합니다. 엔비디아는 튜링(T4) 아키텍처를 출시하며, 딥러닝 산업이 언어 기반 파운데이션 모델로 전환되기 시작합니다.",
    "macroMetrics": {
      "totalAiCapex": 5.4,
      "realEndUserRevenue": 0.2,
      "capexRevenueDeficit": 5.2,
      "circularRatio": 18,
      "annualizedCapexRunRate": 5.4
    },
    "nodes": [
      {
        "id": "msft",
        "name": "마이크로소프트",
        "category": "hyperscaler",
        "marketCap": 780,
        "aiCapex": 1.2,
        "aiRevenue": 0.08,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "세계 최고 클라우드 기업, Azure 기반 OpenAI 독점 파트너십 및 자체 Maia AI 가속기 개발.",
        "initialX": -140,
        "initialY": -130
      },
      {
        "id": "goog",
        "name": "알파벳 / 구글",
        "category": "hyperscaler",
        "marketCap": 725,
        "aiCapex": 1.6,
        "aiRevenue": 0.08,
        "isFormed": true,
        "isHighGrowth": true,
        "desc": "트랜스포머 아키텍처 창시자, 자체 TPU v4/v5/v6 가속기 및 제미나이(Gemini) 생태계 구축.",
        "initialX": -185,
        "initialY": 5
      },
      {
        "id": "amzn",
        "name": "아마존 / AWS",
        "category": "hyperscaler",
        "marketCap": 730,
        "aiCapex": 1.1,
        "aiRevenue": 0.04,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "세계 1위 클라우드 AWS, 앤트로픽 핵심 투자사(40억 달러)이자 자체 Trainium2/Inferentia 가속기 개발.",
        "initialX": 140,
        "initialY": -130
      },
      {
        "id": "meta",
        "name": "메타 플랫폼스",
        "category": "hyperscaler",
        "marketCap": 375,
        "aiCapex": 0.8,
        "aiRevenue": 0.02,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "오픈소스 AI 생태계 주도(LLaMA 시리즈), 60만 개 이상의 GPU 클러스터 운용 및 MTIA 자체 반도체 개발.",
        "initialX": 185,
        "initialY": 5
      },
      {
        "id": "nvda",
        "name": "엔비디아",
        "category": "chipmaker",
        "marketCap": 81,
        "aiCapex": 0.15,
        "aiRevenue": 1.3,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "글로벌 AI GPU 독점(H100/B200/루빈) 및 CUDA 소프트웨어 생태계를 기반으로 75% 이상의 마진 향유.",
        "initialX": 0,
        "initialY": -10
      },
      {
        "id": "tsmc",
        "name": "TSMC",
        "category": "chipmaker",
        "marketCap": 190,
        "aiCapex": 3.1,
        "aiRevenue": 8.8,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "엔비디아, 애플, 브로드컴 등 전 세계 모든 선단 AI 가속기를 제조하는 독점적 파운드리 및 CoWoS 패키징 선도자.",
        "initialX": -130,
        "initialY": 190
      },
      {
        "id": "avgo",
        "name": "브로드컴",
        "category": "chipmaker",
        "marketCap": 100,
        "aiCapex": 0.08,
        "aiRevenue": 0.5,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "빅테크 맞춤형 AI ASIC(구글 TPU, 메타 MTIA) 및 초고속 AI 데이터센터 스위치/네트워킹 독점 기업.",
        "initialX": -215,
        "initialY": 115
      },
      {
        "id": "skhynix",
        "name": "SK하이닉스",
        "category": "semiconductor_supply",
        "marketCap": 45,
        "aiCapex": 0.9,
        "aiRevenue": 0.3,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "엔비디아에 HBM3/HBM3E를 사실상 독점 공급하며 AI 메모리 초격차를 달성한 글로벌 HBM 1위 기업.",
        "initialX": -20,
        "initialY": -210
      },
      {
        "id": "samsung",
        "name": "삼성전자",
        "category": "semiconductor_supply",
        "marketCap": 280,
        "aiCapex": 3.5,
        "aiRevenue": 0.5,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "세계 최대 메모리 반도체 제조사이자 12단 HBM3E 및 메모리-파운드리 턴키 솔루션을 보유한 종합 반도체 기업.",
        "initialX": 110,
        "initialY": -195
      },
      {
        "id": "asml",
        "name": "ASML",
        "category": "semiconductor_supply",
        "marketCap": 65,
        "aiCapex": 0.2,
        "aiRevenue": 2.5,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "3nm 및 2nm 선단 반도체 제조에 필수적인 EUV 및 High-NA 극자외선 노광 장비를 독점 공급하는 네덜란드 장비사.",
        "initialX": 20,
        "initialY": 235
      },
      {
        "id": "openai",
        "name": "오픈AI",
        "category": "ai_lab",
        "marketCap": 0.5,
        "aiCapex": 0.04,
        "aiRevenue": 0.01,
        "isFormed": true,
        "isHighGrowth": true,
        "desc": "ChatGPT, GPT-4, o1 추론 모델을 개발한 프론티어 AI 선도 기업이자 1,000억 달러 스타게이트 프로젝트 파트너.",
        "initialX": -60,
        "initialY": -55
      },
      {
        "id": "anthropic",
        "name": "앤트로픽",
        "category": "ai_lab",
        "marketCap": 0,
        "aiCapex": 0,
        "aiRevenue": 0,
        "isFormed": false,
        "isHighGrowth": false,
        "desc": "Claude 3.5 및 컴퓨터 제어 AI를 개발한 프론티어 연구소로, 아마존과 구글로부터 대규모 자본 유치.",
        "initialX": 55,
        "initialY": -55
      },
      {
        "id": "xai",
        "name": "xAI",
        "category": "ai_lab",
        "marketCap": 0,
        "aiCapex": 0,
        "aiRevenue": 0,
        "isFormed": false,
        "isHighGrowth": false,
        "desc": "일론 머스크가 설립한 프론티어 랩으로, 멤피스에 10만 개 규모의 세계 최대 수랭식 슈퍼클러스터 ‘콜로서스’ 운용.",
        "initialX": 75,
        "initialY": 45
      },
      {
        "id": "deepseek",
        "name": "딥시크 (DeepSeek)",
        "category": "ai_lab",
        "marketCap": 0,
        "aiCapex": 0,
        "aiRevenue": 0,
        "isFormed": false,
        "isHighGrowth": false,
        "desc": "극단적 알고리즘 효율화와 저비용 오픈 추론 모델(DeepSeek-R1)로 무차별적 고비용 Capex 경쟁 구도를 뒤흔든 연구소.",
        "initialX": -75,
        "initialY": 45
      },
      {
        "id": "coreweave",
        "name": "코어위브",
        "category": "neocloud",
        "marketCap": 0.05,
        "aiCapex": 0.02,
        "aiRevenue": 0,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "GPU 자체를 담보로 사모펀드로부터 수십억 달러의 부채를 조달해 GPU를 재구매하는 네오클라우드 벤더 파이낸싱의 상징.",
        "initialX": 0,
        "initialY": 85
      },
      {
        "id": "vc_sovereign",
        "name": "벤처캐피탈 & 국부펀드",
        "category": "venture_capital",
        "marketCap": 280,
        "aiCapex": 0,
        "aiRevenue": 0,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "세쿼이아, 소프트뱅크, a16z 및 중동 국부펀드(MGX, PIF) 등 AI 메가 라운드 및 사모 부채를 공급하는 자본 풀.",
        "initialX": 220,
        "initialY": 155
      },
      {
        "id": "end_market",
        "name": "실제 기업 & 최종 사용자 시장",
        "category": "end_market",
        "marketCap": 480,
        "aiCapex": 0,
        "aiRevenue": 0.2,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "실제 기업 IT 예산, 개발자 API 사용료, 유료 소비자 구독 등 AI 생태계의 유일한 외부 실질 현금 유입원.",
        "initialX": -230,
        "initialY": -170
      }
    ],
    "edges": [
      {
        "id": "msft_nvda_gpu",
        "source": "msft",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 0.5,
        "desc": "2018: Azure AI 인프라 확충을 위해 엔비디아 가속기 서버에 $0.5B 집행."
      },
      {
        "id": "goog_nvda_gpu",
        "source": "goog",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 0.6,
        "desc": "2018: 구글 클라우드(GCP) AI 하이퍼컴퓨터 확장을 위해 엔비디아 가속기에 $0.6B 발주."
      },
      {
        "id": "amzn_nvda_gpu",
        "source": "amzn",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 0.4,
        "desc": "2018: AWS UltraCluster 확장 및 EC2 인스턴스를 위해 엔비디아에 $0.4B 지출."
      },
      {
        "id": "meta_nvda_gpu",
        "source": "meta",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 0.3,
        "desc": "2018: LLaMA 모델 학습 및 메타 AI 데이터센터를 위해 엔비디아 GPU에 $0.3B 구매 집행."
      },
      {
        "id": "nvda_tsmc_gpu",
        "source": "nvda",
        "target": "tsmc",
        "flowType": "gpu_purchase",
        "amount": 0.7,
        "desc": "2018: 엔비디아가 TSMC의 선단 노드 웨이퍼 및 CoWoS 어드밴스드 패키징에 $0.7B 발주."
      },
      {
        "id": "nvda_skhynix_hbm",
        "source": "nvda",
        "target": "skhynix",
        "flowType": "hbm_purchase",
        "amount": 0.2,
        "desc": "2018: 엔비디아가 SK하이닉스의 고대역폭메모리(HBM) 공급에 $0.2B 지출."
      },
      {
        "id": "nvda_samsung_hbm",
        "source": "nvda",
        "target": "samsung",
        "flowType": "hbm_purchase",
        "amount": 0.15,
        "desc": "2018: 엔비디아가 삼성전자로부터 HBM 및 초고속 DRAM/SSD에 $0.15B 조달."
      },
      {
        "id": "tsmc_asml_equip",
        "source": "tsmc",
        "target": "asml",
        "flowType": "equipment_purchase",
        "amount": 0.8,
        "desc": "2018: TSMC가 선단 공정 라인 증설을 위해 ASML EUV/High-NA 장비에 $0.8B 지출."
      },
      {
        "id": "samsung_asml_equip",
        "source": "samsung",
        "target": "asml",
        "flowType": "equipment_purchase",
        "amount": 0.6,
        "desc": "2018: 삼성전자가 선단 DRAM 및 파운드리 확충을 위해 ASML 장비에 $0.6B 발주."
      },
      {
        "id": "skhynix_asml_equip",
        "source": "skhynix",
        "target": "asml",
        "flowType": "equipment_purchase",
        "amount": 0.4,
        "desc": "2018: SK하이닉스가 선단 HBM DRAM 양산 강화를 위해 ASML EUV 장비에 $0.4B 도입."
      },
      {
        "id": "goog_avgo_gpu",
        "source": "goog",
        "target": "avgo",
        "flowType": "gpu_purchase",
        "amount": 0.4,
        "desc": "2018: 구글이 맞춤형 TPU ASIC 설계 및 네트워킹을 위해 브로드컴에 $0.4B 지출."
      },
      {
        "id": "meta_avgo_gpu",
        "source": "meta",
        "target": "avgo",
        "flowType": "gpu_purchase",
        "amount": 0,
        "desc": "2018: 해당 기간 활성 거래 없음 (개시 전 또는 종료)."
      },
      {
        "id": "msft_openai_credit",
        "source": "msft",
        "target": "openai",
        "flowType": "cloud_credit",
        "amount": 0,
        "desc": "2018: 해당 기간 활성 거래 없음 (개시 전 또는 종료)."
      },
      {
        "id": "openai_msft_spend",
        "source": "openai",
        "target": "msft",
        "flowType": "cloud_credit",
        "amount": 0,
        "desc": "2018: 해당 기간 활성 거래 없음 (개시 전 또는 종료)."
      },
      {
        "id": "amzn_anthropic_equity",
        "source": "amzn",
        "target": "anthropic",
        "flowType": "equity_investment",
        "amount": 0,
        "desc": "2018: 기존 체결 투자 트랜치 이행 중; 해당 기간 신규 지분 납입 없음."
      },
      {
        "id": "anthropic_amzn_spend",
        "source": "anthropic",
        "target": "amzn",
        "flowType": "cloud_credit",
        "amount": 0,
        "desc": "2018: 해당 기간 활성 거래 없음 (개시 전 또는 종료)."
      },
      {
        "id": "goog_anthropic_equity",
        "source": "goog",
        "target": "anthropic",
        "flowType": "equity_investment",
        "amount": 0,
        "desc": "2018: 파트너십 약정 유지; 해당 기간 신규 지분 납입 없음."
      },
      {
        "id": "vc_coreweave_debt",
        "source": "vc_sovereign",
        "target": "coreweave",
        "flowType": "debt_collateral",
        "amount": 0,
        "desc": "2018: 기존 GPU 담보 부채 차입 집행 완료; 해당 기간 신규 부채 조달 없음."
      },
      {
        "id": "coreweave_nvda_gpu",
        "source": "coreweave",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 0.05,
        "desc": "2018: 코어위브가 엔비디아 최신 GPU에 $0.05B 대규모 구매 집행."
      },
      {
        "id": "nvda_coreweave_equity",
        "source": "nvda",
        "target": "coreweave",
        "flowType": "equity_investment",
        "amount": 0,
        "desc": "2018: 지분 관계 유지; 해당 기간 신규 지분 취득 없음."
      },
      {
        "id": "coreweave_vc_refinance",
        "source": "coreweave",
        "target": "vc_sovereign",
        "flowType": "debt_collateral",
        "amount": 0,
        "desc": "2018: 해당 기간 활성 거래 없음 (개시 전 또는 종료)."
      },
      {
        "id": "vc_openai_equity",
        "source": "vc_sovereign",
        "target": "openai",
        "flowType": "equity_investment",
        "amount": 0,
        "desc": "2018: 기존 지분 조달 자금 집행 중; 해당 기간 대규모 신규 벤처 지분 유치 없음."
      },
      {
        "id": "xai_nvda_gpu",
        "source": "xai",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 0,
        "desc": "2018: 해당 기간 활성 거래 없음 (개시 전 또는 종료)."
      },
      {
        "id": "skhynix_tsmc_foundry",
        "source": "skhynix",
        "target": "tsmc",
        "flowType": "gpu_purchase",
        "amount": 0,
        "desc": "2018: 해당 기간 활성 거래 없음 (개시 전 또는 종료)."
      },
      {
        "id": "market_openai_rev",
        "source": "end_market",
        "target": "openai",
        "flowType": "enterprise_revenue",
        "amount": 0.02,
        "desc": "2018: 기업 및 유료 사용자의 OpenAI 소프트웨어 및 API 실매출 $0.02B 달성."
      },
      {
        "id": "market_msft_rev",
        "source": "end_market",
        "target": "msft",
        "flowType": "enterprise_revenue",
        "amount": 0.08,
        "desc": "2018: M365 Copilot 및 Azure AI 기업 실매출 $0.08B 기록."
      },
      {
        "id": "market_anthropic_rev",
        "source": "end_market",
        "target": "anthropic",
        "flowType": "enterprise_revenue",
        "amount": 0,
        "desc": "2018: 해당 기간 활성 거래 없음 (개시 전 또는 종료)."
      },
      {
        "id": "market_deepseek_rev",
        "source": "end_market",
        "target": "deepseek",
        "flowType": "enterprise_revenue",
        "amount": 0,
        "desc": "2018: 해당 기간 활성 거래 없음 (개시 전 또는 종료)."
      }
    ]
  },
  {
    "periodId": "2019",
    "year": 2019,
    "quarter": null,
    "label": "2019",
    "dateRange": "2019년 전체",
    "title": "2019년: 10억 달러의 결단 — 마이크로소프트와 OpenAI의 독점 동맹",
    "summary": "마이크로소프트가 OpenAI에 10억 달러를 투자하며 독점 Azure 클라우드 컴퓨팅 파트너십을 체결하고 1만 장의 GPU 전용 슈퍼컴퓨터를 구축합니다. OpenAI는 영리법인을 설립하고 GPT-2를 발표하며 생성형 AI의 상업적 잠재력을 증명합니다.",
    "macroMetrics": {
      "totalAiCapex": 8.8,
      "realEndUserRevenue": 0.35,
      "capexRevenueDeficit": 8.5,
      "circularRatio": 28,
      "annualizedCapexRunRate": 8.8
    },
    "nodes": [
      {
        "id": "msft",
        "name": "마이크로소프트",
        "category": "hyperscaler",
        "marketCap": 1200,
        "aiCapex": 2.1,
        "aiRevenue": 0.12,
        "isFormed": true,
        "isHighGrowth": true,
        "desc": "세계 최고 클라우드 기업, Azure 기반 OpenAI 독점 파트너십 및 자체 Maia AI 가속기 개발.",
        "initialX": -140,
        "initialY": -130
      },
      {
        "id": "goog",
        "name": "알파벳 / 구글",
        "category": "hyperscaler",
        "marketCap": 920,
        "aiCapex": 2.2,
        "aiRevenue": 0.12,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "트랜스포머 아키텍처 창시자, 자체 TPU v4/v5/v6 가속기 및 제미나이(Gemini) 생태계 구축.",
        "initialX": -185,
        "initialY": 5
      },
      {
        "id": "amzn",
        "name": "아마존 / AWS",
        "category": "hyperscaler",
        "marketCap": 920,
        "aiCapex": 1.8,
        "aiRevenue": 0.08,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "세계 1위 클라우드 AWS, 앤트로픽 핵심 투자사(40억 달러)이자 자체 Trainium2/Inferentia 가속기 개발.",
        "initialX": 140,
        "initialY": -130
      },
      {
        "id": "meta",
        "name": "메타 플랫폼스",
        "category": "hyperscaler",
        "marketCap": 585,
        "aiCapex": 1.2,
        "aiRevenue": 0.04,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "오픈소스 AI 생태계 주도(LLaMA 시리즈), 60만 개 이상의 GPU 클러스터 운용 및 MTIA 자체 반도체 개발.",
        "initialX": 185,
        "initialY": 5
      },
      {
        "id": "nvda",
        "name": "엔비디아",
        "category": "chipmaker",
        "marketCap": 144,
        "aiCapex": 0.25,
        "aiRevenue": 2.1,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "글로벌 AI GPU 독점(H100/B200/루빈) 및 CUDA 소프트웨어 생태계를 기반으로 75% 이상의 마진 향유.",
        "initialX": 0,
        "initialY": -10
      },
      {
        "id": "tsmc",
        "name": "TSMC",
        "category": "chipmaker",
        "marketCap": 290,
        "aiCapex": 4.2,
        "aiRevenue": 9.8,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "엔비디아, 애플, 브로드컴 등 전 세계 모든 선단 AI 가속기를 제조하는 독점적 파운드리 및 CoWoS 패키징 선도자.",
        "initialX": -130,
        "initialY": 190
      },
      {
        "id": "avgo",
        "name": "브로드컴",
        "category": "chipmaker",
        "marketCap": 125,
        "aiCapex": 0.1,
        "aiRevenue": 0.65,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "빅테크 맞춤형 AI ASIC(구글 TPU, 메타 MTIA) 및 초고속 AI 데이터센터 스위치/네트워킹 독점 기업.",
        "initialX": -215,
        "initialY": 115
      },
      {
        "id": "skhynix",
        "name": "SK하이닉스",
        "category": "semiconductor_supply",
        "marketCap": 55,
        "aiCapex": 1.1,
        "aiRevenue": 0.4,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "엔비디아에 HBM3/HBM3E를 사실상 독점 공급하며 AI 메모리 초격차를 달성한 글로벌 HBM 1위 기업.",
        "initialX": -20,
        "initialY": -210
      },
      {
        "id": "samsung",
        "name": "삼성전자",
        "category": "semiconductor_supply",
        "marketCap": 330,
        "aiCapex": 4.2,
        "aiRevenue": 0.65,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "세계 최대 메모리 반도체 제조사이자 12단 HBM3E 및 메모리-파운드리 턴키 솔루션을 보유한 종합 반도체 기업.",
        "initialX": 110,
        "initialY": -195
      },
      {
        "id": "asml",
        "name": "ASML",
        "category": "semiconductor_supply",
        "marketCap": 125,
        "aiCapex": 0.3,
        "aiRevenue": 3.2,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "3nm 및 2nm 선단 반도체 제조에 필수적인 EUV 및 High-NA 극자외선 노광 장비를 독점 공급하는 네덜란드 장비사.",
        "initialX": 20,
        "initialY": 235
      },
      {
        "id": "openai",
        "name": "오픈AI",
        "category": "ai_lab",
        "marketCap": 1,
        "aiCapex": 0.12,
        "aiRevenue": 0.02,
        "isFormed": true,
        "isHighGrowth": true,
        "desc": "ChatGPT, GPT-4, o1 추론 모델을 개발한 프론티어 AI 선도 기업이자 1,000억 달러 스타게이트 프로젝트 파트너.",
        "initialX": -60,
        "initialY": -55
      },
      {
        "id": "anthropic",
        "name": "앤트로픽",
        "category": "ai_lab",
        "marketCap": 0,
        "aiCapex": 0,
        "aiRevenue": 0,
        "isFormed": false,
        "isHighGrowth": false,
        "desc": "Claude 3.5 및 컴퓨터 제어 AI를 개발한 프론티어 연구소로, 아마존과 구글로부터 대규모 자본 유치.",
        "initialX": 55,
        "initialY": -55
      },
      {
        "id": "xai",
        "name": "xAI",
        "category": "ai_lab",
        "marketCap": 0,
        "aiCapex": 0,
        "aiRevenue": 0,
        "isFormed": false,
        "isHighGrowth": false,
        "desc": "일론 머스크가 설립한 프론티어 랩으로, 멤피스에 10만 개 규모의 세계 최대 수랭식 슈퍼클러스터 ‘콜로서스’ 운용.",
        "initialX": 75,
        "initialY": 45
      },
      {
        "id": "deepseek",
        "name": "딥시크 (DeepSeek)",
        "category": "ai_lab",
        "marketCap": 0,
        "aiCapex": 0,
        "aiRevenue": 0,
        "isFormed": false,
        "isHighGrowth": false,
        "desc": "극단적 알고리즘 효율화와 저비용 오픈 추론 모델(DeepSeek-R1)로 무차별적 고비용 Capex 경쟁 구도를 뒤흔든 연구소.",
        "initialX": -75,
        "initialY": 45
      },
      {
        "id": "coreweave",
        "name": "코어위브",
        "category": "neocloud",
        "marketCap": 0.08,
        "aiCapex": 0.05,
        "aiRevenue": 0.01,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "GPU 자체를 담보로 사모펀드로부터 수십억 달러의 부채를 조달해 GPU를 재구매하는 네오클라우드 벤더 파이낸싱의 상징.",
        "initialX": 0,
        "initialY": 85
      },
      {
        "id": "vc_sovereign",
        "name": "벤처캐피탈 & 국부펀드",
        "category": "venture_capital",
        "marketCap": 320,
        "aiCapex": 0,
        "aiRevenue": 0,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "세쿼이아, 소프트뱅크, a16z 및 중동 국부펀드(MGX, PIF) 등 AI 메가 라운드 및 사모 부채를 공급하는 자본 풀.",
        "initialX": 220,
        "initialY": 155
      },
      {
        "id": "end_market",
        "name": "실제 기업 & 최종 사용자 시장",
        "category": "end_market",
        "marketCap": 580,
        "aiCapex": 0,
        "aiRevenue": 0.35,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "실제 기업 IT 예산, 개발자 API 사용료, 유료 소비자 구독 등 AI 생태계의 유일한 외부 실질 현금 유입원.",
        "initialX": -230,
        "initialY": -170
      }
    ],
    "edges": [
      {
        "id": "msft_nvda_gpu",
        "source": "msft",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 0.8,
        "desc": "2019: Azure AI 인프라 확충을 위해 엔비디아 가속기 서버에 $0.8B 집행."
      },
      {
        "id": "goog_nvda_gpu",
        "source": "goog",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 0.8,
        "desc": "2019: 구글 클라우드(GCP) AI 하이퍼컴퓨터 확장을 위해 엔비디아 가속기에 $0.8B 발주."
      },
      {
        "id": "amzn_nvda_gpu",
        "source": "amzn",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 0.6,
        "desc": "2019: AWS UltraCluster 확장 및 EC2 인스턴스를 위해 엔비디아에 $0.6B 지출."
      },
      {
        "id": "meta_nvda_gpu",
        "source": "meta",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 0.5,
        "desc": "2019: LLaMA 모델 학습 및 메타 AI 데이터센터를 위해 엔비디아 GPU에 $0.5B 구매 집행."
      },
      {
        "id": "nvda_tsmc_gpu",
        "source": "nvda",
        "target": "tsmc",
        "flowType": "gpu_purchase",
        "amount": 0.9,
        "desc": "2019: 엔비디아가 TSMC의 선단 노드 웨이퍼 및 CoWoS 어드밴스드 패키징에 $0.9B 발주."
      },
      {
        "id": "nvda_skhynix_hbm",
        "source": "nvda",
        "target": "skhynix",
        "flowType": "hbm_purchase",
        "amount": 0.3,
        "desc": "2019: 엔비디아가 SK하이닉스의 고대역폭메모리(HBM) 공급에 $0.3B 지출."
      },
      {
        "id": "nvda_samsung_hbm",
        "source": "nvda",
        "target": "samsung",
        "flowType": "hbm_purchase",
        "amount": 0.2,
        "desc": "2019: 엔비디아가 삼성전자로부터 HBM 및 초고속 DRAM/SSD에 $0.2B 조달."
      },
      {
        "id": "tsmc_asml_equip",
        "source": "tsmc",
        "target": "asml",
        "flowType": "equipment_purchase",
        "amount": 1,
        "desc": "2019: TSMC가 선단 공정 라인 증설을 위해 ASML EUV/High-NA 장비에 $1B 지출."
      },
      {
        "id": "samsung_asml_equip",
        "source": "samsung",
        "target": "asml",
        "flowType": "equipment_purchase",
        "amount": 0.7,
        "desc": "2019: 삼성전자가 선단 DRAM 및 파운드리 확충을 위해 ASML 장비에 $0.7B 발주."
      },
      {
        "id": "skhynix_asml_equip",
        "source": "skhynix",
        "target": "asml",
        "flowType": "equipment_purchase",
        "amount": 0.4,
        "desc": "2019: SK하이닉스가 선단 HBM DRAM 양산 강화를 위해 ASML EUV 장비에 $0.4B 도입."
      },
      {
        "id": "goog_avgo_gpu",
        "source": "goog",
        "target": "avgo",
        "flowType": "gpu_purchase",
        "amount": 0.5,
        "desc": "2019: 구글이 맞춤형 TPU ASIC 설계 및 네트워킹을 위해 브로드컴에 $0.5B 지출."
      },
      {
        "id": "meta_avgo_gpu",
        "source": "meta",
        "target": "avgo",
        "flowType": "gpu_purchase",
        "amount": 0,
        "desc": "2019: 해당 기간 활성 거래 없음 (개시 전 또는 종료)."
      },
      {
        "id": "msft_openai_credit",
        "source": "msft",
        "target": "openai",
        "flowType": "cloud_credit",
        "amount": 1,
        "desc": "2019: MS가 오픈AI에 클라우드 컴퓨팅 크레딧 및 전략적 인프라 비용으로 $1B 공급."
      },
      {
        "id": "openai_msft_spend",
        "source": "openai",
        "target": "msft",
        "flowType": "cloud_credit",
        "amount": 0.15,
        "desc": "2019: 오픈AI가 ChatGPT 및 API 호스팅을 위한 Azure 데이터센터 사용료로 MS에 $0.15B 지불."
      },
      {
        "id": "amzn_anthropic_equity",
        "source": "amzn",
        "target": "anthropic",
        "flowType": "equity_investment",
        "amount": 0,
        "desc": "2019: 기존 체결 투자 트랜치 이행 중; 해당 기간 신규 지분 납입 없음."
      },
      {
        "id": "anthropic_amzn_spend",
        "source": "anthropic",
        "target": "amzn",
        "flowType": "cloud_credit",
        "amount": 0,
        "desc": "2019: 해당 기간 활성 거래 없음 (개시 전 또는 종료)."
      },
      {
        "id": "goog_anthropic_equity",
        "source": "goog",
        "target": "anthropic",
        "flowType": "equity_investment",
        "amount": 0,
        "desc": "2019: 파트너십 약정 유지; 해당 기간 신규 지분 납입 없음."
      },
      {
        "id": "vc_coreweave_debt",
        "source": "vc_sovereign",
        "target": "coreweave",
        "flowType": "debt_collateral",
        "amount": 0,
        "desc": "2019: 기존 GPU 담보 부채 차입 집행 완료; 해당 기간 신규 부채 조달 없음."
      },
      {
        "id": "coreweave_nvda_gpu",
        "source": "coreweave",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 0.1,
        "desc": "2019: 코어위브가 엔비디아 최신 GPU에 $0.1B 대규모 구매 집행."
      },
      {
        "id": "nvda_coreweave_equity",
        "source": "nvda",
        "target": "coreweave",
        "flowType": "equity_investment",
        "amount": 0,
        "desc": "2019: 지분 관계 유지; 해당 기간 신규 지분 취득 없음."
      },
      {
        "id": "coreweave_vc_refinance",
        "source": "coreweave",
        "target": "vc_sovereign",
        "flowType": "debt_collateral",
        "amount": 0,
        "desc": "2019: 해당 기간 활성 거래 없음 (개시 전 또는 종료)."
      },
      {
        "id": "vc_openai_equity",
        "source": "vc_sovereign",
        "target": "openai",
        "flowType": "equity_investment",
        "amount": 0,
        "desc": "2019: 기존 지분 조달 자금 집행 중; 해당 기간 대규모 신규 벤처 지분 유치 없음."
      },
      {
        "id": "xai_nvda_gpu",
        "source": "xai",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 0,
        "desc": "2019: 해당 기간 활성 거래 없음 (개시 전 또는 종료)."
      },
      {
        "id": "skhynix_tsmc_foundry",
        "source": "skhynix",
        "target": "tsmc",
        "flowType": "gpu_purchase",
        "amount": 0,
        "desc": "2019: 해당 기간 활성 거래 없음 (개시 전 또는 종료)."
      },
      {
        "id": "market_openai_rev",
        "source": "end_market",
        "target": "openai",
        "flowType": "enterprise_revenue",
        "amount": 0.03,
        "desc": "2019: 기업 및 유료 사용자의 OpenAI 소프트웨어 및 API 실매출 $0.03B 달성."
      },
      {
        "id": "market_msft_rev",
        "source": "end_market",
        "target": "msft",
        "flowType": "enterprise_revenue",
        "amount": 0.12,
        "desc": "2019: M365 Copilot 및 Azure AI 기업 실매출 $0.12B 기록."
      },
      {
        "id": "market_anthropic_rev",
        "source": "end_market",
        "target": "anthropic",
        "flowType": "enterprise_revenue",
        "amount": 0,
        "desc": "2019: 해당 기간 활성 거래 없음 (개시 전 또는 종료)."
      },
      {
        "id": "market_deepseek_rev",
        "source": "end_market",
        "target": "deepseek",
        "flowType": "enterprise_revenue",
        "amount": 0,
        "desc": "2019: 해당 기간 활성 거래 없음 (개시 전 또는 종료)."
      }
    ]
  },
  {
    "periodId": "2020",
    "year": 2020,
    "quarter": null,
    "label": "2020",
    "dateRange": "2020년 전체",
    "title": "2020년: GPT-3와 스케일링 법칙의 충격 — 엔비디아 암페어 A100 출시",
    "summary": "OpenAI가 1,750억 개 매개변수의 GPT-3를 발표하여 전 세계에 충격을 안깁니다. 딥러닝 성능이 컴퓨팅 파워에 비례해 정량적으로 향상된다는 \"스케일링 법칙\"이 확립됩니다. 엔비디아는 TSMC 7nm 및 HBM2e 기반의 암페어 A100을 출시하며 AI 인프라 독점의 기틀을 다집니다.",
    "macroMetrics": {
      "totalAiCapex": 13.5,
      "realEndUserRevenue": 0.45,
      "capexRevenueDeficit": 13.1,
      "circularRatio": 35,
      "annualizedCapexRunRate": 13.5
    },
    "nodes": [
      {
        "id": "msft",
        "name": "마이크로소프트",
        "category": "hyperscaler",
        "marketCap": 1680,
        "aiCapex": 3.5,
        "aiRevenue": 0.18,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "세계 최고 클라우드 기업, Azure 기반 OpenAI 독점 파트너십 및 자체 Maia AI 가속기 개발.",
        "initialX": -140,
        "initialY": -130
      },
      {
        "id": "goog",
        "name": "알파벳 / 구글",
        "category": "hyperscaler",
        "marketCap": 1180,
        "aiCapex": 3.2,
        "aiRevenue": 0.18,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "트랜스포머 아키텍처 창시자, 자체 TPU v4/v5/v6 가속기 및 제미나이(Gemini) 생태계 구축.",
        "initialX": -185,
        "initialY": 5
      },
      {
        "id": "amzn",
        "name": "아마존 / AWS",
        "category": "hyperscaler",
        "marketCap": 1630,
        "aiCapex": 2.8,
        "aiRevenue": 0.12,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "세계 1위 클라우드 AWS, 앤트로픽 핵심 투자사(40억 달러)이자 자체 Trainium2/Inferentia 가속기 개발.",
        "initialX": 140,
        "initialY": -130
      },
      {
        "id": "meta",
        "name": "메타 플랫폼스",
        "category": "hyperscaler",
        "marketCap": 775,
        "aiCapex": 2,
        "aiRevenue": 0.06,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "오픈소스 AI 생태계 주도(LLaMA 시리즈), 60만 개 이상의 GPU 클러스터 운용 및 MTIA 자체 반도체 개발.",
        "initialX": 185,
        "initialY": 5
      },
      {
        "id": "nvda",
        "name": "엔비디아",
        "category": "chipmaker",
        "marketCap": 323,
        "aiCapex": 0.35,
        "aiRevenue": 3.4,
        "isFormed": true,
        "isHighGrowth": true,
        "desc": "글로벌 AI GPU 독점(H100/B200/루빈) 및 CUDA 소프트웨어 생태계를 기반으로 75% 이상의 마진 향유.",
        "initialX": 0,
        "initialY": -10
      },
      {
        "id": "tsmc",
        "name": "TSMC",
        "category": "chipmaker",
        "marketCap": 450,
        "aiCapex": 5.8,
        "aiRevenue": 12.2,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "엔비디아, 애플, 브로드컴 등 전 세계 모든 선단 AI 가속기를 제조하는 독점적 파운드리 및 CoWoS 패키징 선도자.",
        "initialX": -130,
        "initialY": 190
      },
      {
        "id": "avgo",
        "name": "브로드컴",
        "category": "chipmaker",
        "marketCap": 175,
        "aiCapex": 0.12,
        "aiRevenue": 0.9,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "빅테크 맞춤형 AI ASIC(구글 TPU, 메타 MTIA) 및 초고속 AI 데이터센터 스위치/네트워킹 독점 기업.",
        "initialX": -215,
        "initialY": 115
      },
      {
        "id": "skhynix",
        "name": "SK하이닉스",
        "category": "semiconductor_supply",
        "marketCap": 65,
        "aiCapex": 1.3,
        "aiRevenue": 0.6,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "엔비디아에 HBM3/HBM3E를 사실상 독점 공급하며 AI 메모리 초격차를 달성한 글로벌 HBM 1위 기업.",
        "initialX": -20,
        "initialY": -210
      },
      {
        "id": "samsung",
        "name": "삼성전자",
        "category": "semiconductor_supply",
        "marketCap": 430,
        "aiCapex": 5.5,
        "aiRevenue": 0.8,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "세계 최대 메모리 반도체 제조사이자 12단 HBM3E 및 메모리-파운드리 턴키 솔루션을 보유한 종합 반도체 기업.",
        "initialX": 110,
        "initialY": -195
      },
      {
        "id": "asml",
        "name": "ASML",
        "category": "semiconductor_supply",
        "marketCap": 195,
        "aiCapex": 0.4,
        "aiRevenue": 4.2,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "3nm 및 2nm 선단 반도체 제조에 필수적인 EUV 및 High-NA 극자외선 노광 장비를 독점 공급하는 네덜란드 장비사.",
        "initialX": 20,
        "initialY": 235
      },
      {
        "id": "openai",
        "name": "오픈AI",
        "category": "ai_lab",
        "marketCap": 5,
        "aiCapex": 0.25,
        "aiRevenue": 0.05,
        "isFormed": true,
        "isHighGrowth": true,
        "desc": "ChatGPT, GPT-4, o1 추론 모델을 개발한 프론티어 AI 선도 기업이자 1,000억 달러 스타게이트 프로젝트 파트너.",
        "initialX": -60,
        "initialY": -55
      },
      {
        "id": "anthropic",
        "name": "앤트로픽",
        "category": "ai_lab",
        "marketCap": 0,
        "aiCapex": 0,
        "aiRevenue": 0,
        "isFormed": false,
        "isHighGrowth": false,
        "desc": "Claude 3.5 및 컴퓨터 제어 AI를 개발한 프론티어 연구소로, 아마존과 구글로부터 대규모 자본 유치.",
        "initialX": 55,
        "initialY": -55
      },
      {
        "id": "xai",
        "name": "xAI",
        "category": "ai_lab",
        "marketCap": 0,
        "aiCapex": 0,
        "aiRevenue": 0,
        "isFormed": false,
        "isHighGrowth": false,
        "desc": "일론 머스크가 설립한 프론티어 랩으로, 멤피스에 10만 개 규모의 세계 최대 수랭식 슈퍼클러스터 ‘콜로서스’ 운용.",
        "initialX": 75,
        "initialY": 45
      },
      {
        "id": "deepseek",
        "name": "딥시크 (DeepSeek)",
        "category": "ai_lab",
        "marketCap": 0,
        "aiCapex": 0,
        "aiRevenue": 0,
        "isFormed": false,
        "isHighGrowth": false,
        "desc": "극단적 알고리즘 효율화와 저비용 오픈 추론 모델(DeepSeek-R1)로 무차별적 고비용 Capex 경쟁 구도를 뒤흔든 연구소.",
        "initialX": -75,
        "initialY": 45
      },
      {
        "id": "coreweave",
        "name": "코어위브",
        "category": "neocloud",
        "marketCap": 0.15,
        "aiCapex": 0.08,
        "aiRevenue": 0.02,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "GPU 자체를 담보로 사모펀드로부터 수십억 달러의 부채를 조달해 GPU를 재구매하는 네오클라우드 벤더 파이낸싱의 상징.",
        "initialX": 0,
        "initialY": 85
      },
      {
        "id": "vc_sovereign",
        "name": "벤처캐피탈 & 국부펀드",
        "category": "venture_capital",
        "marketCap": 380,
        "aiCapex": 0,
        "aiRevenue": 0,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "세쿼이아, 소프트뱅크, a16z 및 중동 국부펀드(MGX, PIF) 등 AI 메가 라운드 및 사모 부채를 공급하는 자본 풀.",
        "initialX": 220,
        "initialY": 155
      },
      {
        "id": "end_market",
        "name": "실제 기업 & 최종 사용자 시장",
        "category": "end_market",
        "marketCap": 720,
        "aiCapex": 0,
        "aiRevenue": 0.45,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "실제 기업 IT 예산, 개발자 API 사용료, 유료 소비자 구독 등 AI 생태계의 유일한 외부 실질 현금 유입원.",
        "initialX": -230,
        "initialY": -170
      }
    ],
    "edges": [
      {
        "id": "msft_nvda_gpu",
        "source": "msft",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 1.2,
        "desc": "2020: Azure AI 인프라 확충을 위해 엔비디아 가속기 서버에 $1.2B 집행."
      },
      {
        "id": "goog_nvda_gpu",
        "source": "goog",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 1,
        "desc": "2020: 구글 클라우드(GCP) AI 하이퍼컴퓨터 확장을 위해 엔비디아 가속기에 $1B 발주."
      },
      {
        "id": "amzn_nvda_gpu",
        "source": "amzn",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 0.8,
        "desc": "2020: AWS UltraCluster 확장 및 EC2 인스턴스를 위해 엔비디아에 $0.8B 지출."
      },
      {
        "id": "meta_nvda_gpu",
        "source": "meta",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 0.7,
        "desc": "2020: LLaMA 모델 학습 및 메타 AI 데이터센터를 위해 엔비디아 GPU에 $0.7B 구매 집행."
      },
      {
        "id": "nvda_tsmc_gpu",
        "source": "nvda",
        "target": "tsmc",
        "flowType": "gpu_purchase",
        "amount": 1.2,
        "desc": "2020: 엔비디아가 TSMC의 선단 노드 웨이퍼 및 CoWoS 어드밴스드 패키징에 $1.2B 발주."
      },
      {
        "id": "nvda_skhynix_hbm",
        "source": "nvda",
        "target": "skhynix",
        "flowType": "hbm_purchase",
        "amount": 0.4,
        "desc": "2020: 엔비디아가 SK하이닉스의 고대역폭메모리(HBM) 공급에 $0.4B 지출."
      },
      {
        "id": "nvda_samsung_hbm",
        "source": "nvda",
        "target": "samsung",
        "flowType": "hbm_purchase",
        "amount": 0.2,
        "desc": "2020: 엔비디아가 삼성전자로부터 HBM 및 초고속 DRAM/SSD에 $0.2B 조달."
      },
      {
        "id": "tsmc_asml_equip",
        "source": "tsmc",
        "target": "asml",
        "flowType": "equipment_purchase",
        "amount": 1.2,
        "desc": "2020: TSMC가 선단 공정 라인 증설을 위해 ASML EUV/High-NA 장비에 $1.2B 지출."
      },
      {
        "id": "samsung_asml_equip",
        "source": "samsung",
        "target": "asml",
        "flowType": "equipment_purchase",
        "amount": 0.8,
        "desc": "2020: 삼성전자가 선단 DRAM 및 파운드리 확충을 위해 ASML 장비에 $0.8B 발주."
      },
      {
        "id": "skhynix_asml_equip",
        "source": "skhynix",
        "target": "asml",
        "flowType": "equipment_purchase",
        "amount": 0.5,
        "desc": "2020: SK하이닉스가 선단 HBM DRAM 양산 강화를 위해 ASML EUV 장비에 $0.5B 도입."
      },
      {
        "id": "goog_avgo_gpu",
        "source": "goog",
        "target": "avgo",
        "flowType": "gpu_purchase",
        "amount": 0.6,
        "desc": "2020: 구글이 맞춤형 TPU ASIC 설계 및 네트워킹을 위해 브로드컴에 $0.6B 지출."
      },
      {
        "id": "meta_avgo_gpu",
        "source": "meta",
        "target": "avgo",
        "flowType": "gpu_purchase",
        "amount": 0,
        "desc": "2020: 해당 기간 활성 거래 없음 (개시 전 또는 종료)."
      },
      {
        "id": "msft_openai_credit",
        "source": "msft",
        "target": "openai",
        "flowType": "cloud_credit",
        "amount": 0.8,
        "desc": "2020: MS가 오픈AI에 클라우드 컴퓨팅 크레딧 및 전략적 인프라 비용으로 $0.8B 공급."
      },
      {
        "id": "openai_msft_spend",
        "source": "openai",
        "target": "msft",
        "flowType": "cloud_credit",
        "amount": 0.2,
        "desc": "2020: 오픈AI가 ChatGPT 및 API 호스팅을 위한 Azure 데이터센터 사용료로 MS에 $0.2B 지불."
      },
      {
        "id": "amzn_anthropic_equity",
        "source": "amzn",
        "target": "anthropic",
        "flowType": "equity_investment",
        "amount": 0,
        "desc": "2020: 기존 체결 투자 트랜치 이행 중; 해당 기간 신규 지분 납입 없음."
      },
      {
        "id": "anthropic_amzn_spend",
        "source": "anthropic",
        "target": "amzn",
        "flowType": "cloud_credit",
        "amount": 0,
        "desc": "2020: 해당 기간 활성 거래 없음 (개시 전 또는 종료)."
      },
      {
        "id": "goog_anthropic_equity",
        "source": "goog",
        "target": "anthropic",
        "flowType": "equity_investment",
        "amount": 0,
        "desc": "2020: 파트너십 약정 유지; 해당 기간 신규 지분 납입 없음."
      },
      {
        "id": "vc_coreweave_debt",
        "source": "vc_sovereign",
        "target": "coreweave",
        "flowType": "debt_collateral",
        "amount": 0,
        "desc": "2020: 기존 GPU 담보 부채 차입 집행 완료; 해당 기간 신규 부채 조달 없음."
      },
      {
        "id": "coreweave_nvda_gpu",
        "source": "coreweave",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 0.15,
        "desc": "2020: 코어위브가 엔비디아 최신 GPU에 $0.15B 대규모 구매 집행."
      },
      {
        "id": "nvda_coreweave_equity",
        "source": "nvda",
        "target": "coreweave",
        "flowType": "equity_investment",
        "amount": 0,
        "desc": "2020: 지분 관계 유지; 해당 기간 신규 지분 취득 없음."
      },
      {
        "id": "coreweave_vc_refinance",
        "source": "coreweave",
        "target": "vc_sovereign",
        "flowType": "debt_collateral",
        "amount": 0,
        "desc": "2020: 해당 기간 활성 거래 없음 (개시 전 또는 종료)."
      },
      {
        "id": "vc_openai_equity",
        "source": "vc_sovereign",
        "target": "openai",
        "flowType": "equity_investment",
        "amount": 0,
        "desc": "2020: 기존 지분 조달 자금 집행 중; 해당 기간 대규모 신규 벤처 지분 유치 없음."
      },
      {
        "id": "xai_nvda_gpu",
        "source": "xai",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 0,
        "desc": "2020: 해당 기간 활성 거래 없음 (개시 전 또는 종료)."
      },
      {
        "id": "skhynix_tsmc_foundry",
        "source": "skhynix",
        "target": "tsmc",
        "flowType": "gpu_purchase",
        "amount": 0,
        "desc": "2020: 해당 기간 활성 거래 없음 (개시 전 또는 종료)."
      },
      {
        "id": "market_openai_rev",
        "source": "end_market",
        "target": "openai",
        "flowType": "enterprise_revenue",
        "amount": 0.05,
        "desc": "2020: 기업 및 유료 사용자의 OpenAI 소프트웨어 및 API 실매출 $0.05B 달성."
      },
      {
        "id": "market_msft_rev",
        "source": "end_market",
        "target": "msft",
        "flowType": "enterprise_revenue",
        "amount": 0.15,
        "desc": "2020: M365 Copilot 및 Azure AI 기업 실매출 $0.15B 기록."
      },
      {
        "id": "market_anthropic_rev",
        "source": "end_market",
        "target": "anthropic",
        "flowType": "enterprise_revenue",
        "amount": 0,
        "desc": "2020: 해당 기간 활성 거래 없음 (개시 전 또는 종료)."
      },
      {
        "id": "market_deepseek_rev",
        "source": "end_market",
        "target": "deepseek",
        "flowType": "enterprise_revenue",
        "amount": 0,
        "desc": "2020: 해당 기간 활성 거래 없음 (개시 전 또는 종료)."
      }
    ]
  },
  {
    "periodId": "2021",
    "year": 2021,
    "quarter": null,
    "label": "2021",
    "dateRange": "2021년 전체",
    "title": "2021년: 앤트로픽의 탄생과 상용화 — DALL-E와 코덱스의 등장",
    "summary": "Dario Amodei를 비롯한 핵심 연구진이 안전성과 상업화 방향성에 대한 이견으로 OpenAI를 떠나 앤트로픽(Anthropic)을 설립합니다. OpenAI는 DALL-E 1과 Codex(깃허브 코파일럿 기반)를 공개하며 기업용 API 상용화의 물꼬를 틉니다.",
    "macroMetrics": {
      "totalAiCapex": 18.2,
      "realEndUserRevenue": 0.6,
      "capexRevenueDeficit": 17.6,
      "circularRatio": 40,
      "annualizedCapexRunRate": 18.2
    },
    "nodes": [
      {
        "id": "msft",
        "name": "마이크로소프트",
        "category": "hyperscaler",
        "marketCap": 2500,
        "aiCapex": 4.8,
        "aiRevenue": 0.25,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "세계 최고 클라우드 기업, Azure 기반 OpenAI 독점 파트너십 및 자체 Maia AI 가속기 개발.",
        "initialX": -140,
        "initialY": -130
      },
      {
        "id": "goog",
        "name": "알파벳 / 구글",
        "category": "hyperscaler",
        "marketCap": 1900,
        "aiCapex": 4.4,
        "aiRevenue": 0.22,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "트랜스포머 아키텍처 창시자, 자체 TPU v4/v5/v6 가속기 및 제미나이(Gemini) 생태계 구축.",
        "initialX": -185,
        "initialY": 5
      },
      {
        "id": "amzn",
        "name": "아마존 / AWS",
        "category": "hyperscaler",
        "marketCap": 1700,
        "aiCapex": 3.8,
        "aiRevenue": 0.16,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "세계 1위 클라우드 AWS, 앤트로픽 핵심 투자사(40억 달러)이자 자체 Trainium2/Inferentia 가속기 개발.",
        "initialX": 140,
        "initialY": -130
      },
      {
        "id": "meta",
        "name": "메타 플랫폼스",
        "category": "hyperscaler",
        "marketCap": 935,
        "aiCapex": 3.2,
        "aiRevenue": 0.08,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "오픈소스 AI 생태계 주도(LLaMA 시리즈), 60만 개 이상의 GPU 클러스터 운용 및 MTIA 자체 반도체 개발.",
        "initialX": 185,
        "initialY": 5
      },
      {
        "id": "nvda",
        "name": "엔비디아",
        "category": "chipmaker",
        "marketCap": 735,
        "aiCapex": 0.45,
        "aiRevenue": 5.2,
        "isFormed": true,
        "isHighGrowth": true,
        "desc": "글로벌 AI GPU 독점(H100/B200/루빈) 및 CUDA 소프트웨어 생태계를 기반으로 75% 이상의 마진 향유.",
        "initialX": 0,
        "initialY": -10
      },
      {
        "id": "tsmc",
        "name": "TSMC",
        "category": "chipmaker",
        "marketCap": 620,
        "aiCapex": 7.2,
        "aiRevenue": 14.5,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "엔비디아, 애플, 브로드컴 등 전 세계 모든 선단 AI 가속기를 제조하는 독점적 파운드리 및 CoWoS 패키징 선도자.",
        "initialX": -130,
        "initialY": 190
      },
      {
        "id": "avgo",
        "name": "브로드컴",
        "category": "chipmaker",
        "marketCap": 270,
        "aiCapex": 0.15,
        "aiRevenue": 1.2,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "빅테크 맞춤형 AI ASIC(구글 TPU, 메타 MTIA) 및 초고속 AI 데이터센터 스위치/네트워킹 독점 기업.",
        "initialX": -215,
        "initialY": 115
      },
      {
        "id": "skhynix",
        "name": "SK하이닉스",
        "category": "semiconductor_supply",
        "marketCap": 78,
        "aiCapex": 1.5,
        "aiRevenue": 0.8,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "엔비디아에 HBM3/HBM3E를 사실상 독점 공급하며 AI 메모리 초격차를 달성한 글로벌 HBM 1위 기업.",
        "initialX": -20,
        "initialY": -210
      },
      {
        "id": "samsung",
        "name": "삼성전자",
        "category": "semiconductor_supply",
        "marketCap": 450,
        "aiCapex": 6.8,
        "aiRevenue": 1,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "세계 최대 메모리 반도체 제조사이자 12단 HBM3E 및 메모리-파운드리 턴키 솔루션을 보유한 종합 반도체 기업.",
        "initialX": 110,
        "initialY": -195
      },
      {
        "id": "asml",
        "name": "ASML",
        "category": "semiconductor_supply",
        "marketCap": 310,
        "aiCapex": 0.45,
        "aiRevenue": 5.5,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "3nm 및 2nm 선단 반도체 제조에 필수적인 EUV 및 High-NA 극자외선 노광 장비를 독점 공급하는 네덜란드 장비사.",
        "initialX": 20,
        "initialY": 235
      },
      {
        "id": "openai",
        "name": "오픈AI",
        "category": "ai_lab",
        "marketCap": 14,
        "aiCapex": 0.35,
        "aiRevenue": 0.1,
        "isFormed": true,
        "isHighGrowth": true,
        "desc": "ChatGPT, GPT-4, o1 추론 모델을 개발한 프론티어 AI 선도 기업이자 1,000억 달러 스타게이트 프로젝트 파트너.",
        "initialX": -60,
        "initialY": -55
      },
      {
        "id": "anthropic",
        "name": "앤트로픽",
        "category": "ai_lab",
        "marketCap": 1,
        "aiCapex": 0.05,
        "aiRevenue": 0.01,
        "isFormed": true,
        "isHighGrowth": true,
        "desc": "Claude 3.5 및 컴퓨터 제어 AI를 개발한 프론티어 연구소로, 아마존과 구글로부터 대규모 자본 유치.",
        "initialX": 55,
        "initialY": -55
      },
      {
        "id": "xai",
        "name": "xAI",
        "category": "ai_lab",
        "marketCap": 0,
        "aiCapex": 0,
        "aiRevenue": 0,
        "isFormed": false,
        "isHighGrowth": false,
        "desc": "일론 머스크가 설립한 프론티어 랩으로, 멤피스에 10만 개 규모의 세계 최대 수랭식 슈퍼클러스터 ‘콜로서스’ 운용.",
        "initialX": 75,
        "initialY": 45
      },
      {
        "id": "deepseek",
        "name": "딥시크 (DeepSeek)",
        "category": "ai_lab",
        "marketCap": 0,
        "aiCapex": 0,
        "aiRevenue": 0,
        "isFormed": false,
        "isHighGrowth": false,
        "desc": "극단적 알고리즘 효율화와 저비용 오픈 추론 모델(DeepSeek-R1)로 무차별적 고비용 Capex 경쟁 구도를 뒤흔든 연구소.",
        "initialX": -75,
        "initialY": 45
      },
      {
        "id": "coreweave",
        "name": "코어위브",
        "category": "neocloud",
        "marketCap": 0.4,
        "aiCapex": 0.15,
        "aiRevenue": 0.04,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "GPU 자체를 담보로 사모펀드로부터 수십억 달러의 부채를 조달해 GPU를 재구매하는 네오클라우드 벤더 파이낸싱의 상징.",
        "initialX": 0,
        "initialY": 85
      },
      {
        "id": "vc_sovereign",
        "name": "벤처캐피탈 & 국부펀드",
        "category": "venture_capital",
        "marketCap": 450,
        "aiCapex": 0,
        "aiRevenue": 0,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "세쿼이아, 소프트뱅크, a16z 및 중동 국부펀드(MGX, PIF) 등 AI 메가 라운드 및 사모 부채를 공급하는 자본 풀.",
        "initialX": 220,
        "initialY": 155
      },
      {
        "id": "end_market",
        "name": "실제 기업 & 최종 사용자 시장",
        "category": "end_market",
        "marketCap": 950,
        "aiCapex": 0,
        "aiRevenue": 0.6,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "실제 기업 IT 예산, 개발자 API 사용료, 유료 소비자 구독 등 AI 생태계의 유일한 외부 실질 현금 유입원.",
        "initialX": -230,
        "initialY": -170
      }
    ],
    "edges": [
      {
        "id": "msft_nvda_gpu",
        "source": "msft",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 1.6,
        "desc": "2021: Azure AI 인프라 확충을 위해 엔비디아 가속기 서버에 $1.6B 집행."
      },
      {
        "id": "goog_nvda_gpu",
        "source": "goog",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 1.3,
        "desc": "2021: 구글 클라우드(GCP) AI 하이퍼컴퓨터 확장을 위해 엔비디아 가속기에 $1.3B 발주."
      },
      {
        "id": "amzn_nvda_gpu",
        "source": "amzn",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 1.1,
        "desc": "2021: AWS UltraCluster 확장 및 EC2 인스턴스를 위해 엔비디아에 $1.1B 지출."
      },
      {
        "id": "meta_nvda_gpu",
        "source": "meta",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 1,
        "desc": "2021: LLaMA 모델 학습 및 메타 AI 데이터센터를 위해 엔비디아 GPU에 $1B 구매 집행."
      },
      {
        "id": "nvda_tsmc_gpu",
        "source": "nvda",
        "target": "tsmc",
        "flowType": "gpu_purchase",
        "amount": 1.5,
        "desc": "2021: 엔비디아가 TSMC의 선단 노드 웨이퍼 및 CoWoS 어드밴스드 패키징에 $1.5B 발주."
      },
      {
        "id": "nvda_skhynix_hbm",
        "source": "nvda",
        "target": "skhynix",
        "flowType": "hbm_purchase",
        "amount": 0.5,
        "desc": "2021: 엔비디아가 SK하이닉스의 고대역폭메모리(HBM) 공급에 $0.5B 지출."
      },
      {
        "id": "nvda_samsung_hbm",
        "source": "nvda",
        "target": "samsung",
        "flowType": "hbm_purchase",
        "amount": 0.25,
        "desc": "2021: 엔비디아가 삼성전자로부터 HBM 및 초고속 DRAM/SSD에 $0.25B 조달."
      },
      {
        "id": "tsmc_asml_equip",
        "source": "tsmc",
        "target": "asml",
        "flowType": "equipment_purchase",
        "amount": 1.3,
        "desc": "2021: TSMC가 선단 공정 라인 증설을 위해 ASML EUV/High-NA 장비에 $1.3B 지출."
      },
      {
        "id": "samsung_asml_equip",
        "source": "samsung",
        "target": "asml",
        "flowType": "equipment_purchase",
        "amount": 0.9,
        "desc": "2021: 삼성전자가 선단 DRAM 및 파운드리 확충을 위해 ASML 장비에 $0.9B 발주."
      },
      {
        "id": "skhynix_asml_equip",
        "source": "skhynix",
        "target": "asml",
        "flowType": "equipment_purchase",
        "amount": 0.5,
        "desc": "2021: SK하이닉스가 선단 HBM DRAM 양산 강화를 위해 ASML EUV 장비에 $0.5B 도입."
      },
      {
        "id": "goog_avgo_gpu",
        "source": "goog",
        "target": "avgo",
        "flowType": "gpu_purchase",
        "amount": 0.65,
        "desc": "2021: 구글이 맞춤형 TPU ASIC 설계 및 네트워킹을 위해 브로드컴에 $0.65B 지출."
      },
      {
        "id": "meta_avgo_gpu",
        "source": "meta",
        "target": "avgo",
        "flowType": "gpu_purchase",
        "amount": 0,
        "desc": "2021: 해당 기간 활성 거래 없음 (개시 전 또는 종료)."
      },
      {
        "id": "msft_openai_credit",
        "source": "msft",
        "target": "openai",
        "flowType": "cloud_credit",
        "amount": 1.2,
        "desc": "2021: MS가 오픈AI에 클라우드 컴퓨팅 크레딧 및 전략적 인프라 비용으로 $1.2B 공급."
      },
      {
        "id": "openai_msft_spend",
        "source": "openai",
        "target": "msft",
        "flowType": "cloud_credit",
        "amount": 0.25,
        "desc": "2021: 오픈AI가 ChatGPT 및 API 호스팅을 위한 Azure 데이터센터 사용료로 MS에 $0.25B 지불."
      },
      {
        "id": "amzn_anthropic_equity",
        "source": "amzn",
        "target": "anthropic",
        "flowType": "equity_investment",
        "amount": 0.12,
        "desc": "2021: 아마존이 앤트로픽에 전략적 투자 트랜치 $0.12B를 직접 납입."
      },
      {
        "id": "anthropic_amzn_spend",
        "source": "anthropic",
        "target": "amzn",
        "flowType": "cloud_credit",
        "amount": 0.05,
        "desc": "2021: 앤트로픽이 Claude 모델 학습 및 Bedrock 서비스를 위해 AWS 인프라 비용 $0.05B 지출."
      },
      {
        "id": "goog_anthropic_equity",
        "source": "goog",
        "target": "anthropic",
        "flowType": "equity_investment",
        "amount": 0,
        "desc": "2021: 파트너십 약정 유지; 해당 기간 신규 지분 납입 없음."
      },
      {
        "id": "vc_coreweave_debt",
        "source": "vc_sovereign",
        "target": "coreweave",
        "flowType": "debt_collateral",
        "amount": 0,
        "desc": "2021: 기존 GPU 담보 부채 차입 집행 완료; 해당 기간 신규 부채 조달 없음."
      },
      {
        "id": "coreweave_nvda_gpu",
        "source": "coreweave",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 0.25,
        "desc": "2021: 코어위브가 엔비디아 최신 GPU에 $0.25B 대규모 구매 집행."
      },
      {
        "id": "nvda_coreweave_equity",
        "source": "nvda",
        "target": "coreweave",
        "flowType": "equity_investment",
        "amount": 0,
        "desc": "2021: 지분 관계 유지; 해당 기간 신규 지분 취득 없음."
      },
      {
        "id": "coreweave_vc_refinance",
        "source": "coreweave",
        "target": "vc_sovereign",
        "flowType": "debt_collateral",
        "amount": 0,
        "desc": "2021: 해당 기간 활성 거래 없음 (개시 전 또는 종료)."
      },
      {
        "id": "vc_openai_equity",
        "source": "vc_sovereign",
        "target": "openai",
        "flowType": "equity_investment",
        "amount": 0.25,
        "desc": "2021: 글로벌 벤처/국부펀드 신디케이트가 오픈AI에 $0.25B 규모 메가 지분 투자 유치."
      },
      {
        "id": "xai_nvda_gpu",
        "source": "xai",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 0,
        "desc": "2021: 해당 기간 활성 거래 없음 (개시 전 또는 종료)."
      },
      {
        "id": "skhynix_tsmc_foundry",
        "source": "skhynix",
        "target": "tsmc",
        "flowType": "gpu_purchase",
        "amount": 0,
        "desc": "2021: 해당 기간 활성 거래 없음 (개시 전 또는 종료)."
      },
      {
        "id": "market_openai_rev",
        "source": "end_market",
        "target": "openai",
        "flowType": "enterprise_revenue",
        "amount": 0.1,
        "desc": "2021: 기업 및 유료 사용자의 OpenAI 소프트웨어 및 API 실매출 $0.1B 달성."
      },
      {
        "id": "market_msft_rev",
        "source": "end_market",
        "target": "msft",
        "flowType": "enterprise_revenue",
        "amount": 0.2,
        "desc": "2021: M365 Copilot 및 Azure AI 기업 실매출 $0.2B 기록."
      },
      {
        "id": "market_anthropic_rev",
        "source": "end_market",
        "target": "anthropic",
        "flowType": "enterprise_revenue",
        "amount": 0.01,
        "desc": "2021: Claude 엔터프라이즈 API 토큰 소비 실매출 $0.01B 달성."
      },
      {
        "id": "market_deepseek_rev",
        "source": "end_market",
        "target": "deepseek",
        "flowType": "enterprise_revenue",
        "amount": 0,
        "desc": "2021: 해당 기간 활성 거래 없음 (개시 전 또는 종료)."
      }
    ]
  },
  {
    "periodId": "2022",
    "year": 2022,
    "quarter": null,
    "label": "2022",
    "dateRange": "2022년 전체",
    "title": "2022년: 역사의 변곡점 — ChatGPT의 전격 출시 (2022년 11월 30일)",
    "summary": "스테이블 디퓨전과 미드저니가 이미지 생성 돌풍을 일으키고, 엔비디아는 트랜스포머 엔진을 탑재한 H100 GPU를 공개합니다. 2022년 11월 30일, OpenAI가 ChatGPT를 공개하자 불과 5일 만에 100만 사용자를 모으며 인류 역사상 가장 거대한 생성형 AI 골드러시가 촉발됩니다.",
    "macroMetrics": {
      "totalAiCapex": 22.8,
      "realEndUserRevenue": 0.7,
      "capexRevenueDeficit": 22.1,
      "circularRatio": 44,
      "annualizedCapexRunRate": 22.8
    },
    "nodes": [
      {
        "id": "msft",
        "name": "마이크로소프트",
        "category": "hyperscaler",
        "marketCap": 1780,
        "aiCapex": 5.8,
        "aiRevenue": 0.35,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "세계 최고 클라우드 기업, Azure 기반 OpenAI 독점 파트너십 및 자체 Maia AI 가속기 개발.",
        "initialX": -140,
        "initialY": -130
      },
      {
        "id": "goog",
        "name": "알파벳 / 구글",
        "category": "hyperscaler",
        "marketCap": 1150,
        "aiCapex": 5.2,
        "aiRevenue": 0.2,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "트랜스포머 아키텍처 창시자, 자체 TPU v4/v5/v6 가속기 및 제미나이(Gemini) 생태계 구축.",
        "initialX": -185,
        "initialY": 5
      },
      {
        "id": "amzn",
        "name": "아마존 / AWS",
        "category": "hyperscaler",
        "marketCap": 860,
        "aiCapex": 5.4,
        "aiRevenue": 0.18,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "세계 1위 클라우드 AWS, 앤트로픽 핵심 투자사(40억 달러)이자 자체 Trainium2/Inferentia 가속기 개발.",
        "initialX": 140,
        "initialY": -130
      },
      {
        "id": "meta",
        "name": "메타 플랫폼스",
        "category": "hyperscaler",
        "marketCap": 320,
        "aiCapex": 4.8,
        "aiRevenue": 0.1,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "오픈소스 AI 생태계 주도(LLaMA 시리즈), 60만 개 이상의 GPU 클러스터 운용 및 MTIA 자체 반도체 개발.",
        "initialX": 185,
        "initialY": 5
      },
      {
        "id": "nvda",
        "name": "엔비디아",
        "category": "chipmaker",
        "marketCap": 360,
        "aiCapex": 0.55,
        "aiRevenue": 6.8,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "글로벌 AI GPU 독점(H100/B200/루빈) 및 CUDA 소프트웨어 생태계를 기반으로 75% 이상의 마진 향유.",
        "initialX": 0,
        "initialY": -10
      },
      {
        "id": "tsmc",
        "name": "TSMC",
        "category": "chipmaker",
        "marketCap": 380,
        "aiCapex": 8.5,
        "aiRevenue": 15.5,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "엔비디아, 애플, 브로드컴 등 전 세계 모든 선단 AI 가속기를 제조하는 독점적 파운드리 및 CoWoS 패키징 선도자.",
        "initialX": -130,
        "initialY": 190
      },
      {
        "id": "avgo",
        "name": "브로드컴",
        "category": "chipmaker",
        "marketCap": 230,
        "aiCapex": 0.18,
        "aiRevenue": 1.5,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "빅테크 맞춤형 AI ASIC(구글 TPU, 메타 MTIA) 및 초고속 AI 데이터센터 스위치/네트워킹 독점 기업.",
        "initialX": -215,
        "initialY": 115
      },
      {
        "id": "skhynix",
        "name": "SK하이닉스",
        "category": "semiconductor_supply",
        "marketCap": 48,
        "aiCapex": 1.6,
        "aiRevenue": 0.75,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "엔비디아에 HBM3/HBM3E를 사실상 독점 공급하며 AI 메모리 초격차를 달성한 글로벌 HBM 1위 기업.",
        "initialX": -20,
        "initialY": -210
      },
      {
        "id": "samsung",
        "name": "삼성전자",
        "category": "semiconductor_supply",
        "marketCap": 290,
        "aiCapex": 7.5,
        "aiRevenue": 1.1,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "세계 최대 메모리 반도체 제조사이자 12단 HBM3E 및 메모리-파운드리 턴키 솔루션을 보유한 종합 반도체 기업.",
        "initialX": 110,
        "initialY": -195
      },
      {
        "id": "asml",
        "name": "ASML",
        "category": "semiconductor_supply",
        "marketCap": 220,
        "aiCapex": 0.5,
        "aiRevenue": 6.2,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "3nm 및 2nm 선단 반도체 제조에 필수적인 EUV 및 High-NA 극자외선 노광 장비를 독점 공급하는 네덜란드 장비사.",
        "initialX": 20,
        "initialY": 235
      },
      {
        "id": "openai",
        "name": "오픈AI",
        "category": "ai_lab",
        "marketCap": 20,
        "aiCapex": 0.45,
        "aiRevenue": 0.15,
        "isFormed": true,
        "isHighGrowth": true,
        "desc": "ChatGPT, GPT-4, o1 추론 모델을 개발한 프론티어 AI 선도 기업이자 1,000억 달러 스타게이트 프로젝트 파트너.",
        "initialX": -60,
        "initialY": -55
      },
      {
        "id": "anthropic",
        "name": "앤트로픽",
        "category": "ai_lab",
        "marketCap": 4,
        "aiCapex": 0.1,
        "aiRevenue": 0.02,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "Claude 3.5 및 컴퓨터 제어 AI를 개발한 프론티어 연구소로, 아마존과 구글로부터 대규모 자본 유치.",
        "initialX": 55,
        "initialY": -55
      },
      {
        "id": "xai",
        "name": "xAI",
        "category": "ai_lab",
        "marketCap": 0,
        "aiCapex": 0,
        "aiRevenue": 0,
        "isFormed": false,
        "isHighGrowth": false,
        "desc": "일론 머스크가 설립한 프론티어 랩으로, 멤피스에 10만 개 규모의 세계 최대 수랭식 슈퍼클러스터 ‘콜로서스’ 운용.",
        "initialX": 75,
        "initialY": 45
      },
      {
        "id": "deepseek",
        "name": "딥시크 (DeepSeek)",
        "category": "ai_lab",
        "marketCap": 0,
        "aiCapex": 0,
        "aiRevenue": 0,
        "isFormed": false,
        "isHighGrowth": false,
        "desc": "극단적 알고리즘 효율화와 저비용 오픈 추론 모델(DeepSeek-R1)로 무차별적 고비용 Capex 경쟁 구도를 뒤흔든 연구소.",
        "initialX": -75,
        "initialY": 45
      },
      {
        "id": "coreweave",
        "name": "코어위브",
        "category": "neocloud",
        "marketCap": 1,
        "aiCapex": 0.25,
        "aiRevenue": 0.06,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "GPU 자체를 담보로 사모펀드로부터 수십억 달러의 부채를 조달해 GPU를 재구매하는 네오클라우드 벤더 파이낸싱의 상징.",
        "initialX": 0,
        "initialY": 85
      },
      {
        "id": "vc_sovereign",
        "name": "벤처캐피탈 & 국부펀드",
        "category": "venture_capital",
        "marketCap": 480,
        "aiCapex": 0,
        "aiRevenue": 0,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "세쿼이아, 소프트뱅크, a16z 및 중동 국부펀드(MGX, PIF) 등 AI 메가 라운드 및 사모 부채를 공급하는 자본 풀.",
        "initialX": 220,
        "initialY": 155
      },
      {
        "id": "end_market",
        "name": "실제 기업 & 최종 사용자 시장",
        "category": "end_market",
        "marketCap": 1100,
        "aiCapex": 0,
        "aiRevenue": 0.7,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "실제 기업 IT 예산, 개발자 API 사용료, 유료 소비자 구독 등 AI 생태계의 유일한 외부 실질 현금 유입원.",
        "initialX": -230,
        "initialY": -170
      }
    ],
    "edges": [
      {
        "id": "msft_nvda_gpu",
        "source": "msft",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 2.2,
        "desc": "2022: Azure AI 인프라 확충을 위해 엔비디아 가속기 서버에 $2.2B 집행."
      },
      {
        "id": "goog_nvda_gpu",
        "source": "goog",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 1.8,
        "desc": "2022: 구글 클라우드(GCP) AI 하이퍼컴퓨터 확장을 위해 엔비디아 가속기에 $1.8B 발주."
      },
      {
        "id": "amzn_nvda_gpu",
        "source": "amzn",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 1.6,
        "desc": "2022: AWS UltraCluster 확장 및 EC2 인스턴스를 위해 엔비디아에 $1.6B 지출."
      },
      {
        "id": "meta_nvda_gpu",
        "source": "meta",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 1.5,
        "desc": "2022: LLaMA 모델 학습 및 메타 AI 데이터센터를 위해 엔비디아 GPU에 $1.5B 구매 집행."
      },
      {
        "id": "nvda_tsmc_gpu",
        "source": "nvda",
        "target": "tsmc",
        "flowType": "gpu_purchase",
        "amount": 1.8,
        "desc": "2022: 엔비디아가 TSMC의 선단 노드 웨이퍼 및 CoWoS 어드밴스드 패키징에 $1.8B 발주."
      },
      {
        "id": "nvda_skhynix_hbm",
        "source": "nvda",
        "target": "skhynix",
        "flowType": "hbm_purchase",
        "amount": 0.65,
        "desc": "2022: 엔비디아가 SK하이닉스의 고대역폭메모리(HBM) 공급에 $0.65B 지출."
      },
      {
        "id": "nvda_samsung_hbm",
        "source": "nvda",
        "target": "samsung",
        "flowType": "hbm_purchase",
        "amount": 0.3,
        "desc": "2022: 엔비디아가 삼성전자로부터 HBM 및 초고속 DRAM/SSD에 $0.3B 조달."
      },
      {
        "id": "tsmc_asml_equip",
        "source": "tsmc",
        "target": "asml",
        "flowType": "equipment_purchase",
        "amount": 1.4,
        "desc": "2022: TSMC가 선단 공정 라인 증설을 위해 ASML EUV/High-NA 장비에 $1.4B 지출."
      },
      {
        "id": "samsung_asml_equip",
        "source": "samsung",
        "target": "asml",
        "flowType": "equipment_purchase",
        "amount": 1,
        "desc": "2022: 삼성전자가 선단 DRAM 및 파운드리 확충을 위해 ASML 장비에 $1B 발주."
      },
      {
        "id": "skhynix_asml_equip",
        "source": "skhynix",
        "target": "asml",
        "flowType": "equipment_purchase",
        "amount": 0.55,
        "desc": "2022: SK하이닉스가 선단 HBM DRAM 양산 강화를 위해 ASML EUV 장비에 $0.55B 도입."
      },
      {
        "id": "goog_avgo_gpu",
        "source": "goog",
        "target": "avgo",
        "flowType": "gpu_purchase",
        "amount": 0.68,
        "desc": "2022: 구글이 맞춤형 TPU ASIC 설계 및 네트워킹을 위해 브로드컴에 $0.68B 지출."
      },
      {
        "id": "meta_avgo_gpu",
        "source": "meta",
        "target": "avgo",
        "flowType": "gpu_purchase",
        "amount": 0,
        "desc": "2022: 해당 기간 활성 거래 없음 (개시 전 또는 종료)."
      },
      {
        "id": "msft_openai_credit",
        "source": "msft",
        "target": "openai",
        "flowType": "cloud_credit",
        "amount": 1.8,
        "desc": "2022: MS가 오픈AI에 클라우드 컴퓨팅 크레딧 및 전략적 인프라 비용으로 $1.8B 공급."
      },
      {
        "id": "openai_msft_spend",
        "source": "openai",
        "target": "msft",
        "flowType": "cloud_credit",
        "amount": 0.3,
        "desc": "2022: 오픈AI가 ChatGPT 및 API 호스팅을 위한 Azure 데이터센터 사용료로 MS에 $0.3B 지불."
      },
      {
        "id": "amzn_anthropic_equity",
        "source": "amzn",
        "target": "anthropic",
        "flowType": "equity_investment",
        "amount": 0,
        "desc": "2022: 기존 체결 투자 트랜치 이행 중; 해당 기간 신규 지분 납입 없음."
      },
      {
        "id": "anthropic_amzn_spend",
        "source": "anthropic",
        "target": "amzn",
        "flowType": "cloud_credit",
        "amount": 0.15,
        "desc": "2022: 앤트로픽이 Claude 모델 학습 및 Bedrock 서비스를 위해 AWS 인프라 비용 $0.15B 지출."
      },
      {
        "id": "goog_anthropic_equity",
        "source": "goog",
        "target": "anthropic",
        "flowType": "equity_investment",
        "amount": 0,
        "desc": "2022: 파트너십 약정 유지; 해당 기간 신규 지분 납입 없음."
      },
      {
        "id": "vc_coreweave_debt",
        "source": "vc_sovereign",
        "target": "coreweave",
        "flowType": "debt_collateral",
        "amount": 0,
        "desc": "2022: 기존 GPU 담보 부채 차입 집행 완료; 해당 기간 신규 부채 조달 없음."
      },
      {
        "id": "coreweave_nvda_gpu",
        "source": "coreweave",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 0.35,
        "desc": "2022: 코어위브가 엔비디아 최신 GPU에 $0.35B 대규모 구매 집행."
      },
      {
        "id": "nvda_coreweave_equity",
        "source": "nvda",
        "target": "coreweave",
        "flowType": "equity_investment",
        "amount": 0,
        "desc": "2022: 지분 관계 유지; 해당 기간 신규 지분 취득 없음."
      },
      {
        "id": "coreweave_vc_refinance",
        "source": "coreweave",
        "target": "vc_sovereign",
        "flowType": "debt_collateral",
        "amount": 0,
        "desc": "2022: 해당 기간 활성 거래 없음 (개시 전 또는 종료)."
      },
      {
        "id": "vc_openai_equity",
        "source": "vc_sovereign",
        "target": "openai",
        "flowType": "equity_investment",
        "amount": 0,
        "desc": "2022: 기존 지분 조달 자금 집행 중; 해당 기간 대규모 신규 벤처 지분 유치 없음."
      },
      {
        "id": "xai_nvda_gpu",
        "source": "xai",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 0,
        "desc": "2022: 해당 기간 활성 거래 없음 (개시 전 또는 종료)."
      },
      {
        "id": "skhynix_tsmc_foundry",
        "source": "skhynix",
        "target": "tsmc",
        "flowType": "gpu_purchase",
        "amount": 0,
        "desc": "2022: 해당 기간 활성 거래 없음 (개시 전 또는 종료)."
      },
      {
        "id": "market_openai_rev",
        "source": "end_market",
        "target": "openai",
        "flowType": "enterprise_revenue",
        "amount": 0.15,
        "desc": "2022: 기업 및 유료 사용자의 OpenAI 소프트웨어 및 API 실매출 $0.15B 달성."
      },
      {
        "id": "market_msft_rev",
        "source": "end_market",
        "target": "msft",
        "flowType": "enterprise_revenue",
        "amount": 0.4,
        "desc": "2022: M365 Copilot 및 Azure AI 기업 실매출 $0.4B 기록."
      },
      {
        "id": "market_anthropic_rev",
        "source": "end_market",
        "target": "anthropic",
        "flowType": "enterprise_revenue",
        "amount": 0.02,
        "desc": "2022: Claude 엔터프라이즈 API 토큰 소비 실매출 $0.02B 달성."
      },
      {
        "id": "market_deepseek_rev",
        "source": "end_market",
        "target": "deepseek",
        "flowType": "enterprise_revenue",
        "amount": 0,
        "desc": "2022: 해당 기간 활성 거래 없음 (개시 전 또는 종료)."
      }
    ]
  },
  {
    "periodId": "2023-Q1",
    "year": 2023,
    "quarter": 1,
    "label": "2023 Q1",
    "dateRange": "2023년 1월 ~ 3월",
    "title": "2023년 1분기: ChatGPT 폭발적 성장과 MS의 100억 달러 투자",
    "summary": "ChatGPT가 역사상 최단기간 1억 MAU를 돌파합니다. 마이크로소프트는 OpenAI에 100억 달러 규모의 파트너십을 발표(대부분 Azure 클라우드 크레딧)하며, 구글은 코드 레드를 발령하고 빅테크들은 A100/H100 GPU 확보 경쟁에 돌입합니다.",
    "macroMetrics": {
      "totalAiCapex": 25.6,
      "realEndUserRevenue": 0.8,
      "capexRevenueDeficit": 24.8,
      "circularRatio": 48,
      "annualizedCapexRunRate": 102.4
    },
    "nodes": [
      {
        "id": "msft",
        "name": "마이크로소프트",
        "category": "hyperscaler",
        "marketCap": 2150,
        "aiCapex": 6.8,
        "aiRevenue": 0.4,
        "isFormed": true,
        "isHighGrowth": true,
        "desc": "세계 최고 클라우드 기업, Azure 기반 OpenAI 독점 파트너십 및 자체 Maia AI 가속기 개발.",
        "initialX": -140,
        "initialY": -130
      },
      {
        "id": "goog",
        "name": "알파벳 / 구글",
        "category": "hyperscaler",
        "marketCap": 1320,
        "aiCapex": 6.3,
        "aiRevenue": 0.2,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "트랜스포머 아키텍처 창시자, 자체 TPU v4/v5/v6 가속기 및 제미나이(Gemini) 생태계 구축.",
        "initialX": -185,
        "initialY": 5
      },
      {
        "id": "amzn",
        "name": "아마존 / AWS",
        "category": "hyperscaler",
        "marketCap": 1050,
        "aiCapex": 6.5,
        "aiRevenue": 0.2,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "세계 1위 클라우드 AWS, 앤트로픽 핵심 투자사(40억 달러)이자 자체 Trainium2/Inferentia 가속기 개발.",
        "initialX": 140,
        "initialY": -130
      },
      {
        "id": "meta",
        "name": "메타 플랫폼스",
        "category": "hyperscaler",
        "marketCap": 540,
        "aiCapex": 6,
        "aiRevenue": 0.1,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "오픈소스 AI 생태계 주도(LLaMA 시리즈), 60만 개 이상의 GPU 클러스터 운용 및 MTIA 자체 반도체 개발.",
        "initialX": 185,
        "initialY": 5
      },
      {
        "id": "nvda",
        "name": "엔비디아",
        "category": "chipmaker",
        "marketCap": 680,
        "aiCapex": 0.6,
        "aiRevenue": 4.3,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "글로벌 AI GPU 독점(H100/B200/루빈) 및 CUDA 소프트웨어 생태계를 기반으로 75% 이상의 마진 향유.",
        "initialX": 0,
        "initialY": -10
      },
      {
        "id": "tsmc",
        "name": "TSMC",
        "category": "chipmaker",
        "marketCap": 460,
        "aiCapex": 9.9,
        "aiRevenue": 16.7,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "엔비디아, 애플, 브로드컴 등 전 세계 모든 선단 AI 가속기를 제조하는 독점적 파운드리 및 CoWoS 패키징 선도자.",
        "initialX": -130,
        "initialY": 190
      },
      {
        "id": "avgo",
        "name": "브로드컴",
        "category": "chipmaker",
        "marketCap": 260,
        "aiCapex": 0.2,
        "aiRevenue": 1.8,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "빅테크 맞춤형 AI ASIC(구글 TPU, 메타 MTIA) 및 초고속 AI 데이터센터 스위치/네트워킹 독점 기업.",
        "initialX": -215,
        "initialY": 115
      },
      {
        "id": "skhynix",
        "name": "SK하이닉스",
        "category": "semiconductor_supply",
        "marketCap": 55,
        "aiCapex": 1.8,
        "aiRevenue": 0.8,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "엔비디아에 HBM3/HBM3E를 사실상 독점 공급하며 AI 메모리 초격차를 달성한 글로벌 HBM 1위 기업.",
        "initialX": -20,
        "initialY": -210
      },
      {
        "id": "samsung",
        "name": "삼성전자",
        "category": "semiconductor_supply",
        "marketCap": 340,
        "aiCapex": 8.5,
        "aiRevenue": 1.2,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "세계 최대 메모리 반도체 제조사이자 12단 HBM3E 및 메모리-파운드리 턴키 솔루션을 보유한 종합 반도체 기업.",
        "initialX": 110,
        "initialY": -195
      },
      {
        "id": "asml",
        "name": "ASML",
        "category": "semiconductor_supply",
        "marketCap": 260,
        "aiCapex": 0.5,
        "aiRevenue": 7.2,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "3nm 및 2nm 선단 반도체 제조에 필수적인 EUV 및 High-NA 극자외선 노광 장비를 독점 공급하는 네덜란드 장비사.",
        "initialX": 20,
        "initialY": 235
      },
      {
        "id": "openai",
        "name": "오픈AI",
        "category": "ai_lab",
        "marketCap": 29,
        "aiCapex": 0.4,
        "aiRevenue": 0.2,
        "isFormed": true,
        "isHighGrowth": true,
        "desc": "ChatGPT, GPT-4, o1 추론 모델을 개발한 프론티어 AI 선도 기업이자 1,000억 달러 스타게이트 프로젝트 파트너.",
        "initialX": -60,
        "initialY": -55
      },
      {
        "id": "anthropic",
        "name": "앤트로픽",
        "category": "ai_lab",
        "marketCap": 4,
        "aiCapex": 0.1,
        "aiRevenue": 0.02,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "Claude 3.5 및 컴퓨터 제어 AI를 개발한 프론티어 연구소로, 아마존과 구글로부터 대규모 자본 유치.",
        "initialX": 55,
        "initialY": -55
      },
      {
        "id": "xai",
        "name": "xAI",
        "category": "ai_lab",
        "marketCap": 0,
        "aiCapex": 0,
        "aiRevenue": 0,
        "isFormed": false,
        "isHighGrowth": false,
        "desc": "일론 머스크가 설립한 프론티어 랩으로, 멤피스에 10만 개 규모의 세계 최대 수랭식 슈퍼클러스터 ‘콜로서스’ 운용.",
        "initialX": 75,
        "initialY": 45
      },
      {
        "id": "deepseek",
        "name": "딥시크 (DeepSeek)",
        "category": "ai_lab",
        "marketCap": 0,
        "aiCapex": 0,
        "aiRevenue": 0,
        "isFormed": false,
        "isHighGrowth": false,
        "desc": "극단적 알고리즘 효율화와 저비용 오픈 추론 모델(DeepSeek-R1)로 무차별적 고비용 Capex 경쟁 구도를 뒤흔든 연구소.",
        "initialX": -75,
        "initialY": 45
      },
      {
        "id": "coreweave",
        "name": "코어위브",
        "category": "neocloud",
        "marketCap": 2,
        "aiCapex": 0.2,
        "aiRevenue": 0.05,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "GPU 자체를 담보로 사모펀드로부터 수십억 달러의 부채를 조달해 GPU를 재구매하는 네오클라우드 벤더 파이낸싱의 상징.",
        "initialX": 0,
        "initialY": 85
      },
      {
        "id": "vc_sovereign",
        "name": "벤처캐피탈 & 국부펀드",
        "category": "venture_capital",
        "marketCap": 500,
        "aiCapex": 0,
        "aiRevenue": 0,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "세쿼이아, 소프트뱅크, a16z 및 중동 국부펀드(MGX, PIF) 등 AI 메가 라운드 및 사모 부채를 공급하는 자본 풀.",
        "initialX": 220,
        "initialY": 155
      },
      {
        "id": "end_market",
        "name": "실제 기업 & 최종 사용자 시장",
        "category": "end_market",
        "marketCap": 1200,
        "aiCapex": 0,
        "aiRevenue": 0.8,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "실제 기업 IT 예산, 개발자 API 사용료, 유료 소비자 구독 등 AI 생태계의 유일한 외부 실질 현금 유입원.",
        "initialX": -230,
        "initialY": -170
      }
    ],
    "edges": [
      {
        "id": "msft_nvda_gpu",
        "source": "msft",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 2.8,
        "desc": "2023 Q1: Azure AI 인프라 확충을 위해 엔비디아 가속기 서버에 $2.8B 집행."
      },
      {
        "id": "goog_nvda_gpu",
        "source": "goog",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 2.2,
        "desc": "2023 Q1: 구글 클라우드(GCP) AI 하이퍼컴퓨터 확장을 위해 엔비디아 가속기에 $2.2B 발주."
      },
      {
        "id": "amzn_nvda_gpu",
        "source": "amzn",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 2.1,
        "desc": "2023 Q1: AWS UltraCluster 확장 및 EC2 인스턴스를 위해 엔비디아에 $2.1B 지출."
      },
      {
        "id": "meta_nvda_gpu",
        "source": "meta",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 2,
        "desc": "2023 Q1: LLaMA 모델 학습 및 메타 AI 데이터센터를 위해 엔비디아 GPU에 $2B 구매 집행."
      },
      {
        "id": "nvda_tsmc_gpu",
        "source": "nvda",
        "target": "tsmc",
        "flowType": "gpu_purchase",
        "amount": 2.2,
        "desc": "2023 Q1: 엔비디아가 TSMC의 선단 노드 웨이퍼 및 CoWoS 어드밴스드 패키징에 $2.2B 발주."
      },
      {
        "id": "nvda_skhynix_hbm",
        "source": "nvda",
        "target": "skhynix",
        "flowType": "hbm_purchase",
        "amount": 0.8,
        "desc": "2023 Q1: 엔비디아가 SK하이닉스의 고대역폭메모리(HBM) 공급에 $0.8B 지출."
      },
      {
        "id": "nvda_samsung_hbm",
        "source": "nvda",
        "target": "samsung",
        "flowType": "hbm_purchase",
        "amount": 0.3,
        "desc": "2023 Q1: 엔비디아가 삼성전자로부터 HBM 및 초고속 DRAM/SSD에 $0.3B 조달."
      },
      {
        "id": "tsmc_asml_equip",
        "source": "tsmc",
        "target": "asml",
        "flowType": "equipment_purchase",
        "amount": 1.5,
        "desc": "2023 Q1: TSMC가 선단 공정 라인 증설을 위해 ASML EUV/High-NA 장비에 $1.5B 지출."
      },
      {
        "id": "samsung_asml_equip",
        "source": "samsung",
        "target": "asml",
        "flowType": "equipment_purchase",
        "amount": 1.1,
        "desc": "2023 Q1: 삼성전자가 선단 DRAM 및 파운드리 확충을 위해 ASML 장비에 $1.1B 발주."
      },
      {
        "id": "skhynix_asml_equip",
        "source": "skhynix",
        "target": "asml",
        "flowType": "equipment_purchase",
        "amount": 0.6,
        "desc": "2023 Q1: SK하이닉스가 선단 HBM DRAM 양산 강화를 위해 ASML EUV 장비에 $0.6B 도입."
      },
      {
        "id": "goog_avgo_gpu",
        "source": "goog",
        "target": "avgo",
        "flowType": "gpu_purchase",
        "amount": 0.7,
        "desc": "2023 Q1: 구글이 맞춤형 TPU ASIC 설계 및 네트워킹을 위해 브로드컴에 $0.7B 지출."
      },
      {
        "id": "meta_avgo_gpu",
        "source": "meta",
        "target": "avgo",
        "flowType": "gpu_purchase",
        "amount": 0,
        "desc": "2023 Q1: 해당 기간 활성 거래 없음 (개시 전 또는 종료)."
      },
      {
        "id": "msft_openai_credit",
        "source": "msft",
        "target": "openai",
        "flowType": "cloud_credit",
        "amount": 2.5,
        "desc": "2023 Q1: MS가 오픈AI에 클라우드 컴퓨팅 크레딧 및 전략적 인프라 비용으로 $2.5B 공급."
      },
      {
        "id": "openai_msft_spend",
        "source": "openai",
        "target": "msft",
        "flowType": "cloud_credit",
        "amount": 0.35,
        "desc": "2023 Q1: 오픈AI가 ChatGPT 및 API 호스팅을 위한 Azure 데이터센터 사용료로 MS에 $0.35B 지불."
      },
      {
        "id": "amzn_anthropic_equity",
        "source": "amzn",
        "target": "anthropic",
        "flowType": "equity_investment",
        "amount": 0,
        "desc": "2023 Q1: 기존 체결 투자 트랜치 이행 중; 해당 기간 신규 지분 납입 없음."
      },
      {
        "id": "anthropic_amzn_spend",
        "source": "anthropic",
        "target": "amzn",
        "flowType": "cloud_credit",
        "amount": 0,
        "desc": "2023 Q1: 해당 기간 활성 거래 없음 (개시 전 또는 종료)."
      },
      {
        "id": "goog_anthropic_equity",
        "source": "goog",
        "target": "anthropic",
        "flowType": "equity_investment",
        "amount": 0,
        "desc": "2023 Q1: 파트너십 약정 유지; 해당 기간 신규 지분 납입 없음."
      },
      {
        "id": "vc_coreweave_debt",
        "source": "vc_sovereign",
        "target": "coreweave",
        "flowType": "debt_collateral",
        "amount": 0,
        "desc": "2023 Q1: 기존 GPU 담보 부채 차입 집행 완료; 해당 기간 신규 부채 조달 없음."
      },
      {
        "id": "coreweave_nvda_gpu",
        "source": "coreweave",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 0,
        "desc": "2023 Q1: 해당 기간 활성 거래 없음 (개시 전 또는 종료)."
      },
      {
        "id": "nvda_coreweave_equity",
        "source": "nvda",
        "target": "coreweave",
        "flowType": "equity_investment",
        "amount": 0,
        "desc": "2023 Q1: 지분 관계 유지; 해당 기간 신규 지분 취득 없음."
      },
      {
        "id": "coreweave_vc_refinance",
        "source": "coreweave",
        "target": "vc_sovereign",
        "flowType": "debt_collateral",
        "amount": 0,
        "desc": "2023 Q1: 해당 기간 활성 거래 없음 (개시 전 또는 종료)."
      },
      {
        "id": "vc_openai_equity",
        "source": "vc_sovereign",
        "target": "openai",
        "flowType": "equity_investment",
        "amount": 0,
        "desc": "2023 Q1: 기존 지분 조달 자금 집행 중; 해당 기간 대규모 신규 벤처 지분 유치 없음."
      },
      {
        "id": "xai_nvda_gpu",
        "source": "xai",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 0,
        "desc": "2023 Q1: 해당 기간 활성 거래 없음 (개시 전 또는 종료)."
      },
      {
        "id": "skhynix_tsmc_foundry",
        "source": "skhynix",
        "target": "tsmc",
        "flowType": "gpu_purchase",
        "amount": 0,
        "desc": "2023 Q1: 해당 기간 활성 거래 없음 (개시 전 또는 종료)."
      },
      {
        "id": "market_openai_rev",
        "source": "end_market",
        "target": "openai",
        "flowType": "enterprise_revenue",
        "amount": 0.2,
        "desc": "2023 Q1: 기업 및 유료 사용자의 OpenAI 소프트웨어 및 API 실매출 $0.2B 달성."
      },
      {
        "id": "market_msft_rev",
        "source": "end_market",
        "target": "msft",
        "flowType": "enterprise_revenue",
        "amount": 0.6,
        "desc": "2023 Q1: M365 Copilot 및 Azure AI 기업 실매출 $0.6B 기록."
      },
      {
        "id": "market_anthropic_rev",
        "source": "end_market",
        "target": "anthropic",
        "flowType": "enterprise_revenue",
        "amount": 0,
        "desc": "2023 Q1: 해당 기간 활성 거래 없음 (개시 전 또는 종료)."
      },
      {
        "id": "market_deepseek_rev",
        "source": "end_market",
        "target": "deepseek",
        "flowType": "enterprise_revenue",
        "amount": 0,
        "desc": "2023 Q1: 해당 기간 활성 거래 없음 (개시 전 또는 종료)."
      }
    ]
  },
  {
    "periodId": "2023-Q2",
    "year": 2023,
    "quarter": 2,
    "label": "2023 Q2",
    "dateRange": "2023년 4월 ~ 6월",
    "title": "2023년 2분기: 엔비디아의 어닝 서프라이즈와 H100 품귀 사태",
    "summary": "엔비디아가 데이터센터 수요 폭발로 월가 컨센서스를 64% 상회하는 역사적인 실적 가이던스를 제시합니다. H100 대기 기간이 40주를 넘어서며, TSMC의 CoWoS 어드밴스드 패키징이 전 세계 AI 생태계의 최대 병목으로 부상합니다.",
    "macroMetrics": {
      "totalAiCapex": 27.9,
      "realEndUserRevenue": 1.2,
      "capexRevenueDeficit": 26.7,
      "circularRatio": 54,
      "annualizedCapexRunRate": 111.6
    },
    "nodes": [
      {
        "id": "msft",
        "name": "마이크로소프트",
        "category": "hyperscaler",
        "marketCap": 2480,
        "aiCapex": 8.2,
        "aiRevenue": 0.6,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "세계 최고 클라우드 기업, Azure 기반 OpenAI 독점 파트너십 및 자체 Maia AI 가속기 개발.",
        "initialX": -140,
        "initialY": -130
      },
      {
        "id": "goog",
        "name": "알파벳 / 구글",
        "category": "hyperscaler",
        "marketCap": 1510,
        "aiCapex": 6.9,
        "aiRevenue": 0.35,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "트랜스포머 아키텍처 창시자, 자체 TPU v4/v5/v6 가속기 및 제미나이(Gemini) 생태계 구축.",
        "initialX": -185,
        "initialY": 5
      },
      {
        "id": "amzn",
        "name": "아마존 / AWS",
        "category": "hyperscaler",
        "marketCap": 1320,
        "aiCapex": 7.4,
        "aiRevenue": 0.3,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "세계 1위 클라우드 AWS, 앤트로픽 핵심 투자사(40억 달러)이자 자체 Trainium2/Inferentia 가속기 개발.",
        "initialX": 140,
        "initialY": -130
      },
      {
        "id": "meta",
        "name": "메타 플랫폼스",
        "category": "hyperscaler",
        "marketCap": 740,
        "aiCapex": 6.4,
        "aiRevenue": 0.15,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "오픈소스 AI 생태계 주도(LLaMA 시리즈), 60만 개 이상의 GPU 클러스터 운용 및 MTIA 자체 반도체 개발.",
        "initialX": 185,
        "initialY": 5
      },
      {
        "id": "nvda",
        "name": "엔비디아",
        "category": "chipmaker",
        "marketCap": 1050,
        "aiCapex": 0.8,
        "aiRevenue": 10.3,
        "isFormed": true,
        "isHighGrowth": true,
        "desc": "글로벌 AI GPU 독점(H100/B200/루빈) 및 CUDA 소프트웨어 생태계를 기반으로 75% 이상의 마진 향유.",
        "initialX": 0,
        "initialY": -10
      },
      {
        "id": "tsmc",
        "name": "TSMC",
        "category": "chipmaker",
        "marketCap": 520,
        "aiCapex": 8.2,
        "aiRevenue": 15.7,
        "isFormed": true,
        "isHighGrowth": true,
        "desc": "엔비디아, 애플, 브로드컴 등 전 세계 모든 선단 AI 가속기를 제조하는 독점적 파운드리 및 CoWoS 패키징 선도자.",
        "initialX": -130,
        "initialY": 190
      },
      {
        "id": "avgo",
        "name": "브로드컴",
        "category": "chipmaker",
        "marketCap": 350,
        "aiCapex": 0.25,
        "aiRevenue": 2.1,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "빅테크 맞춤형 AI ASIC(구글 TPU, 메타 MTIA) 및 초고속 AI 데이터센터 스위치/네트워킹 독점 기업.",
        "initialX": -215,
        "initialY": 115
      },
      {
        "id": "skhynix",
        "name": "SK하이닉스",
        "category": "semiconductor_supply",
        "marketCap": 65,
        "aiCapex": 1.6,
        "aiRevenue": 1.3,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "엔비디아에 HBM3/HBM3E를 사실상 독점 공급하며 AI 메모리 초격차를 달성한 글로벌 HBM 1위 기업.",
        "initialX": -20,
        "initialY": -210
      },
      {
        "id": "samsung",
        "name": "삼성전자",
        "category": "semiconductor_supply",
        "marketCap": 360,
        "aiCapex": 8.9,
        "aiRevenue": 1.5,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "세계 최대 메모리 반도체 제조사이자 12단 HBM3E 및 메모리-파운드리 턴키 솔루션을 보유한 종합 반도체 기업.",
        "initialX": 110,
        "initialY": -195
      },
      {
        "id": "asml",
        "name": "ASML",
        "category": "semiconductor_supply",
        "marketCap": 290,
        "aiCapex": 0.5,
        "aiRevenue": 7.5,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "3nm 및 2nm 선단 반도체 제조에 필수적인 EUV 및 High-NA 극자외선 노광 장비를 독점 공급하는 네덜란드 장비사.",
        "initialX": 20,
        "initialY": 235
      },
      {
        "id": "openai",
        "name": "오픈AI",
        "category": "ai_lab",
        "marketCap": 45,
        "aiCapex": 0.6,
        "aiRevenue": 0.35,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "ChatGPT, GPT-4, o1 추론 모델을 개발한 프론티어 AI 선도 기업이자 1,000억 달러 스타게이트 프로젝트 파트너.",
        "initialX": -60,
        "initialY": -55
      },
      {
        "id": "anthropic",
        "name": "앤트로픽",
        "category": "ai_lab",
        "marketCap": 8,
        "aiCapex": 0.2,
        "aiRevenue": 0.05,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "Claude 3.5 및 컴퓨터 제어 AI를 개발한 프론티어 연구소로, 아마존과 구글로부터 대규모 자본 유치.",
        "initialX": 55,
        "initialY": -55
      },
      {
        "id": "xai",
        "name": "xAI",
        "category": "ai_lab",
        "marketCap": 0,
        "aiCapex": 0,
        "aiRevenue": 0,
        "isFormed": false,
        "isHighGrowth": false,
        "desc": "일론 머스크가 설립한 프론티어 랩으로, 멤피스에 10만 개 규모의 세계 최대 수랭식 슈퍼클러스터 ‘콜로서스’ 운용.",
        "initialX": 75,
        "initialY": 45
      },
      {
        "id": "deepseek",
        "name": "딥시크 (DeepSeek)",
        "category": "ai_lab",
        "marketCap": 0,
        "aiCapex": 0,
        "aiRevenue": 0,
        "isFormed": false,
        "isHighGrowth": false,
        "desc": "극단적 알고리즘 효율화와 저비용 오픈 추론 모델(DeepSeek-R1)로 무차별적 고비용 Capex 경쟁 구도를 뒤흔든 연구소.",
        "initialX": -75,
        "initialY": 45
      },
      {
        "id": "coreweave",
        "name": "코어위브",
        "category": "neocloud",
        "marketCap": 3.5,
        "aiCapex": 0.5,
        "aiRevenue": 0.1,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "GPU 자체를 담보로 사모펀드로부터 수십억 달러의 부채를 조달해 GPU를 재구매하는 네오클라우드 벤더 파이낸싱의 상징.",
        "initialX": 0,
        "initialY": 85
      },
      {
        "id": "vc_sovereign",
        "name": "벤처캐피탈 & 국부펀드",
        "category": "venture_capital",
        "marketCap": 500,
        "aiCapex": 0,
        "aiRevenue": 0,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "세쿼이아, 소프트뱅크, a16z 및 중동 국부펀드(MGX, PIF) 등 AI 메가 라운드 및 사모 부채를 공급하는 자본 풀.",
        "initialX": 220,
        "initialY": 155
      },
      {
        "id": "end_market",
        "name": "실제 기업 & 최종 사용자 시장",
        "category": "end_market",
        "marketCap": 1200,
        "aiCapex": 0,
        "aiRevenue": 1.2,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "실제 기업 IT 예산, 개발자 API 사용료, 유료 소비자 구독 등 AI 생태계의 유일한 외부 실질 현금 유입원.",
        "initialX": -230,
        "initialY": -170
      }
    ],
    "edges": [
      {
        "id": "msft_nvda_gpu",
        "source": "msft",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 3.6,
        "desc": "2023 Q2: Azure AI 인프라 확충을 위해 엔비디아 가속기 서버에 $3.6B 집행."
      },
      {
        "id": "goog_nvda_gpu",
        "source": "goog",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 2.6,
        "desc": "2023 Q2: 구글 클라우드(GCP) AI 하이퍼컴퓨터 확장을 위해 엔비디아 가속기에 $2.6B 발주."
      },
      {
        "id": "amzn_nvda_gpu",
        "source": "amzn",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 2.8,
        "desc": "2023 Q2: AWS UltraCluster 확장 및 EC2 인스턴스를 위해 엔비디아에 $2.8B 지출."
      },
      {
        "id": "meta_nvda_gpu",
        "source": "meta",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 2.5,
        "desc": "2023 Q2: LLaMA 모델 학습 및 메타 AI 데이터센터를 위해 엔비디아 GPU에 $2.5B 구매 집행."
      },
      {
        "id": "nvda_tsmc_gpu",
        "source": "nvda",
        "target": "tsmc",
        "flowType": "gpu_purchase",
        "amount": 2.8,
        "desc": "2023 Q2: 엔비디아가 TSMC의 선단 노드 웨이퍼 및 CoWoS 어드밴스드 패키징에 $2.8B 발주."
      },
      {
        "id": "nvda_skhynix_hbm",
        "source": "nvda",
        "target": "skhynix",
        "flowType": "hbm_purchase",
        "amount": 1.2,
        "desc": "2023 Q2: 엔비디아가 SK하이닉스의 고대역폭메모리(HBM) 공급에 $1.2B 지출."
      },
      {
        "id": "nvda_samsung_hbm",
        "source": "nvda",
        "target": "samsung",
        "flowType": "hbm_purchase",
        "amount": 0.4,
        "desc": "2023 Q2: 엔비디아가 삼성전자로부터 HBM 및 초고속 DRAM/SSD에 $0.4B 조달."
      },
      {
        "id": "tsmc_asml_equip",
        "source": "tsmc",
        "target": "asml",
        "flowType": "equipment_purchase",
        "amount": 1.6,
        "desc": "2023 Q2: TSMC가 선단 공정 라인 증설을 위해 ASML EUV/High-NA 장비에 $1.6B 지출."
      },
      {
        "id": "samsung_asml_equip",
        "source": "samsung",
        "target": "asml",
        "flowType": "equipment_purchase",
        "amount": 1.2,
        "desc": "2023 Q2: 삼성전자가 선단 DRAM 및 파운드리 확충을 위해 ASML 장비에 $1.2B 발주."
      },
      {
        "id": "skhynix_asml_equip",
        "source": "skhynix",
        "target": "asml",
        "flowType": "equipment_purchase",
        "amount": 0.7,
        "desc": "2023 Q2: SK하이닉스가 선단 HBM DRAM 양산 강화를 위해 ASML EUV 장비에 $0.7B 도입."
      },
      {
        "id": "goog_avgo_gpu",
        "source": "goog",
        "target": "avgo",
        "flowType": "gpu_purchase",
        "amount": 0.8,
        "desc": "2023 Q2: 구글이 맞춤형 TPU ASIC 설계 및 네트워킹을 위해 브로드컴에 $0.8B 지출."
      },
      {
        "id": "meta_avgo_gpu",
        "source": "meta",
        "target": "avgo",
        "flowType": "gpu_purchase",
        "amount": 0.5,
        "desc": "2023 Q2: 메타가 자체 추론/학습 가속기 MTIA 설계 및 네트워킹을 위해 브로드컴에 $0.5B 지출."
      },
      {
        "id": "msft_openai_credit",
        "source": "msft",
        "target": "openai",
        "flowType": "cloud_credit",
        "amount": 2.2,
        "desc": "2023 Q2: MS가 오픈AI에 클라우드 컴퓨팅 크레딧 및 전략적 인프라 비용으로 $2.2B 공급."
      },
      {
        "id": "openai_msft_spend",
        "source": "openai",
        "target": "msft",
        "flowType": "cloud_credit",
        "amount": 0.5,
        "desc": "2023 Q2: 오픈AI가 ChatGPT 및 API 호스팅을 위한 Azure 데이터센터 사용료로 MS에 $0.5B 지불."
      },
      {
        "id": "amzn_anthropic_equity",
        "source": "amzn",
        "target": "anthropic",
        "flowType": "equity_investment",
        "amount": 0,
        "desc": "2023 Q2: 기존 체결 투자 트랜치 이행 중; 해당 기간 신규 지분 납입 없음."
      },
      {
        "id": "anthropic_amzn_spend",
        "source": "anthropic",
        "target": "amzn",
        "flowType": "cloud_credit",
        "amount": 0,
        "desc": "2023 Q2: 해당 기간 활성 거래 없음 (개시 전 또는 종료)."
      },
      {
        "id": "goog_anthropic_equity",
        "source": "goog",
        "target": "anthropic",
        "flowType": "equity_investment",
        "amount": 0,
        "desc": "2023 Q2: 파트너십 약정 유지; 해당 기간 신규 지분 납입 없음."
      },
      {
        "id": "vc_coreweave_debt",
        "source": "vc_sovereign",
        "target": "coreweave",
        "flowType": "debt_collateral",
        "amount": 0,
        "desc": "2023 Q2: 기존 GPU 담보 부채 차입 집행 완료; 해당 기간 신규 부채 조달 없음."
      },
      {
        "id": "coreweave_nvda_gpu",
        "source": "coreweave",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 0.4,
        "desc": "2023 Q2: 코어위브가 엔비디아 최신 GPU에 $0.4B 대규모 구매 집행."
      },
      {
        "id": "nvda_coreweave_equity",
        "source": "nvda",
        "target": "coreweave",
        "flowType": "equity_investment",
        "amount": 0.1,
        "desc": "2023 Q2: 엔비디아가 핵심 네오클라우드 고객사인 코어위브에 $0.1B 전략적 지분 투자."
      },
      {
        "id": "coreweave_vc_refinance",
        "source": "coreweave",
        "target": "vc_sovereign",
        "flowType": "debt_collateral",
        "amount": 0,
        "desc": "2023 Q2: 해당 기간 활성 거래 없음 (개시 전 또는 종료)."
      },
      {
        "id": "vc_openai_equity",
        "source": "vc_sovereign",
        "target": "openai",
        "flowType": "equity_investment",
        "amount": 0,
        "desc": "2023 Q2: 기존 지분 조달 자금 집행 중; 해당 기간 대규모 신규 벤처 지분 유치 없음."
      },
      {
        "id": "xai_nvda_gpu",
        "source": "xai",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 0,
        "desc": "2023 Q2: 해당 기간 활성 거래 없음 (개시 전 또는 종료)."
      },
      {
        "id": "skhynix_tsmc_foundry",
        "source": "skhynix",
        "target": "tsmc",
        "flowType": "gpu_purchase",
        "amount": 0,
        "desc": "2023 Q2: 해당 기간 활성 거래 없음 (개시 전 또는 종료)."
      },
      {
        "id": "market_openai_rev",
        "source": "end_market",
        "target": "openai",
        "flowType": "enterprise_revenue",
        "amount": 0.35,
        "desc": "2023 Q2: 기업 및 유료 사용자의 OpenAI 소프트웨어 및 API 실매출 $0.35B 달성."
      },
      {
        "id": "market_msft_rev",
        "source": "end_market",
        "target": "msft",
        "flowType": "enterprise_revenue",
        "amount": 0.75,
        "desc": "2023 Q2: M365 Copilot 및 Azure AI 기업 실매출 $0.75B 기록."
      },
      {
        "id": "market_anthropic_rev",
        "source": "end_market",
        "target": "anthropic",
        "flowType": "enterprise_revenue",
        "amount": 0,
        "desc": "2023 Q2: 해당 기간 활성 거래 없음 (개시 전 또는 종료)."
      },
      {
        "id": "market_deepseek_rev",
        "source": "end_market",
        "target": "deepseek",
        "flowType": "enterprise_revenue",
        "amount": 0,
        "desc": "2023 Q2: 해당 기간 활성 거래 없음 (개시 전 또는 종료)."
      }
    ]
  },
  {
    "periodId": "2023-Q3",
    "year": 2023,
    "quarter": 3,
    "label": "2023 Q3",
    "dateRange": "2023년 7월 ~ 9월",
    "title": "2023년 3분기: GPU 담보 부채의 태동과 아마존-앤트로픽 동맹",
    "summary": "코어위브가 엔비디아 H100 GPU 자체를 담보로 블랙스톤과 마그네타로부터 23억 달러의 부채를 조달합니다. 아마존은 앤트로픽에 최대 40억 달러 투자를 발표하며 AWS 독점 클라우드 계약을 체결합니다. 자금 순환 고리가 본격화됩니다.",
    "macroMetrics": {
      "totalAiCapex": 30.6,
      "realEndUserRevenue": 1.6,
      "capexRevenueDeficit": 29,
      "circularRatio": 59,
      "annualizedCapexRunRate": 122.4
    },
    "nodes": [
      {
        "id": "msft",
        "name": "마이크로소프트",
        "category": "hyperscaler",
        "marketCap": 2350,
        "aiCapex": 8.9,
        "aiRevenue": 0.7,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "세계 최고 클라우드 기업, Azure 기반 OpenAI 독점 파트너십 및 자체 Maia AI 가속기 개발.",
        "initialX": -140,
        "initialY": -130
      },
      {
        "id": "goog",
        "name": "알파벳 / 구글",
        "category": "hyperscaler",
        "marketCap": 1650,
        "aiCapex": 8.1,
        "aiRevenue": 0.45,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "트랜스포머 아키텍처 창시자, 자체 TPU v4/v5/v6 가속기 및 제미나이(Gemini) 생태계 구축.",
        "initialX": -185,
        "initialY": 5
      },
      {
        "id": "amzn",
        "name": "아마존 / AWS",
        "category": "hyperscaler",
        "marketCap": 1340,
        "aiCapex": 8,
        "aiRevenue": 0.35,
        "isFormed": true,
        "isHighGrowth": true,
        "desc": "세계 1위 클라우드 AWS, 앤트로픽 핵심 투자사(40억 달러)이자 자체 Trainium2/Inferentia 가속기 개발.",
        "initialX": 140,
        "initialY": -130
      },
      {
        "id": "meta",
        "name": "메타 플랫폼스",
        "category": "hyperscaler",
        "marketCap": 780,
        "aiCapex": 6.8,
        "aiRevenue": 0.2,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "오픈소스 AI 생태계 주도(LLaMA 시리즈), 60만 개 이상의 GPU 클러스터 운용 및 MTIA 자체 반도체 개발.",
        "initialX": 185,
        "initialY": 5
      },
      {
        "id": "nvda",
        "name": "엔비디아",
        "category": "chipmaker",
        "marketCap": 1100,
        "aiCapex": 0.9,
        "aiRevenue": 14.5,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "글로벌 AI GPU 독점(H100/B200/루빈) 및 CUDA 소프트웨어 생태계를 기반으로 75% 이상의 마진 향유.",
        "initialX": 0,
        "initialY": -10
      },
      {
        "id": "tsmc",
        "name": "TSMC",
        "category": "chipmaker",
        "marketCap": 480,
        "aiCapex": 7.1,
        "aiRevenue": 17.3,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "엔비디아, 애플, 브로드컴 등 전 세계 모든 선단 AI 가속기를 제조하는 독점적 파운드리 및 CoWoS 패키징 선도자.",
        "initialX": -130,
        "initialY": 190
      },
      {
        "id": "avgo",
        "name": "브로드컴",
        "category": "chipmaker",
        "marketCap": 340,
        "aiCapex": 0.3,
        "aiRevenue": 2.3,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "빅테크 맞춤형 AI ASIC(구글 TPU, 메타 MTIA) 및 초고속 AI 데이터센터 스위치/네트워킹 독점 기업.",
        "initialX": -215,
        "initialY": 115
      },
      {
        "id": "skhynix",
        "name": "SK하이닉스",
        "category": "semiconductor_supply",
        "marketCap": 60,
        "aiCapex": 1.7,
        "aiRevenue": 1.7,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "엔비디아에 HBM3/HBM3E를 사실상 독점 공급하며 AI 메모리 초격차를 달성한 글로벌 HBM 1위 기업.",
        "initialX": -20,
        "initialY": -210
      },
      {
        "id": "samsung",
        "name": "삼성전자",
        "category": "semiconductor_supply",
        "marketCap": 345,
        "aiCapex": 8.8,
        "aiRevenue": 1.7,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "세계 최대 메모리 반도체 제조사이자 12단 HBM3E 및 메모리-파운드리 턴키 솔루션을 보유한 종합 반도체 기업.",
        "initialX": 110,
        "initialY": -195
      },
      {
        "id": "asml",
        "name": "ASML",
        "category": "semiconductor_supply",
        "marketCap": 240,
        "aiCapex": 0.6,
        "aiRevenue": 7.3,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "3nm 및 2nm 선단 반도체 제조에 필수적인 EUV 및 High-NA 극자외선 노광 장비를 독점 공급하는 네덜란드 장비사.",
        "initialX": 20,
        "initialY": 235
      },
      {
        "id": "openai",
        "name": "오픈AI",
        "category": "ai_lab",
        "marketCap": 65,
        "aiCapex": 0.7,
        "aiRevenue": 0.5,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "ChatGPT, GPT-4, o1 추론 모델을 개발한 프론티어 AI 선도 기업이자 1,000억 달러 스타게이트 프로젝트 파트너.",
        "initialX": -60,
        "initialY": -55
      },
      {
        "id": "anthropic",
        "name": "앤트로픽",
        "category": "ai_lab",
        "marketCap": 14,
        "aiCapex": 0.3,
        "aiRevenue": 0.08,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "Claude 3.5 및 컴퓨터 제어 AI를 개발한 프론티어 연구소로, 아마존과 구글로부터 대규모 자본 유치.",
        "initialX": 55,
        "initialY": -55
      },
      {
        "id": "xai",
        "name": "xAI",
        "category": "ai_lab",
        "marketCap": 14,
        "aiCapex": 0.2,
        "aiRevenue": 0.01,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "일론 머스크가 설립한 프론티어 랩으로, 멤피스에 10만 개 규모의 세계 최대 수랭식 슈퍼클러스터 ‘콜로서스’ 운용.",
        "initialX": 75,
        "initialY": 45
      },
      {
        "id": "deepseek",
        "name": "딥시크 (DeepSeek)",
        "category": "ai_lab",
        "marketCap": 3,
        "aiCapex": 0.1,
        "aiRevenue": 0.03,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "극단적 알고리즘 효율화와 저비용 오픈 추론 모델(DeepSeek-R1)로 무차별적 고비용 Capex 경쟁 구도를 뒤흔든 연구소.",
        "initialX": -75,
        "initialY": 45
      },
      {
        "id": "coreweave",
        "name": "코어위브",
        "category": "neocloud",
        "marketCap": 5.5,
        "aiCapex": 1.2,
        "aiRevenue": 0.15,
        "isFormed": true,
        "isHighGrowth": true,
        "desc": "GPU 자체를 담보로 사모펀드로부터 수십억 달러의 부채를 조달해 GPU를 재구매하는 네오클라우드 벤더 파이낸싱의 상징.",
        "initialX": 0,
        "initialY": 85
      },
      {
        "id": "vc_sovereign",
        "name": "벤처캐피탈 & 국부펀드",
        "category": "venture_capital",
        "marketCap": 500,
        "aiCapex": 0,
        "aiRevenue": 0,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "세쿼이아, 소프트뱅크, a16z 및 중동 국부펀드(MGX, PIF) 등 AI 메가 라운드 및 사모 부채를 공급하는 자본 풀.",
        "initialX": 220,
        "initialY": 155
      },
      {
        "id": "end_market",
        "name": "실제 기업 & 최종 사용자 시장",
        "category": "end_market",
        "marketCap": 1200,
        "aiCapex": 0,
        "aiRevenue": 1.6,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "실제 기업 IT 예산, 개발자 API 사용료, 유료 소비자 구독 등 AI 생태계의 유일한 외부 실질 현금 유입원.",
        "initialX": -230,
        "initialY": -170
      }
    ],
    "edges": [
      {
        "id": "msft_nvda_gpu",
        "source": "msft",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 3.8,
        "desc": "2023 Q3: Azure AI 인프라 확충을 위해 엔비디아 가속기 서버에 $3.8B 집행."
      },
      {
        "id": "goog_nvda_gpu",
        "source": "goog",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 2.8,
        "desc": "2023 Q3: 구글 클라우드(GCP) AI 하이퍼컴퓨터 확장을 위해 엔비디아 가속기에 $2.8B 발주."
      },
      {
        "id": "amzn_nvda_gpu",
        "source": "amzn",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 3,
        "desc": "2023 Q3: AWS UltraCluster 확장 및 EC2 인스턴스를 위해 엔비디아에 $3B 지출."
      },
      {
        "id": "meta_nvda_gpu",
        "source": "meta",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 2.7,
        "desc": "2023 Q3: LLaMA 모델 학습 및 메타 AI 데이터센터를 위해 엔비디아 GPU에 $2.7B 구매 집행."
      },
      {
        "id": "nvda_tsmc_gpu",
        "source": "nvda",
        "target": "tsmc",
        "flowType": "gpu_purchase",
        "amount": 3.2,
        "desc": "2023 Q3: 엔비디아가 TSMC의 선단 노드 웨이퍼 및 CoWoS 어드밴스드 패키징에 $3.2B 발주."
      },
      {
        "id": "nvda_skhynix_hbm",
        "source": "nvda",
        "target": "skhynix",
        "flowType": "hbm_purchase",
        "amount": 1.6,
        "desc": "2023 Q3: 엔비디아가 SK하이닉스의 고대역폭메모리(HBM) 공급에 $1.6B 지출."
      },
      {
        "id": "nvda_samsung_hbm",
        "source": "nvda",
        "target": "samsung",
        "flowType": "hbm_purchase",
        "amount": 0.5,
        "desc": "2023 Q3: 엔비디아가 삼성전자로부터 HBM 및 초고속 DRAM/SSD에 $0.5B 조달."
      },
      {
        "id": "tsmc_asml_equip",
        "source": "tsmc",
        "target": "asml",
        "flowType": "equipment_purchase",
        "amount": 1.7,
        "desc": "2023 Q3: TSMC가 선단 공정 라인 증설을 위해 ASML EUV/High-NA 장비에 $1.7B 지출."
      },
      {
        "id": "samsung_asml_equip",
        "source": "samsung",
        "target": "asml",
        "flowType": "equipment_purchase",
        "amount": 1.2,
        "desc": "2023 Q3: 삼성전자가 선단 DRAM 및 파운드리 확충을 위해 ASML 장비에 $1.2B 발주."
      },
      {
        "id": "skhynix_asml_equip",
        "source": "skhynix",
        "target": "asml",
        "flowType": "equipment_purchase",
        "amount": 0.7,
        "desc": "2023 Q3: SK하이닉스가 선단 HBM DRAM 양산 강화를 위해 ASML EUV 장비에 $0.7B 도입."
      },
      {
        "id": "goog_avgo_gpu",
        "source": "goog",
        "target": "avgo",
        "flowType": "gpu_purchase",
        "amount": 0.8,
        "desc": "2023 Q3: 구글이 맞춤형 TPU ASIC 설계 및 네트워킹을 위해 브로드컴에 $0.8B 지출."
      },
      {
        "id": "meta_avgo_gpu",
        "source": "meta",
        "target": "avgo",
        "flowType": "gpu_purchase",
        "amount": 0.6,
        "desc": "2023 Q3: 메타가 자체 추론/학습 가속기 MTIA 설계 및 네트워킹을 위해 브로드컴에 $0.6B 지출."
      },
      {
        "id": "msft_openai_credit",
        "source": "msft",
        "target": "openai",
        "flowType": "cloud_credit",
        "amount": 2,
        "desc": "2023 Q3: MS가 오픈AI에 클라우드 컴퓨팅 크레딧 및 전략적 인프라 비용으로 $2B 공급."
      },
      {
        "id": "openai_msft_spend",
        "source": "openai",
        "target": "msft",
        "flowType": "cloud_credit",
        "amount": 0.7,
        "desc": "2023 Q3: 오픈AI가 ChatGPT 및 API 호스팅을 위한 Azure 데이터센터 사용료로 MS에 $0.7B 지불."
      },
      {
        "id": "amzn_anthropic_equity",
        "source": "amzn",
        "target": "anthropic",
        "flowType": "equity_investment",
        "amount": 1.25,
        "desc": "2023 Q3: 아마존이 앤트로픽에 전략적 투자 트랜치 $1.25B를 직접 납입."
      },
      {
        "id": "anthropic_amzn_spend",
        "source": "anthropic",
        "target": "amzn",
        "flowType": "cloud_credit",
        "amount": 0.4,
        "desc": "2023 Q3: 앤트로픽이 Claude 모델 학습 및 Bedrock 서비스를 위해 AWS 인프라 비용 $0.4B 지출."
      },
      {
        "id": "goog_anthropic_equity",
        "source": "goog",
        "target": "anthropic",
        "flowType": "equity_investment",
        "amount": 0,
        "desc": "2023 Q3: 파트너십 약정 유지; 해당 기간 신규 지분 납입 없음."
      },
      {
        "id": "vc_coreweave_debt",
        "source": "vc_sovereign",
        "target": "coreweave",
        "flowType": "debt_collateral",
        "amount": 2.3,
        "desc": "2023 Q3: 블랙스톤/마그네타 등 사모펀드가 GPU를 담보로 코어위브에 $2.3B 사모 대출 공급."
      },
      {
        "id": "coreweave_nvda_gpu",
        "source": "coreweave",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 2.1,
        "desc": "2023 Q3: 코어위브가 엔비디아 최신 GPU에 $2.1B 대규모 구매 집행."
      },
      {
        "id": "nvda_coreweave_equity",
        "source": "nvda",
        "target": "coreweave",
        "flowType": "equity_investment",
        "amount": 0,
        "desc": "2023 Q3: 지분 관계 유지; 해당 기간 신규 지분 취득 없음."
      },
      {
        "id": "coreweave_vc_refinance",
        "source": "coreweave",
        "target": "vc_sovereign",
        "flowType": "debt_collateral",
        "amount": 0,
        "desc": "2023 Q3: 해당 기간 활성 거래 없음 (개시 전 또는 종료)."
      },
      {
        "id": "vc_openai_equity",
        "source": "vc_sovereign",
        "target": "openai",
        "flowType": "equity_investment",
        "amount": 0,
        "desc": "2023 Q3: 기존 지분 조달 자금 집행 중; 해당 기간 대규모 신규 벤처 지분 유치 없음."
      },
      {
        "id": "xai_nvda_gpu",
        "source": "xai",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 0,
        "desc": "2023 Q3: 해당 기간 활성 거래 없음 (개시 전 또는 종료)."
      },
      {
        "id": "skhynix_tsmc_foundry",
        "source": "skhynix",
        "target": "tsmc",
        "flowType": "gpu_purchase",
        "amount": 0,
        "desc": "2023 Q3: 해당 기간 활성 거래 없음 (개시 전 또는 종료)."
      },
      {
        "id": "market_openai_rev",
        "source": "end_market",
        "target": "openai",
        "flowType": "enterprise_revenue",
        "amount": 0.5,
        "desc": "2023 Q3: 기업 및 유료 사용자의 OpenAI 소프트웨어 및 API 실매출 $0.5B 달성."
      },
      {
        "id": "market_msft_rev",
        "source": "end_market",
        "target": "msft",
        "flowType": "enterprise_revenue",
        "amount": 1,
        "desc": "2023 Q3: M365 Copilot 및 Azure AI 기업 실매출 $1B 기록."
      },
      {
        "id": "market_anthropic_rev",
        "source": "end_market",
        "target": "anthropic",
        "flowType": "enterprise_revenue",
        "amount": 0.08,
        "desc": "2023 Q3: Claude 엔터프라이즈 API 토큰 소비 실매출 $0.08B 달성."
      },
      {
        "id": "market_deepseek_rev",
        "source": "end_market",
        "target": "deepseek",
        "flowType": "enterprise_revenue",
        "amount": 0.03,
        "desc": "2023 Q3: 저비용 고효율 오픈 추론 모델 DeepSeek API 토큰 실매출 $0.03B 달성."
      }
    ]
  },
  {
    "periodId": "2023-Q4",
    "year": 2023,
    "quarter": 4,
    "label": "2023 Q4",
    "dateRange": "2023년 10월 ~ 12월",
    "title": "2023년 4분기: 오픈AI 이사회 사태와 TSMC CoWoS 패키징 병목",
    "summary": "오픈AI의 샘 올트먼 해임 및 5일 만의 복귀 사태가 발생하며 MS가 이사회 참관인 자격을 얻습니다. 구글은 제미나이 1.0을 공개하고, SK하이닉스는 HBM3의 압도적 수익성에 힘입어 D램 흑자 전환에 성공합니다. ASML은 최초의 High-NA EUV 장비를 출하합니다.",
    "macroMetrics": {
      "totalAiCapex": 37.4,
      "realEndUserRevenue": 2.2,
      "capexRevenueDeficit": 35.2,
      "circularRatio": 63,
      "annualizedCapexRunRate": 149.6
    },
    "nodes": [
      {
        "id": "msft",
        "name": "마이크로소프트",
        "category": "hyperscaler",
        "marketCap": 2790,
        "aiCapex": 9.7,
        "aiRevenue": 0.9,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "세계 최고 클라우드 기업, Azure 기반 OpenAI 독점 파트너십 및 자체 Maia AI 가속기 개발.",
        "initialX": -140,
        "initialY": -130
      },
      {
        "id": "goog",
        "name": "알파벳 / 구글",
        "category": "hyperscaler",
        "marketCap": 1760,
        "aiCapex": 11,
        "aiRevenue": 0.6,
        "isFormed": true,
        "isHighGrowth": true,
        "desc": "트랜스포머 아키텍처 창시자, 자체 TPU v4/v5/v6 가속기 및 제미나이(Gemini) 생태계 구축.",
        "initialX": -185,
        "initialY": 5
      },
      {
        "id": "amzn",
        "name": "아마존 / AWS",
        "category": "hyperscaler",
        "marketCap": 1570,
        "aiCapex": 8.8,
        "aiRevenue": 0.45,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "세계 1위 클라우드 AWS, 앤트로픽 핵심 투자사(40억 달러)이자 자체 Trainium2/Inferentia 가속기 개발.",
        "initialX": 140,
        "initialY": -130
      },
      {
        "id": "meta",
        "name": "메타 플랫폼스",
        "category": "hyperscaler",
        "marketCap": 910,
        "aiCapex": 7.9,
        "aiRevenue": 0.25,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "오픈소스 AI 생태계 주도(LLaMA 시리즈), 60만 개 이상의 GPU 클러스터 운용 및 MTIA 자체 반도체 개발.",
        "initialX": 185,
        "initialY": 5
      },
      {
        "id": "nvda",
        "name": "엔비디아",
        "category": "chipmaker",
        "marketCap": 1220,
        "aiCapex": 1,
        "aiRevenue": 18.4,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "글로벌 AI GPU 독점(H100/B200/루빈) 및 CUDA 소프트웨어 생태계를 기반으로 75% 이상의 마진 향유.",
        "initialX": 0,
        "initialY": -10
      },
      {
        "id": "tsmc",
        "name": "TSMC",
        "category": "chipmaker",
        "marketCap": 540,
        "aiCapex": 7.3,
        "aiRevenue": 19.6,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "엔비디아, 애플, 브로드컴 등 전 세계 모든 선단 AI 가속기를 제조하는 독점적 파운드리 및 CoWoS 패키징 선도자.",
        "initialX": -130,
        "initialY": 190
      },
      {
        "id": "avgo",
        "name": "브로드컴",
        "category": "chipmaker",
        "marketCap": 520,
        "aiCapex": 0.35,
        "aiRevenue": 2.6,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "빅테크 맞춤형 AI ASIC(구글 TPU, 메타 MTIA) 및 초고속 AI 데이터센터 스위치/네트워킹 독점 기업.",
        "initialX": -215,
        "initialY": 115
      },
      {
        "id": "skhynix",
        "name": "SK하이닉스",
        "category": "semiconductor_supply",
        "marketCap": 75,
        "aiCapex": 1.9,
        "aiRevenue": 2.1,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "엔비디아에 HBM3/HBM3E를 사실상 독점 공급하며 AI 메모리 초격차를 달성한 글로벌 HBM 1위 기업.",
        "initialX": -20,
        "initialY": -210
      },
      {
        "id": "samsung",
        "name": "삼성전자",
        "category": "semiconductor_supply",
        "marketCap": 380,
        "aiCapex": 9.2,
        "aiRevenue": 2,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "세계 최대 메모리 반도체 제조사이자 12단 HBM3E 및 메모리-파운드리 턴키 솔루션을 보유한 종합 반도체 기업.",
        "initialX": 110,
        "initialY": -195
      },
      {
        "id": "asml",
        "name": "ASML",
        "category": "semiconductor_supply",
        "marketCap": 290,
        "aiCapex": 0.6,
        "aiRevenue": 7.8,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "3nm 및 2nm 선단 반도체 제조에 필수적인 EUV 및 High-NA 극자외선 노광 장비를 독점 공급하는 네덜란드 장비사.",
        "initialX": 20,
        "initialY": 235
      },
      {
        "id": "openai",
        "name": "오픈AI",
        "category": "ai_lab",
        "marketCap": 86,
        "aiCapex": 0.9,
        "aiRevenue": 0.7,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "ChatGPT, GPT-4, o1 추론 모델을 개발한 프론티어 AI 선도 기업이자 1,000억 달러 스타게이트 프로젝트 파트너.",
        "initialX": -60,
        "initialY": -55
      },
      {
        "id": "anthropic",
        "name": "앤트로픽",
        "category": "ai_lab",
        "marketCap": 18,
        "aiCapex": 0.4,
        "aiRevenue": 0.1,
        "isFormed": true,
        "isHighGrowth": true,
        "desc": "Claude 3.5 및 컴퓨터 제어 AI를 개발한 프론티어 연구소로, 아마존과 구글로부터 대규모 자본 유치.",
        "initialX": 55,
        "initialY": -55
      },
      {
        "id": "xai",
        "name": "xAI",
        "category": "ai_lab",
        "marketCap": 15,
        "aiCapex": 0.3,
        "aiRevenue": 0.02,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "일론 머스크가 설립한 프론티어 랩으로, 멤피스에 10만 개 규모의 세계 최대 수랭식 슈퍼클러스터 ‘콜로서스’ 운용.",
        "initialX": 75,
        "initialY": 45
      },
      {
        "id": "deepseek",
        "name": "딥시크 (DeepSeek)",
        "category": "ai_lab",
        "marketCap": 4.5,
        "aiCapex": 0.15,
        "aiRevenue": 0.04,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "극단적 알고리즘 효율화와 저비용 오픈 추론 모델(DeepSeek-R1)로 무차별적 고비용 Capex 경쟁 구도를 뒤흔든 연구소.",
        "initialX": -75,
        "initialY": 45
      },
      {
        "id": "coreweave",
        "name": "코어위브",
        "category": "neocloud",
        "marketCap": 7,
        "aiCapex": 1.5,
        "aiRevenue": 0.25,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "GPU 자체를 담보로 사모펀드로부터 수십억 달러의 부채를 조달해 GPU를 재구매하는 네오클라우드 벤더 파이낸싱의 상징.",
        "initialX": 0,
        "initialY": 85
      },
      {
        "id": "vc_sovereign",
        "name": "벤처캐피탈 & 국부펀드",
        "category": "venture_capital",
        "marketCap": 500,
        "aiCapex": 0,
        "aiRevenue": 0,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "세쿼이아, 소프트뱅크, a16z 및 중동 국부펀드(MGX, PIF) 등 AI 메가 라운드 및 사모 부채를 공급하는 자본 풀.",
        "initialX": 220,
        "initialY": 155
      },
      {
        "id": "end_market",
        "name": "실제 기업 & 최종 사용자 시장",
        "category": "end_market",
        "marketCap": 1200,
        "aiCapex": 0,
        "aiRevenue": 2.2,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "실제 기업 IT 예산, 개발자 API 사용료, 유료 소비자 구독 등 AI 생태계의 유일한 외부 실질 현금 유입원.",
        "initialX": -230,
        "initialY": -170
      }
    ],
    "edges": [
      {
        "id": "msft_nvda_gpu",
        "source": "msft",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 4.4,
        "desc": "2023 Q4: Azure AI 인프라 확충을 위해 엔비디아 가속기 서버에 $4.4B 집행."
      },
      {
        "id": "goog_nvda_gpu",
        "source": "goog",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 3.2,
        "desc": "2023 Q4: 구글 클라우드(GCP) AI 하이퍼컴퓨터 확장을 위해 엔비디아 가속기에 $3.2B 발주."
      },
      {
        "id": "amzn_nvda_gpu",
        "source": "amzn",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 3.6,
        "desc": "2023 Q4: AWS UltraCluster 확장 및 EC2 인스턴스를 위해 엔비디아에 $3.6B 지출."
      },
      {
        "id": "meta_nvda_gpu",
        "source": "meta",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 3.4,
        "desc": "2023 Q4: LLaMA 모델 학습 및 메타 AI 데이터센터를 위해 엔비디아 GPU에 $3.4B 구매 집행."
      },
      {
        "id": "nvda_tsmc_gpu",
        "source": "nvda",
        "target": "tsmc",
        "flowType": "gpu_purchase",
        "amount": 3.8,
        "desc": "2023 Q4: 엔비디아가 TSMC의 선단 노드 웨이퍼 및 CoWoS 어드밴스드 패키징에 $3.8B 발주."
      },
      {
        "id": "nvda_skhynix_hbm",
        "source": "nvda",
        "target": "skhynix",
        "flowType": "hbm_purchase",
        "amount": 2,
        "desc": "2023 Q4: 엔비디아가 SK하이닉스의 고대역폭메모리(HBM) 공급에 $2B 지출."
      },
      {
        "id": "nvda_samsung_hbm",
        "source": "nvda",
        "target": "samsung",
        "flowType": "hbm_purchase",
        "amount": 0.7,
        "desc": "2023 Q4: 엔비디아가 삼성전자로부터 HBM 및 초고속 DRAM/SSD에 $0.7B 조달."
      },
      {
        "id": "tsmc_asml_equip",
        "source": "tsmc",
        "target": "asml",
        "flowType": "equipment_purchase",
        "amount": 1.8,
        "desc": "2023 Q4: TSMC가 선단 공정 라인 증설을 위해 ASML EUV/High-NA 장비에 $1.8B 지출."
      },
      {
        "id": "samsung_asml_equip",
        "source": "samsung",
        "target": "asml",
        "flowType": "equipment_purchase",
        "amount": 1.3,
        "desc": "2023 Q4: 삼성전자가 선단 DRAM 및 파운드리 확충을 위해 ASML 장비에 $1.3B 발주."
      },
      {
        "id": "skhynix_asml_equip",
        "source": "skhynix",
        "target": "asml",
        "flowType": "equipment_purchase",
        "amount": 0.8,
        "desc": "2023 Q4: SK하이닉스가 선단 HBM DRAM 양산 강화를 위해 ASML EUV 장비에 $0.8B 도입."
      },
      {
        "id": "goog_avgo_gpu",
        "source": "goog",
        "target": "avgo",
        "flowType": "gpu_purchase",
        "amount": 1,
        "desc": "2023 Q4: 구글이 맞춤형 TPU ASIC 설계 및 네트워킹을 위해 브로드컴에 $1B 지출."
      },
      {
        "id": "meta_avgo_gpu",
        "source": "meta",
        "target": "avgo",
        "flowType": "gpu_purchase",
        "amount": 0.8,
        "desc": "2023 Q4: 메타가 자체 추론/학습 가속기 MTIA 설계 및 네트워킹을 위해 브로드컴에 $0.8B 지출."
      },
      {
        "id": "msft_openai_credit",
        "source": "msft",
        "target": "openai",
        "flowType": "cloud_credit",
        "amount": 2.5,
        "desc": "2023 Q4: MS가 오픈AI에 클라우드 컴퓨팅 크레딧 및 전략적 인프라 비용으로 $2.5B 공급."
      },
      {
        "id": "openai_msft_spend",
        "source": "openai",
        "target": "msft",
        "flowType": "cloud_credit",
        "amount": 0.95,
        "desc": "2023 Q4: 오픈AI가 ChatGPT 및 API 호스팅을 위한 Azure 데이터센터 사용료로 MS에 $0.95B 지불."
      },
      {
        "id": "amzn_anthropic_equity",
        "source": "amzn",
        "target": "anthropic",
        "flowType": "equity_investment",
        "amount": 0,
        "desc": "2023 Q4: 기존 체결 투자 트랜치 이행 중; 해당 기간 신규 지분 납입 없음."
      },
      {
        "id": "anthropic_amzn_spend",
        "source": "anthropic",
        "target": "amzn",
        "flowType": "cloud_credit",
        "amount": 0.6,
        "desc": "2023 Q4: 앤트로픽이 Claude 모델 학습 및 Bedrock 서비스를 위해 AWS 인프라 비용 $0.6B 지출."
      },
      {
        "id": "goog_anthropic_equity",
        "source": "goog",
        "target": "anthropic",
        "flowType": "equity_investment",
        "amount": 2,
        "desc": "2023 Q4: 구글이 앤트로픽에 $2B 규모의 전략적 자본 투자를 집행."
      },
      {
        "id": "vc_coreweave_debt",
        "source": "vc_sovereign",
        "target": "coreweave",
        "flowType": "debt_collateral",
        "amount": 0,
        "desc": "2023 Q4: 기존 GPU 담보 부채 차입 집행 완료; 해당 기간 신규 부채 조달 없음."
      },
      {
        "id": "coreweave_nvda_gpu",
        "source": "coreweave",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 2.5,
        "desc": "2023 Q4: 코어위브가 엔비디아 최신 GPU에 $2.5B 대규모 구매 집행."
      },
      {
        "id": "nvda_coreweave_equity",
        "source": "nvda",
        "target": "coreweave",
        "flowType": "equity_investment",
        "amount": 0,
        "desc": "2023 Q4: 지분 관계 유지; 해당 기간 신규 지분 취득 없음."
      },
      {
        "id": "coreweave_vc_refinance",
        "source": "coreweave",
        "target": "vc_sovereign",
        "flowType": "debt_collateral",
        "amount": 0,
        "desc": "2023 Q4: 해당 기간 활성 거래 없음 (개시 전 또는 종료)."
      },
      {
        "id": "vc_openai_equity",
        "source": "vc_sovereign",
        "target": "openai",
        "flowType": "equity_investment",
        "amount": 0,
        "desc": "2023 Q4: 기존 지분 조달 자금 집행 중; 해당 기간 대규모 신규 벤처 지분 유치 없음."
      },
      {
        "id": "xai_nvda_gpu",
        "source": "xai",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 0.2,
        "desc": "2023 Q4: xAI가 멤피스 '콜로서스' 등 초대형 슈퍼클러스터용 엔비디아 GPU에 $0.2B 직접 구매."
      },
      {
        "id": "skhynix_tsmc_foundry",
        "source": "skhynix",
        "target": "tsmc",
        "flowType": "gpu_purchase",
        "amount": 0,
        "desc": "2023 Q4: 해당 기간 활성 거래 없음 (개시 전 또는 종료)."
      },
      {
        "id": "market_openai_rev",
        "source": "end_market",
        "target": "openai",
        "flowType": "enterprise_revenue",
        "amount": 0.7,
        "desc": "2023 Q4: 기업 및 유료 사용자의 OpenAI 소프트웨어 및 API 실매출 $0.7B 달성."
      },
      {
        "id": "market_msft_rev",
        "source": "end_market",
        "target": "msft",
        "flowType": "enterprise_revenue",
        "amount": 1.3,
        "desc": "2023 Q4: M365 Copilot 및 Azure AI 기업 실매출 $1.3B 기록."
      },
      {
        "id": "market_anthropic_rev",
        "source": "end_market",
        "target": "anthropic",
        "flowType": "enterprise_revenue",
        "amount": 0.15,
        "desc": "2023 Q4: Claude 엔터프라이즈 API 토큰 소비 실매출 $0.15B 달성."
      },
      {
        "id": "market_deepseek_rev",
        "source": "end_market",
        "target": "deepseek",
        "flowType": "enterprise_revenue",
        "amount": 0.04,
        "desc": "2023 Q4: 저비용 고효율 오픈 추론 모델 DeepSeek API 토큰 실매출 $0.04B 달성."
      }
    ]
  },
  {
    "periodId": "2024-Q1",
    "year": 2024,
    "quarter": 1,
    "label": "2024 Q1",
    "dateRange": "2024년 1월 ~ 3월",
    "title": "2024년 1분기: 블랙웰 B200 공개와 삼성전자 12단 HBM3E 승부수",
    "summary": "엔비디아 GTC 2024에서 2,080억 개 트랜지스터의 차세대 블랙웰 B200이 공개됩니다. 저커버그는 메타가 연내 35만 개의 H100을 확보할 것이라 발표합니다. 삼성전자는 세계 최초 12단 36GB HBM3E 개발을 선언하며 반격에 나서고, 브로드컴은 맞춤형 ASIC 수요로 AI 매출이 280% 급증합니다.",
    "macroMetrics": {
      "totalAiCapex": 45.5,
      "realEndUserRevenue": 3.2,
      "capexRevenueDeficit": 42.3,
      "circularRatio": 67,
      "annualizedCapexRunRate": 182
    },
    "nodes": [
      {
        "id": "msft",
        "name": "마이크로소프트",
        "category": "hyperscaler",
        "marketCap": 3120,
        "aiCapex": 11.5,
        "aiRevenue": 1.2,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "세계 최고 클라우드 기업, Azure 기반 OpenAI 독점 파트너십 및 자체 Maia AI 가속기 개발.",
        "initialX": -140,
        "initialY": -130
      },
      {
        "id": "goog",
        "name": "알파벳 / 구글",
        "category": "hyperscaler",
        "marketCap": 1910,
        "aiCapex": 12,
        "aiRevenue": 0.9,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "트랜스포머 아키텍처 창시자, 자체 TPU v4/v5/v6 가속기 및 제미나이(Gemini) 생태계 구축.",
        "initialX": -185,
        "initialY": 5
      },
      {
        "id": "amzn",
        "name": "아마존 / AWS",
        "category": "hyperscaler",
        "marketCap": 1870,
        "aiCapex": 13,
        "aiRevenue": 0.7,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "세계 1위 클라우드 AWS, 앤트로픽 핵심 투자사(40억 달러)이자 자체 Trainium2/Inferentia 가속기 개발.",
        "initialX": 140,
        "initialY": -130
      },
      {
        "id": "meta",
        "name": "메타 플랫폼스",
        "category": "hyperscaler",
        "marketCap": 1250,
        "aiCapex": 9,
        "aiRevenue": 0.4,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "오픈소스 AI 생태계 주도(LLaMA 시리즈), 60만 개 이상의 GPU 클러스터 운용 및 MTIA 자체 반도체 개발.",
        "initialX": 185,
        "initialY": 5
      },
      {
        "id": "nvda",
        "name": "엔비디아",
        "category": "chipmaker",
        "marketCap": 2250,
        "aiCapex": 1.1,
        "aiRevenue": 22.6,
        "isFormed": true,
        "isHighGrowth": true,
        "desc": "글로벌 AI GPU 독점(H100/B200/루빈) 및 CUDA 소프트웨어 생태계를 기반으로 75% 이상의 마진 향유.",
        "initialX": 0,
        "initialY": -10
      },
      {
        "id": "tsmc",
        "name": "TSMC",
        "category": "chipmaker",
        "marketCap": 690,
        "aiCapex": 7.9,
        "aiRevenue": 18.9,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "엔비디아, 애플, 브로드컴 등 전 세계 모든 선단 AI 가속기를 제조하는 독점적 파운드리 및 CoWoS 패키징 선도자.",
        "initialX": -130,
        "initialY": 190
      },
      {
        "id": "avgo",
        "name": "브로드컴",
        "category": "chipmaker",
        "marketCap": 610,
        "aiCapex": 0.4,
        "aiRevenue": 3.1,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "빅테크 맞춤형 AI ASIC(구글 TPU, 메타 MTIA) 및 초고속 AI 데이터센터 스위치/네트워킹 독점 기업.",
        "initialX": -215,
        "initialY": 115
      },
      {
        "id": "skhynix",
        "name": "SK하이닉스",
        "category": "semiconductor_supply",
        "marketCap": 95,
        "aiCapex": 2.2,
        "aiRevenue": 2.8,
        "isFormed": true,
        "isHighGrowth": true,
        "desc": "엔비디아에 HBM3/HBM3E를 사실상 독점 공급하며 AI 메모리 초격차를 달성한 글로벌 HBM 1위 기업.",
        "initialX": -20,
        "initialY": -210
      },
      {
        "id": "samsung",
        "name": "삼성전자",
        "category": "semiconductor_supply",
        "marketCap": 410,
        "aiCapex": 9.5,
        "aiRevenue": 2.4,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "세계 최대 메모리 반도체 제조사이자 12단 HBM3E 및 메모리-파운드리 턴키 솔루션을 보유한 종합 반도체 기업.",
        "initialX": 110,
        "initialY": -195
      },
      {
        "id": "asml",
        "name": "ASML",
        "category": "semiconductor_supply",
        "marketCap": 380,
        "aiCapex": 0.6,
        "aiRevenue": 5.7,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "3nm 및 2nm 선단 반도체 제조에 필수적인 EUV 및 High-NA 극자외선 노광 장비를 독점 공급하는 네덜란드 장비사.",
        "initialX": 20,
        "initialY": 235
      },
      {
        "id": "openai",
        "name": "오픈AI",
        "category": "ai_lab",
        "marketCap": 110,
        "aiCapex": 1.2,
        "aiRevenue": 0.9,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "ChatGPT, GPT-4, o1 추론 모델을 개발한 프론티어 AI 선도 기업이자 1,000억 달러 스타게이트 프로젝트 파트너.",
        "initialX": -60,
        "initialY": -55
      },
      {
        "id": "anthropic",
        "name": "앤트로픽",
        "category": "ai_lab",
        "marketCap": 24,
        "aiCapex": 0.6,
        "aiRevenue": 0.15,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "Claude 3.5 및 컴퓨터 제어 AI를 개발한 프론티어 연구소로, 아마존과 구글로부터 대규모 자본 유치.",
        "initialX": 55,
        "initialY": -55
      },
      {
        "id": "xai",
        "name": "xAI",
        "category": "ai_lab",
        "marketCap": 24,
        "aiCapex": 0.5,
        "aiRevenue": 0.05,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "일론 머스크가 설립한 프론티어 랩으로, 멤피스에 10만 개 규모의 세계 최대 수랭식 슈퍼클러스터 ‘콜로서스’ 운용.",
        "initialX": 75,
        "initialY": 45
      },
      {
        "id": "deepseek",
        "name": "딥시크 (DeepSeek)",
        "category": "ai_lab",
        "marketCap": 6,
        "aiCapex": 0.2,
        "aiRevenue": 0.08,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "극단적 알고리즘 효율화와 저비용 오픈 추론 모델(DeepSeek-R1)로 무차별적 고비용 Capex 경쟁 구도를 뒤흔든 연구소.",
        "initialX": -75,
        "initialY": 45
      },
      {
        "id": "coreweave",
        "name": "코어위브",
        "category": "neocloud",
        "marketCap": 10,
        "aiCapex": 2,
        "aiRevenue": 0.4,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "GPU 자체를 담보로 사모펀드로부터 수십억 달러의 부채를 조달해 GPU를 재구매하는 네오클라우드 벤더 파이낸싱의 상징.",
        "initialX": 0,
        "initialY": 85
      },
      {
        "id": "vc_sovereign",
        "name": "벤처캐피탈 & 국부펀드",
        "category": "venture_capital",
        "marketCap": 500,
        "aiCapex": 0,
        "aiRevenue": 0,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "세쿼이아, 소프트뱅크, a16z 및 중동 국부펀드(MGX, PIF) 등 AI 메가 라운드 및 사모 부채를 공급하는 자본 풀.",
        "initialX": 220,
        "initialY": 155
      },
      {
        "id": "end_market",
        "name": "실제 기업 & 최종 사용자 시장",
        "category": "end_market",
        "marketCap": 1200,
        "aiCapex": 0,
        "aiRevenue": 3.2,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "실제 기업 IT 예산, 개발자 API 사용료, 유료 소비자 구독 등 AI 생태계의 유일한 외부 실질 현금 유입원.",
        "initialX": -230,
        "initialY": -170
      }
    ],
    "edges": [
      {
        "id": "msft_nvda_gpu",
        "source": "msft",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 5.2,
        "desc": "2024 Q1: Azure AI 인프라 확충을 위해 엔비디아 가속기 서버에 $5.2B 집행."
      },
      {
        "id": "goog_nvda_gpu",
        "source": "goog",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 3.8,
        "desc": "2024 Q1: 구글 클라우드(GCP) AI 하이퍼컴퓨터 확장을 위해 엔비디아 가속기에 $3.8B 발주."
      },
      {
        "id": "amzn_nvda_gpu",
        "source": "amzn",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 4.4,
        "desc": "2024 Q1: AWS UltraCluster 확장 및 EC2 인스턴스를 위해 엔비디아에 $4.4B 지출."
      },
      {
        "id": "meta_nvda_gpu",
        "source": "meta",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 4.2,
        "desc": "2024 Q1: LLaMA 모델 학습 및 메타 AI 데이터센터를 위해 엔비디아 GPU에 $4.2B 구매 집행."
      },
      {
        "id": "nvda_tsmc_gpu",
        "source": "nvda",
        "target": "tsmc",
        "flowType": "gpu_purchase",
        "amount": 4.6,
        "desc": "2024 Q1: 엔비디아가 TSMC의 선단 노드 웨이퍼 및 CoWoS 어드밴스드 패키징에 $4.6B 발주."
      },
      {
        "id": "nvda_skhynix_hbm",
        "source": "nvda",
        "target": "skhynix",
        "flowType": "hbm_purchase",
        "amount": 2.6,
        "desc": "2024 Q1: 엔비디아가 SK하이닉스의 고대역폭메모리(HBM) 공급에 $2.6B 지출."
      },
      {
        "id": "nvda_samsung_hbm",
        "source": "nvda",
        "target": "samsung",
        "flowType": "hbm_purchase",
        "amount": 1,
        "desc": "2024 Q1: 엔비디아가 삼성전자로부터 HBM 및 초고속 DRAM/SSD에 $1B 조달."
      },
      {
        "id": "tsmc_asml_equip",
        "source": "tsmc",
        "target": "asml",
        "flowType": "equipment_purchase",
        "amount": 2,
        "desc": "2024 Q1: TSMC가 선단 공정 라인 증설을 위해 ASML EUV/High-NA 장비에 $2B 지출."
      },
      {
        "id": "samsung_asml_equip",
        "source": "samsung",
        "target": "asml",
        "flowType": "equipment_purchase",
        "amount": 1.5,
        "desc": "2024 Q1: 삼성전자가 선단 DRAM 및 파운드리 확충을 위해 ASML 장비에 $1.5B 발주."
      },
      {
        "id": "skhynix_asml_equip",
        "source": "skhynix",
        "target": "asml",
        "flowType": "equipment_purchase",
        "amount": 1,
        "desc": "2024 Q1: SK하이닉스가 선단 HBM DRAM 양산 강화를 위해 ASML EUV 장비에 $1B 도입."
      },
      {
        "id": "goog_avgo_gpu",
        "source": "goog",
        "target": "avgo",
        "flowType": "gpu_purchase",
        "amount": 1.3,
        "desc": "2024 Q1: 구글이 맞춤형 TPU ASIC 설계 및 네트워킹을 위해 브로드컴에 $1.3B 지출."
      },
      {
        "id": "meta_avgo_gpu",
        "source": "meta",
        "target": "avgo",
        "flowType": "gpu_purchase",
        "amount": 1.1,
        "desc": "2024 Q1: 메타가 자체 추론/학습 가속기 MTIA 설계 및 네트워킹을 위해 브로드컴에 $1.1B 지출."
      },
      {
        "id": "msft_openai_credit",
        "source": "msft",
        "target": "openai",
        "flowType": "cloud_credit",
        "amount": 2.8,
        "desc": "2024 Q1: MS가 오픈AI에 클라우드 컴퓨팅 크레딧 및 전략적 인프라 비용으로 $2.8B 공급."
      },
      {
        "id": "openai_msft_spend",
        "source": "openai",
        "target": "msft",
        "flowType": "cloud_credit",
        "amount": 1.2,
        "desc": "2024 Q1: 오픈AI가 ChatGPT 및 API 호스팅을 위한 Azure 데이터센터 사용료로 MS에 $1.2B 지불."
      },
      {
        "id": "amzn_anthropic_equity",
        "source": "amzn",
        "target": "anthropic",
        "flowType": "equity_investment",
        "amount": 2.75,
        "desc": "2024 Q1: 아마존이 앤트로픽에 전략적 투자 트랜치 $2.75B를 직접 납입."
      },
      {
        "id": "anthropic_amzn_spend",
        "source": "anthropic",
        "target": "amzn",
        "flowType": "cloud_credit",
        "amount": 0.8,
        "desc": "2024 Q1: 앤트로픽이 Claude 모델 학습 및 Bedrock 서비스를 위해 AWS 인프라 비용 $0.8B 지출."
      },
      {
        "id": "goog_anthropic_equity",
        "source": "goog",
        "target": "anthropic",
        "flowType": "equity_investment",
        "amount": 0,
        "desc": "2024 Q1: 파트너십 약정 유지; 해당 기간 신규 지분 납입 없음."
      },
      {
        "id": "vc_coreweave_debt",
        "source": "vc_sovereign",
        "target": "coreweave",
        "flowType": "debt_collateral",
        "amount": 0,
        "desc": "2024 Q1: 기존 GPU 담보 부채 차입 집행 완료; 해당 기간 신규 부채 조달 없음."
      },
      {
        "id": "coreweave_nvda_gpu",
        "source": "coreweave",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 3.2,
        "desc": "2024 Q1: 코어위브가 엔비디아 최신 GPU에 $3.2B 대규모 구매 집행."
      },
      {
        "id": "nvda_coreweave_equity",
        "source": "nvda",
        "target": "coreweave",
        "flowType": "equity_investment",
        "amount": 0,
        "desc": "2024 Q1: 지분 관계 유지; 해당 기간 신규 지분 취득 없음."
      },
      {
        "id": "coreweave_vc_refinance",
        "source": "coreweave",
        "target": "vc_sovereign",
        "flowType": "debt_collateral",
        "amount": 0,
        "desc": "2024 Q1: 해당 기간 활성 거래 없음 (개시 전 또는 종료)."
      },
      {
        "id": "vc_openai_equity",
        "source": "vc_sovereign",
        "target": "openai",
        "flowType": "equity_investment",
        "amount": 0,
        "desc": "2024 Q1: 기존 지분 조달 자금 집행 중; 해당 기간 대규모 신규 벤처 지분 유치 없음."
      },
      {
        "id": "xai_nvda_gpu",
        "source": "xai",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 0.5,
        "desc": "2024 Q1: xAI가 멤피스 '콜로서스' 등 초대형 슈퍼클러스터용 엔비디아 GPU에 $0.5B 직접 구매."
      },
      {
        "id": "skhynix_tsmc_foundry",
        "source": "skhynix",
        "target": "tsmc",
        "flowType": "gpu_purchase",
        "amount": 0,
        "desc": "2024 Q1: 해당 기간 활성 거래 없음 (개시 전 또는 종료)."
      },
      {
        "id": "market_openai_rev",
        "source": "end_market",
        "target": "openai",
        "flowType": "enterprise_revenue",
        "amount": 1,
        "desc": "2024 Q1: 기업 및 유료 사용자의 OpenAI 소프트웨어 및 API 실매출 $1B 달성."
      },
      {
        "id": "market_msft_rev",
        "source": "end_market",
        "target": "msft",
        "flowType": "enterprise_revenue",
        "amount": 1.7,
        "desc": "2024 Q1: M365 Copilot 및 Azure AI 기업 실매출 $1.7B 기록."
      },
      {
        "id": "market_anthropic_rev",
        "source": "end_market",
        "target": "anthropic",
        "flowType": "enterprise_revenue",
        "amount": 0.3,
        "desc": "2024 Q1: Claude 엔터프라이즈 API 토큰 소비 실매출 $0.3B 달성."
      },
      {
        "id": "market_deepseek_rev",
        "source": "end_market",
        "target": "deepseek",
        "flowType": "enterprise_revenue",
        "amount": 0.05,
        "desc": "2024 Q1: 저비용 고효율 오픈 추론 모델 DeepSeek API 토큰 실매출 $0.05B 달성."
      }
    ]
  },
  {
    "periodId": "2024-Q2",
    "year": 2024,
    "quarter": 2,
    "label": "2024 Q2",
    "dateRange": "2024년 4월 ~ 6월",
    "title": "2024년 2분기: 세쿼이아의 6000억 달러 질문과 메가 부채 조달",
    "summary": "세쿼이아 캐피탈이 데이터센터 투자와 최종 수익 간의 거대한 괴리를 경고하는 \"AI의 6000억 달러 질문\"을 발표합니다. 코어위브는 블랙스톤 주도로 75억 달러의 사상 최대 GPU 담보 부채를 조달합니다. 엔비디아는 시총 3.34조 달러로 세계 1위에 등극합니다.",
    "macroMetrics": {
      "totalAiCapex": 53.1,
      "realEndUserRevenue": 4.5,
      "capexRevenueDeficit": 48.6,
      "circularRatio": 69,
      "annualizedCapexRunRate": 212.4
    },
    "nodes": [
      {
        "id": "msft",
        "name": "마이크로소프트",
        "category": "hyperscaler",
        "marketCap": 3320,
        "aiCapex": 13.9,
        "aiRevenue": 1.5,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "세계 최고 클라우드 기업, Azure 기반 OpenAI 독점 파트너십 및 자체 Maia AI 가속기 개발.",
        "initialX": -140,
        "initialY": -130
      },
      {
        "id": "goog",
        "name": "알파벳 / 구글",
        "category": "hyperscaler",
        "marketCap": 2210,
        "aiCapex": 13.2,
        "aiRevenue": 1.1,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "트랜스포머 아키텍처 창시자, 자체 TPU v4/v5/v6 가속기 및 제미나이(Gemini) 생태계 구축.",
        "initialX": -185,
        "initialY": 5
      },
      {
        "id": "amzn",
        "name": "아마존 / AWS",
        "category": "hyperscaler",
        "marketCap": 2020,
        "aiCapex": 15.5,
        "aiRevenue": 0.9,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "세계 1위 클라우드 AWS, 앤트로픽 핵심 투자사(40억 달러)이자 자체 Trainium2/Inferentia 가속기 개발.",
        "initialX": 140,
        "initialY": -130
      },
      {
        "id": "meta",
        "name": "메타 플랫폼스",
        "category": "hyperscaler",
        "marketCap": 1320,
        "aiCapex": 10.5,
        "aiRevenue": 0.5,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "오픈소스 AI 생태계 주도(LLaMA 시리즈), 60만 개 이상의 GPU 클러스터 운용 및 MTIA 자체 반도체 개발.",
        "initialX": 185,
        "initialY": 5
      },
      {
        "id": "nvda",
        "name": "엔비디아",
        "category": "chipmaker",
        "marketCap": 3100,
        "aiCapex": 1.2,
        "aiRevenue": 26.3,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "글로벌 AI GPU 독점(H100/B200/루빈) 및 CUDA 소프트웨어 생태계를 기반으로 75% 이상의 마진 향유.",
        "initialX": 0,
        "initialY": -10
      },
      {
        "id": "tsmc",
        "name": "TSMC",
        "category": "chipmaker",
        "marketCap": 820,
        "aiCapex": 8.5,
        "aiRevenue": 20.8,
        "isFormed": true,
        "isHighGrowth": true,
        "desc": "엔비디아, 애플, 브로드컴 등 전 세계 모든 선단 AI 가속기를 제조하는 독점적 파운드리 및 CoWoS 패키징 선도자.",
        "initialX": -130,
        "initialY": 190
      },
      {
        "id": "avgo",
        "name": "브로드컴",
        "category": "chipmaker",
        "marketCap": 740,
        "aiCapex": 0.45,
        "aiRevenue": 3.5,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "빅테크 맞춤형 AI ASIC(구글 TPU, 메타 MTIA) 및 초고속 AI 데이터센터 스위치/네트워킹 독점 기업.",
        "initialX": -215,
        "initialY": 115
      },
      {
        "id": "skhynix",
        "name": "SK하이닉스",
        "category": "semiconductor_supply",
        "marketCap": 120,
        "aiCapex": 2.5,
        "aiRevenue": 3.5,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "엔비디아에 HBM3/HBM3E를 사실상 독점 공급하며 AI 메모리 초격차를 달성한 글로벌 HBM 1위 기업.",
        "initialX": -20,
        "initialY": -210
      },
      {
        "id": "samsung",
        "name": "삼성전자",
        "category": "semiconductor_supply",
        "marketCap": 430,
        "aiCapex": 9.8,
        "aiRevenue": 2.9,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "세계 최대 메모리 반도체 제조사이자 12단 HBM3E 및 메모리-파운드리 턴키 솔루션을 보유한 종합 반도체 기업.",
        "initialX": 110,
        "initialY": -195
      },
      {
        "id": "asml",
        "name": "ASML",
        "category": "semiconductor_supply",
        "marketCap": 410,
        "aiCapex": 0.6,
        "aiRevenue": 6.8,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "3nm 및 2nm 선단 반도체 제조에 필수적인 EUV 및 High-NA 극자외선 노광 장비를 독점 공급하는 네덜란드 장비사.",
        "initialX": 20,
        "initialY": 235
      },
      {
        "id": "openai",
        "name": "오픈AI",
        "category": "ai_lab",
        "marketCap": 135,
        "aiCapex": 1.8,
        "aiRevenue": 1.1,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "ChatGPT, GPT-4, o1 추론 모델을 개발한 프론티어 AI 선도 기업이자 1,000억 달러 스타게이트 프로젝트 파트너.",
        "initialX": -60,
        "initialY": -55
      },
      {
        "id": "anthropic",
        "name": "앤트로픽",
        "category": "ai_lab",
        "marketCap": 30,
        "aiCapex": 0.9,
        "aiRevenue": 0.22,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "Claude 3.5 및 컴퓨터 제어 AI를 개발한 프론티어 연구소로, 아마존과 구글로부터 대규모 자본 유치.",
        "initialX": 55,
        "initialY": -55
      },
      {
        "id": "xai",
        "name": "xAI",
        "category": "ai_lab",
        "marketCap": 30,
        "aiCapex": 0.9,
        "aiRevenue": 0.08,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "일론 머스크가 설립한 프론티어 랩으로, 멤피스에 10만 개 규모의 세계 최대 수랭식 슈퍼클러스터 ‘콜로서스’ 운용.",
        "initialX": 75,
        "initialY": 45
      },
      {
        "id": "deepseek",
        "name": "딥시크 (DeepSeek)",
        "category": "ai_lab",
        "marketCap": 8,
        "aiCapex": 0.3,
        "aiRevenue": 0.12,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "극단적 알고리즘 효율화와 저비용 오픈 추론 모델(DeepSeek-R1)로 무차별적 고비용 Capex 경쟁 구도를 뒤흔든 연구소.",
        "initialX": -75,
        "initialY": 45
      },
      {
        "id": "coreweave",
        "name": "코어위브",
        "category": "neocloud",
        "marketCap": 16,
        "aiCapex": 3.2,
        "aiRevenue": 0.55,
        "isFormed": true,
        "isHighGrowth": true,
        "desc": "GPU 자체를 담보로 사모펀드로부터 수십억 달러의 부채를 조달해 GPU를 재구매하는 네오클라우드 벤더 파이낸싱의 상징.",
        "initialX": 0,
        "initialY": 85
      },
      {
        "id": "vc_sovereign",
        "name": "벤처캐피탈 & 국부펀드",
        "category": "venture_capital",
        "marketCap": 500,
        "aiCapex": 0,
        "aiRevenue": 0,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "세쿼이아, 소프트뱅크, a16z 및 중동 국부펀드(MGX, PIF) 등 AI 메가 라운드 및 사모 부채를 공급하는 자본 풀.",
        "initialX": 220,
        "initialY": 155
      },
      {
        "id": "end_market",
        "name": "실제 기업 & 최종 사용자 시장",
        "category": "end_market",
        "marketCap": 1200,
        "aiCapex": 0,
        "aiRevenue": 4.5,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "실제 기업 IT 예산, 개발자 API 사용료, 유료 소비자 구독 등 AI 생태계의 유일한 외부 실질 현금 유입원.",
        "initialX": -230,
        "initialY": -170
      }
    ],
    "edges": [
      {
        "id": "msft_nvda_gpu",
        "source": "msft",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 6.4,
        "desc": "2024 Q2: Azure AI 인프라 확충을 위해 엔비디아 가속기 서버에 $6.4B 집행."
      },
      {
        "id": "goog_nvda_gpu",
        "source": "goog",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 4.6,
        "desc": "2024 Q2: 구글 클라우드(GCP) AI 하이퍼컴퓨터 확장을 위해 엔비디아 가속기에 $4.6B 발주."
      },
      {
        "id": "amzn_nvda_gpu",
        "source": "amzn",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 5.4,
        "desc": "2024 Q2: AWS UltraCluster 확장 및 EC2 인스턴스를 위해 엔비디아에 $5.4B 지출."
      },
      {
        "id": "meta_nvda_gpu",
        "source": "meta",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 5.2,
        "desc": "2024 Q2: LLaMA 모델 학습 및 메타 AI 데이터센터를 위해 엔비디아 GPU에 $5.2B 구매 집행."
      },
      {
        "id": "nvda_tsmc_gpu",
        "source": "nvda",
        "target": "tsmc",
        "flowType": "gpu_purchase",
        "amount": 5.8,
        "desc": "2024 Q2: 엔비디아가 TSMC의 선단 노드 웨이퍼 및 CoWoS 어드밴스드 패키징에 $5.8B 발주."
      },
      {
        "id": "nvda_skhynix_hbm",
        "source": "nvda",
        "target": "skhynix",
        "flowType": "hbm_purchase",
        "amount": 3.3,
        "desc": "2024 Q2: 엔비디아가 SK하이닉스의 고대역폭메모리(HBM) 공급에 $3.3B 지출."
      },
      {
        "id": "nvda_samsung_hbm",
        "source": "nvda",
        "target": "samsung",
        "flowType": "hbm_purchase",
        "amount": 1.5,
        "desc": "2024 Q2: 엔비디아가 삼성전자로부터 HBM 및 초고속 DRAM/SSD에 $1.5B 조달."
      },
      {
        "id": "tsmc_asml_equip",
        "source": "tsmc",
        "target": "asml",
        "flowType": "equipment_purchase",
        "amount": 2.3,
        "desc": "2024 Q2: TSMC가 선단 공정 라인 증설을 위해 ASML EUV/High-NA 장비에 $2.3B 지출."
      },
      {
        "id": "samsung_asml_equip",
        "source": "samsung",
        "target": "asml",
        "flowType": "equipment_purchase",
        "amount": 1.7,
        "desc": "2024 Q2: 삼성전자가 선단 DRAM 및 파운드리 확충을 위해 ASML 장비에 $1.7B 발주."
      },
      {
        "id": "skhynix_asml_equip",
        "source": "skhynix",
        "target": "asml",
        "flowType": "equipment_purchase",
        "amount": 1.2,
        "desc": "2024 Q2: SK하이닉스가 선단 HBM DRAM 양산 강화를 위해 ASML EUV 장비에 $1.2B 도입."
      },
      {
        "id": "goog_avgo_gpu",
        "source": "goog",
        "target": "avgo",
        "flowType": "gpu_purchase",
        "amount": 1.6,
        "desc": "2024 Q2: 구글이 맞춤형 TPU ASIC 설계 및 네트워킹을 위해 브로드컴에 $1.6B 지출."
      },
      {
        "id": "meta_avgo_gpu",
        "source": "meta",
        "target": "avgo",
        "flowType": "gpu_purchase",
        "amount": 1.4,
        "desc": "2024 Q2: 메타가 자체 추론/학습 가속기 MTIA 설계 및 네트워킹을 위해 브로드컴에 $1.4B 지출."
      },
      {
        "id": "msft_openai_credit",
        "source": "msft",
        "target": "openai",
        "flowType": "cloud_credit",
        "amount": 3,
        "desc": "2024 Q2: MS가 오픈AI에 클라우드 컴퓨팅 크레딧 및 전략적 인프라 비용으로 $3B 공급."
      },
      {
        "id": "openai_msft_spend",
        "source": "openai",
        "target": "msft",
        "flowType": "cloud_credit",
        "amount": 1.5,
        "desc": "2024 Q2: 오픈AI가 ChatGPT 및 API 호스팅을 위한 Azure 데이터센터 사용료로 MS에 $1.5B 지불."
      },
      {
        "id": "amzn_anthropic_equity",
        "source": "amzn",
        "target": "anthropic",
        "flowType": "equity_investment",
        "amount": 0,
        "desc": "2024 Q2: 기존 체결 투자 트랜치 이행 중; 해당 기간 신규 지분 납입 없음."
      },
      {
        "id": "anthropic_amzn_spend",
        "source": "anthropic",
        "target": "amzn",
        "flowType": "cloud_credit",
        "amount": 1.1,
        "desc": "2024 Q2: 앤트로픽이 Claude 모델 학습 및 Bedrock 서비스를 위해 AWS 인프라 비용 $1.1B 지출."
      },
      {
        "id": "goog_anthropic_equity",
        "source": "goog",
        "target": "anthropic",
        "flowType": "equity_investment",
        "amount": 0,
        "desc": "2024 Q2: 파트너십 약정 유지; 해당 기간 신규 지분 납입 없음."
      },
      {
        "id": "vc_coreweave_debt",
        "source": "vc_sovereign",
        "target": "coreweave",
        "flowType": "debt_collateral",
        "amount": 7.5,
        "desc": "2024 Q2: 블랙스톤/마그네타 등 사모펀드가 GPU를 담보로 코어위브에 $7.5B 사모 대출 공급."
      },
      {
        "id": "coreweave_nvda_gpu",
        "source": "coreweave",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 5.5,
        "desc": "2024 Q2: 코어위브가 엔비디아 최신 GPU에 $5.5B 대규모 구매 집행."
      },
      {
        "id": "nvda_coreweave_equity",
        "source": "nvda",
        "target": "coreweave",
        "flowType": "equity_investment",
        "amount": 0.5,
        "desc": "2024 Q2: 엔비디아가 핵심 네오클라우드 고객사인 코어위브에 $0.5B 전략적 지분 투자."
      },
      {
        "id": "coreweave_vc_refinance",
        "source": "coreweave",
        "target": "vc_sovereign",
        "flowType": "debt_collateral",
        "amount": 0,
        "desc": "2024 Q2: 해당 기간 활성 거래 없음 (개시 전 또는 종료)."
      },
      {
        "id": "vc_openai_equity",
        "source": "vc_sovereign",
        "target": "openai",
        "flowType": "equity_investment",
        "amount": 0,
        "desc": "2024 Q2: 기존 지분 조달 자금 집행 중; 해당 기간 대규모 신규 벤처 지분 유치 없음."
      },
      {
        "id": "xai_nvda_gpu",
        "source": "xai",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 1.8,
        "desc": "2024 Q2: xAI가 멤피스 '콜로서스' 등 초대형 슈퍼클러스터용 엔비디아 GPU에 $1.8B 직접 구매."
      },
      {
        "id": "skhynix_tsmc_foundry",
        "source": "skhynix",
        "target": "tsmc",
        "flowType": "gpu_purchase",
        "amount": 0.5,
        "desc": "2024 Q2: SK하이닉스가 HBM4 맞춤형 베이스 다이 생산을 위해 TSMC 선단 파운드리에 $0.5B 발주."
      },
      {
        "id": "market_openai_rev",
        "source": "end_market",
        "target": "openai",
        "flowType": "enterprise_revenue",
        "amount": 1.4,
        "desc": "2024 Q2: 기업 및 유료 사용자의 OpenAI 소프트웨어 및 API 실매출 $1.4B 달성."
      },
      {
        "id": "market_msft_rev",
        "source": "end_market",
        "target": "msft",
        "flowType": "enterprise_revenue",
        "amount": 2.2,
        "desc": "2024 Q2: M365 Copilot 및 Azure AI 기업 실매출 $2.2B 기록."
      },
      {
        "id": "market_anthropic_rev",
        "source": "end_market",
        "target": "anthropic",
        "flowType": "enterprise_revenue",
        "amount": 0.5,
        "desc": "2024 Q2: Claude 엔터프라이즈 API 토큰 소비 실매출 $0.5B 달성."
      },
      {
        "id": "market_deepseek_rev",
        "source": "end_market",
        "target": "deepseek",
        "flowType": "enterprise_revenue",
        "amount": 0.08,
        "desc": "2024 Q2: 저비용 고효율 오픈 추론 모델 DeepSeek API 토큰 실매출 $0.08B 달성."
      }
    ]
  },
  {
    "periodId": "2024-Q3",
    "year": 2024,
    "quarter": 3,
    "label": "2024 Q3",
    "dateRange": "2024년 7월 ~ 9월",
    "title": "2024년 3분기: xAI 10만 개 콜로서스 가동과 오픈AI 1570억 달러 투자 유치",
    "summary": "일론 머스크의 xAI가 10만 개의 H100 수랭식 클러스터 \"콜로서스\"를 122일 만에 가동합니다. 오픈AI는 1,570억 달러 기업가치로 66억 달러의 메가 라운드를 유치합니다. SK하이닉스는 세계 최초로 12단 HBM3E 양산에 돌입합니다.",
    "macroMetrics": {
      "totalAiCapex": 55.4,
      "realEndUserRevenue": 5.8,
      "capexRevenueDeficit": 49.6,
      "circularRatio": 66,
      "annualizedCapexRunRate": 221.6
    },
    "nodes": [
      {
        "id": "msft",
        "name": "마이크로소프트",
        "category": "hyperscaler",
        "marketCap": 3200,
        "aiCapex": 14.9,
        "aiRevenue": 1.8,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "세계 최고 클라우드 기업, Azure 기반 OpenAI 독점 파트너십 및 자체 Maia AI 가속기 개발.",
        "initialX": -140,
        "initialY": -130
      },
      {
        "id": "goog",
        "name": "알파벳 / 구글",
        "category": "hyperscaler",
        "marketCap": 2050,
        "aiCapex": 13.1,
        "aiRevenue": 1.3,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "트랜스포머 아키텍처 창시자, 자체 TPU v4/v5/v6 가속기 및 제미나이(Gemini) 생태계 구축.",
        "initialX": -185,
        "initialY": 5
      },
      {
        "id": "amzn",
        "name": "아마존 / AWS",
        "category": "hyperscaler",
        "marketCap": 1950,
        "aiCapex": 16.2,
        "aiRevenue": 1.1,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "세계 1위 클라우드 AWS, 앤트로픽 핵심 투자사(40억 달러)이자 자체 Trainium2/Inferentia 가속기 개발.",
        "initialX": 140,
        "initialY": -130
      },
      {
        "id": "meta",
        "name": "메타 플랫폼스",
        "category": "hyperscaler",
        "marketCap": 1450,
        "aiCapex": 11.2,
        "aiRevenue": 0.6,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "오픈소스 AI 생태계 주도(LLaMA 시리즈), 60만 개 이상의 GPU 클러스터 운용 및 MTIA 자체 반도체 개발.",
        "initialX": 185,
        "initialY": 5
      },
      {
        "id": "nvda",
        "name": "엔비디아",
        "category": "chipmaker",
        "marketCap": 3000,
        "aiCapex": 1.3,
        "aiRevenue": 30.8,
        "isFormed": true,
        "isHighGrowth": true,
        "desc": "글로벌 AI GPU 독점(H100/B200/루빈) 및 CUDA 소프트웨어 생태계를 기반으로 75% 이상의 마진 향유.",
        "initialX": 0,
        "initialY": -10
      },
      {
        "id": "tsmc",
        "name": "TSMC",
        "category": "chipmaker",
        "marketCap": 880,
        "aiCapex": 8.8,
        "aiRevenue": 23.5,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "엔비디아, 애플, 브로드컴 등 전 세계 모든 선단 AI 가속기를 제조하는 독점적 파운드리 및 CoWoS 패키징 선도자.",
        "initialX": -130,
        "initialY": 190
      },
      {
        "id": "avgo",
        "name": "브로드컴",
        "category": "chipmaker",
        "marketCap": 720,
        "aiCapex": 0.5,
        "aiRevenue": 3.8,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "빅테크 맞춤형 AI ASIC(구글 TPU, 메타 MTIA) 및 초고속 AI 데이터센터 스위치/네트워킹 독점 기업.",
        "initialX": -215,
        "initialY": 115
      },
      {
        "id": "skhynix",
        "name": "SK하이닉스",
        "category": "semiconductor_supply",
        "marketCap": 110,
        "aiCapex": 2.8,
        "aiRevenue": 4.1,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "엔비디아에 HBM3/HBM3E를 사실상 독점 공급하며 AI 메모리 초격차를 달성한 글로벌 HBM 1위 기업.",
        "initialX": -20,
        "initialY": -210
      },
      {
        "id": "samsung",
        "name": "삼성전자",
        "category": "semiconductor_supply",
        "marketCap": 390,
        "aiCapex": 10.1,
        "aiRevenue": 3.2,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "세계 최대 메모리 반도체 제조사이자 12단 HBM3E 및 메모리-파운드리 턴키 솔루션을 보유한 종합 반도체 기업.",
        "initialX": 110,
        "initialY": -195
      },
      {
        "id": "asml",
        "name": "ASML",
        "category": "semiconductor_supply",
        "marketCap": 370,
        "aiCapex": 0.7,
        "aiRevenue": 8.2,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "3nm 및 2nm 선단 반도체 제조에 필수적인 EUV 및 High-NA 극자외선 노광 장비를 독점 공급하는 네덜란드 장비사.",
        "initialX": 20,
        "initialY": 235
      },
      {
        "id": "openai",
        "name": "오픈AI",
        "category": "ai_lab",
        "marketCap": 157,
        "aiCapex": 2.2,
        "aiRevenue": 1.3,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "ChatGPT, GPT-4, o1 추론 모델을 개발한 프론티어 AI 선도 기업이자 1,000억 달러 스타게이트 프로젝트 파트너.",
        "initialX": -60,
        "initialY": -55
      },
      {
        "id": "anthropic",
        "name": "앤트로픽",
        "category": "ai_lab",
        "marketCap": 35,
        "aiCapex": 1.1,
        "aiRevenue": 0.3,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "Claude 3.5 및 컴퓨터 제어 AI를 개발한 프론티어 연구소로, 아마존과 구글로부터 대규모 자본 유치.",
        "initialX": 55,
        "initialY": -55
      },
      {
        "id": "xai",
        "name": "xAI",
        "category": "ai_lab",
        "marketCap": 45,
        "aiCapex": 2.5,
        "aiRevenue": 0.1,
        "isFormed": true,
        "isHighGrowth": true,
        "desc": "일론 머스크가 설립한 프론티어 랩으로, 멤피스에 10만 개 규모의 세계 최대 수랭식 슈퍼클러스터 ‘콜로서스’ 운용.",
        "initialX": 75,
        "initialY": 45
      },
      {
        "id": "deepseek",
        "name": "딥시크 (DeepSeek)",
        "category": "ai_lab",
        "marketCap": 11,
        "aiCapex": 0.4,
        "aiRevenue": 0.18,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "극단적 알고리즘 효율화와 저비용 오픈 추론 모델(DeepSeek-R1)로 무차별적 고비용 Capex 경쟁 구도를 뒤흔든 연구소.",
        "initialX": -75,
        "initialY": 45
      },
      {
        "id": "coreweave",
        "name": "코어위브",
        "category": "neocloud",
        "marketCap": 18,
        "aiCapex": 3.8,
        "aiRevenue": 0.7,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "GPU 자체를 담보로 사모펀드로부터 수십억 달러의 부채를 조달해 GPU를 재구매하는 네오클라우드 벤더 파이낸싱의 상징.",
        "initialX": 0,
        "initialY": 85
      },
      {
        "id": "vc_sovereign",
        "name": "벤처캐피탈 & 국부펀드",
        "category": "venture_capital",
        "marketCap": 500,
        "aiCapex": 0,
        "aiRevenue": 0,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "세쿼이아, 소프트뱅크, a16z 및 중동 국부펀드(MGX, PIF) 등 AI 메가 라운드 및 사모 부채를 공급하는 자본 풀.",
        "initialX": 220,
        "initialY": 155
      },
      {
        "id": "end_market",
        "name": "실제 기업 & 최종 사용자 시장",
        "category": "end_market",
        "marketCap": 1200,
        "aiCapex": 0,
        "aiRevenue": 5.8,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "실제 기업 IT 예산, 개발자 API 사용료, 유료 소비자 구독 등 AI 생태계의 유일한 외부 실질 현금 유입원.",
        "initialX": -230,
        "initialY": -170
      }
    ],
    "edges": [
      {
        "id": "msft_nvda_gpu",
        "source": "msft",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 7.8,
        "desc": "2024 Q3: Azure AI 인프라 확충을 위해 엔비디아 가속기 서버에 $7.8B 집행."
      },
      {
        "id": "goog_nvda_gpu",
        "source": "goog",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 5.5,
        "desc": "2024 Q3: 구글 클라우드(GCP) AI 하이퍼컴퓨터 확장을 위해 엔비디아 가속기에 $5.5B 발주."
      },
      {
        "id": "amzn_nvda_gpu",
        "source": "amzn",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 6.6,
        "desc": "2024 Q3: AWS UltraCluster 확장 및 EC2 인스턴스를 위해 엔비디아에 $6.6B 지출."
      },
      {
        "id": "meta_nvda_gpu",
        "source": "meta",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 6.4,
        "desc": "2024 Q3: LLaMA 모델 학습 및 메타 AI 데이터센터를 위해 엔비디아 GPU에 $6.4B 구매 집행."
      },
      {
        "id": "nvda_tsmc_gpu",
        "source": "nvda",
        "target": "tsmc",
        "flowType": "gpu_purchase",
        "amount": 7.2,
        "desc": "2024 Q3: 엔비디아가 TSMC의 선단 노드 웨이퍼 및 CoWoS 어드밴스드 패키징에 $7.2B 발주."
      },
      {
        "id": "nvda_skhynix_hbm",
        "source": "nvda",
        "target": "skhynix",
        "flowType": "hbm_purchase",
        "amount": 4.1,
        "desc": "2024 Q3: 엔비디아가 SK하이닉스의 고대역폭메모리(HBM) 공급에 $4.1B 지출."
      },
      {
        "id": "nvda_samsung_hbm",
        "source": "nvda",
        "target": "samsung",
        "flowType": "hbm_purchase",
        "amount": 2.2,
        "desc": "2024 Q3: 엔비디아가 삼성전자로부터 HBM 및 초고속 DRAM/SSD에 $2.2B 조달."
      },
      {
        "id": "tsmc_asml_equip",
        "source": "tsmc",
        "target": "asml",
        "flowType": "equipment_purchase",
        "amount": 2.6,
        "desc": "2024 Q3: TSMC가 선단 공정 라인 증설을 위해 ASML EUV/High-NA 장비에 $2.6B 지출."
      },
      {
        "id": "samsung_asml_equip",
        "source": "samsung",
        "target": "asml",
        "flowType": "equipment_purchase",
        "amount": 1.9,
        "desc": "2024 Q3: 삼성전자가 선단 DRAM 및 파운드리 확충을 위해 ASML 장비에 $1.9B 발주."
      },
      {
        "id": "skhynix_asml_equip",
        "source": "skhynix",
        "target": "asml",
        "flowType": "equipment_purchase",
        "amount": 1.4,
        "desc": "2024 Q3: SK하이닉스가 선단 HBM DRAM 양산 강화를 위해 ASML EUV 장비에 $1.4B 도입."
      },
      {
        "id": "goog_avgo_gpu",
        "source": "goog",
        "target": "avgo",
        "flowType": "gpu_purchase",
        "amount": 2,
        "desc": "2024 Q3: 구글이 맞춤형 TPU ASIC 설계 및 네트워킹을 위해 브로드컴에 $2B 지출."
      },
      {
        "id": "meta_avgo_gpu",
        "source": "meta",
        "target": "avgo",
        "flowType": "gpu_purchase",
        "amount": 1.8,
        "desc": "2024 Q3: 메타가 자체 추론/학습 가속기 MTIA 설계 및 네트워킹을 위해 브로드컴에 $1.8B 지출."
      },
      {
        "id": "msft_openai_credit",
        "source": "msft",
        "target": "openai",
        "flowType": "cloud_credit",
        "amount": 3.2,
        "desc": "2024 Q3: MS가 오픈AI에 클라우드 컴퓨팅 크레딧 및 전략적 인프라 비용으로 $3.2B 공급."
      },
      {
        "id": "openai_msft_spend",
        "source": "openai",
        "target": "msft",
        "flowType": "cloud_credit",
        "amount": 1.9,
        "desc": "2024 Q3: 오픈AI가 ChatGPT 및 API 호스팅을 위한 Azure 데이터센터 사용료로 MS에 $1.9B 지불."
      },
      {
        "id": "amzn_anthropic_equity",
        "source": "amzn",
        "target": "anthropic",
        "flowType": "equity_investment",
        "amount": 0,
        "desc": "2024 Q3: 기존 체결 투자 트랜치 이행 중; 해당 기간 신규 지분 납입 없음."
      },
      {
        "id": "anthropic_amzn_spend",
        "source": "anthropic",
        "target": "amzn",
        "flowType": "cloud_credit",
        "amount": 1.4,
        "desc": "2024 Q3: 앤트로픽이 Claude 모델 학습 및 Bedrock 서비스를 위해 AWS 인프라 비용 $1.4B 지출."
      },
      {
        "id": "goog_anthropic_equity",
        "source": "goog",
        "target": "anthropic",
        "flowType": "equity_investment",
        "amount": 0,
        "desc": "2024 Q3: 파트너십 약정 유지; 해당 기간 신규 지분 납입 없음."
      },
      {
        "id": "vc_coreweave_debt",
        "source": "vc_sovereign",
        "target": "coreweave",
        "flowType": "debt_collateral",
        "amount": 0,
        "desc": "2024 Q3: 기존 GPU 담보 부채 차입 집행 완료; 해당 기간 신규 부채 조달 없음."
      },
      {
        "id": "coreweave_nvda_gpu",
        "source": "coreweave",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 4.2,
        "desc": "2024 Q3: 코어위브가 엔비디아 최신 GPU에 $4.2B 대규모 구매 집행."
      },
      {
        "id": "nvda_coreweave_equity",
        "source": "nvda",
        "target": "coreweave",
        "flowType": "equity_investment",
        "amount": 0,
        "desc": "2024 Q3: 지분 관계 유지; 해당 기간 신규 지분 취득 없음."
      },
      {
        "id": "coreweave_vc_refinance",
        "source": "coreweave",
        "target": "vc_sovereign",
        "flowType": "debt_collateral",
        "amount": 0.8,
        "desc": "2024 Q3: 코어위브가 GPU 자산유동화(ABS) 및 부채 차환을 통해 사모대출 시장에 $0.8B 상환/차환."
      },
      {
        "id": "vc_openai_equity",
        "source": "vc_sovereign",
        "target": "openai",
        "flowType": "equity_investment",
        "amount": 0,
        "desc": "2024 Q3: 기존 지분 조달 자금 집행 중; 해당 기간 대규모 신규 벤처 지분 유치 없음."
      },
      {
        "id": "xai_nvda_gpu",
        "source": "xai",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 3.5,
        "desc": "2024 Q3: xAI가 멤피스 '콜로서스' 등 초대형 슈퍼클러스터용 엔비디아 GPU에 $3.5B 직접 구매."
      },
      {
        "id": "skhynix_tsmc_foundry",
        "source": "skhynix",
        "target": "tsmc",
        "flowType": "gpu_purchase",
        "amount": 0.7,
        "desc": "2024 Q3: SK하이닉스가 HBM4 맞춤형 베이스 다이 생산을 위해 TSMC 선단 파운드리에 $0.7B 발주."
      },
      {
        "id": "market_openai_rev",
        "source": "end_market",
        "target": "openai",
        "flowType": "enterprise_revenue",
        "amount": 2,
        "desc": "2024 Q3: 기업 및 유료 사용자의 OpenAI 소프트웨어 및 API 실매출 $2B 달성."
      },
      {
        "id": "market_msft_rev",
        "source": "end_market",
        "target": "msft",
        "flowType": "enterprise_revenue",
        "amount": 2.8,
        "desc": "2024 Q3: M365 Copilot 및 Azure AI 기업 실매출 $2.8B 기록."
      },
      {
        "id": "market_anthropic_rev",
        "source": "end_market",
        "target": "anthropic",
        "flowType": "enterprise_revenue",
        "amount": 0.8,
        "desc": "2024 Q3: Claude 엔터프라이즈 API 토큰 소비 실매출 $0.8B 달성."
      },
      {
        "id": "market_deepseek_rev",
        "source": "end_market",
        "target": "deepseek",
        "flowType": "enterprise_revenue",
        "amount": 0.12,
        "desc": "2024 Q3: 저비용 고효율 오픈 추론 모델 DeepSeek API 토큰 실매출 $0.12B 달성."
      }
    ]
  },
  {
    "periodId": "2024-Q4",
    "year": 2024,
    "quarter": 4,
    "label": "2024 Q4",
    "dateRange": "2024년 10월 ~ 12월",
    "title": "2024년 4분기: 추론 혁신(o1)과 브로드컴·빅테크 자체 ASIC 급성장",
    "summary": "오픈AI가 추론형 AI 모델 o1을 공식 출시하며 테스트 시간 컴퓨팅(Test-time Compute)이라는 새로운 확장 패러다임을 확립합니다. 브로드컴은 구글 TPU 및 메타 MTIA 수요에 힘입어 연간 AI 반도체 매출 120억 달러 이상을 전망합니다. TSMC 3nm 가동률은 100%에 도달합니다.",
    "macroMetrics": {
      "totalAiCapex": 57.9,
      "realEndUserRevenue": 7.4,
      "capexRevenueDeficit": 50.5,
      "circularRatio": 64,
      "annualizedCapexRunRate": 231.6
    },
    "nodes": [
      {
        "id": "msft",
        "name": "마이크로소프트",
        "category": "hyperscaler",
        "marketCap": 3250,
        "aiCapex": 15.5,
        "aiRevenue": 2.2,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "세계 최고 클라우드 기업, Azure 기반 OpenAI 독점 파트너십 및 자체 Maia AI 가속기 개발.",
        "initialX": -140,
        "initialY": -130
      },
      {
        "id": "goog",
        "name": "알파벳 / 구글",
        "category": "hyperscaler",
        "marketCap": 2180,
        "aiCapex": 13.5,
        "aiRevenue": 1.6,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "트랜스포머 아키텍처 창시자, 자체 TPU v4/v5/v6 가속기 및 제미나이(Gemini) 생태계 구축.",
        "initialX": -185,
        "initialY": 5
      },
      {
        "id": "amzn",
        "name": "아마존 / AWS",
        "category": "hyperscaler",
        "marketCap": 2080,
        "aiCapex": 16.8,
        "aiRevenue": 1.3,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "세계 1위 클라우드 AWS, 앤트로픽 핵심 투자사(40억 달러)이자 자체 Trainium2/Inferentia 가속기 개발.",
        "initialX": 140,
        "initialY": -130
      },
      {
        "id": "meta",
        "name": "메타 플랫폼스",
        "category": "hyperscaler",
        "marketCap": 1520,
        "aiCapex": 12.1,
        "aiRevenue": 0.8,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "오픈소스 AI 생태계 주도(LLaMA 시리즈), 60만 개 이상의 GPU 클러스터 운용 및 MTIA 자체 반도체 개발.",
        "initialX": 185,
        "initialY": 5
      },
      {
        "id": "nvda",
        "name": "엔비디아",
        "category": "chipmaker",
        "marketCap": 3350,
        "aiCapex": 1.4,
        "aiRevenue": 35,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "글로벌 AI GPU 독점(H100/B200/루빈) 및 CUDA 소프트웨어 생태계를 기반으로 75% 이상의 마진 향유.",
        "initialX": 0,
        "initialY": -10
      },
      {
        "id": "tsmc",
        "name": "TSMC",
        "category": "chipmaker",
        "marketCap": 920,
        "aiCapex": 9.2,
        "aiRevenue": 25.5,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "엔비디아, 애플, 브로드컴 등 전 세계 모든 선단 AI 가속기를 제조하는 독점적 파운드리 및 CoWoS 패키징 선도자.",
        "initialX": -130,
        "initialY": 190
      },
      {
        "id": "avgo",
        "name": "브로드컴",
        "category": "chipmaker",
        "marketCap": 790,
        "aiCapex": 0.55,
        "aiRevenue": 4.2,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "빅테크 맞춤형 AI ASIC(구글 TPU, 메타 MTIA) 및 초고속 AI 데이터센터 스위치/네트워킹 독점 기업.",
        "initialX": -215,
        "initialY": 115
      },
      {
        "id": "skhynix",
        "name": "SK하이닉스",
        "category": "semiconductor_supply",
        "marketCap": 125,
        "aiCapex": 3.1,
        "aiRevenue": 4.8,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "엔비디아에 HBM3/HBM3E를 사실상 독점 공급하며 AI 메모리 초격차를 달성한 글로벌 HBM 1위 기업.",
        "initialX": -20,
        "initialY": -210
      },
      {
        "id": "samsung",
        "name": "삼성전자",
        "category": "semiconductor_supply",
        "marketCap": 380,
        "aiCapex": 10.5,
        "aiRevenue": 3.8,
        "isFormed": true,
        "isHighGrowth": true,
        "desc": "세계 최대 메모리 반도체 제조사이자 12단 HBM3E 및 메모리-파운드리 턴키 솔루션을 보유한 종합 반도체 기업.",
        "initialX": 110,
        "initialY": -195
      },
      {
        "id": "asml",
        "name": "ASML",
        "category": "semiconductor_supply",
        "marketCap": 390,
        "aiCapex": 0.7,
        "aiRevenue": 8.5,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "3nm 및 2nm 선단 반도체 제조에 필수적인 EUV 및 High-NA 극자외선 노광 장비를 독점 공급하는 네덜란드 장비사.",
        "initialX": 20,
        "initialY": 235
      },
      {
        "id": "openai",
        "name": "오픈AI",
        "category": "ai_lab",
        "marketCap": 170,
        "aiCapex": 2.6,
        "aiRevenue": 1.8,
        "isFormed": true,
        "isHighGrowth": true,
        "desc": "ChatGPT, GPT-4, o1 추론 모델을 개발한 프론티어 AI 선도 기업이자 1,000억 달러 스타게이트 프로젝트 파트너.",
        "initialX": -60,
        "initialY": -55
      },
      {
        "id": "anthropic",
        "name": "앤트로픽",
        "category": "ai_lab",
        "marketCap": 42,
        "aiCapex": 1.4,
        "aiRevenue": 0.4,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "Claude 3.5 및 컴퓨터 제어 AI를 개발한 프론티어 연구소로, 아마존과 구글로부터 대규모 자본 유치.",
        "initialX": 55,
        "initialY": -55
      },
      {
        "id": "xai",
        "name": "xAI",
        "category": "ai_lab",
        "marketCap": 50,
        "aiCapex": 1.8,
        "aiRevenue": 0.15,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "일론 머스크가 설립한 프론티어 랩으로, 멤피스에 10만 개 규모의 세계 최대 수랭식 슈퍼클러스터 ‘콜로서스’ 운용.",
        "initialX": 75,
        "initialY": 45
      },
      {
        "id": "deepseek",
        "name": "딥시크 (DeepSeek)",
        "category": "ai_lab",
        "marketCap": 14,
        "aiCapex": 0.5,
        "aiRevenue": 0.25,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "극단적 알고리즘 효율화와 저비용 오픈 추론 모델(DeepSeek-R1)로 무차별적 고비용 Capex 경쟁 구도를 뒤흔든 연구소.",
        "initialX": -75,
        "initialY": 45
      },
      {
        "id": "coreweave",
        "name": "코어위브",
        "category": "neocloud",
        "marketCap": 19,
        "aiCapex": 4.2,
        "aiRevenue": 0.9,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "GPU 자체를 담보로 사모펀드로부터 수십억 달러의 부채를 조달해 GPU를 재구매하는 네오클라우드 벤더 파이낸싱의 상징.",
        "initialX": 0,
        "initialY": 85
      },
      {
        "id": "vc_sovereign",
        "name": "벤처캐피탈 & 국부펀드",
        "category": "venture_capital",
        "marketCap": 500,
        "aiCapex": 0,
        "aiRevenue": 0,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "세쿼이아, 소프트뱅크, a16z 및 중동 국부펀드(MGX, PIF) 등 AI 메가 라운드 및 사모 부채를 공급하는 자본 풀.",
        "initialX": 220,
        "initialY": 155
      },
      {
        "id": "end_market",
        "name": "실제 기업 & 최종 사용자 시장",
        "category": "end_market",
        "marketCap": 1200,
        "aiCapex": 0,
        "aiRevenue": 7.4,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "실제 기업 IT 예산, 개발자 API 사용료, 유료 소비자 구독 등 AI 생태계의 유일한 외부 실질 현금 유입원.",
        "initialX": -230,
        "initialY": -170
      }
    ],
    "edges": [
      {
        "id": "msft_nvda_gpu",
        "source": "msft",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 9.2,
        "desc": "2024 Q4: Azure AI 인프라 확충을 위해 엔비디아 가속기 서버에 $9.2B 집행."
      },
      {
        "id": "goog_nvda_gpu",
        "source": "goog",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 6.8,
        "desc": "2024 Q4: 구글 클라우드(GCP) AI 하이퍼컴퓨터 확장을 위해 엔비디아 가속기에 $6.8B 발주."
      },
      {
        "id": "amzn_nvda_gpu",
        "source": "amzn",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 7.9,
        "desc": "2024 Q4: AWS UltraCluster 확장 및 EC2 인스턴스를 위해 엔비디아에 $7.9B 지출."
      },
      {
        "id": "meta_nvda_gpu",
        "source": "meta",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 7.6,
        "desc": "2024 Q4: LLaMA 모델 학습 및 메타 AI 데이터센터를 위해 엔비디아 GPU에 $7.6B 구매 집행."
      },
      {
        "id": "nvda_tsmc_gpu",
        "source": "nvda",
        "target": "tsmc",
        "flowType": "gpu_purchase",
        "amount": 8.6,
        "desc": "2024 Q4: 엔비디아가 TSMC의 선단 노드 웨이퍼 및 CoWoS 어드밴스드 패키징에 $8.6B 발주."
      },
      {
        "id": "nvda_skhynix_hbm",
        "source": "nvda",
        "target": "skhynix",
        "flowType": "hbm_purchase",
        "amount": 4.9,
        "desc": "2024 Q4: 엔비디아가 SK하이닉스의 고대역폭메모리(HBM) 공급에 $4.9B 지출."
      },
      {
        "id": "nvda_samsung_hbm",
        "source": "nvda",
        "target": "samsung",
        "flowType": "hbm_purchase",
        "amount": 3,
        "desc": "2024 Q4: 엔비디아가 삼성전자로부터 HBM 및 초고속 DRAM/SSD에 $3B 조달."
      },
      {
        "id": "tsmc_asml_equip",
        "source": "tsmc",
        "target": "asml",
        "flowType": "equipment_purchase",
        "amount": 2.9,
        "desc": "2024 Q4: TSMC가 선단 공정 라인 증설을 위해 ASML EUV/High-NA 장비에 $2.9B 지출."
      },
      {
        "id": "samsung_asml_equip",
        "source": "samsung",
        "target": "asml",
        "flowType": "equipment_purchase",
        "amount": 2.1,
        "desc": "2024 Q4: 삼성전자가 선단 DRAM 및 파운드리 확충을 위해 ASML 장비에 $2.1B 발주."
      },
      {
        "id": "skhynix_asml_equip",
        "source": "skhynix",
        "target": "asml",
        "flowType": "equipment_purchase",
        "amount": 1.6,
        "desc": "2024 Q4: SK하이닉스가 선단 HBM DRAM 양산 강화를 위해 ASML EUV 장비에 $1.6B 도입."
      },
      {
        "id": "goog_avgo_gpu",
        "source": "goog",
        "target": "avgo",
        "flowType": "gpu_purchase",
        "amount": 2.5,
        "desc": "2024 Q4: 구글이 맞춤형 TPU ASIC 설계 및 네트워킹을 위해 브로드컴에 $2.5B 지출."
      },
      {
        "id": "meta_avgo_gpu",
        "source": "meta",
        "target": "avgo",
        "flowType": "gpu_purchase",
        "amount": 2.2,
        "desc": "2024 Q4: 메타가 자체 추론/학습 가속기 MTIA 설계 및 네트워킹을 위해 브로드컴에 $2.2B 지출."
      },
      {
        "id": "msft_openai_credit",
        "source": "msft",
        "target": "openai",
        "flowType": "cloud_credit",
        "amount": 3.5,
        "desc": "2024 Q4: MS가 오픈AI에 클라우드 컴퓨팅 크레딧 및 전략적 인프라 비용으로 $3.5B 공급."
      },
      {
        "id": "openai_msft_spend",
        "source": "openai",
        "target": "msft",
        "flowType": "cloud_credit",
        "amount": 2.4,
        "desc": "2024 Q4: 오픈AI가 ChatGPT 및 API 호스팅을 위한 Azure 데이터센터 사용료로 MS에 $2.4B 지불."
      },
      {
        "id": "amzn_anthropic_equity",
        "source": "amzn",
        "target": "anthropic",
        "flowType": "equity_investment",
        "amount": 0,
        "desc": "2024 Q4: 기존 체결 투자 트랜치 이행 중; 해당 기간 신규 지분 납입 없음."
      },
      {
        "id": "anthropic_amzn_spend",
        "source": "anthropic",
        "target": "amzn",
        "flowType": "cloud_credit",
        "amount": 1.8,
        "desc": "2024 Q4: 앤트로픽이 Claude 모델 학습 및 Bedrock 서비스를 위해 AWS 인프라 비용 $1.8B 지출."
      },
      {
        "id": "goog_anthropic_equity",
        "source": "goog",
        "target": "anthropic",
        "flowType": "equity_investment",
        "amount": 0,
        "desc": "2024 Q4: 파트너십 약정 유지; 해당 기간 신규 지분 납입 없음."
      },
      {
        "id": "vc_coreweave_debt",
        "source": "vc_sovereign",
        "target": "coreweave",
        "flowType": "debt_collateral",
        "amount": 0,
        "desc": "2024 Q4: 기존 GPU 담보 부채 차입 집행 완료; 해당 기간 신규 부채 조달 없음."
      },
      {
        "id": "coreweave_nvda_gpu",
        "source": "coreweave",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 4.8,
        "desc": "2024 Q4: 코어위브가 엔비디아 최신 GPU에 $4.8B 대규모 구매 집행."
      },
      {
        "id": "nvda_coreweave_equity",
        "source": "nvda",
        "target": "coreweave",
        "flowType": "equity_investment",
        "amount": 0,
        "desc": "2024 Q4: 지분 관계 유지; 해당 기간 신규 지분 취득 없음."
      },
      {
        "id": "coreweave_vc_refinance",
        "source": "coreweave",
        "target": "vc_sovereign",
        "flowType": "debt_collateral",
        "amount": 1.1,
        "desc": "2024 Q4: 코어위브가 GPU 자산유동화(ABS) 및 부채 차환을 통해 사모대출 시장에 $1.1B 상환/차환."
      },
      {
        "id": "vc_openai_equity",
        "source": "vc_sovereign",
        "target": "openai",
        "flowType": "equity_investment",
        "amount": 6.6,
        "desc": "2024 Q4: 글로벌 벤처/국부펀드 신디케이트가 오픈AI에 $6.6B 규모 메가 지분 투자 유치."
      },
      {
        "id": "xai_nvda_gpu",
        "source": "xai",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 2.2,
        "desc": "2024 Q4: xAI가 멤피스 '콜로서스' 등 초대형 슈퍼클러스터용 엔비디아 GPU에 $2.2B 직접 구매."
      },
      {
        "id": "skhynix_tsmc_foundry",
        "source": "skhynix",
        "target": "tsmc",
        "flowType": "gpu_purchase",
        "amount": 0.9,
        "desc": "2024 Q4: SK하이닉스가 HBM4 맞춤형 베이스 다이 생산을 위해 TSMC 선단 파운드리에 $0.9B 발주."
      },
      {
        "id": "market_openai_rev",
        "source": "end_market",
        "target": "openai",
        "flowType": "enterprise_revenue",
        "amount": 2.7,
        "desc": "2024 Q4: 기업 및 유료 사용자의 OpenAI 소프트웨어 및 API 실매출 $2.7B 달성."
      },
      {
        "id": "market_msft_rev",
        "source": "end_market",
        "target": "msft",
        "flowType": "enterprise_revenue",
        "amount": 3.6,
        "desc": "2024 Q4: M365 Copilot 및 Azure AI 기업 실매출 $3.6B 기록."
      },
      {
        "id": "market_anthropic_rev",
        "source": "end_market",
        "target": "anthropic",
        "flowType": "enterprise_revenue",
        "amount": 1.2,
        "desc": "2024 Q4: Claude 엔터프라이즈 API 토큰 소비 실매출 $1.2B 달성."
      },
      {
        "id": "market_deepseek_rev",
        "source": "end_market",
        "target": "deepseek",
        "flowType": "enterprise_revenue",
        "amount": 0.2,
        "desc": "2024 Q4: 저비용 고효율 오픈 추론 모델 DeepSeek API 토큰 실매출 $0.2B 달성."
      }
    ]
  },
  {
    "periodId": "2025-Q1",
    "year": 2025,
    "quarter": 1,
    "label": "2025 Q1",
    "dateRange": "2025년 1월 ~ 3월",
    "title": "2025년 1분기: 딥시크 쇼크와 알고리즘 효율성, 1000억 달러 스타게이트 구상",
    "summary": "중국 딥시크가 극도로 낮은 훈련 비용으로 최고 수준의 추론 성능을 달성한 DeepSeek-R1을 공개하며, 글로벌 금융시장에 알고리즘 효율성과 Capex 지속성에 대한 충격을 던집니다. 한편 MS와 OpenAI는 1,000억 달러 규모의 5GW 슈퍼데이터센터 \"스타게이트\" 청사진을 구체화합니다.",
    "macroMetrics": {
      "totalAiCapex": 63.6,
      "realEndUserRevenue": 8.9,
      "capexRevenueDeficit": 54.7,
      "circularRatio": 62,
      "annualizedCapexRunRate": 254.4
    },
    "nodes": [
      {
        "id": "msft",
        "name": "마이크로소프트",
        "category": "hyperscaler",
        "marketCap": 3380,
        "aiCapex": 17.5,
        "aiRevenue": 2.6,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "세계 최고 클라우드 기업, Azure 기반 OpenAI 독점 파트너십 및 자체 Maia AI 가속기 개발.",
        "initialX": -140,
        "initialY": -130
      },
      {
        "id": "goog",
        "name": "알파벳 / 구글",
        "category": "hyperscaler",
        "marketCap": 2280,
        "aiCapex": 15.5,
        "aiRevenue": 1.9,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "트랜스포머 아키텍처 창시자, 자체 TPU v4/v5/v6 가속기 및 제미나이(Gemini) 생태계 구축.",
        "initialX": -185,
        "initialY": 5
      },
      {
        "id": "amzn",
        "name": "아마존 / AWS",
        "category": "hyperscaler",
        "marketCap": 2200,
        "aiCapex": 17.8,
        "aiRevenue": 1.5,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "세계 1위 클라우드 AWS, 앤트로픽 핵심 투자사(40억 달러)이자 자체 Trainium2/Inferentia 가속기 개발.",
        "initialX": 140,
        "initialY": -130
      },
      {
        "id": "meta",
        "name": "메타 플랫폼스",
        "category": "hyperscaler",
        "marketCap": 1580,
        "aiCapex": 12.8,
        "aiRevenue": 1,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "오픈소스 AI 생태계 주도(LLaMA 시리즈), 60만 개 이상의 GPU 클러스터 운용 및 MTIA 자체 반도체 개발.",
        "initialX": 185,
        "initialY": 5
      },
      {
        "id": "nvda",
        "name": "엔비디아",
        "category": "chipmaker",
        "marketCap": 3450,
        "aiCapex": 1.5,
        "aiRevenue": 36.5,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "글로벌 AI GPU 독점(H100/B200/루빈) 및 CUDA 소프트웨어 생태계를 기반으로 75% 이상의 마진 향유.",
        "initialX": 0,
        "initialY": -10
      },
      {
        "id": "tsmc",
        "name": "TSMC",
        "category": "chipmaker",
        "marketCap": 950,
        "aiCapex": 9.5,
        "aiRevenue": 26.8,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "엔비디아, 애플, 브로드컴 등 전 세계 모든 선단 AI 가속기를 제조하는 독점적 파운드리 및 CoWoS 패키징 선도자.",
        "initialX": -130,
        "initialY": 190
      },
      {
        "id": "avgo",
        "name": "브로드컴",
        "category": "chipmaker",
        "marketCap": 820,
        "aiCapex": 0.6,
        "aiRevenue": 4.5,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "빅테크 맞춤형 AI ASIC(구글 TPU, 메타 MTIA) 및 초고속 AI 데이터센터 스위치/네트워킹 독점 기업.",
        "initialX": -215,
        "initialY": 115
      },
      {
        "id": "skhynix",
        "name": "SK하이닉스",
        "category": "semiconductor_supply",
        "marketCap": 130,
        "aiCapex": 3.5,
        "aiRevenue": 5.2,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "엔비디아에 HBM3/HBM3E를 사실상 독점 공급하며 AI 메모리 초격차를 달성한 글로벌 HBM 1위 기업.",
        "initialX": -20,
        "initialY": -210
      },
      {
        "id": "samsung",
        "name": "삼성전자",
        "category": "semiconductor_supply",
        "marketCap": 400,
        "aiCapex": 11,
        "aiRevenue": 4.2,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "세계 최대 메모리 반도체 제조사이자 12단 HBM3E 및 메모리-파운드리 턴키 솔루션을 보유한 종합 반도체 기업.",
        "initialX": 110,
        "initialY": -195
      },
      {
        "id": "asml",
        "name": "ASML",
        "category": "semiconductor_supply",
        "marketCap": 410,
        "aiCapex": 0.8,
        "aiRevenue": 8.8,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "3nm 및 2nm 선단 반도체 제조에 필수적인 EUV 및 High-NA 극자외선 노광 장비를 독점 공급하는 네덜란드 장비사.",
        "initialX": 20,
        "initialY": 235
      },
      {
        "id": "openai",
        "name": "오픈AI",
        "category": "ai_lab",
        "marketCap": 190,
        "aiCapex": 3.2,
        "aiRevenue": 2.2,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "ChatGPT, GPT-4, o1 추론 모델을 개발한 프론티어 AI 선도 기업이자 1,000억 달러 스타게이트 프로젝트 파트너.",
        "initialX": -60,
        "initialY": -55
      },
      {
        "id": "anthropic",
        "name": "앤트로픽",
        "category": "ai_lab",
        "marketCap": 52,
        "aiCapex": 1.8,
        "aiRevenue": 0.6,
        "isFormed": true,
        "isHighGrowth": true,
        "desc": "Claude 3.5 및 컴퓨터 제어 AI를 개발한 프론티어 연구소로, 아마존과 구글로부터 대규모 자본 유치.",
        "initialX": 55,
        "initialY": -55
      },
      {
        "id": "xai",
        "name": "xAI",
        "category": "ai_lab",
        "marketCap": 55,
        "aiCapex": 2,
        "aiRevenue": 0.25,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "일론 머스크가 설립한 프론티어 랩으로, 멤피스에 10만 개 규모의 세계 최대 수랭식 슈퍼클러스터 ‘콜로서스’ 운용.",
        "initialX": 75,
        "initialY": 45
      },
      {
        "id": "deepseek",
        "name": "딥시크 (DeepSeek)",
        "category": "ai_lab",
        "marketCap": 22,
        "aiCapex": 0.4,
        "aiRevenue": 0.45,
        "isFormed": true,
        "isHighGrowth": true,
        "desc": "극단적 알고리즘 효율화와 저비용 오픈 추론 모델(DeepSeek-R1)로 무차별적 고비용 Capex 경쟁 구도를 뒤흔든 연구소.",
        "initialX": -75,
        "initialY": 45
      },
      {
        "id": "coreweave",
        "name": "코어위브",
        "category": "neocloud",
        "marketCap": 22,
        "aiCapex": 4.8,
        "aiRevenue": 1.1,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "GPU 자체를 담보로 사모펀드로부터 수십억 달러의 부채를 조달해 GPU를 재구매하는 네오클라우드 벤더 파이낸싱의 상징.",
        "initialX": 0,
        "initialY": 85
      },
      {
        "id": "vc_sovereign",
        "name": "벤처캐피탈 & 국부펀드",
        "category": "venture_capital",
        "marketCap": 500,
        "aiCapex": 0,
        "aiRevenue": 0,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "세쿼이아, 소프트뱅크, a16z 및 중동 국부펀드(MGX, PIF) 등 AI 메가 라운드 및 사모 부채를 공급하는 자본 풀.",
        "initialX": 220,
        "initialY": 155
      },
      {
        "id": "end_market",
        "name": "실제 기업 & 최종 사용자 시장",
        "category": "end_market",
        "marketCap": 1200,
        "aiCapex": 0,
        "aiRevenue": 8.9,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "실제 기업 IT 예산, 개발자 API 사용료, 유료 소비자 구독 등 AI 생태계의 유일한 외부 실질 현금 유입원.",
        "initialX": -230,
        "initialY": -170
      }
    ],
    "edges": [
      {
        "id": "msft_nvda_gpu",
        "source": "msft",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 10.5,
        "desc": "2025 Q1: Azure AI 인프라 확충을 위해 엔비디아 가속기 서버에 $10.5B 집행."
      },
      {
        "id": "goog_nvda_gpu",
        "source": "goog",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 7.8,
        "desc": "2025 Q1: 구글 클라우드(GCP) AI 하이퍼컴퓨터 확장을 위해 엔비디아 가속기에 $7.8B 발주."
      },
      {
        "id": "amzn_nvda_gpu",
        "source": "amzn",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 9,
        "desc": "2025 Q1: AWS UltraCluster 확장 및 EC2 인스턴스를 위해 엔비디아에 $9B 지출."
      },
      {
        "id": "meta_nvda_gpu",
        "source": "meta",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 8.8,
        "desc": "2025 Q1: LLaMA 모델 학습 및 메타 AI 데이터센터를 위해 엔비디아 GPU에 $8.8B 구매 집행."
      },
      {
        "id": "nvda_tsmc_gpu",
        "source": "nvda",
        "target": "tsmc",
        "flowType": "gpu_purchase",
        "amount": 9.8,
        "desc": "2025 Q1: 엔비디아가 TSMC의 선단 노드 웨이퍼 및 CoWoS 어드밴스드 패키징에 $9.8B 발주."
      },
      {
        "id": "nvda_skhynix_hbm",
        "source": "nvda",
        "target": "skhynix",
        "flowType": "hbm_purchase",
        "amount": 5.5,
        "desc": "2025 Q1: 엔비디아가 SK하이닉스의 고대역폭메모리(HBM) 공급에 $5.5B 지출."
      },
      {
        "id": "nvda_samsung_hbm",
        "source": "nvda",
        "target": "samsung",
        "flowType": "hbm_purchase",
        "amount": 3.8,
        "desc": "2025 Q1: 엔비디아가 삼성전자로부터 HBM 및 초고속 DRAM/SSD에 $3.8B 조달."
      },
      {
        "id": "tsmc_asml_equip",
        "source": "tsmc",
        "target": "asml",
        "flowType": "equipment_purchase",
        "amount": 3.2,
        "desc": "2025 Q1: TSMC가 선단 공정 라인 증설을 위해 ASML EUV/High-NA 장비에 $3.2B 지출."
      },
      {
        "id": "samsung_asml_equip",
        "source": "samsung",
        "target": "asml",
        "flowType": "equipment_purchase",
        "amount": 2.3,
        "desc": "2025 Q1: 삼성전자가 선단 DRAM 및 파운드리 확충을 위해 ASML 장비에 $2.3B 발주."
      },
      {
        "id": "skhynix_asml_equip",
        "source": "skhynix",
        "target": "asml",
        "flowType": "equipment_purchase",
        "amount": 1.8,
        "desc": "2025 Q1: SK하이닉스가 선단 HBM DRAM 양산 강화를 위해 ASML EUV 장비에 $1.8B 도입."
      },
      {
        "id": "goog_avgo_gpu",
        "source": "goog",
        "target": "avgo",
        "flowType": "gpu_purchase",
        "amount": 3,
        "desc": "2025 Q1: 구글이 맞춤형 TPU ASIC 설계 및 네트워킹을 위해 브로드컴에 $3B 지출."
      },
      {
        "id": "meta_avgo_gpu",
        "source": "meta",
        "target": "avgo",
        "flowType": "gpu_purchase",
        "amount": 2.6,
        "desc": "2025 Q1: 메타가 자체 추론/학습 가속기 MTIA 설계 및 네트워킹을 위해 브로드컴에 $2.6B 지출."
      },
      {
        "id": "msft_openai_credit",
        "source": "msft",
        "target": "openai",
        "flowType": "cloud_credit",
        "amount": 3.8,
        "desc": "2025 Q1: MS가 오픈AI에 클라우드 컴퓨팅 크레딧 및 전략적 인프라 비용으로 $3.8B 공급."
      },
      {
        "id": "openai_msft_spend",
        "source": "openai",
        "target": "msft",
        "flowType": "cloud_credit",
        "amount": 2.9,
        "desc": "2025 Q1: 오픈AI가 ChatGPT 및 API 호스팅을 위한 Azure 데이터센터 사용료로 MS에 $2.9B 지불."
      },
      {
        "id": "amzn_anthropic_equity",
        "source": "amzn",
        "target": "anthropic",
        "flowType": "equity_investment",
        "amount": 4,
        "desc": "2025 Q1: 아마존이 앤트로픽에 전략적 투자 트랜치 $4B를 직접 납입."
      },
      {
        "id": "anthropic_amzn_spend",
        "source": "anthropic",
        "target": "amzn",
        "flowType": "cloud_credit",
        "amount": 2.2,
        "desc": "2025 Q1: 앤트로픽이 Claude 모델 학습 및 Bedrock 서비스를 위해 AWS 인프라 비용 $2.2B 지출."
      },
      {
        "id": "goog_anthropic_equity",
        "source": "goog",
        "target": "anthropic",
        "flowType": "equity_investment",
        "amount": 0,
        "desc": "2025 Q1: 파트너십 약정 유지; 해당 기간 신규 지분 납입 없음."
      },
      {
        "id": "vc_coreweave_debt",
        "source": "vc_sovereign",
        "target": "coreweave",
        "flowType": "debt_collateral",
        "amount": 0,
        "desc": "2025 Q1: 기존 GPU 담보 부채 차입 집행 완료; 해당 기간 신규 부채 조달 없음."
      },
      {
        "id": "coreweave_nvda_gpu",
        "source": "coreweave",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 5.2,
        "desc": "2025 Q1: 코어위브가 엔비디아 최신 GPU에 $5.2B 대규모 구매 집행."
      },
      {
        "id": "nvda_coreweave_equity",
        "source": "nvda",
        "target": "coreweave",
        "flowType": "equity_investment",
        "amount": 0,
        "desc": "2025 Q1: 지분 관계 유지; 해당 기간 신규 지분 취득 없음."
      },
      {
        "id": "coreweave_vc_refinance",
        "source": "coreweave",
        "target": "vc_sovereign",
        "flowType": "debt_collateral",
        "amount": 1.5,
        "desc": "2025 Q1: 코어위브가 GPU 자산유동화(ABS) 및 부채 차환을 통해 사모대출 시장에 $1.5B 상환/차환."
      },
      {
        "id": "vc_openai_equity",
        "source": "vc_sovereign",
        "target": "openai",
        "flowType": "equity_investment",
        "amount": 0,
        "desc": "2025 Q1: 기존 지분 조달 자금 집행 중; 해당 기간 대규모 신규 벤처 지분 유치 없음."
      },
      {
        "id": "xai_nvda_gpu",
        "source": "xai",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 2.8,
        "desc": "2025 Q1: xAI가 멤피스 '콜로서스' 등 초대형 슈퍼클러스터용 엔비디아 GPU에 $2.8B 직접 구매."
      },
      {
        "id": "skhynix_tsmc_foundry",
        "source": "skhynix",
        "target": "tsmc",
        "flowType": "gpu_purchase",
        "amount": 1.2,
        "desc": "2025 Q1: SK하이닉스가 HBM4 맞춤형 베이스 다이 생산을 위해 TSMC 선단 파운드리에 $1.2B 발주."
      },
      {
        "id": "market_openai_rev",
        "source": "end_market",
        "target": "openai",
        "flowType": "enterprise_revenue",
        "amount": 3.5,
        "desc": "2025 Q1: 기업 및 유료 사용자의 OpenAI 소프트웨어 및 API 실매출 $3.5B 달성."
      },
      {
        "id": "market_msft_rev",
        "source": "end_market",
        "target": "msft",
        "flowType": "enterprise_revenue",
        "amount": 4.8,
        "desc": "2025 Q1: M365 Copilot 및 Azure AI 기업 실매출 $4.8B 기록."
      },
      {
        "id": "market_anthropic_rev",
        "source": "end_market",
        "target": "anthropic",
        "flowType": "enterprise_revenue",
        "amount": 1.8,
        "desc": "2025 Q1: Claude 엔터프라이즈 API 토큰 소비 실매출 $1.8B 달성."
      },
      {
        "id": "market_deepseek_rev",
        "source": "end_market",
        "target": "deepseek",
        "flowType": "enterprise_revenue",
        "amount": 0.45,
        "desc": "2025 Q1: 저비용 고효율 오픈 추론 모델 DeepSeek API 토큰 실매출 $0.45B 달성."
      }
    ]
  },
  {
    "periodId": "2025-Q2",
    "year": 2025,
    "quarter": 2,
    "label": "2025 Q2",
    "dateRange": "2025년 4월 ~ 6월",
    "title": "2025년 2분기: 블랙웰 GB200 양산 출하와 삼성전자 HBM3E 공급 본격화",
    "summary": "엔비디아가 랙당 300만 달러를 호가하는 GB200 NVL72 수랭식 캐비닛을 본격 출하합니다. 삼성전자는 글로벌 최고 티어 고객사향 HBM3E 공급 퀄을 완료합니다. 빅테크 분기 Capex가 680억 달러를 돌파하며 전력망과 변전소 인프라에 병목이 발생합니다.",
    "macroMetrics": {
      "totalAiCapex": 69,
      "realEndUserRevenue": 10.5,
      "capexRevenueDeficit": 58.5,
      "circularRatio": 60,
      "annualizedCapexRunRate": 276
    },
    "nodes": [
      {
        "id": "msft",
        "name": "마이크로소프트",
        "category": "hyperscaler",
        "marketCap": 3520,
        "aiCapex": 19.2,
        "aiRevenue": 3,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "세계 최고 클라우드 기업, Azure 기반 OpenAI 독점 파트너십 및 자체 Maia AI 가속기 개발.",
        "initialX": -140,
        "initialY": -130
      },
      {
        "id": "goog",
        "name": "알파벳 / 구글",
        "category": "hyperscaler",
        "marketCap": 2350,
        "aiCapex": 16.8,
        "aiRevenue": 2.2,
        "isFormed": true,
        "isHighGrowth": true,
        "desc": "트랜스포머 아키텍처 창시자, 자체 TPU v4/v5/v6 가속기 및 제미나이(Gemini) 생태계 구축.",
        "initialX": -185,
        "initialY": 5
      },
      {
        "id": "amzn",
        "name": "아마존 / AWS",
        "category": "hyperscaler",
        "marketCap": 2310,
        "aiCapex": 19.5,
        "aiRevenue": 1.8,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "세계 1위 클라우드 AWS, 앤트로픽 핵심 투자사(40억 달러)이자 자체 Trainium2/Inferentia 가속기 개발.",
        "initialX": 140,
        "initialY": -130
      },
      {
        "id": "meta",
        "name": "메타 플랫폼스",
        "category": "hyperscaler",
        "marketCap": 1640,
        "aiCapex": 13.5,
        "aiRevenue": 1.2,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "오픈소스 AI 생태계 주도(LLaMA 시리즈), 60만 개 이상의 GPU 클러스터 운용 및 MTIA 자체 반도체 개발.",
        "initialX": 185,
        "initialY": 5
      },
      {
        "id": "nvda",
        "name": "엔비디아",
        "category": "chipmaker",
        "marketCap": 3650,
        "aiCapex": 1.6,
        "aiRevenue": 39.2,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "글로벌 AI GPU 독점(H100/B200/루빈) 및 CUDA 소프트웨어 생태계를 기반으로 75% 이상의 마진 향유.",
        "initialX": 0,
        "initialY": -10
      },
      {
        "id": "tsmc",
        "name": "TSMC",
        "category": "chipmaker",
        "marketCap": 980,
        "aiCapex": 9.8,
        "aiRevenue": 28.1,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "엔비디아, 애플, 브로드컴 등 전 세계 모든 선단 AI 가속기를 제조하는 독점적 파운드리 및 CoWoS 패키징 선도자.",
        "initialX": -130,
        "initialY": 190
      },
      {
        "id": "avgo",
        "name": "브로드컴",
        "category": "chipmaker",
        "marketCap": 860,
        "aiCapex": 0.65,
        "aiRevenue": 4.8,
        "isFormed": true,
        "isHighGrowth": true,
        "desc": "빅테크 맞춤형 AI ASIC(구글 TPU, 메타 MTIA) 및 초고속 AI 데이터센터 스위치/네트워킹 독점 기업.",
        "initialX": -215,
        "initialY": 115
      },
      {
        "id": "skhynix",
        "name": "SK하이닉스",
        "category": "semiconductor_supply",
        "marketCap": 135,
        "aiCapex": 3.8,
        "aiRevenue": 5.6,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "엔비디아에 HBM3/HBM3E를 사실상 독점 공급하며 AI 메모리 초격차를 달성한 글로벌 HBM 1위 기업.",
        "initialX": -20,
        "initialY": -210
      },
      {
        "id": "samsung",
        "name": "삼성전자",
        "category": "semiconductor_supply",
        "marketCap": 420,
        "aiCapex": 11.5,
        "aiRevenue": 4.9,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "세계 최대 메모리 반도체 제조사이자 12단 HBM3E 및 메모리-파운드리 턴키 솔루션을 보유한 종합 반도체 기업.",
        "initialX": 110,
        "initialY": -195
      },
      {
        "id": "asml",
        "name": "ASML",
        "category": "semiconductor_supply",
        "marketCap": 430,
        "aiCapex": 0.8,
        "aiRevenue": 9,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "3nm 및 2nm 선단 반도체 제조에 필수적인 EUV 및 High-NA 극자외선 노광 장비를 독점 공급하는 네덜란드 장비사.",
        "initialX": 20,
        "initialY": 235
      },
      {
        "id": "openai",
        "name": "오픈AI",
        "category": "ai_lab",
        "marketCap": 210,
        "aiCapex": 3.8,
        "aiRevenue": 2.5,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "ChatGPT, GPT-4, o1 추론 모델을 개발한 프론티어 AI 선도 기업이자 1,000억 달러 스타게이트 프로젝트 파트너.",
        "initialX": -60,
        "initialY": -55
      },
      {
        "id": "anthropic",
        "name": "앤트로픽",
        "category": "ai_lab",
        "marketCap": 60,
        "aiCapex": 2,
        "aiRevenue": 0.8,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "Claude 3.5 및 컴퓨터 제어 AI를 개발한 프론티어 연구소로, 아마존과 구글로부터 대규모 자본 유치.",
        "initialX": 55,
        "initialY": -55
      },
      {
        "id": "xai",
        "name": "xAI",
        "category": "ai_lab",
        "marketCap": 62,
        "aiCapex": 2.2,
        "aiRevenue": 0.3,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "일론 머스크가 설립한 프론티어 랩으로, 멤피스에 10만 개 규모의 세계 최대 수랭식 슈퍼클러스터 ‘콜로서스’ 운용.",
        "initialX": 75,
        "initialY": 45
      },
      {
        "id": "deepseek",
        "name": "딥시크 (DeepSeek)",
        "category": "ai_lab",
        "marketCap": 26,
        "aiCapex": 0.5,
        "aiRevenue": 0.5,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "극단적 알고리즘 효율화와 저비용 오픈 추론 모델(DeepSeek-R1)로 무차별적 고비용 Capex 경쟁 구도를 뒤흔든 연구소.",
        "initialX": -75,
        "initialY": 45
      },
      {
        "id": "coreweave",
        "name": "코어위브",
        "category": "neocloud",
        "marketCap": 25,
        "aiCapex": 5.2,
        "aiRevenue": 1.3,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "GPU 자체를 담보로 사모펀드로부터 수십억 달러의 부채를 조달해 GPU를 재구매하는 네오클라우드 벤더 파이낸싱의 상징.",
        "initialX": 0,
        "initialY": 85
      },
      {
        "id": "vc_sovereign",
        "name": "벤처캐피탈 & 국부펀드",
        "category": "venture_capital",
        "marketCap": 500,
        "aiCapex": 0,
        "aiRevenue": 0,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "세쿼이아, 소프트뱅크, a16z 및 중동 국부펀드(MGX, PIF) 등 AI 메가 라운드 및 사모 부채를 공급하는 자본 풀.",
        "initialX": 220,
        "initialY": 155
      },
      {
        "id": "end_market",
        "name": "실제 기업 & 최종 사용자 시장",
        "category": "end_market",
        "marketCap": 1200,
        "aiCapex": 0,
        "aiRevenue": 10.5,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "실제 기업 IT 예산, 개발자 API 사용료, 유료 소비자 구독 등 AI 생태계의 유일한 외부 실질 현금 유입원.",
        "initialX": -230,
        "initialY": -170
      }
    ],
    "edges": [
      {
        "id": "msft_nvda_gpu",
        "source": "msft",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 12,
        "desc": "2025 Q2: Azure AI 인프라 확충을 위해 엔비디아 가속기 서버에 $12B 집행."
      },
      {
        "id": "goog_nvda_gpu",
        "source": "goog",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 8.9,
        "desc": "2025 Q2: 구글 클라우드(GCP) AI 하이퍼컴퓨터 확장을 위해 엔비디아 가속기에 $8.9B 발주."
      },
      {
        "id": "amzn_nvda_gpu",
        "source": "amzn",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 10.2,
        "desc": "2025 Q2: AWS UltraCluster 확장 및 EC2 인스턴스를 위해 엔비디아에 $10.2B 지출."
      },
      {
        "id": "meta_nvda_gpu",
        "source": "meta",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 9.8,
        "desc": "2025 Q2: LLaMA 모델 학습 및 메타 AI 데이터센터를 위해 엔비디아 GPU에 $9.8B 구매 집행."
      },
      {
        "id": "nvda_tsmc_gpu",
        "source": "nvda",
        "target": "tsmc",
        "flowType": "gpu_purchase",
        "amount": 11.2,
        "desc": "2025 Q2: 엔비디아가 TSMC의 선단 노드 웨이퍼 및 CoWoS 어드밴스드 패키징에 $11.2B 발주."
      },
      {
        "id": "nvda_skhynix_hbm",
        "source": "nvda",
        "target": "skhynix",
        "flowType": "hbm_purchase",
        "amount": 6,
        "desc": "2025 Q2: 엔비디아가 SK하이닉스의 고대역폭메모리(HBM) 공급에 $6B 지출."
      },
      {
        "id": "nvda_samsung_hbm",
        "source": "nvda",
        "target": "samsung",
        "flowType": "hbm_purchase",
        "amount": 4.4,
        "desc": "2025 Q2: 엔비디아가 삼성전자로부터 HBM 및 초고속 DRAM/SSD에 $4.4B 조달."
      },
      {
        "id": "tsmc_asml_equip",
        "source": "tsmc",
        "target": "asml",
        "flowType": "equipment_purchase",
        "amount": 3.4,
        "desc": "2025 Q2: TSMC가 선단 공정 라인 증설을 위해 ASML EUV/High-NA 장비에 $3.4B 지출."
      },
      {
        "id": "samsung_asml_equip",
        "source": "samsung",
        "target": "asml",
        "flowType": "equipment_purchase",
        "amount": 2.5,
        "desc": "2025 Q2: 삼성전자가 선단 DRAM 및 파운드리 확충을 위해 ASML 장비에 $2.5B 발주."
      },
      {
        "id": "skhynix_asml_equip",
        "source": "skhynix",
        "target": "asml",
        "flowType": "equipment_purchase",
        "amount": 2,
        "desc": "2025 Q2: SK하이닉스가 선단 HBM DRAM 양산 강화를 위해 ASML EUV 장비에 $2B 도입."
      },
      {
        "id": "goog_avgo_gpu",
        "source": "goog",
        "target": "avgo",
        "flowType": "gpu_purchase",
        "amount": 3.4,
        "desc": "2025 Q2: 구글이 맞춤형 TPU ASIC 설계 및 네트워킹을 위해 브로드컴에 $3.4B 지출."
      },
      {
        "id": "meta_avgo_gpu",
        "source": "meta",
        "target": "avgo",
        "flowType": "gpu_purchase",
        "amount": 2.9,
        "desc": "2025 Q2: 메타가 자체 추론/학습 가속기 MTIA 설계 및 네트워킹을 위해 브로드컴에 $2.9B 지출."
      },
      {
        "id": "msft_openai_credit",
        "source": "msft",
        "target": "openai",
        "flowType": "cloud_credit",
        "amount": 4,
        "desc": "2025 Q2: MS가 오픈AI에 클라우드 컴퓨팅 크레딧 및 전략적 인프라 비용으로 $4B 공급."
      },
      {
        "id": "openai_msft_spend",
        "source": "openai",
        "target": "msft",
        "flowType": "cloud_credit",
        "amount": 3.4,
        "desc": "2025 Q2: 오픈AI가 ChatGPT 및 API 호스팅을 위한 Azure 데이터센터 사용료로 MS에 $3.4B 지불."
      },
      {
        "id": "amzn_anthropic_equity",
        "source": "amzn",
        "target": "anthropic",
        "flowType": "equity_investment",
        "amount": 0,
        "desc": "2025 Q2: 기존 체결 투자 트랜치 이행 중; 해당 기간 신규 지분 납입 없음."
      },
      {
        "id": "anthropic_amzn_spend",
        "source": "anthropic",
        "target": "amzn",
        "flowType": "cloud_credit",
        "amount": 2.6,
        "desc": "2025 Q2: 앤트로픽이 Claude 모델 학습 및 Bedrock 서비스를 위해 AWS 인프라 비용 $2.6B 지출."
      },
      {
        "id": "goog_anthropic_equity",
        "source": "goog",
        "target": "anthropic",
        "flowType": "equity_investment",
        "amount": 1.5,
        "desc": "2025 Q2: 구글이 앤트로픽에 $1.5B 규모의 전략적 자본 투자를 집행."
      },
      {
        "id": "vc_coreweave_debt",
        "source": "vc_sovereign",
        "target": "coreweave",
        "flowType": "debt_collateral",
        "amount": 0,
        "desc": "2025 Q2: 기존 GPU 담보 부채 차입 집행 완료; 해당 기간 신규 부채 조달 없음."
      },
      {
        "id": "coreweave_nvda_gpu",
        "source": "coreweave",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 5.8,
        "desc": "2025 Q2: 코어위브가 엔비디아 최신 GPU에 $5.8B 대규모 구매 집행."
      },
      {
        "id": "nvda_coreweave_equity",
        "source": "nvda",
        "target": "coreweave",
        "flowType": "equity_investment",
        "amount": 0.8,
        "desc": "2025 Q2: 엔비디아가 핵심 네오클라우드 고객사인 코어위브에 $0.8B 전략적 지분 투자."
      },
      {
        "id": "coreweave_vc_refinance",
        "source": "coreweave",
        "target": "vc_sovereign",
        "flowType": "debt_collateral",
        "amount": 1.8,
        "desc": "2025 Q2: 코어위브가 GPU 자산유동화(ABS) 및 부채 차환을 통해 사모대출 시장에 $1.8B 상환/차환."
      },
      {
        "id": "vc_openai_equity",
        "source": "vc_sovereign",
        "target": "openai",
        "flowType": "equity_investment",
        "amount": 0,
        "desc": "2025 Q2: 기존 지분 조달 자금 집행 중; 해당 기간 대규모 신규 벤처 지분 유치 없음."
      },
      {
        "id": "xai_nvda_gpu",
        "source": "xai",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 4,
        "desc": "2025 Q2: xAI가 멤피스 '콜로서스' 등 초대형 슈퍼클러스터용 엔비디아 GPU에 $4B 직접 구매."
      },
      {
        "id": "skhynix_tsmc_foundry",
        "source": "skhynix",
        "target": "tsmc",
        "flowType": "gpu_purchase",
        "amount": 1.5,
        "desc": "2025 Q2: SK하이닉스가 HBM4 맞춤형 베이스 다이 생산을 위해 TSMC 선단 파운드리에 $1.5B 발주."
      },
      {
        "id": "market_openai_rev",
        "source": "end_market",
        "target": "openai",
        "flowType": "enterprise_revenue",
        "amount": 4.4,
        "desc": "2025 Q2: 기업 및 유료 사용자의 OpenAI 소프트웨어 및 API 실매출 $4.4B 달성."
      },
      {
        "id": "market_msft_rev",
        "source": "end_market",
        "target": "msft",
        "flowType": "enterprise_revenue",
        "amount": 6.2,
        "desc": "2025 Q2: M365 Copilot 및 Azure AI 기업 실매출 $6.2B 기록."
      },
      {
        "id": "market_anthropic_rev",
        "source": "end_market",
        "target": "anthropic",
        "flowType": "enterprise_revenue",
        "amount": 2.5,
        "desc": "2025 Q2: Claude 엔터프라이즈 API 토큰 소비 실매출 $2.5B 달성."
      },
      {
        "id": "market_deepseek_rev",
        "source": "end_market",
        "target": "deepseek",
        "flowType": "enterprise_revenue",
        "amount": 0.7,
        "desc": "2025 Q2: 저비용 고효율 오픈 추론 모델 DeepSeek API 토큰 실매출 $0.7B 달성."
      }
    ]
  },
  {
    "periodId": "2025-Q3",
    "year": 2025,
    "quarter": 3,
    "label": "2025 Q3",
    "dateRange": "2025년 7월 ~ 9월",
    "title": "2025년 3분기: 3년 감가상각 절벽 도래와 GPU 부채 리파이낸싱 압박",
    "summary": "2022~2023년에 도입된 1세대 H100 클러스터가 3년 감가상각 주기에 진입하며 임대료 하락 압박을 받습니다. 블랙웰이 표준으로 자리잡으면서 네오클라우드들은 사모펀드 대출 담보 가치 재평가에 직면하지만, 기업용 AI 에이전트 실매출은 성장세를 이어갑니다.",
    "macroMetrics": {
      "totalAiCapex": 71.9,
      "realEndUserRevenue": 12.1,
      "capexRevenueDeficit": 59.8,
      "circularRatio": 58,
      "annualizedCapexRunRate": 287.6
    },
    "nodes": [
      {
        "id": "msft",
        "name": "마이크로소프트",
        "category": "hyperscaler",
        "marketCap": 3450,
        "aiCapex": 20.5,
        "aiRevenue": 3.3,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "세계 최고 클라우드 기업, Azure 기반 OpenAI 독점 파트너십 및 자체 Maia AI 가속기 개발.",
        "initialX": -140,
        "initialY": -130
      },
      {
        "id": "goog",
        "name": "알파벳 / 구글",
        "category": "hyperscaler",
        "marketCap": 2340,
        "aiCapex": 17.2,
        "aiRevenue": 2.5,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "트랜스포머 아키텍처 창시자, 자체 TPU v4/v5/v6 가속기 및 제미나이(Gemini) 생태계 구축.",
        "initialX": -185,
        "initialY": 5
      },
      {
        "id": "amzn",
        "name": "아마존 / AWS",
        "category": "hyperscaler",
        "marketCap": 2280,
        "aiCapex": 20,
        "aiRevenue": 2.1,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "세계 1위 클라우드 AWS, 앤트로픽 핵심 투자사(40억 달러)이자 자체 Trainium2/Inferentia 가속기 개발.",
        "initialX": 140,
        "initialY": -130
      },
      {
        "id": "meta",
        "name": "메타 플랫폼스",
        "category": "hyperscaler",
        "marketCap": 1610,
        "aiCapex": 14.2,
        "aiRevenue": 1.4,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "오픈소스 AI 생태계 주도(LLaMA 시리즈), 60만 개 이상의 GPU 클러스터 운용 및 MTIA 자체 반도체 개발.",
        "initialX": 185,
        "initialY": 5
      },
      {
        "id": "nvda",
        "name": "엔비디아",
        "category": "chipmaker",
        "marketCap": 3580,
        "aiCapex": 1.7,
        "aiRevenue": 41,
        "isFormed": true,
        "isHighGrowth": true,
        "desc": "글로벌 AI GPU 독점(H100/B200/루빈) 및 CUDA 소프트웨어 생태계를 기반으로 75% 이상의 마진 향유.",
        "initialX": 0,
        "initialY": -10
      },
      {
        "id": "tsmc",
        "name": "TSMC",
        "category": "chipmaker",
        "marketCap": 960,
        "aiCapex": 10,
        "aiRevenue": 29.2,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "엔비디아, 애플, 브로드컴 등 전 세계 모든 선단 AI 가속기를 제조하는 독점적 파운드리 및 CoWoS 패키징 선도자.",
        "initialX": -130,
        "initialY": 190
      },
      {
        "id": "avgo",
        "name": "브로드컴",
        "category": "chipmaker",
        "marketCap": 840,
        "aiCapex": 0.7,
        "aiRevenue": 5.1,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "빅테크 맞춤형 AI ASIC(구글 TPU, 메타 MTIA) 및 초고속 AI 데이터센터 스위치/네트워킹 독점 기업.",
        "initialX": -215,
        "initialY": 115
      },
      {
        "id": "skhynix",
        "name": "SK하이닉스",
        "category": "semiconductor_supply",
        "marketCap": 130,
        "aiCapex": 4,
        "aiRevenue": 5.8,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "엔비디아에 HBM3/HBM3E를 사실상 독점 공급하며 AI 메모리 초격차를 달성한 글로벌 HBM 1위 기업.",
        "initialX": -20,
        "initialY": -210
      },
      {
        "id": "samsung",
        "name": "삼성전자",
        "category": "semiconductor_supply",
        "marketCap": 410,
        "aiCapex": 11.8,
        "aiRevenue": 5.3,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "세계 최대 메모리 반도체 제조사이자 12단 HBM3E 및 메모리-파운드리 턴키 솔루션을 보유한 종합 반도체 기업.",
        "initialX": 110,
        "initialY": -195
      },
      {
        "id": "asml",
        "name": "ASML",
        "category": "semiconductor_supply",
        "marketCap": 415,
        "aiCapex": 0.8,
        "aiRevenue": 9.1,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "3nm 및 2nm 선단 반도체 제조에 필수적인 EUV 및 High-NA 극자외선 노광 장비를 독점 공급하는 네덜란드 장비사.",
        "initialX": 20,
        "initialY": 235
      },
      {
        "id": "openai",
        "name": "오픈AI",
        "category": "ai_lab",
        "marketCap": 220,
        "aiCapex": 4.2,
        "aiRevenue": 2.8,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "ChatGPT, GPT-4, o1 추론 모델을 개발한 프론티어 AI 선도 기업이자 1,000억 달러 스타게이트 프로젝트 파트너.",
        "initialX": -60,
        "initialY": -55
      },
      {
        "id": "anthropic",
        "name": "앤트로픽",
        "category": "ai_lab",
        "marketCap": 65,
        "aiCapex": 2.2,
        "aiRevenue": 1,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "Claude 3.5 및 컴퓨터 제어 AI를 개발한 프론티어 연구소로, 아마존과 구글로부터 대규모 자본 유치.",
        "initialX": 55,
        "initialY": -55
      },
      {
        "id": "xai",
        "name": "xAI",
        "category": "ai_lab",
        "marketCap": 60,
        "aiCapex": 2.5,
        "aiRevenue": 0.35,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "일론 머스크가 설립한 프론티어 랩으로, 멤피스에 10만 개 규모의 세계 최대 수랭식 슈퍼클러스터 ‘콜로서스’ 운용.",
        "initialX": 75,
        "initialY": 45
      },
      {
        "id": "deepseek",
        "name": "딥시크 (DeepSeek)",
        "category": "ai_lab",
        "marketCap": 28,
        "aiCapex": 0.6,
        "aiRevenue": 0.6,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "극단적 알고리즘 효율화와 저비용 오픈 추론 모델(DeepSeek-R1)로 무차별적 고비용 Capex 경쟁 구도를 뒤흔든 연구소.",
        "initialX": -75,
        "initialY": 45
      },
      {
        "id": "coreweave",
        "name": "코어위브",
        "category": "neocloud",
        "marketCap": 28,
        "aiCapex": 5.5,
        "aiRevenue": 1.5,
        "isFormed": true,
        "isHighGrowth": true,
        "desc": "GPU 자체를 담보로 사모펀드로부터 수십억 달러의 부채를 조달해 GPU를 재구매하는 네오클라우드 벤더 파이낸싱의 상징.",
        "initialX": 0,
        "initialY": 85
      },
      {
        "id": "vc_sovereign",
        "name": "벤처캐피탈 & 국부펀드",
        "category": "venture_capital",
        "marketCap": 500,
        "aiCapex": 0,
        "aiRevenue": 0,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "세쿼이아, 소프트뱅크, a16z 및 중동 국부펀드(MGX, PIF) 등 AI 메가 라운드 및 사모 부채를 공급하는 자본 풀.",
        "initialX": 220,
        "initialY": 155
      },
      {
        "id": "end_market",
        "name": "실제 기업 & 최종 사용자 시장",
        "category": "end_market",
        "marketCap": 1200,
        "aiCapex": 0,
        "aiRevenue": 12.1,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "실제 기업 IT 예산, 개발자 API 사용료, 유료 소비자 구독 등 AI 생태계의 유일한 외부 실질 현금 유입원.",
        "initialX": -230,
        "initialY": -170
      }
    ],
    "edges": [
      {
        "id": "msft_nvda_gpu",
        "source": "msft",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 13.2,
        "desc": "2025 Q3: Azure AI 인프라 확충을 위해 엔비디아 가속기 서버에 $13.2B 집행."
      },
      {
        "id": "goog_nvda_gpu",
        "source": "goog",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 9.8,
        "desc": "2025 Q3: 구글 클라우드(GCP) AI 하이퍼컴퓨터 확장을 위해 엔비디아 가속기에 $9.8B 발주."
      },
      {
        "id": "amzn_nvda_gpu",
        "source": "amzn",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 11.5,
        "desc": "2025 Q3: AWS UltraCluster 확장 및 EC2 인스턴스를 위해 엔비디아에 $11.5B 지출."
      },
      {
        "id": "meta_nvda_gpu",
        "source": "meta",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 10.8,
        "desc": "2025 Q3: LLaMA 모델 학습 및 메타 AI 데이터센터를 위해 엔비디아 GPU에 $10.8B 구매 집행."
      },
      {
        "id": "nvda_tsmc_gpu",
        "source": "nvda",
        "target": "tsmc",
        "flowType": "gpu_purchase",
        "amount": 12.5,
        "desc": "2025 Q3: 엔비디아가 TSMC의 선단 노드 웨이퍼 및 CoWoS 어드밴스드 패키징에 $12.5B 발주."
      },
      {
        "id": "nvda_skhynix_hbm",
        "source": "nvda",
        "target": "skhynix",
        "flowType": "hbm_purchase",
        "amount": 6.4,
        "desc": "2025 Q3: 엔비디아가 SK하이닉스의 고대역폭메모리(HBM) 공급에 $6.4B 지출."
      },
      {
        "id": "nvda_samsung_hbm",
        "source": "nvda",
        "target": "samsung",
        "flowType": "hbm_purchase",
        "amount": 4.9,
        "desc": "2025 Q3: 엔비디아가 삼성전자로부터 HBM 및 초고속 DRAM/SSD에 $4.9B 조달."
      },
      {
        "id": "tsmc_asml_equip",
        "source": "tsmc",
        "target": "asml",
        "flowType": "equipment_purchase",
        "amount": 3.6,
        "desc": "2025 Q3: TSMC가 선단 공정 라인 증설을 위해 ASML EUV/High-NA 장비에 $3.6B 지출."
      },
      {
        "id": "samsung_asml_equip",
        "source": "samsung",
        "target": "asml",
        "flowType": "equipment_purchase",
        "amount": 2.7,
        "desc": "2025 Q3: 삼성전자가 선단 DRAM 및 파운드리 확충을 위해 ASML 장비에 $2.7B 발주."
      },
      {
        "id": "skhynix_asml_equip",
        "source": "skhynix",
        "target": "asml",
        "flowType": "equipment_purchase",
        "amount": 2.1,
        "desc": "2025 Q3: SK하이닉스가 선단 HBM DRAM 양산 강화를 위해 ASML EUV 장비에 $2.1B 도입."
      },
      {
        "id": "goog_avgo_gpu",
        "source": "goog",
        "target": "avgo",
        "flowType": "gpu_purchase",
        "amount": 3.8,
        "desc": "2025 Q3: 구글이 맞춤형 TPU ASIC 설계 및 네트워킹을 위해 브로드컴에 $3.8B 지출."
      },
      {
        "id": "meta_avgo_gpu",
        "source": "meta",
        "target": "avgo",
        "flowType": "gpu_purchase",
        "amount": 3.2,
        "desc": "2025 Q3: 메타가 자체 추론/학습 가속기 MTIA 설계 및 네트워킹을 위해 브로드컴에 $3.2B 지출."
      },
      {
        "id": "msft_openai_credit",
        "source": "msft",
        "target": "openai",
        "flowType": "cloud_credit",
        "amount": 4.2,
        "desc": "2025 Q3: MS가 오픈AI에 클라우드 컴퓨팅 크레딧 및 전략적 인프라 비용으로 $4.2B 공급."
      },
      {
        "id": "openai_msft_spend",
        "source": "openai",
        "target": "msft",
        "flowType": "cloud_credit",
        "amount": 3.9,
        "desc": "2025 Q3: 오픈AI가 ChatGPT 및 API 호스팅을 위한 Azure 데이터센터 사용료로 MS에 $3.9B 지불."
      },
      {
        "id": "amzn_anthropic_equity",
        "source": "amzn",
        "target": "anthropic",
        "flowType": "equity_investment",
        "amount": 0,
        "desc": "2025 Q3: 기존 체결 투자 트랜치 이행 중; 해당 기간 신규 지분 납입 없음."
      },
      {
        "id": "anthropic_amzn_spend",
        "source": "anthropic",
        "target": "amzn",
        "flowType": "cloud_credit",
        "amount": 3,
        "desc": "2025 Q3: 앤트로픽이 Claude 모델 학습 및 Bedrock 서비스를 위해 AWS 인프라 비용 $3B 지출."
      },
      {
        "id": "goog_anthropic_equity",
        "source": "goog",
        "target": "anthropic",
        "flowType": "equity_investment",
        "amount": 0,
        "desc": "2025 Q3: 파트너십 약정 유지; 해당 기간 신규 지분 납입 없음."
      },
      {
        "id": "vc_coreweave_debt",
        "source": "vc_sovereign",
        "target": "coreweave",
        "flowType": "debt_collateral",
        "amount": 6,
        "desc": "2025 Q3: 블랙스톤/마그네타 등 사모펀드가 GPU를 담보로 코어위브에 $6B 사모 대출 공급."
      },
      {
        "id": "coreweave_nvda_gpu",
        "source": "coreweave",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 6.5,
        "desc": "2025 Q3: 코어위브가 엔비디아 최신 GPU에 $6.5B 대규모 구매 집행."
      },
      {
        "id": "nvda_coreweave_equity",
        "source": "nvda",
        "target": "coreweave",
        "flowType": "equity_investment",
        "amount": 0,
        "desc": "2025 Q3: 지분 관계 유지; 해당 기간 신규 지분 취득 없음."
      },
      {
        "id": "coreweave_vc_refinance",
        "source": "coreweave",
        "target": "vc_sovereign",
        "flowType": "debt_collateral",
        "amount": 2.2,
        "desc": "2025 Q3: 코어위브가 GPU 자산유동화(ABS) 및 부채 차환을 통해 사모대출 시장에 $2.2B 상환/차환."
      },
      {
        "id": "vc_openai_equity",
        "source": "vc_sovereign",
        "target": "openai",
        "flowType": "equity_investment",
        "amount": 0,
        "desc": "2025 Q3: 기존 지분 조달 자금 집행 중; 해당 기간 대규모 신규 벤처 지분 유치 없음."
      },
      {
        "id": "xai_nvda_gpu",
        "source": "xai",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 3.2,
        "desc": "2025 Q3: xAI가 멤피스 '콜로서스' 등 초대형 슈퍼클러스터용 엔비디아 GPU에 $3.2B 직접 구매."
      },
      {
        "id": "skhynix_tsmc_foundry",
        "source": "skhynix",
        "target": "tsmc",
        "flowType": "gpu_purchase",
        "amount": 1.8,
        "desc": "2025 Q3: SK하이닉스가 HBM4 맞춤형 베이스 다이 생산을 위해 TSMC 선단 파운드리에 $1.8B 발주."
      },
      {
        "id": "market_openai_rev",
        "source": "end_market",
        "target": "openai",
        "flowType": "enterprise_revenue",
        "amount": 5.5,
        "desc": "2025 Q3: 기업 및 유료 사용자의 OpenAI 소프트웨어 및 API 실매출 $5.5B 달성."
      },
      {
        "id": "market_msft_rev",
        "source": "end_market",
        "target": "msft",
        "flowType": "enterprise_revenue",
        "amount": 7.8,
        "desc": "2025 Q3: M365 Copilot 및 Azure AI 기업 실매출 $7.8B 기록."
      },
      {
        "id": "market_anthropic_rev",
        "source": "end_market",
        "target": "anthropic",
        "flowType": "enterprise_revenue",
        "amount": 3.4,
        "desc": "2025 Q3: Claude 엔터프라이즈 API 토큰 소비 실매출 $3.4B 달성."
      },
      {
        "id": "market_deepseek_rev",
        "source": "end_market",
        "target": "deepseek",
        "flowType": "enterprise_revenue",
        "amount": 1.1,
        "desc": "2025 Q3: 저비용 고효율 오픈 추론 모델 DeepSeek API 토큰 실매출 $1.1B 달성."
      }
    ]
  },
  {
    "periodId": "2025-Q4",
    "year": 2025,
    "quarter": 4,
    "label": "2025 Q4",
    "dateRange": "2025년 10월 ~ 12월",
    "title": "2025년 4분기: 빅테크 자체 ASIC 추론 비중 35% 돌파와 데이터센터 전력 한계",
    "summary": "구글 TPU v6, 아마존 트레니엄2, 메타 MTIA v2 등 빅테크 자체 ASIC이 내부 배치 추론 작업의 35% 이상을 처리하기 시작합니다. 데이터센터 증설의 핵심 병목이 칩 공급에서 전력망 용량으로 완전히 이동하며, TSMC CoWoS 생산능력은 월 4만 5천 장을 넘어섭니다.",
    "macroMetrics": {
      "totalAiCapex": 75.3,
      "realEndUserRevenue": 14.2,
      "capexRevenueDeficit": 61.1,
      "circularRatio": 56,
      "annualizedCapexRunRate": 301.2
    },
    "nodes": [
      {
        "id": "msft",
        "name": "마이크로소프트",
        "category": "hyperscaler",
        "marketCap": 3580,
        "aiCapex": 21.5,
        "aiRevenue": 3.6,
        "isFormed": true,
        "isHighGrowth": true,
        "desc": "세계 최고 클라우드 기업, Azure 기반 OpenAI 독점 파트너십 및 자체 Maia AI 가속기 개발.",
        "initialX": -140,
        "initialY": -130
      },
      {
        "id": "goog",
        "name": "알파벳 / 구글",
        "category": "hyperscaler",
        "marketCap": 2420,
        "aiCapex": 18.5,
        "aiRevenue": 2.8,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "트랜스포머 아키텍처 창시자, 자체 TPU v4/v5/v6 가속기 및 제미나이(Gemini) 생태계 구축.",
        "initialX": -185,
        "initialY": 5
      },
      {
        "id": "amzn",
        "name": "아마존 / AWS",
        "category": "hyperscaler",
        "marketCap": 2360,
        "aiCapex": 20.8,
        "aiRevenue": 2.4,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "세계 1위 클라우드 AWS, 앤트로픽 핵심 투자사(40억 달러)이자 자체 Trainium2/Inferentia 가속기 개발.",
        "initialX": 140,
        "initialY": -130
      },
      {
        "id": "meta",
        "name": "메타 플랫폼스",
        "category": "hyperscaler",
        "marketCap": 1680,
        "aiCapex": 15,
        "aiRevenue": 1.6,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "오픈소스 AI 생태계 주도(LLaMA 시리즈), 60만 개 이상의 GPU 클러스터 운용 및 MTIA 자체 반도체 개발.",
        "initialX": 185,
        "initialY": 5
      },
      {
        "id": "nvda",
        "name": "엔비디아",
        "category": "chipmaker",
        "marketCap": 3720,
        "aiCapex": 1.8,
        "aiRevenue": 43.5,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "글로벌 AI GPU 독점(H100/B200/루빈) 및 CUDA 소프트웨어 생태계를 기반으로 75% 이상의 마진 향유.",
        "initialX": 0,
        "initialY": -10
      },
      {
        "id": "tsmc",
        "name": "TSMC",
        "category": "chipmaker",
        "marketCap": 1010,
        "aiCapex": 10.2,
        "aiRevenue": 30.5,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "엔비디아, 애플, 브로드컴 등 전 세계 모든 선단 AI 가속기를 제조하는 독점적 파운드리 및 CoWoS 패키징 선도자.",
        "initialX": -130,
        "initialY": 190
      },
      {
        "id": "avgo",
        "name": "브로드컴",
        "category": "chipmaker",
        "marketCap": 880,
        "aiCapex": 0.75,
        "aiRevenue": 5.5,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "빅테크 맞춤형 AI ASIC(구글 TPU, 메타 MTIA) 및 초고속 AI 데이터센터 스위치/네트워킹 독점 기업.",
        "initialX": -215,
        "initialY": 115
      },
      {
        "id": "skhynix",
        "name": "SK하이닉스",
        "category": "semiconductor_supply",
        "marketCap": 138,
        "aiCapex": 4.2,
        "aiRevenue": 6.2,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "엔비디아에 HBM3/HBM3E를 사실상 독점 공급하며 AI 메모리 초격차를 달성한 글로벌 HBM 1위 기업.",
        "initialX": -20,
        "initialY": -210
      },
      {
        "id": "samsung",
        "name": "삼성전자",
        "category": "semiconductor_supply",
        "marketCap": 430,
        "aiCapex": 12,
        "aiRevenue": 5.8,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "세계 최대 메모리 반도체 제조사이자 12단 HBM3E 및 메모리-파운드리 턴키 솔루션을 보유한 종합 반도체 기업.",
        "initialX": 110,
        "initialY": -195
      },
      {
        "id": "asml",
        "name": "ASML",
        "category": "semiconductor_supply",
        "marketCap": 435,
        "aiCapex": 0.8,
        "aiRevenue": 9.3,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "3nm 및 2nm 선단 반도체 제조에 필수적인 EUV 및 High-NA 극자외선 노광 장비를 독점 공급하는 네덜란드 장비사.",
        "initialX": 20,
        "initialY": 235
      },
      {
        "id": "openai",
        "name": "오픈AI",
        "category": "ai_lab",
        "marketCap": 240,
        "aiCapex": 4.6,
        "aiRevenue": 3.2,
        "isFormed": true,
        "isHighGrowth": true,
        "desc": "ChatGPT, GPT-4, o1 추론 모델을 개발한 프론티어 AI 선도 기업이자 1,000억 달러 스타게이트 프로젝트 파트너.",
        "initialX": -60,
        "initialY": -55
      },
      {
        "id": "anthropic",
        "name": "앤트로픽",
        "category": "ai_lab",
        "marketCap": 72,
        "aiCapex": 2.5,
        "aiRevenue": 1.2,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "Claude 3.5 및 컴퓨터 제어 AI를 개발한 프론티어 연구소로, 아마존과 구글로부터 대규모 자본 유치.",
        "initialX": 55,
        "initialY": -55
      },
      {
        "id": "xai",
        "name": "xAI",
        "category": "ai_lab",
        "marketCap": 65,
        "aiCapex": 2.8,
        "aiRevenue": 0.4,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "일론 머스크가 설립한 프론티어 랩으로, 멤피스에 10만 개 규모의 세계 최대 수랭식 슈퍼클러스터 ‘콜로서스’ 운용.",
        "initialX": 75,
        "initialY": 45
      },
      {
        "id": "deepseek",
        "name": "딥시크 (DeepSeek)",
        "category": "ai_lab",
        "marketCap": 30,
        "aiCapex": 0.7,
        "aiRevenue": 0.7,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "극단적 알고리즘 효율화와 저비용 오픈 추론 모델(DeepSeek-R1)로 무차별적 고비용 Capex 경쟁 구도를 뒤흔든 연구소.",
        "initialX": -75,
        "initialY": 45
      },
      {
        "id": "coreweave",
        "name": "코어위브",
        "category": "neocloud",
        "marketCap": 30,
        "aiCapex": 5.8,
        "aiRevenue": 1.8,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "GPU 자체를 담보로 사모펀드로부터 수십억 달러의 부채를 조달해 GPU를 재구매하는 네오클라우드 벤더 파이낸싱의 상징.",
        "initialX": 0,
        "initialY": 85
      },
      {
        "id": "vc_sovereign",
        "name": "벤처캐피탈 & 국부펀드",
        "category": "venture_capital",
        "marketCap": 500,
        "aiCapex": 0,
        "aiRevenue": 0,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "세쿼이아, 소프트뱅크, a16z 및 중동 국부펀드(MGX, PIF) 등 AI 메가 라운드 및 사모 부채를 공급하는 자본 풀.",
        "initialX": 220,
        "initialY": 155
      },
      {
        "id": "end_market",
        "name": "실제 기업 & 최종 사용자 시장",
        "category": "end_market",
        "marketCap": 1200,
        "aiCapex": 0,
        "aiRevenue": 14.2,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "실제 기업 IT 예산, 개발자 API 사용료, 유료 소비자 구독 등 AI 생태계의 유일한 외부 실질 현금 유입원.",
        "initialX": -230,
        "initialY": -170
      }
    ],
    "edges": [
      {
        "id": "msft_nvda_gpu",
        "source": "msft",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 14,
        "desc": "2025 Q4: Azure AI 인프라 확충을 위해 엔비디아 가속기 서버에 $14B 집행."
      },
      {
        "id": "goog_nvda_gpu",
        "source": "goog",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 10.5,
        "desc": "2025 Q4: 구글 클라우드(GCP) AI 하이퍼컴퓨터 확장을 위해 엔비디아 가속기에 $10.5B 발주."
      },
      {
        "id": "amzn_nvda_gpu",
        "source": "amzn",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 12.2,
        "desc": "2025 Q4: AWS UltraCluster 확장 및 EC2 인스턴스를 위해 엔비디아에 $12.2B 지출."
      },
      {
        "id": "meta_nvda_gpu",
        "source": "meta",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 11.6,
        "desc": "2025 Q4: LLaMA 모델 학습 및 메타 AI 데이터센터를 위해 엔비디아 GPU에 $11.6B 구매 집행."
      },
      {
        "id": "nvda_tsmc_gpu",
        "source": "nvda",
        "target": "tsmc",
        "flowType": "gpu_purchase",
        "amount": 13.2,
        "desc": "2025 Q4: 엔비디아가 TSMC의 선단 노드 웨이퍼 및 CoWoS 어드밴스드 패키징에 $13.2B 발주."
      },
      {
        "id": "nvda_skhynix_hbm",
        "source": "nvda",
        "target": "skhynix",
        "flowType": "hbm_purchase",
        "amount": 6.8,
        "desc": "2025 Q4: 엔비디아가 SK하이닉스의 고대역폭메모리(HBM) 공급에 $6.8B 지출."
      },
      {
        "id": "nvda_samsung_hbm",
        "source": "nvda",
        "target": "samsung",
        "flowType": "hbm_purchase",
        "amount": 5.3,
        "desc": "2025 Q4: 엔비디아가 삼성전자로부터 HBM 및 초고속 DRAM/SSD에 $5.3B 조달."
      },
      {
        "id": "tsmc_asml_equip",
        "source": "tsmc",
        "target": "asml",
        "flowType": "equipment_purchase",
        "amount": 3.8,
        "desc": "2025 Q4: TSMC가 선단 공정 라인 증설을 위해 ASML EUV/High-NA 장비에 $3.8B 지출."
      },
      {
        "id": "samsung_asml_equip",
        "source": "samsung",
        "target": "asml",
        "flowType": "equipment_purchase",
        "amount": 2.8,
        "desc": "2025 Q4: 삼성전자가 선단 DRAM 및 파운드리 확충을 위해 ASML 장비에 $2.8B 발주."
      },
      {
        "id": "skhynix_asml_equip",
        "source": "skhynix",
        "target": "asml",
        "flowType": "equipment_purchase",
        "amount": 2.2,
        "desc": "2025 Q4: SK하이닉스가 선단 HBM DRAM 양산 강화를 위해 ASML EUV 장비에 $2.2B 도입."
      },
      {
        "id": "goog_avgo_gpu",
        "source": "goog",
        "target": "avgo",
        "flowType": "gpu_purchase",
        "amount": 4.1,
        "desc": "2025 Q4: 구글이 맞춤형 TPU ASIC 설계 및 네트워킹을 위해 브로드컴에 $4.1B 지출."
      },
      {
        "id": "meta_avgo_gpu",
        "source": "meta",
        "target": "avgo",
        "flowType": "gpu_purchase",
        "amount": 3.5,
        "desc": "2025 Q4: 메타가 자체 추론/학습 가속기 MTIA 설계 및 네트워킹을 위해 브로드컴에 $3.5B 지출."
      },
      {
        "id": "msft_openai_credit",
        "source": "msft",
        "target": "openai",
        "flowType": "cloud_credit",
        "amount": 4.4,
        "desc": "2025 Q4: MS가 오픈AI에 클라우드 컴퓨팅 크레딧 및 전략적 인프라 비용으로 $4.4B 공급."
      },
      {
        "id": "openai_msft_spend",
        "source": "openai",
        "target": "msft",
        "flowType": "cloud_credit",
        "amount": 4.4,
        "desc": "2025 Q4: 오픈AI가 ChatGPT 및 API 호스팅을 위한 Azure 데이터센터 사용료로 MS에 $4.4B 지불."
      },
      {
        "id": "amzn_anthropic_equity",
        "source": "amzn",
        "target": "anthropic",
        "flowType": "equity_investment",
        "amount": 0,
        "desc": "2025 Q4: 기존 체결 투자 트랜치 이행 중; 해당 기간 신규 지분 납입 없음."
      },
      {
        "id": "anthropic_amzn_spend",
        "source": "anthropic",
        "target": "amzn",
        "flowType": "cloud_credit",
        "amount": 3.3,
        "desc": "2025 Q4: 앤트로픽이 Claude 모델 학습 및 Bedrock 서비스를 위해 AWS 인프라 비용 $3.3B 지출."
      },
      {
        "id": "goog_anthropic_equity",
        "source": "goog",
        "target": "anthropic",
        "flowType": "equity_investment",
        "amount": 0,
        "desc": "2025 Q4: 파트너십 약정 유지; 해당 기간 신규 지분 납입 없음."
      },
      {
        "id": "vc_coreweave_debt",
        "source": "vc_sovereign",
        "target": "coreweave",
        "flowType": "debt_collateral",
        "amount": 0,
        "desc": "2025 Q4: 기존 GPU 담보 부채 차입 집행 완료; 해당 기간 신규 부채 조달 없음."
      },
      {
        "id": "coreweave_nvda_gpu",
        "source": "coreweave",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 7,
        "desc": "2025 Q4: 코어위브가 엔비디아 최신 GPU에 $7B 대규모 구매 집행."
      },
      {
        "id": "nvda_coreweave_equity",
        "source": "nvda",
        "target": "coreweave",
        "flowType": "equity_investment",
        "amount": 0,
        "desc": "2025 Q4: 지분 관계 유지; 해당 기간 신규 지분 취득 없음."
      },
      {
        "id": "coreweave_vc_refinance",
        "source": "coreweave",
        "target": "vc_sovereign",
        "flowType": "debt_collateral",
        "amount": 2.6,
        "desc": "2025 Q4: 코어위브가 GPU 자산유동화(ABS) 및 부채 차환을 통해 사모대출 시장에 $2.6B 상환/차환."
      },
      {
        "id": "vc_openai_equity",
        "source": "vc_sovereign",
        "target": "openai",
        "flowType": "equity_investment",
        "amount": 8,
        "desc": "2025 Q4: 글로벌 벤처/국부펀드 신디케이트가 오픈AI에 $8B 규모 메가 지분 투자 유치."
      },
      {
        "id": "xai_nvda_gpu",
        "source": "xai",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 4.5,
        "desc": "2025 Q4: xAI가 멤피스 '콜로서스' 등 초대형 슈퍼클러스터용 엔비디아 GPU에 $4.5B 직접 구매."
      },
      {
        "id": "skhynix_tsmc_foundry",
        "source": "skhynix",
        "target": "tsmc",
        "flowType": "gpu_purchase",
        "amount": 2.1,
        "desc": "2025 Q4: SK하이닉스가 HBM4 맞춤형 베이스 다이 생산을 위해 TSMC 선단 파운드리에 $2.1B 발주."
      },
      {
        "id": "market_openai_rev",
        "source": "end_market",
        "target": "openai",
        "flowType": "enterprise_revenue",
        "amount": 6.8,
        "desc": "2025 Q4: 기업 및 유료 사용자의 OpenAI 소프트웨어 및 API 실매출 $6.8B 달성."
      },
      {
        "id": "market_msft_rev",
        "source": "end_market",
        "target": "msft",
        "flowType": "enterprise_revenue",
        "amount": 9.8,
        "desc": "2025 Q4: M365 Copilot 및 Azure AI 기업 실매출 $9.8B 기록."
      },
      {
        "id": "market_anthropic_rev",
        "source": "end_market",
        "target": "anthropic",
        "flowType": "enterprise_revenue",
        "amount": 4.5,
        "desc": "2025 Q4: Claude 엔터프라이즈 API 토큰 소비 실매출 $4.5B 달성."
      },
      {
        "id": "market_deepseek_rev",
        "source": "end_market",
        "target": "deepseek",
        "flowType": "enterprise_revenue",
        "amount": 1.6,
        "desc": "2025 Q4: 저비용 고효율 오픈 추론 모델 DeepSeek API 토큰 실매출 $1.6B 달성."
      }
    ]
  },
  {
    "periodId": "2026-Q1",
    "year": 2026,
    "quarter": 1,
    "label": "2026 Q1",
    "dateRange": "2026년 1월 ~ 3월",
    "title": "2026년 1분기: 순환 클라우드 크레딧 및 벤더 락인에 대한 글로벌 반독점 조사",
    "summary": "미국 FTC, 유럽연합 집행위, 영국 CMA가 빅테크와 프론티어 AI 랩스 간의 순환형 클라우드 크레딧 교환 및 벤더 락인 계약에 대해 공식 조사에 착수합니다. 엔비디아는 차세대 HBM4를 탑재한 베라 루빈(Vera Rubin) 아키텍처를 공개합니다.",
    "macroMetrics": {
      "totalAiCapex": 77.1,
      "realEndUserRevenue": 16,
      "capexRevenueDeficit": 61.1,
      "circularRatio": 52,
      "annualizedCapexRunRate": 308.4
    },
    "nodes": [
      {
        "id": "msft",
        "name": "마이크로소프트",
        "category": "hyperscaler",
        "marketCap": 3620,
        "aiCapex": 21.8,
        "aiRevenue": 4,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "세계 최고 클라우드 기업, Azure 기반 OpenAI 독점 파트너십 및 자체 Maia AI 가속기 개발.",
        "initialX": -140,
        "initialY": -130
      },
      {
        "id": "goog",
        "name": "알파벳 / 구글",
        "category": "hyperscaler",
        "marketCap": 2480,
        "aiCapex": 18.8,
        "aiRevenue": 3.2,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "트랜스포머 아키텍처 창시자, 자체 TPU v4/v5/v6 가속기 및 제미나이(Gemini) 생태계 구축.",
        "initialX": -185,
        "initialY": 5
      },
      {
        "id": "amzn",
        "name": "아마존 / AWS",
        "category": "hyperscaler",
        "marketCap": 2420,
        "aiCapex": 21,
        "aiRevenue": 2.7,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "세계 1위 클라우드 AWS, 앤트로픽 핵심 투자사(40억 달러)이자 자체 Trainium2/Inferentia 가속기 개발.",
        "initialX": 140,
        "initialY": -130
      },
      {
        "id": "meta",
        "name": "메타 플랫폼스",
        "category": "hyperscaler",
        "marketCap": 1720,
        "aiCapex": 15.5,
        "aiRevenue": 1.8,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "오픈소스 AI 생태계 주도(LLaMA 시리즈), 60만 개 이상의 GPU 클러스터 운용 및 MTIA 자체 반도체 개발.",
        "initialX": 185,
        "initialY": 5
      },
      {
        "id": "nvda",
        "name": "엔비디아",
        "category": "chipmaker",
        "marketCap": 3750,
        "aiCapex": 1.9,
        "aiRevenue": 44,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "글로벌 AI GPU 독점(H100/B200/루빈) 및 CUDA 소프트웨어 생태계를 기반으로 75% 이상의 마진 향유.",
        "initialX": 0,
        "initialY": -10
      },
      {
        "id": "tsmc",
        "name": "TSMC",
        "category": "chipmaker",
        "marketCap": 1040,
        "aiCapex": 10.5,
        "aiRevenue": 31.8,
        "isFormed": true,
        "isHighGrowth": true,
        "desc": "엔비디아, 애플, 브로드컴 등 전 세계 모든 선단 AI 가속기를 제조하는 독점적 파운드리 및 CoWoS 패키징 선도자.",
        "initialX": -130,
        "initialY": 190
      },
      {
        "id": "avgo",
        "name": "브로드컴",
        "category": "chipmaker",
        "marketCap": 910,
        "aiCapex": 0.8,
        "aiRevenue": 5.8,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "빅테크 맞춤형 AI ASIC(구글 TPU, 메타 MTIA) 및 초고속 AI 데이터센터 스위치/네트워킹 독점 기업.",
        "initialX": -215,
        "initialY": 115
      },
      {
        "id": "skhynix",
        "name": "SK하이닉스",
        "category": "semiconductor_supply",
        "marketCap": 142,
        "aiCapex": 4.4,
        "aiRevenue": 6.5,
        "isFormed": true,
        "isHighGrowth": true,
        "desc": "엔비디아에 HBM3/HBM3E를 사실상 독점 공급하며 AI 메모리 초격차를 달성한 글로벌 HBM 1위 기업.",
        "initialX": -20,
        "initialY": -210
      },
      {
        "id": "samsung",
        "name": "삼성전자",
        "category": "semiconductor_supply",
        "marketCap": 440,
        "aiCapex": 12.2,
        "aiRevenue": 6.2,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "세계 최대 메모리 반도체 제조사이자 12단 HBM3E 및 메모리-파운드리 턴키 솔루션을 보유한 종합 반도체 기업.",
        "initialX": 110,
        "initialY": -195
      },
      {
        "id": "asml",
        "name": "ASML",
        "category": "semiconductor_supply",
        "marketCap": 440,
        "aiCapex": 0.8,
        "aiRevenue": 9.5,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "3nm 및 2nm 선단 반도체 제조에 필수적인 EUV 및 High-NA 극자외선 노광 장비를 독점 공급하는 네덜란드 장비사.",
        "initialX": 20,
        "initialY": 235
      },
      {
        "id": "openai",
        "name": "오픈AI",
        "category": "ai_lab",
        "marketCap": 255,
        "aiCapex": 4.8,
        "aiRevenue": 3.5,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "ChatGPT, GPT-4, o1 추론 모델을 개발한 프론티어 AI 선도 기업이자 1,000억 달러 스타게이트 프로젝트 파트너.",
        "initialX": -60,
        "initialY": -55
      },
      {
        "id": "anthropic",
        "name": "앤트로픽",
        "category": "ai_lab",
        "marketCap": 78,
        "aiCapex": 2.6,
        "aiRevenue": 1.4,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "Claude 3.5 및 컴퓨터 제어 AI를 개발한 프론티어 연구소로, 아마존과 구글로부터 대규모 자본 유치.",
        "initialX": 55,
        "initialY": -55
      },
      {
        "id": "xai",
        "name": "xAI",
        "category": "ai_lab",
        "marketCap": 68,
        "aiCapex": 3,
        "aiRevenue": 0.5,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "일론 머스크가 설립한 프론티어 랩으로, 멤피스에 10만 개 규모의 세계 최대 수랭식 슈퍼클러스터 ‘콜로서스’ 운용.",
        "initialX": 75,
        "initialY": 45
      },
      {
        "id": "deepseek",
        "name": "딥시크 (DeepSeek)",
        "category": "ai_lab",
        "marketCap": 32,
        "aiCapex": 0.8,
        "aiRevenue": 0.8,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "극단적 알고리즘 효율화와 저비용 오픈 추론 모델(DeepSeek-R1)로 무차별적 고비용 Capex 경쟁 구도를 뒤흔든 연구소.",
        "initialX": -75,
        "initialY": 45
      },
      {
        "id": "coreweave",
        "name": "코어위브",
        "category": "neocloud",
        "marketCap": 32,
        "aiCapex": 6,
        "aiRevenue": 2,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "GPU 자체를 담보로 사모펀드로부터 수십억 달러의 부채를 조달해 GPU를 재구매하는 네오클라우드 벤더 파이낸싱의 상징.",
        "initialX": 0,
        "initialY": 85
      },
      {
        "id": "vc_sovereign",
        "name": "벤처캐피탈 & 국부펀드",
        "category": "venture_capital",
        "marketCap": 500,
        "aiCapex": 0,
        "aiRevenue": 0,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "세쿼이아, 소프트뱅크, a16z 및 중동 국부펀드(MGX, PIF) 등 AI 메가 라운드 및 사모 부채를 공급하는 자본 풀.",
        "initialX": 220,
        "initialY": 155
      },
      {
        "id": "end_market",
        "name": "실제 기업 & 최종 사용자 시장",
        "category": "end_market",
        "marketCap": 1200,
        "aiCapex": 0,
        "aiRevenue": 16,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "실제 기업 IT 예산, 개발자 API 사용료, 유료 소비자 구독 등 AI 생태계의 유일한 외부 실질 현금 유입원.",
        "initialX": -230,
        "initialY": -170
      }
    ],
    "edges": [
      {
        "id": "msft_nvda_gpu",
        "source": "msft",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 14.5,
        "desc": "2026 Q1: Azure AI 인프라 확충을 위해 엔비디아 가속기 서버에 $14.5B 집행."
      },
      {
        "id": "goog_nvda_gpu",
        "source": "goog",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 11,
        "desc": "2026 Q1: 구글 클라우드(GCP) AI 하이퍼컴퓨터 확장을 위해 엔비디아 가속기에 $11B 발주."
      },
      {
        "id": "amzn_nvda_gpu",
        "source": "amzn",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 12.5,
        "desc": "2026 Q1: AWS UltraCluster 확장 및 EC2 인스턴스를 위해 엔비디아에 $12.5B 지출."
      },
      {
        "id": "meta_nvda_gpu",
        "source": "meta",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 12,
        "desc": "2026 Q1: LLaMA 모델 학습 및 메타 AI 데이터센터를 위해 엔비디아 GPU에 $12B 구매 집행."
      },
      {
        "id": "nvda_tsmc_gpu",
        "source": "nvda",
        "target": "tsmc",
        "flowType": "gpu_purchase",
        "amount": 13.5,
        "desc": "2026 Q1: 엔비디아가 TSMC의 선단 노드 웨이퍼 및 CoWoS 어드밴스드 패키징에 $13.5B 발주."
      },
      {
        "id": "nvda_skhynix_hbm",
        "source": "nvda",
        "target": "skhynix",
        "flowType": "hbm_purchase",
        "amount": 7,
        "desc": "2026 Q1: 엔비디아가 SK하이닉스의 고대역폭메모리(HBM) 공급에 $7B 지출."
      },
      {
        "id": "nvda_samsung_hbm",
        "source": "nvda",
        "target": "samsung",
        "flowType": "hbm_purchase",
        "amount": 5.6,
        "desc": "2026 Q1: 엔비디아가 삼성전자로부터 HBM 및 초고속 DRAM/SSD에 $5.6B 조달."
      },
      {
        "id": "tsmc_asml_equip",
        "source": "tsmc",
        "target": "asml",
        "flowType": "equipment_purchase",
        "amount": 3.9,
        "desc": "2026 Q1: TSMC가 선단 공정 라인 증설을 위해 ASML EUV/High-NA 장비에 $3.9B 지출."
      },
      {
        "id": "samsung_asml_equip",
        "source": "samsung",
        "target": "asml",
        "flowType": "equipment_purchase",
        "amount": 2.9,
        "desc": "2026 Q1: 삼성전자가 선단 DRAM 및 파운드리 확충을 위해 ASML 장비에 $2.9B 발주."
      },
      {
        "id": "skhynix_asml_equip",
        "source": "skhynix",
        "target": "asml",
        "flowType": "equipment_purchase",
        "amount": 2.3,
        "desc": "2026 Q1: SK하이닉스가 선단 HBM DRAM 양산 강화를 위해 ASML EUV 장비에 $2.3B 도입."
      },
      {
        "id": "goog_avgo_gpu",
        "source": "goog",
        "target": "avgo",
        "flowType": "gpu_purchase",
        "amount": 4.3,
        "desc": "2026 Q1: 구글이 맞춤형 TPU ASIC 설계 및 네트워킹을 위해 브로드컴에 $4.3B 지출."
      },
      {
        "id": "meta_avgo_gpu",
        "source": "meta",
        "target": "avgo",
        "flowType": "gpu_purchase",
        "amount": 3.7,
        "desc": "2026 Q1: 메타가 자체 추론/학습 가속기 MTIA 설계 및 네트워킹을 위해 브로드컴에 $3.7B 지출."
      },
      {
        "id": "msft_openai_credit",
        "source": "msft",
        "target": "openai",
        "flowType": "cloud_credit",
        "amount": 4.5,
        "desc": "2026 Q1: MS가 오픈AI에 클라우드 컴퓨팅 크레딧 및 전략적 인프라 비용으로 $4.5B 공급."
      },
      {
        "id": "openai_msft_spend",
        "source": "openai",
        "target": "msft",
        "flowType": "cloud_credit",
        "amount": 4.8,
        "desc": "2026 Q1: 오픈AI가 ChatGPT 및 API 호스팅을 위한 Azure 데이터센터 사용료로 MS에 $4.8B 지불."
      },
      {
        "id": "amzn_anthropic_equity",
        "source": "amzn",
        "target": "anthropic",
        "flowType": "equity_investment",
        "amount": 3,
        "desc": "2026 Q1: 아마존이 앤트로픽에 전략적 투자 트랜치 $3B를 직접 납입."
      },
      {
        "id": "anthropic_amzn_spend",
        "source": "anthropic",
        "target": "amzn",
        "flowType": "cloud_credit",
        "amount": 3.5,
        "desc": "2026 Q1: 앤트로픽이 Claude 모델 학습 및 Bedrock 서비스를 위해 AWS 인프라 비용 $3.5B 지출."
      },
      {
        "id": "goog_anthropic_equity",
        "source": "goog",
        "target": "anthropic",
        "flowType": "equity_investment",
        "amount": 0,
        "desc": "2026 Q1: 파트너십 약정 유지; 해당 기간 신규 지분 납입 없음."
      },
      {
        "id": "vc_coreweave_debt",
        "source": "vc_sovereign",
        "target": "coreweave",
        "flowType": "debt_collateral",
        "amount": 0,
        "desc": "2026 Q1: 기존 GPU 담보 부채 차입 집행 완료; 해당 기간 신규 부채 조달 없음."
      },
      {
        "id": "coreweave_nvda_gpu",
        "source": "coreweave",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 7.2,
        "desc": "2026 Q1: 코어위브가 엔비디아 최신 GPU에 $7.2B 대규모 구매 집행."
      },
      {
        "id": "nvda_coreweave_equity",
        "source": "nvda",
        "target": "coreweave",
        "flowType": "equity_investment",
        "amount": 0,
        "desc": "2026 Q1: 지분 관계 유지; 해당 기간 신규 지분 취득 없음."
      },
      {
        "id": "coreweave_vc_refinance",
        "source": "coreweave",
        "target": "vc_sovereign",
        "flowType": "debt_collateral",
        "amount": 2.8,
        "desc": "2026 Q1: 코어위브가 GPU 자산유동화(ABS) 및 부채 차환을 통해 사모대출 시장에 $2.8B 상환/차환."
      },
      {
        "id": "vc_openai_equity",
        "source": "vc_sovereign",
        "target": "openai",
        "flowType": "equity_investment",
        "amount": 0,
        "desc": "2026 Q1: 기존 지분 조달 자금 집행 중; 해당 기간 대규모 신규 벤처 지분 유치 없음."
      },
      {
        "id": "xai_nvda_gpu",
        "source": "xai",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 5,
        "desc": "2026 Q1: xAI가 멤피스 '콜로서스' 등 초대형 슈퍼클러스터용 엔비디아 GPU에 $5B 직접 구매."
      },
      {
        "id": "skhynix_tsmc_foundry",
        "source": "skhynix",
        "target": "tsmc",
        "flowType": "gpu_purchase",
        "amount": 2.5,
        "desc": "2026 Q1: SK하이닉스가 HBM4 맞춤형 베이스 다이 생산을 위해 TSMC 선단 파운드리에 $2.5B 발주."
      },
      {
        "id": "market_openai_rev",
        "source": "end_market",
        "target": "openai",
        "flowType": "enterprise_revenue",
        "amount": 8.2,
        "desc": "2026 Q1: 기업 및 유료 사용자의 OpenAI 소프트웨어 및 API 실매출 $8.2B 달성."
      },
      {
        "id": "market_msft_rev",
        "source": "end_market",
        "target": "msft",
        "flowType": "enterprise_revenue",
        "amount": 12,
        "desc": "2026 Q1: M365 Copilot 및 Azure AI 기업 실매출 $12B 기록."
      },
      {
        "id": "market_anthropic_rev",
        "source": "end_market",
        "target": "anthropic",
        "flowType": "enterprise_revenue",
        "amount": 5.8,
        "desc": "2026 Q1: Claude 엔터프라이즈 API 토큰 소비 실매출 $5.8B 달성."
      },
      {
        "id": "market_deepseek_rev",
        "source": "end_market",
        "target": "deepseek",
        "flowType": "enterprise_revenue",
        "amount": 2.2,
        "desc": "2026 Q1: 저비용 고효율 오픈 추론 모델 DeepSeek API 토큰 실매출 $2.2B 달성."
      }
    ]
  },
  {
    "periodId": "2026-Q2",
    "year": 2026,
    "quarter": 2,
    "label": "2026 Q2",
    "dateRange": "2026년 4월 ~ 6월",
    "title": "2026년 2분기: HBM4 테이프아웃과 TSMC 로직 베이스 다이 연합",
    "summary": "삼성전자와 SK하이닉스가 TSMC 선단 로직 베이스 다이를 결합한 차세대 HBM4 테이프아웃을 단행합니다. AI 반도체가 2nm로 진입함에 따라 발열과 대역폭 한계를 극복하기 위해 메모리-파운드리 간 초격차 연합이 강화됩니다.",
    "macroMetrics": {
      "totalAiCapex": 80,
      "realEndUserRevenue": 18.2,
      "capexRevenueDeficit": 61.8,
      "circularRatio": 50,
      "annualizedCapexRunRate": 320
    },
    "nodes": [
      {
        "id": "msft",
        "name": "마이크로소프트",
        "category": "hyperscaler",
        "marketCap": 3710,
        "aiCapex": 22.5,
        "aiRevenue": 4.3,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "세계 최고 클라우드 기업, Azure 기반 OpenAI 독점 파트너십 및 자체 Maia AI 가속기 개발.",
        "initialX": -140,
        "initialY": -130
      },
      {
        "id": "goog",
        "name": "알파벳 / 구글",
        "category": "hyperscaler",
        "marketCap": 2520,
        "aiCapex": 19.5,
        "aiRevenue": 3.5,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "트랜스포머 아키텍처 창시자, 자체 TPU v4/v5/v6 가속기 및 제미나이(Gemini) 생태계 구축.",
        "initialX": -185,
        "initialY": 5
      },
      {
        "id": "amzn",
        "name": "아마존 / AWS",
        "category": "hyperscaler",
        "marketCap": 2460,
        "aiCapex": 22,
        "aiRevenue": 3,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "세계 1위 클라우드 AWS, 앤트로픽 핵심 투자사(40억 달러)이자 자체 Trainium2/Inferentia 가속기 개발.",
        "initialX": 140,
        "initialY": -130
      },
      {
        "id": "meta",
        "name": "메타 플랫폼스",
        "category": "hyperscaler",
        "marketCap": 1760,
        "aiCapex": 16,
        "aiRevenue": 2,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "오픈소스 AI 생태계 주도(LLaMA 시리즈), 60만 개 이상의 GPU 클러스터 운용 및 MTIA 자체 반도체 개발.",
        "initialX": 185,
        "initialY": 5
      },
      {
        "id": "nvda",
        "name": "엔비디아",
        "category": "chipmaker",
        "marketCap": 3850,
        "aiCapex": 2,
        "aiRevenue": 46.5,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "글로벌 AI GPU 독점(H100/B200/루빈) 및 CUDA 소프트웨어 생태계를 기반으로 75% 이상의 마진 향유.",
        "initialX": 0,
        "initialY": -10
      },
      {
        "id": "tsmc",
        "name": "TSMC",
        "category": "chipmaker",
        "marketCap": 1060,
        "aiCapex": 10.8,
        "aiRevenue": 33,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "엔비디아, 애플, 브로드컴 등 전 세계 모든 선단 AI 가속기를 제조하는 독점적 파운드리 및 CoWoS 패키징 선도자.",
        "initialX": -130,
        "initialY": 190
      },
      {
        "id": "avgo",
        "name": "브로드컴",
        "category": "chipmaker",
        "marketCap": 930,
        "aiCapex": 0.85,
        "aiRevenue": 6.2,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "빅테크 맞춤형 AI ASIC(구글 TPU, 메타 MTIA) 및 초고속 AI 데이터센터 스위치/네트워킹 독점 기업.",
        "initialX": -215,
        "initialY": 115
      },
      {
        "id": "skhynix",
        "name": "SK하이닉스",
        "category": "semiconductor_supply",
        "marketCap": 145,
        "aiCapex": 4.6,
        "aiRevenue": 6.8,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "엔비디아에 HBM3/HBM3E를 사실상 독점 공급하며 AI 메모리 초격차를 달성한 글로벌 HBM 1위 기업.",
        "initialX": -20,
        "initialY": -210
      },
      {
        "id": "samsung",
        "name": "삼성전자",
        "category": "semiconductor_supply",
        "marketCap": 450,
        "aiCapex": 12.5,
        "aiRevenue": 6.5,
        "isFormed": true,
        "isHighGrowth": true,
        "desc": "세계 최대 메모리 반도체 제조사이자 12단 HBM3E 및 메모리-파운드리 턴키 솔루션을 보유한 종합 반도체 기업.",
        "initialX": 110,
        "initialY": -195
      },
      {
        "id": "asml",
        "name": "ASML",
        "category": "semiconductor_supply",
        "marketCap": 450,
        "aiCapex": 0.9,
        "aiRevenue": 9.8,
        "isFormed": true,
        "isHighGrowth": true,
        "desc": "3nm 및 2nm 선단 반도체 제조에 필수적인 EUV 및 High-NA 극자외선 노광 장비를 독점 공급하는 네덜란드 장비사.",
        "initialX": 20,
        "initialY": 235
      },
      {
        "id": "openai",
        "name": "오픈AI",
        "category": "ai_lab",
        "marketCap": 270,
        "aiCapex": 5,
        "aiRevenue": 3.8,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "ChatGPT, GPT-4, o1 추론 모델을 개발한 프론티어 AI 선도 기업이자 1,000억 달러 스타게이트 프로젝트 파트너.",
        "initialX": -60,
        "initialY": -55
      },
      {
        "id": "anthropic",
        "name": "앤트로픽",
        "category": "ai_lab",
        "marketCap": 82,
        "aiCapex": 2.8,
        "aiRevenue": 1.6,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "Claude 3.5 및 컴퓨터 제어 AI를 개발한 프론티어 연구소로, 아마존과 구글로부터 대규모 자본 유치.",
        "initialX": 55,
        "initialY": -55
      },
      {
        "id": "xai",
        "name": "xAI",
        "category": "ai_lab",
        "marketCap": 72,
        "aiCapex": 3.2,
        "aiRevenue": 0.6,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "일론 머스크가 설립한 프론티어 랩으로, 멤피스에 10만 개 규모의 세계 최대 수랭식 슈퍼클러스터 ‘콜로서스’ 운용.",
        "initialX": 75,
        "initialY": 45
      },
      {
        "id": "deepseek",
        "name": "딥시크 (DeepSeek)",
        "category": "ai_lab",
        "marketCap": 34,
        "aiCapex": 0.9,
        "aiRevenue": 0.9,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "극단적 알고리즘 효율화와 저비용 오픈 추론 모델(DeepSeek-R1)로 무차별적 고비용 Capex 경쟁 구도를 뒤흔든 연구소.",
        "initialX": -75,
        "initialY": 45
      },
      {
        "id": "coreweave",
        "name": "코어위브",
        "category": "neocloud",
        "marketCap": 34,
        "aiCapex": 6.2,
        "aiRevenue": 2.2,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "GPU 자체를 담보로 사모펀드로부터 수십억 달러의 부채를 조달해 GPU를 재구매하는 네오클라우드 벤더 파이낸싱의 상징.",
        "initialX": 0,
        "initialY": 85
      },
      {
        "id": "vc_sovereign",
        "name": "벤처캐피탈 & 국부펀드",
        "category": "venture_capital",
        "marketCap": 500,
        "aiCapex": 0,
        "aiRevenue": 0,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "세쿼이아, 소프트뱅크, a16z 및 중동 국부펀드(MGX, PIF) 등 AI 메가 라운드 및 사모 부채를 공급하는 자본 풀.",
        "initialX": 220,
        "initialY": 155
      },
      {
        "id": "end_market",
        "name": "실제 기업 & 최종 사용자 시장",
        "category": "end_market",
        "marketCap": 1200,
        "aiCapex": 0,
        "aiRevenue": 18.2,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "실제 기업 IT 예산, 개발자 API 사용료, 유료 소비자 구독 등 AI 생태계의 유일한 외부 실질 현금 유입원.",
        "initialX": -230,
        "initialY": -170
      }
    ],
    "edges": [
      {
        "id": "msft_nvda_gpu",
        "source": "msft",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 15,
        "desc": "2026 Q2: Azure AI 인프라 확충을 위해 엔비디아 가속기 서버에 $15B 집행."
      },
      {
        "id": "goog_nvda_gpu",
        "source": "goog",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 11.5,
        "desc": "2026 Q2: 구글 클라우드(GCP) AI 하이퍼컴퓨터 확장을 위해 엔비디아 가속기에 $11.5B 발주."
      },
      {
        "id": "amzn_nvda_gpu",
        "source": "amzn",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 13,
        "desc": "2026 Q2: AWS UltraCluster 확장 및 EC2 인스턴스를 위해 엔비디아에 $13B 지출."
      },
      {
        "id": "meta_nvda_gpu",
        "source": "meta",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 12.5,
        "desc": "2026 Q2: LLaMA 모델 학습 및 메타 AI 데이터센터를 위해 엔비디아 GPU에 $12.5B 구매 집행."
      },
      {
        "id": "nvda_tsmc_gpu",
        "source": "nvda",
        "target": "tsmc",
        "flowType": "gpu_purchase",
        "amount": 14,
        "desc": "2026 Q2: 엔비디아가 TSMC의 선단 노드 웨이퍼 및 CoWoS 어드밴스드 패키징에 $14B 발주."
      },
      {
        "id": "nvda_skhynix_hbm",
        "source": "nvda",
        "target": "skhynix",
        "flowType": "hbm_purchase",
        "amount": 7.2,
        "desc": "2026 Q2: 엔비디아가 SK하이닉스의 고대역폭메모리(HBM) 공급에 $7.2B 지출."
      },
      {
        "id": "nvda_samsung_hbm",
        "source": "nvda",
        "target": "samsung",
        "flowType": "hbm_purchase",
        "amount": 5.9,
        "desc": "2026 Q2: 엔비디아가 삼성전자로부터 HBM 및 초고속 DRAM/SSD에 $5.9B 조달."
      },
      {
        "id": "tsmc_asml_equip",
        "source": "tsmc",
        "target": "asml",
        "flowType": "equipment_purchase",
        "amount": 4,
        "desc": "2026 Q2: TSMC가 선단 공정 라인 증설을 위해 ASML EUV/High-NA 장비에 $4B 지출."
      },
      {
        "id": "samsung_asml_equip",
        "source": "samsung",
        "target": "asml",
        "flowType": "equipment_purchase",
        "amount": 3,
        "desc": "2026 Q2: 삼성전자가 선단 DRAM 및 파운드리 확충을 위해 ASML 장비에 $3B 발주."
      },
      {
        "id": "skhynix_asml_equip",
        "source": "skhynix",
        "target": "asml",
        "flowType": "equipment_purchase",
        "amount": 2.4,
        "desc": "2026 Q2: SK하이닉스가 선단 HBM DRAM 양산 강화를 위해 ASML EUV 장비에 $2.4B 도입."
      },
      {
        "id": "goog_avgo_gpu",
        "source": "goog",
        "target": "avgo",
        "flowType": "gpu_purchase",
        "amount": 4.5,
        "desc": "2026 Q2: 구글이 맞춤형 TPU ASIC 설계 및 네트워킹을 위해 브로드컴에 $4.5B 지출."
      },
      {
        "id": "meta_avgo_gpu",
        "source": "meta",
        "target": "avgo",
        "flowType": "gpu_purchase",
        "amount": 3.9,
        "desc": "2026 Q2: 메타가 자체 추론/학습 가속기 MTIA 설계 및 네트워킹을 위해 브로드컴에 $3.9B 지출."
      },
      {
        "id": "msft_openai_credit",
        "source": "msft",
        "target": "openai",
        "flowType": "cloud_credit",
        "amount": 4.6,
        "desc": "2026 Q2: MS가 오픈AI에 클라우드 컴퓨팅 크레딧 및 전략적 인프라 비용으로 $4.6B 공급."
      },
      {
        "id": "openai_msft_spend",
        "source": "openai",
        "target": "msft",
        "flowType": "cloud_credit",
        "amount": 5.2,
        "desc": "2026 Q2: 오픈AI가 ChatGPT 및 API 호스팅을 위한 Azure 데이터센터 사용료로 MS에 $5.2B 지불."
      },
      {
        "id": "amzn_anthropic_equity",
        "source": "amzn",
        "target": "anthropic",
        "flowType": "equity_investment",
        "amount": 0,
        "desc": "2026 Q2: 기존 체결 투자 트랜치 이행 중; 해당 기간 신규 지분 납입 없음."
      },
      {
        "id": "anthropic_amzn_spend",
        "source": "anthropic",
        "target": "amzn",
        "flowType": "cloud_credit",
        "amount": 3.8,
        "desc": "2026 Q2: 앤트로픽이 Claude 모델 학습 및 Bedrock 서비스를 위해 AWS 인프라 비용 $3.8B 지출."
      },
      {
        "id": "goog_anthropic_equity",
        "source": "goog",
        "target": "anthropic",
        "flowType": "equity_investment",
        "amount": 2,
        "desc": "2026 Q2: 구글이 앤트로픽에 $2B 규모의 전략적 자본 투자를 집행."
      },
      {
        "id": "vc_coreweave_debt",
        "source": "vc_sovereign",
        "target": "coreweave",
        "flowType": "debt_collateral",
        "amount": 0,
        "desc": "2026 Q2: 기존 GPU 담보 부채 차입 집행 완료; 해당 기간 신규 부채 조달 없음."
      },
      {
        "id": "coreweave_nvda_gpu",
        "source": "coreweave",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 7.4,
        "desc": "2026 Q2: 코어위브가 엔비디아 최신 GPU에 $7.4B 대규모 구매 집행."
      },
      {
        "id": "nvda_coreweave_equity",
        "source": "nvda",
        "target": "coreweave",
        "flowType": "equity_investment",
        "amount": 0,
        "desc": "2026 Q2: 지분 관계 유지; 해당 기간 신규 지분 취득 없음."
      },
      {
        "id": "coreweave_vc_refinance",
        "source": "coreweave",
        "target": "vc_sovereign",
        "flowType": "debt_collateral",
        "amount": 3,
        "desc": "2026 Q2: 코어위브가 GPU 자산유동화(ABS) 및 부채 차환을 통해 사모대출 시장에 $3B 상환/차환."
      },
      {
        "id": "vc_openai_equity",
        "source": "vc_sovereign",
        "target": "openai",
        "flowType": "equity_investment",
        "amount": 0,
        "desc": "2026 Q2: 기존 지분 조달 자금 집행 중; 해당 기간 대규모 신규 벤처 지분 유치 없음."
      },
      {
        "id": "xai_nvda_gpu",
        "source": "xai",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 4.2,
        "desc": "2026 Q2: xAI가 멤피스 '콜로서스' 등 초대형 슈퍼클러스터용 엔비디아 GPU에 $4.2B 직접 구매."
      },
      {
        "id": "skhynix_tsmc_foundry",
        "source": "skhynix",
        "target": "tsmc",
        "flowType": "gpu_purchase",
        "amount": 2.8,
        "desc": "2026 Q2: SK하이닉스가 HBM4 맞춤형 베이스 다이 생산을 위해 TSMC 선단 파운드리에 $2.8B 발주."
      },
      {
        "id": "market_openai_rev",
        "source": "end_market",
        "target": "openai",
        "flowType": "enterprise_revenue",
        "amount": 9.8,
        "desc": "2026 Q2: 기업 및 유료 사용자의 OpenAI 소프트웨어 및 API 실매출 $9.8B 달성."
      },
      {
        "id": "market_msft_rev",
        "source": "end_market",
        "target": "msft",
        "flowType": "enterprise_revenue",
        "amount": 14.5,
        "desc": "2026 Q2: M365 Copilot 및 Azure AI 기업 실매출 $14.5B 기록."
      },
      {
        "id": "market_anthropic_rev",
        "source": "end_market",
        "target": "anthropic",
        "flowType": "enterprise_revenue",
        "amount": 7.2,
        "desc": "2026 Q2: Claude 엔터프라이즈 API 토큰 소비 실매출 $7.2B 달성."
      },
      {
        "id": "market_deepseek_rev",
        "source": "end_market",
        "target": "deepseek",
        "flowType": "enterprise_revenue",
        "amount": 2.9,
        "desc": "2026 Q2: 저비용 고효율 오픈 추론 모델 DeepSeek API 토큰 실매출 $2.9B 달성."
      }
    ]
  },
  {
    "periodId": "2026-Q3",
    "year": 2026,
    "quarter": 3,
    "label": "2026 Q3",
    "dateRange": "2026년 7월 ~ 9월",
    "title": "2026년 3분기: Capex 장벽 도달과 실제 소프트웨어 수익화 시험대",
    "summary": "AI 산업이 이른바 \"Capex 장벽\"에 도달합니다. 빅테크 분기 설비투자가 825억 달러(연간 3,300억 달러 런레이트)에 달하지만 실제 소프트웨어 분기 매출은 205억 달러에 그쳐 분기당 620억 달러 이상의 미회수 적자가 지속됩니다. 단순 래퍼 스타트업은 도태되고 실질적 유틸리티 플랫폼만 살아남습니다.",
    "macroMetrics": {
      "totalAiCapex": 82.5,
      "realEndUserRevenue": 20.5,
      "capexRevenueDeficit": 62,
      "circularRatio": 48,
      "annualizedCapexRunRate": 330
    },
    "nodes": [
      {
        "id": "msft",
        "name": "마이크로소프트",
        "category": "hyperscaler",
        "marketCap": 3650,
        "aiCapex": 22.2,
        "aiRevenue": 4.5,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "세계 최고 클라우드 기업, Azure 기반 OpenAI 독점 파트너십 및 자체 Maia AI 가속기 개발.",
        "initialX": -140,
        "initialY": -130
      },
      {
        "id": "goog",
        "name": "알파벳 / 구글",
        "category": "hyperscaler",
        "marketCap": 2550,
        "aiCapex": 19,
        "aiRevenue": 3.8,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "트랜스포머 아키텍처 창시자, 자체 TPU v4/v5/v6 가속기 및 제미나이(Gemini) 생태계 구축.",
        "initialX": -185,
        "initialY": 5
      },
      {
        "id": "amzn",
        "name": "아마존 / AWS",
        "category": "hyperscaler",
        "marketCap": 2480,
        "aiCapex": 21.5,
        "aiRevenue": 3.3,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "세계 1위 클라우드 AWS, 앤트로픽 핵심 투자사(40억 달러)이자 자체 Trainium2/Inferentia 가속기 개발.",
        "initialX": 140,
        "initialY": -130
      },
      {
        "id": "meta",
        "name": "메타 플랫폼스",
        "category": "hyperscaler",
        "marketCap": 1780,
        "aiCapex": 15.8,
        "aiRevenue": 2.2,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "오픈소스 AI 생태계 주도(LLaMA 시리즈), 60만 개 이상의 GPU 클러스터 운용 및 MTIA 자체 반도체 개발.",
        "initialX": 185,
        "initialY": 5
      },
      {
        "id": "nvda",
        "name": "엔비디아",
        "category": "chipmaker",
        "marketCap": 3780,
        "aiCapex": 2,
        "aiRevenue": 47,
        "isFormed": true,
        "isHighGrowth": true,
        "desc": "글로벌 AI GPU 독점(H100/B200/루빈) 및 CUDA 소프트웨어 생태계를 기반으로 75% 이상의 마진 향유.",
        "initialX": 0,
        "initialY": -10
      },
      {
        "id": "tsmc",
        "name": "TSMC",
        "category": "chipmaker",
        "marketCap": 1080,
        "aiCapex": 11,
        "aiRevenue": 34,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "엔비디아, 애플, 브로드컴 등 전 세계 모든 선단 AI 가속기를 제조하는 독점적 파운드리 및 CoWoS 패키징 선도자.",
        "initialX": -130,
        "initialY": 190
      },
      {
        "id": "avgo",
        "name": "브로드컴",
        "category": "chipmaker",
        "marketCap": 920,
        "aiCapex": 0.9,
        "aiRevenue": 6.5,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "빅테크 맞춤형 AI ASIC(구글 TPU, 메타 MTIA) 및 초고속 AI 데이터센터 스위치/네트워킹 독점 기업.",
        "initialX": -215,
        "initialY": 115
      },
      {
        "id": "skhynix",
        "name": "SK하이닉스",
        "category": "semiconductor_supply",
        "marketCap": 140,
        "aiCapex": 4.8,
        "aiRevenue": 7,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "엔비디아에 HBM3/HBM3E를 사실상 독점 공급하며 AI 메모리 초격차를 달성한 글로벌 HBM 1위 기업.",
        "initialX": -20,
        "initialY": -210
      },
      {
        "id": "samsung",
        "name": "삼성전자",
        "category": "semiconductor_supply",
        "marketCap": 445,
        "aiCapex": 12.8,
        "aiRevenue": 6.8,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "세계 최대 메모리 반도체 제조사이자 12단 HBM3E 및 메모리-파운드리 턴키 솔루션을 보유한 종합 반도체 기업.",
        "initialX": 110,
        "initialY": -195
      },
      {
        "id": "asml",
        "name": "ASML",
        "category": "semiconductor_supply",
        "marketCap": 440,
        "aiCapex": 0.9,
        "aiRevenue": 10,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "3nm 및 2nm 선단 반도체 제조에 필수적인 EUV 및 High-NA 극자외선 노광 장비를 독점 공급하는 네덜란드 장비사.",
        "initialX": 20,
        "initialY": 235
      },
      {
        "id": "openai",
        "name": "오픈AI",
        "category": "ai_lab",
        "marketCap": 280,
        "aiCapex": 5.2,
        "aiRevenue": 4.2,
        "isFormed": true,
        "isHighGrowth": true,
        "desc": "ChatGPT, GPT-4, o1 추론 모델을 개발한 프론티어 AI 선도 기업이자 1,000억 달러 스타게이트 프로젝트 파트너.",
        "initialX": -60,
        "initialY": -55
      },
      {
        "id": "anthropic",
        "name": "앤트로픽",
        "category": "ai_lab",
        "marketCap": 85,
        "aiCapex": 3,
        "aiRevenue": 1.8,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "Claude 3.5 및 컴퓨터 제어 AI를 개발한 프론티어 연구소로, 아마존과 구글로부터 대규모 자본 유치.",
        "initialX": 55,
        "initialY": -55
      },
      {
        "id": "xai",
        "name": "xAI",
        "category": "ai_lab",
        "marketCap": 75,
        "aiCapex": 3.5,
        "aiRevenue": 0.7,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "일론 머스크가 설립한 프론티어 랩으로, 멤피스에 10만 개 규모의 세계 최대 수랭식 슈퍼클러스터 ‘콜로서스’ 운용.",
        "initialX": 75,
        "initialY": 45
      },
      {
        "id": "deepseek",
        "name": "딥시크 (DeepSeek)",
        "category": "ai_lab",
        "marketCap": 35,
        "aiCapex": 1,
        "aiRevenue": 1,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "극단적 알고리즘 효율화와 저비용 오픈 추론 모델(DeepSeek-R1)로 무차별적 고비용 Capex 경쟁 구도를 뒤흔든 연구소.",
        "initialX": -75,
        "initialY": 45
      },
      {
        "id": "coreweave",
        "name": "코어위브",
        "category": "neocloud",
        "marketCap": 35,
        "aiCapex": 6.5,
        "aiRevenue": 2.5,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "GPU 자체를 담보로 사모펀드로부터 수십억 달러의 부채를 조달해 GPU를 재구매하는 네오클라우드 벤더 파이낸싱의 상징.",
        "initialX": 0,
        "initialY": 85
      },
      {
        "id": "vc_sovereign",
        "name": "벤처캐피탈 & 국부펀드",
        "category": "venture_capital",
        "marketCap": 500,
        "aiCapex": 0,
        "aiRevenue": 0,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "세쿼이아, 소프트뱅크, a16z 및 중동 국부펀드(MGX, PIF) 등 AI 메가 라운드 및 사모 부채를 공급하는 자본 풀.",
        "initialX": 220,
        "initialY": 155
      },
      {
        "id": "end_market",
        "name": "실제 기업 & 최종 사용자 시장",
        "category": "end_market",
        "marketCap": 1200,
        "aiCapex": 0,
        "aiRevenue": 20.5,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "실제 기업 IT 예산, 개발자 API 사용료, 유료 소비자 구독 등 AI 생태계의 유일한 외부 실질 현금 유입원.",
        "initialX": -230,
        "initialY": -170
      }
    ],
    "edges": [
      {
        "id": "msft_nvda_gpu",
        "source": "msft",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 15.5,
        "desc": "2026 Q3: Azure AI 인프라 확충을 위해 엔비디아 가속기 서버에 $15.5B 집행."
      },
      {
        "id": "goog_nvda_gpu",
        "source": "goog",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 12,
        "desc": "2026 Q3: 구글 클라우드(GCP) AI 하이퍼컴퓨터 확장을 위해 엔비디아 가속기에 $12B 발주."
      },
      {
        "id": "amzn_nvda_gpu",
        "source": "amzn",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 13.5,
        "desc": "2026 Q3: AWS UltraCluster 확장 및 EC2 인스턴스를 위해 엔비디아에 $13.5B 지출."
      },
      {
        "id": "meta_nvda_gpu",
        "source": "meta",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 13,
        "desc": "2026 Q3: LLaMA 모델 학습 및 메타 AI 데이터센터를 위해 엔비디아 GPU에 $13B 구매 집행."
      },
      {
        "id": "nvda_tsmc_gpu",
        "source": "nvda",
        "target": "tsmc",
        "flowType": "gpu_purchase",
        "amount": 14.5,
        "desc": "2026 Q3: 엔비디아가 TSMC의 선단 노드 웨이퍼 및 CoWoS 어드밴스드 패키징에 $14.5B 발주."
      },
      {
        "id": "nvda_skhynix_hbm",
        "source": "nvda",
        "target": "skhynix",
        "flowType": "hbm_purchase",
        "amount": 7.5,
        "desc": "2026 Q3: 엔비디아가 SK하이닉스의 고대역폭메모리(HBM) 공급에 $7.5B 지출."
      },
      {
        "id": "nvda_samsung_hbm",
        "source": "nvda",
        "target": "samsung",
        "flowType": "hbm_purchase",
        "amount": 6.2,
        "desc": "2026 Q3: 엔비디아가 삼성전자로부터 HBM 및 초고속 DRAM/SSD에 $6.2B 조달."
      },
      {
        "id": "tsmc_asml_equip",
        "source": "tsmc",
        "target": "asml",
        "flowType": "equipment_purchase",
        "amount": 4.1,
        "desc": "2026 Q3: TSMC가 선단 공정 라인 증설을 위해 ASML EUV/High-NA 장비에 $4.1B 지출."
      },
      {
        "id": "samsung_asml_equip",
        "source": "samsung",
        "target": "asml",
        "flowType": "equipment_purchase",
        "amount": 3.1,
        "desc": "2026 Q3: 삼성전자가 선단 DRAM 및 파운드리 확충을 위해 ASML 장비에 $3.1B 발주."
      },
      {
        "id": "skhynix_asml_equip",
        "source": "skhynix",
        "target": "asml",
        "flowType": "equipment_purchase",
        "amount": 2.4,
        "desc": "2026 Q3: SK하이닉스가 선단 HBM DRAM 양산 강화를 위해 ASML EUV 장비에 $2.4B 도입."
      },
      {
        "id": "goog_avgo_gpu",
        "source": "goog",
        "target": "avgo",
        "flowType": "gpu_purchase",
        "amount": 4.7,
        "desc": "2026 Q3: 구글이 맞춤형 TPU ASIC 설계 및 네트워킹을 위해 브로드컴에 $4.7B 지출."
      },
      {
        "id": "meta_avgo_gpu",
        "source": "meta",
        "target": "avgo",
        "flowType": "gpu_purchase",
        "amount": 4.1,
        "desc": "2026 Q3: 메타가 자체 추론/학습 가속기 MTIA 설계 및 네트워킹을 위해 브로드컴에 $4.1B 지출."
      },
      {
        "id": "msft_openai_credit",
        "source": "msft",
        "target": "openai",
        "flowType": "cloud_credit",
        "amount": 4.8,
        "desc": "2026 Q3: MS가 오픈AI에 클라우드 컴퓨팅 크레딧 및 전략적 인프라 비용으로 $4.8B 공급."
      },
      {
        "id": "openai_msft_spend",
        "source": "openai",
        "target": "msft",
        "flowType": "cloud_credit",
        "amount": 5.5,
        "desc": "2026 Q3: 오픈AI가 ChatGPT 및 API 호스팅을 위한 Azure 데이터센터 사용료로 MS에 $5.5B 지불."
      },
      {
        "id": "amzn_anthropic_equity",
        "source": "amzn",
        "target": "anthropic",
        "flowType": "equity_investment",
        "amount": 0,
        "desc": "2026 Q3: 기존 체결 투자 트랜치 이행 중; 해당 기간 신규 지분 납입 없음."
      },
      {
        "id": "anthropic_amzn_spend",
        "source": "anthropic",
        "target": "amzn",
        "flowType": "cloud_credit",
        "amount": 4,
        "desc": "2026 Q3: 앤트로픽이 Claude 모델 학습 및 Bedrock 서비스를 위해 AWS 인프라 비용 $4B 지출."
      },
      {
        "id": "goog_anthropic_equity",
        "source": "goog",
        "target": "anthropic",
        "flowType": "equity_investment",
        "amount": 0,
        "desc": "2026 Q3: 파트너십 약정 유지; 해당 기간 신규 지분 납입 없음."
      },
      {
        "id": "vc_coreweave_debt",
        "source": "vc_sovereign",
        "target": "coreweave",
        "flowType": "debt_collateral",
        "amount": 0,
        "desc": "2026 Q3: 기존 GPU 담보 부채 차입 집행 완료; 해당 기간 신규 부채 조달 없음."
      },
      {
        "id": "coreweave_nvda_gpu",
        "source": "coreweave",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 7.6,
        "desc": "2026 Q3: 코어위브가 엔비디아 최신 GPU에 $7.6B 대규모 구매 집행."
      },
      {
        "id": "nvda_coreweave_equity",
        "source": "nvda",
        "target": "coreweave",
        "flowType": "equity_investment",
        "amount": 0,
        "desc": "2026 Q3: 지분 관계 유지; 해당 기간 신규 지분 취득 없음."
      },
      {
        "id": "coreweave_vc_refinance",
        "source": "coreweave",
        "target": "vc_sovereign",
        "flowType": "debt_collateral",
        "amount": 3.2,
        "desc": "2026 Q3: 코어위브가 GPU 자산유동화(ABS) 및 부채 차환을 통해 사모대출 시장에 $3.2B 상환/차환."
      },
      {
        "id": "vc_openai_equity",
        "source": "vc_sovereign",
        "target": "openai",
        "flowType": "equity_investment",
        "amount": 10,
        "desc": "2026 Q3: 글로벌 벤처/국부펀드 신디케이트가 오픈AI에 $10B 규모 메가 지분 투자 유치."
      },
      {
        "id": "xai_nvda_gpu",
        "source": "xai",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 5.5,
        "desc": "2026 Q3: xAI가 멤피스 '콜로서스' 등 초대형 슈퍼클러스터용 엔비디아 GPU에 $5.5B 직접 구매."
      },
      {
        "id": "skhynix_tsmc_foundry",
        "source": "skhynix",
        "target": "tsmc",
        "flowType": "gpu_purchase",
        "amount": 3,
        "desc": "2026 Q3: SK하이닉스가 HBM4 맞춤형 베이스 다이 생산을 위해 TSMC 선단 파운드리에 $3B 발주."
      },
      {
        "id": "market_openai_rev",
        "source": "end_market",
        "target": "openai",
        "flowType": "enterprise_revenue",
        "amount": 11.5,
        "desc": "2026 Q3: 기업 및 유료 사용자의 OpenAI 소프트웨어 및 API 실매출 $11.5B 달성."
      },
      {
        "id": "market_msft_rev",
        "source": "end_market",
        "target": "msft",
        "flowType": "enterprise_revenue",
        "amount": 17.5,
        "desc": "2026 Q3: M365 Copilot 및 Azure AI 기업 실매출 $17.5B 기록."
      },
      {
        "id": "market_anthropic_rev",
        "source": "end_market",
        "target": "anthropic",
        "flowType": "enterprise_revenue",
        "amount": 8.8,
        "desc": "2026 Q3: Claude 엔터프라이즈 API 토큰 소비 실매출 $8.8B 달성."
      },
      {
        "id": "market_deepseek_rev",
        "source": "end_market",
        "target": "deepseek",
        "flowType": "enterprise_revenue",
        "amount": 3.7,
        "desc": "2026 Q3: 저비용 고효율 오픈 추론 모델 DeepSeek API 토큰 실매출 $3.7B 달성."
      }
    ]
  },
  {
    "periodId": "2026-Q4",
    "year": 2026,
    "quarter": 4,
    "label": "2026 Q4",
    "dateRange": "2026년 10월 ~ 12월",
    "title": "2026년 4분기: 자율 멀티 에이전트 정착과 지속 가능한 자본 균형",
    "summary": "자본 배분이 무차별적인 사전학습 확장 경쟁에서 최적화된 자율 멀티 에이전트 시스템 및 엣지 추론으로 전환됩니다. 빅테크 Capex 증가율은 지속 가능한 유지보수 수준으로 연착륙하며, 반도체 공급망(파운드리, HBM, 장비)은 구조적 수익성을 확립합니다.",
    "macroMetrics": {
      "totalAiCapex": 83.9,
      "realEndUserRevenue": 23.1,
      "capexRevenueDeficit": 60.8,
      "circularRatio": 45,
      "annualizedCapexRunRate": 335.6
    },
    "nodes": [
      {
        "id": "msft",
        "name": "마이크로소프트",
        "category": "hyperscaler",
        "marketCap": 3780,
        "aiCapex": 22,
        "aiRevenue": 4.7,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "세계 최고 클라우드 기업, Azure 기반 OpenAI 독점 파트너십 및 자체 Maia AI 가속기 개발.",
        "initialX": -140,
        "initialY": -130
      },
      {
        "id": "goog",
        "name": "알파벳 / 구글",
        "category": "hyperscaler",
        "marketCap": 2600,
        "aiCapex": 19.2,
        "aiRevenue": 4,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "트랜스포머 아키텍처 창시자, 자체 TPU v4/v5/v6 가속기 및 제미나이(Gemini) 생태계 구축.",
        "initialX": -185,
        "initialY": 5
      },
      {
        "id": "amzn",
        "name": "아마존 / AWS",
        "category": "hyperscaler",
        "marketCap": 2520,
        "aiCapex": 21.2,
        "aiRevenue": 3.5,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "세계 1위 클라우드 AWS, 앤트로픽 핵심 투자사(40억 달러)이자 자체 Trainium2/Inferentia 가속기 개발.",
        "initialX": 140,
        "initialY": -130
      },
      {
        "id": "meta",
        "name": "메타 플랫폼스",
        "category": "hyperscaler",
        "marketCap": 1820,
        "aiCapex": 15.5,
        "aiRevenue": 2.4,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "오픈소스 AI 생태계 주도(LLaMA 시리즈), 60만 개 이상의 GPU 클러스터 운용 및 MTIA 자체 반도체 개발.",
        "initialX": 185,
        "initialY": 5
      },
      {
        "id": "nvda",
        "name": "엔비디아",
        "category": "chipmaker",
        "marketCap": 3820,
        "aiCapex": 2.1,
        "aiRevenue": 46.5,
        "isFormed": true,
        "isHighGrowth": true,
        "desc": "글로벌 AI GPU 독점(H100/B200/루빈) 및 CUDA 소프트웨어 생태계를 기반으로 75% 이상의 마진 향유.",
        "initialX": 0,
        "initialY": -10
      },
      {
        "id": "tsmc",
        "name": "TSMC",
        "category": "chipmaker",
        "marketCap": 1100,
        "aiCapex": 11.2,
        "aiRevenue": 34.5,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "엔비디아, 애플, 브로드컴 등 전 세계 모든 선단 AI 가속기를 제조하는 독점적 파운드리 및 CoWoS 패키징 선도자.",
        "initialX": -130,
        "initialY": 190
      },
      {
        "id": "avgo",
        "name": "브로드컴",
        "category": "chipmaker",
        "marketCap": 950,
        "aiCapex": 0.95,
        "aiRevenue": 6.8,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "빅테크 맞춤형 AI ASIC(구글 TPU, 메타 MTIA) 및 초고속 AI 데이터센터 스위치/네트워킹 독점 기업.",
        "initialX": -215,
        "initialY": 115
      },
      {
        "id": "skhynix",
        "name": "SK하이닉스",
        "category": "semiconductor_supply",
        "marketCap": 148,
        "aiCapex": 4.8,
        "aiRevenue": 7.2,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "엔비디아에 HBM3/HBM3E를 사실상 독점 공급하며 AI 메모리 초격차를 달성한 글로벌 HBM 1위 기업.",
        "initialX": -20,
        "initialY": -210
      },
      {
        "id": "samsung",
        "name": "삼성전자",
        "category": "semiconductor_supply",
        "marketCap": 460,
        "aiCapex": 13,
        "aiRevenue": 7,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "세계 최대 메모리 반도체 제조사이자 12단 HBM3E 및 메모리-파운드리 턴키 솔루션을 보유한 종합 반도체 기업.",
        "initialX": 110,
        "initialY": -195
      },
      {
        "id": "asml",
        "name": "ASML",
        "category": "semiconductor_supply",
        "marketCap": 460,
        "aiCapex": 0.9,
        "aiRevenue": 10.2,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "3nm 및 2nm 선단 반도체 제조에 필수적인 EUV 및 High-NA 극자외선 노광 장비를 독점 공급하는 네덜란드 장비사.",
        "initialX": 20,
        "initialY": 235
      },
      {
        "id": "openai",
        "name": "오픈AI",
        "category": "ai_lab",
        "marketCap": 290,
        "aiCapex": 5.4,
        "aiRevenue": 4.5,
        "isFormed": true,
        "isHighGrowth": true,
        "desc": "ChatGPT, GPT-4, o1 추론 모델을 개발한 프론티어 AI 선도 기업이자 1,000억 달러 스타게이트 프로젝트 파트너.",
        "initialX": -60,
        "initialY": -55
      },
      {
        "id": "anthropic",
        "name": "앤트로픽",
        "category": "ai_lab",
        "marketCap": 88,
        "aiCapex": 3.2,
        "aiRevenue": 2,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "Claude 3.5 및 컴퓨터 제어 AI를 개발한 프론티어 연구소로, 아마존과 구글로부터 대규모 자본 유치.",
        "initialX": 55,
        "initialY": -55
      },
      {
        "id": "xai",
        "name": "xAI",
        "category": "ai_lab",
        "marketCap": 78,
        "aiCapex": 3.6,
        "aiRevenue": 0.8,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "일론 머스크가 설립한 프론티어 랩으로, 멤피스에 10만 개 규모의 세계 최대 수랭식 슈퍼클러스터 ‘콜로서스’ 운용.",
        "initialX": 75,
        "initialY": 45
      },
      {
        "id": "deepseek",
        "name": "딥시크 (DeepSeek)",
        "category": "ai_lab",
        "marketCap": 38,
        "aiCapex": 1.1,
        "aiRevenue": 1.2,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "극단적 알고리즘 효율화와 저비용 오픈 추론 모델(DeepSeek-R1)로 무차별적 고비용 Capex 경쟁 구도를 뒤흔든 연구소.",
        "initialX": -75,
        "initialY": 45
      },
      {
        "id": "coreweave",
        "name": "코어위브",
        "category": "neocloud",
        "marketCap": 36,
        "aiCapex": 6.8,
        "aiRevenue": 2.8,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "GPU 자체를 담보로 사모펀드로부터 수십억 달러의 부채를 조달해 GPU를 재구매하는 네오클라우드 벤더 파이낸싱의 상징.",
        "initialX": 0,
        "initialY": 85
      },
      {
        "id": "vc_sovereign",
        "name": "벤처캐피탈 & 국부펀드",
        "category": "venture_capital",
        "marketCap": 500,
        "aiCapex": 0,
        "aiRevenue": 0,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "세쿼이아, 소프트뱅크, a16z 및 중동 국부펀드(MGX, PIF) 등 AI 메가 라운드 및 사모 부채를 공급하는 자본 풀.",
        "initialX": 220,
        "initialY": 155
      },
      {
        "id": "end_market",
        "name": "실제 기업 & 최종 사용자 시장",
        "category": "end_market",
        "marketCap": 1200,
        "aiCapex": 0,
        "aiRevenue": 23.1,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "실제 기업 IT 예산, 개발자 API 사용료, 유료 소비자 구독 등 AI 생태계의 유일한 외부 실질 현금 유입원.",
        "initialX": -230,
        "initialY": -170
      }
    ],
    "edges": [
      {
        "id": "msft_nvda_gpu",
        "source": "msft",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 16,
        "desc": "2026 Q4: Azure AI 인프라 확충을 위해 엔비디아 가속기 서버에 $16B 집행."
      },
      {
        "id": "goog_nvda_gpu",
        "source": "goog",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 12.5,
        "desc": "2026 Q4: 구글 클라우드(GCP) AI 하이퍼컴퓨터 확장을 위해 엔비디아 가속기에 $12.5B 발주."
      },
      {
        "id": "amzn_nvda_gpu",
        "source": "amzn",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 14,
        "desc": "2026 Q4: AWS UltraCluster 확장 및 EC2 인스턴스를 위해 엔비디아에 $14B 지출."
      },
      {
        "id": "meta_nvda_gpu",
        "source": "meta",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 13.5,
        "desc": "2026 Q4: LLaMA 모델 학습 및 메타 AI 데이터센터를 위해 엔비디아 GPU에 $13.5B 구매 집행."
      },
      {
        "id": "nvda_tsmc_gpu",
        "source": "nvda",
        "target": "tsmc",
        "flowType": "gpu_purchase",
        "amount": 15,
        "desc": "2026 Q4: 엔비디아가 TSMC의 선단 노드 웨이퍼 및 CoWoS 어드밴스드 패키징에 $15B 발주."
      },
      {
        "id": "nvda_skhynix_hbm",
        "source": "nvda",
        "target": "skhynix",
        "flowType": "hbm_purchase",
        "amount": 7.8,
        "desc": "2026 Q4: 엔비디아가 SK하이닉스의 고대역폭메모리(HBM) 공급에 $7.8B 지출."
      },
      {
        "id": "nvda_samsung_hbm",
        "source": "nvda",
        "target": "samsung",
        "flowType": "hbm_purchase",
        "amount": 6.5,
        "desc": "2026 Q4: 엔비디아가 삼성전자로부터 HBM 및 초고속 DRAM/SSD에 $6.5B 조달."
      },
      {
        "id": "tsmc_asml_equip",
        "source": "tsmc",
        "target": "asml",
        "flowType": "equipment_purchase",
        "amount": 4.2,
        "desc": "2026 Q4: TSMC가 선단 공정 라인 증설을 위해 ASML EUV/High-NA 장비에 $4.2B 지출."
      },
      {
        "id": "samsung_asml_equip",
        "source": "samsung",
        "target": "asml",
        "flowType": "equipment_purchase",
        "amount": 3.2,
        "desc": "2026 Q4: 삼성전자가 선단 DRAM 및 파운드리 확충을 위해 ASML 장비에 $3.2B 발주."
      },
      {
        "id": "skhynix_asml_equip",
        "source": "skhynix",
        "target": "asml",
        "flowType": "equipment_purchase",
        "amount": 2.5,
        "desc": "2026 Q4: SK하이닉스가 선단 HBM DRAM 양산 강화를 위해 ASML EUV 장비에 $2.5B 도입."
      },
      {
        "id": "goog_avgo_gpu",
        "source": "goog",
        "target": "avgo",
        "flowType": "gpu_purchase",
        "amount": 5,
        "desc": "2026 Q4: 구글이 맞춤형 TPU ASIC 설계 및 네트워킹을 위해 브로드컴에 $5B 지출."
      },
      {
        "id": "meta_avgo_gpu",
        "source": "meta",
        "target": "avgo",
        "flowType": "gpu_purchase",
        "amount": 4.3,
        "desc": "2026 Q4: 메타가 자체 추론/학습 가속기 MTIA 설계 및 네트워킹을 위해 브로드컴에 $4.3B 지출."
      },
      {
        "id": "msft_openai_credit",
        "source": "msft",
        "target": "openai",
        "flowType": "cloud_credit",
        "amount": 5,
        "desc": "2026 Q4: MS가 오픈AI에 클라우드 컴퓨팅 크레딧 및 전략적 인프라 비용으로 $5B 공급."
      },
      {
        "id": "openai_msft_spend",
        "source": "openai",
        "target": "msft",
        "flowType": "cloud_credit",
        "amount": 5.8,
        "desc": "2026 Q4: 오픈AI가 ChatGPT 및 API 호스팅을 위한 Azure 데이터센터 사용료로 MS에 $5.8B 지불."
      },
      {
        "id": "amzn_anthropic_equity",
        "source": "amzn",
        "target": "anthropic",
        "flowType": "equity_investment",
        "amount": 0,
        "desc": "2026 Q4: 기존 체결 투자 트랜치 이행 중; 해당 기간 신규 지분 납입 없음."
      },
      {
        "id": "anthropic_amzn_spend",
        "source": "anthropic",
        "target": "amzn",
        "flowType": "cloud_credit",
        "amount": 4.2,
        "desc": "2026 Q4: 앤트로픽이 Claude 모델 학습 및 Bedrock 서비스를 위해 AWS 인프라 비용 $4.2B 지출."
      },
      {
        "id": "goog_anthropic_equity",
        "source": "goog",
        "target": "anthropic",
        "flowType": "equity_investment",
        "amount": 0,
        "desc": "2026 Q4: 파트너십 약정 유지; 해당 기간 신규 지분 납입 없음."
      },
      {
        "id": "vc_coreweave_debt",
        "source": "vc_sovereign",
        "target": "coreweave",
        "flowType": "debt_collateral",
        "amount": 0,
        "desc": "2026 Q4: 기존 GPU 담보 부채 차입 집행 완료; 해당 기간 신규 부채 조달 없음."
      },
      {
        "id": "coreweave_nvda_gpu",
        "source": "coreweave",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 7.8,
        "desc": "2026 Q4: 코어위브가 엔비디아 최신 GPU에 $7.8B 대규모 구매 집행."
      },
      {
        "id": "nvda_coreweave_equity",
        "source": "nvda",
        "target": "coreweave",
        "flowType": "equity_investment",
        "amount": 0,
        "desc": "2026 Q4: 지분 관계 유지; 해당 기간 신규 지분 취득 없음."
      },
      {
        "id": "coreweave_vc_refinance",
        "source": "coreweave",
        "target": "vc_sovereign",
        "flowType": "debt_collateral",
        "amount": 3.4,
        "desc": "2026 Q4: 코어위브가 GPU 자산유동화(ABS) 및 부채 차환을 통해 사모대출 시장에 $3.4B 상환/차환."
      },
      {
        "id": "vc_openai_equity",
        "source": "vc_sovereign",
        "target": "openai",
        "flowType": "equity_investment",
        "amount": 0,
        "desc": "2026 Q4: 기존 지분 조달 자금 집행 중; 해당 기간 대규모 신규 벤처 지분 유치 없음."
      },
      {
        "id": "xai_nvda_gpu",
        "source": "xai",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 5,
        "desc": "2026 Q4: xAI가 멤피스 '콜로서스' 등 초대형 슈퍼클러스터용 엔비디아 GPU에 $5B 직접 구매."
      },
      {
        "id": "skhynix_tsmc_foundry",
        "source": "skhynix",
        "target": "tsmc",
        "flowType": "gpu_purchase",
        "amount": 3.2,
        "desc": "2026 Q4: SK하이닉스가 HBM4 맞춤형 베이스 다이 생산을 위해 TSMC 선단 파운드리에 $3.2B 발주."
      },
      {
        "id": "market_openai_rev",
        "source": "end_market",
        "target": "openai",
        "flowType": "enterprise_revenue",
        "amount": 13.5,
        "desc": "2026 Q4: 기업 및 유료 사용자의 OpenAI 소프트웨어 및 API 실매출 $13.5B 달성."
      },
      {
        "id": "market_msft_rev",
        "source": "end_market",
        "target": "msft",
        "flowType": "enterprise_revenue",
        "amount": 21,
        "desc": "2026 Q4: M365 Copilot 및 Azure AI 기업 실매출 $21B 기록."
      },
      {
        "id": "market_anthropic_rev",
        "source": "end_market",
        "target": "anthropic",
        "flowType": "enterprise_revenue",
        "amount": 10.5,
        "desc": "2026 Q4: Claude 엔터프라이즈 API 토큰 소비 실매출 $10.5B 달성."
      },
      {
        "id": "market_deepseek_rev",
        "source": "end_market",
        "target": "deepseek",
        "flowType": "enterprise_revenue",
        "amount": 4.5,
        "desc": "2026 Q4: 저비용 고효율 오픈 추론 모델 DeepSeek API 토큰 실매출 $4.5B 달성."
      }
    ]
  }
];

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
