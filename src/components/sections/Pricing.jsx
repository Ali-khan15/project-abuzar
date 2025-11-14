import React from 'react';

const Pricing = () => {
  const plans = [
    {
      name: "Basic Takeoff",
      description: "For small residential projects",
      price: "Starting at $50",
      popular: false,
      features: [
        "Fast Delivery",
        "Standard Measurements", 
        "PDF + Excel Output"
      ]
    },
    {
      name: "Standard Takeoff",
      description: "Most Popular",
      price: "$100 – $250",
      popular: true,
      features: [
        "Residential + Commercial",
        "Detailed Breakdown",
        "Editable Excel Sheets",
        "Priority Support"
      ]
    },
    {
      name: "Premium Full Estimate",
      description: "For large builders & contractors",
      price: "Custom Pricing",
      popular: false,
      features: [
        "Multi-Trade Takeoff",
        "Labor + Material Costing", 
        "Project Scheduling"
      ]
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gold-500 mb-4">
            Simple & Transparent Pricing
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Professional takeoff services tailored to your project needs
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative rounded-2xl p-8 transition-all duration-500 group hover:transform hover:scale-105 ${
                plan.popular 
                  ? 'bg-black/80 backdrop-blur-lg border-2 border-gold-500 shadow-lg shadow-gold-500/20' 
                  : 'bg-black/60 backdrop-blur-md border border-gold-500/30'
              }`}
            >
              
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gold-500 text-black px-4 py-1 rounded-full text-sm font-bold">
                    MOST POPULAR
                  </span>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gold-400 mb-4">{plan.description}</p>
                <div className="text-3xl font-bold text-gold-500">{plan.price}</div>
              </div>

              {/* Features List */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-300">
                    <svg className="w-5 h-5 text-gold-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <a
                href="https://calendly.com/yamestimation/30min"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-4 px-6 rounded-lg font-bold transition-all duration-300 block text-center ${
                  plan.popular
                    ? 'bg-gold-500 hover:bg-gold-600 text-black transform hover:scale-105'
                    : 'bg-gold-500/20 hover:bg-gold-500/30 text-gold-400 border border-gold-500/30 hover:border-gold-500/50'
                }`}
              >
                Get Started
              </a>
            </div>
          ))}
        </div>

        {/* Custom Quote CTA */}
        <div className="text-center mb-16">
          <a
            href="https://calendly.com/yamestimation/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-transparent border-2 border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-black font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 inline-block"
          >
            Request a Custom Quote
          </a>
        </div>

        {/* Bottom CTA Section */}
        <div className="bg-black/80 backdrop-blur-lg rounded-2xl border border-gold-500/30 p-12 text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-gold-500 mb-4">
            Ready to Save Time & Win More Bids?
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Upload your plans and get a professionally prepared estimate within 24–48 hours.
          </p>
          <a
            href="https://calendly.com/yamestimation/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gold-500 hover:bg-gold-600 text-black font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 inline-block"
          >
            Get Started Now
          </a>
        </div>

      </div>
    </section>
  );
};

export default Pricing;