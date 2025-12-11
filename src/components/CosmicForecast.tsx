import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const zodiacSigns = [
    { name: 'Aries', sanskrit: 'Mesh', icon: '♈', forecast: 'Today brings new opportunities for leadership. Your natural courage will be tested, but trust in your instincts. A financial decision requires careful thought.', love: 75, career: 85, health: 70, luckyColor: '#ef4444', luckyColorName: 'Red', luckyNumber: 9 },
    { name: 'Taurus', sanskrit: 'Vrishabha', icon: '♉', forecast: 'Focus on stability and comfort today. Your patience will be rewarded. A creative project may require your attention. Avoid impulsive spending.', love: 80, career: 70, health: 85, luckyColor: '#22c55e', luckyColorName: 'Green', luckyNumber: 6 },
    { name: 'Gemini', sanskrit: 'Mithuna', icon: '♊', forecast: 'Communication is key today. Express your ideas clearly. A new connection could prove valuable. Stay flexible in your plans.', love: 70, career: 90, health: 65, luckyColor: '#fbbf24', luckyColorName: 'Yellow', luckyNumber: 5 },
    { name: 'Cancer', sanskrit: 'Karka', icon: '♋', forecast: 'Emotional clarity comes to you today. Trust your intuition in family matters. A nurturing gesture will strengthen bonds. Take time for self-care.', love: 90, career: 65, health: 75, luckyColor: '#e0e7ff', luckyColorName: 'Silver', luckyNumber: 2 },
    { name: 'Leo', sanskrit: 'Simha', icon: '♌', forecast: 'Your charisma shines brightly today. Leadership opportunities arise. Creative expression brings joy. Share your warmth with others.', love: 85, career: 95, health: 80, luckyColor: '#f59e0b', luckyColorName: 'Gold', luckyNumber: 1 },
    { name: 'Virgo', sanskrit: 'Kanya', icon: '♍', forecast: 'Attention to detail serves you well. Organize your priorities. Health and wellness deserve focus. A practical solution emerges.', love: 65, career: 80, health: 90, luckyColor: '#10b981', luckyColorName: 'Emerald', luckyNumber: 5 },
    { name: 'Libra', sanskrit: 'Tula', icon: '♎', forecast: 'Balance and harmony guide your day. Relationships require diplomatic touch. Aesthetic pursuits bring satisfaction. Seek fairness in all dealings.', love: 95, career: 75, health: 70, luckyColor: '#ec4899', luckyColorName: 'Pink', luckyNumber: 6 },
    { name: 'Scorpio', sanskrit: 'Vrishchika', icon: '♏', forecast: 'Deep transformation is possible today. Trust your powerful intuition. Hidden truths may surface. Embrace emotional intensity wisely.', love: 80, career: 85, health: 75, luckyColor: '#7c2d12', luckyColorName: 'Maroon', luckyNumber: 9 },
    { name: 'Sagittarius', sanskrit: 'Dhanu', icon: '♐', forecast: 'Adventure calls to your spirit. Expand your horizons through learning. Optimism attracts opportunities. Share your wisdom generously.', love: 75, career: 90, health: 85, luckyColor: '#a855f7', luckyColorName: 'Purple', luckyNumber: 3 },
    { name: 'Capricorn', sanskrit: 'Makara', icon: '♑', forecast: 'Discipline and ambition drive success. Long-term goals come into focus. Authority figures may offer guidance. Build solid foundations.', love: 70, career: 95, health: 80, luckyColor: '#1e3a8a', luckyColorName: 'Navy', luckyNumber: 8 },
    { name: 'Aquarius', sanskrit: 'Kumbha', icon: '♒', forecast: 'Innovation and originality flow freely. Community connections strengthen. Humanitarian efforts bring fulfillment. Think outside the box.', love: 85, career: 80, health: 75, luckyColor: '#06b6d4', luckyColorName: 'Turquoise', luckyNumber: 4 },
    { name: 'Pisces', sanskrit: 'Meena', icon: '♓', forecast: 'Spiritual insights deepen today. Compassion guides your actions. Creative imagination soars. Trust in the unseen forces supporting you.', love: 90, career: 70, health: 80, luckyColor: '#8b5cf6', luckyColorName: 'Lavender', luckyNumber: 7 },
];

