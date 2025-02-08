import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="py-12 px-4 md:px-12">
      <div className="flex flex-col gap-4 md:flex-row justify-between items-center w-[calc(100%-112px)] mx-auto border-b-2 border-gray-200 pb-12">
        <Image src="/logo1.png" alt="property" width={390} height={167} />
        <div className="flex flex-col gap-3">
          <div className="flex flex-row gap-3">
            <Image src="/Location.svg" alt="linkedin" width={24} height={17} />
            <span className="text-[#090909] max-w-[400px] text-wrap">
              No 22, 3rd Floor, Bellary Rd, Dena Bank Colony, Ganganagar, Bengaluru - 560032
            </span>
          </div>
          <div className="flex flex-row gap-3">
            <Image src="/Email.svg" alt="facebook" width={24} height={17} />
            <span className="text-[#090909]">
                info@bloxresidential.com
            </span>
          </div>
          <div className="flex flex-row gap-3">
            <Image src="/Phone.svg" alt="instagram" width={24} height={17} />
            <span className="text-[#090909]">
              +91 9738563155
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-between items-center w-[calc(100%-112px)] mx-auto pb-12 pt-2">
        <nav className="flex gap-6">
          <Link href="/" className="text-gray-700 hover:text-black">
            Home
          </Link>
          <Link href="/contact" className="text-gray-700 hover:text-black">
            Contact Us
          </Link>
        </nav>
        <div>
          Copyright © 2025 • BLOX RESIDENTIALS.
        </div>
      </div>
    </footer>
  );
} 