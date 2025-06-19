import { motion, AnimatePresence } from "framer-motion";

export default function ValueCard({ headding, subHeadding, last }) {
  return (
    <motion.div
      className={`skill${last ? " last" : ""}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      <h3 className="skill-heading">{headding}</h3>
      <p className="skill-sub-heading">{subHeadding}</p>
    </motion.div>
  );
}
