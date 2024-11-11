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
    {#each chapters as chapter, index}
      <div class="chapter-card">
        <h2>{chapter.title}</h2>
        <ul>
          {#each chapter.topics as topic}
            <li>{topic}</li>
          {/each}
        </ul>
        <button on:click={() => window.location.href=`/css/chapter${index + 1}`}>Start Chapter</button>
      </div>
    {/each}
  </div>
</div>

<style>

</style>
