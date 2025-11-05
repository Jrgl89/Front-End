import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, ShoppingCart } from "lucide-react";

function HeaderStore() {
  return (
    <header className="flex items-center justify-between px-6 py-4">
      {/*---header part left---*/}
      <div className="flex items-center justify-center gap-4">
        {/*logo and name*/}
        <div className="flex items-center gap-2">
          <Link href="/">
            <div className="h-10 w-10 border border-[#262626] rounded-xl flex justify-center items-center bg-black">
              <Image
                src="/vercel.png"
                alt="vercel"
                width={120}
                height={120}
                className="w-4"
              />
            </div>
          </Link>
          <h1 className="text-sm font-bold">ACME STORE</h1>
        </div>
        {/*Menus*/}
        <div className="flex gap-6">
          <Link href="/" className="text-sm font-light text-gray-400">
            All
          </Link>
          <Link href="/" className="text-sm font-light text-gray-400">
            Shirts
          </Link>
          <Link href="/" className="text-sm font-light text-gray-400">
            Stickers
          </Link>
        </div>
      </div>

      {/*---header part 2 Search button---*/}
      <div className="relative">
        <input
          type="search"
          placeholder="Search for products..."
          id="search"
          className="text-gray-400 text-sm pl-4 border border-[#262626] rounded-md h-9 w-[400px]  font-bold"
        />
        <Search className="absolute w-5 h-5 text-gray-400 right-3 top-2" />
      </div>

      {/*---Header part 3 Cart button---*/}
      <div className="p-3 border border-[#262626] rounded-md">
        <ShoppingCart className="w-4 h-4 text-gray-400" />
      </div>
    </header>
  );
}

export default HeaderStore;
