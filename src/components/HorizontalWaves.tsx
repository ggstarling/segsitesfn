const HorizontalWaves = () => {
  return (
    <div className="absolute bottom-0 left-0 right-0 h-24 overflow-hidden">
      {/* Top Wave - Gray, High Frequency, Very Small Amplitude */}
      <div className="absolute top-0 w-[300%] h-8 animate-scroll-fast">
        <svg
          viewBox="0 0 1800 32"
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0,16 Q10,14 20,16 Q30,18 40,16 Q50,14 60,16 Q70,18 80,16 Q90,14 100,16 Q110,18 120,16 Q130,14 140,16 Q150,18 160,16 Q170,14 180,16 Q190,18 200,16 Q210,14 220,16 Q230,18 240,16 Q250,14 260,16 Q270,18 280,16 Q290,14 300,16 Q310,18 320,16 Q330,14 340,16 Q350,18 360,16 Q370,14 380,16 Q390,18 400,16 Q410,14 420,16 Q430,18 440,16 Q450,14 460,16 Q470,18 480,16 Q490,14 500,16 Q510,18 520,16 Q530,14 540,16 Q550,18 560,16 Q570,14 580,16 Q590,18 600,16 Q610,14 620,16 Q630,18 640,16 Q650,14 660,16 Q670,18 680,16 Q690,14 700,16 Q710,18 720,16 Q730,14 740,16 Q750,18 760,16 Q770,14 780,16 Q790,18 800,16 Q810,14 820,16 Q830,18 840,16 Q850,14 860,16 Q870,18 880,16 Q890,14 900,16 Q910,18 920,16 Q930,14 940,16 Q950,18 960,16 Q970,14 980,16 Q990,18 1000,16 Q1010,14 1020,16 Q1030,18 1040,16 Q1050,14 1060,16 Q1070,18 1080,16 Q1090,14 1100,16 Q1110,18 1120,16 Q1130,14 1140,16 Q1150,18 1160,16 Q1170,14 1180,16 Q1190,18 1200,16 Q1210,14 1220,16 Q1230,18 1240,16 Q1250,14 1260,16 Q1270,18 1280,16 Q1290,14 1300,16 Q1310,18 1320,16 Q1330,14 1340,16 Q1350,18 1360,16 Q1370,14 1380,16 Q1390,18 1400,16 Q1410,14 1420,16 Q1430,18 1440,16 Q1450,14 1460,16 Q1470,18 1480,16 Q1490,14 1500,16 Q1510,18 1520,16 Q1530,14 1540,16 Q1550,18 1560,16 Q1570,14 1580,16 Q1590,18 1600,16 Q1610,14 1620,16 Q1630,18 1640,16 Q1650,14 1660,16 Q1670,18 1680,16 Q1690,14 1700,16 Q1710,18 1720,16 Q1730,14 1740,16 Q1750,18 1760,16 Q1770,14 1780,16 Q1790,18 1800,16"
            stroke="#6b7280"
            strokeWidth="2"
            fill="none"
            opacity="0.8"
          />
        </svg>
      </div>

      {/* Middle Wave - White, Medium Frequency, Medium Amplitude */}
      <div className="absolute top-8 w-[300%] h-8 animate-scroll-medium">
        <svg
          viewBox="0 0 1800 32"
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0,16 Q60,6 120,16 Q180,26 240,16 Q300,6 360,16 Q420,26 480,16 Q540,6 600,16 Q660,26 720,16 Q780,6 840,16 Q900,26 960,16 Q1020,6 1080,16 Q1140,26 1200,16 Q1260,6 1320,16 Q1380,26 1440,16 Q1500,6 1560,16 Q1620,26 1680,16 Q1740,6 1800,16"
            stroke="#ffffff"
            strokeWidth="2"
            fill="none"
            opacity="0.8"
          />
        </svg>
      </div>

      {/* Bottom Wave - Blue, Low Frequency, Large Amplitude */}
      <div className="absolute top-16 w-[300%] h-8 animate-scroll-slow">
        <svg
          viewBox="0 0 1800 32"
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0,16 Q225,2 450,16 Q675,30 900,16 Q1125,2 1350,16 Q1575,30 1800,16"
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