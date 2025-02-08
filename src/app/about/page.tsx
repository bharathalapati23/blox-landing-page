'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
export default function AboutPage() {
  const [counts, setCounts] = useState({
    years: 0,
    crores: 0,
    customers: 0,
    projects: 0
  });

  useEffect(() => {
    const duration = 1000; // 1 second for the animation
    const steps = 60;
    const interval = duration / steps;

    const targets = {
      years: 10,
      crores: 2500,
      customers: 500,
      projects: 50
    };

    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      
      if (currentStep === steps) {
        setCounts(targets);
        clearInterval(timer);
        return;
      }

      setCounts({
        years: Math.min(Math.round((targets.years * currentStep) / steps), targets.years),
        crores: Math.min(Math.round((targets.crores * currentStep) / steps), targets.crores),
        customers: Math.min(Math.round((targets.customers * currentStep) / steps), targets.customers),
        projects: Math.min(Math.round((targets.projects * currentStep) / steps), targets.projects)
      });
    }, interval);

    return () => clearInterval(timer);
  }, []);

  return (
    <main className="p-8 pt-32 md:p-12 flex flex-col gap-10 bg-[#F7F7F7]">
      {/* First Section - Existing content */}
      <div className="flex flex-row justify-center gap-32">
        {/* Left Section - Image */}
        <div className="w-[517px] h-[494px] relative">
          <Image 
            src="https://res.cloudinary.com/dojfndzbj/image/upload/v1738998234/dp0rzn8cpzbbnxaq3doy.png" 
            alt="Business meeting"
            className="rounded-lg object-cover w-full h-full"
            width={517}
            height={494}
          />
        </div>

        {/* Right Section - Content */}
        <div className="max-w-[600px]">
          <div className="mb-4">
            <p className="text-sm uppercase tracking-wider text-gray-500 mb-4">HOW IT STARTED</p>
            <h1 className="text-6xl font-bold mb-8">At Blox Residential&apos;s</h1>
            <p className="text-gray-600 mb-6">
              With over a decade of experience, Blox Residentials has been a trusted name in redefining real estate. 
              From its roots in Bengaluru, the company has grown to establish a strong presence across India&apos;s major metros and global markets.
            </p>
            <p className="text-gray-600">
              Recognizing the challenges of navigating an often fragmented real estate sector, we&apos;ve built a foundation on trust, professionalism, and transparency. 
              Our approach bridges the gap between clients&apos; expectations and market realities, ensuring a seamless, rewarding experience for homebuyers, investors, and sellers alike.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-8">
            <div className="p-6 bg-white rounded-xl">
              <h2 className="text-5xl font-bold text-[#FF4444] mb-2">{counts.years}+</h2>
              <p className="text-gray-600">Years of experience</p>
            </div>
            
            <div className="p-6 bg-white rounded-xl">
              <h2 className="text-5xl font-bold text-[#232323] mb-2">₹{counts.crores}+</h2>
              <p className="text-gray-600">Crores Transacted</p>
            </div>
            
            <div className="p-6 bg-white rounded-xl">
              <h2 className="text-5xl font-bold text-[#232323] mb-2">{counts.customers}+</h2>
              <p className="text-gray-600">Happy Customers</p>
            </div>
            
            <div className="p-6 bg-white rounded-xl">
              <h2 className="text-5xl font-bold text-[#232323] mb-2">{counts.projects}+</h2>
              <p className="text-gray-600">Projects Sold</p>
            </div>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="mx-auto bg-white p-12 rounded-xl shadow-sm max-w-[1264px]">
        <p className="text-sm uppercase tracking-wider text-gray-500 mb-4">OUR MISSION</p>
        <div className="space-y-8">
          <h2 className="text-6xl font-bold">
            To provide<br />
            exceptional services
          </h2>
          <p className="text-gray-600">
            Our mission is to empower clients with informed decisions through tailored, end-to-end services that combine 
            innovation with a personal touch. At Blox Residentials, we turn transactions into long-term partnerships, shaping 
            the future of real estate with every step.
          </p>
        </div>
      </div>

      {/* Get in touch Section */}
      <div className="relative w-full rounded-xl overflow-hidden flex justify-center items-center">
        <div 
          className="w-[1264px] h-[521px] bg-[url('https://res.cloudinary.com/dojfndzbj/image/upload/v1738997633/votbhzi11ad9tdb26uw9.png')] 
          bg-cover bg-center bg-no-repeat"
        >
          <div className="relative z-10 flex flex-col justify-center h-full px-24">
            <h2 className="text-5xl font-bold text-white mb-4">
              Get in touch with us
            </h2>
            <p className="text-gray-200 mb-8 max-w-[600px]">
              Want to know more about our services? or have something in mind? Please reach out to us!
            </p>
            <button className="bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors w-fit">
              Contact us
            </button>
          </div>
        </div>
      </div>
    </main>
  );
} 