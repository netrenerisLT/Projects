"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function MobileMenu({ links }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        className="w-10 h-6 flex flex-col justify-between z-50 relative"
        onClick={() => setOpen(!open)}
      >
        <div className="w-8 h-0.5 bg-darkMossGreen"></div>
        <div className="w-8 h-0.5 bg-white"></div>
        <div className="w-8 h-0.5 bg-white"></div>
       
      </button>
      {open && (
        <div className="absolute top-0 right-0 w-screen h-screen bg-darkMossGreen text-white flex flex-col items-center justify-center gap-8">
          {links.map((link) => (
            <Link href={link.url} key={link.title}>
              {link.title}
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
