---
title: Error Handling and Debugging
---
**Chapter 10: Error Handling and Debugging**

### Topics

### 10.1 Understanding Errors and Exceptions

---

#### **Types of Errors**

Errors in Python can be categorized into three main types:

1. **Syntax Errors**:
   - **What Are They?**:
     - Syntax errors occur when the code violates Python's syntax rules.
     - These errors are detected before the program is executed, during the parsing stage.
   - **Examples**:
     ```python
     # Missing a colon
     if True
         print("Syntax Error")  # SyntaxError: expected ':'
     ```

2. **Runtime Errors**:
   - **What Are They?**:
     - Runtime errors occur during the execution of the program.
     - These errors stop the program and raise exceptions.
   - **Examples**:
     ```python
     # ZeroDivisionError
     print(10 / 0)  # RuntimeError: division by zero

     # ValueError
     num = int("not a number")  # ValueError: invalid literal for int()
     ```

3. **Logical Errors**:
   - **What Are They?**:
     - Logical errors occur when the program runs without crashing but produces incorrect results.
     - These errors are the hardest to detect because Python doesn’t flag them as exceptions.
   - **Examples**:
     ```python
     # Incorrect logic
     def is_even(n):
         return n % 2 == 1  # Logical error: should be n % 2 == 0
     print(is_even(4))  # Outputs: True (incorrect)
     ```

---

#### **Common Exceptions**

Python provides several built-in exceptions to handle runtime errors. Some of the most common ones are:

1. **`TypeError`**:
   - Raised when an operation is performed on an inappropriate type.
   ```python
   print("Hello" + 5)  # TypeError: can only concatenate str (not "int") to str
   ```

2. **`ValueError`**:
   - Raised when a function receives an argument of the correct type but an inappropriate value.
   ```python
   num = int("abc")  # ValueError: invalid literal for int()
   ```

3. **`IndexError`**:
   - Raised when trying to access an index that is out of range in a sequence.
   ```python
   lst = [1, 2, 3]
   print(lst[5])  # IndexError: list index out of range
   ```

4. **`KeyError`**:
   - Raised when trying to access a key that doesn’t exist in a dictionary.
   ```python
   data = {"name": "Alice"}
   print(data["age"])  # KeyError: 'age'
   ```

5. **`ZeroDivisionError`**:
   - Raised when trying to divide by zero.
   ```python
   print(10 / 0)  # ZeroDivisionError: division by zero
   ```

6. **`FileNotFoundError`**:
   - Raised when trying to access a file that doesn’t exist.
   ```python
   with open("nonexistent_file.txt", "r") as file:
       content = file.read()  # FileNotFoundError: [Errno 2] No such file or directory
   ```

---

#### **The Exception Hierarchy**

Python exceptions are organized in a hierarchy, with the base class `BaseException` at the top. Most errors inherit from the `Exception` class.

**Key Hierarchy Levels**:
1. **`BaseException`**:
   - The root class for all exceptions. Rarely used directly.
2. **`Exception`**:
   - The base class for most standard exceptions.
3. **Specific Exception Classes**:
   - Examples include `TypeError`, `ValueError`, `IndexError`, etc.

**Diagram**:
```
BaseException
 ├── SystemExit
 ├── KeyboardInterrupt
 └── Exception
      ├── ArithmeticError
      │    ├── ZeroDivisionError
      │    └── OverflowError
      ├── LookupError
      │    ├── IndexError
      │    └── KeyError
      ├── ValueError
      ├── TypeError
      └── ...
```

**Key Points**:
- Catching a higher-level exception (like `Exception`) will also catch all its derived exceptions.
- However, it’s best practice to catch specific exceptions to avoid masking errors unintentionally.

---

#### **Examples of Exceptions and Hierarchy**

1. **Catching Specific Exceptions**:
   ```python
   try:
       num = int("abc")
   except ValueError:
       print("Caught a ValueError!")  # Outputs: Caught a ValueError!
   ```

2. **Catching Multiple Exceptions**:
   ```python
   try:
       result = 10 / 0
   except (ZeroDivisionError, ValueError):
       print("An error occurred!")  # Outputs: An error occurred!
   ```

3. **Catching All Exceptions**:
   ```python
   try:
       result = 10 / 0
   except Exception as e:
       print(f"An exception occurred: {e}")  # Outputs: An exception occurred: division by zero
   ```

---

#### **Summary**

1. **Types of Errors**:
   - **Syntax Errors**: Detected before execution; caused by incorrect code structure.
   - **Runtime Errors**: Occur during execution and raise exceptions.
   - **Logical Errors**: Flawed logic in the program produces incorrect results.

