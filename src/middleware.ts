"use server";

import { NextRequest, NextResponse } from "next/server";

const locales = ["de", "en"];

// Get the preferred locale, similar to the above or using a library
function getLocale(request: NextRequest) {
  const acceptLanguage = request.headers.get("accept-language");
  if (!acceptLanguage) return locales[0];

  const preferredLocales = acceptLanguage
    .split(",")
    .map((part) => part.split(";")[0].trim());

  const matchedLocale = preferredLocales.find((locale) =>
    locales.includes(locale),
  );

  return matchedLocale || locales[0];
}

export function middleware(request: NextRequest) {
  // Check if there is any supported locale in the pathname
  const { pathname } = request.nextUrl;
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
  );

  if (pathnameHasLocale) return;

  // Redirect if there is no locale
  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}/${pathname}`;
  // e.g. incoming request is /
  // The new URL is now /en-US/
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
    // Exclude API routes and static files
  ],
};
