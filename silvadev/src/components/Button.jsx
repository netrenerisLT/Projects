"use client";
import { motion } from "framer-motion";

const clipPathMotion = {
  onHover: {
    clipPath: "circle(100%)",
    scale: 1.07,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 20,
    },
  },
  offHover: {
    clipPath: "circle(0%)",
    opacity: 0.2,
    transition: {
      type: "spring",
      stiffness: 40,
    },
  },
  onTap: {
    scale: 0.95,
  },
};

const buttonMotion = {
  onHover: {
    color: "hsl(0, 0%, 100%)",
    scale: 1.05,
    transition: { type: "spring", stiffness: 20 },
  },
  onTap: {
    scale: 0.95,
  },
};

export default function Button({ onClick, children, styles }) {
  return (
    <motion.div
      className="relative"
      whileHover="onHover"
      whileTap="onTap"
      animate="offHover"
    >
      <motion.div
        initial={clipPathMotion.offHover}
        variants={clipPathMotion}
        className={`absolute w-full h-full -z-10 ${
          styles === "btnLight" && "bg-tigerEye"
        }`}
      ></motion.div>
      <motion.button
        variants={buttonMotion}
        onClick={onClick}
        className={`btnDefault ${styles}`}
      >
        {children}
      </motion.button>
    </motion.div>
  );
}
// export default function Button({ onClick, children, styles }) {
//   let backgroundC = {};
//   // if (styles === "btnLight") {
//   //   backgroundC = {
//   //     backgroundColor: "hsl(28, 67%, 44%)",
//   //     color: "hsl(0, 0%, 100%)",
//   //     transition: { duration: 1, type: "spring" },
//   //     scale: 1.05,
//   //   };
//   // } else {
//   //   backgroundC = {
//   //     backgroundColor: "hsl(0, 0%, 100%)",
//   //     color: "hsl(88, 38%, 15%)",
//   //     transition: { duration: 1, type: "spring" },
//   //     scale: 1.05,
//   //   };
//   // }
//   const [btnL, setBtnL] = useState(false);
//   if (styles === "btnLight") {
//     backgroundC = {
//       color: "hsl(0, 0%, 100%)",
//       transition: { type: "spring", delay: 0.3 },
//     };
//   } else {
//     backgroundC = {
//       // color: "hsl(88, 38%, 15%)",
//       transition: { type: "spring" },
//       scale: 1.05,
//     };
//   }

//   return (
//     <div className="relative">
//       <motion.div
//         variants={variants}
//         className={`absolute w-full h-full -z-10 ${
//           styles === "btnLight" ? "bg-tigerEye" : "bg-darkMossGreen"
//         }`}
//         initial="offHover"
//         animate={btnL ? "onHover" : "offHover"}
//       ></motion.div>
//       <motion.button
//         layout
//         whileHover={backgroundC}
//         onHoverStart={() => setBtnL(true)}
//         onHoverEnd={() => setBtnL(false)}
//         whileTap={{ scale: 0.95 }}
//         onClick={onClick}
//         className={`btnDefault ${styles}`}
//       >
//         {children}
//       </motion.button>
//     </div>
//   );
// }
