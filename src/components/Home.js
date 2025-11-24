import React from 'react';

export default function Home() {
  return (
    <div>
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <i className="fas fa-home text-blue-600 text-2xl mr-2"></i>
            <h1 className="text-xl font-bold text-gray-800">PrimeProperties</h1>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-blue-600 font-medium">Home</a>
            <a href="#" className="text-gray-600 hover:text-blue-600">Properties</a>
            <a href="#" className="text-gray-600 hover:text-blue-600">Agents</a>
            <a href="#" className="text-gray-600 hover:text-blue-600">About</a>
            <a href="#" className="text-gray-600 hover:text-blue-600">Contact</a>
          </nav>
          
          <div className="flex items-center space-x-4">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
              Sign In
            </button>
            <button className="md:hidden text-gray-600">
              <i className="fas fa-bars text-xl"></i>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Find Your Perfect Rental Home</h1>
            <p className="text-xl mb-8">Discover the best properties for rent in your preferred location with PrimeProperties.</p>
            
            <div className="bg-white rounded-lg p-2 shadow-lg">
              <div className="flex flex-col md:flex-row">
                <input 
                  type="text" 
                  placeholder="Search by location..." 
                  className="flex-grow p-3 text-gray-800 rounded-l-lg focus:outline-none" 
                />
                <button className="bg-blue-600 text-white px-6 py-3 rounded-r-lg hover:bg-blue-700 transition">
                  <i className="fas fa-search mr-2"></i> Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800">Featured Properties</h2>
            <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">
              View All <i className="fas fa-arrow-right ml-1"></i>
            </a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Property Card 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                  alt="Modern Apartment" 
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4 bg-blue-600 text-white px-2 py-1 rounded-md font-medium">
                  For Rent
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-gray-800">Modern Apartment</h3>
                  <span className="text-xl font-bold text-blue-600">₹1,20,000/mo</span>
                </div>
                
                <p className="text-gray-600 mb-4 flex items-center">
                  <i className="fas fa-map-marker-alt text-blue-500 mr-2"></i>
                  123 Main Street, Downtown
                </p>
                
                <div className="flex justify-between text-gray-600 border-b border-gray-200 pb-4 mb-4">
                  <div className="flex items-center">
                    <i className="fas fa-bed text-blue-500 mr-2"></i>
                    <span>3 Beds</span>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-bath text-blue-500 mr-2"></i>
                    <span>2 Baths</span>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-vector-square text-blue-500 mr-2"></i>
                    <span>1,200 sqft</span>
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
                    View Details
                  </button>
                  <button className="text-gray-500 hover:text-blue-600">
                    <i className="far fa-heart text-xl"></i>
                  </button>
                </div>
              </div>
            </div>

            {/* Property Card 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1465&q=80" 
                  alt="Luxury Villa" 
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4 bg-green-600 text-white px-2 py-1 rounded-md font-medium">
                  For Rent
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-gray-800">Luxury Villa</h3>
                  <span className="text-xl font-bold text-blue-600">₹3,50,000/mo</span>
                </div>
                
                <p className="text-gray-600 mb-4 flex items-center">
                  <i className="fas fa-map-marker-alt text-blue-500 mr-2"></i>
                  456 Hillside Drive, Uptown
                </p>
                
                <div className="flex justify-between text-gray-600 border-b border-gray-200 pb-4 mb-4">
                  <div className="flex items-center">
                    <i className="fas fa-bed text-blue-500 mr-2"></i>
                    <span>4 Beds</span>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-bath text-blue-500 mr-2"></i>
                    <span>3 Baths</span>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-vector-square text-blue-500 mr-2"></i>
                    <span>2,800 sqft</span>
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
                    View Details
                  </button>
                  <button className="text-gray-500 hover:text-blue-600">
                    <i className="far fa-heart text-xl"></i>
                  </button>
                </div>
              </div>
            </div>

            {/* Property Card 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                  alt="Cozy Studio" 
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4 bg-blue-600 text-white px-2 py-1 rounded-md font-medium">
                  For Rent
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-gray-800">Cozy Studio</h3>
                  <span className="text-xl font-bold text-blue-600">₹85,000/mo</span>
                </div>
                
                <p className="text-gray-600 mb-4 flex items-center">
                  <i className="fas fa-map-marker-alt text-blue-500 mr-2"></i>
                  789 Park Avenue, Midtown
                </p>
                
                <div className="flex justify-between text-gray-600 border-b border-gray-200 pb-4 mb-4">
                  <div className="flex items-center">
                    <i className="fas fa-bed text-blue-500 mr-2"></i>
                    <span>1 Bed</span>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-bath text-blue-500 mr-2"></i>
                    <span>1 Bath</span>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-vector-square text-blue-500 mr-2"></i>
                    <span>600 sqft</span>
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
                    View Details
                  </button>
                  <button className="text-gray-500 hover:text-blue-600">
                    <i className="far fa-heart text-xl"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">How It Works</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-search text-blue-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Search Property</h3>
              <p className="text-gray-600">Find your perfect property using our advanced search filters and location-based search.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-home text-blue-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Visit Property</h3>
              <p className="text-gray-600">Schedule a visit to the properties you like and see them in person before making a decision.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-file-contract text-blue-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Make a Deal</h3>
              <p className="text-gray-600">Finalize the rental agreement with the property owner and move into your new home.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">What Our Clients Say</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <i className="fas fa-user text-blue-600"></i>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Sarah Johnson</h4>
                  <p className="text-gray-600 text-sm">Renting since 2021</p>
                </div>
              </div>
              <p className="text-gray-600">"PrimeProperties helped me find my dream apartment in just two weeks. The process was smooth and the team was very helpful!"</p>
              <div className="flex text-yellow-400 mt-4">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <i className="fas fa-user text-blue-600"></i>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Michael Chen</h4>
                  <p className="text-gray-600 text-sm">Renting since 2020</p>
                </div>
              </div>
              <p className="text-gray-600">"I've used several rental platforms, but PrimeProperties stands out with its excellent customer service and quality listings."</p>
              <div className="flex text-yellow-400 mt-4">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <i className="fas fa-user text-blue-600"></i>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Emily Rodriguez</h4>
                  <p className="text-gray-600 text-sm">Renting since 2022</p>
                </div>
              </div>
              <p className="text-gray-600">"The property details were accurate and the photos matched exactly what I saw when I visited. Highly recommended!"</p>
              <div className="flex text-yellow-400 mt-4">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
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
                  +91 7588259708
                </li>
                <li className="flex items-center">
                  <i className="fas fa-envelope mr-2 text-blue-400"></i>
              rohanmali9977@gmail.com
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
    </div>
  );
}