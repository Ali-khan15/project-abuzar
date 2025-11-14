import React from 'react';
import Header from './components/layout/Header';
import Hero from './components/sections/Hero';
import WhyChoose from './components/sections/WhyChoose';
import Services from './components/sections/Services';
import Portfolio from './components/sections/Portfolio';
import Pricing from './components/sections/Pricing';
import FreeSample from './components/sections/FreeSample';
import Footer from './components/layout/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main>
        <Hero />
        <WhyChoose />
        <Services />
        <Portfolio />
        <Pricing />
        <FreeSample />
      </main>
      <Footer />
    </div>
  );
}

export default App;