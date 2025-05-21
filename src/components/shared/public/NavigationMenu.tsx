import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { MenuProps } from "@/types/public/interfaces/components";
import Link from "next/link";

const Menu = async ({ trigger, content, link, linkTitle }: MenuProps) => {
  return (
    <>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            {trigger && (
              <NavigationMenuTrigger>{trigger}</NavigationMenuTrigger>
            )}
            {content && (
              <NavigationMenuContent>{content}</NavigationMenuContent>
            )}
            {link && (
              <Link
                className="hover:text-primary text-text-navbar transition-[color]"
                href={link}
              >
                {linkTitle}
              </Link>
            )}
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </>
  );
};

export default Menu;
