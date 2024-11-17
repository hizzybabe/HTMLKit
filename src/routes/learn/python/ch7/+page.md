---
title: Data Structures - Lists, Tuples, and Sets
---

**Chapter 7: Data Structures - Lists, Tuples, and Sets**

### Topics

### 7.1 Introduction to Lists, Tuples, and Sets

---

#### **Lists**

**Explanation**:
- A **list** is an ordered collection of items (elements) that are **mutable**, meaning you can add, remove, or change items after the list is created.
- Lists are one of the most versatile data structures in Python.

**Syntax and Examples**:
```python
# Creating a list
fruits = ["apple", "banana", "cherry"]
print(fruits[0])  # Outputs: apple

# Adding an item
fruits.append("orange")
print(fruits)  # Outputs: ['apple', 'banana', 'cherry', 'orange']

# Changing an item
fruits[1] = "blueberry"
print(fruits)  # Outputs: ['apple', 'blueberry', 'cherry', 'orange']

# Removing an item
fruits.remove("cherry")
print(fruits)  # Outputs: ['apple', 'blueberry', 'orange']
```

**Properties**:
1. **Ordered**: Items have a fixed order.
2. **Indexed**: Items can be accessed using their index.
3. **Allows Duplicates**: Items can appear more than once.
4. **Mutable**: Items can be added, removed, or modified.

---

#### **Tuples**

**Explanation**:
- A **tuple** is an ordered collection of items that are **immutable**, meaning the items in a tuple cannot be changed after the tuple is created.
- Tuples are often used to represent fixed collections of items.

**Syntax and Examples**:
```python
# Creating a tuple
coordinates = (10, 20)
print(coordinates[1])  # Outputs: 20

# Attempting to modify a tuple (raises an error)
# coordinates[1] = 30  # TypeError: 'tuple' object does not support item assignment

# Nested tuples
nested = (1, (2, 3), 4)
print(nested[1])  # Outputs: (2, 3)
```

**Properties**:
1. **Ordered**: Items have a fixed order.
2. **Indexed**: Items can be accessed using their index.
3. **Allows Duplicates**: Items can appear more than once.
4. **Immutable**: Once created, the tuple’s items cannot be changed.

**Why Use Tuples?**
- They are faster than lists for fixed collections.
- They are ideal for data that should not change, such as coordinates or database records.

---

#### **Sets**

**Explanation**:
- A **set** is an unordered collection of unique items. Unlike lists and tuples, sets do not allow duplicate items.
- Sets are primarily used for operations like union, intersection, and difference.

**Syntax and Examples**:
```python
# Creating a set
unique_numbers = {1, 2, 3, 4, 4}
print(unique_numbers)  # Outputs: {1, 2, 3, 4}

# Adding an item
unique_numbers.add(5)
print(unique_numbers)  # Outputs: {1, 2, 3, 4, 5}

# Removing an item
unique_numbers.remove(3)
print(unique_numbers)  # Outputs: {1, 2, 4, 5}

# Set operations
set_a = {1, 2, 3}
set_b = {3, 4, 5}
print(set_a | set_b)  # Union: Outputs: {1, 2, 3, 4, 5}
print(set_a & set_b)  # Intersection: Outputs: {3}
print(set_a - set_b)  # Difference: Outputs: {1, 2}
```

**Properties**:
1. **Unordered**: Items have no fixed order.
2. **No Duplicates**: Duplicate items are automatically removed.
3. **Mutable**: You can add or remove items.
4. **Supports Set Operations**: Such as union (`|`), intersection (`&`), and difference (`-`).

**Why Use Sets?**
- To ensure items are unique.
- For efficient membership testing (e.g., `x in set`).

---

#### **Comparison of Lists, Tuples, and Sets**

| Feature              | List                  | Tuple                 | Set                   |
|----------------------|-----------------------|-----------------------|-----------------------|
| **Order**            | Ordered               | Ordered               | Unordered             |
| **Indexing**         | Supported             | Supported             | Not supported         |
| **Mutability**       | Mutable               | Immutable             | Mutable               |
| **Duplicates**       | Allowed               | Allowed               | Not allowed           |
| **Use Case**         | General-purpose       | Fixed collections     | Unique items and set operations |

---

#### **Examples**

1. **Using Lists**:
   - Use a list to store names of students.
   ```python
   students = ["Alice", "Bob", "Charlie"]
   students.append("Diana")
   print(students)  # Outputs: ['Alice', 'Bob', 'Charlie', 'Diana']
   ```

2. **Using Tuples**:
   - Use a tuple to store immutable data, such as GPS coordinates.
   ```python
   coordinates = (40.7128, -74.0060)  # Latitude and Longitude of NYC
   print(coordinates)  # Outputs: (40.7128, -74.0060)
   ```

3. **Using Sets**:
   - Use a set to find unique items in a collection.
   ```python
   numbers = [1, 2, 2, 3, 4, 4, 5]
   unique_numbers = set(numbers)
   print(unique_numbers)  # Outputs: {1, 2, 3, 4, 5}
   ```

---

#### **Summary**

1. **Lists**:
   - Ordered, mutable, allow duplicates.
   - Example:
     ```python
     fruits = ["apple", "banana", "cherry"]
     fruits.append("orange")
     print(fruits)  # Outputs: ['apple', 'banana', 'cherry', 'orange']
     ```

2. **Tuples**:
   - Ordered, immutable, allow duplicates.
   - Example:
     ```python
     coordinates = (10, 20)
     print(coordinates[1])  # Outputs: 20
     ```

3. **Sets**:
   - Unordered, mutable, unique items only.
   - Example:
     ```python
     unique_numbers = {1, 2, 3, 4, 4}
     print(unique_numbers)  # Outputs: {1, 2, 3, 4}
     ```

