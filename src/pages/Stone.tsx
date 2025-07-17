import React from 'react';
import CelestialBackground from '@/components/CelestialBackground';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const stones = [
  {
    name: 'Amethyst',
    description: 'A calming purple quartz believed to bring peace, balance, and clarity.',
    image: '/stones-photo/amethyst.png',
  },
  {
    name: 'Rose Quartz',
    description: 'The pink stone of love, compassion, and emotional healing.',
    image: '/stones-photo/rose.png',
  },
  {
    name: 'Emerald',
    description: 'A green beryl symbolizing rebirth, love, and prosperity.',
    image: '/stones-photo/emarld.png',
  },
  {
    name: 'Ruby',
    description: 'A red corundum stone of passion, energy, and life force.',
    image: '/stones-photo/ruby.png',
  },
  {
    name: 'Sapphire',
    description: 'A blue corundum associated with wisdom, royalty, and divine favor.',
    image: '/stones-photo/sapphire.png',
  },
  {
    name: 'Citrine',
    description: 'A yellow quartz known as the stone of abundance and manifestation.',
    image: '/stones-photo/citrine.png',
  },
  {
    name: 'Turquoise',
    description: 'A blue-green stone for healing, protection, and strength.',
    image: '/stones-photo/turquoise.png',
  },
  {
    name: 'Lapis Lazuli',
    description: 'A deep blue stone encouraging self-awareness and expression.',
    image: '/stones-photo/lapis.png',
  },
  {
    name: 'Obsidian',
    description: 'A volcanic glass for protection and grounding.',
    image: '/stones-photo/obsidian.png',
  },
  {
    name: 'Garnet',
    description: 'A red stone for energy, regeneration, and balance.',
    image: '/stones-photo/garnet.png',
  },
  {
    name: 'Aquamarine',
    description: 'A blue beryl for calm, courage, and clarity.',
    image: '/stones-photo/aquamarine.png',
  },
  {
    name: 'Topaz',
    description: 'A golden or blue stone for joy, generosity, and abundance.',
    image: '/stones-photo/topaz.png',
  },
  {
    name: 'Peridot',
    description: 'A green olivine for growth, renewal, and positivity.',
    image: '/stones-photo/Peridot.png',
  },
  {
    name: 'Moonstone',
    description: 'A shimmering stone for intuition, inspiration, and new beginnings.',
    image: '/stones-photo/moonstone.png',
  },
  {
    name: 'Onyx',
    description: 'A black stone for strength, grounding, and protection.',
    image: '/stones-photo/oynx.png',
  },
  {
    name: 'Malachite',
    description: 'A green-banded stone for transformation and healing.',
    image: '/stones-photo/malachite.png',
  },
  {
    name: 'Opal',
    description: 'A rainbow-hued stone for inspiration and creativity.',
    image: '/stones-photo/opal.png',
  },
  {
    name: 'Tiger’s Eye',
    description: 'A golden-brown stone for confidence, courage, and protection.',
    image: '/stones-photo/tigerseye.png',
  },
  {
    name: 'Bloodstone',
    description: 'A green jasper with red spots for vitality and courage.',
    image: '/stones-photo/bllodstone.png',
  },
  {
    name: 'Amazonite',
    description: 'A blue-green stone for harmony and communication.',
    image: '/stones-photo/amazonite.png',
  },
  {
    name: 'Aventurine',
    description: 'A green quartz for luck, prosperity, and confidence.',
    image: '/stones-photo/aventurine.png',
  },
  {
    name: 'Carnelian',
    description: 'An orange-red stone for motivation and creativity.',
    image: '/stones-photo/carnelian.png',
  },
  {
    name: 'Chalcedony',
    description: 'A blue or white stone for calm and communication.',
    image: '/stones-photo/chalcedony.png',
  },
  {
    name: 'Chrysoprase',
    description: 'A green stone for joy, optimism, and truth.',
    image: '/stones-photo/chrysoprase.png',
  },
  {
    name: 'Fluorite',
    description: 'A multicolored stone for focus and clarity.',
    image: '/stones-photo/fluorite.png',
  },
  {
    name: 'Hematite',
    description: 'A metallic gray stone for grounding and protection.',
    image: '/stones-photo/hematitie.png',
  },
  {
    name: 'Jasper',
    description: 'A red, yellow, or brown stone for stability and nurturing.',
    image: '/stones-photo/jasper.png',
  },
  {
    name: 'Kyanite',
    description: 'A blue stone for communication and tranquility.',
    image: '/stones-photo/kyanite.png',
  },
  {
    name: 'Labradorite',
    description: 'A shimmering stone for transformation and intuition.',
    image: '/stones-photo/labradorite.png',
  },
  {
    name: 'Larimar',
    description: 'A blue stone for peace and clarity.',
    image: '/stones-photo/larimar.png',
  },
  {
    name: 'Morganite',
    description: 'A pink beryl for love and compassion.',
    image: '/stones-photo/morganite.png',
  },
  {
    name: 'Pyrite',
    description: 'A gold metallic stone for protection and abundance.',
    image: '/stones-photo/pyrite.png',
  },
  {
    name: 'Rhodonite',
    description: 'A pink and black stone for emotional healing.',
    image: '/stones-photo/rhondite.png',
  },
  {
    name: 'Smoky Quartz',
    description: 'A brown quartz for grounding and stress relief.',
    image: '/stones-photo/smokyquartz.png',
  },
  {
    name: 'Sunstone',
    description: 'A sparkling stone for joy and empowerment.',
    image: '/stones-photo/sunstone.png',
  },
  {
    name: 'Tanzanite',
    description: 'A blue-violet stone for transformation and intuition.',
    image: '/stones-photo/tanzanite.png',
  },
  {
    name: 'Tourmaline',
    description: 'A multicolored stone for protection and inspiration.',
    image: '/stones-photo/tourmaline.png',
  },
  {
    name: 'Zircon',
    description: 'A clear or colored stone for wisdom and honor.',
    image: '/stones-photo/zircon.png',
  },
  {
    name: 'Spinel',
    description: 'A red, pink, or blue stone for revitalization and energy.',
    image: '/stones-photo/spinel.png',
  },
  {
    name: 'Sodalite',
    description: 'A blue stone for logic and intuition.',
    image: '/stones-photo/sodalite.png',
  },
  {
    name: 'Serpentine',
    description: 'A green stone for healing and meditation.',
    image: '/stones-photo/serpentine.png',
  },
  {
    name: 'Prehnite',
    description: 'A green stone for unconditional love and healing.',
    image: '/stones-photo/prehnite.png',
  },
  {
    name: 'Pietersite',
    description: 'A blue-gold stone for transformation and insight.',
    image: '/stones-photo/pietersite.png',
  },
  {
    name: 'Moldavite',
    description: 'A green tektite for spiritual awakening.',
    image: '/stones-photo/moldavite.png',
  },
  {
    name: 'Lepidolite',
    description: 'A lilac stone for emotional balance and peace.',
    image: '/stones-photo/lepidolite.png',
  },
  {
    name: 'Howlite',
    description: 'A white stone for calm and patience.',
    image: '/stones-photo/howlite.png',
  },
  {
    name: 'Herkimer Diamond',
    description: 'A clear quartz for clarity and high energy.',
    image: '/stones-photo/herkimerdiamond.png',
  },
  {
    name: 'Fire Agate',
    description: 'A brown-red stone for protection and vitality.',
    image: '/stones-photo/fireagate.png',
  },
  {
    name: 'Celestite',
    description: 'A pale blue stone for peace and communication.',
    image: '/stones-photo/celestite.png',
  },
  {
    name: 'Azurite',
    description: 'A deep blue stone for insight and intuition.',
    image: '/stones-photo/azurite.png',
  },
  {
    name: 'Apatite',
    description: 'A blue-green stone for motivation and inspiration.',
    image: '/stones-photo/apatitie.png',
  },
  {
    name: 'Agate',
    description: 'A banded stone for stability and grounding.',
    image: '/stones-photo/agate.png',
  },
  {
    name: 'Alexandrite',
    description: 'A color-changing stone for joy and self-esteem.',
    image: '/stones-photo/alexandrite.png',
  },
  {
    name: 'Amber',
    description: 'A fossilized resin for healing and cleansing.',
    image: '/stones-photo/amber.png',
  },
  {
    name: 'Beryl',
    description: 'A mineral family including emerald and aquamarine.',
    image: '/stones-photo/beryl.png',
  },
  {
    name: 'Chrysocolla',
    description: 'A blue-green stone for communication and teaching.',
    image: '/stones-photo/chrysocolla.png',
  },
  {
    name: 'Coral',
    description: 'An organic stone for protection and emotional balance.',
    image: '/stones-photo/coral.png',
  },
  {
    name: 'Dioptase',
    description: 'A green stone for forgiveness and compassion.',
    image: '/stones-photo/dioptase-stone.png',
  },
  {
    name: 'Iolite',
    description: 'A violet-blue stone for vision and creativity.',
    image: '/stones-photo/iolite.png',
  },
  {
    name: 'Jet',
    description: 'A black fossilized wood for protection and purification.',
    image: '/stones-photo/jet.png',
  },
  {
    name: 'Magnesite',
    description: 'A white stone for relaxation and meditation.',
    image: '/stones-photo/magnesite.png',
  },
  {
    name: 'Orthoclase',
    description: 'A yellow feldspar for clarity and cooperation.',
    image: '/stones-photo/orthoclase.png',
  },
  {
    name: 'Pearl',
    description: 'An organic gem for purity and wisdom.',
    image: '/stones-photo/pearl.png',
  },
  {
    name: 'Quartz',
    description: 'A clear or colored stone for energy and clarity.',
    image: '/stones-photo/quartz.png',
  },
  {
    name: 'Zoisite',
    description: 'A green or pink stone for growth and creativity.',
    image: '/stones-photo/zoisite.png',
  },
];

