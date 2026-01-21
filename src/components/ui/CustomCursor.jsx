import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

const CustomCursor = () => {
  const [isHovered, setIsHovered] = useState(false);
  
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // HIZLI AKIŞ: Stiffness artırıldı, damping düşürüldü
  const springConfig = { damping: 20, stiffness: 400, mass: 0.3 };
  const springX = useSpring(cursorX, springConfig);
  const springY = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleHoverStart = (e) => {
      if (e.target.closest("button, a, [role='button'], .cursor-pointer")) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleHoverStart);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleHoverStart);
    };
  }, [cursorX, cursorY]);

  return (
    <motion.div
      // DARK MODE UYUMU: border-zinc-900 (light) / dark:border-white (dark)
      className="fixed top-0 left-0 w-6 h-6 rounded-full border-2 border-zinc-900 dark:border-white pointer-events-none z-[9999] flex items-center justify-center mix-blend-difference"
      style={{
        x: springX,
        y: springY,
        translateX: "-50%",
        translateY: "-50%",
      }}
      animate={{
        width: isHovered ? 50 : 20,
        height: isHovered ? 50 : 20,
        // Hover olduğunda renkler daha belirginleşir
        backgroundColor: isHovered ? "rgba(128, 128, 128, 0.2)" : "rgba(128, 128, 128, 0)",
      }}
      transition={{ type: "spring", stiffness: 500, damping: 25 }}
    >
      {/* İçteki küçük nokta - mix-blend-difference her zeminde zıt rengi almasını sağlar */}
      <div className="w-1 h-1 bg-zinc-900 dark:bg-white rounded-full transition-colors duration-300" />
    </motion.div>
  );
};

export default CustomCursor;