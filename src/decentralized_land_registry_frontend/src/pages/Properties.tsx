// import React from 'react';
import SearchBar from '../components/SearchBar';
import PropertyCard from '../components/PropertyCard';

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

export default function PropertiesPage() {
  return (
    <div className="pt-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-white">Properties</h1>
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-all">
          Add Property
        </button>
      </div>

      <SearchBar />

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {properties.map(property => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </div>
  );
}