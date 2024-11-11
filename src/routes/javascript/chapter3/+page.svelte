<script>
  import ChapterNavigation from '$lib/components/ChapterNavigation.svelte';
  import SolutionChecker from '$lib/components/SolutionChecker.svelte';

  let showCode = true;
  let showCode1 = true;
  let showCode2 = true;
  let showCode3 = true;
  let showHtmlCode = false;
  let showJsCode = false;
</script>

<div class="container mx-auto px-4 py-8">
  <h1>Chapter 3: Working with Arrays & Objects</h1>
  
  <div class="chapter-intro">
    <p>In this chapter, we'll explore two essential JavaScript data structures: arrays and objects. Arrays allow you to store lists of values, while objects organize data with key-value pairs. We'll also introduce JSON, a data format widely used for transmitting data in web applications.</p>
    
    <div class="chapter-details">
      <p><strong>Duration:</strong> Approximately 2 hours</p>
      <p><strong>Goal:</strong> Understand and manipulate arrays and objects in JavaScript, and apply these skills in a To-Do List app.</p>
    </div>
  </div>

  <hr/>

  <h2>Theory</h2>

  <h3>3.1 Understanding and Manipulating Arrays</h3>
  <p>Arrays are used to store collections of data in JavaScript. Each item in an array has an index, starting from 0, and you can use various methods to manipulate array contents.</p>

  <div class="concept-block">
    <h4>Array Syntax and Methods (To-Do list exmaple)</h4>
    <div class="code-preview bg-gray-100 p-4 rounded-lg my-4">
      <button 
        class="toggle-btn mb-2 px-2 py-1 text-sm text-white rounded"
        style="background-color: rgb(59 130 246) !important"
        on:click={() => showCode = !showCode}
      >
        {showCode ? 'Show Preview' : 'Show Code'}
      </button>
      
      {#if showCode}
      <pre><code>let colors = ["red", "green", "blue"];

// Common Array Methods
let tasks = ["Do laundry", "Write code"];
tasks.push("Read a book");     // Adds to end
tasks.splice(1, 1);           // Removes item at index 1
tasks.forEach(task => console.log(task));</code></pre>
      {:else}
      <div class="preview-content">
        <p>Output in console:</p>
        <p>Do laundry</p>
        <p>Read a book</p>
      </div>
      {/if}
    </div>
  </div>

<h4>Additional array methods</h4>

  <pre><code>
    // Creating arrays
    let colors = ["red", "green", "blue"];
    let numbers = [1, 2, 3, 4, 5];
    let mixed = [1, "hello", true, 3.14]; // Arrays can store different types
    
    // Accessing elements
    console.log(colors[0]);  // Output: "red"
    console.log(colors[1]);  // Output: "green"
    console.log(colors.length);  // Output: 3
    
    // Common Array Methods
    let tasks = ["Do laundry", "Write code"];
    
    // Adding elements
    tasks.push("Read a book");     // Adds to end
    tasks.unshift("Exercise");     // Adds to beginning
    
    // Removing elements
    tasks.pop();                   // Removes from end
    tasks.shift();                 // Removes from beginning
    tasks.splice(1, 1);           // Removes 1 item starting at index 1
    
    // Iterating through arrays
    tasks.forEach(task => console.log(task));  // Prints each task
    
    // Other useful array methods
    let numbers = [1, 2, 3, 4, 5];
    let doubled = numbers.map(num => num * 2);    // Creates new array [2, 4, 6, 8, 10]
    let evenNumbers = numbers.filter(num => num % 2 === 0);  // Creates new array [2, 4]
    let sum = numbers.reduce((acc, curr) => acc + curr, 0); // Sums all numbers</code></pre>

  <h4>Other Practical Array Examples</h4>

  <pre><code>
    // Shopping cart example
let cart = [];

function addItem(item) &#123;
    cart.push(item)&#59;
&#125;

function removeItem(index) &#123;
    cart.splice(index, 1)&#59;
&#125;

addItem(&#123; name: "T-shirt", price: 15.99 &#125;)&#59;
addItem(&#123; name: "Jeans", price: 39.99 &#125;)&#59;</code></pre>

  <h3>3.2 Working with Objects</h3>
  <p>Objects in JavaScript are collections of key-value pairs, similar to a dictionary. They help organize related data and behaviors together.</p>


  <h4>Objects example (To-Do list exmaple)</h4>

  <div class="concept-block">
    <div class="code-preview bg-gray-100 p-4 rounded-lg my-4">
      <button 
        class="toggle-btn mb-2 px-2 py-1 text-sm text-white rounded"
        style="background-color: rgb(59 130 246) !important"
        on:click={() => showCode1 = !showCode1}
      >
        {showCode1 ? 'Show Preview' : 'Show Code'}
      </button>
      
      {#if showCode1}
      <pre><code>
        let task = &#123;
  text: "Do laundry",
  done: false
&#125;;

// Accessing properties
console.log(task.text);      // Using dot notation
console.log(task["done"]);   // Using bracket notation

// Modifying properties
task.done = true;</code></pre>
      {:else}
      <div class="preview-content">
        <p>Console output:</p>
        <p>"Do laundry"</p>
        <p>false</p>
      </div>
      {/if}
    </div>
  </div>

  <h4>Other Object Basics and Usage</h4>

  <pre><code>
    // Creating objects
    let person = &#123;
        name: "John",
        age: 30,
        isEmployed: true,
        hobbies: ["reading", "gaming"],
        address: &#123;
            street: "123 Main St",
            city: "Boston"
        &#125;
    &#125;;
    
    // Accessing properties
    console.log(person.name);        // Using dot notation
    console.log(person["age"]);      // Using bracket notation
    
    // Modifying properties
    person.age = 31;
    person.email = "john@example.com";  // Adding new property
    
    // Object methods
    let calculator = &#123;
        add: function(a, b) &#123;
            return a + b;
        &#125;,
        subtract(a, b) &#123;  // Shorthand method syntax
            return a - b;
        &#125;
    &#125;;
    
    console.log(calculator.add(5, 3));      // Output: 8</code></pre>

  <h4>Other Object Examples (Task manager exmaple)</h4>

  <pre><code>
    // Task manager example
    let task = &#123;
        title: "Complete project",
        dueDate: "2024-12-31",
        priority: "high",
        completed: false,
        
        toggleComplete() &#123;
            this.completed = !this.completed;
        &#125;,
        
        isOverdue() &#123;
            return new Date(this.dueDate) &lt; new Date();
        &#125;
    &#125;;
    
    // Using the task object
    task.toggleComplete();  // Marks task as complete
    console.log(task.completed);  // Output: true
  </code></pre>

  <h4>Advanced Object Concepts</h4>

  <pre><code>
    // Object destructuring
const &#123; title, dueDate &#125; = task;

// Spread operator with objects
let taskCopy = &#123; ...task &#125;;

// Object methods
console.log(Object.keys(task));     // Get all keys
console.log(Object.values(task));   // Get all values
console.log(Object.entries(task));  // Get key-value pairs
  </code></pre>

  <!-- Continue with workshop section -->
  <h2 class="workshop-title">Practice Workshop: "To-Do List App"</h2>
  <div class="workshop-container">
    <h3 class="task">Task: Create a basic To-Do List application using arrays and objects</h3>
    
    <h4>Step 1: Set Up Your Files</h4>
    <div>Create two new files:</div>
    <ul>
      <li><code>todo.html</code> - for the HTML structure</li>
      <li><code>todo.js</code> - for the JavaScript code</li>
    </ul>

    <h4>Step 2: Create the HTML Structure</h4>
    <div class="code-preview bg-gray-100 p-4 rounded-lg my-4">
      <button 
        class="toggle-btn mb-2 px-2 py-1 text-sm text-white rounded"
        style="background-color: rgb(59 130 246) !important"
        on:click={() => showHtmlCode = !showHtmlCode}
      >
        {showHtmlCode ? 'Show Preview' : 'Show Code'}
      </button>
      
      {#if showHtmlCode}
      <pre><code>&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;title&gt;To-Do List App&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;h1&gt;My To-Do List&lt;/h1&gt;
    
    &lt;div&gt;
        &lt;input type="text" id="taskInput" placeholder="Enter new task"&gt;
        &lt;button onclick="addTask()"&gt;Add Task&lt;/button&gt;
    &lt;/div&gt;
    
    &lt;ul id="taskList"&gt;&lt;/ul&gt;

    &lt;script src="todo.js"&gt;&lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>
      {:else}
      <div class="preview-content">
        <h1>My To-Do List</h1>
        <div>
          <input type="text" placeholder="Enter new task" disabled>
          <button disabled>Add Task</button>
        </div>
        <ul></ul>
      </div>
      {/if}
    </div>

    <h4>Step 3: Implement the JavaScript Logic</h4>
    <div>In your <code>todo.js</code> file, implement the following functionality:</div>
    <ul>
      <li>Store tasks in an array of objects</li>
      <li>Add new tasks</li>
      <li>Toggle task completion status</li>
      <li>Delete tasks</li>
    </ul>

    <div class="code-preview bg-gray-100 p-4 rounded-lg my-4">
      <button 
        class="toggle-btn mb-2 px-2 py-1 text-sm text-white rounded"
        style="background-color: rgb(59 130 246) !important"
        on:click={() => showJsCode = !showJsCode}
      >
        {showJsCode ? 'Show Preview' : 'Show Code'}
      </button>
      
      {#if showJsCode}
      <pre><code>


        false// Array to store tasks
        let tasks = [];
        
        // Function to add a new task
        function addTask() &#123;
            const input = document.getElementById('taskInput');
            const text = input.value.trim();
            
            if (text) &#123;
                const task = &#123;
                    id: Date.now(),
                    text: text,
                    done: false
                &#125;;
                
                tasks.push(task);
                renderTasks();
                input.value = '';
            &#125;
        &#125;
        
        false// Array to store tasks
        let tasks = [];
        
        // Function to add a new task
        function addTask() &#123;
            const input = document.getElementById('taskInput');
            const text = input.value.trim();
            
            if (text) &#123;
                const task = &#123;
                    id: Date.now(),
                    text: text,
                    done: false
                &#125;;
                
                tasks.push(task);
                renderTasks();
                input.value = '';
            &#125;
        &#125;
        
        // Function to render tasks
        function renderTasks() &#123;
            const list = document.getElementById('taskList');
            list.innerHTML = '';
            
            tasks.forEach(task =&gt; &#123;
                const li = document.createElement('li');
                li.innerHTML = `
                    &lt;input type="checkbox" 
                           $&#123;task.done ? 'checked' : ''&#125; 
                           onclick="toggleTask($&#123;task.id&#125;)"&gt;
                    &lt;span style="$&#123;task.done ? 'text-decoration: line-through' : ''&#125;"&gt;
                        $&#123;task.text&#125;
                    &lt;/span&gt;
                    &lt;button onclick="deleteTask($&#123;task.id&#125;)"&gt;Delete&lt;/button&gt;
                `;
                list.appendChild(li);
            &#125;);
        &#125;
        // Function to toggle task completion
        function toggleTask(id) &#123;
            const task = tasks.find(t =&gt; t.id === id);
            if (task) &#123;
                task.done = !task.done;
                renderTasks();
            &#125;
        &#125;
        
        // Function to delete task
        function deleteTask(id) &#123;
            tasks = tasks.filter(task =&gt; task.id !== id);
            renderTasks();
        &#125;



      </code></pre>
      {:else}
      <div class="preview-content">
        <p>JavaScript code for managing tasks</p>
      </div>
      {/if}
    </div>

    <h3>Deliverables</h3>
    <ul>
      <li>Complete todo.html and todo.js files</li>
      <li>Working To-Do List application that can:</li>
      <ul>
        <li>Add new tasks</li>
        <li>Mark tasks as complete</li>
        <li>Delete tasks</li>
      </ul>
      <li>Screenshot of your working application</li>
    </ul>

    <SolutionChecker />
  </div>

  <ChapterNavigation 
    prevHref="/javascript/chapter2" 
    nextHref="/javascript/chapter4"
  />
</div>

<style>
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

  .concept-block {
    margin-bottom: 2rem;
  }

  .workshop-container {
    padding: 1rem;
    background-color: #f8f9fa;
  }

  .code-preview {
    margin: 1rem 0;
  }
  
  .preview-content {
    padding: 1rem;
    background: white;
    border-radius: 4px;
  }
</style>
