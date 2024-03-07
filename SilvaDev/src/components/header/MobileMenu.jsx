"use client";
import { useState } from "react";
import MenuLinks from "./MenuLinks";
import { motion } from "framer-motion";

const variants = {
  open: {
    clipPath: "circle(1600px at calc(100% - 40px) 50px)",
    transition: {
      type: "spring",
      stiffness: 20,
    },
  },
  closed: {
    clipPath: "circle(0px at calc(100% - 40px) 38px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 250,
      damping: 40,
    },
  },
};
const navLinksMotion = {
  y: [50, 0],
  opacity: [0, 1],
  transition: {
    type: "spring",
    stiffness: 250,
    damping: 40,
  },
};

export default function MobileMenu() {
  const [activeMobile, setActiveMobile] = useState(false);

  function handleClick() {
    setActiveMobile(false);
  }
  return (
    <motion.div
      className="flex md:hidden"
      animate={activeMobile ? "open" : "closed"}
    >
      <motion.ul
        className="absolute top-0 left-0 bottom-0 w-screen h-screen flex flex-col items-center justify-center gap-8 bg-darkMossGreen text-white z-50"
        variants={variants}
        initial={false}
      >
        <MenuLinks
          navLinksMotion={navLinksMotion}
          offMobileMenu={handleClick}
        />
      </motion.ul>

      <motion.button
        className="w-12 h-12 flex flex-col justify-center items-center z-50 bg-darkMossGreen rounded-full"
        onClick={() => setActiveMobile(!activeMobile)}
        whileHover={{
          transition: { duration: 1, type: "spring" },
          scale: 1.1,
        }}
        whileTap={{ scale: 0.9 }}
      >
        <svg
          width="23"
          height="23"
          viewBox="0 0 23 23"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            // d="M4 18L20 18"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            variants={{
              closed: { d: "M 2 2.5 L 20 2.5" },
              open: { d: "M 3 16.5 L 17 2.5" },
            }}
            initial={false}
          />
          <motion.path
            // d="M4 12L20 12"
            d="M 2 9.423 L 20 9.423"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            variants={{
              closed: { opacity: 1 },
              open: { opacity: 0 },
            }}
            initial={false}
          />
          <motion.path
            // d="M4 6L20 6"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            variants={{
              closed: { d: "M 2 16.346 L 20 16.346" },
              open: { d: "M 3 2.5 L 17 16.346" },
            }}
            initial={false}
          />
        </svg>
      </motion.button>
    </motion.div>
  );
}
