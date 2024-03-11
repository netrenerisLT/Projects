import Image from "next/image";
import Link from "next/link";
import MobileMenu from "./MobileMenu";
import MenuLinks from "./MenuLinks";


export default function Header() {
  return (
    <div className="h-full flex items-center justify-between">
      <div className="flex items-center gap-44">
        <Link href="/" className="text-font50pt text-colWhite ">
          {/* <Image>Logo</Image> */}SILVADEV
        </Link>
        <p className="textParagraph">Įkurta <br/> Vilniuje </p>
      </div>
      <ul className="flex space-x-20 max-sm:hidden">
        <MenuLinks />
      </ul>
      <MobileMenu />
    </div>
  );
}
