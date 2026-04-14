import { useState } from "react";

export default function ShiftingButton({ set1, set2 }) {
  const [activeButton, setActiveButton] = useState("DESIGN");

  const handleDesign = () => {
    set1();
    setActiveButton("DESIGN");
  };

  const handleDev = () => {
    set2();
    setActiveButton("DEVELOPMENT");
  };

  return (
    <div className="pl-[3.3%] relative z-[30] flex gap-2">
      <button
        type="button"
        className={`${
          activeButton === "DESIGN" ? "bg-white text-black" : "bg-transparent text-white/50"
        } border-0 px-2.5 py-2 rounded-lg h-[46px] text-[20px] font-bold transition-all duration-700 ease-in-out cursor-pointer outline-none`}
        onClick={handleDesign}
      >
        DESIGN
      </button>
      <button
        type="button"
        className={`${
          activeButton === "DEVELOPMENT" ? "bg-white text-black" : "bg-transparent text-white/50"
        } border-0 px-2.5 py-2 rounded-lg h-[46px] text-[20px] font-bold transition-all duration-700 ease-in-out cursor-pointer outline-none`}
        onClick={handleDev}
      >
        DEVELOPMENT
      </button>
    </div>
  );
}
