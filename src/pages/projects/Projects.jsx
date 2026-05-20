import { motion } from "framer-motion";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiPrisma,
  SiSpringboot,
} from "react-icons/si";
import { FaGithub, FaJava } from "react-icons/fa";
import upsidedownMountain from "../../assets/upsidedownMountain.png";
import projectsTree from "../../assets/projectsTree.png";

const projectsData = [
  {
    title: "TUSKY TASKY",
    description:
      "A collaborative task management app where users can view others' daily routines, adopt tasks into their own schedule, and assign tasks to each other for better productivity",
    github: "https://github.com/cerastvs/tusky-tasky-app",
    tech: [
      { icon: <SiNextdotjs size={16} />, title: "Next.js" },
      { icon: <SiTailwindcss size={16} />, title: "Tailwind CSS" },
      { icon: <SiPrisma size={16} />, title: "Prisma" },
      { icon: <SiTypescript size={16} />, title: "TypeScript" },
    ],

    position: "top-[10%] left-[5%] w-[320px]",
    delay: 0.1,
  },
  {
    title: "FARMERS COOP (RIZAL)",
    description:
      "A farmers' cooperative management system that streamlines daily operations by organizing tasks, sharing routines among members, and enabling task assignment to improve coordination, productivity, and accountability within the cooperative.",
    github: "https://github.com/cerastvs/farmers-coop",
    tech: [
      { icon: <SiNextdotjs size={16} />, title: "Next.js" },
      { icon: <SiTailwindcss size={16} />, title: "Tailwind CSS" },
      { icon: <SiPrisma size={16} />, title: "Prisma" },
      { icon: <SiTypescript size={16} />, title: "TypeScript" },
    ],
    position: "top-[40%] right-[3%] w-[350px]",
    delay: 0.3,
  },
  {
    title: "SK PAYROLL SYSTEM",
    description:
      "A Sangguniang Kabataan payroll system that automates allowance computation, tracks attendance and records, and streamlines the distribution of payments for accurate, efficient, and transparent financial management.",
    github: "https://github.com/cerastvs/sangguniang-kabataan-payroll-system",
    tech: [
      { icon: <FaJava size={16} />, title: "Java" },
      { icon: <SiSpringboot size={16} />, title: "Spring Boot" },
    ],
    position: "bottom-[10%] left-[8%] w-[340px]",
    delay: 0.5,
  },
];

export default function Projects() {
  return (
    <section className="bg-[#e6e6e6] text-black relative w-full overflow-hidden flex flex-col justify-start min-h-screen">
      <div className="relative w-full overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-[20%] z-10 bg-gradient-to-b from-[#141414] via-[#141414]/80 to-transparent pointer-events-none"></div>
        <div className="relative w-full flex justify-center z-0">
          <img
            src={upsidedownMountain}
            className="w-full h-auto object-top max-w-[1920px]"
            alt="Upside down mountain"
          />
        </div>

        <div className="absolute top-[20%] md:top-[22%] w-full flex justify-center z-10 pointer-events-none">
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="text-white font-bold text-[16vw] md:text-[150px] lg:text-[200px] tracking-[-0.05em] leading-none mix-blend-overlay"
          >
            PROJECTS
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="text-[#e2e2e2] font-bold text-[16vw] md:text-[150px] lg:text-[200px] tracking-[-0.05em] leading-none absolute inset-0 text-center"
          >
            PROJECTS
          </motion.h1>
        </div>
      </div>

      <div className="relative z-10 px-6 md:px-[20%] mt-12 md:mt-16">
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-[16px] md:text-[18px] leading-relaxed max-w-4xl text-left md:text-center text-[#333] font-medium mx-auto"
        >
          This is a collection of projects I've built, ranging from small ideas
          to more complete systems. Each one reflects my approach to
          development, focused on functionality, clean design, and continuous
          improvement. Together, they show my{" "}
          <span className="text-green-600 font-bold">GROWTH</span> as I keep
          learning, refining my skills, and turning ideas into working
          solutions.
        </motion.p>
      </div>

      <div className="relative w-full max-w-6xl mx-auto mt-80 md:mt-[500px] flex justify-center min-h-[900px]">
        <div className="absolute inset-y-0 flex justify-center z-0 left-0 right-0 w-full h-full">
          <img
            src={projectsTree}
            className="h-full w-auto max-w-none object-contain object-bottom scale-125 md:scale-150 origin-bottom translate-y-20 md:translate-y-32"
            alt="Projects Tree"
          />
        </div>

        {/* Desktop View */}
        <div className="relative z-10 w-full max-w-5xl h-[800px] hidden md:block">
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: project.delay }}
              className={`absolute ${project.position} bg-[#222] text-white p-6 rounded-lg shadow-2xl border border-white/10 backdrop-blur-sm bg-opacity-95`}
            >
              <div className="flex justify-between items-start mb-3">
                <h3 className="font-bold text-lg">{project.title}</h3>
                <a
                  href={project.github}
                  className="text-white hover:text-gray-300 transition-colors"
                >
                  <FaGithub size={20} />
                </a>
              </div>
              <p className="text-[13px] text-gray-300 leading-snug mb-4">
                {project.description}
              </p>
              <div className="flex space-x-3 text-gray-400">
                {project.tech.map((t, i) => (
                  <span key={i} title={t.title}>
                    {t.icon}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}

          <div className="absolute bottom-[5%] right-[5%] max-w-[250px]">
            <p className="text-[13px] text-[#333] font-medium leading-tight">
              My other works and projects are available on my{" "}
              <a href="#" className="text-[#3b82f6] hover:underline font-bold">
                GitHub.
              </a>
            </p>
          </div>
        </div>

        {/* Mobile View */}
        <div className="md:hidden relative z-10 w-full px-6 flex flex-col space-y-8 mt-32">
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-[#222] text-white p-6 rounded-lg shadow-xl border border-white/10"
            >
              <div className="flex justify-between items-start mb-3">
                <h3 className="font-bold text-lg uppercase">{project.title}</h3>
                <a href={project.github} target="_blank" className="text-white">
                  <FaGithub size={20} />
                </a>
              </div>
              <p className="text-[13px] text-gray-300 leading-snug mb-4">
                {project.description}
              </p>
              <div className="flex space-x-3 text-gray-400">
                {project.tech.map((t, i) => (
                  <span key={i} title={t.title}>
                    {t.icon}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}

          <div className="pb-10">
            <p className="text-[13px] text-[#333] font-medium leading-tight text-center">
              My other works and projects are available on my{" "}
              <a href="#" className="text-[#3b82f6] hover:underline font-bold">
                GitHub.
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="relative w-full h-[200px] z-20">
        <div
          className="absolute inset-0 bg-[#141414] w-full"
          style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 30%, 30% 30%)" }}
        ></div>
      </div>
    </section>
  );
}
