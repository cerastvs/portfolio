import { motion } from "framer-motion";
import HeroTitle from "../../components/HeroTitle";

export default function AboutMe() {
  return (
    <section className="h-auto bg-white text-black pb-20">
      <div className="h-[30vh] bg-gradient-to-b from-[#1f1f1f] to-[#141414]"></div>
      <div className="flex justify-center md:justify-start overflow-hidden bg-[#141414]">
        <motion.div
          initial={{ y: "100%" }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
          viewport={{ once: false }}
          className="w-full bg-[#141414]"
        >
          <HeroTitle
            classNames="m-0 p-0 tracking-[-5px] md:tracking-[-15px] leading-[0.7] text-white bg-[#141414] font-semibold text-[14vw] md:text-[15.25vw] block w-full text-center md:text-left"
            text={{ names: "ABOUT ME", size: "" }}
          />
        </motion.div>
      </div>
      <motion.p
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: false }}
        className="px-6 md:px-12 mt-12 text-xl md:text-2xl max-w-4xl"
      >
        Hi there! I’m <b className="font-bold text-[#1f1f1f]">Lieu Rik</b>, a
        full stack developer.
      </motion.p>
    </section>
  );
}
