"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const LINKS = [
  { url: "/", title: "About" },
  { url: "/portfolio", title: "Portfolio" },
  { url: "/contact", title: "Contact" },
];

export default function MenuLinks({ setActiveMobile }) {
  const path = usePathname();
  const defaultStyle = "border-b-2 border-transparent hover:border-tigerEye";
  const activeStyle = "border-b-2 border-tigerEye";
  return (
    <>
      {LINKS.map((link) => (
        <motion.li
          whileHover={{ scale: 1.05 }}
          transition={{
            duration: 1,
            type: "spring",
            scale: 1.1,
          }}
          className={
            path === link.url && path.startsWith(link.url)
              ? activeStyle
              : defaultStyle
          }
          key={link.title}
        >
          <Link
            onClick={() => setActiveMobile(false)}
            href={link.url}
            key={link.title}
          >
            {link.title}
          </Link>
        </motion.li>
      ))}
    </>
  );
}
