import { JSX } from "react";

export interface MenuProps {
  trigger: string;
  content: string | JSX.Element | JSX.Element[];
  link?: string;
  linkTitle?: string;
}

export interface MainLinkProps {
  href: string;
  title: string;
}

export interface MenuLinkProps {
  href: string;
  title: string;
}

export interface FooterLinksProps {
  title: string;
  href: string;
}
