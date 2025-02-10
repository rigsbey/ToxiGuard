'use client';

export function CommentsSection() {
  return (
    <div className="mt-12 pt-12 border-t border-gray-200">
      <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
        <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
        Обсуждение
      </h3>
      <div className="bg-blue-50/50 p-6 rounded-xl text-center">
        <p className="text-gray-600 text-sm">
          Система комментариев находится в разработке и будет доступна в ближайшее время
        </p>
      </div>
    </div>
  );
} 