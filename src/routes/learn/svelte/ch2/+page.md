<script>
  import ChapterNavigation from '$lib/components/ChapterNavigation.svelte';
</script>

---
title: Reactivity & State Management
---

## Chapter 2: Reactivity & State Management

In this chapter, you’ll explore Svelte’s reactivity model, which allows you to automatically update the UI when variables change. You’ll also learn about managing component state, using props for data flow between components, and leveraging stores for centralized state management. By the end of this chapter, you’ll build a Counter App to practice Svelte’s reactive declarations and state management techniques.

### **Chapter 2 Overview:**
- Duration: Approximately 2-3 hours
- Goal: Understand and apply Svelte’s reactivity model, component state, props, and stores to create dynamic and interactive applications.

---

### **Theory**

#### **2.1 Reactive Declarations**

In Svelte, reactivity is automatic. Variables are reactive by default, meaning that changes to a variable automatically trigger re-renders of any parts of the UI that depend on that variable.

**Reactive Declarations with `$:`**:
- You can use `$:` to create reactive statements, which automatically re-run whenever any referenced variables change.

**Example**:
```svelte
<script>
    let count = 0;
    
    $: double = count * 2; // This will update whenever 'count' changes
</script>

<p>Count: {count}</p>
<p>Double: {double}</p>
<button on:click={() => count++}>Increment</button>
```

In this example, `double` is a reactive declaration that recalculates whenever `count` changes.

---

#### **2.2 Stores**

Stores in Svelte provide a way to manage state outside of components, making it easier to share data between components. Svelte provides three main types of stores:

- **Writable Store**: Allows both reading and updating of a value.
- **Readable Store**: Allows reading of a value without direct updates.
- **Derived Store**: Computes a value based on other stores.

To create a writable store:
1. Import `writable` from `svelte/store`.
2. Initialize the store with an initial value.
3. Subscribe to the store or bind its value to elements in your components.

**Example**:
```javascript
// store.js
import { writable } from 'svelte/store';

export const count = writable(0);
```

In a Svelte component, you can subscribe to the store:
```svelte
<script>
    import { count } from './store.js';
</script>

<button on:click={() => count.update(n => n + 1)}>Increment</button>
<p>Count: {$count}</p>
```

Using `$count` automatically subscribes to the store and re-renders the component whenever `count` changes.

---

#### **2.3 Props**

Props allow you to pass data from a parent component to a child component, making it easier to share data between components. In Svelte, props are defined by declaring variables with the `export` keyword in the child component.

**Example**:
1. **Child Component (Counter.svelte)**:
   ```svelte
   <script>
       export let initialCount = 0;
       let count = initialCount;
   </script>

   <button on:click={() => count++}>Count: {count}</button>
   ```

2. **Parent Component (App.svelte)**:
   ```svelte
   <script>
       import Counter from './Counter.svelte';
   </script>

   <Counter initialCount={10} />
   ```

The `initialCount` prop allows the parent component to pass an initial value to the child component.

---

#### **2.4 Component State**

Component state in Svelte is managed using local variables. Since variables in Svelte are reactive by default, updating the state variable will automatically update the UI.

For example:
```svelte
<script>
    let name = "Svelte";
</script>

<p>Hello, {name}!</p>
<input type="text" bind:value={name}>
```

In this example, `name` is a state variable bound to the input field, so any changes to the input are automatically reflected in the UI.

---

### **Practice Workshop: Counter App**

In this workshop, you’ll create a Counter App using Svelte’s reactivity, state management, and props. The app will have three main features:
- A counter that can be incremented and decremented.
- A reset button to reset the counter.
- The ability to set an initial count value from a parent component.

#### **Workshop Tasks**

1. **Set Up Your Project**
   - If you’re continuing from the previous chapter, you can use the same project.
   - Create a new file named `Counter.svelte` in the `src` folder for the counter component.

2. **Creating the Counter Component**

   **Counter.svelte**:
   ```svelte
   <script>
       export let initialCount = 0;
       let count = initialCount;

       function increment() {
           count++;
       }

       function decrement() {
           count--;
       }

       function reset() {
           count = initialCount;
       }
   </script>

   <style>
       button {
           margin: 5px;
           padding: 5px 10px;
       }
   </style>

   <h2>Counter: {count}</h2>
   <button on:click={increment}>Increment</button>
   <button on:click={decrement}>Decrement</button>
   <button on:click={reset}>Reset</button>
   ```

   **Explanation**:
   - **Props**: `initialCount` is defined as a prop with the `export` keyword, allowing the parent component to set the starting value.
   - **Functions**: The `increment`, `decrement`, and `reset` functions manage the counter’s state and are called when buttons are clicked.

3. **Integrating the Counter Component**

   Open `App.svelte` and import the `Counter` component to use it in the main app.

   **App.svelte**:
   ```svelte
   <script>
       import Counter from './Counter.svelte';
   </script>

   <h1>Svelte Counter App</h1>
   <Counter initialCount={10} />
   ```

   **Explanation**:
   - **Prop Passing**: The `initialCount` prop is set to `10`, so the counter starts at this value. You can change it to test different starting points.

4. **Adding a Store for Global State (Optional)**

   Create a store to manage a global count value. This is optional but demonstrates how to use a store for shared state.

   **store.js**:
   ```javascript
   import { writable } from 'svelte/store';

   export const globalCount = writable(0);
   ```

   **Using the Store in Counter.svelte**:
   ```svelte
   <script>
       import { globalCount } from './store.js';
   </script>

   <button on:click={() => globalCount.update(n => n + 1)}>Global Increment</button>
   <p>Global Count: {$globalCount}</p>
   ```

   This optional section adds a global counter that multiple components could access and modify, demonstrating how stores can help manage shared state.

5. **Running Your App**
   - Make sure your development server is running (`npm run dev`).
   - Open `http://localhost:5000` to see the Counter App in action.
   - Test each button and observe how the count updates.

---

### **Deliverables**

1. **Svelte Project Folder**:
   - Submit a zipped version of your Svelte project, including `Counter.svelte` and `App.svelte`.

2. **Screenshot**:
   - Take a screenshot showing the Counter App with different button states (e.g., after incrementing and resetting).

---

### **Summary and Key Takeaways**

- **Reactivity in Svelte**: Reactive declarations with `$:` allow automatic updates when variables change.
- **Stores**: Svelte’s stores provide an efficient way to manage shared state across components.
- **Props**: Props pass data from parent to child components, promoting reusability.
- **Component State**: Svelte manages state with local variables, keeping UI elements responsive to changes.

This chapter covered Svelte’s powerful reactivity and state management features, enabling you to build interactive components. Practicing these techniques will help you understand how to manage component-level and global state in Svelte applications.

<ChapterNavigation 
    prevHref="/learn/svelte/ch1" 
    nextHref="/learn/svelte/ch3"
  />