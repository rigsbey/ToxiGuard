const isDevelopment = process.env.NODE_ENV === 'development';
const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  images: {
    unoptimized: false,
    domains: ['toxiguard.site'],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  env: {
    NEXT_EXPORT_MODE: 'true',
  },
  webpack: (config) => {
    config.plugins.push(
      new CopyPlugin({
        patterns: [
          {
            from: 'public/googlee5bfa023f20e3180.html',
            to: 'out/'
          }
        ]
      })
    );
    return config;
  },
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
  async redirects() {
    return [
      {
        source: '/how-it-works',
        destination: '/',
        permanent: true
      },
      {
        source: '/blog',
        destination: '/',
        permanent: true
      },
      {
        source: '/waitlist',
        destination: '/',
        permanent: true
      }
    ]
  },
  async headers() {
    return [
      {
        source: '/sitemap.xml',
        headers: [{ 
          key: 'Content-Type', 
          value: 'application/xml' 
        }]
      },
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          }
        ]
      }
    ]
  }
};

console.log('ENV DEBUG:', {
  NODE_ENV: process.env.NODE_ENV,
  VERCEL_ENV: process.env.VERCEL_ENV,
  CI: process.env.CI
});

module.exports = nextConfig; 