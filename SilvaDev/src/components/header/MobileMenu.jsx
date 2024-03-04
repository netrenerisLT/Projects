"use client";
import { useState } from "react";
import MenuLinks from "./MenuLinks";

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
        <ul className="absolute top-0 right-0 w-screen h-screen bg-darkMossGreen text-white flex flex-col items-center justify-center gap-8">
          <MenuLinks />
        </ul>
      )}
    </>
  );
}
