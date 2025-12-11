import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
    {
        name: 'Rajesh Kumar',
        rating: 5,
        text: 'Pandit Ji\'s guidance transformed my life. His predictions were incredibly accurate and his remedies brought peace to my family.',
        date: '2 months ago'
    },
    {
        name: 'Priya Sharma',
        rating: 5,
        text: 'The kundali matching service was exceptional. Thanks to Pandit Ji, I found my perfect life partner. Forever grateful!',
        date: '3 months ago'
    },
    {
        name: 'Amit Patel',
        rating: 5,
        text: 'His gemstone recommendations worked wonders. My business has flourished and my health has improved significantly.',
        date: '1 month ago'
    },
    {
        name: 'Sneha Reddy',
        rating: 5,
        text: 'Pandit Ji\'s Vastu consultation brought harmony to our home. The positive energy is palpable. Highly recommended!',
        date: '4 months ago'
    },
    {
        name: 'Vikram Singh',
        rating: 5,
        text: 'His career guidance was spot on. I made the right decision at the right time. Thank you for your wisdom!',
        date: '2 weeks ago'
    },
    {
        name: 'Anjali Gupta',
        rating: 5,
        text: 'The Mahadasha analysis helped me understand my life\'s challenges. His remedies brought clarity and peace.',
        date: '5 months ago'
    },
];

const Diya = ({ filled }) => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="inline-block">
        <path
            d="M12 2L15 8L22 9L17 14L18 21L12 18L6 21L7 14L2 9L9 8L12 2Z"
            fill={filled ? '#f59e0b' : '#3f3f46'}
            stroke={filled ? '#fbbf24' : '#52525b'}
            strokeWidth="1"
        />
        {filled && (
            <circle cx="12" cy="10" r="3" fill="#fbbf24" opacity="0.6" />
        )}
    </svg>
);

const KarmicEchoes = () => {
    return (
        <section className="py-24 relative overflow-hidden">
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-20 left-20 w-64 h-64 bg-amber-500 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-20 w-64 h-64 bg-orange-500 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-sm font-medium mb-4">
                        <span>🪔</span>
                        <span>Stories of Transformation</span>
                    </div>
                    <h2 className="text-5xl font-bold text-zinc-100 mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                        Karmic Echoes
                    </h2>
                    <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full"></div>
                    <p className="text-xl text-zinc-400 max-w-2xl mx-auto mt-6">
                        Hear from souls whose paths were illuminated by cosmic wisdom
                    </p>
                </div>

                {/* Masonry Grid */}
                <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="break-inside-avoid"
                        >
                            <div className="bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 rounded-2xl p-6 hover:border-amber-500/50 transition-all duration-300 relative overflow-hidden group">
                                {/* Ancient Scroll Effect */}
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

                                {/* Rating - Diyas */}
                                <div className="flex gap-1 mb-4">
                                    {[...Array(5)].map((_, i) => (
                                        <Diya key={i} filled={i < testimonial.rating} />
                                    ))}
                                </div>

                                {/* Testimonial Text */}
                                <p className="text-zinc-300 leading-relaxed mb-6 italic">
                                    "{testimonial.text}"
                                </p>

                                {/* Author Info */}
                                <div className="flex items-center justify-between pt-4 border-t border-zinc-700/50">
                                    <div>
                                        <p className="font-semibold text-white">{testimonial.name}</p>
                                    </div>
                                    <div className="text-xs text-zinc-500">
                                        {testimonial.date}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default KarmicEchoes;
