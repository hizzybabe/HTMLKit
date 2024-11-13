---
title: Data Structures - Lists, Tuples, and Sets
---

**Chapter 7: Data Structures - Lists, Tuples, and Sets**

### Topics

#### 7.1 Introduction to Lists, Tuples, and Sets
   - **Lists**:
      - **Explanation**: Define lists as ordered, mutable collections of items.
      - **Syntax and Examples**:
        ```python
        fruits = ["apple", "banana", "cherry"]
        print(fruits[0])  # Outputs: apple
        ```
      - **Properties**: Lists are indexed, allowing duplicate items, and are mutable (can be changed after creation).

   - **Tuples**:
      - **Explanation**: Define tuples as ordered, immutable collections of items.
      - **Syntax and Examples**:
        ```python
        coordinates = (10, 20)
        print(coordinates[1])  # Outputs: 20
        ```
      - **Properties**: Tuples are indexed, allow duplicate items, and are immutable (cannot be changed after creation).
   
   - **Sets**:
      - **Explanation**: Define sets as unordered, mutable collections of unique items.
      - **Syntax and Examples**:
        ```python
        unique_numbers = {1, 2, 3, 4, 4}
        print(unique_numbers)  # Outputs: {1, 2, 3, 4}
        ```
      - **Properties**: Sets are unordered (items have no index), do not allow duplicate items, and support set operations (like union and intersection).

#### 7.2 List Methods and List Comprehensions
   - **Common List Methods**:
      - Introduce frequently used list methods like `append()`, `insert()`, `remove()`, `pop()`, and `sort()`.
      - Examples:
        ```python
        fruits = ["apple", "banana", "cherry"]
        fruits.append("date")  # Adds "date" to the end of the list
        fruits.remove("banana")  # Removes "banana" from the list
        print(fruits)  # Outputs: ["apple", "cherry", "date"]
        ```

   - **List Comprehensions**:
      - **Explanation**: Introduce list comprehensions as a concise way to create lists.
      - **Syntax**: `[expression for item in iterable if condition]`
      - Example:
        ```python
        numbers = [1, 2, 3, 4, 5]
        squares = [n**2 for n in numbers if n % 2 == 0]
        print(squares)  # Outputs: [4, 16]
        ```

---

<h2 class="workshop-title">Workshop Exercise</h2>
<div class="workshop-container">

#### Create a List of Favorite Foods and Print Each Item with a Message

- **Objective**: Use a list to store favorite foods and iterate through it to print a personalized message for each item.
- **Instructions**:
   1. **Define the List**:
      - Create a Python file (e.g., `favorite_foods.py`).
      - Define a list of favorite foods.
      - Example:
        ```python
        favorite_foods = ["pizza", "sushi", "pasta"]
        ```

   2. **Iterate and Print Messages**:
      - Use a `for` loop to print a message for each item.
      - Example:
        ```python
        for food in favorite_foods:
            print(f"I really enjoy eating {food}.")
        ```
   3. **Test the Code**:
      - Run the program to verify it displays each food item with the message.

</div>

<h2 class="workshop-title">Chapter Project</h2>
<div class="workshop-container">

**Project: Build a "Shopping List" App**

- **Description**: The Shopping List app will allow users to add items, remove items, and view the entire shopping list. Users can continue modifying the list until they choose to quit.

- **Objective**: Use lists and list methods to create a simple interactive app that manages items in a shopping list.

- **Instructions**:
   1. **Set Up the File**:
      - Create a Python file (e.g., `shopping_list.py`).
   
   2. **Define the Shopping List**:
      - Initialize an empty list called `shopping_list`.

   3. **Define Functions for List Operations**:
      - **Add Item**: Define a function `add_item()` that adds an item to the shopping list.
         ```python
         def add_item(item):
             shopping_list.append(item)
             print(f"{item} has been added to the shopping list.")
         ```

      - **Remove Item**: Define a function `remove_item()` that removes an item from the shopping list, handling cases where the item may not exist.
         ```python
         def remove_item(item):
             if item in shopping_list:
                 shopping_list.remove(item)
                 print(f"{item} has been removed from the shopping list.")
             else:
                 print(f"{item} is not in the shopping list.")
         ```

      - **View List**: Define a function `view_list()` that displays all items in the shopping list.
         ```python
         def view_list():
             if shopping_list:
                 print("Shopping List:")
                 for item in shopping_list:
                     print("- " + item)
             else:
                 print("The shopping list is empty.")
         ```

   4. **Create the Main Program Loop**:
      - Create a loop that continuously asks the user for an action (add, remove, view, or quit) until they choose to exit.
      - Example:
        ```python
        while True:
            print("\nOptions: add, remove, view, quit")
            action = input("Choose an action: ").lower()
            
            if action == "add":
                item = input("Enter the item to add: ")
                add_item(item)
            elif action == "remove":
                item = input("Enter the item to remove: ")
                remove_item(item)
            elif action == "view":
                view_list()
            elif action == "quit":
                print("Goodbye!")
                break
            else:
                print("Invalid option, please try again.")
        ```

   5. **Test the App**:
      - Run the program and test each option (adding, removing, viewing, and quitting).
      - Verify that the shopping list updates correctly based on user actions.

---

### Summary

This chapter introduces learners to essential data structures in Python, providing foundational skills for organizing and manipulating data. The workshop exercise familiarizes them with basic list usage, and the Shopping List project reinforces list operations and user interaction, creating a functional and engaging Python application.

</div>

<script>
  import ChapterNavigation from '$lib/components/ChapterNavigation.svelte';
</script>

<ChapterNavigation 
    prevHref="/learn/python/ch6" 
    nextHref="/learn/python/ch8"
  />