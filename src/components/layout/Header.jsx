import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { name: 'Services', section: 'services' },
    { name: 'Why Choose Us', section: 'why-choose' },
    { name: 'Portfolio', section: 'portfolio' },
    { name: 'Pricing', section: 'pricing' },
    { name: 'Contact', section: 'free-sample' },
  ];

  return (
    <header className="bg-black/90 backdrop-blur-lg border-b border-gold-500/20 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          
          {/* Logo - Clickable to scroll to top */}
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center space-x-3 hover:opacity-80 transition-opacity duration-300"
          >
            <div className="w-10 h-10 bg-gold-500 rounded-lg flex items-center justify-center">
              <span className="text-black font-bold text-lg">Y</span>
            </div>
            <div>
              <h1 className="text-white font-bold text-xl">YAM Estimation</h1>
              <p className="text-gold-400 text-xs">Professional Estimating Services</p>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item, index) => (
              <button
                key={index}
                onClick={() => scrollToSection(item.section)}
                className="text-white hover:text-gold-400 transition-colors duration-300 font-medium whitespace-nowrap"
              >
                {item.name}
              </button>
            ))}
            {/* Book Consultation Button with Calendly Link */}
            <a
              href="https://calendly.com/yamestimation/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gold-500 text-black hover:bg-gold-600 px-4 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 whitespace-nowrap"
            >
              Book Consultation
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-gold-500 hover:text-gold-400 transition-colors duration-300 p-2"
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gold-500/20">
            <nav className="flex flex-col space-y-3">
              {navItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(item.section)}
                  className="text-white hover:text-gold-400 py-3 transition-colors duration-300 text-center font-medium"
                >
                  {item.name}
                </button>
              ))}
              {/* Book Consultation Button for Mobile */}
              <a
                href="https://calendly.com/yamestimation/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gold-500 text-black hover:bg-gold-600 px-4 py-3 rounded-lg font-semibold text-center transition-all duration-300"
              >
                Book Consultation
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;