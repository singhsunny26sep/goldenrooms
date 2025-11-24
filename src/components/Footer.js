import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <i className="fas fa-home text-blue-400 text-2xl mr-2"></i>
                <h3 className="text-xl font-bold">PrimeProperties</h3>
              </div>
              <p className="text-gray-400">Find your perfect rental property with our extensive listings and professional service.</p>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition">Home</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Properties</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Agents</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-4">Contact Us</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center">
                  <i className="fas fa-map-marker-alt mr-2 text-blue-400"></i>
                  123 Property Street, City
                </li>
                <li className="flex items-center">
                  <i className="fas fa-phone mr-2 text-blue-400"></i>
                  +1 (555) 123-4567
                </li>
                <li className="flex items-center">
                  <i className="fas fa-envelope mr-2 text-blue-400"></i>
                  info@primeproperties.com
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-4">Newsletter</h4>
              <p className="text-gray-400 mb-4">Subscribe to get updates on new properties.</p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="bg-gray-700 text-white px-4 py-2 rounded-l-lg focus:outline-none w-full" 
                />
                <button className="bg-blue-600 text-white px-4 py-2 rounded-r-lg hover:bg-blue-700 transition">
                  <i className="fas fa-paper-plane"></i>
                </button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2023 PrimeProperties. All rights reserved.</p>
          </div>
        </div>
      </footer>
  );
}