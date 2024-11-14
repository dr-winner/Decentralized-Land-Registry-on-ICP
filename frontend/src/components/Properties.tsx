import React from 'react';
import PropertyCard from './PropertyCard';
import SearchBar from './SearchBar';

export default function Properties() {
  const properties = [
    {
      id: 1,
      title: 'Modern Villa with Pool',
      location: 'Beverly Hills, CA',
      owner: '0x1234...5678',
      date: '2024-03-15',
      status: 'Verified',
      image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 2,
      title: 'Downtown Penthouse',
      location: 'Manhattan, NY',
      owner: '0x8765...4321',
      date: '2024-03-14',
      status: 'Pending',
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 3,
      title: 'Beachfront Property',
      location: 'Miami, FL',
      owner: '0x2468...1357',
      date: '2024-03-13',
      status: 'Verified',
      image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-8">Featured Properties</h2>
        <SearchBar />
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map(property => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>
    </section>
  );
}