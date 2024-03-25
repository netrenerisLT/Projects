import createMiddleware from "next-intl/middleware";
// import { NextRequest, NextResponse } from "next/server";
import { locales, localePrefix } from "./config";

// const nextIntlMiddleware = createMiddleware({
//   locales: ["en", "lt"],
//   defaultLocale: "en",
// });

export default createMiddleware({
  defaultLocale: "en",
  localePrefix,
  locales,
});

// export default function (req: NextRequest): NextResponse {
//   return nextIntlMiddleware(req);
// }

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(lt|en)/:path*"],
};
