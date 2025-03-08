export default function BlogSection() {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Latest Updates</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Заглушка для будущих статей */}
          <div className="bg-gray-50 p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-4">New Features Coming Soon</h3>
            <p className="text-gray-600">Stay tuned for exciting updates about our AI detection system.</p>
          </div>
        </div>
      </div>
    </section>
  );
} 