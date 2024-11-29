<script>
  import { page } from '$app/stores';
  import '../app.css';
  
  export let data;
  const metadata = data?.metadata || {};
</script>

<div class="blog-layout">
  <nav>
    <a href="/">Home</a>
    <a href="/blog">Blog</a>
  </nav>

  <main>
    <article class="blog-post">
      <header class="post-header">
        <h1>{metadata.title || 'Untitled Post'}</h1>
        {#if metadata.date}
          <p class="post-meta">Published on {metadata.date}</p>
        {/if}
        {#if metadata.description}
          <p class="post-description">{metadata.description}</p>
        {/if}
      </header>
      
      <div class="post-content">
        <slot />
      </div>
    </article>
  </main>

  <footer>
    <p>© {new Date().getFullYear()} TechWizard Academy. All rights reserved.</p>
  </footer>
</div>

<style>
  .blog-layout {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  nav {
    background: linear-gradient(45deg, var(--primary), var(--secondary));
    padding: 1rem 2rem;
    display: flex;
    gap: 2rem;
  }

  nav a {
    color: white;
    text-decoration: none;
    font-weight: 500;
  }

  nav a:hover {
    text-decoration: underline;
  }

  main {
    flex: 1;
    max-width: 800px;
    margin: 0 auto;
    padding: 2rem;
    width: 100%;
  }

  .blog-post {
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    padding: 2rem;
  }

  .post-header {
    text-align: center;
    margin-bottom: 2rem;
    padding-bottom: 1.5rem;
    border-bottom: 1px solid #eee;
  }

  h1 {
    font-size: 2.5rem;
    color: #333;
    margin-bottom: 0.5rem;
  }

  .post-meta {
    color: #666;
    font-size: 0.9rem;
    margin-bottom: 1rem;
  }

  .post-description {
    color: #444;
    font-size: 1.1rem;
    line-height: 1.6;
    max-width: 600px;
    margin: 0 auto;
  }

  .post-content {
    line-height: 1.8;
    color: #333;
  }

  .post-content :global(h2) {
    color: #444;
    font-size: 1.8rem;
    margin: 2rem 0 1rem;
  }

  .post-content :global(p) {
    margin-bottom: 1.5rem;
  }

  footer {
    text-align: center;
    padding: 1rem;
    background: #f5f5f5;
    margin-top: auto;
  }
</style> 