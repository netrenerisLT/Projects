import Link from "next/link";
import DesktopMenu from "./DesktopMenu";

export default function Header() {
  return (
    <header className=" h-20 fixed w-full z-50 mix-blend-difference">
      <div className="h-full flex items-center justify-between ">
        <div className="flex w-3/12 flex-none items-center justify-between h-full">
          <Link href="/" className=" w-full h-full pr-10">
            {/* <Image>Logo</Image> */}
            logo
          </Link>
        </div>
        <div className="flex w-9/12 flex-1 items-center justify-between px-4 md:pr-8 md:pl-4 2xl:pr-14 2xl:pl-4">
          <p className="textParagraph z-50 ">
            Rooted <br /> inDigital
          </p>
          <div className="max-md:hidden flex text-colWhite justify-between relative">
            <DesktopMenu />
          </div>
        </div>
      </div>
    </header>
  );
}
