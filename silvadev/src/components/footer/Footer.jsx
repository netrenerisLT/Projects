import React from "react";
import ContactForm from "../ContactForm";

function Footer() {
  return (
    <footer className="textParagraph flex flex-col">
      <div className="h-[31rem] pl-4 py-5 flex justify-end text-right items-center border-y-2 border-colJetBlack pr-4 md:pr-24 xl:pr-48">
        <ContactForm />
      </div>
      <div className="flex flex-col h-80 justify-between px-4 md:pr-8 md:pl-4 2xl:pr-14 2xl:pl-4 py-5">
        <div className="flex flex-col-reverse lg:flex-row justify-start gap-4">
          <ul className="basis-6/12">
            <li>Interneto svetainių kūrimas</li>
            <li>Elektroninių parduotuvių kūrimas</li>
            <li>Interneto svetainių aptarnavimas</li>
            <li>Socialinė rinkodara, grafinis dizainas ir kt.</li>
          </ul>
          <ul className="basis-6/12">
            <li>
              <a href="mailto:hello@silvadev.com">hello@silvadev.com</a>
            </li>
            <li>
              <a href="tel:+37067859404">+37067859404</a>
            </li>
          </ul>
        </div>
        <div className="textBase flex flex-col md:flex-row md:items-center justify-between ">
          <p>Sprendimas – SilvaDev</p>
          <p>
            Dizainas – {""}
            <a
              href="https://www.aurelijabeitaite.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Aurelija Beitaitė
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
