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

  webpack: (config) => {
    // Removes files from production build
    if (process.env.NODE_ENV === 'production') {

      // Removes the Leaderboard Seed Endpoint
      config.module.rules?.push({
        test: /src\/app\/api\/leaderboard\/seed/,
        loader: 'ignore-loader',
      });
    }

    return config;
  },
};

export default nextConfig;
