---
title: Introduction to Python and Setup
---

**Chapter 2: Basic Operators and Expressions**

### Topics

#### 2.1 Arithmetic Operators
   - **Operators Covered**: Introduce basic arithmetic operators (`+`, `-`, `*`, `/`, `%` for modulus, `**` for exponentiation, and `//` for floor division).
   - **Examples**: Show examples for each operator, demonstrating their use in basic math operations.
   - **Order of Operations**: Explain the concept of operator precedence (PEMDAS: Parentheses, Exponents, Multiplication and Division, Addition and Subtraction).

#### 2.2 Comparison Operators
   - **Operators Covered**: Introduce comparison operators (`==`, `!=`, `<`, `>`, `<=`, `>=`) used to compare values.
   - **Boolean Results**: Explain that comparison operations return a boolean value (True or False).
   - **Examples**: Show simple examples that illustrate how these operators can be used to compare numbers and other values.

#### 2.3 Logical Operators
   - **Operators Covered**: Introduce logical operators (`and`, `or`, `not`), used for combining multiple conditions.
   - **Examples**: Provide examples demonstrating how logical operators can be used to evaluate complex conditions.
   - **Truth Tables**: Briefly explain truth tables to show the outcomes of different logical operations.

#### 2.4 Writing Expressions and Basic Calculations
   - **Combining Operators**: Show how to combine arithmetic, comparison, and logical operators in expressions.
   - **Practice Calculations**: Provide examples of basic calculations that combine multiple operators and parentheses for clarity.

---

<h2 class="workshop-title">Workshop Exercise</h2>
<div class="workshop-container">

#### Create a Calculator Script

- **Objective**: Write a script that can perform basic arithmetic operations (+, -, *, /) based on user input.
- **Instructions**:
   1. **Ask for User Input**:
      - Create a Python file (e.g., `basic_calculator.py`).
      - Use `input()` to prompt the user for two numbers and the desired operation.
      - Convert numbers from strings to floats to allow decimal input.
      - Example:
        ```python
        num1 = float(input("Enter the first number: "))
        num2 = float(input("Enter the second number: "))
        operation = input("Choose an operation (+, -, *, /): ")
        ```
   2. **Perform the Calculation**:
      - Use an `if`-`elif`-`else` structure to check the operation and calculate the result.
      - Example:
        ```python
        if operation == "+":
            result = num1 + num2
        elif operation == "-":
            result = num1 - num2
        elif operation == "*":
            result = num1 * num2
        elif operation == "/":
            result = num1 / num2
        else:
            result = "Invalid operation"
        ```
   3. **Display the Result**:
      - Print the result with a clear message.
      - Example:
        ```python
        print("The result is:", result)
        ```
   4. **Test the Calculator**: Run the script multiple times, trying different numbers and operations to ensure it handles each correctly.

</div>

<h2 class="workshop-title">Chapter Project</h2>
<div class="workshop-container">
#### Project: Develop a "Tip Calculator"

- **Description**: The Tip Calculator will ask the user for the bill amount and desired tip percentage, then calculate and display the total tip amount and total bill amount including the tip.

- **Objective**: Use arithmetic operations to calculate percentages and create a useful real-world tool.

- **Instructions**:
   1. **Get User Inputs**:
      - Create a Python file (e.g., `tip_calculator.py`).
      - Use `input()` to get the bill amount and tip percentage. Convert these inputs to floats.
      - Example:
        ```python
        bill_amount = float(input("Enter the bill amount: $"))
        tip_percentage = float(input("Enter the tip percentage: "))
        ```

   2. **Calculate Tip and Total Amount**:
      - Calculate the tip as a percentage of the bill amount and add it to the bill to get the total amount.
      - Example:
        ```python
        tip_amount = (tip_percentage / 100) * bill_amount
        total_amount = bill_amount + tip_amount
        ```

   3. **Display the Results**:
      - Print the tip amount and total bill in a formatted manner.
      - Example:
        ```python
        print(f"Tip amount: ${tip_amount:.2f}")
        print(f"Total amount: ${total_amount:.2f}")
        ```
   
   4. **Test Your Tip Calculator**: Run the program and enter various bill amounts and tip percentages to check that calculations are accurate.

---

This chapter will help learners grasp the basics of operators and expressions, giving them the foundation they need to perform calculations and logical operations in Python. The Tip Calculator project offers a practical application of these skills in a user-friendly way.

</div>

<script>
  import ChapterNavigation from '$lib/components/ChapterNavigation.svelte';
</script>

<ChapterNavigation 
    prevHref="/learn/python/ch1" 
    nextHref="/learn/python/ch3"
  />