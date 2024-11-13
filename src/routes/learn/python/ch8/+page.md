---
title: Dictionaries
---

**Chapter 8: Dictionaries**

### Topics

#### 8.1 Creating and Accessing Dictionaries
   - **Introduction to Dictionaries**:
      - Define dictionaries as collections of key-value pairs, which are unordered and mutable.
      - Keys must be unique and are usually strings, while values can be any data type.
   - **Creating a Dictionary**:
      - Show the syntax for creating dictionaries using curly braces `{}` and colons to separate keys and values.
      - Example:
        ```python
        contact = {"name": "Alice", "phone": "123-456-7890"}
        ```
   - **Accessing Dictionary Elements**:
      - Explain how to access values by referencing their keys.
      - Example:
        ```python
        print(contact["name"])  # Outputs: Alice
        ```
   - **Adding and Updating Items**:
      - Explain how to add new key-value pairs and update existing ones.
      - Example:
        ```python
        contact["email"] = "alice@example.com"
        contact["phone"] = "098-765-4321"
        ```

#### 8.2 Dictionary Methods and Nested Dictionaries
   - **Common Dictionary Methods**:
      - Introduce common methods such as `.get()`, `.keys()`, `.values()`, `.items()`, `.pop()`, and `.clear()`.
      - Examples:
        ```python
        print(contact.get("email", "No email found"))  # Outputs: alice@example.com
        print(contact.keys())  # Outputs: dict_keys(['name', 'phone', 'email'])
        print(contact.items()) # Outputs: dict_items([('name', 'Alice'), ('phone', '098-765-4321'), ('email', 'alice@example.com')])
        ```
   - **Looping Through a Dictionary**:
      - Show how to iterate over keys and values using a `for` loop.
      - Example:
        ```python
        for key, value in contact.items():
            print(f"{key}: {value}")
        ```
   - **Nested Dictionaries**:
      - Explain nested dictionaries, which store dictionaries as values within other dictionaries.
      - Example:
        ```python
        students = {
            "Alice": {"math": 90, "science": 85},
            "Bob": {"math": 78, "science": 88}
        }
        print(students["Alice"]["math"])  # Outputs: 90
        ```

---

<h2 class="workshop-title">Workshop Exercise</h2>
<div class="workshop-container">

#### Write a Program to Store and Display Contact Information

- **Objective**: Use a dictionary to store contact information and display it to the user.
- **Instructions**:
   1. **Define the Contact Dictionary**:
      - Create a Python file (e.g., `contacts.py`).
      - Define a dictionary to store contact information for each person.
      - Example:
        ```python
        contacts = {
            "Alice": {"phone": "123-456-7890", "email": "alice@example.com"},
            "Bob": {"phone": "234-567-8901", "email": "bob@example.com"}
        }
        ```

   2. **Display Contact Information**:
      - Use a loop to print each contact's name, phone number, and email address.
      - Example:
        ```python
        for name, info in contacts.items():
            print(f"Name: {name}")
            print(f"Phone: {info['phone']}")
            print(f"Email: {info['email']}\n")
        ```

   3. **Test the Program**:
      - Run the program to ensure it correctly displays each contact’s information.

</div>

<h2 class="workshop-title">Chapter Project</h2>
<div class="workshop-container">
**Project: Build a "Grade Book" Program**

- **Description**: The Grade Book program allows users to enter students' names and scores for various subjects. The program calculates the average score for each student.

- **Objective**: Use dictionaries to store students' names as keys and their scores as nested dictionaries, where each subject is a key-value pair. Calculate the average score for each student.

- **Instructions**:
   1. **Set Up the File**:
      - Create a Python file (e.g., `grade_book.py`).

   2. **Define the Grade Book Dictionary**:
      - Initialize an empty dictionary called `grade_book` to store student names and their scores.
      - Example:
        ```python
        grade_book = {}
        ```

   3. **Add Students and Scores**:
      - Use a loop to repeatedly ask the user to enter a student's name, subject, and score.
      - Store each subject and score as a nested dictionary under the student’s name.
      - Example:
        ```python
        while True:
            name = input("Enter student name (or 'done' to finish): ")
            if name.lower() == "done":
                break
            
            subject = input("Enter subject: ")
            score = float(input("Enter score: "))
            
            if name not in grade_book:
                grade_book[name] = {}
            grade_book[name][subject] = score
        ```

   4. **Calculate and Display Average Scores**:
      - Loop through each student in the `grade_book` dictionary.
      - Calculate the average score by summing the scores and dividing by the number of subjects.
      - Print the average score for each student.
      - Example:
        ```python
        for student, subjects in grade_book.items():
            total_score = sum(subjects.values())
            average_score = total_score / len(subjects)
            print(f"{student}'s average score: {average_score:.2f}")
        ```

   5. **Test the Grade Book Program**:
      - Run the program and enter several students with multiple subjects to verify that the average score calculation is accurate.

---

### Summary

This chapter introduces dictionaries, a powerful data structure for organizing and managing data in Python. The workshop exercise reinforces fundamental dictionary operations, while the Grade Book project demonstrates how to use nested dictionaries to manage complex data and calculate averages, a common real-world application.

</div>

<script>
  import ChapterNavigation from '$lib/components/ChapterNavigation.svelte';
</script>

<ChapterNavigation 
    prevHref="/learn/python/ch7" 
    nextHref="/learn/python/ch9"
  />