---
title: Dictionaries
---

**Chapter 8: Dictionaries**

### Topics

### 8.1 Creating and Accessing Dictionaries

---

#### **Introduction to Dictionaries**

**What are Dictionaries?**
- **Dictionaries** are collections of key-value pairs in Python.
- Each key is unique, and it maps to a specific value.
- They are **unordered** (insertion order maintained in Python 3.7+), **mutable** (can be modified), and highly efficient for lookups.

**Key Properties**:
1. **Keys**:
   - Must be **unique**.
   - Must be of an **immutable type** (e.g., strings, numbers, or tuples).
2. **Values**:
   - Can be of **any data type** (e.g., strings, lists, numbers, other dictionaries).

**When to Use Dictionaries?**
- Use dictionaries to store data where each item has a unique identifier (key), such as contact information or configuration settings.

---

#### **Creating a Dictionary**

**Syntax**:
- Use curly braces `{}` with keys and values separated by colons (`:`).
- Separate key-value pairs with commas.

**Examples**:
1. **Basic Dictionary**:
   ```python
   contact = {"name": "Alice", "phone": "123-456-7890"}
   print(contact)  # Outputs: {'name': 'Alice', 'phone': '123-456-7890'}
   ```

2. **Empty Dictionary**:
   ```python
   empty_dict = {}
   ```

3. **Dictionary with Mixed Data Types**:
   ```python
   mixed = {"name": "Bob", "age": 30, "is_student": False}
   print(mixed)  # Outputs: {'name': 'Bob', 'age': 30, 'is_student': False}
   ```

4. **Using the `dict()` Constructor**:
   ```python
   user = dict(name="Charlie", age=25)
   print(user)  # Outputs: {'name': 'Charlie', 'age': 25}
   ```

---

#### **Accessing Dictionary Elements**

**Accessing Values by Keys**:
- Use square brackets `[]` with the key to retrieve its value.
```python
contact = {"name": "Alice", "phone": "123-456-7890"}
print(contact["name"])  # Outputs: Alice
print(contact["phone"])  # Outputs: 123-456-7890
```

**Using the `get()` Method**:
- The `get()` method returns the value for a key but avoids errors if the key doesn’t exist.
```python
print(contact.get("email"))  # Outputs: None
print(contact.get("email", "No email provided"))  # Outputs: No email provided
```

---

#### **Adding and Updating Items**

1. **Adding New Key-Value Pairs**:
   - Simply assign a new key with its value.
   ```python
   contact = {"name": "Alice", "phone": "123-456-7890"}
   contact["email"] = "alice@example.com"
   print(contact)  
   # Outputs: {'name': 'Alice', 'phone': '123-456-7890', 'email': 'alice@example.com'}
   ```

2. **Updating Existing Values**:
   - Assign a new value to an existing key.
   ```python
   contact["phone"] = "098-765-4321"
   print(contact)  
   # Outputs: {'name': 'Alice', 'phone': '098-765-4321', 'email': 'alice@example.com'}
   ```

3. **Updating Multiple Items Using `update()`**:
   - Use the `update()` method to add or modify multiple key-value pairs at once.
   ```python
   contact.update({"phone": "555-555-5555", "address": "123 Maple Street"})
   print(contact)  
   # Outputs: {'name': 'Alice', 'phone': '555-555-5555', 'email': 'alice@example.com', 'address': '123 Maple Street'}
   ```

---

#### **Examples**

1. **Storing and Accessing User Information**:
   ```python
   user = {"username": "jdoe", "email": "jdoe@example.com", "age": 30}
   print(user["username"])  # Outputs: jdoe
   user["age"] = 31  # Update age
   print(user)  # Outputs: {'username': 'jdoe', 'email': 'jdoe@example.com', 'age': 31}
   ```

2. **Adding Data to a Dictionary**:
   ```python
   inventory = {"apples": 10, "bananas": 5}
   inventory["oranges"] = 8  # Add oranges
   print(inventory)  # Outputs: {'apples': 10, 'bananas': 5, 'oranges': 8}
   ```

3. **Using `get()` to Avoid Key Errors**:
   ```python
   print(inventory.get("grapes", "Item not found"))  # Outputs: Item not found
   ```

4. **Combining `update()` for Multiple Modifications**:
   ```python
   inventory.update({"apples": 15, "pears": 7})
   print(inventory)  # Outputs: {'apples': 15, 'bananas': 5, 'oranges': 8, 'pears': 7}
   ```

---

#### **Summary**

1. **Dictionaries**:
   - Collections of key-value pairs.
   - Keys must be unique; values can be of any data type.
   - Syntax:
     ```python
     my_dict = {"key1": "value1", "key2": "value2"}
     ```

2. **Accessing Values**:
   - Use `dict[key]` to access a value.
   - Use `dict.get(key)` to avoid errors if the key doesn’t exist.

3. **Adding and Updating Items**:
   - Add new items: `dict["new_key"] = value`
   - Update items: `dict["existing_key"] = new_value`
   - Update multiple items: `dict.update({"key": value, ...})`

**Example Recap**:
```python
contact = {"name": "Alice", "phone": "123-456-7890"}
contact["email"] = "alice@example.com"  # Add new key-value pair
contact["phone"] = "555-555-5555"  # Update value
print(contact)  
# Outputs: {'name': 'Alice', 'phone': '555-555-5555', 'email': 'alice@example.com'}
```

Dictionaries are essential for handling data in key-value form, offering fast lookups and flexibility.

### 8.2 Dictionary Methods and Nested Dictionaries

---

#### **Common Dictionary Methods**

