export const metadata = {
  title: 'How ToxiGuard Works: AI Protection Against Toxic Clients for Freelancers',
  description: 'Learn how ToxiGuard AI technology scans for red flags, analyzes client behavior, and protects your freelance business from payment risks and problem clients.',
  keywords: [
    'how toxiguard works',
    'AI client screening',
    'freelance protection system',
    'toxic client detection',
    'freelance risk analysis',
    'payment protection for freelancers'
  ],
  openGraph: {
    title: 'How ToxiGuard AI Protects Freelancers from Toxic Clients',
    description: 'Discover the 3-step process: Risk scanning, behavior analysis, and contract protection to save freelancers $7k/year.'
  }
};

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
              "ToxiGuard showed 5 hidden risks in the contract. I declined the project and found a client paying 40% more in just 2 days!"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 