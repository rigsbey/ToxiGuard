export function Footer() {
  return (
    <footer className="border-t bg-gray-50 mt-24">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 text-sm">
          {/* Logo and description */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold">ToxicGuard</span>
            </div>
            <p className="text-gray-600">
              AI protection for freelancers and agencies
            </p>
            <p className="text-gray-500 text-xs">
              © {new Date().getFullYear()} ToxicGuard. All rights reserved
            </p>
          </div>

          {/* Product */}
          <div className="space-y-3">
            <h3 className="font-semibold mb-2">Product</h3>
            <nav className="space-y-2">
              <a href="/how-it-works" className="block hover:text-blue-600">How It Works</a>
              <a href="/blog" className="block hover:text-blue-600">Blog</a>
              <a href="/faq" className="block hover:text-blue-600">FAQ</a>
            </nav>
          </div>

          {/* Support */}
          <div className="space-y-3">
            <h3 className="font-semibold mb-2">Support</h3>
            <nav className="space-y-2">
              <a 
                href="mailto:toxiguard.post@gmail.com" 
                className="block hover:text-blue-600"
              >
                toxiguard.post@gmail.com
              </a>
            </nav>
          </div>

          {/* Legal */}
          <div className="space-y-3">
            <h3 className="font-semibold mb-2">Legal</h3>
            <nav className="space-y-2">
              <a href="/terms" className="block hover:text-blue-600">Terms of Service</a>
              <a href="/privacy" className="block hover:text-blue-600">Privacy Policy</a>
            </nav>
          </div>
        </div>

        {/* Mobile copyright */}
        <div className="mt-8 md:hidden text-center text-gray-500 text-xs">
          <p>Built with ❤️ by ToxicGuard Team</p>
        </div>
      </div>
    </footer>
  );
} 