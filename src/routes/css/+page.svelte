<script>
  const chapters = [
    {
      title: "Chapter 1: Introduction to CSS & Setting Up",
      topics: [
        "What is CSS?",
        "Brief History of CSS",
        "CSS Syntax and Basic Structure",
        "How to Link CSS to HTML",
        "Setting Up a Code Editor/IDE",
        "Practice Workshop: Styling Hello, World!"
      ]
    },
    {
      title: "Chapter 2: Selectors & Properties",
      topics: [
        "Understanding CSS Selectors",
        "Common CSS Properties",
        "Introduction to the Box Model",
        "Practice Workshop: Styling a Personal Profile"
      ]
    },
    {
      title: "Chapter 3: Layout & Display Properties",
      topics: [
        "Understanding Display Properties",
        "Positioning Elements",
        "Introduction to Float and Clear",
        "Practice Workshop: Building a Simple Gallery"
      ]
    },
    {
      title: "Chapter 4: Colors, Backgrounds, & Gradients",
      topics: [
        "Color Theory for the Web",
        "Background Images and Repeat Properties",
        "Creating Gradients",
        "Practice Workshop: Designing a Hero Section"
      ]
    },
    {
      title: "Chapter 5: Responsive Web Design & Media Queries",
      topics: [
        "Principles of Responsive Web Design",
        "Using Media Queries",
        "Introduction to Flexible Units",
        "Practice Workshop: Making the Gallery Responsive"
      ]
    },
    {
      title: "Chapter 6: Advanced Selectors & Pseudo-Classes",
      topics: [
        "Advanced CSS Selectors",
        "Using Pseudo-Classes",
        "Styling with Pseudo-Elements",
        "Practice Workshop: Enhancing Interactivity"
      ]
    },
    {
      title: "Chapter 7: Preprocessors & Best Practices",
      topics: [
        "Introduction to CSS Preprocessors",
        "Overview of Popular CSS Frameworks",
        "Best Practices for CSS",
        "Practice Workshop: Final Project"
      ]
    }
  ];
</script>

<div class="container">
  <h1>Learn CSS</h1>
  <p class="intro">Master the fundamentals of CSS with our comprehensive guide</p>

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
