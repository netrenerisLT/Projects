import React from "react";
import ProjectItem from "./ProjectItem";



export default function ProjectGrid({ projects, styles }) {
  return (
    <ul className="max-sm:-ml-20 z-30 max-sm:w-fit max-sm:pr-6 md:gap-y-20 md:w-full lg:w-[82.5%] 2xl:w-[83.2%] flex flex-wrap h-auto items-center justify-between gap-y-16 ">
      {projects.map((project) => (
        <li key={project.slug} className={`w-full aspect-video ${styles}`}>
          <ProjectItem {...project} />
        </li>
      ))}
    </ul>
  );
}
