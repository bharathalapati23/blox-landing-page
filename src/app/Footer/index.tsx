import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="py-8 px-4 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-8 md:flex-row md:justify-between items-center w-full border-b-2 border-gray-200 pb-8 md:pb-12 px-4 md:px-6">
          <div className="w-full md:w-auto flex justify-center md:justify-start">
            <Image 
              src="/logo1.png" 
              alt="property" 
              width={390} 
              height={167}
              className="w-[280px] md:w-[390px] h-auto"
            />
          </div>
          <div className="flex flex-col gap-4 w-full md:w-auto">
            <div className="flex flex-row gap-3 items-start">
              <Image src="/Location.svg" alt="location" width={24} height={17} className="mt-1 flex-shrink-0" />
              <span className="text-[#090909] max-w-[400px] text-sm md:text-base">
                No 22, 3rd Floor, Bellary Rd, Dena Bank Colony, Ganganagar, Bengaluru - 560032
              </span>
            </div>
            <div className="flex flex-row gap-3 items-center">
              <Image src="/Email.svg" alt="email" width={24} height={17} className="flex-shrink-0" />
              <span className="text-[#090909] text-sm md:text-base">
                info@bloxresidential.com
              </span>
            </div>
            <div className="flex flex-row gap-3 items-center">
              <Image src="/Phone.svg" alt="phone" width={24} height={17} className="flex-shrink-0" />
              <span className="text-[#090909] text-sm md:text-base">
                +91 9738563155
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col-reverse md:flex-row gap-4 md:gap-0 md:justify-between items-center w-full py-6 md:py-8 px-4 md:px-6">
          <nav className="flex gap-6">
            <Link href="/" className="text-gray-700 hover:text-black text-sm md:text-base">
              Home
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-black text-sm md:text-base">
              Contact Us
            </Link>
          </nav>
          <div className="text-sm md:text-base text-center md:text-left">
            Copyright © 2025 • BLOX RESIDENTIALS.
          </div>
        </div>
      </div>
    </footer>
  );
} 