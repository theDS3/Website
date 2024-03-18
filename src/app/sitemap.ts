import { MetadataRoute } from 'next';

import { env } from '@/env/server.mjs';
import { pastFinalDatathonLeaderboard } from '@/utils/datathon';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: env.SITE_URL,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${env.SITE_URL}/datathon`,
      lastModified: new Date('2024-03-18'),
      changeFrequency: 'yearly',
      priority: 0.8,
    },
    {
      url: `${env.SITE_URL}/datathon/leaderboard`,
      lastModified: new Date('2024-03-18'),
      changeFrequency: 'yearly',
      priority: 0.6,
    },
    {
      url: `${env.SITE_URL}/datathon/leaderboard/private`,
      lastModified: new Date('2024-03-18'),
      changeFrequency: 'yearly',
      priority: 0,
    },
    {
      url: `${env.SITE_URL}/datathon/leaderboard/final`,
      lastModified: new Date('2024-03-18'),
      changeFrequency: 'yearly',
      priority: 0,
    },
    {
      url: `${env.SITE_URL}/datathon/leaderboard/past`,
      lastModified: pastFinalDatathonLeaderboard['2024'].timestamp,
      changeFrequency: 'yearly',
      priority: 0.7,
    },
  ];
}
