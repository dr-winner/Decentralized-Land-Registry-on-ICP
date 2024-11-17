import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Activity, TrendingUp, Users, DollarSign } from 'lucide-react';

const data = [
  { month: 'Jan', registrations: 12, verifications: 8 },
  { month: 'Feb', registrations: 19, verifications: 15 },
  { month: 'Mar', registrations: 15, verifications: 10 },
];

const stats = [
  { title: 'Total Properties', value: '156', icon: Activity, change: '+12.5%' },
  { title: 'Active Users', value: '2.4k', icon: Users, change: '+15.2%' },
  { title: 'Property Value', value: '$4.2M', icon: DollarSign, change: '+18.9%' },
  { title: 'Growth Rate', value: '23%', icon: TrendingUp, change: '+4.1%' },
];

export default function Dashboard() {
  return (
    <div className="pt-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-white mb-8">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="bg-gray-800 rounded-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">{stat.title}</p>
                <p className="text-2xl font-bold text-white mt-1">{stat.value}</p>
              </div>
              <div className="bg-blue-500/10 p-3 rounded-lg">
                <stat.icon className="w-6 h-6 text-blue-500" />
              </div>
            </div>
            <div className="mt-4 flex items-center">
              <span className="text-green-400 text-sm">{stat.change}</span>
              <span className="text-gray-400 text-sm ml-2">vs last month</span>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gray-800 rounded-lg p-6">
        <h2 className="text-xl font-bold text-white mb-6">Registration Activity</h2>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="month" stroke="#9CA3AF" />
              <YAxis stroke="#9CA3AF" />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#1F2937',
                  border: 'none',
                  borderRadius: '0.5rem',
                  color: '#fff',
                }}
              />
              <Legend />
              <Bar dataKey="registrations" name="Registrations" fill="#3B82F6" radius={[4, 4, 0, 0]} />
              <Bar dataKey="verifications" name="Verifications" fill="#10B981" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}