import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  
  // 1. Убираем www
  if (url.hostname.startsWith('www.')) {
    url.hostname = url.hostname.replace('www.', '');
    return NextResponse.redirect(url, 301);
  }

  // 2. Добавляем trailing slash
  if (!url.pathname.endsWith('/') && !url.pathname.match(/\.[^/]+$/)) {
    url.pathname = `${url.pathname}/`;
    return NextResponse.redirect(url, 308);
  }

  // 3. Обработка языковых редиректов
  const locale = request.cookies.get('NEXT_LOCALE')?.value;
  const isDefaultLocale = locale === 'en' || !locale;
  
  if (isDefaultLocale && url.pathname.startsWith('/en/')) {
    url.pathname = url.pathname.replace('/en/', '/');
    return NextResponse.redirect(url, 308);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    // Исключаем статические файлы
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}; 