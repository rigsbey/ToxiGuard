import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const url = request.nextUrl;
  const host = request.headers.get('host');
  
  // Редирект www → non-www
  if (host?.startsWith('www.')) {
    return NextResponse.redirect(
      `https://toxiguard.site${url.pathname}`,
      { status: 301 }
    );
  }

  // Проверяем, что мы в production среде
  if (process.env.NODE_ENV === 'production') {
    // Только HTTPS редирект
    if (url.protocol === 'http:') {
      return NextResponse.redirect(`https://toxiguard.site${url.pathname}`);
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