/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
import './src/env/client.mjs';
import './src/env/server.mjs';

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

export default nextConfig;
