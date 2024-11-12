<script>
  // Import any necessary components
</script>

<div class="blog-container">
  <h1>Blog Posts</h1>
  
  <div class="posts-grid">
    <article class="post-card">
      <h2><a href="/blog/first-post">Getting Started with Web Development</a></h2>
      <p class="post-meta">Published on January 1, 2024</p>
      <p class="post-excerpt">Learn the fundamentals of web development and start your journey as a developer.</p>
    </article>
    
    <article class="post-card">
      <h2><a href="/blog/second-post">Understanding Modern JavaScript</a></h2>
      <p class="post-meta">Published on January 15, 2024</p>
      <p class="post-excerpt">Dive deep into modern JavaScript features and best practices.</p>
    </article>
  </div>
</div>

<style>
  .blog-container {
    max-width: 800px;
    margin: 0 auto;
    padding: 2rem;
  }

  h1 {
    text-align: center;
    color: #333;
    margin-bottom: 2rem;
  }

  .posts-grid {
    display: grid;
    gap: 2rem;
  }

  .post-card {
    padding: 1.5rem;
    border: 1px solid #ddd;
    border-radius: 8px;
    transition: transform 0.2s ease;
  }

  .post-card:hover {
    transform: translateY(-2px);
  }

  .post-meta {
    color: #666;
    font-size: 0.9rem;
    margin: 0.5rem 0;
  }

  .post-excerpt {
    color: #444;
    line-height: 1.6;
  }

  a {
    color: #333;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
</style>
