"use server";

const dictionaries = {
  en: () =>
    import("../../../../messages/admin/en.json").then(
      (module) => module.default,
    ),
  de: () =>
    import("../../../../messages/admin/de.json").then(
      (module) => module.default,
    ),
};

export const getDictionary = async (locale: "de" | "en") =>
  dictionaries[locale]();
