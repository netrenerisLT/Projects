"use client"
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const LINKS = [
    { url: "/", title: "About" },
    { url: "/portfolio", title: "Portfolio" },
    { url: "/contact", title: "Contact" },
  ];
  return (
    <div className="h-full flex items-center justify-between">
         <motion.div className="bg-mossGreen"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          />
      <div>
        <Link href="/">{/* <Image>Logo</Image> */}LOGO</Link>
      </div>
      <div className="text-darkMossGreen space-x-8 max-sm:invisible">
        {LINKS.map((link) => (
          <Link href={link.url} key={link.title}>
            {link.title}
          </Link>
        ))}
      </div>
      <div className="md:invisible">
        <MobileMenu links={LINKS} />
      </div>
    </div>
  );
}
