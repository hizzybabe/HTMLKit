<script>
  const courses = [
    { title: "Python", status: "In Progress" },
    { title: "React", status: "In Progress" },
    { title: "Next.js", status: "Planned" },
    { title: "PHP", status: "Planned" },
    { title: "WordPress", status: "Planned" }
  ];
</script>

<div class="container mx-auto px-4 py-8">
  <h1 class="text-3xl font-bold mb-6">Course Statuses</h1>
  
  <section class="course-status">
    <h2 class="text-2xl font-semibold mb-4">In Progress</h2>
    <ul>
      {#each courses.filter(course => course.status === "In Progress") as course}
        <li>{course.title}</li>
      {/each}
    </ul>
    
    <h2 class="text-2xl font-semibold mt-6 mb-4">Planned</h2>
    <ul>
      {#each courses.filter(course => course.status === "Planned") as course}
        <li>{course.title}</li>
      {/each}
    </ul>
  </section>
</div>

<style>
  .course-status {
    background-color: #f9f9f9;
    padding: 1.5rem;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
</style>
