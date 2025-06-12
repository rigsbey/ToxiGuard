export default function NotFound() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-24 text-center">
      <h1 className="text-5xl font-extrabold mb-6">404 – страница не найдена</h1>
      <p className="text-gray-600 mb-10">
        К сожалению, такой страницы не существует или она была перемещена.<br />
        Используйте ссылки ниже, чтобы продолжить работу с сайтом.
      </p>

      <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
        <a
          href="/"
          className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition-colors"
        >На главную</a>
        <a
          href="/blog"
          className="inline-flex items-center justify-center px-6 py-3 bg-gray-100 text-gray-800 rounded-lg shadow hover:bg-gray-200 transition-colors"
        >Блог</a>
        <a
          href="mailto:toxiguard.post@gmail.com"
          className="inline-flex items-center justify-center px-6 py-3 bg-gray-100 text-gray-800 rounded-lg shadow hover:bg-gray-200 transition-colors"
        >Связаться</a>
      </div>

      <p className="text-sm text-gray-400">
        Ошибка? <a href="mailto:toxiguard.post@gmail.com" className="underline">Сообщите нам</a>
      </p>
    </div>
  );
} 