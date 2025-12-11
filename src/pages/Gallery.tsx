import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Star, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Gallery = () => {
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

  return (
    <div className="min-h-screen bg-zinc-900 text-zinc-100">
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

          <div className="flex items-center gap-4 text-sm font-medium">
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
        </div>
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