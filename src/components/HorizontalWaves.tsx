const HorizontalWaves = () => {
  return (
    <div className="absolute bottom-0 left-0 right-0 h-20 overflow-hidden">
      {/* Wave 1 - Gray, Fast */}
      <div className="absolute bottom-0 w-[300%] h-full animate-scroll-fast">
        <svg
          viewBox="0 0 1800 80"
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0,40 Q30,10 60,40 T120,40 T180,40 T240,40 T300,40 T360,40 T420,40 T480,40 T540,40 T600,40 T660,40 T720,40 T780,40 T840,40 T900,40 T960,40 T1020,40 T1080,40 T1140,40 T1200,40 T1260,40 T1320,40 T1380,40 T1440,40 T1500,40 T1560,40 T1620,40 T1680,40 T1740,40 T1800,40"
            stroke="#6b7280"
            strokeWidth="2"
            fill="none"
            opacity="0.8"
          />
        </svg>
      </div>

      {/* Wave 2 - White, Medium Speed */}
      <div className="absolute bottom-0 w-[300%] h-full animate-scroll-medium">
        <svg
          viewBox="0 0 1800 80"
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0,40 Q20,30 40,40 Q60,50 80,40 Q100,30 120,40 Q140,50 160,40 Q180,30 200,40 Q220,50 240,40 Q260,30 280,40 Q300,50 320,40 Q340,30 360,40 Q380,50 400,40 Q420,30 440,40 Q460,50 480,40 Q500,30 520,40 Q540,50 560,40 Q580,30 600,40 Q620,50 640,40 Q660,30 680,40 Q700,50 720,40 Q740,30 760,40 Q780,50 800,40 Q820,30 840,40 Q860,50 880,40 Q900,30 920,40 Q940,50 960,40 Q980,30 1000,40 Q1020,50 1040,40 Q1060,30 1080,40 Q1100,50 1120,40 Q1140,30 1160,40 Q1180,50 1200,40 Q1220,30 1240,40 Q1260,50 1280,40 Q1300,30 1320,40 Q1340,50 1360,40 Q1380,30 1400,40 Q1420,50 1440,40 Q1460,30 1480,40 Q1500,50 1520,40 Q1540,30 1560,40 Q1580,50 1600,40 Q1620,30 1640,40 Q1660,50 1680,40 Q1700,30 1720,40 Q1740,50 1760,40 Q1780,30 1800,40"
            stroke="#ffffff"
            strokeWidth="2"
            fill="none"
            opacity="0.8"
          />
        </svg>
      </div>

      {/* Wave 3 - Blue, Slow */}
      <div className="absolute bottom-0 w-[300%] h-full animate-scroll-slow">
        <svg
          viewBox="0 0 1800 80"
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0,40 Q150,20 300,40 T600,40 T900,40 T1200,40 T1500,40 T1800,40"
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