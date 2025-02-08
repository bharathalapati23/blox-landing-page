const LocationGrid = () => {
  const locations = [
    { name: 'Bangalore', href: '#' },
    { name: 'Mumbai', href: '#' },
    { name: 'Gurgaon', href: '#' },
    { name: 'Hyderabad', href: '#' },
    { name: 'Pune', href: '#' },
    { name: 'Ahmedabad', href: '#' },
    { name: 'Chennai', href: '#' },
    { name: 'Goa', href: '#' },
    { name: 'Kochi', href: '#' },
  ];

  return (
    <div className="px-12 my-20 bg-gray-100 py-10">
      <div className="flex flex-col md:flex-row md:items-center gap-12">
        <div className="md:w-1/3">
          <h2 className="text-3xl md:text-4xl font-medium mb-3">Featured location:</h2>
          <p className="text-gray-500 text-sm">Explore properties in India&apos;s top cities and global hubs</p>
        </div>
        
        <div className="md:w-2/3 grid grid-cols-2 md:grid-cols-3 gap-y-6 gap-x-12">
          {locations.map((location) => (
            <div
              key={location.name}
              className="text-gray-600 hover:text-gray-900 transition-colors bg-white rounded-xl p-4 cursor-pointer"
            >
              {location.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LocationGrid; 