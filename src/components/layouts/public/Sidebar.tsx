import { ChangeLanguage, Dropdown } from "@/components/shared";
import MainLink from "@/components/shared/public/MainLink";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../../public/images/logos/main-logo.png";

const Sidebar = () => {
  const t = useTranslations("common");
  return (
    <Sheet>
      <SheetTrigger>
        <Menu size={36} />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>
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
          </SheetTitle>
        </SheetHeader>
        <Separator />
        <SheetDescription></SheetDescription>
        <Dropdown
          className="mx-4"
          items={[
            {
              value: "1",
              trigger: t("floorPlans"),
              content: (
                <>
                  <SheetClose asChild>
                    <Link className="text-lg" href="#">
                      {t("salesOptimized")}
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link className="text-lg" href="#">
                      {t("sized")}
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link className="text-lg" href="#">
                      {t("measuringService")}
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link className="text-lg" href="#">
                      {t("individual")}
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link className="text-lg" href="#">
                      {t("floorPlanDesigns")}
                    </Link>
                  </SheetClose>
                </>
              ),
            },
            {
              value: "2",
              trigger: t("threeSixtyTour"),
              content: (
                <>
                  <SheetClose asChild>
                    <Link className="text-lg" href="#">
                      {t("threeSixtyTour")}
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link className="text-lg" href="#">
                      {t("threeSixtyTourService")}
                    </Link>
                  </SheetClose>
                </>
              ),
            },
          ]}
        />
        <div className="mx-4">
          <Separator />
          <div className="px-10 py-3">
            <SheetClose asChild>
              <Link className="text-primary text-xl font-medium" href="#">
                FAQ&apos;s
              </Link>
            </SheetClose>
          </div>
          <Separator />
          <div className="px-10 py-3">
            <SheetClose asChild>
              <Link className="text-primary text-xl font-medium" href="#">
                {t("contact")}
              </Link>
            </SheetClose>
          </div>
          <Separator />
        </div>

        <div className="flex w-full items-center justify-center py-7">
          <SheetClose asChild>
            <MainLink href={"#"} title={"Login"} />
          </SheetClose>
        </div>

        <SheetFooter className="flex flex-wrap items-center justify-center gap-4">
          <SheetClose asChild>
            <Link className="text-text-navbar text-sm underline" href="#">
              {t("imprint")}
            </Link>
          </SheetClose>

          <SheetClose asChild>
            <Link className="text-text-navbar text-sm underline" href="#">
              {t("privacy")}
            </Link>
          </SheetClose>

          <SheetClose asChild>
            <Link className="text-text-navbar text-sm underline" href="#">
              {t("terms")}
            </Link>
          </SheetClose>

          <ChangeLanguage />
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default Sidebar;
