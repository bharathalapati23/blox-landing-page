import Navbar from "./Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center w-full max-w-screen p-12">
        {/* Container with aspect ratio */}
        <div className="relative w-full h-[800px] max-h-[800px]">
          {/* Image fills container */}
          <Image 
            src="/hero.png" 
            alt="hero" 
            fill // Makes image fill parent container
            className="object-cover rounded-3xl" // Ensures image covers container

          />
          
          {/* Text overlay */}
          <div className="absolute left-[72px] bottom-20 z-10 text-[#FAFAFA] font-semibold flex flex-col gap-4">
            BLOX RESIDENTIALS
            <span className="font-normal text-6xl">
              Your Trusted Partner In Finding Premier Properties
            </span>
            <button className="bg-[#FAFAFA] text-[#232323] px-10 py-4 rounded-lg w-fit">
              Call us at +91 9738563155
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center w-full max-w-screen mb-32 mt-20 gap-2">
        <span className=" text-gray-600">
          We're still
        </span>
        <span className="text-6xl">
          Cooking our website
        </span>
        <span className="text-xl">
          Launching our website very soon, Stay tuned.
        </span>
      </div>
      <div className="flex flex-row justify-between items-center w-[calc(100%-112px)] mx-auto border-b-2 border-gray-200 pb-12">
        <Image src="/Logo.png" alt="property" width={390} height={167} />
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
      <div className="flex flex-row justify-end items-center w-[calc(100%-112px)] mx-auto pb-12 pt-2">
        Copyright © 2025 • BLOX RESIDENTIALS.
      </div>
    </div>
  );
}