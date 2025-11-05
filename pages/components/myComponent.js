import React from "react";
import Link from "next/link";
import Image from "next/image";

function MyComponent() {
  return (
    <div className=" w-[473px] rounded-xl bg-black p-4 relative border border-[#262626] hover:border-blue-500">
      <div className="h-[231px] rounded-lg">
        <Image
          src="/cupp.avif"
          alt="Acme Mug"
          width={400}
          height={400}
          className="h-full w-full object-contain transition duration-300 ease-in-out hover:scale-105"
        />
      </div>
      {/*Price and name box*/}
      <div className="flex items-center bg-black border border-gray-700 rounded-full px-2 py-1 absolute bottom-20 left-5 gap-4">
        <span className="text-white text-xs font-bold">Acme Mug</span>
        <div className="bg-blue-600 text-white px-3 py-2 rounded-full font-semibold text-xs">
          $15.00 USD
        </div>
      </div>
    </div>
  );
}

export default MyComponent;
