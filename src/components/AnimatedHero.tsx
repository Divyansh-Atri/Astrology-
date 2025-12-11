import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const AnimatedHero = ({ scrollToBooking }) => {
    return (
        <section className="relative py-20 lg:py-32 overflow-hidden">
            {/* Animated Background Effects */}
            <div className="absolute inset-0">
                {/* Gradient Orbs */}
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute top-20 left-10 w-96 h-96 bg-amber-500/30 rounded-full blur-3xl"
                />
                <motion.div
                    animate={{
                        scale: [1.2, 1, 1.2],
                        opacity: [0.2, 0.4, 0.2],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-orange-500/20 rounded-full blur-3xl"
                />

                {/* Floating Particles */}
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-amber-400 rounded-full"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            y: [0, -30, 0],
                            opacity: [0, 1, 0],
                            scale: [0, 1.5, 0],
                        }}
                        transition={{
                            duration: 3 + Math.random() * 2,
                            repeat: Infinity,
                            delay: Math.random() * 2,
                        }}
                    />
                ))}
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left: Hero Content */}
                    <div className="space-y-8">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-sm font-medium backdrop-blur-sm"
                        >
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            >
                                <Sparkles className="w-4 h-4" />
                            </motion.div>
                            <span>Ancient Wisdom • Modern Guidance</span>
                        </motion.div>

                        <div className="space-y-4">
                            <motion.h1
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="text-5xl md:text-7xl font-bold leading-tight"
                                style={{ fontFamily: 'Playfair Display, serif' }}
                            >
                                <motion.span
                                    className="block text-zinc-100"
                                    animate={{
                                        textShadow: [
                                            "0 0 20px rgba(251, 191, 36, 0)",
                                            "0 0 20px rgba(251, 191, 36, 0.3)",
                                            "0 0 20px rgba(251, 191, 36, 0)",
                                        ]
                                    }}
                                    transition={{ duration: 3, repeat: Infinity }}
                                >
                                    Discover Your
                                </motion.span>
                                <motion.span
                                    className="relative inline-block"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.8, delay: 0.5 }}
                                >
                                    <motion.span
                                        className="bg-gradient-to-r from-amber-400 via-orange-500 to-amber-400 bg-clip-text text-transparent"
                                        style={{ backgroundSize: "200% 200%" }}
                                    >
                                        Cosmic Destiny
                                    </motion.span>
                                    <motion.div
                                        className="absolute -inset-2 bg-gradient-to-r from-amber-500/20 to-orange-500/20 blur-xl -z-10"
                                        animate={{
                                            opacity: [0.5, 1, 0.5],
                                            scale: [1, 1.1, 1],
                                        }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                    />
                                </motion.span>
                            </motion.h1>
                        </div>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="text-xl text-zinc-400 leading-relaxed max-w-xl"
                        >
                            Unlock the mysteries of your life through ancient Vedic wisdom. Get personalized astrological insights to navigate your journey with clarity and confidence.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="flex flex-wrap gap-4"
                        >
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Button
                                    onClick={scrollToBooking}
                                    size="lg"
                                    className="bg-amber-500 hover:bg-amber-600 text-zinc-900 px-8 font-semibold shadow-lg shadow-amber-500/20 relative overflow-hidden group"
                                >
                                    <motion.div
                                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                                        animate={{ x: ["-100%", "100%"] }}
                                        transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                                    />
                                    <span className="relative z-10 flex items-center gap-2">
                                        Schedule Reading <ArrowRight className="w-4 h-4" />
                                    </span>
                                </Button>
                            </motion.div>
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Button
                                    variant="outline"
                                    size="lg"
                                    className="border-zinc-700 text-zinc-300 hover:bg-zinc-800 hover:text-amber-500 hover:border-amber-500/50 transition-all duration-300"
                                >
                                    <a href="#services">View Services</a>
                                </Button>
                            </motion.div>
                        </motion.div>

                        {/* Animated Stats */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                            className="grid grid-cols-3 gap-8 pt-8 border-t border-zinc-800"
                        >
                            {[
                                { value: "40K+", label: "Happy Clients" },
                                { value: "40+", label: "Years Experience" },
                                { value: "9.8/10", label: "Rating" }
                            ].map((stat, i) => (
                                <motion.div
                                    key={stat.label}
                                    whileHover={{ scale: 1.1 }}
                                    className="cursor-pointer"
                                >
                                    <motion.div
                                        className="text-3xl font-bold text-amber-500"
                                        animate={{
                                            textShadow: [
                                                "0 0 10px rgba(251, 191, 36, 0.5)",
                                                "0 0 20px rgba(251, 191, 36, 0.8)",
                                                "0 0 10px rgba(251, 191, 36, 0.5)",
                                            ]
                                        }}
                                        transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                                    >
                                        {stat.value}
                                    </motion.div>
                                    <div className="text-sm text-zinc-500 mt-1">{stat.label}</div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Right: Pandit Ji Profile */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="relative"
                    >
                        <motion.div
                            animate={{
                                scale: [1, 1.05, 1],
                                rotate: [0, 2, 0],
                            }}
                            transition={{ duration: 5, repeat: Infinity }}
                            className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-orange-500/20 rounded-3xl blur-2xl"
                        />
                        <div className="relative bg-zinc-800/50 rounded-3xl p-2 border border-zinc-700/50 backdrop-blur-sm">
                            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
                                <img
                                    src="/bhushan.jpg"
                                    alt="Pandit Bhushan Ji"
                                    className="w-full h-full object-cover object-top"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent"></div>
                                <motion.div
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 1 }}
                                    className="absolute bottom-6 left-6 right-6"
                                >
                                    <p className="text-amber-500 font-semibold tracking-wider text-sm uppercase mb-1">Vedic Astrologer</p>
                                    <h3 className="text-3xl font-bold text-white" style={{ fontFamily: 'Playfair Display, serif' }}>
                                        Pandit Bhushan Ji
                                    </h3>
                                </motion.div>
                            </div>
                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 1.2 }}
                                className="p-6 space-y-4"
                            >
                                <div className="flex items-center gap-3 text-zinc-400">
                                    <MapPin className="text-amber-500 w-5 h-5 flex-shrink-0" />
                                    <span>Based in Ujjain & Kullu</span>
                                </div>
                                <p className="text-zinc-400 leading-relaxed">
                                    With over 40 years of experience in Vedic traditions, guiding thousands of souls towards their true path using ancient wisdom and modern understanding.
                                </p>
                            </motion.div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default AnimatedHero;
