const HorizontalWaves = () => {
  return (
    <div className="absolute bottom-0 left-0 right-0 h-32 overflow-hidden">
      {/* Wave 1 - Small, Fast */}
      <div className="absolute bottom-0 w-[200%] h-8 animate-scroll-fast">
        <svg
          viewBox="0 0 1200 40"
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0,20 Q150,5 300,20 T600,20 T900,20 T1200,20 V40 H0 Z"
            fill="rgba(255,255,255,0.3)"
          />
        </svg>
      </div>

      {/* Wave 2 - Medium, Medium Speed */}
      <div className="absolute bottom-0 w-[200%] h-16 animate-scroll-medium">
        <svg
          viewBox="0 0 1200 60"
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0,30 Q200,10 400,30 T800,30 T1200,30 V60 H0 Z"
            fill="rgba(255,255,255,0.2)"
          />
        </svg>
      </div>

      {/* Wave 3 - Large, Slow */}
      <div className="absolute bottom-0 w-[200%] h-24 animate-scroll-slow">
        <svg
          viewBox="0 0 1200 80"
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0,40 Q300,15 600,40 T1200,40 V80 H0 Z"
            fill="rgba(255,255,255,0.1)"
          />
        </svg>
      </div>
    </div>
  );
};

export default HorizontalWaves;