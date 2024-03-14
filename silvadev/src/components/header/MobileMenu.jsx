"use client";
import { useState } from "react";
import Links from "./Links";
import { motion } from "framer-motion";
import Link from "next/link";

const variants = {
  open: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 40,
    },
  },
  closed: {
    x: -500,
    opacity: 1,
    transition: {
      delay: 0.2,
      type: "spring",
      stiffness: 200,
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
      className="absolute z-10"
      animate={activeMobile ? "open" : "closed"}
    >
      <motion.div
        initial={false}
        variants={variants}
        className="fixed flex flex-col items-start justify-between top-0 left-0 p-8 h-screen max-w-md w-full z-10 bg-colWaterLeaf"
      >
        <hr />
        <motion.ul className="text-colBlack text-font30pt flex flex-col gap-8 items-start px-[25%]">
          <Links navLinksMotion={navLinksMotion} offMobileMenu={handleClick} />
          <li>
            <Link href="/">Susisiekti</Link>
          </li>
        </motion.ul>
        <motion.div className="text-font15pt text-colWhite flex flex-col gap-4 px-[25%]">
          <a href="mailto:hello@silvadev.com">hello@silvadev.com</a>
          <a href="tel:+37067859404">+37067859404</a>
        </motion.div>
      </motion.div>

      <motion.button
        className="flex w-16 h-16 flex-col justify-center fixed items-center top-2 left-2 z-50 m-2 "
        onClick={() => setActiveMobile(!activeMobile)}
        whileHover={{
          transition: { duration: 1, type: "spring" },
          scaleX: 1.1,
          scaleY: 1.1,
        }}
        whileTap={{ scaleX: 0.95, scaleY: 0.95 }}
      >
        <svg
          width="40"
          height="40"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            // d="M4 18L20 18"
            stroke="white"
            strokeWidth="1"
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
            strokeWidth="1"
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
            strokeWidth="1"
            strokeLinecap="round"
            variants={{
              closed: { d: "M 2 16.346 L 20 16.346" },
              open: { d: "M 4 2.5 L 17 16.346" },
            }}
            initial={false}
          />
        </svg>
      </motion.button>
    </motion.div>
  );
}
