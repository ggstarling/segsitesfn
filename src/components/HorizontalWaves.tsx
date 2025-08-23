const HorizontalWaves = () => {
  return (
    <div className="absolute bottom-0 left-0 right-0 h-32 overflow-hidden">
      {/* Top Wave - Gray, Very Small Amplitude (Gentle) */}
      <div className="absolute bottom-20 w-[300%] h-6 animate-scroll-fast">
        <svg
          viewBox="0 0 1800 24"
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0,12 Q45,11 90,12 Q135,13 180,12 Q225,11 270,12 Q315,13 360,12 Q405,11 450,12 Q495,13 540,12 Q585,11 630,12 Q675,13 720,12 Q765,11 810,12 Q855,13 900,12 Q945,11 990,12 Q1035,13 1080,12 Q1125,11 1170,12 Q1215,13 1260,12 Q1305,11 1350,12 Q1395,13 1440,12 Q1485,11 1530,12 Q1575,13 1620,12 Q1665,11 1710,12 Q1755,13 1800,12"
            stroke="#6b7280"
            strokeWidth="2"
            fill="none"
            opacity="0.8"
          />
        </svg>
      </div>

      {/* Middle Wave - White, Medium Amplitude (Pronounced) */}
      <div className="absolute bottom-10 w-[300%] h-8 animate-scroll-medium">
        <svg
          viewBox="0 0 1800 32"
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0,16 Q90,8 180,16 Q270,24 360,16 Q450,8 540,16 Q630,24 720,16 Q810,8 900,16 Q990,24 1080,16 Q1170,8 1260,16 Q1350,24 1440,16 Q1530,8 1620,16 Q1710,24 1800,16"
            stroke="#ffffff"
            strokeWidth="2"
            fill="none"
            opacity="0.8"
          />
        </svg>
      </div>

      {/* Bottom Wave - Blue, Large Amplitude (Dramatic) */}
      <div className="absolute bottom-0 w-[300%] h-12 animate-scroll-slow">
        <svg
          viewBox="0 0 1800 48"
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0,24 Q225,6 450,24 Q675,42 900,24 Q1125,6 1350,24 Q1575,42 1800,24"
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