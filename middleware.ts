import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  
  // Проверяем, нужна ли переадресация
  if (url.hostname.startsWith('www.')) {
    url.hostname = url.hostname.replace('www.', '');
    return NextResponse.redirect(url, {
      status: 301,
      headers: {
        'Cache-Control': 'public, max-age=31536000, immutable'
      }
    });
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    // Применяем middleware только к основным страницам
    '/((?!api|_next/static|_next/image|assets|favicon.ico|robots.txt|sitemap.xml|google[a-zA-Z0-9_-]*).*)',
  ],
}; 