const BridgeAnimation = () => {
  return (
    <div className="absolute bottom-0 left-0 right-0 h-24 overflow-hidden">
      {/* Bridge SVG */}
      <svg
        className="absolute bottom-0 w-full h-full"
        viewBox="0 0 1200 96"
        preserveAspectRatio="xMidYEnd meet"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Minimalist Bridge structure */}
        <g className="opacity-60">
          {/* Bridge deck - main horizontal line */}
          <rect x="0" y="72" width="1200" height="2" fill="rgba(255,255,255,0.8)" />
          
          {/* Left support */}
          <rect x="100" y="50" width="2" height="22" fill="rgba(255,255,255,0.6)" />
          
          {/* Right support */}
          <rect x="1100" y="50" width="2" height="22" fill="rgba(255,255,255,0.6)" />
          
          {/* Main span arch - very subtle */}
          <path
            d="M 100 72 Q 600 45 1100 72"
            stroke="rgba(255,255,255,0.5)"
            strokeWidth="1"
            fill="none"
          />
        </g>
        
        {/* Animated signal waves on the bridge deck */}
        <g className="signal-waves">
          {/* Fast wave - Orange */}
          <g className="animate-wave-fast">
            <path
              d="M 0 72 Q 50 62 100 72 Q 150 82 200 72 Q 250 62 300 72 Q 350 82 400 72 Q 450 62 500 72 Q 550 82 600 72 Q 650 62 700 72 Q 750 82 800 72 Q 850 62 900 72 Q 950 82 1000 72 Q 1050 62 1100 72 Q 1150 82 1200 72"
              stroke="#f59e0b"
              strokeWidth="2"
              fill="none"
              opacity="0.8"
            />
          </g>
          
          {/* Medium wave - Green */}
          <g className="animate-wave-medium">
            <path
              d="M 0 72 Q 75 65 150 72 Q 225 79 300 72 Q 375 65 450 72 Q 525 79 600 72 Q 675 65 750 72 Q 825 79 900 72 Q 975 65 1050 72 Q 1125 79 1200 72"
              stroke="#10b981"
              strokeWidth="2"
              fill="none"
              opacity="0.7"
            />
          </g>
          
          {/* Slow wave - Cyan */}
          <g className="animate-wave-slow">
            <path
              d="M 0 72 Q 100 68 200 72 Q 300 76 400 72 Q 500 68 600 72 Q 700 76 800 72 Q 900 68 1000 72 Q 1100 76 1200 72"
              stroke="#06b6d4"
              strokeWidth="2"
              fill="none"
              opacity="0.6"
            />
          </g>
        </g>
      </svg>
    </div>
  );
};

export default BridgeAnimation;