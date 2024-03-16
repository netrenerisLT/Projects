import Image from "next/image";
import Parralax from "@/components/others/ParralaxText";
import ServicesSummary from "@/components/about/services/ServicesSummary";
import H2Title from "@/components/others/H2Title";
import H1Title from "@/components/others/H1Title";
import ProjectGrid from "@/components/projects/ProjectGrid";

const projects = [
  {
    title: "Dobis ir Aurelija",
    slug: "dobis-nuostabus",
    projectUrl: "https:www.google.com",
    projectType: "El. parduotuve",
    clientName: "Dobiukas maziukas",
    coverImage: "/projects/dobis.jpg",
    projectImages: [
      {
        title: "Dobis",
        imageUrl: "/projects/dobis.jpg",
      },
      {
        title: "Dobis",
        imageUrl: "/projects/dobis.jpg",
      },
      {
        title: "Dobis",
        imageUrl: "/projects/dobis.jpg",
      },
    ],
    summary:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    keyInfo:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    title: "Dobis 4ever",
    slug: "dobis-4ever",
    projectUrl: "https:www.google.com",
    projectType: "El. parduotuve",
    clientName: "Dobiukas dobiliukas",
    coverImage: "/projects/dobis.jpg",
    projectImages: [
      {
        title: "Dobis",
        imageUrl: "/projects/dobis.jpg",
      },
      {
        title: "Dobis",
        imageUrl: "/projects/dobis.jpg",
      },
      {
        title: "Dobis",
        imageUrl: "/projects/dobis.jpg",
      },
    ],
    summary:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    keyInfo:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
];

const Homepage = () => {
  return (
    <>
      <div className="h-screen flex flex-col justify-end relative">
        <Image
          src="/hero.png"
          alt="Hero Image"
          fill
          className="object-contain"
        />
        <Parralax />
      </div>
      <div className="blockStyle">
        <H1Title styles=" pl-4 -ml-[30%] max-sm:pr-4">Paslaugos</H1Title>
        <H2Title styles=" pl-4 max-sm:-ml-[28%] text-left normal-case max-sm:pr-4">
          Su daugiau nei 6 metų patirtimi mūsų komanda kuria ne tik vizualiai
          patrauklias, bet ir verslą auginančias interneto svetaines.
          Susisiekime ir aptarsime tavo svetainės vizijos įgyvendinimą!
        </H2Title>
        <ServicesSummary />
      </div>
      <div className="blockStyle">
        <H1Title styles="pl-4 max-sm:-ml-[30%] max-sm:pr-4">
          Atrinkti darbai
        </H1Title>
          <ProjectGrid projects={projects} />
      </div>
    </>
  );
};

export default Homepage;
