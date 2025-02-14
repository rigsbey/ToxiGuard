import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import { GeistSans } from 'geist/font/sans'
import '@/styles/globals.css'
import NavigationProvider from '@/components/NavigationProvider';

const inter = Inter({ subsets: ['latin'] })
const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk'
})

export const metadata: Metadata = {
  metadataBase: new URL('https://toxiguard.site'),
  title: {
    default: 'ToxiGuard - AI Client Risk Detection for Freelancers',
    template: '%s | ToxiGuard'
  },
  description: 'AI-powered protection against toxic clients and payment risks',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'ToxiGuard',
    images: [
      {
        url: '/og-blog.jpg',
        width: 1200,
        height: 630,
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@toxiguard',
  }
}

function ScrollHandler() {
  return null;
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Эмодзи фавикон */}
        <link 
          rel="icon" 
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🛡️</text></svg>"
        />
        {/* Fallback для старых браузеров */}
        <link
          rel="alternate icon"
          type="image/png"
          href="/favicon.png"
          sizes="32x32"
        />
        <link rel="canonical" href="https://toxiguard.site/" />
        <meta name="robots" content="index, follow" />
      </head>
      <body className={`${inter.className} ${GeistSans.className} bg-white`}>
        <NavigationProvider>
          {children}
        </NavigationProvider>
      </body>
    </html>
  )
} 