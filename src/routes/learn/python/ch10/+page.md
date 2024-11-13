---
title: Error Handling and Debugging
---
**Chapter 10: Error Handling and Debugging**

### Topics

#### 10.1 Understanding Errors and Exceptions
   - **Types of Errors**:
      - **Syntax Errors**: Errors in the code’s structure or syntax that prevent it from running (e.g., missing colons or parentheses).
      - **Runtime Errors**: Errors that occur during program execution, such as `ZeroDivisionError` or `ValueError`.
      - **Logical Errors**: Errors in the logic of the code that lead to incorrect results but don’t raise exceptions.
   - **Common Exceptions**:
      - Introduce commonly encountered exceptions in Python, such as `TypeError`, `ValueError`, `IndexError`, and `KeyError`.
   - **The Exception Hierarchy**:
      - Briefly explain the hierarchy of exceptions, with `Exception` as the base class for most error types in Python.

#### 10.2 Using `try`, `except`, and `finally`
   - **try and except Blocks**:
      - Explain how `try` and `except` are used to handle exceptions by catching and managing errors that occur during code execution.
      - **Example**:
        ```python
        try:
            result = 10 / 0
        except ZeroDivisionError:
            print("Cannot divide by zero!")
        ```
   - **finally Block**:
      - Introduce the `finally` block, which runs regardless of whether an exception occurred. It is commonly used for cleanup tasks.
      - **Example**:
        ```python
        try:
            file = open("example.txt", "r")
        except FileNotFoundError:
            print("File not found.")
        finally:
            print("Cleaning up...")
            file.close()
        ```
   - **Using `else` with try and except**:
      - Explain how `else` can be used to execute code if no exception was raised.
      - **Example**:
        ```python
        try:
            result = 10 / 2
        except ZeroDivisionError:
            print("Cannot divide by zero!")
        else:
            print(f"Result: {result}")
        ```

<h2 class="workshop-title">Workshop Exercise</h2>
<div class="workshop-container">

#### Write a Program that Handles Division by Zero Errors

- **Objective**: Create a program that performs division and gracefully handles division by zero errors.
- **Instructions**:
   1. **Set Up the Program**:
      - Create a Python file (e.g., `safe_division.py`).
      - Use `input()` to ask the user for two numbers (numerator and denominator).
      - Example:
        ```python
        try:
            numerator = float(input("Enter the numerator: "))
            denominator = float(input("Enter the denominator: "))
        ```

   2. **Perform Division and Handle Errors**:
      - Use `try` and `except` to catch a `ZeroDivisionError` if the denominator is zero.
      - Example:
        ```python
        try:
            result = numerator / denominator
        except ZeroDivisionError:
            print("Error: Cannot divide by zero.")
        else:
            print(f"Result: {result}")
        ```

   3. **Test the Program**:
      - Run the program and test it with different inputs, including zero for the denominator, to confirm that it handles errors correctly.

</div>

<h2 class="workshop-title">Chapter Project</h2>
<div class="workshop-container">

**Project: Build a "Simple Calculator" with Error Handling**

- **Description**: The Simple Calculator will allow users to perform basic arithmetic operations (addition, subtraction, multiplication, division) and handle potential errors to prevent program crashes.

- **Objective**: Use error handling to manage invalid inputs and prevent the calculator from crashing on issues like division by zero or non-numeric inputs.

- **Instructions**:
   1. **Set Up the File**:
      - Create a Python file (e.g., `simple_calculator.py`).

   2. **Define Calculator Functions**:
      - Define functions for each arithmetic operation (addition, subtraction, multiplication, division).
      - Example:
        ```python
        def add(x, y):
            return x + y

        def subtract(x, y):
            return x - y

        def multiply(x, y):
            return x * y

        def divide(x, y):
            if y == 0:
                raise ValueError("Cannot divide by zero.")
            return x / y
        ```

   3. **Get User Input and Handle Errors**:
      - Use a loop to continuously ask the user for numbers and the operation they want to perform.
      - Wrap user input and calculations in a `try-except` block to catch invalid inputs and division by zero errors.
      - Example:
        ```python
        while True:
            try:
                x = float(input("Enter the first number: "))
                y = float(input("Enter the second number: "))
                operation = input("Choose an operation (+, -, *, /) or 'q' to quit: ")

                if operation == "q":
                    print("Goodbye!")
                    break

                if operation == "+":
                    result = add(x, y)
                elif operation == "-":
                    result = subtract(x, y)
                elif operation == "*":
                    result = multiply(x, y)
                elif operation == "/":
                    result = divide(x, y)
                else:
                    print("Invalid operation.")
                    continue

                print(f"Result: {result}")

            except ValueError as e:
                print(f"Error: {e}. Please enter numeric values.")
            except Exception as e:
                print(f"An unexpected error occurred: {e}")
        ```

   4. **Test the Calculator**:
      - Run the program and test it with various inputs:
         - Valid inputs for all operations.
         - Zero for the denominator in division.
         - Non-numeric inputs to trigger the `ValueError`.
         - Invalid operations to test error messages.

---

### Summary

This chapter introduces learners to error handling in Python, giving them the skills to make programs more robust by catching and managing exceptions. The workshop exercise focuses on handling a specific error type (division by zero), while the Simple Calculator project reinforces error handling techniques to manage a range of potential issues, ensuring a smooth user experience even with invalid inputs.

</div>

<script>
  import ChapterNavigation from '$lib/components/ChapterNavigation.svelte';
</script>

<ChapterNavigation 
    prevHref="/learn/python/ch9" 
    nextHref="/learn/python/ch11"
  />