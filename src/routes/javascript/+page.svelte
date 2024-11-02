
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
    {
      title: "Chapter 2: Functions, Conditional Statements, & Loops",
      topics: [
        "Defining and Calling Functions",
        "Conditional Statements (if/else, switch)",
        "Loops (for, while, do-while)",
        "Introduction to Scope and Context",
        "Practice Workshop: Quiz Time"
      ]
    },
    {
      title: "Chapter 3: Working with Arrays & Objects",
      topics: [
        "Understanding and Manipulating Arrays",
        "Working with Objects",
        "Introduction to JSON",
        "Practice Workshop: To-Do List App"
      ]
    },
    {
      title: "Chapter 4: DOM Manipulation & Events",
      topics: [
        "Understanding the Document Object Model",
        "Selecting and Manipulating DOM Elements",
        "Working with Events",
        "Practice Workshop: Interactive Profile Page"
      ]
    },
    {
      title: "Chapter 5: Asynchronous JavaScript & API Fetching",
      topics: [
        "Introduction to Asynchronous Programming",
        "Understanding and Working with APIs",
        "Error Handling",
        "Practice Workshop: Weather App"
      ]
    },
    {
      title: "Chapter 6: Advanced Topics & Best Practices",
      topics: [
        "Introduction to Closures and Module Pattern",
        "Understanding this Context",
        "Best Practices for Code Organization",
        "Practice Workshop: Refactoring the To-Do List App"
      ]
    },
    {
      title: "Chapter 7: Frontend Frameworks & Libraries",
      topics: [
        "Overview of Popular Frontend Frameworks",
        "Introduction to Component-Based Architecture",
        "Choosing the Right Tool",
        "Practice Workshop: First Steps with React"
      ]
    }
  ];
</script>

<div class="container">
  <h1>Learn JavaScript</h1>
  <p class="intro">Master modern JavaScript from basics to advanced concepts</p>

  <div class="chapters">
    {#each chapters as chapter}
      <div class="chapter-card">
        <h2>{chapter.title}</h2>
        <ul>
          {#each chapter.topics as topic}
            <li>{topic}</li>
          {/each}
        </ul>
      </div>
    {/each}
  </div>
</div>

<style>
  .container {
    max-width: 800px;
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

  .chapters {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
  }

  .chapter-card {
    background: #f5f5f5;
    border-radius: 8px;
    padding: 1.5rem;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    transition: transform 0.2s ease;
  }

  .chapter-card:hover {
    transform: translateY(-5px);
  }

  h2 {
    font-size: 1.2rem;
    color: #2a2a2a;
    margin-bottom: 1rem;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    color: #555;
    margin-bottom: 0.5rem;
    padding-left: 1rem;
    position: relative;
  }

  li::before {
    content: "•";
    position: absolute;
    left: 0;
    color: #666;
  }
</style>
