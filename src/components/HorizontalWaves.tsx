const HorizontalWaves = () => {
  return (
    <div className="absolute bottom-0 left-0 right-0 h-32 overflow-hidden">
      {/* Bottom Wave - Dark Blue */}
      <div className="absolute bottom-0 w-[200%] h-full animate-scroll-slow">
        <svg
          viewBox="0 0 1200 128"
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0,64 C15,44 45,44 60,64 C75,84 105,84 120,64 C135,44 165,44 180,64 C195,84 225,84 240,64 C255,44 285,44 300,64 C315,84 345,84 360,64 C375,44 405,44 420,64 C435,84 465,84 480,64 C495,44 525,44 540,64 C555,84 585,84 600,64 C615,44 645,44 660,64 C675,84 705,84 720,64 C735,44 765,44 780,64 C795,84 825,84 840,64 C855,44 885,44 900,64 C915,84 945,84 960,64 C975,44 1005,44 1020,64 C1035,84 1065,84 1080,64 C1095,44 1125,44 1140,64 C1155,84 1185,84 1200,64"
            stroke="#1e3a8a"
            strokeWidth="2"
            fill="none"
            opacity="0.8"
          />
        </svg>
      </div>

      {/* Middle Wave - Medium Blue */}
      <div className="absolute bottom-0 w-[200%] h-full animate-scroll-medium">
        <svg
          viewBox="0 0 1200 128"
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0,74 C15,54 45,54 60,74 C75,94 105,94 120,74 C135,54 165,54 180,74 C195,94 225,94 240,74 C255,54 285,54 300,74 C315,94 345,94 360,74 C375,54 405,54 420,74 C435,94 465,94 480,74 C495,54 525,54 540,74 C555,94 585,94 600,74 C615,54 645,54 660,74 C675,94 705,94 720,74 C735,54 765,54 780,74 C795,94 825,94 840,74 C855,54 885,54 900,74 C915,94 945,94 960,74 C975,54 1005,54 1020,74 C1035,94 1065,94 1080,74 C1095,54 1125,54 1140,74 C1155,94 1185,94 1200,74"
            stroke="#3b82f6"
            strokeWidth="2"
            fill="none"
            opacity="0.7"
          />
        </svg>
      </div>

      {/* Top Wave - Light Blue */}
      <div className="absolute bottom-0 w-[200%] h-full animate-scroll-fast">
        <svg
          viewBox="0 0 1200 128"
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0,84 C15,64 45,64 60,84 C75,104 105,104 120,84 C135,64 165,64 180,84 C195,104 225,104 240,84 C255,64 285,64 300,84 C315,104 345,104 360,84 C375,64 405,64 420,84 C435,104 465,104 480,84 C495,64 525,64 540,84 C555,104 585,104 600,84 C615,64 645,64 660,84 C675,104 705,104 720,84 C735,64 765,64 780,84 C795,104 825,104 840,84 C855,64 885,64 900,84 C915,104 945,104 960,84 C975,64 1005,64 1020,84 C1035,104 1065,104 1080,84 C1095,64 1125,64 1140,84 C1155,104 1185,104 1200,84"
            stroke="#60a5fa"
            strokeWidth="2"
            fill="none"
            opacity="0.6"
          />
        </svg>
      </div>
    </div>
  );
};

export default HorizontalWaves;