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

const SERVICES = [
  {
    title: "Svetainių kūrimas",
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
      <div className="relative overflow-x-auto">
        <div className="flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden p-4  undefined">
          <ul className="max-w-md p-4 space-x-4 inline-flex overflow-x-scroll snap-x snap-mandatory scroll-smooth ">
            {SERVICES.map((item) => (
              <li
                key={item.title}
                className="flex basis-[42%] snap-start box-content flex-col"
              >
                <h3 className="textH3 mb-5">{item.title}</h3>
                <p className="textParagraph">{item.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}