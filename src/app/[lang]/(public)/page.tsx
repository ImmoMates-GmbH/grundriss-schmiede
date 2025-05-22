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
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, labore.
        Dicta nobis nulla impedit at dolores repellat possimus qui asperiores
        aliquid suscipit ullam iusto laboriosam, deleniti dolorum labore!
        Facere?
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, labore.
        Dicta nobis nulla impedit at dolores repellat possimus qui asperiores
        aliquid suscipit ullam iusto laboriosam, deleniti dolorum labore!
        Facere?
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, labore.
        Dicta nobis nulla impedit at dolores repellat possimus qui asperiores
        aliquid suscipit ullam iusto laboriosam, deleniti dolorum labore!
        Facere?
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, labore.
        Dicta nobis nulla impedit at dolores repellat possimus qui asperiores
        aliquid suscipit ullam iusto laboriosam, deleniti dolorum labore!
        Facere?
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, labore.
        Dicta nobis nulla impedit at dolores repellat possimus qui asperiores
        aliquid suscipit ullam iusto laboriosam, deleniti dolorum labore!
        Facere?
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, labore.
        Dicta nobis nulla impedit at dolores repellat possimus qui asperiores
        aliquid suscipit ullam iusto laboriosam, deleniti dolorum labore!
        Facere?
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, labore.
        Dicta nobis nulla impedit at dolores repellat possimus qui asperiores
        aliquid suscipit ullam iusto laboriosam, deleniti dolorum labore!
        Facere?
      </p>
    </>
  );
}
