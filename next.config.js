module.exports = {
  output: 'standalone',
  productionBrowserSourceMaps: true,
  compress: true,
  optimizeFonts: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 86400,
    domains: ['toxiguard.site', 'toxiguard.vercel.app'],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: `default-src 'self'; script-src 'self' 'unsafe-inline' *.googletagmanager.com; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self'; connect-src 'self' *.googleapis.com *.vercel.app; frame-src 'none';`
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
    }
  },
  async redirects() {
    return [];
  }
};

console.log('ENV DEBUG:', {
  NODE_ENV: process.env.NODE_ENV,
  VERCEL_ENV: process.env.VERCEL_ENV,
  CI: process.env.CI
}); 