<script>
  import ChapterNavigation from '$lib/components/ChapterNavigation.svelte';
  let showCode = true;
</script>

<div class="container mx-auto px-4 py-8">
  <h1>Chapter 6: Advanced Topics & Best Practices</h1>
  
  <div class="chapter-intro">
    <p>In this chapter, you'll dive into advanced JavaScript concepts such as closures, the module pattern, and the `this` context. These topics will help you write cleaner, more efficient, and secure code.</p>
    
    <div class="chapter-details">
      <p><strong>Duration:</strong> Approximately 2-3 hours</p>
      <p><strong>Goal:</strong> Understand advanced JavaScript concepts and best practices to refactor code for better organization, security, and performance.</p>
    </div>
  </div>

  <hr/>

  <h2>Theory</h2>

  <h3>6.1 Introduction to Closures and the Module Pattern</h3>
  <div class="concept-block">
    <h4>Closures</h4>
    <p>A closure is a function that has access to its own scope, the scope of the outer function, and the global scope. Closures are useful for creating private variables and functions.</p>

    <div class="code-preview bg-gray-100 p-4 rounded-lg my-4">
      <pre><code>function createCounter() {
    let count = 0;
    return function() {
        count++;
        return count;
    };
}

const counter = createCounter();
console.log(counter()); // Output: 1
console.log(counter()); // Output: 2</code></pre>
    </div>

    <h4>Module Pattern</h4>
    <p>The module pattern leverages closures to encapsulate code within a function, allowing you to create private variables and expose only the necessary parts.</p>

    <div class="code-preview bg-gray-100 p-4 rounded-lg my-4">
      <pre><code>const ToDoModule = (function() {
    let tasks = []; // Private variable

    function addTask(task) {
        tasks.push(task);
    }

    function getTasks() {
        return tasks;
    }

    return {
        addTask,
        getTasks
    };
})();

ToDoModule.addTask("Learn JavaScript");
console.log(ToDoModule.getTasks()); // Output: ["Learn JavaScript"]</code></pre>
    </div>
  </div>

  <h3>6.2 Understanding 'this' Context</h3>
  <div class="concept-block">
    <h4>The 'this' Keyword</h4>
    <p>The 'this' keyword refers to the current execution context. Its value depends on how and where a function is called, not where it's defined.</p>

    <div class="code-preview bg-gray-100 p-4 rounded-lg my-4">
      <pre><code>// Different contexts of 'this'
const person = {
    name: 'John',
    greet: function() {
        console.log(`Hello, I'm ${this.name}`);
    }
};

person.greet(); // Output: "Hello, I'm John"

const greetFunction = person.greet;
greetFunction(); // Output: "Hello, I'm undefined"</code></pre>
    </div>

    <h4>Arrow Functions and 'this'</h4>
    <p>Arrow functions don't create their own 'this' context; they inherit it from the enclosing scope.</p>

    <div class="code-preview bg-gray-100 p-4 rounded-lg my-4">
      <pre><code>const timer = {
    seconds: 0,
    start: function() {
        setInterval(() => {
            this.seconds++; // 'this' refers to timer object
            console.log(this.seconds);
        }, 1000);
    }
};

timer.start(); // Counts up every second</code></pre>
    </div>
  </div>

  <h3>6.3 Best Practices for Code Organization</h3>
  <div class="concept-block">
    <h4>Code Structure</h4>
    <ul>
      <li>Group related functionality together</li>
      <li>Use meaningful names for variables and functions</li>
      <li>Keep functions small and focused</li>
      <li>Comment complex logic</li>
    </ul>

    <h4>Error Handling</h4>
    <div class="code-preview bg-gray-100 p-4 rounded-lg my-4">
      <pre><code>function fetchUserData(userId) {
    try {
        // Attempt to fetch user data
        const response = await fetch(`/api/users/${userId}`);
        if (!response.ok) {
            throw new Error('User not found');
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching user:', error);
        // Handle error appropriately
        throw error;
    }
}</code></pre>
    </div>
  </div>

  <hr/>

  <h2 class="workshop-title">Practice Workshop: Refactoring the To-Do List App</h2>
  <div class="workshop-container">
    <h3 class="task">Task: Refactor the To-Do List application using advanced JavaScript concepts</h3>
    
    <h4>Step 1: Module Pattern Implementation</h4>
    <div class="code-preview bg-gray-100 p-4 rounded-lg my-4">
      <pre><code>const TodoApp = (function() {
    // Private variables
    let tasks = [];
    let nextId = 1;

    // Private functions
    function generateId() {
        return nextId++;
    }

    // Public interface
    return {
        addTask(title) {
            const task = {
                id: generateId(),
                title,
                completed: false
            };
            tasks.push(task);
            return task;
        },
        
        getTasks() {
            return [...tasks]; // Return copy to maintain encapsulation
        }
    };
})();</code></pre>
    </div>

    <h4>Step 2: Event Handling with Error Boundaries</h4>
    <div class="code-preview bg-gray-100 p-4 rounded-lg my-4">
      <pre><code>function handleAddTask(event) {
    try {
        event.preventDefault();
        const input = document.getElementById('taskInput');
        if (!input.value.trim()) {
            throw new Error('Task cannot be empty');
        }
        TodoApp.addTask(input.value);
        input.value = '';
        renderTasks();
    } catch (error) {
        showError(error.message);
    }
}</code></pre>
    </div>

    <h3>Deliverables</h3>
    <ul>
      <li>Refactored To-Do List application using advanced JavaScript concepts</li>
    </ul>
  </div>

  <ChapterNavigation 
    prevHref="/HTMLKit/javascript/chapter5" 
    nextHref="/HTMLKit/javascript/chapter7"
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

  .code-preview {
    margin: 1rem 0;
  }
</style>