---
title: Chapter 3 - Control Flow - Conditional Statements
---
## Topics

### 3.1 if, elif, and else Statements

In Python, **conditional statements** allow you to make decisions in your code. These statements check specific conditions and execute different blocks of code based on whether the conditions are `True` or `False`.

---

#### Introduction to Conditional Statements

- Conditional statements let your program **react to input or data** by making decisions.
- The basic structure involves an **`if` statement** to check a condition. If the condition is `True`, the program runs a block of code; if not, it skips that block.
- You can chain multiple conditions using `elif` (else if) and provide a fallback action with `else`.

**Example**: A program to decide the size of a shirt based on chest measurements.
```python
chest_size = 38

if chest_size <= 36:
    print("Small size.")
elif chest_size <= 40:
    print("Medium size.")
else:
    print("Large size.")
```

---

#### The `if` Statement

- The `if` statement is the basic building block of conditional logic.
- It checks a condition and executes a block of code if the condition evaluates to `True`.

**Syntax**:
```python
if condition:
    # Code block to execute if the condition is True
```

- **Key Points**:
  - The condition is a boolean expression that evaluates to `True` or `False`.
  - Indentation is required to define the block of code associated with the `if` statement.

**Example**:
```python
age = 18

if age >= 18:
    print("You are an adult.")
```

- **Explanation**:
  - The condition `age >= 18` is evaluated.
  - If `True`, it prints `"You are an adult."`
  - If `False`, the program skips the code block under the `if` statement.

---

#### The `elif` Statement

- Use `elif` (short for **else if**) to check **multiple conditions** sequentially.
- If the `if` condition is `False`, the program checks the `elif` conditions in order.
- Once a condition evaluates to `True`, the corresponding code block is executed, and the rest of the conditions are skipped.

**Syntax**:
```python
if condition1:
    # Code block for condition1
elif condition2:
    # Code block for condition2
elif condition3:
    # Code block for condition3
```

**Example**:
```python
marks = 85

if marks >= 90:
    print("Grade: A")
elif marks >= 75:
    print("Grade: B")
elif marks >= 50:
    print("Grade: C")
else:
    print("Grade: F")
```

- **Explanation**:
  - If `marks >= 90` is `True`, it prints `"Grade: A"`, and skips the rest.
  - If `marks >= 90` is `False` but `marks >= 75` is `True`, it prints `"Grade: B"`.
  - The process continues until a condition is satisfied.

---

#### The `else` Statement

- The `else` statement is used to handle cases where **none of the preceding conditions** are `True`.
- It must always come at the end of an `if-elif` chain.

**Syntax**:
```python
if condition1:
    # Code block for condition1
elif condition2:
    # Code block for condition2
else:
    # Code block if none of the conditions are True
```

**Example**:
```python
temperature = 10

if temperature > 30:
    print("It's hot outside.")
elif temperature > 20:
    print("It's warm outside.")
else:
    print("It's cold outside.")
```

- **Explanation**:
  - If neither `temperature > 30` nor `temperature > 20` is `True`, the `else` block executes, printing `"It's cold outside."`

---

#### Complete Example: Age Group Classifier

Let’s combine `if`, `elif`, and `else` to create a program that classifies a person into an age group.

```python
age = 45

if age < 13:
    print("You are a child.")
elif age < 18:
    print("You are a teenager.")
elif age < 60:
    print("You are an adult.")
else:
    print("You are a senior citizen.")
```

- **Explanation**:
  - If `age < 13`, it prints `"You are a child."`
  - If `age < 18` but `age >= 13`, it prints `"You are a teenager."`
  - If `age < 60` but `age >= 18`, it prints `"You are an adult."`
  - If none of the conditions are `True`, it prints `"You are a senior citizen."`

---

#### Tips for Writing Conditional Statements

1. **Order Matters**:
   - Place the most specific condition first, and the most general condition last.
   - **Example**:
     ```python
     if score == 100:
         print("Perfect score!")
     elif score >= 50:
         print("Pass.")
     else:
         print("Fail.")
     ```

2. **Avoid Overlapping Conditions**:
   - Ensure your conditions don’t overlap, as Python stops checking once it finds a `True` condition.

3. **Use Parentheses for Clarity**:
   - While optional, parentheses around conditions can improve readability in complex expressions.
   - **Example**:
     ```python
     if (age >= 18) and (has_id):
         print("Access granted.")
     ```

---

#### Summary

Conditional statements are essential for making decisions in your programs. The combination of `if`, `elif`, and `else` allows you to handle multiple scenarios and provide appropriate responses.

