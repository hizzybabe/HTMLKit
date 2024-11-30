export const prerender = true;

export async function load({ url }) {
  const blogPosts = import.meta.glob('./**/*.md');
  
  // For individual blog post pages
  if (url.pathname !== '/blog') {
    const resolved = await blogPosts[`.${url.pathname}/+page.md`]();
    return {
      metadata: resolved.metadata
    };
  }
  
  // For the blog index page
  const posts = await Promise.all(
    Object.entries(blogPosts).map(async ([path, resolver]) => {
      const resolved = await resolver();
      const metadata = resolved.metadata || {};
      const relativePath = path.replace('./', '').replace('/+page.md', '');
      
      return {
        path: relativePath,
        title: metadata.title || 'Untitled Post',
        description: metadata.description || 'No description available',
        date: metadata.date
      };
    })
  );

  return {
    posts: posts.sort((a, b) => new Date(b.date || 0) - new Date(a.date || 0))
  };
} 