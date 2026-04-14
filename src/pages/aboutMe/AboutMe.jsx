import HeroTitle from "../../components/HeroTitle";

export default function AboutMe() {
  return (
    <section className="h-auto bg-white text-black">
      <div className="h-[30vh] bg-gradient-to-b from-[#1f1f1f] to-[#050505]"></div>
      <div className="flex justify-center md:justify-start">
        <HeroTitle
          classNames="m-0 p-0 tracking-[-5px] md:tracking-[-15px] leading-[0.7] text-white bg-[#050505] font-semibold text-[14vw] md:text-[15.25vw] block w-full text-center md:text-left"
          text={{ names: "ABOUT ME", size: "" }}
        />
      </div>
      <p>
        Hi there! I’m <b className="font-bold">Lieu Rik</b>, an aspiring full stack developer.
      </p>
    </section>
  );
}


