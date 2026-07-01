import { useFetcher } from "@remix-run/react";

import { useI18n } from "~/i18n/I18nProvider";
import type { Locale } from "~/i18n/locales";

export function LanguageSelector() {
  const { locale, t } = useI18n();
  const fetcher = useFetcher();

  const setLocale = (nextLocale: Locale) => {
    if (nextLocale === locale) return;

    fetcher.submit(
      { locale: nextLocale },
      { method: "post", action: "/set-locale" },
    );
  };

  return (
    <div
      className="flex items-center gap-2"
      role="group"
      aria-label={t.language.label}
    >
      {(["pt", "en"] as const).map((option) => (
        <button
          key={option}
          type="button"
          onClick={() => setLocale(option)}
          disabled={fetcher.state !== "idle"}
          aria-current={locale === option ? "true" : undefined}
          className={`text-sm font-semibold font-sans transition-colors ${
            locale === option
              ? "text-primary underline underline-offset-4"
              : "text-secondary/60 hover:text-secondary"
          }`}
        >
          {t.language[option]}
        </button>
      ))}
    </div>
  );
}
