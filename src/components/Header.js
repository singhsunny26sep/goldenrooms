import React, { useState } from 'react';

export default function Header() {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Left Section */}
          <div className="flex items-center space-x-12">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <span className="text-3xl">🏠</span>
              <span className="text-2xl font-bold text-blue-600">RentEase</span>
            </div>
            
            {/* Navigation */}
            <nav className="hidden lg:flex space-x-8">
              <a href="#dashboard" className="text-blue-600 bg-blue-50 px-4 py-2 rounded-lg font-medium transition-colors">
                Dashboard
              </a>
              <a href="#properties" className="text-gray-600 hover:text-blue-600 px-4 py-2 rounded-lg font-medium transition-colors">
                Properties
              </a>
              <a href="#tenants" className="text-gray-600 hover:text-blue-600 px-4 py-2 rounded-lg font-medium transition-colors">
                Tenants
              </a>
              <a href="#payments" className="text-gray-600 hover:text-blue-600 px-4 py-2 rounded-lg font-medium transition-colors">
                Payments
              </a>
              <a href="#reports" className="text-gray-600 hover:text-blue-600 px-4 py-2 rounded-lg font-medium transition-colors">
                Reports
              </a>
            </nav>
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-4">
            {/* Notifications */}
            <button className="relative p-2 rounded-full hover:bg-gray-100 transition-colors">
              <span className="text-xl">🔔</span>
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                3
              </span>
            </button>

            {/* Profile Dropdown */}
            <div className="relative">
              <button 
                className="flex items-center space-x-3 p-2 rounded-2xl hover:bg-gray-100 transition-colors"
                onClick={() => setIsProfileOpen(!isProfileOpen)}
              >
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white">
                  <span className="text-lg">👤</span>
                </div>
                <div className="hidden md:block text-left">
                  <p className="font-semibold text-gray-800">John Doe</p>
                  <p className="text-sm text-gray-600">Property Manager</p>
                </div>
                <span className={`text-gray-500 transition-transform ${isProfileOpen ? 'rotate-180' : ''}`}>
                  ▼
                </span>
              </button>

              {/* Dropdown Menu */}
              {isProfileOpen && (
                <div className="absolute right-0 mt-2 w-64 bg-white rounded-2xl shadow-xl border border-gray-200 py-2">
                  <a href="#profile" className="flex items-center space-x-3 px-4 py-3 hover:bg-gray-50 transition-colors">
                    <span className="text-lg">👤</span>
                    <span>My Profile</span>
                  </a>
                  <a href="#settings" className="flex items-center space-x-3 px-4 py-3 hover:bg-gray-50 transition-colors">
                    <span className="text-lg">⚙️</span>
                    <span>Settings</span>
                  </a>
                  <a href="#help" className="flex items-center space-x-3 px-4 py-3 hover:bg-gray-50 transition-colors">
                    <span className="text-lg">❓</span>
                    <span>Help & Support</span>
                  </a>
                  <div className="border-t border-gray-200 my-2"></div>
                  <a href="#logout" className="flex items-center space-x-3 px-4 py-3 text-red-600 hover:bg-red-50 transition-colors">
                    <span className="text-lg">🚪</span>
                    <span>Logout</span>
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}