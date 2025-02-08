'use client';
import Image from "next/image";
import { useState } from "react";

export default function PropertyShowcase() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const properties = [
    {
      title: "Embassy Lake Terraces",
      description: "Luxury apartments with stunning views",
      image: "https://res.cloudinary.com/dojfndzbj/image/upload/v1739000019/we58mycrretzksvjsojj.png",
      gradient: "from-[#ABF0F9] to-[#FCE5F5]"
    },
    {
      title: "MAIA Pelican Grove",
      description: "Tranquil living amidst greenery",
      image: "https://res.cloudinary.com/dojfndzbj/image/upload/v1739000019/t0kymklvj6aymvkmdwui.png",
      gradient: "from-[#FFC4C9] to-[#FFF5B4]"
    },
    {
      title: "Phoenix Kessaku",
      description: "Bespoke homes redefining opulence",
      image: "https://res.cloudinary.com/dojfndzbj/image/upload/v1739000019/ssulqesrlxs9vm94b1fm.png",
      gradient: "from-[#FF9998] to-[#EFEEF1]"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % properties.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + properties.length) % properties.length);
  };

  return (
    <>
      <div className="px-12 my-20">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-medium mb-4">Professional service, proven results.</h2>
          <p className="text-gray-500">Explore transformative new buildings that elevate modern luxury living.</p>
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden relative">
          <div className={`rounded-3xl overflow-hidden bg-gradient-to-b ${properties[currentSlide].gradient}`}>
            <div className="text-center mb-6 mt-6 h-[88px] flex flex-col justify-center">
              <h3 className="text-3xl font-medium mb-2 px-4">{properties[currentSlide].title}</h3>
              <p className="text-gray-600 text-sm">{properties[currentSlide].description}</p>
            </div>
            <div className="w-full h-[250px] relative rounded-2xl overflow-hidden">
              <Image
                src={properties[currentSlide].image}
                alt={properties[currentSlide].title}
                fill
                className="object-cover"
              />
            </div>
          </div>
          
          {/* Navigation Buttons */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white p-2 rounded-full shadow-md hover:bg-gray-50"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="m15 18-6-6 6-6"/>
            </svg>
          </button>
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white p-2 rounded-full shadow-md hover:bg-gray-50"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="m9 18 6-6-6-6"/>
            </svg>
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-4">
            {properties.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 w-2 rounded-full ${
                  currentSlide === index ? 'bg-gray-800' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-6">
          {properties.map((property, index) => (
            <div key={index} className={`rounded-3xl overflow-hidden bg-gradient-to-b ${property.gradient}`}>
              <div className="text-center mb-6 mt-6 h-[88px] flex flex-col justify-center">
                <h3 className="text-3xl font-medium mb-2 px-4">{property.title}</h3>
                <p className="text-gray-600 text-sm">{property.description}</p>
              </div>
              <div className="w-full h-[250px] relative rounded-2xl overflow-hidden">
                <Image
                  src={property.image}
                  alt={property.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>      
    </>
  );
} 