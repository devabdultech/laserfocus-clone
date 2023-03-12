/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['api.producthunt.com'],
    dangerouslyAllowSVG: true,
  },
}

module.exports = nextConfig