Python dictionaries come with various built-in methods to manage key-value pairs effectively. Below are some of the most frequently used methods.

---

1. **`get()`**:
   - Retrieves the value for a given key. If the key doesn’t exist, it returns a default value (default is `None`).
   ```python
   contact = {"name": "Alice", "phone": "098-765-4321", "email": "alice@example.com"}
   print(contact.get("email", "No email found"))  # Outputs: alice@example.com
   print(contact.get("address", "No address found"))  # Outputs: No address found
   ```

2. **`keys()`**:
   - Returns a view of all the keys in the dictionary.
   ```python
   print(contact.keys())  # Outputs: dict_keys(['name', 'phone', 'email'])
   ```

3. **`values()`**:
   - Returns a view of all the values in the dictionary.
   ```python
   print(contact.values())  # Outputs: dict_values(['Alice', '098-765-4321', 'alice@example.com'])
   ```

4. **`items()`**:
   - Returns a view of all the key-value pairs as tuples.
   ```python
   print(contact.items())
   # Outputs: dict_items([('name', 'Alice'), ('phone', '098-765-4321'), ('email', 'alice@example.com')])
   ```

5. **`pop()`**:
   - Removes a key-value pair by the specified key and returns its value. Raises a `KeyError` if the key doesn’t exist.
   ```python
   removed_value = contact.pop("phone")
   print(removed_value)  # Outputs: 098-765-4321
   print(contact)  # Outputs: {'name': 'Alice', 'email': 'alice@example.com'}
   ```

6. **`clear()`**:
   - Removes all key-value pairs from the dictionary.
   ```python
   contact.clear()
   print(contact)  # Outputs: {}
   ```

---

#### **Looping Through a Dictionary**

Dictionaries can be easily iterated using `for` loops.

1. **Iterating Through Keys**:
   ```python
   for key in contact.keys():
       print(key)
   # Outputs:
   # name
   # phone
   # email
   ```

2. **Iterating Through Values**:
   ```python
   for value in contact.values():
       print(value)
   # Outputs:
   # Alice
   # 098-765-4321
   # alice@example.com
   ```

3. **Iterating Through Key-Value Pairs**:
   ```python
   for key, value in contact.items():
       print(f"{key}: {value}")
   # Outputs:
   # name: Alice
   # phone: 098-765-4321
   # email: alice@example.com
   ```

---

#### **Nested Dictionaries**

**What are Nested Dictionaries?**
- A **nested dictionary** is a dictionary where the value of a key is another dictionary.
- This structure is useful for representing complex hierarchical data, such as student grades, employee records, or configuration settings.

**Example**:
```python
students = {
    "Alice": {"math": 90, "science": 85},
    "Bob": {"math": 78, "science": 88}
}
```

---

**Accessing Elements in Nested Dictionaries**:
- Use multiple keys to access nested values.
```python
print(students["Alice"]["math"])  # Outputs: 90
print(students["Bob"]["science"])  # Outputs: 88
```

**Adding and Updating Values in Nested Dictionaries**:
1. Adding a New Subject for a Student:
   ```python
   students["Alice"]["history"] = 88
   print(students["Alice"])  # Outputs: {'math': 90, 'science': 85, 'history': 88}
   ```

2. Updating an Existing Grade:
   ```python
   students["Bob"]["math"] = 80
   print(students["Bob"])  # Outputs: {'math': 80, 'science': 88}
   ```

**Iterating Through a Nested Dictionary**:
- Loop through each key and value in the outer dictionary and then loop through the inner dictionary.
```python
for student, grades in students.items():
    print(f"{student}'s grades:")
    for subject, grade in grades.items():
        print(f"  {subject}: {grade}")
```
**Output**:
```
Alice's grades:
  math: 90
  science: 85
  history: 88
Bob's grades:
  math: 80
  science: 88
```

---

#### **Practical Examples**

1. **Employee Records**:
   ```python
   employees = {
       "emp1": {"name": "John", "role": "Manager"},
       "emp2": {"name": "Jane", "role": "Engineer"}
   }
   print(employees["emp1"]["name"])  # Outputs: John
   employees["emp2"]["role"] = "Senior Engineer"
   print(employees["emp2"])  # Outputs: {'name': 'Jane', 'role': 'Senior Engineer'}
   ```

2. **Configuration Settings**:
   ```python
   config = {
       "database": {"host": "localhost", "port": 5432},
       "api": {"endpoint": "https://api.example.com", "timeout": 30}
   }
   print(config["database"]["host"])  # Outputs: localhost
   ```

---

#### **Summary**

1. **Common Dictionary Methods**:
   - **`.get()`**: Safely retrieves a value by key.
   - **`.keys()`**: Returns all keys.
   - **`.values()`**: Returns all values.
   - **`.items()`**: Returns all key-value pairs as tuples.
   - **`.pop()`**: Removes a key-value pair.
   - **`.clear()`**: Clears the dictionary.
   ```python
   print(contact.get("email", "No email found"))  # Outputs: alice@example.com
   print(contact.keys())  # Outputs: dict_keys(['name', 'phone', 'email'])
   print(contact.items()) # Outputs: dict_items([('name', 'Alice'), ('phone', '098-765-4321'), ('email', 'alice@example.com')])
   ```

2. **Nested Dictionaries**:
   - Store dictionaries as values within other dictionaries.
   - Example:
     ```python
     students = {
         "Alice": {"math": 90, "science": 85},
         "Bob": {"math": 78, "science": 88}
     }
     print(students["Alice"]["math"])  # Outputs: 90
     ```

Dictionaries and nested dictionaries are invaluable for handling structured and hierarchical data in Python!

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