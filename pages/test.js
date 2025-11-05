import React from "react";
import { useState } from "react";

export default function Calculate() {
  const [data, setData] = useState([]);
  const [sum, setSum] = useState(0);
  const [max, setMax] = useState(0);
  const [average, setAverage] = useState(0);

  const handleSum = (a, b) => {
    setSum(a + b);
  };
  const handleMax = (a, b, c) => {
    setMax(Math.max(a, b, c));
  };
  const handleAverage = (a, b, c) => {
    setAverage((a + b + c) / 3);
  };

  const [num1Sum, setNum1Sum] = useState("");
  const [num2Sum, setNum2Sum] = useState("");

  const [num1Max, setNum1Max] = useState("");
  const [num2Max, setNum2Max] = useState("");
  const [num3Max, setNum3Max] = useState("");

  const [num1Avg, setNum1Avg] = useState("");
  const [num2Avg, setNum2Avg] = useState("");
  const [num3Avg, setNum3Avg] = useState("");

  const calculateSum = () => {
    const a = parseFloat(num1Sum) || 0;
    const b = parseFloat(num2Sum) || 0;
    handleSum(a, b);
  };
  const calculateMax = () => {
    const a = parseFloat(num1Max) || 0;
    const b = parseFloat(num2Max) || 0;
    const c = parseFloat(num3Max) || 0;
    handleMax(a, b, c);
  };
  const calculateAverage = () => {
    const a = parseFloat(num1Avg) || 0;
    const b = parseFloat(num2Avg) || 0;
    const c = parseFloat(num3Avg) || 0;
    handleAverage(a, b, c);
  };

  return (
    <div className="min-h-screen w-screen bg-zinc-900 flex items-center justify-center gap-6 p-8">
      {/* Sum Calculator */}
      <div className="w-80 bg-zinc-800 border border-blue-500 rounded-lg p-6">
        <input
          type="number"
          value={num1Sum}
          onChange={(e) => setNum1Sum(e.target.value)}
          className="w-full px-4 py-3 bg-zinc-900 text-white border border-zinc-700 rounded mb-4 focus:outline-none focus:border-blue-500"
          placeholder="Number 1"
        />
        <input
          type="number"
          value={num2Sum}
          onChange={(e) => setNum2Sum(e.target.value)}
          className="w-full px-4 py-3 bg-zinc-900 text-white border border-zinc-700 rounded mb-4 focus:outline-none focus:border-blue-500"
          placeholder="Number 2"
        />
        <button
          onClick={calculateSum}
          className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded mb-4 transition-colors"
        >
          Calculate Sum
        </button>
        <div className="text-white text-2xl font-bold">
          Result: <span>{sum}</span>
        </div>
      </div>

      {/*Max Calculator */}
      <div className="w-80 bg-zinc-800 border border-blue-500 rounded-lg p-6">
        <input
          type="number"
          value={num1Max}
          onChange={(e) => setNum1Max(e.target.value)}
          className="w-full px-4 py-3 bg-zinc-900 text-zinc-400 border border-zinc-700 rounded mb-4 focus:outline-none focus:border-blue-500"
          placeholder="Number 1"
        />
        <input
          type="number"
          value={num2Max}
          onChange={(e) => setNum2Max(e.target.value)}
          className="w-full px-4 py-3 bg-zinc-900 text-zinc-400 border border-zinc-700 rounded mb-4 focus:outline-none focus:border-blue-500"
          placeholder="Number 2"
        />
        <input
          type="number"
          value={num3Max}
          onChange={(e) => setNum3Max(e.target.value)}
          className="w-full px-4 py-3 bg-zinc-900 text-zinc-400 border border-zinc-700 rounded mb-4 focus:outline-none focus:border-blue-500"
          placeholder="Number 3"
        />
        <button
          onClick={calculateMax}
          className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded mb-4 transition-colors"
        >
          Compare
        </button>
        <div className="text-white text-2xl font-bold">
          Result: <span>{max}</span>
        </div>
      </div>

      {/* Average Calculator */}
      <div className="w-80 bg-zinc-800 border border-blue-500 rounded-lg p-6">
        <input
          type="number"
          value={num1Avg}
          onChange={(e) => setNum1Avg(e.target.value)}
          className="w-full px-4 py-3 bg-zinc-900 text-zinc-400 border border-zinc-700 rounded mb-4 focus:outline-none focus:border-blue-500"
          placeholder="Number 1"
        />
        <input
          type="number"
          value={num2Avg}
          onChange={(e) => setNum2Avg(e.target.value)}
          className="w-full px-4 py-3 bg-zinc-900 text-zinc-400 border border-zinc-700 rounded mb-4 focus:outline-none focus:border-blue-500"
          placeholder="Number 2"
        />
        <input
          type="number"
          value={num3Avg}
          onChange={(e) => setNum3Avg(e.target.value)}
          className="w-full px-4 py-3 bg-zinc-900 text-zinc-400 border border-zinc-700 rounded mb-4 focus:outline-none focus:border-blue-500"
          placeholder="Number 3"
        />
        <button
          onClick={calculateAverage}
          className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded mb-4 transition-colors"
        >
          Calculate Average
        </button>
        <div className="text-white text-2xl font-bold">
          Result: <span>{average.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
}
