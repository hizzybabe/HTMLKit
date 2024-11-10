---
title: Expense Tracker
---

Here's a simple "Expense Tracker" using HTML, CSS, and JavaScript. This tracker allows users to add, delete, and edit expenses, displays total expenses, categorizes spending, and saves data in local storage to persist across sessions.

### Step 1: HTML Structure

Create an HTML file (`index.html`) to define the structure of the expense tracker.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Expense Tracker</title>
  <style>
    body { font-family: Arial, sans-serif; display: flex; justify-content: center; align-items: center; height: 100vh; margin: 0; background-color: #f5f5f5; }
    .tracker-container { width: 400px; padding: 20px; border-radius: 10px; background-color: #333; color: white; }
    h2 { text-align: center; }
    .form-group { display: flex; justify-content: space-between; margin-bottom: 15px; }
    input[type="text"], input[type="number"], select { padding: 8px; width: 60%; font-size: 16px; border: none; border-radius: 5px; }
    button { padding: 10px; font-size: 16px; cursor: pointer; background-color: #4CAF50; color: white; border: none; border-radius: 5px; }
    button:hover { opacity: 0.9; }
    .expense-list { list-style: none; padding: 0; margin: 20px 0; }
    .expense-item { display: flex; justify-content: space-between; margin-bottom: 10px; background-color: #444; padding: 10px; border-radius: 5px; }
    .total-expenses { font-size: 18px; text-align: center; margin-top: 15px; }
  </style>
</head>
<body>
  <div class="tracker-container">
    <h2>Expense Tracker</h2>
    <div class="form-group">
      <input type="text" id="expenseName" placeholder="Expense Name">
      <input type="number" id="expenseAmount" placeholder="Amount">
      <select id="expenseCategory">
        <option value="Food">Food</option>
        <option value="Transport">Transport</option>
        <option value="Entertainment">Entertainment</option>
        <option value="Other">Other</option>
      </select>
    </div>
    <button onclick="addExpense()">Add Expense</button>

    <ul class="expense-list" id="expenseList"></ul>

    <div class="total-expenses" id="totalExpenses">Total: $0</div>
  </div>

  <script src="script.js"></script>
</body>
</html>
```

In this HTML file:
- Input fields for the expense name, amount, and category selection.
- A button to add expenses.
- A list (`<ul id="expenseList">`) to display added expenses.
- A total expenses display (`<div id="totalExpenses">`).

### Step 2: JavaScript Functionality

Create a JavaScript file (`script.js`) to handle the expense tracker logic.

```javascript
let expenses = JSON.parse(localStorage.getItem("expenses")) || [];
let totalAmount = 0;

function addExpense() {
  const name = document.getElementById("expenseName").value;
  const amount = parseFloat(document.getElementById("expenseAmount").value);
  const category = document.getElementById("expenseCategory").value;

  if (!name || isNaN(amount) || amount <= 0) return alert("Please enter valid expense details.");

  const expense = { id: Date.now(), name, amount, category };
  expenses.push(expense);
  saveAndRenderExpenses();
  clearForm();
}

function deleteExpense(id) {
  expenses = expenses.filter(expense => expense.id !== id);
  saveAndRenderExpenses();
}

function editExpense(id) {
  const expense = expenses.find(expense => expense.id === id);
  document.getElementById("expenseName").value = expense.name;
  document.getElementById("expenseAmount").value = expense.amount;
  document.getElementById("expenseCategory").value = expense.category;
  deleteExpense(id);
}

function saveAndRenderExpenses() {
  localStorage.setItem("expenses", JSON.stringify(expenses));
  renderExpenses();
}

function renderExpenses() {
  const expenseList = document.getElementById("expenseList");
  const totalExpenses = document.getElementById("totalExpenses");

  expenseList.innerHTML = "";
  totalAmount = 0;

  expenses.forEach(expense => {
    const expenseItem = document.createElement("li");
    expenseItem.classList.add("expense-item");
    expenseItem.innerHTML = `
      <span>${expense.name} - $${expense.amount} (${expense.category})</span>
      <button onclick="editExpense(${expense.id})">Edit</button>
      <button onclick="deleteExpense(${expense.id})">Delete</button>
    `;
    expenseList.appendChild(expenseItem);
    totalAmount += expense.amount;
  });

  totalExpenses.innerText = `Total: $${totalAmount.toFixed(2)}`;
}

function clearForm() {
  document.getElementById("expenseName").value = "";
  document.getElementById("expenseAmount").value = "";
  document.getElementById("expenseCategory").value = "Food";
}

// Initial render on page load
renderExpenses();
```

### Explanation of JavaScript Code

1. **Expense Array**: `expenses` is an array of objects that holds each expense’s details. It’s saved in `localStorage` for data persistence.
2. **Adding an Expense**: `addExpense()` retrieves values from input fields, validates them, creates an expense object with a unique `id` (using `Date.now()`), and saves it in `expenses`.
3. **Deleting an Expense**: `deleteExpense(id)` removes an expense by filtering out the matching `id`.
4. **Editing an Expense**: `editExpense(id)` populates the input fields with the selected expense's details, deletes the original entry, and allows for re-saving with updated values.
5. **Save and Render Expenses**: `saveAndRenderExpenses()` updates `localStorage` and refreshes the displayed expense list.
6. **Rendering Expenses**: `renderExpenses()` clears the previous display, iterates over `expenses`, displays each expense with name, amount, category, and provides Edit/Delete buttons. It also calculates and displays the total amount.
7. **Clear Form**: `clearForm()` resets the input fields.

### Styling (CSS)

The CSS in `index.html`:
- Styles the expense tracker with a dark background and light text.
- Formats the expense list and buttons for a clean, user-friendly layout.

### How to Use the Expense Tracker

1. Open `index.html` in your browser.
2. Enter an expense name, amount, and select a category, then click "Add Expense".
3. View, edit, or delete expenses from the displayed list.
4. Total expenses and the categorized display will update dynamically.
5. The tracker will save data in `localStorage`, so expenses persist across sessions.