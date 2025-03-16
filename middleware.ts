import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Временно отключаем все перенаправления
  return NextResponse.next();
}

export const config = {
  matcher: [
    // Применяем middleware только к основным страницам
    '/((?!api|_next/static|_next/image|assets|favicon.ico|robots.txt|sitemap.xml|google[a-zA-Z0-9_-]*).*)',
  ],
}; 