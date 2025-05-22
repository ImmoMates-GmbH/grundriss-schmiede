"use server";

const dictionary = {
  en: () => import("../locales/en.json").then((module) => module.default),
  de: () => import("../locales/de.json").then((module) => module.default),
};

export const getSharedDictionary = async (locale: "de" | "en") =>
  dictionary[locale]();