Understanding these collections will help you choose the right one for your specific programming needs!

### 7.2 List Methods and List Comprehensions

---

#### **Common List Methods**

Python lists come with several built-in methods to manipulate and manage list data. Below are some of the most commonly used methods.

---

1. **`append()`**:
   - Adds an item to the end of the list.
   ```python
   fruits = ["apple", "banana", "cherry"]
   fruits.append("date")
   print(fruits)  # Outputs: ['apple', 'banana', 'cherry', 'date']
   ```

2. **`insert()`**:
   - Inserts an item at a specified position.
   ```python
   fruits = ["apple", "banana", "cherry"]
   fruits.insert(1, "blueberry")  # Adds "blueberry" at index 1
   print(fruits)  # Outputs: ['apple', 'blueberry', 'banana', 'cherry']
   ```

3. **`remove()`**:
   - Removes the first occurrence of a specified item.
   ```python
   fruits = ["apple", "banana", "cherry", "banana"]
   fruits.remove("banana")  # Removes the first "banana"
   print(fruits)  # Outputs: ['apple', 'cherry', 'banana']
   ```

4. **`pop()`**:
   - Removes and returns an item at a specified index (default is the last item).
   ```python
   fruits = ["apple", "banana", "cherry"]
   last_fruit = fruits.pop()
   print(last_fruit)  # Outputs: cherry
   print(fruits)  # Outputs: ['apple', 'banana']
   ```

5. **`sort()`**:
   - Sorts the list in ascending order (modifies the original list).
   ```python
   numbers = [3, 1, 4, 1, 5, 9]
   numbers.sort()
   print(numbers)  # Outputs: [1, 1, 3, 4, 5, 9]
   ```

6. **`reverse()`**:
   - Reverses the order of the list.
   ```python
   numbers = [1, 2, 3, 4, 5]
   numbers.reverse()
   print(numbers)  # Outputs: [5, 4, 3, 2, 1]
   ```

7. **`index()`**:
   - Returns the index of the first occurrence of a specified value.
   ```python
   fruits = ["apple", "banana", "cherry"]
   print(fruits.index("banana"))  # Outputs: 1
   ```

8. **`count()`**:
   - Counts the occurrences of a specific item.
   ```python
   numbers = [1, 2, 2, 3, 3, 3]
   print(numbers.count(3))  # Outputs: 3
   ```

---

#### **List Comprehensions**

**What Are List Comprehensions?**
- **List comprehensions** provide a concise way to create lists by applying an expression to each item in an iterable, optionally filtering items with a condition.
- They are more compact and often more readable than traditional loops.

**Syntax**:
```python
[expression for item in iterable if condition]
```

---

**Examples of List Comprehensions**:

1. **Basic Example**:
   - Create a list of squares for numbers 1 through 5.
   ```python
   squares = [n**2 for n in range(1, 6)]
   print(squares)  # Outputs: [1, 4, 9, 16, 25]
   ```

2. **With a Condition**:
   - Include only even numbers in the list of squares.
   ```python
   numbers = [1, 2, 3, 4, 5]
   even_squares = [n**2 for n in numbers if n % 2 == 0]
   print(even_squares)  # Outputs: [4, 16]
   ```

3. **Transforming Items**:
   - Convert all strings in a list to uppercase.
   ```python
   fruits = ["apple", "banana", "cherry"]
   uppercase_fruits = [fruit.upper() for fruit in fruits]
   print(uppercase_fruits)  # Outputs: ['APPLE', 'BANANA', 'CHERRY']
   ```

4. **Nested Loops in List Comprehensions**:
   - Generate all combinations of items from two lists.
   ```python
   colors = ["red", "green"]
   sizes = ["small", "large"]
   combinations = [(color, size) for color in colors for size in sizes]
   print(combinations)  # Outputs: [('red', 'small'), ('red', 'large'), ('green', 'small'), ('green', 'large')]
   ```

5. **Flattening a Nested List**:
   - Flatten a 2D list into a single list.
   ```python
   matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
   flattened = [num for row in matrix for num in row]
   print(flattened)  # Outputs: [1, 2, 3, 4, 5, 6, 7, 8, 9]
   ```

---

#### **Comparison: Loops vs. List Comprehensions**

**Using a Loop**:
```python
numbers = [1, 2, 3, 4, 5]
squares = []
for n in numbers:
    if n % 2 == 0:
        squares.append(n**2)
print(squares)  # Outputs: [4, 16]
```

**Using List Comprehension**:
```python
numbers = [1, 2, 3, 4, 5]
squares = [n**2 for n in numbers if n % 2 == 0]
print(squares)  # Outputs: [4, 16]
```

- **List comprehension** is shorter and often more readable.

---

#### **Summary**

1. **Common List Methods**:
   - **`append()`**: Add an item to the end.
   - **`insert()`**: Insert an item at a specific index.
   - **`remove()`**: Remove the first occurrence of an item.
   - **`pop()`**: Remove and return an item.
   - **`sort()`**: Sort the list in place.
   - Example:
     ```python
     fruits = ["apple", "banana", "cherry"]
     fruits.append("date")
     fruits.remove("banana")
     print(fruits)  # Outputs: ['apple', 'cherry', 'date']
     ```

2. **List Comprehensions**:
   - A concise way to create or transform lists.
   - Syntax: `[expression for item in iterable if condition]`
   - Example:
     ```python
     numbers = [1, 2, 3, 4, 5]
     squares = [n**2 for n in numbers if n % 2 == 0]
     print(squares)  # Outputs: [4, 16]
     ```

Mastering these tools will greatly enhance your ability to manipulate and work with lists effectively in Python.

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