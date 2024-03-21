"use client"
import Button from "@/components/others/Button";
import { useTranslations } from "next-intl";

export default function NotFoundPage() {
  const t = useTranslations("errorPages");

  return (
    <div className="h-screen flex flex-col items-start justify-center">
      <h1 className="textH1 mb-10">{t("errorTitle")}</h1>
      <Button href="/" styles="absolute left-10 bottom-10" reverse>
      {t("buttonAction")}
      </Button>
    </div>
  );
}
