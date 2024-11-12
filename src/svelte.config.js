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
      base: ''
    }
  },
  extensions: ['.svelte', '.md', '.svx', '.mdx'],
  preprocess: [
    vitePreprocess(),
    mdsvex({
      extensions: ['.md', '.svx', '.mdx'],
      layout: {
        _: path.join(process.cwd(), 'src/lib/layouts/DefaultLayout.svelte'),
        library: path.join(process.cwd(), 'src/lib/layouts/nochecklayout.svelte')
      }
    })
  ]
};

export default config; 