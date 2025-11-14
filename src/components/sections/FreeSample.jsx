import React, { useState } from 'react';
import { FaPaperPlane, FaUser, FaEnvelope, FaUpload } from 'react-icons/fa';

const FreeSample = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    plans: null
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', plans: null });
    alert('Thank you! Your sample request has been sent.');
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value
    });
  };

  const countries = [
    { name: "USA", icon: "🇺🇸" },
    { name: "Canada", icon: "🇨🇦" },
    { name: "UK", icon: "🇬🇧" },
    { name: "Australia", icon: "🇦🇺" }
  ];

  return (
   <section id="free-sample" className="py-20 bg-black">    
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          
          {/* Left Side - Form */}
          <div className="bg-black/60 backdrop-blur-xl border-2 border-gold-500/30 rounded-3xl p-8 lg:p-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gold-500 mb-6 text-center">
              Get a Free Sample Estimate in Your Inbox
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label className="block text-white mb-2 font-semibold">Name</label>
                <div className="relative">
                  <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gold-500" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-black/40 border border-gold-500/30 rounded-lg py-3 pl-10 pr-4 text-white placeholder-gray-400 focus:border-gold-500 focus:outline-none transition-colors duration-300"
                    placeholder="Enter your name"
                    required
                  />
                </div>
              </div>

              {/* Email Field */}
              <div>
                <label className="block text-white mb-2 font-semibold">Email</label>
                <div className="relative">
                  <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gold-500" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-black/40 border border-gold-500/30 rounded-lg py-3 pl-10 pr-4 text-white placeholder-gray-400 focus:border-gold-500 focus:outline-none transition-colors duration-300"
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>

              {/* Upload Plans Field */}
              <div>
                <label className="block text-white mb-2 font-semibold">Upload Plans (Optional)</label>
                <div className="relative">
                  <FaUpload className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gold-500" />
                  <input
                    type="file"
                    name="plans"
                    onChange={handleChange}
                    className="w-full bg-black/40 border border-gold-500/30 rounded-lg py-3 pl-10 pr-4 text-white file:bg-gold-500 file:text-black file:border-0 file:rounded file:px-4 file:py-2 file:mr-4 file:cursor-pointer"
                    accept=".pdf,.dwg,.dxf,.jpg,.png"
                  />
                </div>
                <p className="text-gray-400 text-sm mt-2">Supported formats: PDF, DWG, DXF, JPG, PNG</p>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-gold-500 hover:bg-gold-600 text-black font-bold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <FaPaperPlane />
                <span>Send Me the Sample</span>
              </button>
            </form>
          </div>

          {/* Right Side - About Us */}
          <div className="bg-black/60 backdrop-blur-xl border-2 border-gold-500/30 rounded-3xl p-8 lg:p-10 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gold-500 mb-4 text-center">
                Who We Are
              </h3>
              <div className="space-y-3 mb-6">
                <p className="text-gray-300 text-base leading-relaxed">
                  YAM Estimation is a professional estimating company helping contractors, builders, and subcontractors across the USA, Canada, UK, and Australia.
                </p>
                <p className="text-gray-300 text-base leading-relaxed">
                  We provide highly accurate construction takeoffs, material quantities, and costing that help you bid confidently and win more projects.
                </p>
              </div>
              
              {/* Stats Section - Compact */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="text-center p-3 bg-black/40 rounded-lg border border-gold-500/20">
                  <div className="text-xl font-bold text-gold-500 mb-1">24-48h</div>
                  <div className="text-gray-300 text-xs">Turnaround</div>
                </div>
                <div className="text-center p-3 bg-black/40 rounded-lg border border-gold-500/20">
                  <div className="text-xl font-bold text-gold-500 mb-1">99%+</div>
                  <div className="text-gray-300 text-xs">Accuracy</div>
                </div>
                <div className="text-center p-3 bg-black/40 rounded-lg border border-gold-500/20">
                  <div className="text-xl font-bold text-gold-500 mb-1">4.9/5</div>
                  <div className="text-gray-300 text-xs">Client Rating</div>
                </div>
                <div className="text-center p-3 bg-black/40 rounded-lg border border-gold-500/20">
                  <div className="text-xl font-bold text-gold-500 mb-1">500+</div>
                  <div className="text-gray-300 text-xs">Projects</div>
                </div>
              </div>
            </div>

            {/* Countries We Serve */}
            <div className="text-center pt-6 border-t border-gold-500/20">
              <h4 className="text-base font-semibold text-gold-500 mb-3">
                Countries We Serve
              </h4>
              <div className="flex justify-center space-x-4">
                {countries.map((country, index) => (
                  <div key={index} className="text-2xl">
                    {country.icon}
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default FreeSample;