export const locales = ["pt", "en"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "pt";

export const localeCookieName = "locale";

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

function getCookie(request: Request, name: string): string | null {
  const cookieHeader = request.headers.get("Cookie");
  if (!cookieHeader) return null;

  const match = cookieHeader.match(new RegExp(`(?:^|; )${name}=([^;]*)`));
  return match ? decodeURIComponent(match[1]) : null;
}

function getPreferredLocaleFromHeader(acceptLanguage: string | null): Locale {
  if (!acceptLanguage) return defaultLocale;

  const languages = acceptLanguage
    .split(",")
    .map((part) => {
      const [lang, qPart] = part.trim().split(";q=");
      const q = qPart ? parseFloat(qPart) : 1;
      return { lang: lang.toLowerCase(), q };
    })
    .sort((a, b) => b.q - a.q);

  for (const { lang } of languages) {
    if (lang.startsWith("en")) return "en";
    if (lang.startsWith("pt")) return "pt";
  }

  return defaultLocale;
}

export function getLocaleFromRequest(request: Request): Locale {
  const cookieLocale = getCookie(request, localeCookieName);
  if (cookieLocale && isLocale(cookieLocale)) return cookieLocale;

  return getPreferredLocaleFromHeader(request.headers.get("Accept-Language"));
}

export function createLocaleCookie(locale: Locale): string {
  return `${localeCookieName}=${locale}; Path=/; Max-Age=31536000; SameSite=Lax`;
}
