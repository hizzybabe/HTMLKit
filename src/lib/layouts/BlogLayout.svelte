<script>
  import { page } from '$app/stores';
  
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
</div>

<style>
  @import '$lib/styles/blog.css';
</style> 