import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const host = request.headers.get('host') || '';
  
  // 1. Убираем www
  if (url.hostname.startsWith('www.')) {
    url.hostname = url.hostname.replace('www.', '');
    return NextResponse.redirect(url, 301);
  }
  
  // 2. Проверяем, что мы в production среде и обеспечиваем HTTPS
  if (process.env.NODE_ENV === 'production') {
    if (url.protocol === 'http:') {
      return NextResponse.redirect(`https://toxiguard.site${url.pathname}`, 301);
    }
  }

  // 3. Добавляем trailing slash
  if (!url.pathname.endsWith('/') && !url.pathname.match(/\.[^/]+$/)) {
    url.pathname = `${url.pathname}/`;
    return NextResponse.redirect(url, 308);
  }

  // 4. Редирект удаленных страниц
  const removedPaths = ['/how-it-works', '/blog', '/waitlist'];
  for (const path of removedPaths) {
    if (url.pathname === path || url.pathname === `${path}/`) {
      return NextResponse.redirect('https://toxiguard.site/', { status: 301 });
    }
  }

  // 5. Обработка языковых редиректов
  const locale = request.cookies.get('NEXT_LOCALE')?.value;
  const isDefaultLocale = locale === 'en' || !locale;
  
  if (isDefaultLocale && url.pathname.startsWith('/en/')) {
    url.pathname = url.pathname.replace('/en/', '/');
    return NextResponse.redirect(url, 308);
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
}; 