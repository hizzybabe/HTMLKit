---
title: Advanced Concepts
---

## Chapter 5: Advanced Concepts

In this chapter, you’ll explore advanced Svelte features such as the Context API, special elements, actions, and custom stores. These tools allow for enhanced component communication, customization, and data management in larger applications. By the end of this chapter, you’ll apply these concepts by building a Data Dashboard to manage and display dynamic data.

### **Chapter 5 Overview:**
- Duration: Approximately 3 hours
- Goal: Learn and apply advanced Svelte features for inter-component communication, custom functionality, and complex state management.

---

### **Theory**

#### **5.1 Context API**

The Context API in Svelte allows components to share data across the component tree without prop drilling. The API has two main functions:

- **`setContext`**: Sets a value in the component context, making it available to child components.
- **`getContext`**: Retrieves a value from the context in child components.

**Example**:
```svelte
// Parent.svelte
<script>
    import { setContext } from "svelte";
    setContext("user", { name: "Alice", age: 30 });
</script>

<Child />

// Child.svelte
<script>
    import { getContext } from "svelte";
    const user = getContext("user");
</script>

<p>User: {user.name}, Age: {user.age}</p>
```

This example shares a `user` object from the parent component to any descendant that calls `getContext("user")`.

---

#### **5.2 Special Elements**

Svelte includes a few special elements for conditionally including code or rendering raw HTML:

- **`<svelte:component>`**: Dynamically renders a component based on a variable.
- **`<svelte:window>`**: Listens to events on the `window` object (e.g., resizing).
- **`<svelte:body>` and `<svelte:head>`**: Attach elements to the body or head of the document.

**Example of `<svelte:component>`**:
```svelte
<script>
    import ComponentA from './ComponentA.svelte';
    import ComponentB from './ComponentB.svelte';

    let currentComponent = ComponentA;
</script>

<svelte:component this={currentComponent} />
<button on:click={() => currentComponent = currentComponent === ComponentA ? ComponentB : ComponentA}>
    Toggle Component
</button>
```

Here, `<svelte:component>` dynamically renders either `ComponentA` or `ComponentB` based on the value of `currentComponent`.

---

#### **5.3 Actions**

Actions in Svelte are custom functions that can be applied to any HTML element to enhance its behavior. Actions can be used for things like tooltips, modals, or animations.

**Basic Action Example**:
```svelte
<script>
    function focusOnMount(node) {
        node.focus();
        return {
            destroy() {
                // Cleanup code if needed
            }
        };
    }
</script>

<input use:focusOnMount />
```

In this example, `focusOnMount` is an action that focuses the input field when it’s mounted.

---

#### **5.4 Custom Stores**

While Svelte provides `writable`, `readable`, and `derived` stores, you can create custom stores to encapsulate more complex logic. Custom stores allow you to define functions for updating and transforming data.

**Example of a Custom Store**:
```javascript
// counterStore.js
import { writable } from "svelte/store";

function createCounter() {
    const { subscribe, set, update } = writable(0);

    return {
        subscribe,
        increment: () => update(n => n + 1),
        decrement: () => update(n => n - 1),
        reset: () => set(0)
    };
}

export const counter = createCounter();
```

In a component, you can use this custom store as:
```svelte
<script>
    import { counter } from './counterStore.js';
</script>

<button on:click={counter.increment}>Increment</button>
<button on:click={counter.decrement}>Decrement</button>
<button on:click={counter.reset}>Reset</button>
<p>Counter: {$counter}</p>
```

This custom store includes `increment`, `decrement`, and `reset` functions that encapsulate the logic for managing the counter.

---

### **Practice Workshop: Data Dashboard**

In this workshop, you’ll create a Data Dashboard that incorporates context sharing, special elements, custom actions, and custom stores. The dashboard will include dynamic components, responsive actions, and data stored in custom stores.

#### **Workshop Tasks**

1. **Set Up Your Project**
   - If you’re continuing from a previous project, use the same setup. Otherwise, create a new Svelte project.
   - Create a new file named `DataDashboard.svelte` in the `src` folder.

