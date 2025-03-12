import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const url = request.nextUrl;
  
  // Проверяем, что мы в production среде
  if (process.env.NODE_ENV === 'production') {
    // Только HTTPS редирект
    if (url.protocol === 'http:') {
      return NextResponse.redirect(`https://toxiguard.site${url.pathname}`);
    }
  }

  return NextResponse.next();
}

// Указываем, на каких путях должен срабатывать middleware
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - robots.txt
     * - sitemap.xml
     */
    '/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)',
  ],
} 