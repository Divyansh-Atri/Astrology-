import React from 'react';
import CelestialBackground from '@/components/CelestialBackground';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const Gallery = () => {
  return (
    <div className="min-h-screen relative bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
      <CelestialBackground />
      {/* Navigation Buttons */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-8 mb-8">
        <Link to="/" className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-bold shadow-lg hover:scale-105 transition-transform text-2xl">Home</Link>
        <span className="px-8 py-4 bg-gradient-to-r from-purple-400 to-yellow-400 text-white rounded-full font-bold shadow-lg text-2xl border-4 border-yellow-300 cursor-default">Gallery</span>
        <Link to="/gallery/stone" className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-pink-400 text-white rounded-full font-bold shadow-lg hover:scale-105 transition-transform text-2xl">Stones</Link>
      </div>
      <div className="relative z-10 min-h-screen">
        <section className="container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400 bg-clip-text text-transparent animate-fade-in">
              Gallery
            </h1>
            <p className="text-xl md:text-2xl text-purple-200 mb-8 max-w-3xl mx-auto animate-fade-in">
              Explore our collection of cosmic images, stones, and mystical artifacts.
            </p>
          </div>

          {/* Gallery Image Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-20">
            {[
              '20180319_080647.jpg',
              '20190203_132343.jpg',
              '20210322_110456.jpg',
              'IMG_20230409_121300.jpg',
              'IMG_20230515_125602.jpg',
              'IMG_20231215_103206.jpg',
              'IMG_20231215_120138.jpg',
              'IMG_20240910_081731.jpg',
              'IMG_20240805_123243.jpg',
              'IMG_20240802_093507.jpg',
              'IMG_20240721_135831.jpg',
              'IMG_20240626_182844.jpg',
              'IMG_20240619_211626.jpg',
            ].map((filename, idx) => (
              <div key={idx} className="overflow-hidden rounded-2xl shadow-lg bg-black/30 flex items-center justify-center">
                <img
                  src={`/gallery/${filename}`}
                  alt={filename}
                  className="w-full h-80 object-cover object-center transition-transform duration-300 hover:scale-105"
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          {/* Stone Page Preview */}
          {/* Removed Stones preview card */}
        </section>
        <footer className="container mx-auto px-4 py-8 text-center border-t border-purple-500/30">
          <p className="text-purple-300">
            © 2024 Celestial Wisdom. May the stars guide your journey.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Gallery; 