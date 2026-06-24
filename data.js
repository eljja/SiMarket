// Compiled DRAM Market Database (1970 - 2026)
// Revenue in USD Billions, Shipments in Bytes (cumulative per year/quarter)
const dramCompanyColors = {
  "Samsung": "#0055ff",       // Samsung Blue
  "SK Hynix": "#ff3c00",      // SK Orange/Red
  "Micron": "#00a2ff",        // Micron Cyan
  "Elpida": "#00cccc",        // Elpida Dark Teal
  "Qimonda": "#7a00ff",       // Qimonda Violet
  "Intel": "#0071c5",         // Intel Blue
  "NEC": "#008888",           // NEC Teal
  "Toshiba": "#e60000",       // Toshiba Red
  "Hitachi": "#00aa00",       // Hitachi Green
  "Mitsubishi": "#d4aa00",    // Mitsubishi Gold
  "Fujitsu": "#cc0066",       // Fujitsu Magenta
  "Texas Instruments": "#ff8800", // TI Orange
  "Mostek": "#884400",        // Mostek Brown
  "CXMT": "#ffb700",          // CXMT Yellow/Gold
  "Nanya": "#7cd12e",         // Nanya Green
  "Others": "#778899"         // Light Slate Gray
};

const dramTimelineData = [
  {
    "label": "1970",
    "date": "1970-12-31",
    "total_revenue": 0.01,
    "total_bytes": 128000000.0,
    "shares": {
      "Intel": 100.0,
      "Mostek": 0.0,
      "Texas Instruments": 0.0,
      "NEC": 0.0,
      "Toshiba": 0.0,
      "Hitachi": 0.0,
      "Mitsubishi": 0.0,
      "Fujitsu": 0.0,
      "Samsung": 0.0,
      "SK Hynix": 0.0,
      "Micron": 0.0
    },
    "milestone": "Intel introduces the 1103, the first commercially available DRAM chip (1024 bits), starting the replacement of magnetic core memory."
  },
  {
    "label": "1971",
    "date": "1971-12-31",
    "total_revenue": 0.02,
    "total_bytes": 307200000.0,
    "shares": {
      "Intel": 100.0,
      "Mostek": 0.0,
      "Texas Instruments": 0.0,
      "NEC": 0.0,
      "Toshiba": 0.0,
      "Hitachi": 0.0,
      "Mitsubishi": 0.0,
      "Fujitsu": 0.0,
      "Samsung": 0.0,
      "SK Hynix": 0.0,
      "Micron": 0.0
    },
    "milestone": ""
  },
  {
    "label": "1972",
    "date": "1972-12-31",
    "total_revenue": 0.04,
    "total_bytes": 737280000.0,
    "shares": {
      "Intel": 90.91,
      "Mostek": 9.09,
      "Texas Instruments": 0.0,
      "NEC": 0.0,
      "Toshiba": 0.0,
      "Hitachi": 0.0,
      "Mitsubishi": 0.0,
      "Fujitsu": 0.0,
      "Samsung": 0.0,
      "SK Hynix": 0.0,
      "Micron": 0.0
    },
    "milestone": ""
  },
  {
    "label": "1973",
    "date": "1973-12-31",
    "total_revenue": 0.08,
    "total_bytes": 1769471999.9999998,
    "shares": {
      "Intel": 85.37,
      "Mostek": 14.63,
      "Texas Instruments": 0.0,
      "NEC": 0.0,
      "Toshiba": 0.0,
      "Hitachi": 0.0,
      "Mitsubishi": 0.0,
      "Fujitsu": 0.0,
      "Samsung": 0.0,
      "SK Hynix": 0.0,
      "Micron": 0.0
    },
    "milestone": "Mostek introduces the MK4096 (4Kb DRAM), featuring address multiplexing, which becomes the industry-standard packaging architecture."
  },
  {
    "label": "1974",
    "date": "1974-12-31",
    "total_revenue": 0.15,
    "total_bytes": 4246732800.0,
    "shares": {
      "Intel": 74.53,
      "Mostek": 19.88,
      "Texas Instruments": 2.48,
      "NEC": 3.11,
      "Toshiba": 0.0,
      "Hitachi": 0.0,
      "Mitsubishi": 0.0,
      "Fujitsu": 0.0,
      "Samsung": 0.0,
      "SK Hynix": 0.0,
      "Micron": 0.0
    },
    "milestone": ""
  },
  {
    "label": "1975",
    "date": "1975-12-31",
    "total_revenue": 0.2,
    "total_bytes": 10192158719.999998,
    "shares": {
      "Intel": 61.73,
      "Mostek": 24.69,
      "Texas Instruments": 4.94,
      "NEC": 6.17,
      "Toshiba": 2.47,
      "Hitachi": 0.0,
      "Mitsubishi": 0.0,
      "Fujitsu": 0.0,
      "Samsung": 0.0,
      "SK Hynix": 0.0,
      "Micron": 0.0
    },
    "milestone": ""
  },
  {
    "label": "1976",
    "date": "1976-12-31",
    "total_revenue": 0.3,
    "total_bytes": 24461180927.999996,
    "shares": {
      "Intel": 47.06,
      "Mostek": 28.24,
      "Texas Instruments": 7.06,
      "NEC": 8.82,
      "Toshiba": 4.71,
      "Hitachi": 2.35,
      "Mitsubishi": 0.0,
      "Fujitsu": 1.76,
      "Samsung": 0.0,
      "SK Hynix": 0.0,
      "Micron": 0.0
    },
    "milestone": "The Japanese VLSI Research Project (1976\u20131980) is launched, paving the way for Japanese technological leadership in memory scaling."
  },
  {
    "label": "1977",
    "date": "1977-12-31",
    "total_revenue": 0.4,
    "total_bytes": 58706834227.19999,
    "shares": {
      "Intel": 33.15,
      "Mostek": 30.94,
      "Texas Instruments": 8.84,
      "NEC": 11.05,
      "Toshiba": 6.63,
      "Hitachi": 4.42,
      "Mitsubishi": 1.66,
      "Fujitsu": 3.31,
      "Samsung": 0.0,
      "SK Hynix": 0.0,
      "Micron": 0.0
    },
    "milestone": ""
  },
  {
    "label": "1978",
    "date": "1978-12-31",
    "total_revenue": 0.6,
    "total_bytes": 140896402145.27994,
    "shares": {
      "Intel": 21.28,
      "Mostek": 31.91,
      "Texas Instruments": 10.64,
      "NEC": 13.3,
      "Toshiba": 8.51,
      "Hitachi": 6.38,
      "Mitsubishi": 3.19,
      "Fujitsu": 4.79,
      "Samsung": 0.0,
      "SK Hynix": 0.0,
      "Micron": 0.0
    },
    "milestone": "Micron Technology is founded in Boise, Idaho, starting as a design consulting firm before moving into DRAM manufacturing."
  },
  {
    "label": "1979",
    "date": "1979-12-31",
    "total_revenue": 0.8,
    "total_bytes": 338151365148.6719,
    "shares": {
      "Intel": 10.47,
      "Mostek": 31.41,
      "Texas Instruments": 12.57,
      "NEC": 15.71,
      "Toshiba": 10.47,
      "Hitachi": 8.38,
      "Mitsubishi": 4.71,
      "Fujitsu": 6.28,
      "Samsung": 0.0,
      "SK Hynix": 0.0,
      "Micron": 0.0
    },
    "milestone": ""
  },
  {
    "label": "1980",
    "date": "1980-12-31",
    "total_revenue": 1.0,
    "total_bytes": 811563276356.8125,
    "shares": {
      "Intel": 2.02,
      "Mostek": 30.3,
      "Texas Instruments": 14.14,
      "NEC": 17.68,
      "Toshiba": 12.12,
      "Hitachi": 10.1,
      "Mitsubishi": 6.06,
      "Fujitsu": 7.58,
      "Samsung": 0.0,
      "SK Hynix": 0.0,
      "Micron": 0.0
    },
    "milestone": ""
  },
  {
    "label": "1981",
    "date": "1981-12-31",
    "total_revenue": 1.2,
    "total_bytes": 1448000000000.0,
    "shares": {
      "Intel": 1.85,
      "Mostek": 27.78,
      "Texas Instruments": 13.89,
      "NEC": 16.67,
      "Toshiba": 12.96,
      "Hitachi": 11.11,
      "Mitsubishi": 6.94,
      "Fujitsu": 8.33,
      "Samsung": 0.0,
      "SK Hynix": 0.0,
      "Micron": 0.46
    },
    "milestone": "Japanese manufacturers dominate the new 64K DRAM market, capturing 70% share and triggering intense trade tension with the US."
  },
  {
    "label": "1982",
    "date": "1982-12-31",
    "total_revenue": 1.3,
    "total_bytes": 2620880000000.0,
    "shares": {
      "Intel": 1.76,
      "Mostek": 26.43,
      "Texas Instruments": 13.22,
      "NEC": 15.86,
      "Toshiba": 12.33,
      "Hitachi": 12.33,
      "Mitsubishi": 7.93,
      "Fujitsu": 8.81,
      "Samsung": 0.0,
      "SK Hynix": 0.0,
      "Micron": 1.32
    },
    "milestone": ""
  },
  {
    "label": "1983",
    "date": "1983-12-31",
    "total_revenue": 1.8,
    "total_bytes": 4743792800000.001,
    "shares": {
      "Intel": 1.71,
      "Mostek": 25.64,
      "Texas Instruments": 12.82,
      "NEC": 15.38,
      "Toshiba": 11.97,
      "Hitachi": 11.97,
      "Mitsubishi": 8.55,
      "Fujitsu": 8.55,
      "Samsung": 0.85,
      "SK Hynix": 0.43,
      "Micron": 2.14
    },
    "milestone": "Samsung enters the DRAM market, developing its first 64Kb DRAM and building its first production line in Giheung, South Korea."
  },
  {
    "label": "1984",
    "date": "1984-12-31",
    "total_revenue": 3.5,
    "total_bytes": 8586264968000.0,
    "shares": {
      "Intel": 1.67,
      "Mostek": 25.0,
      "Texas Instruments": 12.5,
      "NEC": 15.0,
      "Toshiba": 11.67,
      "Hitachi": 11.67,
      "Mitsubishi": 8.33,
      "Fujitsu": 8.33,
      "Samsung": 1.67,
      "SK Hynix": 0.83,
      "Micron": 3.33
    },
    "milestone": ""
  },
  {
    "label": "1985",
    "date": "1985-12-31",
    "total_revenue": 1.6,
    "total_bytes": 15541139592080.004,
    "shares": {
      "NEC": 22.99,
      "Toshiba": 17.24,
      "Hitachi": 18.39,
      "Mitsubishi": 11.49,
      "Fujitsu": 10.34,
      "Texas Instruments": 9.2,
      "Micron": 5.75,
      "Samsung": 3.45,
      "SK Hynix": 1.15
    },
    "milestone": "Intel exits the DRAM business due to severe pricing pressure from Japanese competitors. NEC becomes the world's #1 semiconductor supplier."
  },
  {
    "label": "1986",
    "date": "1986-12-31",
    "total_revenue": 1.8,
    "total_bytes": 28129462661664.805,
    "shares": {
      "NEC": 21.79,
      "Toshiba": 17.65,
      "Hitachi": 17.65,
      "Mitsubishi": 11.28,
      "Fujitsu": 9.72,
      "Texas Instruments": 8.49,
      "Micron": 6.26,
      "Samsung": 5.36,
      "SK Hynix": 1.79
    },
    "milestone": "The US-Japan Semiconductor Agreement is signed, setting price floors for Japanese memory chips and opening the Japanese market to US firms."
  },
  {
    "label": "1987",
    "date": "1987-12-31",
    "total_revenue": 2.5,
    "total_bytes": 50914327417613.3,
    "shares": {
      "NEC": 20.65,
      "Toshiba": 18.04,
      "Hitachi": 16.96,
      "Mitsubishi": 11.09,
      "Fujitsu": 9.13,
      "Texas Instruments": 7.83,
      "Micron": 6.74,
      "Samsung": 7.17,
      "SK Hynix": 2.39
    },
    "milestone": ""
  },
  {
    "label": "1988",
    "date": "1988-12-31",
    "total_revenue": 5.5,
    "total_bytes": 92154932625880.08,
    "shares": {
      "NEC": 19.58,
      "Toshiba": 18.41,
      "Hitachi": 16.3,
      "Mitsubishi": 10.9,
      "Fujitsu": 8.57,
      "Texas Instruments": 7.2,
      "Micron": 7.2,
      "Samsung": 8.89,
      "SK Hynix": 2.96
    },
    "milestone": ""
  },
  {
    "label": "1989",
    "date": "1989-12-31",
    "total_revenue": 7.2,
    "total_bytes": 166800428052842.94,
    "shares": {
      "NEC": 18.56,
      "Toshiba": 18.76,
      "Hitachi": 15.67,
      "Mitsubishi": 10.72,
      "Fujitsu": 8.04,
      "Texas Instruments": 6.6,
      "Micron": 7.63,
      "Samsung": 10.52,
      "SK Hynix": 3.51
    },
    "milestone": "Japanese DRAM dominance peaks with NEC, Toshiba, Hitachi, and Mitsubishi controlling over 75% of the global market."
  },
  {
    "label": "1990",
    "date": "1990-12-31",
    "total_revenue": 6.8,
    "total_bytes": 301908774775645.75,
    "shares": {
      "Samsung": 12.12,
      "SK Hynix": 4.04,
      "Micron": 8.08,
      "NEC": 18.18,
      "Toshiba": 18.18,
      "Hitachi": 15.15,
      "Mitsubishi": 11.11,
      "Fujitsu": 7.07,
      "Texas Instruments": 6.06,
      "Nanya": 0.0
    },
    "milestone": ""
  },
  {
    "label": "1991",
    "date": "1991-12-31",
    "total_revenue": 7.0,
    "total_bytes": 432500000000000.0,
    "shares": {
      "Samsung": 13.55,
      "SK Hynix": 4.91,
      "Micron": 9.0,
      "NEC": 17.39,
      "Toshiba": 17.39,
      "Hitachi": 14.53,
      "Mitsubishi": 10.74,
      "Fujitsu": 6.75,
      "Texas Instruments": 5.73,
      "Nanya": 0.0
    },
    "milestone": ""
  },
  {
    "label": "1992",
    "date": "1992-12-31",
    "total_revenue": 8.5,
    "total_bytes": 748225000000000.0,
    "shares": {
      "Samsung": 15.03,
      "SK Hynix": 5.8,
      "Micron": 9.95,
      "NEC": 16.58,
      "Toshiba": 16.58,
      "Hitachi": 13.89,
      "Mitsubishi": 10.36,
      "Fujitsu": 6.42,
      "Texas Instruments": 5.39,
      "Nanya": 0.0
    },
    "milestone": "Samsung becomes the world's largest DRAM manufacturer, a position it has held ever since, driven by early transitions to 8-inch wafers."
  },
  {
    "label": "1993",
    "date": "1993-12-31",
    "total_revenue": 12.0,
    "total_bytes": 1294429249999999.8,
    "shares": {
      "Samsung": 16.54,
      "SK Hynix": 6.72,
      "Micron": 10.92,
      "NEC": 15.75,
      "Toshiba": 15.75,
      "Hitachi": 13.23,
      "Mitsubishi": 9.97,
      "Fujitsu": 6.09,
      "Texas Instruments": 5.04,
      "Nanya": 0.0
    },
    "milestone": ""
  },
  {
    "label": "1994",
    "date": "1994-12-31",
    "total_revenue": 22.0,
    "total_bytes": 2239362602500000.0,
    "shares": {
      "Samsung": 18.09,
      "SK Hynix": 7.66,
      "Micron": 11.91,
      "NEC": 14.89,
      "Toshiba": 14.89,
      "Hitachi": 12.55,
      "Mitsubishi": 9.57,
      "Fujitsu": 5.74,
      "Texas Instruments": 4.68,
      "Nanya": 0.0
    },
    "milestone": ""
  },
  {
    "label": "1995",
    "date": "1995-12-31",
    "total_revenue": 41.0,
    "total_bytes": 3874097302324999.5,
    "shares": {
      "Samsung": 19.57,
      "SK Hynix": 8.58,
      "Micron": 12.87,
      "NEC": 13.94,
      "Toshiba": 13.94,
      "Hitachi": 11.8,
      "Mitsubishi": 9.12,
      "Fujitsu": 5.36,
      "Texas Instruments": 4.29,
      "Nanya": 0.54
    },
    "milestone": "The DRAM market reaches a massive peak of $41B, fueled by explosive PC sales and the launch of Windows 95 requiring more RAM."
  },
  {
    "label": "1996",
    "date": "1996-12-31",
    "total_revenue": 25.0,
    "total_bytes": 6702188333022249.0,
    "shares": {
      "Samsung": 21.08,
      "SK Hynix": 9.51,
      "Micron": 13.84,
      "NEC": 12.97,
      "Toshiba": 12.97,
      "Hitachi": 11.03,
      "Mitsubishi": 8.65,
      "Fujitsu": 4.97,
      "Texas Instruments": 3.89,
      "Nanya": 1.08
    },
    "milestone": "A massive DRAM oversupply causes prices to collapse. Global revenue drops by nearly 40% in one year."
  },
  {
    "label": "1997",
    "date": "1997-12-31",
    "total_revenue": 19.8,
    "total_bytes": 1.159478581612849e+16,
    "shares": {
      "Samsung": 22.62,
      "SK Hynix": 10.46,
      "Micron": 14.82,
      "NEC": 11.99,
      "Toshiba": 11.99,
      "Hitachi": 10.25,
      "Mitsubishi": 8.17,
      "Fujitsu": 4.58,
      "Texas Instruments": 3.49,
      "Nanya": 1.63
    },
    "milestone": ""
  },
  {
    "label": "1998",
    "date": "1998-12-31",
    "total_revenue": 14.2,
    "total_bytes": 2.005897946190229e+16,
    "shares": {
      "Samsung": 24.18,
      "SK Hynix": 11.43,
      "Micron": 15.82,
      "NEC": 10.99,
      "Toshiba": 10.99,
      "Hitachi": 9.45,
      "Mitsubishi": 7.69,
      "Fujitsu": 4.18,
      "Texas Instruments": 3.08,
      "Nanya": 2.2
    },
    "milestone": "South Korea officially overtakes Japan in global DRAM market share. Micron acquires Texas Instruments' memory business."
  },
  {
    "label": "1999",
    "date": "1999-12-31",
    "total_revenue": 20.5,
    "total_bytes": 3.470203446909096e+16,
    "shares": {
      "Samsung": 24.0,
      "SK Hynix": 20.0,
      "Micron": 17.0,
      "Elpida": 10.0,
      "Infineon": 11.0,
      "Nanya": 2.5,
      "Others": 15.5
    },
    "milestone": "Consolidation intensifies: Hyundai acquires LG Semiconductor. NEC and Hitachi merge their DRAM businesses to form Elpida Memory."
  },
  {
    "label": "2000",
    "date": "2000-12-31",
    "total_revenue": 28.8,
    "total_bytes": 6.003451963152737e+16,
    "shares": {
      "Samsung": 25.07,
      "SK Hynix": 19.7,
      "Micron": 16.72,
      "Elpida": 10.65,
      "Infineon": 11.14,
      "Nanya": 2.79,
      "Others": 13.93
    },
    "milestone": ""
  },
  {
    "label": "2001",
    "date": "2001-12-31",
    "total_revenue": 11.5,
    "total_bytes": 1.1456e+17,
    "shares": {
      "Samsung": 26.14,
      "SK Hynix": 19.41,
      "Micron": 16.44,
      "Elpida": 11.29,
      "Infineon": 11.29,
      "Nanya": 3.07,
      "Others": 12.38
    },
    "milestone": "Dot-com crash sends DRAM revenue plummeting by 60%. Hyundai Electronics spins off Hynix. Toshiba exits commodity DRAM."
  },
  {
    "label": "2002",
    "date": "2002-12-31",
    "total_revenue": 15.2,
    "total_bytes": 2.050624e+17,
    "shares": {
      "Samsung": 27.19,
      "SK Hynix": 19.11,
      "Micron": 16.16,
      "Elpida": 11.92,
      "Infineon": 11.43,
      "Nanya": 3.35,
      "Others": 10.84
    },
    "milestone": ""
  },
  {
    "label": "2003",
    "date": "2003-12-31",
    "total_revenue": 17.3,
    "total_bytes": 3.6706169600000006e+17,
    "shares": {
      "Samsung": 28.24,
      "SK Hynix": 18.82,
      "Micron": 15.88,
      "Elpida": 12.55,
      "Infineon": 11.57,
      "Nanya": 3.63,
      "Others": 9.31
    },
    "milestone": "Mitsubishi Electric merges its DRAM division into Elpida. Samsung and Hynix dominate the high-density DDR1 transition."
  },
  {
    "label": "2004",
    "date": "2004-12-31",
    "total_revenue": 26.4,
    "total_bytes": 6.570404358400001e+17,
    "shares": {
      "Samsung": 29.27,
      "SK Hynix": 18.54,
      "Micron": 15.61,
      "Elpida": 13.17,
      "Infineon": 11.71,
      "Nanya": 3.9,
      "Others": 7.8
    },
    "milestone": ""
  },
  {
    "label": "2005",
    "date": "2005-12-31",
    "total_revenue": 24.8,
    "total_bytes": 1.1761023801536e+18,
    "shares": {
      "Samsung": 30.29,
      "SK Hynix": 18.25,
      "Micron": 15.34,
      "Elpida": 13.79,
      "Infineon": 11.84,
      "Nanya": 4.17,
      "Others": 6.31
    },
    "milestone": ""
  },
  {
    "label": "2006 Q1",
    "date": "2006-03-31",
    "total_revenue": 8.0,
    "total_bytes": 3.165e+17,
    "shares": {
      "Samsung": 32.3,
      "SK Hynix": 20.1,
      "Elpida": 13.2,
      "Micron": 14.8,
      "Qimonda": 9.6,
      "Nanya": 4.0,
      "Others": 6.0
    },
    "milestone": "Infineon spins off its memory division as Qimonda. Industry adopts DDR2 as the mainstream standard for PCs."
  },
  {
    "label": "2006 Q2",
    "date": "2006-06-30",
    "total_revenue": 8.2,
    "total_bytes": 3.339075e+17,
    "shares": {
      "Samsung": 32.6,
      "SK Hynix": 20.2,
      "Elpida": 13.4,
      "Micron": 14.6,
      "Qimonda": 9.2,
      "Nanya": 4.0,
      "Others": 6.0
    },
    "milestone": ""
  },
  {
    "label": "2006 Q3",
    "date": "2006-09-30",
    "total_revenue": 8.6,
    "total_bytes": 3.522724125e+17,
    "shares": {
      "Samsung": 32.9,
      "SK Hynix": 20.3,
      "Elpida": 13.6,
      "Micron": 14.4,
      "Qimonda": 8.8,
      "Nanya": 4.0,
      "Others": 6.0
    },
    "milestone": ""
  },
  {
    "label": "2006 Q4",
    "date": "2006-12-31",
    "total_revenue": 9.0,
    "total_bytes": 3.7164739518749997e+17,
    "shares": {
      "Samsung": 33.2,
      "SK Hynix": 20.4,
      "Elpida": 13.8,
      "Micron": 14.2,
      "Qimonda": 8.4,
      "Nanya": 4.0,
      "Others": 6.0
    },
    "milestone": ""
  },
  {
    "label": "2007 Q1",
    "date": "2007-03-31",
    "total_revenue": 8.8,
    "total_bytes": 3.920880019228124e+17,
    "shares": {
      "Samsung": 33.5,
      "SK Hynix": 20.5,
      "Elpida": 14.0,
      "Micron": 14.0,
      "Qimonda": 8.0,
      "Nanya": 4.0,
      "Others": 6.0
    },
    "milestone": ""
  },
  {
    "label": "2007 Q2",
    "date": "2007-06-30",
    "total_revenue": 8.2,
    "total_bytes": 4.136528420285671e+17,
    "shares": {
      "Samsung": 33.8,
      "SK Hynix": 20.6,
      "Elpida": 14.2,
      "Micron": 13.8,
      "Qimonda": 7.6,
      "Nanya": 4.0,
      "Others": 6.0
    },
    "milestone": ""
  },
  {
    "label": "2007 Q3",
    "date": "2007-09-30",
    "total_revenue": 7.8,
    "total_bytes": 4.3640374834013824e+17,
    "shares": {
      "Samsung": 34.1,
      "SK Hynix": 20.7,
      "Elpida": 14.4,
      "Micron": 13.6,
      "Qimonda": 7.2,
      "Nanya": 4.0,
      "Others": 6.0
    },
    "milestone": ""
  },
  {
    "label": "2007 Q4",
    "date": "2007-12-31",
    "total_revenue": 6.7,
    "total_bytes": 4.604059544988458e+17,
    "shares": {
      "Samsung": 34.4,
      "SK Hynix": 20.8,
      "Elpida": 14.6,
      "Micron": 13.4,
      "Qimonda": 6.8,
      "Nanya": 4.0,
      "Others": 6.0
    },
    "milestone": ""
  },
  {
    "label": "2008 Q1",
    "date": "2008-03-31",
    "total_revenue": 6.3,
    "total_bytes": 4.857282819962823e+17,
    "shares": {
      "Samsung": 34.7,
      "SK Hynix": 20.9,
      "Elpida": 14.8,
      "Micron": 13.2,
      "Qimonda": 6.4,
      "Nanya": 4.0,
      "Others": 6.0
    },
    "milestone": "The global financial crisis hits. A massive DRAM oversupply drives contract prices below manufacturers' cash costs."
  },
  {
    "label": "2008 Q2",
    "date": "2008-06-30",
    "total_revenue": 5.9,
    "total_bytes": 5.124433375060778e+17,
    "shares": {
      "Samsung": 35.0,
      "SK Hynix": 21.0,
      "Elpida": 15.0,
      "Micron": 13.0,
      "Qimonda": 6.0,
      "Nanya": 4.0,
      "Others": 6.0
    },
    "milestone": ""
  },
  {
    "label": "2008 Q3",
    "date": "2008-09-30",
    "total_revenue": 5.5,
    "total_bytes": 5.4062772106891206e+17,
    "shares": {
      "Samsung": 35.3,
      "SK Hynix": 21.1,
      "Elpida": 15.2,
      "Micron": 12.8,
      "Qimonda": 5.6,
      "Nanya": 4.0,
      "Others": 6.0
    },
    "milestone": ""
  },
  {
    "label": "2008 Q4",
    "date": "2008-12-31",
    "total_revenue": 5.1,
    "total_bytes": 5.703622457277022e+17,
    "shares": {
      "Samsung": 35.6,
      "SK Hynix": 21.2,
      "Elpida": 15.4,
      "Micron": 12.6,
      "Qimonda": 5.2,
      "Nanya": 4.0,
      "Others": 6.0
    },
    "milestone": ""
  },
  {
    "label": "2009 Q1",
    "date": "2009-03-31",
    "total_revenue": 3.8,
    "total_bytes": 6.017321692427258e+17,
    "shares": {
      "Samsung": 37.2,
      "SK Hynix": 21.1,
      "Elpida": 17.0,
      "Micron": 12.2,
      "Nanya": 4.0,
      "Others": 8.5
    },
    "milestone": "Qimonda files for bankruptcy (January 2009), starting the liquidation of its assets."
  },
  {
    "label": "2009 Q2",
    "date": "2009-06-30",
    "total_revenue": 4.4,
    "total_bytes": 6.348274385510756e+17,
    "shares": {
      "Samsung": 37.4,
      "SK Hynix": 21.2,
      "Elpida": 17.0,
      "Micron": 12.4,
      "Nanya": 4.0,
      "Others": 8.0
    },
    "milestone": ""
  },
  {
    "label": "2009 Q3",
    "date": "2009-09-30",
    "total_revenue": 6.2,
    "total_bytes": 6.697429476713847e+17,
    "shares": {
      "Samsung": 37.6,
      "SK Hynix": 21.3,
      "Elpida": 17.0,
      "Micron": 12.6,
      "Nanya": 4.0,
      "Others": 7.5
    },
    "milestone": ""
  },
  {
    "label": "2009 Q4",
    "date": "2009-12-31",
    "total_revenue": 7.2,
    "total_bytes": 7.065788097933108e+17,
    "shares": {
      "Samsung": 37.8,
      "SK Hynix": 21.4,
      "Elpida": 17.0,
      "Micron": 12.8,
      "Nanya": 4.0,
      "Others": 7.0
    },
    "milestone": ""
  },
  {
    "label": "2010 Q1",
    "date": "2010-03-31",
    "total_revenue": 9.2,
    "total_bytes": 7.454406443319429e+17,
    "shares": {
      "Samsung": 38.0,
      "SK Hynix": 21.5,
      "Elpida": 17.0,
      "Micron": 13.0,
      "Nanya": 4.0,
      "Others": 6.5
    },
    "milestone": ""
  },
  {
    "label": "2010 Q2",
    "date": "2010-06-30",
    "total_revenue": 10.8,
    "total_bytes": 7.864398797701997e+17,
    "shares": {
      "Samsung": 38.2,
      "SK Hynix": 21.6,
      "Elpida": 17.0,
      "Micron": 13.2,
      "Nanya": 4.0,
      "Others": 6.0
    },
    "milestone": ""
  },
  {
    "label": "2010 Q3",
    "date": "2010-09-30",
    "total_revenue": 10.2,
    "total_bytes": 8.296940731575606e+17,
    "shares": {
      "Samsung": 38.4,
      "SK Hynix": 21.7,
      "Elpida": 17.0,
      "Micron": 13.4,
      "Nanya": 4.0,
      "Others": 5.5
    },
    "milestone": ""
  },
  {
    "label": "2010 Q4",
    "date": "2010-12-31",
    "total_revenue": 9.4,
    "total_bytes": 8.753272471812264e+17,
    "shares": {
      "Samsung": 38.6,
      "SK Hynix": 21.8,
      "Elpida": 17.0,
      "Micron": 13.6,
      "Nanya": 4.0,
      "Others": 5.0
    },
    "milestone": ""
  },
  {
    "label": "2011 Q1",
    "date": "2011-03-31",
    "total_revenue": 8.3,
    "total_bytes": 9.234702457761938e+17,
    "shares": {
      "Samsung": 38.8,
      "SK Hynix": 21.9,
      "Elpida": 17.0,
      "Micron": 13.8,
      "Nanya": 4.0,
      "Others": 4.5
    },
    "milestone": ""
  },
  {
    "label": "2011 Q2",
    "date": "2011-06-30",
    "total_revenue": 7.6,
    "total_bytes": 9.742611092938844e+17,
    "shares": {
      "Samsung": 39.0,
      "SK Hynix": 22.0,
      "Elpida": 17.0,
      "Micron": 14.0,
      "Nanya": 4.0,
      "Others": 4.0
    },
    "milestone": ""
  },
  {
    "label": "2011 Q3",
    "date": "2011-09-30",
    "total_revenue": 7.1,
    "total_bytes": 1.0278454703050479e+18,
    "shares": {
      "Samsung": 39.2,
      "SK Hynix": 22.1,
      "Elpida": 17.0,
      "Micron": 14.2,
      "Nanya": 4.0,
      "Others": 3.5
    },
    "milestone": ""
  },
  {
    "label": "2011 Q4",
    "date": "2011-12-31",
    "total_revenue": 6.6,
    "total_bytes": 1.0843769711718255e+18,
    "shares": {
      "Samsung": 39.4,
      "SK Hynix": 22.2,
      "Elpida": 17.0,
      "Micron": 14.4,
      "Nanya": 4.0,
      "Others": 3.0
    },
    "milestone": ""
  },
  {
    "label": "2012 Q1",
    "date": "2012-03-31",
    "total_revenue": 6.2,
    "total_bytes": 1.1440177045862758e+18,
    "shares": {
      "Samsung": 39.6,
      "SK Hynix": 22.3,
      "Elpida": 10.8,
      "Micron": 14.6,
      "Nanya": 4.0,
      "Others": 8.7
    },
    "milestone": "Elpida Memory files for bankruptcy protection in Tokyo (February 2012), with $5.5B debt."
  },
  {
    "label": "2012 Q2",
    "date": "2012-06-30",
    "total_revenue": 6.8,
    "total_bytes": 1.2069386783385208e+18,
    "shares": {
      "Samsung": 39.8,
      "SK Hynix": 22.4,
      "Elpida": 10.4,
      "Micron": 14.8,
      "Nanya": 4.0,
      "Others": 8.6
    },
    "milestone": ""
  },
  {
    "label": "2012 Q3",
    "date": "2012-09-30",
    "total_revenue": 6.6,
    "total_bytes": 1.2733203056471393e+18,
    "shares": {
      "Samsung": 40.0,
      "SK Hynix": 22.5,
      "Elpida": 10.0,
      "Micron": 15.0,
      "Nanya": 4.0,
      "Others": 8.5
    },
    "milestone": ""
  },
  {
    "label": "2012 Q4",
    "date": "2012-12-31",
    "total_revenue": 6.8,
    "total_bytes": 1.3433529224577318e+18,
    "shares": {
      "Samsung": 40.2,
      "SK Hynix": 22.6,
      "Elpida": 9.6,
      "Micron": 15.2,
      "Nanya": 4.0,
      "Others": 8.4
    },
    "milestone": ""
  },
  {
    "label": "2013 Q1",
    "date": "2013-03-31",
    "total_revenue": 7.2,
    "total_bytes": 1.417237333192907e+18,
    "shares": {
      "Samsung": 40.4,
      "SK Hynix": 22.7,
      "Elpida": 9.2,
      "Micron": 15.4,
      "Nanya": 4.0,
      "Others": 8.3
    },
    "milestone": "Micron completes its acquisition of Elpida, creating the 'Big Three' oligopoly (Samsung, SK Hynix, Micron) representing 90%+ share."
  },
  {
    "label": "2013 Q2",
    "date": "2013-06-30",
    "total_revenue": 8.8,
    "total_bytes": 1.4951853865185167e+18,
    "shares": {
      "Samsung": 40.6,
      "SK Hynix": 22.8,
      "Elpida": 8.8,
      "Micron": 15.6,
      "Nanya": 4.0,
      "Others": 8.2
    },
    "milestone": ""
  },
  {
    "label": "2013 Q3",
    "date": "2013-09-30",
    "total_revenue": 9.1,
    "total_bytes": 1.577420582777035e+18,
    "shares": {
      "Samsung": 44.7,
      "SK Hynix": 26.8,
      "Micron": 21.15,
      "Nanya": 3.35,
      "Others": 4.0
    },
    "milestone": "Micron completes acquisition of Elpida for $2.5B, leaving only 3 major DRAM players globally."
  },
  {
    "label": "2013 Q4",
    "date": "2013-12-31",
    "total_revenue": 9.4,
    "total_bytes": 1.6641787148297718e+18,
    "shares": {
      "Samsung": 44.6,
      "SK Hynix": 26.9,
      "Micron": 21.2,
      "Nanya": 3.3,
      "Others": 4.0
    },
    "milestone": ""
  },
  {
    "label": "2014 Q1",
    "date": "2014-03-31",
    "total_revenue": 10.2,
    "total_bytes": 1.755708544145409e+18,
    "shares": {
      "Samsung": 44.5,
      "SK Hynix": 27.0,
      "Micron": 21.25,
      "Nanya": 3.25,
      "Others": 4.0
    },
    "milestone": ""
  },
  {
    "label": "2014 Q2",
    "date": "2014-06-30",
    "total_revenue": 10.8,
    "total_bytes": 1.8522725140734065e+18,
    "shares": {
      "Samsung": 44.4,
      "SK Hynix": 27.1,
      "Micron": 21.3,
      "Nanya": 3.2,
      "Others": 4.0
    },
    "milestone": ""
  },
  {
    "label": "2014 Q3",
    "date": "2014-09-30",
    "total_revenue": 12.2,
    "total_bytes": 1.9541475023474437e+18,
    "shares": {
      "Samsung": 44.3,
      "SK Hynix": 27.2,
      "Micron": 21.35,
      "Nanya": 3.15,
      "Others": 4.0
    },
    "milestone": ""
  },
  {
    "label": "2014 Q4",
    "date": "2014-12-31",
    "total_revenue": 13.0,
    "total_bytes": 2.061625614976553e+18,
    "shares": {
      "Samsung": 44.2,
      "SK Hynix": 27.3,
      "Micron": 21.4,
      "Nanya": 3.1,
      "Others": 4.0
    },
    "milestone": ""
  },
  {
    "label": "2015 Q1",
    "date": "2015-03-31",
    "total_revenue": 12.0,
    "total_bytes": 2.1750150238002632e+18,
    "shares": {
      "Samsung": 44.1,
      "SK Hynix": 27.4,
      "Micron": 21.45,
      "Nanya": 3.05,
      "Others": 4.0
    },
    "milestone": ""
  },
  {
    "label": "2015 Q2",
    "date": "2015-06-30",
    "total_revenue": 11.4,
    "total_bytes": 2.2946408501092774e+18,
    "shares": {
      "Samsung": 44.0,
      "SK Hynix": 27.5,
      "Micron": 21.5,
      "Nanya": 3.0,
      "Others": 4.0
    },
    "milestone": ""
  },
  {
    "label": "2015 Q3",
    "date": "2015-09-30",
    "total_revenue": 11.0,
    "total_bytes": 2.4208460968652877e+18,
    "shares": {
      "Samsung": 43.9,
      "SK Hynix": 27.6,
      "Micron": 21.55,
      "Nanya": 2.95,
      "Others": 4.0
    },
    "milestone": ""
  },
  {
    "label": "2015 Q4",
    "date": "2015-12-31",
    "total_revenue": 10.7,
    "total_bytes": 2.5539926321928786e+18,
    "shares": {
      "Samsung": 43.8,
      "SK Hynix": 27.7,
      "Micron": 21.6,
      "Nanya": 2.9,
      "Others": 4.0
    },
    "milestone": ""
  },
  {
    "label": "2016 Q1",
    "date": "2016-03-31",
    "total_revenue": 8.6,
    "total_bytes": 2.6433823743196293e+18,
    "shares": {
      "Samsung": 43.7,
      "SK Hynix": 27.8,
      "Micron": 21.65,
      "Nanya": 2.85,
      "Others": 4.0
    },
    "milestone": "CXMT (ChangXin Memory Technologies) is founded in Hefei, China, starting China's ambitious push into domestic DRAM manufacturing."
  },
  {
    "label": "2016 Q2",
    "date": "2016-06-30",
    "total_revenue": 9.1,
    "total_bytes": 2.735900757420816e+18,
    "shares": {
      "Samsung": 43.6,
      "SK Hynix": 27.9,
      "Micron": 21.7,
      "Nanya": 2.8,
      "Others": 4.0
    },
    "milestone": ""
  },
  {
    "label": "2016 Q3",
    "date": "2016-09-30",
    "total_revenue": 10.5,
    "total_bytes": 2.831657283930544e+18,
    "shares": {
      "Samsung": 43.5,
      "SK Hynix": 28.0,
      "Micron": 21.75,
      "Nanya": 2.75,
      "Others": 4.0
    },
    "milestone": ""
  },
  {
    "label": "2016 Q4",
    "date": "2016-12-31",
    "total_revenue": 12.6,
    "total_bytes": 2.930765288868113e+18,
    "shares": {
      "Samsung": 43.4,
      "SK Hynix": 28.1,
      "Micron": 21.8,
      "Nanya": 2.7,
      "Others": 4.0
    },
    "milestone": ""
  },
  {
    "label": "2017 Q1",
    "date": "2017-03-31",
    "total_revenue": 14.1,
    "total_bytes": 3.0333420739784965e+18,
    "shares": {
      "Samsung": 43.3,
      "SK Hynix": 28.2,
      "Micron": 21.85,
      "Nanya": 2.65,
      "Others": 4.0
    },
    "milestone": "The DRAM supercycle begins: Server demand from cloud service providers (AWS, Azure) and mobile density hikes push revenues to $72B."
  },
  {
    "label": "2017 Q2",
    "date": "2017-06-30",
    "total_revenue": 16.5,
    "total_bytes": 3.1395090465677435e+18,
    "shares": {
      "Samsung": 43.2,
      "SK Hynix": 28.3,
      "Micron": 21.9,
      "Nanya": 2.6,
      "Others": 4.0
    },
    "milestone": ""
  },
  {
    "label": "2017 Q3",
    "date": "2017-09-30",
    "total_revenue": 19.2,
    "total_bytes": 3.249391863197614e+18,
    "shares": {
      "Samsung": 43.1,
      "SK Hynix": 28.4,
      "Micron": 21.95,
      "Nanya": 2.55,
      "Others": 4.0
    },
    "milestone": ""
  },
  {
    "label": "2017 Q4",
    "date": "2017-12-31",
    "total_revenue": 22.3,
    "total_bytes": 3.3631205784095304e+18,
    "shares": {
      "Samsung": 43.0,
      "SK Hynix": 28.5,
      "Micron": 22.0,
      "Nanya": 2.5,
      "Others": 4.0
    },
    "milestone": ""
  },
  {
    "label": "2018 Q1",
    "date": "2018-03-31",
    "total_revenue": 23.1,
    "total_bytes": 3.4808297986538634e+18,
    "shares": {
      "Samsung": 42.9,
      "SK Hynix": 28.6,
      "Micron": 22.05,
      "Nanya": 2.45,
      "Others": 4.0
    },
    "milestone": "Global DRAM revenue hits a historic peak of $99.6B. The 'Big Three' enjoy record operating profit margins exceeding 60%."
  },
  {
    "label": "2018 Q2",
    "date": "2018-06-30",
    "total_revenue": 25.6,
    "total_bytes": 3.602658841606748e+18,
    "shares": {
      "Samsung": 42.8,
      "SK Hynix": 28.7,
      "Micron": 22.1,
      "Nanya": 2.4,
      "Others": 4.0
    },
    "milestone": ""
  },
  {
    "label": "2018 Q3",
    "date": "2018-09-30",
    "total_revenue": 27.0,
    "total_bytes": 3.728751901062984e+18,
    "shares": {
      "Samsung": 42.7,
      "SK Hynix": 28.8,
      "Micron": 22.15,
      "Nanya": 2.35,
      "Others": 4.0
    },
    "milestone": ""
  },
  {
    "label": "2018 Q4",
    "date": "2018-12-31",
    "total_revenue": 23.9,
    "total_bytes": 3.8592582176001884e+18,
    "shares": {
      "Samsung": 42.6,
      "SK Hynix": 28.9,
      "Micron": 22.2,
      "Nanya": 2.3,
      "Others": 4.0
    },
    "milestone": ""
  },
  {
    "label": "2019 Q1",
    "date": "2019-03-31",
    "total_revenue": 15.2,
    "total_bytes": 3.9943322552161946e+18,
    "shares": {
      "Samsung": 42.5,
      "SK Hynix": 29.0,
      "Micron": 22.25,
      "Nanya": 2.25,
      "Others": 4.0
    },
    "milestone": "Cyclical downturn: Cloud customer inventory corrections and supply expansions lead to a 37% decline in market revenue."
  },
  {
    "label": "2019 Q2",
    "date": "2019-06-30",
    "total_revenue": 14.8,
    "total_bytes": 4.134133884148761e+18,
    "shares": {
      "Samsung": 42.4,
      "SK Hynix": 29.1,
      "Micron": 22.3,
      "Nanya": 2.2,
      "Others": 4.0
    },
    "milestone": ""
  },
  {
    "label": "2019 Q3",
    "date": "2019-09-30",
    "total_revenue": 15.5,
    "total_bytes": 4.2788285700939674e+18,
    "shares": {
      "Samsung": 42.3,
      "SK Hynix": 29.2,
      "Micron": 22.35,
      "Nanya": 2.15,
      "Others": 4.0
    },
    "milestone": ""
  },
  {
    "label": "2019 Q4",
    "date": "2019-12-31",
    "total_revenue": 17.0,
    "total_bytes": 4.428587570047256e+18,
    "shares": {
      "Samsung": 42.2,
      "SK Hynix": 29.3,
      "Micron": 22.4,
      "Nanya": 2.1,
      "Others": 4.0
    },
    "milestone": ""
  },
  {
    "label": "2020 Q1",
    "date": "2020-03-31",
    "total_revenue": 16.8,
    "total_bytes": 4.5835881349989094e+18,
    "shares": {
      "Samsung": 43.0,
      "SK Hynix": 29.0,
      "Micron": 23.0,
      "CXMT": 1.25,
      "Nanya": 2.0,
      "Others": 1.75
    },
    "milestone": ""
  },
  {
    "label": "2020 Q2",
    "date": "2020-06-30",
    "total_revenue": 17.2,
    "total_bytes": 4.744013719723871e+18,
    "shares": {
      "Samsung": 43.0,
      "SK Hynix": 29.0,
      "Micron": 23.0,
      "CXMT": 1.5,
      "Nanya": 2.0,
      "Others": 1.5
    },
    "milestone": ""
  },
  {
    "label": "2020 Q3",
    "date": "2020-09-30",
    "total_revenue": 16.4,
    "total_bytes": 4.910054199914206e+18,
    "shares": {
      "Samsung": 43.0,
      "SK Hynix": 29.0,
      "Micron": 23.0,
      "CXMT": 1.75,
      "Nanya": 2.0,
      "Others": 1.25
    },
    "milestone": ""
  },
  {
    "label": "2020 Q4",
    "date": "2020-12-31",
    "total_revenue": 17.0,
    "total_bytes": 5.081906096911203e+18,
    "shares": {
      "Samsung": 43.0,
      "SK Hynix": 29.0,
      "Micron": 23.0,
      "CXMT": 2.0,
      "Nanya": 2.0,
      "Others": 1.0
    },
    "milestone": ""
  },
  {
    "label": "2021 Q1",
    "date": "2021-03-31",
    "total_revenue": 19.2,
    "total_bytes": 5.259772810303095e+18,
    "shares": {
      "Samsung": 43.0,
      "SK Hynix": 29.0,
      "Micron": 23.0,
      "CXMT": 2.25,
      "Nanya": 2.0,
      "Others": 0.75
    },
    "milestone": "COVID-19 remote-work boom drives PC, tablet, and server demand. DRAM market recovers to $94.3B. DDR5 begins commercial shipments."
  },
  {
    "label": "2021 Q2",
    "date": "2021-06-30",
    "total_revenue": 24.1,
    "total_bytes": 5.443864858663703e+18,
    "shares": {
      "Samsung": 43.0,
      "SK Hynix": 29.0,
      "Micron": 23.0,
      "CXMT": 2.5,
      "Nanya": 2.0,
      "Others": 0.5
    },
    "milestone": ""
  },
  {
    "label": "2021 Q3",
    "date": "2021-09-30",
    "total_revenue": 26.2,
    "total_bytes": 5.634400128716932e+18,
    "shares": {
      "Samsung": 43.0,
      "SK Hynix": 29.0,
      "Micron": 23.0,
      "CXMT": 2.75,
      "Nanya": 2.0,
      "Others": 0.25
    },
    "milestone": ""
  },
  {
    "label": "2021 Q4",
    "date": "2021-12-31",
    "total_revenue": 24.8,
    "total_bytes": 5.831604133222024e+18,
    "shares": {
      "Samsung": 43.0,
      "SK Hynix": 29.0,
      "Micron": 23.0,
      "CXMT": 3.0,
      "Nanya": 2.0,
      "Others": 0.0
    },
    "milestone": ""
  },
  {
    "label": "2022 Q1",
    "date": "2022-03-31",
    "total_revenue": 24.0,
    "total_bytes": 6.035710277884795e+18,
    "shares": {
      "Samsung": 43.0,
      "SK Hynix": 29.0,
      "Micron": 23.0,
      "CXMT": 3.25,
      "Nanya": 2.0,
      "Others": -0.25
    },
    "milestone": ""
  },
  {
    "label": "2022 Q2",
    "date": "2022-06-30",
    "total_revenue": 22.8,
    "total_bytes": 6.246960137610762e+18,
    "shares": {
      "Samsung": 43.0,
      "SK Hynix": 29.0,
      "Micron": 23.0,
      "CXMT": 3.5,
      "Nanya": 2.0,
      "Others": -0.5
    },
    "milestone": ""
  },
  {
    "label": "2022 Q3",
    "date": "2022-09-30",
    "total_revenue": 18.2,
    "total_bytes": 6.465603742427138e+18,
    "shares": {
      "Samsung": 43.0,
      "SK Hynix": 29.0,
      "Micron": 23.0,
      "CXMT": 3.75,
      "Nanya": 2.0,
      "Others": -0.75
    },
    "milestone": ""
  },
  {
    "label": "2022 Q4",
    "date": "2022-12-31",
    "total_revenue": 14.2,
    "total_bytes": 6.691899873412088e+18,
    "shares": {
      "Samsung": 43.0,
      "SK Hynix": 29.0,
      "Micron": 23.0,
      "CXMT": 4.0,
      "Nanya": 2.0,
      "Others": -1.0
    },
    "milestone": ""
  },
  {
    "label": "2023 Q1",
    "date": "2023-03-31",
    "total_revenue": 9.1,
    "total_bytes": 6.92611636898151e+18,
    "shares": {
      "Samsung": 43.0,
      "SK Hynix": 29.0,
      "Micron": 23.0,
      "CXMT": 4.25,
      "Nanya": 2.0,
      "Others": -1.25
    },
    "milestone": "DRAM market crashes to $45.2B due to high customer inventories, post-pandemic demand drop, and high inflation. Crucial inventory cuts begin."
  },
  {
    "label": "2023 Q2",
    "date": "2023-06-30",
    "total_revenue": 10.4,
    "total_bytes": 7.168530441895862e+18,
    "shares": {
      "Samsung": 43.0,
      "SK Hynix": 29.0,
      "Micron": 23.0,
      "CXMT": 4.5,
      "Nanya": 2.0,
      "Others": -1.5
    },
    "milestone": ""
  },
  {
    "label": "2023 Q3",
    "date": "2023-09-30",
    "total_revenue": 12.5,
    "total_bytes": 7.419429007362217e+18,
    "shares": {
      "Samsung": 43.0,
      "SK Hynix": 29.0,
      "Micron": 23.0,
      "CXMT": 4.75,
      "Nanya": 2.0,
      "Others": -1.75
    },
    "milestone": ""
  },
  {
    "label": "2023 Q4",
    "date": "2023-12-31",
    "total_revenue": 13.2,
    "total_bytes": 7.679109022619894e+18,
    "shares": {
      "Samsung": 43.0,
      "SK Hynix": 29.0,
      "Micron": 23.0,
      "CXMT": 5.0,
      "Nanya": 2.0,
      "Others": -2.0
    },
    "milestone": ""
  },
  {
    "label": "2024 Q1",
    "date": "2024-03-31",
    "total_revenue": 17.5,
    "total_bytes": 7.94787783841159e+18,
    "shares": {
      "Samsung": 42.0,
      "SK Hynix": 30.0,
      "Micron": 23.0,
      "CXMT": 5.25,
      "Nanya": 2.0,
      "Others": -2.25
    },
    "milestone": "AI boom fuels recovery. High Bandwidth Memory (HBM3/HBM3E) demand explodes, creating wafer capacity shortages for commodity DRAM."
  },
  {
    "label": "2024 Q2",
    "date": "2024-06-30",
    "total_revenue": 19.8,
    "total_bytes": 8.226053562755995e+18,
    "shares": {
      "Samsung": 41.0,
      "SK Hynix": 31.0,
      "Micron": 23.0,
      "CXMT": 5.5,
      "Nanya": 2.0,
      "Others": -2.5
    },
    "milestone": ""
  },
  {
    "label": "2024 Q3",
    "date": "2024-09-30",
    "total_revenue": 21.2,
    "total_bytes": 8.513965437452454e+18,
    "shares": {
      "Samsung": 40.0,
      "SK Hynix": 32.0,
      "Micron": 23.0,
      "CXMT": 5.75,
      "Nanya": 2.0,
      "Others": -2.75
    },
    "milestone": ""
  },
  {
    "label": "2024 Q4",
    "date": "2024-12-31",
    "total_revenue": 23.0,
    "total_bytes": 8.811954227763289e+18,
    "shares": {
      "Samsung": 39.0,
      "SK Hynix": 33.0,
      "Micron": 23.0,
      "CXMT": 6.0,
      "Nanya": 2.0,
      "Others": -3.0
    },
    "milestone": ""
  },
  {
    "label": "2025 Q1",
    "date": "2025-03-31",
    "total_revenue": 24.0,
    "total_bytes": 9.120372625735003e+18,
    "shares": {
      "Samsung": 34.0,
      "SK Hynix": 36.0,
      "Micron": 23.0,
      "CXMT": 6.25,
      "Nanya": 2.0,
      "Others": -1.25
    },
    "milestone": "SK Hynix grabs early leadership in HBM3E (8-layer), overtaking Samsung in quarterly DRAM revenue share for the first time."
  },
  {
    "label": "2025 Q2",
    "date": "2025-06-30",
    "total_revenue": 28.0,
    "total_bytes": 9.439585667635728e+18,
    "shares": {
      "Samsung": 33.0,
      "SK Hynix": 39.0,
      "Micron": 23.0,
      "CXMT": 6.5,
      "Nanya": 2.0,
      "Others": -3.5
    },
    "milestone": "SK Hynix hits record 39% revenue share as Nvidia HBM3E orders surge. Samsung falls to 33%."
  },
  {
    "label": "2025 Q3",
    "date": "2025-09-30",
    "total_revenue": 32.0,
    "total_bytes": 9.769971166002979e+18,
    "shares": {
      "Samsung": 33.0,
      "SK Hynix": 34.0,
      "Micron": 23.0,
      "CXMT": 6.75,
      "Nanya": 2.0,
      "Others": 1.25
    },
    "milestone": ""
  },
  {
    "label": "2025 Q4",
    "date": "2025-12-31",
    "total_revenue": 36.0,
    "total_bytes": 1.0111920156813083e+19,
    "shares": {
      "Samsung": 36.0,
      "SK Hynix": 32.0,
      "Micron": 23.0,
      "CXMT": 7.0,
      "Nanya": 2.0,
      "Others": 0.0
    },
    "milestone": ""
  },
  {
    "label": "2026 Q1",
    "date": "2026-03-31",
    "total_revenue": 97.0,
    "total_bytes": 1.046583736230154e+19,
    "shares": {
      "Samsung": 38.0,
      "SK Hynix": 29.0,
      "Micron": 22.0,
      "CXMT": 8.0,
      "Nanya": 2.0,
      "Others": 1.0
    },
    "milestone": "AI Memory Supercycle: DRAM quarterly market revenue hits record $97B. Samsung recovers 38% share; CXMT reaches 8%."
  },
  {
    "label": "2026 Q2",
    "date": "2026-06-30",
    "total_revenue": 90.0,
    "total_bytes": 1.0832141669982093e+19,
    "shares": {
      "Samsung": 39.0,
      "SK Hynix": 29.0,
      "Micron": 22.0,
      "CXMT": 7.0,
      "Nanya": 2.0,
      "Others": 1.0
    },
    "milestone": ""
  }
];
