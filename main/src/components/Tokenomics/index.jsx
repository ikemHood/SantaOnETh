import { useState } from "react";
import { PieChart } from "react-minimal-pie-chart";
import ContentCard from "../ContentCard";
import { useGlitch } from 'react-powerglitch'

const data = [
  { title: "Airdrop", value: 25, color: "#E38627" },
  { title: "Liquidity", value: 40, color: "#C13C37" },
  { title: "Marketing", value: 25, color: "#6A2135" },
  { title: "Team", value: 10, color: "#6A0135" },
];
function Tokenomics() {
  const [selected, setSelected] = useState(0);
  const [hovered, setHovered] = useState(undefined);
  const glitch = useGlitch()

  const dataInput = data.map((entry, i) => {
    let result = entry;
    if (hovered === i) {
      result = {
        ...result,
        color: "grey",
      };
    }
    return result;
  });

  const segmentsStyle = { transition: "stroke .3s", cursor: "pointer" };
  return (
    <div className="relative top-[20vh] w-full justify-center flex">
      <div className="w-[90%] py-4 rounded-xl sm:w-[420px] mb-28 bg-white/30 text-gray-200 shadow-2xl shadow-purple-400 backdrop-blur-md md:w-[700px] text-center overflow-y-auto flex flex-col items-center">
        <h1 ref={glitch.ref} className="font-extrabold tracking-wider font-christmas space-y-16 text-4xl sm:text-5xl text-center text-gray-100 mt-4">
          Santa Tokenomics
        </h1>
        <p className="mt-4 w-4/5 text-center text-2xl sm:text-3xl">
          <span className="font-bold">Max Supply:</span> 10 million{" "}
          <span className="text-red-600">$Santa</span>
        </p>
        <p className="mt-4 w-4/5 text-2xl">
          <span className="font-bold">LP:</span> locked for 1 year. <a href="#" target="_blank">view</a>
        </p>
        <p className="mt-4 w-4/5 text-2xl">
          <span className="font-bold">Buy tax:</span> 5%{" "}
        </p>
        <p className="mt-4 w-4/5 text-2xl">
          <span className="font-bold">Sell tax:</span> 7%{" "}
        </p>
        <p className="mt-4 w-4/5 text-2xl">
          <span className="font-bold">Max tx:</span> 0.5%
        </p>
        <p className="mt-4 w-4/5 text-2xl mb-4">
          <span className="font-bold">Max wallet:</span> 1%
        </p>
      </div>
    </div>
  );
}

export default Tokenomics;
