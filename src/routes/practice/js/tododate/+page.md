---
title: Todo App with Date Filtering
---

Here’s an enhanced "To-Do App with Date Filtering" using HTML, CSS, and JavaScript. This app allows users to add due dates to tasks, filter tasks by "Today," "Tomorrow," or "This Week," and highlights overdue tasks.

### Step 1: HTML Structure

Create an HTML file (`index.html`) to define the structure of the to-do app.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>To-Do App with Date Filtering</title>
  <style>
    body { font-family: Arial, sans-serif; display: flex; justify-content: center; align-items: flex-start; min-height: 100vh; margin: 0; background-color: #f5f5f5; padding: 20px; }
    .container { max-width: 600px; width: 100%; }
    h2 { text-align: center; color: #333; }
    .task-form { display: flex; gap: 10px; margin-bottom: 20px; }
    .task-form input[type="text"], .task-form input[type="date"] { padding: 10px; width: 100%; border: 1px solid #ccc; border-radius: 5px; }
    .task-form button { padding: 10px; background-color: #4CAF50; color: white; border: none; border-radius: 5px; cursor: pointer; }
    .task-form button:hover { background-color: #45a049; }
    .filter-buttons { display: flex; gap: 10px; margin-bottom: 15px; justify-content: space-between; }
    .filter-buttons button { padding: 10px; border: none; border-radius: 5px; cursor: pointer; background-color: #333; color: white; }
    .filter-buttons button:hover { background-color: #555; }
    .task-list { list-style: none; padding: 0; }
    .task-item { padding: 15px; margin-bottom: 10px; background-color: #ffffff; border-left: 5px solid #4CAF50; border-radius: 5px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); }
    .task-item.overdue { border-left-color: #ff6666; }
    .task-date { font-size: 14px; color: #888; margin-top: 5px; }
  </style>
</head>
<body>
  <div class="container">
    <h2>To-Do App with Date Filtering</h2>
    <div class="task-form">
      <input type="text" id="taskName" placeholder="Add a new task" required>
      <input type="date" id="dueDate" required>
      <button onclick="addTask()">Add Task</button>
    </div>
    <div class="filter-buttons">
      <button onclick="filterTasks('today')">Today</button>
      <button onclick="filterTasks('tomorrow')">Tomorrow</button>
      <button onclick="filterTasks('thisWeek')">This Week</button>
      <button onclick="filterTasks('all')">All Tasks</button>
    </div>
    <ul id="taskList" class="task-list"></ul>
  </div>

  <script src="script.js"></script>
</body>
</html>
```

In this HTML file:
- The task form includes an input for task name and a due date.
- Filter buttons (`Today`, `Tomorrow`, `This Week`, and `All Tasks`) allow for easy filtering of tasks.
- `taskList` is an unordered list where tasks will be displayed.

### Step 2: JavaScript Functionality

Create a JavaScript file (`script.js`) to handle adding, displaying, filtering, and highlighting overdue tasks.

```javascript
const taskList = document.getElementById("taskList");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function addTask() {
  const taskName = document.getElementById("taskName").value.trim();
  const dueDate = document.getElementById("dueDate").value;

  if (taskName === "" || dueDate === "") {
    alert("Please enter both a task and a due date.");
    return;
  }

  const task = {
    id: Date.now(),
    name: taskName,
    dueDate: dueDate,
    completed: false,
  };

  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  document.getElementById("taskName").value = "";
  document.getElementById("dueDate").value = "";

  renderTasks(tasks);
}

function renderTasks(taskArray) {
  taskList.innerHTML = "";
  const today = new Date().toISOString().split("T")[0];
  
  taskArray.forEach((task) => {
    const taskElement = document.createElement("li");
    taskElement.classList.add("task-item");
    if (task.dueDate < today) taskElement.classList.add("overdue"); // Highlight overdue tasks

    taskElement.innerHTML = `
      <span>${task.name}</span>
      <div class="task-date">Due: ${task.dueDate}</div>
    `;
    taskList.appendChild(taskElement);
  });
}

function filterTasks(filter) {
  const today = new Date();
  const taskFilter = {
    today: task => task.dueDate === today.toISOString().split("T")[0],
    tomorrow: task => task.dueDate === new Date(today.setDate(today.getDate() + 1)).toISOString().split("T")[0],
    thisWeek: task => {
      const taskDate = new Date(task.dueDate);
      const weekEnd = new Date(today);
      weekEnd.setDate(weekEnd.getDate() + (7 - weekEnd.getDay()));
      return taskDate >= today && taskDate <= weekEnd;
    },
    all: () => true
  };

  const filteredTasks = tasks.filter(taskFilter[filter]);
  renderTasks(filteredTasks);
}

// Load tasks on page load
document.addEventListener("DOMContentLoaded", () => renderTasks(tasks));
```

### Explanation of JavaScript Code

1. **Add Task**:
   - `addTask()` retrieves the task name and due date, validates them, and adds the task to the `tasks` array.
   - Saves tasks to `localStorage` for persistence and clears the input fields after adding.

2. **Render Tasks**:
   - `renderTasks()` displays the list of tasks on the screen, highlighting overdue tasks in red.
   - Compares the task’s due date to today’s date; if the task’s date is in the past, it adds the `overdue` class.

3. **Filter Tasks**:
   - `filterTasks(filter)` applies different filters based on the `filter` parameter:
     - **Today**: Matches tasks due today.
     - **Tomorrow**: Matches tasks due tomorrow.
     - **This Week**: Matches tasks due within the current week.
     - **All**: Displays all tasks.
   - Filters tasks by applying the corresponding filter function and then calls `renderTasks()` to display the filtered list.

4. **Persistence with Local Storage**:
   - Saves and retrieves tasks from `localStorage`, so tasks persist even after refreshing the page.

5. **Load Tasks on Page Load**:
   - Loads tasks from `localStorage` and renders them immediately on page load.

### Styling (CSS)

The CSS in `index.html`:
- Styles the task form, task items, and filter buttons.
- Highlights overdue tasks with a red border using the `.overdue` class.

### How to Use the To-Do App with Date Filtering

1. Open `index.html` in your browser.
2. Enter a task name and due date, then click "Add Task."
3. Use the filter buttons to display tasks due today, tomorrow, this week, or all tasks.
4. Overdue tasks are highlighted with a red border for easy identification.
5. Tasks persist across sessions with `localStorage`.