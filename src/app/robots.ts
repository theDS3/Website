import { MetadataRoute } from 'next';

import { env } from '@/env/server.mjs';
import { isDatathonWeek } from '@/utils/datathon';

/**
 * We do not want Search Crawlers to index our
 * development site only the production site.
 */
export default function robots(): MetadataRoute.Robots {
  // If it is Datathon Week, then include the Datathon Leaderboard URLs
  const datathonURLs = isDatathonWeek()
    ? [
        '/datathon/leaderboard',
        '/datathon/leaderboard/private',
        '/datathon/leaderboard/final',
      ]
    : [];

  const urls = [
    '/',
    '/datathon',
    '/datathon/leaderboard/past',
    ...datathonURLs,
  ];

  return {
    rules: {
      userAgent: '*', // match all bots
      allow: env.SITE_MODE === 'prod' ? urls : undefined,
      disallow: env.SITE_MODE === 'dev' ? urls : undefined,
    },
    sitemap: `${env.SITE_URL}/sitemap.xml`,
  };
}
