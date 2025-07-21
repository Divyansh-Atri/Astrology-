import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Image, Gem } from 'lucide-react';

const navLinks = [
  { name: 'Home', path: '/', icon: Home },
  { name: 'Gallery', path: '/gallery', icon: Image },
  { name: 'Stones', path: '/gallery/stone', icon: Gem },
];

const Sidebar = () => {
  const location = useLocation();

  return (
    <aside className="fixed top-0 left-0 h-screen w-64 bg-zinc-900/80 border-r border-zinc-200/10 backdrop-blur-lg flex flex-col items-center py-10 z-40">
      <div className="text-center mb-16">
        <Link to="/" className="text-3xl font-bold text-amber-500 tracking-wider" style={{ fontFamily: 'Playfair Display, serif' }}>
          Celestial
          <br />
          Wisdom
        </Link>
      </div>
      <nav className="flex flex-col gap-6 w-full px-8">
        {navLinks.map((link) => {
          const isActive = location.pathname === link.path;
          return (
            <Link
              key={link.name}
              to={link.path}
              className={`flex items-center gap-4 px-4 py-3 rounded-lg text-lg font-semibold transition-colors duration-300 ${
                isActive
                  ? 'bg-amber-500/10 text-amber-500'
                  : 'text-zinc-300 hover:bg-zinc-700/50 hover:text-zinc-100'
              }`}
            >
              <link.icon className={`w-6 h-6 transition-colors ${isActive ? 'text-amber-500' : 'text-zinc-400'}`} />
              <span>{link.name}</span>
            </Link>
          );
        })}
      </nav>
      <div className="mt-auto text-center text-zinc-500 text-sm">
        <p>© {new Date().getFullYear()} Celestial Wisdom</p>
      </div>
    </aside>
  );
};

export default Sidebar; 