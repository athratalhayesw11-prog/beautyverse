import React from 'react';
import './App.css';
import Navbar from './files/pages/Navbar';
import FeaturesSection from './files/pages/FeaturesSection';
import Hero from './files/pages/Hero';
import FeaturedServices from './files/pages/FeaturedServices';

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <Hero />

      <FeaturesSection />
      <FeaturedServices />

    </div>
  );
}

export default App;