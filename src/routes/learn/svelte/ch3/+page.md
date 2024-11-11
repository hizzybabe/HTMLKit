---
title: Components & Logic
---

## Chapter 3: Components & Logic

In this chapter, you’ll dive into Svelte’s component structure, learn to use logic blocks for conditional rendering and loops, handle user interactions with events, and explore lifecycle methods. These features allow you to create responsive, interactive components. By the end of the chapter, you’ll apply these concepts by building a Todo List app.

### **Chapter 3 Overview:**
- Duration: Approximately 3 hours
- Goal: Learn to structure components, use logic blocks, handle events, and understand Svelte’s lifecycle methods.

---

### **Theory**

#### **3.1 Component Structure**

In Svelte, a component is a self-contained file that includes its JavaScript logic, HTML markup, and CSS styling. Components are organized with a `<script>` section for JavaScript, an HTML structure, and a `<style>` section for scoped CSS.

**Example of Component Structure**:
```svelte
<script>
    let message = "Hello, Svelte!";
</script>

<style>
    p {
        color: blue;
    }
</style>

<p>{message}</p>
```

---

#### **3.2 Logic Blocks**

Svelte provides control flow blocks for conditional rendering and looping over data.

- **`{#if ...}`**: Used for conditional rendering.
- **`{#each ...}`**: Used to loop over arrays.
- **`{:else}`**: Provides an alternative output when conditions are not met.

**Example of Logic Blocks**:
```svelte
<script>
    let showMessage = true;
    let items = ["Apple", "Banana", "Cherry"];
</script>

{#if showMessage}
    <p>Hello, this is a conditional message!</p>
{:else}
    <p>The message is hidden.</p>
{/if}

<ul>
    {#each items as item}
        <li>{item}</li>
    {/each}
</ul>
```

In this example:
- The first `if` block displays a message based on the `showMessage` variable.
- The `each` block loops through an array of items and displays each item in an unordered list.

---

#### **3.3 Event Handling**

Svelte simplifies event handling with the `on:` directive, which listens for events like clicks, keypresses, and form submissions. You can define event handlers inline or reference external functions.

**Example of Event Handling**:
```svelte
<script>
    function handleClick() {
        alert("Button clicked!");
    }
</script>

<button on:click={handleClick}>Click Me</button>
```

You can also pass parameters to event handlers:
```svelte
<script>
    function showAlert(message) {
        alert(message);
    }
</script>

<button on:click={() => showAlert("Hello, Svelte!")}>Alert</button>
```

---

#### **3.4 Lifecycle Methods**

Svelte provides lifecycle methods that allow you to run code at specific points in a component’s lifecycle:

- **`onMount`**: Runs after the component is first rendered.
- **`beforeUpdate`**: Runs before reactive updates.
- **`afterUpdate`**: Runs after reactive updates.
- **`onDestroy`**: Runs when a component is removed from the DOM.

**Example of `onMount`**:
```svelte
<script>
    import { onMount } from "svelte";

    let data;

    onMount(() => {
        // Fetch data or run setup code
        data = "Component mounted!";
    });
</script>

<p>{data}</p>
```

---

<h2 class="workshop-title">Practice Workshop: Todo List</h2>
<div class="workshop-container">

In this workshop, you’ll create a Todo List app that allows users to add, mark as complete, and delete tasks. This project will help you apply component structure, logic blocks, event handling, and lifecycle methods.

#### **Workshop Tasks**

1. **Set Up Your Project**
   - If you’re continuing from a previous project, use the same setup. Otherwise, set up a new Svelte project.
   - Create a new file named `TodoList.svelte` in the `src` folder for the main todo list component.

2. **Creating the Todo List Component**

   **TodoList.svelte**:
   ```svelte
   <script>
       import { onMount } from "svelte";

       let newTask = "";
       let todos = [];

       function addTask() {
           if (newTask.trim()) {
               todos = [...todos, { text: newTask, completed: false }];
               newTask = ""; // Clear the input field
           }
       }

       function toggleTask(index) {
           todos = todos.map((task, i) => i === index ? { ...task, completed: !task.completed } : task);
       }

       function deleteTask(index) {
           todos = todos.filter((_, i) => i !== index);
       }

       // Sample onMount functionality (optional)
       onMount(() => {
           console.log("TodoList component mounted!");
       });
   </script>

   <style>
       .completed {
           text-decoration: line-through;
           color: gray;
       }
   </style>

   <h2>Todo List</h2>
   <input type="text" bind:value={newTask} placeholder="Enter a new task" />
   <button on:click={addTask}>Add Task</button>

   <ul>
       {#each todos as { text, completed }, index}
           <li class={completed ? "completed" : ""}>
               <input type="checkbox" checked={completed} on:change={() => toggleTask(index)} />
               {text}
               <button on:click={() => deleteTask(index)}>Delete</button>
           </li>
       {/each}
   </ul>
   ```

   **Explanation**:
   - **Adding Tasks**: The `addTask` function adds a new task to the `todos` array if the input is not empty.
   - **Marking Tasks as Complete**: The `toggleTask` function toggles the `completed` status of a task by modifying the `todos` array.
   - **Deleting Tasks**: The `deleteTask` function removes a task from the `todos` array based on its index.
   - **Logic Blocks**: The `each` block loops through `todos` and displays each task as a list item.
   - **Styling**: The `.completed` class strikes through completed tasks.

3. **Integrating the TodoList Component**

   Open `App.svelte` and import the `TodoList` component to use it in the main app.

   **App.svelte**:
   ```svelte
   <script>
       import TodoList from './TodoList.svelte';
   </script>

   <h1>Svelte Todo List App</h1>
   <TodoList />
   ```

4. **Testing the Todo List App**
   - Start the development server (`npm run dev`) and open `http://localhost:5000` in your browser.
   - Test the app by adding tasks, marking them as complete, and deleting them. Ensure that each function works as expected.

---

### **Deliverables**

1. **Svelte Project Folder**:
   - Submit a zipped version of your Svelte project, including `TodoList.svelte` and `App.svelte`.

2. **Screenshot**:
   - Take a screenshot showing the Todo List App with some tasks, both completed and uncompleted, and buttons for interaction.

---

### **Summary and Key Takeaways**

- **Component Structure**: Svelte’s components allow you to combine HTML, CSS, and JavaScript in a single file.
- **Logic Blocks**: Use `if` and `each` blocks to conditionally render content and loop through data.
- **Event Handling**: Attach event listeners with `on:` and create responsive, interactive components.
- **Lifecycle Methods**: Use lifecycle methods like `onMount` for tasks that need to run at specific points in the component lifecycle.

This chapter covered the fundamental building blocks of interactive applications in Svelte. By completing the Todo List app, you’ve practiced using Svelte’s component structure, events, logic blocks, and lifecycle methods. These skills form a strong foundation for building more advanced applications.

</div>

<script>
  import ChapterNavigation from '$lib/components/ChapterNavigation.svelte';
</script>

<ChapterNavigation 
    prevHref="/learn/svelte/ch2" 
    nextHref="/learn/svelte/ch4"
  />