import ContactForm from "../ContactForm/ContactForm";

function Footer() {
  return (
    <footer className="max-sm:w-screen max-sm:-ml-[34%] max-sm:mt-[67px] md:-mt-[5px] ml-[1px] textParagraph flex flex-col  md:bg-colBlack" id="footer">
      <ContactForm />
      <div className="flex flex-col md:h-80 justify-between px-6 md:pr-8 md:pl-4 2xl:pr-14 2xl:pl-4 py-5 z-40  md:bg-colBlack">
        <div className="flex flex-col-reverse lg:flex-row justify-start gap-4">
          <ul className="basis-6/12 pb-4">
            <li>Svetainių kūrimas</li>
            <li>EL. parduotuvių kūrimas</li>
            <li>Svetainių aptarnavimas</li>
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
          <a
            href="https://www.aurelijabeitaite.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Dizainas – Aurelija Beitaitė
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
