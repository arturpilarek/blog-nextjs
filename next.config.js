/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    STORYBLOK_KEY: process.env.STORYBLOK_KEY,
  },
}

module.exports = nextConfig