const Stone = () => {
  return (
    <div className="min-h-screen relative bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
      <CelestialBackground />
      {/* Navigation Buttons */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-8 mb-8">
        <Link to="/" className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-bold shadow-lg hover:scale-105 transition-transform text-2xl">Home</Link>
        <Link to="/gallery" className="px-8 py-4 bg-gradient-to-r from-purple-400 to-yellow-400 text-white rounded-full font-bold shadow-lg hover:scale-105 transition-transform text-2xl">Gallery</Link>
        <span className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-pink-400 text-white rounded-full font-bold shadow-lg text-2xl border-4 border-yellow-300 cursor-default">Stones</span>
      </div>
      <div className="relative z-10 min-h-screen">
        <section className="container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 text-emerald-300">Stones</h1>
            <p className="text-xl md:text-2xl text-emerald-100 mb-8 max-w-3xl mx-auto">
              Explore 50 of the world’s most beautiful and mystical stones.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {stones.map((stone, idx) => (
              <Card key={idx} className="bg-black/30 border-emerald-400/30 shadow-xl rounded-2xl overflow-hidden flex flex-col items-center">
                <img src={stone.image} alt={stone.name} className="w-full h-64 object-cover" />
                <CardContent className="p-6 text-center flex-1 flex flex-col justify-between">
                  <h3 className="text-2xl font-bold text-emerald-300 mb-2">{stone.name}</h3>
                  <p className="text-emerald-100 text-base">{stone.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
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

export default Stone; 