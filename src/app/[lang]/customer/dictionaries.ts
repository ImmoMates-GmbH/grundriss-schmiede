"use server";

const dictionaries = {
  en: () =>
    import("../../../locales/customer/en.json").then(
      (module) => module.default,
    ),
  de: () =>
    import("../../../locales/customer/de.json").then(
      (module) => module.default,
    ),
};

export const getDictionary = async (locale: "de" | "en") =>
  dictionaries[locale]();
