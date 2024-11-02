<script>
  import '../app.css';
</script>

<nav>
  <a href="/my-svelte-website/">Home</a>
  <a href="/my-svelte-website/about">About</a>
  <a href="/my-svelte-website/html">HTML</a>
  <a href="/my-svelte-website/css">CSS</a>
  <a href="/my-svelte-website/javascript">Javascript</a>
  <a href="/my-svelte-website/svelte">Svelte</a>
  <a href="/my-svelte-website/astro">Astro</a>
  <a href="/my-svelte-website/practice">Practice</a>
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
