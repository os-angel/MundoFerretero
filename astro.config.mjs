import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://mundoferreterogt.com',
  integrations: [sitemap()],
  output: 'static',
});
