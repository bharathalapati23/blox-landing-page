'use client'

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="relative">
      <div className="bg-white h-24 flex justify-between items-center px-4 md:px-12">
        <Link href="/">
          <Image src="/logo1.png" alt="logo" width={181} height={71} />
        </Link>
        
        <div className="flex items-center gap-6">
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-gray-700 hover:text-black font-medium">
              Home
            </Link>
            <Link href="/properties" className="text-gray-700 hover:text-black font-medium">
              Properties
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-black font-medium">
              About
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-black font-medium">
              Contact
            </Link>
          </nav>
          
          <button className="bg-black text-white px-4 py-2 rounded-lg text-sm font-semibold">
            Call us
          </button>
          
          {/* WhatsApp link hidden on mobile */}
          <Link 
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:block"
          >
            <Image 
              src="/whatsappIcon.png" 
              alt="whatsapp" 
              width={24} 
              height={24} 
              className="cursor-pointer" 
            />
          </Link>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="space-y-1.5">
              <span className="block w-6 h-0.5 bg-gray-600"></span>
              <span className="block w-6 h-0.5 bg-gray-600"></span>
              <span className="block w-6 h-0.5 bg-gray-600"></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-24 left-0 right-0 bg-white shadow-lg md:hidden z-10">
          <nav className="flex flex-col py-4">
            <Link 
              href="/" 
              className="px-4 py-2 text-gray-700 hover:bg-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/properties" 
              className="px-4 py-2 text-gray-700 hover:bg-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Properties
            </Link>
            <Link 
              href="/about" 
              className="px-4 py-2 text-gray-700 hover:bg-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              href="/contact" 
              className="px-4 py-2 text-gray-700 hover:bg-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
}
