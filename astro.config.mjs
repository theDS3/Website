import sitemap from '@astrojs/sitemap';
import compress from 'astro-compress';

import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site:
    process.env.NODE_ENV === 'production'
      ? 'https://ds3utsc.com/'
      : 'https://dev.ds3utsc.com/',
  integrations: [
    process.env.NODE_ENV === 'production' && sitemap(),
    compress({
      CSS: true,
      HTML: {
        removeAttributeQuotes: false,
      },
      Image: false,
      JavaScript: true,
      Logger: 1,
    }),
  ],
});
