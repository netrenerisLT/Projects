"use client"
import { motion, useScroll, useSpring } from "framer-motion";

export default function ProgressBar() {
//   const { scrollYprogess } = useScroll({target: });


const { scrollYProgress } = useScroll();
const scaleY = useSpring(scrollYProgress, {
  stiffness: 100,
  damping: 30,
  restDelta: 0.001
});

  return <motion.div className="fixed top-0 left-0 w-1 h-full bg-colWaterLeaf origin-top" style={{scaleY}}></motion.div>;
}
