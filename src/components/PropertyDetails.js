import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Footer from './Footer';

export default function PropertyDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const properties = {
    1: {
      id: 1,
      title: "Modern Apartment",
      price: "₹1,20,000/mo",
      location: "123 Main Street, Downtown, Mumbai",
      beds: 3,
      baths: 2,
      area: "1,200 sqft",
      images: [
        "https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        "https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1474&q=80",
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1558&q=80"
      ],
      type: "For Rent",
      description: "This modern apartment offers a perfect blend of comfort and style. Located in the heart of downtown, it features spacious rooms, modern amenities, and breathtaking city views.",
      amenities: ["Swimming Pool", "Gym", "Parking", "Security", "Elevator", "WiFi"],
      agent: {
        name: "Rajesh Kumar",
        phone: "+91 98765 43210",
        email: "rajesh@primeproperties.com",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
      }
    },
    2: {
      id: 2,
      title: "Luxury Villa",
      price: "₹3,50,000/mo",
      location: "456 Hillside Drive, Uptown, Delhi",
      beds: 4,
      baths: 3,
      area: "2,800 sqft",
      images: [
        "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1465&q=80",
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1453&q=80",
        "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
      ],
      type: "For Rent",
      description: "Experience luxury living in this magnificent villa. Featuring premium finishes, spacious interiors, and private garden, this property offers the ultimate in comfort and elegance.",
      amenities: ["Swimming Pool", "Garden", "Parking", "Security", "AC", "Modular Kitchen"],
      agent: {
        name: "Priya Sharma",
        phone: "+91 98765 43211",
        email: "priya@primeproperties.com",
        image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
      }
    },
    3: {
      id: 3,
      title: "Cozy Studio",
      price: "₹85,000/mo",
      location: "789 Park Avenue, Midtown, Bangalore",
      beds: 1,
      baths: 1,
      area: "600 sqft",
      images: [
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
      ],
      type: "For Rent",
      description: "Perfect for singles or couples, this cozy studio apartment offers smart space utilization with modern amenities. Located in a prime area with easy access to transportation and shopping.",
      amenities: ["WiFi", "Security", "Power Backup", "Housekeeping", "Laundry"],
      agent: {
        name: "Amit Patel",
        phone: "+91 98765 43212",
        email: "amit@primeproperties.com",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
      }
    }
  };

  const property = properties[id];

  if (!property) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800">Property Not Found</h2>
          <button 
            onClick={() => navigate('/')}
            className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
    <div>
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center cursor-pointer" onClick={() => navigate('/')}>
            <i className="fas fa-home text-blue-600 text-2xl mr-2"></i>
            <h1 className="text-xl font-bold text-gray-800">PrimeProperties</h1>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-600 hover:text-blue-600">Home</a>
            <a href="#" className="text-gray-600 hover:text-blue-600">Properties</a>
            <a href="#" className="text-gray-600 hover:text-blue-600">Agents</a>
            <a href="#" className="text-gray-600 hover:text-blue-600">About</a>
            <a href="#" className="text-gray-600 hover:text-blue-600">Contact</a>
          </nav>
          
          <div className="flex items-center space-x-4">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
              Sign In
            </button>
          </div>
        </div>
      </header>
      {/* Property Details */}
      <div className="container mx-auto px-4 py-8">
        <button 
          onClick={() => navigate('/')}
          className="flex items-center text-blue-600 hover:text-blue-800 mb-6"
        >
          <i className="fas fa-arrow-left mr-2"></i>
          Back to Properties
        </button>
        {/* Property Images */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-8">
          <div className="lg:col-span-2">
            <img 
              src={property.images[0]} 
              alt={property.title}
              className="w-full h-96 object-cover rounded-lg"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            {property.images.slice(1).map((image, index) => (
              <img 
                key={index}
                src={image} 
                alt={`${property.title} ${index + 2}`}
                className="w-full h-44 object-cover rounded-lg"
              />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Property Info */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h1 className="text-3xl font-bold text-gray-800">{property.title}</h1>
                  <p className="text-gray-600 flex items-center mt-2">
                    <i className="fas fa-map-marker-alt text-blue-500 mr-2"></i>
                    {property.location}
                  </p>
                </div>
                <span className="text-2xl font-bold text-blue-600">{property.price}</span>
              </div>
              <div className="flex space-x-6 text-gray-600 border-b border-gray-200 pb-4 mb-4">
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
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Description</h3>
                <p className="text-gray-600 leading-relaxed">{property.description}</p>
              </div>
            </div>

            {/* Amenities */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Amenities</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {property.amenities.map((amenity, index) => (
                  <div key={index} className="flex items-center">
                    <i className="fas fa-check text-green-500 mr-2"></i>
                    <span className="text-gray-600">{amenity}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Agent & Actions */}
          <div>
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-4">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Contact Agent</h3>
              
              <div className="flex items-center mb-4">
                <img 
                  src={property.agent.image} 
                  alt={property.agent.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold text-gray-800">{property.agent.name}</h4>
                  <p className="text-gray-600 text-sm">PrimeProperties Agent</p>
                </div>
              </div>

              <div className="space-y-3">
                <button className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition flex items-center justify-center">
                  <i className="fas fa-phone mr-2"></i>
                  Call {property.agent.phone}
                </button>
                <button className="w-full bg-green-600 text-white py-3 rounded-md hover:bg-green-700 transition flex items-center justify-center">
                  <i className="fas fa-envelope mr-2"></i>
                  Email Agent
                </button>
                <button className="w-full bg-gray-600 text-white py-3 rounded-md hover:bg-gray-700 transition flex items-center justify-center">
                  <i className="fas fa-calendar mr-2"></i>
                  Schedule Visit
                </button>
              </div>

              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <h4 className="font-bold text-gray-800 mb-2">Property Details</h4>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex justify-between">
                    <span>Property ID:</span>
                    <span>PP{property.id}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Type:</span>
                    <span>{property.type}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Available From:</span>
                    <span>Immediate</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    
    </div>
    <Footer/>
    </>
  );
}