import type { Locale } from "./locales";
import { en } from "./translations/en";
import { pt } from "./translations/pt";
import type { Translation } from "./translations/types";

export type { Translation } from "./translations/types";

const translations: Record<Locale, Translation> = {
  pt,
  en,
};

export function getTranslations(locale: Locale): Translation {
  return translations[locale];
}

export { type Locale, locales, defaultLocale, getLocaleFromRequest, createLocaleCookie, isLocale } from "./locales";
