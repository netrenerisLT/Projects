"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function MenuLinks() {
  const path = usePathname();
  const defaultStyle =
    "border-b-2 border-white hover:border-tigerEye hover:border-b-2";
  const activeStyle = "border-b-2 border-tigerEye";

  const LINKS = [
    { url: "..", title: "About" },
    { url: "/portfolio", title: "Portfolio" },
    { url: "/contact", title: "Contact" },
  ];
  return (
    <>
      {LINKS.map((link) => (
        <Link href={link.url} key={link.title}>
          <motion.li
            className={path.startsWith(link.url) ? activeStyle : defaultStyle}
          >
            {link.title}
          </motion.li>
        </Link>
      ))}
    </>
  );
}
