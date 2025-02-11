import Link from 'next/link';

const Header = () => {
  return (
    <header className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          {/* Логотип и название */}
          <Link href="/" className="flex items-center gap-2">
            <img src="/images/shield-icon.svg" alt="ToxiGuard" className="w-8 h-8" />
            <span className="font-bold text-xl">ToxiGuard</span>
          </Link>

          {/* Навигационные ссылки */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/create" className="text-gray-600 hover:text-gray-900 transition-colors">
              Analyze
            </Link>
            <Link href="/explore" className="text-gray-600 hover:text-gray-900 transition-colors">
              Features
            </Link>
            <Link href="/pricing" className="text-gray-600 hover:text-gray-900 transition-colors">
              Pricing
            </Link>
            <Link href="/faq" className="text-gray-600 hover:text-gray-900 transition-colors">
              FAQ
            </Link>
          </div>

          {/* Кнопка Join Waitlist */}
          <Link 
            href="/waitlist" 
            className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-colors"
          >
            Join Waitlist
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header; 