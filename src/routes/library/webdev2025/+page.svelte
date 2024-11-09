<script>
  import { onMount } from 'svelte';
</script>

<svelte:head>
  <title>Web Development Roadmap 2025</title>
  <meta name="description" content="A comprehensive guide to learning web development in 2025" />
</svelte:head>

<article class="prose prose-lg max-w-4xl mx-auto px-4 py-8">
  <h1>Web Development Roadmap 2025</h1>

  <p>Embarking on a journey to learn web development in 2025 is both exciting and rewarding. Here's a structured roadmap to guide you through the process, along with recommended resources to facilitate your learning.</p>

  <h2>1. Understand the Basics of the Web</h2>
  
  <p>Before diving into coding, it's essential to grasp how the web functions:</p>
  
  <ul>
    <li><strong>Internet Fundamentals</strong>: Learn about how the internet works, including concepts like HTTP/HTTPS, DNS, and web hosting.</li>
    <li><strong>Client-Server Model</strong>: Understand the interaction between clients (browsers) and servers.</li>
  </ul>

  <div class="resources">
    <h3>Resources:</h3>
    <ul>
      <li><a href="https://developer.mozilla.org/en-US/docs/Learn/Common_questions/How_does_the_Internet_work" target="_blank" rel="noopener noreferrer">How does the internet work?</a></li>
      <li><a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview" target="_blank" rel="noopener noreferrer">What is HTTP?</a></li>
    </ul>
  </div>

  <!-- Continue the same pattern for sections 2-8 -->
  
  <h2>Additional Tips for Success</h2>
  
  <ul>
    <li><strong>Practice Regularly</strong>: Consistent practice is key to mastering web development.</li>
    <li><strong>Build a Portfolio</strong>: Showcase your projects to potential employers or clients.</li>
    <li><strong>Network and Collaborate</strong>: Engage with other developers and contribute to open-source projects.</li>
    <li><strong>Seek Feedback</strong>: Don't hesitate to ask for feedback on your code and projects.</li>
  </ul>

  <p class="conclusion">By following this roadmap and utilizing these resources, you'll be well-equipped to embark on your web development journey in 2025. Remember, persistence and continuous learning are vital in this ever-evolving field.</p>
</article>

<style>
  .resources {
    background-color: #f3f4f6;
    padding: 1.5rem;
    border-radius: 0.5rem;
    margin: 1.5rem 0;
  }

  .resources h3 {
    margin-top: 0;
  }

  .conclusion {
    margin-top: 2rem;
    padding: 1rem;
    border-left: 4px solid #4f46e5;
    background-color: #f3f4f6;
  }

  /* Add these classes if you're not using TailwindCSS with @tailwind/typography */
  .prose {
    max-width: 65ch;
    line-height: 1.75;
  }

  .prose h1 {
    font-size: 2.25rem;
    margin-bottom: 2rem;
  }

  .prose h2 {
    font-size: 1.875rem;
    margin-top: 2.5rem;
    margin-bottom: 1.5rem;
  }

  .prose a {
    color: #4f46e5;
    text-decoration: underline;
  }

  .prose a:hover {
    color: #4338ca;
  }
</style>