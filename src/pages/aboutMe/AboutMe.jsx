import { motion } from "framer-motion";
import { useState } from "react";
import HeroTitle from "../../components/HeroTitle";
import mountainSilhouette from "../../assets/mountainSilouette.png";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiReact,
  SiMysql,
  SiPostgresql,
  SiVercel,
  SiFigma,
  SiExpress,
  SiPrisma,
} from "react-icons/si";

export default function AboutMe() {
  const [activeTab, setActiveTab] = useState("FRONTEND");

  const tabData = {
    FRONTEND: [
      { name: "NEXT JS", icon: <SiNextdotjs className="text-[55px]" /> },
      { name: "TAILWIND", icon: <SiTailwindcss className="text-[60px]" /> },
      { name: "REACT", icon: <SiReact className="text-[55px]" /> },
    ],
    BACKEND: [
      { name: "NODE JS", icon: <SiNextdotjs className="text-[55px]" /> },
      { name: "EXPRESS", icon: <SiExpress className="text-[55px]" /> },
    ],
    DATABASES: [
      { name: "MYSQL", icon: <SiMysql className="text-[55px]" /> },
      { name: "POSTGRESQL", icon: <SiPostgresql className="text-[55px]" /> },
      { name: "PRISMA ORM", icon: <SiPrisma className="text-[55px]" /> },
    ],
    OTHERS: [
      { name: "VERCEL", icon: <SiVercel className="text-[55px]" /> },
      { name: "FIGMA", icon: <SiFigma className="text-[55px]" /> },
    ],
  };

  const currentIcons = tabData[activeTab] || [];

  return (
    <section className="bg-[#E2E2E2] text-black">
      <div className="h-[30vh] bg-gradient-to-b from-[#1f1f1f] to-[#141414]" />

      <div className="flex justify-start bg-[#141414] overflow-hidden">
        <motion.div
          initial={{ y: "100%" }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
          className="w-full"
        >
          <HeroTitle
            classNames="m-0 p-0 tracking-[-3px] md:tracking-[-10px] leading-[0.7] text-[#E2E2E2] font-semibold text-[14vw] md:text-[15vw] block w-full text-left px-4 md:px-12"
            text={{ names: "ABOUT ME", size: "" }}
          />
        </motion.div>
      </div>

      <div className="pt-12 relative w-full flex flex-col">
        <div className="px-4 md:px-12 relative z-20 overflow-hidden">
          <motion.p
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="text-lg md:text-[20px] max-w-3xl leading-snug"
          >
            Hi there! I’m <b className="font-bold text-[#1f1f1f]">Lieu Rik</b>,
            a full stack developer.
            <br />
            <br />
            <span className="text-[16px] md:text-[17px] leading-relaxed block max-w-2xl">
              I have a strong foundation in web design and layout, strengthened
              through hands-on practice and exploration. My framework experience
              is growing and application-driven, and I am focused on
              strengthening both front-end and back-end development skills.
            </span>
          </motion.p>
        </div>

        <div className="relative mt-12 w-full">
          <img
            src={mountainSilhouette}
            alt="Mountain silhouette"
            className="
              absolute
              bottom-0
              right-0
              w-[60%] md:w-[40%] lg:w-[30%]
                  object-contain
              pointer-events-none
              select-none
            "
          />

          <div className="px-4 md:px-12 relative z-20 pt-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h3 className="font-extrabold text-[16px] md:text-[18px] mb-4">
                TECHNOLOGIES AND TOOLS I WORK WITH
              </h3>

              <div className="flex space-x-3 md:space-x-6 text-[13px] md:text-[14px] font-bold">
                {["FRONTEND", "BACKEND", "DATABASES", "OTHERS"].map((tab) => (
                  <span
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-4 py-2 cursor-pointer ${
                      activeTab === tab
                        ? "bg-[#141414] text-white rounded-t-md"
                        : "text-[#141414]/60 hover:text-black"
                    }`}
                  >
                    {tab}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="bg-[#141414] text-white pt-8 pb-14 px-4 md:px-12">
        <div className="flex flex-wrap gap-10 md:gap-16">
          {currentIcons.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center group cursor-pointer hover:scale-105 transition"
            >
              <div className="text-[#a3a3a3] p-3 group-hover:text-white transition">
                {item.icon}
              </div>
              <span className="text-[13px] md:text-[14px] tracking-widest text-[#a3a3a3] group-hover:text-white">
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
