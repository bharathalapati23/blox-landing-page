'use client'

import Image from "next/image";
import PropertyShowcase from "./components/PropertyShowcase";
import ContactForm from "./components/ContactForm";
import LocationGrid from "./components/LocationGrid";

export default function Home() {
  return (
    <div>
      <div className="flex justify-center items-center w-full max-w-screen md:p-12 p-4">
        {/* Container with aspect ratio */}
        <div className="relative w-full h-[700px] max-h-[800px]">
          {/* Image fills container */}
          <Image 
            src="/hero1.png" 
            alt="hero" 
            fill // Makes image fill parent container
            className="object-cover rounded-3xl" // Ensures image covers container

          />
          
          {/* Text overlay */}
          <div className="absolute flex flex-col justify-center items-center md:justify-start md:items-start md:left-[72px] bottom-20 z-10 text-[#FAFAFA] font-semibold gap-4">
            BLOX RESIDENTIALS
            <span className="font-normal md:text-6xl text-2xl text-center md:text-left">
              Your <span className="font-semibold">Trusted Partner</span> In Finding Premier Properties
            </span>
            <button 
              className="bg-[#FAFAFA] text-[#232323] px-10 py-4 rounded-lg w-fit" 
              onClick={() => window.open('tel:+919738563155', '_blank')}
            >
              Call us at +91 9738563155
            </button>
          </div>
        </div>
      </div>
      <LocationGrid />
      

      {/* New Real Estate Services Section */}
      <div className="px-12 mb-20">
        <div className="mb-8">
          <p className="text-gray-500 uppercase text-sm mb-4">END - TO - END SERVICES</p>
          <h2 className="md:text-6xl text-3xl font-light text-gray-300 mb-1">Everything real estate</h2>
          <h2 className="md:text-6xl text-3xl font-medium">under one roof</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Luxury Homes Card */}
          <div className="cursor-pointer border-l-4 border-red-500 pl-4">
            <h3 className="text-black font-medium md:text-[32px] text-xl mb-2">Luxury and Vacation Homes</h3>
            <p className="text-gray-500">Premium properties for discerning buyers</p>
            <div className="mt-4">
              
            </div>
          </div>

          {/* NRI Services Card */}
          <div className="cursor-pointer border-l-4 border-red-500 pl-4">
            <h3 className="text-black font-medium md:text-[32px] text-xl mb-2">NRI Services</h3>
            <p className="text-gray-500">End-to-end solutions for NRI real estate needs</p>
            <div className="mt-4">
              
            </div>
          </div>

          {/* Buy, Sell & Rent Card */}
          <div className="cursor-pointer border-l-4 border-red-500 pl-4">
            <h3 className="text-black font-medium md:text-[32px] text-xl mb-2">Buy, Sell & Rent</h3>
            <p className="text-gray-500">Complete real estate transaction solutions</p>
            <div className="mt-4">
              
            </div>
          </div>
        </div>
      </div>
      {/* New full width image section */}
      <div className="relative w-[calc(100%-96px)] h-[450px] mx-12 rounded-xl overflow-hidden">
        <Image 
          src="https://res.cloudinary.com/dojfndzbj/image/upload/v1738999007/yxrnz34e5lmiuqblkdkk.png"
          alt="Full width background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Property Showcase Component */}
      <PropertyShowcase />

      {/* Contact Form Component */}
      <ContactForm />
    </div>
  );
}