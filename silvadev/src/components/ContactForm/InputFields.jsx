import Image from "next/image";
import { useTranslations } from "next-intl";

export default function InputForm({ handleChange, errors, unSuccessSubmit }) {
  const t = useTranslations();

  const stylesFormInput =
    "w-full py-3 px-4 ring-1 ring-inset ring-colBlack focus:ring-colWhite bg-colTransparent placeholder-colBlack outline-none h-full ";
  
  
    return (
    <>
      <div className=" flex flex-col gap-4 md:flex-row">
        <div className="flex flex-col gap-4 w-full md:basis-5/12 max-h-44 flex-none">
          <input
            type="text"
            placeholder={t("footerPage.inputName")}
            className={stylesFormInput}
            name="name"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder={t("footerPage.inputEmail")}
            className={stylesFormInput}
            name="email"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder={t("footerPage.inputPhone")}
            className={stylesFormInput}
            name="phone"
          />
        </div>
        <div className="basis-7/12 max-h-44">
          <textarea
            placeholder={t("footerPage.inputMessage")}
            rows="6"
            className={stylesFormInput}
            name="message"
          ></textarea>
        </div>
      </div>

      <div className="flex justify-between items-center flex-1 right-0 pl-4 mt-2">
        {errors.name ? (
          <span className="text-colRed">{errors.name}</span>
        ) : (
          <span className="text-colRed">{errors.email}</span>
        )}
        {unSuccessSubmit && (
          <span className="text-colRed">{t("footerPage.inputMessage")}</span>
        )}
        <button className="flex items-center gap-4 group-invalid:pointer-events-none group-invalid:opacity-30">
          <p> {t("footerPage.sendAction")}</p>
          <Image
            src="/blackArrow.svg"
            alt="Arrow icon"
            height={20}
            width={30}
          />
        </button>
      </div>
    </>
  );
}
