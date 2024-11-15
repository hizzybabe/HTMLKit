---
title: Basic Operators and Expressions
---

**Chapter 2: Basic Operators and Expressions**

## Topics

### 2.1 Arithmetic Operators

#### Operators Covered

Python has several arithmetic operators:

1. **Addition (`+`)**: Adds two numbers.
   - **Example**:
     ```python
     result = 5 + 3
     print(result)  # Outputs: 8
     ```

2. **Subtraction (`-`)**: Subtracts the right number from the left number.
   - **Example**:
     ```python
     result = 10 - 4
     print(result)  # Outputs: 6
     ```

3. **Multiplication (`*`)**: Multiplies two numbers.
   - **Example**:
     ```python
     result = 7 * 2
     print(result)  # Outputs: 14
     ```

4. **Division (`/`)**: Divides the left number by the right number and returns a floating-point result.
   - **Example**:
     ```python
     result = 10 / 3
     print(result)  # Outputs: 3.3333333333333335
     ```

5. **Modulus (`%`)**: Divides the left number by the right number and returns the remainder.
   - **Example**:
     ```python
     result = 10 % 3
     print(result)  # Outputs: 1
     ```

6. **Exponentiation (`**`)**: Raises the left number to the power of the right number.
   - **Example**:
     ```python
     result = 2 ** 3
     print(result)  # Outputs: 8
     ```

7. **Floor Division (`//`)**: Divides the left number by the right number and returns the result as an integer, rounded down.
   - **Example**:
     ```python
     result = 10 // 3
     print(result)  # Outputs: 3
     ```

#### Examples of Arithmetic Operators

Here’s a quick summary of each operator in action:

```python
# Addition
add_result = 5 + 2  # Outputs: 7

# Subtraction
sub_result = 9 - 4  # Outputs: 5

# Multiplication
mul_result = 6 * 3  # Outputs: 18

# Division
div_result = 8 / 2  # Outputs: 4.0

# Modulus
mod_result = 10 % 4  # Outputs: 2

# Exponentiation
exp_result = 3 ** 2  # Outputs: 9

# Floor Division
floor_div_result = 15 // 4  # Outputs: 3
```

#### Order of Operations

When an expression has multiple operators, Python follows a specific order to evaluate the operations. This is known as **operator precedence**. The precedence in Python follows the **PEMDAS** rule:

- **P**arentheses `()`: Highest priority. Operations inside parentheses are evaluated first.
- **E**xponents `**`: Exponentiation is evaluated next.
- **M**ultiplication `*`, **D**ivision `/`, **F**loor Division `//`, and **M**odulus `%`: These are evaluated from left to right.
- **A**ddition `+` and **S**ubtraction `-`: These are evaluated last, from left to right.

##### Examples of Operator Precedence:

1. **Parentheses**:
   ```python
   result = (2 + 3) * 4  # Outputs: 20 because (2 + 3) is evaluated first
   ```

2. **Exponents**:
   ```python
   result = 3 ** 2 + 4  # Outputs: 13 because 3 ** 2 (9) is evaluated before addition
   ```

3. **Multiplication and Division**:
   ```python
   result = 10 + 6 / 2  # Outputs: 13.0 because 6 / 2 is evaluated before addition
   ```

4. **Left-to-Right Evaluation**:
   ```python
   result = 10 - 3 + 2  # Outputs: 9 because subtraction and addition are evaluated from left to right
   ```

5. **Complex Expression**:
   ```python
   result = 2 + 3 * 4 ** 2 / 8 - 1
   # Breakdown:
   # 4 ** 2 = 16
   # 3 * 16 = 48
   # 48 / 8 = 6.0
   # 2 + 6.0 - 1 = 7.0
   # Outputs: 7.0
   ```

By understanding operator precedence, you can ensure your expressions are evaluated correctly. If you need to change the order, use parentheses to group operations explicitly.

#### Summary

Python’s arithmetic operators are essential for performing basic math operations, and understanding operator precedence is key to writing accurate expressions. Here’s a recap of the operators and their precedence:

- **Operators**: `+`, `-`, `*`, `/`, `%`, `**`, `//`
- **Order of Operations (PEMDAS)**: Parentheses, Exponents, Multiplication/Division/Floor Division/Modulus, Addition/Subtraction.

With this knowledge, you can confidently work with numbers in Python, whether for basic calculations or complex mathematical expressions!

### 2.2 Comparison Operators

In Python, comparison operators are used to compare values. These operators allow you to check relationships between values, such as equality, inequality, and order. Comparison operations return a **boolean value**—`True` if the condition is met, and `False` if it isn’t.

#### Operators Covered

Python provides six comparison operators:

1. **Equal to (`==`)**: Checks if two values are equal.
   - **Example**:
     ```python
     result = (5 == 5)  # Outputs: True
     result = (5 == 3)  # Outputs: False
     ```

2. **Not equal to (`!=`)**: Checks if two values are not equal.
   - **Example**:
     ```python
     result = (5 != 3)  # Outputs: True
     result = (5 != 5)  # Outputs: False
     ```

3. **Less than (`<`)**: Checks if the value on the left is less than the value on the right.
   - **Example**:
     ```python
     result = (3 < 5)  # Outputs: True
     result = (5 < 3)  # Outputs: False
     ```

4. **Greater than (`>`)**: Checks if the value on the left is greater than the value on the right.
   - **Example**:
     ```python
     result = (5 > 3)  # Outputs: True
     result = (3 > 5)  # Outputs: False
     ```

5. **Less than or equal to (`<=`)**: Checks if the value on the left is less than or equal to the value on the right.
   - **Example**:
     ```python
     result = (3 <= 5)  # Outputs: True
     result = (5 <= 5)  # Outputs: True
     result = (6 <= 5)  # Outputs: False
     ```

6. **Greater than or equal to (`>=`)**: Checks if the value on the left is greater than or equal to the value on the right.
   - **Example**:
     ```python
     result = (5 >= 3)  # Outputs: True
     result = (5 >= 5)  # Outputs: True
     result = (3 >= 5)  # Outputs: False
     ```

#### Boolean Results

When you use comparison operators, Python evaluates the expression and returns a **boolean value**:
- `True` if the comparison is accurate.
- `False` if the comparison is not accurate.

These boolean values are often used in **conditional statements** (such as `if` statements) to control the flow of a program. They can also be stored in variables for later use.

#### Examples of Comparison Operators

Let’s look at a few examples that illustrate how these operators work.

1. **Comparing Numbers**:
   ```python
   # Equal to
   result = (10 == 10)  # Outputs: True

   # Not equal to
   result = (10 != 5)   # Outputs: True

   # Less than
   result = (3 < 7)     # Outputs: True

   # Greater than
   result = (10 > 5)    # Outputs: True

   # Less than or equal to
   result = (8 <= 8)    # Outputs: True

   # Greater than or equal to
   result = (12 >= 8)   # Outputs: True
   ```

2. **Comparing Strings**:
   - Comparison operators can also be used to compare strings. In Python, strings are compared lexicographically (based on alphabetical order).
   - **Examples**:
     ```python
     # Equal to
     result = ("apple" == "apple")  # Outputs: True

     # Not equal to
     result = ("apple" != "banana")  # Outputs: True

     # Less than (alphabetical order)
     result = ("apple" < "banana")  # Outputs: True
     result = ("apple" > "banana")  # Outputs: False
     ```

3. **Using Comparison Results in Conditional Statements**:
   - Boolean values from comparison operations are commonly used in `if` statements to decide what code should run.
   - **Example**:
     ```python
     age = 18
     if age >= 18:
         print("You are eligible to vote.")  # This will print because age is 18
     else:
         print("You are not eligible to vote.")
     ```

4. **Storing Comparison Results in Variables**:
   - You can store the result of a comparison in a variable, which can then be used in other parts of the program.
   - **Example**:
     ```python
     is_adult = (age >= 18)
     print(is_adult)  # Outputs: True if age is 18 or more, False otherwise
     ```

#### Summary

Comparison operators are essential for making decisions in Python programs. They allow you to compare values and determine relationships, returning a boolean (`True` or `False`) based on the result. Here’s a quick recap of the comparison operators:

- **Operators**: `==`, `!=`, `<`, `>`, `<=`, `>=`
- **Examples**:
  ```python
  5 == 5      # True
  10 != 5     # True
  3 < 7       # True
  "apple" > "banana"  # False (alphabetical order)
  ```

These operators are foundational to controlling program flow and are especially useful in conditional statements, loops, and logical expressions.

### 2.3 Logical Operators

Logical operators allow us to combine multiple conditions in Python, enabling us to create complex expressions. These operators evaluate to a boolean value (`True` or `False`) based on the conditions being combined.

#### Operators Covered

Python has three primary logical operators:

1. **`and`**:
   - The `and` operator returns `True` if **both conditions** are true; otherwise, it returns `False`.
   - **Example**:
     ```python
     is_adult = True
     has_id = False
     can_enter = is_adult and has_id  # Outputs: False, because one condition is False
     ```

2. **`or`**:
   - The `or` operator returns `True` if **at least one condition** is true; it only returns `False` if both conditions are false.
   - **Example**:
     ```python
     has_ticket = True
     is_vip = False
     can_enter = has_ticket or is_vip  # Outputs: True, because one condition is True
     ```

