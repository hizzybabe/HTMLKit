<script>
  import '../app.css';
  let isMenuOpen = false;
  let activeDropdowns = new Set();
  
  const toggleMenu = () => {
    isMenuOpen = !isMenuOpen;
  };
  
  const toggleDropdown = (index, event) => {
    event.preventDefault();
    event.stopPropagation();
    
    if (activeDropdowns.has(index)) {
      activeDropdowns.delete(index);
    } else {
      activeDropdowns.add(index);
    }
    activeDropdowns = activeDropdowns;
  };
</script>

<nav>
  <a href="/">Home</a>
  
  <div class="mobile-menu-btn" on:click={toggleMenu}>
    <span class="hamburger" class:open={isMenuOpen}></span>
  </div>

  <div class="nav-links" class:mobile-active={isMenuOpen}>
    <div class="dropdown" class:active={activeDropdowns.has(0)}>
      <a href="/" on:click={(e) => toggleDropdown(0, e)}>Learn ▼</a>
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
    
    <div class="dropdown" class:active={activeDropdowns.has(1)}>
      <a href="#" on:click={(e) => toggleDropdown(1, e)}>Library ▼</a>
      <div class="dropdown-content">
        <a href="/library/webdev2025">WebDev 2025</a>
        <a href="https://techwizard.club/blog/top-web-development-tech-stacks-2025/" target="_blank" rel="noopener noreferrer">2025 Tech Stacks ↗️</a>
      </div>
    </div>
    
    <a href="/practice">Practice</a>
    
    <div class="dropdown" class:active={activeDropdowns.has(2)}>
      <a href="/cheatsheet" on:click={(e) => toggleDropdown(2, e)}>Cheatsheet ▼</a>
      <div class="dropdown-content">
        <a href="/cheatsheet/html">HTML Cheatsheet</a>
        <a href="/cheatsheet/css">CSS Cheatsheet</a>
        <a href="/cheatsheet/javascript">JavaScript Cheatsheet</a>
        <a href="/cheatsheet/svelte">Svelte Cheatsheet</a>
        <a href="/cheatsheet/astro">Astro Cheatsheet</a>
      </div>
    </div>
    
    <div class="dropdown" class:active={activeDropdowns.has(3)}>
      <a href="/" on:click={(e) => toggleDropdown(3, e)}>WebDev Tools ▼</a>
      <div class="dropdown-content">
        <a href="https://techwizard.club" target="_blank" rel="noopener noreferrer">Cloud Directory ↗️</a>
        <a href="https://techwizard.club/lifetime-deals/" target="_blank" rel="noopener noreferrer">Lifetime Deals ↗️</a>
      </div>
    </div>
    
    <a href="/templates"><s>FREE Templates</s> (⌛Soon)</a>
  </div>
</nav>

<slot />

<footer>
  <p>© 2024 TechWizard.club. Built with SvelteKit</p>
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
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
    font-family: 'Roboto', sans-serif;
  }

  nav a {
    color: white;
    text-decoration: none;
    white-space: nowrap;
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

  .mobile-only {
    display: none;
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

  /* Desktop hover behavior */
  @media (min-width: 769px) {
    .dropdown:hover .dropdown-content {
      display: block;
    }
  }

  /* Mobile click behavior */
  @media (max-width: 768px) {
    .mobile-only {
      display: block;
    }

    nav {
      padding: 1rem;
      justify-content: space-between;
    }

    .mobile-menu-btn {
      display: block;
      position: relative;
      z-index: 100;
      background: none;
      border: none;
      padding: 0.5rem;
      cursor: pointer;
    }

    .nav-links {
      display: none;
      position: absolute;
      top: 60px;
      left: 0;
      right: 0;
      background: linear-gradient(45deg, var(--primary), var(--secondary));
      flex-direction: column;
      padding: 1rem;
      gap: 1rem;
    }

    .nav-links.mobile-active {
      display: flex;
    }

    .nav-links a {
      padding: 0.5rem;
      width: 100%;
      text-align: left;
    }

    .dropdown {
      width: 100%;
    }

    .dropdown-content {
      position: static;
      width: 100%;
      box-shadow: none;
      margin-top: 0.5rem;
      background: rgba(255, 255, 255, 0.1);
      border-radius: 4px;
    }

    .dropdown-content a {
      padding: 0.8rem 1rem;
    }

    .nav-links {
      position: absolute;
      height: auto;
      max-height: calc(100vh - 60px);
      overflow-y: auto;
    }
  }

  .hamburger {
    display: block;
    width: 24px;
    height: 2px;
    background: white;
    position: relative;
    transition: all 0.3s;
  }

  .hamburger::before,
  .hamburger::after {
    content: '';
    position: absolute;
    width: 24px;
    height: 2px;
    background: white;
    transition: all 0.3s;
  }

  .hamburger::before {
    top: -6px;
  }

  .hamburger::after {
    bottom: -6px;
  }

  .nav-links {
    display: flex;
    align-items: center;
    gap: 2.5rem;
    flex: 1;
    justify-content: space-evenly;
  }

  /* Mobile styles */
  @media (max-width: 768px) {
    .nav-links {
      display: none; /* Hide by default on mobile */
      position: fixed;
      top: 60px;
      left: 0;
      right: 0;
      background: linear-gradient(45deg, var(--primary), var(--secondary));
      flex-direction: column;
      padding: 1rem;
      gap: 1rem;
      z-index: 99;
    }

    /* Only show when mobile-active class is present */
    .nav-links.mobile-active {
      display: flex;
    }

    /* Override hover behavior for dropdowns on mobile */
    .dropdown:hover .dropdown-content {
      display: none;
    }

    /* Show dropdown content when active class is present */
    .dropdown.active .dropdown-content {
      display: block !important;
    }
  }

  /* Add hamburger animation states */
  .hamburger.open {
    background: transparent;
  }

  .hamburger.open::before {
    transform: rotate(45deg);
    top: 0;
  }

  .hamburger.open::after {
    transform: rotate(-45deg);
    bottom: 0;
  }

  /* Update media queries to handle medium screens */
  @media (max-width: 768px) {
    /* existing mobile styles */

    /* Remove this override to fix medium screen dropdowns */
    .dropdown:hover .dropdown-content {
      display: none;
    }

    /* Show dropdown content when active class is present */
    .dropdown.active .dropdown-content {
      display: block !important;
    }
  }

  .mobile-menu-btn {
    display: none; /* Hidden by default for large screens */
  }
</style>

