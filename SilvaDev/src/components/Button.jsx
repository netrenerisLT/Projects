"use client";
import { motion } from "framer-motion";

export default function Button({ onClick, children, styles }) {
  return (
    <motion.button
      layout
        whileHover={{
          transition: { duration: 1, type: "spring" },
          scale: 1.05,
        }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`btnDefault ${styles}`}
    >
      {children}
    </motion.button>
  );
}
