 import Image from "next/image";
 import Link from "next/link";
 import Router from "next/router";

export default function task_0() {
  return (
    <div className="bg-white text-white min-h-screen">
      <header className="flex justify-between items-center p-6 fixed w-full top-0 z-10">
        <a href="/">
          <img src="nest.png" className="w-36 ml-10"/>
        </a>
        <nav>
          <ul className="flex space-x-6 mr-10 text-black">
            <li><Link href="/" className="hover:text-purple-400">Home</Link></li>
            <li><Link href="/" className="hover:text-purple-400">About</Link></li>
            <li><Link href="/" className="hover:text-purple-400">Academics</Link></li>
            <li><Link href="/" className="hover:text-purple-400">News</Link></li>
            <li><Link href="/" className="hover:text-purple-400">Contact</Link></li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
