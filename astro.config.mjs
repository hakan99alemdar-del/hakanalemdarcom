import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://hakanalemdarcom.hakanalemdar.workers.dev',
  // The blog used to be one page; it is now split per side.
  redirects: { '/blog': '/law/blog' },
  integrations: [sitemap({ filter: (page) => !page.includes('/404') })],
});
