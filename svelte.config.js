import adapter from '@sveltejs/adapter-static';

export default {
  kit: {
    adapter: adapter({
      pages: '.svelte-kit/output',
      assets: '.svelte-kit/output',
      fallback: '404.html',
      precompress: false,
      strict: true
    }),
    paths: {
      base: '/my-svelte-website'
    }
  }
};
