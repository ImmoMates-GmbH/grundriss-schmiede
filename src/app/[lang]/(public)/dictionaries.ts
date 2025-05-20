"use server";

const dictionaries = {
  en: () =>
    import("../../../locales/public/en.json").then((module) => module.default),
  de: () =>
    import("../../../locales/public/de.json").then((module) => module.default),
};

export const getDictionary = async (locale: "de" | "en") =>
  dictionaries[locale]();
