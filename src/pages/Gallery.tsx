import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';

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
    <div className="min-h-screen bg-white">
      {/* Top Info Bar */}
      <div className="bg-white text-gray-600 py-2 border-b">
        <div className="container mx-auto px-6 flex flex-wrap justify-end gap-6 text-sm">
          <a href="tel:+1234567890" className="flex items-center gap-2">
            <Phone size={14} />
            <span>Call Us: +1234567890</span>
          </a>
          <a href="mailto:info@example.com" className="flex items-center gap-2">
            <Mail size={14} />
            <span>info@example.com</span>
          </a>
          <div className="flex items-center gap-2">
            <MapPin size={14} />
            <span>Ujjain</span>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-[#B91C1C] text-white">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold">
              Shambhav Jyotish
            </div>
            <div className="flex items-center gap-8">
              <Link to="/" className="hover:text-yellow-200 transition-colors">Home</Link>
              <Link to="/gallery" className="hover:text-yellow-200 transition-colors">Gallery</Link>
              <Link to="/gallery/stone" className="hover:text-yellow-200 transition-colors">Stones</Link>
              <a href="/#booking" className="bg-white text-[#B91C1C] px-4 py-2 rounded-md font-semibold hover:bg-yellow-50 transition-colors">
                Book Now
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Page Header */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-900">
            Our Gallery
          </h1>
          <p className="text-xl text-gray-600 text-center mt-4 max-w-2xl mx-auto">
            A curated collection of moments, symbols, and sacred items from our journey.
          </p>
        </div>
      </div>

      {/* Gallery Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {images.map((filename) => (
              <div key={filename} className="overflow-hidden rounded-lg shadow-lg border border-gray-100">
                <img
                  src={`/gallery/${filename}`}
                  alt={filename}
                  className="w-full h-80 object-cover object-center hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#B91C1C] text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-lg font-semibold mb-2">Shambhav Jyotish</p>
          <p className="text-sm opacity-75">&copy; 2024 Shambhav Jyotish. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Gallery; 