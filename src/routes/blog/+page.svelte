<script>
  export let data;
</script>

<div class="blog-container">
  <h1>Blog Posts</h1>
  
  <div class="posts-grid">
    {#if data.posts && data.posts.length > 0}
      {#each data.posts as post}
        <article class="post-card">
          <h2>
            <a href="/blog/{post.path}">{post.title}</a>
          </h2>
          {#if post.description}
            <p class="post-excerpt">{post.description}</p>
          {/if}
          {#if post.date}
            <p class="post-date">Published on {post.date}</p>
          {/if}
        </article>
      {/each}
    {:else}
      <p>No blog posts found.</p>
    {/if}
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

  .post-date {
    color: #666;
    font-size: 0.9rem;
    margin-top: 0.5rem;
  }
</style>
