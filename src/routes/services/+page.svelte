<script>
  const services = [
    {
      title: "Web Development",
      description: "Custom website development using modern technologies",
      price: "$999"
    },
    {
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications",
      price: "$1499"
    },
    {
      title: "Cloud Consulting",
      description: "Expert guidance on cloud infrastructure and deployment",
      price: "$799"
    }
  ];
</script>

<main>
  <h1>Our Services</h1>
  
  <section>
    <p>Welcome to our services page. We offer various solutions to meet your needs.</p>
    
    <div class="services-grid">
      {#each services as service}
        <div class="service-card">
          <h2>{service.title}</h2>
          <p>{service.description}</p>
          <p>Starting at: {service.price}</p>
          <button>Learn More</button>
        </div>
      {/each}
    </div>
  </section>

  <section>
    <h2>Why Choose Us?</h2>
    <ul>
      <li>Expert Team</li>
      <li>Quick Delivery</li>
      <li>24/7 Support</li>
      <li>Competitive Pricing</li>
    </ul>
  </section>

  <section>
    <h2>Contact Us</h2>
    <form>
      <div>
        <label for="name">Name:</label>
        <input type="text" id="name" name="name">
      </div>
      
      <div>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email">
      </div>
      
      <div>
        <label for="message">Message:</label>
        <textarea id="message" name="message"></textarea>
      </div>
      
      <button type="submit">Send Message</button>
    </form>
  </section>
</main>
