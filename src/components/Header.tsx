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

          {/* Добавить Product Hunt бейдж */}
          <a 
            href="https://www.producthunt.com/posts/toxiguard?embed=true&utm_source=badge-featured&utm_medium=badge&utm_souce=badge-toxiguard" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hidden md:block hover:scale-105 transition-transform"
          >
            <img 
              src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=878779&theme=light&t=1739570380193" 
              alt="ToxiGuard - AI-Powered Risk Scanner for Freelancers | Product Hunt"
              style={{ width: '250px', height: '54px' }}
              width="250"
              height="54"
            />
          </a>

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