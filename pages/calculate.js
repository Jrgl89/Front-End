import React from "react";
import { useState } from "react";

export default function Calculate() {
  // task1
  const [data, setData] = useState([]);
  // task2
  const [sum, setSum] = useState(0);
  // task3
  const [max, setMax] = useState(0);
  // task4
  const [average, setAverage] = useState(0);
  // task5
  const handleSum = (a, b) => {
    setSum(a + b);
  };
  // task6
  const handleMax = (a, b, c) => {
    setMax(Math.max(a, b, c));
  };
  // task7
  const handleAverage = (a, b, c) => {
    setAverage((a + b + c) / 3);
  };
  // task8
  const handlePush = (element) => {
    setData([...data, element]);
  };
  // task9
  const [inputValue, setInputValue] = useState("");

  // task10
  const handleSubmit = () => {
    if (inputValue !== "") {
      const number = parseFloat(inputValue);
      handlePush(number);
      setInputValue(""); // Clear input after adding
    }
  };
  return (
    <div className="min-h-screen w-screen flex flex-col items-center justify-center gap-4">
      <input
        className="px-10 py-2 border border-slate-300 rounded-lg"
        placeholder="Enter your number"
      />
    </div>
  );
}
