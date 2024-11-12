---
title: Integrations & UI Frameworks
---

## Chapter 5: Integrations & UI Frameworks

In this chapter, you’ll explore Astro’s ability to integrate components from other frameworks, including React and Svelte, and understand how Astro’s “Component Islands” approach enables efficient loading. You’ll also learn about hydration strategies, which allow you to control when and how components become interactive on the client side. By the end of this chapter, you’ll build an interactive widget using components from different frameworks.

### **Chapter 5 Overview:**
- Duration: Approximately 3 hours
- Goal: Learn how to integrate React and Svelte components in Astro, understand Component Islands, and apply different hydration strategies.

---

### **Theory**

#### **5.1 Using React Components**

Astro supports using components from various frameworks, including React, Vue, and Svelte. To use React components, you’ll first need to install the React integration for Astro.

**Setup for React Components in Astro**:
1. Install the necessary dependencies:
   ```bash
   npm install @astrojs/react react react-dom
   ```

2. Add the React integration in `astro.config.mjs`:
   ```javascript
   import { defineConfig } from 'astro/config';
   import react from '@astrojs/react';

   export default defineConfig({
       integrations: [react()],
   });
   ```

3. Create a React component in the `src/components` directory.

   **Counter.jsx**:
   ```jsx
   import { useState } from 'react';

   export default function Counter() {
       const [count, setCount] = useState(0);

       return (
           <div>
               <p>Count: {count}</p>
               <button onClick={() => setCount(count + 1)}>Increment</button>
           </div>
       );
   }
   ```

4. Import and use the React component in an `.astro` file.

   **index.astro**:
   ```astro
   ---
   import Counter from '../components/Counter.jsx';
   ---

   <h1>Welcome to My Astro Site with React</h1>
   <Counter client:load />
   ```

**Explanation**:
- **`client:load`**: The `client:load` directive hydrates the component on page load, making it interactive on the client side.

---

#### **5.2 Using Svelte Components**

Similarly, you can integrate Svelte components in Astro. First, install the Svelte integration.

**Setup for Svelte Components in Astro**:
1. Install the necessary dependencies:
   ```bash
   npm install @astrojs/svelte svelte
   ```

2. Add the Svelte integration in `astro.config.mjs`:
   ```javascript
   import { defineConfig } from 'astro/config';
   import svelte from '@astrojs/svelte';

   export default defineConfig({
       integrations: [svelte()],
   });
   ```

3. Create a Svelte component in `src/components`.

   **Alert.svelte**:
   ```svelte
   <script>
       export let message = "Hello from Svelte!";
   </script>

   <div style="padding: 10px; background-color: lightcoral; color: white;">
       {message}
   </div>
   ```

4. Import and use the Svelte component in an `.astro` file.

   **index.astro**:
   ```astro
   ---
   import Alert from '../components/Alert.svelte';
   ---

   <h1>Astro with Svelte Components</h1>
   <Alert message="This is a Svelte component!" client:load />
   ```

**Explanation**:
- **Props**: You can pass props to Svelte components, like `message` in this example.
- **`client:load`**: Ensures the component becomes interactive upon page load.

---

#### **5.3 Component Islands**

Astro’s “Component Islands” architecture allows components from different frameworks (React, Svelte, Vue, etc.) to coexist in the same Astro project. Only specific parts of the page are hydrated and made interactive, while the rest remains static, leading to faster load times and better performance.

**Example of Component Islands**:
```astro
---
import Counter from '../components/Counter.jsx';
import Alert from '../components/Alert.svelte';
---

<h1>My Astro Site with Component Islands</h1>

<!-- React Component Island -->
<section>
   <h2>Counter</h2>
   <Counter client:load />
</section>

<!-- Svelte Component Island -->
<section>
   <h2>Alert</h2>
   <Alert message="This is a Svelte component!" client:load />
</section>
```

In this setup, both the React and Svelte components are “islands” that become interactive only when needed, while the rest of the page remains static HTML.

---

#### **5.4 Hydration Strategies**

Astro provides several hydration directives, allowing you to control when and how components become interactive. The main strategies include:

