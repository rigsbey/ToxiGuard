export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://toxiguard.site'),
  title: 'ToxiGuard - AI Protection for Freelancers',
  description: 'AI-powered protection system against toxic projects and payment risks',
  openGraph: {
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
      }
    ]
  }
}; 