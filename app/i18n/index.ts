import type { Locale } from "./locales";
import { en } from "./translations/en";
import { pt } from "./translations/pt";

export type Translation = typeof pt;

const translations: Record<Locale, Translation> = {
  pt,
  en,
};

export function getTranslations(locale: Locale): Translation {
  return translations[locale];
}

export { type Locale, locales, defaultLocale, getLocaleFromRequest, createLocaleCookie, isLocale } from "./locales";
