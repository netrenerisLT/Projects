import Accordion from "@/components/about/accordion/Accordion";
import H1Title from "@/components/others/H1Title";
import H2Title from "@/components/others/H2Title";
import ImageSlider from "@/components/projects/ImageSlider";
import React, { Suspense } from "react";
import PROJECTS from "@/lib/projects.json";
import { useTranslations } from "next-intl";


export async function generateMetadata({ params, searchParams }) {
  const [project] = PROJECTS.filter((project) => project.slug === params.slug);

  return {
    title: `Projektai - ${project.title}`,
    openGraph: {
      images: [{
        url: `${project.coverImage}`
      }]
    }
  };
}

export default function page({ params }) {
  const t = useTranslations("selectedProjectPage");

  const [project] = PROJECTS.filter((project) => project.slug === params.slug);

  return (
    <div className="blockStyle pl-0 z-30">
      <Suspense
        fallback={<p className="textParagraph">{t("loadingMessage")}</p>}
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
                {t("projectLink")}
              </a>
            </div>
            <div className="flex flex-col justify-between items-start w-full">
              <ImageSlider {...project} />
              <div className="textParagraph flex gap-16 mt-4 max-sm:-ml-[26%]">
                <span className="flex flex-col gap-2">
                  <h4>{t("direction")}</h4>
                  <h4>{t("client")}</h4>
                </span>
                <span className="flex flex-col w-fit gap-2">
                  <p>{project.projectType}</p>
                  <p>{project.clientName}</p>
                </span>
              </div>
            </div>
          </div>
          <div className="ml-[1px] mt-8 md:mt-14 lg:mt-28 flex flex-col w-full md:items-end  pr-[1px] max-sm:pl-[5px]">
            <H2Title styles="text-right w-3/4 max-sm:mr-4 max-sm:ml-12 normal-case">
              {project.keyInfo}
            </H2Title>
            <Accordion information={project.projectSteps} />
          </div>
        </div>
      </Suspense>
    </div>
  );
}
