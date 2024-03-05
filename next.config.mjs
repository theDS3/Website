/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
import './src/env/client.mjs';
import './src/env/server.mjs';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/webp'],
  },

  webpack: (config, { isServer }) => {
    // Adds `skia-canvas` from client bundle in development.
    if (process.env.NODE_ENV === 'development')
      if (isServer) config.externals.push('skia-canvas');

    /**
     * Certain a not required for the deployed site, but are required for local development.
     * These endpoints should never be accessible from the public site.
     *
     * Removes the following:
     *  - /volunteer endpoints (seed and generate)
     *  - /participant/export endpoint
     *  - /participant/seed endpoint
     */
    if (process.env.NODE_ENV === 'production') {
      config.module.rules?.push({
        test: /src\/app\/api\/volunteer/,
        loader: 'ignore-loader',
      });

      config.module.rules?.push({
        test: /src\/app\/api\/participant\/export/,
        loader: 'ignore-loader',
      });

      config.module.rules?.push({
        test: /src\/app\/api\/participant\/seed/,
        loader: 'ignore-loader',
      });

      config.module.rules?.push({
        test: /src\/app\/api\/participant\/emails/,
        loader: 'ignore-loader',
      });
    }

    return config;
  },
};

export default nextConfig;
