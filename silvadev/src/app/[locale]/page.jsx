import Image from "next/image";
import Parralax from "@/components/others/ParralaxText";
import ServicesSummary from "@/components/about/services/ServicesSummary";
import H2Title from "@/components/others/H2Title";
import H1Title from "@/components/others/H1Title";
import ProjectGrid from "@/components/projects/ProjectGrid";
import Button from "@/components/others/Button";
import PROJECTS from "@/lib/projects.json";
import { useTranslations } from "next-intl";
import Hero from "@/components/others/Hero";

const Homepage = () => {
  const t = useTranslations("indexPage");
  const pt = useTranslations("productsDescription");
  const featuredProjects = PROJECTS.filter((item) => item.isFeatured === true);
  featuredProjects[0].summary = pt(`products.epsychology.summary`);
  featuredProjects[1].summary = pt(`products.geoturas.summary`);
  return (
    <>
      <div className="h-screen flex flex-col justify-end relative">
        <Hero />
        <Image
          src="/Silva-Hero-Trees.svg"
          // src="/Silva-Hero-Trees.png"
          alt="Hero Image"
          fill
          className="object-cover object-left z-0"
        />
        <Parralax title={t("parralax")} />
      </div>
      <div className="blockStyle">
        <H1Title styles=" pl-4 -ml-[27%] md:-ml-[32%] xl:-ml-[34%] max-sm:pr-4">
          {t("title")}
        </H1Title>
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
