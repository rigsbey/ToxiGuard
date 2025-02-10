export function NewsletterForm() {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl">
      <h3 className="text-lg font-semibold mb-3">Подписка на обновления</h3>
      <p className="text-sm text-gray-600 mb-4">
        Получайте лучшие советы для фрилансеров раз в неделю
      </p>
      <div className="flex gap-3">
        <input 
          type="email"
          placeholder="Ваш email"
          className="flex-1 px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500"
        />
        <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 
                          transition-colors shadow-sm">
          Подписаться
        </button>
      </div>
    </div>
  );
} 