- **`if`**: Executes code if the condition is `True`.
- **`elif`**: Checks additional conditions if the preceding ones are `False`.
- **`else`**: Executes code when none of the `if` or `elif` conditions are `True`.

**Example Recap**:
```python
age = 16

if age >= 18:
    print("You can vote.")
elif age >= 16:
    print("You can drive but not vote.")
else:
    print("You are too young to vote or drive.")
```

With this knowledge, you’re ready to create programs that make decisions and handle multiple scenarios dynamically!

---

### 3.2 Nested and Chained Conditional Statements

When working with complex decision-making in Python, you can use **nested conditionals** or **chained conditionals** to evaluate multiple conditions effectively. These approaches allow you to create programs that handle intricate logic.

---

#### Nested Conditionals

**Definition**:
- A **nested conditional** is an `if` statement inside another `if` statement.
- It allows you to create a hierarchy of conditions, where some conditions are only checked if others are met.

**When to Use**:
- Nested conditionals are useful when the outcome of one condition depends on the result of another condition.
- It’s particularly handy when multiple related conditions need to be evaluated in a sequence.

**Syntax**:
```python
if condition1:
    if condition2:
        # Code block if both conditions are True
    else:
        # Code block if condition1 is True but condition2 is False
else:
    # Code block if condition1 is False
```

**Example**:
```python
age = 20
has_id = True

if age >= 18:
    if has_id:
        print("Access granted.")
    else:
        print("You need an ID.")
else:
    print("Access denied. You must be at least 18.")
```

- **Explanation**:
  - The program first checks if the person is 18 or older.
  - If `True`, it then checks if they have an ID.
  - If `False`, the program skips the nested condition and directly denies access.

---

#### Chained Conditionals

**Definition**:
- **Chained conditionals** combine multiple conditions using logical operators (`and`, `or`, `not`) in a single `if` statement.
- They allow you to evaluate multiple conditions without nesting.

**When to Use**:
- Use chained conditionals to write **cleaner and more concise** code when multiple conditions need to be checked simultaneously.

**Syntax**:
```python
if condition1 and condition2:
    # Code block if both conditions are True
elif condition3 or condition4:
    # Code block if either condition3 or condition4 is True
else:
    # Code block if none of the conditions are True
```

**Example**:
```python
age = 20
has_id = True

if age >= 18 and has_id:
    print("Access granted.")
elif age < 18:
    print("Access denied. You must be at least 18.")
else:
    print("You need an ID.")
```

- **Explanation**:
  - The conditions are combined using `and`.
  - The program checks both conditions in a single statement, making the code cleaner compared to nesting.

---

#### Examples of Nested and Chained Conditionals

1. **Nested Conditional Example**:
   - Checking loan eligibility based on income and credit score.
   ```python
   income = 50000
   credit_score = 700

   if income >= 40000:
       if credit_score >= 650:
           print("Loan approved.")
       else:
           print("Loan denied. Low credit score.")
   else:
       print("Loan denied. Insufficient income.")
   ```

   - **Explanation**:
     - The outer `if` checks if income is sufficient.
     - If income is sufficient, the nested `if` checks the credit score.

2. **Chained Conditional Example**:
   - Checking if someone qualifies for a student discount.
   ```python
   age = 22
   is_student = True

   if (age <= 25 and is_student) or (age < 18):
       print("Eligible for student discount.")
   else:
       print("Not eligible for student discount.")
   ```

   - **Explanation**:
     - The conditions are combined using `and` and `or`.
     - A person qualifies if they are 25 or younger and a student, or if they are under 18.

3. **Combining Nested and Chained Conditionals**:
   - Determining access to an event based on age, ID, and ticket ownership.
   ```python
   age = 17
   has_id = True
   has_ticket = False

   if age >= 18:
       if has_ticket:
           print("Welcome to the event.")
       else:
           print("You need a ticket to enter.")
   elif age >= 16 and has_id:
       print("Parental permission required.")
   else:
       print("Access denied.")
   ```

   - **Explanation**:
     - The first condition (`age >= 18`) uses nesting to check if the person has a ticket.
     - The second condition (`age >= 16 and has_id`) is a chained conditional that checks if the person has an ID and is at least 16.

---

#### Key Differences Between Nested and Chained Conditionals

| **Feature**           | **Nested Conditionals**                                      | **Chained Conditionals**                                    |
|------------------------|-------------------------------------------------------------|------------------------------------------------------------|
| **Structure**          | Conditions are evaluated inside other `if` blocks.          | Conditions are combined in a single statement using logical operators. |
| **Readability**        | Can become hard to read with deep nesting.                  | Cleaner and more concise for multiple conditions.          |
| **Use Case**           | When conditions depend on each other.                       | When conditions can be evaluated independently.            |
| **Example**            | `if` within `if` blocks.                                    | Using `and`, `or`, and `not`.                              |

