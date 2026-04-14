import { motion } from "framer-motion";

export default function ValueCard({ headding, subHeadding, last }) {
  return (
    <motion.div
      className={`w-[80%] md:w-[16%] h-auto md:h-[85%] border-none md:border-white/50 p-0 md:pr-[2%] text-center md:text-left ${
        last ? "md:border-r-0" : "md:border-r-2"
      }`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      <h3 className="font-sans font-bold text-lg md:text-xl">{headding}</h3>
      <p className="text-[4vw] sm:text-[3.8vw] md:text-[0.833vw]">
        {subHeadding}
      </p>
    </motion.div>
  );
}

