"use client";
import { useState } from "react";
import Links from "./Links";
import { motion } from "framer-motion";
// import Link from "next/link";
import { Link } from "@/navigation";

import LineSvg from "../others/LineSvg";
import Image from "next/image";
import LogoVer from "../others/LogoVer";

const variants = {
  open: {
    // x: 0,
    clipPath: "circle(1800px at 100% 0%)",
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 40,
    },
  },
  closed: {
    // x: 500,
    opacity: 1,
    clipPath: "circle(0px at 100% 0%)",
    transition: {
      delay: 0.2,
      type: "spring",
      stiffness: 200,
      damping: 30,
    },
  },
};

export default function MobileHeader({ urlLinks }) {
  const [activeMobile, setActiveMobile] = useState(false);
  function handleClick() {
    setActiveMobile(false);
  }
  return (
    <motion.div
      className="md:hidden"
      animate={activeMobile ? "open" : "closed"}
    >
      <motion.div
        initial={false}
        variants={variants}
        className="fixed flex flex-col items-start justify-between top-0 left-0  pb-5 h-full w-full z-50 bg-colWaterLeaf"
      >
        <span className="absolute top-0 left-[5%] h-[100%]">
          <LineSvg whiteLine />
        </span>
        <span className="absolute top-0 left-[25%] h-[100%]">
          <LineSvg whiteLine />
        </span>
        <div className="flex items-center justify-start ml-[5%] gap-4 w-screen h-20 mt-2 ">
          <Link href="/" className="w-1/5 h-full relative mt-4">
            <span className="fill-colBlack">
              <LogoVer />
            </span>
          </Link>
          <p className="textBase text-colBlack ">
            Rooted <br /> in Digital
          </p>
        </div>
        <ul className="text-colBlack text-font30pt flex flex-col gap-8 items-start px-[25%] ml-4">
          <Links offMobileMenu={handleClick} urlLinks={urlLinks} />
        </ul>
        <div className="text-font15pt text-colWhite flex flex-col gap-4 px-[25%] ml-4">
          <a href="mailto:hello@silvadev.com">hello@silvadev.com</a>
          <a href="tel:+37067859404">+37067859404</a>
        </div>
      </motion.div>

      <motion.button
        className={`flex w-16 h-16 flex-col justify-center fixed items-center top-4 right-2 z-50 ${
          !activeMobile && "mix-blend-difference"
        }`}
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
            stroke={activeMobile ? "black" : "white"}
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
            stroke={activeMobile ? "black" : "white"}
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
