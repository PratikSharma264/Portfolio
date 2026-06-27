"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scale = useSpring(scrollYProgress, {
    stiffness: 300,
    damping: 40,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{ scaleX: scale }}
      className="fixed top-0 left-0 right-0 z-[60] h-[2px] origin-left bg-amber"
      aria-hidden="true"
    />
  );
}
