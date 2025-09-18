import Router from "next/router";
import { useEffect , useState } from "react";

export default function Task_1(){
    const [data, setData] =useState([]);
    const router = setRouter();

    useEffect(()=> {
        }, []);

    return(
         <div>
        {data.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
    </div>
    );
};