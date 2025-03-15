const isDevelopment = process.env.NODE_ENV === 'development';
const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: false,
  images: {
    domains: ['toxiguard.site'],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  webpack: (config) => {
    config.plugins.push(
      new CopyPlugin({
        patterns: [
          {
            from: 'public/cJxB6xaxazRAHUhm1d7MgbgciM8QiVZY0Vg4TIwbhe8.html',
            to: '.'
          }
        ]
      })
    );
    return config;
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.toxiguard.site',
          },
        ],
        destination: 'https://toxiguard.site/:path*',
        permanent: true,
      },
    ];
  },
  experimental: {
    optimizeCss: true,
  }
};

console.log('ENV DEBUG:', {
  NODE_ENV: process.env.NODE_ENV,
  VERCEL_ENV: process.env.VERCEL_ENV,
  CI: process.env.CI
});

module.exports = nextConfig; 