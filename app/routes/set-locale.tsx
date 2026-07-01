import type { ActionFunctionArgs } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";

import { createLocaleCookie, isLocale } from "~/i18n/locales";

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const locale = formData.get("locale");

  if (typeof locale !== "string" || !isLocale(locale)) {
    return json({ error: "Invalid locale" }, { status: 400 });
  }

  const referer = request.headers.get("Referer") ?? "/";

  return redirect(referer, {
    headers: {
      "Set-Cookie": createLocaleCookie(locale),
    },
  });
}
