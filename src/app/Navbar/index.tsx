import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="bg-white h-24 flex justify-between items-center px-4 md:px-12">
      <Link href="/">
        <Image src="/logo1.png" alt="logo" width={181} height={71} />
      </Link>
      
      <div className="flex items-center gap-6">
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-gray-700 hover:text-black font-medium">
            Home
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
        <Image 
          src="/whatsappIcon.png" 
          alt="whatsapp" 
          width={24} 
          height={24} 
          className="cursor-pointer" 
        />
      </div>
    </div>
  );
}
