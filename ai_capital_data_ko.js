// ai_capital_data_ko.js - 글로벌 AI 자금 순환 및 반도체 공급망 실증 데이터베이스 (분기별 2023 Q1 ~ 2026 Q4)

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
        "desc": "Claude 3.5 및 컴퓨터 제어 AI를 개발한 프론티어 연구소로, 아마존과 구글로부터 대규모 자본 유치.",
        "initialX": 55,
        "initialY": -55
      },
      {
        "id": "xai",
        "name": "xAI",
        "category": "ai_lab",
        "marketCap": 8,
        "aiCapex": 0.1,
        "aiRevenue": 0,
        "desc": "일론 머스크가 설립한 프론티어 랩으로, 멤피스에 10만 개 규모의 세계 최대 수랭식 슈퍼클러스터 ‘콜로서스’ 운용.",
        "initialX": 75,
        "initialY": 45
      },
      {
        "id": "deepseek",
        "name": "딥시크 (DeepSeek)",
        "category": "ai_lab",
        "marketCap": 1.5,
        "aiCapex": 0.05,
        "aiRevenue": 0.01,
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
        "desc": "실제 기업 IT 예산, 개발자 API 사용료, 유료 소비자 구독 등 AI 생태계의 유일한 외부 실질 현금 유입원.",
        "initialX": -230,
        "initialY": -170
      }
    ],
    "edges": [
      {
        "source": "msft",
        "target": "openai",
        "flowType": "cloud_credit",
        "amount": 2.5,
        "desc": "Azure 클러스터 기반 초기 분기 컴퓨팅 크레딧 집행."
      },
      {
        "source": "openai",
        "target": "msft",
        "flowType": "cloud_credit",
        "amount": 0.35,
        "desc": "GPT-3.5 및 GPT-4 추론을 위한 Azure 데이터센터 사용료 지불."
      },
      {
        "source": "msft",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 2.8,
        "desc": "Azure OpenAI 서비스를 위한 A100/H100 가속기 서버 발주."
      },
      {
        "source": "goog",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 2.2,
        "desc": "자체 TPU 클러스터와 병행하여 엔비디아 GPU 확보."
      },
      {
        "source": "amzn",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 2.1,
        "desc": "AWS EC2 P4d/P5 인스턴스 확충을 위한 하드웨어 조달."
      },
      {
        "source": "meta",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 2,
        "desc": "엔비디아 호퍼 기반 AI 연구용 슈퍼클러스터(RSC) 구축."
      },
      {
        "source": "nvda",
        "target": "tsmc",
        "flowType": "gpu_purchase",
        "amount": 2.2,
        "desc": "TSMC 4N 공정 웨이퍼 및 CoWoS 어드밴스드 패키징 라인 예약."
      },
      {
        "source": "nvda",
        "target": "skhynix",
        "flowType": "hbm_purchase",
        "amount": 0.8,
        "desc": "H100 SXM용 HBM3 메모리 독점 공급 조달 계약."
      },
      {
        "source": "nvda",
        "target": "samsung",
        "flowType": "hbm_purchase",
        "amount": 0.3,
        "desc": "표준 GDDR6 및 초기 HBM 공급 협상."
      },
      {
        "source": "tsmc",
        "target": "asml",
        "flowType": "equipment_purchase",
        "amount": 1.5,
        "desc": "3nm/5nm 생산 라인을 위한 EUV 노광 장비 조달."
      },
      {
        "source": "samsung",
        "target": "asml",
        "flowType": "equipment_purchase",
        "amount": 1.1,
        "desc": "선단 DRAM 및 파운드리용 EUV 노광 장비 도입."
      },
      {
        "source": "skhynix",
        "target": "asml",
        "flowType": "equipment_purchase",
        "amount": 0.6,
        "desc": "1a/1b nm HBM 제조용 EUV 노광기 도입."
      },
      {
        "source": "goog",
        "target": "avgo",
        "flowType": "gpu_purchase",
        "amount": 0.7,
        "desc": "TPU v4/v5e ASIC 공동 개발 및 광학 상호연결망 구축."
      },
      {
        "source": "vc_sovereign",
        "target": "anthropic",
        "flowType": "equity_investment",
        "amount": 0.4,
        "desc": "AI 정렬 및 안전성 연구를 위한 시리즈 B 벤처 투자."
      },
      {
        "source": "end_market",
        "target": "openai",
        "flowType": "enterprise_revenue",
        "amount": 0.2,
        "desc": "ChatGPT Plus 유료 구독 및 개발자 API 사용료 결제."
      },
      {
        "source": "end_market",
        "target": "msft",
        "flowType": "enterprise_revenue",
        "amount": 0.6,
        "desc": "기업용 Azure OpenAI 서비스 토큰 사용료 매출."
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
        "desc": "Claude 3.5 및 컴퓨터 제어 AI를 개발한 프론티어 연구소로, 아마존과 구글로부터 대규모 자본 유치.",
        "initialX": 55,
        "initialY": -55
      },
      {
        "id": "xai",
        "name": "xAI",
        "category": "ai_lab",
        "marketCap": 12,
        "aiCapex": 0.2,
        "aiRevenue": 0.01,
        "desc": "일론 머스크가 설립한 프론티어 랩으로, 멤피스에 10만 개 규모의 세계 최대 수랭식 슈퍼클러스터 ‘콜로서스’ 운용.",
        "initialX": 75,
        "initialY": 45
      },
      {
        "id": "deepseek",
        "name": "딥시크 (DeepSeek)",
        "category": "ai_lab",
        "marketCap": 2.2,
        "aiCapex": 0.08,
        "aiRevenue": 0.02,
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
        "desc": "실제 기업 IT 예산, 개발자 API 사용료, 유료 소비자 구독 등 AI 생태계의 유일한 외부 실질 현금 유입원.",
        "initialX": -230,
        "initialY": -170
      }
    ],
    "edges": [
      {
        "source": "msft",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 3.6,
        "desc": "H100 SXM 모듈 대규모 선제 발주."
      },
      {
        "source": "goog",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 2.6,
        "desc": "구글 클라우드 내 엔비디아 가속기 클러스터 증설."
      },
      {
        "source": "amzn",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 2.8,
        "desc": "EFA 네트워킹 기반 AWS 울트라클러스터 구축."
      },
      {
        "source": "meta",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 2.5,
        "desc": "LLaMA 2 학습을 위한 호퍼 GPU 물량 확보."
      },
      {
        "source": "nvda",
        "target": "tsmc",
        "flowType": "gpu_purchase",
        "amount": 2.8,
        "desc": "TSMC에 CoWoS 패키징 긴급 증설 요청 및 웨이퍼 발주."
      },
      {
        "source": "nvda",
        "target": "skhynix",
        "flowType": "hbm_purchase",
        "amount": 1.2,
        "desc": "HBM3 적층 메모리 대량 구매(SK하이닉스 점유율 85% 이상 장악)."
      },
      {
        "source": "nvda",
        "target": "samsung",
        "flowType": "hbm_purchase",
        "amount": 0.4,
        "desc": "DGX 서버 시스템용 고성능 DRAM 및 기업용 SSD 공급."
      },
      {
        "source": "tsmc",
        "target": "asml",
        "flowType": "equipment_purchase",
        "amount": 1.6,
        "desc": "Fab 18 선단 3nm 라인 EUV 시스템 반입."
      },
      {
        "source": "skhynix",
        "target": "asml",
        "flowType": "equipment_purchase",
        "amount": 0.7,
        "desc": "1b nm HBM 생산능력 확대를 위한 노광 장비 조달."
      },
      {
        "source": "samsung",
        "target": "asml",
        "flowType": "equipment_purchase",
        "amount": 1.2,
        "desc": "평택 캠퍼스 선단 라인 EUV 장비 지속 도입."
      },
      {
        "source": "meta",
        "target": "avgo",
        "flowType": "gpu_purchase",
        "amount": 0.5,
        "desc": "자체 AI 가속기 MTIA v1 개발 협력."
      },
      {
        "source": "end_market",
        "target": "openai",
        "flowType": "enterprise_revenue",
        "amount": 0.35,
        "desc": "유료 개인 및 초기 비즈니스 구독 매출 급증."
      },
      {
        "source": "end_market",
        "target": "msft",
        "flowType": "enterprise_revenue",
        "amount": 0.75,
        "desc": "포춘 500대 기업의 Azure AI 파일럿 도입 매출."
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
        "desc": "실제 기업 IT 예산, 개발자 API 사용료, 유료 소비자 구독 등 AI 생태계의 유일한 외부 실질 현금 유입원.",
        "initialX": -230,
        "initialY": -170
      }
    ],
    "edges": [
      {
        "source": "vc_sovereign",
        "target": "coreweave",
        "flowType": "debt_collateral",
        "amount": 2.3,
        "desc": "블랙스톤/마그네타가 H100 GPU를 담보로 23억 달러 사모 대출 제공."
      },
      {
        "source": "coreweave",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 2.1,
        "desc": "조달한 부채로 엔비디아에 수만 장의 H100 추가 발주."
      },
      {
        "source": "amzn",
        "target": "anthropic",
        "flowType": "equity_investment",
        "amount": 1.25,
        "desc": "40억 달러 중 1차 트랜치(12.5억 달러) 집행 및 AWS 우선 계약."
      },
      {
        "source": "anthropic",
        "target": "amzn",
        "flowType": "cloud_credit",
        "amount": 0.4,
        "desc": "AWS 인프라에서 Claude 학습 및 추론 컴퓨팅 비용 집행."
      },
      {
        "source": "msft",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 3.8,
        "desc": "Azure 인프라용 대규모 가속기 지속 구매."
      },
      {
        "source": "nvda",
        "target": "skhynix",
        "flowType": "hbm_purchase",
        "amount": 1.6,
        "desc": "SK하이닉스 HBM3 라인 100% 가동 및 전량 엔비디아 납품."
      },
      {
        "source": "nvda",
        "target": "tsmc",
        "flowType": "gpu_purchase",
        "amount": 3.2,
        "desc": "TSMC, 엔비디아 요청에 따라 CoWoS 패키징 생산량 2배 확대 추진."
      },
      {
        "source": "goog",
        "target": "avgo",
        "flowType": "gpu_purchase",
        "amount": 0.8,
        "desc": "브로드컴 스위치와 결합된 TPU v5p 슈퍼컴퓨터 증설."
      },
      {
        "source": "end_market",
        "target": "openai",
        "flowType": "enterprise_revenue",
        "amount": 0.5,
        "desc": "기업 전용 ChatGPT Enterprise 요금제 출시로 매출 확대."
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
        "desc": "실제 기업 IT 예산, 개발자 API 사용료, 유료 소비자 구독 등 AI 생태계의 유일한 외부 실질 현금 유입원.",
        "initialX": -230,
        "initialY": -170
      }
    ],
    "edges": [
      {
        "source": "msft",
        "target": "openai",
        "flowType": "cloud_credit",
        "amount": 3.5,
        "desc": "올트먼 복귀 후 거버넌스 안정화와 함께 Azure 전용 인프라 확충."
      },
      {
        "source": "openai",
        "target": "msft",
        "flowType": "cloud_credit",
        "amount": 0.8,
        "desc": "GPT-4 Turbo 출시로 Azure 데이터센터 사용량 급증."
      },
      {
        "source": "goog",
        "target": "anthropic",
        "flowType": "equity_investment",
        "amount": 1,
        "desc": "구글의 앤트로픽 추가 20억 달러 투자 약정 및 클라우드 연계."
      },
      {
        "source": "msft",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 4.2,
        "desc": "엔비디아 H100 최대 단일 구매 고객으로 등극."
      },
      {
        "source": "meta",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 3,
        "desc": "LLaMA 3 대형 모델 훈련을 위한 가속기 대량 확보."
      },
      {
        "source": "nvda",
        "target": "skhynix",
        "flowType": "hbm_purchase",
        "amount": 1.9,
        "desc": "2024년 HBM3 물량 완판 및 판가 프리미엄 반영."
      },
      {
        "source": "nvda",
        "target": "samsung",
        "flowType": "hbm_purchase",
        "amount": 0.6,
        "desc": "초기 HBM3E 24GB 샘플 공급 및 퀄 테스트 개시."
      },
      {
        "source": "tsmc",
        "target": "asml",
        "flowType": "equipment_purchase",
        "amount": 1.8,
        "desc": "N3E 공정 안정화 및 High-NA EUV 시험 장비 도입 계약."
      },
      {
        "source": "end_market",
        "target": "msft",
        "flowType": "enterprise_revenue",
        "amount": 1,
        "desc": "월 30달러 M365 코파일럿 상용 출시로 기업 라이선스 매출 개시."
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
        "desc": "실제 기업 IT 예산, 개발자 API 사용료, 유료 소비자 구독 등 AI 생태계의 유일한 외부 실질 현금 유입원.",
        "initialX": -230,
        "initialY": -170
      }
    ],
    "edges": [
      {
        "source": "msft",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 4.8,
        "desc": "GB200 NVL72 수랭식 슈퍼팟 시스템 선제 예약 주문."
      },
      {
        "source": "meta",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 3.8,
        "desc": "연말까지 60만 개 H100 환산 컴퓨팅 확보를 위한 공격적 매입."
      },
      {
        "source": "amzn",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 3.5,
        "desc": "엔비디아 그레이스 호퍼 기반 AWS 세이바 프로젝트 진행."
      },
      {
        "source": "nvda",
        "target": "skhynix",
        "flowType": "hbm_purchase",
        "amount": 2.5,
        "desc": "SK하이닉스, 세계 최초 8단 HBM3E 대량 양산 및 엔비디아 독점 공급."
      },
      {
        "source": "samsung",
        "target": "nvda",
        "flowType": "hbm_purchase",
        "amount": 0.8,
        "desc": "삼성전자 12단 HBM3E 퀄 테스트용 샘플 공급."
      },
      {
        "source": "goog",
        "target": "avgo",
        "flowType": "gpu_purchase",
        "amount": 1.2,
        "desc": "구글 TPU v5e/v5p 주문형 반도체 설계 및 제조 지출."
      },
      {
        "source": "nvda",
        "target": "tsmc",
        "flowType": "gpu_purchase",
        "amount": 4.5,
        "desc": "블랙웰 양산을 위한 TSMC CoWoS-L 라인 전량 예약."
      },
      {
        "source": "end_market",
        "target": "openai",
        "flowType": "enterprise_revenue",
        "amount": 0.9,
        "desc": "엔터프라이즈 ChatGPT 유료 고객사 60만 개 돌파."
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
        "desc": "실제 기업 IT 예산, 개발자 API 사용료, 유료 소비자 구독 등 AI 생태계의 유일한 외부 실질 현금 유입원.",
        "initialX": -230,
        "initialY": -170
      }
    ],
    "edges": [
      {
        "source": "vc_sovereign",
        "target": "coreweave",
        "flowType": "debt_collateral",
        "amount": 7.5,
        "desc": "블랙스톤/칼라일이 주도하는 75억 달러 규모의 GPU 담보 부채 조달."
      },
      {
        "source": "coreweave",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 5.5,
        "desc": "조달 부채를 엔비디아 서버 클러스터 구매에 직접 투입."
      },
      {
        "source": "nvda",
        "target": "coreweave",
        "flowType": "equity_investment",
        "amount": 0.3,
        "desc": "수요 보장을 위해 엔비디아가 코어위브 지분에 직접 재투자."
      },
      {
        "source": "nvda",
        "target": "skhynix",
        "flowType": "hbm_purchase",
        "amount": 3.2,
        "desc": "HBM 판가 급등으로 SK하이닉스 분기 영업이익 사상 최대치 갱신."
      },
      {
        "source": "nvda",
        "target": "tsmc",
        "flowType": "gpu_purchase",
        "amount": 5.5,
        "desc": "블랙웰 듀얼 다이 패키징을 위한 TSMC 지출 급증."
      },
      {
        "source": "amzn",
        "target": "anthropic",
        "flowType": "equity_investment",
        "amount": 2,
        "desc": "아마존의 앤트로픽 40억 달러 투자 잔여분 완납."
      },
      {
        "source": "anthropic",
        "target": "amzn",
        "flowType": "cloud_credit",
        "amount": 0.7,
        "desc": "Claude 3.5 Sonnet의 AWS 베드록 인프라 학습 비용 정산."
      },
      {
        "source": "end_market",
        "target": "msft",
        "flowType": "enterprise_revenue",
        "amount": 1.5,
        "desc": "M365 코파일럿 및 Azure AI API 엔터프라이즈 결제."
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
        "desc": "실제 기업 IT 예산, 개발자 API 사용료, 유료 소비자 구독 등 AI 생태계의 유일한 외부 실질 현금 유입원.",
        "initialX": -230,
        "initialY": -170
      }
    ],
    "edges": [
      {
        "source": "vc_sovereign",
        "target": "openai",
        "flowType": "equity_investment",
        "amount": 6.6,
        "desc": "스라이브/소프트뱅크/MS 주도로 1,570억 달러 기업가치에 66억 달러 투자."
      },
      {
        "source": "xai",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 3.5,
        "desc": "멤피스 콜로서스 데이터센터 구축을 위한 10만 개 H100 직구매."
      },
      {
        "source": "nvda",
        "target": "skhynix",
        "flowType": "hbm_purchase",
        "amount": 3.6,
        "desc": "SK하이닉스, 세계 최초 12단 36GB HBM3E 양산 출하."
      },
      {
        "source": "nvda",
        "target": "samsung",
        "flowType": "hbm_purchase",
        "amount": 1.2,
        "desc": "삼성전자 8단 HBM3E 양산 승인(PRA) 및 공급 확대."
      },
      {
        "source": "openai",
        "target": "msft",
        "flowType": "cloud_credit",
        "amount": 1.5,
        "desc": "추론 모델 Strawberry(o1) 훈련을 위한 Azure 비용 지출."
      },
      {
        "source": "tsmc",
        "target": "asml",
        "flowType": "equipment_purchase",
        "amount": 2.1,
        "desc": "3nm 공정 확충을 위한 추가 EUV 노광 장비 반입."
      },
      {
        "source": "end_market",
        "target": "openai",
        "flowType": "enterprise_revenue",
        "amount": 1.3,
        "desc": "오픈AI 연간 환산 매출 40억 달러 돌파."
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
        "desc": "실제 기업 IT 예산, 개발자 API 사용료, 유료 소비자 구독 등 AI 생태계의 유일한 외부 실질 현금 유입원.",
        "initialX": -230,
        "initialY": -170
      }
    ],
    "edges": [
      {
        "source": "msft",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 5.2,
        "desc": "GB200 및 H200 가속기 대규모 조달 집행."
      },
      {
        "source": "goog",
        "target": "avgo",
        "flowType": "gpu_purchase",
        "amount": 1.8,
        "desc": "구글 TPU v5p 및 차세대 TPU v6 맞춤형 칩 생산 비용."
      },
      {
        "source": "meta",
        "target": "avgo",
        "flowType": "gpu_purchase",
        "amount": 1.1,
        "desc": "메타 차세대 MTIA 가속기 및 AI 백본 네트워킹 구축."
      },
      {
        "source": "nvda",
        "target": "skhynix",
        "flowType": "hbm_purchase",
        "amount": 4,
        "desc": "블랙웰 가속기 양산에 따른 8단/12단 HBM3E 대량 흡수."
      },
      {
        "source": "nvda",
        "target": "samsung",
        "flowType": "hbm_purchase",
        "amount": 1.5,
        "desc": "삼성전자 12단 HBM3E 주요 엔비디아 고객사 승인 공급."
      },
      {
        "source": "nvda",
        "target": "tsmc",
        "flowType": "gpu_purchase",
        "amount": 6.8,
        "desc": "TSMC CoWoS 생산능력 월 3만 5천 장 돌파."
      },
      {
        "source": "end_market",
        "target": "openai",
        "flowType": "enterprise_revenue",
        "amount": 1.8,
        "desc": "o1 추론 모델 API의 고단가 토큰 판매로 매출 신장."
      },
      {
        "source": "end_market",
        "target": "msft",
        "flowType": "enterprise_revenue",
        "amount": 2.2,
        "desc": "대기업 엔터프라이즈 코파일럿 좌석 확대 및 매출 가속."
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
        "desc": "실제 기업 IT 예산, 개발자 API 사용료, 유료 소비자 구독 등 AI 생태계의 유일한 외부 실질 현금 유입원.",
        "initialX": -230,
        "initialY": -170
      }
    ],
    "edges": [
      {
        "source": "msft",
        "target": "openai",
        "flowType": "cloud_credit",
        "amount": 4,
        "desc": "스타게이트 부지 매입 및 원자력 PPA 전력 공급 계약 착수."
      },
      {
        "source": "openai",
        "target": "msft",
        "flowType": "cloud_credit",
        "amount": 2.1,
        "desc": "일일 활성 사용자 및 기업 추론 트래픽 폭증에 따른 Azure 비용 정산."
      },
      {
        "source": "msft",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 6.2,
        "desc": "Azure 데이터센터향 블랙웰 GB200 양산 물량 본격 반입."
      },
      {
        "source": "amzn",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 5.5,
        "desc": "AWS 차세대 블랙웰 울트라클러스터 증설."
      },
      {
        "source": "nvda",
        "target": "skhynix",
        "flowType": "hbm_purchase",
        "amount": 4.5,
        "desc": "B200용 12단 HBM3E 메모리 지배적 물량 공급 지속."
      },
      {
        "source": "nvda",
        "target": "samsung",
        "flowType": "hbm_purchase",
        "amount": 2,
        "desc": "엔터프라이즈 가속기향 삼성전자 HBM3E 공급량 확대."
      },
      {
        "source": "tsmc",
        "target": "asml",
        "flowType": "equipment_purchase",
        "amount": 2.4,
        "desc": "2nm 시험 양산을 위한 High-NA EUV 장비 라인 통합."
      },
      {
        "source": "end_market",
        "target": "deepseek",
        "flowType": "enterprise_revenue",
        "amount": 0.45,
        "desc": "극도의 저비용 추론 매력으로 글로벌 개발자 DeepSeek API 대거 채택."
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
        "desc": "실제 기업 IT 예산, 개발자 API 사용료, 유료 소비자 구독 등 AI 생태계의 유일한 외부 실질 현금 유입원.",
        "initialX": -230,
        "initialY": -170
      }
    ],
    "edges": [
      {
        "source": "msft",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 6.8,
        "desc": "수랭식 GB200 서버 랙 수천 대 조달 집행."
      },
      {
        "source": "goog",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 4.5,
        "desc": "자체 TPU v6 클러스터와 병행하여 블랙웰 대규모 반입."
      },
      {
        "source": "meta",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 5.2,
        "desc": "미국 전역의 메타 초대형 데이터센터 캠퍼스 인프라 확충."
      },
      {
        "source": "nvda",
        "target": "skhynix",
        "flowType": "hbm_purchase",
        "amount": 4.8,
        "desc": "SK하이닉스, 12단 HBM3E 최대 공급 지위 지속 수성."
      },
      {
        "source": "nvda",
        "target": "samsung",
        "flowType": "hbm_purchase",
        "amount": 2.6,
        "desc": "삼성전자 HBM3E 대량 양산 납품 본격 확대."
      },
      {
        "source": "nvda",
        "target": "tsmc",
        "flowType": "gpu_purchase",
        "amount": 7.5,
        "desc": "TSMC CoWoS 생산능력 월 4만 2천 장으로 확대."
      },
      {
        "source": "end_market",
        "target": "msft",
        "flowType": "enterprise_revenue",
        "amount": 3,
        "desc": "글로벌 2000대 기업의 Azure 코파일럿 스튜디오 에이전트 도입."
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
        "desc": "실제 기업 IT 예산, 개발자 API 사용료, 유료 소비자 구독 등 AI 생태계의 유일한 외부 실질 현금 유입원.",
        "initialX": -230,
        "initialY": -170
      }
    ],
    "edges": [
      {
        "source": "coreweave",
        "target": "vc_sovereign",
        "flowType": "debt_collateral",
        "amount": 2.5,
        "desc": "2023년 만기 도래 부채를 자산유동화 채권으로 차환(리파이낸싱)."
      },
      {
        "source": "coreweave",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 4,
        "desc": "호퍼 중심에서 블랙웰 인프라로의 전환을 위한 신규 발주."
      },
      {
        "source": "msft",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 7,
        "desc": "엔터프라이즈 클라우드 지원을 위한 블랙웰 지속 도입."
      },
      {
        "source": "nvda",
        "target": "skhynix",
        "flowType": "hbm_purchase",
        "amount": 5,
        "desc": "SK하이닉스 12단 HBM3E 풀가동 및 안정적 공급."
      },
      {
        "source": "nvda",
        "target": "samsung",
        "flowType": "hbm_purchase",
        "amount": 3,
        "desc": "삼성전자 메모리 사업부 HBM 매출 비중 대폭 확대."
      },
      {
        "source": "goog",
        "target": "avgo",
        "flowType": "gpu_purchase",
        "amount": 2.2,
        "desc": "구글 TPU v6 자체 가속기 대규모 양산 및 데이터센터 배치."
      },
      {
        "source": "end_market",
        "target": "openai",
        "flowType": "enterprise_revenue",
        "amount": 2.8,
        "desc": "코딩 에이전트 및 결정론적 업무 자동화로 기업 결제 급증."
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
        "desc": "실제 기업 IT 예산, 개발자 API 사용료, 유료 소비자 구독 등 AI 생태계의 유일한 외부 실질 현금 유입원.",
        "initialX": -230,
        "initialY": -170
      }
    ],
    "edges": [
      {
        "source": "goog",
        "target": "avgo",
        "flowType": "gpu_purchase",
        "amount": 2.5,
        "desc": "TPU v6 대규모 양산으로 브로드컴 맞춤형 칩 부문 급성장."
      },
      {
        "source": "meta",
        "target": "avgo",
        "flowType": "gpu_purchase",
        "amount": 1.6,
        "desc": "메타 랭킹 및 추천 시스템에 MTIA v2 자체 칩 전면 배치."
      },
      {
        "source": "msft",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 7.2,
        "desc": "외부 클라우드 고객 유치를 위한 최신 GPU 지속 확보."
      },
      {
        "source": "nvda",
        "target": "skhynix",
        "flowType": "hbm_purchase",
        "amount": 5.2,
        "desc": "HBM3E 판매 호조로 SK하이닉스 사상 최대 연간 잉여현금흐름 창출."
      },
      {
        "source": "nvda",
        "target": "samsung",
        "flowType": "hbm_purchase",
        "amount": 3.4,
        "desc": "삼성전자 12단 HBM3E 대량 양산 및 주요 AI 서버 공급."
      },
      {
        "source": "end_market",
        "target": "openai",
        "flowType": "enterprise_revenue",
        "amount": 3.2,
        "desc": "오픈AI 분기 실매출 32억 달러 육박."
      },
      {
        "source": "end_market",
        "target": "msft",
        "flowType": "enterprise_revenue",
        "amount": 3.6,
        "desc": "엔터프라이즈 코파일럿 소프트웨어 수익화 안착."
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
        "desc": "실제 기업 IT 예산, 개발자 API 사용료, 유료 소비자 구독 등 AI 생태계의 유일한 외부 실질 현금 유입원.",
        "initialX": -230,
        "initialY": -170
      }
    ],
    "edges": [
      {
        "source": "msft",
        "target": "openai",
        "flowType": "cloud_credit",
        "amount": 3.2,
        "desc": "반독점 규제 준수를 위해 순환 크레딧을 상업적 현금 수수료 모델로 전환."
      },
      {
        "source": "openai",
        "target": "msft",
        "flowType": "cloud_credit",
        "amount": 2.8,
        "desc": "전용 스타게이트 컴퓨팅 존 사용에 따른 직접 현금 결제."
      },
      {
        "source": "msft",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 7.2,
        "desc": "베라 루빈 및 차세대 블랙웰 시스템 조달."
      },
      {
        "source": "nvda",
        "target": "skhynix",
        "flowType": "hbm_purchase",
        "amount": 5.4,
        "desc": "SK하이닉스, 16단 HBM3E 및 초기 HBM4 샘플 공급."
      },
      {
        "source": "nvda",
        "target": "samsung",
        "flowType": "hbm_purchase",
        "amount": 3.6,
        "desc": "삼성전자, 4nm 파운드리 기반 맞춤형 HBM4 베이스 다이 개발 공급."
      },
      {
        "source": "nvda",
        "target": "tsmc",
        "flowType": "gpu_purchase",
        "amount": 8,
        "desc": "TSMC 선단 2nm N2 공정 생산 라인 사전 예약 계약."
      },
      {
        "source": "end_market",
        "target": "openai",
        "flowType": "enterprise_revenue",
        "amount": 3.5,
        "desc": "기업용 자율 에이전트 워크플로우 라이선스 매출 성장."
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
        "desc": "실제 기업 IT 예산, 개발자 API 사용료, 유료 소비자 구독 등 AI 생태계의 유일한 외부 실질 현금 유입원.",
        "initialX": -230,
        "initialY": -170
      }
    ],
    "edges": [
      {
        "source": "skhynix",
        "target": "tsmc",
        "flowType": "gpu_purchase",
        "amount": 1.5,
        "desc": "SK하이닉스, HBM4 베이스 다이 생산을 위해 TSMC 파운드리 활용."
      },
      {
        "source": "samsung",
        "target": "nvda",
        "flowType": "hbm_purchase",
        "amount": 4,
        "desc": "삼성전자, 메모리+파운드리 턴키 기반 HBM4 솔루션 납품 확대."
      },
      {
        "source": "nvda",
        "target": "skhynix",
        "flowType": "hbm_purchase",
        "amount": 5.8,
        "desc": "루빈 아키텍처용 HBM 공급 물량 완판 확보."
      },
      {
        "source": "nvda",
        "target": "tsmc",
        "flowType": "gpu_purchase",
        "amount": 8.5,
        "desc": "TSMC 2nm 나노시트 웨이퍼 양산 라인 가동."
      },
      {
        "source": "goog",
        "target": "avgo",
        "flowType": "gpu_purchase",
        "amount": 2.8,
        "desc": "구글 7세대 TPU 맞춤형 ASIC 전 세계 리전 배치."
      },
      {
        "source": "end_market",
        "target": "msft",
        "flowType": "enterprise_revenue",
        "amount": 4.3,
        "desc": "기업 내 M365 코파일럿 에이전트 기능 도입 가속."
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
        "desc": "실제 기업 IT 예산, 개발자 API 사용료, 유료 소비자 구독 등 AI 생태계의 유일한 외부 실질 현금 유입원.",
        "initialX": -230,
        "initialY": -170
      }
    ],
    "edges": [
      {
        "source": "msft",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 7.5,
        "desc": "차세대 슈퍼컴퓨터 인프라 조달 지속."
      },
      {
        "source": "amzn",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 6.5,
        "desc": "AWS 대형 데이터센터 인프라 확장 지속."
      },
      {
        "source": "nvda",
        "target": "skhynix",
        "flowType": "hbm_purchase",
        "amount": 6,
        "desc": "SK하이닉스 고대역폭 메모리 독점적 공급 수혜 지속."
      },
      {
        "source": "nvda",
        "target": "samsung",
        "flowType": "hbm_purchase",
        "amount": 4.2,
        "desc": "삼성전자 HBM4 양산 출하로 강력한 실적 기여."
      },
      {
        "source": "nvda",
        "target": "tsmc",
        "flowType": "gpu_purchase",
        "amount": 8.8,
        "desc": "TSMC 선단 패키징 및 웨이퍼 최대 주문."
      },
      {
        "source": "end_market",
        "target": "openai",
        "flowType": "enterprise_revenue",
        "amount": 4.2,
        "desc": "검증된 업무 생산성을 입증한 기업용 에이전트 결제 확대."
      },
      {
        "source": "end_market",
        "target": "msft",
        "flowType": "enterprise_revenue",
        "amount": 4.5,
        "desc": "상업용 클라우드 AI 매출 연간 환산 180억 달러 돌파."
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
        "desc": "실제 기업 IT 예산, 개발자 API 사용료, 유료 소비자 구독 등 AI 생태계의 유일한 외부 실질 현금 유입원.",
        "initialX": -230,
        "initialY": -170
      }
    ],
    "edges": [
      {
        "source": "msft",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 7,
        "desc": "차세대 루빈 GPU 및 주기적 교체 수요에 따른 안정적 발주."
      },
      {
        "source": "amzn",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 6.2,
        "desc": "AWS 가속기 클라우드 유지보수 및 용량 확충."
      },
      {
        "source": "nvda",
        "target": "skhynix",
        "flowType": "hbm_purchase",
        "amount": 6.2,
        "desc": "차세대 HBM4 및 HBM4E 다년 장기 공급 계약 체결."
      },
      {
        "source": "nvda",
        "target": "samsung",
        "flowType": "hbm_purchase",
        "amount": 4.5,
        "desc": "삼성전자 HBM4 턴키 솔루션 대량 출하 및 공급 다변화."
      },
      {
        "source": "nvda",
        "target": "tsmc",
        "flowType": "gpu_purchase",
        "amount": 9,
        "desc": "TSMC 2nm 및 첨단 패키징 라인의 고효율 대량 양산."
      },
      {
        "source": "tsmc",
        "target": "asml",
        "flowType": "equipment_purchase",
        "amount": 2.5,
        "desc": "High-NA EUV 상용 양산 장비 지속 반입."
      },
      {
        "source": "end_market",
        "target": "openai",
        "flowType": "enterprise_revenue",
        "amount": 4.5,
        "desc": "자율 멀티 에이전트 플랫폼 엔터프라이즈 구독 매출."
      },
      {
        "source": "end_market",
        "target": "msft",
        "flowType": "enterprise_revenue",
        "amount": 4.7,
        "desc": "M365 코파일럿 자율 에이전트의 광범위한 기업 침투율 달성."
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
