<div class="container mx-auto px-4 py-8">

<div class="hero">
  <h1>🚀 Learn WebDev</h1>
  <p>Choose your path to becoming a developer</p>
</div>

<!-- Ad Banner Placeholder 
<div class="ad-banner">
  <p>Ad Banner Placeholder</p>
</div> -->

<section class="features">
  <div class="feature">
    <h2>🌐 Learn <a href="/html">HTML</a>, <a href="/css">CSS</a>, and <a href="/javascript">JavaScript</a></h2>
    <p>The Foundation of Web Development</p>
  </div>
  <div class="feature">
    <h2>⚡ Learn <a href="/learn/svelte">Svelte</a></h2>
    <p>A modern, lean Javascript framework</p>
  </div>
  <div class="feature">
    <h2>🌟 Learn <a href="/learn/astro">Astro</a></h2>
    <p>Static-site generator with support for many frontend frameworks</p>
  </div>
<div class="feature">
  <h2>📚 Make a Multi-Page Website</h2>
  <p>HTML, CSS, and JavaScript special crash course. Helps you build a multi-page website from scratch. coming soon⌛</p>
</div>
<div class="feature">
  <h2>🎯 Make a One-Page Website, Landing Page</h2>
  <p>HTML, CSS, and JavaScript special crash course. Helps you build a one-page website from scratch. coming soon⌛</p>
</div>
<div class="feature">
  <h2>WordPress</h2>
  <p>coming soon⌛</p>
</div>
</section>

<!-- Ad Banner Placeholder 
<div class="ad-banner">
  <p>Ad Banner Placeholder</p>
</div> -->

<h1>🚀 TechWizard Academy</h1>

<div>
  Embark on your journey to becoming a proficient web developer with TW Academy. Our platform offers a comprehensive curriculum that covers HTML, CSS, and JavaScript, equipping you with the fundamental skills to create stunning websites. Additionally, dive into the world of Svelte, a modern JavaScript framework that simplifies the process of building interactive and dynamic user interfaces.
</div>

<!-- Ad Banner Placeholder 
<div class="ad-banner">
  <p>Ad Banner Placeholder</p>
</div> -->

<section class="latest-posts">
  <h2 class="text-center text-2xl font-bold mb-6">Latest Blog Posts</h2>

  {#await import.meta.glob('/src/routes/blog/**/*.md', { eager: true }) then modules}
    <div class="posts-grid">
      {#each Object.entries(modules)
        .sort(([, a], [, b]) => new Date(b.metadata?.date || 0) - new Date(a.metadata?.date || 0))
        .slice(0, 3)
        .map(([path, module]) => ({
          title: module.metadata?.title || 'Untitled Post',
          description: module.metadata?.description || 'No description available',
          path: path.replace('/src/routes/blog/', '').replace('/+page.md', '')
        })) as post}
        <div class="post-card">
          <h3 class="post-title">
            <a href="/blog/{post.path}">{post.title}</a>
          </h3>
          <p class="post-excerpt">{post.description}</p>
        </div>
      {/each}
    </div>
  {/await}
  
  <div class="text-center mt-6">
    <a href="/blog" class="view-all-link">View All Posts →</a>
  </div>
</section>

<!-- Ad Banner Placeholder 
<div class="ad-banner">
  <p>Ad Banner Placeholder</p>
</div> -->

<h1>Dig Even Deeper</h1>

<section class="features">

  <div class="feature">
    <h2>⌛ Course <a href="/coursestatus">Statuses</a></h2>
    <p>Check out the status of each upcoming course</p>
  </div>
<div class="feature">
  <h2>💨 Learn Tailwind CSS</h2>
  <p>Learn Tailwind CSS, a utility-first CSS framework. coming soon⌛</p>
</div>
  <div class="feature">
    <h2>Learn <a href="#">Bootstrap</a></h2>
    <p>coming soon⌛</p>
  </div>
  <div class="feature">
    <h2>Learn <a href="#">MDSVEX</a></h2>
    <p>coming soon⌛</p>
  </div>
  <div class="feature">
    <h2>Learn <a href="#">SvelteKit</a></h2>
    <p>coming soon⌛</p>
  </div>
</section>

</div>

<style>
  h1 {
    color: #333;
    text-align: center;
    padding: 2rem;
  }

  .hero {
    text-align: center;
    padding: 4rem 0;
    background: #f0f0f0;
    border-radius: 8px;
    margin-bottom: 2rem;
  }

  .features {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
  }

  .feature {
    padding: 1.5rem;
    border: 1px solid #ddd;
    border-radius: 8px;
    text-align: center;
  }
  
    * {
      font-family: 'Roboto', sans-serif;
    }

  .ad-banner {
    text-align: center;
    padding: 2rem;
    margin: 2rem 0;
    background-color: #e0e0e0;
    border-radius: 8px;
    border: 1px dashed #ccc;
  }

  .latest-posts {
    padding: 2rem 0;
    margin: 2rem 0;
    background: #f8f8f8;
    border-radius: 8px;
  }

  .posts-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1.5rem;
    padding: 0 2rem;
  }

  .post-card {
    background: white;
    padding: 1.5rem;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s ease;
  }

  .post-card:hover {
    transform: translateY(-2px);
  }

  .post-title {
    font-size: 1.25rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }

  .post-excerpt {
    color: #666;
    font-size: 0.9rem;
    line-height: 1.5;
  }

  .view-all-link {
    display: inline-block;
    padding: 0.5rem 1rem;
    color: #333;
    text-decoration: none;
    font-weight: bold;
    transition: color 0.2s ease;
  }

  .view-all-link:hover {
    color: #666;
  }
  </style>

  
