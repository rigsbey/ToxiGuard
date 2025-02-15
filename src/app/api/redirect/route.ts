import { NextResponse } from 'next/server';

// Определяем, работает ли приложение в режиме static export
const isExportMode = process.env.NEXT_EXPORT_MODE === 'true';

export async function GET(request: Request) {
  if (isExportMode) {
    // В режиме экспорта API routes не поддерживаются – возвращаем 404
    return new Response('Not Found', { status: 404 });
  } else {
    // Реальная логика API-роута для динамичного выполнения
    const host = request.headers.get('host');
    if (process.env.NODE_ENV === 'production' && !host?.includes('toxiguard.site')) {
      return NextResponse.redirect('https://toxiguard.site');
    }
    return NextResponse.next();
  }
}

// Если режим экспорта – force-static, иначе force-dynamic
export const dynamic = isExportMode ? 'force-static' : 'force-dynamic'; 