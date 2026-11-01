// ai_capital_data.js - Global AI Capital Circulation & Ouroboros Loop Empirical Database (2022-2026)

(function () {
  const categoryDefinitions = {
    hyperscaler: { name: 'Hyperscalers (Big Tech)', color: '#38bdf8' },
    chipmaker: { name: 'Hardware Monopoly (NVIDIA / TSMC)', color: '#10b981' },
    ai_lab: { name: 'Frontier AI Labs', color: '#f43f5e' },
    neocloud: { name: 'Neoclouds (GPU Debt Entities)', color: '#fbbf24' },
    venture_capital: { name: 'VC & Sovereign Wealth', color: '#a855f7' },
    end_market: { name: 'Real End-User Market (Software Revenue)', color: '#00e5ff' }
  };

  const flowTypeDefinitions = {
    equity_investment: { name: 'Equity Investment (Cash / Direct Stake)', color: '#ffb300' },
    cloud_credit: { name: 'Cloud Compute Credits (Swapped for Equity)', color: '#00e5ff' },
    gpu_purchase: { name: 'GPU & Hardware Purchases (NVIDIA Outlay)', color: '#10b981' },
    debt_collateral: { name: 'GPU-Collateralized Debt (Vendor Financing)', color: '#a855f7' },
    enterprise_revenue: { name: 'Real End-User Software & API Revenue', color: '#38bdf8' }
  };

  const aiCapitalTimelineData = [
    // ─── 2022: Pre-ChatGPT Foundation ───────────────────────────
    {
      year: 2022,
      title: '2022: Pre-ChatGPT Foundations & Early Alliances',
      summary: 'Before generative AI captivated global markets, Microsoft established early ties with OpenAI ($1B initial tranche + early compute access). Hyperscaler AI capex was modest and primarily targeted recommendation engines, ad-ranking, and natural language search.',
      macroMetrics: {
        totalAiCapex: 69.0, // Billions USD (Hyperscalers + Neoclouds)
        realEndUserRevenue: 1.2, // Billions USD (GenAI software revenue)
        capexRevenueDeficit: 67.8, // Gap ($B)
        circularRatio: 42 // % of AI lab funding provided by Big Tech cloud vendors
      },
      nodes: [
        { id: 'msft', name: 'Microsoft', category: 'hyperscaler', marketCap: 1780, aiCapex: 18.0, aiRevenue: 0.8, desc: 'Early backer of OpenAI with Azure exclusive hosting agreements.' },
        { id: 'goog', name: 'Alphabet / Google', category: 'hyperscaler', marketCap: 1150, aiCapex: 16.0, aiRevenue: 0.6, desc: 'Pioneered Transformer architecture; internal TPU cluster development.' },
        { id: 'amzn', name: 'Amazon / AWS', category: 'hyperscaler', marketCap: 860, aiCapex: 20.0, aiRevenue: 0.5, desc: 'World’s largest cloud provider expanding EC2 compute instances.' },
        { id: 'meta', name: 'Meta Platforms', category: 'hyperscaler', marketCap: 320, aiCapex: 15.0, aiRevenue: 0.2, desc: 'Rebuilding data centers around PyTorch and open AI research.' },
        { id: 'nvda', name: 'NVIDIA', category: 'chipmaker', marketCap: 360, aiCapex: 2.5, aiRevenue: 15.0, desc: 'Dominating enterprise accelerators with A100 GPU architecture.' },
        { id: 'tsmc', name: 'TSMC', category: 'chipmaker', marketCap: 380, aiCapex: 36.3, aiRevenue: 75.9, desc: 'Sole pure-play manufacturer of advanced 5nm/4nm AI silicon.' },
        { id: 'openai', name: 'OpenAI', category: 'ai_lab', marketCap: 20, aiCapex: 0.8, aiRevenue: 0.03, desc: 'Research lab developing GPT-3 and DALL-E prior to ChatGPT launch.' },
        { id: 'anthropic', name: 'Anthropic', category: 'ai_lab', marketCap: 4, aiCapex: 0.2, aiRevenue: 0.01, desc: 'Founded by ex-OpenAI safety researchers developing Constitutional AI.' },
        { id: 'xai', name: 'xAI', category: 'ai_lab', marketCap: 5, aiCapex: 0.1, aiRevenue: 0.00, desc: 'Nascent artificial intelligence initiative by Elon Musk.' },
        { id: 'coreweave', name: 'CoreWeave', category: 'neocloud', marketCap: 2, aiCapex: 0.3, aiRevenue: 0.05, desc: 'Former crypto miner pivoting to specialized GPU cloud hosting.' },
        { id: 'vc_sovereign', name: 'VC & Sovereign Funds', category: 'venture_capital', marketCap: 500, aiCapex: 0.0, aiRevenue: 0.0, desc: 'Silicon Valley early-stage venture capital (Sequoia, a16z, Lightspeed).' },
        { id: 'end_market', name: 'Enterprise & Consumers', category: 'end_market', marketCap: 1200, aiCapex: 0.0, aiRevenue: 1.2, desc: 'Early enterprise adopters testing preliminary NLP and image generation APIs.' }
      ],
      edges: [
        { source: 'msft', target: 'openai', flowType: 'equity_investment', amount: 1.0, desc: 'Early foundational equity and compute access partnership.' },
        { source: 'openai', target: 'msft', flowType: 'cloud_credit', amount: 0.6, desc: 'Azure compute utilization for GPT-3.5 training clusters.' },
        { source: 'msft', target: 'nvda', flowType: 'gpu_purchase', amount: 3.5, desc: 'Acquisition of A100 GPU server clusters for Azure AI cloud.' },
        { source: 'goog', target: 'nvda', flowType: 'gpu_purchase', amount: 2.8, desc: 'Purchasing NVIDIA GPUs alongside internal TPU v4 clusters.' },
        { source: 'amzn', target: 'nvda', flowType: 'gpu_purchase', amount: 3.0, desc: 'AWS EC2 P4d instance hardware outlays.' },
        { source: 'meta', target: 'nvda', flowType: 'gpu_purchase', amount: 2.5, desc: 'Research SuperCluster (RSC) build-out using 16,000 A100s.' },
        { source: 'nvda', target: 'tsmc', flowType: 'gpu_purchase', amount: 4.8, desc: 'Wafer manufacturing allocation on TSMC 4N/7nm processes.' },
        { source: 'vc_sovereign', target: 'openai', flowType: 'equity_investment', amount: 1.2, desc: 'Secondary funding rounds led by Tiger Global and venture backers.' },
        { source: 'vc_sovereign', target: 'anthropic', flowType: 'equity_investment', amount: 0.5, desc: 'Series B funding round for alignment and safety research.' },
        { source: 'end_market', target: 'openai', flowType: 'enterprise_revenue', amount: 0.03, desc: 'Early API usage tokens for GPT-3 developers.' },
        { source: 'end_market', target: 'msft', flowType: 'enterprise_revenue', amount: 0.8, desc: 'Enterprise Azure Cognitive Services subscriptions.' }
      ]
    },

    // ─── 2023: Generative AI Big Bang ───────────────────────────
    {
      year: 2023,
      title: '2023: Generative AI Big Bang & The H100 Shortage',
      summary: 'The public launch of ChatGPT triggers a global scramble for compute. Microsoft commits $10B to OpenAI (largely Azure credits). NVIDIA H100 becomes the most coveted asset in the global economy, generating unprecedented 75%+ gross margins.',
      macroMetrics: {
        totalAiCapex: 119.0, // Billions USD
        realEndUserRevenue: 5.5, // Billions USD
        capexRevenueDeficit: 113.5,
        circularRatio: 58 // Cloud credits and captive financing begin surging
      },
      nodes: [
        { id: 'msft', name: 'Microsoft', category: 'hyperscaler', marketCap: 2790, aiCapex: 32.0, aiRevenue: 2.5, desc: 'Deploys GPT-4 into Bing and Copilot; cements $10B partnership.' },
        { id: 'goog', name: 'Alphabet / Google', category: 'hyperscaler', marketCap: 1760, aiCapex: 28.0, aiRevenue: 1.8, desc: 'Issues Code Red; releases Bard and deepens Anthropic alliance.' },
        { id: 'amzn', name: 'Amazon / AWS', category: 'hyperscaler', marketCap: 1570, aiCapex: 30.0, aiRevenue: 1.2, desc: 'Announces up to $4B strategic investment in Anthropic.' },
        { id: 'meta', name: 'Meta Platforms', category: 'hyperscaler', marketCap: 910, aiCapex: 27.0, aiRevenue: 0.9, desc: 'Open-sources LLaMA 1 & 2; pivots whole infrastructure toward GPU clusters.' },
        { id: 'nvda', name: 'NVIDIA', category: 'chipmaker', marketCap: 1220, aiCapex: 3.5, aiRevenue: 47.5, desc: 'Data Center revenue spikes 400% on Hopper H100 demand.' },
        { id: 'tsmc', name: 'TSMC', category: 'chipmaker', marketCap: 540, aiCapex: 30.4, aiRevenue: 69.3, desc: 'CoWoS advanced packaging capacity becomes the primary global bottleneck.' },
        { id: 'openai', name: 'OpenAI', category: 'ai_lab', marketCap: 86, aiCapex: 2.8, aiRevenue: 1.6, desc: 'ChatGPT surpasses 100M weekly active users; begins commercial monetization.' },
        { id: 'anthropic', name: 'Anthropic', category: 'ai_lab', marketCap: 18, aiCapex: 1.2, aiRevenue: 0.1, desc: 'Launches Claude; receives landmark backing from Amazon and Google.' },
        { id: 'xai', name: 'xAI', category: 'ai_lab', marketCap: 15, aiCapex: 0.8, aiRevenue: 0.05, desc: 'Formed by Elon Musk with access to X (Twitter) firehose data.' },
        { id: 'coreweave', name: 'CoreWeave', category: 'neocloud', marketCap: 7, aiCapex: 2.5, aiRevenue: 0.5, desc: 'Secures $2.3B debt facility backed entirely by NVIDIA H100 GPUs.' },
        { id: 'vc_sovereign', name: 'VC & Sovereign Funds', category: 'venture_capital', marketCap: 500, aiCapex: 0.0, aiRevenue: 0.0, desc: 'Pouring record capital into AI wrappers and foundation models.' },
        { id: 'end_market', name: 'Enterprise & Consumers', category: 'end_market', marketCap: 1200, aiCapex: 0.0, aiRevenue: 5.5, desc: 'ChatGPT Plus $20/mo subscriptions and early enterprise pilot licenses.' }
      ],
      edges: [
        { source: 'msft', target: 'openai', flowType: 'cloud_credit', amount: 8.5, desc: 'Multi-year commitment consisting predominantly of Azure compute credits.' },
        { source: 'openai', target: 'msft', flowType: 'cloud_credit', amount: 2.2, desc: 'Consuming Azure data center clusters to serve ChatGPT queries.' },
        { source: 'amzn', target: 'anthropic', flowType: 'equity_investment', amount: 2.0, desc: 'First tranche of $4B investment; Anthropic chooses AWS as primary cloud.' },
        { source: 'goog', target: 'anthropic', flowType: 'equity_investment', amount: 1.5, desc: 'Equity stake combined with Google Cloud TPU/GPU training pact.' },
        { source: 'msft', target: 'nvda', flowType: 'gpu_purchase', amount: 11.5, desc: 'Purchasing over 150,000 H100 accelerators for Azure infrastructure.' },
        { source: 'meta', target: 'nvda', flowType: 'gpu_purchase', amount: 8.0, desc: 'Acquiring 150k+ H100 GPUs to train LLaMA foundation models.' },
        { source: 'goog', target: 'nvda', flowType: 'gpu_purchase', amount: 6.5, desc: 'GPU procurement to complement internal TPU v5e/v5p pods.' },
        { source: 'amzn', target: 'nvda', flowType: 'gpu_purchase', amount: 7.0, desc: 'AWS UltraCluster expansion with H100 HGX systems.' },
        { source: 'nvda', target: 'coreweave', flowType: 'equity_investment', amount: 0.1, desc: 'NVIDIA invests in CoreWeave and grants prioritized GPU allocations.' },
        { source: 'coreweave', target: 'nvda', flowType: 'gpu_purchase', amount: 2.3, desc: 'CoreWeave borrows $2.3B against GPUs to buy more NVIDIA chips.' },
        { source: 'nvda', target: 'tsmc', flowType: 'gpu_purchase', amount: 9.5, desc: 'Doubling CoWoS packaging orders at TSMC.' },
        { source: 'vc_sovereign', target: 'openai', flowType: 'equity_investment', amount: 3.3, desc: 'Secondary tender offer valuing OpenAI at $86 billion.' },
        { source: 'end_market', target: 'openai', flowType: 'enterprise_revenue', amount: 1.6, desc: 'ChatGPT Plus and Enterprise tier revenue run-rate.' },
        { source: 'end_market', target: 'msft', flowType: 'enterprise_revenue', amount: 2.5, desc: 'Microsoft 365 Copilot add-on and Azure OpenAI Service API sales.' }
      ]
    },

    // ─── 2024: The $600B Question & Circular Expansion ─────────
    {
      year: 2024,
      title: '2024: The $600B Question & The Circular Ouroboros',
      summary: 'Sequoia publishes "AI’s $600B Question", highlighting the staggering gap between $200B+ capex and modest real-world revenue. NVIDIA aggressively finances AI startups, which buy chips back from NVIDIA. CoreWeave raises an unprecedented $7.5B debt facility using GPUs as collateral.',
      macroMetrics: {
        totalAiCapex: 205.0, // Billions USD
        realEndUserRevenue: 16.8, // Billions USD
        capexRevenueDeficit: 188.2,
        circularRatio: 68 // Peak round-tripping & vendor financing scrutiny
      },
      nodes: [
        { id: 'msft', name: 'Microsoft', category: 'hyperscaler', marketCap: 3150, aiCapex: 55.0, aiRevenue: 6.5, desc: 'Surpasses Apple in market cap; AI capex exceeds $50B annually.' },
        { id: 'goog', name: 'Alphabet / Google', category: 'hyperscaler', marketCap: 2120, aiCapex: 48.0, aiRevenue: 4.8, desc: 'Launches Gemini 1.5 Pro with 1M context; scales TPU v5p infrastructure.' },
        { id: 'amzn', name: 'Amazon / AWS', category: 'hyperscaler', marketCap: 2040, aiCapex: 58.0, aiRevenue: 3.5, desc: 'Completes full $4B investment in Anthropic; launches Bedrock.' },
        { id: 'meta', name: 'Meta Platforms', category: 'hyperscaler', marketCap: 1480, aiCapex: 39.0, aiRevenue: 2.2, desc: 'Deploys 350,000 H100s; open-source LLaMA 3.1 405B disrupts proprietary labs.' },
        { id: 'nvda', name: 'NVIDIA', category: 'chipmaker', marketCap: 3300, aiCapex: 4.5, aiRevenue: 115.0, desc: 'Briefly world’s most valuable public company ($3.3T); announces Blackwell B200.' },
        { id: 'tsmc', name: 'TSMC', category: 'chipmaker', marketCap: 880, aiCapex: 32.0, aiRevenue: 85.0, desc: 'Advanced packaging CoWoS fully booked through 2025.' },
        { id: 'openai', name: 'OpenAI', category: 'ai_lab', marketCap: 157, aiCapex: 7.5, aiRevenue: 4.2, desc: 'Closes $6.6B round at $157B valuation; launches GPT-4o and o1 reasoning.' },
        { id: 'anthropic', name: 'Anthropic', category: 'ai_lab', marketCap: 40, aiCapex: 4.0, aiRevenue: 1.0, desc: 'Releases Claude 3.5 Sonnet, establishing coding model leadership.' },
        { id: 'xai', name: 'xAI', category: 'ai_lab', marketCap: 45, aiCapex: 3.5, aiRevenue: 0.3, desc: 'Builds world’s largest Colossus 100,000 H100 supercomputer in 122 days.' },
        { id: 'coreweave', name: 'CoreWeave', category: 'neocloud', marketCap: 19, aiCapex: 8.5, aiRevenue: 2.2, desc: 'Raises $7.5B debt led by Blackstone and Magnetar, collateralized with GPUs.' },
        { id: 'vc_sovereign', name: 'VC & Sovereign Funds', category: 'venture_capital', marketCap: 500, aiCapex: 0.0, aiRevenue: 0.0, desc: 'Middle East sovereign funds (MGX, PIF) and SoftBank commit tens of billions.' },
        { id: 'end_market', name: 'Enterprise & Consumers', category: 'end_market', marketCap: 1200, aiCapex: 0.0, aiRevenue: 16.8, desc: 'Coding copilots, customer support automation, and synthetic media generation.' }
      ],
      edges: [
        { source: 'msft', target: 'openai', flowType: 'cloud_credit', amount: 5.0, desc: 'Azure compute credits swapped for equity and revenue-share warrants.' },
        { source: 'openai', target: 'msft', flowType: 'cloud_credit', amount: 4.5, desc: 'OpenAI spends $4.5B on Azure compute, driving Microsoft cloud growth.' },
        { source: 'amzn', target: 'anthropic', flowType: 'equity_investment', amount: 2.0, desc: 'Completes final $2B tranche; locks Anthropic into AWS Trainium/Inferentia.' },
        { source: 'goog', target: 'anthropic', flowType: 'equity_investment', amount: 1.0, desc: 'Additional convertible note and Google Cloud commitment.' },
        { source: 'anthropic', target: 'amzn', flowType: 'cloud_credit', amount: 1.8, desc: 'Anthropic runs major training clusters on AWS Bedrock.' },
        { source: 'msft', target: 'nvda', flowType: 'gpu_purchase', amount: 18.0, desc: 'Microsoft buys massive H100/H200 fleets for internal models and OpenAI.' },
        { source: 'goog', target: 'nvda', flowType: 'gpu_purchase', amount: 12.0, desc: 'Purchasing 200k+ NVIDIA GPUs while scaling internal TPU v5e.' },
        { source: 'amzn', target: 'nvda', flowType: 'gpu_purchase', amount: 14.0, desc: 'AWS purchases NVIDIA Grace Hopper GH200 systems.' },
        { source: 'meta', target: 'nvda', flowType: 'gpu_purchase', amount: 15.0, desc: 'Zuckerberg confirms fleet will reach 600,000 H100 equivalents.' },
        { source: 'nvda', target: 'coreweave', flowType: 'equity_investment', amount: 0.5, desc: 'NVIDIA leads CoreWeave equity rounds to ensure guaranteed GPU cloud buyer.' },
        { source: 'coreweave', target: 'nvda', flowType: 'gpu_purchase', amount: 6.5, desc: 'CoreWeave deploys $7.5B debt to purchase NVIDIA Blackwell/Hopper nodes.' },
        { source: 'nvda', target: 'openai', flowType: 'equity_investment', amount: 0.1, desc: 'NVIDIA participates directly in OpenAI $6.6B funding syndicate.' },
        { source: 'nvda', target: 'tsmc', flowType: 'gpu_purchase', amount: 22.0, desc: 'NVIDIA becomes TSMC’s second-largest customer after Apple.' },
        { source: 'vc_sovereign', target: 'openai', flowType: 'equity_investment', amount: 6.5, desc: 'Thrive Capital, SoftBank, and MGX lead $6.6B mega-round.' },
        { source: 'vc_sovereign', target: 'xai', flowType: 'equity_investment', amount: 6.0, desc: 'xAI raises $6B Series B to fund Colossus cluster build-out.' },
        { source: 'end_market', target: 'openai', flowType: 'enterprise_revenue', amount: 4.2, desc: 'Enterprise ChatGPT subscriptions and API token consumption.' },
        { source: 'end_market', target: 'msft', flowType: 'enterprise_revenue', amount: 6.5, desc: 'Copilot enterprise licenses and Azure OpenAI API consumption.' },
        { source: 'end_market', target: 'anthropic', flowType: 'enterprise_revenue', amount: 1.0, desc: 'Claude API token revenue and developer subscriptions.' }
      ]
    },

    // ─── 2025: The Stargate & Infrastructure Rush ───────────────
    {
      year: 2025,
      title: '2025: The $100B Stargate & Mega-Cluster Race',
      summary: 'Microsoft and OpenAI plan "Stargate", a 5-gigawatt, $100B supercomputing campus. Blackwell B200 shipments reach volume production. Neocloud debt structures face scrutiny as depreciation schedules clash with rapid chip obsolescence.',
      macroMetrics: {
        totalAiCapex: 275.0, // Billions USD
        realEndUserRevenue: 29.5, // Billions USD
        capexRevenueDeficit: 245.5,
        circularRatio: 63
      },
      nodes: [
        { id: 'msft', name: 'Microsoft', category: 'hyperscaler', marketCap: 3420, aiCapex: 78.0, aiRevenue: 11.5, desc: 'Begins Stargate phase 1 construction; nuclear power PPA agreements.' },
        { id: 'goog', name: 'Alphabet / Google', category: 'hyperscaler', marketCap: 2380, aiCapex: 68.0, aiRevenue: 8.5, desc: 'Deploys Ironwood TPU v6; integrates Gemini across Workspace ecosystem.' },
        { id: 'amzn', name: 'Amazon / AWS', category: 'hyperscaler', marketCap: 2320, aiCapex: 76.0, aiRevenue: 6.8, desc: 'Scales Trainium2 clusters; powers Anthropic Claude 4 frontier training.' },
        { id: 'meta', name: 'Meta Platforms', category: 'hyperscaler', marketCap: 1650, aiCapex: 54.0, aiRevenue: 4.5, desc: 'Meta AI reaches 500M monthly users; open-source LLaMA 4 multimodals.' },
        { id: 'nvda', name: 'NVIDIA', category: 'chipmaker', marketCap: 3600, aiCapex: 6.0, aiRevenue: 155.0, desc: 'GB200 NVL72 full rack architectures ship at $3M+ per system.' },
        { id: 'tsmc', name: 'TSMC', category: 'chipmaker', marketCap: 980, aiCapex: 35.0, aiRevenue: 98.0, desc: 'N2 2nm nanosheet trial production begins; high-NA EUV deployed.' },
        { id: 'openai', name: 'OpenAI', category: 'ai_lab', marketCap: 220, aiCapex: 14.0, aiRevenue: 8.5, desc: 'Transitioning to for-profit benefit corporation; massive compute burn.' },
        { id: 'anthropic', name: 'Anthropic', category: 'ai_lab', marketCap: 65, aiCapex: 7.5, aiRevenue: 2.8, desc: 'Autonomous coding agents enterprise deployments.' },
        { id: 'xai', name: 'xAI', category: 'ai_lab', marketCap: 60, aiCapex: 6.0, aiRevenue: 1.2, desc: 'Expands Colossus cluster to 200,000 GPUs; launches Grok 3.' },
        { id: 'coreweave', name: 'CoreWeave', category: 'neocloud', marketCap: 28, aiCapex: 14.0, aiRevenue: 4.8, desc: 'Prepares for mega-IPO; debt burden reaches $12B+ across GPU tranches.' },
        { id: 'vc_sovereign', name: 'VC & Sovereign Funds', category: 'venture_capital', marketCap: 500, aiCapex: 0.0, aiRevenue: 0.0, desc: 'Funding mega-rounds; secondary liquidity crunch emerging.' },
        { id: 'end_market', name: 'Enterprise & Consumers', category: 'end_market', marketCap: 1200, aiCapex: 0.0, aiRevenue: 29.5, desc: 'Enterprises deploying generative AI agents; ROI pressure mounting.' }
      ],
      edges: [
        { source: 'msft', target: 'openai', flowType: 'cloud_credit', amount: 7.0, desc: 'Financing next-gen frontier model training with dedicated Azure clusters.' },
        { source: 'openai', target: 'msft', flowType: 'cloud_credit', amount: 6.5, desc: 'Cloud hosting costs represent >75% of OpenAI operational expenses.' },
        { source: 'amzn', target: 'anthropic', flowType: 'cloud_credit', amount: 3.5, desc: 'AWS Bedrock compute spend for Claude 3.5 and Claude 4 training.' },
        { source: 'msft', target: 'nvda', flowType: 'gpu_purchase', amount: 26.0, desc: 'Procuring thousands of Blackwell GB200 NVL72 liquid-cooled racks.' },
        { source: 'goog', target: 'nvda', flowType: 'gpu_purchase', amount: 16.0, desc: 'Balancing NVIDIA Blackwell purchases with internal TPU v6 deployments.' },
        { source: 'amzn', target: 'nvda', flowType: 'gpu_purchase', amount: 19.0, desc: 'AWS Ceiba project and UltraCluster Blackwell deployments.' },
        { source: 'meta', target: 'nvda', flowType: 'gpu_purchase', amount: 20.0, desc: 'Building multi-gigawatt data center clusters in the Midwest.' },
        { source: 'coreweave', target: 'nvda', flowType: 'gpu_purchase', amount: 10.0, desc: 'Deploying Blackwell clusters backed by institutional private debt.' },
        { source: 'nvda', target: 'coreweave', flowType: 'debt_collateral', amount: 1.2, desc: 'NVIDIA provides vendor debt guarantees and customer referral guarantees.' },
        { source: 'nvda', target: 'tsmc', flowType: 'gpu_purchase', amount: 28.0, desc: 'Blackwell dual-reticle die packaging at TSMC CoWoS-L lines.' },
        { source: 'vc_sovereign', target: 'coreweave', flowType: 'equity_investment', amount: 3.0, desc: 'Pre-IPO funding rounds to shore up balance sheet leverage.' },
        { source: 'vc_sovereign', target: 'openai', flowType: 'equity_investment', amount: 5.0, desc: 'Structured equity and corporate governance restructuring capital.' },
        { source: 'end_market', target: 'openai', flowType: 'enterprise_revenue', amount: 8.5, desc: 'OpenAI annual revenue run-rate driven by enterprise tier.' },
        { source: 'end_market', target: 'msft', flowType: 'enterprise_revenue', amount: 11.5, desc: 'Copilot enterprise penetration across Office 365 installed base.' },
        { source: 'end_market', target: 'anthropic', flowType: 'enterprise_revenue', amount: 2.8, desc: 'Enterprise Claude subscriptions for legal, coding, and finance automation.' }
      ]
    },

    // ─── 2026: The Capex Wall & Monetization Reckoning ──────────
    {
      year: 2026,
      title: '2026: The Capex Wall, Antitrust Scrutiny & Real ROI Reckoning',
      summary: 'The AI ecosystem hits the "Capex Wall": Hyperscaler spending exceeds $300B while software revenue reaches $42B, leaving an immense $270B+ deficit. Regulatory antitrust bodies (FTC, EU Commission) investigate circular financing and vendor-lock partnerships. The market bifurcates between commoditized API wrappers and true utility winners.',
      macroMetrics: {
        totalAiCapex: 315.0, // Billions USD
        realEndUserRevenue: 42.0, // Billions USD
        capexRevenueDeficit: 273.0,
        circularRatio: 52 // Regulatory pressure forces unwinding of captive credit deals
      },
      nodes: [
        { id: 'msft', name: 'Microsoft', category: 'hyperscaler', marketCap: 3650, aiCapex: 88.0, aiRevenue: 16.5, desc: 'Scaling Maia custom AI ASICs to diminish dependence on NVIDIA margins.' },
        { id: 'goog', name: 'Alphabet / Google', category: 'hyperscaler', marketCap: 2550, aiCapex: 76.0, aiRevenue: 12.0, desc: 'Cost-efficiency focus; TPU v6e delivers superior inference TCO.' },
        { id: 'amzn', name: 'Amazon / AWS', category: 'hyperscaler', marketCap: 2480, aiCapex: 85.0, aiRevenue: 9.8, desc: 'Demands measurable enterprise ROI; Trainium2 replaces GPUs in batch inference.' },
        { id: 'meta', name: 'Meta Platforms', category: 'hyperscaler', marketCap: 1780, aiCapex: 62.0, aiRevenue: 6.2, desc: 'Deploying MTIA v2 silicon; AI agents power automated ad creative synthesis.' },
        { id: 'nvda', name: 'NVIDIA', category: 'chipmaker', marketCap: 3750, aiCapex: 8.0, aiRevenue: 182.0, desc: 'Vera Rubin architecture introduced; hyperscaler custom silicon pressure emerges.' },
        { id: 'tsmc', name: 'TSMC', category: 'chipmaker', marketCap: 1080, aiCapex: 38.0, aiRevenue: 110.0, desc: 'Surpasses $1T market cap; pure-play monopoly across all AI accelerator fabs.' },
        { id: 'openai', name: 'OpenAI', category: 'ai_lab', marketCap: 280, aiCapex: 18.0, aiRevenue: 14.0, desc: 'Commercial enterprise leader; faces rising compute cost and margin squeeze.' },
        { id: 'anthropic', name: 'Anthropic', category: 'ai_lab', marketCap: 85, aiCapex: 9.0, aiRevenue: 4.8, desc: 'Focuses on enterprise reliability, cybersecurity, and deterministic reasoning.' },
        { id: 'xai', name: 'xAI', category: 'ai_lab', marketCap: 75, aiCapex: 7.5, aiRevenue: 2.5, desc: 'Integrates real-time multimodal intelligence across autonomous systems.' },
        { id: 'coreweave', name: 'CoreWeave', category: 'neocloud', marketCap: 35, aiCapex: 16.0, aiRevenue: 6.5, desc: 'Refinancing debt covenants as 2023 H100 hardware enters 3-year depreciation window.' },
        { id: 'vc_sovereign', name: 'VC & Sovereign Funds', category: 'venture_capital', marketCap: 500, aiCapex: 0.0, aiRevenue: 0.0, desc: 'Shifting capital away from foundational model wars toward vertical enterprise applications.' },
        { id: 'end_market', name: 'Enterprise & Consumers', category: 'end_market', marketCap: 1200, aiCapex: 0.0, aiRevenue: 42.0, desc: 'Enterprise software budgets demand positive net-present-value from AI investments.' }
      ],
      edges: [
        { source: 'msft', target: 'openai', flowType: 'cloud_credit', amount: 8.0, desc: 'Restructured commercial partnership under strict antitrust compliance.' },
        { source: 'openai', target: 'msft', flowType: 'cloud_credit', amount: 8.5, desc: 'OpenAI Azure hosting bill reaches $8.5B as enterprise traffic multiplies.' },
        { source: 'amzn', target: 'anthropic', flowType: 'cloud_credit', amount: 4.5, desc: 'AWS multi-region training clusters for continuous frontier alignment.' },
        { source: 'msft', target: 'nvda', flowType: 'gpu_purchase', amount: 28.0, desc: 'Procuring Vera Rubin and Blackwell nodes while accelerating Maia internal ASICs.' },
        { source: 'goog', target: 'nvda', flowType: 'gpu_purchase', amount: 18.0, desc: 'Hybrid cloud deployment: NVIDIA for third-party clients, TPUs for Gemini.' },
        { source: 'amzn', target: 'nvda', flowType: 'gpu_purchase', amount: 20.0, desc: 'AWS datacenter builds; aggressive price negotiations on GB200 systems.' },
        { source: 'meta', target: 'nvda', flowType: 'gpu_purchase', amount: 22.0, desc: 'Meta data center expansion across renewable power corridors.' },
        { source: 'coreweave', target: 'nvda', flowType: 'gpu_purchase', amount: 11.0, desc: 'Fleet upgrades to Rubin/Blackwell to prevent compute obsolescence.' },
        { source: 'coreweave', target: 'vc_sovereign', flowType: 'debt_collateral', amount: 4.0, desc: 'Refinancing maturing 2023 GPU debt through asset-backed bond securitization.' },
        { source: 'nvda', target: 'tsmc', flowType: 'gpu_purchase', amount: 32.0, desc: 'TSMC 3nm and 2nm capacity reservation agreements.' },
        { source: 'end_market', target: 'openai', flowType: 'enterprise_revenue', amount: 14.0, desc: 'Direct corporate contracts and agent workflow subscriptions.' },
        { source: 'end_market', target: 'msft', flowType: 'enterprise_revenue', amount: 16.5, desc: 'Office Copilot and Azure AI commercial revenue.' },
        { source: 'end_market', target: 'anthropic', flowType: 'enterprise_revenue', amount: 4.8, desc: 'Claude Enterprise API token billing across global tech sector.' },
        { source: 'end_market', target: 'goog', flowType: 'enterprise_revenue', amount: 6.7, desc: 'Google Workspace Gemini and Vertex AI enterprise revenue.' }
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
