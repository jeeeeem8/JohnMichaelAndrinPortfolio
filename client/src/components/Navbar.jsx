import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon } from 'lucide-react';
import MobileMenu from './MobileMenu';

const links = [
  { name: 'Home', to: '/' },
  { name: 'Skills', to: '/skills' },
  { name: 'Education', to: '/education' },
  { name: 'Projects', to: '/projects' },
  { name: 'Contact', to: '/contact' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('darkMode') === 'true';
    }
    return false;
  });

  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
  }, [menuOpen]);

  useEffect(() => {
    if (darkMode) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  return (
    <>
      <nav
        className={`fixed w-full top-0 z-50 transition-all duration-300 backdrop-blur-md ${
          scrolled
            ? 'bg-white/70 dark:bg-gray-800/70 h-16'
            : 'bg-transparent h-20'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-12 lg:px-24 h-full">
          
          {/* Logo */}
          <Link to="/" className="font-bold text-l text-primary">
            JEEM
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-8">
            {links.map(link => (
              <Link
                key={link.name}
                to={link.to}
                className="relative group py-2 text-black dark:text-white"
              >
                {link.name}
                <span
                  className={`absolute bottom-0 left-0 w-full h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left ${
                    location.pathname === link.to ? 'scale-x-100' : ''
                  }`}
                />
              </Link>
            ))}
          </div>

          {/* Right Controls */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setDarkMode(prev => !prev)}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <button
              onClick={() => setMenuOpen(prev => !prev)}
              className="md:hidden p-2 z-50"
            >
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <MobileMenu
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        links={links}
      />
    </>
  );
}