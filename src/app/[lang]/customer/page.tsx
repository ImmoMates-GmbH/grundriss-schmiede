import { getDictionary } from "./dictionaries";

const page = async ({ params }: { params: Promise<{ lang: "de" | "en" }> }) => {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  return (
    <div>
      <h1>{dict.customer.title}</h1>
    </div>
  );
};

export default page;
