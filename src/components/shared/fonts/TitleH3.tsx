import { Title } from "@/types/components";

const TitleH3 = ({ title, className }: Title) => {
  return (
    <h3 className={`font- scroll-m-20 text-2xl tracking-tight ${className}`}>
      {title}
    </h3>
  );
};

export default TitleH3;
