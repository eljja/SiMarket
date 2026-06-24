# SiMarket - Global DRAM Market History Dashboard (1970–2026)

An interactive, high-fidelity data visualization dashboard tracing the historical market size and vendor shares of the global DRAM (Dynamic Random-Access Memory) industry from its commercial inception in 1970 through the AI-driven supercycle peak in 2026.

Live demo: **[https://eljja.github.io/SiMarket/](https://eljja.github.io/SiMarket/)**

## Key Features

- **Animated Bar Chart Race**: Visualizes vendor ranking and size dynamics over time.
- **Dual-Metric Toggle**: Switch between **Revenue (USD Billions)** and **Byte Capacity Shipped (Exabytes/Petabytes equivalent)**.
- **Historical Milestone Integration**: Contextualizes market movements with major semiconductor events (e.g., Intel's exit in 1985, Samsung's rise in 1992, Elpida's bankruptcy in 2012, and the HBM AI-boom in 2025–2026).
- **Logarithmic Capacity Curve**: Displays the 9+ orders of magnitude growth in DRAM byte shipments over a 50-year span.
- **Glassmorphic Dark UI**: Premium, state-of-the-art developer theme with glowing elements and interactive timeline controls.

## Project Structure

```
SiMarket/
├── index.html     # Main structure and layout
├── style.css      # Premium dark-theme stylesheet
├── app.js         # Interactive playback logic and ECharts bindings
└── data.js        # Historical database (1970-2005 Annual, 2006-2026 Quarterly)
```

## How to Host on GitHub Pages

This project is built using vanilla web technologies (HTML5, CSS3, ES6+ JS) and does not require a compilation or build step, making it extremely easy to host.

1. **Push to GitHub**: Push the repository contents to your GitHub repo at `https://github.com/eljja/SiMarket`.
2. **Enable GitHub Pages**:
   - Go to your repository settings on GitHub.
   - Click on **Pages** in the left navigation sidebar.
   - Under **Build and deployment**, set the **Source** to `Deploy from a branch`.
   - Set the **Branch** to `main` (or your default branch) and the folder to `/ (root)`.
   - Click **Save**.
3. **Access the Site**: Within a couple of minutes, your interactive dashboard will be live at `https://eljja.github.io/SiMarket/`.

## Data Sources

The database in `data.js` compiles and reconciles public financial records, press releases, and market trackers (such as TrendForce/DRAMeXchange, Counterpoint Research, iSuppli, Gartner, and Yole Group) to reconstruct a high-fidelity continuous dataset.
