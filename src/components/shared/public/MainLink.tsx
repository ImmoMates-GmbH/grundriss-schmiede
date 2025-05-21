import { MainLinkProps } from "@/types/public/interfaces/components";
import Link from "next/link";

const MainLink = ({ href, title }: MainLinkProps) => {
  return (
    <Link
      href={href}
      className="bg-primary text-text-secondary border-primary hover:bg-background hover:text-primary border-2 px-4 py-2 font-semibold tracking-wider shadow-xs transition-all duration-300 *:h-9 lg:px-12"
    >
      {title}
    </Link>
  );
};

export default MainLink;
