import "./AboutMe.css"
import HeroTitle from "../../components/HeroTitle";
export default function AboutMe() {
  return <section className="about-me">
    <div id="blank-space"></div>
    <div className="hero-container">
      <HeroTitle
        classNames="hero"
        text={{ names: "ABOUT ME", size: "15.25vw" }}
      />
    </div>
    <p>Hi there! I’m <b>Lieu Rik</b>, an aspiring full stack developer.</p>
  </section>;
}
