import sitemap from '@astrojs/sitemap';
import compress from 'astro-compress';
import compressor from 'astro-compressor';

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
      CSS: {
        comments: false,
      },
      HTML: {
        removeComments: true,
        minifyURLs: true,
      },
      Image: false,
      JavaScript: true,
      SVG: false,
      Logger: 1,
    }),
    compressor(),
  ],
});
