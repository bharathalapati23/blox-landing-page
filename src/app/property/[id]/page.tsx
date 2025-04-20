'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';

interface PropertyConfiguration {
  noOfBedrooms: number;
  pricing: string;
  sqFootage: string;
}

interface Property {
  id: number;
  title: string;
  location: string;
  price: string;
  bhk: string;
  acres: string;
  units: string;
  image: string;
  overview: string;
  images: string[];
  popular: boolean;
  brochure?: string;
  propertyConfiguration: PropertyConfiguration[];
}

export default function PropertyDetailPage() {
  const params = useParams();
  const propertyId = params.id;
  
  const [property, setProperty] = useState<Property | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeImage, setActiveImage] = useState<string | null>(null);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    async function fetchProperty() {
      try {
        const response = await fetch('/propertyConfig.json');
        const data = await response.json();
        
        // Find the property with the matching ID (subtract 1 as array is 0-indexed but IDs start from 1)
        const propertyIndex = Number(propertyId) - 1;
        
        if (propertyIndex >= 0 && propertyIndex < data.length) {
          const propertyData = data[propertyIndex];
          
          // Get BHK configuration as string (e.g., "3, 4 & 5 BHK")
          const bhkConfigs = propertyData.propertyConfiguration.map((config: PropertyConfiguration) => config.noOfBedrooms);
          const uniqueBhks = [...new Set(bhkConfigs)];
          const bhkString = uniqueBhks.join(', ') + ' BHK';
          
          const formattedProperty = {
            id: Number(propertyId),
            title: propertyData.name,
            location: propertyData.projectType, // Using projectType as location since location is null
            price: propertyData.propertyConfiguration[0]?.pricing || 'Price on request',
            bhk: bhkString,
            acres: `${propertyData.developmentSize} Acres`,
            units: `${propertyData.totalUnits} Units`,
            image: propertyData.images[0] || "",
            overview: propertyData.overview,
            images: propertyData.images,
            popular: true,
            brochure: propertyData.brochure,
            propertyConfiguration: propertyData.propertyConfiguration
          };
          
          setProperty(formattedProperty);
          setActiveImage(formattedProperty.images[0]);
        } else {
          console.error('Property not found');
        }
      } catch (error) {
        console.error('Error fetching property:', error);
      } finally {
        setLoading(false);
      }
    }
    
    if (propertyId) {
      fetchProperty();
    }
  }, [propertyId]);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl">Loading property details...</p>
      </div>
    );
  }

  if (!property) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold">Property Not Found</h1>
        <p>We couldn&apos;t find the property you&apos;re looking for.</p>
        <Link href="/properties" className="bg-black text-white px-6 py-3 rounded-lg">
          Back to Properties
        </Link>
      </div>
    );
  }

  return (
    <main className="bg-[#F7F7F7] min-h-screen pt-32 pb-16">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Breadcrumb Navigation */}
        <div className="mb-6">
          <nav className="flex text-sm">
            <Link href="/" className="text-gray-500 hover:text-gray-700">Home</Link>
            <span className="mx-2 text-gray-500">/</span>
            <Link href="/properties" className="text-gray-500 hover:text-gray-700">Properties</Link>
            <span className="mx-2 text-gray-500">/</span>
            <span className="text-gray-900 font-medium">{property.title}</span>
          </nav>
        </div>

        {/* Property Header Section */}
        <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{property.title}</h1>
              <p className="text-gray-600 mb-4">{property.location}</p>
              <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-1 text-gray-400">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
                  </svg>
                  <span>{property.bhk}</span>
                </div>
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-1 text-gray-400">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
                  </svg>
                  <span>{property.acres}</span>
                </div>
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-1 text-gray-400">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                  </svg>
                  <span>{property.units}</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start md:items-end gap-2">
              <div className="flex items-center">
                <span className="text-red-500 text-2xl font-bold mr-2">{property.price}</span>
                <span className="text-gray-500">Onwards</span>
              </div>
              <div className="flex gap-2">
                <a 
                  href={property.brochure || '#'} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded flex items-center gap-2 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                  </svg>
                  Brochure
                </a>
                <button 
                  onClick={toggleFavorite}
                  className="bg-gray-100 hover:bg-gray-200 text-gray-800 p-2 rounded flex items-center justify-center transition-colors"
                  aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
                >
                  {isFavorite ? (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-red-500">
                      <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Property Images Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          {/* Main Image */}
          <div className="md:col-span-3 h-[400px] bg-white rounded-lg overflow-hidden relative">
            {activeImage && (
              <Image 
                src={activeImage} 
                alt={property.title} 
                fill
                className="object-cover"
              />
            )}
          </div>
          
          {/* Thumbnails */}
          <div className="flex flex-row md:flex-col gap-2 overflow-x-auto md:overflow-y-auto md:h-[400px]">
            {property.images.map((img, index) => (
              <div 
                key={index}
                className={`relative h-20 w-20 md:w-full flex-shrink-0 cursor-pointer rounded-lg overflow-hidden border-2 ${
                  activeImage === img ? 'border-red-500' : 'border-transparent'
                }`}
                onClick={() => setActiveImage(img)}
              >
                <Image 
                  src={img} 
                  alt={`${property.title} - ${index + 1}`} 
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Property Details Tabs */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4">Overview</h2>
          <p className="text-gray-700 whitespace-pre-line">{property.overview}</p>
        </div>

        {/* Property Configuration */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-2xl font-bold mb-6">Property Configuration</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Configuration
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Size
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Price
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {property.propertyConfiguration.map((config, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {config.noOfBedrooms} BHK
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {config.sqFootage}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {config.pricing}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-2">Interested in this property?</h2>
              <p className="text-gray-600">
                Speak to our property experts for more details
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 mt-6 md:mt-0">
              <a href="tel:+1234567890" className="bg-green-800 text-white px-6 py-3 rounded-lg flex items-center justify-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                Call Now
              </a>
              <button className="bg-black text-white px-6 py-3 rounded-lg flex items-center justify-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                Send Enquiry
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 