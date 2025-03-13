import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://toxiguard.site'),
  title: 'ToxiGuard | AI Protection Against Toxic Clients for Freelancers',
  description: 'Protect your freelance business with AI-powered risk analysis. Identify toxic clients, secure payments, and avoid problematic projects before it\'s too late.',
  keywords: ['freelance protection', 'toxic client detection', 'AI for freelancers', 'upwork risk analysis', 'freelance payment security', 'client risk assessment', 'freelancer tools', 'prevent payment scams'],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://toxiguard.site',
    siteName: 'ToxiGuard',
    title: 'ToxiGuard | AI Protection Against Toxic Clients for Freelancers',
    description: 'Protect your freelance business with AI-powered risk analysis. Identify toxic clients, secure payments, and avoid problematic projects before it\'s too late.',
    images: [
      {
        url: '/images/toxiguard-og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'ToxiGuard - AI Protection for Freelancers',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ToxiGuard | AI Protection for Freelancers',
    description: 'Protect your freelance business with AI-powered risk analysis',
    images: ['/images/toxiguard-twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://toxiguard.site',
  },
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
        <link rel="canonical" href="https://toxiguard.site" />
        <meta name="google-site-verification" content="cJxB6xaxazRAHUhm1d7MgbgciM8QiVZY0Vg4TIwbhe8" />
        {/* Структурированные данные для лучшей индексации */}
        <Script
          id="schema-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'SoftwareApplication',
              'name': 'ToxiGuard',
              'description': 'AI-powered protection system against toxic projects and payment risks for freelancers',
              'applicationCategory': 'BusinessApplication',
              'offers': {
                '@type': 'Offer',
                'price': '0',
                'priceCurrency': 'USD'
              },
              'operatingSystem': 'Web',
              'url': 'https://toxiguard.site'
            })
          }}
        />
      </head>
      <body className={inter.className}>
        <main>{children}</main>
      </body>
    </html>
  );
} 