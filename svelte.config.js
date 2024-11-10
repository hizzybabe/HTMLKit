import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';
import path from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
      fallback: 'index.html'
    }),
    paths: {
      base: '/HTMLKit'
    }
  },
  extensions: ['.svelte', '.md', '.mdx'],
  preprocess: [
    vitePreprocess(),
    mdsvex({
      extensions: ['.md', '.mdx'],
      layout: path.join(process.cwd(), 'src/lib/layouts/DefaultLayout.svelte')
    })
  ]
};

export default config;