import ContactForm from "../ContactForm/ContactForm";
import { useTranslations } from "next-intl";
import { Link } from "@/navigation";
import Image from "next/image";
import LogoVer from "../others/LogoVer";

function Footer() {
  const t = useTranslations();
  const headerInfo = {
    callToAction: t("footerPage.callToAction"),
    errorName: t("footerPage.errorName"),
    errorEmail: t("footerPage.errorEmail"),
    successMessage: t("footerPage.successMessage"),
    errorMessage: t("footerPage.errorMessage"),
    sendAction: t("footerPage.sendAction"),
    inputName: t("footerPage.inputName"),
    inputEmail: t("footerPage.inputEmail"),
    inputPhone: t("footerPage.inputPhone"),
    inputMessage: t("footerPage.inputMessage"),
  };

  return (
    <footer
      className="max-sm:w-screen max-sm:-ml-[34%] max-sm:mt-[67px] md:-mt-[5px] ml-[1px] textParagraph flex flex-col  md:bg-colBlack"
      id="footer"
    >
      <ContactForm {...headerInfo} />
      <div className="flex flex-col md:h-80 justify-between px-6 md:pr-8 md:pl-4 2xl:pr-14 2xl:pl-4 py-5 z-40  md:bg-colBlack">
        <div className="flex flex-col lg:flex-row justify-start md:justify-between gap-4 xl:pr-24">
          <Link href="/" className="relative h-20 w-24 xl:h-full xl:w-40">
            <span className="fill-colWhite">
              <LogoVer />
            </span>
          </Link>
          <ul className="">
            <li>
              <a href="mailto:hello@silvadev.com">hello@silvadev.com</a>
            </li>
            <li>
              <a href="tel:+37067859404">+37067859404</a>
            </li>
          </ul>
          <ul className="pb-4 xl:text-right">
            <li>{t("aboutPage.fullServices.steps.webDevelopment.title")}</li>
            <li>{t("aboutPage.fullServices.steps.storeCreation.title")}</li>
            <li>{t("aboutPage.fullServices.steps.siteMaintenance.title")}</li>
          </ul>
        </div>
        <div className="textBase flex flex-col md:flex-row md:items-center justify-between ">
          <p>{t("footerPage.developedBy")} – SilvaDev</p>
          <a
            href="https://www.aurelijabeitaite.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("footerPage.designedBy")} – Aurelija Beitaitė
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
