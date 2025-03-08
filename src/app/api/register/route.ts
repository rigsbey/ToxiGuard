import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { email, password } = await request.json();

  // Здесь вы можете добавить логику для сохранения пользователя в базе данных
  // Например, хеширование пароля и сохранение в MongoDB или другой БД

  return NextResponse.json({ message: 'Пользователь зарегистрирован' }, { status: 201 });
} 