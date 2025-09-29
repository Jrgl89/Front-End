import React from "react";
import Link from "next/link";

function header0923() {
  return (
    <header className="flex justify-between items-center p-6  w-full  container mx-auto">
      <Link
        href="#"
        className="text-blue-500 font-serif font-semibold text-3xl"
      >
        Zest store
      </Link>
      <nav>
        <ul className="flex space-x-8">
          <li>
            <Link
              href=""
              className="text-black hover:text-gray-300 font-sans text-xl"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href=""
              className="text-black hover:text-gray-300 font-sans text-xl"
            >
              Products
            </Link>
          </li>
          <li>
            <Link
              href=""
              className="text-black hover:text-gray-300 font-sans text-xl"
            >
              Cart
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className="text-black hover:text-gray-300 font-sans text-xl"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default header0923;
