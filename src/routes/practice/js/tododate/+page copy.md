---
title: To-Do List
---

Here's a basic HTML and JavaScript tutorial for creating a simple "To-Do List" web app. This will teach you how to add tasks, display them on the screen, and delete tasks when they are completed.

### Step 1: HTML Structure

Create an HTML file (`index.html`) with a simple layout for the to-do list.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Simple To-Do List</title>
  <style>
    body { font-family: Arial, sans-serif; display: flex; align-items: center; justify-content: center; height: 100vh; margin: 0; }
    .container { width: 300px; }
    input[type="text"] { width: 100%; padding: 10px; font-size: 16px; margin-bottom: 10px; }
    ul { list-style-type: none; padding: 0; }
    li { display: flex; justify-content: space-between; background: #f0f0f0; padding: 10px; margin-bottom: 5px; border-radius: 5px; }
    button { background: #ff6666; color: white; border: none; padding: 5px; cursor: pointer; }
  </style>
</head>
<body>
  <div class="container">
    <h2>To-Do List</h2>
    <input type="text" id="taskInput" placeholder="Add a new task" />
    <ul id="taskList"></ul>
  </div>

  <script src="script.js"></script>
</body>
</html>
```

In this HTML file:
- We have an input field for adding new tasks.
- An empty `<ul>` where tasks will be listed.
- Basic styling is applied to make it look clean.

### Step 2: JavaScript Functionality

Create a JavaScript file (`script.js`) to add functionality for adding and deleting tasks.

```javascript
// Select elements from the DOM
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

// Function to add a new task
function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === "") return; // If input is empty, exit function

  // Create a new list item (task) with a delete button
  const listItem = document.createElement("li");
  listItem.innerHTML = `${taskText} <button onclick="deleteTask(this)">Delete</button>`;

  // Add the new list item to the task list
  taskList.appendChild(listItem);

  // Clear the input field
  taskInput.value = "";
}

// Function to delete a task
function deleteTask(button) {
  const listItem = button.parentElement; // Get the list item to remove
  taskList.removeChild(listItem); // Remove the task from the list
}

// Add event listener to handle adding tasks when "Enter" key is pressed
taskInput.addEventListener("keyup", function(event) {
  if (event.key === "Enter") addTask();
});
```

In this JavaScript file:
- `addTask()` function creates a new list item with the task text and a "Delete" button.
- `deleteTask()` function removes a task when the "Delete" button is clicked.
- An event listener is added so that pressing "Enter" in the input field will add the task.

### Explanation of JavaScript Code
1. **Adding Tasks**: The `addTask` function checks if the input is not empty, creates a new list item with the task text and delete button, then adds this to the task list (`<ul>`).
2. **Deleting Tasks**: The `deleteTask` function removes the task associated with the "Delete" button.
3. **Handling Enter Key**: When the "Enter" key is pressed, it calls the `addTask` function.

### Run the App
Open `index.html` in your browser, and you should be able to add and delete tasks!