// ai_capital_data.js - Global AI Capital Circulation & Supply Chain Empirical Database (Quarterly 2023 Q1 - 2026 Q4)

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
        "desc": "Frontier safety lab creator of Claude 3.5 Sonnet and Computer Use; backed by multi-billion commitments from Amazon & Google.",
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
        "desc": "Elon Musk’s AI frontier initiative operating the world’s largest 100k+ liquid-cooled Colossus supercluster in Memphis.",
        "initialX": 75,
        "initialY": 45
      },
      {
        "id": "deepseek",
        "name": "DeepSeek",
        "category": "ai_lab",
        "marketCap": 1.5,
        "aiCapex": 0.05,
        "aiRevenue": 0.01,
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
        "desc": "Real-world corporate IT budgets, developer API billing, and consumer subscriptions representing verified software revenue.",
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
        "desc": "Initial quarterly compute credits deployed on Azure cluster."
      },
      {
        "source": "openai",
        "target": "msft",
        "flowType": "cloud_credit",
        "amount": 0.35,
        "desc": "Consuming Azure data centers for GPT-3.5 and GPT-4 inference."
      },
      {
        "source": "msft",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 2.8,
        "desc": "Procuring A100/H100 accelerator servers for Azure OpenAI service."
      },
      {
        "source": "goog",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 2.2,
        "desc": "Purchasing NVIDIA GPUs alongside internal TPU clusters."
      },
      {
        "source": "amzn",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 2.1,
        "desc": "AWS EC2 P4d/P5 instance hardware procurement."
      },
      {
        "source": "meta",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 2,
        "desc": "AI Research SuperCluster (RSC) build-out with NVIDIA Hopper."
      },
      {
        "source": "nvda",
        "target": "tsmc",
        "flowType": "gpu_purchase",
        "amount": 2.2,
        "desc": "Wafer allocation on TSMC 4N process and CoWoS packaging."
      },
      {
        "source": "nvda",
        "target": "skhynix",
        "flowType": "hbm_purchase",
        "amount": 0.8,
        "desc": "Exclusive procurement of HBM3 memory stacks for H100 SXM."
      },
      {
        "source": "nvda",
        "target": "samsung",
        "flowType": "hbm_purchase",
        "amount": 0.3,
        "desc": "Standard GDDR6 and early HBM2E/HBM3 qualification lots."
      },
      {
        "source": "tsmc",
        "target": "asml",
        "flowType": "equipment_purchase",
        "amount": 1.5,
        "desc": "Procuring EUV lithography systems for 3nm/5nm lines."
      },
      {
        "source": "samsung",
        "target": "asml",
        "flowType": "equipment_purchase",
        "amount": 1.1,
        "desc": "EUV tool deliveries for advanced DRAM and foundry."
      },
      {
        "source": "skhynix",
        "target": "asml",
        "flowType": "equipment_purchase",
        "amount": 0.6,
        "desc": "EUV equipment for 1a/1b nm HBM DRAM production."
      },
      {
        "source": "goog",
        "target": "avgo",
        "flowType": "gpu_purchase",
        "amount": 0.7,
        "desc": "Co-developing TPU v4/v5e ASICs and optical interconnects."
      },
      {
        "source": "vc_sovereign",
        "target": "anthropic",
        "flowType": "equity_investment",
        "amount": 0.4,
        "desc": "Series B safety and alignment venture financing."
      },
      {
        "source": "end_market",
        "target": "openai",
        "flowType": "enterprise_revenue",
        "amount": 0.2,
        "desc": "ChatGPT Plus $20/mo subscriptions and early developer API keys."
      },
      {
        "source": "end_market",
        "target": "msft",
        "flowType": "enterprise_revenue",
        "amount": 0.6,
        "desc": "Enterprise Azure OpenAI Service token consumption."
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
        "desc": "Frontier safety lab creator of Claude 3.5 Sonnet and Computer Use; backed by multi-billion commitments from Amazon & Google.",
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
        "desc": "Elon Musk’s AI frontier initiative operating the world’s largest 100k+ liquid-cooled Colossus supercluster in Memphis.",
        "initialX": 75,
        "initialY": 45
      },
      {
        "id": "deepseek",
        "name": "DeepSeek",
        "category": "ai_lab",
        "marketCap": 2.2,
        "aiCapex": 0.08,
        "aiRevenue": 0.02,
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
        "desc": "Real-world corporate IT budgets, developer API billing, and consumer subscriptions representing verified software revenue.",
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
        "desc": "Aggressive procurement of H100 SXM modules."
      },
      {
        "source": "goog",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 2.6,
        "desc": "Expanding A100/H100 GPU clusters in GCP."
      },
      {
        "source": "amzn",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 2.8,
        "desc": "AWS UltraClusters rollout with EFA networking."
      },
      {
        "source": "meta",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 2.5,
        "desc": "Securing Hopper chips for LLaMA 2 training runs."
      },
      {
        "source": "nvda",
        "target": "tsmc",
        "flowType": "gpu_purchase",
        "amount": 2.8,
        "desc": "Contracting emergency CoWoS expansion with TSMC."
      },
      {
        "source": "nvda",
        "target": "skhynix",
        "flowType": "hbm_purchase",
        "amount": 1.2,
        "desc": "Mass purchasing HBM3 stacks; SK Hynix captures >85% market share."
      },
      {
        "source": "nvda",
        "target": "samsung",
        "flowType": "hbm_purchase",
        "amount": 0.4,
        "desc": "DRAM and enterprise SSD procurement for DGX systems."
      },
      {
        "source": "tsmc",
        "target": "asml",
        "flowType": "equipment_purchase",
        "amount": 1.6,
        "desc": "EUV system installments at Fab 18."
      },
      {
        "source": "skhynix",
        "target": "asml",
        "flowType": "equipment_purchase",
        "amount": 0.7,
        "desc": "Procuring lithography tools to scale 1b-nm HBM DRAM."
      },
      {
        "source": "samsung",
        "target": "asml",
        "flowType": "equipment_purchase",
        "amount": 1.2,
        "desc": "Pyeongtaek Campus EUV lines expansion."
      },
      {
        "source": "meta",
        "target": "avgo",
        "flowType": "gpu_purchase",
        "amount": 0.5,
        "desc": "MTIA v1 accelerator ASIC design collaboration."
      },
      {
        "source": "end_market",
        "target": "openai",
        "flowType": "enterprise_revenue",
        "amount": 0.35,
        "desc": "ChatGPT Plus run-rate acceleration."
      },
      {
        "source": "end_market",
        "target": "msft",
        "flowType": "enterprise_revenue",
        "amount": 0.75,
        "desc": "Azure AI services deployed in Fortune 500 pilots."
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
        "desc": "Real-world corporate IT budgets, developer API billing, and consumer subscriptions representing verified software revenue.",
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
        "desc": "Blackstone & Magnetar provide $2.3B debt backed by H100 collateral."
      },
      {
        "source": "coreweave",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 2.1,
        "desc": "Deploying debt proceeds to purchase tens of thousands of H100s."
      },
      {
        "source": "amzn",
        "target": "anthropic",
        "flowType": "equity_investment",
        "amount": 1.25,
        "desc": "First tranche of $4B investment; Anthropic chooses AWS Bedrock."
      },
      {
        "source": "anthropic",
        "target": "amzn",
        "flowType": "cloud_credit",
        "amount": 0.4,
        "desc": "Cloud compute spend on AWS Trainium and GPU clusters."
      },
      {
        "source": "msft",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 3.8,
        "desc": "Ongoing mega-orders for Azure OpenAI data centers."
      },
      {
        "source": "nvda",
        "target": "skhynix",
        "flowType": "hbm_purchase",
        "amount": 1.6,
        "desc": "SK Hynix operating at 100% HBM3 capacity for NVIDIA."
      },
      {
        "source": "nvda",
        "target": "tsmc",
        "flowType": "gpu_purchase",
        "amount": 3.2,
        "desc": "TSMC confirms 2x CoWoS capacity expansion roadmap."
      },
      {
        "source": "goog",
        "target": "avgo",
        "flowType": "gpu_purchase",
        "amount": 0.8,
        "desc": "Scaling TPU v5p supercomputers with Broadcom switches."
      },
      {
        "source": "end_market",
        "target": "openai",
        "flowType": "enterprise_revenue",
        "amount": 0.5,
        "desc": "Enterprise ChatGPT subscriptions launched for corporate clients."
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
        "desc": "Real-world corporate IT budgets, developer API billing, and consumer subscriptions representing verified software revenue.",
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
        "desc": "Azure compute infrastructure commitment expanded post-Altman return."
      },
      {
        "source": "openai",
        "target": "msft",
        "flowType": "cloud_credit",
        "amount": 0.8,
        "desc": "OpenAI spends heavily on Azure compute for GPT-4 Turbo rollout."
      },
      {
        "source": "goog",
        "target": "anthropic",
        "flowType": "equity_investment",
        "amount": 1,
        "desc": "Google commits $2B in tranches, starting with $500M initial cash."
      },
      {
        "source": "msft",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 4.2,
        "desc": "Largest global customer for NVIDIA H100 clusters."
      },
      {
        "source": "meta",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 3,
        "desc": "Preparing fleet for LLaMA 3 multi-modal training."
      },
      {
        "source": "nvda",
        "target": "skhynix",
        "flowType": "hbm_purchase",
        "amount": 1.9,
        "desc": "HBM3 ASP surges as NVIDIA secures full 2024 supply line."
      },
      {
        "source": "nvda",
        "target": "samsung",
        "flowType": "hbm_purchase",
        "amount": 0.6,
        "desc": "Sampling early HBM3E 24GB modules."
      },
      {
        "source": "tsmc",
        "target": "asml",
        "flowType": "equipment_purchase",
        "amount": 1.8,
        "desc": "High-NA EUV trial agreements and N3E tooling."
      },
      {
        "source": "end_market",
        "target": "msft",
        "flowType": "enterprise_revenue",
        "amount": 1,
        "desc": "General availability of Microsoft 365 Copilot ($30/user/mo)."
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
        "desc": "Real-world corporate IT budgets, developer API billing, and consumer subscriptions representing verified software revenue.",
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
        "desc": "Pre-ordering GB200 NVL72 liquid-cooled super-pods."
      },
      {
        "source": "meta",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 3.8,
        "desc": "Meta accelerates toward 600k H100 compute equivalents."
      },
      {
        "source": "amzn",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 3.5,
        "desc": "AWS Ceiba project deployment with NVIDIA Grace Hopper."
      },
      {
        "source": "nvda",
        "target": "skhynix",
        "flowType": "hbm_purchase",
        "amount": 2.5,
        "desc": "SK Hynix starts world-first volume mass production of HBM3E 8-Hi."
      },
      {
        "source": "samsung",
        "target": "nvda",
        "flowType": "hbm_purchase",
        "amount": 0.8,
        "desc": "Samsung samples 12-layer HBM3E for qualification testing."
      },
      {
        "source": "goog",
        "target": "avgo",
        "flowType": "gpu_purchase",
        "amount": 1.2,
        "desc": "Google TPU v5e and v5p custom ASIC manufacturing fees."
      },
      {
        "source": "nvda",
        "target": "tsmc",
        "flowType": "gpu_purchase",
        "amount": 4.5,
        "desc": "TSMC CoWoS-S and CoWoS-L packaging lines booked to 100%."
      },
      {
        "source": "end_market",
        "target": "openai",
        "flowType": "enterprise_revenue",
        "amount": 0.9,
        "desc": "Enterprise ChatGPT customer base surpasses 600,000."
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
        "desc": "Real-world corporate IT budgets, developer API billing, and consumer subscriptions representing verified software revenue.",
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
        "desc": "Blackstone, Carlyle & Magnetar lead $7.5B debt facility backed by H100/Blackwell."
      },
      {
        "source": "coreweave",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 5.5,
        "desc": "Pouring billions into NVIDIA Hopper and Blackwell server allocations."
      },
      {
        "source": "nvda",
        "target": "coreweave",
        "flowType": "equity_investment",
        "amount": 0.3,
        "desc": "NVIDIA participates in CoreWeave equity rounds to lock captive demand."
      },
      {
        "source": "nvda",
        "target": "skhynix",
        "flowType": "hbm_purchase",
        "amount": 3.2,
        "desc": "SK Hynix posts record quarterly operating profit led by HBM pricing."
      },
      {
        "source": "nvda",
        "target": "tsmc",
        "flowType": "gpu_purchase",
        "amount": 5.5,
        "desc": "TSMC expands CoWoS outlays to meet Blackwell dual-die requirements."
      },
      {
        "source": "amzn",
        "target": "anthropic",
        "flowType": "equity_investment",
        "amount": 2,
        "desc": "Amazon closes final $2.75B of $4B pledge."
      },
      {
        "source": "anthropic",
        "target": "amzn",
        "flowType": "cloud_credit",
        "amount": 0.7,
        "desc": "Claude 3.5 Sonnet trained on AWS Bedrock instances."
      },
      {
        "source": "end_market",
        "target": "msft",
        "flowType": "enterprise_revenue",
        "amount": 1.5,
        "desc": "Microsoft Copilot and Azure AI API enterprise billings."
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
        "desc": "Real-world corporate IT budgets, developer API billing, and consumer subscriptions representing verified software revenue.",
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
        "desc": "Thrive, SoftBank, MGX, and Microsoft lead $6.6B syndicate at $157B valuation."
      },
      {
        "source": "xai",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 3.5,
        "desc": "Purchasing 100,000 H100s for Memphis Colossus data center."
      },
      {
        "source": "nvda",
        "target": "skhynix",
        "flowType": "hbm_purchase",
        "amount": 3.6,
        "desc": "SK Hynix starts volume production of 12-layer HBM3E (36GB)."
      },
      {
        "source": "nvda",
        "target": "samsung",
        "flowType": "hbm_purchase",
        "amount": 1.2,
        "desc": "Samsung passes PRA validation tests for 8-Hi HBM3E."
      },
      {
        "source": "openai",
        "target": "msft",
        "flowType": "cloud_credit",
        "amount": 1.5,
        "desc": "Training cluster spend for next-generation Strawberry (o1)."
      },
      {
        "source": "tsmc",
        "target": "asml",
        "flowType": "equipment_purchase",
        "amount": 2.1,
        "desc": "Procuring additional EUV scanners for 3nm capacity ramp."
      },
      {
        "source": "end_market",
        "target": "openai",
        "flowType": "enterprise_revenue",
        "amount": 1.3,
        "desc": "OpenAI annualized revenue surpasses $4B."
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
        "desc": "Real-world corporate IT budgets, developer API billing, and consumer subscriptions representing verified software revenue.",
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
        "desc": "Mega procurement of GB200 and H200 accelerators."
      },
      {
        "source": "goog",
        "target": "avgo",
        "flowType": "gpu_purchase",
        "amount": 1.8,
        "desc": "Broadcom designs and manufactures Google TPU v5p and TPU v6 nodes."
      },
      {
        "source": "meta",
        "target": "avgo",
        "flowType": "gpu_purchase",
        "amount": 1.1,
        "desc": "Meta MTIA v2 ASIC acceleration and Arista/Broadcom Ethernet."
      },
      {
        "source": "nvda",
        "target": "skhynix",
        "flowType": "hbm_purchase",
        "amount": 4,
        "desc": "Blackwell production consumes massive quantities of 8-Hi & 12-Hi HBM3E."
      },
      {
        "source": "nvda",
        "target": "samsung",
        "flowType": "hbm_purchase",
        "amount": 1.5,
        "desc": "Samsung qualifies 12-Hi HBM3E with NVIDIA customers."
      },
      {
        "source": "nvda",
        "target": "tsmc",
        "flowType": "gpu_purchase",
        "amount": 6.8,
        "desc": "TSMC CoWoS capacity surpasses 35k wafers/month."
      },
      {
        "source": "end_market",
        "target": "openai",
        "flowType": "enterprise_revenue",
        "amount": 1.8,
        "desc": "o1 reasoning API pricing commands premium token margins."
      },
      {
        "source": "end_market",
        "target": "msft",
        "flowType": "enterprise_revenue",
        "amount": 2.2,
        "desc": "Enterprise Copilot seat expansions and Azure AI services."
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
        "desc": "Real-world corporate IT budgets, developer API billing, and consumer subscriptions representing verified software revenue.",
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
        "desc": "Stargate site acquisition and preliminary nuclear energy PPAs."
      },
      {
        "source": "openai",
        "target": "msft",
        "flowType": "cloud_credit",
        "amount": 2.1,
        "desc": "OpenAI Azure spend scales with daily user traffic and enterprise inference."
      },
      {
        "source": "msft",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 6.2,
        "desc": "Blackwell GB200 volume deliveries begin to Azure data centers."
      },
      {
        "source": "amzn",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 5.5,
        "desc": "AWS expands Blackwell UltraClusters."
      },
      {
        "source": "nvda",
        "target": "skhynix",
        "flowType": "hbm_purchase",
        "amount": 4.5,
        "desc": "SK Hynix ships majority share of 12-Hi HBM3E for B200."
      },
      {
        "source": "nvda",
        "target": "samsung",
        "flowType": "hbm_purchase",
        "amount": 2,
        "desc": "Samsung expands HBM3E shipments across enterprise tier."
      },
      {
        "source": "tsmc",
        "target": "asml",
        "flowType": "equipment_purchase",
        "amount": 2.4,
        "desc": "High-NA EUV system integration for 2nm trial production."
      },
      {
        "source": "end_market",
        "target": "deepseek",
        "flowType": "enterprise_revenue",
        "amount": 0.45,
        "desc": "Global developers adopt DeepSeek open-weights API for low inference cost."
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
        "desc": "Real-world corporate IT budgets, developer API billing, and consumer subscriptions representing verified software revenue.",
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
        "desc": "Procuring thousands of liquid-cooled GB200 server racks."
      },
      {
        "source": "goog",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 4.5,
        "desc": "Deploying Blackwell alongside internal TPU v6 clusters."
      },
      {
        "source": "meta",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 5.2,
        "desc": "Meta mega data center campuses across the US."
      },
      {
        "source": "nvda",
        "target": "skhynix",
        "flowType": "hbm_purchase",
        "amount": 4.8,
        "desc": "SK Hynix remains primary 12-layer HBM3E supplier."
      },
      {
        "source": "nvda",
        "target": "samsung",
        "flowType": "hbm_purchase",
        "amount": 2.6,
        "desc": "Samsung expands volume shipments of HBM3E to tier-1 server makers."
      },
      {
        "source": "nvda",
        "target": "tsmc",
        "flowType": "gpu_purchase",
        "amount": 7.5,
        "desc": "TSMC CoWoS capacity climbs to 42,000 wafers per month."
      },
      {
        "source": "end_market",
        "target": "msft",
        "flowType": "enterprise_revenue",
        "amount": 3,
        "desc": "Azure Copilot Studio agent workflows adopted across Global 2000."
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
        "desc": "Real-world corporate IT budgets, developer API billing, and consumer subscriptions representing verified software revenue.",
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
        "desc": "Refinancing maturing 2023 debt facilities with asset-backed bonds."
      },
      {
        "source": "coreweave",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 4,
        "desc": "Transitioning cluster capacity from Hopper to Blackwell."
      },
      {
        "source": "msft",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 7,
        "desc": "Continued Blackwell deployments for enterprise cloud services."
      },
      {
        "source": "nvda",
        "target": "skhynix",
        "flowType": "hbm_purchase",
        "amount": 5,
        "desc": "SK Hynix operating at full capacity for 12-layer HBM3E."
      },
      {
        "source": "nvda",
        "target": "samsung",
        "flowType": "hbm_purchase",
        "amount": 3,
        "desc": "Samsung memory division posts strong HBM revenue contribution."
      },
      {
        "source": "goog",
        "target": "avgo",
        "flowType": "gpu_purchase",
        "amount": 2.2,
        "desc": "Google TPU v6 custom silicon ramp across primary data centers."
      },
      {
        "source": "end_market",
        "target": "openai",
        "flowType": "enterprise_revenue",
        "amount": 2.8,
        "desc": "Agentic coding and deterministic workflows drive corporate ROI."
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
        "desc": "Real-world corporate IT budgets, developer API billing, and consumer subscriptions representing verified software revenue.",
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
        "desc": "TPU v6 scaling drives Broadcom custom ASIC networking segment."
      },
      {
        "source": "meta",
        "target": "avgo",
        "flowType": "gpu_purchase",
        "amount": 1.6,
        "desc": "Meta deploys MTIA v2 across ranking and recommendation nodes."
      },
      {
        "source": "msft",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 7.2,
        "desc": "Hyperscalers maintain high GPU purchases for third-party cloud customers."
      },
      {
        "source": "nvda",
        "target": "skhynix",
        "flowType": "hbm_purchase",
        "amount": 5.2,
        "desc": "HBM3E sales drive record annual free cash flow for SK Hynix."
      },
      {
        "source": "nvda",
        "target": "samsung",
        "flowType": "hbm_purchase",
        "amount": 3.4,
        "desc": "Samsung ships 12-layer HBM3E at scale for AI servers."
      },
      {
        "source": "end_market",
        "target": "openai",
        "flowType": "enterprise_revenue",
        "amount": 3.2,
        "desc": "OpenAI quarterly enterprise run-rate approaches $3.2B."
      },
      {
        "source": "end_market",
        "target": "msft",
        "flowType": "enterprise_revenue",
        "amount": 3.6,
        "desc": "Enterprise software suites embed agentic copilot capabilities."
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
        "desc": "Real-world corporate IT budgets, developer API billing, and consumer subscriptions representing verified software revenue.",
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
        "desc": "Restructuring cloud partnership into commercial fee structure for antitrust compliance."
      },
      {
        "source": "openai",
        "target": "msft",
        "flowType": "cloud_credit",
        "amount": 2.8,
        "desc": "Direct commercial payments for dedicated Stargate computing zones."
      },
      {
        "source": "msft",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 7.2,
        "desc": "Procuring Vera Rubin and Blackwell systems."
      },
      {
        "source": "nvda",
        "target": "skhynix",
        "flowType": "hbm_purchase",
        "amount": 5.4,
        "desc": "SK Hynix samples 16-layer HBM3E and early HBM4."
      },
      {
        "source": "nvda",
        "target": "samsung",
        "flowType": "hbm_purchase",
        "amount": 3.6,
        "desc": "Samsung develops custom HBM4 base dies on 4nm foundry."
      },
      {
        "source": "nvda",
        "target": "tsmc",
        "flowType": "gpu_purchase",
        "amount": 8,
        "desc": "TSMC 2nm N2 process reservation agreements."
      },
      {
        "source": "end_market",
        "target": "openai",
        "flowType": "enterprise_revenue",
        "amount": 3.5,
        "desc": "Corporate agentic workflow licenses."
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
        "desc": "Real-world corporate IT budgets, developer API billing, and consumer subscriptions representing verified software revenue.",
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
        "desc": "SK Hynix contracts TSMC 4nm/3nm foundries for custom HBM4 base dies."
      },
      {
        "source": "samsung",
        "target": "nvda",
        "flowType": "hbm_purchase",
        "amount": 4,
        "desc": "Samsung provides one-stop turnkey HBM4 solutions (memory + 4nm foundry)."
      },
      {
        "source": "nvda",
        "target": "skhynix",
        "flowType": "hbm_purchase",
        "amount": 5.8,
        "desc": "NVIDIA secures vast majority of next-gen Rubin memory allocations."
      },
      {
        "source": "nvda",
        "target": "tsmc",
        "flowType": "gpu_purchase",
        "amount": 8.5,
        "desc": "TSMC volume production of 2nm nanosheet wafer lots."
      },
      {
        "source": "goog",
        "target": "avgo",
        "flowType": "gpu_purchase",
        "amount": 2.8,
        "desc": "Google deploys 7th-gen TPU ASIC across global regions."
      },
      {
        "source": "end_market",
        "target": "msft",
        "flowType": "enterprise_revenue",
        "amount": 4.3,
        "desc": "Copilot agentic features reach high enterprise adoption."
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
        "desc": "Real-world corporate IT budgets, developer API billing, and consumer subscriptions representing verified software revenue.",
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
        "desc": "Procuring next-gen AI supercomputers."
      },
      {
        "source": "amzn",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 6.5,
        "desc": "AWS datacenter infrastructure outlays."
      },
      {
        "source": "nvda",
        "target": "skhynix",
        "flowType": "hbm_purchase",
        "amount": 6,
        "desc": "SK Hynix remains critical monopoly supplier of premium HBM."
      },
      {
        "source": "nvda",
        "target": "samsung",
        "flowType": "hbm_purchase",
        "amount": 4.2,
        "desc": "Samsung supplies HBM4 across high-volume AI hardware tiers."
      },
      {
        "source": "nvda",
        "target": "tsmc",
        "flowType": "gpu_purchase",
        "amount": 8.8,
        "desc": "Wafer and advanced packaging orders at TSMC."
      },
      {
        "source": "end_market",
        "target": "openai",
        "flowType": "enterprise_revenue",
        "amount": 4.2,
        "desc": "Enterprise workflows deliver verifiable productivity gains."
      },
      {
        "source": "end_market",
        "target": "msft",
        "flowType": "enterprise_revenue",
        "amount": 4.5,
        "desc": "Commercial cloud AI bookings exceed $18B annualized run-rate."
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
        "desc": "Real-world corporate IT budgets, developer API billing, and consumer subscriptions representing verified software revenue.",
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
        "desc": "Steady-state replacement and next-gen Rubin GPU procurement."
      },
      {
        "source": "amzn",
        "target": "nvda",
        "flowType": "gpu_purchase",
        "amount": 6.2,
        "desc": "AWS fleet maintenance and enterprise AI workload capacity."
      },
      {
        "source": "nvda",
        "target": "skhynix",
        "flowType": "hbm_purchase",
        "amount": 6.2,
        "desc": "Long-term HBM4 and HBM4E multi-year supply contracts."
      },
      {
        "source": "nvda",
        "target": "samsung",
        "flowType": "hbm_purchase",
        "amount": 4.5,
        "desc": "Samsung turnkey HBM4 solutions deployed at scale."
      },
      {
        "source": "nvda",
        "target": "tsmc",
        "flowType": "gpu_purchase",
        "amount": 9,
        "desc": "TSMC advanced packaging and 2nm production run at peak efficiency."
      },
      {
        "source": "tsmc",
        "target": "asml",
        "flowType": "equipment_purchase",
        "amount": 2.5,
        "desc": "Commercial High-NA EUV lithography tooling deliveries."
      },
      {
        "source": "end_market",
        "target": "openai",
        "flowType": "enterprise_revenue",
        "amount": 4.5,
        "desc": "Enterprise autonomous multi-agent platform subscriptions."
      },
      {
        "source": "end_market",
        "target": "msft",
        "flowType": "enterprise_revenue",
        "amount": 4.7,
        "desc": "Office 365 Copilot autonomous agents enterprise penetration."
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
