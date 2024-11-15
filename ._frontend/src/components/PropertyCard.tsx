import React from 'react';
import { MapPin, User, Calendar, ArrowRight } from 'lucide-react';

export default function PropertyCard({ property }) {
  return (
    <div className="relative group">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
      <div className="relative p-2 bg-gray-800/50 backdrop-blur-xl rounded-lg transition-all duration-300 hover:transform hover:scale-[1.02]">
        <div className="relative h-48 rounded-t-lg overflow-hidden">
          <img 
            src={property.image} 
            alt={property.title}
            className="w-full h-full object-cover transform transition-transform group-hover:scale-110 duration-700"
          />
          <div className="absolute top-2 right-2 bg-blue-500 text-white px-2 py-1 rounded-full text-sm">
            {property.status}
          </div>
        </div>
        
        <div className="p-4">
          <h3 className="text-xl font-bold text-white mb-2">{property.title}</h3>
          
          <div className="flex items-center text-gray-400 mb-2">
            <MapPin className="w-4 h-4 mr-2" />
            <span className="text-sm">{property.location}</span>
          </div>
          
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center text-gray-400">
              <User className="w-4 h-4 mr-2" />
              <span className="text-sm">{property.owner}</span>
            </div>
            <div className="flex items-center text-gray-400">
              <Calendar className="w-4 h-4 mr-2" />
              <span className="text-sm">{property.date}</span>
            </div>
          </div>
          
          <button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-2 rounded-lg flex items-center justify-center group-hover:from-blue-600 group-hover:to-blue-700 transition-all duration-300">
            View Details
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
}