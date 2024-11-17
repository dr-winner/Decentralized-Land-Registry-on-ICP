import React, { useState } from 'react';
import RegisterLandModal from './RegisterLandModal';
import VerifyOwnershipModal from './VerifyOwnershipModal';
import {
  Globe2,
  Shield,
  Database,
  Lock,
  Fingerprint,
  FileCode,
} from "lucide-react";

export default function Hero() {
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isVerifyOpen, setIsVerifyOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3')] bg-cover bg-center mix-blend-overlay opacity-20"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
            <span className="block">Decentralized Land Registry</span>
            <span className="block text-blue-500">
              on the Internet Computer
            </span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Secure, transparent, and immutable land ownership records powered by
            blockchain technology.
          </p>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <div className="rounded-md shadow">
              <button
                onClick={() => setIsRegisterOpen(true)}
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 md:py-4 md:text-lg md:px-10 transition-all transform hover:scale-105"
              >
                Register Land
              </button>
            </div>
            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
            <button
                onClick={() => setIsVerifyOpen(true)}
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-500 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10 transition-all transform hover:scale-105"
              >
                Verify Ownership
              </button>
            </div>
          </div>
        </div>
        <div className="mt-24 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative p-6 bg-gray-800 ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6">
              <Globe2 className="w-8 h-8 text-blue-500" />
              <div className="space-y-2">
                <p className="text-white">Global Access</p>
                <p className="text-gray-400 text-sm">
                  Access your land registry from anywhere in the world
                </p>
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative p-6 bg-gray-800 ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6">
              <Shield className="w-8 h-8 text-blue-500" />
              <div className="space-y-2">
                <p className="text-white">Secure & Immutable</p>
                <p className="text-gray-400 text-sm">
                  Blockchain-powered security for your records
                </p>
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative p-6 bg-gray-800 ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6">
              <Database className="w-8 h-8 text-blue-500" />
              <div className="space-y-2">
                <p className="text-white">Decentralized Storage</p>
                <p className="text-gray-400 text-sm">
                  Records stored across nodes for maximum reliability
                </p>
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative p-6 bg-gray-800 ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6">
              <FileCode className="w-8 h-8 text-blue-500" />
              <div className="space-y-2">
                <p className="text-white">Smart Contracts</p>
                <p className="text-gray-400 text-sm">
                  Automated property transfers and dispute resolution
                </p>
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative p-6 bg-gray-800 ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6">
              <Fingerprint className="w-8 h-8 text-blue-500" />
              <div className="space-y-2">
                <p className="text-white">Digital Identity</p>
                <p className="text-gray-400 text-sm">
                  Identity verification using ICP’s authentication
                </p>
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative p-6 bg-gray-800 ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6">
              <Lock className="w-8 h-8 text-blue-500" />
              <div className="space-y-2">
                <p className="text-white">Privacy-First</p>
                <p className="text-gray-400 text-sm">
                  Secure transactions with user-controlled data
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <RegisterLandModal isOpen={isRegisterOpen} setIsOpen={setIsRegisterOpen} />
      <VerifyOwnershipModal isOpen={isVerifyOpen} setIsOpen={setIsVerifyOpen} />
    </div>
  );
}
