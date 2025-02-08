export default function ContactForm() {
  return (
    <div className="px-12 mb-20 py-10 bg-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left side - Text */}
        <div>
          <h2 className="text-4xl font-medium mb-4">Get in touch</h2>
          <p className="text-gray-500">
            Want to know more about our services? or have something in mind? Please reach out to us!
          </p>
        </div>

        {/* Right side - Form */}
        <div className="p-8 rounded-2xl shadow-lg border border-gray-200" style={{ 
          backgroundImage: 'linear-gradient(135deg, #FFC4C9 0%, white 30%)'
        }}>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 bg-white/70 backdrop-blur-sm border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 bg-white/70 backdrop-blur-sm border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                What service are you interested in?
              </label>
              <select
                id="service"
                className="w-full px-4 py-2 bg-white/70 backdrop-blur-sm border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
              >
                <option value="">Select project type</option>
                <option value="luxury">Luxury Homes</option>
                <option value="nri">NRI Services</option>
                <option value="buy">Buy Property</option>
                <option value="sell">Sell Property</option>
                <option value="rent">Rent Property</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 bg-white/70 backdrop-blur-sm border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition-colors"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
} 