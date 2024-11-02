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
    :global(body) {
      background-color: #f8f9fa;
    }
    
    .container {
      max-width: 1200px;
      padding: 20px;
      margin: 20px;
    }
  </style>
  