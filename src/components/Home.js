import React from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';

export default function Home() {
  const navigate = useNavigate();

  const properties = [
    {
      id: 1,
      title: "Modern Apartment",
      price: "₹1,20,000/mo",
      location: "123 Main Street, Downtown",
      beds: 3,
      baths: 2,
      area: "1,200 sqft",
      image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      type: "For Rent",
      tagColor: "bg-blue-600"
    },
    {
      id: 2,
      title: "Luxury Villa",
      price: "₹3,50,000/mo",
      location: "456 Hillside Drive, Uptown",
      beds: 4,
      baths: 3,
      area: "2,800 sqft",
      image: "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1465&q=80",
      type: "For Rent",
      tagColor: "bg-green-600"
    },
    {
      id: 3,
      title: "Cozy Studio",
      price: "₹85,000/mo",
      location: "789 Park Avenue, Midtown",
      beds: 1,
      baths: 1,
      area: "600 sqft",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      type: "For Rent",
      tagColor: "bg-blue-600"
    }
  ];

  const handleViewDetails = (propertyId) => {
    navigate(`/property/${propertyId}`);
  };

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
            {properties.map((property) => (
              <div key={property.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
                <div className="relative">
                  <img 
                    src={property.image} 
                    alt={property.title} 
                    className="w-full h-48 object-cover"
                  />
                  <div className={`absolute top-4 right-4 ${property.tagColor} text-white px-2 py-1 rounded-md font-medium`}>
                    {property.type}
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-gray-800">{property.title}</h3>
                    <span className="text-xl font-bold text-blue-600">{property.price}</span>
                  </div>
                  
                  <p className="text-gray-600 mb-4 flex items-center">
                    <i className="fas fa-map-marker-alt text-blue-500 mr-2"></i>
                    {property.location}
                  </p>
                  
                  <div className="flex justify-between text-gray-600 border-b border-gray-200 pb-4 mb-4">
                    <div className="flex items-center">
                      <i className="fas fa-bed text-blue-500 mr-2"></i>
                      <span>{property.beds} Beds</span>
                    </div>
                    <div className="flex items-center">
                      <i className="fas fa-bath text-blue-500 mr-2"></i>
                      <span>{property.baths} Baths</span>
                    </div>
                    <div className="flex items-center">
                      <i className="fas fa-vector-square text-blue-500 mr-2"></i>
                      <span>{property.area}</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <button 
                      onClick={() => handleViewDetails(property.id)}
                      className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
                    >
                      View Details
                    </button>
                    <button className="text-gray-500 hover:text-blue-600">
                      <i className="far fa-heart text-xl"></i>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rest of the sections remain same */}
      {/* How It Works Section */}
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

      {/* Footer */}
     <Footer/>
    </div>
  );
}