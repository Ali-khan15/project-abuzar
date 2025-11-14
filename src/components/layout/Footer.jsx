import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const quickLinks = [
    { name: 'Services', section: 'services' },
    { name: 'Why Choose Us', section: 'why-choose' },
    { name: 'Portfolio', section: 'portfolio' },
    { name: 'Pricing', section: 'pricing' },
    { name: 'Contact', section: 'free-sample' },
    { name: 'Book Consultation', section: 'free-sample' }
  ];

  return (
    <footer className="bg-black/90 backdrop-blur-lg border-t border-gold-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Left Side - Brand */}
          <div className="space-y-4">
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center space-x-3 hover:opacity-80 transition-opacity duration-300 text-left"
            >
              <div className="w-12 h-12 bg-gold-500 rounded-lg flex items-center justify-center">
                <span className="text-black font-bold text-xl">Y</span>
              </div>
              <div>
                <h2 className="text-white font-bold text-2xl">YAM Estimation</h2>
                <p className="text-gold-400 text-sm">Professional Construction Estimating Services</p>
              </div>
            </button>
            
            <p className="text-gray-400 text-sm max-w-md">
              Providing accurate construction estimates and takeoff services for contractors, 
              builders, and subcontractors across multiple countries.
            </p>
          </div>

          {/* Right Side - Quick Links */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
            <div className="grid grid-cols-2 gap-4">
              {quickLinks.map((link, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(link.section)}
                  className="text-gray-400 hover:text-gold-400 transition-colors duration-300 text-sm text-left"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gold-500/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} YAM Estimation. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <button className="text-gray-400 hover:text-gold-400 transition-colors duration-300 text-sm">
              Privacy Policy
            </button>
            <button className="text-gray-400 hover:text-gold-400 transition-colors duration-300 text-sm">
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;