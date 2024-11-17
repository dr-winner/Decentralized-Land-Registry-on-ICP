import React from 'react';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import Properties from '../components/Properties';

export default function Home() {
  return (
    <div>
      <Hero />
      <div className="py-16">
        <Stats />
      </div>
      <Properties />
    </div>
  );
}