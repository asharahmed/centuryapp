/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
}

module.exports = withPWA({
  ...nextConfig,
  pwa: {
    dest: 'public',
    register: true,
    scope: '/',
    sw: 'service-worker.js',
    disable: process.env.NODE_ENV === 'development'
  }
})
