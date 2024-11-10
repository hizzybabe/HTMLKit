<div class="container mx-auto px-4 py-8">
  <h1>About TechWizard Academy</h1>
  
  <section class="hero">
    <h2>🚀 Your Journey to Web Development Excellence</h2>
    <p>TechWizard Academy is a comprehensive learning platform designed to help aspiring web developers master the fundamentals of modern web development.</p>
  </section>

  <section class="features">
    <div class="feature">
      <h3>📚 Structured Learning</h3>
      <p>Our curriculum is carefully crafted to take you from basics to advanced concepts in HTML, CSS, JavaScript, Svelte, and Astro.</p>
    </div>

    <div class="feature">
      <h3>💻 Interactive Practice</h3>
      <p>Learn by doing with our hands-on workshops and practical exercises designed to reinforce your understanding.</p>
    </div>

    <div class="feature">
      <h3>🎯 Project-Based Approach</h3>
      <p>Build real-world projects that help you understand how different web technologies work together.</p>
    </div>
  </section>

  <section class="mission">
    <h2>Our Mission</h2>
    <p>At TechWizard Academy, we believe that learning web development should be accessible, practical, and enjoyable. Our mission is to provide high-quality, structured learning resources that help students build a strong foundation in web development technologies.</p>
  </section>

  <section class="team">
    <h2>Meet the Team</h2>
    <div class="team-grid">
      <div class="team-member">
        <img src="https://via.placeholder.com/150" alt="Team Member" class="avatar">
        <h3>John Doe</h3>
        <p>Lead Instructor</p>
      </div>
      <div class="team-member">
        <img src="https://via.placeholder.com/150" alt="Team Member" class="avatar">
        <h3>Jane Smith</h3>
        <p>Content Developer</p>
      </div>
      <div class="team-member">
        <img src="https://via.placeholder.com/150" alt="Team Member" class="avatar">
        <h3>Mike Johnson</h3>
        <p>Technical Writer</p>
      </div>
    </div>
  </section>
</div>

<style>
  h1 {
    text-align: center;
    color: var(--primary);
    margin-bottom: 2rem;
    font-size: 2.5rem;
  }

  .hero {
    background: linear-gradient(45deg, var(--primary), var(--secondary));
    color: white;
    padding: 3rem 2rem;
    border-radius: 8px;
    text-align: center;
    margin-bottom: 3rem;
  }

  .hero h2 {
    margin-bottom: 1rem;
  }

  .features {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    margin-bottom: 3rem;
  }

  .feature {
    padding: 1.5rem;
    border: 1px solid #ddd;
    border-radius: 8px;
    text-align: center;
  }

  .mission {
    background: #f5f5f5;
    padding: 3rem 2rem;
    border-radius: 8px;
    margin-bottom: 3rem;
    text-align: center;
  }

  .mission h2 {
    color: var(--primary);
    margin-bottom: 1rem;
  }

  .team {
    text-align: center;
  }

  .team h2 {
    color: var(--primary);
    margin-bottom: 2rem;
  }

  .team-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 2rem;
    margin-top: 2rem;
  }

  .team-member {
    padding: 1rem;
  }

  .avatar {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    margin: 0 auto 1rem;
  }

  @media (max-width: 768px) {
    .team-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
