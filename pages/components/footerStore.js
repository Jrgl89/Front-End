import React from "react";
import Link from "next/link";
import Image from "next/image";

function FooterStore() { 
    return (
        <footer className="bg-[#171717] text-gray-300 py-12 px- ">
                <div className=" max-w-7xl mx-auto flex items-start gap-24 ">
                  {/* Logo Section */}
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center border border-gray-700">
                      <Image
                        src="/vercel.png"
                        alt="vercel"
                        width={1200}
                        height={1200}
                        className="w-3"
                      />
                    </div>
                    <span className="text-white text-md font-extrabold">ACME STORE</span>
                  </div>
                  {/* Navigation Links */}
                  <nav className="flex flex-col gap-3 mt-2">
                    <a
                      href="#"
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      Home
                    </a>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      About
                    </a>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      Terms & Conditions
                    </a>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      Shipping & Return Policy
                    </a>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      Privacy Policy
                    </a>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      FAQ
                    </a>
                  </nav>
                </div>
              </footer>
    );
}

export default FooterStore;