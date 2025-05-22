import { ChangeLanguage } from "@/components/shared";
import { MenuLink, NavigationMenu } from "@/components/shared/public";
import MainLink from "@/components/shared/public/MainLink";
import { Separator } from "@/components/ui/separator";
import { getSharedDictionary } from "@/lib/dictionaries";
import { getDictionary } from "@/lib/public/dictionaries";
import Image from "next/image";
import logo from "../../../../public/images/logos/main-logo.png";
import Sidebar from "./Sidebar";

const Navbar = async ({
  params,
}: {
  params: Promise<{ lang: "de" | "en" }>;
}) => {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const sharedDict = await getSharedDictionary(lang);
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
        <div className="hidden items-center gap-14 lg:flex">
          <NavigationMenu
            trigger={dict.common.floorPlans}
            content={
              <>
                <MenuLink href={"#"} title={dict.common.salesOptimized} />
                <Separator />
                <MenuLink href={"#"} title={dict.common.sized} />
                <Separator />
                <MenuLink href={"#"} title={dict.common.measuringService} />
                <Separator />
                <MenuLink href={"#"} title={dict.common.individual} />
                <Separator />
                <MenuLink href={"#"} title={dict.common.floorPlanDesigns} />
              </>
            }
          />
          <NavigationMenu
            trigger={dict.common.threeSixtyTour}
            content={
              <>
                <MenuLink href={"#"} title={dict.common.threeSixtyTour} />
                <Separator />
                <MenuLink
                  href={"#"}
                  title={dict.common.threeSixtyTourService}
                />
              </>
            }
          />
          <NavigationMenu
            trigger={""}
            content={""}
            link="#"
            linkTitle="FAQ's"
          />
        </div>
        <div className="hidden items-center gap-4 lg:flex">
          <MainLink href={"#"} title={"Login"} />
          <ChangeLanguage />
        </div>
        <div className="flex items-center lg:hidden">
          <Sidebar sharedDict={sharedDict} dict={dict} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
