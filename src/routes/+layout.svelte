<script>
  import '../app.css';
</script>

<nav>
  <a href="/htmlkit/">Home</a>
  <a href="/htmlkit/about">About</a>
  <a href="/htmlkit/html">HTML</a>
  <a href="/htmlkit/css">CSS</a>
  <a href="/htmlkit/javascript">Javascript</a>
  <a href="/htmlkit/svelte">Svelte</a>
  <a href="/htmlkit/astro">Astro</a>
  <a href="/htmlkit/practice">Practice</a>
</nav>

<slot />

<footer>
  <p>© 2024 HTMLKIT</p>
</footer>

<style>
  nav {
    background: #333;
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
</style>
