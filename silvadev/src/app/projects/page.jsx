import H1Title from "@/components/others/H1Title";
import ProjectGrid from "@/components/projects/ProjectGrid";
import React, { Suspense } from "react";

// async function ProjectsFetch() {
//   const projects = await getProjects();
//   return <ProjectGrid projects={projects} />;
// }

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
    keyInfo:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    title: "Dobisver",
    slug: "dobisever",
    projectUrl: "https:www.google.com",
    projectType: "El. parduotuve",
    clientName: "Dobiukas",
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
    keyInfo:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
];

export default function page() {
  return (
    <div className="blockStyle md:pl-0 md:pb-32">
      <H1Title styles="-ml-[30%] max-sm:pr-4">Projektai</H1Title>
      <Suspense
        fallback={<p className="textParagraph">Kraunami projektai...</p>}
      >
        {/* <ProjectsFetch /> */}
        <ProjectGrid projects={projects} styles="xl:w-[45%]" />
      </Suspense>
    </div>
  );
}
