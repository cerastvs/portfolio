import "./landingpageButton.css";
import { useState } from "react";
function Button({ buttonName, func, isActive, onClick }) {
  return (
    <button
      className={isActive ? "landingpage-button active" : "landingpage-button"}
      onClick={() => {
        func();
        onClick();
      }}
    >
      {buttonName}
    </button>
  );
}

export default function ShiftingButton({ set1, set2 }) {
  const [activeButton, setActiveButton] = useState("DESIGN");

  return (
    <div id="button-container">
      <Button
        buttonName="DESIGN"
        func={set1}
        isActive={activeButton === "DESIGN"}
        onClick={() => setActiveButton("DESIGN")}
      />
      <Button
        buttonName="DEVELOPMENT"
        func={set2}
        isActive={activeButton === "DEVELOPMENT"}
        onClick={() => setActiveButton("DEVELOPMENT")}
      />
    </div>
  );
}
