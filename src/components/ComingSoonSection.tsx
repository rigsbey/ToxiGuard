export default function ComingSoonSection() {
  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-20">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <span className="bg-blue-50 text-primary-blue px-4 py-2 rounded-full text-sm font-medium">
          Coming Soon
        </span>
        <h2 className="text-3xl font-bold mt-6 mb-4">
          Be First to Get Access
        </h2>
        <p className="text-gray-600 mb-8">
          Leave your email and we'll notify you about the ToxiGuard launch with special early-bird offers.
        </p>
        <form className="flex gap-4 max-w-md mx-auto">
          <input
            type="email"
            placeholder="your@email.com"
            className="flex-1 px-4 py-3 rounded-full border focus:outline-none focus:ring-2 focus:ring-primary-blue"
          />
          <button className="bg-primary-blue text-white px-6 py-3 rounded-full hover:bg-blue-600 transition-colors">
            Notify Me
          </button>
        </form>
      </div>
    </section>
  );
} 