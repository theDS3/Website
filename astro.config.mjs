import sitemap from '@astrojs/sitemap';
import compress from 'astro-compress';
import critters from 'astro-critters';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://ds3utsc.com/',
  integrations: [
    sitemap(),
    critters({
      pruneSource: true,
    }),
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
