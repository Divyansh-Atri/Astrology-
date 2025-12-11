import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';

// Real Vedic Choghadiya sequence for Day (Sunrise to Sunset)
const dayChoghadiya = [
    { name: 'Udveg', quality: 'bad', color: '#ef4444' },
    { name: 'Char', quality: 'good', color: '#22c55e' },
    { name: 'Labh', quality: 'good', color: '#22c55e' },
    { name: 'Amrit', quality: 'best', color: '#10b981' },
    { name: 'Kaal', quality: 'bad', color: '#dc2626' },
    { name: 'Shubh', quality: 'good', color: '#22c55e' },
    { name: 'Rog', quality: 'bad', color: '#ef4444' },
    { name: 'Udveg', quality: 'bad', color: '#ef4444' },
];

// Real Vedic Choghadiya sequence for Night (Sunset to Sunrise)
const nightChoghadiya = [
    { name: 'Shubh', quality: 'good', color: '#22c55e' },
    { name: 'Amrit', quality: 'best', color: '#10b981' },
    { name: 'Char', quality: 'good', color: '#22c55e' },
    { name: 'Rog', quality: 'bad', color: '#ef4444' },
    { name: 'Kaal', quality: 'bad', color: '#dc2626' },
    { name: 'Labh', quality: 'good', color: '#22c55e' },
    { name: 'Udveg', quality: 'bad', color: '#ef4444' },
    { name: 'Shubh', quality: 'good', color: '#22c55e' },
];

// Vedic Hora sequence (planetary hours) - starts with day lord
const horaSequence = ['Sun', 'Venus', 'Mercury', 'Moon', 'Saturn', 'Jupiter', 'Mars'];
const horaColors = {
    'Sun': '#f59e0b',
    'Venus': '#ec4899',
    'Mercury': '#10b981',
    'Moon': '#3b82f6',
    'Saturn': '#6366f1',
    'Jupiter': '#f59e0b',
    'Mars': '#ef4444',
};

