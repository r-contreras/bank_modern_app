/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    loader: 'akamai',
    path: '/'
  },
  basePath: '/bank_modern_app',
  assetPrefix: '/bank_modern_app',
  webpack: (config, options) => {
    config.module.rules.push(
      {
        test: /\.js$/,
        include: [
          /node_modules/
        ],
        loader: 'babel-loader'
      }
    )
  }
}

module.exports = nextConfig
