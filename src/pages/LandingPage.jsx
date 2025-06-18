import "../landingPage.css";
import myImage from "../media/myImage.png";
import ValueCard from "../components/ValueCard";
import ShiftingButton from "../components/ShiftingButton";
import { designSet, developmentSet } from "../media/sets.js";
import { useState } from "react";

function HeroTitle({ classNames, text }) {
  return (
    <h1 className={classNames} style={{ fontSize: text.size }}>
      {text.names}
    </h1>
  );
}

function changeState() {
  this.style.backgoundColor = "white";
  this.style.color = "black";
}

export default function LandingPage() {
  const [currentSet, switchSet] = useState(designSet);

  return (
    <section id="landing-page">
      <div id="hero-title-container">
        <div>
          <HeroTitle
            classNames="hero-title"
            text={{ names: "LIEU RIK", size: "17.25vw" }}
          />
          <div id="second-hero-container">
            <HeroTitle
              classNames="hero-title hero-title-second"
              text={{ names: "SOLIMAN", size: "15.7vw" }}
            />
            <h2 id="hero-subtitle">ASPIRING WEB DEVELOPER</h2>
          </div>
        </div>
      </div>
      <img id="myImage" src={myImage} alt="Lieu rik" />

      <div id="bottom-container">
        <ShiftingButton
          {...{
            set1: () => switchSet(designSet),
            set2: () => switchSet(developmentSet),
          }}
        />
        <div id="skills-container">
          {currentSet.map((item, index) => {
            return (
              <ValueCard
                key={item.headding}
                headding={item.headding}
                subHeadding={item.subHeadding}
                last={item.last}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
