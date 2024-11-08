<script>
  import '../app.css';
</script>

<nav>
  <a href="/HTMLKit/">Home</a>
  <a href="/HTMLKit/about">About</a>

  <div class="dropdown">
    <a href="/HTMLKit/">Learn ▼</a>
    <div class="dropdown-content">
      <a href="/HTMLKit/html">HTML</a>
      <a href="/HTMLKit/css">CSS</a>
      <a href="/HTMLKit/javascript">JavaScript</a>
      <a href="/HTMLKit/svelte">Svelte</a>
      <a href="/HTMLKit/astro">Astro</a>
    </div>
  </div>
  
  <a href="/HTMLKit/practice">Practice</a>

  <div class="dropdown">
    <a href="/HTMLKit/cheatsheet">Cheatsheet ▼</a>
    <div class="dropdown-content">
      <a href="/HTMLKit/cheatsheet/html">HTML Cheatsheet</a>
      <a href="/HTMLKit/cheatsheet/css">CSS Cheatsheet</a>
      <a href="/HTMLKit/cheatsheet/javascript">JavaScript Cheatsheet</a>
      <a href="/HTMLKit/cheatsheet/svelte">Svelte Cheatsheet</a>
      <a href="/HTMLKit/cheatsheet/astro">Astro Cheatsheet</a>
    </div>
  </div>
  
  <a href="/HTMLKit/templates">FREE Templates</a>
</nav>

<slot />

<footer>
  <p>© 2024 HTMLKit. Built with SvelteKit</p>
  <nav>
    <a href="/HTMLKit/contact">Contact Us</a>
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
  }

  footer nav a {
    color: white;
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
