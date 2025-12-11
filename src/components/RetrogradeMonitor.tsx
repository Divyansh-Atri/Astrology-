import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle } from 'lucide-react';

const planets = [
    { name: 'Mercury', status: 'retrograde', sanskrit: 'Budh', influence: 'Communication & Travel' },
    { name: 'Venus', status: 'direct', sanskrit: 'Shukra', influence: 'Love & Relationships' },
    { name: 'Mars', status: 'direct', sanskrit: 'Mangal', influence: 'Energy & Action' },
    { name: 'Jupiter', status: 'direct', sanskrit: 'Guru', influence: 'Wisdom & Growth' },
    { name: 'Saturn', status: 'retrograde', sanskrit: 'Shani', influence: 'Discipline & Karma' },
];

const RetrogradeMonitor = () => {
    return (
        <section className="py-24 relative overflow-hidden">
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-10 right-10 w-96 h-96 bg-orange-500 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-500 text-sm font-medium mb-4">
                        <AlertTriangle className="w-4 h-4" />
                        <span>Planetary Status</span>
                    </div>
                    <h2 className="text-5xl font-bold text-zinc-100 mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                        Retrograde Monitor
                    </h2>
                    <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full"></div>
                    <p className="text-xl text-zinc-400 max-w-2xl mx-auto mt-6">
                        Real-time status of major planetary movements affecting your life
                    </p>
                </div>

                <div className="max-w-4xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {planets.map((planet, index) => (
                        <motion.div
                            key={planet.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 rounded-2xl p-6 hover:border-amber-500/50 transition-all duration-300"
                        >
                            {/* Status Indicator */}
                            <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center gap-3">
                                    <div className="relative">
                                        {planet.status === 'retrograde' ? (
                                            <motion.div
                                                animate={{
                                                    scale: [1, 1.2, 1],
                                                    opacity: [0.6, 1, 0.6]
                                                }}
                                                transition={{
                                                    duration: 2,
                                                    repeat: Infinity,
                                                    ease: "easeInOut"
                                                }}
                                                className="w-4 h-4 rounded-full bg-orange-500 shadow-lg shadow-orange-500/50"
                                            />
                                        ) : (
                                            <div className="w-4 h-4 rounded-full bg-green-500 shadow-lg shadow-green-500/50" />
                                        )}
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white" style={{ fontFamily: 'Playfair Display, serif' }}>
                                            {planet.name}
                                        </h3>
                                        <p className="text-xs text-zinc-500">{planet.sanskrit}</p>
                                    </div>
                                </div>

                                {planet.status === 'retrograde' && (
                                    <div className="bg-orange-500/20 text-orange-500 text-xs font-semibold px-3 py-1 rounded-full border border-orange-500/30">
                                        Vakri
                                    </div>
                                )}
                            </div>

                            {/* Planet Info */}
                            <div className="space-y-3">
                                <div className="flex items-center justify-between text-sm">
                                    <span className="text-zinc-500">Status:</span>
                                    <span className={`font-semibold capitalize ${planet.status === 'retrograde' ? 'text-orange-500' : 'text-green-500'
                                        }`}>
                                        {planet.status}
                                    </span>
                                </div>

                                <div className="pt-3 border-t border-zinc-700/50">
                                    <p className="text-xs text-zinc-500 mb-1">Influences</p>
                                    <p className="text-sm text-zinc-300">{planet.influence}</p>
                                </div>

                                {planet.status === 'retrograde' && (
                                    <div className="bg-orange-500/10 rounded-lg p-3 border border-orange-500/20">
                                        <p className="text-xs text-orange-400 leading-relaxed">
                                            ⚠️ Exercise caution in matters related to {planet.influence.toLowerCase()}
                                        </p>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* System Status Summary */}
                <div className="mt-12 max-w-2xl mx-auto bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 rounded-2xl p-6">
                    <div className="flex items-center justify-between">
                        <div>
                            <h3 className="text-lg font-semibold text-white mb-1">Solar System Status</h3>
                            <p className="text-sm text-zinc-400">
                                {planets.filter(p => p.status === 'retrograde').length} planet(s) in retrograde motion
                            </p>
                        </div>
                        <div className="flex gap-4">
                            <div className="text-center">
                                <div className="text-2xl font-bold text-green-500">
                                    {planets.filter(p => p.status === 'direct').length}
                                </div>
                                <div className="text-xs text-zinc-500">Direct</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-orange-500">
                                    {planets.filter(p => p.status === 'retrograde').length}
                                </div>
                                <div className="text-xs text-zinc-500">Retrograde</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RetrogradeMonitor;
