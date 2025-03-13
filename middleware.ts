import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const userAgent = request.headers.get('user-agent') || '';
  
  // Не применять редиректы для Googlebot и других поисковых ботов
  if (userAgent.toLowerCase().match(/googlebot|bingbot|yandex|baiduspider/)) {
    return NextResponse.next();
  }
  
  const needsRedirect = url.hostname.startsWith('www.');
  
  if (needsRedirect) {
    url.hostname = url.hostname.replace('www.', '');
    return NextResponse.redirect(url, 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    // Исключаем статические файлы и Google верификационный файл
    '/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|google-verification).*)',
  ],
}; 