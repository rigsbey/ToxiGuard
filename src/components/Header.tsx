import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-white">
      <div className="max-w-6xl mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link href="/" className="text-gray-800 hover:text-blue-600 transition-colors">
              Home
            </Link>
            <Link href="/demo" className="text-gray-800 hover:text-blue-600 transition-colors">
              Live Demo
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header; 