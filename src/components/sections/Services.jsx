import React from 'react';

const Services = () => {
  const brands = [
    {
      name: "Mavis Tyres",
      logo: "/logos/mavis_Logo.png"
    },
    {
      name: "Shake Shack",
      logo: "/logos/shake-shack.png"
    },
    {
      name: "Gorjana",
      logo: "/logos/Gorjana.webp"
    },
    {
      name: "7 Eleven",
      logo: "/logos/7-eleven.png"
    },
    {
      name: "Tim Hortons",
      logo: "/logos/tim-horton.png"
    },
    {
      name: "Dunkin Donuts",
      logo: "/logos/dunkin.png"
    },
    {
      name: "Whole Foods Market",
      logo: "/logos/whole-foods.png"
    },
    {
      name: "Walmart",
      logo: "/logos/walmart.png"
    },
  ];

  const duplicatedBrands = [...brands, ...brands];

  return (
    <section id="services" className="py-20 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gold-500 mb-4">
              Our Work Speaks for Itself

          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We're proud to have worked with some of the biggest names in the business
          </p>
        </div>

        {/* Simple Logo Slider */}
        <div className="relative">
          <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-black to-transparent z-10"></div>
          <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-black to-transparent z-10"></div>

          <div className="flex space-x-16 py-12 animate-slideSimple">
            {duplicatedBrands.map((brand, index) => (
              <div key={index} className="flex-shrink-0">
                <div className="w-40 h-20 flex items-center justify-center opacity-70 hover:opacity-100 hover:scale-110 transition-all duration-100">
                  <img 
                    src={brand.logo} 
                    alt={brand.name}
                    className="max-w-full max-h-16 object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      <style jsx>{`
        @keyframes slideSimple {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-100% / 2));
          }
        }
        .animate-slideSimple {
          animation: slideSimple 45s linear infinite;
        }
        .animate-slideSimple:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Services;