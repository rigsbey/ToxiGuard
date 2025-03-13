import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const userAgent = request.headers.get('user-agent') || '';
  
  // Не применять редиректы для Googlebot
  if (userAgent.toLowerCase().includes('googlebot')) {
    return NextResponse.next();
  }
  
  const needsRedirect = url.hostname.startsWith('www.') || 
    (!url.pathname.endsWith('/') && !url.pathname.match(/\.[^/]+$/));
  
  if (needsRedirect) {
    // Логирование для отслеживания редиректов
    console.log(`Редирект: ${request.nextUrl.toString()} -> начало обработки`);

    // 1. Убираем www
    if (url.hostname.startsWith('www.')) {
      url.hostname = url.hostname.replace('www.', '');
      console.log(`Убрали www: ${url.toString()}`);
    }

    // 2. Добавляем trailing slash
    if (!url.pathname.endsWith('/') && !url.pathname.match(/\.[^/]+$/)) {
      url.pathname = `${url.pathname}/`;
      console.log(`Добавили trailing slash: ${url.toString()}`);
    }

    // Используем единый 301 редирект для лучшей индексации
    console.log(`Финальный редирект на: ${url.toString()}`);
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