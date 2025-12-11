import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const DivineIntro = ({ onComplete }) => {
    const [phase, setPhase] = useState('void'); // void -> darshan -> light -> complete

    useEffect(() => {
        // Phase 1: Void (0-0.5s)
        const timer1 = setTimeout(() => setPhase('darshan'), 500);

        // Phase 2: Darshan - Show Maa Durga (0.5-3s)
        const timer2 = setTimeout(() => setPhase('light'), 3000);

        // Phase 3: Light explosion (3-5s)
        const timer3 = setTimeout(() => {
            setPhase('complete');
            onComplete();
        }, 5000);

        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
            clearTimeout(timer3);
        };
    }, [onComplete]);

    if (phase === 'complete') return null;

    return (
        <div className="fixed inset-0 z-[9999]">
            <AnimatePresence>
                {/* Void - Total Darkness */}
                {phase === 'void' && (
                    <motion.div
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-black"
                    />
                )}

                {/* Darshan - Maa Durga appears */}
                {(phase === 'darshan' || phase === 'light') && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: phase === 'light' ? 0 : 1 }}
                        transition={{ duration: 1.5 }}
                        className="absolute inset-0 bg-black flex items-center justify-center"
                    >
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 2, ease: "easeOut" }}
                            className="relative"
                        >
                            {/* Golden Aura */}
                            <motion.div
                                animate={{
                                    scale: [1, 1.3, 1],
                                    opacity: [0.4, 0.7, 0.4]
                                }}
                                transition={{
                                    duration: 2.5,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                className="absolute inset-0 blur-3xl bg-gradient-to-r from-amber-400 via-orange-500 to-amber-400 rounded-full"
                                style={{ width: '500px', height: '500px', left: '-150px', top: '-150px' }}
                            />

                            {/* Sacred Om Symbol */}
                            <div className="relative z-10 flex flex-col items-center">
                                <motion.div
                                    animate={{
                                        scale: [1, 1.05, 1],
                                        filter: ['brightness(1)', 'brightness(1.3)', 'brightness(1)']
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                    className="text-9xl font-bold bg-gradient-to-b from-amber-200 via-amber-400 to-orange-500 bg-clip-text text-transparent"
                                    style={{ fontFamily: 'Playfair Display, serif' }}
                                >
                                    ॐ
                                </motion.div>
                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 1, duration: 1 }}
                                    className="text-amber-400 text-xl mt-6 tracking-widest"
                                    style={{ fontFamily: 'Playfair Display, serif' }}
                                >
                                    Shambhav Jyotish
                                </motion.p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}

                {/* Light - Blinding white/golden expansion */}
                {phase === 'light' && (
                    <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 30, opacity: 1 }}
                        transition={{ duration: 2, ease: "easeIn" }}
                        className="absolute inset-0 flex items-center justify-center"
                    >
                        <div
                            className="w-32 h-32 rounded-full blur-3xl"
                            style={{
                                background: 'radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(251,191,36,1) 30%, rgba(234,88,12,1) 60%, rgba(0,0,0,0) 100%)'
                            }}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default DivineIntro;
