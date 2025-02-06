import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import '@/styles/globals.css'

const inter = Inter({ subsets: ['latin'] })
const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk'
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL!),
  title: {
    default: 'ToxiGuard - AI Client Risk Detection for Freelancers',
    template: '%s | ToxiGuard Blog'
  },
  description: 'AI-powered protection against toxic clients and payment risks',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.toxiguard.site/',
    siteName: 'ToxiGuard',
    images: [{
      url: 'https://www.toxiguard.site/og-default.jpg',
      width: 1200,
      height: 630,
    }]
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
} 