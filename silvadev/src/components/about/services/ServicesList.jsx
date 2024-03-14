// function ServicesList() {
//   return (
//     <div className="relative overflow-x-auto">
//       <ul className="flex flex-wrap md:gap-x-4 gap-y-32 md:justify-between max-sm:overflow-x-scroll max-sm:w-screen max-sm:ml-[70%] max-sm:snap-x max-sm:snap-mandatory max-sm:-translate-x-2/4 ">
//         {SERVICES.map((list) => (
//           <ServiceItem title={list.title} description={list.description} />
//         ))}
//       </ul>
//     </div>
//     // <ul className="flex flex-row flex-wrap gap-x-4 gap-y-32 justify-between overflow-hidden">
//     //   {SERVICES.map((list) => (
//     //     <ServiceItem title={list.title} description={list.description} />
//     //   ))}
//     // </ul>
//   );
// }

// export default ServicesList;

import React from "react";
import Button from "../../others/Button";

const SERVICES = [
  {
    title: `Svetainių 
    kūrimas`,
    description:
      "Šiandien visi yra „internete“, todėl nenorime kad susidurtumėte su apribojimais pasiekti tikslinę auditoriją. Kuriame svetaines atitinkančias tavo poreikius – nuo individualių / šabloninių svetainių iki internetinių parduotuvių ar jų integracijos su įvairiomis sistemomis ir įrankiais.",
  },
  {
    title: "Parduotuvių kūrimas",
    description:
      "Padidinkite pardavimus, prekės ženklo žinomumą ir auditorijos pasiekiamumą, naudodami efektyvius el. prekybos sprendimus. Nuo intuityvių vartotojo sąsajų iki sklandaus kurjerių ir mokėjimų ar kt. sistemų integravimo – kuriame platformas, skatinančias pardavimus, užtikrinančias saugumą, gera vartotojų patirtį ir jų įsitraukimą.",
  },
  {
    title: "Svetainių aptarnavimas",
    description:
      "Užtikrinkite savo svetainės saugumą, patikimumą ir našumą. Nuo reguliarių atnaujinimų ir saugos pataisų iki turinio valdymo ir našumo optimizavimo. Susikoncentruokite į savo projektą, o mes pasirūpinsime svetainės priežiūra.",
  },
  {
    title:
      // "Skaitmeninis meistriškumas: socialinė rinkodara, grafinis dizainas ir kt.",
      "Skaitmeninis meistriškumas",
    description:
      "Patobulinkite savo projekto strategiją naudodami platų paslaugų spektrą. Su mūsų patikimais SEO ir socialinės rinkodaros, bei grafinio dizaino ir 2D animacijos (angl. motion) partneriais, siūlome platų paslaugų pasirinkimą, kad padidinti tavo projekto žinomumą ir auditorijos įsitraukimą.",
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
              className="w-[45%] md:w-[46%] box-content max-sm:flex-none "
            >
              <div>
                <h3 className="textH3 mb-5 max-w-[30%]">{item.title}</h3>
                <p className="textParagraph">{item.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <Button
        styles="md:hidden absolute -left-[2.6rem] -bottom-8 pointer-events-none"
        reverse
      >
        Braukite/slinkite į kairę
      </Button>
    </div>
  );
}
