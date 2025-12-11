import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Star, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const Gallery = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const images = [
    '20180319_080647.jpg',
    '20190203_132343.jpg',
    '20210322_110456.jpg',
    'IMG_20230409_121300.jpg',
    'IMG_20230515_125602.jpg',
    'IMG_20231215_120138.jpg',
    'IMG_20240910_081731.jpg',
    'IMG_20240805_123243.jpg',
    'IMG_20240802_093507.jpg',
    'IMG_20240721_135831.jpg',
    'IMG_20240626_182844.jpg',
  ];

  const scrollToBooking = () => {
    window.location.href = '/#booking';
  };

  return (
    <div className="min-h-screen bg-zinc-900 text-zinc-100 overflow-x-hidden">
      {/* Navigation */}
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
            <Link to="/" className="text-zinc-300 hover:text-amber-500 transition">Home</Link>
            <a href="/#services" className="text-zinc-300 hover:text-amber-500 transition">Services</a>
            <Link to="/gallery" className="text-amber-500 font-semibold">Gallery</Link>
            <Link to="/gallery/stone" className="text-zinc-300 hover:text-amber-500 transition">Gemstones</Link>
            <Button
              size="sm"
              className="bg-amber-500 hover:bg-amber-600 text-zinc-900 font-semibold shadow-lg shadow-amber-500/20"
            >
              <a href="/#booking">Book Now</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden relative">
            {/* Pulsing ring animation */}
            {!mobileMenuOpen && (
              <motion.div
                className="absolute inset-0 rounded-full bg-amber-500/30"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 0, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            )}

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="relative z-50 p-2 text-zinc-300 hover:text-amber-500 transition"
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
        </div>

        {/* Fancy Curved Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
            />

            {/* Curved Menu */}
            <motion.div
              initial={{ opacity: 0, scale: 0, x: 100, y: -100 }}
              animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
              exit={{ opacity: 0, scale: 0, x: 100, y: -100 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed top-16 right-4 z-50 md:hidden"
              style={{
                transformOrigin: 'top right'
              }}
            >
              <div className="relative">
                {/* Curved background with glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-3xl blur-xl"></div>

                {/* Main menu container */}
                <div className="relative bg-zinc-800/95 backdrop-blur-xl border-2 border-amber-500/30 rounded-3xl shadow-2xl shadow-amber-500/20 p-6 min-w-[280px]">
                  {/* Decorative top curve */}
                  <div className="absolute -top-1 right-8 w-16 h-16 bg-zinc-800/95 rounded-full border-2 border-amber-500/30 border-b-0 border-l-0"></div>

                  {/* Menu items */}
                  <div className="flex flex-col gap-1 pt-4">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 }}
                    >
                      <Link
                        to="/"
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex items-center gap-3 text-zinc-300 hover:text-amber-500 transition py-3 px-4 rounded-xl hover:bg-amber-500/10 group"
                      >
                        <span className="text-amber-500 group-hover:scale-110 transition-transform">🏠</span>
                        <span className="font-medium">Home</span>
                      </Link>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.15 }}
                    >
                      <a
                        href="/#services"
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex items-center gap-3 text-zinc-300 hover:text-amber-500 transition py-3 px-4 rounded-xl hover:bg-amber-500/10 group"
                      >
                        <span className="text-amber-500 group-hover:scale-110 transition-transform">⭐</span>
                        <span className="font-medium">Services</span>
                      </a>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <Link
                        to="/gallery"
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex items-center gap-3 text-amber-500 transition py-3 px-4 rounded-xl bg-amber-500/10 group"
                      >
                        <span className="text-amber-500 group-hover:scale-110 transition-transform">📸</span>
                        <span className="font-medium">Gallery</span>
                      </Link>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.25 }}
                    >
                      <Link
                        to="/gallery/stone"
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex items-center gap-3 text-zinc-300 hover:text-amber-500 transition py-3 px-4 rounded-xl hover:bg-amber-500/10 group"
                      >
                        <span className="text-amber-500 group-hover:scale-110 transition-transform">💎</span>
                        <span className="font-medium">Gemstones</span>
                      </Link>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="mt-3 pt-3 border-t border-zinc-700/50"
                    >
                      <Button
                        onClick={() => {
                          scrollToBooking();
                          setMobileMenuOpen(false);
                        }}
                        className="w-full bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-zinc-900 font-bold shadow-lg shadow-amber-500/30 rounded-xl py-3"
                      >
                        ✨ Book Now ✨
                      </Button>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </nav>

      {/* Page Header */}
      <div className="py-20 bg-gradient-to-b from-zinc-800/50 to-zinc-900">
        <div className="container mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-sm font-medium mb-6">
            <Star className="w-4 h-4" />
            <span>Sacred Moments</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            Our Gallery
          </h1>
          <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            A curated collection of moments, symbols, and sacred items from our spiritual journey.
          </p>
        </div>
      </div>

      {/* Gallery Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {images.map((filename, index) => (
              <div
                key={filename}
                className="group overflow-hidden rounded-2xl border border-zinc-700/50 hover:border-amber-500/50 transition-all duration-300"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-zinc-800">
                  <img
                    src={`/gallery/${filename}`}
                    alt={`Gallery image ${index + 1}`}
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-800/50 border-t border-zinc-700/50 py-16">
        <div className="container mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center shadow-lg shadow-amber-500/20">
              <Star className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-zinc-100" style={{ fontFamily: 'Playfair Display, serif' }}>
              Shambhav Jyotish
            </h3>
          </div>
          <p className="text-zinc-400 mb-6">Illuminating paths through ancient Vedic wisdom</p>
          <p className="text-sm text-zinc-500">&copy; {new Date().getFullYear()} Shambhav Jyotish. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Gallery;