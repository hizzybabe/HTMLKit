<script>
  import '../app.css';
</script>

<nav>
  <a href="/">Home</a>

  <div class="dropdown">
    <a href="/">Learn ▼</a>
    <div class="dropdown-content">
      <a href="/html">HTML</a>
      <a href="/css">CSS</a>
      <a href="/javascript">JavaScript</a>
      <a href="/svelte" class="wip"><s>Svelte</s> (⌛Soon)</a>
      <a href="/astro" class="wip"><s>Astro</s> (⌛Soon)</a>
      <a href="/python" class="wip"><s>Python</s> (⌛Soon)</a>
      <a href="/react" class="wip"><s>React</s> (⌛Soon)</a>
      <a href="/php" class="wip"><s>PHP</s> (⌛Soon)</a>
      <a href="/nextjs" class="wip"><s>Next.js</s> (⌛Soon)</a>
      <a href="/wordpress" class="wip"><s>WordPress</s> (⌛Soon)</a>
    </div>
  </div>

  <div class="dropdown">
    <a href="/">Library ▼</a>
    <div class="dropdown-content">
      <a href="/library/webdev2025">WebDev 2025</a>
      <a href="https://techwizard.club/blog/top-web-development-tech-stacks-2025/" target="_blank" rel="noopener noreferrer">2025 Tech Stacks ↗️</a>
    </div>
  </div>
  
  <a href="/practice">Practice</a>

  <div class="dropdown">
    <a href="/cheatsheet">Cheatsheet ▼</a>
    <div class="dropdown-content">
      <a href="/cheatsheet/html">HTML Cheatsheet</a>
      <a href="/cheatsheet/css">CSS Cheatsheet</a>
      <a href="/cheatsheet/javascript">JavaScript Cheatsheet</a>
      <a href="/cheatsheet/svelte">Svelte Cheatsheet</a>
      <a href="/cheatsheet/astro">Astro Cheatsheet</a>
    </div>
  </div>

  <div class="dropdown">
    <a href="/">WebDev Tools ▼</a>
    <div class="dropdown-content">
      <a href="https://techwizard.club" target="_blank" rel="noopener noreferrer">Cloud Directory ↗️</a>
      <a href="https://techwizard.club/lifetime-deals/" target="_blank" rel="noopener noreferrer">Lifetime Deals ↗️</a>
    </div>
  </div>
  
  <a href="/templates"><s>FREE Templates</s> (⌛Soon)</a>
</nav>

<slot />

<footer>
  <p>© 2024 HTMLKit. Built with SvelteKit</p>
  <nav>
    <a href="/about">About</a>
    <a href="/contact">Contact Us</a>
    <a href="/blog">Blog</a>
  </nav>
</footer>

<style>
  nav {
    background: linear-gradient(45deg, var(--primary), var(--secondary));
    padding: 1rem 2rem;
    display: flex;
    gap: 2rem;
    font-family: 'Roboto', sans-serif;
    justify-content: flex-start;
    align-items: center;
  }

  nav a {
    color: white;
    text-decoration: none;
  }

  footer {
    text-align: center;
    padding: 1rem;
    background: #f5f5f5;
    font-family: 'Roboto', sans-serif;
  }

  footer nav {
    margin-top: 1rem;
    background: none;
    padding: 0;
    justify-content: center;
  }

  footer nav a {
    color: var(--primary);
    text-decoration: none;
    margin: 0 0.5rem;
  }

  footer nav a:hover {
    text-decoration: underline;
  }

  .dropdown {
    position: relative;
    display: inline-block;
  }

  .dropdown-content {
    display: none;
    position: absolute;
    background: linear-gradient(45deg, var(--primary), var(--secondary));
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
  }

  .dropdown-content a {
    padding: 12px 16px;
    display: block;
    text-align: left;
  }

  .dropdown:hover .dropdown-content {
    display: block;
  }

  .dropdown-content a:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
</style>
