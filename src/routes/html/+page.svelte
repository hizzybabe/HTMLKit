<script>
    const chapters = [
      {
        title: "1. Introduction to HTML & Setup",
        topics: ["What is HTML?", "Brief History", "Environment Setup"],
        workshop: "Hello World Workshop",
        path: "html/chapter1"
      },
      {
        title: "2. Basic HTML Structure & Elements",
        topics: ["Document Structure", "Common Elements", "HTML Attributes"],
        workshop: "Personal Profile Workshop",
        path: "html/chapter2"
      },
      {
        title: "3. Text and Links",
        topics: ["Text Formatting", "Hyperlinks", "Email Links"],
        workshop: "Enhanced Profile Workshop",
        path: "html/chapter3"
      },
      {
        title: "4.Images, Lists, and Tables",
        topics: ["Working with Images", "List Types", "Table Creation"],
        workshop: "Product Showcase Workshop",
        path: "html/chapter4"
      },
      {
        title: "5.Forms and Input Elements",
        topics: ["HTML Forms", "Input Types", "Form Components"],
        workshop: "Contact Form Workshop",
        path: "html/chapter5"
      },
      {
        title: "6.Semantic HTML & Accessibility",
        topics: ["Semantic Elements", "Web Accessibility", "ARIA"],
        workshop: "Accessibility Workshop",
        path: "html/chapter6"
      },
      {
        title: "7. Advanced Topics & Best Practices",
        topics: ["SEO Meta Tags", "HTML Entities", "Coding Standards"],
        workshop: "Personal Website Project",
        path: "html/chapter7"
      }
    ];

    // Add state management for toggle
    let visibleChapters = chapters.map(() => false);

    // Toggle function
    const toggleChapter = (index) => {
        visibleChapters[index] = !visibleChapters[index];
        visibleChapters = [...visibleChapters]; // trigger reactivity
    };
</script>

<main class="container mx-auto px-4 py-8">
    <h1 class="text-4xl font-bold mb-8 text-center">Learn HTML: Quick Course with Practical Examples</h1>
    
    <div class="grid gap-6">
        {#each chapters as chapter, i}
            <div class="border rounded-lg shadow-md bg-white">
                <!-- Toggle Header -->
                <button 
                    class="w-full p-6 text-left flex justify-between items-center hover:bg-gray-50"
                    on:click={() => toggleChapter(i)}
                >
                    <h2 class="text-2xl font-semibold">{chapter.title}</h2>
                    <span class="transform transition-transform duration-200" class:rotate-180={visibleChapters[i]}>
                        ▼
                    </span>
                </button>
                
                <!-- Collapsible Content -->
                {#if visibleChapters[i]}
                    <div class="p-6 pt-0">
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
                {/if}
            </div>
        {/each}
    </div>
</main>
  
  <style>

  
  </style>
  