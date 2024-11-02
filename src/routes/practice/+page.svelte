<h1>Practice Projects</h1>

<div class="projects-container">
  <section>
    <h2>HTML Projects</h2>
    <ul>
      <li><a href="/my-svelte-website/practice/html-form">Registration Form</a></li>
      <li><a href="/my-svelte-website/practice/html-table">Data Table</a></li>
      <li><a href="/my-svelte-website/practice/html-semantic">Semantic Layout</a></li>
    </ul>
  </section>

  <section>
    <h2>CSS Projects</h2>
    <ul>
      <li><a href="/my-svelte-website/practice/css-grid">Grid Gallery</a></li>
      <li><a href="/my-svelte-website/practice/css-animation">Animations</a></li>
      <li><a href="/my-svelte-website/practice/css-responsive">Responsive Design</a></li>
    </ul>
  </section>

  <section>
    <h2>JavaScript Projects</h2>
    <ul>
      <li><a href="/my-svelte-website/practice/js-todo">Todo List</a></li>
      <li><a href="/my-svelte-website/practice/js-quiz">Quiz App</a></li>
      <li><a href="/my-svelte-website/practice/js-calculator">Calculator</a></li>
    </ul>
  </section>

  <section>
    <h2>Svelte Projects</h2>
    <ul>
      <li><a href="/my-svelte-website/practice/svelte-counter">Counter App</a></li>
      <li><a href="/my-svelte-website/practice/svelte-weather">Weather Widget</a></li>
      <li><a href="/my-svelte-website/practice/svelte-crud">CRUD Operations</a></li>
    </ul>
  </section>
</div>

<style>
  .projects-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    margin-top: 2rem;
  }

  section {
    background: #f8f8f8;
    padding: 1.5rem;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  }

  h1 {
    color: #333;
    text-align: center;
    margin-bottom: 2rem;
  }

  h2 {
    color: #444;
    margin-bottom: 1rem;
    border-bottom: 2px solid #ddd;
    padding-bottom: 0.5rem;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    margin: 0.8rem 0;
  }

  a {
    color: #0066cc;
    text-decoration: none;
    transition: color 0.2s;
  }

  a:hover {
    color: #004499;
    text-decoration: underline;
  }
</style>
