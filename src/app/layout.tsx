import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '🛡️ToxiGuard',
  description: 'AI-Powered Risk Scanner for Freelancers',
};

// Клиентский компонент для провайдеров
function ClientLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🛡️</text></svg>" />
      </head>
      <body className={inter.className}>
        <main>{children}</main>
      </body>
    </html>
  );
} 