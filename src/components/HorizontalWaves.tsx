const HorizontalWaves = () => {
  return (
    <div className="absolute bottom-0 left-0 right-0 h-20 overflow-hidden">
      {/* Wave 1 - Gray, High Frequency, Small Amplitude */}
      <div className="absolute bottom-0 w-[300%] h-full animate-scroll-fast">
        <svg
          viewBox="0 0 1800 80"
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0,40 Q10,35 20,40 Q30,45 40,40 Q50,35 60,40 Q70,45 80,40 Q90,35 100,40 Q110,45 120,40 Q130,35 140,40 Q150,45 160,40 Q170,35 180,40 Q190,45 200,40 Q210,35 220,40 Q230,45 240,40 Q250,35 260,40 Q270,45 280,40 Q290,35 300,40 Q310,45 320,40 Q330,35 340,40 Q350,45 360,40 Q370,35 380,40 Q390,45 400,40 Q410,35 420,40 Q430,45 440,40 Q450,35 460,40 Q470,45 480,40 Q490,35 500,40 Q510,45 520,40 Q530,35 540,40 Q550,45 560,40 Q570,35 580,40 Q590,45 600,40 Q610,35 620,40 Q630,45 640,40 Q650,35 660,40 Q670,45 680,40 Q690,35 700,40 Q710,45 720,40 Q730,35 740,40 Q750,45 760,40 Q770,35 780,40 Q790,45 800,40 Q810,35 820,40 Q830,45 840,40 Q850,35 860,40 Q870,45 880,40 Q890,35 900,40 Q910,45 920,40 Q930,35 940,40 Q950,45 960,40 Q970,35 980,40 Q990,45 1000,40 Q1010,35 1020,40 Q1030,45 1040,40 Q1050,35 1060,40 Q1070,45 1080,40 Q1090,35 1100,40 Q1110,45 1120,40 Q1130,35 1140,40 Q1150,45 1160,40 Q1170,35 1180,40 Q1190,45 1200,40 Q1210,35 1220,40 Q1230,45 1240,40 Q1250,35 1260,40 Q1270,45 1280,40 Q1290,35 1300,40 Q1310,45 1320,40 Q1330,35 1340,40 Q1350,45 1360,40 Q1370,35 1380,40 Q1390,45 1400,40 Q1410,35 1420,40 Q1430,45 1440,40 Q1450,35 1460,40 Q1470,45 1480,40 Q1490,35 1500,40 Q1510,45 1520,40 Q1530,35 1540,40 Q1550,45 1560,40 Q1570,35 1580,40 Q1590,45 1600,40 Q1610,35 1620,40 Q1630,45 1640,40 Q1650,35 1660,40 Q1670,45 1680,40 Q1690,35 1700,40 Q1710,45 1720,40 Q1730,35 1740,40 Q1750,45 1760,40 Q1770,35 1780,40 Q1790,45 1800,40"
            stroke="#6b7280"
            strokeWidth="2"
            fill="none"
            opacity="0.8"
          />
        </svg>
      </div>

      {/* Wave 2 - White, Medium Frequency, Large Amplitude */}
      <div className="absolute bottom-0 w-[300%] h-full animate-scroll-medium">
        <svg
          viewBox="0 0 1800 80"
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0,40 Q60,10 120,40 Q180,70 240,40 Q300,10 360,40 Q420,70 480,40 Q540,10 600,40 Q660,70 720,40 Q780,10 840,40 Q900,70 960,40 Q1020,10 1080,40 Q1140,70 1200,40 Q1260,10 1320,40 Q1380,70 1440,40 Q1500,10 1560,40 Q1620,70 1680,40 Q1740,10 1800,40"
            stroke="#ffffff"
            strokeWidth="2"
            fill="none"
            opacity="0.8"
          />
        </svg>
      </div>

      {/* Wave 3 - Blue, Low Frequency, Medium Amplitude */}
      <div className="absolute bottom-0 w-[300%] h-full animate-scroll-slow">
        <svg
          viewBox="0 0 1800 80"
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0,40 Q225,25 450,40 Q675,55 900,40 Q1125,25 1350,40 Q1575,55 1800,40"
            stroke="#3481bd"
            strokeWidth="2"
            fill="none"
            opacity="0.8"
          />
        </svg>
      </div>
    </div>
  );
};

export default HorizontalWaves;