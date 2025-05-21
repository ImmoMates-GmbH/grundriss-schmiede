import { NavigationMenuLink } from "@/components/ui/navigation-menu";
import { MenuLinkProps } from "@/types/public/interfaces/components";
import Link from "next/link";

const MenuLink = ({ href, title }: MenuLinkProps) => {
  return (
    <NavigationMenuLink asChild>
      <Link className="pl-5" href={href}>
        {title}
      </Link>
    </NavigationMenuLink>
  );
};

export default MenuLink;
