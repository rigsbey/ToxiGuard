import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://toxiguard.site'),
  title: 'ToxiGuard: AI Risk Shield for Upwork Freelancers & Agencies',
  description: 'Detect toxic clients on Upwork with ToxiGuard AI. Real-time risk analysis for freelancers and agencies. Payment protection and red flag alerts. Join 8214+ users who avoid bad clients.',
  keywords: ['freelance protection', 'toxic client detection', 'AI for freelancers', 'upwork risk analysis', 'agency client screening', 'client risk assessment', 'freelancer tools', 'prevent payment scams', 'upwork agency protection', 'upwork risk shield'],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://toxiguard.site',
    siteName: 'ToxiGuard',
    title: 'ToxiGuard: AI Risk Shield for Upwork Freelancers & Agencies',
    description: 'Detect toxic clients on Upwork with ToxiGuard AI. Real-time risk analysis for freelancers and agencies. Payment protection and red flag alerts. Join 8214+ users who avoid bad clients.',
    images: [
      {
        url: '/images/toxiguard-og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'ToxiGuard - AI Risk Shield for Upwork Freelancers & Agencies',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ToxiGuard: AI Risk Shield for Upwork Freelancers & Agencies',
    description: 'Detect toxic clients on Upwork with ToxiGuard AI. Real-time risk analysis for freelancers and agencies. Payment protection and red flag alerts.',
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
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="google-site-verification" content="cJxB6xaxazRAHUhm1d7MgbgciM8QiVZY0Vg4TIwbhe8" />
        {/* Заменяем на более подробную разметку SoftwareApplication */}
        <Script
          id="schema-software-application-main"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "ToxiGuard",
              "applicationCategory": "BusinessApplication",
              "operatingSystem": "Web, Chrome",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "8214",
                "bestRating": "5",
                "worstRating": "1"
              },
              "description": "Detect toxic clients on Upwork with ToxiGuard AI. Real-time risk analysis for freelancers and agencies. Payment protection and red flag alerts.",
              "screenshot": "https://toxiguard.site/images/screenshot1.png",
              "featureList": "Risk analysis, Payment protection, Red flag alerts, Agency account protection",
              "url": "https://toxiguard.site"
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