
import React, {useEffect} from 'react';
import CelestialBackground from '@/components/CelestialBackground';
import BookingForm from '@/components/BookingForm';
import { Card, CardContent } from '@/components/ui/card';
import { createDefaultSlots } from "@/firebase/slots"
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
    <div className="min-h-screen relative bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
      <CelestialBackground />
      {/* Navigation Buttons */}
      <div className="relative z-10 flex justify-center gap-6 mt-12 mb-4">
        <Link to="/gallery" className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-bold shadow-lg hover:scale-105 transition-transform text-lg">Go to Gallery</Link>
        <Link to="/gallery/stone" className="px-6 py-3 bg-gradient-to-r from-yellow-400 to-pink-400 text-white rounded-full font-bold shadow-lg hover:scale-105 transition-transform text-lg">Go to Stones</Link>
      </div>
      {/* Main Content */}
      <div className="relative z-10 min-h-screen">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400 bg-clip-text text-transparent animate-fade-in">
              Celestial Wisdom
            </h1>
            <p className="text-xl md:text-2xl text-purple-200 mb-8 max-w-3xl mx-auto animate-fade-in">
              Unlock the mysteries of the universe and discover your cosmic destiny through ancient astrological wisdom
            </p>
            <div className="flex items-center justify-center gap-2 text-yellow-300 animate-pulse">
              <Sparkles size={24} />
              <span className="text-lg font-semibold">Connect with the cosmos today</span>
              <Sparkles size={24} />
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className="bg-black/20 backdrop-blur-md border-purple-500/30 hover:border-purple-400/50 transition-all duration-300 transform hover:scale-105">
                  <CardContent className="p-6 text-center">
                    <div className="mb-4 flex justify-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                        <IconComponent size={32} className="text-white" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                    <p className="text-purple-200 leading-relaxed">{service.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Pandit Bhushan Ji Banner - Modern, Elegant, Centered */}
          <div className="flex justify-center items-center mb-20">
            <div className="w-full max-w-lg flex flex-col items-center bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl border border-emerald-600/30 p-8 md:p-12 gap-4">
              {/* Photo on Top */}
              <div className="flex items-center justify-center mb-4">
                <div className="w-40 h-28 md:w-56 md:h-40 rounded-xl overflow-hidden border-4 border-emerald-400 shadow-lg bg-black/30 flex items-center justify-center">
                  <img
                    src="/bhushan.jpg"
                    alt="Pandit Bhushan Ji"
                    className="object-cover w-full h-full rounded-xl"
                  />
                </div>
              </div>
              {/* Name */}
              <h2 className="text-4xl md:text-5xl font-bold mb-1 tracking-tight text-center" style={{fontFamily: 'Playfair Display, Georgia, serif', color: '#10b981', letterSpacing: '0.01em', textShadow: '0 2px 8px #0f5132cc'}}>Pandit Bhushan Ji</h2>
              {/* Subtitle */}
              <div className="uppercase tracking-widest text-xs md:text-sm text-gray-300 mb-1 font-semibold text-center" style={{letterSpacing: '0.18em'}}>Astrologer · Tarot Reader · Numerologist</div>
              {/* Quote */}
              <blockquote className="text-base md:text-lg italic text-emerald-200 font-light mb-2 md:mb-4 w-full text-center" style={{fontFamily: 'Georgia, serif'}}>
                “Guiding you to cosmic clarity, one star at a time.”
              </blockquote>
              {/* Description */}
              <p className="text-white text-base md:text-lg leading-relaxed mb-2 md:mb-4 max-w-xl text-center" style={{lineHeight: '1.7'}}>
                With <span className="text-emerald-300 font-bold">15+ years</span> of experience, Pandit Bhushan Ji blends ancient Vedic wisdom with modern insight to illuminate your life’s journey. His compassionate guidance and intuitive readings have empowered hundreds to find clarity, purpose, and peace.
              </p>
              {/* Highlights */}
              <div className="flex gap-2 mt-1 flex-wrap justify-center">
                <span className="px-3 py-1 bg-emerald-600/80 text-white font-semibold rounded-full text-xs md:text-sm border border-emerald-400/60">15+ Years</span>
                <span className="px-3 py-1 bg-emerald-600/80 text-white font-semibold rounded-full text-xs md:text-sm border border-emerald-400/60">500+ Clients</span>
                <span className="px-3 py-1 bg-emerald-600/80 text-white font-semibold rounded-full text-xs md:text-sm border border-emerald-400/60">98% Satisfaction</span>
              </div>
            </div>
          </div>

          {/* Booking Section */}
          <section className="mb-20">
            <BookingForm />
          </section>

          {/* About Section */}
          <section className="text-center">
            <Card className="bg-black/20 backdrop-blur-md border-purple-500/30 max-w-4xl mx-auto">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-white mb-6">Meet Your Cosmic Guide</h2>
                <p className="text-purple-200 text-lg leading-relaxed mb-6">
                  With over 40 years of experience in astrological practice, I combine ancient wisdom with modern insights 
                  to help you navigate life's challenges and opportunities. My readings blend traditional techniques with 
                  intuitive guidance to provide you with the clarity and direction you seek.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-yellow-400 mb-2">5000+</div>
                    <div className="text-purple-200">Happy Clients</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-yellow-400 mb-2">40+</div>
                    <div className="text-purple-200">Years Experience</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-yellow-400 mb-2">98%</div>
                    <div className="text-purple-200">Satisfaction Rate</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
        </section>

        {/* Footer */}
        <footer className="container mx-auto px-4 py-8 text-center border-t border-purple-500/30">
          <p className="text-purple-300">
            © 2024 Celestial Wisdom. May the stars guide your journey.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
