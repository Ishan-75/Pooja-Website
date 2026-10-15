import React, { useMemo } from 'react';

export function FloatingPetals({ enabled = true }) {
  if (!enabled) return null;

  // Generate deterministic gentle petal positions
  const items = useMemo(() => {
    return Array.from({ length: 18 }).map((_, i) => ({
      id: i,
      left: `${(i * 5.8 + 2) % 96}%`,
      delay: `${(i * 1.3) % 12}s`,
      duration: `${14 + (i % 7) * 2.5}s`,
      size: 14 + (i % 4) * 6,
      rotateStart: (i * 45) % 360,
      isJasmine: i % 3 === 0,
      opacity: 0.35 + (i % 3) * 0.15,
    }));
  }, []);

  return (
    <div 
      className="fixed inset-0 pointer-events-none overflow-hidden z-10 select-none" 
      aria-hidden="true"
    >
      {items.map((item) => (
        <div
          key={item.id}
          className="absolute"
          style={{
            left: item.left,
            top: '-40px',
            animation: `driftDown ${item.duration} linear infinite`,
            animationDelay: item.delay,
            opacity: item.opacity,
          }}
        >
          {item.isJasmine ? (
            // Tiny Jasmine petal
            <div 
              style={{
                width: `${item.size * 0.9}px`,
                height: `${item.size * 0.9}px`,
                transform: `rotate(${item.rotateStart}deg)`,
              }}
            >
              <svg viewBox="0 0 40 40" fill="none" className="w-full h-full drop-shadow-sm">
                <path
                  d="M20 5 C15 15, 10 20, 20 35 C30 20, 25 15, 20 5 Z"
                  fill="#FFFDF9"
                  stroke="#EAD4B4"
                  strokeWidth="1"
                />
                <circle cx="20" cy="20" r="2" fill="#EAD4B4" />
              </svg>
            </div>
          ) : (
            // Rose petal
            <div
              style={{
                width: `${item.size}px`,
                height: `${item.size * 1.25}px`,
                transform: `rotate(${item.rotateStart}deg)`,
              }}
            >
              <svg viewBox="0 0 30 40" fill="none" className="w-full h-full drop-shadow-sm">
                <path
                  d="M15 2 C5 12, 0 25, 15 38 C30 25, 25 12, 15 2 Z"
                  fill="url(#roseGradient)"
                  opacity="0.85"
                />
                <defs>
                  <linearGradient id="roseGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#F6DCE0" />
                    <stop offset="60%" stopColor="#C46A7B" />
                    <stop offset="100%" stopColor="#682D3B" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          )}
        </div>
      ))}

      <style>{`
        @keyframes driftDown {
          0% {
            transform: translateY(-40px) translateX(0px) rotate(0deg);
          }
          25% {
            transform: translateY(28vh) translateX(15px) rotate(90deg);
          }
          50% {
            transform: translateY(56vh) translateX(-12px) rotate(180deg);
          }
          75% {
            transform: translateY(82vh) translateX(18px) rotate(270deg);
          }
          100% {
            transform: translateY(105vh) translateX(0px) rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}
