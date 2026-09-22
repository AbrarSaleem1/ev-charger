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
  redirects: {
    '/services/tesla-wall-connector-installation-repair': '/services/tesla-wall-connector-repair',
    '/services/level-2-charger-installation': '/services/level-2-charger-repair',
    '/blog/ev-charger-installation-guide-los-gatos-homeowners': '/blog/ev-charger-repair-guide-los-gatos-homeowners',
    '/blog/outdoor-ev-charger-installation-weatherproofing-pedestals': '/blog/outdoor-ev-charger-repair-weatherproofing-pedestals',
  },
  build: {
    format: 'file',
  },
  vite: {
    css: {
      preprocessorOptions: {},
    },
  },
});
