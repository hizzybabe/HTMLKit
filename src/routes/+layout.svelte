<nav>
  <a href="/my-svelte-website/">Home</a>
  <a href="/my-svelte-website/about">About</a>
  <a href="/my-svelte-website/projects">Projects</a>
  <a href="/my-svelte-website/practice">Practice</a>
</nav>

<main>
  <slot />
</main>

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

  main {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
  }

  footer {
    text-align: center;
    padding: 1rem;
    background: #f5f5f5;
    font-family: 'Roboto', sans-serif;
  }
</style>
