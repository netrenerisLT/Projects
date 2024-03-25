import TextLeftZone from "@/components/others/TextLeftZone";
import { useTranslations } from "next-intl";

export default function ServicesFull() {
  const t = useTranslations("aboutPage");

  const SERVICES = [
    {
      title: t("fullServices.steps.webDevelopment.title"),
      description: t("fullServices.steps.webDevelopment.description"),
    },
    {
      title: t("fullServices.steps.storeCreation.title"),
      description: t("fullServices.steps.storeCreation.description"),
    },
    {
      title: t("fullServices.steps.siteMaintenance.title"),
      description: t("fullServices.steps.siteMaintenance.description"),
    },
    {
      title: t("fullServices.steps.digitalExpertise.title"),
      description: t("fullServices.steps.digitalExpertise.description"),
    },
  ];

  return (
    <div className="relative mb-32 pl-4">
      <ul className="flex flex-wrap max-sm:gap-10 md:gap-x-10 md:gap-y-16 justify-between relative">
        <TextLeftZone styles="items-start px-4 -ml-[36%] md:-ml-[32%]">
          {t("fullServices.title")}
        </TextLeftZone>
        {SERVICES.map((item) => (
          <li key={item.title} className="w-full lg:w-[46%] box-content">
            <div>
              <h3 className="textH3 mb-3 md:mb-4 lg:mb-5">
                {item.title}
              </h3>
              <p className="textParagraph max-sm:pr-4">{item.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
