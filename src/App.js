import React, { useEffect, useState } from 'react';
import './App.css';
import Navbar from './files/pages/Navbar';
import FeaturesSection from './files/pages/FeaturesSection';
import Hero from './files/pages/Hero';
import Services from './files/pages/Services';
import PopUp from './files/pages/PopUp';
import TopStylist from './files/pages/TopStylist';

function App() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Show popup after 15 seconds
    const showTimer = setTimeout(() => {
      setShowPopup(true);

      // Auto hide after 5 seconds
      const hideTimer = setTimeout(() => {
        setShowPopup(false);
      }, 10000);

      return () => clearTimeout(hideTimer);

    }, 15000);

    return () => clearTimeout(showTimer);
  }, []);

  return (
    <div className="App">
      {/* <Navbar /> */}
      <Hero />

      {/* Popup controlled from App.js */}
      <PopUp isVisible={showPopup} onClose={() => setShowPopup(false)} />

      <Services />
      <TopStylist />
      <FeaturesSection />
      
    </div>
  );
}

export default App;
