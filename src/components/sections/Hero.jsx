import React from "react";
import heroImage from "../../assets/image/hero.jpg";
import logo from "../../assets/image/logo.svg";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen bg-black flex items-center px-4 py-8">
      <div className="max-w-7xl mx-auto w-full">
        {/* Logo Section */}
        <div className="mb-8 lg:mb-12">
          <img
            src={logo}
            alt="YAM Estimation Logo"
            className="h-12 md:h-16 lg:h-20 w-auto"
          />
        </div>

        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="flex justify-center w-full order-1 lg:order-2 lg:justify-end">
            <div className="w-full max-w-full lg:max-w-2xl">
              <img
                src={heroImage}
                alt="Construction Estimating Services"
                className="w-full h-auto rounded-2xl shadow-2xl border-2 border-gold-500/30"
              />
            </div>
          </div>

          <div className="text-center lg:text-left order-2 lg:order-1">
            <div className="mb-6 lg:mb-8">
              <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold leading-tight">
                <span className="text-gold-500">Accurate Construction Estimates </span>
                <span className="text-gold-500">
                  Delivered Fast & Professionally
                </span>
              </h1>
            </div>

            <div className="mb-8 lg:mb-10">
              <p className="text-md md:text-l lg:text-2xl text-gray-500 leading-relaxed max-w-3xl mx-auto lg:mx-0">
                Helping USA, Canada, UK & Australia Contractors Win More Projects With Precise Material Takeoffs & Costing.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 justify-center lg:justify-start">
              <a
                href="https://calendly.com/yamestimation/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gold-500 hover:bg-gold-600 text-black font-bold py-3 px-6 lg:py-5 lg:px-10 rounded-lg text-base lg:text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl w-full sm:w-auto text-center"
              >
                Get Your Free Quote
              </a>
              <a
                href="https://calendly.com/yamestimation/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-gold-500 text-gold-400 hover:bg-gold-500 hover:text-black font-bold py-3 px-6 lg:py-5 lg:px-10 rounded-lg text-base lg:text-xl transition-all duration-300 transform hover:scale-105 w-full sm:w-auto text-center"
              >
                View Sample Estimates
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;