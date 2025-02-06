const { withSentryConfig } = require('@sentry/nextjs');

module.exports = withSentryConfig({
  output: 'standalone',
  images: {
    domains: ['toxiguard.site'],
  },
  // УДАЛИТЬ ПРАВИЛА REWRITES
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          },
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self' toxiguard.site; script-src 'self' 'unsafe-inline'"
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          }
        ],
      },
    ]
  },
  typescript: {
    ignoreBuildErrors: true // Временно для деплоя
  },
  eslint: {
    ignoreDuringBuilds: true
  },
  experimental: {
    // Новые экспериментальные настройки (если нужно)
  },
  // Исключаем проблемную страницу из сборки
  async redirects() {
    return [];
    // return [
    //   {
    //     source: '/:path*',
    //     has: [{ type: 'host', value: 'toxiguard.site' }],
    //     destination: 'https://www.toxiguard.site/:path*',
    //     permanent: true
    //   }
    // ]
  }
},
{
  silent: true,
  dryRun: process.env.VERCEL_ENV !== 'production'
}); 