- **`client:load`**: Hydrates the component as soon as the page loads.
- **`client:idle`**: Hydrates the component when the browser is idle, improving performance on initial load.
- **`client:visible`**: Hydrates the component when it becomes visible in the viewport, suitable for content further down the page.
- **`client:media`**: Hydrates the component based on a media query, like `client:media="(min-width: 768px)"`.
- **`client:only="framework"`**: Hydrates the component only when using a specific framework, like `client:only="react"`.

**Example**:
```astro
---
import Counter from '../components/Counter.jsx';
---

<Counter client:idle />
```

Choosing the right hydration strategy can help optimize performance by delaying or limiting JavaScript execution until it’s truly needed.

---

<h2 class="workshop-title">Practice Workshop: Interactive Widget</h2>
<div class="workshop-container">
In this workshop, you’ll build an interactive widget in Astro, combining React and Svelte components. The widget will display an alert (using Svelte) and a counter (using React) with different hydration strategies to optimize performance.

#### **Workshop Tasks**

1. **Set Up React and Svelte Integrations**

   - Follow the instructions in the React and Svelte sections above to install and configure both integrations in your Astro project.

2. **Create the Counter Component in React**

   **Counter.jsx**:
   ```jsx
   import { useState } from 'react';

   export default function Counter() {
       const [count, setCount] = useState(0);

       return (
           <div>
               <p>React Counter: {count}</p>
               <button onClick={() => setCount(count + 1)}>Increment</button>
           </div>
       );
   }
   ```

   - This React component will increment a counter value when the button is clicked.

3. **Create the Alert Component in Svelte**

   **Alert.svelte**:
   ```svelte
   <script>
       export let message = "Hello from Svelte!";
   </script>

   <div style="padding: 10px; background-color: #ff6347; color: white; border-radius: 4px;">
       <p>{message}</p>
   </div>
   ```

   - The Svelte component will display an alert message, which can be customized through a prop.

4. **Combine Components in the Widget**

   - Create a new page in `src/pages` named `interactive-widget.astro`.

   **interactive-widget.astro**:
   ```astro
   ---
   import Counter from '../components/Counter.jsx';
   import Alert from '../components/Alert.svelte';
   ---

   <h1>Interactive Widget</h1>

   <section>
       <h2>Svelte Alert</h2>
       <!-- Use client:visible to hydrate only when the component becomes visible -->
       <Alert message="This is a Svelte alert component!" client:visible />
   </section>

   <section>
       <h2>React Counter</h2>
       <!-- Use client:idle to hydrate only when the browser is idle -->
       <Counter client:idle />
   </section>
   ```

   **Explanation**:
   - **Svelte Alert**: Hydrated with `client:visible`, meaning it only loads once it comes into view, conserving resources.
   - **React Counter**: Hydrated with `client:idle`, deferring its hydration until the browser is idle, enhancing performance on page load.

5. **Test the Interactive Widget**

   - Start the Astro development server (`npm run dev`) and navigate to `http://localhost:3000/interactive-widget`.
   - Verify that the Svelte alert loads only when it becomes visible and that the React counter is interactive after the initial page load.

---

### **Deliverables**

1. **Astro Project Folder**:
   - Submit a zipped version of your Astro project, including `Counter.jsx`, `Alert.svelte`, and `interactive-widget.astro`.

2. **Screenshot or GIF**:
   - Capture a screenshot or GIF demonstrating the interactive widget, with the alert and counter components working as expected.

---

### **Summary and Key Takeaways**

- **Using React and Svelte in Astro**: Astro’s integrations allow you to combine components from different frameworks, adding flexibility to your projects.
- **Component Islands**: Astro’s Component Islands architecture hydrates only necessary parts of the page, optimizing performance.
- **Hydration Strategies**: Astro offers various hydration directives, allowing you to control when components become interactive, improving page load times and user experience.

This chapter introduced Astro’s unique integrations and hydration options, enabling you to build interactive yet optimized web applications. By completing the interactive widget workshop, you’ve practiced combining frameworks and managing hydration effectively, setting a

 foundation for more complex web projects in Astro.

</div>

<script>
  import ChapterNavigation from '$lib/components/ChapterNavigation.svelte';
</script>

<ChapterNavigation 
    prevHref="/learn/astro/ch4" 
    nextHref="/learn/practice"
  />