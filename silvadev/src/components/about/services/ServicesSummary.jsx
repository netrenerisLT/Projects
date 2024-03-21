import Button from "../../others/Button";
import { useTranslations } from "next-intl";

export default function ServicesSummary() {
  const t = useTranslations("aboutPage");

  const SERVICES = [
    {
      title: t("limitedServices.steps.webDevelopment.title"),
      description: t("limitedServices.steps.webDevelopment.description"),
    },
    {
      title: t("limitedServices.steps.storeCreation.title"),
      description: t("limitedServices.steps.storeCreation.description"),
    },
    {
      title: t("limitedServices.steps.siteMaintenance.title"),
      description: t("limitedServices.steps.siteMaintenance.description"),
    },
    {
      title: t("limitedServices.steps.digitalExpertise.title"),
      description: t("limitedServices.steps.digitalExpertise.description"),
    },
  ];
  return (
    <div className="grid pl-4">
      <div className="max-sm:relative max-sm:overflow-x-auto">
        <ul className="flex flex-wrap max-sm:w-[550px] max-sm:gap-10 md:gap-x-10 md:gap-y-16 md:justify-between max-sm:overflow-x-scroll max-sm:scroll-smooth">
          {SERVICES.map((item) => (
            <li
              key={item.title}
              className="w-[43%] md:w-[46%] box-content max-sm:flex-none "
            >
              <div>
                <h3 className="textH3 mb-3 md:mb-4 lg:mb-5 max-w-[30%]">
                  {item.title}
                </h3>
                <p className="textParagraph">{item.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <Button
        styles="md:hidden absolute -left-[2.6rem] -bottom-12 pointer-events-none"
        reverse
      >
        {t("limitedServices.scrollAction")}
      </Button>
    </div>
  );
}
