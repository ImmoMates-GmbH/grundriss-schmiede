import TitleH3 from "@/components/shared/fonts/TitleH3";
import MainLink from "@/components/shared/public/MainLink";
import { useTranslations } from "next-intl";

export default function NotFound() {
  const t = useTranslations("notFound");
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-3">
      <TitleH3 title={t("title")} />
      <p className="text-lg">{t("description")}</p>
      <MainLink href={"/"} title={t("backToHome")} />
    </div>
  );
}
