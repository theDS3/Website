import compress from "astro-compress";
import { defineConfig } from 'astro/config';

import critters from "astro-critters";

// https://astro.build/config
export default defineConfig({
  integrations: [
    critters({
      pruneSource: true
    }),
    compress({
      CSS: true,
      HTML: {
        removeAttributeQuotes: false
      },
      Image: false,
      JavaScript: true,
      Logger: 1
    })
  ]
});