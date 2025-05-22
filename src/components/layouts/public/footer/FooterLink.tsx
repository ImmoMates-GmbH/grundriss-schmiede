import { FooterLinksProps } from "@/types/public/interfaces/components";
import Link from "next/link";

const FooterLink = ({ title, href }: FooterLinksProps) => {
  return (
    <Link
      className="text-text-navbar md:hover:text-primary transition-all duration-200"
      href={href}
    >
      {title}
    </Link>
  );
};

export default FooterLink;
