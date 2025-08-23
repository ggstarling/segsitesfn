import { cn } from "@/lib/utils";

const BridgeAnimation = () => {
  return (
    <div className="absolute bottom-0 left-0 right-0 h-32 overflow-hidden">
      {/* Bridge SVG */}
      <svg
        className="absolute bottom-0 w-full h-full"
        viewBox="0 0 800 128"
        preserveAspectRatio="xMidYEnd meet"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Bridge structure */}
        <g className="opacity-80">
          {/* Bridge deck */}
          <rect x="0" y="90" width="800" height="4" fill="rgba(255,255,255,0.7)" />
          
          {/* Left tower */}
          <rect x="150" y="40" width="8" height="50" fill="rgba(255,255,255,0.6)" />
          <rect x="145" y="85" width="18" height="8" fill="rgba(255,255,255,0.6)" />
          
          {/* Right tower */}
          <rect x="642" y="40" width="8" height="50" fill="rgba(255,255,255,0.6)" />
          <rect x="637" y="85" width="18" height="8" fill="rgba(255,255,255,0.6)" />
          
          {/* Bridge arch */}
          <path
            d="M 150 90 Q 400 20 650 90"
            stroke="rgba(255,255,255,0.7)"
            strokeWidth="3"
            fill="none"
          />
          
          {/* Support cables */}
          <g stroke="rgba(255,255,255,0.4)" strokeWidth="1">
            <line x1="200" y1="90" x2="220" y2="60" />
            <line x1="250" y1="90" x2="270" y2="45" />
            <line x1="300" y1="90" x2="320" y2="35" />
            <line x1="350" y1="90" x2="370" y2="30" />
            <line x1="400" y1="90" x2="400" y2="25" />
            <line x1="450" y1="90" x2="430" y2="30" />
            <line x1="500" y1="90" x2="480" y2="35" />
            <line x1="550" y1="90" x2="530" y2="45" />
            <line x1="600" y1="90" x2="580" y2="60" />
          </g>
        </g>
        
        {/* Animated signal waves */}
        <g className="signal-waves">
          {/* Fast wave */}
          <path
            className="animate-signal-fast opacity-80"
            d="M 0 94 Q 200 85 400 94 Q 600 103 800 94"
            stroke="#60a5fa"
            strokeWidth="2"
            fill="none"
            strokeDasharray="10,5"
          />
          
          {/* Medium wave */}
          <path
            className="animate-signal-medium opacity-70"
            d="M 0 96 Q 200 87 400 96 Q 600 105 800 96"
            stroke="#34d399"
            strokeWidth="2"
            fill="none"
            strokeDasharray="8,3"
          />
          
          {/* Slow wave */}
          <path
            className="animate-signal-slow opacity-60"
            d="M 0 98 Q 200 89 400 98 Q 600 107 800 98"
            stroke="#fbbf24"
            strokeWidth="2"
            fill="none"
            strokeDasharray="12,4"
          />
        </g>
      </svg>
    </div>
  );
};

export default BridgeAnimation;