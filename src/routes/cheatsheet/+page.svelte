<script>
  const cheatsheets = [
    {
      title: 'HTML Cheatsheet',
      description: 'Quick reference for HTML tags, attributes, and best practices',
      link: '/HTMLKit/cheatsheet/html',
      icon: '🏗️'
    },
    {
      title: 'CSS Cheatsheet',
      description: 'Essential CSS properties, selectors, and layouts',
      link: '/HTMLKit/cheatsheet/css',
      icon: '🎨'
    },
    {
      title: 'JavaScript Cheatsheet',
      description: 'Common JavaScript methods, syntax, and examples',
      link: '/HTMLKit/cheatsheet/javascript',
      icon: '⚡'
    },
    {
      title: 'Svelte Cheatsheet',
      description: 'Svelte syntax, reactivity, and component patterns',
      link: '/HTMLKit/cheatsheet/svelte',
      icon: '🔥'
    },
    {
      title: 'Astro Cheatsheet',
      description: 'Astro components, routing, and deployment guides',
      link: '/HTMLKit/cheatsheet/astro',
      icon: '🚀'
    }
  ];
</script>

<div class="container">
  <h1>Web Development Cheatsheets</h1>
  <p class="intro">Quick reference guides for web development technologies</p>
  
  <div class="cheatsheet-grid">
    {#each cheatsheets as sheet}
      <a href={sheet.link} class="cheatsheet-card">
        <span class="icon">{sheet.icon}</span>
        <h2>{sheet.title}</h2>
        <p>{sheet.description}</p>
      </a>
    {/each}
  </div>
</div>

<style>
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
  }

  h1 {
    text-align: center;
    margin-bottom: 0.5rem;
    color: var(--primary);
  }

  .intro {
    text-align: center;
    margin-bottom: 2rem;
    color: #666;
  }

  .cheatsheet-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1.5rem;
  }

  .cheatsheet-card {
    background: white;
    padding: 1.5rem;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    text-decoration: none;
    color: inherit;
    transition: transform 0.2s, box-shadow 0.2s;
  }

  .cheatsheet-card:hover {
    transform: translateY(-3px);
    box-shadow: 0 4px 8px rgba(0,0,0,0.15);
  }

  .icon {
    font-size: 2rem;
    display: block;
    margin-bottom: 1rem;
  }

  .cheatsheet-card h2 {
    margin: 0 0 0.5rem 0;
    color: var(--primary);
  }

  .cheatsheet-card p {
    margin: 0;
    color: #666;
    font-size: 0.9rem;
  }
</style> 