2. **Common Exceptions**:
   - **`TypeError`**: Operation on the wrong type.
   - **`ValueError`**: Invalid value for a function.
   - **`IndexError`**: Accessing an out-of-range index.
   - **`KeyError`**: Accessing a nonexistent key in a dictionary.

3. **Exception Hierarchy**:
   - Exceptions inherit from the base class `Exception`.
   - Catch specific exceptions for precise error handling.

Understanding errors and exceptions is crucial for debugging and writing robust Python code. Up next, we’ll explore how to handle these exceptions effectively!

### 10.2 Using `try`, `except`, and `finally`

---

#### **`try` and `except` Blocks**

The `try` and `except` blocks allow you to handle exceptions gracefully by catching and managing errors that occur during code execution.

**Syntax**:
```python
try:
    # Code that may raise an exception
except ExceptionType:
    # Code to handle the exception
```

**How It Works**:
1. Code in the `try` block is executed.
2. If an exception is raised, Python skips the rest of the `try` block and executes the corresponding `except` block.
3. If no exception is raised, the `except` block is skipped.

---

**Example**: Handling a Specific Exception
```python
try:
    result = 10 / 0
except ZeroDivisionError:
    print("Cannot divide by zero!")
```
**Output**:
```
Cannot divide by zero!
```

**Example**: Handling Multiple Exceptions
```python
try:
    num = int("abc")
except ValueError:
    print("Invalid input!")
except ZeroDivisionError:
    print("Cannot divide by zero!")
```
**Output**:
```
Invalid input!
```

**Example**: Catching Any Exception
```python
try:
    result = 10 / 0
except Exception as e:
    print(f"An error occurred: {e}")
```
**Output**:
```
An error occurred: division by zero
```

---

#### **`finally` Block**

The `finally` block is executed **regardless of whether an exception occurred**. It is often used for cleanup tasks, such as closing files or releasing resources.

**Syntax**:
```python
try:
    # Code that may raise an exception
except ExceptionType:
    # Code to handle the exception
finally:
    # Code that runs no matter what
```

**Example**: Using `finally` for Cleanup
```python
try:
    file = open("example.txt", "r")
except FileNotFoundError:
    print("File not found.")
finally:
    print("Cleaning up...")
    # Ensure the file is closed (if it was opened)
    try:
        file.close()
    except NameError:
        pass
```
**Output**:
```
File not found.
Cleaning up...
```

**Key Points**:
- The `finally` block executes even if the `try` block has a `return` statement or an exception is raised.

---

#### **Using `else` with `try` and `except`**

The `else` block is executed **only if no exception was raised** in the `try` block. It is useful for separating code that should run only when no errors occur.

**Syntax**:
```python
try:
    # Code that may raise an exception
except ExceptionType:
    # Code to handle the exception
else:
    # Code to run if no exception occurs
```

**Example**: Using `else` for Successful Execution
```python
try:
    result = 10 / 2
except ZeroDivisionError:
    print("Cannot divide by zero!")
else:
    print(f"Result: {result}")
```
**Output**:
```
Result: 5.0
```

**Why Use `else`?**
- Improves code readability by separating error handling (`except`) from the code that runs when no errors occur.

---

#### **Combined Example: `try`, `except`, `else`, and `finally`**
```python
try:
    number = int(input("Enter a number: "))
    result = 10 / number
except ValueError:
    print("Invalid input. Please enter a number.")
except ZeroDivisionError:
    print("Cannot divide by zero!")
else:
    print(f"Result: {result}")
finally:
    print("Execution completed.")
```

**Sample Input/Output**:
1. **Input**: `abc`
   ```
   Invalid input. Please enter a number.
   Execution completed.
   ```
2. **Input**: `0`
   ```
   Cannot divide by zero!
   Execution completed.
   ```
3. **Input**: `2`
   ```
   Result: 5.0
   Execution completed.
   ```

---

#### **Summary**

1. **`try` and `except`**:
   - Used to handle exceptions and prevent program crashes.
   - Example:
     ```python
     try:
         result = 10 / 0
     except ZeroDivisionError:
         print("Cannot divide by zero!")
     ```

2. **`finally`**:
   - Executes code regardless of whether an exception occurred.
   - Example:
     ```python
     try:
         file = open("example.txt", "r")
     except FileNotFoundError:
         print("File not found.")
     finally:
         print("Cleaning up...")
     ```

3. **`else`**:
   - Runs code only if no exception was raised in the `try` block.
   - Example:
     ```python
     try:
         result = 10 / 2
     except ZeroDivisionError:
         print("Cannot divide by zero!")
     else:
         print(f"Result: {result}")
     ```

Using `try`, `except`, `else`, and `finally` effectively ensures robust error handling and program reliability.

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