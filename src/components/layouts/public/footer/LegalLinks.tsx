import TitleH3 from "@/components/shared/fonts/TitleH3";
import { useTranslations } from "next-intl";
import Image from "next/image";
import FooterLink from "./FooterLink";

const LegalLinks = () => {
  const t = useTranslations("common");
  return (
    <div className="m-auto flex w-full max-w-screen-xl flex-wrap justify-center gap-10 px-4 py-12 md:justify-between">
      <div className="flex flex-col gap-3">
        <TitleH3 className="text-primary pb-8" title={"Rechtliches"} />
        <FooterLink title={t("dataSecurity")} href={"#"} />
        <FooterLink title={t("privacy")} href={"#"} />
        <FooterLink title={t("imprint")} href={"#"} />
        <FooterLink title={t("terms")} href={"#"} />
        <FooterLink title={t("cancellationPolicy")} href={"#"} />
      </div>

      <div className="flex flex-col gap-3">
        <TitleH3 className="text-primary pb-8" title={"Kontakt"} />
        <FooterLink title={"mail@grundriss-schmiede.de"} href={"#"} />
        <FooterLink title={"Team"} href={"#"} />
        <FooterLink title={"FAQ's"} href={"#"} />
        <FooterLink title={t("jobAds")} href={"#"} />
        <FooterLink title={"Partner"} href={"#"} />
      </div>

      <div className="flex flex-col gap-2">
        <Image
          width={200}
          height={200}
          src={"https://placehold.co/200.png"}
          alt={"palceholder"}
        />
        <div className="flex justify-between gap-2">
          <Image
            width={50}
            height={50}
            src={"https://placehold.co/50.png"}
            alt={"placeholder"}
          />
          <Image
            width={50}
            height={50}
            src={"https://placehold.co/50.png"}
            alt={"placeholder"}
          />
        </div>
      </div>
    </div>
  );
};

export default LegalLinks;
