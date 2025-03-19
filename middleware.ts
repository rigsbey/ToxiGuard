import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Проверяем URL запроса
  const url = request.nextUrl.clone();
  
  // Убедимся, что мы не обрабатываем запросы к статическим файлам и API
  if (url.pathname.startsWith('/_next') || 
      url.pathname.startsWith('/api') || 
      url.pathname.startsWith('/static') ||
      url.pathname.match(/\.(jpe?g|png|svg|ico|css|js|woff2?|xml|txt)$/)) {
    return NextResponse.next();
  }
  
  // Все остальные запросы обрабатываем как обычно
  return NextResponse.next();
}

export const config = {
  matcher: [
    // Применяем middleware только к основным страницам
    '/((?!api|_next/static|_next/image|assets|static|favicon.ico|robots.txt|sitemap.xml|google[a-zA-Z0-9_-]*).*)',
  ],
}; 