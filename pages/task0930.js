import React, { useEffect, useState } from "react";
import Header from "./components/header0923";
import Router, { useRouter } from "next/router";


export default function Task0930() {
    const router = useRouter();
    const [data, setData] = useState([]);
    const [search, setSearch] = useState("");
    const [grid, setGrid] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch("https://api.restful-api.dev/objects");
                const result = await res.json();
                setData(result);
            } catch (error) {
                console.error(error);
            }
        }
        fetchData();
    }, []);
    const filteredData = data.filter((item) =>
        item.name && item.name.toLowerCase().includes(search.toLowerCase())
    );
  return (
    <div className="bg-white w-screen min-h-screen ">
          <main className="mx-auto container">
              {/*Search button*/ }
              <div>
                  <input
          type="search"
          placeholder="Search..."
                  className="text-gray-700 p-3 border w-1/2 border-gray-400 rounded-lg "
                  onChange={(e) => setSearch(e.target.value)}
              />
              </div>

              { /*Card section*/}
              <div>
                  
              </div>


      </main>
    </div>
  );
}
