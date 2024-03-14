import Button from "../../others/Button";

const SERVICES = [
  {
    title: `Svetainių kūrimas`,
    description:
      "Nuo idėjos iki paleidimo, kokybiškų individualių ir šabloninių dizaino svetainių kūrimas",
  },
  {
    title: "Parduotuvių kūrimas",
    description:
      "Nuo intuityvių vartotojo sąsajų iki sklandaus kurjerių, mokėjimų ar kt. sistemų integravimo.",
  },
  {
    title: "Svetainių priežiūra",
    description:
      "Reguliarūs atnaujinimai, našumo optimizavimas, turinio valdymas, saugos pataisų patikra ir kt.",
  },
  {
    title:
      "Skaitmeninis meistriškumas",
    description:
      "Siūlome platų paslaugų pasirinkimą: rinkodaros, grafinio dizaino ir 2D animacijos srityje,",
  },
];
export default function Contact() {
  return (
    <div className="grid">
      <div className="max-sm:relative max-sm:overflow-x-auto">
        <ul className="flex flex-wrap max-sm:w-[550px] max-sm:flex-wrap md:flex md:flex-wrap max-sm:gap-10 md:gap-x-10 md:gap-y-16 md:justify-between max-sm:overflow-x-scroll max-sm:scroll-smooth">
          {SERVICES.map((item) => (
            <li
              key={item.title}
              className="w-[43%] md:w-[46%] box-content max-sm:flex-none "
            >
              <div>
                <h3 className="textH3 mb-3 md:mb-4 lg:mb-5 max-w-[30%]">{item.title}</h3>
                <p className="textParagraph">{item.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <Button
        styles="md:hidden absolute -left-[2.6rem] -bottom-12 pointer-events-none"
        reverse
      >
        Braukite/slinkite į kairę
      </Button>
    </div>
  );
}
