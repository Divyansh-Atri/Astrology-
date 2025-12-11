import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
    {
        question: 'Why is Vedic Astrology accurate?',
        answer: 'Vedic Astrology is based on the precise astronomical positions of planets at the time of birth. It uses the Sidereal Zodiac, which accounts for the precession of equinoxes, making it astronomically accurate. With over 5000 years of refinement, it provides deep insights into karma, life patterns, and cosmic influences.'
    },
    {
        question: 'What details do you need for a reading?',
        answer: 'For an accurate reading, we need your exact date of birth, time of birth (as precise as possible), and place of birth. The time is crucial as even a few minutes can change your ascendant (Lagna) and house positions, significantly affecting the reading.'
    },
    {
        question: 'How does online consultation work?',
        answer: 'Our online consultations are conducted via video call or phone. After booking, you\'ll receive a confirmation with the scheduled time. During the session, Pandit Ji will analyze your birth chart, discuss your concerns, and provide personalized remedies and guidance.'
    },
    {
        question: 'How long does a consultation take?',
        answer: 'A standard consultation typically lasts 45-60 minutes. This includes chart analysis, discussion of your specific questions, and detailed remedy suggestions. For in-depth readings like marriage compatibility or career analysis, sessions may extend to 90 minutes.'
    },
    {
        question: 'What are gemstone remedies?',
        answer: 'Gemstones are powerful tools in Vedic astrology that channel specific planetary energies. Each gemstone corresponds to a planet and can strengthen its positive influences or mitigate negative effects. We recommend gemstones only after thorough chart analysis to ensure they\'re suitable for you.'
    },
    {
        question: 'Can astrology predict the future?',
        answer: 'Vedic astrology reveals karmic patterns and planetary periods (Dashas) that influence your life. While it shows probable outcomes based on current planetary positions, you always have free will. Astrology is a guide to help you make informed decisions and navigate life\'s challenges wisely.'
    },
    {
        question: 'How often should I get a reading?',
        answer: 'We recommend an annual reading to understand the year ahead, especially during your birthday month. Additional consultations can be helpful during major life transitions, important decisions, or when facing specific challenges. However, avoid over-dependence—use astrology as a guide, not a crutch.'
    },
];

const Jigyasa = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-24 relative overflow-hidden">
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-10 right-10 w-72 h-72 bg-amber-500 rounded-full blur-3xl"></div>
                <div className="absolute bottom-10 left-10 w-72 h-72 bg-orange-500 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-6 max-w-4xl relative z-10">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-sm font-medium mb-4">
                        <span>❓</span>
                        <span>Questions & Answers</span>
                    </div>
                    <h2 className="text-5xl font-bold text-zinc-100 mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                        Jigyasa
                    </h2>
                    <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full"></div>
                    <p className="text-xl text-zinc-400 max-w-2xl mx-auto mt-6">
                        Curiosity leads to wisdom. Find answers to common questions
                    </p>
                </div>

                {/* FAQ Accordion */}
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                            className="bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 rounded-2xl overflow-hidden hover:border-amber-500/50 transition-all duration-300"
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full px-6 py-5 flex items-center justify-between text-left group"
                            >
                                <span className="text-lg font-semibold text-white group-hover:text-amber-500 transition-colors pr-4">
                                    {faq.question}
                                </span>
                                <motion.div
                                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="flex-shrink-0"
                                >
                                    <ChevronDown className={`w-6 h-6 ${openIndex === index ? 'text-amber-500' : 'text-zinc-400'}`} />
                                </motion.div>
                            </button>

                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                                        className="overflow-hidden"
                                    >
                                        <div className="px-6 pb-5 pt-0">
                                            <div className="border-t border-zinc-700/50 pt-4">
                                                <p className="text-zinc-300 leading-relaxed">
                                                    {faq.answer}
                                                </p>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Jigyasa;
