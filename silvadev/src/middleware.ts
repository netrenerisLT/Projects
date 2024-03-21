import createMiddleware from "next-intl/middleware";
import { NextRequest, NextResponse } from "next/server";

const nextIntlMiddleware = createMiddleware({
  locales: ["en", "lt"],
  defaultLocale: "en",
});

export default function (req: NextRequest): NextResponse {
  return nextIntlMiddleware(req);
}

// export default createMiddleware({
//   // A list of all locales that are supported
//   locales: ['en', 'lt'],
//   // Used when no locale matches
//   defaultLocale: 'en'
// });

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(lt|en)/:path*']
};
