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
    <main className="p-8 pt-32 md:p-12 flex flex-row justify-center gap-32 bg-[#F7F7F7] text-[#232323]">
      {/* Left Section */}
      <div className="w-1/3 max-w-[327px] flex flex-col justify-between">
        <div>
            <h1 className="text-6xl font-bold mb-4">Let&apos;s Talk</h1>
            <p className="mb-12">
            Want to know more about our services? or have something in mind? Please reach out to us!
            </p>
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="mb-2 text-[#C6C6C6] text-3xl">Email</h3>
            <p className="text-gray-600">info@bloxresidentials.com</p>
          </div>

          <div>
            <h3 className="font-medium mb-2 text-[#C6C6C6] text-3xl">Socials</h3>
            <div className="flex gap-4">
              <a href="#" className="text-gray-600 hover:text-black">Instagram</a>
              <a href="#" className="text-gray-600 hover:text-black">Twitter</a>
              <a href="#" className="text-gray-600 hover:text-black">Facebook</a>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section - Form */}
      <div className="w-2/3 max-w-[733px] bg-white p-12 rounded-xl shadow-sm">
        <form onSubmit={handleSubmit} className="space-y-6">
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
    </main>
  );
} 