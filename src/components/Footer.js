import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-12">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <span className="text-3xl">🏠</span>
              <span className="text-2xl font-bold">RentEase</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Streamlining property management for modern landlords. 
              Manage your rentals with ease and efficiency.
            </p>
            <div className="flex space-x-4">
              <a href="#facebook" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                <span className="text-lg">📘</span>
              </a>
              <a href="#twitter" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-400 transition-colors">
                <span className="text-lg">🐦</span>
              </a>
              <a href="#linkedin" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors">
                <span className="text-lg">💼</span>
              </a>
              <a href="#instagram" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-pink-600 transition-colors">
                <span className="text-lg">📷</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#dashboard" className="text-gray-400 hover:text-white transition-colors">Dashboard</a></li>
              <li><a href="#properties" className="text-gray-400 hover:text-white transition-colors">Properties</a></li>
              <li><a href="#tenants" className="text-gray-400 hover:text-white transition-colors">Tenants</a></li>
              <li><a href="#payments" className="text-gray-400 hover:text-white transition-colors">Payments</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-3">
              <li><a href="#help" className="text-gray-400 hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#privacy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#terms" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-2 lg:col-span-1">
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3 text-gray-400">
              <p className="flex items-center space-x-3">
                <span>📧</span>
                <span>hello@rentease.com</span>
              </p>
              <p className="flex items-center space-x-3">
                <span>📞</span>
                <span>+91 98765 43210</span>
              </p>
              <p className="flex items-center space-x-3">
                <span>📍</span>
                <span>123 Business Street, Mumbai, India</span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">
            &copy; 2024 RentEase. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#privacy" className="text-gray-400 hover:text-white transition-colors">Privacy</a>
            <a href="#terms" className="text-gray-400 hover:text-white transition-colors">Terms</a>
            <a href="#cookies" className="text-gray-400 hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}