import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, ShoppingCart } from "lucide-react";
import HeaderStore from "./components/headerStore";
import Marquee from "react-fast-marquee";
import MyComponent from "./components/myComponent";
import FooterStore from "./components/footerStore";

export default function Store1014() {
  return (
    <div className="w-screen h-full bg-[#171717]">
      {/*---------------------HEADER--------------------*/}
      <HeaderStore />

      {/*-----------------------MAIN BODY--------------------*/}
      <div className="px-4">
        {/*Grid section*/}
        <div className="grid grid-cols-3 gap-4">
          {/* LEFT BIG PRODUCT */}
          <div className="col-span-2 bg-black rounded-2xl flex h-[600px] items-center justify-center relative border border-[#262626] hover:border-blue-500">
            <Image
              src="/black.avif"
              alt="Black shirt"
              width={600}
              height={600}
            />
            <div className="absolute top-70 left-20 flex items-center space-x-3 bg-black border border-[#262626] pl-3 pr-1 py-1 rounded-full ">
              <span className="text-xs font-bold text-white">
                Acme Circles T-Shirt
              </span>
              <span className="flex items-center justify-center px-2 py-2 text-xs font-bold text-white bg-blue-600 rounded-full">
                $20.00 USD
              </span>
            </div>
          </div>

          {/* RIGHT SIDE PRODUCTS */}
          <div className="flex flex-col gap-4 min-h-[600px]">
            {/* PRODUCT 2 */}
            <div className="bg-black rounded-2xl p-6 flex h-[292px] items-center justify-center relative border border-[#262626] hover:border-blue-500">
              <Image
                src="/bag.avif"
                alt="Acme bag"
                width={1200}
                height={1200}
                className="w-[70%] object-contain"
              />

              <div className="absolute bottom-6 left-6 flex items-center space-x-3 bg-black border border-[#262626] pl-3 pr-1 py-1 rounded-full">
                <span className="text-xs font-bold text-white">
                  Acme Drawstring Bag
                </span>
                <span className="px-2 py-2 text-xs font-bold text-white bg-blue-600 rounded-full">
                  $12.00 USD
                </span>
              </div>
            </div>

            {/* PRODUCT 3 */}
            <div className="bg-black rounded-2xl p-6 h-[292px] flex items-center justify-center relative border border-[#262626] hover:border-blue-500">
              <Image
                src="/cup.avif"
                alt="Acme cup"
                width={1200}
                height={1200}
                className="w-[70%] object-contain"
              />

              <div className="absolute bottom-6 left-6 flex items-center space-x-3 bg-black border border-[#262626] pl-3 pr-1 py-1 rounded-full">
                <span className="text-xs font-bold text-white ">Acme Cup</span>
                <span className="px-2 py-2 text-xs font-bold text-white bg-blue-600 rounded-full">
                  $15.00 USD
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* sliding products section*/}
        <Marquee className="my-4">
          <div className=" space-x-4 flex">
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
              <div className="flex items-center bg-black border border-[#262626] rounded-full pr-1 pl-2 py-1 absolute bottom-5 left-5 gap-4">
                <span className="text-white text-xs font-bold">Acme Mug</span>
                <div className="bg-blue-600 text-white px-3 py-2 rounded-full font-semibold text-xs ">
                  $15.00 USD
                </div>
              </div>
            </div>


            <div className=" w-[473px] rounded-xl bg-black p-4 relative border border-[#262626] hover:border-blue-500">
              <div className="h-[231px] rounded-lg">
                <Image
                  src="/hoodie.avif"
                  alt="Acme Mug"
                  width={400}
                  height={400}
                  className="h-full w-full object-contain transition duration-300 ease-in-out hover:scale-105"
                />
              </div>
              {/*Price and name box*/}
              <div className="flex items-center bg-black border border-[#262626] rounded-full pr-1 pl-2 py-1 absolute bottom-5 left-5 gap-4">
                <span className="text-white text-xs font-bold">Acme hoodie</span>
                <div className="bg-blue-600 text-white px-3 py-2 rounded-full font-semibold text-xs">
                  $50.00 USD
                </div>
              </div>
            </div>


            <div className=" w-[473px] rounded-xl bg-black p-4 relative border border-[#262626] hover:border-blue-500">
              <div className="h-[231px] rounded-lg">
                <Image
                  src="/whiteShirt.avif"
                  alt="Acme Mug"
                  width={400}
                  height={400}
                  className="h-full w-full object-contain transition duration-300 ease-in-out hover:scale-105"
                />
              </div>
              {/*Price and name box*/}
              <div className="flex items-center bg-black border border-[#262626] rounded-full pr-1 pl-2 py-1 absolute bottom-5 left-5 gap-4">
                <span className="text-white text-xs font-bold">Acme Baby Onesie</span>
                <div className="bg-blue-600 text-white px-3 py-2 rounded-full font-semibold text-xs">
                  $10.00 USD
                </div>
              </div>
            </div>


            <div className=" w-[473px] rounded-xl bg-black p-4 relative border border-[#262626] hover:border-blue-500">
              <div className="h-[231px] rounded-lg">
                <Image
                  src="/hat.avif"
                  alt="Acme Mug"
                  width={400}
                  height={400}
                  className="h-full w-full object-contain transition duration-300 ease-in-out hover:scale-105"
                />
              </div>
              {/*Price and name box*/}
              <div className="flex items-center bg-black border border-[#262626] rounded-full pr-1 pl-2 py-1 absolute bottom-5 left-5 gap-4">
                <span className="text-white text-xs font-bold">Acme Baby Cap</span>
                <div className="bg-blue-600 text-white px-3 py-2 rounded-full font-semibold text-xs">
                  $10.00 USD
                </div>
              </div>
            </div>


          </div>
        </Marquee>
      </div>
      {/*-----------------------FOOTER--------------------*/}
      <FooterStore />
    </div>
  );
}
