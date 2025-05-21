"use server";

const dictionary = {
  en: () =>
    import("../../locales/public/en.json").then((module) => module.default),
  de: () =>
    import("../../locales/public/de.json").then((module) => module.default),
};

export const getDictionary = async (locale: "de" | "en") =>
  dictionary[locale]();
