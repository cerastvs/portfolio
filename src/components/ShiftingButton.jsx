import "./landingpageButton.css";

function Button({ buttonName, func }) {
  return (
    <button
      className="landingpage-button"
      onClick={() => {
        func();
      }}
    >
      {buttonName}
    </button>
  );
}

export default function ShiftingButton(...{ set1, set2 }) {
  return (
    <div id="button-container">
      <Button buttonName="DESIGN" func={set1} />
      <Button buttonName="DEVELOPMENT" func={set2} />
    </div>
  );
}
