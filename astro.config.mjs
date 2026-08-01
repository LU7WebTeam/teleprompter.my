// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://teleprompter.my',
  base: '/preview/',
  output: 'static',
  integrations: [sitemap()],
  build: {
    format: 'directory',
  },
});
