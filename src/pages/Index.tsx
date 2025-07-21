import React from 'react';
import AstrologerCosmicBackground from '@/components/CelestialBackground';
import BookingForm from '@/components/BookingForm';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Moon, Sun, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  const services = [
    {
      icon: Star,
      title: "Birth Chart Reading",
      description: "Discover your cosmic blueprint and understand your life's purpose through detailed natal chart analysis."
    },
    {
      icon: Moon,
      title: "Tarot Guidance",
      description: "Receive divine insights and clarity about your path through ancient tarot wisdom."
    },
    {
      icon: Sun,
      title: "Numerology Analysis",
      description: "Unlock the mystical power of numbers and their influence on your destiny."
    }
  ];

  return (
    <div className="min-h-screen relative bg-gradient-to-br from-[#0a1026] via-[#1a1e3a] to-[#2e4a7d] overflow-x-hidden">
      {/* Animated Cosmic Background */}
      <AstrologerCosmicBackground />

      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-30 flex justify-center">
        <div className="mt-4 w-[95vw] max-w-6xl rounded-2xl bg-[#1a1e3a]/80 border border-[#ffd700]/20 shadow-xl backdrop-blur-lg flex items-center justify-between px-8 py-3 glassy-header animate-fade-in-down">
          <div className="text-2xl font-bold text-[#ffd700] tracking-wider drop-shadow-lg">Celestial Wisdom</div>
          <nav className="flex gap-4 md:gap-6">
            <Link
              to="/gallery"
              className="flex items-center gap-2 px-6 py-2 rounded-full bg-gradient-to-r from-[#2e4a7d]/80 to-[#2dd4bf]/80 border border-[#2dd4bf]/40 shadow-md text-[#fffbe6] font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-[#2dd4bf]/40 focus:outline-none focus:ring-2 focus:ring-[#2dd4bf]/40 animate-float"
            >
              <Sparkles size={20} className="text-[#ffd700] animate-spin-slow" />
              Gallery
            </Link>
            <Link
              to="/gallery/stone"
              className="flex items-center gap-2 px-6 py-2 rounded-full bg-gradient-to-r from-[#ffd700]/80 to-[#a78bfa]/80 border border-[#ffd700]/40 shadow-md text-[#1a1e3a] font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-[#ffd700]/40 focus:outline-none focus:ring-2 focus:ring-[#ffd700]/40 animate-float delay-200"
            >
              <Star size={20} className="text-[#a78bfa] animate-bounce" />
              Stones
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 pt-32 min-h-screen flex flex-col items-center">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-24 text-center animate-fade-in">
          <h1 className="text-7xl md:text-9xl font-extrabold mb-6 leading-tight bg-gradient-to-r from-[#ffd700] via-[#2dd4bf] to-[#a78bfa] bg-clip-text text-transparent animate-gradient-x drop-shadow-2xl" style={{ fontFamily: 'Playfair Display, serif' }}>
            Cosmic <br className="md:hidden" />Destiny
          </h1>
          <p className="text-xl md:text-3xl text-[#fffbe6] mb-8 max-w-4xl mx-auto leading-relaxed animate-fade-in opacity-90">
            Unlock the mysteries of the universe and discover your true potential through the ancient wisdom of the stars.
          </p>
          <div className="flex items-center justify-center gap-3 text-[#2dd4bf] animate-pulse-slow">
            <Sparkles size={28} className="text-[#ffd700] animate-twinkle" />
            <span className="text-xl md:text-2xl font-semibold">Illuminate Your Path Today</span>
            <Sparkles size={28} className="text-[#ffd700] animate-twinkle" />
          </div>
          <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-6 animate-fade-in-up">
            <Link to="/gallery" className="px-8 py-4 bg-gradient-to-r from-[#2e4a7d] to-[#2dd4bf] text-[#fffbe6] rounded-full font-bold shadow-lg hover:scale-105 hover:shadow-[#2dd4bf]/40 transition-transform text-2xl animate-float">Gallery</Link>
            <Link to="/gallery/stone" className="px-8 py-4 bg-gradient-to-r from-[#ffd700] to-[#a78bfa] text-[#1a1e3a] rounded-full font-bold shadow-lg hover:scale-105 hover:shadow-[#ffd700]/40 transition-transform text-2xl animate-float delay-200">Stones</Link>
          </div>
        </section>

        {/* Astrologer Banner - Animated, Two-Column Layout */}
        <section className="container mx-auto px-4 py-20 flex flex-col md:flex-row items-center justify-center gap-12 relative animate-fade-in-up">
          {/* Cosmic Animated Background (subtle stars/nebula) */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <div className="w-full h-full bg-gradient-to-br from-[#1a1e3a]/90 via-[#2e4a7d]/80 to-[#a78bfa]/60 rounded-3xl blur-sm opacity-90" />
            <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-[#2dd4bf]/10 rounded-full filter blur-3xl animate-pulse-light" />
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#ffd700]/10 rounded-full filter blur-3xl animate-pulse-light delay-500" />
          </div>

          {/* Photo + Glow */}
          <div className="relative z-10 flex-shrink-0 flex flex-col items-center md:items-end w-full md:w-auto animate-float">
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-br from-[#ffd700]/40 via-[#2dd4bf]/30 to-[#a78bfa]/30 rounded-full blur-2xl opacity-80 group-hover:scale-110 transition-transform duration-500 animate-float" />
              <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-[#ffd700] shadow-2xl ring-4 ring-[#2dd4bf]/40 transition-all duration-500 transform group-hover:scale-105 bg-[#1a1e3a]/30">
                <img
                  src="/bhushan.jpg"
                  alt="Pandit Bhushan Ji"
                  className="object-cover w-full h-full"
                />
              </div>
              {/* Sparkle accent */}
              <div className="absolute -top-4 -right-4 animate-spin-slow">
                <Sparkles size={36} className="text-[#ffd700]/80 drop-shadow-lg" />
              </div>
            </div>
          </div>

          {/* Textual Content */}
          <div className="relative z-10 flex-1 flex flex-col items-center md:items-start text-center md:text-left gap-6">
            {/* Name & Title */}
            <div>
              <h2 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-2 text-transparent bg-clip-text bg-gradient-to-r from-[#ffd700] via-[#2dd4bf] to-[#a78bfa] drop-shadow-lg leading-none animate-gradient-x" style={{ fontFamily: 'Playfair Display, serif', textShadow: '0 0 20px #ffd70088' }}>
                Pandit Bhushan Ji
              </h2>
              <div className="flex items-center gap-2 justify-center md:justify-start">
                <span className="uppercase tracking-widest text-base md:text-lg text-[#fffbe6] font-medium opacity-90">Astrologer</span>
                <span className="text-[#ffd700]">·</span>
                <span className="uppercase tracking-widest text-base md:text-lg text-[#fffbe6] font-medium opacity-90">Intuitive Guide</span>
                <span className="text-[#ffd700]">·</span>
                <span className="uppercase tracking-widest text-base md:text-lg text-[#fffbe6] font-medium opacity-90">Spiritual Counselor</span>
              </div>
            </div>

            {/* Quote in stylized card */}
            <blockquote className="relative bg-gradient-to-r from-[#2e4a7d]/80 to-[#a78bfa]/60 border-l-4 border-[#ffd700] rounded-xl shadow-lg px-6 py-4 mb-2 text-[#fffbe6] text-lg md:text-2xl italic font-light max-w-2xl mx-auto animate-fade-in" style={{ fontFamily: 'Georgia, serif' }}>
              <span className="absolute -left-4 top-2 text-[#ffd700] text-3xl">“</span>
              Guiding you through the cosmic currents to illuminate your path to clarity and profound self-discovery.
            </blockquote>

            {/* Description */}
            <div className="bg-[#1a1e3a]/80 backdrop-blur-md rounded-2xl shadow-lg px-6 py-4 max-w-2xl mx-auto animate-fade-in-up">
              <p className="text-[#fffbe6] text-base md:text-lg leading-relaxed">
                With <span className="text-[#ffd700] font-semibold">over 15 years</span> of dedicated practice, Pandit Bhushan Ji masterfully blends <span className="text-[#2dd4bf] font-semibold">ancient Vedic astrology</span>, <span className="text-[#a78bfa] font-semibold">insightful Tarot</span>, and <span className="text-[#ffd700] font-semibold">precise Numerology</span>. His compassionate, intuitive guidance helps you navigate life’s intricate cosmic patterns, empowering you to discover your <span className="text-[#ffd700] font-semibold">true purpose and inner peace</span>.
              </p>
            </div>

            {/* Stats as cards */}
            <div className="flex flex-wrap justify-center md:justify-start gap-6 mt-2 animate-fade-in-up">
              <div className="flex flex-col items-center bg-gradient-to-br from-[#2e4a7d]/80 to-[#2dd4bf]/60 rounded-2xl px-6 py-4 shadow-lg border border-[#2dd4bf]/40 hover:scale-105 transition-transform duration-300 min-w-[160px] animate-float">
                <Sparkles size={28} className="text-[#ffd700] mb-2" />
                <span className="text-[#fffbe6] font-bold text-xl">15+ Years</span>
                <span className="text-[#2dd4bf] text-sm">Mastery</span>
              </div>
              <div className="flex flex-col items-center bg-gradient-to-br from-[#ffd700]/80 to-[#a78bfa]/60 rounded-2xl px-6 py-4 shadow-lg border border-[#ffd700]/40 hover:scale-105 transition-transform duration-300 min-w-[160px] animate-float delay-200">
                <Star size={28} className="text-[#a78bfa] mb-2" />
                <span className="text-[#1a1e3a] font-bold text-xl">500+</span>
                <span className="text-[#ffd700] text-sm">Empowered Souls</span>
              </div>
              <div className="flex flex-col items-center bg-gradient-to-br from-[#a78bfa]/80 to-[#2e4a7d]/60 rounded-2xl px-6 py-4 shadow-lg border border-[#a78bfa]/40 hover:scale-105 transition-transform duration-300 min-w-[160px] animate-float delay-400">
                <Moon size={28} className="text-[#ffd700] mb-2" />
                <span className="text-[#fffbe6] font-bold text-xl">98%</span>
                <span className="text-[#a78bfa] text-sm">Transformative Impact</span>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="container mx-auto px-4 py-16 animate-fade-in-up">
          <h2 className="text-4xl font-bold text-center text-[#fffbe6] mb-12 relative animate-gradient-x">
            Our Services
            <span className="block w-24 h-1 bg-gradient-to-r from-[#2dd4bf] to-[#a78bfa] mx-auto mt-3 rounded-full"></span>
          </h2>
          <div className="grid md:grid-cols-3 gap-10 mb-20">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className="bg-[#1a1e3a]/80 backdrop-blur-sm border-[#2dd4bf]/30 hover:border-[#2dd4bf]/60 transition-all duration-300 transform hover:-translate-y-2 shadow-xl animate-fade-in-up delay-100">
                  <CardContent className="p-8 text-center flex flex-col items-center">
                    <div className="mb-6 flex justify-center">
                      <div className="w-20 h-20 bg-gradient-to-br from-[#2e4a7d] to-[#a78bfa] rounded-full flex items-center justify-center shadow-lg animate-bounce">
                        <IconComponent size={36} className="text-[#ffd700]" />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-[#ffd700] mb-4 tracking-wide animate-gradient-x">{service.title}</h3>
                    <p className="text-[#fffbe6] leading-relaxed text-lg animate-fade-in">{service.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Booking Section */}
        <section className="container mx-auto px-4 py-16 mb-20 animate-fade-in-up">
          <h2 className="text-4xl font-bold text-center text-[#fffbe6] mb-12 relative animate-gradient-x">
            Book Your Cosmic Session
            <span className="block w-28 h-1 bg-gradient-to-r from-[#a78bfa] to-[#2dd4bf] mx-auto mt-3 rounded-full"></span>
          </h2>
          <div className="max-w-2xl mx-auto bg-[#1a1e3a]/80 backdrop-blur-lg rounded-2xl shadow-2xl p-8 animate-fade-in">
            <BookingForm />
          </div>
        </section>

        {/* About Section (Key Stats) */}
        <section className="container mx-auto px-4 py-16 text-center animate-fade-in-up">
          <Card className="bg-[#1a1e3a]/80 backdrop-blur-sm border-[#a78bfa]/30 max-w-5xl mx-auto shadow-2xl p-10">
            <CardContent className="p-0">
              <h2 className="text-3xl font-bold text-[#fffbe6] mb-8 animate-gradient-x">Your Journey to Clarity Begins Here</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-5xl font-extrabold text-[#2dd4bf] mb-2 animate-countup">500+</div>
                  <div className="text-[#fffbe6] text-lg">Happy Clients</div>
                </div>
                <div>
                  <div className="text-5xl font-extrabold text-[#ffd700] mb-2 animate-countup">40+</div>
                  <div className="text-[#fffbe6] text-lg">Years Experience</div>
                </div>
                <div>
                  <div className="text-5xl font-extrabold text-[#a78bfa] mb-2 animate-countup">98%</div>
                  <div className="text-[#fffbe6] text-lg">Satisfaction Rate</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative z-10 container mx-auto px-4 py-8 text-center border-t border-[#2e4a7d]/40 bg-[#1a1e3a]/60 backdrop-blur-sm mt-16 animate-fade-in-up">
        <p className="text-[#fffbe6] text-lg">
          © {new Date().getFullYear()} Celestial Wisdom. All rights reserved. May the stars illuminate your path.
        </p>
      </footer>
    </div>
  );
};

export default Index;