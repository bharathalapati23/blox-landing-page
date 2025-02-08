"use client";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    budget: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <main className="p-4 pt-20 md:p-8 md:pt-32 lg:p-12 flex flex-col items-center lg:flex-row lg:items-start justify-center lg:gap-32 bg-[#F7F7F7] text-[#232323]">
      {/* Title Section - Always at top */}
      <div className="w-full max-w-xl lg:w-1/3 lg:max-w-[327px] lg:flex lg:flex-col lg:justify-between">
        <div className="mb-8 lg:mb-0">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Let&apos;s Talk</h1>
            <p className="mb-6 lg:mb-12 text-base sm:text-lg">
            Want to know more about our services? or have something in mind? Please reach out to us!
            </p>
        </div>

        {/* Contact Info - Hidden on mobile, shown on desktop */}
        <div className="hidden lg:block space-y-6">
          <div>
            <h3 className="mb-2 text-[#C6C6C6] text-2xl md:text-3xl">Email</h3>
            <p className="text-gray-600">info@bloxresidentials.com</p>
          </div>

          <div>
            <h3 className="font-medium mb-2 text-[#C6C6C6] text-2xl md:text-3xl">Socials</h3>
            <div className="flex gap-4">
              <a href="#" className="text-gray-600 hover:text-black transition-colors">Instagram</a>
              <a href="#" className="text-gray-600 hover:text-black transition-colors">Twitter</a>
              <a href="#" className="text-gray-600 hover:text-black transition-colors">Facebook</a>
            </div>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="w-full max-w-xl lg:w-2/3 lg:max-w-[733px]">
        <div className="bg-white p-5 sm:p-6 md:p-8 lg:p-12 rounded-xl shadow-sm">
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                required
              />
            </div>

            <div>
              <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                What service are you interested in?
              </label>
              <select
                id="service"
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                required
              >
                <option value="">Select a service</option>
                <option value="residential">Residential Property</option>
                <option value="commercial">Commercial Property</option>
                <option value="consultation">Property Consultation</option>
              </select>
            </div>

            <div>
              <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-1">
                Budget
              </label>
              <select
                id="budget"
                value={formData.budget}
                onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                required
              >
                <option value="">Select your budget</option>
                <option value="0-50k">₹0 - ₹50,000</option>
                <option value="50k-1L">₹50,000 - ₹1,00,000</option>
                <option value="1L-5L">₹1,00,000 - ₹5,00,000</option>
                <option value="5L+">₹5,00,000+</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded-md hover:bg-gray-800 transition-colors"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Contact Info - Shown on mobile, hidden on desktop */}
        <div className="mt-8 space-y-4 sm:space-y-6 lg:hidden px-1">
          <div>
            <h3 className="mb-2 text-[#C6C6C6] text-xl sm:text-2xl md:text-3xl">Email</h3>
            <p className="text-gray-600">info@bloxresidentials.com</p>
          </div>

          <div>
            <h3 className="font-medium mb-2 text-[#C6C6C6] text-xl sm:text-2xl md:text-3xl">Socials</h3>
            <div className="flex gap-4">
              <a href="#" className="text-gray-600 hover:text-black transition-colors">Instagram</a>
              <a href="#" className="text-gray-600 hover:text-black transition-colors">Twitter</a>
              <a href="#" className="text-gray-600 hover:text-black transition-colors">Facebook</a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 