import React from 'react';
import { TrendingUp, Users, Globe, Database } from 'lucide-react';

export default function Stats() {
  const stats = [
    { icon: TrendingUp, label: 'Total Properties', value: '14,567', change: '+12.5%' },
    { icon: Users, label: 'Verified Owners', value: '8,942', change: '+8.1%' },
    { icon: Globe, label: 'Countries', value: '32', change: '+2' },
    { icon: Database, label: 'Transactions', value: '245K', change: '+18.2%' }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {stats.map((stat, index) => (
        <div key={index} className="relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-300"></div>
          <div className="relative p-6 bg-gray-800/50 backdrop-blur-xl rounded-lg">
            <div className="flex items-center justify-between">
              <stat.icon className="w-8 h-8 text-blue-400" />
              <span className="text-green-400 text-sm font-medium">{stat.change}</span>
            </div>
            <p className="mt-4 text-3xl font-bold text-white">{stat.value}</p>
            <p className="mt-1 text-sm text-gray-400">{stat.label}</p>
          </div>
        </div>
      ))}
    </div>
  );
}