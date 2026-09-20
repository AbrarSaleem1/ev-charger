import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://losgatosevchargerrepair.com',
  integrations: [
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
    }),
  ],
  build: {
    format: 'file',
  },
  vite: {
    css: {
      preprocessorOptions: {},
    },
  },
});
