import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ravenGif from "../../assets/raven.gif";

const Raven = ({ id, onComplete }) => {
  const [top] = useState(() => {
    const rand = Math.random();
    if (rand < 0.3) return Math.random() * 20;
    return Math.random() * 95;
  });

  const [scale] = useState(() => {
    const rand = Math.random();
    // Rare chance for a Massive raven
    if (rand > 0.92) return 2.5 + Math.random() * 2.5;
    return 0.2 + Math.random() * 1.0;
  });

  const [duration] = useState(() => {
    if (scale > 2.0) return 3.5 - scale * 0.4;
    return 18 - scale * 13 + Math.random() * 3;
  });

  const [startX] = useState(`${110 + Math.random() * 30}%`);
  const [endX] = useState(`${-50 - Math.random() * 50}%`);
  const [yOffset] = useState(Math.random() * 150 - 75);

  const zIndex = scale > 2.0 ? 150 : scale < 0.6 ? 5 : 50;

  return (
    <motion.img
      src={ravenGif}
      alt="flying raven"
      initial={{ left: startX, top: `${top}%`, scale, opacity: 0 }}
      animate={{
        left: endX,
        top: `${top + yOffset / 10}%`,
        opacity: [0, 1, 1, 0],
      }}
      exit={{ opacity: 0 }}
      transition={{
        left: { duration, ease: "linear" },
        top: { duration, ease: "easeInOut" },
        opacity: { times: [0, 0.05, 0.95, 1], duration },
      }}
      onAnimationComplete={() => onComplete(id)}
      className="absolute pointer-events-none"
      style={{
        width: "150px",
        filter: `brightness(${0.3 + scale * 0.7}) 
                 blur(${scale < 0.4 ? "2px" : scale > 2.0 ? (scale - 1.5) * 2 + "px" : "0px"})`,
        zIndex: zIndex,
        transformOrigin: "center",
      }}
    />
  );
};

export default function RavenSpawner() {
  const [ravens, setRavens] = useState([]);

  const removeRaven = useCallback((id) => {
    setRavens((prev) => prev.filter((r) => r.id !== id));
  }, []);

  useEffect(() => {
    let timeoutId;

    const spawnRaven = () => {
      const id = Math.random().toString(36).substr(2, 9) + Math.random();
      setRavens((prev) => [...prev, { id }]);

      // Much slower spawn rate: 6 to 20 seconds
      const nextSpawn = Math.random() * 140 + 2000;
      timeoutId = setTimeout(spawnRaven, nextSpawn);
    };

    // Initial delay before the first one appears
    timeoutId = setTimeout(spawnRaven, 1000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <AnimatePresence>
        {ravens.map((r) => (
          <Raven key={r.id} id={r.id} onComplete={removeRaven} />
        ))}
      </AnimatePresence>
    </div>
  );
}
