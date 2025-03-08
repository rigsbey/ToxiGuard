const isDevelopment = process.env.NODE_ENV === 'development';
const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
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
  }
};

console.log('ENV DEBUG:', {
  NODE_ENV: process.env.NODE_ENV,
  VERCEL_ENV: process.env.VERCEL_ENV,
  CI: process.env.CI
});

module.exports = nextConfig; 