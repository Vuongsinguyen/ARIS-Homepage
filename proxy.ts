import createMiddleware from 'next-intl/middleware';
import { NextRequest } from 'next/server';

export default async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Handle direct auth routes without locale
  if (pathname.startsWith('/auth/')) {
    // Redirect to English locale by default
    const newUrl = new URL(`/en${pathname}`, request.url);
    return Response.redirect(newUrl);
  }

  // Handle other internationalization middleware
  return createMiddleware({
    locales: ['en', 'vi', 'ja'],
    defaultLocale: 'en'
  })(request);
}

export const config = {
  matcher: ['/', '/(vi|en|ja)/:path*', '/auth/:path*']
};
