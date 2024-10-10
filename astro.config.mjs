import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
// import vercel from '@astrojs/vercel/static';

// https://astro.build/config
export default defineConfig({
  outDir: './dist',
  cacheDir: './my-custom-cache-directory',
  output: 'static',
  integrations: [mdx(), sitemap(), tailwind()],
  markdown: {
    // Can be 'shiki' (default), 'prism' or false to disable highlighting
    syntaxHighlight: 'shiki',
  },
  // adapter: vercel(),
});
