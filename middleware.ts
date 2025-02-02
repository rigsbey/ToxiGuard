import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  console.log('🔍 Request:', {
    url: request.url,
    headers: Object.fromEntries(request.headers),
    nextUrl: request.nextUrl.toString()
  });
  
  return NextResponse.next();
}

export const config = {
  matcher: '/:path*',
} 