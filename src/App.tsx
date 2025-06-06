import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Benefits from './components/Benefits';
import HowItWorks from './components/HowItWorks';
import AppPreview from './components/AppPreview';
import FAQ from './components/FAQ';
import Contact from './components/Contact';

function App() {
  useEffect(() => {
    // Update document title
    document.title = "Vidzero Creator | User-Generated Content for Charities";
  }, []);
  
  return (
    <div className="font-sans">
      <Header />
      <main>
        <Hero />
        <Features />
        <Benefits />
        <HowItWorks />
        <AppPreview />
        <FAQ />
        <Contact />
      </main>
    </div>
  );
}

export default App;