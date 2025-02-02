module.exports = {
  output: 'standalone',
  productionBrowserSourceMaps: true,
  images: {
    domains: ['toxiguard.site', 'toxiguard.vercel.app'],
  },
  async headers() {
    return [{
      source: '/(.*)',
      headers: [
        { 
          key: 'CDN-Cache-Control', 
          value: 'public, s-maxage=3600, stale-while-revalidate=300' 
        }
      ]
    }]
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