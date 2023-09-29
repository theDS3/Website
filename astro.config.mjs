import sitemap from '@astrojs/sitemap';
import compress from 'astro-compress';

import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://ds3utsc.com/',
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
