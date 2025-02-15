import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const url = request.nextUrl;
  
  // Редирект с www на non-www
  if (url.host.startsWith('www.')) {
    return NextResponse.redirect(
      `https://toxiguard.site${url.pathname}${url.search}`,
      { status: 301 }
    );
  }

  // Редирект удаленных страниц
  const removedPaths = ['/how-it-works', '/blog', '/waitlist'];
  if (removedPaths.includes(url.pathname)) {
    return NextResponse.redirect('https://toxiguard.site/', { status: 301 });
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}; 