import React from 'react';

const random = (min, max) => Math.random() * (max - min) + min;

const CelestialBackground = () => {
  // Twinkling stars
  const stars = Array.from({ length: 100 }).map((_, i) => {
    const size = random(1, 2.5);
    const opacity = random(0.4, 1);
    const twinkle = random(1.2, 3.8);
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
          animationDelay: `${random(0, 3)}s`
        }}
      />
    );
  });

  // More shooting stars, random intervals
  const shootingStars = Array.from({ length: 8 }).map((_, i) => (
    <div
      key={`shooting-star-${i}`}
      className="absolute h-0.5 bg-gradient-to-r from-white via-white/80 to-transparent rounded-full pointer-events-none"
      style={{
        left: `${random(5, 95)}%`,
        top: `${random(5, 90)}%`,
        width: `${random(80, 180)}px`,
        opacity: 0.7,
        animation: `shooting-star 2s linear ${random(0, 12)}s infinite`
      }}
    />
  ));

  // Animated orbits with planets
  const orbits = [
    { size: 420, duration: 32, planetSize: 18, color: 'from-pink-400 to-pink-700', shadow: 'shadow-[0_0_16px_4px_rgba(255,100,180,0.3)]', offset: 0 },
    { size: 320, duration: 22, planetSize: 12, color: 'from-blue-400 to-blue-700', shadow: 'shadow-[0_0_12px_3px_rgba(100,180,255,0.3)]', offset: 120 },
    { size: 220, duration: 16, planetSize: 10, color: 'from-yellow-300 to-orange-500', shadow: 'shadow-[0_0_10px_2px_rgba(255,200,80,0.3)]', offset: 240 },
  ];

  const animatedPlanets = orbits.map((orbit, i) => (
    <div
      key={`orbit-${i}`}
      className="absolute top-1/2 left-1/2 border border-white/10 rounded-full pointer-events-none"
      style={{
        width: orbit.size,
        height: orbit.size,
        marginLeft: -orbit.size / 2,
        marginTop: -orbit.size / 2,
        animation: `orbit-spin ${orbit.duration}s linear infinite`,
        animationDelay: `-${orbit.offset}s`
      }}
    >
      <div
        className="absolute"
        style={{
          left: '50%',
          top: 0,
          transform: `translateX(-50%)`,
        }}
      >
        <div
          className={`w-[${orbit.planetSize}px] h-[${orbit.planetSize}px] bg-gradient-to-br ${orbit.color} rounded-full ${orbit.shadow} animate-planet-bounce`}
          style={{
            animationDuration: `${random(2, 4)}s`,
            filter: 'blur(0.1px)'
          }}
        />
      </div>
    </div>
  ));

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none select-none">
      {/* Deep cosmic gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a1440] via-[#2d1e5e] to-[#0a0a23] opacity-95" />

      {/* Stars */}
      <div className="absolute inset-0">{stars}</div>

      {/* Shooting Stars */}
      <div className="absolute inset-0">{shootingStars}</div>

      {/* Sun with glow and slow movement */}
      <div className="absolute w-24 h-24 bg-gradient-to-br from-yellow-300 via-orange-400 to-orange-600 rounded-full top-16 right-16 shadow-[0_0_80px_20px_rgba(255,200,80,0.4)] animate-spin-slow"
        style={{ animationDuration: '24s', filter: 'blur(0.5px)' }}
      />

      {/* Moon with glow and floating */}
      <div className="absolute w-16 h-16 bg-gradient-to-br from-slate-100 via-slate-300 to-slate-500 rounded-full top-32 left-16 shadow-[0_0_40px_10px_rgba(200,200,255,0.3)] animate-float"
        style={{ animationDuration: '7s', filter: 'blur(0.2px)' }}
      />

      {/* Planets with glow and pulse */}
      <div className="absolute w-10 h-10 bg-gradient-to-br from-red-400 to-red-700 rounded-full top-2/3 right-40 shadow-[0_0_32px_8px_rgba(255,100,100,0.3)] animate-pulse"
        style={{ animationDuration: '2.5s', filter: 'blur(0.2px)' }}
      />
      <div className="absolute w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-700 rounded-full bottom-32 left-32 shadow-[0_0_24px_6px_rgba(100,180,255,0.3)] animate-bounce"
        style={{ animationDuration: '3.5s', filter: 'blur(0.2px)' }}
      />
      <div className="absolute w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-700 rounded-full bottom-20 right-60 shadow-[0_0_32px_8px_rgba(180,100,255,0.3)] animate-pulse"
        style={{ animationDuration: '2.8s', filter: 'blur(0.2px)' }}
      />

      {/* Animated Orbits with Planets */}
      {animatedPlanets}

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
@keyframes orbit-spin {
  0% { transform: rotate(0deg);}
  100% { transform: rotate(360deg);}
}
@keyframes planet-bounce {
  0%, 100% { transform: translateY(0);}
  50% { transform: translateY(-8px);}
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
