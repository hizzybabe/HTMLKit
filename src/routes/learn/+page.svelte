<script>
    const chapters = [
      {
        title: "HTML",
        topics: [
          "7 Chapters",
          "Practice Projects in Every Chapter",
          "Self-Paced Learning",
          "Easy to Understand",
          "For Beginners and Intermediates",
        ]
      },
      {
        title: "CSS",
        topics: [
            "7 Chapters",
          "Practice Projects in Every Chapter",
          "Self-Paced Learning",
          "Easy to Understand",
          "For Beginners and Intermediates",
        ]
      },
      {
        title: "Javascript",
        topics: [
            "7 Chapters",
          "Practice Projects in Every Chapter",
          "Self-Paced Learning",
          "Easy to Understand",
          "For Beginners and Intermediates",
        ]
      },
      {
        title: "Svelte",
        topics: [
            "5 Chapters",
          "Practice Projects in Every Chapter",
          "Self-Paced Learning",
          "Easy to Understand",
          "For Beginners and Intermediates",
        ]
      },
      {
        title: "Astro",
        topics: [
            "5 Chapters",
          "Practice Projects in Every Chapter",
          "Self-Paced Learning",
          "Easy to Understand",
          "For Beginners and Intermediates",
        ]
      },
      {
        title: "Python",
        topics: [
            "14 Chapters",
          "Practice Projects in Every Chapter",
          "Self-Paced Learning",
          "Easy to Understand",
          "For Beginners and Intermediates",
        ]
      },
      {
        title: "React (⌛Soon)",
        topics: [
            "TBC Chapters",
          "Practice Projects in Every Chapter",
          "Self-Paced Learning",
          "Easy to Understand",
          "For Beginners and Intermediates",
        ]
      }
    ];
  </script>
  
  <div class="container">
    <h1>Learn WebDev</h1>
    <p class="intro">Master the fundamentals of WebDev with our comprehensive guides</p>
  
    <div class="chapters">
      {#each chapters as chapter, index}
        <div class="chapter-card">
          <h2>{chapter.title}</h2>
          <ul>
            {#each chapter.topics as topic}
              <li>{topic}</li>
            {/each}
          </ul>
          <button on:click={() => window.location.href=`/learn/${chapter.title.toLowerCase()}`}>Start Learning</button>
        </div>
      {/each}
    </div>
  </div>
  
  <style>
  
  </style>
  