/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true
};

module.exports = {
    async redirects() {
      return [
        {
          source: '/test',
          destination: '/image-cdn',
          permanent: true,
        },
      ]
    },
  }
