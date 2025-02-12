// Удалены динамические настройки и обращение к headers()
// import { headers } from 'next/headers';

// export const dynamic = 'force-dynamic'; // Убрано, чтобы страница могла генерироваться статически

// Эта страница больше не актуальна – возвращает информацию о недоступности контента
export default function ResourcesPage() {
  // Убрана серверная логика установки HTTP-заголовков, так как страница теперь статична
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-4">Страница удалена</h1>
      <p>К сожалению, запрошенный контент больше не доступен.</p>
    </div>
  );
} 