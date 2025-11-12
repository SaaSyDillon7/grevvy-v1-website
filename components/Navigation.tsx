'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Services', href: '#services' },
  { name: 'How It Works', href: '#how-it-works' },
  { name: 'Results', href: '#results' },
  { name: 'Case Studies', href: '#case-studies' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'FAQ', href: '#faq' },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-nav border-b border-purple-500/20' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="text-2xl md:text-3xl font-bold gradient-text-accent hover:scale-105 transition-transform cursor-pointer"
          >
            GREVVY
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-gray-300 hover:text-purple-400 transition-colors duration-200 text-sm lg:text-base"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#cta"
              onClick={(e) => scrollToSection(e, '#cta')}
              className="gradient-brand text-white px-6 py-2 rounded-lg hover:scale-105 transition-transform duration-300 font-medium text-sm lg:text-base"
            >
              Get Started
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-gray-300 hover:text-purple-400 transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-nav border-t border-purple-500/20">
          <div className="px-4 pt-2 pb-4 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="block text-gray-300 hover:text-purple-400 hover:bg-purple-500/10 px-4 py-3 rounded-lg transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#cta"
              onClick={(e) => scrollToSection(e, '#cta')}
              className="block gradient-brand text-white text-center px-4 py-3 rounded-lg hover:scale-105 transition-transform duration-300 font-medium mt-4"
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
