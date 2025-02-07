const isDevelopment = process.env.NODE_ENV === 'development';

module.exports = {
  output: 'standalone',
  productionBrowserSourceMaps: true,
  compress: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 86400,
    domains: [
      'toxiguard.site',
      'toxiguard.vercel.app',
      'www.toxiguard.site'
    ],
  },
  async headers() {
    return [
      {
        source: '/sitemap.xml',
        headers: [
          {
            key: 'Content-Type',
            value: 'application/xml',
          },
        ],
      },
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: process.env.NODE_ENV === 'development' 
              ? `default-src 'self' 'unsafe-eval' 'unsafe-inline'; script-src 'self' 'unsafe-eval' 'unsafe-inline' *.googletagmanager.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self' *.googleapis.com *.vercel.app *.toxiguard.site; frame-src 'none';`
              : `default-src 'self'; script-src 'self' 'unsafe-inline' *.googletagmanager.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self' *.googleapis.com *.vercel.app *.toxiguard.site; frame-src 'none';`
          },
          { 
            key: 'CDN-Cache-Control', 
            value: 'public, s-maxage=3600, stale-while-revalidate=300' 
          }
        ]
      }
    ]
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    serverActions: {
      allowedOrigins: ['toxiguard.site', '*.toxiguard.site']
    },
    cpus: isDevelopment ? 1 : 2,
  },
  async redirects() {
    return [];
  },
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: `https://toxiguard.site/:path*`,
        has: [{ type: 'host', value: 'toxiguard.site' }]
      }
    ]
  }
};

console.log('ENV DEBUG:', {
  NODE_ENV: process.env.NODE_ENV,
  VERCEL_ENV: process.env.VERCEL_ENV,
  CI: process.env.CI
}); 