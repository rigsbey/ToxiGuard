import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const url = request.nextUrl;
  const host = request.headers.get('host') || '';
  
  // Проверяем, что мы в production среде
  if (process.env.NODE_ENV === 'production') {
    // Редирект с www на non-www (если хост начинается с www)
    if (host.startsWith('www.')) {
      return NextResponse.redirect(
        `https://toxiguard.site${url.pathname}${url.search}`,
        { 
          status: 301,
          headers: {
            'Cache-Control': 'public, max-age=31536000',
            'Strict-Transport-Security': 'max-age=31536000; includeSubDomains'
          }
        }
      );
    }
    
    // Редирект с HTTP на HTTPS (если протокол http)
    if (url.protocol === 'http:') {
      return NextResponse.redirect(
        `https://toxiguard.site${url.pathname}${url.search}`,
        { status: 301 }
      );
    }
  }

  // Редирект удаленных страниц
  const removedPaths = ['/how-it-works', '/blog', '/waitlist'];
  if (removedPaths.includes(url.pathname)) {
    return NextResponse.redirect('https://toxiguard.site/', { status: 301 });
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