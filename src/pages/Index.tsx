import React from 'react';
import BookingForm from '@/components/BookingForm';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Moon, Sun, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

const Index = () => {
  const services = [
    { icon: Star, title: "Birth Chart Reading", description: "Discover your cosmic blueprint and understand your life's purpose." },
    { icon: Moon, title: "Tarot Guidance", description: "Receive divine insights and clarity about your path through ancient tarot wisdom." },
    { icon: Sun, title: "Numerology Analysis", description: "Unlock the mystical power of numbers and their influence on your destiny." }
  ];

  // A simple Intersection Observer hook can be used here for scroll animations.
  // For brevity, I've omitted it, but you'd wrap sections in it.

  return (
    <div className="min-h-screen bg-zinc-900">
      <Sidebar />

      <main className="relative z-10 ml-64">
        <section className="container mx-auto px-12 py-28 text-center flex flex-col items-center">
          <h1 className="text-7xl md:text-8xl font-bold mb-6 leading-tight bg-gradient-to-r from-zinc-200 via-amber-400 to-zinc-200 bg-clip-text text-transparent" style={{ fontFamily: 'Playfair Display, serif' }}>
            Discover Your Cosmic Destiny
          </h1>
          <p className="text-xl text-zinc-400 mb-10 max-w-3xl mx-auto">
            Unlock the mysteries of the universe and find your true potential through the ancient wisdom of the stars.
          </p>
          <Link to="#booking" className="px-10 py-4 bg-amber-500 text-zinc-900 rounded-lg font-bold shadow-lg shadow-amber-500/10 hover:bg-amber-400 transition-all text-lg">
            Book a Consultation
          </Link>
        </section>

        <section className="container mx-auto px-12 py-24 flex flex-col md:flex-row items-center justify-center gap-16">
          <div className="relative w-64 h-64 md:w-80 md:h-80 flex-shrink-0">
            <div className="absolute inset-0 border-2 border-amber-500/20 rounded-full animate-spin-slow"></div>
            <img src="/bhushan.jpg" alt="Pandit Bhushan Ji" className="w-full h-full object-cover rounded-full shadow-2xl p-2 bg-zinc-900" />
          </div>
          <div className="flex-1 max-w-2xl text-center md:text-left">
            <h2 className="text-5xl md:text-6xl font-bold text-zinc-100 mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>Pandit Bhushan Ji</h2>
            <p className="text-lg text-amber-500 uppercase tracking-widest font-semibold mb-6">Astrologer · Intuitive Guide</p>
            <p className="text-zinc-400 text-xl leading-relaxed">
              With over 15 years of dedicated practice, Pandit Bhushan Ji masterfully blends ancient Vedic wisdom with modern insight to illuminate your life’s journey and empower you to find clarity, purpose, and peace.
            </p>
          </div>
        </section>

        <section className="container mx-auto px-12 py-24">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-zinc-100" style={{ fontFamily: 'Playfair Display, serif' }}>Our Services</h2>
            <div className="w-20 h-0.5 bg-amber-500 mx-auto mt-4"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-zinc-800/50 p-8 rounded-lg border border-zinc-200/10 text-center transition-all duration-300 hover:border-amber-500/50 hover:-translate-y-2">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-zinc-900 flex items-center justify-center border border-amber-500/50">
                    <service.icon className="w-8 h-8 text-amber-500" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-zinc-100 mb-3">{service.title}</h3>
                <p className="text-zinc-400 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="booking" className="container mx-auto px-12 py-24">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-5xl font-bold text-zinc-100 mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>Begin Your Journey</h2>
            <p className="text-xl text-zinc-400 mb-10">Schedule a personalized consultation and let the stars illuminate your path.</p>
            <div className="bg-zinc-800/50 p-8 rounded-lg border border-zinc-200/10">
              <BookingForm />
            </div>
          </div>
        </section>
      </main>

      {/* The footer is now integrated into the sidebar for a cleaner look */}
    </div>
  );
};

export default Index;