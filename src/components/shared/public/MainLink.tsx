import { MainLinkProps } from "@/types/public/interfaces/components";
import Link from "next/link";

const MainLink = ({ href, title }: MainLinkProps) => {
  return (
    <Link
      href={href}
      className="bg-primary text-text-secondary border-primary lg:hover:bg-background lg:hover:text-primary border-2 px-12 py-2 font-semibold tracking-wider shadow-xs transition-all duration-300 *:h-9"
    >
      {title}
    </Link>
  );
};

export default MainLink;
