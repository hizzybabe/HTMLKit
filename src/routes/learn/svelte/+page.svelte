<script>
  const chapters = [
    {
      title: "Prerequisites",
      topics: [
        "Setting Up Git & GitHub",
        "Deploying Svelte to GitHub Pages",
        "Development Environment Setup",
        "Basic HTML/CSS/JavaScript Knowledge"
      ],
      path: "/learn/svelte/prerequisites"
    },
    {
      title: "Chapter 1: Introduction to Svelte & Setup",
      topics: [
        "What is Svelte?",
        "Svelte vs Other Frameworks",
        "Setting Up Your Development Environment",
        "Understanding Svelte Files",
        "Practice Workshop: Hello Svelte!"
      ],
      path: "/learn/svelte/ch1"
    },
    {
      title: "Chapter 2: Reactivity & State Management",
      topics: [
        "Reactive Declarations",
        "Stores",
        "Props",
        "Component State",
        "Practice Workshop: Counter App"
      ],
      path: "/learn/svelte/ch2"
    },
    {
      title: "Chapter 3: Components & Logic",
      topics: [
        "Component Structure",
        "Logic Blocks",
        "Event Handling",
        "Lifecycle Methods",
        "Practice Workshop: Todo List"
      ],
      path: "/learn/svelte/ch3"
    },
    {
      title: "Chapter 4: Styling & Animations",
      topics: [
        "Scoped Styles",
        "CSS Transitions",
        "Motion",
        "Custom Animations",
        "Practice Workshop: Animated UI"
      ],
      path: "/learn/svelte/ch4"
    },
    {
      title: "Chapter 5: Advanced Concepts",
      topics: [
        "Context API",
        "Special Elements",
        "Actions",
        "Custom Stores",
        "Practice Workshop: Data Dashboard"
      ],
      path: "/learn/svelte/ch5"
    }
  ];
</script>

<div class="container">
  <h1>Learn Svelte</h1>
  <p class="intro">Master modern web development with Svelte's reactive approach</p>

  <div class="prerequisites-note">
    <h2>Before You Begin</h2>
    <p>To get the most out of this course, please ensure you have:</p>
    <ul>
      <li>Basic understanding of HTML, CSS, and JavaScript</li>
  <div class="chapters">
    {#each chapters as chapter}
      <div class="chapter-card">
        <h2>{chapter.title}</h2>
        <ul>
          {#each chapter.topics as topic}
            <li>{topic}</li>
          {/each}
        </ul>
        <button on:click={() => window.location.href = chapter.path}>Start Chapter</button>
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
    background: white;
    padding: 1.5rem;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .chapter-card h2 {
    margin-bottom: 1rem;
    font-size: 1.25rem;
  }

  .chapter-card ul {
    list-style: none;
    padding: 0;
    margin-bottom: 1.5rem;
  }

  .chapter-card li {
    margin-bottom: 0.5rem;
    color: #666;
  }

  button {
    width: 100%;
    padding: 0.75rem;
    background: var(--primary);
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background 0.2s;
  }

  button:hover {
    background: var(--secondary);
  }
</style>
