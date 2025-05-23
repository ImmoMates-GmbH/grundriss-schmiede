import { version } from "@/config";
import { useTranslations } from "next-intl";

const Copyright = () => {
  const t = useTranslations("footer");
  return (
    <div className="bg-primary flex flex-col items-center justify-center gap-2 py-6 text-white">
      <span>Copyright © 2023 Grundriss Schmiede. {t("rights")}</span>
      <span>Version: {version}</span>
    </div>
  );
};

export default Copyright;
