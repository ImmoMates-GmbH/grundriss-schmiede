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
import { SidebarProps } from "@/types/public/interfaces/components";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../../public/images/logos/main-logo.png";

const Sidebar = ({ dict, sharedDict }: SidebarProps) => {
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
              trigger: dict.common.floorPlans,
              content: (
                <>
                  <SheetClose asChild>
                    <Link className="text-lg" href="#">
                      {dict.common.salesOptimized}
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link className="text-lg" href="#">
                      {dict.common.sized}
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link className="text-lg" href="#">
                      {dict.common.measuringService}
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link className="text-lg" href="#">
                      {dict.common.individual}
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link className="text-lg" href="#">
                      {dict.common.floorPlanDesigns}
                    </Link>
                  </SheetClose>
                </>
              ),
            },
            {
              value: "2",
              trigger: dict.common.threeSixtyTour,
              content: (
                <>
                  <SheetClose asChild>
                    <Link className="text-lg" href="#">
                      {dict.common.threeSixtyTour}
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link className="text-lg" href="#">
                      {dict.common.threeSixtyTourService}
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
                {sharedDict.common.contact}
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
              {sharedDict.common.imprint}
            </Link>
          </SheetClose>

          <SheetClose asChild>
            <Link className="text-text-navbar text-sm underline" href="#">
              {sharedDict.common.privacy}
            </Link>
          </SheetClose>

          <SheetClose asChild>
            <Link className="text-text-navbar text-sm underline" href="#">
              {sharedDict.common.terms}
            </Link>
          </SheetClose>

          <ChangeLanguage />
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default Sidebar;