const KaalChakra = () => {
    const [currentTime, setCurrentTime] = useState(new Date());
    const [currentChoghadiya, setCurrentChoghadiya] = useState(null);
    const [currentHora, setCurrentHora] = useState(null);
    const [timeToNextShift, setTimeToNextShift] = useState(0);

    // Approximate sunrise and sunset for demonstration (6:30 AM - 6:00 PM)
    // In production, this should use actual location-based calculations
    const sunriseHour = 6.5; // 6:30 AM
    const sunsetHour = 18; // 6:00 PM

    const calculateVedicTime = () => {
        const now = new Date();
        const hours = now.getHours();
        const minutes = now.getMinutes();
        const currentDecimalHour = hours + minutes / 60;

        // Determine if it's day or night
        const isDay = currentDecimalHour >= sunriseHour && currentDecimalHour < sunsetHour;

        // Calculate day/night duration
        const dayDuration = sunsetHour - sunriseHour; // ~11.5 hours
        const nightDuration = 24 - dayDuration; // ~12.5 hours

        let choghadiyaDuration, choghadiyaIndex, timeInPeriod;

        if (isDay) {
            // Day Choghadiya calculation
            choghadiyaDuration = dayDuration / 8; // Divide day into 8 parts
            timeInPeriod = currentDecimalHour - sunriseHour;
            choghadiyaIndex = Math.floor(timeInPeriod / choghadiyaDuration);
            setCurrentChoghadiya(dayChoghadiya[Math.min(choghadiyaIndex, 7)]);
        } else {
            // Night Choghadiya calculation
            choghadiyaDuration = nightDuration / 8; // Divide night into 8 parts
            if (currentDecimalHour >= sunsetHour) {
                timeInPeriod = currentDecimalHour - sunsetHour;
            } else {
                timeInPeriod = (24 - sunsetHour) + currentDecimalHour;
            }
            choghadiyaIndex = Math.floor(timeInPeriod / choghadiyaDuration);
            setCurrentChoghadiya(nightChoghadiya[Math.min(choghadiyaIndex, 7)]);
        }

        // Calculate Hora (Planetary Hour)
        // Vedic Hora: First hora of the day is ruled by the day lord
        // For simplicity, using Sunday as reference (Sun's day)
        const dayOfWeek = now.getDay(); // 0 = Sunday
        const horasSinceSunrise = Math.floor(timeInPeriod / 1); // Each hora is ~1 hour
        const horaIndex = (dayOfWeek + horasSinceSunrise) % 7;
        const horaPlanet = horaSequence[horaIndex];
        setCurrentHora({ planet: horaPlanet, color: horaColors[horaPlanet] });

        // Calculate time to next shift
        const timeInCurrentChoghadiya = timeInPeriod % choghadiyaDuration;
        const timeToNext = (choghadiyaDuration - timeInCurrentChoghadiya) * 3600; // Convert to seconds
        setTimeToNextShift(Math.floor(timeToNext));
    };

    useEffect(() => {
        calculateVedicTime();
        const timer = setInterval(() => {
            setCurrentTime(new Date());
            calculateVedicTime();
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    const needleRotation = (currentTime.getHours() % 12) * 30 + (currentTime.getMinutes() / 60) * 30;

    if (!currentChoghadiya || !currentHora) {
        return <div className="py-24 text-center text-zinc-400">Calculating cosmic time...</div>;
    }

    return (
        <section className="py-24 bg-zinc-800/30 relative overflow-hidden">
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-amber-500 rounded-full"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-amber-500 rounded-full"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-sm font-medium mb-4">
                        <Clock className="w-4 h-4" />
                        <span>Cosmic Time</span>
                    </div>
                    <h2 className="text-5xl font-bold text-zinc-100 mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                        Kaal Chakra
                    </h2>
                    <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full"></div>
                    <p className="text-xl text-zinc-400 max-w-2xl mx-auto mt-6">
                        The Vedic Time Machine - Navigate cosmic energies throughout the day
                    </p>
                    <div className="mt-4 max-w-2xl mx-auto bg-amber-500/10 border border-amber-500/20 rounded-lg p-3">
                        <p className="text-xs text-amber-400">
                            <strong>Note:</strong> Calculations use approximate sunrise (6:30 AM) and sunset (6:00 PM). For precise Muhurta calculations based on your exact location and coordinates, please consult with Pandit Bhushan Ji.
                        </p>
                    </div>
                </div>

                <div className="max-w-4xl mx-auto">
                    <div className="relative w-full aspect-square max-w-lg mx-auto">
                        {/* Outer Ring - Choghadiya */}
                        <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 200 200">
                            {(currentTime.getHours() >= sunriseHour && currentTime.getHours() < sunsetHour ? dayChoghadiya : nightChoghadiya).map((chog, i) => {
                                const startAngle = (i * 360) / 8;
                                const endAngle = ((i + 1) * 360) / 8;
                                const largeArc = 0;

                                const startRad = (startAngle * Math.PI) / 180;
                                const endRad = (endAngle * Math.PI) / 180;

                                const x1 = 100 + 85 * Math.cos(startRad);
                                const y1 = 100 + 85 * Math.sin(startRad);
                                const x2 = 100 + 85 * Math.cos(endRad);
                                const y2 = 100 + 85 * Math.sin(endRad);

                                const x3 = 100 + 70 * Math.cos(endRad);
                                const y3 = 100 + 70 * Math.sin(endRad);
                                const x4 = 100 + 70 * Math.cos(startRad);
                                const y4 = 100 + 70 * Math.sin(startRad);

                                return (
                                    <g key={i}>
                                        <path
                                            d={`M ${x1} ${y1} A 85 85 0 ${largeArc} 1 ${x2} ${y2} L ${x3} ${y3} A 70 70 0 ${largeArc} 0 ${x4} ${y4} Z`}
                                            fill={chog.color}
                                            opacity={chog.name === currentChoghadiya.name ? "0.6" : "0.2"}
                                            stroke="#fbbf24"
                                            strokeWidth="0.5"
                                        />
                                    </g>
                                );
                            })}
                        </svg>

                        {/* Inner Ring - Hora */}
                        <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 200 200">
                            {horaSequence.map((hora, i) => {
                                const startAngle = (i * 360) / 7;
                                const endAngle = ((i + 1) * 360) / 7;
                                const largeArc = 0;

                                const startRad = (startAngle * Math.PI) / 180;
                                const endRad = (endAngle * Math.PI) / 180;

                                const x1 = 100 + 65 * Math.cos(startRad);
                                const y1 = 100 + 65 * Math.sin(startRad);
                                const x2 = 100 + 65 * Math.cos(endRad);
                                const y2 = 100 + 65 * Math.sin(endRad);

                                const x3 = 100 + 50 * Math.cos(endRad);
                                const y3 = 100 + 50 * Math.sin(endRad);
                                const x4 = 100 + 50 * Math.cos(startRad);
                                const y4 = 100 + 50 * Math.sin(startRad);

                                return (
                                    <path
                                        key={i}
                                        d={`M ${x1} ${y1} A 65 65 0 ${largeArc} 1 ${x2} ${y2} L ${x3} ${y3} A 50 50 0 ${largeArc} 0 ${x4} ${y4} Z`}
                                        fill={horaColors[hora]}
                                        opacity={hora === currentHora.planet ? "0.6" : "0.3"}
                                        stroke="#fbbf24"
                                        strokeWidth="0.5"
                                    />
                                );
                            })}
                        </svg>

                        {/* Needle */}
                        <motion.div
                            className="absolute inset-0 flex items-center justify-center"
                            animate={{ rotate: needleRotation }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="w-1 h-32 bg-gradient-to-t from-amber-500 to-transparent origin-bottom"></div>
                        </motion.div>

                        {/* Center Display */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="bg-zinc-900/90 backdrop-blur-sm border-2 border-amber-500 rounded-full w-32 h-32 flex flex-col items-center justify-center">
                                <div className="text-xs text-amber-500 font-semibold mb-1">Next Shift</div>
                                <div className="text-2xl font-mono font-bold text-white">{formatTime(timeToNextShift)}</div>
                            </div>
                        </div>
                    </div>

                    {/* Info Cards */}
                    <div className="grid md:grid-cols-2 gap-6 mt-12">
                        <div className="bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 rounded-2xl p-6">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-4 h-4 rounded-full" style={{ backgroundColor: currentHora.color }}></div>
                                <h3 className="text-lg font-semibold text-white">Current Hora</h3>
                            </div>
                            <p className="text-3xl font-bold text-amber-500 font-display">{currentHora.planet}</p>
                            <p className="text-sm text-zinc-400 mt-2">Ruling planet for this hour</p>
                        </div>

                        <div className="bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 rounded-2xl p-6">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-4 h-4 rounded-full" style={{ backgroundColor: currentChoghadiya.color }}></div>
                                <h3 className="text-lg font-semibold text-white">Current Choghadiya</h3>
                            </div>
                            <p className="text-3xl font-bold text-amber-500 font-display">{currentChoghadiya.name}</p>
                            <p className="text-sm text-zinc-400 mt-2 capitalize">Quality: {currentChoghadiya.quality}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default KaalChakra;
