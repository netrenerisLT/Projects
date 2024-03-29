import H1Title from "@/components/others/H1Title";
import ProjectGrid from "@/components/projects/ProjectGrid";
import React, { Suspense } from "react";
import PROJECTS from "@/lib/projects.json";
import { useTranslations } from "next-intl";

// async function ProjectsFetch() {
//   const projects = await getProjects();
//   return <ProjectGrid projects={projects} />;
// }

export const metadata = {
  title: "Projektai",
};

export default function page() {
  const t = useTranslations("projectGridPage");

  return (
    <div className="blockStyle md:pl-0 md:pb-32">
      <H1Title styles="-ml-[30%] xl:-ml-[33%] max-sm:pr-4">{t("title")}</H1Title>
      <Suspense
        fallback={<p className="textParagraph">{t("loadingMessage")}</p>}
      >
        {/* <ProjectsFetch /> */}
        <ProjectGrid
          projects={PROJECTS}
          withSummary={false}
          styles="xl:w-[45%]"
        />
      </Suspense>
    </div>
  );
}
