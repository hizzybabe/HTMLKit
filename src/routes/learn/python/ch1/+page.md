---
title: Introduction to Python and Setup
---

**Chapter 1: Introduction to Python and Setup**

## Topics

### 1.1 What is Python? History and Applications
   - **Concepts Covered**: Overview of Python's history, its evolution, key figures behind Python's development, and why Python is so popular today.
   - **Applications**: Introduce real-world applications of Python in various fields—data science, web development, automation, AI/ML, etc.

### 1.2 Installing Python and Setting Up an IDE
   - **Instructions**: Guide learners through the installation of Python on different operating systems (Windows, macOS, Linux).
   - **IDE Options**: Present options for IDEs (e.g., VSCode, PyCharm, Jupyter Notebook, etc.) and provide steps to set up their environment.
   - **Environment Check**: Verify the installation by opening the IDE or terminal and typing `python --version`.

### 1.3 Writing and Running Your First Python Script
   - **Basics of Script Writing**: Explain how to create a basic Python script file and introduce the print function.
   - **Running the Script**: Show how to run the script in an IDE or terminal, with clear instructions for each OS.
   
### 1.4 Overview of Python Syntax, Variables, and Data Types

#### Syntax

Python’s syntax is designed to be clear and readable, making it a great language for beginners. Let’s go over some essential parts of Python syntax:

- **Indentation**:
  - Python uses indentation (spaces or tabs) to define code blocks, such as loops, functions, and conditional statements.
  - Indentation is crucial; if it’s inconsistent, Python will throw an `IndentationError`.
  - **Example**:
    ```python
    if True:
        print("This is indented correctly.")
    ```

- **Case Sensitivity**:
  - Python is case-sensitive, meaning `Variable` and `variable` are considered two different identifiers.
  - **Example**:
    ```python
    myVar = 5
    MyVar = 10
    print(myVar)  # Outputs: 5
    print(MyVar)  # Outputs: 10
    ```

- **Comments**:
  - Comments are used to explain code and are ignored by Python during execution. They start with the `#` symbol.
  - Multi-line comments can be created by using triple quotes (`"""` or `'''`).
  - **Examples**:
    ```python
    # This is a single-line comment
    print("Hello, World!")  # Inline comment

    """
    This is a
    multi-line comment.
    """
    ```

#### Variables

Variables are used to store data, which can then be used and manipulated within your program. Python has simple and flexible rules for declaring and naming variables.

- **Variable Assignment**:
  - In Python, variables are created when you assign a value to them. You don’t need to specify the type of the variable.
  - **Example**:
    ```python
    age = 25
    name = "Alice"
    is_student = True
    ```

- **Naming Conventions**:
  - Variable names should be descriptive and follow these rules:
    - Use letters (a-z, A-Z), numbers (0-9), and underscores (`_`).
    - Variable names cannot start with a number.
    - Avoid using Python keywords (like `print`, `for`, `if`) as variable names.
  - By convention, variable names are written in `snake_case` (e.g., `user_name`, `total_price`).
  - **Examples**:
    ```python
    user_age = 30  # Valid variable name
    1st_place = "Winner"  # Invalid, starts with a number
    ```

#### Data Types

Python has several built-in data types for storing different kinds of information. Here are the fundamental ones:

1. **Integers**:
   - Integers are whole numbers, positive or negative, without a decimal point.
   - **Examples**:
     ```python
     x = 10
     y = -5
     ```

2. **Floats**:
   - Floats are numbers that include a decimal point, used for representing fractional values.
   - **Examples**:
     ```python
     price = 19.99
     temperature = -3.5
     ```

3. **Strings**:
   - Strings are sequences of characters enclosed within single (`'`), double (`"`), or triple quotes (`'''` or `"""`).
   - Strings are commonly used for storing text.
   - **Examples**:
     ```python
     greeting = "Hello, World!"
     multi_line = """This is a
     multi-line string."""
     ```

4. **Booleans**:
   - Booleans represent one of two values: `True` or `False`. They are often used in conditions and comparisons.
   - **Examples**:
     ```python
     is_active = True
     is_admin = False
     ```

#### Summary of Examples

Here’s a quick summary of Python syntax, variables, and data types:

```python
# Variables and their data types
name = "Alice"          # String
age = 30                # Integer
height = 5.7            # Float
is_student = True       # Boolean

# Python is case-sensitive
myVariable = 10
MyVariable = 20

# Code block using indentation
if is_student:
    print(f"{name} is a student.")

# This is a comment explaining code
```

In this section, you’ve learned the basics of Python’s syntax, how to define variables, and some of the primary data types. These building blocks will help you as you start writing more complex programs!

---

<h2 class="workshop-title">Workshop Exercises</h2>
<div class="workshop-container">

#### 1. Write a Simple "Hello, World!" Program
   - **Objective**: Write and run a basic script that displays "Hello, World!" on the screen.
   - **Instructions**:
      - Open your IDE, create a new Python file (e.g., `hello_world.py`), and write:
        ```python
        print("Hello, World!")
        ```
      - Save and run the script.
      - Observe the output and ensure the setup is working.

#### 2. Create a Program that Asks for the User's Name and Prints a Greeting
   - **Objective**: Write a program that prompts the user for their name and then displays a custom greeting.
   - **Instructions**:
      - Create a new Python file (e.g., `greet_user.py`).
      - Use `input()` to get the user’s name and `print()` to display the greeting:
        ```python
        name = input("What's your name? ")
        print("Hello, " + name + "! Welcome to Python.")
        ```
      - Run the script and test it by entering your name.

</div>

<h2 class="workshop-title">Chapter Project</h2>
<div class="workshop-container">
#### Project: Build a "Mad Libs" Game

- **Description**: Mad Libs is a fun, fill-in-the-blank word game where users enter specific types of words (nouns, verbs, adjectives, etc.), which are then incorporated into a pre-written story template.

- **Objective**: Allow users to input different types of words, then integrate them into a playful sentence or paragraph that outputs as a mini-story.

- **Instructions**:
   1. **Plan Your Story**: Write a short template story with placeholders for different word types, like:
      - "Today I went to the [place]. It was really [adjective] and I saw a [animal] that was [verb]-ing."
   
   2. **Prompt for Input**:
      - Create a Python file (e.g., `mad_libs.py`).
      - Use `input()` to collect words from the user for each placeholder:
        ```python
        place = input("Enter a place: ")
        adjective = input("Enter an adjective: ")
        animal = input("Enter an animal: ")
        verb = input("Enter a verb ending in -ing: ")
        ```
   
   3. **Display the Story**:
      - Use string formatting to integrate the user’s inputs into the story template:
        ```python
        print(f"Today I went to the {place}. It was really {adjective} and I saw a {animal} that was {verb}-ing.")
        ```
   
   4. **Run and Test**:
      - Run the program, input different words, and see the resulting story. Encourage users to try funny and creative words for unique outputs.

---

This chapter will provide a solid introduction to Python, giving learners confidence with syntax, basic input/output, and running code in their development environment. Plus, the Mad Libs project will let them apply these concepts in a fun and engaging way.

</div>

<script>
  import ChapterNavigation from '$lib/components/ChapterNavigation.svelte';
</script>

<ChapterNavigation 
    prevHref="/learn/python" 
    nextHref="/learn/python/ch2"
  />