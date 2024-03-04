import Image from "next/image";
import Link from "next/link";


export default function Navbar() {
  return (
    <div className="h-full flex items-center justify-between">
      <div>
        <Link href="/">
          <Image>Logo</Image>
        </Link>
      </div>
      <Link href="/about">About</Link>
      <Link href="/portfolio">Portfolio</Link>
      <Link href="/contact">Contact</Link>
    </div>
  );
}