2. **Creating the Custom Store for Dashboard Data**

   **dataStore.js**:
   ```javascript
   import { writable } from "svelte/store";

   function createDataStore() {
       const data = writable([
           { id: 1, label: "Revenue", value: 3000 },
           { id: 2, label: "Expenses", value: 1500 },
           { id: 3, label: "Profit", value: 1500 }
       ]);

       return {
           subscribe: data.subscribe,
           addData: (label, value) => data.update(items => [...items, { id: Date.now(), label, value }]),
           resetData: () => data.set([])
       };
   }

   export const dashboardData = createDataStore();
   ```

   **Explanation**:
   - `dashboardData` is a custom store that manages a list of data points for the dashboard.
   - The store includes `addData` and `resetData` functions to manipulate the data.

3. **Setting Up Context in the DataDashboard Component**

   **DataDashboard.svelte**:
   ```svelte
   <script>
       import { setContext, getContext } from "svelte";
       import { dashboardData } from './dataStore.js';

       setContext("dashboardData", dashboardData);
   </script>

   <h1>Data Dashboard</h1>
   <DataDisplay />
   <DataControls />
   ```

   This component sets `dashboardData` in the context, making it accessible to child components.

4. **Creating a Data Display Component**

   **DataDisplay.svelte**:
   ```svelte
   <script>
       import { getContext } from "svelte";
       const dashboardData = getContext("dashboardData");
   </script>

   <ul>
       {#each $dashboardData as { id, label, value }}
           <li>{label}: ${value}</li>
       {/each}
   </ul>
   ```

   This component retrieves `dashboardData` from the context and displays each item in a list.

5. **Creating Data Controls with Actions and Customization**

   **DataControls.svelte**:
   ```svelte
   <script>
       import { getContext } from "svelte";
       const dashboardData = getContext("dashboardData");

       let label = "";
       let value = 0;

       function handleAdd() {
           if (label.trim() && value > 0) {
               dashboardData.addData(label, value);
               label = "";
               value = 0;
           }
       }
   </script>

   <div>
       <input type="text" bind:value={label} placeholder="Label" />
       <input type="number" bind:value={value} placeholder="Value" />
       <button on:click={handleAdd}>Add Data</button>
       <button on:click={dashboardData.resetData}>Reset Data</button>
   </div>
   ```

   **Explanation**:
   - **Adding Data**: The `handleAdd` function adds a new data item to the store, accessed via the context.
   - **Resetting Data**: The reset button clears all data using `resetData` from the custom store.

6. **Integrating and Testing the Data Dashboard**

   - In `App.svelte`, import `DataDashboard` and include it in the main layout.

   **App.svelte**:
   ```svelte
   <script>
       import DataDashboard from './DataDashboard.svelte';
   </script>

   <DataDashboard />
   ```

   - Start the development server with `npm run dev` and open `http://localhost:5000` in your browser.
   - Test the app by adding and resetting data and ensuring the DataDisplay component updates dynamically.

---

### **Deliverables**

1. **Svelte Project Folder**:
   - Submit a zipped version of your Svelte project, including `DataDashboard.svelte`, `DataDisplay.svelte`, `DataControls.svelte`, and `dataStore.js`.

2. **Screenshot**:
   - Capture a screenshot showing the Data Dashboard with a few data entries displayed.

---

### **Summary and Key Takeaways**

- **Context API**: Shares data between parent and child components without prop drilling.
- **Special Elements**: Elements like `<svelte:component>` and `<svelte:window>` provide unique functionality.
- **Actions**: Custom functions applied to elements to add behaviors like focus, animations, or other effects.
- **Custom Stores**: Enable complex data management with encapsulated functions for updating data.

This chapter introduced advanced Svelte concepts that enhance data handling, user interaction, and component communication. These techniques allow you to build more robust and feature-rich applications.

<script>
  import ChapterNavigation from '$lib/components/ChapterNavigation.svelte';
</script>

<ChapterNavigation 
    prevHref="/learn/svelte/ch4" 
    nextHref="/learn/practice"
  />