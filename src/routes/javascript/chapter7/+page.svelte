<script>
  import ChapterNavigation from '$lib/components/ChapterNavigation.svelte';
  import SolutionChecker from '$lib/components/SolutionChecker.svelte';
  let showCode = true;
</script>

<div class="container mx-auto px-4 py-8">
  <h1>Chapter 7: Introduction to Frontend Frameworks & Libraries</h1>
  
  <div class="chapter-intro">
    <p>Frontend frameworks and libraries simplify the process of building complex user interfaces. In this chapter, you'll get an overview of popular tools like React, Angular, and Vue.js, and learn about component-based architecture.</p>
    
    <div class="chapter-details">
      <p><strong>Duration:</strong> Approximately 3 hours</p>
      <p><strong>Goal:</strong> Understand the basics of frontend frameworks and libraries, learn the fundamentals of component-based architecture, and build a simple app using React.</p>
    </div>
  </div>

  <hr/>

  <h2>Theory</h2>

  <h3>7.1 Overview of Popular Frontend Frameworks/Libraries</h3>
  <div class="concept-block">
    <p>There are several popular frontend frameworks and libraries, each with its own strengths and ideal use cases:</p>

    <h4>React</h4>
    <ul>
      <li>A library for building user interfaces, developed by Facebook</li>
      <li>Uses a virtual DOM for efficient rendering</li>
      <li>Component-based architecture</li>
      <li>Ideal for single-page applications (SPAs)</li>
    </ul>

    <h4>Angular</h4>
    <ul>
      <li>A full-featured frontend framework developed by Google</li>
      <li>Includes built-in features like two-way data binding</li>
      <li>Best suited for large-scale applications</li>
    </ul>

    <h4>Vue.js</h4>
    <ul>
      <li>A progressive framework designed to be incrementally adoptable</li>
      <li>Combines features of both React and Angular</li>
      <li>Great for projects that require a lightweight framework</li>
    </ul>
  </div>

  <h3>7.2 Component-Based Architecture</h3>
  <div class="concept-block">
    <p>Component-based architecture breaks down an application into independent, reusable pieces:</p>
    
    <div class="code-preview bg-gray-100 p-4 rounded-lg my-4">
      <pre><code>function Greeting() &#123;
    return &lt;h1&gt;Hello, World!&lt;/h1&gt;;
&#125;</code></pre>
    </div>
  </div>

  <h2 class="workshop-title">Practice Workshop: First Steps with React</h2>
  <div class="workshop-container">
    <h3 class="task">Task: Create a simple React counter application</h3>
    
    <h4>Step 1: Setting Up React</h4>
    <div class="code-preview bg-gray-100 p-4 rounded-lg my-4">
      <pre><code>npx create-react-app my-react-app
cd my-react-app
npm start</code></pre>
    </div>

    <h4>Step 2: Creating the Counter Component</h4>
    <div class="code-preview bg-gray-100 p-4 rounded-lg my-4">
      <pre><code>import React, &#123; useState &#125; from 'react';

function Counter() &#123;
    const [count, setCount] = useState(0);

    return (
        &lt;div&gt;
            &lt;h1&gt;Counter: &#123;count&#125;&lt;/h1&gt;
            &lt;button onClick=&#123;() => setCount(count + 1)&#125;&gt;Increment&lt;/button&gt;
            &lt;button onClick=&#123;() => setCount(count - 1)&#125;&gt;Decrement&lt;/button&gt;
        &lt;/div&gt;
    );
&#125;

export default Counter;</code></pre>
    </div>

    <h3>Deliverables</h3>
    <ul>
      <li>Complete React project with Counter component</li>
      <li>Screenshot of the running application</li>
    </ul>

    <SolutionChecker />
  </div>

  <ChapterNavigation 
    prevHref="/javascript/chapter6" 
    nextHref="/practice"
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

  .workshop-container {
    padding: 1rem;
    background-color: #f8f9fa;
  }

  .code-preview {
    margin: 1rem 0;
  }

  .task {
    color: #2563eb;
    margin-bottom: 1rem;
  }
</style>