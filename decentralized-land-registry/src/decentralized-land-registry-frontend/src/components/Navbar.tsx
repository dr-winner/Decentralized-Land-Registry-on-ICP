import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Building2, Menu, X } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { isAuthenticated, login, logout } = useAuth();

  const navigation = [
    { name: 'Dashboard', href: '/dashboard' },
    { name: 'Properties', href: '/properties' },
    { name: 'Marketplace', href: '/marketplace' },
    { name: 'Analytics', href: '/analytics' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed w-full bg-black/10 backdrop-blur-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <Building2 className="h-8 w-8 text-blue-500" />
            </Link>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      isActive(item.href)
                        ? 'text-white bg-gray-800'
                        : 'text-gray-300 hover:text-blue-500'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <button
              onClick={isAuthenticated ? logout : login}
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-all transform hover:scale-105"
            >
              {isAuthenticated ? 'Disconnect' : 'Connect Internet Identity'}
            </button>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive(item.href)
                    ? 'text-white bg-gray-800'
                    : 'text-gray-300 hover:text-blue-500'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <button
              onClick={isAuthenticated ? logout : login}
              className="w-full mt-2 bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded-md text-base font-medium"
            >
              {isAuthenticated ? 'Disconnect' : 'Connect Internet Identity'}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}