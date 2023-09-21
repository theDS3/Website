import { defineConfig } from 'astro/config';

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site:"https://ds3-dev.netlify.app/",
  integrations: [sitemap()]
});