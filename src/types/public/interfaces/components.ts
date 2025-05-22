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

export interface SidebarProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  dict: Record<string, any>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  sharedDict: Record<string, any>;
}

export interface FooterLinksProps {
  title: string;
  href: string;
}
