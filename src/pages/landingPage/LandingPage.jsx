import myImage from "../../media/myImage.png";
import mountains from "../../media/mountains.jpg";
import ValueCard from "../../components/ValueCard.jsx";
import ShiftingButton from "../../components/ShiftingButton.jsx";
import { designSet, developmentSet } from "../../media/sets.js";
import { useState } from "react";
import HeroTitle from "../../components/HeroTitle.jsx";
import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
export default function LandingPage() {
  const [currentSet, switchSet] = useState(designSet);
  const { scrollY } = useScroll();

  const scale = useTransform(scrollY, [0, 500], [1, 1.5]);
  const blur = useTransform(scrollY, [0, 500], ["blur(0px)", "blur(10px)"]);

  const xLeft = useTransform(scrollY, [0, 500], [0, -200]);
  const xRight = useTransform(scrollY, [0, 500], [0, 200]);

  return (
    <section
      className="min-h-screen md:h-screen w-auto bg-[#1a1a1a] bg-cover bg-center bg-fixed flex flex-col justify-between overflow-hidden md:overflow-visible"
      style={{ backgroundImage: `url(${mountains})` }}
    >
      <div className="bg-[#2e2e2e] flex flex-col items-center pt-[8vh] pb-[2vh] md:py-0 relative z-[1]">
        <div>
          <HeroTitle
            classNames="m-[-22px_0_0_0] p-0 tracking-[-5px] md:tracking-[-15px] leading-[0.9] text-transparent bg-cover bg-center bg-fixed font-semibold bg-clip-text text-[14vw] md:text-[17.25vw] block text-center md:text-left"
            style={{ backgroundImage: `url(${mountains})`, x: xLeft }}
            text={{ names: "LIEU RIK", size: "" }}
          />
          <div className="relative">
            <HeroTitle
              classNames="hidden md:block m-0 p-0 tracking-[-15px] leading-[0.7] text-transparent bg-cover bg-center bg-fixed font-semibold bg-clip-text"
              style={{ backgroundImage: `url(${mountains})`, x: xRight }}
              text={{ names: "SOLIMAN", size: "15.7vw" }}
            />
            <h2 className="static md:absolute bottom-0 right-0 text-[5vw] sm:text-[4.5vw] md:text-[1.11vw] m-0 p-[0.35vw] md:bg-[#2e2e2e] mt-2 md:mt-0 text-center md:text-left">
              FULLSTACK WEB DEVELOPER
            </h2>
          </div>
        </div>
      </div>
      <motion.img
        className="relative md:absolute bottom-0 left-1/2 -translate-x-1/2 w-full sm:w-[95%] h-auto max-h-[60vh] sm:max-h-[70vh] md:h-[80%] object-contain z-[10] block mx-auto md:mx-0 mt-[-6vh] sm:mt-[-8vh] md:mt-0 opacity-100"
        src={myImage}
        alt="Lieu rik"
        style={{ scale, filter: blur }}
      />

      <div className="bg-gradient-to-b from-black/0 to-[#1f1f1f] h-auto md:h-[25%] z-[20] py-8 md:py-0 relative">
        <ShiftingButton
          set1={() => switchSet(designSet)}
          set2={() => switchSet(developmentSet)}
        />
        <div className="flex flex-col md:flex-row justify-around items-center gap-[1.8rem] md:gap-0 pb-[3%] md:pb-[1%]">
          <AnimatePresence mode="wait">
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
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
