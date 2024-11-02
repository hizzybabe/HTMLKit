<script>
  const chapters = [
    {
      title: "Chapter 1: Introduction to JavaScript & Setting Up",
      topics: [
        "What is JavaScript?",
        "Brief History and Evolution of JavaScript",
        "JavaScript in the Browser vs. Node.js",
        "Setting Up a Code Editor/IDE",
        "Basic Syntax and Data Types",
        "Practice Workshop: Hello, Interactive World!"
      ]
    },
    // ... rest of your chapters data remains the same
  ];
</script>

<div class="container">
  <h1>Learn JavaScript</h1>
  <p class="intro">Master modern JavaScript from basics to advanced concepts</p>

  <div class="card-grid">
    {#each chapters as chapter}
      <div class="card">
        <div class="card-header">
          <h2>{chapter.title}</h2>
        </div>
        <div class="card-content">
          <ul>
            {#each chapter.topics as topic}
              <li>{topic}</li>
            {/each}
          </ul>
        </div>
      </div>
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
    font-size: 2.5rem;
    color: #333;
    text-align: center;
    margin-bottom: 1rem;
  }

  .intro {
    text-align: center;
    color: #666;
    margin-bottom: 3rem;
  }

  .card-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 2rem;
  }

  .card {
    background: white;
    border-radius: 12px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.15);
  }

  .card-header {
    background: #4a90e2;
    padding: 1.5rem;
    border-bottom: 1px solid #e0e0e0;
  }

  .card-header h2 {
    color: white;
    font-size: 1.2rem;
    margin: 0;
  }

  .card-content {
    padding: 1.5rem;
  }

  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }

  li {
    color: #555;
    padding: 0.8rem 0;
    border-bottom: 1px solid #f0f0f0;
    padding-left: 1.5rem;
    position: relative;
  }

  li:last-child {
    border-bottom: none;
  }

  li::before {
    content: "→";
    position: absolute;
    left: 0;
    color: #4a90e2;
  }
</style>
