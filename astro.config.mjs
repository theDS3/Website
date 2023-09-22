import compress from 'astro-compress';
import { defineConfig } from 'astro/config';
import critters from 'astro-critters';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://ds3utsc.com/',
  integrations: [
    critters({
      pruneSource: true,
    }),
    sitemap(),
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
