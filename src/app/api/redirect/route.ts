import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const host = request.headers.get('host');
  if (process.env.NODE_ENV === 'production' && !host?.includes('toxiguard.site')) {
    return NextResponse.redirect('https://toxiguard.site');
  }
  return NextResponse.next();
} 