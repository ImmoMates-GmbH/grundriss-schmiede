import { ChangeLanguage } from "@/components/shared";
import { MenuLink, NavigationMenu } from "@/components/shared/public";
import MainLink from "@/components/shared/public/MainLink";
import { Separator } from "@/components/ui/separator";
import { useTranslations } from "next-intl";
import Image from "next/image";
import logo from "../../../../public/images/logos/main-logo.png";
import Sidebar from "./Sidebar";

const Navbar = () => {
  const t = useTranslations("common");
  return (
    <div className="position-fixed bg-background top-0 left-0 z-50 border-b shadow-sm">
      <div className="m-auto flex w-full max-w-screen-xl items-center justify-between p-3.5 lg:p-4">
        <Image
          src={logo}
          alt={"main logo grundriss schmiede"}
          width={130}
          height={41}
          style={{
            objectFit: "contain",
            width: "130px",
            height: "41px",
          }}
          priority={true}
          className="cursor-pointer"
        />
        <div className="hidden items-center gap-12 lg:flex">
          <NavigationMenu
            trigger={t("floorPlans")}
            content={
              <>
                <MenuLink href={"/admin"} title={t("salesOptimized")} />
                <Separator />
                <MenuLink href={"#"} title={t("sized")} />
                <Separator />
                <MenuLink href={"#"} title={t("measuringService")} />
                <Separator />
                <MenuLink href={"#"} title={t("individual")} />
                <Separator />
                <MenuLink href={"#"} title={t("floorPlanDesigns")} />
              </>
            }
          />
          <NavigationMenu
            trigger={t("threeSixtyTour")}
            content={
              <>
                <MenuLink href={"#"} title={t("threeSixtyTour")} />
                <Separator />
                <MenuLink href={"#"} title={t("threeSixtyTourService")} />
              </>
            }
          />
          <NavigationMenu
            trigger={""}
            content={""}
            link="#"
            linkTitle="FAQ's"
          />
          <NavigationMenu
            trigger={""}
            content={""}
            link="#"
            linkTitle={t("contact")}
          />
        </div>
        <div className="hidden items-center gap-4 lg:flex">
          <MainLink href={"#"} title="Login" />
          <ChangeLanguage />
        </div>
        <div className="flex items-center lg:hidden">
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
