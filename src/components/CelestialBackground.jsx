import React from 'react';

const random = (min, max) => Math.random() * (max - min) + min;

const CelestialBackground = () => {
  // Twinkling stars
  const stars = Array.from({ length: 120 }).map((_, i) => {
    const size = random(1, 2.5);
    const opacity = random(0.4, 1);
    const twinkle = random(0.3, 1.1); // faster twinkle
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
          filter: 'blur(0.5px)',
          animation: `twinkle ${twinkle}s infinite alternate`,
          animationDelay: `${random(0, 0.000001)}s`
        }}
      />
    );
  });

  // More shooting stars, random intervals
  const shootingStars = Array.from({ length: 10 }).map((_, i) => (
    <div
      key={`shooting-star-${i}`}
      className="absolute h-0.5 bg-gradient-to-r from-white via-white/80 to-transparent rounded-full pointer-events-none"
      style={{
        left: `${random(5, 95)}%`,
        top: `${random(5, 90)}%`,
        width: `${random(100, 220)}px`,
        opacity: 0.7,
        animation: `shooting-star 2s linear ${random(0, 14)}s infinite`
      }}
    />
  ));

  // Floating cosmic dust particles
  const dustParticles = Array.from({ length: 30 }).map((_, i) => {
    const size = random(2, 6);
    const duration = random(8, 18);
    const delay = random(0, 10);
    return (
      <div
        key={`dust-${i}`}
        className="absolute rounded-full pointer-events-none"
        style={{
          left: `${random(0, 100)}%`,
          top: `${random(0, 100)}%`,
          width: `${size}px`,
          height: `${size}px`,
          background: 'rgba(255,255,255,0.08)',
          filter: 'blur(2px)',
          animation: `float ${duration}s ease-in-out ${delay}s infinite alternate`
        }}
      />
    );
  });

  // Floating planets (no orbits)
  const planets = [
    {
      className: "w-12 h-12 bg-gradient-to-br from-pink-400 to-pink-700 rounded-full shadow-[0_0_32px_8px_rgba(255,100,180,0.3)] animate-float",
      style: { top: "18%", left: "12%", animationDuration: "8s", filter: "blur(0.1px)" }
    },
    {
      className: "w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-700 rounded-full shadow-[0_0_24px_6px_rgba(100,180,255,0.3)] animate-float",
      style: { top: "70%", left: "20%", animationDuration: "10s", filter: "blur(0.1px)" }
    },
    {
      className: "w-10 h-10 bg-gradient-to-br from-yellow-300 to-orange-500 rounded-full shadow-[0_0_20px_4px_rgba(255,200,80,0.3)] animate-float",
      style: { top: "60%", left: "80%", animationDuration: "12s", filter: "blur(0.1px)" }
    },
    {
      className: "w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-700 rounded-full shadow-[0_0_40px_10px_rgba(180,100,255,0.3)] animate-float",
      style: { top: "30%", left: "70%", animationDuration: "14s", filter: "blur(0.1px)" }
    }
  ];

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none select-none">
      {/* Deep cosmic gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a1440] via-[#2d1e5e] to-[#0a0a23] opacity-95" />

      {/* Stars */}
      <div className="absolute inset-0">{stars}</div>

      {/* Shooting Stars */}
      <div className="absolute inset-0">{shootingStars}</div>

      {/* Cosmic Dust */}
      <div className="absolute inset-0">{dustParticles}</div>

      {/* Sun with glow and slow movement */}
      <div className="absolute w-24 h-24 bg-gradient-to-br from-yellow-300 via-orange-400 to-orange-600 rounded-full top-16 right-16 shadow-[0_0_80px_20px_rgba(255,200,80,0.4)] animate-spin-slow"
        style={{ animationDuration: '24s', filter: 'blur(0.5px)' }}
      />

      {/* Moon with glow and floating */}
      <div className="absolute w-16 h-16 bg-gradient-to-br from-slate-100 via-slate-300 to-slate-500 rounded-full top-32 left-16 shadow-[0_0_40px_10px_rgba(200,200,255,0.3)] animate-float"
        style={{ animationDuration: '7s', filter: 'blur(0.2px)' }}
      />

      {/* Floating Planets */}
      {planets.map((planet, i) => (
        <div key={i} className={`absolute ${planet.className}`} style={planet.style} />
      ))}

      {/* Subtle aurora effect */}
      <div className="absolute left-1/4 top-1/3 w-1/2 h-1/4 bg-gradient-to-r from-purple-500/30 via-pink-400/20 to-blue-400/20 blur-3xl opacity-60 rounded-full animate-aurora" />
    </div>
  );
};

export default CelestialBackground;

/*
@keyframes twinkle {
  to { opacity: 0.2; }
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
