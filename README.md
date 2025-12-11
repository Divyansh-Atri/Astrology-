# Shambhav Jyotish - Vedic Astrology Website

A premium, modern web application for Vedic astrology consultations featuring interactive cosmic tools, real-time planetary tracking, and seamless appointment booking.

![Vedic Futurism Theme](https://img.shields.io/badge/Theme-Vedic%20Futurism-orange)
![React](https://img.shields.io/badge/React-18.3.1-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.6.2-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.1-38bdf8)

## Features

### Premium Design
- **Vedic Futurism Theme**: Dark, elegant design with amber/orange accents
- **Fully Animated**: Smooth transitions, floating particles, and interactive elements
- **Responsive**: Optimized for all devices (mobile, tablet, desktop)
- **Glassmorphism**: Modern backdrop blur effects throughout

### Interactive Cosmic Tools

#### 1. Cosmic Forecast (Zodiac Wheel)
- Interactive zodiac sign selector with horizontal scroll
- Daily horoscopes for all 12 signs
- **Vitality HUD**: Animated circular progress bars for Love, Career, and Health
- Lucky Color and Lucky Number display
- Smooth animations with Framer Motion

#### 2. Kaal Chakra (Vedic Time Machine)
- Real-time Vedic time calculations
- **Choghadiya**: 8 time periods showing auspicious/inauspicious times
- **Hora**: Planetary hours with 7-planet cycle
- Animated rotating needle
- Countdown timer to next energy shift
- Authentic Vedic calculations based on sunrise/sunset

#### 3. Retrograde Monitor
- Live planetary status tracking (Direct/Retrograde)
- 5 major planets: Mercury, Venus, Mars, Jupiter, Saturn
- Visual indicators with pulsing animations for retrograde planets
- Influence descriptions for each planet
- System status summary

#### 4. Karmic Echoes (Testimonials)
- Masonry grid layout
- Ancient scroll-styled cards
- Custom Diya (lamp) rating system
- Authentic client reviews

#### 5. Jigyasa (FAQ Accordion)
- Smooth expanding/collapsing animations
- Comprehensive answers about Vedic astrology
- Clean, organized presentation

### Booking System
- Real-time appointment scheduling
- Time slot selection with visual feedback
- Form validation with error messages
- Firebase integration for data storage
- Beautiful toast notifications for booking status
- Prevents double-booking

### Gallery Pages
- Photo gallery showcasing events and consultations
- Gemstone catalog with detailed descriptions
- 70+ gemstones with properties and benefits
- Responsive grid layouts

## Getting Started

### Prerequisites

- **Node.js** (v18 or higher)
- **npm** or **yarn**
- **Firebase Account** (for booking system)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/astrology-website.git
   cd astrology-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up Firebase**
   - Create a Firebase project at [firebase.google.com](https://firebase.google.com)
   - Enable Firestore Database
   - Copy your Firebase config
   - Create `.env` file in the root directory:
   ```env
   VITE_FIREBASE_API_KEY=your_api_key
   VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
   VITE_FIREBASE_PROJECT_ID=your_project_id
   VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
   VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   VITE_FIREBASE_APP_ID=your_app_id
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173`

## Project Structure

```
astrology-website/
├── public/
│   ├── bhushan.jpg              # Astrologer photo
│   ├── stones-photo/            # Gemstone images
│   └── gallery-images/          # Gallery photos
├── src/
│   ├── components/
│   │   ├── ui/                  # Shadcn UI components
│   │   ├── AnimatedHero.tsx     # Hero section with animations
│   │   ├── BookingForm.jsx      # Appointment booking form
│   │   ├── CosmicForecast.tsx   # Zodiac wheel & horoscopes
│   │   ├── DivineIntro.tsx      # Loading animation
│   │   ├── Jigyasa.tsx          # FAQ accordion
│   │   ├── KaalChakra.tsx       # Vedic time wheel
│   │   ├── KarmicEchoes.tsx     # Testimonials
│   │   └── RetrogradeMonitor.tsx # Planetary status
│   ├── firebase/
│   │   ├── config.js            # Firebase configuration
│   │   └── slots.js             # Booking logic
│   ├── pages/
│   │   ├── Index.tsx            # Home page
│   │   ├── Gallery.tsx          # Photo gallery
│   │   └── Stone.tsx            # Gemstone catalog
│   ├── hooks/                   # Custom React hooks
│   ├── lib/                     # Utility functions
│   ├── index.css                # Global styles
│   └── main.tsx                 # App entry point
├── .env                         # Environment variables
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── vite.config.ts
```

## Tech Stack

### Frontend
- **React 18.3.1** - UI library
- **TypeScript 5.6.2** - Type safety
- **Vite 5.4.2** - Build tool & dev server
- **React Router 6.26.2** - Navigation

### Styling
- **Tailwind CSS 3.4.1** - Utility-first CSS
- **Framer Motion 11.11.17** - Animations
- **Lucide React 0.454.0** - Icons

### UI Components
- **Radix UI** - Accessible component primitives
- **Shadcn/ui** - Pre-built components
- **Class Variance Authority** - Component variants

### Backend/Database
- **Firebase** - Firestore for appointments
- **Axios** - HTTP client

## Configuration

### Customization

#### Update Astrologer Information
Edit `/src/pages/Index.tsx`:
```tsx
<h1>Your Astrologer Name</h1>
<p>Your tagline</p>
```

#### Modify Time Calculations
Edit `/src/components/KaalChakra.tsx`:
```tsx
const sunriseHour = 6.5; // Your location's sunrise
const sunsetHour = 18;   // Your location's sunset
```

#### Update Horoscope Data
Edit `/src/components/CosmicForecast.tsx`:
```tsx
const zodiacSigns = [
  { name: 'Aries', forecast: 'Your daily forecast...', ... }
]
```

#### Change Color Theme
Edit `/tailwind.config.ts` and `/src/index.css` for custom colors.

## Design Philosophy

### Vedic Futurism
The design combines ancient Vedic wisdom with modern web aesthetics:
- **Dark Background**: Represents the cosmic void
- **Amber/Orange Accents**: Sacred fire and spiritual energy
- **Glassmorphism**: Modern, premium feel
- **Animations**: Cosmic energy in motion
- **Typography**: Playfair Display for elegance

### Ethical Considerations
- All interactive tools include disclaimers
- Emphasizes the need for personalized consultations
- Maintains professional integrity
- Educates users about Vedic astrology

## Pages

1. **Home** (`/`) - Main landing page with all features
2. **Gallery** (`/gallery`) - Photo gallery
3. **Gemstones** (`/gallery/stone`) - Gemstone catalog

## Available Scripts

```bash
# Development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Vercel
```bash
npm install -g vercel
vercel
```

### Deploy to Netlify
```bash
npm install -g netlify-cli
netlify deploy --prod
```

## Environment Variables

Required environment variables:
```env
VITE_FIREBASE_API_KEY=
VITE_FIREBASE_AUTH_DOMAIN=
VITE_FIREBASE_PROJECT_ID=
VITE_FIREBASE_STORAGE_BUCKET=
VITE_FIREBASE_MESSAGING_SENDER_ID=
VITE_FIREBASE_APP_ID=
```

## Features Roadmap

- [ ] Admin dashboard for managing appointments
- [ ] Live chat support
- [ ] Blog section for articles
- [ ] Multi-language support
- [ ] Integration with real-time ephemeris API
- [ ] Kundali (birth chart) generator
- [ ] Payment gateway integration
- [ ] Email notifications for appointments

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author

**Pandit Bhushan Ji**
- Website: [shambhavjyotish.com](https://shambhavjyotish.com)
- Email: shambhav.jyotish@gmail.com
- Location: Ujjain & Kullu, India

## Acknowledgments

- **Vedic Astrology Principles** - Ancient wisdom
- **Shadcn/ui** - Beautiful UI components
- **Framer Motion** - Smooth animations
- **Radix UI** - Accessible primitives
- **Tailwind CSS** - Utility-first styling

## Support

For support, email shambhav.jyotish@gmail.com or visit the website.

---

**Made with dedication for Vedic Astrology**
