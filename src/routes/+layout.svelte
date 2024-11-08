<script>
  import '../app.css';
</script>

<nav>
  <a href="/HTMLKit/">Home</a>
  <a href="/HTMLKit/about">About</a>
  <a href="/HTMLKit/html">HTML</a>
  <a href="/HTMLKit/css">CSS</a>
  <a href="/HTMLKit/javascript">Javascript</a>
  <a href="/HTMLKit/svelte">Svelte</a>
  <a href="/HTMLKit/astro">Astro</a>
  <a href="/HTMLKit/practice">Practice</a>
  <a href="/HTMLKit/practice">FREE Templates</a>
</nav>

<slot />

<footer>
  <p>© 2024 HTMLKit. Built with SvelteKit</p>
  <nav>
    <a href="/contact">Contact Us</a>
  </nav>
</footer>

<style>
  nav {
    background: linear-gradient(45deg, var(--primary), var(--secondary));
    padding: 1rem;
    display: flex;
    gap: 1rem;
    font-family: 'Roboto', sans-serif;
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
    color: #333;
    text-decoration: none;
    margin: 0 0.5rem;
  }

  footer nav a:hover {
    text-decoration: underline;
  }
</style>
