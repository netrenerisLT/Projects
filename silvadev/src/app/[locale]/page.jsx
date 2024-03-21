import Image from "next/image";
import Parralax from "@/components/others/ParralaxText";
import ServicesSummary from "@/components/about/services/ServicesSummary";
import H2Title from "@/components/others/H2Title";
import H1Title from "@/components/others/H1Title";
import ProjectGrid from "@/components/projects/ProjectGrid";
import Button from "@/components/others/Button";
import PROJECTS from "@/lib/projects.json";
import { useTranslations } from "next-intl";


const Homepage = () => {
  const t = useTranslations("indexPage");

  const featuredProjects = PROJECTS.filter((item) => item.isFeatured === true);
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
        <H1Title styles=" pl-4 -ml-[32%] max-sm:pr-4">{t("title")}</H1Title>
        <H2Title styles=" pl-4 max-sm:-ml-[28%] text-left normal-case max-sm:pr-4">
          {t("subTitle")}
        </H2Title>
        <ServicesSummary />
      </div>
      <div className="blockStyle">
        <H1Title styles="pl-4 max-sm:-ml-[30%] max-sm:pr-4">
          {t("selectedWork")}
        </H1Title>
        <ProjectGrid projects={featuredProjects} withSummary />
        <span className="text-right mt-32 mb-8">
          <Button href="/projects">{t("projects")}</Button>
        </span>
      </div>
    </>
  );
};

export default Homepage;
