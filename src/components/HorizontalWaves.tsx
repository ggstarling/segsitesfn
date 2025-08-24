const HorizontalWaves = () => {
  return (
    <div className="absolute bottom-0 left-0 right-0 h-40 overflow-hidden">
      {/* Top Wave - Light Blue, Subtle */}
      <div className="absolute bottom-24 w-[400%] h-8 animate-scroll-fast">
        <svg
          viewBox="0 0 2400 32"
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0,16 C80,8 160,24 240,16 C320,8 400,24 480,16 C560,8 640,24 720,16 C800,8 880,24 960,16 C1040,8 1120,24 1200,16 C1280,8 1360,24 1440,16 C1520,8 1600,24 1680,16 C1760,8 1840,24 1920,16 C2000,8 2080,24 2160,16 C2240,8 2320,24 2400,16"
            stroke="#87ceeb"
            strokeWidth="1.5"
            fill="none"
            opacity="0.6"
          />
        </svg>
      </div>

      {/* Middle Wave - White, More Pronounced */}
      <div className="absolute bottom-12 w-[400%] h-12 animate-scroll-medium">
        <svg
          viewBox="0 0 2400 48"
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0,24 C120,12 240,36 360,24 C480,12 600,36 720,24 C840,12 960,36 1080,24 C1200,12 1320,36 1440,24 C1560,12 1680,36 1800,24 C1920,12 2040,36 2160,24 C2280,12 2400,36 2400,24"
            stroke="#ffffff"
            strokeWidth="2"
            fill="none"
            opacity="0.8"
          />
        </svg>
      </div>

      {/* Bottom Wave - Primary Blue, Most Dramatic */}
      <div className="absolute bottom-0 w-[400%] h-16 animate-scroll-slow">
        <svg
          viewBox="0 0 2400 64"
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0,32 C150,16 300,48 450,32 C600,16 750,48 900,32 C1050,16 1200,48 1350,32 C1500,16 1650,48 1800,32 C1950,16 2100,48 2250,32 C2400,16 2400,48 2400,32"
            stroke="#3481bd"
            strokeWidth="2.5"
            fill="none"
            opacity="0.9"
          />
        </svg>
      </div>
    </div>
  );
};

export default HorizontalWaves;