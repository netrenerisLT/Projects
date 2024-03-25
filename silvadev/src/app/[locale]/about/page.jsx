import ServicesFull from "@/components/about/services/ServicesFull";
import Accordion from "@/components/about/accordion/Accordion";
import H1Title from "@/components/others/H1Title";
import H2Title from "@/components/others/H2Title";
import { useTranslations } from "next-intl";

export const metadata = {
  title: "Apie Mus",
};

export default function page() {
  const t = useTranslations("aboutPage");

  const HOWWEWORK = [
    {
      title: t("howWeWork.steps.needsDiscussion.title"),
      description: t("howWeWork.steps.needsDiscussion.description"),
    },
    {
      title: t("howWeWork.steps.uxUi.title"),
      description: t("howWeWork.steps.uxUi.description"),
    },
    {
      title: t("howWeWork.steps.websiteDevelopment.title"),
      description: t("howWeWork.steps.websiteDevelopment.description"),
    },
    {
      title: t("howWeWork.steps.testing.title"),
      description: t("howWeWork.steps.testing.description"),
    },
    {
      title: t("howWeWork.steps.supportAndMaintenance.title"),
      description: t("howWeWork.steps.supportAndMaintenance.description"),
    },
  ];

  return (
    <div className="blockStyle pl-0 ">
      <H1Title styles="-ml-[27%] md:-ml-[30%] xl:-ml-[33%]  max-sm:pr-4 pl-4">{t("title")}</H1Title>
      <H2Title styles="max-sm:-ml-[28%] text-left normal-case max-sm:pr-4 pl-4">
        {t("description")}
      </H2Title>
      <ServicesFull />
      <Accordion information={HOWWEWORK} title={t("howWeWork.title")} />
    </div>
  );
}
