export const prerender = true;

export async function load() {
  // Static list of blog posts
  const posts = [
    {
      title: "Astro vs Next.js",
      description: "A detailed comparison of Astro and Next.js for your next project",
      path: "astro-vs-nextjs",
      date: "2024-03-14"
    },
    // Add more blog posts here as needed
  ];

  return {
    posts
  };
} 