/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'Giezen Consulting',
    description: 'Giezen Consulting Kasm supported workspaces.',
    icon: '/img/logo.svg',
    listUrl: 'https://denver-cfman.github.io/kasm-registry/',
    contactUrl: 'https://support.giezenconsulting.com',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
