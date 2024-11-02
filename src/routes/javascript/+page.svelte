
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
        <button>Start Chapter</button>
      </div>
    {/each}
  </div>
</div>

<style>


  
</style>
