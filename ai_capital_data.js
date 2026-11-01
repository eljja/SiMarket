// ai_capital_data.js - Global AI Capital Circulation & Supply Chain Empirical Database (10-Year Arc: 2017 - 2026 Q4)

(function () {
  const categoryDefinitions = {
  "hyperscaler": {
    "name": "Hyperscalers (Big Tech Cloud)",
    "color": "#38bdf8"
  },
  "chipmaker": {
    "name": "AI Silicon & Foundry",
    "color": "#10b981"
  },
  "semiconductor_supply": {
    "name": "Memory & Lithography",
    "color": "#06b6d4"
  },
  "ai_lab": {
    "name": "Frontier AI Labs",
    "color": "#f43f5e"
  },
  "neocloud": {
    "name": "Neoclouds (GPU Debt)",
    "color": "#fbbf24"
  },
  "venture_capital": {
    "name": "VC & Sovereign Funds",
    "color": "#a855f7"
  },
  "end_market": {
    "name": "Real End-User Market",
    "color": "#3b82f6"
  }
};
  const flowTypeDefinitions = {
  "equity_investment": {
    "name": "Equity Investment (Cash / Stake)",
    "color": "#ffb300"
  },
  "cloud_credit": {
    "name": "Cloud Compute Credits (Equity Swap)",
    "color": "#00e5ff"
  },
  "gpu_purchase": {
    "name": "GPU & Accelerator Outlays (NVIDIA/Broadcom)",
    "color": "#10b981"
  },
  "hbm_purchase": {
    "name": "HBM Memory Procurement (SK Hynix / Samsung)",
    "color": "#06b6d4"
  },
  "equipment_purchase": {
    "name": "EUV Lithography Procurement (ASML)",
    "color": "#14b8a6"
  },
  "debt_collateral": {
    "name": "GPU-Collateralized Debt (Vendor Financing)",
    "color": "#a855f7"
  },
  "enterprise_revenue": {
    "name": "Real End-User Software & API Revenue",
    "color": "#38bdf8"
  }
};
  const aiCapitalTimelineData = [
  {
    "periodId": "2017",
    "year": 2017,
    "quarter": null,
    "label": "2017",
    "dateRange": "Full Year 2017",
    "title": "2017: Genesis — \"Attention Is All You Need\" & NVIDIA Volta V100",
    "summary": "Google Brain researchers publish \"Attention Is All You Need\", introducing the Transformer architecture. NVIDIA launches the Volta V100 featuring the world's first Tensor Cores. OpenAI operates as a non-profit research lab with ~30 staff. Total industry AI capex is under $3.5B.",
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
        "name": "Microsoft",
        "category": "hyperscaler",
        "marketCap": 660,
        "aiCapex": 0.9,
        "aiRevenue": 0.05,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "World cloud leader, strategic backer of OpenAI with Azure exclusive integration, developer of Maia AI ASICs.",
        "initialX": -140,
        "initialY": -130
      },
      {
        "id": "goog",
        "name": "Alphabet / Google",
        "category": "hyperscaler",
        "marketCap": 710,
        "aiCapex": 1.1,
        "aiRevenue": 0.05,
        "isFormed": true,
        "isHighGrowth": true,
        "desc": "Pioneer of Transformer architecture; custom TPU v4/v5/v6 silicon with Google DeepMind & Gemini.",
        "initialX": -185,
        "initialY": 5
      },
      {
        "id": "amzn",
        "name": "Amazon / AWS",
        "category": "hyperscaler",
        "marketCap": 560,
        "aiCapex": 0.8,
        "aiRevenue": 0.02,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "World’s largest cloud provider (AWS), key investor in Anthropic ($4B), developing Trainium2 & Inferentia.",
        "initialX": 140,
        "initialY": -130
      },
      {
        "id": "meta",
        "name": "Meta Platforms",
        "category": "hyperscaler",
        "marketCap": 510,
        "aiCapex": 0.5,
        "aiRevenue": 0.01,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "Open-source frontier AI champion (LLaMA series), massive GPU cluster operator, MTIA custom silicon.",
        "initialX": 185,
        "initialY": 5
      },
      {
        "id": "nvda",
        "name": "NVIDIA",
        "category": "chipmaker",
        "marketCap": 118,
        "aiCapex": 0.1,
        "aiRevenue": 0.9,
        "isFormed": true,
        "isHighGrowth": true,
        "desc": "Global GPU monopoly (A100/H100/B200/Rubin) and proprietary CUDA software moat capturing 75%+ gross margins.",
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
        "desc": "World’s exclusive pure-play foundry and CoWoS advanced packaging monopoly powering all advanced AI accelerators.",
        "initialX": -130,
        "initialY": 190
      },
      {
        "id": "avgo",
        "name": "Broadcom",
        "category": "chipmaker",
        "marketCap": 105,
        "aiCapex": 0.05,
        "aiRevenue": 0.4,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "Leader in custom AI ASICs (Google TPU, Meta MTIA) and high-speed Tomahawk/Jericho AI networking fabrics.",
        "initialX": -215,
        "initialY": 115
      },
      {
        "id": "skhynix",
        "name": "SK Hynix",
        "category": "semiconductor_supply",
        "marketCap": 50,
        "aiCapex": 0.8,
        "aiRevenue": 0.2,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "World’s undisputed leader in High Bandwidth Memory (HBM3, HBM3E, HBM4), primary memory supplier to NVIDIA.",
        "initialX": -20,
        "initialY": -210
      },
      {
        "id": "samsung",
        "name": "Samsung Electronics",
        "category": "semiconductor_supply",
        "marketCap": 320,
        "aiCapex": 3.2,
        "aiRevenue": 0.4,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "World’s largest memory semiconductor producer, pioneer of 12-layer HBM3E and turnkey foundry/memory solutions.",
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
        "desc": "Monopoly provider of EUV and High-NA EUV lithography equipment essential for 3nm/2nm advanced semiconductor nodes.",
        "initialX": 20,
        "initialY": 235
      },
      {
        "id": "openai",
        "name": "OpenAI",
        "category": "ai_lab",
        "marketCap": 0.3,
        "aiCapex": 0.02,
        "aiRevenue": 0,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "Frontier AI lab creator of ChatGPT, GPT-4, and o1 reasoning models; key partner in the $100B Stargate campus.",
        "initialX": -60,
        "initialY": -55
      },
      {
        "id": "anthropic",
        "name": "Anthropic",
        "category": "ai_lab",
        "marketCap": 0,
        "aiCapex": 0,
        "aiRevenue": 0,
        "isFormed": false,
        "isHighGrowth": false,
        "desc": "Frontier safety lab creator of Claude 3.5 Sonnet and Computer Use; backed by multi-billion commitments from Amazon & Google.",
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
        "desc": "Elon Musk’s AI frontier initiative operating the world’s largest 100k+ liquid-cooled Colossus supercluster in Memphis.",
        "initialX": 75,
        "initialY": 45
      },
      {
        "id": "deepseek",
        "name": "DeepSeek",
        "category": "ai_lab",
        "marketCap": 0,
        "aiCapex": 0,
        "aiRevenue": 0,
        "isFormed": false,
        "isHighGrowth": false,
        "desc": "Pioneered extreme algorithmic efficiency and low-cost open reasoning models (DeepSeek-V3 & R1) disrupting capex intensity.",
        "initialX": -75,
        "initialY": 45
      },
      {
        "id": "coreweave",
        "name": "CoreWeave",
        "category": "neocloud",
        "marketCap": 0.05,
        "aiCapex": 0.01,
        "aiRevenue": 0,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "Pioneer of GPU-collateralized debt financing ($2.3B in 2023, $7.5B in 2024), scaling specialized Neocloud infrastructure.",
        "initialX": 0,
        "initialY": 85
      },
      {
        "id": "vc_sovereign",
        "name": "VC & Sovereign Funds",
        "category": "venture_capital",
        "marketCap": 250,
        "aiCapex": 0,
        "aiRevenue": 0,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "Global venture syndicates (Sequoia, a16z, Thrive, SoftBank) and sovereign wealth funds (MGX, PIF) funding mega-rounds.",
        "initialX": 220,
        "initialY": 155
      },
      {
        "id": "end_market",
        "name": "Enterprise & End Users",
        "category": "end_market",
        "marketCap": 400,
        "aiCapex": 0,
        "aiRevenue": 0.1,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "Real-world corporate IT budgets, developer API billing, and consumer subscriptions representing verified software revenue.",
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
        "desc": "2017: Microsoft allocates $0.3B to procure NVIDIA accelerator server clusters for Azure AI."
      },
      {
        "id": "goog_nvda_gpu",
        "source": "goog",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 0.4,
        "desc": "2017: Google deploys $0.4B for NVIDIA GPU clusters alongside custom TPU silicon."
      },
      {
        "id": "amzn_nvda_gpu",
        "source": "amzn",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 0.2,
        "desc": "2017: Amazon AWS purchases $0.2B in NVIDIA GPUs for scalable UltraClusters."
      },
      {
        "id": "meta_nvda_gpu",
        "source": "meta",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 0.1,
        "desc": "2017: Meta allocates $0.1B to NVIDIA GPUs for next-gen LLaMA model clusters."
      },
      {
        "id": "nvda_tsmc_gpu",
        "source": "nvda",
        "target": "tsmc",
        "flowType": "gpu_purchase",
        "amount": 0.5,
        "desc": "2017: NVIDIA awards TSMC $0.5B for leading-edge wafer allocation and CoWoS packaging."
      },
      {
        "id": "nvda_skhynix_hbm",
        "source": "nvda",
        "target": "skhynix",
        "flowType": "hbm_purchase",
        "amount": 0.15,
        "desc": "2017: NVIDIA procures $0.15B of exclusive HBM memory stacks from SK Hynix."
      },
      {
        "id": "nvda_samsung_hbm",
        "source": "nvda",
        "target": "samsung",
        "flowType": "hbm_purchase",
        "amount": 0.1,
        "desc": "2017: NVIDIA secures $0.1B in advanced HBM and memory supply from Samsung Electronics."
      },
      {
        "id": "tsmc_asml_equip",
        "source": "tsmc",
        "target": "asml",
        "flowType": "equipment_purchase",
        "amount": 0.6,
        "desc": "2017: TSMC invests $0.6B in ASML EUV and High-NA lithography scanners."
      },
      {
        "id": "samsung_asml_equip",
        "source": "samsung",
        "target": "asml",
        "flowType": "equipment_purchase",
        "amount": 0.5,
        "desc": "2017: Samsung Electronics commits $0.5B for ASML EUV scanners."
      },
      {
        "id": "skhynix_asml_equip",
        "source": "skhynix",
        "target": "asml",
        "flowType": "equipment_purchase",
        "amount": 0.3,
        "desc": "2017: SK Hynix procures $0.3B of ASML EUV systems for HBM DRAM production."
      },
      {
        "id": "goog_avgo_gpu",
        "source": "goog",
        "target": "avgo",
        "flowType": "gpu_purchase",
        "amount": 0.3,
        "desc": "2017: Google pays Broadcom $0.3B for custom TPU ASIC co-design and optical interconnects."
      },
      {
        "id": "meta_avgo_gpu",
        "source": "meta",
        "target": "avgo",
        "flowType": "gpu_purchase",
        "amount": 0,
        "desc": "2017: Inactive or concluded channel for this period."
      },
      {
        "id": "msft_openai_credit",
        "source": "msft",
        "target": "openai",
        "flowType": "cloud_credit",
        "amount": 0,
        "desc": "2017: Inactive or concluded channel for this period."
      },
      {
        "id": "openai_msft_spend",
        "source": "openai",
        "target": "msft",
        "flowType": "cloud_credit",
        "amount": 0,
        "desc": "2017: Inactive or concluded channel for this period."
      },
      {
        "id": "amzn_anthropic_equity",
        "source": "amzn",
        "target": "anthropic",
        "flowType": "equity_investment",
        "amount": 0,
        "desc": "2017: Operating under active cloud agreement; no new primary equity capital call."
      },
      {
        "id": "anthropic_amzn_spend",
        "source": "anthropic",
        "target": "amzn",
        "flowType": "cloud_credit",
        "amount": 0,
        "desc": "2017: Inactive or concluded channel for this period."
      },
      {
        "id": "goog_anthropic_equity",
        "source": "goog",
        "target": "anthropic",
        "flowType": "equity_investment",
        "amount": 0,
        "desc": "2017: Partnership active; no secondary equity injection in this period."
      },
      {
        "id": "vc_coreweave_debt",
        "source": "vc_sovereign",
        "target": "coreweave",
        "flowType": "debt_collateral",
        "amount": 0,
        "desc": "2017: Previous GPU debt facility drawn down; no new private debt tranche active."
      },
      {
        "id": "coreweave_nvda_gpu",
        "source": "coreweave",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 0.02,
        "desc": "2017: CoreWeave purchases $0.02B of NVIDIA GPUs to expand its AI cloud cluster fleet."
      },
      {
        "id": "nvda_coreweave_equity",
        "source": "nvda",
        "target": "coreweave",
        "flowType": "equity_investment",
        "amount": 0,
        "desc": "2017: Strategic partnership active; no incremental equity transaction this period."
      },
      {
        "id": "coreweave_vc_refinance",
        "source": "coreweave",
        "target": "vc_sovereign",
        "flowType": "debt_collateral",
        "amount": 0,
        "desc": "2017: Inactive or concluded channel for this period."
      },
      {
        "id": "vc_openai_equity",
        "source": "vc_sovereign",
        "target": "openai",
        "flowType": "equity_investment",
        "amount": 0,
        "desc": "2017: Operating on existing treasury; no primary mega equity financing tranche active."
      },
      {
        "id": "xai_nvda_gpu",
        "source": "xai",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 0,
        "desc": "2017: Inactive or concluded channel for this period."
      },
      {
        "id": "skhynix_tsmc_foundry",
        "source": "skhynix",
        "target": "tsmc",
        "flowType": "gpu_purchase",
        "amount": 0,
        "desc": "2017: Inactive or concluded channel for this period."
      },
      {
        "id": "market_openai_rev",
        "source": "end_market",
        "target": "openai",
        "flowType": "enterprise_revenue",
        "amount": 0.01,
        "desc": "2017: Enterprises and users generate $0.01B in verified OpenAI software and API revenue."
      },
      {
        "id": "market_msft_rev",
        "source": "end_market",
        "target": "msft",
        "flowType": "enterprise_revenue",
        "amount": 0.05,
        "desc": "2017: Enterprise clients deliver $0.05B in Microsoft commercial AI revenue."
      },
      {
        "id": "market_anthropic_rev",
        "source": "end_market",
        "target": "anthropic",
        "flowType": "enterprise_revenue",
        "amount": 0,
        "desc": "2017: Inactive or concluded channel for this period."
      },
      {
        "id": "market_deepseek_rev",
        "source": "end_market",
        "target": "deepseek",
        "flowType": "enterprise_revenue",
        "amount": 0,
        "desc": "2017: Inactive or concluded channel for this period."
      }
    ]
  },
  {
    "periodId": "2018",
    "year": 2018,
    "quarter": null,
    "label": "2018",
    "dateRange": "Full Year 2018",
    "title": "2018: Pretraining Era — BERT, GPT-1 & Turing Architecture",
    "summary": "Google introduces BERT, setting state-of-the-art across all NLP benchmarks. OpenAI publishes GPT-1, pioneering unsupervised pre-training. NVIDIA launches the Turing architecture (T4) as deep learning shifts from convolutional nets to foundational language models.",
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
        "name": "Microsoft",
        "category": "hyperscaler",
        "marketCap": 780,
        "aiCapex": 1.2,
        "aiRevenue": 0.08,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "World cloud leader, strategic backer of OpenAI with Azure exclusive integration, developer of Maia AI ASICs.",
        "initialX": -140,
        "initialY": -130
      },
      {
        "id": "goog",
        "name": "Alphabet / Google",
        "category": "hyperscaler",
        "marketCap": 725,
        "aiCapex": 1.6,
        "aiRevenue": 0.08,
        "isFormed": true,
        "isHighGrowth": true,
        "desc": "Pioneer of Transformer architecture; custom TPU v4/v5/v6 silicon with Google DeepMind & Gemini.",
        "initialX": -185,
        "initialY": 5
      },
      {
        "id": "amzn",
        "name": "Amazon / AWS",
        "category": "hyperscaler",
        "marketCap": 730,
        "aiCapex": 1.1,
        "aiRevenue": 0.04,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "World’s largest cloud provider (AWS), key investor in Anthropic ($4B), developing Trainium2 & Inferentia.",
        "initialX": 140,
        "initialY": -130
      },
      {
        "id": "meta",
        "name": "Meta Platforms",
        "category": "hyperscaler",
        "marketCap": 375,
        "aiCapex": 0.8,
        "aiRevenue": 0.02,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "Open-source frontier AI champion (LLaMA series), massive GPU cluster operator, MTIA custom silicon.",
        "initialX": 185,
        "initialY": 5
      },
      {
        "id": "nvda",
        "name": "NVIDIA",
        "category": "chipmaker",
        "marketCap": 81,
        "aiCapex": 0.15,
        "aiRevenue": 1.3,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "Global GPU monopoly (A100/H100/B200/Rubin) and proprietary CUDA software moat capturing 75%+ gross margins.",
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
        "desc": "World’s exclusive pure-play foundry and CoWoS advanced packaging monopoly powering all advanced AI accelerators.",
        "initialX": -130,
        "initialY": 190
      },
      {
        "id": "avgo",
        "name": "Broadcom",
        "category": "chipmaker",
        "marketCap": 100,
        "aiCapex": 0.08,
        "aiRevenue": 0.5,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "Leader in custom AI ASICs (Google TPU, Meta MTIA) and high-speed Tomahawk/Jericho AI networking fabrics.",
        "initialX": -215,
        "initialY": 115
      },
      {
        "id": "skhynix",
        "name": "SK Hynix",
        "category": "semiconductor_supply",
        "marketCap": 45,
        "aiCapex": 0.9,
        "aiRevenue": 0.3,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "World’s undisputed leader in High Bandwidth Memory (HBM3, HBM3E, HBM4), primary memory supplier to NVIDIA.",
        "initialX": -20,
        "initialY": -210
      },
      {
        "id": "samsung",
        "name": "Samsung Electronics",
        "category": "semiconductor_supply",
        "marketCap": 280,
        "aiCapex": 3.5,
        "aiRevenue": 0.5,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "World’s largest memory semiconductor producer, pioneer of 12-layer HBM3E and turnkey foundry/memory solutions.",
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
        "desc": "Monopoly provider of EUV and High-NA EUV lithography equipment essential for 3nm/2nm advanced semiconductor nodes.",
        "initialX": 20,
        "initialY": 235
      },
      {
        "id": "openai",
        "name": "OpenAI",
        "category": "ai_lab",
        "marketCap": 0.5,
        "aiCapex": 0.04,
        "aiRevenue": 0.01,
        "isFormed": true,
        "isHighGrowth": true,
        "desc": "Frontier AI lab creator of ChatGPT, GPT-4, and o1 reasoning models; key partner in the $100B Stargate campus.",
        "initialX": -60,
        "initialY": -55
      },
      {
        "id": "anthropic",
        "name": "Anthropic",
        "category": "ai_lab",
        "marketCap": 0,
        "aiCapex": 0,
        "aiRevenue": 0,
        "isFormed": false,
        "isHighGrowth": false,
        "desc": "Frontier safety lab creator of Claude 3.5 Sonnet and Computer Use; backed by multi-billion commitments from Amazon & Google.",
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
        "desc": "Elon Musk’s AI frontier initiative operating the world’s largest 100k+ liquid-cooled Colossus supercluster in Memphis.",
        "initialX": 75,
        "initialY": 45
      },
      {
        "id": "deepseek",
        "name": "DeepSeek",
        "category": "ai_lab",
        "marketCap": 0,
        "aiCapex": 0,
        "aiRevenue": 0,
        "isFormed": false,
        "isHighGrowth": false,
        "desc": "Pioneered extreme algorithmic efficiency and low-cost open reasoning models (DeepSeek-V3 & R1) disrupting capex intensity.",
        "initialX": -75,
        "initialY": 45
      },
      {
        "id": "coreweave",
        "name": "CoreWeave",
        "category": "neocloud",
        "marketCap": 0.05,
        "aiCapex": 0.02,
        "aiRevenue": 0,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "Pioneer of GPU-collateralized debt financing ($2.3B in 2023, $7.5B in 2024), scaling specialized Neocloud infrastructure.",
        "initialX": 0,
        "initialY": 85
      },
      {
        "id": "vc_sovereign",
        "name": "VC & Sovereign Funds",
        "category": "venture_capital",
        "marketCap": 280,
        "aiCapex": 0,
        "aiRevenue": 0,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "Global venture syndicates (Sequoia, a16z, Thrive, SoftBank) and sovereign wealth funds (MGX, PIF) funding mega-rounds.",
        "initialX": 220,
        "initialY": 155
      },
      {
        "id": "end_market",
        "name": "Enterprise & End Users",
        "category": "end_market",
        "marketCap": 480,
        "aiCapex": 0,
        "aiRevenue": 0.2,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "Real-world corporate IT budgets, developer API billing, and consumer subscriptions representing verified software revenue.",
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
        "desc": "2018: Microsoft allocates $0.5B to procure NVIDIA accelerator server clusters for Azure AI."
      },
      {
        "id": "goog_nvda_gpu",
        "source": "goog",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 0.6,
        "desc": "2018: Google deploys $0.6B for NVIDIA GPU clusters alongside custom TPU silicon."
      },
      {
        "id": "amzn_nvda_gpu",
        "source": "amzn",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 0.4,
        "desc": "2018: Amazon AWS purchases $0.4B in NVIDIA GPUs for scalable UltraClusters."
      },
      {
        "id": "meta_nvda_gpu",
        "source": "meta",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 0.3,
        "desc": "2018: Meta allocates $0.3B to NVIDIA GPUs for next-gen LLaMA model clusters."
      },
      {
        "id": "nvda_tsmc_gpu",
        "source": "nvda",
        "target": "tsmc",
        "flowType": "gpu_purchase",
        "amount": 0.7,
        "desc": "2018: NVIDIA awards TSMC $0.7B for leading-edge wafer allocation and CoWoS packaging."
      },
      {
        "id": "nvda_skhynix_hbm",
        "source": "nvda",
        "target": "skhynix",
        "flowType": "hbm_purchase",
        "amount": 0.2,
        "desc": "2018: NVIDIA procures $0.2B of exclusive HBM memory stacks from SK Hynix."
      },
      {
        "id": "nvda_samsung_hbm",
        "source": "nvda",
        "target": "samsung",
        "flowType": "hbm_purchase",
        "amount": 0.15,
        "desc": "2018: NVIDIA secures $0.15B in advanced HBM and memory supply from Samsung Electronics."
      },
      {
        "id": "tsmc_asml_equip",
        "source": "tsmc",
        "target": "asml",
        "flowType": "equipment_purchase",
        "amount": 0.8,
        "desc": "2018: TSMC invests $0.8B in ASML EUV and High-NA lithography scanners."
      },
      {
        "id": "samsung_asml_equip",
        "source": "samsung",
        "target": "asml",
        "flowType": "equipment_purchase",
        "amount": 0.6,
        "desc": "2018: Samsung Electronics commits $0.6B for ASML EUV scanners."
      },
      {
        "id": "skhynix_asml_equip",
        "source": "skhynix",
        "target": "asml",
        "flowType": "equipment_purchase",
        "amount": 0.4,
        "desc": "2018: SK Hynix procures $0.4B of ASML EUV systems for HBM DRAM production."
      },
      {
        "id": "goog_avgo_gpu",
        "source": "goog",
        "target": "avgo",
        "flowType": "gpu_purchase",
        "amount": 0.4,
        "desc": "2018: Google pays Broadcom $0.4B for custom TPU ASIC co-design and optical interconnects."
      },
      {
        "id": "meta_avgo_gpu",
        "source": "meta",
        "target": "avgo",
        "flowType": "gpu_purchase",
        "amount": 0,
        "desc": "2018: Inactive or concluded channel for this period."
      },
      {
        "id": "msft_openai_credit",
        "source": "msft",
        "target": "openai",
        "flowType": "cloud_credit",
        "amount": 0,
        "desc": "2018: Inactive or concluded channel for this period."
      },
      {
        "id": "openai_msft_spend",
        "source": "openai",
        "target": "msft",
        "flowType": "cloud_credit",
        "amount": 0,
        "desc": "2018: Inactive or concluded channel for this period."
      },
      {
        "id": "amzn_anthropic_equity",
        "source": "amzn",
        "target": "anthropic",
        "flowType": "equity_investment",
        "amount": 0,
        "desc": "2018: Operating under active cloud agreement; no new primary equity capital call."
      },
      {
        "id": "anthropic_amzn_spend",
        "source": "anthropic",
        "target": "amzn",
        "flowType": "cloud_credit",
        "amount": 0,
        "desc": "2018: Inactive or concluded channel for this period."
      },
      {
        "id": "goog_anthropic_equity",
        "source": "goog",
        "target": "anthropic",
        "flowType": "equity_investment",
        "amount": 0,
        "desc": "2018: Partnership active; no secondary equity injection in this period."
      },
      {
        "id": "vc_coreweave_debt",
        "source": "vc_sovereign",
        "target": "coreweave",
        "flowType": "debt_collateral",
        "amount": 0,
        "desc": "2018: Previous GPU debt facility drawn down; no new private debt tranche active."
      },
      {
        "id": "coreweave_nvda_gpu",
        "source": "coreweave",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 0.05,
        "desc": "2018: CoreWeave purchases $0.05B of NVIDIA GPUs to expand its AI cloud cluster fleet."
      },
      {
        "id": "nvda_coreweave_equity",
        "source": "nvda",
        "target": "coreweave",
        "flowType": "equity_investment",
        "amount": 0,
        "desc": "2018: Strategic partnership active; no incremental equity transaction this period."
      },
      {
        "id": "coreweave_vc_refinance",
        "source": "coreweave",
        "target": "vc_sovereign",
        "flowType": "debt_collateral",
        "amount": 0,
        "desc": "2018: Inactive or concluded channel for this period."
      },
      {
        "id": "vc_openai_equity",
        "source": "vc_sovereign",
        "target": "openai",
        "flowType": "equity_investment",
        "amount": 0,
        "desc": "2018: Operating on existing treasury; no primary mega equity financing tranche active."
      },
      {
        "id": "xai_nvda_gpu",
        "source": "xai",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 0,
        "desc": "2018: Inactive or concluded channel for this period."
      },
      {
        "id": "skhynix_tsmc_foundry",
        "source": "skhynix",
        "target": "tsmc",
        "flowType": "gpu_purchase",
        "amount": 0,
        "desc": "2018: Inactive or concluded channel for this period."
      },
      {
        "id": "market_openai_rev",
        "source": "end_market",
        "target": "openai",
        "flowType": "enterprise_revenue",
        "amount": 0.02,
        "desc": "2018: Enterprises and users generate $0.02B in verified OpenAI software and API revenue."
      },
      {
        "id": "market_msft_rev",
        "source": "end_market",
        "target": "msft",
        "flowType": "enterprise_revenue",
        "amount": 0.08,
        "desc": "2018: Enterprise clients deliver $0.08B in Microsoft commercial AI revenue."
      },
      {
        "id": "market_anthropic_rev",
        "source": "end_market",
        "target": "anthropic",
        "flowType": "enterprise_revenue",
        "amount": 0,
        "desc": "2018: Inactive or concluded channel for this period."
      },
      {
        "id": "market_deepseek_rev",
        "source": "end_market",
        "target": "deepseek",
        "flowType": "enterprise_revenue",
        "amount": 0,
        "desc": "2018: Inactive or concluded channel for this period."
      }
    ]
  },
  {
    "periodId": "2019",
    "year": 2019,
    "quarter": null,
    "label": "2019",
    "dateRange": "Full Year 2019",
    "title": "2019: The Foundation Bet — Microsoft’s $1B Partnership with OpenAI",
    "summary": "Microsoft invests $1B into OpenAI to co-build an exclusive Azure supercomputer with 10,000 GPUs. OpenAI transitions to a \"capped-profit\" entity. OpenAI publishes GPT-2, initially deemed \"too dangerous to release\" due to synthetic text coherence.",
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
        "name": "Microsoft",
        "category": "hyperscaler",
        "marketCap": 1200,
        "aiCapex": 2.1,
        "aiRevenue": 0.12,
        "isFormed": true,
        "isHighGrowth": true,
        "desc": "World cloud leader, strategic backer of OpenAI with Azure exclusive integration, developer of Maia AI ASICs.",
        "initialX": -140,
        "initialY": -130
      },
      {
        "id": "goog",
        "name": "Alphabet / Google",
        "category": "hyperscaler",
        "marketCap": 920,
        "aiCapex": 2.2,
        "aiRevenue": 0.12,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "Pioneer of Transformer architecture; custom TPU v4/v5/v6 silicon with Google DeepMind & Gemini.",
        "initialX": -185,
        "initialY": 5
      },
      {
        "id": "amzn",
        "name": "Amazon / AWS",
        "category": "hyperscaler",
        "marketCap": 920,
        "aiCapex": 1.8,
        "aiRevenue": 0.08,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "World’s largest cloud provider (AWS), key investor in Anthropic ($4B), developing Trainium2 & Inferentia.",
        "initialX": 140,
        "initialY": -130
      },
      {
        "id": "meta",
        "name": "Meta Platforms",
        "category": "hyperscaler",
        "marketCap": 585,
        "aiCapex": 1.2,
        "aiRevenue": 0.04,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "Open-source frontier AI champion (LLaMA series), massive GPU cluster operator, MTIA custom silicon.",
        "initialX": 185,
        "initialY": 5
      },
      {
        "id": "nvda",
        "name": "NVIDIA",
        "category": "chipmaker",
        "marketCap": 144,
        "aiCapex": 0.25,
        "aiRevenue": 2.1,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "Global GPU monopoly (A100/H100/B200/Rubin) and proprietary CUDA software moat capturing 75%+ gross margins.",
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
        "desc": "World’s exclusive pure-play foundry and CoWoS advanced packaging monopoly powering all advanced AI accelerators.",
        "initialX": -130,
        "initialY": 190
      },
      {
        "id": "avgo",
        "name": "Broadcom",
        "category": "chipmaker",
        "marketCap": 125,
        "aiCapex": 0.1,
        "aiRevenue": 0.65,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "Leader in custom AI ASICs (Google TPU, Meta MTIA) and high-speed Tomahawk/Jericho AI networking fabrics.",
        "initialX": -215,
        "initialY": 115
      },
      {
        "id": "skhynix",
        "name": "SK Hynix",
        "category": "semiconductor_supply",
        "marketCap": 55,
        "aiCapex": 1.1,
        "aiRevenue": 0.4,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "World’s undisputed leader in High Bandwidth Memory (HBM3, HBM3E, HBM4), primary memory supplier to NVIDIA.",
        "initialX": -20,
        "initialY": -210
      },
      {
        "id": "samsung",
        "name": "Samsung Electronics",
        "category": "semiconductor_supply",
        "marketCap": 330,
        "aiCapex": 4.2,
        "aiRevenue": 0.65,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "World’s largest memory semiconductor producer, pioneer of 12-layer HBM3E and turnkey foundry/memory solutions.",
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
        "desc": "Monopoly provider of EUV and High-NA EUV lithography equipment essential for 3nm/2nm advanced semiconductor nodes.",
        "initialX": 20,
        "initialY": 235
      },
      {
        "id": "openai",
        "name": "OpenAI",
        "category": "ai_lab",
        "marketCap": 1,
        "aiCapex": 0.12,
        "aiRevenue": 0.02,
        "isFormed": true,
        "isHighGrowth": true,
        "desc": "Frontier AI lab creator of ChatGPT, GPT-4, and o1 reasoning models; key partner in the $100B Stargate campus.",
        "initialX": -60,
        "initialY": -55
      },
      {
        "id": "anthropic",
        "name": "Anthropic",
        "category": "ai_lab",
        "marketCap": 0,
        "aiCapex": 0,
        "aiRevenue": 0,
        "isFormed": false,
        "isHighGrowth": false,
        "desc": "Frontier safety lab creator of Claude 3.5 Sonnet and Computer Use; backed by multi-billion commitments from Amazon & Google.",
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
        "desc": "Elon Musk’s AI frontier initiative operating the world’s largest 100k+ liquid-cooled Colossus supercluster in Memphis.",
        "initialX": 75,
        "initialY": 45
      },
      {
        "id": "deepseek",
        "name": "DeepSeek",
        "category": "ai_lab",
        "marketCap": 0,
        "aiCapex": 0,
        "aiRevenue": 0,
        "isFormed": false,
        "isHighGrowth": false,
        "desc": "Pioneered extreme algorithmic efficiency and low-cost open reasoning models (DeepSeek-V3 & R1) disrupting capex intensity.",
        "initialX": -75,
        "initialY": 45
      },
      {
        "id": "coreweave",
        "name": "CoreWeave",
        "category": "neocloud",
        "marketCap": 0.08,
        "aiCapex": 0.05,
        "aiRevenue": 0.01,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "Pioneer of GPU-collateralized debt financing ($2.3B in 2023, $7.5B in 2024), scaling specialized Neocloud infrastructure.",
        "initialX": 0,
        "initialY": 85
      },
      {
        "id": "vc_sovereign",
        "name": "VC & Sovereign Funds",
        "category": "venture_capital",
        "marketCap": 320,
        "aiCapex": 0,
        "aiRevenue": 0,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "Global venture syndicates (Sequoia, a16z, Thrive, SoftBank) and sovereign wealth funds (MGX, PIF) funding mega-rounds.",
        "initialX": 220,
        "initialY": 155
      },
      {
        "id": "end_market",
        "name": "Enterprise & End Users",
        "category": "end_market",
        "marketCap": 580,
        "aiCapex": 0,
        "aiRevenue": 0.35,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "Real-world corporate IT budgets, developer API billing, and consumer subscriptions representing verified software revenue.",
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
        "desc": "2019: Microsoft allocates $0.8B to procure NVIDIA accelerator server clusters for Azure AI."
      },
      {
        "id": "goog_nvda_gpu",
        "source": "goog",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 0.8,
        "desc": "2019: Google deploys $0.8B for NVIDIA GPU clusters alongside custom TPU silicon."
      },
      {
        "id": "amzn_nvda_gpu",
        "source": "amzn",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 0.6,
        "desc": "2019: Amazon AWS purchases $0.6B in NVIDIA GPUs for scalable UltraClusters."
      },
      {
        "id": "meta_nvda_gpu",
        "source": "meta",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 0.5,
        "desc": "2019: Meta allocates $0.5B to NVIDIA GPUs for next-gen LLaMA model clusters."
      },
      {
        "id": "nvda_tsmc_gpu",
        "source": "nvda",
        "target": "tsmc",
        "flowType": "gpu_purchase",
        "amount": 0.9,
        "desc": "2019: NVIDIA awards TSMC $0.9B for leading-edge wafer allocation and CoWoS packaging."
      },
      {
        "id": "nvda_skhynix_hbm",
        "source": "nvda",
        "target": "skhynix",
        "flowType": "hbm_purchase",
        "amount": 0.3,
        "desc": "2019: NVIDIA procures $0.3B of exclusive HBM memory stacks from SK Hynix."
      },
      {
        "id": "nvda_samsung_hbm",
        "source": "nvda",
        "target": "samsung",
        "flowType": "hbm_purchase",
        "amount": 0.2,
        "desc": "2019: NVIDIA secures $0.2B in advanced HBM and memory supply from Samsung Electronics."
      },
      {
        "id": "tsmc_asml_equip",
        "source": "tsmc",
        "target": "asml",
        "flowType": "equipment_purchase",
        "amount": 1,
        "desc": "2019: TSMC invests $1B in ASML EUV and High-NA lithography scanners."
      },
      {
        "id": "samsung_asml_equip",
        "source": "samsung",
        "target": "asml",
        "flowType": "equipment_purchase",
        "amount": 0.7,
        "desc": "2019: Samsung Electronics commits $0.7B for ASML EUV scanners."
      },
      {
        "id": "skhynix_asml_equip",
        "source": "skhynix",
        "target": "asml",
        "flowType": "equipment_purchase",
        "amount": 0.4,
        "desc": "2019: SK Hynix procures $0.4B of ASML EUV systems for HBM DRAM production."
      },
      {
        "id": "goog_avgo_gpu",
        "source": "goog",
        "target": "avgo",
        "flowType": "gpu_purchase",
        "amount": 0.5,
        "desc": "2019: Google pays Broadcom $0.5B for custom TPU ASIC co-design and optical interconnects."
      },
      {
        "id": "meta_avgo_gpu",
        "source": "meta",
        "target": "avgo",
        "flowType": "gpu_purchase",
        "amount": 0,
        "desc": "2019: Inactive or concluded channel for this period."
      },
      {
        "id": "msft_openai_credit",
        "source": "msft",
        "target": "openai",
        "flowType": "cloud_credit",
        "amount": 1,
        "desc": "2019: Microsoft supplies OpenAI with $1B in Azure compute credits and dedicated infrastructure."
      },
      {
        "id": "openai_msft_spend",
        "source": "openai",
        "target": "msft",
        "flowType": "cloud_credit",
        "amount": 0.15,
        "desc": "2019: OpenAI spends $0.15B in hosting fees and compute consumption paid directly to Microsoft Azure."
      },
      {
        "id": "amzn_anthropic_equity",
        "source": "amzn",
        "target": "anthropic",
        "flowType": "equity_investment",
        "amount": 0,
        "desc": "2019: Operating under active cloud agreement; no new primary equity capital call."
      },
      {
        "id": "anthropic_amzn_spend",
        "source": "anthropic",
        "target": "amzn",
        "flowType": "cloud_credit",
        "amount": 0,
        "desc": "2019: Inactive or concluded channel for this period."
      },
      {
        "id": "goog_anthropic_equity",
        "source": "goog",
        "target": "anthropic",
        "flowType": "equity_investment",
        "amount": 0,
        "desc": "2019: Partnership active; no secondary equity injection in this period."
      },
      {
        "id": "vc_coreweave_debt",
        "source": "vc_sovereign",
        "target": "coreweave",
        "flowType": "debt_collateral",
        "amount": 0,
        "desc": "2019: Previous GPU debt facility drawn down; no new private debt tranche active."
      },
      {
        "id": "coreweave_nvda_gpu",
        "source": "coreweave",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 0.1,
        "desc": "2019: CoreWeave purchases $0.1B of NVIDIA GPUs to expand its AI cloud cluster fleet."
      },
      {
        "id": "nvda_coreweave_equity",
        "source": "nvda",
        "target": "coreweave",
        "flowType": "equity_investment",
        "amount": 0,
        "desc": "2019: Strategic partnership active; no incremental equity transaction this period."
      },
      {
        "id": "coreweave_vc_refinance",
        "source": "coreweave",
        "target": "vc_sovereign",
        "flowType": "debt_collateral",
        "amount": 0,
        "desc": "2019: Inactive or concluded channel for this period."
      },
      {
        "id": "vc_openai_equity",
        "source": "vc_sovereign",
        "target": "openai",
        "flowType": "equity_investment",
        "amount": 0,
        "desc": "2019: Operating on existing treasury; no primary mega equity financing tranche active."
      },
      {
        "id": "xai_nvda_gpu",
        "source": "xai",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 0,
        "desc": "2019: Inactive or concluded channel for this period."
      },
      {
        "id": "skhynix_tsmc_foundry",
        "source": "skhynix",
        "target": "tsmc",
        "flowType": "gpu_purchase",
        "amount": 0,
        "desc": "2019: Inactive or concluded channel for this period."
      },
      {
        "id": "market_openai_rev",
        "source": "end_market",
        "target": "openai",
        "flowType": "enterprise_revenue",
        "amount": 0.03,
        "desc": "2019: Enterprises and users generate $0.03B in verified OpenAI software and API revenue."
      },
      {
        "id": "market_msft_rev",
        "source": "end_market",
        "target": "msft",
        "flowType": "enterprise_revenue",
        "amount": 0.12,
        "desc": "2019: Enterprise clients deliver $0.12B in Microsoft commercial AI revenue."
      },
      {
        "id": "market_anthropic_rev",
        "source": "end_market",
        "target": "anthropic",
        "flowType": "enterprise_revenue",
        "amount": 0,
        "desc": "2019: Inactive or concluded channel for this period."
      },
      {
        "id": "market_deepseek_rev",
        "source": "end_market",
        "target": "deepseek",
        "flowType": "enterprise_revenue",
        "amount": 0,
        "desc": "2019: Inactive or concluded channel for this period."
      }
    ]
  },
  {
    "periodId": "2020",
    "year": 2020,
    "quarter": null,
    "label": "2020",
    "dateRange": "Full Year 2020",
    "title": "2020: GPT-3 & Scaling Laws Shock — NVIDIA Ampere A100 Launch",
    "summary": "OpenAI unveils GPT-3 (175 billion parameters), shocking the world with few-shot reasoning. Jared Kaplan et al. codify the neural scaling laws: performance scales predictably with compute. NVIDIA launches the Ampere A100 on TSMC 7nm with HBM2e, establishing an enterprise monopoly.",
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
        "name": "Microsoft",
        "category": "hyperscaler",
        "marketCap": 1680,
        "aiCapex": 3.5,
        "aiRevenue": 0.18,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "World cloud leader, strategic backer of OpenAI with Azure exclusive integration, developer of Maia AI ASICs.",
        "initialX": -140,
        "initialY": -130
      },
      {
        "id": "goog",
        "name": "Alphabet / Google",
        "category": "hyperscaler",
        "marketCap": 1180,
        "aiCapex": 3.2,
        "aiRevenue": 0.18,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "Pioneer of Transformer architecture; custom TPU v4/v5/v6 silicon with Google DeepMind & Gemini.",
        "initialX": -185,
        "initialY": 5
      },
      {
        "id": "amzn",
        "name": "Amazon / AWS",
        "category": "hyperscaler",
        "marketCap": 1630,
        "aiCapex": 2.8,
        "aiRevenue": 0.12,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "World’s largest cloud provider (AWS), key investor in Anthropic ($4B), developing Trainium2 & Inferentia.",
        "initialX": 140,
        "initialY": -130
      },
      {
        "id": "meta",
        "name": "Meta Platforms",
        "category": "hyperscaler",
        "marketCap": 775,
        "aiCapex": 2,
        "aiRevenue": 0.06,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "Open-source frontier AI champion (LLaMA series), massive GPU cluster operator, MTIA custom silicon.",
        "initialX": 185,
        "initialY": 5
      },
      {
        "id": "nvda",
        "name": "NVIDIA",
        "category": "chipmaker",
        "marketCap": 323,
        "aiCapex": 0.35,
        "aiRevenue": 3.4,
        "isFormed": true,
        "isHighGrowth": true,
        "desc": "Global GPU monopoly (A100/H100/B200/Rubin) and proprietary CUDA software moat capturing 75%+ gross margins.",
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
        "desc": "World’s exclusive pure-play foundry and CoWoS advanced packaging monopoly powering all advanced AI accelerators.",
        "initialX": -130,
        "initialY": 190
      },
      {
        "id": "avgo",
        "name": "Broadcom",
        "category": "chipmaker",
        "marketCap": 175,
        "aiCapex": 0.12,
        "aiRevenue": 0.9,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "Leader in custom AI ASICs (Google TPU, Meta MTIA) and high-speed Tomahawk/Jericho AI networking fabrics.",
        "initialX": -215,
        "initialY": 115
      },
      {
        "id": "skhynix",
        "name": "SK Hynix",
        "category": "semiconductor_supply",
        "marketCap": 65,
        "aiCapex": 1.3,
        "aiRevenue": 0.6,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "World’s undisputed leader in High Bandwidth Memory (HBM3, HBM3E, HBM4), primary memory supplier to NVIDIA.",
        "initialX": -20,
        "initialY": -210
      },
      {
        "id": "samsung",
        "name": "Samsung Electronics",
        "category": "semiconductor_supply",
        "marketCap": 430,
        "aiCapex": 5.5,
        "aiRevenue": 0.8,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "World’s largest memory semiconductor producer, pioneer of 12-layer HBM3E and turnkey foundry/memory solutions.",
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
        "desc": "Monopoly provider of EUV and High-NA EUV lithography equipment essential for 3nm/2nm advanced semiconductor nodes.",
        "initialX": 20,
        "initialY": 235
      },
      {
        "id": "openai",
        "name": "OpenAI",
        "category": "ai_lab",
        "marketCap": 5,
        "aiCapex": 0.25,
        "aiRevenue": 0.05,
        "isFormed": true,
        "isHighGrowth": true,
        "desc": "Frontier AI lab creator of ChatGPT, GPT-4, and o1 reasoning models; key partner in the $100B Stargate campus.",
        "initialX": -60,
        "initialY": -55
      },
      {
        "id": "anthropic",
        "name": "Anthropic",
        "category": "ai_lab",
        "marketCap": 0,
        "aiCapex": 0,
        "aiRevenue": 0,
        "isFormed": false,
        "isHighGrowth": false,
        "desc": "Frontier safety lab creator of Claude 3.5 Sonnet and Computer Use; backed by multi-billion commitments from Amazon & Google.",
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
        "desc": "Elon Musk’s AI frontier initiative operating the world’s largest 100k+ liquid-cooled Colossus supercluster in Memphis.",
        "initialX": 75,
        "initialY": 45
      },
      {
        "id": "deepseek",
        "name": "DeepSeek",
        "category": "ai_lab",
        "marketCap": 0,
        "aiCapex": 0,
        "aiRevenue": 0,
        "isFormed": false,
        "isHighGrowth": false,
        "desc": "Pioneered extreme algorithmic efficiency and low-cost open reasoning models (DeepSeek-V3 & R1) disrupting capex intensity.",
        "initialX": -75,
        "initialY": 45
      },
      {
        "id": "coreweave",
        "name": "CoreWeave",
        "category": "neocloud",
        "marketCap": 0.15,
        "aiCapex": 0.08,
        "aiRevenue": 0.02,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "Pioneer of GPU-collateralized debt financing ($2.3B in 2023, $7.5B in 2024), scaling specialized Neocloud infrastructure.",
        "initialX": 0,
        "initialY": 85
      },
      {
        "id": "vc_sovereign",
        "name": "VC & Sovereign Funds",
        "category": "venture_capital",
        "marketCap": 380,
        "aiCapex": 0,
        "aiRevenue": 0,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "Global venture syndicates (Sequoia, a16z, Thrive, SoftBank) and sovereign wealth funds (MGX, PIF) funding mega-rounds.",
        "initialX": 220,
        "initialY": 155
      },
      {
        "id": "end_market",
        "name": "Enterprise & End Users",
        "category": "end_market",
        "marketCap": 720,
        "aiCapex": 0,
        "aiRevenue": 0.45,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "Real-world corporate IT budgets, developer API billing, and consumer subscriptions representing verified software revenue.",
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
        "desc": "2020: Microsoft allocates $1.2B to procure NVIDIA accelerator server clusters for Azure AI."
      },
      {
        "id": "goog_nvda_gpu",
        "source": "goog",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 1,
        "desc": "2020: Google deploys $1B for NVIDIA GPU clusters alongside custom TPU silicon."
      },
      {
        "id": "amzn_nvda_gpu",
        "source": "amzn",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 0.8,
        "desc": "2020: Amazon AWS purchases $0.8B in NVIDIA GPUs for scalable UltraClusters."
      },
      {
        "id": "meta_nvda_gpu",
        "source": "meta",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 0.7,
        "desc": "2020: Meta allocates $0.7B to NVIDIA GPUs for next-gen LLaMA model clusters."
      },
      {
        "id": "nvda_tsmc_gpu",
        "source": "nvda",
        "target": "tsmc",
        "flowType": "gpu_purchase",
        "amount": 1.2,
        "desc": "2020: NVIDIA awards TSMC $1.2B for leading-edge wafer allocation and CoWoS packaging."
      },
      {
        "id": "nvda_skhynix_hbm",
        "source": "nvda",
        "target": "skhynix",
        "flowType": "hbm_purchase",
        "amount": 0.4,
        "desc": "2020: NVIDIA procures $0.4B of exclusive HBM memory stacks from SK Hynix."
      },
      {
        "id": "nvda_samsung_hbm",
        "source": "nvda",
        "target": "samsung",
        "flowType": "hbm_purchase",
        "amount": 0.2,
        "desc": "2020: NVIDIA secures $0.2B in advanced HBM and memory supply from Samsung Electronics."
      },
      {
        "id": "tsmc_asml_equip",
        "source": "tsmc",
        "target": "asml",
        "flowType": "equipment_purchase",
        "amount": 1.2,
        "desc": "2020: TSMC invests $1.2B in ASML EUV and High-NA lithography scanners."
      },
      {
        "id": "samsung_asml_equip",
        "source": "samsung",
        "target": "asml",
        "flowType": "equipment_purchase",
        "amount": 0.8,
        "desc": "2020: Samsung Electronics commits $0.8B for ASML EUV scanners."
      },
      {
        "id": "skhynix_asml_equip",
        "source": "skhynix",
        "target": "asml",
        "flowType": "equipment_purchase",
        "amount": 0.5,
        "desc": "2020: SK Hynix procures $0.5B of ASML EUV systems for HBM DRAM production."
      },
      {
        "id": "goog_avgo_gpu",
        "source": "goog",
        "target": "avgo",
        "flowType": "gpu_purchase",
        "amount": 0.6,
        "desc": "2020: Google pays Broadcom $0.6B for custom TPU ASIC co-design and optical interconnects."
      },
      {
        "id": "meta_avgo_gpu",
        "source": "meta",
        "target": "avgo",
        "flowType": "gpu_purchase",
        "amount": 0,
        "desc": "2020: Inactive or concluded channel for this period."
      },
      {
        "id": "msft_openai_credit",
        "source": "msft",
        "target": "openai",
        "flowType": "cloud_credit",
        "amount": 0.8,
        "desc": "2020: Microsoft supplies OpenAI with $0.8B in Azure compute credits and dedicated infrastructure."
      },
      {
        "id": "openai_msft_spend",
        "source": "openai",
        "target": "msft",
        "flowType": "cloud_credit",
        "amount": 0.2,
        "desc": "2020: OpenAI spends $0.2B in hosting fees and compute consumption paid directly to Microsoft Azure."
      },
      {
        "id": "amzn_anthropic_equity",
        "source": "amzn",
        "target": "anthropic",
        "flowType": "equity_investment",
        "amount": 0,
        "desc": "2020: Operating under active cloud agreement; no new primary equity capital call."
      },
      {
        "id": "anthropic_amzn_spend",
        "source": "anthropic",
        "target": "amzn",
        "flowType": "cloud_credit",
        "amount": 0,
        "desc": "2020: Inactive or concluded channel for this period."
      },
      {
        "id": "goog_anthropic_equity",
        "source": "goog",
        "target": "anthropic",
        "flowType": "equity_investment",
        "amount": 0,
        "desc": "2020: Partnership active; no secondary equity injection in this period."
      },
      {
        "id": "vc_coreweave_debt",
        "source": "vc_sovereign",
        "target": "coreweave",
        "flowType": "debt_collateral",
        "amount": 0,
        "desc": "2020: Previous GPU debt facility drawn down; no new private debt tranche active."
      },
      {
        "id": "coreweave_nvda_gpu",
        "source": "coreweave",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 0.15,
        "desc": "2020: CoreWeave purchases $0.15B of NVIDIA GPUs to expand its AI cloud cluster fleet."
      },
      {
        "id": "nvda_coreweave_equity",
        "source": "nvda",
        "target": "coreweave",
        "flowType": "equity_investment",
        "amount": 0,
        "desc": "2020: Strategic partnership active; no incremental equity transaction this period."
      },
      {
        "id": "coreweave_vc_refinance",
        "source": "coreweave",
        "target": "vc_sovereign",
        "flowType": "debt_collateral",
        "amount": 0,
        "desc": "2020: Inactive or concluded channel for this period."
      },
      {
        "id": "vc_openai_equity",
        "source": "vc_sovereign",
        "target": "openai",
        "flowType": "equity_investment",
        "amount": 0,
        "desc": "2020: Operating on existing treasury; no primary mega equity financing tranche active."
      },
      {
        "id": "xai_nvda_gpu",
        "source": "xai",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 0,
        "desc": "2020: Inactive or concluded channel for this period."
      },
      {
        "id": "skhynix_tsmc_foundry",
        "source": "skhynix",
        "target": "tsmc",
        "flowType": "gpu_purchase",
        "amount": 0,
        "desc": "2020: Inactive or concluded channel for this period."
      },
      {
        "id": "market_openai_rev",
        "source": "end_market",
        "target": "openai",
        "flowType": "enterprise_revenue",
        "amount": 0.05,
        "desc": "2020: Enterprises and users generate $0.05B in verified OpenAI software and API revenue."
      },
      {
        "id": "market_msft_rev",
        "source": "end_market",
        "target": "msft",
        "flowType": "enterprise_revenue",
        "amount": 0.15,
        "desc": "2020: Enterprise clients deliver $0.15B in Microsoft commercial AI revenue."
      },
      {
        "id": "market_anthropic_rev",
        "source": "end_market",
        "target": "anthropic",
        "flowType": "enterprise_revenue",
        "amount": 0,
        "desc": "2020: Inactive or concluded channel for this period."
      },
      {
        "id": "market_deepseek_rev",
        "source": "end_market",
        "target": "deepseek",
        "flowType": "enterprise_revenue",
        "amount": 0,
        "desc": "2020: Inactive or concluded channel for this period."
      }
    ]
  },
  {
    "periodId": "2021",
    "year": 2021,
    "quarter": null,
    "label": "2021",
    "dateRange": "Full Year 2021",
    "title": "2021: Commercialization & Anthropic Founded — DALL-E & Codex",
    "summary": "Dario Amodei, Daniela Amodei, and senior researchers leave OpenAI over commercialization and safety disagreements to establish Anthropic. OpenAI launches DALL-E 1 and Codex (powering GitHub Copilot). Commercial API access opens, laying the foundation for generative software.",
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
        "name": "Microsoft",
        "category": "hyperscaler",
        "marketCap": 2500,
        "aiCapex": 4.8,
        "aiRevenue": 0.25,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "World cloud leader, strategic backer of OpenAI with Azure exclusive integration, developer of Maia AI ASICs.",
        "initialX": -140,
        "initialY": -130
      },
      {
        "id": "goog",
        "name": "Alphabet / Google",
        "category": "hyperscaler",
        "marketCap": 1900,
        "aiCapex": 4.4,
        "aiRevenue": 0.22,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "Pioneer of Transformer architecture; custom TPU v4/v5/v6 silicon with Google DeepMind & Gemini.",
        "initialX": -185,
        "initialY": 5
      },
      {
        "id": "amzn",
        "name": "Amazon / AWS",
        "category": "hyperscaler",
        "marketCap": 1700,
        "aiCapex": 3.8,
        "aiRevenue": 0.16,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "World’s largest cloud provider (AWS), key investor in Anthropic ($4B), developing Trainium2 & Inferentia.",
        "initialX": 140,
        "initialY": -130
      },
      {
        "id": "meta",
        "name": "Meta Platforms",
        "category": "hyperscaler",
        "marketCap": 935,
        "aiCapex": 3.2,
        "aiRevenue": 0.08,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "Open-source frontier AI champion (LLaMA series), massive GPU cluster operator, MTIA custom silicon.",
        "initialX": 185,
        "initialY": 5
      },
      {
        "id": "nvda",
        "name": "NVIDIA",
        "category": "chipmaker",
        "marketCap": 735,
        "aiCapex": 0.45,
        "aiRevenue": 5.2,
        "isFormed": true,
        "isHighGrowth": true,
        "desc": "Global GPU monopoly (A100/H100/B200/Rubin) and proprietary CUDA software moat capturing 75%+ gross margins.",
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
        "desc": "World’s exclusive pure-play foundry and CoWoS advanced packaging monopoly powering all advanced AI accelerators.",
        "initialX": -130,
        "initialY": 190
      },
      {
        "id": "avgo",
        "name": "Broadcom",
        "category": "chipmaker",
        "marketCap": 270,
        "aiCapex": 0.15,
        "aiRevenue": 1.2,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "Leader in custom AI ASICs (Google TPU, Meta MTIA) and high-speed Tomahawk/Jericho AI networking fabrics.",
        "initialX": -215,
        "initialY": 115
      },
      {
        "id": "skhynix",
        "name": "SK Hynix",
        "category": "semiconductor_supply",
        "marketCap": 78,
        "aiCapex": 1.5,
        "aiRevenue": 0.8,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "World’s undisputed leader in High Bandwidth Memory (HBM3, HBM3E, HBM4), primary memory supplier to NVIDIA.",
        "initialX": -20,
        "initialY": -210
      },
      {
        "id": "samsung",
        "name": "Samsung Electronics",
        "category": "semiconductor_supply",
        "marketCap": 450,
        "aiCapex": 6.8,
        "aiRevenue": 1,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "World’s largest memory semiconductor producer, pioneer of 12-layer HBM3E and turnkey foundry/memory solutions.",
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
        "desc": "Monopoly provider of EUV and High-NA EUV lithography equipment essential for 3nm/2nm advanced semiconductor nodes.",
        "initialX": 20,
        "initialY": 235
      },
      {
        "id": "openai",
        "name": "OpenAI",
        "category": "ai_lab",
        "marketCap": 14,
        "aiCapex": 0.35,
        "aiRevenue": 0.1,
        "isFormed": true,
        "isHighGrowth": true,
        "desc": "Frontier AI lab creator of ChatGPT, GPT-4, and o1 reasoning models; key partner in the $100B Stargate campus.",
        "initialX": -60,
        "initialY": -55
      },
      {
        "id": "anthropic",
        "name": "Anthropic",
        "category": "ai_lab",
        "marketCap": 1,
        "aiCapex": 0.05,
        "aiRevenue": 0.01,
        "isFormed": true,
        "isHighGrowth": true,
        "desc": "Frontier safety lab creator of Claude 3.5 Sonnet and Computer Use; backed by multi-billion commitments from Amazon & Google.",
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
        "desc": "Elon Musk’s AI frontier initiative operating the world’s largest 100k+ liquid-cooled Colossus supercluster in Memphis.",
        "initialX": 75,
        "initialY": 45
      },
      {
        "id": "deepseek",
        "name": "DeepSeek",
        "category": "ai_lab",
        "marketCap": 0,
        "aiCapex": 0,
        "aiRevenue": 0,
        "isFormed": false,
        "isHighGrowth": false,
        "desc": "Pioneered extreme algorithmic efficiency and low-cost open reasoning models (DeepSeek-V3 & R1) disrupting capex intensity.",
        "initialX": -75,
        "initialY": 45
      },
      {
        "id": "coreweave",
        "name": "CoreWeave",
        "category": "neocloud",
        "marketCap": 0.4,
        "aiCapex": 0.15,
        "aiRevenue": 0.04,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "Pioneer of GPU-collateralized debt financing ($2.3B in 2023, $7.5B in 2024), scaling specialized Neocloud infrastructure.",
        "initialX": 0,
        "initialY": 85
      },
      {
        "id": "vc_sovereign",
        "name": "VC & Sovereign Funds",
        "category": "venture_capital",
        "marketCap": 450,
        "aiCapex": 0,
        "aiRevenue": 0,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "Global venture syndicates (Sequoia, a16z, Thrive, SoftBank) and sovereign wealth funds (MGX, PIF) funding mega-rounds.",
        "initialX": 220,
        "initialY": 155
      },
      {
        "id": "end_market",
        "name": "Enterprise & End Users",
        "category": "end_market",
        "marketCap": 950,
        "aiCapex": 0,
        "aiRevenue": 0.6,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "Real-world corporate IT budgets, developer API billing, and consumer subscriptions representing verified software revenue.",
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
        "desc": "2021: Microsoft allocates $1.6B to procure NVIDIA accelerator server clusters for Azure AI."
      },
      {
        "id": "goog_nvda_gpu",
        "source": "goog",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 1.3,
        "desc": "2021: Google deploys $1.3B for NVIDIA GPU clusters alongside custom TPU silicon."
      },
      {
        "id": "amzn_nvda_gpu",
        "source": "amzn",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 1.1,
        "desc": "2021: Amazon AWS purchases $1.1B in NVIDIA GPUs for scalable UltraClusters."
      },
      {
        "id": "meta_nvda_gpu",
        "source": "meta",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 1,
        "desc": "2021: Meta allocates $1B to NVIDIA GPUs for next-gen LLaMA model clusters."
      },
      {
        "id": "nvda_tsmc_gpu",
        "source": "nvda",
        "target": "tsmc",
        "flowType": "gpu_purchase",
        "amount": 1.5,
        "desc": "2021: NVIDIA awards TSMC $1.5B for leading-edge wafer allocation and CoWoS packaging."
      },
      {
        "id": "nvda_skhynix_hbm",
        "source": "nvda",
        "target": "skhynix",
        "flowType": "hbm_purchase",
        "amount": 0.5,
        "desc": "2021: NVIDIA procures $0.5B of exclusive HBM memory stacks from SK Hynix."
      },
      {
        "id": "nvda_samsung_hbm",
        "source": "nvda",
        "target": "samsung",
        "flowType": "hbm_purchase",
        "amount": 0.25,
        "desc": "2021: NVIDIA secures $0.25B in advanced HBM and memory supply from Samsung Electronics."
      },
      {
        "id": "tsmc_asml_equip",
        "source": "tsmc",
        "target": "asml",
        "flowType": "equipment_purchase",
        "amount": 1.3,
        "desc": "2021: TSMC invests $1.3B in ASML EUV and High-NA lithography scanners."
      },
      {
        "id": "samsung_asml_equip",
        "source": "samsung",
        "target": "asml",
        "flowType": "equipment_purchase",
        "amount": 0.9,
        "desc": "2021: Samsung Electronics commits $0.9B for ASML EUV scanners."
      },
      {
        "id": "skhynix_asml_equip",
        "source": "skhynix",
        "target": "asml",
        "flowType": "equipment_purchase",
        "amount": 0.5,
        "desc": "2021: SK Hynix procures $0.5B of ASML EUV systems for HBM DRAM production."
      },
      {
        "id": "goog_avgo_gpu",
        "source": "goog",
        "target": "avgo",
        "flowType": "gpu_purchase",
        "amount": 0.65,
        "desc": "2021: Google pays Broadcom $0.65B for custom TPU ASIC co-design and optical interconnects."
      },
      {
        "id": "meta_avgo_gpu",
        "source": "meta",
        "target": "avgo",
        "flowType": "gpu_purchase",
        "amount": 0,
        "desc": "2021: Inactive or concluded channel for this period."
      },
      {
        "id": "msft_openai_credit",
        "source": "msft",
        "target": "openai",
        "flowType": "cloud_credit",
        "amount": 1.2,
        "desc": "2021: Microsoft supplies OpenAI with $1.2B in Azure compute credits and dedicated infrastructure."
      },
      {
        "id": "openai_msft_spend",
        "source": "openai",
        "target": "msft",
        "flowType": "cloud_credit",
        "amount": 0.25,
        "desc": "2021: OpenAI spends $0.25B in hosting fees and compute consumption paid directly to Microsoft Azure."
      },
      {
        "id": "amzn_anthropic_equity",
        "source": "amzn",
        "target": "anthropic",
        "flowType": "equity_investment",
        "amount": 0.12,
        "desc": "2021: Amazon executes a strategic growth capital tranche of $0.12B into Anthropic."
      },
      {
        "id": "anthropic_amzn_spend",
        "source": "anthropic",
        "target": "amzn",
        "flowType": "cloud_credit",
        "amount": 0.05,
        "desc": "2021: Anthropic pays $0.05B to AWS for Bedrock compute clusters and Trainium workloads."
      },
      {
        "id": "goog_anthropic_equity",
        "source": "goog",
        "target": "anthropic",
        "flowType": "equity_investment",
        "amount": 0,
        "desc": "2021: Partnership active; no secondary equity injection in this period."
      },
      {
        "id": "vc_coreweave_debt",
        "source": "vc_sovereign",
        "target": "coreweave",
        "flowType": "debt_collateral",
        "amount": 0,
        "desc": "2021: Previous GPU debt facility drawn down; no new private debt tranche active."
      },
      {
        "id": "coreweave_nvda_gpu",
        "source": "coreweave",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 0.25,
        "desc": "2021: CoreWeave purchases $0.25B of NVIDIA GPUs to expand its AI cloud cluster fleet."
      },
      {
        "id": "nvda_coreweave_equity",
        "source": "nvda",
        "target": "coreweave",
        "flowType": "equity_investment",
        "amount": 0,
        "desc": "2021: Strategic partnership active; no incremental equity transaction this period."
      },
      {
        "id": "coreweave_vc_refinance",
        "source": "coreweave",
        "target": "vc_sovereign",
        "flowType": "debt_collateral",
        "amount": 0,
        "desc": "2021: Inactive or concluded channel for this period."
      },
      {
        "id": "vc_openai_equity",
        "source": "vc_sovereign",
        "target": "openai",
        "flowType": "equity_investment",
        "amount": 0.25,
        "desc": "2021: Global VC and sovereign syndicates inject $0.25B growth equity into OpenAI."
      },
      {
        "id": "xai_nvda_gpu",
        "source": "xai",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 0,
        "desc": "2021: Inactive or concluded channel for this period."
      },
      {
        "id": "skhynix_tsmc_foundry",
        "source": "skhynix",
        "target": "tsmc",
        "flowType": "gpu_purchase",
        "amount": 0,
        "desc": "2021: Inactive or concluded channel for this period."
      },
      {
        "id": "market_openai_rev",
        "source": "end_market",
        "target": "openai",
        "flowType": "enterprise_revenue",
        "amount": 0.1,
        "desc": "2021: Enterprises and users generate $0.1B in verified OpenAI software and API revenue."
      },
      {
        "id": "market_msft_rev",
        "source": "end_market",
        "target": "msft",
        "flowType": "enterprise_revenue",
        "amount": 0.2,
        "desc": "2021: Enterprise clients deliver $0.2B in Microsoft commercial AI revenue."
      },
      {
        "id": "market_anthropic_rev",
        "source": "end_market",
        "target": "anthropic",
        "flowType": "enterprise_revenue",
        "amount": 0.01,
        "desc": "2021: Enterprise software clients generate $0.01B in Claude API token billing revenue."
      },
      {
        "id": "market_deepseek_rev",
        "source": "end_market",
        "target": "deepseek",
        "flowType": "enterprise_revenue",
        "amount": 0,
        "desc": "2021: Inactive or concluded channel for this period."
      }
    ]
  },
  {
    "periodId": "2022",
    "year": 2022,
    "quarter": null,
    "label": "2022",
    "dateRange": "Full Year 2022",
    "title": "2022: The Inflection Point — ChatGPT Unleashed (Nov 30, 2022)",
    "summary": "Midjourney and Stable Diffusion spark image generation mania. NVIDIA introduces the Hopper H100 with Transformer Engine. On November 30, 2022, OpenAI releases ChatGPT as a free research preview; within five days, it reaches one million users, igniting the global generative AI race.",
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
        "name": "Microsoft",
        "category": "hyperscaler",
        "marketCap": 1780,
        "aiCapex": 5.8,
        "aiRevenue": 0.35,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "World cloud leader, strategic backer of OpenAI with Azure exclusive integration, developer of Maia AI ASICs.",
        "initialX": -140,
        "initialY": -130
      },
      {
        "id": "goog",
        "name": "Alphabet / Google",
        "category": "hyperscaler",
        "marketCap": 1150,
        "aiCapex": 5.2,
        "aiRevenue": 0.2,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "Pioneer of Transformer architecture; custom TPU v4/v5/v6 silicon with Google DeepMind & Gemini.",
        "initialX": -185,
        "initialY": 5
      },
      {
        "id": "amzn",
        "name": "Amazon / AWS",
        "category": "hyperscaler",
        "marketCap": 860,
        "aiCapex": 5.4,
        "aiRevenue": 0.18,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "World’s largest cloud provider (AWS), key investor in Anthropic ($4B), developing Trainium2 & Inferentia.",
        "initialX": 140,
        "initialY": -130
      },
      {
        "id": "meta",
        "name": "Meta Platforms",
        "category": "hyperscaler",
        "marketCap": 320,
        "aiCapex": 4.8,
        "aiRevenue": 0.1,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "Open-source frontier AI champion (LLaMA series), massive GPU cluster operator, MTIA custom silicon.",
        "initialX": 185,
        "initialY": 5
      },
      {
        "id": "nvda",
        "name": "NVIDIA",
        "category": "chipmaker",
        "marketCap": 360,
        "aiCapex": 0.55,
        "aiRevenue": 6.8,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "Global GPU monopoly (A100/H100/B200/Rubin) and proprietary CUDA software moat capturing 75%+ gross margins.",
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
        "desc": "World’s exclusive pure-play foundry and CoWoS advanced packaging monopoly powering all advanced AI accelerators.",
        "initialX": -130,
        "initialY": 190
      },
      {
        "id": "avgo",
        "name": "Broadcom",
        "category": "chipmaker",
        "marketCap": 230,
        "aiCapex": 0.18,
        "aiRevenue": 1.5,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "Leader in custom AI ASICs (Google TPU, Meta MTIA) and high-speed Tomahawk/Jericho AI networking fabrics.",
        "initialX": -215,
        "initialY": 115
      },
      {
        "id": "skhynix",
        "name": "SK Hynix",
        "category": "semiconductor_supply",
        "marketCap": 48,
        "aiCapex": 1.6,
        "aiRevenue": 0.75,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "World’s undisputed leader in High Bandwidth Memory (HBM3, HBM3E, HBM4), primary memory supplier to NVIDIA.",
        "initialX": -20,
        "initialY": -210
      },
      {
        "id": "samsung",
        "name": "Samsung Electronics",
        "category": "semiconductor_supply",
        "marketCap": 290,
        "aiCapex": 7.5,
        "aiRevenue": 1.1,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "World’s largest memory semiconductor producer, pioneer of 12-layer HBM3E and turnkey foundry/memory solutions.",
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
        "desc": "Monopoly provider of EUV and High-NA EUV lithography equipment essential for 3nm/2nm advanced semiconductor nodes.",
        "initialX": 20,
        "initialY": 235
      },
      {
        "id": "openai",
        "name": "OpenAI",
        "category": "ai_lab",
        "marketCap": 20,
        "aiCapex": 0.45,
        "aiRevenue": 0.15,
        "isFormed": true,
        "isHighGrowth": true,
        "desc": "Frontier AI lab creator of ChatGPT, GPT-4, and o1 reasoning models; key partner in the $100B Stargate campus.",
        "initialX": -60,
        "initialY": -55
      },
      {
        "id": "anthropic",
        "name": "Anthropic",
        "category": "ai_lab",
        "marketCap": 4,
        "aiCapex": 0.1,
        "aiRevenue": 0.02,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "Frontier safety lab creator of Claude 3.5 Sonnet and Computer Use; backed by multi-billion commitments from Amazon & Google.",
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
        "desc": "Elon Musk’s AI frontier initiative operating the world’s largest 100k+ liquid-cooled Colossus supercluster in Memphis.",
        "initialX": 75,
        "initialY": 45
      },
      {
        "id": "deepseek",
        "name": "DeepSeek",
        "category": "ai_lab",
        "marketCap": 0,
        "aiCapex": 0,
        "aiRevenue": 0,
        "isFormed": false,
        "isHighGrowth": false,
        "desc": "Pioneered extreme algorithmic efficiency and low-cost open reasoning models (DeepSeek-V3 & R1) disrupting capex intensity.",
        "initialX": -75,
        "initialY": 45
      },
      {
        "id": "coreweave",
        "name": "CoreWeave",
        "category": "neocloud",
        "marketCap": 1,
        "aiCapex": 0.25,
        "aiRevenue": 0.06,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "Pioneer of GPU-collateralized debt financing ($2.3B in 2023, $7.5B in 2024), scaling specialized Neocloud infrastructure.",
        "initialX": 0,
        "initialY": 85
      },
      {
        "id": "vc_sovereign",
        "name": "VC & Sovereign Funds",
        "category": "venture_capital",
        "marketCap": 480,
        "aiCapex": 0,
        "aiRevenue": 0,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "Global venture syndicates (Sequoia, a16z, Thrive, SoftBank) and sovereign wealth funds (MGX, PIF) funding mega-rounds.",
        "initialX": 220,
        "initialY": 155
      },
      {
        "id": "end_market",
        "name": "Enterprise & End Users",
        "category": "end_market",
        "marketCap": 1100,
        "aiCapex": 0,
        "aiRevenue": 0.7,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "Real-world corporate IT budgets, developer API billing, and consumer subscriptions representing verified software revenue.",
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
        "desc": "2022: Microsoft allocates $2.2B to procure NVIDIA accelerator server clusters for Azure AI."
      },
      {
        "id": "goog_nvda_gpu",
        "source": "goog",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 1.8,
        "desc": "2022: Google deploys $1.8B for NVIDIA GPU clusters alongside custom TPU silicon."
      },
      {
        "id": "amzn_nvda_gpu",
        "source": "amzn",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 1.6,
        "desc": "2022: Amazon AWS purchases $1.6B in NVIDIA GPUs for scalable UltraClusters."
      },
      {
        "id": "meta_nvda_gpu",
        "source": "meta",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 1.5,
        "desc": "2022: Meta allocates $1.5B to NVIDIA GPUs for next-gen LLaMA model clusters."
      },
      {
        "id": "nvda_tsmc_gpu",
        "source": "nvda",
        "target": "tsmc",
        "flowType": "gpu_purchase",
        "amount": 1.8,
        "desc": "2022: NVIDIA awards TSMC $1.8B for leading-edge wafer allocation and CoWoS packaging."
      },
      {
        "id": "nvda_skhynix_hbm",
        "source": "nvda",
        "target": "skhynix",
        "flowType": "hbm_purchase",
        "amount": 0.65,
        "desc": "2022: NVIDIA procures $0.65B of exclusive HBM memory stacks from SK Hynix."
      },
      {
        "id": "nvda_samsung_hbm",
        "source": "nvda",
        "target": "samsung",
        "flowType": "hbm_purchase",
        "amount": 0.3,
        "desc": "2022: NVIDIA secures $0.3B in advanced HBM and memory supply from Samsung Electronics."
      },
      {
        "id": "tsmc_asml_equip",
        "source": "tsmc",
        "target": "asml",
        "flowType": "equipment_purchase",
        "amount": 1.4,
        "desc": "2022: TSMC invests $1.4B in ASML EUV and High-NA lithography scanners."
      },
      {
        "id": "samsung_asml_equip",
        "source": "samsung",
        "target": "asml",
        "flowType": "equipment_purchase",
        "amount": 1,
        "desc": "2022: Samsung Electronics commits $1B for ASML EUV scanners."
      },
      {
        "id": "skhynix_asml_equip",
        "source": "skhynix",
        "target": "asml",
        "flowType": "equipment_purchase",
        "amount": 0.55,
        "desc": "2022: SK Hynix procures $0.55B of ASML EUV systems for HBM DRAM production."
      },
      {
        "id": "goog_avgo_gpu",
        "source": "goog",
        "target": "avgo",
        "flowType": "gpu_purchase",
        "amount": 0.68,
        "desc": "2022: Google pays Broadcom $0.68B for custom TPU ASIC co-design and optical interconnects."
      },
      {
        "id": "meta_avgo_gpu",
        "source": "meta",
        "target": "avgo",
        "flowType": "gpu_purchase",
        "amount": 0,
        "desc": "2022: Inactive or concluded channel for this period."
      },
      {
        "id": "msft_openai_credit",
        "source": "msft",
        "target": "openai",
        "flowType": "cloud_credit",
        "amount": 1.8,
        "desc": "2022: Microsoft supplies OpenAI with $1.8B in Azure compute credits and dedicated infrastructure."
      },
      {
        "id": "openai_msft_spend",
        "source": "openai",
        "target": "msft",
        "flowType": "cloud_credit",
        "amount": 0.3,
        "desc": "2022: OpenAI spends $0.3B in hosting fees and compute consumption paid directly to Microsoft Azure."
      },
      {
        "id": "amzn_anthropic_equity",
        "source": "amzn",
        "target": "anthropic",
        "flowType": "equity_investment",
        "amount": 0,
        "desc": "2022: Operating under active cloud agreement; no new primary equity capital call."
      },
      {
        "id": "anthropic_amzn_spend",
        "source": "anthropic",
        "target": "amzn",
        "flowType": "cloud_credit",
        "amount": 0.15,
        "desc": "2022: Anthropic pays $0.15B to AWS for Bedrock compute clusters and Trainium workloads."
      },
      {
        "id": "goog_anthropic_equity",
        "source": "goog",
        "target": "anthropic",
        "flowType": "equity_investment",
        "amount": 0,
        "desc": "2022: Partnership active; no secondary equity injection in this period."
      },
      {
        "id": "vc_coreweave_debt",
        "source": "vc_sovereign",
        "target": "coreweave",
        "flowType": "debt_collateral",
        "amount": 0,
        "desc": "2022: Previous GPU debt facility drawn down; no new private debt tranche active."
      },
      {
        "id": "coreweave_nvda_gpu",
        "source": "coreweave",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 0.35,
        "desc": "2022: CoreWeave purchases $0.35B of NVIDIA GPUs to expand its AI cloud cluster fleet."
      },
      {
        "id": "nvda_coreweave_equity",
        "source": "nvda",
        "target": "coreweave",
        "flowType": "equity_investment",
        "amount": 0,
        "desc": "2022: Strategic partnership active; no incremental equity transaction this period."
      },
      {
        "id": "coreweave_vc_refinance",
        "source": "coreweave",
        "target": "vc_sovereign",
        "flowType": "debt_collateral",
        "amount": 0,
        "desc": "2022: Inactive or concluded channel for this period."
      },
      {
        "id": "vc_openai_equity",
        "source": "vc_sovereign",
        "target": "openai",
        "flowType": "equity_investment",
        "amount": 0,
        "desc": "2022: Operating on existing treasury; no primary mega equity financing tranche active."
      },
      {
        "id": "xai_nvda_gpu",
        "source": "xai",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 0,
        "desc": "2022: Inactive or concluded channel for this period."
      },
      {
        "id": "skhynix_tsmc_foundry",
        "source": "skhynix",
        "target": "tsmc",
        "flowType": "gpu_purchase",
        "amount": 0,
        "desc": "2022: Inactive or concluded channel for this period."
      },
      {
        "id": "market_openai_rev",
        "source": "end_market",
        "target": "openai",
        "flowType": "enterprise_revenue",
        "amount": 0.15,
        "desc": "2022: Enterprises and users generate $0.15B in verified OpenAI software and API revenue."
      },
      {
        "id": "market_msft_rev",
        "source": "end_market",
        "target": "msft",
        "flowType": "enterprise_revenue",
        "amount": 0.4,
        "desc": "2022: Enterprise clients deliver $0.4B in Microsoft commercial AI revenue."
      },
      {
        "id": "market_anthropic_rev",
        "source": "end_market",
        "target": "anthropic",
        "flowType": "enterprise_revenue",
        "amount": 0.02,
        "desc": "2022: Enterprise software clients generate $0.02B in Claude API token billing revenue."
      },
      {
        "id": "market_deepseek_rev",
        "source": "end_market",
        "target": "deepseek",
        "flowType": "enterprise_revenue",
        "amount": 0,
        "desc": "2022: Inactive or concluded channel for this period."
      }
    ]
  },
  {
    "periodId": "2023-Q1",
    "year": 2023,
    "quarter": 1,
    "label": "2023 Q1",
    "dateRange": "Jan - Mar 2023",
    "title": "2023 Q1: ChatGPT Explosion & Microsoft’s $10B Commitment",
    "summary": "ChatGPT crosses 100M monthly active users in record time. Microsoft announces a multi-billion dollar extension with OpenAI (mostly Azure compute credits). Google declares \"Code Red\", and hyperscalers scramble to secure preliminary A100/H100 allocations.",
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
        "name": "Microsoft",
        "category": "hyperscaler",
        "marketCap": 2150,
        "aiCapex": 6.8,
        "aiRevenue": 0.4,
        "isFormed": true,
        "isHighGrowth": true,
        "desc": "World cloud leader, strategic backer of OpenAI with Azure exclusive integration, developer of Maia AI ASICs.",
        "initialX": -140,
        "initialY": -130
      },
      {
        "id": "goog",
        "name": "Alphabet / Google",
        "category": "hyperscaler",
        "marketCap": 1320,
        "aiCapex": 6.3,
        "aiRevenue": 0.2,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "Pioneer of Transformer architecture; custom TPU v4/v5/v6 silicon with Google DeepMind & Gemini.",
        "initialX": -185,
        "initialY": 5
      },
      {
        "id": "amzn",
        "name": "Amazon / AWS",
        "category": "hyperscaler",
        "marketCap": 1050,
        "aiCapex": 6.5,
        "aiRevenue": 0.2,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "World’s largest cloud provider (AWS), key investor in Anthropic ($4B), developing Trainium2 & Inferentia.",
        "initialX": 140,
        "initialY": -130
      },
      {
        "id": "meta",
        "name": "Meta Platforms",
        "category": "hyperscaler",
        "marketCap": 540,
        "aiCapex": 6,
        "aiRevenue": 0.1,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "Open-source frontier AI champion (LLaMA series), massive GPU cluster operator, MTIA custom silicon.",
        "initialX": 185,
        "initialY": 5
      },
      {
        "id": "nvda",
        "name": "NVIDIA",
        "category": "chipmaker",
        "marketCap": 680,
        "aiCapex": 0.6,
        "aiRevenue": 4.3,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "Global GPU monopoly (A100/H100/B200/Rubin) and proprietary CUDA software moat capturing 75%+ gross margins.",
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
        "desc": "World’s exclusive pure-play foundry and CoWoS advanced packaging monopoly powering all advanced AI accelerators.",
        "initialX": -130,
        "initialY": 190
      },
      {
        "id": "avgo",
        "name": "Broadcom",
        "category": "chipmaker",
        "marketCap": 260,
        "aiCapex": 0.2,
        "aiRevenue": 1.8,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "Leader in custom AI ASICs (Google TPU, Meta MTIA) and high-speed Tomahawk/Jericho AI networking fabrics.",
        "initialX": -215,
        "initialY": 115
      },
      {
        "id": "skhynix",
        "name": "SK Hynix",
        "category": "semiconductor_supply",
        "marketCap": 55,
        "aiCapex": 1.8,
        "aiRevenue": 0.8,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "World’s undisputed leader in High Bandwidth Memory (HBM3, HBM3E, HBM4), primary memory supplier to NVIDIA.",
        "initialX": -20,
        "initialY": -210
      },
      {
        "id": "samsung",
        "name": "Samsung Electronics",
        "category": "semiconductor_supply",
        "marketCap": 340,
        "aiCapex": 8.5,
        "aiRevenue": 1.2,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "World’s largest memory semiconductor producer, pioneer of 12-layer HBM3E and turnkey foundry/memory solutions.",
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
        "desc": "Monopoly provider of EUV and High-NA EUV lithography equipment essential for 3nm/2nm advanced semiconductor nodes.",
        "initialX": 20,
        "initialY": 235
      },
      {
        "id": "openai",
        "name": "OpenAI",
        "category": "ai_lab",
        "marketCap": 29,
        "aiCapex": 0.4,
        "aiRevenue": 0.2,
        "isFormed": true,
        "isHighGrowth": true,
        "desc": "Frontier AI lab creator of ChatGPT, GPT-4, and o1 reasoning models; key partner in the $100B Stargate campus.",
        "initialX": -60,
        "initialY": -55
      },
      {
        "id": "anthropic",
        "name": "Anthropic",
        "category": "ai_lab",
        "marketCap": 4,
        "aiCapex": 0.1,
        "aiRevenue": 0.02,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "Frontier safety lab creator of Claude 3.5 Sonnet and Computer Use; backed by multi-billion commitments from Amazon & Google.",
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
        "desc": "Elon Musk’s AI frontier initiative operating the world’s largest 100k+ liquid-cooled Colossus supercluster in Memphis.",
        "initialX": 75,
        "initialY": 45
      },
      {
        "id": "deepseek",
        "name": "DeepSeek",
        "category": "ai_lab",
        "marketCap": 0,
        "aiCapex": 0,
        "aiRevenue": 0,
        "isFormed": false,
        "isHighGrowth": false,
        "desc": "Pioneered extreme algorithmic efficiency and low-cost open reasoning models (DeepSeek-V3 & R1) disrupting capex intensity.",
        "initialX": -75,
        "initialY": 45
      },
      {
        "id": "coreweave",
        "name": "CoreWeave",
        "category": "neocloud",
        "marketCap": 2,
        "aiCapex": 0.2,
        "aiRevenue": 0.05,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "Pioneer of GPU-collateralized debt financing ($2.3B in 2023, $7.5B in 2024), scaling specialized Neocloud infrastructure.",
        "initialX": 0,
        "initialY": 85
      },
      {
        "id": "vc_sovereign",
        "name": "VC & Sovereign Funds",
        "category": "venture_capital",
        "marketCap": 500,
        "aiCapex": 0,
        "aiRevenue": 0,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "Global venture syndicates (Sequoia, a16z, Thrive, SoftBank) and sovereign wealth funds (MGX, PIF) funding mega-rounds.",
        "initialX": 220,
        "initialY": 155
      },
      {
        "id": "end_market",
        "name": "Enterprise & End Users",
        "category": "end_market",
        "marketCap": 1200,
        "aiCapex": 0,
        "aiRevenue": 0.8,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "Real-world corporate IT budgets, developer API billing, and consumer subscriptions representing verified software revenue.",
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
        "desc": "2023 Q1: Microsoft allocates $2.8B to procure NVIDIA accelerator server clusters for Azure AI."
      },
      {
        "id": "goog_nvda_gpu",
        "source": "goog",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 2.2,
        "desc": "2023 Q1: Google deploys $2.2B for NVIDIA GPU clusters alongside custom TPU silicon."
      },
      {
        "id": "amzn_nvda_gpu",
        "source": "amzn",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 2.1,
        "desc": "2023 Q1: Amazon AWS purchases $2.1B in NVIDIA GPUs for scalable UltraClusters."
      },
      {
        "id": "meta_nvda_gpu",
        "source": "meta",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 2,
        "desc": "2023 Q1: Meta allocates $2B to NVIDIA GPUs for next-gen LLaMA model clusters."
      },
      {
        "id": "nvda_tsmc_gpu",
        "source": "nvda",
        "target": "tsmc",
        "flowType": "gpu_purchase",
        "amount": 2.2,
        "desc": "2023 Q1: NVIDIA awards TSMC $2.2B for leading-edge wafer allocation and CoWoS packaging."
      },
      {
        "id": "nvda_skhynix_hbm",
        "source": "nvda",
        "target": "skhynix",
        "flowType": "hbm_purchase",
        "amount": 0.8,
        "desc": "2023 Q1: NVIDIA procures $0.8B of exclusive HBM memory stacks from SK Hynix."
      },
      {
        "id": "nvda_samsung_hbm",
        "source": "nvda",
        "target": "samsung",
        "flowType": "hbm_purchase",
        "amount": 0.3,
        "desc": "2023 Q1: NVIDIA secures $0.3B in advanced HBM and memory supply from Samsung Electronics."
      },
      {
        "id": "tsmc_asml_equip",
        "source": "tsmc",
        "target": "asml",
        "flowType": "equipment_purchase",
        "amount": 1.5,
        "desc": "2023 Q1: TSMC invests $1.5B in ASML EUV and High-NA lithography scanners."
      },
      {
        "id": "samsung_asml_equip",
        "source": "samsung",
        "target": "asml",
        "flowType": "equipment_purchase",
        "amount": 1.1,
        "desc": "2023 Q1: Samsung Electronics commits $1.1B for ASML EUV scanners."
      },
      {
        "id": "skhynix_asml_equip",
        "source": "skhynix",
        "target": "asml",
        "flowType": "equipment_purchase",
        "amount": 0.6,
        "desc": "2023 Q1: SK Hynix procures $0.6B of ASML EUV systems for HBM DRAM production."
      },
      {
        "id": "goog_avgo_gpu",
        "source": "goog",
        "target": "avgo",
        "flowType": "gpu_purchase",
        "amount": 0.7,
        "desc": "2023 Q1: Google pays Broadcom $0.7B for custom TPU ASIC co-design and optical interconnects."
      },
      {
        "id": "meta_avgo_gpu",
        "source": "meta",
        "target": "avgo",
        "flowType": "gpu_purchase",
        "amount": 0,
        "desc": "2023 Q1: Inactive or concluded channel for this period."
      },
      {
        "id": "msft_openai_credit",
        "source": "msft",
        "target": "openai",
        "flowType": "cloud_credit",
        "amount": 2.5,
        "desc": "2023 Q1: Microsoft supplies OpenAI with $2.5B in Azure compute credits and dedicated infrastructure."
      },
      {
        "id": "openai_msft_spend",
        "source": "openai",
        "target": "msft",
        "flowType": "cloud_credit",
        "amount": 0.35,
        "desc": "2023 Q1: OpenAI spends $0.35B in hosting fees and compute consumption paid directly to Microsoft Azure."
      },
      {
        "id": "amzn_anthropic_equity",
        "source": "amzn",
        "target": "anthropic",
        "flowType": "equity_investment",
        "amount": 0,
        "desc": "2023 Q1: Operating under active cloud agreement; no new primary equity capital call."
      },
      {
        "id": "anthropic_amzn_spend",
        "source": "anthropic",
        "target": "amzn",
        "flowType": "cloud_credit",
        "amount": 0,
        "desc": "2023 Q1: Inactive or concluded channel for this period."
      },
      {
        "id": "goog_anthropic_equity",
        "source": "goog",
        "target": "anthropic",
        "flowType": "equity_investment",
        "amount": 0,
        "desc": "2023 Q1: Partnership active; no secondary equity injection in this period."
      },
      {
        "id": "vc_coreweave_debt",
        "source": "vc_sovereign",
        "target": "coreweave",
        "flowType": "debt_collateral",
        "amount": 0,
        "desc": "2023 Q1: Previous GPU debt facility drawn down; no new private debt tranche active."
      },
      {
        "id": "coreweave_nvda_gpu",
        "source": "coreweave",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 0,
        "desc": "2023 Q1: Inactive or concluded channel for this period."
      },
      {
        "id": "nvda_coreweave_equity",
        "source": "nvda",
        "target": "coreweave",
        "flowType": "equity_investment",
        "amount": 0,
        "desc": "2023 Q1: Strategic partnership active; no incremental equity transaction this period."
      },
      {
        "id": "coreweave_vc_refinance",
        "source": "coreweave",
        "target": "vc_sovereign",
        "flowType": "debt_collateral",
        "amount": 0,
        "desc": "2023 Q1: Inactive or concluded channel for this period."
      },
      {
        "id": "vc_openai_equity",
        "source": "vc_sovereign",
        "target": "openai",
        "flowType": "equity_investment",
        "amount": 0,
        "desc": "2023 Q1: Operating on existing treasury; no primary mega equity financing tranche active."
      },
      {
        "id": "xai_nvda_gpu",
        "source": "xai",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 0,
        "desc": "2023 Q1: Inactive or concluded channel for this period."
      },
      {
        "id": "skhynix_tsmc_foundry",
        "source": "skhynix",
        "target": "tsmc",
        "flowType": "gpu_purchase",
        "amount": 0,
        "desc": "2023 Q1: Inactive or concluded channel for this period."
      },
      {
        "id": "market_openai_rev",
        "source": "end_market",
        "target": "openai",
        "flowType": "enterprise_revenue",
        "amount": 0.2,
        "desc": "2023 Q1: Enterprises and users generate $0.2B in verified OpenAI software and API revenue."
      },
      {
        "id": "market_msft_rev",
        "source": "end_market",
        "target": "msft",
        "flowType": "enterprise_revenue",
        "amount": 0.6,
        "desc": "2023 Q1: Enterprise clients deliver $0.6B in Microsoft commercial AI revenue."
      },
      {
        "id": "market_anthropic_rev",
        "source": "end_market",
        "target": "anthropic",
        "flowType": "enterprise_revenue",
        "amount": 0,
        "desc": "2023 Q1: Inactive or concluded channel for this period."
      },
      {
        "id": "market_deepseek_rev",
        "source": "end_market",
        "target": "deepseek",
        "flowType": "enterprise_revenue",
        "amount": 0,
        "desc": "2023 Q1: Inactive or concluded channel for this period."
      }
    ]
  },
  {
    "periodId": "2023-Q2",
    "year": 2023,
    "quarter": 2,
    "label": "2023 Q2",
    "dateRange": "Apr - Jun 2023",
    "title": "2023 Q2: NVIDIA’s Historic Guidance & The H100 Shortage",
    "summary": "NVIDIA shocks financial markets with an unprecedented revenue forecast ($11B vs $7B consensus), driven by Data Center demand. H100 lead times exceed 40 weeks. TSMC CoWoS advanced packaging capacity is identified as the singular bottleneck in the AI supply chain.",
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
        "name": "Microsoft",
        "category": "hyperscaler",
        "marketCap": 2480,
        "aiCapex": 8.2,
        "aiRevenue": 0.6,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "World cloud leader, strategic backer of OpenAI with Azure exclusive integration, developer of Maia AI ASICs.",
        "initialX": -140,
        "initialY": -130
      },
      {
        "id": "goog",
        "name": "Alphabet / Google",
        "category": "hyperscaler",
        "marketCap": 1510,
        "aiCapex": 6.9,
        "aiRevenue": 0.35,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "Pioneer of Transformer architecture; custom TPU v4/v5/v6 silicon with Google DeepMind & Gemini.",
        "initialX": -185,
        "initialY": 5
      },
      {
        "id": "amzn",
        "name": "Amazon / AWS",
        "category": "hyperscaler",
        "marketCap": 1320,
        "aiCapex": 7.4,
        "aiRevenue": 0.3,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "World’s largest cloud provider (AWS), key investor in Anthropic ($4B), developing Trainium2 & Inferentia.",
        "initialX": 140,
        "initialY": -130
      },
      {
        "id": "meta",
        "name": "Meta Platforms",
        "category": "hyperscaler",
        "marketCap": 740,
        "aiCapex": 6.4,
        "aiRevenue": 0.15,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "Open-source frontier AI champion (LLaMA series), massive GPU cluster operator, MTIA custom silicon.",
        "initialX": 185,
        "initialY": 5
      },
      {
        "id": "nvda",
        "name": "NVIDIA",
        "category": "chipmaker",
        "marketCap": 1050,
        "aiCapex": 0.8,
        "aiRevenue": 10.3,
        "isFormed": true,
        "isHighGrowth": true,
        "desc": "Global GPU monopoly (A100/H100/B200/Rubin) and proprietary CUDA software moat capturing 75%+ gross margins.",
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
        "desc": "World’s exclusive pure-play foundry and CoWoS advanced packaging monopoly powering all advanced AI accelerators.",
        "initialX": -130,
        "initialY": 190
      },
      {
        "id": "avgo",
        "name": "Broadcom",
        "category": "chipmaker",
        "marketCap": 350,
        "aiCapex": 0.25,
        "aiRevenue": 2.1,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "Leader in custom AI ASICs (Google TPU, Meta MTIA) and high-speed Tomahawk/Jericho AI networking fabrics.",
        "initialX": -215,
        "initialY": 115
      },
      {
        "id": "skhynix",
        "name": "SK Hynix",
        "category": "semiconductor_supply",
        "marketCap": 65,
        "aiCapex": 1.6,
        "aiRevenue": 1.3,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "World’s undisputed leader in High Bandwidth Memory (HBM3, HBM3E, HBM4), primary memory supplier to NVIDIA.",
        "initialX": -20,
        "initialY": -210
      },
      {
        "id": "samsung",
        "name": "Samsung Electronics",
        "category": "semiconductor_supply",
        "marketCap": 360,
        "aiCapex": 8.9,
        "aiRevenue": 1.5,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "World’s largest memory semiconductor producer, pioneer of 12-layer HBM3E and turnkey foundry/memory solutions.",
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
        "desc": "Monopoly provider of EUV and High-NA EUV lithography equipment essential for 3nm/2nm advanced semiconductor nodes.",
        "initialX": 20,
        "initialY": 235
      },
      {
        "id": "openai",
        "name": "OpenAI",
        "category": "ai_lab",
        "marketCap": 45,
        "aiCapex": 0.6,
        "aiRevenue": 0.35,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "Frontier AI lab creator of ChatGPT, GPT-4, and o1 reasoning models; key partner in the $100B Stargate campus.",
        "initialX": -60,
        "initialY": -55
      },
      {
        "id": "anthropic",
        "name": "Anthropic",
        "category": "ai_lab",
        "marketCap": 8,
        "aiCapex": 0.2,
        "aiRevenue": 0.05,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "Frontier safety lab creator of Claude 3.5 Sonnet and Computer Use; backed by multi-billion commitments from Amazon & Google.",
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
        "desc": "Elon Musk’s AI frontier initiative operating the world’s largest 100k+ liquid-cooled Colossus supercluster in Memphis.",
        "initialX": 75,
        "initialY": 45
      },
      {
        "id": "deepseek",
        "name": "DeepSeek",
        "category": "ai_lab",
        "marketCap": 0,
        "aiCapex": 0,
        "aiRevenue": 0,
        "isFormed": false,
        "isHighGrowth": false,
        "desc": "Pioneered extreme algorithmic efficiency and low-cost open reasoning models (DeepSeek-V3 & R1) disrupting capex intensity.",
        "initialX": -75,
        "initialY": 45
      },
      {
        "id": "coreweave",
        "name": "CoreWeave",
        "category": "neocloud",
        "marketCap": 3.5,
        "aiCapex": 0.5,
        "aiRevenue": 0.1,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "Pioneer of GPU-collateralized debt financing ($2.3B in 2023, $7.5B in 2024), scaling specialized Neocloud infrastructure.",
        "initialX": 0,
        "initialY": 85
      },
      {
        "id": "vc_sovereign",
        "name": "VC & Sovereign Funds",
        "category": "venture_capital",
        "marketCap": 500,
        "aiCapex": 0,
        "aiRevenue": 0,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "Global venture syndicates (Sequoia, a16z, Thrive, SoftBank) and sovereign wealth funds (MGX, PIF) funding mega-rounds.",
        "initialX": 220,
        "initialY": 155
      },
      {
        "id": "end_market",
        "name": "Enterprise & End Users",
        "category": "end_market",
        "marketCap": 1200,
        "aiCapex": 0,
        "aiRevenue": 1.2,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "Real-world corporate IT budgets, developer API billing, and consumer subscriptions representing verified software revenue.",
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
        "desc": "2023 Q2: Microsoft allocates $3.6B to procure NVIDIA accelerator server clusters for Azure AI."
      },
      {
        "id": "goog_nvda_gpu",
        "source": "goog",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 2.6,
        "desc": "2023 Q2: Google deploys $2.6B for NVIDIA GPU clusters alongside custom TPU silicon."
      },
      {
        "id": "amzn_nvda_gpu",
        "source": "amzn",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 2.8,
        "desc": "2023 Q2: Amazon AWS purchases $2.8B in NVIDIA GPUs for scalable UltraClusters."
      },
      {
        "id": "meta_nvda_gpu",
        "source": "meta",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 2.5,
        "desc": "2023 Q2: Meta allocates $2.5B to NVIDIA GPUs for next-gen LLaMA model clusters."
      },
      {
        "id": "nvda_tsmc_gpu",
        "source": "nvda",
        "target": "tsmc",
        "flowType": "gpu_purchase",
        "amount": 2.8,
        "desc": "2023 Q2: NVIDIA awards TSMC $2.8B for leading-edge wafer allocation and CoWoS packaging."
      },
      {
        "id": "nvda_skhynix_hbm",
        "source": "nvda",
        "target": "skhynix",
        "flowType": "hbm_purchase",
        "amount": 1.2,
        "desc": "2023 Q2: NVIDIA procures $1.2B of exclusive HBM memory stacks from SK Hynix."
      },
      {
        "id": "nvda_samsung_hbm",
        "source": "nvda",
        "target": "samsung",
        "flowType": "hbm_purchase",
        "amount": 0.4,
        "desc": "2023 Q2: NVIDIA secures $0.4B in advanced HBM and memory supply from Samsung Electronics."
      },
      {
        "id": "tsmc_asml_equip",
        "source": "tsmc",
        "target": "asml",
        "flowType": "equipment_purchase",
        "amount": 1.6,
        "desc": "2023 Q2: TSMC invests $1.6B in ASML EUV and High-NA lithography scanners."
      },
      {
        "id": "samsung_asml_equip",
        "source": "samsung",
        "target": "asml",
        "flowType": "equipment_purchase",
        "amount": 1.2,
        "desc": "2023 Q2: Samsung Electronics commits $1.2B for ASML EUV scanners."
      },
      {
        "id": "skhynix_asml_equip",
        "source": "skhynix",
        "target": "asml",
        "flowType": "equipment_purchase",
        "amount": 0.7,
        "desc": "2023 Q2: SK Hynix procures $0.7B of ASML EUV systems for HBM DRAM production."
      },
      {
        "id": "goog_avgo_gpu",
        "source": "goog",
        "target": "avgo",
        "flowType": "gpu_purchase",
        "amount": 0.8,
        "desc": "2023 Q2: Google pays Broadcom $0.8B for custom TPU ASIC co-design and optical interconnects."
      },
      {
        "id": "meta_avgo_gpu",
        "source": "meta",
        "target": "avgo",
        "flowType": "gpu_purchase",
        "amount": 0.5,
        "desc": "2023 Q2: Meta allocates $0.5B to Broadcom for MTIA proprietary accelerator silicon design."
      },
      {
        "id": "msft_openai_credit",
        "source": "msft",
        "target": "openai",
        "flowType": "cloud_credit",
        "amount": 2.2,
        "desc": "2023 Q2: Microsoft supplies OpenAI with $2.2B in Azure compute credits and dedicated infrastructure."
      },
      {
        "id": "openai_msft_spend",
        "source": "openai",
        "target": "msft",
        "flowType": "cloud_credit",
        "amount": 0.5,
        "desc": "2023 Q2: OpenAI spends $0.5B in hosting fees and compute consumption paid directly to Microsoft Azure."
      },
      {
        "id": "amzn_anthropic_equity",
        "source": "amzn",
        "target": "anthropic",
        "flowType": "equity_investment",
        "amount": 0,
        "desc": "2023 Q2: Operating under active cloud agreement; no new primary equity capital call."
      },
      {
        "id": "anthropic_amzn_spend",
        "source": "anthropic",
        "target": "amzn",
        "flowType": "cloud_credit",
        "amount": 0,
        "desc": "2023 Q2: Inactive or concluded channel for this period."
      },
      {
        "id": "goog_anthropic_equity",
        "source": "goog",
        "target": "anthropic",
        "flowType": "equity_investment",
        "amount": 0,
        "desc": "2023 Q2: Partnership active; no secondary equity injection in this period."
      },
      {
        "id": "vc_coreweave_debt",
        "source": "vc_sovereign",
        "target": "coreweave",
        "flowType": "debt_collateral",
        "amount": 0,
        "desc": "2023 Q2: Previous GPU debt facility drawn down; no new private debt tranche active."
      },
      {
        "id": "coreweave_nvda_gpu",
        "source": "coreweave",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 0.4,
        "desc": "2023 Q2: CoreWeave purchases $0.4B of NVIDIA GPUs to expand its AI cloud cluster fleet."
      },
      {
        "id": "nvda_coreweave_equity",
        "source": "nvda",
        "target": "coreweave",
        "flowType": "equity_investment",
        "amount": 0.1,
        "desc": "2023 Q2: NVIDIA invests $0.1B strategic equity into Neocloud partner CoreWeave."
      },
      {
        "id": "coreweave_vc_refinance",
        "source": "coreweave",
        "target": "vc_sovereign",
        "flowType": "debt_collateral",
        "amount": 0,
        "desc": "2023 Q2: Inactive or concluded channel for this period."
      },
      {
        "id": "vc_openai_equity",
        "source": "vc_sovereign",
        "target": "openai",
        "flowType": "equity_investment",
        "amount": 0,
        "desc": "2023 Q2: Operating on existing treasury; no primary mega equity financing tranche active."
      },
      {
        "id": "xai_nvda_gpu",
        "source": "xai",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 0,
        "desc": "2023 Q2: Inactive or concluded channel for this period."
      },
      {
        "id": "skhynix_tsmc_foundry",
        "source": "skhynix",
        "target": "tsmc",
        "flowType": "gpu_purchase",
        "amount": 0,
        "desc": "2023 Q2: Inactive or concluded channel for this period."
      },
      {
        "id": "market_openai_rev",
        "source": "end_market",
        "target": "openai",
        "flowType": "enterprise_revenue",
        "amount": 0.35,
        "desc": "2023 Q2: Enterprises and users generate $0.35B in verified OpenAI software and API revenue."
      },
      {
        "id": "market_msft_rev",
        "source": "end_market",
        "target": "msft",
        "flowType": "enterprise_revenue",
        "amount": 0.75,
        "desc": "2023 Q2: Enterprise clients deliver $0.75B in Microsoft commercial AI revenue."
      },
      {
        "id": "market_anthropic_rev",
        "source": "end_market",
        "target": "anthropic",
        "flowType": "enterprise_revenue",
        "amount": 0,
        "desc": "2023 Q2: Inactive or concluded channel for this period."
      },
      {
        "id": "market_deepseek_rev",
        "source": "end_market",
        "target": "deepseek",
        "flowType": "enterprise_revenue",
        "amount": 0,
        "desc": "2023 Q2: Inactive or concluded channel for this period."
      }
    ]
  },
  {
    "periodId": "2023-Q3",
    "year": 2023,
    "quarter": 3,
    "label": "2023 Q3",
    "dateRange": "Jul - Sep 2023",
    "title": "2023 Q3: Rise of Neocloud GPU Debt & Amazon-Anthropic Alliance",
    "summary": "CoreWeave raises $2.3B in debt from Blackstone and Magnetar collateralized entirely by NVIDIA H100 GPUs. Amazon commits up to $4B to Anthropic, securing AWS as its primary cloud and Trainium customer. The circular financing loop deepens.",
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
        "name": "Microsoft",
        "category": "hyperscaler",
        "marketCap": 2350,
        "aiCapex": 8.9,
        "aiRevenue": 0.7,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "World cloud leader, strategic backer of OpenAI with Azure exclusive integration, developer of Maia AI ASICs.",
        "initialX": -140,
        "initialY": -130
      },
      {
        "id": "goog",
        "name": "Alphabet / Google",
        "category": "hyperscaler",
        "marketCap": 1650,
        "aiCapex": 8.1,
        "aiRevenue": 0.45,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "Pioneer of Transformer architecture; custom TPU v4/v5/v6 silicon with Google DeepMind & Gemini.",
        "initialX": -185,
        "initialY": 5
      },
      {
        "id": "amzn",
        "name": "Amazon / AWS",
        "category": "hyperscaler",
        "marketCap": 1340,
        "aiCapex": 8,
        "aiRevenue": 0.35,
        "isFormed": true,
        "isHighGrowth": true,
        "desc": "World’s largest cloud provider (AWS), key investor in Anthropic ($4B), developing Trainium2 & Inferentia.",
        "initialX": 140,
        "initialY": -130
      },
      {
        "id": "meta",
        "name": "Meta Platforms",
        "category": "hyperscaler",
        "marketCap": 780,
        "aiCapex": 6.8,
        "aiRevenue": 0.2,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "Open-source frontier AI champion (LLaMA series), massive GPU cluster operator, MTIA custom silicon.",
        "initialX": 185,
        "initialY": 5
      },
      {
        "id": "nvda",
        "name": "NVIDIA",
        "category": "chipmaker",
        "marketCap": 1100,
        "aiCapex": 0.9,
        "aiRevenue": 14.5,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "Global GPU monopoly (A100/H100/B200/Rubin) and proprietary CUDA software moat capturing 75%+ gross margins.",
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
        "desc": "World’s exclusive pure-play foundry and CoWoS advanced packaging monopoly powering all advanced AI accelerators.",
        "initialX": -130,
        "initialY": 190
      },
      {
        "id": "avgo",
        "name": "Broadcom",
        "category": "chipmaker",
        "marketCap": 340,
        "aiCapex": 0.3,
        "aiRevenue": 2.3,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "Leader in custom AI ASICs (Google TPU, Meta MTIA) and high-speed Tomahawk/Jericho AI networking fabrics.",
        "initialX": -215,
        "initialY": 115
      },
      {
        "id": "skhynix",
        "name": "SK Hynix",
        "category": "semiconductor_supply",
        "marketCap": 60,
        "aiCapex": 1.7,
        "aiRevenue": 1.7,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "World’s undisputed leader in High Bandwidth Memory (HBM3, HBM3E, HBM4), primary memory supplier to NVIDIA.",
        "initialX": -20,
        "initialY": -210
      },
      {
        "id": "samsung",
        "name": "Samsung Electronics",
        "category": "semiconductor_supply",
        "marketCap": 345,
        "aiCapex": 8.8,
        "aiRevenue": 1.7,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "World’s largest memory semiconductor producer, pioneer of 12-layer HBM3E and turnkey foundry/memory solutions.",
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
        "desc": "Monopoly provider of EUV and High-NA EUV lithography equipment essential for 3nm/2nm advanced semiconductor nodes.",
        "initialX": 20,
        "initialY": 235
      },
      {
        "id": "openai",
        "name": "OpenAI",
        "category": "ai_lab",
        "marketCap": 65,
        "aiCapex": 0.7,
        "aiRevenue": 0.5,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "Frontier AI lab creator of ChatGPT, GPT-4, and o1 reasoning models; key partner in the $100B Stargate campus.",
        "initialX": -60,
        "initialY": -55
      },
      {
        "id": "anthropic",
        "name": "Anthropic",
        "category": "ai_lab",
        "marketCap": 14,
        "aiCapex": 0.3,
        "aiRevenue": 0.08,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "Frontier safety lab creator of Claude 3.5 Sonnet and Computer Use; backed by multi-billion commitments from Amazon & Google.",
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
        "desc": "Elon Musk’s AI frontier initiative operating the world’s largest 100k+ liquid-cooled Colossus supercluster in Memphis.",
        "initialX": 75,
        "initialY": 45
      },
      {
        "id": "deepseek",
        "name": "DeepSeek",
        "category": "ai_lab",
        "marketCap": 3,
        "aiCapex": 0.1,
        "aiRevenue": 0.03,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "Pioneered extreme algorithmic efficiency and low-cost open reasoning models (DeepSeek-V3 & R1) disrupting capex intensity.",
        "initialX": -75,
        "initialY": 45
      },
      {
        "id": "coreweave",
        "name": "CoreWeave",
        "category": "neocloud",
        "marketCap": 5.5,
        "aiCapex": 1.2,
        "aiRevenue": 0.15,
        "isFormed": true,
        "isHighGrowth": true,
        "desc": "Pioneer of GPU-collateralized debt financing ($2.3B in 2023, $7.5B in 2024), scaling specialized Neocloud infrastructure.",
        "initialX": 0,
        "initialY": 85
      },
      {
        "id": "vc_sovereign",
        "name": "VC & Sovereign Funds",
        "category": "venture_capital",
        "marketCap": 500,
        "aiCapex": 0,
        "aiRevenue": 0,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "Global venture syndicates (Sequoia, a16z, Thrive, SoftBank) and sovereign wealth funds (MGX, PIF) funding mega-rounds.",
        "initialX": 220,
        "initialY": 155
      },
      {
        "id": "end_market",
        "name": "Enterprise & End Users",
        "category": "end_market",
        "marketCap": 1200,
        "aiCapex": 0,
        "aiRevenue": 1.6,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "Real-world corporate IT budgets, developer API billing, and consumer subscriptions representing verified software revenue.",
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
        "desc": "2023 Q3: Microsoft allocates $3.8B to procure NVIDIA accelerator server clusters for Azure AI."
      },
      {
        "id": "goog_nvda_gpu",
        "source": "goog",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 2.8,
        "desc": "2023 Q3: Google deploys $2.8B for NVIDIA GPU clusters alongside custom TPU silicon."
      },
      {
        "id": "amzn_nvda_gpu",
        "source": "amzn",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 3,
        "desc": "2023 Q3: Amazon AWS purchases $3B in NVIDIA GPUs for scalable UltraClusters."
      },
      {
        "id": "meta_nvda_gpu",
        "source": "meta",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 2.7,
        "desc": "2023 Q3: Meta allocates $2.7B to NVIDIA GPUs for next-gen LLaMA model clusters."
      },
      {
        "id": "nvda_tsmc_gpu",
        "source": "nvda",
        "target": "tsmc",
        "flowType": "gpu_purchase",
        "amount": 3.2,
        "desc": "2023 Q3: NVIDIA awards TSMC $3.2B for leading-edge wafer allocation and CoWoS packaging."
      },
      {
        "id": "nvda_skhynix_hbm",
        "source": "nvda",
        "target": "skhynix",
        "flowType": "hbm_purchase",
        "amount": 1.6,
        "desc": "2023 Q3: NVIDIA procures $1.6B of exclusive HBM memory stacks from SK Hynix."
      },
      {
        "id": "nvda_samsung_hbm",
        "source": "nvda",
        "target": "samsung",
        "flowType": "hbm_purchase",
        "amount": 0.5,
        "desc": "2023 Q3: NVIDIA secures $0.5B in advanced HBM and memory supply from Samsung Electronics."
      },
      {
        "id": "tsmc_asml_equip",
        "source": "tsmc",
        "target": "asml",
        "flowType": "equipment_purchase",
        "amount": 1.7,
        "desc": "2023 Q3: TSMC invests $1.7B in ASML EUV and High-NA lithography scanners."
      },
      {
        "id": "samsung_asml_equip",
        "source": "samsung",
        "target": "asml",
        "flowType": "equipment_purchase",
        "amount": 1.2,
        "desc": "2023 Q3: Samsung Electronics commits $1.2B for ASML EUV scanners."
      },
      {
        "id": "skhynix_asml_equip",
        "source": "skhynix",
        "target": "asml",
        "flowType": "equipment_purchase",
        "amount": 0.7,
        "desc": "2023 Q3: SK Hynix procures $0.7B of ASML EUV systems for HBM DRAM production."
      },
      {
        "id": "goog_avgo_gpu",
        "source": "goog",
        "target": "avgo",
        "flowType": "gpu_purchase",
        "amount": 0.8,
        "desc": "2023 Q3: Google pays Broadcom $0.8B for custom TPU ASIC co-design and optical interconnects."
      },
      {
        "id": "meta_avgo_gpu",
        "source": "meta",
        "target": "avgo",
        "flowType": "gpu_purchase",
        "amount": 0.6,
        "desc": "2023 Q3: Meta allocates $0.6B to Broadcom for MTIA proprietary accelerator silicon design."
      },
      {
        "id": "msft_openai_credit",
        "source": "msft",
        "target": "openai",
        "flowType": "cloud_credit",
        "amount": 2,
        "desc": "2023 Q3: Microsoft supplies OpenAI with $2B in Azure compute credits and dedicated infrastructure."
      },
      {
        "id": "openai_msft_spend",
        "source": "openai",
        "target": "msft",
        "flowType": "cloud_credit",
        "amount": 0.7,
        "desc": "2023 Q3: OpenAI spends $0.7B in hosting fees and compute consumption paid directly to Microsoft Azure."
      },
      {
        "id": "amzn_anthropic_equity",
        "source": "amzn",
        "target": "anthropic",
        "flowType": "equity_investment",
        "amount": 1.25,
        "desc": "2023 Q3: Amazon executes a strategic growth capital tranche of $1.25B into Anthropic."
      },
      {
        "id": "anthropic_amzn_spend",
        "source": "anthropic",
        "target": "amzn",
        "flowType": "cloud_credit",
        "amount": 0.4,
        "desc": "2023 Q3: Anthropic pays $0.4B to AWS for Bedrock compute clusters and Trainium workloads."
      },
      {
        "id": "goog_anthropic_equity",
        "source": "goog",
        "target": "anthropic",
        "flowType": "equity_investment",
        "amount": 0,
        "desc": "2023 Q3: Partnership active; no secondary equity injection in this period."
      },
      {
        "id": "vc_coreweave_debt",
        "source": "vc_sovereign",
        "target": "coreweave",
        "flowType": "debt_collateral",
        "amount": 2.3,
        "desc": "2023 Q3: Private debt syndicate (Blackstone, Magnetar) provides $2.3B loan collateralized by GPUs."
      },
      {
        "id": "coreweave_nvda_gpu",
        "source": "coreweave",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 2.1,
        "desc": "2023 Q3: CoreWeave purchases $2.1B of NVIDIA GPUs to expand its AI cloud cluster fleet."
      },
      {
        "id": "nvda_coreweave_equity",
        "source": "nvda",
        "target": "coreweave",
        "flowType": "equity_investment",
        "amount": 0,
        "desc": "2023 Q3: Strategic partnership active; no incremental equity transaction this period."
      },
      {
        "id": "coreweave_vc_refinance",
        "source": "coreweave",
        "target": "vc_sovereign",
        "flowType": "debt_collateral",
        "amount": 0,
        "desc": "2023 Q3: Inactive or concluded channel for this period."
      },
      {
        "id": "vc_openai_equity",
        "source": "vc_sovereign",
        "target": "openai",
        "flowType": "equity_investment",
        "amount": 0,
        "desc": "2023 Q3: Operating on existing treasury; no primary mega equity financing tranche active."
      },
      {
        "id": "xai_nvda_gpu",
        "source": "xai",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 0,
        "desc": "2023 Q3: Inactive or concluded channel for this period."
      },
      {
        "id": "skhynix_tsmc_foundry",
        "source": "skhynix",
        "target": "tsmc",
        "flowType": "gpu_purchase",
        "amount": 0,
        "desc": "2023 Q3: Inactive or concluded channel for this period."
      },
      {
        "id": "market_openai_rev",
        "source": "end_market",
        "target": "openai",
        "flowType": "enterprise_revenue",
        "amount": 0.5,
        "desc": "2023 Q3: Enterprises and users generate $0.5B in verified OpenAI software and API revenue."
      },
      {
        "id": "market_msft_rev",
        "source": "end_market",
        "target": "msft",
        "flowType": "enterprise_revenue",
        "amount": 1,
        "desc": "2023 Q3: Enterprise clients deliver $1B in Microsoft commercial AI revenue."
      },
      {
        "id": "market_anthropic_rev",
        "source": "end_market",
        "target": "anthropic",
        "flowType": "enterprise_revenue",
        "amount": 0.08,
        "desc": "2023 Q3: Enterprise software clients generate $0.08B in Claude API token billing revenue."
      },
      {
        "id": "market_deepseek_rev",
        "source": "end_market",
        "target": "deepseek",
        "flowType": "enterprise_revenue",
        "amount": 0.03,
        "desc": "2023 Q3: DeepSeek generates $0.03B in low-cost high-efficiency reasoning API token revenue."
      }
    ]
  },
  {
    "periodId": "2023-Q4",
    "year": 2023,
    "quarter": 4,
    "label": "2023 Q4",
    "dateRange": "Oct - Dec 2023",
    "title": "2023 Q4: Frontier Lab Turmoil & CoWoS Packaging Peak Bottleneck",
    "summary": "Sam Altman is fired and reinstated at OpenAI within 5 days; Microsoft secures an observer seat. Google announces Gemini 1.0. SK Hynix records a dramatic turnaround to memory operating profit driven entirely by HBM3 pricing power. ASML delivers the world’s first High-NA EUV system.",
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
        "name": "Microsoft",
        "category": "hyperscaler",
        "marketCap": 2790,
        "aiCapex": 9.7,
        "aiRevenue": 0.9,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "World cloud leader, strategic backer of OpenAI with Azure exclusive integration, developer of Maia AI ASICs.",
        "initialX": -140,
        "initialY": -130
      },
      {
        "id": "goog",
        "name": "Alphabet / Google",
        "category": "hyperscaler",
        "marketCap": 1760,
        "aiCapex": 11,
        "aiRevenue": 0.6,
        "isFormed": true,
        "isHighGrowth": true,
        "desc": "Pioneer of Transformer architecture; custom TPU v4/v5/v6 silicon with Google DeepMind & Gemini.",
        "initialX": -185,
        "initialY": 5
      },
      {
        "id": "amzn",
        "name": "Amazon / AWS",
        "category": "hyperscaler",
        "marketCap": 1570,
        "aiCapex": 8.8,
        "aiRevenue": 0.45,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "World’s largest cloud provider (AWS), key investor in Anthropic ($4B), developing Trainium2 & Inferentia.",
        "initialX": 140,
        "initialY": -130
      },
      {
        "id": "meta",
        "name": "Meta Platforms",
        "category": "hyperscaler",
        "marketCap": 910,
        "aiCapex": 7.9,
        "aiRevenue": 0.25,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "Open-source frontier AI champion (LLaMA series), massive GPU cluster operator, MTIA custom silicon.",
        "initialX": 185,
        "initialY": 5
      },
      {
        "id": "nvda",
        "name": "NVIDIA",
        "category": "chipmaker",
        "marketCap": 1220,
        "aiCapex": 1,
        "aiRevenue": 18.4,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "Global GPU monopoly (A100/H100/B200/Rubin) and proprietary CUDA software moat capturing 75%+ gross margins.",
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
        "desc": "World’s exclusive pure-play foundry and CoWoS advanced packaging monopoly powering all advanced AI accelerators.",
        "initialX": -130,
        "initialY": 190
      },
      {
        "id": "avgo",
        "name": "Broadcom",
        "category": "chipmaker",
        "marketCap": 520,
        "aiCapex": 0.35,
        "aiRevenue": 2.6,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "Leader in custom AI ASICs (Google TPU, Meta MTIA) and high-speed Tomahawk/Jericho AI networking fabrics.",
        "initialX": -215,
        "initialY": 115
      },
      {
        "id": "skhynix",
        "name": "SK Hynix",
        "category": "semiconductor_supply",
        "marketCap": 75,
        "aiCapex": 1.9,
        "aiRevenue": 2.1,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "World’s undisputed leader in High Bandwidth Memory (HBM3, HBM3E, HBM4), primary memory supplier to NVIDIA.",
        "initialX": -20,
        "initialY": -210
      },
      {
        "id": "samsung",
        "name": "Samsung Electronics",
        "category": "semiconductor_supply",
        "marketCap": 380,
        "aiCapex": 9.2,
        "aiRevenue": 2,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "World’s largest memory semiconductor producer, pioneer of 12-layer HBM3E and turnkey foundry/memory solutions.",
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
        "desc": "Monopoly provider of EUV and High-NA EUV lithography equipment essential for 3nm/2nm advanced semiconductor nodes.",
        "initialX": 20,
        "initialY": 235
      },
      {
        "id": "openai",
        "name": "OpenAI",
        "category": "ai_lab",
        "marketCap": 86,
        "aiCapex": 0.9,
        "aiRevenue": 0.7,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "Frontier AI lab creator of ChatGPT, GPT-4, and o1 reasoning models; key partner in the $100B Stargate campus.",
        "initialX": -60,
        "initialY": -55
      },
      {
        "id": "anthropic",
        "name": "Anthropic",
        "category": "ai_lab",
        "marketCap": 18,
        "aiCapex": 0.4,
        "aiRevenue": 0.1,
        "isFormed": true,
        "isHighGrowth": true,
        "desc": "Frontier safety lab creator of Claude 3.5 Sonnet and Computer Use; backed by multi-billion commitments from Amazon & Google.",
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
        "desc": "Elon Musk’s AI frontier initiative operating the world’s largest 100k+ liquid-cooled Colossus supercluster in Memphis.",
        "initialX": 75,
        "initialY": 45
      },
      {
        "id": "deepseek",
        "name": "DeepSeek",
        "category": "ai_lab",
        "marketCap": 4.5,
        "aiCapex": 0.15,
        "aiRevenue": 0.04,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "Pioneered extreme algorithmic efficiency and low-cost open reasoning models (DeepSeek-V3 & R1) disrupting capex intensity.",
        "initialX": -75,
        "initialY": 45
      },
      {
        "id": "coreweave",
        "name": "CoreWeave",
        "category": "neocloud",
        "marketCap": 7,
        "aiCapex": 1.5,
        "aiRevenue": 0.25,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "Pioneer of GPU-collateralized debt financing ($2.3B in 2023, $7.5B in 2024), scaling specialized Neocloud infrastructure.",
        "initialX": 0,
        "initialY": 85
      },
      {
        "id": "vc_sovereign",
        "name": "VC & Sovereign Funds",
        "category": "venture_capital",
        "marketCap": 500,
        "aiCapex": 0,
        "aiRevenue": 0,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "Global venture syndicates (Sequoia, a16z, Thrive, SoftBank) and sovereign wealth funds (MGX, PIF) funding mega-rounds.",
        "initialX": 220,
        "initialY": 155
      },
      {
        "id": "end_market",
        "name": "Enterprise & End Users",
        "category": "end_market",
        "marketCap": 1200,
        "aiCapex": 0,
        "aiRevenue": 2.2,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "Real-world corporate IT budgets, developer API billing, and consumer subscriptions representing verified software revenue.",
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
        "desc": "2023 Q4: Microsoft allocates $4.4B to procure NVIDIA accelerator server clusters for Azure AI."
      },
      {
        "id": "goog_nvda_gpu",
        "source": "goog",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 3.2,
        "desc": "2023 Q4: Google deploys $3.2B for NVIDIA GPU clusters alongside custom TPU silicon."
      },
      {
        "id": "amzn_nvda_gpu",
        "source": "amzn",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 3.6,
        "desc": "2023 Q4: Amazon AWS purchases $3.6B in NVIDIA GPUs for scalable UltraClusters."
      },
      {
        "id": "meta_nvda_gpu",
        "source": "meta",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 3.4,
        "desc": "2023 Q4: Meta allocates $3.4B to NVIDIA GPUs for next-gen LLaMA model clusters."
      },
      {
        "id": "nvda_tsmc_gpu",
        "source": "nvda",
        "target": "tsmc",
        "flowType": "gpu_purchase",
        "amount": 3.8,
        "desc": "2023 Q4: NVIDIA awards TSMC $3.8B for leading-edge wafer allocation and CoWoS packaging."
      },
      {
        "id": "nvda_skhynix_hbm",
        "source": "nvda",
        "target": "skhynix",
        "flowType": "hbm_purchase",
        "amount": 2,
        "desc": "2023 Q4: NVIDIA procures $2B of exclusive HBM memory stacks from SK Hynix."
      },
      {
        "id": "nvda_samsung_hbm",
        "source": "nvda",
        "target": "samsung",
        "flowType": "hbm_purchase",
        "amount": 0.7,
        "desc": "2023 Q4: NVIDIA secures $0.7B in advanced HBM and memory supply from Samsung Electronics."
      },
      {
        "id": "tsmc_asml_equip",
        "source": "tsmc",
        "target": "asml",
        "flowType": "equipment_purchase",
        "amount": 1.8,
        "desc": "2023 Q4: TSMC invests $1.8B in ASML EUV and High-NA lithography scanners."
      },
      {
        "id": "samsung_asml_equip",
        "source": "samsung",
        "target": "asml",
        "flowType": "equipment_purchase",
        "amount": 1.3,
        "desc": "2023 Q4: Samsung Electronics commits $1.3B for ASML EUV scanners."
      },
      {
        "id": "skhynix_asml_equip",
        "source": "skhynix",
        "target": "asml",
        "flowType": "equipment_purchase",
        "amount": 0.8,
        "desc": "2023 Q4: SK Hynix procures $0.8B of ASML EUV systems for HBM DRAM production."
      },
      {
        "id": "goog_avgo_gpu",
        "source": "goog",
        "target": "avgo",
        "flowType": "gpu_purchase",
        "amount": 1,
        "desc": "2023 Q4: Google pays Broadcom $1B for custom TPU ASIC co-design and optical interconnects."
      },
      {
        "id": "meta_avgo_gpu",
        "source": "meta",
        "target": "avgo",
        "flowType": "gpu_purchase",
        "amount": 0.8,
        "desc": "2023 Q4: Meta allocates $0.8B to Broadcom for MTIA proprietary accelerator silicon design."
      },
      {
        "id": "msft_openai_credit",
        "source": "msft",
        "target": "openai",
        "flowType": "cloud_credit",
        "amount": 2.5,
        "desc": "2023 Q4: Microsoft supplies OpenAI with $2.5B in Azure compute credits and dedicated infrastructure."
      },
      {
        "id": "openai_msft_spend",
        "source": "openai",
        "target": "msft",
        "flowType": "cloud_credit",
        "amount": 0.95,
        "desc": "2023 Q4: OpenAI spends $0.95B in hosting fees and compute consumption paid directly to Microsoft Azure."
      },
      {
        "id": "amzn_anthropic_equity",
        "source": "amzn",
        "target": "anthropic",
        "flowType": "equity_investment",
        "amount": 0,
        "desc": "2023 Q4: Operating under active cloud agreement; no new primary equity capital call."
      },
      {
        "id": "anthropic_amzn_spend",
        "source": "anthropic",
        "target": "amzn",
        "flowType": "cloud_credit",
        "amount": 0.6,
        "desc": "2023 Q4: Anthropic pays $0.6B to AWS for Bedrock compute clusters and Trainium workloads."
      },
      {
        "id": "goog_anthropic_equity",
        "source": "goog",
        "target": "anthropic",
        "flowType": "equity_investment",
        "amount": 2,
        "desc": "2023 Q4: Google injects $2B strategic growth equity into Anthropic alongside GCP partnership."
      },
      {
        "id": "vc_coreweave_debt",
        "source": "vc_sovereign",
        "target": "coreweave",
        "flowType": "debt_collateral",
        "amount": 0,
        "desc": "2023 Q4: Previous GPU debt facility drawn down; no new private debt tranche active."
      },
      {
        "id": "coreweave_nvda_gpu",
        "source": "coreweave",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 2.5,
        "desc": "2023 Q4: CoreWeave purchases $2.5B of NVIDIA GPUs to expand its AI cloud cluster fleet."
      },
      {
        "id": "nvda_coreweave_equity",
        "source": "nvda",
        "target": "coreweave",
        "flowType": "equity_investment",
        "amount": 0,
        "desc": "2023 Q4: Strategic partnership active; no incremental equity transaction this period."
      },
      {
        "id": "coreweave_vc_refinance",
        "source": "coreweave",
        "target": "vc_sovereign",
        "flowType": "debt_collateral",
        "amount": 0,
        "desc": "2023 Q4: Inactive or concluded channel for this period."
      },
      {
        "id": "vc_openai_equity",
        "source": "vc_sovereign",
        "target": "openai",
        "flowType": "equity_investment",
        "amount": 0,
        "desc": "2023 Q4: Operating on existing treasury; no primary mega equity financing tranche active."
      },
      {
        "id": "xai_nvda_gpu",
        "source": "xai",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 0.2,
        "desc": "2023 Q4: xAI purchases $0.2B of NVIDIA liquid-cooled GPUs for the Memphis Colossus supercluster."
      },
      {
        "id": "skhynix_tsmc_foundry",
        "source": "skhynix",
        "target": "tsmc",
        "flowType": "gpu_purchase",
        "amount": 0,
        "desc": "2023 Q4: Inactive or concluded channel for this period."
      },
      {
        "id": "market_openai_rev",
        "source": "end_market",
        "target": "openai",
        "flowType": "enterprise_revenue",
        "amount": 0.7,
        "desc": "2023 Q4: Enterprises and users generate $0.7B in verified OpenAI software and API revenue."
      },
      {
        "id": "market_msft_rev",
        "source": "end_market",
        "target": "msft",
        "flowType": "enterprise_revenue",
        "amount": 1.3,
        "desc": "2023 Q4: Enterprise clients deliver $1.3B in Microsoft commercial AI revenue."
      },
      {
        "id": "market_anthropic_rev",
        "source": "end_market",
        "target": "anthropic",
        "flowType": "enterprise_revenue",
        "amount": 0.15,
        "desc": "2023 Q4: Enterprise software clients generate $0.15B in Claude API token billing revenue."
      },
      {
        "id": "market_deepseek_rev",
        "source": "end_market",
        "target": "deepseek",
        "flowType": "enterprise_revenue",
        "amount": 0.04,
        "desc": "2023 Q4: DeepSeek generates $0.04B in low-cost high-efficiency reasoning API token revenue."
      }
    ]
  },
  {
    "periodId": "2024-Q1",
    "year": 2024,
    "quarter": 1,
    "label": "2024 Q1",
    "dateRange": "Jan - Mar 2024",
    "title": "2024 Q1: Blackwell B200 Revealed & Samsung’s 12-Hi HBM3E Strike",
    "summary": "NVIDIA GTC 2024 unveils the Blackwell B200 GPU with 208B transistors. Mark Zuckerberg reveals Meta will accumulate 350,000 H100s. Samsung announces the world’s first 12-layer 36GB HBM3E. Broadcom’s AI networking and custom ASIC revenue surges +280% on Google TPU demand.",
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
        "name": "Microsoft",
        "category": "hyperscaler",
        "marketCap": 3120,
        "aiCapex": 11.5,
        "aiRevenue": 1.2,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "World cloud leader, strategic backer of OpenAI with Azure exclusive integration, developer of Maia AI ASICs.",
        "initialX": -140,
        "initialY": -130
      },
      {
        "id": "goog",
        "name": "Alphabet / Google",
        "category": "hyperscaler",
        "marketCap": 1910,
        "aiCapex": 12,
        "aiRevenue": 0.9,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "Pioneer of Transformer architecture; custom TPU v4/v5/v6 silicon with Google DeepMind & Gemini.",
        "initialX": -185,
        "initialY": 5
      },
      {
        "id": "amzn",
        "name": "Amazon / AWS",
        "category": "hyperscaler",
        "marketCap": 1870,
        "aiCapex": 13,
        "aiRevenue": 0.7,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "World’s largest cloud provider (AWS), key investor in Anthropic ($4B), developing Trainium2 & Inferentia.",
        "initialX": 140,
        "initialY": -130
      },
      {
        "id": "meta",
        "name": "Meta Platforms",
        "category": "hyperscaler",
        "marketCap": 1250,
        "aiCapex": 9,
        "aiRevenue": 0.4,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "Open-source frontier AI champion (LLaMA series), massive GPU cluster operator, MTIA custom silicon.",
        "initialX": 185,
        "initialY": 5
      },
      {
        "id": "nvda",
        "name": "NVIDIA",
        "category": "chipmaker",
        "marketCap": 2250,
        "aiCapex": 1.1,
        "aiRevenue": 22.6,
        "isFormed": true,
        "isHighGrowth": true,
        "desc": "Global GPU monopoly (A100/H100/B200/Rubin) and proprietary CUDA software moat capturing 75%+ gross margins.",
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
        "desc": "World’s exclusive pure-play foundry and CoWoS advanced packaging monopoly powering all advanced AI accelerators.",
        "initialX": -130,
        "initialY": 190
      },
      {
        "id": "avgo",
        "name": "Broadcom",
        "category": "chipmaker",
        "marketCap": 610,
        "aiCapex": 0.4,
        "aiRevenue": 3.1,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "Leader in custom AI ASICs (Google TPU, Meta MTIA) and high-speed Tomahawk/Jericho AI networking fabrics.",
        "initialX": -215,
        "initialY": 115
      },
      {
        "id": "skhynix",
        "name": "SK Hynix",
        "category": "semiconductor_supply",
        "marketCap": 95,
        "aiCapex": 2.2,
        "aiRevenue": 2.8,
        "isFormed": true,
        "isHighGrowth": true,
        "desc": "World’s undisputed leader in High Bandwidth Memory (HBM3, HBM3E, HBM4), primary memory supplier to NVIDIA.",
        "initialX": -20,
        "initialY": -210
      },
      {
        "id": "samsung",
        "name": "Samsung Electronics",
        "category": "semiconductor_supply",
        "marketCap": 410,
        "aiCapex": 9.5,
        "aiRevenue": 2.4,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "World’s largest memory semiconductor producer, pioneer of 12-layer HBM3E and turnkey foundry/memory solutions.",
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
        "desc": "Monopoly provider of EUV and High-NA EUV lithography equipment essential for 3nm/2nm advanced semiconductor nodes.",
        "initialX": 20,
        "initialY": 235
      },
      {
        "id": "openai",
        "name": "OpenAI",
        "category": "ai_lab",
        "marketCap": 110,
        "aiCapex": 1.2,
        "aiRevenue": 0.9,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "Frontier AI lab creator of ChatGPT, GPT-4, and o1 reasoning models; key partner in the $100B Stargate campus.",
        "initialX": -60,
        "initialY": -55
      },
      {
        "id": "anthropic",
        "name": "Anthropic",
        "category": "ai_lab",
        "marketCap": 24,
        "aiCapex": 0.6,
        "aiRevenue": 0.15,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "Frontier safety lab creator of Claude 3.5 Sonnet and Computer Use; backed by multi-billion commitments from Amazon & Google.",
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
        "desc": "Elon Musk’s AI frontier initiative operating the world’s largest 100k+ liquid-cooled Colossus supercluster in Memphis.",
        "initialX": 75,
        "initialY": 45
      },
      {
        "id": "deepseek",
        "name": "DeepSeek",
        "category": "ai_lab",
        "marketCap": 6,
        "aiCapex": 0.2,
        "aiRevenue": 0.08,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "Pioneered extreme algorithmic efficiency and low-cost open reasoning models (DeepSeek-V3 & R1) disrupting capex intensity.",
        "initialX": -75,
        "initialY": 45
      },
      {
        "id": "coreweave",
        "name": "CoreWeave",
        "category": "neocloud",
        "marketCap": 10,
        "aiCapex": 2,
        "aiRevenue": 0.4,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "Pioneer of GPU-collateralized debt financing ($2.3B in 2023, $7.5B in 2024), scaling specialized Neocloud infrastructure.",
        "initialX": 0,
        "initialY": 85
      },
      {
        "id": "vc_sovereign",
        "name": "VC & Sovereign Funds",
        "category": "venture_capital",
        "marketCap": 500,
        "aiCapex": 0,
        "aiRevenue": 0,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "Global venture syndicates (Sequoia, a16z, Thrive, SoftBank) and sovereign wealth funds (MGX, PIF) funding mega-rounds.",
        "initialX": 220,
        "initialY": 155
      },
      {
        "id": "end_market",
        "name": "Enterprise & End Users",
        "category": "end_market",
        "marketCap": 1200,
        "aiCapex": 0,
        "aiRevenue": 3.2,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "Real-world corporate IT budgets, developer API billing, and consumer subscriptions representing verified software revenue.",
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
        "desc": "2024 Q1: Microsoft allocates $5.2B to procure NVIDIA accelerator server clusters for Azure AI."
      },
      {
        "id": "goog_nvda_gpu",
        "source": "goog",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 3.8,
        "desc": "2024 Q1: Google deploys $3.8B for NVIDIA GPU clusters alongside custom TPU silicon."
      },
      {
        "id": "amzn_nvda_gpu",
        "source": "amzn",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 4.4,
        "desc": "2024 Q1: Amazon AWS purchases $4.4B in NVIDIA GPUs for scalable UltraClusters."
      },
      {
        "id": "meta_nvda_gpu",
        "source": "meta",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 4.2,
        "desc": "2024 Q1: Meta allocates $4.2B to NVIDIA GPUs for next-gen LLaMA model clusters."
      },
      {
        "id": "nvda_tsmc_gpu",
        "source": "nvda",
        "target": "tsmc",
        "flowType": "gpu_purchase",
        "amount": 4.6,
        "desc": "2024 Q1: NVIDIA awards TSMC $4.6B for leading-edge wafer allocation and CoWoS packaging."
      },
      {
        "id": "nvda_skhynix_hbm",
        "source": "nvda",
        "target": "skhynix",
        "flowType": "hbm_purchase",
        "amount": 2.6,
        "desc": "2024 Q1: NVIDIA procures $2.6B of exclusive HBM memory stacks from SK Hynix."
      },
      {
        "id": "nvda_samsung_hbm",
        "source": "nvda",
        "target": "samsung",
        "flowType": "hbm_purchase",
        "amount": 1,
        "desc": "2024 Q1: NVIDIA secures $1B in advanced HBM and memory supply from Samsung Electronics."
      },
      {
        "id": "tsmc_asml_equip",
        "source": "tsmc",
        "target": "asml",
        "flowType": "equipment_purchase",
        "amount": 2,
        "desc": "2024 Q1: TSMC invests $2B in ASML EUV and High-NA lithography scanners."
      },
      {
        "id": "samsung_asml_equip",
        "source": "samsung",
        "target": "asml",
        "flowType": "equipment_purchase",
        "amount": 1.5,
        "desc": "2024 Q1: Samsung Electronics commits $1.5B for ASML EUV scanners."
      },
      {
        "id": "skhynix_asml_equip",
        "source": "skhynix",
        "target": "asml",
        "flowType": "equipment_purchase",
        "amount": 1,
        "desc": "2024 Q1: SK Hynix procures $1B of ASML EUV systems for HBM DRAM production."
      },
      {
        "id": "goog_avgo_gpu",
        "source": "goog",
        "target": "avgo",
        "flowType": "gpu_purchase",
        "amount": 1.3,
        "desc": "2024 Q1: Google pays Broadcom $1.3B for custom TPU ASIC co-design and optical interconnects."
      },
      {
        "id": "meta_avgo_gpu",
        "source": "meta",
        "target": "avgo",
        "flowType": "gpu_purchase",
        "amount": 1.1,
        "desc": "2024 Q1: Meta allocates $1.1B to Broadcom for MTIA proprietary accelerator silicon design."
      },
      {
        "id": "msft_openai_credit",
        "source": "msft",
        "target": "openai",
        "flowType": "cloud_credit",
        "amount": 2.8,
        "desc": "2024 Q1: Microsoft supplies OpenAI with $2.8B in Azure compute credits and dedicated infrastructure."
      },
      {
        "id": "openai_msft_spend",
        "source": "openai",
        "target": "msft",
        "flowType": "cloud_credit",
        "amount": 1.2,
        "desc": "2024 Q1: OpenAI spends $1.2B in hosting fees and compute consumption paid directly to Microsoft Azure."
      },
      {
        "id": "amzn_anthropic_equity",
        "source": "amzn",
        "target": "anthropic",
        "flowType": "equity_investment",
        "amount": 2.75,
        "desc": "2024 Q1: Amazon executes a strategic growth capital tranche of $2.75B into Anthropic."
      },
      {
        "id": "anthropic_amzn_spend",
        "source": "anthropic",
        "target": "amzn",
        "flowType": "cloud_credit",
        "amount": 0.8,
        "desc": "2024 Q1: Anthropic pays $0.8B to AWS for Bedrock compute clusters and Trainium workloads."
      },
      {
        "id": "goog_anthropic_equity",
        "source": "goog",
        "target": "anthropic",
        "flowType": "equity_investment",
        "amount": 0,
        "desc": "2024 Q1: Partnership active; no secondary equity injection in this period."
      },
      {
        "id": "vc_coreweave_debt",
        "source": "vc_sovereign",
        "target": "coreweave",
        "flowType": "debt_collateral",
        "amount": 0,
        "desc": "2024 Q1: Previous GPU debt facility drawn down; no new private debt tranche active."
      },
      {
        "id": "coreweave_nvda_gpu",
        "source": "coreweave",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 3.2,
        "desc": "2024 Q1: CoreWeave purchases $3.2B of NVIDIA GPUs to expand its AI cloud cluster fleet."
      },
      {
        "id": "nvda_coreweave_equity",
        "source": "nvda",
        "target": "coreweave",
        "flowType": "equity_investment",
        "amount": 0,
        "desc": "2024 Q1: Strategic partnership active; no incremental equity transaction this period."
      },
      {
        "id": "coreweave_vc_refinance",
        "source": "coreweave",
        "target": "vc_sovereign",
        "flowType": "debt_collateral",
        "amount": 0,
        "desc": "2024 Q1: Inactive or concluded channel for this period."
      },
      {
        "id": "vc_openai_equity",
        "source": "vc_sovereign",
        "target": "openai",
        "flowType": "equity_investment",
        "amount": 0,
        "desc": "2024 Q1: Operating on existing treasury; no primary mega equity financing tranche active."
      },
      {
        "id": "xai_nvda_gpu",
        "source": "xai",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 0.5,
        "desc": "2024 Q1: xAI purchases $0.5B of NVIDIA liquid-cooled GPUs for the Memphis Colossus supercluster."
      },
      {
        "id": "skhynix_tsmc_foundry",
        "source": "skhynix",
        "target": "tsmc",
        "flowType": "gpu_purchase",
        "amount": 0,
        "desc": "2024 Q1: Inactive or concluded channel for this period."
      },
      {
        "id": "market_openai_rev",
        "source": "end_market",
        "target": "openai",
        "flowType": "enterprise_revenue",
        "amount": 1,
        "desc": "2024 Q1: Enterprises and users generate $1B in verified OpenAI software and API revenue."
      },
      {
        "id": "market_msft_rev",
        "source": "end_market",
        "target": "msft",
        "flowType": "enterprise_revenue",
        "amount": 1.7,
        "desc": "2024 Q1: Enterprise clients deliver $1.7B in Microsoft commercial AI revenue."
      },
      {
        "id": "market_anthropic_rev",
        "source": "end_market",
        "target": "anthropic",
        "flowType": "enterprise_revenue",
        "amount": 0.3,
        "desc": "2024 Q1: Enterprise software clients generate $0.3B in Claude API token billing revenue."
      },
      {
        "id": "market_deepseek_rev",
        "source": "end_market",
        "target": "deepseek",
        "flowType": "enterprise_revenue",
        "amount": 0.05,
        "desc": "2024 Q1: DeepSeek generates $0.05B in low-cost high-efficiency reasoning API token revenue."
      }
    ]
  },
  {
    "periodId": "2024-Q2",
    "year": 2024,
    "quarter": 2,
    "label": "2024 Q2",
    "dateRange": "Apr - Jun 2024",
    "title": "2024 Q2: The $600B Question & Neocloud Mega-Debt Facilities",
    "summary": "Sequoia Capital publishes \"AI’s $600B Question\", highlighting the staggering gap between data center capex and end-user revenues. CoreWeave raises an astonishing $7.5B debt facility led by Blackstone. NVIDIA briefly becomes the world’s most valuable public company ($3.34T).",
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
        "name": "Microsoft",
        "category": "hyperscaler",
        "marketCap": 3320,
        "aiCapex": 13.9,
        "aiRevenue": 1.5,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "World cloud leader, strategic backer of OpenAI with Azure exclusive integration, developer of Maia AI ASICs.",
        "initialX": -140,
        "initialY": -130
      },
      {
        "id": "goog",
        "name": "Alphabet / Google",
        "category": "hyperscaler",
        "marketCap": 2210,
        "aiCapex": 13.2,
        "aiRevenue": 1.1,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "Pioneer of Transformer architecture; custom TPU v4/v5/v6 silicon with Google DeepMind & Gemini.",
        "initialX": -185,
        "initialY": 5
      },
      {
        "id": "amzn",
        "name": "Amazon / AWS",
        "category": "hyperscaler",
        "marketCap": 2020,
        "aiCapex": 15.5,
        "aiRevenue": 0.9,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "World’s largest cloud provider (AWS), key investor in Anthropic ($4B), developing Trainium2 & Inferentia.",
        "initialX": 140,
        "initialY": -130
      },
      {
        "id": "meta",
        "name": "Meta Platforms",
        "category": "hyperscaler",
        "marketCap": 1320,
        "aiCapex": 10.5,
        "aiRevenue": 0.5,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "Open-source frontier AI champion (LLaMA series), massive GPU cluster operator, MTIA custom silicon.",
        "initialX": 185,
        "initialY": 5
      },
      {
        "id": "nvda",
        "name": "NVIDIA",
        "category": "chipmaker",
        "marketCap": 3100,
        "aiCapex": 1.2,
        "aiRevenue": 26.3,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "Global GPU monopoly (A100/H100/B200/Rubin) and proprietary CUDA software moat capturing 75%+ gross margins.",
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
        "desc": "World’s exclusive pure-play foundry and CoWoS advanced packaging monopoly powering all advanced AI accelerators.",
        "initialX": -130,
        "initialY": 190
      },
      {
        "id": "avgo",
        "name": "Broadcom",
        "category": "chipmaker",
        "marketCap": 740,
        "aiCapex": 0.45,
        "aiRevenue": 3.5,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "Leader in custom AI ASICs (Google TPU, Meta MTIA) and high-speed Tomahawk/Jericho AI networking fabrics.",
        "initialX": -215,
        "initialY": 115
      },
      {
        "id": "skhynix",
        "name": "SK Hynix",
        "category": "semiconductor_supply",
        "marketCap": 120,
        "aiCapex": 2.5,
        "aiRevenue": 3.5,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "World’s undisputed leader in High Bandwidth Memory (HBM3, HBM3E, HBM4), primary memory supplier to NVIDIA.",
        "initialX": -20,
        "initialY": -210
      },
      {
        "id": "samsung",
        "name": "Samsung Electronics",
        "category": "semiconductor_supply",
        "marketCap": 430,
        "aiCapex": 9.8,
        "aiRevenue": 2.9,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "World’s largest memory semiconductor producer, pioneer of 12-layer HBM3E and turnkey foundry/memory solutions.",
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
        "desc": "Monopoly provider of EUV and High-NA EUV lithography equipment essential for 3nm/2nm advanced semiconductor nodes.",
        "initialX": 20,
        "initialY": 235
      },
      {
        "id": "openai",
        "name": "OpenAI",
        "category": "ai_lab",
        "marketCap": 135,
        "aiCapex": 1.8,
        "aiRevenue": 1.1,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "Frontier AI lab creator of ChatGPT, GPT-4, and o1 reasoning models; key partner in the $100B Stargate campus.",
        "initialX": -60,
        "initialY": -55
      },
      {
        "id": "anthropic",
        "name": "Anthropic",
        "category": "ai_lab",
        "marketCap": 30,
        "aiCapex": 0.9,
        "aiRevenue": 0.22,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "Frontier safety lab creator of Claude 3.5 Sonnet and Computer Use; backed by multi-billion commitments from Amazon & Google.",
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
        "desc": "Elon Musk’s AI frontier initiative operating the world’s largest 100k+ liquid-cooled Colossus supercluster in Memphis.",
        "initialX": 75,
        "initialY": 45
      },
      {
        "id": "deepseek",
        "name": "DeepSeek",
        "category": "ai_lab",
        "marketCap": 8,
        "aiCapex": 0.3,
        "aiRevenue": 0.12,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "Pioneered extreme algorithmic efficiency and low-cost open reasoning models (DeepSeek-V3 & R1) disrupting capex intensity.",
        "initialX": -75,
        "initialY": 45
      },
      {
        "id": "coreweave",
        "name": "CoreWeave",
        "category": "neocloud",
        "marketCap": 16,
        "aiCapex": 3.2,
        "aiRevenue": 0.55,
        "isFormed": true,
        "isHighGrowth": true,
        "desc": "Pioneer of GPU-collateralized debt financing ($2.3B in 2023, $7.5B in 2024), scaling specialized Neocloud infrastructure.",
        "initialX": 0,
        "initialY": 85
      },
      {
        "id": "vc_sovereign",
        "name": "VC & Sovereign Funds",
        "category": "venture_capital",
        "marketCap": 500,
        "aiCapex": 0,
        "aiRevenue": 0,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "Global venture syndicates (Sequoia, a16z, Thrive, SoftBank) and sovereign wealth funds (MGX, PIF) funding mega-rounds.",
        "initialX": 220,
        "initialY": 155
      },
      {
        "id": "end_market",
        "name": "Enterprise & End Users",
        "category": "end_market",
        "marketCap": 1200,
        "aiCapex": 0,
        "aiRevenue": 4.5,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "Real-world corporate IT budgets, developer API billing, and consumer subscriptions representing verified software revenue.",
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
        "desc": "2024 Q2: Microsoft allocates $6.4B to procure NVIDIA accelerator server clusters for Azure AI."
      },
      {
        "id": "goog_nvda_gpu",
        "source": "goog",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 4.6,
        "desc": "2024 Q2: Google deploys $4.6B for NVIDIA GPU clusters alongside custom TPU silicon."
      },
      {
        "id": "amzn_nvda_gpu",
        "source": "amzn",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 5.4,
        "desc": "2024 Q2: Amazon AWS purchases $5.4B in NVIDIA GPUs for scalable UltraClusters."
      },
      {
        "id": "meta_nvda_gpu",
        "source": "meta",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 5.2,
        "desc": "2024 Q2: Meta allocates $5.2B to NVIDIA GPUs for next-gen LLaMA model clusters."
      },
      {
        "id": "nvda_tsmc_gpu",
        "source": "nvda",
        "target": "tsmc",
        "flowType": "gpu_purchase",
        "amount": 5.8,
        "desc": "2024 Q2: NVIDIA awards TSMC $5.8B for leading-edge wafer allocation and CoWoS packaging."
      },
      {
        "id": "nvda_skhynix_hbm",
        "source": "nvda",
        "target": "skhynix",
        "flowType": "hbm_purchase",
        "amount": 3.3,
        "desc": "2024 Q2: NVIDIA procures $3.3B of exclusive HBM memory stacks from SK Hynix."
      },
      {
        "id": "nvda_samsung_hbm",
        "source": "nvda",
        "target": "samsung",
        "flowType": "hbm_purchase",
        "amount": 1.5,
        "desc": "2024 Q2: NVIDIA secures $1.5B in advanced HBM and memory supply from Samsung Electronics."
      },
      {
        "id": "tsmc_asml_equip",
        "source": "tsmc",
        "target": "asml",
        "flowType": "equipment_purchase",
        "amount": 2.3,
        "desc": "2024 Q2: TSMC invests $2.3B in ASML EUV and High-NA lithography scanners."
      },
      {
        "id": "samsung_asml_equip",
        "source": "samsung",
        "target": "asml",
        "flowType": "equipment_purchase",
        "amount": 1.7,
        "desc": "2024 Q2: Samsung Electronics commits $1.7B for ASML EUV scanners."
      },
      {
        "id": "skhynix_asml_equip",
        "source": "skhynix",
        "target": "asml",
        "flowType": "equipment_purchase",
        "amount": 1.2,
        "desc": "2024 Q2: SK Hynix procures $1.2B of ASML EUV systems for HBM DRAM production."
      },
      {
        "id": "goog_avgo_gpu",
        "source": "goog",
        "target": "avgo",
        "flowType": "gpu_purchase",
        "amount": 1.6,
        "desc": "2024 Q2: Google pays Broadcom $1.6B for custom TPU ASIC co-design and optical interconnects."
      },
      {
        "id": "meta_avgo_gpu",
        "source": "meta",
        "target": "avgo",
        "flowType": "gpu_purchase",
        "amount": 1.4,
        "desc": "2024 Q2: Meta allocates $1.4B to Broadcom for MTIA proprietary accelerator silicon design."
      },
      {
        "id": "msft_openai_credit",
        "source": "msft",
        "target": "openai",
        "flowType": "cloud_credit",
        "amount": 3,
        "desc": "2024 Q2: Microsoft supplies OpenAI with $3B in Azure compute credits and dedicated infrastructure."
      },
      {
        "id": "openai_msft_spend",
        "source": "openai",
        "target": "msft",
        "flowType": "cloud_credit",
        "amount": 1.5,
        "desc": "2024 Q2: OpenAI spends $1.5B in hosting fees and compute consumption paid directly to Microsoft Azure."
      },
      {
        "id": "amzn_anthropic_equity",
        "source": "amzn",
        "target": "anthropic",
        "flowType": "equity_investment",
        "amount": 0,
        "desc": "2024 Q2: Operating under active cloud agreement; no new primary equity capital call."
      },
      {
        "id": "anthropic_amzn_spend",
        "source": "anthropic",
        "target": "amzn",
        "flowType": "cloud_credit",
        "amount": 1.1,
        "desc": "2024 Q2: Anthropic pays $1.1B to AWS for Bedrock compute clusters and Trainium workloads."
      },
      {
        "id": "goog_anthropic_equity",
        "source": "goog",
        "target": "anthropic",
        "flowType": "equity_investment",
        "amount": 0,
        "desc": "2024 Q2: Partnership active; no secondary equity injection in this period."
      },
      {
        "id": "vc_coreweave_debt",
        "source": "vc_sovereign",
        "target": "coreweave",
        "flowType": "debt_collateral",
        "amount": 7.5,
        "desc": "2024 Q2: Private debt syndicate (Blackstone, Magnetar) provides $7.5B loan collateralized by GPUs."
      },
      {
        "id": "coreweave_nvda_gpu",
        "source": "coreweave",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 5.5,
        "desc": "2024 Q2: CoreWeave purchases $5.5B of NVIDIA GPUs to expand its AI cloud cluster fleet."
      },
      {
        "id": "nvda_coreweave_equity",
        "source": "nvda",
        "target": "coreweave",
        "flowType": "equity_investment",
        "amount": 0.5,
        "desc": "2024 Q2: NVIDIA invests $0.5B strategic equity into Neocloud partner CoreWeave."
      },
      {
        "id": "coreweave_vc_refinance",
        "source": "coreweave",
        "target": "vc_sovereign",
        "flowType": "debt_collateral",
        "amount": 0,
        "desc": "2024 Q2: Inactive or concluded channel for this period."
      },
      {
        "id": "vc_openai_equity",
        "source": "vc_sovereign",
        "target": "openai",
        "flowType": "equity_investment",
        "amount": 0,
        "desc": "2024 Q2: Operating on existing treasury; no primary mega equity financing tranche active."
      },
      {
        "id": "xai_nvda_gpu",
        "source": "xai",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 1.8,
        "desc": "2024 Q2: xAI purchases $1.8B of NVIDIA liquid-cooled GPUs for the Memphis Colossus supercluster."
      },
      {
        "id": "skhynix_tsmc_foundry",
        "source": "skhynix",
        "target": "tsmc",
        "flowType": "gpu_purchase",
        "amount": 0.5,
        "desc": "2024 Q2: SK Hynix contracts TSMC advanced foundry for $0.5B to produce custom HBM4 logic base dies."
      },
      {
        "id": "market_openai_rev",
        "source": "end_market",
        "target": "openai",
        "flowType": "enterprise_revenue",
        "amount": 1.4,
        "desc": "2024 Q2: Enterprises and users generate $1.4B in verified OpenAI software and API revenue."
      },
      {
        "id": "market_msft_rev",
        "source": "end_market",
        "target": "msft",
        "flowType": "enterprise_revenue",
        "amount": 2.2,
        "desc": "2024 Q2: Enterprise clients deliver $2.2B in Microsoft commercial AI revenue."
      },
      {
        "id": "market_anthropic_rev",
        "source": "end_market",
        "target": "anthropic",
        "flowType": "enterprise_revenue",
        "amount": 0.5,
        "desc": "2024 Q2: Enterprise software clients generate $0.5B in Claude API token billing revenue."
      },
      {
        "id": "market_deepseek_rev",
        "source": "end_market",
        "target": "deepseek",
        "flowType": "enterprise_revenue",
        "amount": 0.08,
        "desc": "2024 Q2: DeepSeek generates $0.08B in low-cost high-efficiency reasoning API token revenue."
      }
    ]
  },
  {
    "periodId": "2024-Q3",
    "year": 2024,
    "quarter": 3,
    "label": "2024 Q3",
    "dateRange": "Jul - Sep 2024",
    "title": "2024 Q3: xAI Colossus 100K Cluster & OpenAI’s $157B Mega-Round",
    "summary": "Elon Musk’s xAI brings \"Colossus\" (100,000 liquid-cooled H100 cluster in Memphis) online in an unprecedented 122 days. OpenAI raises $6.6B at a $157B valuation from Thrive, SoftBank, and Microsoft. SK Hynix begins the world’s first volume mass production of 12-layer HBM3E.",
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
        "name": "Microsoft",
        "category": "hyperscaler",
        "marketCap": 3200,
        "aiCapex": 14.9,
        "aiRevenue": 1.8,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "World cloud leader, strategic backer of OpenAI with Azure exclusive integration, developer of Maia AI ASICs.",
        "initialX": -140,
        "initialY": -130
      },
      {
        "id": "goog",
        "name": "Alphabet / Google",
        "category": "hyperscaler",
        "marketCap": 2050,
        "aiCapex": 13.1,
        "aiRevenue": 1.3,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "Pioneer of Transformer architecture; custom TPU v4/v5/v6 silicon with Google DeepMind & Gemini.",
        "initialX": -185,
        "initialY": 5
      },
      {
        "id": "amzn",
        "name": "Amazon / AWS",
        "category": "hyperscaler",
        "marketCap": 1950,
        "aiCapex": 16.2,
        "aiRevenue": 1.1,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "World’s largest cloud provider (AWS), key investor in Anthropic ($4B), developing Trainium2 & Inferentia.",
        "initialX": 140,
        "initialY": -130
      },
      {
        "id": "meta",
        "name": "Meta Platforms",
        "category": "hyperscaler",
        "marketCap": 1450,
        "aiCapex": 11.2,
        "aiRevenue": 0.6,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "Open-source frontier AI champion (LLaMA series), massive GPU cluster operator, MTIA custom silicon.",
        "initialX": 185,
        "initialY": 5
      },
      {
        "id": "nvda",
        "name": "NVIDIA",
        "category": "chipmaker",
        "marketCap": 3000,
        "aiCapex": 1.3,
        "aiRevenue": 30.8,
        "isFormed": true,
        "isHighGrowth": true,
        "desc": "Global GPU monopoly (A100/H100/B200/Rubin) and proprietary CUDA software moat capturing 75%+ gross margins.",
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
        "desc": "World’s exclusive pure-play foundry and CoWoS advanced packaging monopoly powering all advanced AI accelerators.",
        "initialX": -130,
        "initialY": 190
      },
      {
        "id": "avgo",
        "name": "Broadcom",
        "category": "chipmaker",
        "marketCap": 720,
        "aiCapex": 0.5,
        "aiRevenue": 3.8,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "Leader in custom AI ASICs (Google TPU, Meta MTIA) and high-speed Tomahawk/Jericho AI networking fabrics.",
        "initialX": -215,
        "initialY": 115
      },
      {
        "id": "skhynix",
        "name": "SK Hynix",
        "category": "semiconductor_supply",
        "marketCap": 110,
        "aiCapex": 2.8,
        "aiRevenue": 4.1,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "World’s undisputed leader in High Bandwidth Memory (HBM3, HBM3E, HBM4), primary memory supplier to NVIDIA.",
        "initialX": -20,
        "initialY": -210
      },
      {
        "id": "samsung",
        "name": "Samsung Electronics",
        "category": "semiconductor_supply",
        "marketCap": 390,
        "aiCapex": 10.1,
        "aiRevenue": 3.2,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "World’s largest memory semiconductor producer, pioneer of 12-layer HBM3E and turnkey foundry/memory solutions.",
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
        "desc": "Monopoly provider of EUV and High-NA EUV lithography equipment essential for 3nm/2nm advanced semiconductor nodes.",
        "initialX": 20,
        "initialY": 235
      },
      {
        "id": "openai",
        "name": "OpenAI",
        "category": "ai_lab",
        "marketCap": 157,
        "aiCapex": 2.2,
        "aiRevenue": 1.3,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "Frontier AI lab creator of ChatGPT, GPT-4, and o1 reasoning models; key partner in the $100B Stargate campus.",
        "initialX": -60,
        "initialY": -55
      },
      {
        "id": "anthropic",
        "name": "Anthropic",
        "category": "ai_lab",
        "marketCap": 35,
        "aiCapex": 1.1,
        "aiRevenue": 0.3,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "Frontier safety lab creator of Claude 3.5 Sonnet and Computer Use; backed by multi-billion commitments from Amazon & Google.",
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
        "desc": "Elon Musk’s AI frontier initiative operating the world’s largest 100k+ liquid-cooled Colossus supercluster in Memphis.",
        "initialX": 75,
        "initialY": 45
      },
      {
        "id": "deepseek",
        "name": "DeepSeek",
        "category": "ai_lab",
        "marketCap": 11,
        "aiCapex": 0.4,
        "aiRevenue": 0.18,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "Pioneered extreme algorithmic efficiency and low-cost open reasoning models (DeepSeek-V3 & R1) disrupting capex intensity.",
        "initialX": -75,
        "initialY": 45
      },
      {
        "id": "coreweave",
        "name": "CoreWeave",
        "category": "neocloud",
        "marketCap": 18,
        "aiCapex": 3.8,
        "aiRevenue": 0.7,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "Pioneer of GPU-collateralized debt financing ($2.3B in 2023, $7.5B in 2024), scaling specialized Neocloud infrastructure.",
        "initialX": 0,
        "initialY": 85
      },
      {
        "id": "vc_sovereign",
        "name": "VC & Sovereign Funds",
        "category": "venture_capital",
        "marketCap": 500,
        "aiCapex": 0,
        "aiRevenue": 0,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "Global venture syndicates (Sequoia, a16z, Thrive, SoftBank) and sovereign wealth funds (MGX, PIF) funding mega-rounds.",
        "initialX": 220,
        "initialY": 155
      },
      {
        "id": "end_market",
        "name": "Enterprise & End Users",
        "category": "end_market",
        "marketCap": 1200,
        "aiCapex": 0,
        "aiRevenue": 5.8,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "Real-world corporate IT budgets, developer API billing, and consumer subscriptions representing verified software revenue.",
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
        "desc": "2024 Q3: Microsoft allocates $7.8B to procure NVIDIA accelerator server clusters for Azure AI."
      },
      {
        "id": "goog_nvda_gpu",
        "source": "goog",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 5.5,
        "desc": "2024 Q3: Google deploys $5.5B for NVIDIA GPU clusters alongside custom TPU silicon."
      },
      {
        "id": "amzn_nvda_gpu",
        "source": "amzn",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 6.6,
        "desc": "2024 Q3: Amazon AWS purchases $6.6B in NVIDIA GPUs for scalable UltraClusters."
      },
      {
        "id": "meta_nvda_gpu",
        "source": "meta",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 6.4,
        "desc": "2024 Q3: Meta allocates $6.4B to NVIDIA GPUs for next-gen LLaMA model clusters."
      },
      {
        "id": "nvda_tsmc_gpu",
        "source": "nvda",
        "target": "tsmc",
        "flowType": "gpu_purchase",
        "amount": 7.2,
        "desc": "2024 Q3: NVIDIA awards TSMC $7.2B for leading-edge wafer allocation and CoWoS packaging."
      },
      {
        "id": "nvda_skhynix_hbm",
        "source": "nvda",
        "target": "skhynix",
        "flowType": "hbm_purchase",
        "amount": 4.1,
        "desc": "2024 Q3: NVIDIA procures $4.1B of exclusive HBM memory stacks from SK Hynix."
      },
      {
        "id": "nvda_samsung_hbm",
        "source": "nvda",
        "target": "samsung",
        "flowType": "hbm_purchase",
        "amount": 2.2,
        "desc": "2024 Q3: NVIDIA secures $2.2B in advanced HBM and memory supply from Samsung Electronics."
      },
      {
        "id": "tsmc_asml_equip",
        "source": "tsmc",
        "target": "asml",
        "flowType": "equipment_purchase",
        "amount": 2.6,
        "desc": "2024 Q3: TSMC invests $2.6B in ASML EUV and High-NA lithography scanners."
      },
      {
        "id": "samsung_asml_equip",
        "source": "samsung",
        "target": "asml",
        "flowType": "equipment_purchase",
        "amount": 1.9,
        "desc": "2024 Q3: Samsung Electronics commits $1.9B for ASML EUV scanners."
      },
      {
        "id": "skhynix_asml_equip",
        "source": "skhynix",
        "target": "asml",
        "flowType": "equipment_purchase",
        "amount": 1.4,
        "desc": "2024 Q3: SK Hynix procures $1.4B of ASML EUV systems for HBM DRAM production."
      },
      {
        "id": "goog_avgo_gpu",
        "source": "goog",
        "target": "avgo",
        "flowType": "gpu_purchase",
        "amount": 2,
        "desc": "2024 Q3: Google pays Broadcom $2B for custom TPU ASIC co-design and optical interconnects."
      },
      {
        "id": "meta_avgo_gpu",
        "source": "meta",
        "target": "avgo",
        "flowType": "gpu_purchase",
        "amount": 1.8,
        "desc": "2024 Q3: Meta allocates $1.8B to Broadcom for MTIA proprietary accelerator silicon design."
      },
      {
        "id": "msft_openai_credit",
        "source": "msft",
        "target": "openai",
        "flowType": "cloud_credit",
        "amount": 3.2,
        "desc": "2024 Q3: Microsoft supplies OpenAI with $3.2B in Azure compute credits and dedicated infrastructure."
      },
      {
        "id": "openai_msft_spend",
        "source": "openai",
        "target": "msft",
        "flowType": "cloud_credit",
        "amount": 1.9,
        "desc": "2024 Q3: OpenAI spends $1.9B in hosting fees and compute consumption paid directly to Microsoft Azure."
      },
      {
        "id": "amzn_anthropic_equity",
        "source": "amzn",
        "target": "anthropic",
        "flowType": "equity_investment",
        "amount": 0,
        "desc": "2024 Q3: Operating under active cloud agreement; no new primary equity capital call."
      },
      {
        "id": "anthropic_amzn_spend",
        "source": "anthropic",
        "target": "amzn",
        "flowType": "cloud_credit",
        "amount": 1.4,
        "desc": "2024 Q3: Anthropic pays $1.4B to AWS for Bedrock compute clusters and Trainium workloads."
      },
      {
        "id": "goog_anthropic_equity",
        "source": "goog",
        "target": "anthropic",
        "flowType": "equity_investment",
        "amount": 0,
        "desc": "2024 Q3: Partnership active; no secondary equity injection in this period."
      },
      {
        "id": "vc_coreweave_debt",
        "source": "vc_sovereign",
        "target": "coreweave",
        "flowType": "debt_collateral",
        "amount": 0,
        "desc": "2024 Q3: Previous GPU debt facility drawn down; no new private debt tranche active."
      },
      {
        "id": "coreweave_nvda_gpu",
        "source": "coreweave",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 4.2,
        "desc": "2024 Q3: CoreWeave purchases $4.2B of NVIDIA GPUs to expand its AI cloud cluster fleet."
      },
      {
        "id": "nvda_coreweave_equity",
        "source": "nvda",
        "target": "coreweave",
        "flowType": "equity_investment",
        "amount": 0,
        "desc": "2024 Q3: Strategic partnership active; no incremental equity transaction this period."
      },
      {
        "id": "coreweave_vc_refinance",
        "source": "coreweave",
        "target": "vc_sovereign",
        "flowType": "debt_collateral",
        "amount": 0.8,
        "desc": "2024 Q3: CoreWeave executes $0.8B in asset-backed securitization (ABS) and debt refinancing."
      },
      {
        "id": "vc_openai_equity",
        "source": "vc_sovereign",
        "target": "openai",
        "flowType": "equity_investment",
        "amount": 0,
        "desc": "2024 Q3: Operating on existing treasury; no primary mega equity financing tranche active."
      },
      {
        "id": "xai_nvda_gpu",
        "source": "xai",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 3.5,
        "desc": "2024 Q3: xAI purchases $3.5B of NVIDIA liquid-cooled GPUs for the Memphis Colossus supercluster."
      },
      {
        "id": "skhynix_tsmc_foundry",
        "source": "skhynix",
        "target": "tsmc",
        "flowType": "gpu_purchase",
        "amount": 0.7,
        "desc": "2024 Q3: SK Hynix contracts TSMC advanced foundry for $0.7B to produce custom HBM4 logic base dies."
      },
      {
        "id": "market_openai_rev",
        "source": "end_market",
        "target": "openai",
        "flowType": "enterprise_revenue",
        "amount": 2,
        "desc": "2024 Q3: Enterprises and users generate $2B in verified OpenAI software and API revenue."
      },
      {
        "id": "market_msft_rev",
        "source": "end_market",
        "target": "msft",
        "flowType": "enterprise_revenue",
        "amount": 2.8,
        "desc": "2024 Q3: Enterprise clients deliver $2.8B in Microsoft commercial AI revenue."
      },
      {
        "id": "market_anthropic_rev",
        "source": "end_market",
        "target": "anthropic",
        "flowType": "enterprise_revenue",
        "amount": 0.8,
        "desc": "2024 Q3: Enterprise software clients generate $0.8B in Claude API token billing revenue."
      },
      {
        "id": "market_deepseek_rev",
        "source": "end_market",
        "target": "deepseek",
        "flowType": "enterprise_revenue",
        "amount": 0.12,
        "desc": "2024 Q3: DeepSeek generates $0.12B in low-cost high-efficiency reasoning API token revenue."
      }
    ]
  },
  {
    "periodId": "2024-Q4",
    "year": 2024,
    "quarter": 4,
    "label": "2024 Q4",
    "dateRange": "Oct - Dec 2024",
    "title": "2024 Q4: Test-Time Reasoning (o1) & Custom Silicon Boom",
    "summary": "OpenAI officially releases the o1 reasoning model series, demonstrating that test-time compute scaling is a viable third dimension of AI scaling. Broadcom projects $12B+ in annual AI ASIC revenue as Google scales TPU v5p and Meta deploys MTIA. TSMC 3nm fabs run at 100% capacity.",
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
        "name": "Microsoft",
        "category": "hyperscaler",
        "marketCap": 3250,
        "aiCapex": 15.5,
        "aiRevenue": 2.2,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "World cloud leader, strategic backer of OpenAI with Azure exclusive integration, developer of Maia AI ASICs.",
        "initialX": -140,
        "initialY": -130
      },
      {
        "id": "goog",
        "name": "Alphabet / Google",
        "category": "hyperscaler",
        "marketCap": 2180,
        "aiCapex": 13.5,
        "aiRevenue": 1.6,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "Pioneer of Transformer architecture; custom TPU v4/v5/v6 silicon with Google DeepMind & Gemini.",
        "initialX": -185,
        "initialY": 5
      },
      {
        "id": "amzn",
        "name": "Amazon / AWS",
        "category": "hyperscaler",
        "marketCap": 2080,
        "aiCapex": 16.8,
        "aiRevenue": 1.3,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "World’s largest cloud provider (AWS), key investor in Anthropic ($4B), developing Trainium2 & Inferentia.",
        "initialX": 140,
        "initialY": -130
      },
      {
        "id": "meta",
        "name": "Meta Platforms",
        "category": "hyperscaler",
        "marketCap": 1520,
        "aiCapex": 12.1,
        "aiRevenue": 0.8,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "Open-source frontier AI champion (LLaMA series), massive GPU cluster operator, MTIA custom silicon.",
        "initialX": 185,
        "initialY": 5
      },
      {
        "id": "nvda",
        "name": "NVIDIA",
        "category": "chipmaker",
        "marketCap": 3350,
        "aiCapex": 1.4,
        "aiRevenue": 35,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "Global GPU monopoly (A100/H100/B200/Rubin) and proprietary CUDA software moat capturing 75%+ gross margins.",
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
        "desc": "World’s exclusive pure-play foundry and CoWoS advanced packaging monopoly powering all advanced AI accelerators.",
        "initialX": -130,
        "initialY": 190
      },
      {
        "id": "avgo",
        "name": "Broadcom",
        "category": "chipmaker",
        "marketCap": 790,
        "aiCapex": 0.55,
        "aiRevenue": 4.2,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "Leader in custom AI ASICs (Google TPU, Meta MTIA) and high-speed Tomahawk/Jericho AI networking fabrics.",
        "initialX": -215,
        "initialY": 115
      },
      {
        "id": "skhynix",
        "name": "SK Hynix",
        "category": "semiconductor_supply",
        "marketCap": 125,
        "aiCapex": 3.1,
        "aiRevenue": 4.8,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "World’s undisputed leader in High Bandwidth Memory (HBM3, HBM3E, HBM4), primary memory supplier to NVIDIA.",
        "initialX": -20,
        "initialY": -210
      },
      {
        "id": "samsung",
        "name": "Samsung Electronics",
        "category": "semiconductor_supply",
        "marketCap": 380,
        "aiCapex": 10.5,
        "aiRevenue": 3.8,
        "isFormed": true,
        "isHighGrowth": true,
        "desc": "World’s largest memory semiconductor producer, pioneer of 12-layer HBM3E and turnkey foundry/memory solutions.",
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
        "desc": "Monopoly provider of EUV and High-NA EUV lithography equipment essential for 3nm/2nm advanced semiconductor nodes.",
        "initialX": 20,
        "initialY": 235
      },
      {
        "id": "openai",
        "name": "OpenAI",
        "category": "ai_lab",
        "marketCap": 170,
        "aiCapex": 2.6,
        "aiRevenue": 1.8,
        "isFormed": true,
        "isHighGrowth": true,
        "desc": "Frontier AI lab creator of ChatGPT, GPT-4, and o1 reasoning models; key partner in the $100B Stargate campus.",
        "initialX": -60,
        "initialY": -55
      },
      {
        "id": "anthropic",
        "name": "Anthropic",
        "category": "ai_lab",
        "marketCap": 42,
        "aiCapex": 1.4,
        "aiRevenue": 0.4,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "Frontier safety lab creator of Claude 3.5 Sonnet and Computer Use; backed by multi-billion commitments from Amazon & Google.",
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
        "desc": "Elon Musk’s AI frontier initiative operating the world’s largest 100k+ liquid-cooled Colossus supercluster in Memphis.",
        "initialX": 75,
        "initialY": 45
      },
      {
        "id": "deepseek",
        "name": "DeepSeek",
        "category": "ai_lab",
        "marketCap": 14,
        "aiCapex": 0.5,
        "aiRevenue": 0.25,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "Pioneered extreme algorithmic efficiency and low-cost open reasoning models (DeepSeek-V3 & R1) disrupting capex intensity.",
        "initialX": -75,
        "initialY": 45
      },
      {
        "id": "coreweave",
        "name": "CoreWeave",
        "category": "neocloud",
        "marketCap": 19,
        "aiCapex": 4.2,
        "aiRevenue": 0.9,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "Pioneer of GPU-collateralized debt financing ($2.3B in 2023, $7.5B in 2024), scaling specialized Neocloud infrastructure.",
        "initialX": 0,
        "initialY": 85
      },
      {
        "id": "vc_sovereign",
        "name": "VC & Sovereign Funds",
        "category": "venture_capital",
        "marketCap": 500,
        "aiCapex": 0,
        "aiRevenue": 0,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "Global venture syndicates (Sequoia, a16z, Thrive, SoftBank) and sovereign wealth funds (MGX, PIF) funding mega-rounds.",
        "initialX": 220,
        "initialY": 155
      },
      {
        "id": "end_market",
        "name": "Enterprise & End Users",
        "category": "end_market",
        "marketCap": 1200,
        "aiCapex": 0,
        "aiRevenue": 7.4,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "Real-world corporate IT budgets, developer API billing, and consumer subscriptions representing verified software revenue.",
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
        "desc": "2024 Q4: Microsoft allocates $9.2B to procure NVIDIA accelerator server clusters for Azure AI."
      },
      {
        "id": "goog_nvda_gpu",
        "source": "goog",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 6.8,
        "desc": "2024 Q4: Google deploys $6.8B for NVIDIA GPU clusters alongside custom TPU silicon."
      },
      {
        "id": "amzn_nvda_gpu",
        "source": "amzn",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 7.9,
        "desc": "2024 Q4: Amazon AWS purchases $7.9B in NVIDIA GPUs for scalable UltraClusters."
      },
      {
        "id": "meta_nvda_gpu",
        "source": "meta",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 7.6,
        "desc": "2024 Q4: Meta allocates $7.6B to NVIDIA GPUs for next-gen LLaMA model clusters."
      },
      {
        "id": "nvda_tsmc_gpu",
        "source": "nvda",
        "target": "tsmc",
        "flowType": "gpu_purchase",
        "amount": 8.6,
        "desc": "2024 Q4: NVIDIA awards TSMC $8.6B for leading-edge wafer allocation and CoWoS packaging."
      },
      {
        "id": "nvda_skhynix_hbm",
        "source": "nvda",
        "target": "skhynix",
        "flowType": "hbm_purchase",
        "amount": 4.9,
        "desc": "2024 Q4: NVIDIA procures $4.9B of exclusive HBM memory stacks from SK Hynix."
      },
      {
        "id": "nvda_samsung_hbm",
        "source": "nvda",
        "target": "samsung",
        "flowType": "hbm_purchase",
        "amount": 3,
        "desc": "2024 Q4: NVIDIA secures $3B in advanced HBM and memory supply from Samsung Electronics."
      },
      {
        "id": "tsmc_asml_equip",
        "source": "tsmc",
        "target": "asml",
        "flowType": "equipment_purchase",
        "amount": 2.9,
        "desc": "2024 Q4: TSMC invests $2.9B in ASML EUV and High-NA lithography scanners."
      },
      {
        "id": "samsung_asml_equip",
        "source": "samsung",
        "target": "asml",
        "flowType": "equipment_purchase",
        "amount": 2.1,
        "desc": "2024 Q4: Samsung Electronics commits $2.1B for ASML EUV scanners."
      },
      {
        "id": "skhynix_asml_equip",
        "source": "skhynix",
        "target": "asml",
        "flowType": "equipment_purchase",
        "amount": 1.6,
        "desc": "2024 Q4: SK Hynix procures $1.6B of ASML EUV systems for HBM DRAM production."
      },
      {
        "id": "goog_avgo_gpu",
        "source": "goog",
        "target": "avgo",
        "flowType": "gpu_purchase",
        "amount": 2.5,
        "desc": "2024 Q4: Google pays Broadcom $2.5B for custom TPU ASIC co-design and optical interconnects."
      },
      {
        "id": "meta_avgo_gpu",
        "source": "meta",
        "target": "avgo",
        "flowType": "gpu_purchase",
        "amount": 2.2,
        "desc": "2024 Q4: Meta allocates $2.2B to Broadcom for MTIA proprietary accelerator silicon design."
      },
      {
        "id": "msft_openai_credit",
        "source": "msft",
        "target": "openai",
        "flowType": "cloud_credit",
        "amount": 3.5,
        "desc": "2024 Q4: Microsoft supplies OpenAI with $3.5B in Azure compute credits and dedicated infrastructure."
      },
      {
        "id": "openai_msft_spend",
        "source": "openai",
        "target": "msft",
        "flowType": "cloud_credit",
        "amount": 2.4,
        "desc": "2024 Q4: OpenAI spends $2.4B in hosting fees and compute consumption paid directly to Microsoft Azure."
      },
      {
        "id": "amzn_anthropic_equity",
        "source": "amzn",
        "target": "anthropic",
        "flowType": "equity_investment",
        "amount": 0,
        "desc": "2024 Q4: Operating under active cloud agreement; no new primary equity capital call."
      },
      {
        "id": "anthropic_amzn_spend",
        "source": "anthropic",
        "target": "amzn",
        "flowType": "cloud_credit",
        "amount": 1.8,
        "desc": "2024 Q4: Anthropic pays $1.8B to AWS for Bedrock compute clusters and Trainium workloads."
      },
      {
        "id": "goog_anthropic_equity",
        "source": "goog",
        "target": "anthropic",
        "flowType": "equity_investment",
        "amount": 0,
        "desc": "2024 Q4: Partnership active; no secondary equity injection in this period."
      },
      {
        "id": "vc_coreweave_debt",
        "source": "vc_sovereign",
        "target": "coreweave",
        "flowType": "debt_collateral",
        "amount": 0,
        "desc": "2024 Q4: Previous GPU debt facility drawn down; no new private debt tranche active."
      },
      {
        "id": "coreweave_nvda_gpu",
        "source": "coreweave",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 4.8,
        "desc": "2024 Q4: CoreWeave purchases $4.8B of NVIDIA GPUs to expand its AI cloud cluster fleet."
      },
      {
        "id": "nvda_coreweave_equity",
        "source": "nvda",
        "target": "coreweave",
        "flowType": "equity_investment",
        "amount": 0,
        "desc": "2024 Q4: Strategic partnership active; no incremental equity transaction this period."
      },
      {
        "id": "coreweave_vc_refinance",
        "source": "coreweave",
        "target": "vc_sovereign",
        "flowType": "debt_collateral",
        "amount": 1.1,
        "desc": "2024 Q4: CoreWeave executes $1.1B in asset-backed securitization (ABS) and debt refinancing."
      },
      {
        "id": "vc_openai_equity",
        "source": "vc_sovereign",
        "target": "openai",
        "flowType": "equity_investment",
        "amount": 6.6,
        "desc": "2024 Q4: Global VC and sovereign syndicates inject $6.6B growth equity into OpenAI."
      },
      {
        "id": "xai_nvda_gpu",
        "source": "xai",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 2.2,
        "desc": "2024 Q4: xAI purchases $2.2B of NVIDIA liquid-cooled GPUs for the Memphis Colossus supercluster."
      },
      {
        "id": "skhynix_tsmc_foundry",
        "source": "skhynix",
        "target": "tsmc",
        "flowType": "gpu_purchase",
        "amount": 0.9,
        "desc": "2024 Q4: SK Hynix contracts TSMC advanced foundry for $0.9B to produce custom HBM4 logic base dies."
      },
      {
        "id": "market_openai_rev",
        "source": "end_market",
        "target": "openai",
        "flowType": "enterprise_revenue",
        "amount": 2.7,
        "desc": "2024 Q4: Enterprises and users generate $2.7B in verified OpenAI software and API revenue."
      },
      {
        "id": "market_msft_rev",
        "source": "end_market",
        "target": "msft",
        "flowType": "enterprise_revenue",
        "amount": 3.6,
        "desc": "2024 Q4: Enterprise clients deliver $3.6B in Microsoft commercial AI revenue."
      },
      {
        "id": "market_anthropic_rev",
        "source": "end_market",
        "target": "anthropic",
        "flowType": "enterprise_revenue",
        "amount": 1.2,
        "desc": "2024 Q4: Enterprise software clients generate $1.2B in Claude API token billing revenue."
      },
      {
        "id": "market_deepseek_rev",
        "source": "end_market",
        "target": "deepseek",
        "flowType": "enterprise_revenue",
        "amount": 0.2,
        "desc": "2024 Q4: DeepSeek generates $0.2B in low-cost high-efficiency reasoning API token revenue."
      }
    ]
  },
  {
    "periodId": "2025-Q1",
    "year": 2025,
    "quarter": 1,
    "label": "2025 Q1",
    "dateRange": "Jan - Mar 2025",
    "title": "2025 Q1: DeepSeek Shock, Algorithmic Efficiency & Stargate Blueprint",
    "summary": "DeepSeek releases DeepSeek-R1, demonstrating frontier reasoning parity at a fraction of reported training cost, sparking intense debates on algorithmic efficiency vs capex intensity. Meanwhile, Microsoft and OpenAI outline plans for \"Stargate\", a 5-gigawatt supercomputing complex.",
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
        "name": "Microsoft",
        "category": "hyperscaler",
        "marketCap": 3380,
        "aiCapex": 17.5,
        "aiRevenue": 2.6,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "World cloud leader, strategic backer of OpenAI with Azure exclusive integration, developer of Maia AI ASICs.",
        "initialX": -140,
        "initialY": -130
      },
      {
        "id": "goog",
        "name": "Alphabet / Google",
        "category": "hyperscaler",
        "marketCap": 2280,
        "aiCapex": 15.5,
        "aiRevenue": 1.9,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "Pioneer of Transformer architecture; custom TPU v4/v5/v6 silicon with Google DeepMind & Gemini.",
        "initialX": -185,
        "initialY": 5
      },
      {
        "id": "amzn",
        "name": "Amazon / AWS",
        "category": "hyperscaler",
        "marketCap": 2200,
        "aiCapex": 17.8,
        "aiRevenue": 1.5,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "World’s largest cloud provider (AWS), key investor in Anthropic ($4B), developing Trainium2 & Inferentia.",
        "initialX": 140,
        "initialY": -130
      },
      {
        "id": "meta",
        "name": "Meta Platforms",
        "category": "hyperscaler",
        "marketCap": 1580,
        "aiCapex": 12.8,
        "aiRevenue": 1,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "Open-source frontier AI champion (LLaMA series), massive GPU cluster operator, MTIA custom silicon.",
        "initialX": 185,
        "initialY": 5
      },
      {
        "id": "nvda",
        "name": "NVIDIA",
        "category": "chipmaker",
        "marketCap": 3450,
        "aiCapex": 1.5,
        "aiRevenue": 36.5,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "Global GPU monopoly (A100/H100/B200/Rubin) and proprietary CUDA software moat capturing 75%+ gross margins.",
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
        "desc": "World’s exclusive pure-play foundry and CoWoS advanced packaging monopoly powering all advanced AI accelerators.",
        "initialX": -130,
        "initialY": 190
      },
      {
        "id": "avgo",
        "name": "Broadcom",
        "category": "chipmaker",
        "marketCap": 820,
        "aiCapex": 0.6,
        "aiRevenue": 4.5,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "Leader in custom AI ASICs (Google TPU, Meta MTIA) and high-speed Tomahawk/Jericho AI networking fabrics.",
        "initialX": -215,
        "initialY": 115
      },
      {
        "id": "skhynix",
        "name": "SK Hynix",
        "category": "semiconductor_supply",
        "marketCap": 130,
        "aiCapex": 3.5,
        "aiRevenue": 5.2,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "World’s undisputed leader in High Bandwidth Memory (HBM3, HBM3E, HBM4), primary memory supplier to NVIDIA.",
        "initialX": -20,
        "initialY": -210
      },
      {
        "id": "samsung",
        "name": "Samsung Electronics",
        "category": "semiconductor_supply",
        "marketCap": 400,
        "aiCapex": 11,
        "aiRevenue": 4.2,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "World’s largest memory semiconductor producer, pioneer of 12-layer HBM3E and turnkey foundry/memory solutions.",
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
        "desc": "Monopoly provider of EUV and High-NA EUV lithography equipment essential for 3nm/2nm advanced semiconductor nodes.",
        "initialX": 20,
        "initialY": 235
      },
      {
        "id": "openai",
        "name": "OpenAI",
        "category": "ai_lab",
        "marketCap": 190,
        "aiCapex": 3.2,
        "aiRevenue": 2.2,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "Frontier AI lab creator of ChatGPT, GPT-4, and o1 reasoning models; key partner in the $100B Stargate campus.",
        "initialX": -60,
        "initialY": -55
      },
      {
        "id": "anthropic",
        "name": "Anthropic",
        "category": "ai_lab",
        "marketCap": 52,
        "aiCapex": 1.8,
        "aiRevenue": 0.6,
        "isFormed": true,
        "isHighGrowth": true,
        "desc": "Frontier safety lab creator of Claude 3.5 Sonnet and Computer Use; backed by multi-billion commitments from Amazon & Google.",
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
        "desc": "Elon Musk’s AI frontier initiative operating the world’s largest 100k+ liquid-cooled Colossus supercluster in Memphis.",
        "initialX": 75,
        "initialY": 45
      },
      {
        "id": "deepseek",
        "name": "DeepSeek",
        "category": "ai_lab",
        "marketCap": 22,
        "aiCapex": 0.4,
        "aiRevenue": 0.45,
        "isFormed": true,
        "isHighGrowth": true,
        "desc": "Pioneered extreme algorithmic efficiency and low-cost open reasoning models (DeepSeek-V3 & R1) disrupting capex intensity.",
        "initialX": -75,
        "initialY": 45
      },
      {
        "id": "coreweave",
        "name": "CoreWeave",
        "category": "neocloud",
        "marketCap": 22,
        "aiCapex": 4.8,
        "aiRevenue": 1.1,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "Pioneer of GPU-collateralized debt financing ($2.3B in 2023, $7.5B in 2024), scaling specialized Neocloud infrastructure.",
        "initialX": 0,
        "initialY": 85
      },
      {
        "id": "vc_sovereign",
        "name": "VC & Sovereign Funds",
        "category": "venture_capital",
        "marketCap": 500,
        "aiCapex": 0,
        "aiRevenue": 0,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "Global venture syndicates (Sequoia, a16z, Thrive, SoftBank) and sovereign wealth funds (MGX, PIF) funding mega-rounds.",
        "initialX": 220,
        "initialY": 155
      },
      {
        "id": "end_market",
        "name": "Enterprise & End Users",
        "category": "end_market",
        "marketCap": 1200,
        "aiCapex": 0,
        "aiRevenue": 8.9,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "Real-world corporate IT budgets, developer API billing, and consumer subscriptions representing verified software revenue.",
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
        "desc": "2025 Q1: Microsoft allocates $10.5B to procure NVIDIA accelerator server clusters for Azure AI."
      },
      {
        "id": "goog_nvda_gpu",
        "source": "goog",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 7.8,
        "desc": "2025 Q1: Google deploys $7.8B for NVIDIA GPU clusters alongside custom TPU silicon."
      },
      {
        "id": "amzn_nvda_gpu",
        "source": "amzn",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 9,
        "desc": "2025 Q1: Amazon AWS purchases $9B in NVIDIA GPUs for scalable UltraClusters."
      },
      {
        "id": "meta_nvda_gpu",
        "source": "meta",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 8.8,
        "desc": "2025 Q1: Meta allocates $8.8B to NVIDIA GPUs for next-gen LLaMA model clusters."
      },
      {
        "id": "nvda_tsmc_gpu",
        "source": "nvda",
        "target": "tsmc",
        "flowType": "gpu_purchase",
        "amount": 9.8,
        "desc": "2025 Q1: NVIDIA awards TSMC $9.8B for leading-edge wafer allocation and CoWoS packaging."
      },
      {
        "id": "nvda_skhynix_hbm",
        "source": "nvda",
        "target": "skhynix",
        "flowType": "hbm_purchase",
        "amount": 5.5,
        "desc": "2025 Q1: NVIDIA procures $5.5B of exclusive HBM memory stacks from SK Hynix."
      },
      {
        "id": "nvda_samsung_hbm",
        "source": "nvda",
        "target": "samsung",
        "flowType": "hbm_purchase",
        "amount": 3.8,
        "desc": "2025 Q1: NVIDIA secures $3.8B in advanced HBM and memory supply from Samsung Electronics."
      },
      {
        "id": "tsmc_asml_equip",
        "source": "tsmc",
        "target": "asml",
        "flowType": "equipment_purchase",
        "amount": 3.2,
        "desc": "2025 Q1: TSMC invests $3.2B in ASML EUV and High-NA lithography scanners."
      },
      {
        "id": "samsung_asml_equip",
        "source": "samsung",
        "target": "asml",
        "flowType": "equipment_purchase",
        "amount": 2.3,
        "desc": "2025 Q1: Samsung Electronics commits $2.3B for ASML EUV scanners."
      },
      {
        "id": "skhynix_asml_equip",
        "source": "skhynix",
        "target": "asml",
        "flowType": "equipment_purchase",
        "amount": 1.8,
        "desc": "2025 Q1: SK Hynix procures $1.8B of ASML EUV systems for HBM DRAM production."
      },
      {
        "id": "goog_avgo_gpu",
        "source": "goog",
        "target": "avgo",
        "flowType": "gpu_purchase",
        "amount": 3,
        "desc": "2025 Q1: Google pays Broadcom $3B for custom TPU ASIC co-design and optical interconnects."
      },
      {
        "id": "meta_avgo_gpu",
        "source": "meta",
        "target": "avgo",
        "flowType": "gpu_purchase",
        "amount": 2.6,
        "desc": "2025 Q1: Meta allocates $2.6B to Broadcom for MTIA proprietary accelerator silicon design."
      },
      {
        "id": "msft_openai_credit",
        "source": "msft",
        "target": "openai",
        "flowType": "cloud_credit",
        "amount": 3.8,
        "desc": "2025 Q1: Microsoft supplies OpenAI with $3.8B in Azure compute credits and dedicated infrastructure."
      },
      {
        "id": "openai_msft_spend",
        "source": "openai",
        "target": "msft",
        "flowType": "cloud_credit",
        "amount": 2.9,
        "desc": "2025 Q1: OpenAI spends $2.9B in hosting fees and compute consumption paid directly to Microsoft Azure."
      },
      {
        "id": "amzn_anthropic_equity",
        "source": "amzn",
        "target": "anthropic",
        "flowType": "equity_investment",
        "amount": 4,
        "desc": "2025 Q1: Amazon executes a strategic growth capital tranche of $4B into Anthropic."
      },
      {
        "id": "anthropic_amzn_spend",
        "source": "anthropic",
        "target": "amzn",
        "flowType": "cloud_credit",
        "amount": 2.2,
        "desc": "2025 Q1: Anthropic pays $2.2B to AWS for Bedrock compute clusters and Trainium workloads."
      },
      {
        "id": "goog_anthropic_equity",
        "source": "goog",
        "target": "anthropic",
        "flowType": "equity_investment",
        "amount": 0,
        "desc": "2025 Q1: Partnership active; no secondary equity injection in this period."
      },
      {
        "id": "vc_coreweave_debt",
        "source": "vc_sovereign",
        "target": "coreweave",
        "flowType": "debt_collateral",
        "amount": 0,
        "desc": "2025 Q1: Previous GPU debt facility drawn down; no new private debt tranche active."
      },
      {
        "id": "coreweave_nvda_gpu",
        "source": "coreweave",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 5.2,
        "desc": "2025 Q1: CoreWeave purchases $5.2B of NVIDIA GPUs to expand its AI cloud cluster fleet."
      },
      {
        "id": "nvda_coreweave_equity",
        "source": "nvda",
        "target": "coreweave",
        "flowType": "equity_investment",
        "amount": 0,
        "desc": "2025 Q1: Strategic partnership active; no incremental equity transaction this period."
      },
      {
        "id": "coreweave_vc_refinance",
        "source": "coreweave",
        "target": "vc_sovereign",
        "flowType": "debt_collateral",
        "amount": 1.5,
        "desc": "2025 Q1: CoreWeave executes $1.5B in asset-backed securitization (ABS) and debt refinancing."
      },
      {
        "id": "vc_openai_equity",
        "source": "vc_sovereign",
        "target": "openai",
        "flowType": "equity_investment",
        "amount": 0,
        "desc": "2025 Q1: Operating on existing treasury; no primary mega equity financing tranche active."
      },
      {
        "id": "xai_nvda_gpu",
        "source": "xai",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 2.8,
        "desc": "2025 Q1: xAI purchases $2.8B of NVIDIA liquid-cooled GPUs for the Memphis Colossus supercluster."
      },
      {
        "id": "skhynix_tsmc_foundry",
        "source": "skhynix",
        "target": "tsmc",
        "flowType": "gpu_purchase",
        "amount": 1.2,
        "desc": "2025 Q1: SK Hynix contracts TSMC advanced foundry for $1.2B to produce custom HBM4 logic base dies."
      },
      {
        "id": "market_openai_rev",
        "source": "end_market",
        "target": "openai",
        "flowType": "enterprise_revenue",
        "amount": 3.5,
        "desc": "2025 Q1: Enterprises and users generate $3.5B in verified OpenAI software and API revenue."
      },
      {
        "id": "market_msft_rev",
        "source": "end_market",
        "target": "msft",
        "flowType": "enterprise_revenue",
        "amount": 4.8,
        "desc": "2025 Q1: Enterprise clients deliver $4.8B in Microsoft commercial AI revenue."
      },
      {
        "id": "market_anthropic_rev",
        "source": "end_market",
        "target": "anthropic",
        "flowType": "enterprise_revenue",
        "amount": 1.8,
        "desc": "2025 Q1: Enterprise software clients generate $1.8B in Claude API token billing revenue."
      },
      {
        "id": "market_deepseek_rev",
        "source": "end_market",
        "target": "deepseek",
        "flowType": "enterprise_revenue",
        "amount": 0.45,
        "desc": "2025 Q1: DeepSeek generates $0.45B in low-cost high-efficiency reasoning API token revenue."
      }
    ]
  },
  {
    "periodId": "2025-Q2",
    "year": 2025,
    "quarter": 2,
    "label": "2025 Q2",
    "dateRange": "Apr - Jun 2025",
    "title": "2025 Q2: Blackwell Volume Deployment & Samsung HBM3E Qualification",
    "summary": "NVIDIA accelerates shipments of GB200 NVL72 liquid-cooled rack systems at $3M+ per cabinet. Samsung completes supply qualification for top-tier AI accelerator clients. Hyperscaler quarterly Capex surpasses $68B, straining regional electrical grids and substation supply chains.",
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
        "name": "Microsoft",
        "category": "hyperscaler",
        "marketCap": 3520,
        "aiCapex": 19.2,
        "aiRevenue": 3,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "World cloud leader, strategic backer of OpenAI with Azure exclusive integration, developer of Maia AI ASICs.",
        "initialX": -140,
        "initialY": -130
      },
      {
        "id": "goog",
        "name": "Alphabet / Google",
        "category": "hyperscaler",
        "marketCap": 2350,
        "aiCapex": 16.8,
        "aiRevenue": 2.2,
        "isFormed": true,
        "isHighGrowth": true,
        "desc": "Pioneer of Transformer architecture; custom TPU v4/v5/v6 silicon with Google DeepMind & Gemini.",
        "initialX": -185,
        "initialY": 5
      },
      {
        "id": "amzn",
        "name": "Amazon / AWS",
        "category": "hyperscaler",
        "marketCap": 2310,
        "aiCapex": 19.5,
        "aiRevenue": 1.8,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "World’s largest cloud provider (AWS), key investor in Anthropic ($4B), developing Trainium2 & Inferentia.",
        "initialX": 140,
        "initialY": -130
      },
      {
        "id": "meta",
        "name": "Meta Platforms",
        "category": "hyperscaler",
        "marketCap": 1640,
        "aiCapex": 13.5,
        "aiRevenue": 1.2,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "Open-source frontier AI champion (LLaMA series), massive GPU cluster operator, MTIA custom silicon.",
        "initialX": 185,
        "initialY": 5
      },
      {
        "id": "nvda",
        "name": "NVIDIA",
        "category": "chipmaker",
        "marketCap": 3650,
        "aiCapex": 1.6,
        "aiRevenue": 39.2,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "Global GPU monopoly (A100/H100/B200/Rubin) and proprietary CUDA software moat capturing 75%+ gross margins.",
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
        "desc": "World’s exclusive pure-play foundry and CoWoS advanced packaging monopoly powering all advanced AI accelerators.",
        "initialX": -130,
        "initialY": 190
      },
      {
        "id": "avgo",
        "name": "Broadcom",
        "category": "chipmaker",
        "marketCap": 860,
        "aiCapex": 0.65,
        "aiRevenue": 4.8,
        "isFormed": true,
        "isHighGrowth": true,
        "desc": "Leader in custom AI ASICs (Google TPU, Meta MTIA) and high-speed Tomahawk/Jericho AI networking fabrics.",
        "initialX": -215,
        "initialY": 115
      },
      {
        "id": "skhynix",
        "name": "SK Hynix",
        "category": "semiconductor_supply",
        "marketCap": 135,
        "aiCapex": 3.8,
        "aiRevenue": 5.6,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "World’s undisputed leader in High Bandwidth Memory (HBM3, HBM3E, HBM4), primary memory supplier to NVIDIA.",
        "initialX": -20,
        "initialY": -210
      },
      {
        "id": "samsung",
        "name": "Samsung Electronics",
        "category": "semiconductor_supply",
        "marketCap": 420,
        "aiCapex": 11.5,
        "aiRevenue": 4.9,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "World’s largest memory semiconductor producer, pioneer of 12-layer HBM3E and turnkey foundry/memory solutions.",
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
        "desc": "Monopoly provider of EUV and High-NA EUV lithography equipment essential for 3nm/2nm advanced semiconductor nodes.",
        "initialX": 20,
        "initialY": 235
      },
      {
        "id": "openai",
        "name": "OpenAI",
        "category": "ai_lab",
        "marketCap": 210,
        "aiCapex": 3.8,
        "aiRevenue": 2.5,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "Frontier AI lab creator of ChatGPT, GPT-4, and o1 reasoning models; key partner in the $100B Stargate campus.",
        "initialX": -60,
        "initialY": -55
      },
      {
        "id": "anthropic",
        "name": "Anthropic",
        "category": "ai_lab",
        "marketCap": 60,
        "aiCapex": 2,
        "aiRevenue": 0.8,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "Frontier safety lab creator of Claude 3.5 Sonnet and Computer Use; backed by multi-billion commitments from Amazon & Google.",
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
        "desc": "Elon Musk’s AI frontier initiative operating the world’s largest 100k+ liquid-cooled Colossus supercluster in Memphis.",
        "initialX": 75,
        "initialY": 45
      },
      {
        "id": "deepseek",
        "name": "DeepSeek",
        "category": "ai_lab",
        "marketCap": 26,
        "aiCapex": 0.5,
        "aiRevenue": 0.5,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "Pioneered extreme algorithmic efficiency and low-cost open reasoning models (DeepSeek-V3 & R1) disrupting capex intensity.",
        "initialX": -75,
        "initialY": 45
      },
      {
        "id": "coreweave",
        "name": "CoreWeave",
        "category": "neocloud",
        "marketCap": 25,
        "aiCapex": 5.2,
        "aiRevenue": 1.3,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "Pioneer of GPU-collateralized debt financing ($2.3B in 2023, $7.5B in 2024), scaling specialized Neocloud infrastructure.",
        "initialX": 0,
        "initialY": 85
      },
      {
        "id": "vc_sovereign",
        "name": "VC & Sovereign Funds",
        "category": "venture_capital",
        "marketCap": 500,
        "aiCapex": 0,
        "aiRevenue": 0,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "Global venture syndicates (Sequoia, a16z, Thrive, SoftBank) and sovereign wealth funds (MGX, PIF) funding mega-rounds.",
        "initialX": 220,
        "initialY": 155
      },
      {
        "id": "end_market",
        "name": "Enterprise & End Users",
        "category": "end_market",
        "marketCap": 1200,
        "aiCapex": 0,
        "aiRevenue": 10.5,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "Real-world corporate IT budgets, developer API billing, and consumer subscriptions representing verified software revenue.",
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
        "desc": "2025 Q2: Microsoft allocates $12B to procure NVIDIA accelerator server clusters for Azure AI."
      },
      {
        "id": "goog_nvda_gpu",
        "source": "goog",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 8.9,
        "desc": "2025 Q2: Google deploys $8.9B for NVIDIA GPU clusters alongside custom TPU silicon."
      },
      {
        "id": "amzn_nvda_gpu",
        "source": "amzn",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 10.2,
        "desc": "2025 Q2: Amazon AWS purchases $10.2B in NVIDIA GPUs for scalable UltraClusters."
      },
      {
        "id": "meta_nvda_gpu",
        "source": "meta",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 9.8,
        "desc": "2025 Q2: Meta allocates $9.8B to NVIDIA GPUs for next-gen LLaMA model clusters."
      },
      {
        "id": "nvda_tsmc_gpu",
        "source": "nvda",
        "target": "tsmc",
        "flowType": "gpu_purchase",
        "amount": 11.2,
        "desc": "2025 Q2: NVIDIA awards TSMC $11.2B for leading-edge wafer allocation and CoWoS packaging."
      },
      {
        "id": "nvda_skhynix_hbm",
        "source": "nvda",
        "target": "skhynix",
        "flowType": "hbm_purchase",
        "amount": 6,
        "desc": "2025 Q2: NVIDIA procures $6B of exclusive HBM memory stacks from SK Hynix."
      },
      {
        "id": "nvda_samsung_hbm",
        "source": "nvda",
        "target": "samsung",
        "flowType": "hbm_purchase",
        "amount": 4.4,
        "desc": "2025 Q2: NVIDIA secures $4.4B in advanced HBM and memory supply from Samsung Electronics."
      },
      {
        "id": "tsmc_asml_equip",
        "source": "tsmc",
        "target": "asml",
        "flowType": "equipment_purchase",
        "amount": 3.4,
        "desc": "2025 Q2: TSMC invests $3.4B in ASML EUV and High-NA lithography scanners."
      },
      {
        "id": "samsung_asml_equip",
        "source": "samsung",
        "target": "asml",
        "flowType": "equipment_purchase",
        "amount": 2.5,
        "desc": "2025 Q2: Samsung Electronics commits $2.5B for ASML EUV scanners."
      },
      {
        "id": "skhynix_asml_equip",
        "source": "skhynix",
        "target": "asml",
        "flowType": "equipment_purchase",
        "amount": 2,
        "desc": "2025 Q2: SK Hynix procures $2B of ASML EUV systems for HBM DRAM production."
      },
      {
        "id": "goog_avgo_gpu",
        "source": "goog",
        "target": "avgo",
        "flowType": "gpu_purchase",
        "amount": 3.4,
        "desc": "2025 Q2: Google pays Broadcom $3.4B for custom TPU ASIC co-design and optical interconnects."
      },
      {
        "id": "meta_avgo_gpu",
        "source": "meta",
        "target": "avgo",
        "flowType": "gpu_purchase",
        "amount": 2.9,
        "desc": "2025 Q2: Meta allocates $2.9B to Broadcom for MTIA proprietary accelerator silicon design."
      },
      {
        "id": "msft_openai_credit",
        "source": "msft",
        "target": "openai",
        "flowType": "cloud_credit",
        "amount": 4,
        "desc": "2025 Q2: Microsoft supplies OpenAI with $4B in Azure compute credits and dedicated infrastructure."
      },
      {
        "id": "openai_msft_spend",
        "source": "openai",
        "target": "msft",
        "flowType": "cloud_credit",
        "amount": 3.4,
        "desc": "2025 Q2: OpenAI spends $3.4B in hosting fees and compute consumption paid directly to Microsoft Azure."
      },
      {
        "id": "amzn_anthropic_equity",
        "source": "amzn",
        "target": "anthropic",
        "flowType": "equity_investment",
        "amount": 0,
        "desc": "2025 Q2: Operating under active cloud agreement; no new primary equity capital call."
      },
      {
        "id": "anthropic_amzn_spend",
        "source": "anthropic",
        "target": "amzn",
        "flowType": "cloud_credit",
        "amount": 2.6,
        "desc": "2025 Q2: Anthropic pays $2.6B to AWS for Bedrock compute clusters and Trainium workloads."
      },
      {
        "id": "goog_anthropic_equity",
        "source": "goog",
        "target": "anthropic",
        "flowType": "equity_investment",
        "amount": 1.5,
        "desc": "2025 Q2: Google injects $1.5B strategic growth equity into Anthropic alongside GCP partnership."
      },
      {
        "id": "vc_coreweave_debt",
        "source": "vc_sovereign",
        "target": "coreweave",
        "flowType": "debt_collateral",
        "amount": 0,
        "desc": "2025 Q2: Previous GPU debt facility drawn down; no new private debt tranche active."
      },
      {
        "id": "coreweave_nvda_gpu",
        "source": "coreweave",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 5.8,
        "desc": "2025 Q2: CoreWeave purchases $5.8B of NVIDIA GPUs to expand its AI cloud cluster fleet."
      },
      {
        "id": "nvda_coreweave_equity",
        "source": "nvda",
        "target": "coreweave",
        "flowType": "equity_investment",
        "amount": 0.8,
        "desc": "2025 Q2: NVIDIA invests $0.8B strategic equity into Neocloud partner CoreWeave."
      },
      {
        "id": "coreweave_vc_refinance",
        "source": "coreweave",
        "target": "vc_sovereign",
        "flowType": "debt_collateral",
        "amount": 1.8,
        "desc": "2025 Q2: CoreWeave executes $1.8B in asset-backed securitization (ABS) and debt refinancing."
      },
      {
        "id": "vc_openai_equity",
        "source": "vc_sovereign",
        "target": "openai",
        "flowType": "equity_investment",
        "amount": 0,
        "desc": "2025 Q2: Operating on existing treasury; no primary mega equity financing tranche active."
      },
      {
        "id": "xai_nvda_gpu",
        "source": "xai",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 4,
        "desc": "2025 Q2: xAI purchases $4B of NVIDIA liquid-cooled GPUs for the Memphis Colossus supercluster."
      },
      {
        "id": "skhynix_tsmc_foundry",
        "source": "skhynix",
        "target": "tsmc",
        "flowType": "gpu_purchase",
        "amount": 1.5,
        "desc": "2025 Q2: SK Hynix contracts TSMC advanced foundry for $1.5B to produce custom HBM4 logic base dies."
      },
      {
        "id": "market_openai_rev",
        "source": "end_market",
        "target": "openai",
        "flowType": "enterprise_revenue",
        "amount": 4.4,
        "desc": "2025 Q2: Enterprises and users generate $4.4B in verified OpenAI software and API revenue."
      },
      {
        "id": "market_msft_rev",
        "source": "end_market",
        "target": "msft",
        "flowType": "enterprise_revenue",
        "amount": 6.2,
        "desc": "2025 Q2: Enterprise clients deliver $6.2B in Microsoft commercial AI revenue."
      },
      {
        "id": "market_anthropic_rev",
        "source": "end_market",
        "target": "anthropic",
        "flowType": "enterprise_revenue",
        "amount": 2.5,
        "desc": "2025 Q2: Enterprise software clients generate $2.5B in Claude API token billing revenue."
      },
      {
        "id": "market_deepseek_rev",
        "source": "end_market",
        "target": "deepseek",
        "flowType": "enterprise_revenue",
        "amount": 0.7,
        "desc": "2025 Q2: DeepSeek generates $0.7B in low-cost high-efficiency reasoning API token revenue."
      }
    ]
  },
  {
    "periodId": "2025-Q3",
    "year": 2025,
    "quarter": 3,
    "label": "2025 Q3",
    "dateRange": "Jul - Sep 2025",
    "title": "2025 Q3: The 3-Year Depreciation Cliff & Neocloud Refinancing",
    "summary": "First-generation 2022/2023 H100 clusters enter their 3-year corporate depreciation window, losing rental pricing power as Blackwell becomes the industry standard. Neoclouds face collateral valuation tests from private credit lenders while enterprise AI agent spending accelerates.",
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
        "name": "Microsoft",
        "category": "hyperscaler",
        "marketCap": 3450,
        "aiCapex": 20.5,
        "aiRevenue": 3.3,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "World cloud leader, strategic backer of OpenAI with Azure exclusive integration, developer of Maia AI ASICs.",
        "initialX": -140,
        "initialY": -130
      },
      {
        "id": "goog",
        "name": "Alphabet / Google",
        "category": "hyperscaler",
        "marketCap": 2340,
        "aiCapex": 17.2,
        "aiRevenue": 2.5,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "Pioneer of Transformer architecture; custom TPU v4/v5/v6 silicon with Google DeepMind & Gemini.",
        "initialX": -185,
        "initialY": 5
      },
      {
        "id": "amzn",
        "name": "Amazon / AWS",
        "category": "hyperscaler",
        "marketCap": 2280,
        "aiCapex": 20,
        "aiRevenue": 2.1,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "World’s largest cloud provider (AWS), key investor in Anthropic ($4B), developing Trainium2 & Inferentia.",
        "initialX": 140,
        "initialY": -130
      },
      {
        "id": "meta",
        "name": "Meta Platforms",
        "category": "hyperscaler",
        "marketCap": 1610,
        "aiCapex": 14.2,
        "aiRevenue": 1.4,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "Open-source frontier AI champion (LLaMA series), massive GPU cluster operator, MTIA custom silicon.",
        "initialX": 185,
        "initialY": 5
      },
      {
        "id": "nvda",
        "name": "NVIDIA",
        "category": "chipmaker",
        "marketCap": 3580,
        "aiCapex": 1.7,
        "aiRevenue": 41,
        "isFormed": true,
        "isHighGrowth": true,
        "desc": "Global GPU monopoly (A100/H100/B200/Rubin) and proprietary CUDA software moat capturing 75%+ gross margins.",
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
        "desc": "World’s exclusive pure-play foundry and CoWoS advanced packaging monopoly powering all advanced AI accelerators.",
        "initialX": -130,
        "initialY": 190
      },
      {
        "id": "avgo",
        "name": "Broadcom",
        "category": "chipmaker",
        "marketCap": 840,
        "aiCapex": 0.7,
        "aiRevenue": 5.1,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "Leader in custom AI ASICs (Google TPU, Meta MTIA) and high-speed Tomahawk/Jericho AI networking fabrics.",
        "initialX": -215,
        "initialY": 115
      },
      {
        "id": "skhynix",
        "name": "SK Hynix",
        "category": "semiconductor_supply",
        "marketCap": 130,
        "aiCapex": 4,
        "aiRevenue": 5.8,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "World’s undisputed leader in High Bandwidth Memory (HBM3, HBM3E, HBM4), primary memory supplier to NVIDIA.",
        "initialX": -20,
        "initialY": -210
      },
      {
        "id": "samsung",
        "name": "Samsung Electronics",
        "category": "semiconductor_supply",
        "marketCap": 410,
        "aiCapex": 11.8,
        "aiRevenue": 5.3,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "World’s largest memory semiconductor producer, pioneer of 12-layer HBM3E and turnkey foundry/memory solutions.",
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
        "desc": "Monopoly provider of EUV and High-NA EUV lithography equipment essential for 3nm/2nm advanced semiconductor nodes.",
        "initialX": 20,
        "initialY": 235
      },
      {
        "id": "openai",
        "name": "OpenAI",
        "category": "ai_lab",
        "marketCap": 220,
        "aiCapex": 4.2,
        "aiRevenue": 2.8,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "Frontier AI lab creator of ChatGPT, GPT-4, and o1 reasoning models; key partner in the $100B Stargate campus.",
        "initialX": -60,
        "initialY": -55
      },
      {
        "id": "anthropic",
        "name": "Anthropic",
        "category": "ai_lab",
        "marketCap": 65,
        "aiCapex": 2.2,
        "aiRevenue": 1,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "Frontier safety lab creator of Claude 3.5 Sonnet and Computer Use; backed by multi-billion commitments from Amazon & Google.",
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
        "desc": "Elon Musk’s AI frontier initiative operating the world’s largest 100k+ liquid-cooled Colossus supercluster in Memphis.",
        "initialX": 75,
        "initialY": 45
      },
      {
        "id": "deepseek",
        "name": "DeepSeek",
        "category": "ai_lab",
        "marketCap": 28,
        "aiCapex": 0.6,
        "aiRevenue": 0.6,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "Pioneered extreme algorithmic efficiency and low-cost open reasoning models (DeepSeek-V3 & R1) disrupting capex intensity.",
        "initialX": -75,
        "initialY": 45
      },
      {
        "id": "coreweave",
        "name": "CoreWeave",
        "category": "neocloud",
        "marketCap": 28,
        "aiCapex": 5.5,
        "aiRevenue": 1.5,
        "isFormed": true,
        "isHighGrowth": true,
        "desc": "Pioneer of GPU-collateralized debt financing ($2.3B in 2023, $7.5B in 2024), scaling specialized Neocloud infrastructure.",
        "initialX": 0,
        "initialY": 85
      },
      {
        "id": "vc_sovereign",
        "name": "VC & Sovereign Funds",
        "category": "venture_capital",
        "marketCap": 500,
        "aiCapex": 0,
        "aiRevenue": 0,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "Global venture syndicates (Sequoia, a16z, Thrive, SoftBank) and sovereign wealth funds (MGX, PIF) funding mega-rounds.",
        "initialX": 220,
        "initialY": 155
      },
      {
        "id": "end_market",
        "name": "Enterprise & End Users",
        "category": "end_market",
        "marketCap": 1200,
        "aiCapex": 0,
        "aiRevenue": 12.1,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "Real-world corporate IT budgets, developer API billing, and consumer subscriptions representing verified software revenue.",
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
        "desc": "2025 Q3: Microsoft allocates $13.2B to procure NVIDIA accelerator server clusters for Azure AI."
      },
      {
        "id": "goog_nvda_gpu",
        "source": "goog",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 9.8,
        "desc": "2025 Q3: Google deploys $9.8B for NVIDIA GPU clusters alongside custom TPU silicon."
      },
      {
        "id": "amzn_nvda_gpu",
        "source": "amzn",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 11.5,
        "desc": "2025 Q3: Amazon AWS purchases $11.5B in NVIDIA GPUs for scalable UltraClusters."
      },
      {
        "id": "meta_nvda_gpu",
        "source": "meta",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 10.8,
        "desc": "2025 Q3: Meta allocates $10.8B to NVIDIA GPUs for next-gen LLaMA model clusters."
      },
      {
        "id": "nvda_tsmc_gpu",
        "source": "nvda",
        "target": "tsmc",
        "flowType": "gpu_purchase",
        "amount": 12.5,
        "desc": "2025 Q3: NVIDIA awards TSMC $12.5B for leading-edge wafer allocation and CoWoS packaging."
      },
      {
        "id": "nvda_skhynix_hbm",
        "source": "nvda",
        "target": "skhynix",
        "flowType": "hbm_purchase",
        "amount": 6.4,
        "desc": "2025 Q3: NVIDIA procures $6.4B of exclusive HBM memory stacks from SK Hynix."
      },
      {
        "id": "nvda_samsung_hbm",
        "source": "nvda",
        "target": "samsung",
        "flowType": "hbm_purchase",
        "amount": 4.9,
        "desc": "2025 Q3: NVIDIA secures $4.9B in advanced HBM and memory supply from Samsung Electronics."
      },
      {
        "id": "tsmc_asml_equip",
        "source": "tsmc",
        "target": "asml",
        "flowType": "equipment_purchase",
        "amount": 3.6,
        "desc": "2025 Q3: TSMC invests $3.6B in ASML EUV and High-NA lithography scanners."
      },
      {
        "id": "samsung_asml_equip",
        "source": "samsung",
        "target": "asml",
        "flowType": "equipment_purchase",
        "amount": 2.7,
        "desc": "2025 Q3: Samsung Electronics commits $2.7B for ASML EUV scanners."
      },
      {
        "id": "skhynix_asml_equip",
        "source": "skhynix",
        "target": "asml",
        "flowType": "equipment_purchase",
        "amount": 2.1,
        "desc": "2025 Q3: SK Hynix procures $2.1B of ASML EUV systems for HBM DRAM production."
      },
      {
        "id": "goog_avgo_gpu",
        "source": "goog",
        "target": "avgo",
        "flowType": "gpu_purchase",
        "amount": 3.8,
        "desc": "2025 Q3: Google pays Broadcom $3.8B for custom TPU ASIC co-design and optical interconnects."
      },
      {
        "id": "meta_avgo_gpu",
        "source": "meta",
        "target": "avgo",
        "flowType": "gpu_purchase",
        "amount": 3.2,
        "desc": "2025 Q3: Meta allocates $3.2B to Broadcom for MTIA proprietary accelerator silicon design."
      },
      {
        "id": "msft_openai_credit",
        "source": "msft",
        "target": "openai",
        "flowType": "cloud_credit",
        "amount": 4.2,
        "desc": "2025 Q3: Microsoft supplies OpenAI with $4.2B in Azure compute credits and dedicated infrastructure."
      },
      {
        "id": "openai_msft_spend",
        "source": "openai",
        "target": "msft",
        "flowType": "cloud_credit",
        "amount": 3.9,
        "desc": "2025 Q3: OpenAI spends $3.9B in hosting fees and compute consumption paid directly to Microsoft Azure."
      },
      {
        "id": "amzn_anthropic_equity",
        "source": "amzn",
        "target": "anthropic",
        "flowType": "equity_investment",
        "amount": 0,
        "desc": "2025 Q3: Operating under active cloud agreement; no new primary equity capital call."
      },
      {
        "id": "anthropic_amzn_spend",
        "source": "anthropic",
        "target": "amzn",
        "flowType": "cloud_credit",
        "amount": 3,
        "desc": "2025 Q3: Anthropic pays $3B to AWS for Bedrock compute clusters and Trainium workloads."
      },
      {
        "id": "goog_anthropic_equity",
        "source": "goog",
        "target": "anthropic",
        "flowType": "equity_investment",
        "amount": 0,
        "desc": "2025 Q3: Partnership active; no secondary equity injection in this period."
      },
      {
        "id": "vc_coreweave_debt",
        "source": "vc_sovereign",
        "target": "coreweave",
        "flowType": "debt_collateral",
        "amount": 6,
        "desc": "2025 Q3: Private debt syndicate (Blackstone, Magnetar) provides $6B loan collateralized by GPUs."
      },
      {
        "id": "coreweave_nvda_gpu",
        "source": "coreweave",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 6.5,
        "desc": "2025 Q3: CoreWeave purchases $6.5B of NVIDIA GPUs to expand its AI cloud cluster fleet."
      },
      {
        "id": "nvda_coreweave_equity",
        "source": "nvda",
        "target": "coreweave",
        "flowType": "equity_investment",
        "amount": 0,
        "desc": "2025 Q3: Strategic partnership active; no incremental equity transaction this period."
      },
      {
        "id": "coreweave_vc_refinance",
        "source": "coreweave",
        "target": "vc_sovereign",
        "flowType": "debt_collateral",
        "amount": 2.2,
        "desc": "2025 Q3: CoreWeave executes $2.2B in asset-backed securitization (ABS) and debt refinancing."
      },
      {
        "id": "vc_openai_equity",
        "source": "vc_sovereign",
        "target": "openai",
        "flowType": "equity_investment",
        "amount": 0,
        "desc": "2025 Q3: Operating on existing treasury; no primary mega equity financing tranche active."
      },
      {
        "id": "xai_nvda_gpu",
        "source": "xai",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 3.2,
        "desc": "2025 Q3: xAI purchases $3.2B of NVIDIA liquid-cooled GPUs for the Memphis Colossus supercluster."
      },
      {
        "id": "skhynix_tsmc_foundry",
        "source": "skhynix",
        "target": "tsmc",
        "flowType": "gpu_purchase",
        "amount": 1.8,
        "desc": "2025 Q3: SK Hynix contracts TSMC advanced foundry for $1.8B to produce custom HBM4 logic base dies."
      },
      {
        "id": "market_openai_rev",
        "source": "end_market",
        "target": "openai",
        "flowType": "enterprise_revenue",
        "amount": 5.5,
        "desc": "2025 Q3: Enterprises and users generate $5.5B in verified OpenAI software and API revenue."
      },
      {
        "id": "market_msft_rev",
        "source": "end_market",
        "target": "msft",
        "flowType": "enterprise_revenue",
        "amount": 7.8,
        "desc": "2025 Q3: Enterprise clients deliver $7.8B in Microsoft commercial AI revenue."
      },
      {
        "id": "market_anthropic_rev",
        "source": "end_market",
        "target": "anthropic",
        "flowType": "enterprise_revenue",
        "amount": 3.4,
        "desc": "2025 Q3: Enterprise software clients generate $3.4B in Claude API token billing revenue."
      },
      {
        "id": "market_deepseek_rev",
        "source": "end_market",
        "target": "deepseek",
        "flowType": "enterprise_revenue",
        "amount": 1.1,
        "desc": "2025 Q3: DeepSeek generates $1.1B in low-cost high-efficiency reasoning API token revenue."
      }
    ]
  },
  {
    "periodId": "2025-Q4",
    "year": 2025,
    "quarter": 4,
    "label": "2025 Q4",
    "dateRange": "Oct - Dec 2025",
    "title": "2025 Q4: Hyperscaler Custom ASIC Inference Surge & Power Limits",
    "summary": "Hyperscaler custom silicon (Google TPU v6, AWS Trainium2, Meta MTIA v2) handles over 35% of hyperscaler internal batch inference workloads. Data center capacity becomes strictly power-constrained. TSMC CoWoS capacity surpasses 45,000 wafers/month.",
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
        "name": "Microsoft",
        "category": "hyperscaler",
        "marketCap": 3580,
        "aiCapex": 21.5,
        "aiRevenue": 3.6,
        "isFormed": true,
        "isHighGrowth": true,
        "desc": "World cloud leader, strategic backer of OpenAI with Azure exclusive integration, developer of Maia AI ASICs.",
        "initialX": -140,
        "initialY": -130
      },
      {
        "id": "goog",
        "name": "Alphabet / Google",
        "category": "hyperscaler",
        "marketCap": 2420,
        "aiCapex": 18.5,
        "aiRevenue": 2.8,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "Pioneer of Transformer architecture; custom TPU v4/v5/v6 silicon with Google DeepMind & Gemini.",
        "initialX": -185,
        "initialY": 5
      },
      {
        "id": "amzn",
        "name": "Amazon / AWS",
        "category": "hyperscaler",
        "marketCap": 2360,
        "aiCapex": 20.8,
        "aiRevenue": 2.4,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "World’s largest cloud provider (AWS), key investor in Anthropic ($4B), developing Trainium2 & Inferentia.",
        "initialX": 140,
        "initialY": -130
      },
      {
        "id": "meta",
        "name": "Meta Platforms",
        "category": "hyperscaler",
        "marketCap": 1680,
        "aiCapex": 15,
        "aiRevenue": 1.6,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "Open-source frontier AI champion (LLaMA series), massive GPU cluster operator, MTIA custom silicon.",
        "initialX": 185,
        "initialY": 5
      },
      {
        "id": "nvda",
        "name": "NVIDIA",
        "category": "chipmaker",
        "marketCap": 3720,
        "aiCapex": 1.8,
        "aiRevenue": 43.5,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "Global GPU monopoly (A100/H100/B200/Rubin) and proprietary CUDA software moat capturing 75%+ gross margins.",
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
        "desc": "World’s exclusive pure-play foundry and CoWoS advanced packaging monopoly powering all advanced AI accelerators.",
        "initialX": -130,
        "initialY": 190
      },
      {
        "id": "avgo",
        "name": "Broadcom",
        "category": "chipmaker",
        "marketCap": 880,
        "aiCapex": 0.75,
        "aiRevenue": 5.5,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "Leader in custom AI ASICs (Google TPU, Meta MTIA) and high-speed Tomahawk/Jericho AI networking fabrics.",
        "initialX": -215,
        "initialY": 115
      },
      {
        "id": "skhynix",
        "name": "SK Hynix",
        "category": "semiconductor_supply",
        "marketCap": 138,
        "aiCapex": 4.2,
        "aiRevenue": 6.2,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "World’s undisputed leader in High Bandwidth Memory (HBM3, HBM3E, HBM4), primary memory supplier to NVIDIA.",
        "initialX": -20,
        "initialY": -210
      },
      {
        "id": "samsung",
        "name": "Samsung Electronics",
        "category": "semiconductor_supply",
        "marketCap": 430,
        "aiCapex": 12,
        "aiRevenue": 5.8,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "World’s largest memory semiconductor producer, pioneer of 12-layer HBM3E and turnkey foundry/memory solutions.",
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
        "desc": "Monopoly provider of EUV and High-NA EUV lithography equipment essential for 3nm/2nm advanced semiconductor nodes.",
        "initialX": 20,
        "initialY": 235
      },
      {
        "id": "openai",
        "name": "OpenAI",
        "category": "ai_lab",
        "marketCap": 240,
        "aiCapex": 4.6,
        "aiRevenue": 3.2,
        "isFormed": true,
        "isHighGrowth": true,
        "desc": "Frontier AI lab creator of ChatGPT, GPT-4, and o1 reasoning models; key partner in the $100B Stargate campus.",
        "initialX": -60,
        "initialY": -55
      },
      {
        "id": "anthropic",
        "name": "Anthropic",
        "category": "ai_lab",
        "marketCap": 72,
        "aiCapex": 2.5,
        "aiRevenue": 1.2,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "Frontier safety lab creator of Claude 3.5 Sonnet and Computer Use; backed by multi-billion commitments from Amazon & Google.",
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
        "desc": "Elon Musk’s AI frontier initiative operating the world’s largest 100k+ liquid-cooled Colossus supercluster in Memphis.",
        "initialX": 75,
        "initialY": 45
      },
      {
        "id": "deepseek",
        "name": "DeepSeek",
        "category": "ai_lab",
        "marketCap": 30,
        "aiCapex": 0.7,
        "aiRevenue": 0.7,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "Pioneered extreme algorithmic efficiency and low-cost open reasoning models (DeepSeek-V3 & R1) disrupting capex intensity.",
        "initialX": -75,
        "initialY": 45
      },
      {
        "id": "coreweave",
        "name": "CoreWeave",
        "category": "neocloud",
        "marketCap": 30,
        "aiCapex": 5.8,
        "aiRevenue": 1.8,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "Pioneer of GPU-collateralized debt financing ($2.3B in 2023, $7.5B in 2024), scaling specialized Neocloud infrastructure.",
        "initialX": 0,
        "initialY": 85
      },
      {
        "id": "vc_sovereign",
        "name": "VC & Sovereign Funds",
        "category": "venture_capital",
        "marketCap": 500,
        "aiCapex": 0,
        "aiRevenue": 0,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "Global venture syndicates (Sequoia, a16z, Thrive, SoftBank) and sovereign wealth funds (MGX, PIF) funding mega-rounds.",
        "initialX": 220,
        "initialY": 155
      },
      {
        "id": "end_market",
        "name": "Enterprise & End Users",
        "category": "end_market",
        "marketCap": 1200,
        "aiCapex": 0,
        "aiRevenue": 14.2,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "Real-world corporate IT budgets, developer API billing, and consumer subscriptions representing verified software revenue.",
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
        "desc": "2025 Q4: Microsoft allocates $14B to procure NVIDIA accelerator server clusters for Azure AI."
      },
      {
        "id": "goog_nvda_gpu",
        "source": "goog",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 10.5,
        "desc": "2025 Q4: Google deploys $10.5B for NVIDIA GPU clusters alongside custom TPU silicon."
      },
      {
        "id": "amzn_nvda_gpu",
        "source": "amzn",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 12.2,
        "desc": "2025 Q4: Amazon AWS purchases $12.2B in NVIDIA GPUs for scalable UltraClusters."
      },
      {
        "id": "meta_nvda_gpu",
        "source": "meta",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 11.6,
        "desc": "2025 Q4: Meta allocates $11.6B to NVIDIA GPUs for next-gen LLaMA model clusters."
      },
      {
        "id": "nvda_tsmc_gpu",
        "source": "nvda",
        "target": "tsmc",
        "flowType": "gpu_purchase",
        "amount": 13.2,
        "desc": "2025 Q4: NVIDIA awards TSMC $13.2B for leading-edge wafer allocation and CoWoS packaging."
      },
      {
        "id": "nvda_skhynix_hbm",
        "source": "nvda",
        "target": "skhynix",
        "flowType": "hbm_purchase",
        "amount": 6.8,
        "desc": "2025 Q4: NVIDIA procures $6.8B of exclusive HBM memory stacks from SK Hynix."
      },
      {
        "id": "nvda_samsung_hbm",
        "source": "nvda",
        "target": "samsung",
        "flowType": "hbm_purchase",
        "amount": 5.3,
        "desc": "2025 Q4: NVIDIA secures $5.3B in advanced HBM and memory supply from Samsung Electronics."
      },
      {
        "id": "tsmc_asml_equip",
        "source": "tsmc",
        "target": "asml",
        "flowType": "equipment_purchase",
        "amount": 3.8,
        "desc": "2025 Q4: TSMC invests $3.8B in ASML EUV and High-NA lithography scanners."
      },
      {
        "id": "samsung_asml_equip",
        "source": "samsung",
        "target": "asml",
        "flowType": "equipment_purchase",
        "amount": 2.8,
        "desc": "2025 Q4: Samsung Electronics commits $2.8B for ASML EUV scanners."
      },
      {
        "id": "skhynix_asml_equip",
        "source": "skhynix",
        "target": "asml",
        "flowType": "equipment_purchase",
        "amount": 2.2,
        "desc": "2025 Q4: SK Hynix procures $2.2B of ASML EUV systems for HBM DRAM production."
      },
      {
        "id": "goog_avgo_gpu",
        "source": "goog",
        "target": "avgo",
        "flowType": "gpu_purchase",
        "amount": 4.1,
        "desc": "2025 Q4: Google pays Broadcom $4.1B for custom TPU ASIC co-design and optical interconnects."
      },
      {
        "id": "meta_avgo_gpu",
        "source": "meta",
        "target": "avgo",
        "flowType": "gpu_purchase",
        "amount": 3.5,
        "desc": "2025 Q4: Meta allocates $3.5B to Broadcom for MTIA proprietary accelerator silicon design."
      },
      {
        "id": "msft_openai_credit",
        "source": "msft",
        "target": "openai",
        "flowType": "cloud_credit",
        "amount": 4.4,
        "desc": "2025 Q4: Microsoft supplies OpenAI with $4.4B in Azure compute credits and dedicated infrastructure."
      },
      {
        "id": "openai_msft_spend",
        "source": "openai",
        "target": "msft",
        "flowType": "cloud_credit",
        "amount": 4.4,
        "desc": "2025 Q4: OpenAI spends $4.4B in hosting fees and compute consumption paid directly to Microsoft Azure."
      },
      {
        "id": "amzn_anthropic_equity",
        "source": "amzn",
        "target": "anthropic",
        "flowType": "equity_investment",
        "amount": 0,
        "desc": "2025 Q4: Operating under active cloud agreement; no new primary equity capital call."
      },
      {
        "id": "anthropic_amzn_spend",
        "source": "anthropic",
        "target": "amzn",
        "flowType": "cloud_credit",
        "amount": 3.3,
        "desc": "2025 Q4: Anthropic pays $3.3B to AWS for Bedrock compute clusters and Trainium workloads."
      },
      {
        "id": "goog_anthropic_equity",
        "source": "goog",
        "target": "anthropic",
        "flowType": "equity_investment",
        "amount": 0,
        "desc": "2025 Q4: Partnership active; no secondary equity injection in this period."
      },
      {
        "id": "vc_coreweave_debt",
        "source": "vc_sovereign",
        "target": "coreweave",
        "flowType": "debt_collateral",
        "amount": 0,
        "desc": "2025 Q4: Previous GPU debt facility drawn down; no new private debt tranche active."
      },
      {
        "id": "coreweave_nvda_gpu",
        "source": "coreweave",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 7,
        "desc": "2025 Q4: CoreWeave purchases $7B of NVIDIA GPUs to expand its AI cloud cluster fleet."
      },
      {
        "id": "nvda_coreweave_equity",
        "source": "nvda",
        "target": "coreweave",
        "flowType": "equity_investment",
        "amount": 0,
        "desc": "2025 Q4: Strategic partnership active; no incremental equity transaction this period."
      },
      {
        "id": "coreweave_vc_refinance",
        "source": "coreweave",
        "target": "vc_sovereign",
        "flowType": "debt_collateral",
        "amount": 2.6,
        "desc": "2025 Q4: CoreWeave executes $2.6B in asset-backed securitization (ABS) and debt refinancing."
      },
      {
        "id": "vc_openai_equity",
        "source": "vc_sovereign",
        "target": "openai",
        "flowType": "equity_investment",
        "amount": 8,
        "desc": "2025 Q4: Global VC and sovereign syndicates inject $8B growth equity into OpenAI."
      },
      {
        "id": "xai_nvda_gpu",
        "source": "xai",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 4.5,
        "desc": "2025 Q4: xAI purchases $4.5B of NVIDIA liquid-cooled GPUs for the Memphis Colossus supercluster."
      },
      {
        "id": "skhynix_tsmc_foundry",
        "source": "skhynix",
        "target": "tsmc",
        "flowType": "gpu_purchase",
        "amount": 2.1,
        "desc": "2025 Q4: SK Hynix contracts TSMC advanced foundry for $2.1B to produce custom HBM4 logic base dies."
      },
      {
        "id": "market_openai_rev",
        "source": "end_market",
        "target": "openai",
        "flowType": "enterprise_revenue",
        "amount": 6.8,
        "desc": "2025 Q4: Enterprises and users generate $6.8B in verified OpenAI software and API revenue."
      },
      {
        "id": "market_msft_rev",
        "source": "end_market",
        "target": "msft",
        "flowType": "enterprise_revenue",
        "amount": 9.8,
        "desc": "2025 Q4: Enterprise clients deliver $9.8B in Microsoft commercial AI revenue."
      },
      {
        "id": "market_anthropic_rev",
        "source": "end_market",
        "target": "anthropic",
        "flowType": "enterprise_revenue",
        "amount": 4.5,
        "desc": "2025 Q4: Enterprise software clients generate $4.5B in Claude API token billing revenue."
      },
      {
        "id": "market_deepseek_rev",
        "source": "end_market",
        "target": "deepseek",
        "flowType": "enterprise_revenue",
        "amount": 1.6,
        "desc": "2025 Q4: DeepSeek generates $1.6B in low-cost high-efficiency reasoning API token revenue."
      }
    ]
  },
  {
    "periodId": "2026-Q1",
    "year": 2026,
    "quarter": 1,
    "label": "2026 Q1",
    "dateRange": "Jan - Mar 2026",
    "title": "2026 Q1: Global Antitrust Probes into Circular Cloud Credit Swaps",
    "summary": "Antitrust regulators (US FTC, EU Commission, UK CMA) formally scrutinize circular cloud credit swaps and captive vendor lock-ins between Hyperscalers and frontier labs. NVIDIA previews the Vera Rubin architecture featuring next-generation HBM4 memory.",
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
        "name": "Microsoft",
        "category": "hyperscaler",
        "marketCap": 3620,
        "aiCapex": 21.8,
        "aiRevenue": 4,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "World cloud leader, strategic backer of OpenAI with Azure exclusive integration, developer of Maia AI ASICs.",
        "initialX": -140,
        "initialY": -130
      },
      {
        "id": "goog",
        "name": "Alphabet / Google",
        "category": "hyperscaler",
        "marketCap": 2480,
        "aiCapex": 18.8,
        "aiRevenue": 3.2,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "Pioneer of Transformer architecture; custom TPU v4/v5/v6 silicon with Google DeepMind & Gemini.",
        "initialX": -185,
        "initialY": 5
      },
      {
        "id": "amzn",
        "name": "Amazon / AWS",
        "category": "hyperscaler",
        "marketCap": 2420,
        "aiCapex": 21,
        "aiRevenue": 2.7,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "World’s largest cloud provider (AWS), key investor in Anthropic ($4B), developing Trainium2 & Inferentia.",
        "initialX": 140,
        "initialY": -130
      },
      {
        "id": "meta",
        "name": "Meta Platforms",
        "category": "hyperscaler",
        "marketCap": 1720,
        "aiCapex": 15.5,
        "aiRevenue": 1.8,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "Open-source frontier AI champion (LLaMA series), massive GPU cluster operator, MTIA custom silicon.",
        "initialX": 185,
        "initialY": 5
      },
      {
        "id": "nvda",
        "name": "NVIDIA",
        "category": "chipmaker",
        "marketCap": 3750,
        "aiCapex": 1.9,
        "aiRevenue": 44,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "Global GPU monopoly (A100/H100/B200/Rubin) and proprietary CUDA software moat capturing 75%+ gross margins.",
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
        "desc": "World’s exclusive pure-play foundry and CoWoS advanced packaging monopoly powering all advanced AI accelerators.",
        "initialX": -130,
        "initialY": 190
      },
      {
        "id": "avgo",
        "name": "Broadcom",
        "category": "chipmaker",
        "marketCap": 910,
        "aiCapex": 0.8,
        "aiRevenue": 5.8,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "Leader in custom AI ASICs (Google TPU, Meta MTIA) and high-speed Tomahawk/Jericho AI networking fabrics.",
        "initialX": -215,
        "initialY": 115
      },
      {
        "id": "skhynix",
        "name": "SK Hynix",
        "category": "semiconductor_supply",
        "marketCap": 142,
        "aiCapex": 4.4,
        "aiRevenue": 6.5,
        "isFormed": true,
        "isHighGrowth": true,
        "desc": "World’s undisputed leader in High Bandwidth Memory (HBM3, HBM3E, HBM4), primary memory supplier to NVIDIA.",
        "initialX": -20,
        "initialY": -210
      },
      {
        "id": "samsung",
        "name": "Samsung Electronics",
        "category": "semiconductor_supply",
        "marketCap": 440,
        "aiCapex": 12.2,
        "aiRevenue": 6.2,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "World’s largest memory semiconductor producer, pioneer of 12-layer HBM3E and turnkey foundry/memory solutions.",
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
        "desc": "Monopoly provider of EUV and High-NA EUV lithography equipment essential for 3nm/2nm advanced semiconductor nodes.",
        "initialX": 20,
        "initialY": 235
      },
      {
        "id": "openai",
        "name": "OpenAI",
        "category": "ai_lab",
        "marketCap": 255,
        "aiCapex": 4.8,
        "aiRevenue": 3.5,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "Frontier AI lab creator of ChatGPT, GPT-4, and o1 reasoning models; key partner in the $100B Stargate campus.",
        "initialX": -60,
        "initialY": -55
      },
      {
        "id": "anthropic",
        "name": "Anthropic",
        "category": "ai_lab",
        "marketCap": 78,
        "aiCapex": 2.6,
        "aiRevenue": 1.4,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "Frontier safety lab creator of Claude 3.5 Sonnet and Computer Use; backed by multi-billion commitments from Amazon & Google.",
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
        "desc": "Elon Musk’s AI frontier initiative operating the world’s largest 100k+ liquid-cooled Colossus supercluster in Memphis.",
        "initialX": 75,
        "initialY": 45
      },
      {
        "id": "deepseek",
        "name": "DeepSeek",
        "category": "ai_lab",
        "marketCap": 32,
        "aiCapex": 0.8,
        "aiRevenue": 0.8,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "Pioneered extreme algorithmic efficiency and low-cost open reasoning models (DeepSeek-V3 & R1) disrupting capex intensity.",
        "initialX": -75,
        "initialY": 45
      },
      {
        "id": "coreweave",
        "name": "CoreWeave",
        "category": "neocloud",
        "marketCap": 32,
        "aiCapex": 6,
        "aiRevenue": 2,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "Pioneer of GPU-collateralized debt financing ($2.3B in 2023, $7.5B in 2024), scaling specialized Neocloud infrastructure.",
        "initialX": 0,
        "initialY": 85
      },
      {
        "id": "vc_sovereign",
        "name": "VC & Sovereign Funds",
        "category": "venture_capital",
        "marketCap": 500,
        "aiCapex": 0,
        "aiRevenue": 0,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "Global venture syndicates (Sequoia, a16z, Thrive, SoftBank) and sovereign wealth funds (MGX, PIF) funding mega-rounds.",
        "initialX": 220,
        "initialY": 155
      },
      {
        "id": "end_market",
        "name": "Enterprise & End Users",
        "category": "end_market",
        "marketCap": 1200,
        "aiCapex": 0,
        "aiRevenue": 16,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "Real-world corporate IT budgets, developer API billing, and consumer subscriptions representing verified software revenue.",
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
        "desc": "2026 Q1: Microsoft allocates $14.5B to procure NVIDIA accelerator server clusters for Azure AI."
      },
      {
        "id": "goog_nvda_gpu",
        "source": "goog",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 11,
        "desc": "2026 Q1: Google deploys $11B for NVIDIA GPU clusters alongside custom TPU silicon."
      },
      {
        "id": "amzn_nvda_gpu",
        "source": "amzn",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 12.5,
        "desc": "2026 Q1: Amazon AWS purchases $12.5B in NVIDIA GPUs for scalable UltraClusters."
      },
      {
        "id": "meta_nvda_gpu",
        "source": "meta",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 12,
        "desc": "2026 Q1: Meta allocates $12B to NVIDIA GPUs for next-gen LLaMA model clusters."
      },
      {
        "id": "nvda_tsmc_gpu",
        "source": "nvda",
        "target": "tsmc",
        "flowType": "gpu_purchase",
        "amount": 13.5,
        "desc": "2026 Q1: NVIDIA awards TSMC $13.5B for leading-edge wafer allocation and CoWoS packaging."
      },
      {
        "id": "nvda_skhynix_hbm",
        "source": "nvda",
        "target": "skhynix",
        "flowType": "hbm_purchase",
        "amount": 7,
        "desc": "2026 Q1: NVIDIA procures $7B of exclusive HBM memory stacks from SK Hynix."
      },
      {
        "id": "nvda_samsung_hbm",
        "source": "nvda",
        "target": "samsung",
        "flowType": "hbm_purchase",
        "amount": 5.6,
        "desc": "2026 Q1: NVIDIA secures $5.6B in advanced HBM and memory supply from Samsung Electronics."
      },
      {
        "id": "tsmc_asml_equip",
        "source": "tsmc",
        "target": "asml",
        "flowType": "equipment_purchase",
        "amount": 3.9,
        "desc": "2026 Q1: TSMC invests $3.9B in ASML EUV and High-NA lithography scanners."
      },
      {
        "id": "samsung_asml_equip",
        "source": "samsung",
        "target": "asml",
        "flowType": "equipment_purchase",
        "amount": 2.9,
        "desc": "2026 Q1: Samsung Electronics commits $2.9B for ASML EUV scanners."
      },
      {
        "id": "skhynix_asml_equip",
        "source": "skhynix",
        "target": "asml",
        "flowType": "equipment_purchase",
        "amount": 2.3,
        "desc": "2026 Q1: SK Hynix procures $2.3B of ASML EUV systems for HBM DRAM production."
      },
      {
        "id": "goog_avgo_gpu",
        "source": "goog",
        "target": "avgo",
        "flowType": "gpu_purchase",
        "amount": 4.3,
        "desc": "2026 Q1: Google pays Broadcom $4.3B for custom TPU ASIC co-design and optical interconnects."
      },
      {
        "id": "meta_avgo_gpu",
        "source": "meta",
        "target": "avgo",
        "flowType": "gpu_purchase",
        "amount": 3.7,
        "desc": "2026 Q1: Meta allocates $3.7B to Broadcom for MTIA proprietary accelerator silicon design."
      },
      {
        "id": "msft_openai_credit",
        "source": "msft",
        "target": "openai",
        "flowType": "cloud_credit",
        "amount": 4.5,
        "desc": "2026 Q1: Microsoft supplies OpenAI with $4.5B in Azure compute credits and dedicated infrastructure."
      },
      {
        "id": "openai_msft_spend",
        "source": "openai",
        "target": "msft",
        "flowType": "cloud_credit",
        "amount": 4.8,
        "desc": "2026 Q1: OpenAI spends $4.8B in hosting fees and compute consumption paid directly to Microsoft Azure."
      },
      {
        "id": "amzn_anthropic_equity",
        "source": "amzn",
        "target": "anthropic",
        "flowType": "equity_investment",
        "amount": 3,
        "desc": "2026 Q1: Amazon executes a strategic growth capital tranche of $3B into Anthropic."
      },
      {
        "id": "anthropic_amzn_spend",
        "source": "anthropic",
        "target": "amzn",
        "flowType": "cloud_credit",
        "amount": 3.5,
        "desc": "2026 Q1: Anthropic pays $3.5B to AWS for Bedrock compute clusters and Trainium workloads."
      },
      {
        "id": "goog_anthropic_equity",
        "source": "goog",
        "target": "anthropic",
        "flowType": "equity_investment",
        "amount": 0,
        "desc": "2026 Q1: Partnership active; no secondary equity injection in this period."
      },
      {
        "id": "vc_coreweave_debt",
        "source": "vc_sovereign",
        "target": "coreweave",
        "flowType": "debt_collateral",
        "amount": 0,
        "desc": "2026 Q1: Previous GPU debt facility drawn down; no new private debt tranche active."
      },
      {
        "id": "coreweave_nvda_gpu",
        "source": "coreweave",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 7.2,
        "desc": "2026 Q1: CoreWeave purchases $7.2B of NVIDIA GPUs to expand its AI cloud cluster fleet."
      },
      {
        "id": "nvda_coreweave_equity",
        "source": "nvda",
        "target": "coreweave",
        "flowType": "equity_investment",
        "amount": 0,
        "desc": "2026 Q1: Strategic partnership active; no incremental equity transaction this period."
      },
      {
        "id": "coreweave_vc_refinance",
        "source": "coreweave",
        "target": "vc_sovereign",
        "flowType": "debt_collateral",
        "amount": 2.8,
        "desc": "2026 Q1: CoreWeave executes $2.8B in asset-backed securitization (ABS) and debt refinancing."
      },
      {
        "id": "vc_openai_equity",
        "source": "vc_sovereign",
        "target": "openai",
        "flowType": "equity_investment",
        "amount": 0,
        "desc": "2026 Q1: Operating on existing treasury; no primary mega equity financing tranche active."
      },
      {
        "id": "xai_nvda_gpu",
        "source": "xai",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 5,
        "desc": "2026 Q1: xAI purchases $5B of NVIDIA liquid-cooled GPUs for the Memphis Colossus supercluster."
      },
      {
        "id": "skhynix_tsmc_foundry",
        "source": "skhynix",
        "target": "tsmc",
        "flowType": "gpu_purchase",
        "amount": 2.5,
        "desc": "2026 Q1: SK Hynix contracts TSMC advanced foundry for $2.5B to produce custom HBM4 logic base dies."
      },
      {
        "id": "market_openai_rev",
        "source": "end_market",
        "target": "openai",
        "flowType": "enterprise_revenue",
        "amount": 8.2,
        "desc": "2026 Q1: Enterprises and users generate $8.2B in verified OpenAI software and API revenue."
      },
      {
        "id": "market_msft_rev",
        "source": "end_market",
        "target": "msft",
        "flowType": "enterprise_revenue",
        "amount": 12,
        "desc": "2026 Q1: Enterprise clients deliver $12B in Microsoft commercial AI revenue."
      },
      {
        "id": "market_anthropic_rev",
        "source": "end_market",
        "target": "anthropic",
        "flowType": "enterprise_revenue",
        "amount": 5.8,
        "desc": "2026 Q1: Enterprise software clients generate $5.8B in Claude API token billing revenue."
      },
      {
        "id": "market_deepseek_rev",
        "source": "end_market",
        "target": "deepseek",
        "flowType": "enterprise_revenue",
        "amount": 2.2,
        "desc": "2026 Q1: DeepSeek generates $2.2B in low-cost high-efficiency reasoning API token revenue."
      }
    ]
  },
  {
    "periodId": "2026-Q2",
    "year": 2026,
    "quarter": 2,
    "label": "2026 Q2",
    "dateRange": "Apr - Jun 2026",
    "title": "2026 Q2: Next-Gen HBM4 Tape-Out & The TSMC Base Die Alliance",
    "summary": "Samsung and SK Hynix tape out next-generation HBM4 modules utilizing advanced logic base dies fabricated at TSMC. The semiconductor supply chain forms deep cross-industry alliances to overcome thermal and bandwidth limits as AI hardware transitions to 2nm.",
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
        "name": "Microsoft",
        "category": "hyperscaler",
        "marketCap": 3710,
        "aiCapex": 22.5,
        "aiRevenue": 4.3,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "World cloud leader, strategic backer of OpenAI with Azure exclusive integration, developer of Maia AI ASICs.",
        "initialX": -140,
        "initialY": -130
      },
      {
        "id": "goog",
        "name": "Alphabet / Google",
        "category": "hyperscaler",
        "marketCap": 2520,
        "aiCapex": 19.5,
        "aiRevenue": 3.5,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "Pioneer of Transformer architecture; custom TPU v4/v5/v6 silicon with Google DeepMind & Gemini.",
        "initialX": -185,
        "initialY": 5
      },
      {
        "id": "amzn",
        "name": "Amazon / AWS",
        "category": "hyperscaler",
        "marketCap": 2460,
        "aiCapex": 22,
        "aiRevenue": 3,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "World’s largest cloud provider (AWS), key investor in Anthropic ($4B), developing Trainium2 & Inferentia.",
        "initialX": 140,
        "initialY": -130
      },
      {
        "id": "meta",
        "name": "Meta Platforms",
        "category": "hyperscaler",
        "marketCap": 1760,
        "aiCapex": 16,
        "aiRevenue": 2,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "Open-source frontier AI champion (LLaMA series), massive GPU cluster operator, MTIA custom silicon.",
        "initialX": 185,
        "initialY": 5
      },
      {
        "id": "nvda",
        "name": "NVIDIA",
        "category": "chipmaker",
        "marketCap": 3850,
        "aiCapex": 2,
        "aiRevenue": 46.5,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "Global GPU monopoly (A100/H100/B200/Rubin) and proprietary CUDA software moat capturing 75%+ gross margins.",
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
        "desc": "World’s exclusive pure-play foundry and CoWoS advanced packaging monopoly powering all advanced AI accelerators.",
        "initialX": -130,
        "initialY": 190
      },
      {
        "id": "avgo",
        "name": "Broadcom",
        "category": "chipmaker",
        "marketCap": 930,
        "aiCapex": 0.85,
        "aiRevenue": 6.2,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "Leader in custom AI ASICs (Google TPU, Meta MTIA) and high-speed Tomahawk/Jericho AI networking fabrics.",
        "initialX": -215,
        "initialY": 115
      },
      {
        "id": "skhynix",
        "name": "SK Hynix",
        "category": "semiconductor_supply",
        "marketCap": 145,
        "aiCapex": 4.6,
        "aiRevenue": 6.8,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "World’s undisputed leader in High Bandwidth Memory (HBM3, HBM3E, HBM4), primary memory supplier to NVIDIA.",
        "initialX": -20,
        "initialY": -210
      },
      {
        "id": "samsung",
        "name": "Samsung Electronics",
        "category": "semiconductor_supply",
        "marketCap": 450,
        "aiCapex": 12.5,
        "aiRevenue": 6.5,
        "isFormed": true,
        "isHighGrowth": true,
        "desc": "World’s largest memory semiconductor producer, pioneer of 12-layer HBM3E and turnkey foundry/memory solutions.",
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
        "desc": "Monopoly provider of EUV and High-NA EUV lithography equipment essential for 3nm/2nm advanced semiconductor nodes.",
        "initialX": 20,
        "initialY": 235
      },
      {
        "id": "openai",
        "name": "OpenAI",
        "category": "ai_lab",
        "marketCap": 270,
        "aiCapex": 5,
        "aiRevenue": 3.8,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "Frontier AI lab creator of ChatGPT, GPT-4, and o1 reasoning models; key partner in the $100B Stargate campus.",
        "initialX": -60,
        "initialY": -55
      },
      {
        "id": "anthropic",
        "name": "Anthropic",
        "category": "ai_lab",
        "marketCap": 82,
        "aiCapex": 2.8,
        "aiRevenue": 1.6,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "Frontier safety lab creator of Claude 3.5 Sonnet and Computer Use; backed by multi-billion commitments from Amazon & Google.",
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
        "desc": "Elon Musk’s AI frontier initiative operating the world’s largest 100k+ liquid-cooled Colossus supercluster in Memphis.",
        "initialX": 75,
        "initialY": 45
      },
      {
        "id": "deepseek",
        "name": "DeepSeek",
        "category": "ai_lab",
        "marketCap": 34,
        "aiCapex": 0.9,
        "aiRevenue": 0.9,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "Pioneered extreme algorithmic efficiency and low-cost open reasoning models (DeepSeek-V3 & R1) disrupting capex intensity.",
        "initialX": -75,
        "initialY": 45
      },
      {
        "id": "coreweave",
        "name": "CoreWeave",
        "category": "neocloud",
        "marketCap": 34,
        "aiCapex": 6.2,
        "aiRevenue": 2.2,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "Pioneer of GPU-collateralized debt financing ($2.3B in 2023, $7.5B in 2024), scaling specialized Neocloud infrastructure.",
        "initialX": 0,
        "initialY": 85
      },
      {
        "id": "vc_sovereign",
        "name": "VC & Sovereign Funds",
        "category": "venture_capital",
        "marketCap": 500,
        "aiCapex": 0,
        "aiRevenue": 0,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "Global venture syndicates (Sequoia, a16z, Thrive, SoftBank) and sovereign wealth funds (MGX, PIF) funding mega-rounds.",
        "initialX": 220,
        "initialY": 155
      },
      {
        "id": "end_market",
        "name": "Enterprise & End Users",
        "category": "end_market",
        "marketCap": 1200,
        "aiCapex": 0,
        "aiRevenue": 18.2,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "Real-world corporate IT budgets, developer API billing, and consumer subscriptions representing verified software revenue.",
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
        "desc": "2026 Q2: Microsoft allocates $15B to procure NVIDIA accelerator server clusters for Azure AI."
      },
      {
        "id": "goog_nvda_gpu",
        "source": "goog",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 11.5,
        "desc": "2026 Q2: Google deploys $11.5B for NVIDIA GPU clusters alongside custom TPU silicon."
      },
      {
        "id": "amzn_nvda_gpu",
        "source": "amzn",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 13,
        "desc": "2026 Q2: Amazon AWS purchases $13B in NVIDIA GPUs for scalable UltraClusters."
      },
      {
        "id": "meta_nvda_gpu",
        "source": "meta",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 12.5,
        "desc": "2026 Q2: Meta allocates $12.5B to NVIDIA GPUs for next-gen LLaMA model clusters."
      },
      {
        "id": "nvda_tsmc_gpu",
        "source": "nvda",
        "target": "tsmc",
        "flowType": "gpu_purchase",
        "amount": 14,
        "desc": "2026 Q2: NVIDIA awards TSMC $14B for leading-edge wafer allocation and CoWoS packaging."
      },
      {
        "id": "nvda_skhynix_hbm",
        "source": "nvda",
        "target": "skhynix",
        "flowType": "hbm_purchase",
        "amount": 7.2,
        "desc": "2026 Q2: NVIDIA procures $7.2B of exclusive HBM memory stacks from SK Hynix."
      },
      {
        "id": "nvda_samsung_hbm",
        "source": "nvda",
        "target": "samsung",
        "flowType": "hbm_purchase",
        "amount": 5.9,
        "desc": "2026 Q2: NVIDIA secures $5.9B in advanced HBM and memory supply from Samsung Electronics."
      },
      {
        "id": "tsmc_asml_equip",
        "source": "tsmc",
        "target": "asml",
        "flowType": "equipment_purchase",
        "amount": 4,
        "desc": "2026 Q2: TSMC invests $4B in ASML EUV and High-NA lithography scanners."
      },
      {
        "id": "samsung_asml_equip",
        "source": "samsung",
        "target": "asml",
        "flowType": "equipment_purchase",
        "amount": 3,
        "desc": "2026 Q2: Samsung Electronics commits $3B for ASML EUV scanners."
      },
      {
        "id": "skhynix_asml_equip",
        "source": "skhynix",
        "target": "asml",
        "flowType": "equipment_purchase",
        "amount": 2.4,
        "desc": "2026 Q2: SK Hynix procures $2.4B of ASML EUV systems for HBM DRAM production."
      },
      {
        "id": "goog_avgo_gpu",
        "source": "goog",
        "target": "avgo",
        "flowType": "gpu_purchase",
        "amount": 4.5,
        "desc": "2026 Q2: Google pays Broadcom $4.5B for custom TPU ASIC co-design and optical interconnects."
      },
      {
        "id": "meta_avgo_gpu",
        "source": "meta",
        "target": "avgo",
        "flowType": "gpu_purchase",
        "amount": 3.9,
        "desc": "2026 Q2: Meta allocates $3.9B to Broadcom for MTIA proprietary accelerator silicon design."
      },
      {
        "id": "msft_openai_credit",
        "source": "msft",
        "target": "openai",
        "flowType": "cloud_credit",
        "amount": 4.6,
        "desc": "2026 Q2: Microsoft supplies OpenAI with $4.6B in Azure compute credits and dedicated infrastructure."
      },
      {
        "id": "openai_msft_spend",
        "source": "openai",
        "target": "msft",
        "flowType": "cloud_credit",
        "amount": 5.2,
        "desc": "2026 Q2: OpenAI spends $5.2B in hosting fees and compute consumption paid directly to Microsoft Azure."
      },
      {
        "id": "amzn_anthropic_equity",
        "source": "amzn",
        "target": "anthropic",
        "flowType": "equity_investment",
        "amount": 0,
        "desc": "2026 Q2: Operating under active cloud agreement; no new primary equity capital call."
      },
      {
        "id": "anthropic_amzn_spend",
        "source": "anthropic",
        "target": "amzn",
        "flowType": "cloud_credit",
        "amount": 3.8,
        "desc": "2026 Q2: Anthropic pays $3.8B to AWS for Bedrock compute clusters and Trainium workloads."
      },
      {
        "id": "goog_anthropic_equity",
        "source": "goog",
        "target": "anthropic",
        "flowType": "equity_investment",
        "amount": 2,
        "desc": "2026 Q2: Google injects $2B strategic growth equity into Anthropic alongside GCP partnership."
      },
      {
        "id": "vc_coreweave_debt",
        "source": "vc_sovereign",
        "target": "coreweave",
        "flowType": "debt_collateral",
        "amount": 0,
        "desc": "2026 Q2: Previous GPU debt facility drawn down; no new private debt tranche active."
      },
      {
        "id": "coreweave_nvda_gpu",
        "source": "coreweave",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 7.4,
        "desc": "2026 Q2: CoreWeave purchases $7.4B of NVIDIA GPUs to expand its AI cloud cluster fleet."
      },
      {
        "id": "nvda_coreweave_equity",
        "source": "nvda",
        "target": "coreweave",
        "flowType": "equity_investment",
        "amount": 0,
        "desc": "2026 Q2: Strategic partnership active; no incremental equity transaction this period."
      },
      {
        "id": "coreweave_vc_refinance",
        "source": "coreweave",
        "target": "vc_sovereign",
        "flowType": "debt_collateral",
        "amount": 3,
        "desc": "2026 Q2: CoreWeave executes $3B in asset-backed securitization (ABS) and debt refinancing."
      },
      {
        "id": "vc_openai_equity",
        "source": "vc_sovereign",
        "target": "openai",
        "flowType": "equity_investment",
        "amount": 0,
        "desc": "2026 Q2: Operating on existing treasury; no primary mega equity financing tranche active."
      },
      {
        "id": "xai_nvda_gpu",
        "source": "xai",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 4.2,
        "desc": "2026 Q2: xAI purchases $4.2B of NVIDIA liquid-cooled GPUs for the Memphis Colossus supercluster."
      },
      {
        "id": "skhynix_tsmc_foundry",
        "source": "skhynix",
        "target": "tsmc",
        "flowType": "gpu_purchase",
        "amount": 2.8,
        "desc": "2026 Q2: SK Hynix contracts TSMC advanced foundry for $2.8B to produce custom HBM4 logic base dies."
      },
      {
        "id": "market_openai_rev",
        "source": "end_market",
        "target": "openai",
        "flowType": "enterprise_revenue",
        "amount": 9.8,
        "desc": "2026 Q2: Enterprises and users generate $9.8B in verified OpenAI software and API revenue."
      },
      {
        "id": "market_msft_rev",
        "source": "end_market",
        "target": "msft",
        "flowType": "enterprise_revenue",
        "amount": 14.5,
        "desc": "2026 Q2: Enterprise clients deliver $14.5B in Microsoft commercial AI revenue."
      },
      {
        "id": "market_anthropic_rev",
        "source": "end_market",
        "target": "anthropic",
        "flowType": "enterprise_revenue",
        "amount": 7.2,
        "desc": "2026 Q2: Enterprise software clients generate $7.2B in Claude API token billing revenue."
      },
      {
        "id": "market_deepseek_rev",
        "source": "end_market",
        "target": "deepseek",
        "flowType": "enterprise_revenue",
        "amount": 2.9,
        "desc": "2026 Q2: DeepSeek generates $2.9B in low-cost high-efficiency reasoning API token revenue."
      }
    ]
  },
  {
    "periodId": "2026-Q3",
    "year": 2026,
    "quarter": 3,
    "label": "2026 Q3",
    "dateRange": "Jul - Sep 2026",
    "title": "2026 Q3: The Capex Wall & The Real ROI Monetization Reckoning",
    "summary": "The AI industry reaches the \"Capex Wall\": Hyperscaler quarterly spending exceeds $82B ($330B annual run-rate) while quarterly real software revenue reaches $20.5B, sustaining a quarterly deficit of $62B+. Unviable AI wrappers face shutdowns, while true utility platforms command high recurring enterprise revenue.",
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
        "name": "Microsoft",
        "category": "hyperscaler",
        "marketCap": 3650,
        "aiCapex": 22.2,
        "aiRevenue": 4.5,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "World cloud leader, strategic backer of OpenAI with Azure exclusive integration, developer of Maia AI ASICs.",
        "initialX": -140,
        "initialY": -130
      },
      {
        "id": "goog",
        "name": "Alphabet / Google",
        "category": "hyperscaler",
        "marketCap": 2550,
        "aiCapex": 19,
        "aiRevenue": 3.8,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "Pioneer of Transformer architecture; custom TPU v4/v5/v6 silicon with Google DeepMind & Gemini.",
        "initialX": -185,
        "initialY": 5
      },
      {
        "id": "amzn",
        "name": "Amazon / AWS",
        "category": "hyperscaler",
        "marketCap": 2480,
        "aiCapex": 21.5,
        "aiRevenue": 3.3,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "World’s largest cloud provider (AWS), key investor in Anthropic ($4B), developing Trainium2 & Inferentia.",
        "initialX": 140,
        "initialY": -130
      },
      {
        "id": "meta",
        "name": "Meta Platforms",
        "category": "hyperscaler",
        "marketCap": 1780,
        "aiCapex": 15.8,
        "aiRevenue": 2.2,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "Open-source frontier AI champion (LLaMA series), massive GPU cluster operator, MTIA custom silicon.",
        "initialX": 185,
        "initialY": 5
      },
      {
        "id": "nvda",
        "name": "NVIDIA",
        "category": "chipmaker",
        "marketCap": 3780,
        "aiCapex": 2,
        "aiRevenue": 47,
        "isFormed": true,
        "isHighGrowth": true,
        "desc": "Global GPU monopoly (A100/H100/B200/Rubin) and proprietary CUDA software moat capturing 75%+ gross margins.",
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
        "desc": "World’s exclusive pure-play foundry and CoWoS advanced packaging monopoly powering all advanced AI accelerators.",
        "initialX": -130,
        "initialY": 190
      },
      {
        "id": "avgo",
        "name": "Broadcom",
        "category": "chipmaker",
        "marketCap": 920,
        "aiCapex": 0.9,
        "aiRevenue": 6.5,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "Leader in custom AI ASICs (Google TPU, Meta MTIA) and high-speed Tomahawk/Jericho AI networking fabrics.",
        "initialX": -215,
        "initialY": 115
      },
      {
        "id": "skhynix",
        "name": "SK Hynix",
        "category": "semiconductor_supply",
        "marketCap": 140,
        "aiCapex": 4.8,
        "aiRevenue": 7,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "World’s undisputed leader in High Bandwidth Memory (HBM3, HBM3E, HBM4), primary memory supplier to NVIDIA.",
        "initialX": -20,
        "initialY": -210
      },
      {
        "id": "samsung",
        "name": "Samsung Electronics",
        "category": "semiconductor_supply",
        "marketCap": 445,
        "aiCapex": 12.8,
        "aiRevenue": 6.8,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "World’s largest memory semiconductor producer, pioneer of 12-layer HBM3E and turnkey foundry/memory solutions.",
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
        "desc": "Monopoly provider of EUV and High-NA EUV lithography equipment essential for 3nm/2nm advanced semiconductor nodes.",
        "initialX": 20,
        "initialY": 235
      },
      {
        "id": "openai",
        "name": "OpenAI",
        "category": "ai_lab",
        "marketCap": 280,
        "aiCapex": 5.2,
        "aiRevenue": 4.2,
        "isFormed": true,
        "isHighGrowth": true,
        "desc": "Frontier AI lab creator of ChatGPT, GPT-4, and o1 reasoning models; key partner in the $100B Stargate campus.",
        "initialX": -60,
        "initialY": -55
      },
      {
        "id": "anthropic",
        "name": "Anthropic",
        "category": "ai_lab",
        "marketCap": 85,
        "aiCapex": 3,
        "aiRevenue": 1.8,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "Frontier safety lab creator of Claude 3.5 Sonnet and Computer Use; backed by multi-billion commitments from Amazon & Google.",
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
        "desc": "Elon Musk’s AI frontier initiative operating the world’s largest 100k+ liquid-cooled Colossus supercluster in Memphis.",
        "initialX": 75,
        "initialY": 45
      },
      {
        "id": "deepseek",
        "name": "DeepSeek",
        "category": "ai_lab",
        "marketCap": 35,
        "aiCapex": 1,
        "aiRevenue": 1,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "Pioneered extreme algorithmic efficiency and low-cost open reasoning models (DeepSeek-V3 & R1) disrupting capex intensity.",
        "initialX": -75,
        "initialY": 45
      },
      {
        "id": "coreweave",
        "name": "CoreWeave",
        "category": "neocloud",
        "marketCap": 35,
        "aiCapex": 6.5,
        "aiRevenue": 2.5,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "Pioneer of GPU-collateralized debt financing ($2.3B in 2023, $7.5B in 2024), scaling specialized Neocloud infrastructure.",
        "initialX": 0,
        "initialY": 85
      },
      {
        "id": "vc_sovereign",
        "name": "VC & Sovereign Funds",
        "category": "venture_capital",
        "marketCap": 500,
        "aiCapex": 0,
        "aiRevenue": 0,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "Global venture syndicates (Sequoia, a16z, Thrive, SoftBank) and sovereign wealth funds (MGX, PIF) funding mega-rounds.",
        "initialX": 220,
        "initialY": 155
      },
      {
        "id": "end_market",
        "name": "Enterprise & End Users",
        "category": "end_market",
        "marketCap": 1200,
        "aiCapex": 0,
        "aiRevenue": 20.5,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "Real-world corporate IT budgets, developer API billing, and consumer subscriptions representing verified software revenue.",
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
        "desc": "2026 Q3: Microsoft allocates $15.5B to procure NVIDIA accelerator server clusters for Azure AI."
      },
      {
        "id": "goog_nvda_gpu",
        "source": "goog",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 12,
        "desc": "2026 Q3: Google deploys $12B for NVIDIA GPU clusters alongside custom TPU silicon."
      },
      {
        "id": "amzn_nvda_gpu",
        "source": "amzn",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 13.5,
        "desc": "2026 Q3: Amazon AWS purchases $13.5B in NVIDIA GPUs for scalable UltraClusters."
      },
      {
        "id": "meta_nvda_gpu",
        "source": "meta",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 13,
        "desc": "2026 Q3: Meta allocates $13B to NVIDIA GPUs for next-gen LLaMA model clusters."
      },
      {
        "id": "nvda_tsmc_gpu",
        "source": "nvda",
        "target": "tsmc",
        "flowType": "gpu_purchase",
        "amount": 14.5,
        "desc": "2026 Q3: NVIDIA awards TSMC $14.5B for leading-edge wafer allocation and CoWoS packaging."
      },
      {
        "id": "nvda_skhynix_hbm",
        "source": "nvda",
        "target": "skhynix",
        "flowType": "hbm_purchase",
        "amount": 7.5,
        "desc": "2026 Q3: NVIDIA procures $7.5B of exclusive HBM memory stacks from SK Hynix."
      },
      {
        "id": "nvda_samsung_hbm",
        "source": "nvda",
        "target": "samsung",
        "flowType": "hbm_purchase",
        "amount": 6.2,
        "desc": "2026 Q3: NVIDIA secures $6.2B in advanced HBM and memory supply from Samsung Electronics."
      },
      {
        "id": "tsmc_asml_equip",
        "source": "tsmc",
        "target": "asml",
        "flowType": "equipment_purchase",
        "amount": 4.1,
        "desc": "2026 Q3: TSMC invests $4.1B in ASML EUV and High-NA lithography scanners."
      },
      {
        "id": "samsung_asml_equip",
        "source": "samsung",
        "target": "asml",
        "flowType": "equipment_purchase",
        "amount": 3.1,
        "desc": "2026 Q3: Samsung Electronics commits $3.1B for ASML EUV scanners."
      },
      {
        "id": "skhynix_asml_equip",
        "source": "skhynix",
        "target": "asml",
        "flowType": "equipment_purchase",
        "amount": 2.4,
        "desc": "2026 Q3: SK Hynix procures $2.4B of ASML EUV systems for HBM DRAM production."
      },
      {
        "id": "goog_avgo_gpu",
        "source": "goog",
        "target": "avgo",
        "flowType": "gpu_purchase",
        "amount": 4.7,
        "desc": "2026 Q3: Google pays Broadcom $4.7B for custom TPU ASIC co-design and optical interconnects."
      },
      {
        "id": "meta_avgo_gpu",
        "source": "meta",
        "target": "avgo",
        "flowType": "gpu_purchase",
        "amount": 4.1,
        "desc": "2026 Q3: Meta allocates $4.1B to Broadcom for MTIA proprietary accelerator silicon design."
      },
      {
        "id": "msft_openai_credit",
        "source": "msft",
        "target": "openai",
        "flowType": "cloud_credit",
        "amount": 4.8,
        "desc": "2026 Q3: Microsoft supplies OpenAI with $4.8B in Azure compute credits and dedicated infrastructure."
      },
      {
        "id": "openai_msft_spend",
        "source": "openai",
        "target": "msft",
        "flowType": "cloud_credit",
        "amount": 5.5,
        "desc": "2026 Q3: OpenAI spends $5.5B in hosting fees and compute consumption paid directly to Microsoft Azure."
      },
      {
        "id": "amzn_anthropic_equity",
        "source": "amzn",
        "target": "anthropic",
        "flowType": "equity_investment",
        "amount": 0,
        "desc": "2026 Q3: Operating under active cloud agreement; no new primary equity capital call."
      },
      {
        "id": "anthropic_amzn_spend",
        "source": "anthropic",
        "target": "amzn",
        "flowType": "cloud_credit",
        "amount": 4,
        "desc": "2026 Q3: Anthropic pays $4B to AWS for Bedrock compute clusters and Trainium workloads."
      },
      {
        "id": "goog_anthropic_equity",
        "source": "goog",
        "target": "anthropic",
        "flowType": "equity_investment",
        "amount": 0,
        "desc": "2026 Q3: Partnership active; no secondary equity injection in this period."
      },
      {
        "id": "vc_coreweave_debt",
        "source": "vc_sovereign",
        "target": "coreweave",
        "flowType": "debt_collateral",
        "amount": 0,
        "desc": "2026 Q3: Previous GPU debt facility drawn down; no new private debt tranche active."
      },
      {
        "id": "coreweave_nvda_gpu",
        "source": "coreweave",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 7.6,
        "desc": "2026 Q3: CoreWeave purchases $7.6B of NVIDIA GPUs to expand its AI cloud cluster fleet."
      },
      {
        "id": "nvda_coreweave_equity",
        "source": "nvda",
        "target": "coreweave",
        "flowType": "equity_investment",
        "amount": 0,
        "desc": "2026 Q3: Strategic partnership active; no incremental equity transaction this period."
      },
      {
        "id": "coreweave_vc_refinance",
        "source": "coreweave",
        "target": "vc_sovereign",
        "flowType": "debt_collateral",
        "amount": 3.2,
        "desc": "2026 Q3: CoreWeave executes $3.2B in asset-backed securitization (ABS) and debt refinancing."
      },
      {
        "id": "vc_openai_equity",
        "source": "vc_sovereign",
        "target": "openai",
        "flowType": "equity_investment",
        "amount": 10,
        "desc": "2026 Q3: Global VC and sovereign syndicates inject $10B growth equity into OpenAI."
      },
      {
        "id": "xai_nvda_gpu",
        "source": "xai",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 5.5,
        "desc": "2026 Q3: xAI purchases $5.5B of NVIDIA liquid-cooled GPUs for the Memphis Colossus supercluster."
      },
      {
        "id": "skhynix_tsmc_foundry",
        "source": "skhynix",
        "target": "tsmc",
        "flowType": "gpu_purchase",
        "amount": 3,
        "desc": "2026 Q3: SK Hynix contracts TSMC advanced foundry for $3B to produce custom HBM4 logic base dies."
      },
      {
        "id": "market_openai_rev",
        "source": "end_market",
        "target": "openai",
        "flowType": "enterprise_revenue",
        "amount": 11.5,
        "desc": "2026 Q3: Enterprises and users generate $11.5B in verified OpenAI software and API revenue."
      },
      {
        "id": "market_msft_rev",
        "source": "end_market",
        "target": "msft",
        "flowType": "enterprise_revenue",
        "amount": 17.5,
        "desc": "2026 Q3: Enterprise clients deliver $17.5B in Microsoft commercial AI revenue."
      },
      {
        "id": "market_anthropic_rev",
        "source": "end_market",
        "target": "anthropic",
        "flowType": "enterprise_revenue",
        "amount": 8.8,
        "desc": "2026 Q3: Enterprise software clients generate $8.8B in Claude API token billing revenue."
      },
      {
        "id": "market_deepseek_rev",
        "source": "end_market",
        "target": "deepseek",
        "flowType": "enterprise_revenue",
        "amount": 3.7,
        "desc": "2026 Q3: DeepSeek generates $3.7B in low-cost high-efficiency reasoning API token revenue."
      }
    ]
  },
  {
    "periodId": "2026-Q4",
    "year": 2026,
    "quarter": 4,
    "label": "2026 Q4",
    "dateRange": "Oct - Dec 2026",
    "title": "2026 Q4: Sustainable Multi-Agent Equilibrium & Maturing Capital Cycle",
    "summary": "Capital allocation shifts from brute-force pre-training scaling toward highly optimized autonomous multi-agent systems and edge inference. Big Tech capex growth moderates to sustainable replacement rates, while the semiconductor supply chain (Foundry, HBM, Equipment) maintains structural profitability.",
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
        "name": "Microsoft",
        "category": "hyperscaler",
        "marketCap": 3780,
        "aiCapex": 22,
        "aiRevenue": 4.7,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "World cloud leader, strategic backer of OpenAI with Azure exclusive integration, developer of Maia AI ASICs.",
        "initialX": -140,
        "initialY": -130
      },
      {
        "id": "goog",
        "name": "Alphabet / Google",
        "category": "hyperscaler",
        "marketCap": 2600,
        "aiCapex": 19.2,
        "aiRevenue": 4,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "Pioneer of Transformer architecture; custom TPU v4/v5/v6 silicon with Google DeepMind & Gemini.",
        "initialX": -185,
        "initialY": 5
      },
      {
        "id": "amzn",
        "name": "Amazon / AWS",
        "category": "hyperscaler",
        "marketCap": 2520,
        "aiCapex": 21.2,
        "aiRevenue": 3.5,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "World’s largest cloud provider (AWS), key investor in Anthropic ($4B), developing Trainium2 & Inferentia.",
        "initialX": 140,
        "initialY": -130
      },
      {
        "id": "meta",
        "name": "Meta Platforms",
        "category": "hyperscaler",
        "marketCap": 1820,
        "aiCapex": 15.5,
        "aiRevenue": 2.4,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "Open-source frontier AI champion (LLaMA series), massive GPU cluster operator, MTIA custom silicon.",
        "initialX": 185,
        "initialY": 5
      },
      {
        "id": "nvda",
        "name": "NVIDIA",
        "category": "chipmaker",
        "marketCap": 3820,
        "aiCapex": 2.1,
        "aiRevenue": 46.5,
        "isFormed": true,
        "isHighGrowth": true,
        "desc": "Global GPU monopoly (A100/H100/B200/Rubin) and proprietary CUDA software moat capturing 75%+ gross margins.",
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
        "desc": "World’s exclusive pure-play foundry and CoWoS advanced packaging monopoly powering all advanced AI accelerators.",
        "initialX": -130,
        "initialY": 190
      },
      {
        "id": "avgo",
        "name": "Broadcom",
        "category": "chipmaker",
        "marketCap": 950,
        "aiCapex": 0.95,
        "aiRevenue": 6.8,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "Leader in custom AI ASICs (Google TPU, Meta MTIA) and high-speed Tomahawk/Jericho AI networking fabrics.",
        "initialX": -215,
        "initialY": 115
      },
      {
        "id": "skhynix",
        "name": "SK Hynix",
        "category": "semiconductor_supply",
        "marketCap": 148,
        "aiCapex": 4.8,
        "aiRevenue": 7.2,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "World’s undisputed leader in High Bandwidth Memory (HBM3, HBM3E, HBM4), primary memory supplier to NVIDIA.",
        "initialX": -20,
        "initialY": -210
      },
      {
        "id": "samsung",
        "name": "Samsung Electronics",
        "category": "semiconductor_supply",
        "marketCap": 460,
        "aiCapex": 13,
        "aiRevenue": 7,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "World’s largest memory semiconductor producer, pioneer of 12-layer HBM3E and turnkey foundry/memory solutions.",
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
        "desc": "Monopoly provider of EUV and High-NA EUV lithography equipment essential for 3nm/2nm advanced semiconductor nodes.",
        "initialX": 20,
        "initialY": 235
      },
      {
        "id": "openai",
        "name": "OpenAI",
        "category": "ai_lab",
        "marketCap": 290,
        "aiCapex": 5.4,
        "aiRevenue": 4.5,
        "isFormed": true,
        "isHighGrowth": true,
        "desc": "Frontier AI lab creator of ChatGPT, GPT-4, and o1 reasoning models; key partner in the $100B Stargate campus.",
        "initialX": -60,
        "initialY": -55
      },
      {
        "id": "anthropic",
        "name": "Anthropic",
        "category": "ai_lab",
        "marketCap": 88,
        "aiCapex": 3.2,
        "aiRevenue": 2,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "Frontier safety lab creator of Claude 3.5 Sonnet and Computer Use; backed by multi-billion commitments from Amazon & Google.",
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
        "desc": "Elon Musk’s AI frontier initiative operating the world’s largest 100k+ liquid-cooled Colossus supercluster in Memphis.",
        "initialX": 75,
        "initialY": 45
      },
      {
        "id": "deepseek",
        "name": "DeepSeek",
        "category": "ai_lab",
        "marketCap": 38,
        "aiCapex": 1.1,
        "aiRevenue": 1.2,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "Pioneered extreme algorithmic efficiency and low-cost open reasoning models (DeepSeek-V3 & R1) disrupting capex intensity.",
        "initialX": -75,
        "initialY": 45
      },
      {
        "id": "coreweave",
        "name": "CoreWeave",
        "category": "neocloud",
        "marketCap": 36,
        "aiCapex": 6.8,
        "aiRevenue": 2.8,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "Pioneer of GPU-collateralized debt financing ($2.3B in 2023, $7.5B in 2024), scaling specialized Neocloud infrastructure.",
        "initialX": 0,
        "initialY": 85
      },
      {
        "id": "vc_sovereign",
        "name": "VC & Sovereign Funds",
        "category": "venture_capital",
        "marketCap": 500,
        "aiCapex": 0,
        "aiRevenue": 0,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "Global venture syndicates (Sequoia, a16z, Thrive, SoftBank) and sovereign wealth funds (MGX, PIF) funding mega-rounds.",
        "initialX": 220,
        "initialY": 155
      },
      {
        "id": "end_market",
        "name": "Enterprise & End Users",
        "category": "end_market",
        "marketCap": 1200,
        "aiCapex": 0,
        "aiRevenue": 23.1,
        "isFormed": true,
        "isHighGrowth": false,
        "desc": "Real-world corporate IT budgets, developer API billing, and consumer subscriptions representing verified software revenue.",
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
        "desc": "2026 Q4: Microsoft allocates $16B to procure NVIDIA accelerator server clusters for Azure AI."
      },
      {
        "id": "goog_nvda_gpu",
        "source": "goog",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 12.5,
        "desc": "2026 Q4: Google deploys $12.5B for NVIDIA GPU clusters alongside custom TPU silicon."
      },
      {
        "id": "amzn_nvda_gpu",
        "source": "amzn",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 14,
        "desc": "2026 Q4: Amazon AWS purchases $14B in NVIDIA GPUs for scalable UltraClusters."
      },
      {
        "id": "meta_nvda_gpu",
        "source": "meta",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 13.5,
        "desc": "2026 Q4: Meta allocates $13.5B to NVIDIA GPUs for next-gen LLaMA model clusters."
      },
      {
        "id": "nvda_tsmc_gpu",
        "source": "nvda",
        "target": "tsmc",
        "flowType": "gpu_purchase",
        "amount": 15,
        "desc": "2026 Q4: NVIDIA awards TSMC $15B for leading-edge wafer allocation and CoWoS packaging."
      },
      {
        "id": "nvda_skhynix_hbm",
        "source": "nvda",
        "target": "skhynix",
        "flowType": "hbm_purchase",
        "amount": 7.8,
        "desc": "2026 Q4: NVIDIA procures $7.8B of exclusive HBM memory stacks from SK Hynix."
      },
      {
        "id": "nvda_samsung_hbm",
        "source": "nvda",
        "target": "samsung",
        "flowType": "hbm_purchase",
        "amount": 6.5,
        "desc": "2026 Q4: NVIDIA secures $6.5B in advanced HBM and memory supply from Samsung Electronics."
      },
      {
        "id": "tsmc_asml_equip",
        "source": "tsmc",
        "target": "asml",
        "flowType": "equipment_purchase",
        "amount": 4.2,
        "desc": "2026 Q4: TSMC invests $4.2B in ASML EUV and High-NA lithography scanners."
      },
      {
        "id": "samsung_asml_equip",
        "source": "samsung",
        "target": "asml",
        "flowType": "equipment_purchase",
        "amount": 3.2,
        "desc": "2026 Q4: Samsung Electronics commits $3.2B for ASML EUV scanners."
      },
      {
        "id": "skhynix_asml_equip",
        "source": "skhynix",
        "target": "asml",
        "flowType": "equipment_purchase",
        "amount": 2.5,
        "desc": "2026 Q4: SK Hynix procures $2.5B of ASML EUV systems for HBM DRAM production."
      },
      {
        "id": "goog_avgo_gpu",
        "source": "goog",
        "target": "avgo",
        "flowType": "gpu_purchase",
        "amount": 5,
        "desc": "2026 Q4: Google pays Broadcom $5B for custom TPU ASIC co-design and optical interconnects."
      },
      {
        "id": "meta_avgo_gpu",
        "source": "meta",
        "target": "avgo",
        "flowType": "gpu_purchase",
        "amount": 4.3,
        "desc": "2026 Q4: Meta allocates $4.3B to Broadcom for MTIA proprietary accelerator silicon design."
      },
      {
        "id": "msft_openai_credit",
        "source": "msft",
        "target": "openai",
        "flowType": "cloud_credit",
        "amount": 5,
        "desc": "2026 Q4: Microsoft supplies OpenAI with $5B in Azure compute credits and dedicated infrastructure."
      },
      {
        "id": "openai_msft_spend",
        "source": "openai",
        "target": "msft",
        "flowType": "cloud_credit",
        "amount": 5.8,
        "desc": "2026 Q4: OpenAI spends $5.8B in hosting fees and compute consumption paid directly to Microsoft Azure."
      },
      {
        "id": "amzn_anthropic_equity",
        "source": "amzn",
        "target": "anthropic",
        "flowType": "equity_investment",
        "amount": 0,
        "desc": "2026 Q4: Operating under active cloud agreement; no new primary equity capital call."
      },
      {
        "id": "anthropic_amzn_spend",
        "source": "anthropic",
        "target": "amzn",
        "flowType": "cloud_credit",
        "amount": 4.2,
        "desc": "2026 Q4: Anthropic pays $4.2B to AWS for Bedrock compute clusters and Trainium workloads."
      },
      {
        "id": "goog_anthropic_equity",
        "source": "goog",
        "target": "anthropic",
        "flowType": "equity_investment",
        "amount": 0,
        "desc": "2026 Q4: Partnership active; no secondary equity injection in this period."
      },
      {
        "id": "vc_coreweave_debt",
        "source": "vc_sovereign",
        "target": "coreweave",
        "flowType": "debt_collateral",
        "amount": 0,
        "desc": "2026 Q4: Previous GPU debt facility drawn down; no new private debt tranche active."
      },
      {
        "id": "coreweave_nvda_gpu",
        "source": "coreweave",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 7.8,
        "desc": "2026 Q4: CoreWeave purchases $7.8B of NVIDIA GPUs to expand its AI cloud cluster fleet."
      },
      {
        "id": "nvda_coreweave_equity",
        "source": "nvda",
        "target": "coreweave",
        "flowType": "equity_investment",
        "amount": 0,
        "desc": "2026 Q4: Strategic partnership active; no incremental equity transaction this period."
      },
      {
        "id": "coreweave_vc_refinance",
        "source": "coreweave",
        "target": "vc_sovereign",
        "flowType": "debt_collateral",
        "amount": 3.4,
        "desc": "2026 Q4: CoreWeave executes $3.4B in asset-backed securitization (ABS) and debt refinancing."
      },
      {
        "id": "vc_openai_equity",
        "source": "vc_sovereign",
        "target": "openai",
        "flowType": "equity_investment",
        "amount": 0,
        "desc": "2026 Q4: Operating on existing treasury; no primary mega equity financing tranche active."
      },
      {
        "id": "xai_nvda_gpu",
        "source": "xai",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 5,
        "desc": "2026 Q4: xAI purchases $5B of NVIDIA liquid-cooled GPUs for the Memphis Colossus supercluster."
      },
      {
        "id": "skhynix_tsmc_foundry",
        "source": "skhynix",
        "target": "tsmc",
        "flowType": "gpu_purchase",
        "amount": 3.2,
        "desc": "2026 Q4: SK Hynix contracts TSMC advanced foundry for $3.2B to produce custom HBM4 logic base dies."
      },
      {
        "id": "market_openai_rev",
        "source": "end_market",
        "target": "openai",
        "flowType": "enterprise_revenue",
        "amount": 13.5,
        "desc": "2026 Q4: Enterprises and users generate $13.5B in verified OpenAI software and API revenue."
      },
      {
        "id": "market_msft_rev",
        "source": "end_market",
        "target": "msft",
        "flowType": "enterprise_revenue",
        "amount": 21,
        "desc": "2026 Q4: Enterprise clients deliver $21B in Microsoft commercial AI revenue."
      },
      {
        "id": "market_anthropic_rev",
        "source": "end_market",
        "target": "anthropic",
        "flowType": "enterprise_revenue",
        "amount": 10.5,
        "desc": "2026 Q4: Enterprise software clients generate $10.5B in Claude API token billing revenue."
      },
      {
        "id": "market_deepseek_rev",
        "source": "end_market",
        "target": "deepseek",
        "flowType": "enterprise_revenue",
        "amount": 4.5,
        "desc": "2026 Q4: DeepSeek generates $4.5B in low-cost high-efficiency reasoning API token revenue."
      }
    ]
  }
];

  if (typeof window !== 'undefined') {
    window.categoryDefinitions = categoryDefinitions;
    window.flowTypeDefinitions = flowTypeDefinitions;
    window.aiCapitalTimelineData = aiCapitalTimelineData;
  }
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = { categoryDefinitions, flowTypeDefinitions, aiCapitalTimelineData };
  }
})();
