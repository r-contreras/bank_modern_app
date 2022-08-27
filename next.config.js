/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    loader: 'akamai',
    path: '/'
  },
  basePath: 'bank_modern_app',
  assetPrefix: 'bank_modern_app'
}

module.exports = nextConfig
