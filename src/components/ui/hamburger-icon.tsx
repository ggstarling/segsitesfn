import React from 'react';

interface HamburgerIconProps {
  isOpen: boolean;
  className?: string;
}

export const HamburgerIcon: React.FC<HamburgerIconProps> = ({ isOpen, className = "" }) => {
  return (
    <div className={`w-7 h-7 flex flex-col justify-center items-center ${className}`}>
      <div className="w-full h-6 flex flex-col justify-center items-center relative">
        {/* Top line */}
        <div 
          className={`w-6 h-0.5 bg-gray-700 rounded-full transition-all duration-300 ease-in-out absolute ${
            isOpen 
              ? 'rotate-45 translate-y-0' 
              : '-translate-y-2'
          }`}
        />
        
        {/* Middle line */}
        <div 
          className={`w-6 h-0.5 bg-gray-700 rounded-full transition-all duration-300 ease-in-out absolute ${
            isOpen 
              ? 'opacity-0 scale-0' 
              : 'opacity-100 scale-100'
          }`}
        />
        
        {/* Bottom line */}
        <div 
          className={`w-6 h-0.5 bg-gray-700 rounded-full transition-all duration-300 ease-in-out absolute ${
            isOpen 
              ? '-rotate-45 translate-y-0' 
              : 'translate-y-2'
          }`}
        />
      </div>
    </div>
  );
};