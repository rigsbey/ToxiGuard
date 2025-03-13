import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Блог ToxiGuard | Полезные советы для фрилансеров',
  description: 'Узнайте, как защитить свой бизнес от токсичных клиентов, избежать мошенничества и вести успешную фриланс-карьеру',
  keywords: ['фриланс блог', 'защита фрилансера', 'советы фрилансерам', 'токсичные клиенты', 'безопасный фриланс'],
  openGraph: {
    title: 'Блог ToxiGuard | Полезные советы для фрилансеров',
    description: 'Узнайте, как защитить свой бизнес от токсичных клиентов и вести успешную фриланс-карьеру',
    type: 'website',
    url: 'https://toxiguard.site/blog',
    images: [
      {
        url: '/images/blog-og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'ToxiGuard Blog - Советы для фрилансеров',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Блог ToxiGuard | Советы для фрилансеров',
    description: 'Полезные советы для безопасной работы на фрилансе',
    images: ['/images/blog-twitter-image.jpg'],
  },
}; 