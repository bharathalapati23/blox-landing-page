'use client';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import ModalForm from '../components/ContactForm/ModalForm';

interface PropertyConfig {
  name: string;
  projectType: string;
  developmentSize: number;
  totalUnits: number;
  overview: string;
  floorPlan: string[];
  propertyConfiguration: {
    noOfBedrooms: number;
    pricing: string;
    sqFootage: string;
  }[];
  walkThrough: string;
  location: string;
  propertyIcon: string;
  images: string[];
  brochure?: string;
}

interface FormattedProperty {
  id: number;
  title: string;
  location: string;
  price: string;
  bhk: string;
  acres: string;
  units: string;
  image: string;
  popular: boolean;
  brochure?: string;
  overview: string;
  propertyConfiguration: PropertyConfig['propertyConfiguration'];
  images: string[];
  floorPlan: string[];
}

export default function PropertiesPage() {
  // State for property data
  const [properties, setProperties] = useState<FormattedProperty[]>([]);
  const [loading, setLoading] = useState(true);
  const [showContactModal, setShowContactModal] = useState(false);

  // Fetch property data from JSON file
  useEffect(() => {
    async function fetchProperties() {
      try {
        const response = await fetch('/propertyConfig.json');
        const data = await response.json();
        
        // Map the JSON data to the format needed for property cards
        const formattedProperties = data.map((property: PropertyConfig, index: number) => {
          // Get BHK configuration as string (e.g., "3, 4 & 5 BHK")
          const bhkConfigs = property.propertyConfiguration.map(config => config.noOfBedrooms);
          const uniqueBhks = [...new Set(bhkConfigs)];
          const bhkString = uniqueBhks.join(', ') + ' BHK';
          
          return {
            id: index + 1,
            title: property.name,
            location: property.projectType, // Using projectType as location since location is null
            price: property.propertyConfiguration[0]?.pricing || 'Price on request',
            bhk: bhkString,
            acres: `${property.developmentSize} Acres`,
            units: `${property.totalUnits} Units`,
            image: property.images[0] || "https://res.cloudinary.com/dojfndzbj/image/upload/v1738998234/dp0rzn8cpzbbnxaq3doy.png",
            popular: true, // Setting all as popular for now
            brochure: property.brochure,
            overview: property.overview,
            propertyConfiguration: property.propertyConfiguration,
            images: property.images,
            floorPlan: property.floorPlan || []
          };
        });
        
        setProperties(formattedProperties);
      } catch (error) {
        console.error('Error fetching properties:', error);
        // Fallback to empty array if fetch fails
        setProperties([]);
      } finally {
        setLoading(false);
      }
    }
    
    fetchProperties();
  }, []);

  // Property Card Component
  const PropertyCard = ({ property }: { property: FormattedProperty }) => {
    return (
      <Link href={`/property/${property.id}`} className="block transition-transform hover:scale-[1.02] duration-200">
        <div className="bg-white rounded-lg overflow-hidden border border-gray-200 h-full">
          <div className="relative">
            {/* Property Image */}
            <div className="w-full h-64 relative">
              <Image
                src={property.image}
                alt={property.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Popular Tag */}
            {property.popular && (
              <div className="absolute top-3 left-0 bg-red-500 text-white px-3 py-1 flex items-center rounded-r-md">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-4 h-4 mr-1">
                  <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                </svg>
                POPULAR
              </div>
            )}
          </div>

          <div className="p-4">
            {/* Price */}
            <div className="mb-2">
              <span className="text-red-500 text-xl font-bold">{property.price}</span>
              <span className="text-gray-500 ml-1">Onwards</span>
            </div>

            {/* Property Title */}
            <h3 className="text-xl font-bold text-gray-900 mb-1">{property.title}</h3>
            
            {/* Location */}
            <p className="text-gray-500 mb-4">{property.location}</p>

            {/* Property Details */}
            <div className="flex justify-between text-sm text-gray-600 mb-6">
              {/* BHK */}
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-1 text-gray-400">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
                </svg>
                <span>{property.bhk}</span>
              </div>
              
              {/* Acres */}
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-1 text-gray-400">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
                </svg>
                <span>{property.acres}</span>
              </div>
              
              {/* Units */}
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-1 text-gray-400">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                </svg>
                <span>{property.units}</span>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex items-center gap-2">
              <a 
                href={property.brochure || '#'} 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex-1 border border-gray-300 text-gray-700 px-4 py-3 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors text-center"
              >
                Download brochure
              </a>
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  window.open('tel:+919738563155', '_blank');
                }}
                className="bg-green-800 text-white p-3 rounded-lg flex items-center justify-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </Link>
    );
  };

  return (
    <main className="p-4 md:p-8 pt-8 md:pt-32 lg:p-12 flex flex-col gap-6 md:gap-10 bg-[#F7F7F7]">
      {/* Contact Form Modal */}
      {showContactModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg w-full max-w-4xl max-h-[90vh] overflow-auto relative">
            <button 
              onClick={() => setShowContactModal(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 z-10"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <ModalForm />
          </div>
        </div>
      )}
      
      {/* Hero Section */}
      <div className="text-center mb-8">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Find Your Dream Property</h1>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Browse through our exclusive collection of premium properties across Bangalore and beyond. 
          Whether you&apos;re looking for a luxury villa, a comfortable apartment, or a commercial space, 
          we have options to suit every need.
        </p>
      </div>

      {/* Properties Grid */}
      <section>
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Featured Properties</h2>
        {loading ? (
          <div className="flex justify-center items-center h-40">
            <p>Loading properties...</p>
          </div>
        ) : properties.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {properties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        ) : (
          <div className="flex justify-center items-center h-40">
            <p>No properties found.</p>
          </div>
        )}
      </section>

      {/* Contact Section */}
      <section className="mt-12 bg-white p-6 md:p-12 rounded-xl shadow-sm">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0">
            <h2 className="text-3xl font-bold mb-4">Can&apos;t find what you&apos;re looking for?</h2>
            <p className="text-gray-600 max-w-xl">
              Our property experts can help you find the perfect property 
              that matches your requirements and budget.
            </p>
          </div>
          <button 
            onClick={() => setShowContactModal(true)} 
            className="bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors"
          >
            Contact an Agent
          </button>
        </div>
      </section>
    </main>
  );
} 