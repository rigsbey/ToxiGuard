import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  // Редирект только в продакшне
  if (process.env.NODE_ENV === 'production') {
    return NextResponse.redirect('https://toxiguard.site');
  }
  return NextResponse.next();
} 