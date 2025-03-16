import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  
  // Проверяем оба условия до выполнения редиректа
  if (url.hostname.startsWith('www.')) {
    url.hostname = url.hostname.replace('www.', '');
    return NextResponse.redirect(url, {
      status: 301,
      headers: {
        'Cache-Control': 'public, max-age=31536000, immutable'
      }
    });
  }
  
  // HTTP -> HTTPS только если не www. (чтобы избежать двойного редиректа)
  if (process.env.NODE_ENV === 'production' && url.protocol === 'http:' && !url.hostname.startsWith('www.')) {
    url.protocol = 'https:';
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