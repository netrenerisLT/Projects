import Image from "next/image";
import Link from "next/link";
import MobileMenu from "./MobileMenu";
import DesktopMenu from "./DesktopMenu";

export default function Header() {
  return (
    <>
      <div className="col-start-1 col-span-2 bg-colWaterLeaf">
        <Link href="/" className="text-font50pt text-colWhite">
          {/* <Image>Logo</Image> */}SILVADEV
        </Link>
      </div>
      <p className="textParagraph lg:col-start-3 2xl:col-start-4">
        Įkurta <br /> Vilniuje
      </p>
      {/* <div className="col-start-11 col-span-2 max-sm:hidden">
        <ul className="flex items-center gap-8 ">
          <MenuLinks />
        </ul>
      </div> */}
      <DesktopMenu />
      <MobileMenu />
    </>
  );
}
// export default function Header() {
//   return (
//     <div className="h-full flex items-center justify-between">
//       <div className="flex items-center gap-44">
//         <Link href="/" className="text-font50pt text-colWhite ">
//           {/* <Image>Logo</Image> */}SILVADEV
//         </Link>
//         <p className="textParagraph">Įkurta <br/> Vilniuje </p>
//       </div>
//       <ul className="flex space-x-20 max-sm:hidden">
//         <MenuLinks />
//       </ul>
//       <MobileMenu />
//     </div>
//   );
// }
