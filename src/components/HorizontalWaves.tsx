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
            d="M0,40 Q45,20 90,40 T180,40 T270,40 T360,40 T450,40 T540,40 T630,40 T720,40 T810,40 T900,40 T990,40 T1080,40 T1170,40 T1260,40 T1350,40 T1440,40 T1530,40 T1620,40 T1710,40 T1800,40"
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
            d="M0,40 Q60,15 120,40 T240,40 T360,40 T480,40 T600,40 T720,40 T840,40 T960,40 T1080,40 T1200,40 T1320,40 T1440,40 T1560,40 T1680,40 T1800,40"
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
            d="M0,40 Q90,10 180,40 T360,40 T540,40 T720,40 T900,40 T1080,40 T1260,40 T1440,40 T1620,40 T1800,40"
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