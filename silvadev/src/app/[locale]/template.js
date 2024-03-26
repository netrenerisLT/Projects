"use client";
import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0, y: 0, y: -100 },
  enter: { opacity: 1, x: 0, y: 0 },
};

// const variants = {
//   bodyStart: {
//     // clipPath: "circle(200% at 100% 0%)",
//     // clipPath: "circle(0% at 100% 0%)",
//     clipPath: "ellipse(0% 100% at 100% 50%)",
//     opacity: 1,
//     transition: {
//       type: "spring",
//       stiffness: 20,
//     },
//   },
//   bodyEnd: {
//     // clipPath: "circle(200% at 100% 0%)",
//     // clipPath: "circle(200% at 100% 0%)",
//     clipPath: "ellipse(200% 100% at 100% 50%)",
//     opacity: 1,
//     transition: {
//       type: "spring",
//       stiffness: 30,
//       delay: 0.5,
//       clipPath: { duration: 2 },
//     },
//   },
//   squareStart: {
//     width: "140vh",
//     x: 0,
//     opacity: 1,
//     transition: {
//       width: { duration: 0.5 },
//       type: "spring",
//       stiffness: 30,
//     },
//   },
//   squareEnd: {
//     width: "0vh",
//     x: 0,
//     opacity: 1,
//     transition: {
//       type: "spring",
//       stiffness: 30,
//       delay: 0.5,
//     },
//   },
// };

export default function Template({ children }) {
  return (
    <motion.main variants={variants} initial="hidden" animate="enter">
      {/*    <motion.div
         variants={variants}
         initial="squareStart"
         animate="squareEnd"
         className="w-full h-full bg-colWaterLeaf z-[100] absolute left-0 top-0"
       ></motion.div>
       <motion.div variants={variants} initial="bodyStart" animate="bodyEnd">
       </motion.div> */}
      {children}
    </motion.main>
  );
}
