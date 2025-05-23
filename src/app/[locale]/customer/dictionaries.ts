"use server";

const dictionaries = {
  en: () =>
    import("../../../../messages/customer/en.json").then(
      (module) => module.default,
    ),
  de: () =>
    import("../../../../messages/customer/de.json").then(
      (module) => module.default,
    ),
};

export const getDictionary = async (locale: "de" | "en") =>
  dictionaries[locale]();