const CosmicForecast = () => {
    const [selectedSign, setSelectedSign] = useState(null);

    return (
        <section className="py-24 bg-zinc-800/30 relative overflow-hidden">
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-amber-500 rounded-full"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 border border-amber-500 rounded-full"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-sm font-medium mb-4">
                        <span>✨</span>
                        <span>Daily Guidance</span>
                    </div>
                    <h2 className="text-5xl font-bold text-zinc-100 mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                        Cosmic Forecast
                    </h2>
                    <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full"></div>
                    <p className="text-xl text-zinc-400 max-w-2xl mx-auto mt-6">
                        Discover what the stars have aligned for you today
                    </p>
                </div>

                {/* Zodiac Signs Horizontal Scroll */}
                <div className="relative mb-8">
                    <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory">
                        {zodiacSigns.map((sign) => (
                            <motion.button
                                key={sign.name}
                                onClick={() => setSelectedSign(selectedSign?.name === sign.name ? null : sign)}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className={`flex-shrink-0 snap-center w-32 h-32 rounded-2xl border-2 transition-all duration-300 ${selectedSign?.name === sign.name
                                    ? 'bg-gradient-to-br from-amber-500 to-orange-600 border-amber-400 shadow-lg shadow-amber-500/50'
                                    : 'bg-zinc-800/50 border-zinc-700/50 hover:border-amber-500/50'
                                    }`}
                            >
                                <div className="flex flex-col items-center justify-center h-full">
                                    <div className={`text-4xl mb-2 ${selectedSign?.name === sign.name ? 'text-white' : 'text-amber-500'}`}>
                                        {sign.icon}
                                    </div>
                                    <div className={`text-sm font-semibold ${selectedSign?.name === sign.name ? 'text-white' : 'text-zinc-300'}`}>
                                        {sign.name}
                                    </div>
                                    <div className={`text-xs ${selectedSign?.name === sign.name ? 'text-amber-100' : 'text-zinc-500'}`}>
                                        {sign.sanskrit}
                                    </div>
                                </div>
                            </motion.button>
                        ))}
                    </div>
                </div>

                {/* Expanded Forecast Panel */}
                <AnimatePresence>
                    {selectedSign && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                        >
                            <div className="bg-zinc-800/50 backdrop-blur-xl border border-amber-500/30 rounded-2xl p-8">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="text-5xl">{selectedSign.icon}</div>
                                    <div>
                                        <h3 className="text-3xl font-bold text-white" style={{ fontFamily: 'Playfair Display, serif' }}>
                                            {selectedSign.name}
                                        </h3>
                                        <p className="text-amber-500">{selectedSign.sanskrit}</p>
                                    </div>
                                </div>

                                {/* Vitality HUD - Prana Meters */}
                                <div className="grid md:grid-cols-3 gap-6 mb-8">
                                    {[
                                        { label: 'Love', value: selectedSign.love, color: '#ec4899' },
                                        { label: 'Career', value: selectedSign.career, color: '#f59e0b' },
                                        { label: 'Health', value: selectedSign.health, color: '#22c55e' }
                                    ].map((meter, i) => (
                                        <div key={meter.label} className="text-center">
                                            <div className="relative w-32 h-32 mx-auto mb-3">
                                                <svg className="transform -rotate-90 w-32 h-32">
                                                    <circle
                                                        cx="64"
                                                        cy="64"
                                                        r="56"
                                                        stroke="#3f3f46"
                                                        strokeWidth="8"
                                                        fill="none"
                                                    />
                                                    <motion.circle
                                                        cx="64"
                                                        cy="64"
                                                        r="56"
                                                        stroke={meter.color}
                                                        strokeWidth="8"
                                                        fill="none"
                                                        strokeLinecap="round"
                                                        initial={{ strokeDashoffset: 352 }}
                                                        animate={{ strokeDashoffset: 352 - (352 * meter.value) / 100 }}
                                                        transition={{ duration: 1.5, delay: i * 0.2, ease: "easeOut" }}
                                                        strokeDasharray="352"
                                                    />
                                                </svg>
                                                <div className="absolute inset-0 flex items-center justify-center">
                                                    <motion.span
                                                        className="text-2xl font-bold text-white"
                                                        initial={{ opacity: 0 }}
                                                        animate={{ opacity: 1 }}
                                                        transition={{ delay: i * 0.2 + 0.5 }}
                                                    >
                                                        {meter.value}%
                                                    </motion.span>
                                                </div>
                                            </div>
                                            <p className="text-sm font-semibold text-zinc-300">{meter.label}</p>
                                        </div>
                                    ))}
                                </div>

                                {/* Cosmic Artifacts */}
                                <div className="grid md:grid-cols-2 gap-4 mb-6">
                                    <div className="bg-zinc-900/50 rounded-xl p-4 border border-zinc-700/50">
                                        <p className="text-xs text-zinc-500 mb-2">Lucky Color</p>
                                        <div className="flex items-center gap-3">
                                            <div
                                                className="w-12 h-12 rounded-lg shadow-lg animate-pulse-glow"
                                                style={{ backgroundColor: selectedSign.luckyColor }}
                                            ></div>
                                            <span className="text-lg font-semibold text-white capitalize">{selectedSign.luckyColorName}</span>
                                        </div>
                                    </div>
                                    <div className="bg-zinc-900/50 rounded-xl p-4 border border-zinc-700/50">
                                        <p className="text-xs text-zinc-500 mb-2">Lucky Number</p>
                                        <div className="flex items-center gap-3">
                                            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center shadow-lg animate-pulse-glow">
                                                <span className="text-2xl font-bold text-white">{selectedSign.luckyNumber}</span>
                                            </div>
                                            <span className="text-lg font-semibold text-white">Today's Fortune</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Forecast Text */}
                                <p className="text-lg text-zinc-300 leading-relaxed border-t border-zinc-700/50 pt-6">
                                    {selectedSign.forecast}
                                </p>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default CosmicForecast;
