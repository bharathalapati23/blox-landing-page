import React, { useEffect } from 'react';

const LocationGrid = () => {
  const [hoveredImage, setHoveredImage] = React.useState('');
  const locations = [
      { name: 'Hyderabad', image: 'https://res.cloudinary.com/dojfndzbj/image/upload/v1739011003/ovlwwjgt4q2y9ecx9fet.png' },
      { name: 'Chennai', image: 'https://res.cloudinary.com/dojfndzbj/image/upload/v1739012407/w4fezdzabewaoaptewb0.png' },
      { name: 'Gurgaon', image: 'https://res.cloudinary.com/dojfndzbj/image/upload/v1739011003/snooqyrz0iegzlae4fcd.png' },
      { name: 'Goa', image: 'https://res.cloudinary.com/dojfndzbj/image/upload/v1739011009/ze5juhdujxqi8vqg9wld.png' },
      { name: 'Pune', image: 'https://res.cloudinary.com/dojfndzbj/image/upload/v1739011009/joxasnhisqcmwwexe5om.png' },
    { name: 'Ahmedabad',  image: 'https://res.cloudinary.com/dojfndzbj/image/upload/v1739011001/gpyaxxusswmlbqetg2ir.png' },
    { name: 'Kochi', image: 'https://res.cloudinary.com/dojfndzbj/image/upload/v1739011004/bqlugpqp6pqbfjscydzf.png' },
    { name: 'Dubai', image: 'https://res.cloudinary.com/dojfndzbj/image/upload/v1739011002/m41wjqjhwi6bk8gxir83.png' },
  ];

  useEffect(() => {
    // Preload all images
    locations.forEach(location => {
      const img = new Image();
      img.src = location.image;
    });
  }, []); // Empty dependency array means this runs once on mount

  return (
    <div 
      className="px-12 my-10 py-10 bg-cover bg-center bg-no-repeat relative transition-all duration-500"
      style={{ 
        backgroundImage: `url(${hoveredImage || locations[locations.length - 1].image})`
      }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-12">
        <div className="md:w-1/3">
          <h2 className="text-3xl md:text-4xl font-medium mb-3 text-white">Featured location:</h2>
          <p className="text-gray-200 text-sm">Explore properties in India&apos;s top cities and global hubs</p>
        </div>
        
        <div className="md:w-2/3 grid grid-cols-2 md:grid-cols-3 gap-y-6 gap-x-12">
          {locations.map((location) => (
            <div
              key={location.name}
              className="text-white bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 rounded-xl p-4 cursor-pointer relative h-24 flex items-center justify-center"
              onMouseEnter={() => setHoveredImage(location.image)}
            >
              <span className="font-medium">{location.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LocationGrid; 