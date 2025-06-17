import "../landingPage.css";
import myImage from "../media/myImage.png";
import ValueCard from "../components/ValueCard";

function HeroTitle({ classNames, text }) {
  return (
    <h1 className={classNames} style={{ fontSize: text.size }}>
      {text.names}
    </h1>
  );
}

export default function LandingPage() {
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
      <div id="skills-container">
        <ValueCard
          {...{
            headding: "USER CENTERED DESIGN",
            subHeadding:
              "Designing with EmpathyPutting Users at the Heart of Every Solution.",
          }}
        />
        <ValueCard
          {...{
            headding: "CURIOUS & FLEXIBLE",
            subHeadding:
              "Learning, whether it’s a new design trend, tool, or user insight",
          }}
        />
        <ValueCard
          {...{
            headding: "TECH COMFORTABLE",
            subHeadding:
              "Confidently use design tools and understand the tech behind the scenes.",
          }}
        />
        <ValueCard
          {...{
            headding: "COLLABORATIVE",
            subHeadding:
              "Open with Co-Creation Building Better Solutions Together",
            last: true,
          }}
        />
      </div>
    </section>
  );
}
