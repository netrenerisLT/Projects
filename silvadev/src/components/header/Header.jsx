import Link from "next/link";
import MobileMenu from "./MobileMenu";
import DesktopMenu from "./DesktopMenu";

// export default function Header() {
//   return (
//     <>
//       <div className="col-start-1 col-span-2 bg-colWaterLeaf">
//         <Link href="/" className="text-font50pt text-colWhite">
//           {/* <Image>Logo</Image> */}SILVADEV
//         </Link>
//       </div>
//       <p className="textParagraph lg:col-start-3 2xl:col-start-4">
//         Įkurta <br /> Vilniuje
//       </p>
//       {/* <div className="col-start-11 col-span-2 max-sm:hidden">
//         <ul className="flex items-center gap-8 ">
//           <MenuLinks />
//         </ul>
//       </div> */}
//       <DesktopMenu />
//       <MobileMenu />
//     </>
//   );
// }
export default function Header() {
  return (
    <div className="h-full flex items-center justify-between">
      <div className="flex w-3/12 flex-none items-center justify-between h-full">
        <Link href="/" className=" w-full h-full pr-10">
          {/* <Image>Logo</Image> */}
        </Link>
      </div>
      <div className="flex w-9/12 flex-1 items-center justify-between px-4 md:pr-8 md:pl-4 2xl:pr-14 2xl:pl-4 ">
        <p className="textParagraph z-50 ">
          Rooted <br /> inDigital
        </p>
        <div className="max-md:hidden flex text-colWhite justify-between">
          <DesktopMenu />
        </div>
        <div className="md:hidden">
          <MobileMenu />
        </div>
      </div>
    </div>
  );
}
