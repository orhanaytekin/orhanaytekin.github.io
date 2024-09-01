/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  basePath: isProd ? '/orhanaytekin' : '',
  assetPrefix: isProd ? '/orhanaytekin/' : '',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;