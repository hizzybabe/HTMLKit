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

<main class="container mx-auto px-4 py-8 max-w-4xl">
    <h1 class="text-5xl font-bold mb-12 text-center bg-gradient-to-r from-blue-600 to-cyan-500 text-transparent bg-clip-text">
        Learn HTML: Quick Course with Practical Examples
    </h1>
    
    <div class="space-y-4">
        {#each chapters as chapter, i}
            <div class="rounded-xl overflow-hidden bg-white shadow-lg transition-all duration-200 hover:shadow-xl">
                <!-- Toggle Header -->
                <button 
                    class="w-full p-6 text-left flex justify-between items-center bg-gradient-to-r from-blue-600 to-cyan-500 text-white transition-all duration-200"
                    on:click={() => toggleChapter(i)}
                >
                    <h2 class="text-xl font-semibold text-white">{chapter.title}</h2>
                    <span 
                        class="transform transition-transform duration-300 text-white"
                        class:rotate-180={visibleChapters[i]}
                    >
                        ▼
                    </span>
                </button>
                
                <!-- Collapsible Content -->
                {#if visibleChapters[i]}
                    <div class="p-6 bg-white mb-4">
                        <div class="mb-6">
                            <h3 class="font-semibold mb-3 text-lg text-gray-800">Key Topics:</h3>
                            <ul class="space-y-2">
                                {#each chapter.topics as topic}
                                    <li class="flex items-center text-gray-700">
                                        <span class="mr-2">•</span>
                                        {topic}
                                    </li>
                                {/each}
                            </ul>
                        </div>
                        
                        <div class="mb-6">
                            <h3 class="font-semibold mb-3 text-lg text-gray-800">Practice:</h3>
                            <p class="text-gray-700">{chapter.workshop}</p>
                        </div>
                        
                        <a 
                            href={chapter.path}
                            class="inline-block bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-2.5 rounded-lg hover:opacity-90 transition-all duration-200 font-medium shadow-md hover:shadow-lg"
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
    :global(body) {
        background-color: #f8fafc;
    }
</style>
  