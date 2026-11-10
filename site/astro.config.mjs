import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://xaviiromf.github.io',
  base: '/designs-x-personal-taste',
  trailingSlash: 'always',
  output: 'static',
  build: { format: 'directory' },
});
