import React from 'react';
import { Search, Filter } from 'lucide-react';

export default function SearchBar() {
  return (
    <div className="relative max-w-2xl mx-auto">
      <div className="absolute -inset-1">
        <div className="w-full h-full mx-auto rotate-180 opacity-30 blur-lg filter bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600"></div>
      </div>
      <div className="relative flex items-center bg-gray-800/50 backdrop-blur-xl rounded-lg p-2">
        <Search className="w-5 h-5 text-gray-400 ml-3" />
        <input
          type="text"
          placeholder="Search by address, owner, or property ID..."
          className="w-full bg-transparent border-none focus:ring-0 text-white px-4 py-2 placeholder-gray-400"
        />
        <button className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors">
          <Filter className="w-4 h-4" />
          <span>Filters</span>
        </button>
      </div>
    </div>
  );
}