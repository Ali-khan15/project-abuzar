import React from 'react';

const AboutUs = () => {
  return (
    <section id="about" className="py-20 bg-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-black/60 backdrop-blur-xl border-2 border-gold-500/30 rounded-3xl p-8 lg:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gold-500 mb-6">
            Who We Are
          </h2>
          <div className="space-y-6">
            <p className="text-gray-300 text-lg leading-relaxed">
              YAM Estimation is a professional estimating company helping contractors, builders, and subcontractors across the USA, Canada, UK, and Australia.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              We provide highly accurate construction takeoffs, material quantities, and costing that help you bid confidently and win more projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;