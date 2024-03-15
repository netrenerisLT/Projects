import React from "react";
import ProjectItem from "./ProjectItem";

export default function ProjectGrid({ projects }) {
  return (
    <ul className="max-sm:-ml-20 z-30 max-sm:w-fit max-sm:pr-6 md:gap-y-20  w-full flex flex-wrap h-auto items-center justify-between gap-y-10 ">
      {projects.map((project) => (
        <li key={project.slug} className="w-full xl:w-[40%] h-80">
          <ProjectItem {...project} />
        </li>
      ))}
    </ul>
  );
}
