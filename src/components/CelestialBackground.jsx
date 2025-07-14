import React from 'react';

const random = (min, max) => Math.random() * (max - min) + min;

const CelestialBackground = () => {
  // Vibrant, fast-twinkling stars with cosmic glows
  const stars = Array.from({ length: 150 }).map((_, i) => {
    const size = random(1, 2.7);
    const opacity = random(0.6, 1);
    const twinkle = random(0.15, 0.5); // ultra-fast twinkle
    const glowColor = [
      '0 0 10px 2px #a5b4fcbb',
      '0 0 12px 3px #f472b6bb',
      '0 0 14px 4px #38bdf8cc',
      '0 0 16px 5px #facc15cc',
      '0 0 10px 2px #818cf8bb'
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
          filter: 'blur(0.6px)',
          boxShadow: glowColor[Math.floor(random(0, glowColor.length))],
          animation: `twinkle ${twinkle}s infinite alternate`,
          animationDelay: `${random(0, 0.5)}s`
        }}
      />
    );
  });

  // Dynamic, colorful shooting stars
  const shootingStars = Array.from({ length: 18 }).map((_, i) => (
    <div
      key={`shooting-star-${i}`}
      className="absolute h-0.5 rounded-full pointer-events-none"
      style={{
        left: `${random(5, 95)}%`,
        top: `${random(5, 90)}%`,
        width: `${random(100, 260)}px`,
        opacity: 0.85,
        background: `linear-gradient(90deg, #fff 0%, #60a5fa 60%, #f472b6 100%, transparent 100%)`,
        animation: `shooting-star 1.1s linear ${random(0, 7)}s infinite`
      }}
    />
  ));

  // Cosmic dust with more aurora-like colors
  const dustParticles = Array.from({ length: 40 }).map((_, i) => {
    const size = random(2, 8);
    const duration = random(8, 18);
    const delay = random(0, 10);
    const color = [
      'rgba(168,139,250,0.13)',
      'rgba(129,140,248,0.13)',
      'rgba(244,114,182,0.13)',
      'rgba(250,204,21,0.13)',
      'rgba(56,189,248,0.13)',
      'rgba(236,72,153,0.13)'
    ];
    return (
      <div
        key={`dust-${i}`}
        className="absolute rounded-full pointer-events-none"
        style={{
          left: `${random(0, 100)}%`,
          top: `${random(0, 100)}%`,
          width: `${size}px`,
          height: `${size}px`,
          background: color[Math.floor(random(0, color.length))],
          filter: 'blur(2.5px)',
          animation: `float ${duration}s ease-in-out ${delay}s infinite alternate`
        }}
      />
    );
  });

  // Planets with bold, cosmic gradients and glow
  const planets = [
    {
      className: "w-16 h-16 bg-gradient-to-br from-pink-400 via-fuchsia-600 to-violet-700 rounded-full shadow-[0_0_50px_14px_rgba(236,72,153,0.35)] animate-float",
      style: { top: "14%", left: "10%", animationDuration: "7s", filter: "blur(0.1px)" }
    },
    {
      className: "w-10 h-10 bg-gradient-to-br from-blue-400 via-cyan-400 to-indigo-700 rounded-full shadow-[0_0_32px_8px_rgba(56,189,248,0.35)] animate-float",
      style: { top: "68%", left: "22%", animationDuration: "9s", filter: "blur(0.1px)" }
    },
    {
      className: "w-14 h-14 bg-gradient-to-br from-yellow-200 via-yellow-400 to-orange-500 rounded-full shadow-[0_0_36px_10px_rgba(250,204,21,0.28)] animate-float",
      style: { top: "62%", left: "82%", animationDuration: "13s", filter: "blur(0.1px)" }
    },
    {
      className: "w-20 h-20 bg-gradient-to-br from-purple-400 via-violet-600 to-indigo-900 rounded-full shadow-[0_0_60px_16px_rgba(139,92,246,0.32)] animate-float",
      style: { top: "28%", left: "74%", animationDuration: "15s", filter: "blur(0.1px)" }
    }
  ];

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none select-none">
      {/* Deep cosmic aurora background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f1021] via-[#2d1e5e] via-60% to-[#1e293b] opacity-95" />

      {/* Stars */}
      <div className="absolute inset-0">{stars}</div>

      {/* Shooting Stars */}
      <div className="absolute inset-0">{shootingStars}</div>

      {/* Cosmic Dust */}
      <div className="absolute inset-0">{dustParticles}</div>

      {/* Sun with glow and slow movement */}
      <div className="absolute w-32 h-32 bg-gradient-to-br from-yellow-100 via-yellow-400 to-orange-500 rounded-full top-14 right-14 shadow-[0_0_100px_30px_rgba(255,220,100,0.35)] animate-spin-slow"
        style={{ animationDuration: '18s', filter: 'blur(0.4px)' }}
      />

      {/* Moon with glow and floating */}
      <div className="absolute w-20 h-20 bg-gradient-to-br from-slate-100 via-slate-300 to-slate-500 rounded-full top-32 left-16 shadow-[0_0_50px_14px_rgba(200,200,255,0.25)] animate-float"
        style={{ animationDuration: '7s', filter: 'blur(0.18px)' }}
      />

      {/* Floating Planets */}
      {planets.map((planet, i) => (
        <div key={i} className={`absolute ${planet.className}`} style={planet.style} />
      ))}

      {/* Aurora effect */}
      <div className="absolute left-1/4 top-1/3 w-1/2 h-1/4 bg-gradient-to-r from-purple-500/40 via-pink-400/30 to-blue-400/30 blur-3xl opacity-70 rounded-full animate-aurora" />
    </div>
  );
};

export default CelestialBackground;

/*
Add these keyframes to your global CSS if not present:

@keyframes twinkle {
  to { opacity: 0.15; }
}
@keyframes shooting-star {
  0% { transform: translateX(0) scaleX(1); opacity: 0; }
  10% { opacity: 1; }
  80% { opacity: 1; }
  100% { transform: translateX(200px) scaleX(1.2); opacity: 0; }
}
@keyframes spin-slow {
  0% { transform: rotate(0deg);}
  100% { transform: rotate(360deg);}
}
@keyframes float {
  0%, 100% { transform: translateY(0);}
  50% { transform: translateY(-16px);}
}
@keyframes aurora {
  0%, 100% { filter: blur(60px) brightness(1);}
  50% { filter: blur(80px) brightness(1.2);}
}
*/
