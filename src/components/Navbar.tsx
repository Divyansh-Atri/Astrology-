import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const Navbar = ({ activePage = 'home' }) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 bg-zinc-900/90 backdrop-blur-md border-b border-zinc-700/50">
            <div className="container mx-auto px-4 py-3 flex items-center justify-between">
                <Link to="/" className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center shadow-lg shadow-amber-500/20">
                        <span className="text-xl">🕉️</span>
                    </div>
                    <div>
                        <h1 className="text-lg font-bold text-zinc-100" style={{ fontFamily: 'Playfair Display, serif' }}>
                            Shambhav Jyotish
                        </h1>
                        <p className="text-[10px] text-amber-500">Vedic Astrology Expert</p>
                    </div>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-4 text-sm font-medium">
                    <Link to="/" className={`transition ${activePage === 'home' ? 'text-amber-500 font-semibold' : 'text-zinc-300 hover:text-amber-500'}`}>
                        Home
                    </Link>
                    <a href="/#services" className="text-zinc-300 hover:text-amber-500 transition">
                        Services
                    </a>
                    <Link to="/gallery" className={`transition ${activePage === 'gallery' ? 'text-amber-500 font-semibold' : 'text-zinc-300 hover:text-amber-500'}`}>
                        Gallery
                    </Link>
                    <Link to="/gallery/stone" className={`transition ${activePage === 'gemstones' ? 'text-amber-500 font-semibold' : 'text-zinc-300 hover:text-amber-500'}`}>
                        Gemstones
                    </Link>
                    <Button
                        size="sm"
                        className="bg-amber-500 hover:bg-amber-600 text-zinc-900 font-semibold shadow-lg shadow-amber-500/20"
                    >
                        <a href="/#booking">Book Now</a>
                    </Button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="md:hidden p-2 text-zinc-300 hover:text-amber-500 transition"
                    aria-label="Menu"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {mobileMenuOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile Dropdown Menu */}
            {mobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="md:hidden bg-zinc-800/95 backdrop-blur-md border-t border-zinc-700/50"
                >
                    <div className="container mx-auto px-4 py-4 flex flex-col gap-3">
                        <Link
                            to="/"
                            onClick={() => setMobileMenuOpen(false)}
                            className={`transition py-2 border-b border-zinc-700/50 ${activePage === 'home' ? 'text-amber-500 font-semibold' : 'text-zinc-300 hover:text-amber-500'}`}
                        >
                            Home
                        </Link>
                        <a
                            href="/#services"
                            onClick={() => setMobileMenuOpen(false)}
                            className="text-zinc-300 hover:text-amber-500 transition py-2 border-b border-zinc-700/50"
                        >
                            Services
                        </a>
                        <Link
                            to="/gallery"
                            onClick={() => setMobileMenuOpen(false)}
                            className={`transition py-2 border-b border-zinc-700/50 ${activePage === 'gallery' ? 'text-amber-500 font-semibold' : 'text-zinc-300 hover:text-amber-500'}`}
                        >
                            Gallery
                        </Link>
                        <Link
                            to="/gallery/stone"
                            onClick={() => setMobileMenuOpen(false)}
                            className={`transition py-2 border-b border-zinc-700/50 ${activePage === 'gemstones' ? 'text-amber-500 font-semibold' : 'text-zinc-300 hover:text-amber-500'}`}
                        >
                            Gemstones
                        </Link>
                        <Button
                            onClick={() => setMobileMenuOpen(false)}
                            className="bg-amber-500 hover:bg-amber-600 text-zinc-900 font-semibold shadow-lg shadow-amber-500/20 w-full"
                        >
                            <a href="/#booking">Book Now</a>
                        </Button>
                    </div>
                </motion.div>
            )}
        </nav>
    );
};

export default Navbar;
