import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Star, ArrowLeft, Gem } from 'lucide-react';

const stones = [
  { name: 'Agate', image: '/stones-photo/agate.png', description: 'A grounding stone that brings emotional, physical, and intellectual balance.' },
  { name: 'Alexandrite', image: '/stones-photo/alexandrite.png', description: 'A rare stone of prosperity and longevity, it changes color in different light.' },
  { name: 'Amazonite', image: '/stones-photo/amazonite.png', description: 'Known as the stone of courage and truth, it soothes the spirit and calms the soul.' },
  { name: 'Amber', image: '/stones-photo/amber.png', description: 'A powerful healer and cleanser that draws out negative energy and promotes vitality.' },
  { name: 'Amethyst', image: '/stones-photo/amethyst.png', description: 'A protective stone with a high spiritual vibration, it guards against psychic attack.' },
  { name: 'Apatite', image: '/stones-photo/apatitie.png', description: 'A stone of manifestation, it enhances creativity and the intellect.' },
  { name: 'Aquamarine', image: '/stones-photo/aquamarine.png', description: 'A stone of courage, its calming energies reduce stress and quiet the mind.' },
  { name: 'Aventurine', image: '/stones-photo/aventurine.png', description: 'A stone of prosperity, it reinforces leadership qualities and decisiveness.' },
  { name: 'Azurite', image: '/stones-photo/azurite.png', description: 'Guides psychic and intuitive development, and cleanses the third eye.' },
  { name: 'Beryl', image: '/stones-photo/beryl.png', description: 'Enhances courage, relieves stress, and calms the mind.' },
  { name: 'Bloodstone', image: '/stones-photo/bllodstone.png', description: 'An excellent blood cleanser and a powerful healing stone.' },
  { name: 'Carnelian', image: '/stones-photo/carnelian.png', description: 'A stabilizing stone, it restores vitality and motivation, and stimulates creativity.' },
  { name: 'Celestite', image: '/stones-photo/celestite.png', description: 'Has a high vibration and is a teacher for the New Age.' },
  { name: 'Chalcedony', image: '/stones-photo/chalcedony.png', description: 'A nurturing stone that promotes brotherhood and good will.' },
  { name: 'Chrysocolla', image: '/stones-photo/chrysocolla.png', description: 'A tranquil stone that aids meditation and communication.' },
  { name: 'Chrysoprase', image: '/stones-photo/chrysoprase.png', description: 'Induces deep meditative states and promotes a sense of being part of the divine whole.' },
  { name: 'Citrine', image: '/stones-photo/citrine.png', description: 'A powerful cleanser and regenerator that carries the power of the sun.' },
  { name: 'Coral', image: '/stones-photo/coral.png', description: 'Quiets the emotions and brings peace within the self.' },
  { name: 'Dioptase', image: '/stones-photo/dioptase-stone.png', description: 'A powerful healer for the heart and a mental cleanser.' },
  { name: 'Emerald', image: '/stones-photo/emarld.png', description: 'A stone of successful love, it brings domestic bliss and loyalty.' },
  { name: 'Fire Agate', image: '/stones-photo/fireagate.png', description: 'Has a deep connection to the earth and its energy is calming, bringing security.' },
  { name: 'Fluorite', image: '/stones-photo/fluorite.png', description: 'Highly protective, especially on a psychic level.' },
  { name: 'Garnet', image: '/stones-photo/garnet.png', description: 'A powerfully energizing and regenerating stone.' },
  { name: 'Hematite', image: '/stones-photo/hematitie.png', description: 'Particularly effective at grounding and protecting.' },
  { name: 'Herkimer Diamond', image: '/stones-photo/herkimerdiamond.png', description: 'A high-vibration stone that stimulates psychic abilities.' },
  { name: 'Howlite', image: '/stones-photo/howlite.png', description: 'An extremely calming stone.' },
  { name: 'Iolite', image: '/stones-photo/iolite.png', description: 'A vision stone that activates the third eye and facilitates visualization.' },
  { name: 'Jade', image: '/stones-photo/jade.png', description: 'A symbol of purity and serenity.' },
  { name: 'Jasper', image: '/stones-photo/jasper.png', description: 'Known as the "supreme nurturer".' },
  { name: 'Jet', image: '/stones-photo/jet.png', description: 'A stone of protection, it guards against violence and illness.' },
  { name: 'Kyanite', image: '/stones-photo/kyanite.png', description: 'Excellent for attunement and meditation.' },
  { name: 'Labradorite', image: '/stones-photo/labradorite.png', description: 'A highly mystical and protective stone, a bringer of light.' },
  { name: 'Lapis Lazuli', image: '/stones-photo/lapis.png', description: 'Opens the third eye and balances the throat chakra.' },
  { name: 'Larimar', image: '/stones-photo/larimar.png', description: 'Radiates love and peace and promotes tranquility.' },
  { name: 'Lepidolite', image: '/stones-photo/lepidolite.png', description: 'A stone of transition, it assists in the release and reorganization of old patterns.' },
  { name: 'Magnesite', image: '/stones-photo/magnesite.png', description: 'Brings a calming effect to the emotions.' },
  { name: 'Malachite', image: '/stones-photo/malachite.png', description: 'A powerful stone but one that needs to be handled with caution.' },
  { name: 'Moldavite', image: '/stones-photo/moldavite.png', description: 'A rare stone of rapid and powerful spiritual transformation.' },
  { name: 'Moonstone', image: '/stones-photo/moonstone.png', description: 'A stone of new beginnings.' },
  { name: 'Morganite', image: '/stones-photo/morganite.png', description: 'Attracts love and maintains it.' },
  { name: 'Obsidian', image: '/stones-photo/obsidian.png', description: 'A stone without boundaries or limitations.' },
  { name: 'Opal', image: '/stones-photo/opal.png', description: 'A delicate stone with a fine vibration.' },
  { name: 'Orthoclase', image: '/stones-photo/orthoclase.png', description: 'A variety of feldspar, known for its connection to the sun and personal power.' },
  { name: 'Onyx', image: '/stones-photo/oynx.png', description: 'A strength-giving stone, beneficial for athletes or people under mental and emotional stress.' },
  { name: 'Pearl', image: '/stones-photo/pearl.png', description: 'Signifies faith, charity, and innocence.' },
  { name: 'Peridot', image: '/stones-photo/Peridot.png', description: 'A protective stone for the aura.' },
  { name: 'Pietersite', image: '/stones-photo/pietersite.png', description: 'Known as the tempest stone because of its connection to the storm element.' },
  { name: 'Prehnite', image: '/stones-photo/prehnite.png', description: 'A stone of unconditional love and the crystal to heal the healer.' },
  { name: 'Pyrite', image: '/stones-photo/pyrite.png', description: 'An excellent energy shield.' },
  { name: 'Quartz', image: '/stones-photo/quartz.png', description: 'The most powerful healing and energy amplifier on the planet.' },
  { name: 'Rhodonite', image: '/stones-photo/rhondite.png', description: 'An emotional balancer that nurtures love.' },
  { name: 'Rose Quartz', image: '/stones-photo/rose.png', description: 'The stone of unconditional love and infinite peace.' },
  { name: 'Ruby', image: '/stones-photo/ruby.png', description: 'An excellent stone for energy.' },
  { name: 'Sapphire', image: '/stones-photo/sapphire.png', description: 'Known as the wisdom stone.' },
  { name: 'Serpentine', image: '/stones-photo/serpentine.png', description: 'An earthing stone that aids meditation and spiritual exploration.' },
  { name: 'Smoky Quartz', image: '/stones-photo/smokyquartz.png', description: 'One of the most efficient grounding and anchoring stones.' },
  { name: 'Sodalite', image: '/stones-photo/sodalite.png', description: 'Unites logic with intuition.' },
  { name: 'Spinel', image: '/stones-photo/spinel.png', description: 'Connected with energy renewal, encouragement in difficult circumstances, and rejuvenation.' },
  { name: 'Sunstone', image: '/stones-photo/sunstone.png', description: 'A joyful, light-inspiring stone.' },
  { name: 'Tanzanite', image: '/stones-photo/tanzanite.png', description: 'A stone of magic that stimulates the throat, third eye, and crown chakras.' },
  { name: 'Tiger\'s Eye', image: '/stones-photo/tigerseye.png', description: 'A protective stone that was traditionally carried as a talisman against ill wishing and curses.' },
  { name: 'Topaz', image: '/stones-photo/topaz.png', description: 'A mellow, empathetic stone that directs energy to where it is needed most.' },
  { name: 'Tourmaline', image: '/stones-photo/tourmaline.png', description: 'Cleanses, purifies, and transforms dense energy into a lighter vibration.' },
  { name: 'Turquoise', image: '/stones-photo/turquoise.png', description: 'A most efficient healer, providing solace for the spirit and well-being for the body.' },
  { name: 'Zircon', image: '/stones-photo/zircon.png', description: 'A stone of virtue, it promotes innocence and purity.' },
  { name: 'Zoisite', image: '/stones-photo/zoisite.png', description: 'A stone of creativity, it aids in expressing one\'s own self and avoiding the influence of others.' },
];