3. **`not`**:
   - The `not` operator negates the value of a condition, returning `True` if the condition is `False` and vice versa.
   - **Example**:
     ```python
     is_busy = False
     is_available = not is_busy  # Outputs: True, because `not` reverses the False value
     ```

#### Examples of Logical Operators in Action

Let’s look at a few examples that illustrate how these logical operators work in real conditions.

1. **Using `and`**:
   - Checking if someone is eligible to vote by verifying age and citizenship.
   - **Example**:
     ```python
     age = 20
     is_citizen = True
     can_vote = age >= 18 and is_citizen
     print(can_vote)  # Outputs: True, since both conditions are True
     ```

2. **Using `or`**:
   - Checking if someone qualifies for a discount based on age or student status.
   - **Example**:
     ```python
     age = 16
     is_student = False
     qualifies_for_discount = age < 18 or is_student
     print(qualifies_for_discount)  # Outputs: True, because one condition is True
     ```

3. **Using `not`**:
   - Determining if a library book is available by negating the `is_checked_out` status.
   - **Example**:
     ```python
     is_checked_out = True
     is_available = not is_checked_out
     print(is_available)  # Outputs: False, because `not` negates the True value
     ```

4. **Combining Multiple Logical Operators**:
   - Creating a complex condition that uses multiple logical operators.
   - **Example**:
     ```python
     age = 17
     has_permission = True
     can_watch_movie = (age >= 18) or (age >= 13 and has_permission)
     print(can_watch_movie)  # Outputs: True, because the second part of the expression is True
     ```

#### Truth Tables

A **truth table** is a helpful tool to understand the behavior of logical operators by showing all possible outcomes for the operators. Here are truth tables for `and`, `or`, and `not` operators:

1. **Truth Table for `and`**:
   - Both conditions need to be `True` for the result to be `True`.
   | Condition 1 | Condition 2 | Condition 1 `and` Condition 2 |
   |-------------|-------------|-------------------------------|
   | `True`      | `True`      | `True`                        |
   | `True`      | `False`     | `False`                       |
   | `False`     | `True`      | `False`                       |
   | `False`     | `False`     | `False`                       |

2. **Truth Table for `or`**:
   - Only one condition needs to be `True` for the result to be `True`.
   | Condition 1 | Condition 2 | Condition 1 `or` Condition 2 |
   |-------------|-------------|------------------------------|
   | `True`      | `True`      | `True`                       |
   | `True`      | `False`     | `True`                       |
   | `False`     | `True`      | `True`                       |
   | `False`     | `False`     | `False`                      |

3. **Truth Table for `not`**:
   - The `not` operator simply reverses the boolean value.
   | Condition | `not` Condition |
   |-----------|-----------------|
   | `True`    | `False`         |
   | `False`   | `True`          |

These tables help in visualizing how logical operators evaluate conditions in Python.

#### Summary

Logical operators (`and`, `or`, and `not`) are essential tools for creating complex conditions in Python. Here’s a quick summary:

- **`and`**: Returns `True` if **both conditions** are true.
- **`or`**: Returns `True` if **at least one condition** is true.
- **`not`**: Negates the condition, turning `True` to `False` and vice versa.

**Examples**:
```python
age = 20
is_student = False
# Check if age is between 18 and 25, and they are a student
discount_eligible = (18 <= age <= 25) and is_student  # Outputs: False

# Check if either age is under 18 or they are a student
can_get_discount = age < 18 or is_student  # Outputs: False

# Negate the condition
not_student = not is_student  # Outputs: True
```

With logical operators, you can create sophisticated conditions and control the flow of your programs, allowing for flexible decision-making based on multiple criteria.

### 2.4 Writing Expressions and Basic Calculations

In Python, you can combine different types of operators—arithmetic, comparison, and logical—to create expressions that perform calculations and evaluations. This section covers how to combine these operators in meaningful ways to calculate values and make decisions.

#### Combining Operators

When writing expressions, you can combine:
- **Arithmetic operators** (`+`, `-`, `*`, `/`, `**`, `%`, `//`) for basic math operations.
- **Comparison operators** (`==`, `!=`, `<`, `>`, `<=`, `>=`) for evaluating relationships.
- **Logical operators** (`and`, `or`, `not`) for combining multiple conditions.

Python evaluates expressions based on **operator precedence** (PEMDAS) and evaluates expressions within parentheses first. Combining operators lets you build complex expressions to handle different conditions and calculations.

#### Examples of Combined Expressions

1. **Combining Arithmetic and Comparison Operators**:
   - Here’s an expression that checks if the result of an arithmetic operation meets a specific condition.
   - **Example**:
     ```python
     result = (5 + 3 * 2) > 10  # Outputs: True
     # Explanation: 3 * 2 = 6, 5 + 6 = 11, 11 > 10 is True
     ```

