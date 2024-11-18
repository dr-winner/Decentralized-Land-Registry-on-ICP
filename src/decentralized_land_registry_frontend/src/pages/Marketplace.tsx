// import React from 'react';
import { Search, Filter } from 'lucide-react';

const listings = [
  {
    id: 1,
    title: 'Luxury Beachfront Villa',
    price: '2,500,000',
    location: 'Malibu, CA',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    beds: 5,
    baths: 4,
    area: '4,500',
  },
  {
    id: 2,
    title: 'Modern Downtown Loft',
    price: '850,000',
    location: 'New York, NY',
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    beds: 2,
    baths: 2,
    area: '1,200',
  },
  {
    id: 3,
    title: 'Mountain View Estate',
    price: '1,750,000',
    location: 'Aspen, CO',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    beds: 4,
    baths: 3,
    area: '3,800',
  },
];

export default function Marketplace() {
  return (
    <div className="pt-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-white">Marketplace</h1>
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-all">
          List Property
        </button>
      </div>

      <div className="flex gap-4 mb-8">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            type="text"
            placeholder="Search properties..."
            className="w-full pl-10 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <button className="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-lg text-white hover:bg-gray-700 transition-colors">
          <Filter className="h-5 w-5" />
          Filters
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {listings.map((listing) => (
          <div key={listing.id} className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-[1.02] transition-all duration-300">
            <div className="relative h-48">
              <img
                src={listing.image}
                alt={listing.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-2 right-2 bg-blue-500 text-white px-3 py-1 rounded-full">
                ${listing.price}
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold text-white mb-2">{listing.title}</h3>
              <p className="text-gray-400 mb-4">{listing.location}</p>
              <div className="grid grid-cols-3 gap-4 text-sm text-gray-400">
                <div>
                  <span className="block font-medium text-white">{listing.beds}</span>
                  Bedrooms
                </div>
                <div>
                  <span className="block font-medium text-white">{listing.baths}</span>
                  Bathrooms
                </div>
                <div>
                  <span className="block font-medium text-white">{listing.area}</span>
                  Sq Ft
                </div>
              </div>
              <button className="w-full mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg transition-colors">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}