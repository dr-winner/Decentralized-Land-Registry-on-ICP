import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Properties from './components/Properties';

function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      <Hero />
      <div className="py-16">
        <Stats />
      </div>
      <Properties />
    </div>
  );
}

export default App;