export const prerender = true;

export async function load({ fetch }) {
  const posts = await Promise.all([
    // Import your markdown blog posts
    import('../blog/astro-vs-nextjs/+page.md'),
    // Add more blog posts here as they're created
  ]).then(posts => {
    return posts.map(post => ({
      title: post.metadata.title,
      description: post.metadata.description,
      path: post.file.split('/').slice(-2)[0], // Gets the slug from the file path
    }));
  });

  return {
    posts
  };
} 