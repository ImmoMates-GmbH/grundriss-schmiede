"use server";

const dictionaries = {
  en: () =>
    import("../../../locales/admin/en.json").then((module) => module.default),
  de: () =>
    import("../../../locales/admin/de.json").then((module) => module.default),
};

export const getDictionary = async (locale: "de" | "en") =>
  dictionaries[locale]();
