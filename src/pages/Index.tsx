import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Star, Moon, Sun, Heart, Gem, Calendar, MapPin, Phone, Mail, ArrowRight, Sparkles, Instagram, Facebook, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import BookingForm from '@/components/BookingForm';
import DivineIntro from '@/components/DivineIntro';

const Index = () => {
  const [showIntro, setShowIntro] = useState(true);
  const [siteRevealed, setSiteRevealed] = useState(false);

  const handleIntroComplete = () => {
    setShowIntro(false);
    setSiteRevealed(true);
  };
  // Scroll animation
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate-on-scroll').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const scrollToBooking = () => {
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
  };

  const services = [
    {
      icon: Sun,
      title: 'Kundali Analysis',
      description: 'Deep dive into your birth chart to understand your life purpose, strengths, and karmic patterns through detailed planetary analysis.'
    },
    {
      icon: Heart,
      title: 'Match Making',
      description: 'Ensure harmony in relationships. Comprehensive compatibility analysis for marriage using ancient Vedic principles and astrological wisdom.'
    },
    {
      icon: Gem,
      title: 'Gemstone Consultation',
      description: 'Discover your sacred stones. Expert recommendations for gemstones that balance energies, enhance fortune, and bring prosperity.'
    },
    {
      icon: Calendar,
      title: 'Mahadasha Analysis',
      description: 'Timing is everything. Know your favorable periods and prepare for challenges with detailed timeline analysis of planetary periods.'
    },
    {
      icon: Moon,
      title: 'Career Guidance',
      description: 'Navigate your professional life. Discover the best career paths, business ventures, and timing for important decisions.'
    },
    {
      icon: Sparkles,
      title: 'Vastu Consultation',
      description: 'Harmonize your living space. Corrections and advice for home and office to attract positive energy and prosperity.'
    }
  ];

  return (
    <>
      {/* Divine Intro Sequence */}
      {showIntro && <DivineIntro onComplete={handleIntroComplete} />}

      {/* Main Website */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: siteRevealed ? 1 : 0 }}
        transition={{ duration: 1.5 }}
        className="min-h-screen bg-zinc-900 text-zinc-100"
      >

        {/* Top Bar */}
        <div className="bg-zinc-800/50 border-b border-zinc-700/50 py-2">
          <div className="container mx-auto px-6 flex justify-end gap-6 text-sm text-zinc-400">
            <div className="flex items-center gap-2">
              <Phone size={14} />
              <span>+91 75910 70027</span>
            </div>
            <div className="hidden md:flex items-center gap-2">
              <Mail size={14} />
              <span>shambhav.jyotish@gmail.com</span>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="sticky top-0 z-50 bg-zinc-900/90 backdrop-blur-md border-b border-zinc-700/50">
          <div className="container mx-auto px-6 h-20 flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center shadow-lg shadow-amber-500/20">
                <Star className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-zinc-100" style={{ fontFamily: 'Playfair Display, serif' }}>
                  Shambhav Jyotish
                </h1>
                <p className="text-xs text-amber-500">Vedic Astrology Expert</p>
              </div>
            </Link>

            <div className="hidden md:flex items-center gap-8 text-sm font-medium">
              <Link to="/" className="text-zinc-300 hover:text-amber-500 transition">Home</Link>
              <a href="#services" className="text-zinc-300 hover:text-amber-500 transition">Services</a>
              <Link to="/gallery" className="text-zinc-300 hover:text-amber-500 transition">Gallery</Link>
              <Link to="/gallery/stone" className="text-zinc-300 hover:text-amber-500 transition">Gemstones</Link>
              <Button
                onClick={scrollToBooking}
                className="bg-amber-500 hover:bg-amber-600 text-zinc-900 font-semibold shadow-lg shadow-amber-500/20"
              >
                Book Now
              </Button>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-20 left-10 w-72 h-72 bg-amber-500/30 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl"></div>
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">

              {/* Left: Hero Content */}
              <div className="space-y-8 animate-on-scroll">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-sm font-medium">
                  <Sparkles className="w-4 h-4" />
                  <span>Ancient Wisdom • Modern Guidance</span>
                </div>

                <h1 className="text-5xl md:text-7xl font-bold leading-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
                  <span className="block text-zinc-100">Discover Your</span>
                  <span className="bg-gradient-to-r from-amber-400 via-orange-500 to-amber-400 bg-clip-text text-transparent">
                    Cosmic Destiny
                  </span>
                </h1>

                <p className="text-xl text-zinc-400 leading-relaxed max-w-xl">
                  Unlock the mysteries of your life through ancient Vedic wisdom. Get personalized astrological insights to navigate your journey with clarity and confidence.
                </p>

                <div className="flex flex-wrap gap-4">
                  <Button
                    onClick={scrollToBooking}
                    size="lg"
                    className="bg-amber-500 hover:bg-amber-600 text-zinc-900 px-8 font-semibold shadow-lg shadow-amber-500/20"
                  >
                    Schedule Reading <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-zinc-700 text-zinc-300 hover:bg-zinc-800 hover:text-amber-500"
                  >
                    <a href="#services">View Services</a>
                  </Button>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-8 pt-8 border-t border-zinc-800">
                  <div>
                    <div className="text-3xl font-bold text-amber-500">5000+</div>
                    <div className="text-sm text-zinc-500 mt-1">Happy Clients</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-amber-500">15+</div>
                    <div className="text-sm text-zinc-500 mt-1">Years Experience</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-amber-500">4.9</div>
                    <div className="text-sm text-zinc-500 mt-1">Rating</div>
                  </div>
                </div>
              </div>

              {/* Right: Pandit Ji Profile */}
              <div className="relative animate-on-scroll" style={{ animationDelay: '0.2s' }}>
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-orange-500/20 rounded-3xl blur-2xl"></div>
                <div className="relative bg-zinc-800/50 rounded-3xl p-2 border border-zinc-700/50 backdrop-blur-sm">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
                    <img
                      src="/bhushan.jpg"
                      alt="Pandit Bhushan Ji"
                      className="w-full h-full object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent"></div>
                    <div className="absolute bottom-6 left-6 right-6">
                      <p className="text-amber-500 font-semibold tracking-wider text-sm uppercase mb-1">Vedic Astrologer</p>
                      <h3 className="text-3xl font-bold text-white" style={{ fontFamily: 'Playfair Display, serif' }}>
                        Pandit Bhushan Ji
                      </h3>
                    </div>
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="flex items-center gap-3 text-zinc-400">
                      <MapPin className="text-amber-500 w-5 h-5 flex-shrink-0" />
                      <span>Based in Ujjain & Kullu</span>
                    </div>
                    <p className="text-zinc-400 leading-relaxed">
                      With over 15 years of experience in Vedic traditions, guiding thousands of souls towards their true path using ancient wisdom and modern understanding.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-24 bg-zinc-800/30">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16 animate-on-scroll">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-sm font-medium mb-4">
                <Star className="w-4 h-4" />
                <span>Our Offerings</span>
              </div>
              <h2 className="text-5xl font-bold text-zinc-100 mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                Sacred Services
              </h2>
              <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full"></div>
              <p className="text-xl text-zinc-400 max-w-2xl mx-auto mt-6">
                Comprehensive Vedic guidance for every aspect of your life
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="group bg-zinc-800/50 p-8 rounded-2xl border border-zinc-700/50 hover:border-amber-500/50 transition-all duration-300 hover:-translate-y-2 animate-on-scroll"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-amber-500/20">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-zinc-100 mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
                    {service.title}
                  </h3>
                  <p className="text-zinc-400 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Booking Section */}
        <section id="booking" className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-96 h-96 bg-amber-500/30 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500/30 rounded-full blur-3xl"></div>
          </div>

          <div className="container mx-auto px-6 max-w-6xl relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">

              {/* Left: Info */}
              <div className="space-y-8 animate-on-scroll">
                <div>
                  <h2 className="text-5xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                    <span className="text-zinc-100">Begin Your</span><br />
                    <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                      Spiritual Journey
                    </span>
                  </h2>
                  <p className="text-xl text-zinc-400">
                    Take the first step towards clarity. Schedule your personalized consultation today.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-amber-500/10 flex items-center justify-center flex-shrink-0 border border-amber-500/20">
                      <MapPin className="w-6 h-6 text-amber-500" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-zinc-100 mb-1">Sacred Locations</h4>
                      <p className="text-zinc-400">Available at Jwalaji & Kullu centers</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-amber-500/10 flex items-center justify-center flex-shrink-0 border border-amber-500/20">
                      <Phone className="w-6 h-6 text-amber-500" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-zinc-100 mb-1">Direct Contact</h4>
                      <p className="text-zinc-400">+91 75910 70027</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-amber-500/10 flex items-center justify-center flex-shrink-0 border border-amber-500/20">
                      <Mail className="w-6 h-6 text-amber-500" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-zinc-100 mb-1">Email Us</h4>
                      <p className="text-zinc-400">shambhav.jyotish@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Booking Form */}
              <div className="bg-zinc-800/50 rounded-3xl p-8 border border-zinc-700/50 backdrop-blur-sm shadow-2xl animate-on-scroll" style={{ animationDelay: '0.2s' }}>
                <BookingForm />
              </div>

            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-zinc-800/50 border-t border-zinc-700/50 py-16">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-12 items-start">

              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center shadow-lg shadow-amber-500/20">
                    <Star className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-zinc-100" style={{ fontFamily: 'Playfair Display, serif' }}>
                    Shambhav Jyotish
                  </h3>
                </div>
                <p className="text-zinc-400 leading-relaxed">
                  Illuminating paths through ancient Vedic wisdom and cosmic guidance. Experience clarity, purpose, and spiritual growth.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-zinc-100 mb-4">Quick Links</h4>
                <div className="space-y-2">
                  <Link to="/" className="block text-zinc-400 hover:text-amber-500 transition">Home</Link>
                  <a href="#services" className="block text-zinc-400 hover:text-amber-500 transition">Services</a>
                  <Link to="/gallery" className="block text-zinc-400 hover:text-amber-500 transition">Gallery</Link>
                  <Link to="/gallery/stone" className="block text-zinc-400 hover:text-amber-500 transition">Gemstones</Link>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-zinc-100 mb-4">Connect With Us</h4>
                <div className="space-y-3 text-zinc-400 mb-6">
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-amber-500" />
                    <span>+91 75910 70027</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-amber-500" />
                    <span>shambhav.jyotish@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-amber-500" />
                    <span>Jwalaji & Kullu</span>
                  </div>
                </div>

                <div className="flex gap-4">
                  <a href="#" className="w-10 h-10 rounded-full bg-zinc-700/50 flex items-center justify-center hover:bg-amber-500/20 hover:text-amber-500 transition">
                    <Instagram size={18} />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-zinc-700/50 flex items-center justify-center hover:bg-amber-500/20 hover:text-amber-500 transition">
                    <Facebook size={18} />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-zinc-700/50 flex items-center justify-center hover:bg-amber-500/20 hover:text-amber-500 transition">
                    <Twitter size={18} />
                  </a>
                </div>
              </div>

            </div>

            <div className="border-t border-zinc-700/50 mt-12 pt-8 text-center text-sm text-zinc-500">
              <p>&copy; {new Date().getFullYear()} Shambhav Jyotish. All rights reserved. Crafted with cosmic energy ✨</p>
            </div>
          </div>
        </footer>

      </motion.div>
    </>
  );
};

export default Index;