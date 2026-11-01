// ai_capital_data_ko.js - 글로벌 AI 자금 순환 및 순환금융(Ouroboros) 생태계 실증 데이터베이스 (2022-2026)

(function () {
  const categoryDefinitionsKo = {
    hyperscaler: { name: '빅테크 하이퍼스케일러', color: '#38bdf8' },
    chipmaker: { name: '핵심 하드웨어 독점 (엔비디아 / TSMC)', color: '#10b981' },
    ai_lab: { name: '프론티어 AI 모델 개발사', color: '#f43f5e' },
    neocloud: { name: '네오클라우드 (GPU 담보 부채 조달사)', color: '#fbbf24' },
    venture_capital: { name: 'VC 및 국부펀드', color: '#a855f7' },
    end_market: { name: '실질 최종 소비자/기업 시장 (실질 소프트웨어 매출)', color: '#00e5ff' }
  };

  const flowTypeDefinitionsKo = {
    equity_investment: { name: '지분 투자 (직접 현금/지분 출자)', color: '#ffb300' },
    cloud_credit: { name: '클라우드 컴퓨팅 크레딧 (지분 맞교환)', color: '#00e5ff' },
    gpu_purchase: { name: 'GPU 가속기 구매 (엔비디아 하드웨어 지출)', color: '#10b981' },
    debt_collateral: { name: 'GPU 담보 차입 (벤더 파이낸싱 부채)', color: '#a855f7' },
    enterprise_revenue: { name: '실제 최종 기업 소프트웨어/API 매출', color: '#38bdf8' }
  };

  const aiCapitalTimelineDataKo = [
    // ─── 2022: 생성형 AI 태동기 ───────────────────────────────
    {
      year: 2022,
      title: '2022: 생성형 AI 태동기 및 초기 빅테크 동맹',
      summary: '챗GPT 공개 이전, 마이크로소프트는 오픈AI에 10억 달러 초기 출자 및 애저(Azure) 인프라 우선 제공 계약을 맺었습니다. 당시 빅테크의 AI 설비투자(Capex)는 추천 알고리즘과 검색 최적화 중심의 비교적 완만한 수준이었습니다.',
      macroMetrics: {
        totalAiCapex: 69.0, // 십억 달러 ($B)
        realEndUserRevenue: 1.2, // 실질 생성형 AI 소프트웨어 매출 ($B)
        capexRevenueDeficit: 67.8, // 투자액 대비 매출 결손 격차 ($B)
        circularRatio: 42 // 빅테크 클라우드 제공사가 공급한 내부 자금 비율 (%)
      },
      nodes: [
        { id: 'msft', name: '마이크로소프트 (MSFT)', category: 'hyperscaler', marketCap: 1780, aiCapex: 18.0, aiRevenue: 0.8, desc: '오픈AI 초기 투자 및 애저 독점 호스팅 계약 체결.' },
        { id: 'goog', name: '알파벳 / 구글 (GOOGL)', category: 'hyperscaler', marketCap: 1150, aiCapex: 16.0, aiRevenue: 0.6, desc: '트랜스포머 아키텍처 원천 개발 및 자체 TPU 클러스터 운용.' },
        { id: 'amzn', name: '아마존 / AWS', category: 'hyperscaler', marketCap: 860, aiCapex: 20.0, aiRevenue: 0.5, desc: '세계 최대 클라우드 제공사로서 EC2 컴퓨팅 인스턴스 확장.' },
        { id: 'meta', name: '메타 플랫폼스 (META)', category: 'hyperscaler', marketCap: 320, aiCapex: 15.0, aiRevenue: 0.2, desc: '파이토치(PyTorch) 기반 오픈소스 AI 연구 및 데이터센터 재구축.' },
        { id: 'nvda', name: '엔비디아 (NVDA)', category: 'chipmaker', marketCap: 360, aiCapex: 2.5, aiRevenue: 15.0, desc: 'A100 GPU 아키텍처로 엔터프라이즈 AI 가속기 시장 지배.' },
        { id: 'tsmc', name: 'TSMC', category: 'chipmaker', marketCap: 380, aiCapex: 36.3, aiRevenue: 75.9, desc: '첨단 5나노/4나노 AI 칩의 전 세계 독점 순수 파운드리.' },
        { id: 'openai', name: '오픈AI (OpenAI)', category: 'ai_lab', marketCap: 20, aiCapex: 0.8, aiRevenue: 0.03, desc: 'GPT-3 및 DALL-E 연구 개발 비영리/제한 영리 연구소.' },
        { id: 'anthropic', name: '앤트로픽 (Anthropic)', category: 'ai_lab', marketCap: 4, aiCapex: 0.2, aiRevenue: 0.01, desc: '오픈AI 출신 연구진이 설립한 AI 안전 및 헌법적 AI 연구 기업.' },
        { id: 'xai', name: 'xAI', category: 'ai_lab', marketCap: 5, aiCapex: 0.1, aiRevenue: 0.00, desc: '일론 머스크의 인공지능 연구 구상 및 준비 단계.' },
        { id: 'coreweave', name: '코어위브 (CoreWeave)', category: 'neocloud', marketCap: 2, aiCapex: 0.3, aiRevenue: 0.05, desc: '가상화폐 채굴 업체에서 특화형 GPU 클라우드로 피벗 진행.' },
        { id: 'vc_sovereign', name: 'VC 및 국부펀드', category: 'venture_capital', marketCap: 500, aiCapex: 0.0, aiRevenue: 0.0, desc: '실리콘밸리 벤처캐피털(세쿼이아, a16z, 라이트스피드 등).' },
        { id: 'end_market', name: '최종 소비자 및 기업', category: 'end_market', marketCap: 1200, aiCapex: 0.0, aiRevenue: 1.2, desc: '초기 자연어 처리 및 이미지 생성 API를 도입한 소수 얼리어답터 기업.' }
      ],
      edges: [
        { source: 'msft', target: 'openai', flowType: 'equity_investment', amount: 1.0, desc: '초기 기초 지분 투자 및 컴퓨팅 파트너십.' },
        { source: 'openai', target: 'msft', flowType: 'cloud_credit', amount: 0.6, desc: 'GPT-3.5 훈련을 위한 애저(Azure) 인프라 비용 지불.' },
        { source: 'msft', target: 'nvda', flowType: 'gpu_purchase', amount: 3.5, desc: '애저 AI 클라우드용 A100 GPU 서버 클러스터 구매.' },
        { source: 'goog', target: 'nvda', flowType: 'gpu_purchase', amount: 2.8, desc: '자체 TPU v4 보완용 엔비디아 GPU 확보.' },
        { source: 'amzn', target: 'nvda', flowType: 'gpu_purchase', amount: 3.0, desc: 'AWS EC2 P4d 고성능 인스턴스 구축 비용.' },
        { source: 'meta', target: 'nvda', flowType: 'gpu_purchase', amount: 2.5, desc: '16,000대 A100 기반 리서치 슈퍼클러스터(RSC) 구축.' },
        { source: 'nvda', target: 'tsmc', flowType: 'gpu_purchase', amount: 4.8, desc: 'TSMC 4N 및 7나노 웨이퍼 생산 위탁.' },
        { source: 'vc_sovereign', target: 'openai', flowType: 'equity_investment', amount: 1.2, desc: '타이거글로벌 등 벤처 투자사들의 구주 매입 및 투자.' },
        { source: 'vc_sovereign', target: 'anthropic', flowType: 'equity_investment', amount: 0.5, desc: '시리즈 B 펀딩 라운드 유치.' },
        { source: 'end_market', target: 'openai', flowType: 'enterprise_revenue', amount: 0.03, desc: '초기 GPT-3 API 토큰 과금 수익.' },
        { source: 'end_market', target: 'msft', flowType: 'enterprise_revenue', amount: 0.8, desc: '애저 인지 서비스 및 기업용 AI 솔루션 매출.' }
      ]
    },

    // ─── 2023: 챗GPT 신드롬과 H100 쇼티지 ───────────────────────
    {
      year: 2023,
      title: '2023: 챗GPT 신드롬과 H100 GPU 공급 부족 대란',
      summary: '챗GPT의 대성공으로 전 세계가 AI 컴퓨팅 확보 전쟁에 돌입했습니다. 마이크로소프트는 오픈AI에 100억 달러를 추가 투자(대부분 애저 크레딧)했고, 엔비디아의 H100은 75%가 넘는 경이적인 마진을 기록하며 역사적인 품귀 현상을 빚었습니다.',
      macroMetrics: {
        totalAiCapex: 119.0,
        realEndUserRevenue: 5.5,
        capexRevenueDeficit: 113.5,
        circularRatio: 58
      },
      nodes: [
        { id: 'msft', name: '마이크로소프트 (MSFT)', category: 'hyperscaler', marketCap: 2790, aiCapex: 32.0, aiRevenue: 2.5, desc: 'GPT-4를 빙(Bing)과 코파일럿에 전면 도입하며 100억 달러 파트너십 확정.' },
        { id: 'goog', name: '알파벳 / 구글 (GOOGL)', category: 'hyperscaler', marketCap: 1760, aiCapex: 28.0, aiRevenue: 1.8, desc: '사내 코드 레드 발령, 바드(Bard) 출시 및 앤트로픽 동맹 강화.' },
        { id: 'amzn', name: '아마존 / AWS', category: 'hyperscaler', marketCap: 1570, aiCapex: 30.0, aiRevenue: 1.2, desc: '앤트로픽에 최대 40억 달러 전략적 투자를 전격 발표.' },
        { id: 'meta', name: '메타 플랫폼스 (META)', category: 'hyperscaler', marketCap: 910, aiCapex: 27.0, aiRevenue: 0.9, desc: '오픈소스 LLaMA 1 & 2 공개로 인프라 방향을 GPU 중심으로 완전 전환.' },
        { id: 'nvda', name: '엔비디아 (NVDA)', category: 'chipmaker', marketCap: 1220, aiCapex: 3.5, aiRevenue: 47.5, desc: '호퍼(Hopper) H100 수요 폭증으로 데이터센터 매출 전년 대비 400% 급증.' },
        { id: 'tsmc', name: 'TSMC', category: 'chipmaker', marketCap: 540, aiCapex: 30.4, aiRevenue: 69.3, desc: 'CoWoS 첨단 패키징 라인이 전 세계 AI 인프라 공급의 최대 병목으로 부상.' },
        { id: 'openai', name: '오픈AI (OpenAI)', category: 'ai_lab', marketCap: 86, aiCapex: 2.8, aiRevenue: 1.6, desc: '주간 활성 사용자 1억 명 돌파 및 유료 구독화 본격 개시.' },
        { id: 'anthropic', name: '앤트로픽 (Anthropic)', category: 'ai_lab', marketCap: 18, aiCapex: 1.2, aiRevenue: 0.1, desc: '클로드(Claude) 출시 후 아마존과 구글로부터 조 단위 러브콜 수주.' },
        { id: 'xai', name: 'xAI', category: 'ai_lab', marketCap: 15, aiCapex: 0.8, aiRevenue: 0.05, desc: '일론 머스크의 엑스(X) 플랫폼 실시간 데이터를 활용한 AI 구축 착수.' },
        { id: 'coreweave', name: '코어위브 (CoreWeave)', category: 'neocloud', marketCap: 7, aiCapex: 2.5, aiRevenue: 0.5, desc: '엔비디아 H100 GPU 현물을 담보로 23억 달러 규모 사모 대출 조달.' },
        { id: 'vc_sovereign', name: 'VC 및 국부펀드', category: 'venture_capital', marketCap: 500, aiCapex: 0.0, aiRevenue: 0.0, desc: 'AI 파운데이션 모델 및 래퍼 스타트업에 사상 최대 자금 투입.' },
        { id: 'end_market', name: '최종 소비자 및 기업', category: 'end_market', marketCap: 1200, aiCapex: 0.0, aiRevenue: 5.5, desc: '월 20달러 챗GPT 플러스 구독 및 초기 엔터프라이즈 파일럿 테스트 결제.' }
      ],
      edges: [
        { source: 'msft', target: 'openai', flowType: 'cloud_credit', amount: 8.5, desc: '대부분 애저(Azure) 컴퓨팅 크레딧 형태로 지급된 다년 계약.' },
        { source: 'openai', target: 'msft', flowType: 'cloud_credit', amount: 2.2, desc: '챗GPT 서비스 구동을 위한 대규모 애저 인프라 이용료 지불.' },
        { source: 'amzn', target: 'anthropic', flowType: 'equity_investment', amount: 2.0, desc: '40억 달러 투자 중 1차분 집행 및 AWS 우선 클라우드 지정.' },
        { source: 'goog', target: 'anthropic', flowType: 'equity_investment', amount: 1.5, desc: '지분 투자와 결합된 구글 클라우드 TPU/GPU 훈련 계약.' },
        { source: 'msft', target: 'nvda', flowType: 'gpu_purchase', amount: 11.5, desc: '애저 AI 인프라 확충을 위해 15만 대 이상의 H100 구매.' },
        { source: 'meta', target: 'nvda', flowType: 'gpu_purchase', amount: 8.0, desc: 'LLaMA 오픈소스 훈련용 대규모 H100 클러스터 발주.' },
        { source: 'goog', target: 'nvda', flowType: 'gpu_purchase', amount: 6.5, desc: '자체 TPU v5e와 병행 운영할 엔비디아 가속기 확보.' },
        { source: 'amzn', target: 'nvda', flowType: 'gpu_purchase', amount: 7.0, desc: 'AWS 울트라클러스터(UltraCluster) H100 HGX 시스템 도입.' },
        { source: 'nvda', target: 'coreweave', flowType: 'equity_investment', amount: 0.1, desc: '엔비디아가 코어위브에 지분 투자하며 GPU 우선 공급권 부여.' },
        { source: 'coreweave', target: 'nvda', flowType: 'gpu_purchase', amount: 2.3, desc: 'GPU 담보 차입금 23억 달러를 전액 엔비디아 칩 구매에 재투입.' },
        { source: 'nvda', target: 'tsmc', flowType: 'gpu_purchase', amount: 9.5, desc: 'TSMC CoWoS 패키징 생산 능력 2배 확장 주문.' },
        { source: 'vc_sovereign', target: 'openai', flowType: 'equity_investment', amount: 3.3, desc: '오픈AI 기업가치 860억 달러 기준 구주 거래 라운드.' },
        { source: 'end_market', target: 'openai', flowType: 'enterprise_revenue', amount: 1.6, desc: '챗GPT 유료 구독 및 B2B 엔터프라이즈 라이선스 매출.' },
        { source: 'end_market', target: 'msft', flowType: 'enterprise_revenue', amount: 2.5, desc: 'MS 365 코파일럿 애드온 및 애저 오픈AI 서비스 매출.' }
      ]
    },

    // ─── 2024: 6천억 달러 질문과 순환금융의 정점 ─────────────────
    {
      year: 2024,
      title: '2024: 세쿼이아의 $600B 질문과 순환금융(Ouroboros) 정점',
      summary: '세쿼이아 캐피털이 2천억 달러의 설비투자 대비 실제 소프트웨어 매출이 턱없이 부족함을 지적한 "$600B Question"을 발표했습니다. 엔비디아의 AI 스타트업 지분 투자와 해당 스타트업의 칩 재구매(라운드트리핑) 논란, 코어위브의 75억 달러 GPU 담보 대출이 월가의 핵심 논쟁거리로 부상했습니다.',
      macroMetrics: {
        totalAiCapex: 205.0,
        realEndUserRevenue: 16.8,
        capexRevenueDeficit: 188.2,
        circularRatio: 68
      },
      nodes: [
        { id: 'msft', name: '마이크로소프트 (MSFT)', category: 'hyperscaler', marketCap: 3150, aiCapex: 55.0, aiRevenue: 6.5, desc: '애플을 제치고 시총 1위 등극; 연간 AI Capex 500억 달러 돌파.' },
        { id: 'goog', name: '알파벳 / 구글 (GOOGL)', category: 'hyperscaler', marketCap: 2120, aiCapex: 48.0, aiRevenue: 4.8, desc: '100만 토큰 컨텍스트의 제미나이 1.5 프로 공개 및 TPU v5p 대량 가동.' },
        { id: 'amzn', name: '아마존 / AWS', category: 'hyperscaler', marketCap: 2040, aiCapex: 58.0, aiRevenue: 3.5, desc: '앤트로픽에 총 40억 달러 출자 완료 및 베드록(Bedrock) 클라우드 전면화.' },
        { id: 'meta', name: '메타 플랫폼스 (META)', category: 'hyperscaler', marketCap: 1480, aiCapex: 39.0, aiRevenue: 2.2, desc: 'H100 35만 대 확보; 오픈소스 LLaMA 3.1 405B로 유료 폐쇄형 랩스 압박.' },
        { id: 'nvda', name: '엔비디아 (NVDA)', category: 'chipmaker', marketCap: 3300, aiCapex: 4.5, aiRevenue: 115.0, desc: '일시적 세계 시총 1위(3.3조 달러) 달성 및 차세대 블랙웰(B200) 공개.' },
        { id: 'tsmc', name: 'TSMC', category: 'chipmaker', marketCap: 880, aiCapex: 32.0, aiRevenue: 85.0, desc: '첨단 CoWoS 패키징 생산 라인이 2025년까지 전량 사전 예약 매진.' },
        { id: 'openai', name: '오픈AI (OpenAI)', category: 'ai_lab', marketCap: 157, aiCapex: 7.5, aiRevenue: 4.2, desc: '1,570억 달러 기업가치로 66억 달러 유치; GPT-4o 및 추론 모델 o1 출시.' },
        { id: 'anthropic', name: '앤트로픽 (Anthropic)', category: 'ai_lab', marketCap: 40, aiCapex: 4.0, aiRevenue: 1.0, desc: '클로드 3.5 소네트 발표로 개발자 코딩 벤치마크 1위 장악.' },
        { id: 'xai', name: 'xAI', category: 'ai_lab', marketCap: 45, aiCapex: 3.5, aiRevenue: 0.3, desc: '122일 만에 세계 최대 10만 대 H100 콜로서스(Colossus) 클러스터 구축.' },
        { id: 'coreweave', name: '코어위브 (CoreWeave)', category: 'neocloud', marketCap: 19, aiCapex: 8.5, aiRevenue: 2.2, desc: '블랙스톤 등으로부터 H100 담보 75억 달러 사모 부채 조달 성공.' },
        { id: 'vc_sovereign', name: 'VC 및 국부펀드', category: 'venture_capital', marketCap: 500, aiCapex: 0.0, aiRevenue: 0.0, desc: '중동 국부펀드(MGX, PIF)와 소프트뱅크의 수십조 원 단위 자금 공세.' },
        { id: 'end_market', name: '최종 소비자 및 기업', category: 'end_market', marketCap: 1200, aiCapex: 0.0, aiRevenue: 16.8, desc: '코딩 보조 도구, 고객 상담 챗봇 자동화 등 B2B AI 솔루션 도입 가속.' }
      ],
      edges: [
        { source: 'msft', target: 'openai', flowType: 'cloud_credit', amount: 5.0, desc: '지분율 유지 및 미래 매출 배당권 대가로 애저 크레딧 지속 지원.' },
        { source: 'openai', target: 'msft', flowType: 'cloud_credit', amount: 4.5, desc: '오픈AI가 연간 45억 달러를 애저 인프라 비용으로 마이크로소프트에 지불.' },
        { source: 'amzn', target: 'anthropic', flowType: 'equity_investment', amount: 2.0, desc: '앤트로픽 추가 20억 달러 납입 및 AWS 트레이니움 칩 우선 도입 협약.' },
        { source: 'goog', target: 'anthropic', flowType: 'equity_investment', amount: 1.0, desc: '구글의 추가 전환사채 투자 및 구글 클라우드 약정.' },
        { source: 'anthropic', target: 'amzn', flowType: 'cloud_credit', amount: 1.8, desc: 'AWS 베드록 인프라를 통한 대규모 모델 학습 비용 집행.' },
        { source: 'msft', target: 'nvda', flowType: 'gpu_purchase', amount: 18.0, desc: '자체 서비스 및 오픈AI 지원을 위해 거액의 H100/H200 발주.' },
        { source: 'goog', target: 'nvda', flowType: 'gpu_purchase', amount: 12.0, desc: 'TPU v5e 확장과 함께 외부 고객용 엔비디아 가속기 20만 대 구매.' },
        { source: 'amzn', target: 'nvda', flowType: 'gpu_purchase', amount: 14.0, desc: 'AWS 그레이스 호퍼 GH200 시스템 및 슈퍼클러스터 확충.' },
        { source: 'meta', target: 'nvda', flowType: 'gpu_purchase', amount: 15.0, desc: '저커버그 CEO, 연말까지 60만 대 분량 H100 동등 인프라 확보 선언.' },
        { source: 'nvda', target: 'coreweave', flowType: 'equity_investment', amount: 0.5, desc: '엔비디아가 코어위브 지분 라운드를 주도하며 확고한 구매 고객사 확보.' },
        { source: 'coreweave', target: 'nvda', flowType: 'gpu_purchase', amount: 6.5, desc: '75억 달러 사모 대출금을 즉시 엔비디아 최신 칩 구매로 환원.' },
        { source: 'nvda', target: 'openai', flowType: 'equity_investment', amount: 0.1, desc: '엔비디아가 오픈AI 66억 달러 투자 신디케이트에 직접 출자.' },
        { source: 'nvda', target: 'tsmc', flowType: 'gpu_purchase', amount: 22.0, desc: '엔비디아가 애플에 이어 TSMC의 전 세계 2위 고객사로 도약.' },
        { source: 'vc_sovereign', target: 'openai', flowType: 'equity_investment', amount: 6.5, desc: '스라이브 캐피털, 소프트뱅크, MGX가 주도한 66억 달러 메가 펀딩.' },
        { source: 'vc_sovereign', target: 'xai', flowType: 'equity_investment', amount: 6.0, desc: '콜로서스 슈퍼컴퓨터 증설을 위해 xAI 시리즈 B 60억 달러 투자.' },
        { source: 'end_market', target: 'openai', flowType: 'enterprise_revenue', amount: 4.2, desc: '기업용 챗GPT 엔터프라이즈 및 API 토큰 매출.' },
        { source: 'end_market', target: 'msft', flowType: 'enterprise_revenue', amount: 6.5, desc: '마이크로소프트 365 코파일럿 라이선스 및 애저 오픈AI 클라우드 매출.' },
        { source: 'end_market', target: 'anthropic', flowType: 'enterprise_revenue', amount: 1.0, desc: '클로드 B2B 엔터프라이즈 및 코딩 개발자 API 매출.' }
      ]
    },

    // ─── 2025: 스타게이트와 초대형 인프라 경쟁 ─────────────────
    {
      year: 2025,
      title: '2025: 1천억 달러 스타게이트와 기가와트 인프라 경쟁',
      summary: '마이크로소프트와 오픈AI가 1,000억 달러 규모의 5기가와트 원자력 기반 데이터센터 "스타게이트(Stargate)" 구상을 추진하며 하드웨어 경쟁이 전력·에너지 인프라로 전이되었습니다. 엔비디아의 블랙웰(B200) 시스템이 대량 양산되는 한편, 네오클라우드들의 GPU 담보 만기 리스크가 고개를 들기 시작했습니다.',
      macroMetrics: {
        totalAiCapex: 275.0,
        realEndUserRevenue: 29.5,
        capexRevenueDeficit: 245.5,
        circularRatio: 63
      },
      nodes: [
        { id: 'msft', name: '마이크로소프트 (MSFT)', category: 'hyperscaler', marketCap: 3420, aiCapex: 78.0, aiRevenue: 11.5, desc: '스타게이트 1단계 착공 및 미국 스리마일 원전 재가동 PPA 전력 계약.' },
        { id: 'goog', name: '알파벳 / 구글 (GOOGL)', category: 'hyperscaler', marketCap: 2380, aiCapex: 68.0, aiRevenue: 8.5, desc: 'TPU v6 아이언우드 가동 및 워크스페이스 전 제품군 제미나이 통합.' },
        { id: 'amzn', name: '아마존 / AWS', category: 'hyperscaler', marketCap: 2320, aiCapex: 76.0, aiRevenue: 6.8, desc: '트레이니움2(Trainium2) 클러스터 대량 배치 및 앤트로픽 클로드 4 학습.' },
        { id: 'meta', name: '메타 플랫폼스 (META)', category: 'hyperscaler', marketCap: 1650, aiCapex: 54.0, aiRevenue: 4.5, desc: '메타 AI 월간 사용자 5억 명 돌파 및 차세대 멀티모달 LLaMA 4 학습.' },
        { id: 'nvda', name: '엔비디아 (NVDA)', category: 'chipmaker', marketCap: 3600, aiCapex: 6.0, aiRevenue: 155.0, desc: '수냉식 랙당 300만 달러에 달하는 GB200 NVL72 시스템 대량 출하.' },
        { id: 'tsmc', name: 'TSMC', category: 'chipmaker', marketCap: 980, aiCapex: 35.0, aiRevenue: 98.0, desc: '2나노 GAA 나노시트 시제품 양산 시작 및 High-NA EUV 노광 장비 도입.' },
        { id: 'openai', name: '오픈AI (OpenAI)', category: 'ai_lab', marketCap: 220, aiCapex: 14.0, aiRevenue: 8.5, desc: '공익법인(PBC) 영리 기업 전환 추진 및 기하급수적 컴퓨팅 비용 지출.' },
        { id: 'anthropic', name: '앤트로픽 (Anthropic)', category: 'ai_lab', marketCap: 65, aiCapex: 7.5, aiRevenue: 2.8, desc: '자율 에이전트 코딩 솔루션의 글로벌 포춘 500대 기업 공급 확대.' },
        { id: 'xai', name: 'xAI', category: 'ai_lab', marketCap: 60, aiCapex: 6.0, aiRevenue: 1.2, desc: '콜로서스 클러스터를 20만 대 GPU 규모로 2배 증설하고 Grok 3 출시.' },
        { id: 'coreweave', name: '코어위브 (CoreWeave)', category: 'neocloud', marketCap: 28, aiCapex: 14.0, aiRevenue: 4.8, desc: '메가 IPO 준비 중 누적 GPU 담보 부채가 120억 달러를 초과.' },
        { id: 'vc_sovereign', name: 'VC 및 국부펀드', category: 'venture_capital', marketCap: 500, aiCapex: 0.0, aiRevenue: 0.0, desc: '대규모 메가 펀딩 주도 후 점차 엑시트 및 세컨더리 유동성 제약 직면.' },
        { id: 'end_market', name: '최종 소비자 및 기업', category: 'end_market', marketCap: 1200, aiCapex: 0.0, aiRevenue: 29.5, desc: '생성형 AI 에이전트 실무 배치 본격화 및 비용 대비 ROI 엄격 검증.' }
      ],
      edges: [
        { source: 'msft', target: 'openai', flowType: 'cloud_credit', amount: 7.0, desc: '오픈AI의 차세대 오리온(Orion) 모델 훈련을 위한 전용 애저 클러스터 제공.' },
        { source: 'openai', target: 'msft', flowType: 'cloud_credit', amount: 6.5, desc: '클라우드 인프라 비용이 오픈AI 전체 운영 지출의 75% 이상 차지.' },
        { source: 'amzn', target: 'anthropic', flowType: 'cloud_credit', amount: 3.5, desc: '클로드 3.5 및 4 모델 학습용 AWS 베드록 컴퓨팅 사용료.' },
        { source: 'msft', target: 'nvda', flowType: 'gpu_purchase', amount: 26.0, desc: '블랙웰 GB200 NVL72 수냉식 서버 랙 수천 대 일괄 구매.' },
        { source: 'goog', target: 'nvda', flowType: 'gpu_purchase', amount: 16.0, desc: '자체 TPU v6 증설과 함께 블랙웰 시스템 대량 확보.' },
        { source: 'amzn', target: 'nvda', flowType: 'gpu_purchase', amount: 19.0, desc: 'AWS 세이바(Ceiba) 프로젝트 및 울트라클러스터 블랙웰 배포.' },
        { source: 'meta', target: 'nvda', flowType: 'gpu_purchase', amount: 20.0, desc: '미국 중서부 기가와트급 초대형 전력 회랑에 데이터센터 신축.' },
        { source: 'coreweave', target: 'nvda', flowType: 'gpu_purchase', amount: 10.0, desc: '기관 사모 대출을 통해 블랙웰 클러스터 선제적 인도 물량 계약.' },
        { source: 'nvda', target: 'coreweave', flowType: 'debt_collateral', amount: 1.2, desc: '엔비디아가 코어위브의 대출 보증 및 고객 유치 우선 연결 지원.' },
        { source: 'nvda', target: 'tsmc', flowType: 'gpu_purchase', amount: 28.0, desc: '블랙웰 듀얼 다이 생산을 위한 TSMC CoWoS-L 전용 라인 확보.' },
        { source: 'vc_sovereign', target: 'coreweave', flowType: 'equity_investment', amount: 3.0, desc: '부채 레버리지 완화 및 재무구조 개선을 위한 프리 IPO 유상증자.' },
        { source: 'vc_sovereign', target: 'openai', flowType: 'equity_investment', amount: 5.0, desc: '영리 전환 및 지배구조 개편에 맞춘 구조화 지분 투자.' },
        { source: 'end_market', target: 'openai', flowType: 'enterprise_revenue', amount: 8.5, desc: '오픈AI 연간 반복 매출(ARR)이 기업용 계약 급증으로 85억 달러 도달.' },
        { source: 'end_market', target: 'msft', flowType: 'enterprise_revenue', amount: 11.5, desc: '오피스 365 기반 기업 고객들의 코파일럿 도입율 상승.' },
        { source: 'end_market', target: 'anthropic', flowType: 'enterprise_revenue', amount: 2.8, desc: '금융, 법률, 보안 및 개발 분야 클로드 기업 라이선스 매출.' }
      ]
    },

    // ─── 2026: 설비투자 절벽과 실질 ROI 검증 ───────────────────
    {
      year: 2026,
      title: '2026: 설비투자(Capex) 절벽, 반독점 조사 및 실질 ROI 검증의 해',
      summary: '빅테크 전체 AI Capex가 3,000억 달러를 돌파한 반면, 전 세계 소프트웨어 실질 매출은 420억 달러에 그치며 2,700억 달러의 사상 최대 결손(Capex Wall)이 발생했습니다. 미국 FTC와 유럽 집행위가 빅테크-스타트업 간의 순환 크레딧 계약에 대해 반독점 조사를 본격화하고, 2023년 도입된 구형 H100 GPU의 3년 감가상각 만기가 도래하며 금융 리스크가 현실화되고 있습니다.',
      macroMetrics: {
        totalAiCapex: 315.0,
        realEndUserRevenue: 42.0,
        capexRevenueDeficit: 273.0,
        circularRatio: 52 // 규제 당국 감시로 불투명한 크레딧 맞교환이 축소되기 시작
      },
      nodes: [
        { id: 'msft', name: '마이크로소프트 (MSFT)', category: 'hyperscaler', marketCap: 3650, aiCapex: 88.0, aiRevenue: 16.5, desc: '마이아(Maia) 자체 칩 비중 확대로 엔비디아 의존도 및 마진 방어 총력.' },
        { id: 'goog', name: '알파벳 / 구글 (GOOGL)', category: 'hyperscaler', marketCap: 2550, aiCapex: 76.0, aiRevenue: 12.0, desc: '비용 효율성 중심 전환; 추론용 TPU v6e 도입으로 TCO 40% 절감.' },
        { id: 'amzn', name: '아마존 / AWS', category: 'hyperscaler', marketCap: 2480, aiCapex: 85.0, aiRevenue: 9.8, desc: '측정 가능한 ROI 요구; 배치 추론에 트레이니움2 칩 대거 투입.' },
        { id: 'meta', name: '메타 플랫폼스 (META)', category: 'hyperscaler', marketCap: 1780, aiCapex: 62.0, aiRevenue: 6.2, desc: 'MTIA v2 자체 실리콘 가동 및 광고주 자동 생성 AI 도구 수익화.' },
        { id: 'nvda', name: '엔비디아 (NVDA)', category: 'chipmaker', marketCap: 3750, aiCapex: 8.0, aiRevenue: 182.0, desc: '베라 루빈(Vera Rubin) 발표; 빅테크 자체 ASIC 도입에 따른 가격 방어전.' },
        { id: 'tsmc', name: 'TSMC', category: 'chipmaker', marketCap: 1080, aiCapex: 38.0, aiRevenue: 110.0, desc: '시가총액 1조 달러 돌파; AI 가속기 생산의 전 세계 대체 불가 독점.' },
        { id: 'openai', name: '오픈AI (OpenAI)', category: 'ai_lab', marketCap: 280, aiCapex: 18.0, aiRevenue: 14.0, desc: '기업 시장 선두이나 막대한 추론 인프라 비용으로 마진 압박 심화.' },
        { id: 'anthropic', name: '앤트로픽 (Anthropic)', category: 'ai_lab', marketCap: 85, aiCapex: 9.0, aiRevenue: 4.8, desc: '보안, 신뢰성, 결정론적 에이전트 워크플로 시장 집중 공략.' },
        { id: 'xai', name: 'xAI', category: 'ai_lab', marketCap: 75, aiCapex: 7.5, aiRevenue: 2.5, desc: '자율주행, 휴머노이드 로봇 및 실시간 지능 플랫폼 통합 가속.' },
        { id: 'coreweave', name: '코어위브 (CoreWeave)', category: 'neocloud', marketCap: 35, aiCapex: 16.0, aiRevenue: 6.5, desc: '2023년형 H100 감가상각 도래에 따른 채권 리파이낸싱 압박 직면.' },
        { id: 'vc_sovereign', name: 'VC 및 국부펀드', category: 'venture_capital', marketCap: 500, aiCapex: 0.0, aiRevenue: 0.0, desc: '파운데이션 모델 출혈 경쟁 탈피, 실제 흑자 창출 버티컬 응용사로 자금 이동.' },
        { id: 'end_market', name: '최종 소비자 및 기업', category: 'end_market', marketCap: 1200, aiCapex: 0.0, aiRevenue: 42.0, desc: '기업 IT 예산 담당자들의 철저한 생산성 향상(순현재가치) 기반 AI 투자 선별.' }
      ],
      edges: [
        { source: 'msft', target: 'openai', flowType: 'cloud_credit', amount: 8.0, desc: '미국 FTC 반독점 조사 준수를 위해 구조화된 정식 상업 공급 계약.' },
        { source: 'openai', target: 'msft', flowType: 'cloud_credit', amount: 8.5, desc: '엔터프라이즈 트래픽 폭증으로 오픈AI의 애저 청구액이 85억 달러 돌파.' },
        { source: 'amzn', target: 'anthropic', flowType: 'cloud_credit', amount: 4.5, desc: '지속적 안전 정렬 및 프론티어 모델 학습을 위한 AWS 멀티 리전 클러스터 비용.' },
        { source: 'msft', target: 'nvda', flowType: 'gpu_purchase', amount: 28.0, desc: '베라 루빈 및 블랙웰 시스템 구매와 마이아 칩 병행 운영.' },
        { source: 'goog', target: 'nvda', flowType: 'gpu_purchase', amount: 18.0, desc: '하이브리드 클라우드: 외부 임대용 엔비디아 칩과 제미나이용 TPU 분리.' },
        { source: 'amzn', target: 'nvda', flowType: 'gpu_purchase', amount: 20.0, desc: 'AWS 초대형 인프라 증설 및 GB200 시스템 가격 협상력 강화.' },
        { source: 'meta', target: 'nvda', flowType: 'gpu_purchase', amount: 22.0, desc: '재생에너지 전력망과 연계된 메타 글로벌 데이터센터 확장.' },
        { source: 'coreweave', target: 'nvda', flowType: 'gpu_purchase', amount: 11.0, desc: '구형 H100 유휴화를 막기 위한 루빈/블랙웰 세대교체 발주.' },
        { source: 'coreweave', target: 'vc_sovereign', flowType: 'debt_collateral', amount: 4.0, desc: '만기 도래 2023년 GPU 사모 대출을 자산유동화증권(ABS) 채권으로 차환.' },
        { source: 'nvda', target: 'tsmc', flowType: 'gpu_purchase', amount: 32.0, desc: 'TSMC 첨단 3나노 및 2나노 웨이퍼 독점 공급 예약 계약.' },
        { source: 'end_market', target: 'openai', flowType: 'enterprise_revenue', amount: 14.0, desc: '글로벌 엔터프라이즈 직접 구독 및 커스텀 에이전트 과금 매출.' },
        { source: 'end_market', target: 'msft', flowType: 'enterprise_revenue', amount: 16.5, desc: '마이크로소프트 365 코파일럿 및 상업용 애저 AI 매출.' },
        { source: 'end_market', target: 'anthropic', flowType: 'enterprise_revenue', amount: 4.8, desc: '보안에 민감한 글로벌 금융·의료 대기업들의 클로드 B2B 도입 매출.' },
        { source: 'end_market', target: 'goog', flowType: 'enterprise_revenue', amount: 6.7, desc: '구글 워크스페이스 제미나이 및 버텍스(Vertex) AI 플랫폼 기업 매출.' }
      ]
    }
  ];

  if (typeof window !== 'undefined') {
    window.categoryDefinitionsKo = categoryDefinitionsKo;
    window.flowTypeDefinitionsKo = flowTypeDefinitionsKo;
    window.aiCapitalTimelineDataKo = aiCapitalTimelineDataKo;
  }
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = { categoryDefinitionsKo, flowTypeDefinitionsKo, aiCapitalTimelineDataKo };
  }
})();