const Stone = () => {
  return (
    <div className="min-h-screen bg-zinc-900 text-zinc-100">
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

          <div className="flex items-center gap-8 text-sm font-medium">
            <Link to="/" className="text-zinc-300 hover:text-amber-500 transition">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <Link to="/" className="text-zinc-300 hover:text-amber-500 transition">Home</Link>
            <Link to="/gallery" className="text-zinc-300 hover:text-amber-500 transition">Gallery</Link>
            <Link to="/gallery/stone" className="text-amber-500 font-semibold">Gemstones</Link>
          </div>
        </div>
      </nav>

      {/* Page Header */}
      <div className="py-20 bg-gradient-to-b from-zinc-800/50 to-zinc-900">
        <div className="container mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-sm font-medium mb-6">
            <Gem className="w-4 h-4" />
            <span>Sacred Crystals</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            Gemstone Collection
          </h1>
          <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Discover the unique energies and properties of our curated selection of mystical stones.
          </p>
        </div>
      </div>

      {/* Stones Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {stones.map((stone, index) => (
              <div
                key={stone.name}
                className="group bg-zinc-800/50 rounded-2xl border border-zinc-700/50 hover:border-amber-500/50 overflow-hidden transition-all duration-300 hover:-translate-y-2"
              >
                <div className="h-64 bg-zinc-800 flex items-center justify-center p-6 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <img
                    src={stone.image}
                    alt={stone.name}
                    className="max-h-full max-w-full object-contain filter drop-shadow-lg transform group-hover:scale-110 transition-transform duration-500 relative z-10"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-zinc-100 mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                    {stone.name}
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">{stone.description}</p>
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

export default Stone;