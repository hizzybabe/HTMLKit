<script>
    const chapters = [
      {
        title: "Introduction to HTML & Setup",
        topics: ["What is HTML?", "Brief History", "Environment Setup"],
        workshop: "Hello World Workshop",
        path: "/html/chapter1"
      },
      {
        title: "Basic HTML Structure & Elements",
        topics: ["Document Structure", "Common Elements", "HTML Attributes"],
        workshop: "Personal Profile Workshop",
        path: "/html/chapter2"
      },
      {
        title: "Text and Links",
        topics: ["Text Formatting", "Hyperlinks", "Email Links"],
        workshop: "Enhanced Profile Workshop",
        path: "/html/chapter3"
      },
      {
        title: "Images, Lists, and Tables",
        topics: ["Working with Images", "List Types", "Table Creation"],
        workshop: "Product Showcase Workshop",
        path: "/html/chapter4"
      },
      {
        title: "Forms and Input Elements",
        topics: ["HTML Forms", "Input Types", "Form Components"],
        workshop: "Contact Form Workshop",
        path: "/html/chapter5"
      },
      {
        title: "Semantic HTML & Accessibility",
        topics: ["Semantic Elements", "Web Accessibility", "ARIA"],
        workshop: "Accessibility Workshop",
        path: "/html/chapter6"
      },
      {
        title: "Advanced Topics & Best Practices",
        topics: ["SEO Meta Tags", "HTML Entities", "Coding Standards"],
        workshop: "Personal Website Project",
        path: "/html/chapter7"
      }
    ];
  </script>
  
  <main class="container mx-auto px-4 py-8">
    <h1 class="text-4xl font-bold mb-8 text-center">Learn HTML: Interactive Workshops</h1>
    
    <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {#each chapters as chapter}
        <div class="border rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
          <h2 class="text-2xl font-semibold mb-4">{chapter.title}</h2>
          
          <div class="mb-4">
            <h3 class="font-medium mb-2">Key Topics:</h3>
            <ul class="list-disc list-inside">
              {#each chapter.topics as topic}
                <li>{topic}</li>
              {/each}
            </ul>
          </div>
          
          <div class="mb-4">
            <h3 class="font-medium mb-2">Practice:</h3>
            <p>{chapter.workshop}</p>
          </div>
          
          <a 
            href={chapter.path}
            class="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
          >
            Start Chapter
          </a>
        </div>
      {/each}
    </div>
  </main>
  
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
  