2. **Combining Comparison and Logical Operators**:
   - Here’s an expression that uses comparison and logical operators to check if a number falls within a certain range.
   - **Example**:
     ```python
     age = 20
     is_eligible = age >= 18 and age <= 25  # Outputs: True
     # Checks if age is between 18 and 25, inclusive
     ```

3. **Combining All Three: Arithmetic, Comparison, and Logical Operators**:
   - Here’s a more complex example that includes arithmetic, comparison, and logical operators.
   - **Example**:
     ```python
     price = 100
     discount = 20
     final_price = price - discount
     is_affordable = final_price < 90 and (price > 50 or discount > 15)  # Outputs: True
     # Explanation: final_price = 80, 80 < 90 is True, price > 50 is True, discount > 15 is True
     # Therefore, is_affordable = True
     ```

#### Practice Calculations

Here are some examples that combine different operators and use parentheses for clarity.

1. **Basic Math Calculation**:
   - **Example**:
     ```python
     x = 10
     y = 5
     z = 2
     result = (x + y) * z - 5 / y
     print(result)  # Outputs: 27.0
     # Explanation: (10 + 5) * 2 - 5 / 5 = 15 * 2 - 1 = 30 - 1 = 27.0
     ```

2. **Discount and Tax Calculation**:
   - Suppose you want to calculate the final price after applying a discount and tax.
   - **Example**:
     ```python
     original_price = 100
     discount_rate = 0.1  # 10%
     tax_rate = 0.05      # 5%

     price_after_discount = original_price * (1 - discount_rate)
     final_price = price_after_discount * (1 + tax_rate)
     print(final_price)  # Outputs: 94.5
     # Explanation: 100 * 0.9 = 90, 90 * 1.05 = 94.5
     ```

3. **Loan Eligibility Check**:
   - Here’s a combined example that checks loan eligibility based on income and credit score.
   - **Example**:
     ```python
     income = 50000
     credit_score = 700
     is_eligible_for_loan = income > 40000 and credit_score >= 650
     print(is_eligible_for_loan)  # Outputs: True
     ```

4. **BMI Calculation**:
   - You can use arithmetic operators to calculate the Body Mass Index (BMI) and then check if the BMI falls within a healthy range.
   - **Example**:
     ```python
     weight_kg = 70
     height_m = 1.75
     bmi = weight_kg / (height_m ** 2)
     is_healthy_bmi = bmi >= 18.5 and bmi <= 24.9
     print(bmi)             # Outputs: 22.857142857142858
     print(is_healthy_bmi)   # Outputs: True
     ```

5. **Complex Condition with Multiple Logical Operators**:
   - Here’s a more complex expression that checks if a student qualifies for an honor roll based on grades and attendance.
   - **Example**:
     ```python
     average_grade = 85
     attendance_rate = 0.9  # 90%
     has_good_conduct = True

     is_honor_roll = (average_grade >= 80 and attendance_rate >= 0.85) and has_good_conduct
     print(is_honor_roll)  # Outputs: True
     ```

#### Tips for Writing Clear Expressions

1. **Use Parentheses for Clarity**:
   - Even when not required by Python, parentheses can make complex expressions easier to read and understand.
   - **Example**:
     ```python
     result = (5 + 3) * (10 / 2)  # Easier to read than 5 + 3 * 10 / 2
     ```

2. **Break Down Complex Expressions**:
   - If an expression becomes too long, consider breaking it into multiple variables.
   - **Example**:
     ```python
     discount_price = original_price * (1 - discount_rate)
     final_price = discount_price * (1 + tax_rate)
     ```

3. **Use Meaningful Variable Names**:
   - Variable names like `total_cost`, `is_eligible`, and `average_grade` improve readability and help convey the purpose of each expression.

#### Summary

Combining operators allows you to build complex expressions that evaluate calculations and conditions, often used in decision-making and calculations. Here’s a quick recap:

- **Arithmetic Operators**: Perform basic calculations.
- **Comparison Operators**: Evaluate relationships.
- **Logical Operators**: Combine multiple conditions.

**Example of Combined Expression**:
```python
original_price = 100
discount_rate = 0.1
tax_rate = 0.05
final_price = (original_price * (1 - discount_rate)) * (1 + tax_rate)
is_eligible_for_discount = final_price < 90 or (original_price > 50 and discount_rate > 0.05)
print(final_price)              # Outputs: 94.5
print(is_eligible_for_discount) # Outputs: False
```

With practice, you’ll become comfortable combining operators to build powerful and expressive calculations and conditions in Python!

---

<h2 class="workshop-title">Workshop Exercise</h2>
<div class="workshop-container">

<h3>Create a Calculator Script</h3>

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