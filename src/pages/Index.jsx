import { Link } from 'react-router-dom';
import BookingForm from '@/components/BookingForm';
import { Sun, Moon, Star, Phone, Mail, MapPin } from 'lucide-react';

const Index = () => {
  const services = [
    {
            title: 'Birth Chart Reading',
            description: 'A detailed analysis of your birth chart to reveal your life\'s purpose, strengths, and challenges.',
      icon: Star,
    },
    {
            title: 'Relationship Compatibility',
            description: 'Understand the dynamics of your relationships through a synastry chart analysis.',
      icon: Moon,
    },
    {
            title: 'Career & Finance Forecast',
            description: 'Gain insights into your professional path and financial prospects with a targeted reading.',
      icon: Sun,
        },
    ];

    // Add smooth scroll function
    const scrollToBooking = (e) => {
        e.preventDefault();
        const bookingSection = document.getElementById('booking');
        bookingSection.scrollIntoView({ behavior: 'smooth' });
    };

  return (
        <div className="min-h-screen bg-white">
            {/* Add custom styles for the gradient text */}
            <style>
                {`
                    @import url('https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@700;900&family=Cormorant+Garamond:wght@600;700&family=Poppins:wght@300;400;500;600&display=swap');
                    
                    .gradient-text {
                        background: linear-gradient(45deg, #FFD700, #FFA500, #FF8C00, #FFD700);
                        -webkit-background-clip: text;
                        background-clip: text;
                        color: transparent;
                        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
                        animation: shine 3s ease-in-out infinite;
                    }

                    @keyframes shine {
                        0% { background-position: 0% 50%; }
                        50% { background-position: 100% 50%; }
                        100% { background-position: 0% 50%; }
                    }

                    .service-card {
                        transition: all 0.3s ease;
                        background: linear-gradient(135deg, #ffffff 0%, #f8f8f8 100%);
                    }

                    .service-card:hover {
                        transform: translateY(-5px);
                        box-shadow: 0 20px 40px rgba(0,0,0,0.1);
                    }

                    .golden-border {
                        border: 1px solid transparent;
                        background: linear-gradient(white, white) padding-box,
                                  linear-gradient(45deg, #FFD700, #FFA500) border-box;
                    }

                    .book-now-btn {
                        position: relative;
                        overflow: hidden;
                        transition: all 0.3s ease;
                    }

                    .book-now-btn::after {
                        content: '';
                        position: absolute;
                        top: 0;
                        left: -100%;
                        width: 100%;
                        height: 100%;
                        background: linear-gradient(
                            120deg,
                            transparent,
                            rgba(255, 255, 255, 0.3),
                            transparent
                        );
                        transition: all 0.5s ease;
                    }

                    .book-now-btn:hover::after {
                        left: 100%;
                    }

                    .banner-gradient {
                        background: linear-gradient(135deg, #8B0000, #B91C1C);
                        position: relative;
                    }

                    .banner-gradient::before {
                        content: '';
                        position: absolute;
                        top: 0;
                        left: 0;
                        right: 0;
                        bottom: 0;
                        background: radial-gradient(circle at 50% 50%, rgba(255,215,0,0.1) 0%, transparent 50%);
                        animation: pulseGlow 4s ease-in-out infinite;
                    }

                    @keyframes pulseGlow {
                        0%, 100% { opacity: 0.3; }
                        50% { opacity: 0.7; }
                    }

                    .title-gradient {
                        background: linear-gradient(45deg, #FFD700, #FFA500, #FFD700);
                        -webkit-background-clip: text;
                        background-clip: text;
                        color: transparent;
                        text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.3);
                        animation: shimmer 3s linear infinite;
                        background-size: 200% auto;
                    }

                    @keyframes shimmer {
                        to { background-position: 200% center; }
                    }

                    .divine-border {
                        position: relative;
                        background: rgba(255, 255, 255, 0.05);
                        backdrop-filter: blur(10px);
                        animation: floatCard 6s ease-in-out infinite;
                    }

                    @keyframes floatCard {
                        0%, 100% { transform: translateY(0px); }
                        50% { transform: translateY(-10px); }
                    }

                    .divine-border::before {
                        content: '';
                        position: absolute;
                        inset: -2px;
                        background: linear-gradient(45deg, #FFD700, #FFA500, #FFD700);
                        border-radius: 1rem;
                        z-index: -1;
                        animation: borderRotate 4s linear infinite;
                    }

                    @keyframes borderRotate {
                        0% { background-position: 0% 50%; }
                        50% { background-position: 100% 50%; }
                        100% { background-position: 0% 50%; }
                    }

                    .deity-container {
                        animation: floatDeity 8s ease-in-out infinite;
                    }

                    @keyframes floatDeity {
                        0%, 100% { transform: translateY(0px) scale(1); }
                        50% { transform: translateY(-15px) scale(1.02); }
                    }

                    .book-now-btn {
                        background: #8B0000;
                        color: #FFD700;
                        transition: all 0.3s ease;
                        position: relative;
                        overflow: hidden;
                        border: 2px solid #8B0000;
                    }

                    @keyframes pulseButton {
                        0% { transform: scale(1); }
                        50% { transform: scale(1.02); }
                        100% { transform: scale(1); }
                    }

                    .book-now-btn:hover {
                        transform: translateY(-2px);
                        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
                        background: #FFD700;
                        color: #8B0000;
                    }

                    .book-now-btn::after {
                        content: '';
                        position: absolute;
                        top: -50%;
                        left: -50%;
                        width: 200%;
                        height: 200%;
                        background: linear-gradient(
                            45deg,
                            transparent,
                            rgba(255, 255, 255, 0.3),
                            transparent
                        );
                        transform: rotate(45deg);
                        animation: buttonShine 2s linear infinite;
                    }

                    @keyframes buttonShine {
                        0% { transform: rotate(45deg) translateX(-200%); }
                        100% { transform: rotate(45deg) translateX(200%); }
                    }

                    .om-symbol {
                        font-family: 'Arial';
                        font-size: 400px;
                        opacity: 0.05;
                        color: #FFD700;
                        z-index: 0;
                        pointer-events: none;
                    }

                    .decorative-line {
                        height: 2px;
                        background: linear-gradient(90deg, 
                            transparent 0%, 
                            #FFD700 20%, 
                            #FFA500 50%, 
                            #FFD700 80%, 
                            transparent 100%
                        );
                        animation: lineShimmer 3s linear infinite;
                        background-size: 200% auto;
                    }

                    @keyframes lineShimmer {
                        to { background-position: 200% center; }
                    }

                    .particle {
                        position: absolute;
                        width: 2px;
                        height: 2px;
                        background: rgba(255, 215, 0, 0.5);
                        border-radius: 50%;
                        pointer-events: none;
                    }

                    .particle:nth-child(3n) {
                        animation: particleFloat1 4s linear infinite;
                    }

                    .particle:nth-child(3n+1) {
                        animation: particleFloat2 6s linear infinite;
                    }

                    .particle:nth-child(3n+2) {
                        animation: particleFloat3 8s linear infinite;
                    }

                    @keyframes particleFloat1 {
                        0% { transform: translate(0, 0) rotate(0deg); opacity: 0; }
                        50% { opacity: 1; }
                        100% { transform: translate(100px, -100px) rotate(360deg); opacity: 0; }
                    }

                    @keyframes particleFloat2 {
                        0% { transform: translate(0, 0) rotate(0deg); opacity: 0; }
                        50% { opacity: 1; }
                        100% { transform: translate(-100px, -100px) rotate(-360deg); opacity: 0; }
                    }

                    @keyframes particleFloat3 {
                        0% { transform: translate(0, 0) rotate(0deg); opacity: 0; }
                        50% { opacity: 1; }
                        100% { transform: translate(50px, -150px) rotate(180deg); opacity: 0; }
                    }

                    .title-container {
                        background: linear-gradient(135deg, #FFD700, #FFA500);
                        padding: 2rem;
                        border-radius: 1.5rem;
                        box-shadow: 0 10px 30px rgba(0,0,0,0.2);
                    }

                    .main-title {
                        font-size: 5rem;
                        line-height: 1.1;
                        font-weight: 900;
                        color: #8B0000;
                        text-shadow: 2px 2px 4px rgba(139,0,0,0.3);
                        letter-spacing: 0.05em;
                    }

                    @media (min-width: 768px) {
                        .main-title {
                            font-size: 7rem;
                        }
                    }

                    .subtitle {
                        color: #8B0000;
                        font-size: 1.5rem;
                        font-weight: 500;
                        margin-top: 1rem;
                        text-shadow: 1px 1px 2px rgba(139,0,0,0.2);
                    }
                `}
            </style>

            {/* Top Info Bar */}
            <div className="bg-white text-gray-600 py-2 border-b">
                <div className="container mx-auto px-6 flex flex-wrap justify-end gap-6 text-sm">
                    <a href="tel:+919418108727" className="flex items-center gap-2 hover:text-[#B91C1C] transition-colors">
                        <Phone size={14} />
                        <span>Call Us: +91 94181 08727</span>
                    </a>
                    <a href="mailto:shambhav.jyotish@gmail.com" className="flex items-center gap-2 hover:text-[#B91C1C] transition-colors">
                        <Mail size={14} />
                        <span>shambhav.jyotish@gmail.com</span>
                    </a>
                    <div className="flex items-center gap-2">
                        <MapPin size={14} />
                        <span>Jwalaji & Kullu</span>
                    </div>
                </div>
            </div>

            {/* Navigation */}
            <nav className="bg-[#B91C1C] text-white">
                <div className="container mx-auto px-6 py-4">
                    <div className="flex justify-between items-center">
                        <div className="text-2xl font-bold gradient-text" style={{ fontFamily: 'Cinzel, serif' }}>
                            Shambhav Jyotish
                        </div>
                        <div className="flex items-center gap-8">
                            <Link to="/" className="hover:text-yellow-200 transition-colors">Home</Link>
                            <Link to="/gallery" className="hover:text-yellow-200 transition-colors">Gallery</Link>
                            <Link to="/gallery/stone" className="hover:text-yellow-200 transition-colors">Stones</Link>
                            <button 
                                onClick={scrollToBooking}
                                className="book-now-btn bg-gradient-to-r from-yellow-500 to-yellow-600 text-black px-4 py-2 rounded-md font-semibold hover:shadow-lg hover:from-yellow-400 hover:to-yellow-500 transition-all duration-300"
                            >
                                Book Now
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Banner Section */}
            <div className="relative banner-gradient min-h-[600px] overflow-hidden">
                {/* Particles */}
                {[...Array(15)].map((_, i) => (
                    <div
                        key={i}
                        className="particle"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 2}s`
                        }}
                    />
                ))}

                {/* Background Om Symbol */}
                <div className="om-symbol absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    ॐ
          </div>

                {/* Decorative Top Border */}
                <div className="absolute top-0 left-0 right-0">
                    <div className="decorative-line"></div>
          </div>

                <div className="container mx-auto px-6 h-full py-20">
                    <div className="flex items-center justify-between h-full gap-8">
                        {/* Left Side - Ganesh Ji */}
                        <div className="w-1/4 flex justify-center deity-container">
                            <div className="relative w-64 h-64">
                                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-yellow-400/20 to-yellow-600/20 backdrop-blur-sm"></div>
                                <img
                                    src="/deities/ganesh.png"
                                    alt="Lord Ganesh"
                                    className="absolute inset-0 w-full h-full object-contain p-4"
                  />
                </div>
              </div>

                        {/* Center Content */}
                        <div className="w-1/2 text-center relative z-10">
                            <div className="title-container">
                                <h1 className="main-title" style={{ fontFamily: 'Cinzel Decorative, serif' }}>
                                    Shambhav Jyotish
                                </h1>
                                <p className="subtitle" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                                    Find & Book Trusted Pandit Ji Online
                                </p>
                                <div className="flex justify-center gap-6 mt-8">
                                    <button 
                                        onClick={scrollToBooking}
                                        className="book-now-btn px-8 py-4 rounded-lg font-bold text-lg flex items-center gap-2 shadow-lg"
                                        style={{ fontFamily: 'Poppins, sans-serif' }}
                                    >
                                        Book Pandit G Now
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                    </button>
                                    <a 
                                        href="#services" 
                                        className="px-8 py-4 rounded-lg font-bold text-lg border-2 border-[#8B0000] text-[#8B0000] hover:bg-[#8B0000] hover:text-[#FFD700] transition-colors"
                                        style={{ fontFamily: 'Poppins, sans-serif' }}
                                    >
                                        Our Services
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Right Side - Maa Durga */}
                        <div className="w-1/4 flex justify-center deity-container">
                            <div className="relative w-64 h-64">
                                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-yellow-400/20 to-yellow-600/20 backdrop-blur-sm"></div>
                                <img
                                    src="/deities/durga.png"
                                    alt="Maa Durga"
                                    className="absolute inset-0 w-full h-full object-contain p-4"
                                />
                            </div>
              </div>
            </div>
          </div>

                {/* Decorative Bottom Border */}
                <div className="absolute bottom-0 left-0 right-0">
                    <div className="decorative-line"></div>
                    <svg viewBox="0 0 1440 60" className="text-white fill-current">
                        <path d="M0,0 C480,60 960,60 1440,0 L1440,60 L0,60 Z"></path>
                    </svg>
                </div>
            </div>

            {/* Services Section */}
            <section id="services" className="py-24 bg-gradient-to-b from-white to-gray-50">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold gradient-text mb-4" style={{ fontFamily: 'Cinzel, serif' }}>
                            Our Sacred Offerings
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-300 mx-auto mb-6"></div>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Discover divine guidance through our specialized astrological services
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                                <div key={index} className="service-card golden-border rounded-lg p-8">
                                    <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mb-6 mx-auto">
                        <IconComponent size={32} className="text-white" />
                      </div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center" style={{ fontFamily: 'Cinzel, serif' }}>
                                        {service.title}
                                    </h3>
                                    <p className="text-gray-600 text-center leading-relaxed">
                                        {service.description}
                                    </p>
                    </div>
              );
            })}
          </div>
                </div>
            </section>

            {/* About Section with Pandit Ji Banner */}
            <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <div className="w-full md:w-1/2">
                            <div className="relative">
                                <div className="absolute inset-0 bg-gradient-to-r from-[#B91C1C] to-[#991B1B] rounded-2xl transform rotate-3"></div>
                                <img 
                                    src="/bhushan.jpg" 
                                    alt="Pandit Ji" 
                                    className="relative rounded-2xl shadow-2xl transform -rotate-3 transition-transform hover:rotate-0 duration-300 border-4 border-white"
                                />
                                <div className="absolute -bottom-6 -right-6 bg-white rounded-lg shadow-xl p-4 transform rotate-3">
                                    <p className="text-lg font-semibold text-[#B91C1C]" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                                        40+ Years of Experience
              </p>
            </div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2">
                            <h2 className="text-5xl font-bold mb-4 text-[#B91C1C]" style={{ fontFamily: 'Cinzel Decorative, serif' }}>
                                About Shambhav Jyotish
                            </h2>
                            <h3 className="text-5xl font-bold mb-4 text-[#B91C1C]" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                                Pandit Bhushan Ji
                            </h3>
                            <div className="decorative-line w-32 mb-8"></div>
                            <p className="text-xl text-gray-700 mb-6 leading-relaxed" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                                Welcome to Shambhav Jyotish, your reliable source for authentic Vedic ceremonies and spiritual guidance. With over 40 years of dedicated practice, we provide clear, compassionate, and practical insights to help navigate life's journey.
                            </p>
                            <p className="text-xl text-gray-700 leading-relaxed" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                                Based in the holy city of Ujjain, we bring the richness of ancient traditions right to your door, guaranteeing a transformative experience each time.
                            </p>
                            <div className="mt-8 flex gap-6">
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg">
                                    <div className="w-12 h-12 bg-[#B91C1C] rounded-full flex items-center justify-center">
                                        <Star className="w-6 h-6 text-white" />
                                    </div>
                                    <span className="font-semibold text-gray-800">Expert<br/>Guidance</span>
                                </div>
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg">
                                    <div className="w-12 h-12 bg-[#B91C1C] rounded-full flex items-center justify-center">
                                        <Sun className="w-6 h-6 text-white" />
                                    </div>
                                    <span className="font-semibold text-gray-800">Vedic<br/>Traditions</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
          </section>

            {/* Booking Section */}
            <section id="booking" className="py-24 bg-gradient-to-b from-gray-50 to-white">
                <div className="container mx-auto px-6 max-w-4xl">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold gradient-text mb-4" style={{ fontFamily: 'Cinzel, serif' }}>
                            Begin Your Spiritual Journey
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-300 mx-auto mb-6"></div>
                        <p className="text-xl text-gray-600">
                            Schedule your personal consultation with our expert astrologer
                        </p>
                  </div>
                    <div className="golden-border bg-white rounded-lg shadow-xl p-8">
                        <BookingForm />
                  </div>
                </div>
        </section>

        {/* Footer */}
            <footer className="bg-[#B91C1C] text-white py-12">
                <div className="container mx-auto px-6">
                    <div className="text-center">
                        <h3 className="gradient-text text-2xl font-bold mb-4" style={{ fontFamily: 'Cinzel Decorative, serif' }}>
                            Shambhav Jyotish
                        </h3>
                        <div className="w-24 h-1 bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-300 mx-auto mb-6"></div>
                        <p className="text-yellow-100 mb-6">Illuminating Paths Through Ancient Wisdom</p>
                        <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-8 mb-8">
                            <a href="tel:+919418108727" className="hover:text-yellow-200 transition-colors flex items-center justify-center gap-2">
                                <Phone size={16} />
                                +91 94181 08727
                            </a>
                            <a href="mailto:shambhav.jyotish@gmail.com" className="hover:text-yellow-200 transition-colors flex items-center justify-center gap-2">
                                <Mail size={16} />
                                shambhav.jyotish@gmail.com
                            </a>
                            <div className="flex items-center justify-center gap-2">
                                <MapPin size={16} />
                                <span>Jwalaji & Kullu, India</span>
                            </div>
                        </div>
                        <p className="text-sm opacity-75">&copy; 2024 Shambhav Jyotish. All Rights Reserved by Divyansh Atri.</p>
                    </div>
                </div>
        </footer>
    </div>
  );
};

export default Index;
