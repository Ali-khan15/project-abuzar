import React from 'react';
import { 
  FaClock, 
  FaCrosshairs, 
  FaMoneyBillAlt,
  FaPaintRoller,
  FaLayerGroup,
  FaVectorSquare,
  FaHome,
  FaBuilding
} from 'react-icons/fa';

const WhyChoose = () => {
  const features = [
    {
      icon: <FaClock className="text-3xl" />,
      heading: "Fast Turnaround",
      description: "Receive your estimates within 24–48 hours."
    },
    {
      icon: <FaCrosshairs className="text-3xl" />,
      heading: "Highly Accurate Takeoffs",
      description: "Powered by advanced tools & expert estimators."
    },
    {
      icon: <FaMoneyBillAlt className="text-3xl" />,
      heading: "Affordable Pricing",
      description: "Transparent per-project pricing—no hidden fees."
    }
  ];

  const services = [
    {
      icon: <FaPaintRoller className="text-2xl" />,
      name: "Paint Estimation",
      description: "Detailed paint quantity calculation, surface measurements & material breakdown."
    },
    {
      icon: <FaLayerGroup className="text-2xl" />,
      name: "Flooring Estimation",
      description: "Tile, vinyl, carpet, hardwood — complete sq. ft. takeoffs."
    },
    {
      icon: <FaVectorSquare className="text-2xl" />,
      name: "Drywall & Framing Estimation",
      description: "Board count, framing details, studs, fasteners & labor costing."
    },
    {
      icon: <FaHome className="text-2xl" />,
      name: "Roofing Estimation",
      description: "Shingles, metal, membrane — full material & waste factor breakdown."
    },
    {
      icon: <FaBuilding className="text-2xl" />,
      name: "Full Construction Takeoff",
      description: "Complete CSI Divisions for large-scale projects."
    }
  ];

  return (
    <section id="why-choose" className="py-16 lg:py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gold-500 mb-6">
            Why Choose YAM Estimation?
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Your Trusted Partner for Professional Estimating Services
          </p>
        </div>
        
        {/* Features Grid - First 3 Points (Kept as before) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6">
              <div className="flex justify-center mb-4 text-gold-500">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {feature.heading}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stylish Services Box */}
        <div className="bg-black/60 backdrop-blur-xl border-2 border-gold-500/30 rounded-3xl p-8 lg:p-12 transition-all duration-500 hover:border-gold-500/50 hover:bg-black/70">
          
          {/* Services Header */}
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gold-500 mb-4">
              Our Estimation Services
            </h3>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Comprehensive takeoff services for every aspect of your construction project
            </p>
          </div>

          {/* Perfectly Centered Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="bg-black/40 backdrop-blur-md border border-gold-500/20 rounded-xl p-6 transition-all duration-300 hover:border-gold-500/50 hover:bg-gold-500/10 hover:transform hover:scale-105 group w-full max-w-sm"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 text-gold-500 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-gold-400 transition-colors duration-300">
                      {service.name}
                    </h4>
                    <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default WhyChoose;