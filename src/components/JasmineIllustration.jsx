import React from 'react';

// Delicate Jasmine (Malli Poo) Flower Illustration
export function JasmineFlower({ className = "w-6 h-6", color = "#FFF8F0", stroke = "#C46A7B" }) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Central stigma / pollen */}
      <circle cx="50" cy="50" r="7" fill="#EAD4B4" stroke={stroke} strokeWidth="1.5" />
      <circle cx="48" cy="48" r="2.5" fill="#C46A7B" opacity="0.6" />
      
      {/* 5 delicate jasmine star-shaped petals */}
      <path 
        d="M50 43 C46 30, 42 16, 50 8 C58 16, 54 30, 50 43 Z" 
        fill={color} 
        stroke={stroke} 
        strokeWidth="1.5" 
      />
      <path 
        d="M56 46 C69 41, 83 37, 90 44 C84 52, 70 51, 56 46 Z" 
        fill={color} 
        stroke={stroke} 
        strokeWidth="1.5" 
      />
      <path 
        d="M54 55 C63 65, 74 77, 68 85 C60 81, 53 69, 54 55 Z" 
        fill={color} 
        stroke={stroke} 
        strokeWidth="1.5" 
      />
      <path 
        d="M45 55 C37 66, 26 79, 18 73 C22 64, 34 56, 45 55 Z" 
        fill={color} 
        stroke={stroke} 
        strokeWidth="1.5" 
      />
      <path 
        d="M44 46 C31 42, 17 40, 12 48 C18 55, 32 52, 44 46 Z" 
        fill={color} 
        stroke={stroke} 
        strokeWidth="1.5" 
      />
      
      {/* Subtle vein lines */}
      <path d="M50 43 L50 20" stroke={stroke} strokeWidth="0.8" opacity="0.5" />
      <path d="M56 46 L76 43" stroke={stroke} strokeWidth="0.8" opacity="0.5" />
      <path d="M54 55 L64 72" stroke={stroke} strokeWidth="0.8" opacity="0.5" />
      <path d="M45 55 L28 67" stroke={stroke} strokeWidth="0.8" opacity="0.5" />
      <path d="M44 46 L24 45" stroke={stroke} strokeWidth="0.8" opacity="0.5" />
    </svg>
  );
}

// Delicate garland / jasmine sprig
export function JasmineSprig({ className = "w-24 h-8" }) {
  return (
    <div className={`flex items-center justify-center gap-1.5 opacity-80 ${className}`}>
      <JasmineFlower className="w-5 h-5 -rotate-12" />
      <span className="w-1.5 h-1.5 rounded-full bg-[#C46A7B]/40" />
      <JasmineFlower className="w-6 h-6 rotate-6" />
      <span className="w-1.5 h-1.5 rounded-full bg-[#C46A7B]/40" />
      <JasmineFlower className="w-5 h-5 rotate-45" />
    </div>
  );
}

// Doodled romantic heart
export function DoodledHeart({ className = "w-6 h-6", stroke = "#C46A7B" }) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 48 48" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path 
        d="M24 40.5 C24 40.5 6 28 6 16.5 C6 10 11 6 17.5 6 C21.5 6 24 8.5 24 8.5 C24 8.5 26.5 6 30.5 6 C37 6 42 10 42 16.5 C42 28 24 40.5 24 40.5 Z" 
        stroke={stroke} 
        strokeWidth="2.5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
        fill="rgba(246, 220, 224, 0.45)"
      />
      {/* Hand-drawn scribble highlight */}
      <path 
        d="M14 14 C12 18 12 21 14 24" 
        stroke="white" 
        strokeWidth="1.5" 
        strokeLinecap="round" 
        opacity="0.8" 
      />
    </svg>
  );
}
