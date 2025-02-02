import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const url = new URL(request.url);
  if (process.env.NODE_ENV === 'development') {
    return NextResponse.next();
  }
  return NextResponse.redirect('https://toxiguard.site');
} 