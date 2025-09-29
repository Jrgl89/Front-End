import React, { useState } from "react";
import Image from "next/image";
import Header0923 from "./components/header0923";

const products = [
  {
    id: 1,
    name: "Samba OG Shoes",
    price: "100$",
    image:
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/bdd9f8cd43664fffbd3da8bf01188fca_9366/Samba_OG_Shoes_Black_B75807_07_standard.jpg",
  },
  {
    id: 2,
    name: "Venom high boots",
    price: "2395$",
    image:
      "https://balenciaga.dam.kering.com/m/41940adfa860cf35/Large-833592WBEQ11000_F.jpg?v=3",
  },
  {
    id: 3,
    name: "Monaco card holder",
    price: "275$",
    image:
      "https://balenciaga.dam.kering.com/m/7c7c19bdfd162946/Large-7928632AA751000_F.jpg?v=3",
  },
  {
    id: 4,
    name: "Bb Large Belt",
    price: "495$",
    image:
      "https://balenciaga.dam.kering.com/m/75cdf9adc03728cf/Large-5703702ABPN1000_F.jpg?v=2",
  },
  {
    id: 5,
    name: "Canvas Jacket",
    price: "68$",
    image:
      "https://2kwrld.com/cdn/shop/files/2_bd6744f2-54d0-4bd8-a2cf-45a36fbbedbd.jpg?v=1755610321&width=2560",
  },
  {
    id: 6,
    name: "Flame Glasses",
    price: "15$",
    image:
      "https://2kwrld.com/cdn/shop/files/productpicture_d008ffc3-ae7c-4709-8134-b74f15bc669f.jpg?v=1739106240&width=2560",
  },
  {
    id: 7,
    name: "Grafitti Zip-up",
    price: "68$",
    image:
      "https://2kwrld.com/cdn/shop/files/front_blue.jpg?v=1753096844&width=2560",
  },
  {
    id: 8,
    name: "Checkered Shirt",
    price: "43$",
    image:
      "https://2kwrld.com/cdn/shop/files/frontwhite.jpg?v=1755797177&width=2560",
  },
  {
    id: 9,
    name: "”Lemons” T-Shirt",
    price: "2395$",
    image:
      "https://2kwrld.com/cdn/shop/files/Lemons_T_496b7515-c3e8-48ed-82c9-52dc4c7803b9.jpg?v=1744465661&width=2560",
  },
  {
    id: 10,
    name: "Swirly Sweater",
    price: "55$",
    image:
      "https://2kwrld.com/cdn/shop/files/product_picture_42fc1fc2-0e58-46ed-83eb-bfcd0dd8bb81.jpg?v=1732377391&width=2560",
  },
];

export default function Task0923() {
  const [search, setSearch] = useState("");

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="w-screen min-h-screen flex flex-col items-center bg-gray-100">
      <Header0923 />

      <main className="container mx-auto mt-10 px-4 w-full">
        {/* Search input */}
        <div className="mb-6 flex justify-center">
          <input
            type="search"
            placeholder="Search products..."
            className="w-full md:w-1/2 p-3 rounded-lg border border-gray-300 shadow focus:outline-none focus:ring-2 focus:ring-blue-400 text-black"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Products grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-5 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white shadow-lg rounded-xl overflow-hidden transform hover:scale-105 transition duration-300 flex flex-col items-start p-4"
              >
                <div className="flex-1 flex flex-col items-start">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={200}
                    height={200}
                    className="object-cover rounded-lg mb-4"
                    unoptimized
                  />
                  <h3 className=" text-lg text-black text-left">
                    {product.name}
                  </h3>
                  <p className="text-gray-700 font-semibold">
                    Price: {product.price}
                  </p>
                </div>

                <button className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition">
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500 mt-6">No products found.</p>
        )}
      </main>
    </div>
  );
}
