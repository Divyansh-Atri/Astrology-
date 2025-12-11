import React from 'react';
import { motion } from 'framer-motion';
import { Gem, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const relics = [
    {
        name: 'Blue Sapphire',
        sanskrit: 'Neelam',
        image: '/stones-photo/sapphire.png',
        description: 'The stone of Saturn, brings discipline, focus, and removes obstacles.',
        power: 'Protection & Prosperity'
    },
    {
        name: 'Sri Yantra',
        sanskrit: 'श्री यंत्र',
        image: '/deities/yantra.png',
        description: 'Sacred geometry for wealth, abundance, and spiritual growth.',
        power: 'Divine Abundance'
    },
    {
        name: 'Ruby',
        sanskrit: 'Manik',
        image: '/stones-photo/ruby.png',
        description: 'The stone of the Sun, enhances vitality, confidence, and leadership.',
        power: 'Energy & Authority'
    },
    {
        name: 'Emerald',
        sanskrit: 'Panna',
        image: '/stones-photo/emarld.png',
        description: 'Mercury\'s stone for intelligence, communication, and business success.',
        power: 'Wisdom & Growth'
    },
];

const SacredRelics = () => {
    return (
        <section className="py-24 bg-zinc-800/30 relative overflow-hidden">
            <div className="absolute inset-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-amber-500/10 rounded-full"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-amber-500/10 rounded-full"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-sm font-medium mb-4">
                        <Gem className="w-4 h-4" />
                        <span>Mystical Remedies</span>
                    </div>
                    <h2 className="text-5xl font-bold text-zinc-100 mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                        Sacred Relics
                    </h2>
                    <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full"></div>
                    <p className="text-xl text-zinc-400 max-w-2xl mx-auto mt-6">
                        Powerful remedies blessed with ancient wisdom and cosmic energy
                    </p>
                </div>

                {/* Relics Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {relics.map((relic, index) => (
                        <motion.div
                            key={relic.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group"
                        >
                            <div className="bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 rounded-2xl overflow-hidden hover:border-amber-500/50 transition-all duration-300 relative">
                                {/* Shimmer Effect */}
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-500/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

                                {/* Image Container */}
                                <div className="h-64 bg-gradient-to-br from-zinc-900 to-zinc-800 flex items-center justify-center p-8 relative overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    <motion.img
                                        src={relic.image}
                                        alt={relic.name}
                                        className="max-h-full max-w-full object-contain filter drop-shadow-2xl relative z-10"
                                        whileHover={{ scale: 1.1, rotate: 5 }}
                                        transition={{ duration: 0.3 }}
                                    />
                                    {/* Magical Glow */}
                                    <div className="absolute inset-0 bg-gradient-radial from-amber-500/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <div className="flex items-center justify-between mb-2">
                                        <h3 className="text-xl font-bold text-white" style={{ fontFamily: 'Playfair Display, serif' }}>
                                            {relic.name}
                                        </h3>
                                        <Sparkles className="w-5 h-5 text-amber-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </div>
                                    <p className="text-sm text-amber-500 mb-3">{relic.sanskrit}</p>
                                    <p className="text-sm text-zinc-400 leading-relaxed mb-4">
                                        {relic.description}
                                    </p>
                                    <div className="flex items-center gap-2 mb-4 text-xs text-amber-500 bg-amber-500/10 rounded-lg px-3 py-2">
                                        <span className="font-semibold">Power:</span>
                                        <span>{relic.power}</span>
                                    </div>
                                    <Button
                                        variant="outline"
                                        className="w-full border-amber-500/50 text-amber-500 hover:bg-amber-500/10 hover:border-amber-500"
                                    >
                                        Check Compatibility
                                    </Button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SacredRelics;
