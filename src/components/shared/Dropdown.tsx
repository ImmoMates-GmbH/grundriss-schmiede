import { DropdownProps } from "@/types/components";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

const Dropdown = ({ items, className }: DropdownProps) => {
  return (
    <Accordion type="single" collapsible className="w-full">
      {items?.map((item, i: number) => {
        return (
          <AccordionItem className={className} value={item.value} key={i}>
            <AccordionTrigger>{item.trigger}</AccordionTrigger>
            <AccordionContent className="text-lg">
              {item.content}
            </AccordionContent>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
};

export default Dropdown;
