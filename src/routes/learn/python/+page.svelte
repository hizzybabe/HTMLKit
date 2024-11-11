<script>
  const chapters = [
    {
      title: "Chapter 1: Introduction to Python and Setup",
      topics: [
        "What is Python? History and applications.",
        "Installing Python and setting up an IDE.",
        "Writing and running your first Python script.",
        "Overview of Python syntax, variables, and data types."
      ],
      path: "/learn/python/ch1"
    },
    {
      title: "Chapter 2: Basic Operators and Expressions",
      topics: [
        "Arithmetic operators, comparison operators, and logical operators.",
        "Writing expressions and basic calculations."
      ],
      path: "/learn/python/ch2"
    },
    {
      title: "Chapter 3: Control Flow - Conditional Statements",
      topics: [
        "if, elif, and else statements.",
        "Nested and chained conditional statements."
      ],
      path: "/learn/python/ch3"
    },
    {
      title: "Chapter 4: Loops in Python",
      topics: [
        "for and while loops.",
        "Nested loops and loop control statements (break, continue)."
      ],
      path: "/learn/python/ch4"
    },
    {
      title: "Chapter 5: Functions and Modules",
      topics: [
        "Context API",
        "Special Elements",
        "Actions",
        "Custom Stores",
        "Practice Workshop: Data Dashboard"
      ],
      path: "/learn/svelte/ch5"
    },
    {
      title: "Chapter 6: Working with Strings",
      topics: [
        "String operations, formatting, and methods.",
        "String slicing and concatenation."
      ],
      path: "/learn/python/ch6"
    },
    {
      title: "Chapter 7: Data Structures - Lists, Tuples, and Sets",
      topics: [
        "Introduction to lists, tuples, and sets.",
        "List methods and list comprehensions."
      ],
      path: "/learn/python/ch7"
    },
    {
      title: "Chapter 8: Dictionaries",
      topics: [
        "Creating and accessing dictionaries.",
        "Dictionary methods and nested dictionaries."
      ],
      path: "/learn/python/ch8"
    },
    {
      title: "Chapter 9: File Handling",
      topics: [
        "Reading from and writing to files.",
        "Handling different file types (e.g., .txt, .csv)."
      ],
      path: "/learn/python/ch9"
    },
    {
      title: "Chapter 10: Error Handling and Debugging",
      topics: [
        "Understanding errors and exceptions.",
        "Using try, except, and finally."
      ],
      path: "/learn/python/ch10"
    },
    {
      title: "Chapter 11: Introduction to Object-Oriented Programming (OOP)",
      topics: [
        "Classes, objects, and methods.",
        "Constructors, inheritance, and encapsulation."
      ],
      path: "/learn/python/ch11"
    },
    {
      title: "Chapter 12: Working with Libraries (e.g., NumPy, Pandas, Matplotlib)",
      topics: [
        "Introduction to third-party libraries.",
        "Basic data manipulation and plotting."
      ],
      path: "/learn/python/ch12"
    },
    {
      title: "Chapter 13: Working with APIs and Web Requests",
      topics: [
        "Using requests to interact with APIs.",
        "Parsing JSON data from API responses."
      ],
      path: "/learn/python/ch13"
    },
    {
      title: "Chapter 14: Projects - Bringing It All Together",
      topics: [
        "Personal Portfolio Website Backend: A simple backend to handle contact form submissions and display projects.",
        "To-Do List Web App: An app where users can add, update, delete, and mark tasks as completed.",
        "Quiz Game: A game where users answer multiple-choice questions, track scores, and get feedback at the end.",
        "Budget Tracker: A simple app that tracks income, expenses, and displays a summary of remaining balance."
      ],
      path: "/learn/python/ch14"
    }
  ];
</script>

<div class="container">
  <h1>Learn Python</h1>
  <p class="intro">Master Python, the most popular programming language for web development</p>

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
