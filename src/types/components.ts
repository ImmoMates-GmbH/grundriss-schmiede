import { JSX } from "react";

interface DropdownItem {
  value: string;
  trigger: string;
  content: string | JSX.Element | JSX.Element[];
}

export interface DropdownProps {
  items: DropdownItem[];
  className?: string;
}
