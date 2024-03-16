import Accordion from "@/components/about/accordion/Accordion";
import H1Title from "@/components/others/H1Title";
import H2Title from "@/components/others/H2Title";
import TextLeftZone from "@/components/others/TextLeftZone";
import ImageSlider from "@/components/projects/ImageSlider";
import React, { Suspense } from "react";

const project = {
  title: "Dobis ir Aurelija",
  slug: "dobis-nuostabus",
  projectUrl: "https:www.google.com",
  projectType: "El. parduotuve",
  clientName: "Dobiukas maziukas",
  coverImage: "/projects/dobis.jpg",
  projectImages: [
    {
      title: "Dobisas",
      imageUrl: "/projects/dobis.jpg",
    },
    {
      title: "Dobisas",
      imageUrl: "/projects/dobis2.jpeg",
    },
    {
      title: "Dobisa",
      imageUrl: "/projects/dobis3.jpeg",
    },
    {
      title: "Dobiss",
      imageUrl: "/projects/dobis4.jpeg",
    },
    {
      title: "Dobisss",
      imageUrl: "/projects/dobis5.jpeg",
    },
  ],
  summary:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  keyInfo:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  projectSteps: [
    {
      title: "Santrauka",
      description:
        "Mūsų pirmieji pokalbiai yra skirti išsiaiškinti tavo projekto tikslus, reikalingą funkcionalmą ir kitus reikalavimus. Po to galime suplanuoti aiškų darbų planą, nustatyti realius terminus, biudžetą ir kt.",
    },
    {
      title: "Metodas",
      description:
        "Tavo idėja paverčiame realybe. Naudojame patikrintą kodavimo praktiką kuriant saugias sistemas. Kiekviena funkcija yra kruopščiai sukurta ir išbandyta, kad būtų užtikrinta svetainės kokybė.",
    },
    {
      title: "Iššūkiai",
      description:
        "Testai užtikrina, kad svetatnė yra stabili, naši ir saugi. Mes paprastai naudojame tikrus įrenginius, o ne emuliatorius, kad surinktume ir analizuotume bandomųjų vartotojų patirtį.",
    },
    {
      title: "Rezultatas",
      description:
        "Svetainės neturi finišo linijos. Kai pateiksime sprendimą, vis dar būsime tavo žinioje dėl atnaujinimų ir suplanuotos priežiūros.",
    },
  ],
};

export default function page({ params }) {
  return (
    <div className="blockStyle pl-0 z-30">
      <Suspense
        fallback={<p className="textParagraph">Kraunamas projektas...</p>}
      >
        <div className="w-full ">
          <H1Title styles=" -ml-[28%] max-sm:pr-4 md:mb-12">
            {project.title}
          </H1Title>
          <div className="flex flex-col justify-between md:flex-row">
            <div className="flex flex-col justify-between items-end md:items-start -ml-[25%] md:-ml-[28%] md:max-w-[25%] max-sm:mb-8">
              <p className="textParagraph text-left max-sm:mr-4 max-sm:pb-4">
                {project.summary}
              </p>
              <a
                className="textBase text-colWaterLeaf max-sm:mr-4"
                href={`${project.projectUrl}`}
                target="_blank"
              >
                Nuoroda į projektą
              </a>
            </div>
            <div className="flex flex-col justify-between items-start w-full">
              <ImageSlider {...project} />
              <div className="textParagraph flex gap-16 mt-4 max-sm:-ml-[26%]">
                <span className="flex flex-col gap-2">
                  <h4>Kryptis</h4>
                  <h4>Klientas</h4>
                </span>
                <span className="flex flex-col w-fit gap-2">
                  <p>{project.projectType}</p>
                  <p>{project.clientName}</p>
                </span>
              </div>
            </div>
          </div>
          <div className="ml-[1px] mt-8 md:mt-14 lg:mt-28 flex flex-col w-full md:items-end max-sm:pb-2 pr-[1px] max-sm:pl-[5px]">
            <H2Title styles="text-right w-3/4 max-sm:mr-4 max-sm:ml-12">
              {project.keyInfo}
            </H2Title>
            <Accordion information={project.projectSteps} />
          </div>
        </div>
      </Suspense>
    </div>
  );
}
