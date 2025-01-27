import Image from "next/image";

export default function Navbar() {
  return (
    <div className="bg-white h-24 flex justify-between items-center px-4 md:px-12">
      <Image src="/logo1.png" alt="logo" width={181} height={71} />
      <div className="flex items-center gap-4">
        <button className="bg-black text-white px-4 py-2 rounded-lg text-sm font-semibold">
          Call us
        </button>
        <Image src="/whatsappIcon.png" alt="whatsapp" width={24} height={24} className="cursor-pointer" />
      </div>
    </div>
  );
}
