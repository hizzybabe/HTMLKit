<script>
  import ChapterNavigation from '$lib/components/ChapterNavigation.svelte';
</script>

<div class="container mx-auto px-4 py-8">
  <h1>Web Development Roadmap 2025</h1>
  
  <div class="chapter-intro">
    <p>Embarking on a journey to learn web development in 2025 is both exciting and rewarding. Here's a structured roadmap to guide you through the process, along with recommended resources to facilitate your learning.</p>
    
    <div class="chapter-details">
      <p><strong>Duration:</strong> Self-paced</p>
      <p><strong>Goal:</strong> Master modern web development fundamentals and frameworks</p>
    </div>
  </div>

  <hr/>

  <h2>1. Understand the Basics of the Web</h2>
  
  <div class="concept-block">
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
  </div>

  <!-- Continue sections 2-8 with the same pattern -->
  
  <div class="concept-block">
    <h2>Additional Tips for Success</h2>
    
    <ul>
      <li><strong>Practice Regularly</strong>: Consistent practice is key to mastering web development.</li>
      <li><strong>Build a Portfolio</strong>: Showcase your projects to potential employers or clients.</li>
      <li><strong>Network and Collaborate</strong>: Engage with other developers and contribute to open-source projects.</li>
      <li><strong>Seek Feedback</strong>: Don't hesitate to ask for feedback on your code and projects.</li>
    </ul>

    <p class="conclusion">By following this roadmap and utilizing these resources, you'll be well-equipped to embark on your web development journey in 2025. Remember, persistence and continuous learning are vital in this ever-evolving field.</p>
  </div>

  <ChapterNavigation 
    prevHref="/HTMLKit/library" 
    nextHref="/HTMLKit/library/resources" 
  />
</div>

<style>
  .concept-block {
    margin-bottom: 2rem;
  }
  
  .chapter-intro {
    background-color: #f8f9fa;
    padding: 1.5rem;
    border-radius: 8px;
    margin-bottom: 2rem;
  }

  .chapter-details {
    margin-top: 1rem;
    padding-top: 1rem;
    border-top: 1px solid #dee2e6;
  }

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
</style>