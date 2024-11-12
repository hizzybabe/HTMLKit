export const prerender = true;

export async function load({ fetch }) {
  // Get all .md files in the blog directory
  const blogPosts = import.meta.glob('./**/*.md');
  
  const posts = await Promise.all(
    Object.entries(blogPosts).map(async ([path, resolver]) => {
      const resolved = await resolver();
      const metadata = resolved.metadata;
      const relativePath = path.replace('./', '').replace('/+page.md', '');
      
      return {
        title: metadata.title,
        description: metadata.description,
        path: relativePath,
        date: metadata.date || new Date().toISOString().split('T')[0]
      };
    })
  );

  // Sort posts by date (newest first)
  return {
    posts: posts.sort((a, b) => new Date(b.date) - new Date(a.date))
  };
} 