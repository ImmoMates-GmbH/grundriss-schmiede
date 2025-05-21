import { getDictionary } from "@/lib/public/dictionaries";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: "de" | "en" }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  return (
    <>
      <h1 className="text-primary">{dict.homePage.title}</h1>
    </>
  );
}
