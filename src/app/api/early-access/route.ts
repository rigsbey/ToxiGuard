import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    if (!body.email || !body.email.includes('@')) {
      return NextResponse.json(
        { error: 'Valid email required' },
        { status: 400 }
      );
    }
    
    // Реальная логика обработки
    return NextResponse.json({ success: true });
    
  } catch (error) {
    return NextResponse.json(
      { error: 'Invalid request format' },
      { status: 400 }
    );
  }
} 