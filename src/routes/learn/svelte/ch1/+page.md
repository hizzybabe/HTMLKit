---
title: Introduction to Svelte & Setup
---

## Chapter 1: Introduction to Svelte & Setup

In this chapter, you’ll learn about Svelte, a modern JavaScript framework for building user interfaces. Unlike other frameworks, Svelte shifts much of the work to compile time, resulting in faster, more efficient applications. This chapter covers what makes Svelte unique, how to set up your development environment, and how to create your first Svelte component.

### **Chapter 1 Overview:**
- Duration: Approximately 1-2 hours
- Goal: Understand what Svelte is, how it differs from other frameworks, and how to set up a basic Svelte project.

---

### **Theory**

#### **1.1 What is Svelte?**

Svelte is a component-based JavaScript framework that focuses on simplicity, reactivity, and performance. Unlike frameworks like React or Vue, Svelte doesn’t use a virtual DOM. Instead, it compiles components into optimized JavaScript at build time, resulting in lean, highly performant code.

**Key Features of Svelte**:
- **Compile-Time Optimizations**: Svelte shifts most work to compile time, resulting in minimal runtime overhead.
- **Reactivity**: Built-in reactivity makes state management easy without complex setup.
- **Simple Syntax**: Svelte’s syntax is straightforward, with less boilerplate code compared to other frameworks.

---

#### **1.2 Svelte vs Other Frameworks**

Understanding how Svelte differs from other popular frameworks can help you choose the right tool for your project. Here’s a comparison:

- **Virtual DOM**: Unlike React and Vue, Svelte doesn’t use a virtual DOM. Instead, it compiles components to minimal, efficient JavaScript, directly updating the DOM when needed.
- **Component Structure**: Svelte’s components are self-contained files with HTML, CSS, and JavaScript, allowing for a natural separation of concerns.
- **Performance**: Svelte apps tend to have smaller bundle sizes and faster loading times due to compile-time optimizations.
- **Reactivity**: Svelte has built-in reactivity based on simple variable assignments, removing the need for complex state management libraries.

#### **1.3 Setting Up Your Development Environment**

To work with Svelte, you’ll need to set up your development environment. Follow these steps:

1. **Install Node.js**:
   - Download and install Node.js from [https://nodejs.org](https://nodejs.org).
   - Verify the installation by running `node -v` and `npm -v` in your terminal.

2. **Create a New Svelte Project**:
   - Use the Svelte template to set up a new project:
     ```bash
     npx degit sveltejs/template hello-svelte
     ```
   - This creates a new folder named `hello-svelte` with the necessary project files.

3. **Navigate to Your Project Directory**:
   ```bash
   cd hello-svelte
   ```

4. **Install Dependencies**:
   - Run the following command to install project dependencies:
     ```bash
     npm install
     ```

5. **Start the Development Server**:
   - Start the Svelte development server to view your project in the browser:
     ```bash
     npm run dev
     ```
   - Open `http://localhost:5000` in your browser to view the default Svelte project.

---

#### **1.4 Understanding Svelte Files**

A typical Svelte component file has three main sections: `<script>`, `<style>`, and HTML markup. Here’s a breakdown:

- **`<script>`**: Contains JavaScript code to define variables, functions, and imports. Svelte automatically re-renders components when reactive variables change.
- **`<style>`**: Contains CSS to style the component. Svelte’s styling is scoped by default, meaning styles in one component don’t affect others.
- **HTML Markup**: Contains the component’s HTML structure, which Svelte compiles to optimized JavaScript.

**Example of a Basic Svelte Component**:
```svelte
<script>
    let name = "World";
</script>

<style>
    h1 {
        color: purple;
    }
</style>

<h1>Hello, {name}!</h1>
```

In this example:
- **`name`** is a reactive variable that Svelte re-renders automatically when it changes.
- **CSS** is scoped to this component, so it won’t affect other components with `h1` elements.

---

### **Practice Workshop: Hello Svelte!**

In this workshop, you’ll create a simple “Hello, Svelte!” component. This will introduce you to the structure of a Svelte component and help you verify that your setup is correct.

#### **Workshop Tasks**

1. **Navigate to Your Project Directory**:
   - Open your `hello-svelte` project folder in a code editor.

2. **Edit `App.svelte`**:
   - In the `src` folder, open the `App.svelte` file. This is the main component in your project.
   - Modify the content to display a custom greeting using a variable.

   **App.svelte**:
   ```svelte
   <script>
       let name = "Svelte Developer";
   </script>

   <style>
       h1 {
           color: teal;
           font-family: Arial, sans-serif;
       }
   </style>

   <h1>Hello, {name}!</h1>
   ```

3. **Running Your Svelte App**:
   - Ensure the development server is running by entering `npm run dev` in your terminal.
   - Open `http://localhost:5000` in your browser, and you should see “Hello, Svelte Developer!” displayed.

4. **Experiment with Styling and Variables**:
   - Try changing the `name` variable to see how Svelte updates the display.
   - Modify the CSS styling to explore how Svelte applies scoped styles.

5. **Adding an Input for Interaction**:
   - Add an input element to make the greeting dynamic. Update the `name` variable whenever the user types in the input.

   **Updated App.svelte**:
   ```svelte
   <script>
       let name = "Svelte Developer";
   </script>

   <style>
       h1 {
           color: teal;
           font-family: Arial, sans-serif;
       }

       input {
           margin-top: 10px;
           padding: 5px;
       }
   </style>

   <h1>Hello, {name}!</h1>
   <input type="text" bind:value={name} placeholder="Enter your name">
   ```

   **Explanation**:
   - **`bind:value={name}`**: This creates a two-way binding between the input field and the `name` variable, automatically updating the `name` variable as the user types.

6. **Testing the Interactive Component**:
   - In your browser, try typing a new name in the input field, and observe how the greeting updates instantly.

---

### **Deliverables**

1. **Svelte Project Folder**:
   - Submit a zipped version of your `hello-svelte` project with the updated `App.svelte` component.

2. **Screenshot**:
   - Take a screenshot showing the running app with the interactive greeting feature.

---

### **Summary and Key Takeaways**

- **Svelte Overview**: Svelte is a compile-time framework that generates highly efficient JavaScript, focusing on simplicity and reactivity.
- **Setting Up**: Use `npx degit sveltejs/template` to quickly set up a Svelte project.
- **Svelte Files**: Svelte components consist of `<script>`, `<style>`, and HTML sections, with scoped CSS and reactivity by default.

This chapter introduced you to the basics of Svelte and set up your first component. Practicing with Svelte’s syntax and reactivity will deepen your understanding as you work on more advanced features.

<script>
  import ChapterNavigation from '$lib/components/ChapterNavigation.svelte';
</script>

<ChapterNavigation 
    prevHref="/learn/svelte" 
    nextHref="/learn/svelte/ch2"
  />
