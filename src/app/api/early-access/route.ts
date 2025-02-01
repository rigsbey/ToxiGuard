import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const body = await request.json();
  // Реальная логика обработки
  return NextResponse.json({ success: true });
} 