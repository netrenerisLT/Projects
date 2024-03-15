import TextLeftZone from "../../others/TextLeftZone";

const SERVICES = [
  {
    title: `Svetainių kūrimas`,
    description:
      "Šiandien visi yra „internete“, todėl nenorime kad susidurtumėte su apribojimais pasiekti tikslinę auditoriją. Kuriame svetaines atitinkančias tavo poreikius – nuo individualių / šabloninių svetainių iki internetinių parduotuvių ar jų integracijos su įvairiomis sistemomis ir įrankiais.",
  },
  {
    title: "Parduotuvių kūrimas",
    description:
      "Padidinkite pardavimus, prekės ženklo žinomumą ir auditorijos pasiekiamumą, naudodami efektyvius el. prekybos sprendimus. Nuo intuityvių vartotojo sąsajų iki sklandaus kurjerių, mokėjimų ar kt. sistemų integravimo – kuriame platformas, skatinančias pardavimus, užtikrinančias saugumą, gera vartotojų patirtį ir jų įsitraukimą.",
  },
  {
    title: "Svetainių priežiūra",
    description:
      "Užtikrinkite savo svetainės saugumą, patikimumą ir našumą. Nuo reguliarių atnaujinimų ir saugos pataisų iki turinio valdymo ir našumo optimizavimo. Susikoncentruokite į savo projektą, o mes pasirūpinsime svetainės priežiūra.",
  },
  {
    title: "Skaitmeninis meistriškumas",
    description:
      "Patobulinkite savo projekto strategiją naudodami platų paslaugų spektrą. Su mūsų patikimais SEO ir socialinės rinkodaros, bei grafinio dizaino ir 2D animacijos (angl. motion) partneriais, siūlome platų paslaugų pasirinkimą, kad padidinti tavo projekto žinomumą ir auditorijos įsitraukimą.",
  },
];
export default function ServicesFull() {
  return (
    <div className="relative mb-32">
      <ul className="flex flex-wrap max-sm:gap-10 md:gap-x-10 md:gap-y-16 justify-between relative">
      <TextLeftZone styles="items-start px-4 -ml-[33%]">
          Paslaugos
        </TextLeftZone>
        {SERVICES.map((item) => (
          <li key={item.title} className="w-full lg:w-[46%] box-content">
            <div>
              <h3 className="textH3 mb-3 md:mb-4 lg:mb-5 max-w-[30%]">
                {item.title}
              </h3>
              <p className="textParagraph max-sm:pr-4">{item.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
