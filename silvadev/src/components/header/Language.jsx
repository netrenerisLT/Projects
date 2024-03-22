import { useLocale, useTranslations } from "next-intl";
import { locales } from "../../config";
import LocaleSwitcherSelect from "./LocaleSwitcherSelect";

export default function LocaleSwitcher() {
  const t = useTranslations("localeSwitcher");
  const locale = useLocale();
  return (
    <LocaleSwitcherSelect defaultValue={locale}>
      {locales.map((cur) => (
        <option
          key={cur}
          value={cur}
          className="block py-2 w-full hover:text-colWaterLeaf last:border-t-[1px] last:border-colBlack cursor-pointer"
        >
          {t("locale", { locale: cur })}
        </option>
        //   <span key={cur} value={cur} className="block py-2 w-full hover:text-colWaterLeaf last:border-t-[1px] last:border-colBlack">
        //     {t("locale", { locale: cur })}
        //   </span>
      ))}
    </LocaleSwitcherSelect>
  );
}
