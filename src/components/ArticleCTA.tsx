export default function ArticleCTA() {
  return (
    <section className="mt-16 bg-blue-50 p-8 rounded-xl text-center">
      <h2 className="text-2xl font-bold mb-4">Ready for AI Protection?</h2>
      <p className="mb-6">Join ${(8214).toLocaleString('ru-RU')}+ freelancers using ToxicGuard</p>
      <a 
        href="/demo" 
        className="bg-black text-white px-8 py-3 rounded-full text-lg hover:opacity-90 transition-opacity"
      >
        Try Free Analysis →
      </a>
    </section>
  )
} 