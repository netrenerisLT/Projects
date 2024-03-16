import Accordion from "@/components/about/accordion/Accordion";
import H1Title from "@/components/others/H1Title";
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
};

export default function page({ params }) {
  return (
    <div className="blockStyle pl-0">
      <Suspense
        fallback={<p className="textParagraph">Kraunamas projektas...</p>}
      >
        <div className="z-30 w-full">
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
        </div>
      </Suspense>

      {/* <Accordion /> */}
    </div>
  );
}
