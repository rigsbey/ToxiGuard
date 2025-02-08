export default function HowItWorksPage() {
  return (
    <div 
      id="how-it-works" 
      className="max-w-6xl mx-auto px-4 py-32 md:py-48 lg:py-56"
    >
      <h1 className="text-4xl md:text-6xl font-bold mb-12 md:mb-16">
        Stop Toxic Clients Before They Cost You $7k/Year
        <span className="block mt-6 text-2xl md:text-3xl text-blue-600 font-medium">
          AI-Powered Freelance Protection
        </span>
      </h1>
      
      <div className="space-y-40 md:space-y-56">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-8 bg-white rounded-xl shadow-lg">
            <div className="flex items-center gap-4 mb-4">
              <img src="/avatars/anna-d.jpg" className="w-12 h-12 rounded-full" alt="Anna D." />
              <div>
                <p className="font-bold">Anna D., UX Designer</p>
                <p className="text-sm text-gray-500">Saved $3k in 2 weeks</p>
              </div>
            </div>
            <p className="text-gray-600">
              "ToxicGuard показал 5 скрытых рисков в контракте. Отказалась от проекта 
              и через 2 дня нашла клиента на 40% дороже!"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 