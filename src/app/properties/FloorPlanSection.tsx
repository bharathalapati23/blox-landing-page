'use client';
import { useState, useEffect, useMemo } from 'react';
import Image from 'next/image';

interface FloorPlanProps {
  property: {
    title: string;
    floorPlan?: string[];
  }
}

export default function FloorPlanSection({ property }: FloorPlanProps) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  
  // Use useMemo to prevent unnecessary recalculations
  const floorPlanImages = useMemo(() => property.floorPlan || [], [property.floorPlan]);
  
  // Debug log to check if floorPlan images are being received
  useEffect(() => {
    console.log('FloorPlan images:', floorPlanImages);
  }, [floorPlanImages]);

  // If no floor plan images are available, use fallback images
  const fallbackImages = {
    'Masterplan': 'https://res.cloudinary.com/dojfndzbj/image/upload/v1739000000/masterplan-placeholder.jpg',
    '3BHK': 'https://res.cloudinary.com/dojfndzbj/image/upload/v1739000000/3bhk-placeholder.jpg',
    '4BHK': 'https://res.cloudinary.com/dojfndzbj/image/upload/v1739000000/4bhk-placeholder.jpg',
    '5BHK': 'https://res.cloudinary.com/dojfndzbj/image/upload/v1739000000/5bhk-placeholder.jpg'
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="mb-6">
        <h3 className="text-2xl md:text-4xl font-bold mb-6">
          {property.title} - Pricing & Floorplans
        </h3>
        
        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-6">
          {floorPlanImages.length > 0 ? (
            floorPlanImages.map((_, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeImageIndex === index 
                    ? 'bg-black text-white' 
                    : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                }`}
                onClick={() => setActiveImageIndex(index)}
              >
                Floor Plan {index + 1}
              </button>
            ))
          ) : (
            Object.keys(fallbackImages).map((tab) => (
              <button
                key={tab}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeImageIndex === Object.keys(fallbackImages).indexOf(tab) 
                    ? 'bg-black text-white' 
                    : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                }`}
                onClick={() => setActiveImageIndex(Object.keys(fallbackImages).indexOf(tab))}
              >
                {tab}
              </button>
            ))
          )}
        </div>
      </div>

      {/* Floor Plan Image */}
      <div className="relative w-full h-96 bg-gray-100 rounded-lg overflow-hidden">
        <Image
          src={floorPlanImages.length > 0 
            ? floorPlanImages[activeImageIndex] 
            : Object.values(fallbackImages)[activeImageIndex]}
          alt={`Floor plan ${activeImageIndex + 1} for ${property.title}`}
          fill
          className="object-contain"
        />
      </div>

      {/* Legend or additional information could go here */}
      <div className="mt-4 text-sm text-gray-500">
        * Floor plans are representative. Actual dimensions and layouts may vary.
      </div>
    </div>
  );
} 