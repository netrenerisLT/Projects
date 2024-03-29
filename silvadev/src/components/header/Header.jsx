// import Link from "next/link";
import { Link } from "@/navigation";
import DesktopMenu from "./DesktopMenu";
import Image from "next/image";
import MobileHeader from "./MobileMenu";
import LocaleSwitcher from "./Language";
import { useTranslations } from "next-intl";
import Links from "./Links";
import LogoHor from "../others/LogoHor";
import LogoVer from "../others/LogoVer";

export default function Header() {
  const t = useTranslations("menuLinks");
  const LINKS = [
    { url: "/about", title: t("aboutUs") },
    { url: "/projects", title: t("projects") },
    { url: "#footer", title: t("contactUs") },
  ];
  return (
    <>
      <header className="h-20 fixed w-full z-50 mix-blend-difference max-md:mt-2 text-colWhite md:pr-20 md:pl-6 ">
        <div className="h-full flex items-center justify-between ">
          <div className="flex w-3/12 h-full relative items-left justify-end md:justify-center items-center">
            <Link href="/" className="relative w-4/5 ">
              <span className="fill-colWhite max-md:hidden">
                <LogoHor />
              </span>
              <span className="fill-colWhite md:hidden">
                <LogoVer />
              </span>
            </Link>
          </div>
          <div className="flex w-9/12 flex-1 items-center justify-between px-4 md:pr-8 md:pl-4 2xl:pr-14 2xl:pl-4 ">
            <p className="textBase z-50 ">
              Rooted <br /> in Digital
            </p>
            <div className="max-md:hidden flex justify-between relative">
              <ul className="flex gap-16 items-center">
                <Links urlLinks={LINKS.slice(0, -1)} />
              </ul>
            </div>
          </div>
          <span className="max-md:mr-20">
            <LocaleSwitcher />
          </span>
        </div>
      </header>
      <MobileHeader urlLinks={LINKS} />
    </>
  );
}
