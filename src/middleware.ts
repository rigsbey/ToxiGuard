// TEMPORARY: All middleware functionality disabled to fix redirect loops
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // All functionality disabled
  return NextResponse.next();
}

// Minimizing path matching to essential files only
export const config = {
  matcher: [
    '/((?!_next|api|images|static|assets|favicon.ico|robots.txt|sitemap.xml).*)',
  ],
} 