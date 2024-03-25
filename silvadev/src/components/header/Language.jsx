import { useLocale, useTranslations } from "next-intl";
import { locales } from "../../config";
import LocaleSwitcherSelect from "./LocaleSwitcherSelect";

export default function LocaleSwitcher() {
  const t = useTranslations("localeSwitcher");
  const locale = useLocale();
  // data.packageData.filter((item) => { return item.type[0] !== 'Packages' }).map((item)=> { console.log(item); });

  return (
    <LocaleSwitcherSelect defaultValue={locale}>
      {locales
        .filter((currentLocale) => {
          return currentLocale !== locale;
        })
        .map((missingLocale) => (
          <option
            key={missingLocale}
            value={missingLocale}
            className="block py-2 w-full hover:text-colWaterLeaf cursor-pointer"
          >
            {t("locale", { locale: missingLocale })}
          </option>
        ))}
    </LocaleSwitcherSelect>
  );
}