---

#### Tips for Writing Conditionals

1. **Avoid Excessive Nesting**:
   - Too many levels of nesting can make the code hard to read and maintain.
   - Use chained conditionals where possible.

2. **Use Logical Operators**:
   - Combine related conditions using `and`, `or`, and `not` for clarity.
   - **Example**:
     ```python
     if age >= 18 and has_ticket:
         print("Access granted.")
     ```

3. **Break Down Complex Conditions**:
   - For complex conditions, consider breaking them into smaller, descriptive variables.
   - **Example**:
     ```python
     is_adult = age >= 18
     has_permission = has_ticket or is_vip
     if is_adult and has_permission:
         print("Access granted.")
     ```

---

#### Summary

- **Nested Conditionals**: Used when conditions depend on each other. They allow hierarchical checking but can become hard to read if overused.
- **Chained Conditionals**: Combine conditions in a single statement using logical operators (`and`, `or`, `not`). They are cleaner and more concise for independent conditions.

**Example Recap**:

**Nested Conditional**:
```python
age = 20
if age >= 18:
    if has_id:
        print("Access granted.")
    else:
        print("You need an ID.")
else:
    print("Access denied.")
```

**Chained Conditional**:
```python
if age >= 18 and has_id:
    print("Access granted.")
else:
    print("Access denied or ID missing.")
```

Both approaches are useful, but choosing the right one depends on the complexity and structure of the conditions being evaluated.

---

<h2 class="workshop-title">Workshop Exercise</h2>
<div class="workshop-container">

#### Write a Program that Categorizes a Person’s Age

- **Objective**: Create a program that asks the user for their age and categorizes them as a child, teenager, adult, or senior.
- **Instructions**:
   1. **Get User Input**:
      - Create a Python file (e.g., `age_category.py`).
      - Use `input()` to ask the user for their age and convert the input to an integer.
      - Example:
        ```python
        age = int(input("Enter your age: "))
        ```

   2. **Apply Conditional Statements**:
      - Use `if`, `elif`, and `else` statements to check the age and categorize it.
      - Example:
        ```python
        if age <= 12:
            category = "child"
        elif age <= 19:
            category = "teenager"
        elif age <= 64:
            category = "adult"
        else:
            category = "senior"
        ```

   3. **Display the Result**:
      - Print the result in a clear message.
      - Example:
        ```python
        print(f"You are classified as a {category}.")
        ```
   4. **Test the Program**: Run the script with various ages to ensure it categorizes correctly.

</div>

<h2 class="workshop-title">Chapter Project</h2>
<div class="workshop-container">

**Project: Build a "Number Guessing Game"**

- **Description**: The computer will randomly select a number within a specific range, and the user will have to guess it. The program should provide feedback on whether the guess is too high or too low, and continue until the user guesses correctly.

- **Objective**: Apply conditional statements to create a simple game and provide feedback to the user based on their guesses.

- **Instructions**:
   1. **Set Up the Game**:
      - Create a Python file (e.g., `number_guessing_game.py`).
      - Import the `random` module and generate a random number for the user to guess.
      - Example:
        ```python
        import random
        number_to_guess = random.randint(1, 100)
        ```

   2. **Prompt User for Guesses**:
      - Create a loop that will continue until the user guesses the correct number.
      - Use `input()` to get the user’s guess, converting it to an integer.
      - Example:
        ```python
        guess = int(input("Guess the number between 1 and 100: "))
        ```

   3. **Provide Feedback Using Conditional Statements**:
      - Use `if`, `elif`, and `else` statements to compare the user’s guess to the random number.
      - Give feedback if the guess is too high, too low, or correct.
      - Example:
        ```python
        while True:
            guess = int(input("Guess the number between 1 and 100: "))
            if guess < number_to_guess:
                print("Too low! Try again.")
            elif guess > number_to_guess:
                print("Too high! Try again.")
            else:
                print("Congratulations! You guessed it right.")
                break
        ```

   4. **Test the Game**:
      - Run the game and try guessing numbers to check if the program provides accurate feedback and ends when the correct number is guessed.

---

This chapter introduces learners to the powerful control flow capabilities of Python. By categorizing ages and creating a number guessing game, they’ll gain hands-on experience using conditional statements to control the flow of a program. The guessing game also introduces the concept of loops in a simple, interactive way.

</div>

<script>
  import ChapterNavigation from '$lib/components/ChapterNavigation.svelte';
</script>

<ChapterNavigation 
    prevHref="/learn/python/ch2" 
    nextHref="/learn/python/ch4"
  />