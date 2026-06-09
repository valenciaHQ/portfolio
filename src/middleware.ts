import createMiddleware from 'next-intl/middleware';
import { type NextRequest, NextResponse } from 'next/server';
import { routing } from './i18n/routing';

const intlMiddleware = createMiddleware(routing);

const SPANISH_COUNTRIES = new Set([
  'ES', 'MX', 'AR', 'CO', 'CL', 'PE', 'VE', 'EC',
  'BO', 'PY', 'UY', 'CR', 'PA', 'DO', 'GT', 'HN',
  'SV', 'NI', 'CU', 'PR',
]);
const LOCALE_COOKIE = 'NEXT_LOCALE';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const localeCookie = request.cookies.get(LOCALE_COOKIE)?.value;
  const hasLocalePrefix = routing.locales.some(
    (l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`)
  );

  if (localeCookie || hasLocalePrefix) {
    return intlMiddleware(request);
  }

  if (pathname === '/') {
    const geo = (request as NextRequest & { geo?: { country?: string } }).geo;
    const country = geo?.country?.toUpperCase();
    const acceptLang = request.headers.get('accept-language') ?? '';
    const primaryLang = acceptLang.split(',')[0]?.split('-')[0]?.toLowerCase();

    const isSpanish =
      (country && SPANISH_COUNTRIES.has(country)) ||
      (!country && primaryLang === 'es');

    const targetLocale = isSpanish ? 'es' : 'en';
    const url = request.nextUrl.clone();
    url.pathname = `/${targetLocale}`;

    const res = NextResponse.redirect(url);
    res.cookies.set(LOCALE_COOKIE, targetLocale, {
      path: '/',
      maxAge: 60 * 60 * 24 * 365,
    });
    return res;
  }

  return intlMiddleware(request);
}

export const config = {
  matcher: ['/((?!_next|api|.*\\..*).*)'],
};
