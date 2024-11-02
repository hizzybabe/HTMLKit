<script>
  const chapterContent = {
    title: "Introduction to HTML & Setup",
    sections: [
      {
        heading: "What is HTML?",
        content: "HTML (HyperText Markup Language) is the standard markup language for creating web pages..."
      },
      {
        heading: "Brief History",
        content: "HTML was created by Tim Berners-Lee in 1991..."
      },
      {
        heading: "Environment Setup",
        content: "To start writing HTML, you'll need a text editor..."
      }
    ],
    workshop: {
      title: "Hello World Workshop",
      instructions: "Create your first HTML page:",
      codeExample: `<!DOCTYPE html>
<html>
  <head>
    <title>My First Page</title>
  </head>
  <body>
    <h1>Hello, World!</h1>
  </body>
</html>`
    }
  };
</script>

<main class="container mx-auto px-4 py-8">
  <h1 class="text-4xl font-bold mb-8">{chapterContent.title}</h1>

  <!-- Chapter Content -->
  <div class="mb-8">
    {#each chapterContent.sections as section}
      <section class="mb-6">
        <h2 class="text-2xl font-semibold mb-3">{section.heading}</h2>
        <p class="text-gray-700">{section.content}</p>
      </section>
    {/each}
  </div>

  <!-- Workshop Section -->
  <div class="bg-gray-100 p-6 rounded-lg">
    <h2 class="text-2xl font-semibold mb-4">{chapterContent.workshop.title}</h2>
    <p class="mb-4">{chapterContent.workshop.instructions}</p>
    <pre class="bg-white p-4 rounded"><code>{chapterContent.workshop.codeExample}</code></pre>
  </div>

  <!-- Navigation -->
  <div class="mt-8 flex justify-between">
    <a href="/html" class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
      Back to Chapters
    </a>
    <a href="/html/chapter2" class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
      Next Chapter
    </a>
  </div>
</main>
