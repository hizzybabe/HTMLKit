/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts,md,mdx}'],
  theme: {
    extend: {}
  },
  plugins: [
    require('@tailwindcss/typography')
  ]
};
