/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/webp'],
  },

  webpack: (config, { isServer }) => {
    if (isServer) {
      config.externals.push('skia-canvas');
    }

    return config;
  },
};

module.exports = nextConfig;
