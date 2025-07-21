import React from 'react';

const random = (min, max) => Math.random() * (max - min) + min;

const AstrologerCosmicBackground = () => {
  // Distant, twinkling stars with soft glows
  const stars = Array.from({ length: 200 }).map((_, i) => {
    const size = random(1, 2.5);
    const opacity = random(0.4, 0.9);
    const twinkle = random(0.8, 2.5); // Gentle twinkle
    const glowColor = [
      '0 0 8px 1.5px rgba(255, 255, 200, 0.6)', // Soft cream/yellow
      '0 0 9px 2px rgba(173, 216, 230, 0.5)',   // Light blue
      '0 0 10px 2.5px rgba(200, 150, 255, 0.5)', // Soft lavender/purple
      '0 0 7px 1px rgba(255, 240, 220, 0.4)'    // Warm off-white
    ];
    return (
      <div
        key={`star-${i}`}
        className="absolute rounded-full pointer-events-none"
        style={{
          left: `${random(0, 100)}%`,
          top: `${random(0, 100)}%`,
          width: `${size}px`,
          height: `${size}px`,
          background: 'white',
          opacity,
          filter: 'blur(0.3px)',
          boxShadow: glowColor[Math.floor(random(0, glowColor.length))],
          animation: `twinkle ${twinkle}s infinite alternate`,
          animationDelay: `${random(0, 1.5)}s`
        }}
      />
    );
  });

  // Streaks of cosmic energy/comets
  const cosmicStreaks = Array.from({ length: 15 }).map((_, i) => (
    <div
      key={`cosmic-streak-${i}`}
      className="absolute h-0.5 rounded-full pointer-events-none"
      style={{
        left: `${random(5, 95)}%`,
        top: `${random(5, 90)}%`,
        width: `${random(150, 300)}px`,
        opacity: 0.6,
        background: `linear-gradient(90deg, transparent 0%, rgba(100, 100, 255, 0.7) 30%, rgba(150, 50, 255, 0.6) 70%, transparent 100%)`, // Blue to Purple
        animation: `shooting-star ${random(4, 8)}s linear ${random(0, 7)}s infinite`
      }}
    />
  ));

  // Drifting nebulae clouds
  const nebulaeClouds = Array.from({ length: 40 }).map((_, i) => {
    const size = random(60, 180);
    const duration = random(20, 40);
    const delay = random(0, 20);
    const color = [
      'rgba(50, 50, 100, 0.08)',   // Dark Blue tint
      'rgba(80, 50, 120, 0.07)',   // Dark Purple tint
      'rgba(30, 80, 100, 0.06)'    // Dark Teal tint
    ];
    return (
      <div
        key={`nebulae-cloud-${i}`}
        className="absolute rounded-full pointer-events-none"
        style={{
          left: `${random(0, 100)}%`,
          top: `${random(0, 100)}%`,
          width: `${size}px`,
          height: `${size}px`,
          background: color[Math.floor(random(0, color.length))],
          filter: 'blur(15px)',
          animation: `drift ${duration}s ease-in-out ${delay}s infinite alternate`
        }}
      />
    );
  });

  // Celestial bodies (planets/moons with subtle detail)
  const celestialBodies = [
    {
      className: "w-20 h-20 rounded-full shadow-[0_0_40px_12px_rgba(70,130,180,0.4)] animate-float-gentle",
      style: { top: "10%", left: "15%", animationDuration: "10s", background: 'radial-gradient(circle, #4682B4 0%, #191970 80%)', filter: "blur(0.8px)" } // Steel Blue to Midnight Blue
    },
    {
      className: "w-14 h-14 rounded-full shadow-[0_0_30px_10px_rgba(138,43,226,0.35)] animate-float-gentle",
      style: { top: "75%", left: "25%", animationDuration: "12s", background: 'radial-gradient(circle, #8A2BE2 0%, #4B0082 80%)', filter: "blur(0.6px)" } // Blue Violet to Indigo
    },
    {
      className: "w-16 h-16 rounded-full shadow-[0_0_35px_11px_rgba(255,215,0,0.3)] animate-float-gentle",
      style: { top: "60%", left: "80%", animationDuration: "15s", background: 'radial-gradient(circle, #FFD700 0%, #B8860B 80%)', filter: "blur(0.7px)" } // Gold to Dark Goldenrod
    },
    {
      className: "w-24 h-24 rounded-full shadow-[0_0_50px_15px_rgba(0,191,255,0.45)] animate-float-gentle",
      style: { top: "20%", left: "70%", animationDuration: "11s", background: 'radial-gradient(circle, #00BFFF 0%, #1E90FF 80%)', filter: "blur(0.9px)" } // Deep Sky Blue to Dodger Blue
    }
  ];

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none select-none">
      {/* Deep Cosmic Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#01010A] via-[#080820] to-[#121235] opacity-100" />

      {/* Subtle Starfield Effect (lighter than full vignette) */}
      <div className="absolute inset-0 bg-black opacity-30 pointer-events-none" style={{ borderRadius: 'inherit' }} />

      {/* Twinkling Stars */}
      <div className="absolute inset-0">{stars}</div>

      {/* Cosmic Streaks */}
      <div className="absolute inset-0">{cosmicStreaks}</div>

      {/* Drifting Nebulae Clouds */}
      <div className="absolute inset-0">{nebulaeClouds}</div>

      {/* Celestial Bodies */}
      {celestialBodies.map((body, i) => (
        <div key={i} className={`absolute ${body.className}`} style={body.style} />
      ))}

      {/* Faint Galactic Swirl / Aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-gradient-to-tr from-blue-800/20 via-purple-800/20 to-indigo-800/20 rounded-full blur-3xl opacity-50 animate-slow-swirl" />

      {/* Moon / Lunar Symbol (optional, but fits astrology) */}
      <div className="absolute w-28 h-28 bg-gradient-to-br from-gray-300 via-slate-400 to-gray-600 rounded-full top-60 right-20 shadow-[0_0_60px_16px_rgba(200,200,255,0.2)] animate-float-gentle"
        style={{ animationDuration: '9s', filter: 'blur(0.5px)' }}
      />
    </div>
  );
};

export default AstrologerCosmicBackground;
