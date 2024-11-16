---
title: Chapter 4: Loops in Python
---

## Topics

### 4.1 for and while Loops

Loops in Python are powerful tools that allow you to execute a block of code repeatedly. The two main types of loops in Python are **`for` loops** and **`while` loops**. Let’s explore their syntax, purpose, and examples.

---

#### **for Loop**

**Explanation**:
- A `for` loop iterates over a sequence, such as a list, tuple, string, or range.
- It’s commonly used when you know the number of iterations beforehand or when working with collections.

**Syntax**:
```python
for variable in sequence:
    # Code block to execute for each item in the sequence
```

**Key Points**:
- The `variable` takes on each value from the `sequence` one at a time.
- The loop executes the indented block of code once for each item in the sequence.

---

**Examples**:

1. **Looping Through a List**:
   ```python
   fruits = ["apple", "banana", "cherry"]

   for fruit in fruits:
       print(fruit)
   ```
   **Output**:
   ```
   apple
   banana
   cherry
   ```

2. **Using the `range()` Function**:
   - The `range()` function generates a sequence of numbers. It’s often used with `for` loops.
   - Syntax: `range(start, stop, step)`
   - Example:
     ```python
     for i in range(5):  # Generates numbers 0, 1, 2, 3, 4
         print(i)
     ```
     **Output**:
     ```
     0
     1
     2
     3
     4
     ```

3. **Looping with a Step**:
   ```python
   for i in range(1, 10, 2):  # Generates numbers 1, 3, 5, 7, 9
       print(i)
   ```
   **Output**:
   ```
   1
   3
   5
   7
   9
   ```

4. **Looping Through a String**:
   ```python
   for char in "Python":
       print(char)
   ```
   **Output**:
   ```
   P
   y
   t
   h
   o
   n
   ```

---

#### **while Loop**

**Explanation**:
- A `while` loop continues to execute as long as a given condition is `True`.
- It’s commonly used when the number of iterations is not known in advance, but instead depends on a condition.

**Syntax**:
```python
while condition:
    # Code block to execute as long as the condition is True
```

**Key Points**:
- The condition is checked **before** each iteration.
- If the condition evaluates to `False`, the loop stops.
- Be careful with `while` loops, as they can result in infinite loops if the condition is never met.

---

**Examples**:

1. **Basic `while` Loop**:
   ```python
   count = 0

   while count < 5:
       print(count)
       count += 1
   ```
   **Output**:
   ```
   0
   1
   2
   3
   4
   ```

2. **Loop with a Condition**:
   ```python
   num = 10

   while num > 0:
       print(f"Countdown: {num}")
       num -= 1
   print("Blast off!")
   ```
   **Output**:
   ```
   Countdown: 10
   Countdown: 9
   Countdown: 8
   ...
   Countdown: 1
   Blast off!
   ```

3. **Breaking a Loop**:
   - Use the `break` statement to exit a loop when a specific condition is met.
   - Example:
     ```python
     num = 1

     while True:
         print(num)
         if num == 5:
             break  # Exit the loop when num equals 5
         num += 1
     ```
     **Output**:
     ```
     1
     2
     3
     4
     5
     ```

4. **Skipping Iterations**:
   - Use the `continue` statement to skip the rest of the current iteration and proceed to the next one.
   - Example:
     ```python
     num = 0

     while num < 10:
         num += 1
         if num % 2 == 0:  # Skip even numbers
             continue
         print(num)
     ```
     **Output**:
     ```
     1
     3
     5
     7
     9
     ```

---

#### Comparison: `for` vs. `while`

| Feature            | `for` Loop                                | `while` Loop                                 |
|--------------------|-------------------------------------------|---------------------------------------------|
| **Use Case**       | Iterates over a sequence of known length. | Repeats based on a condition until it’s `False`. |
| **Iteration Count**| Known in advance.                        | Not known in advance, depends on the condition. |
| **Syntax Simplicity**| Simpler and more concise.                | More flexible but requires careful condition handling. |
| **Example**        | `for i in range(5): print(i)`             | `while i < 5: print(i); i += 1`             |

---

#### Tips for Using Loops

1. **Avoid Infinite Loops**:
   - Ensure that the condition in a `while` loop will eventually evaluate to `False` to avoid infinite loops.

2. **Use Descriptive Variables**:
   - Use meaningful variable names in loops to make your code easier to understand.
   - Example:
     ```python
     for student in students:
         print(student)
     ```

3. **Keep It Simple**:
   - Avoid unnecessary nesting of loops or conditions to keep your code readable.

---

#### Summary

- **`for` Loop**:
  - Ideal for iterating over sequences like lists, tuples, strings, or ranges.
  - Example:
    ```python
    for i in range(5):
        print(i)
    ```

- **`while` Loop**:
  - Ideal for situations where the number of iterations depends on a condition.
  - Example:
    ```python
    count = 0
    while count < 5:
        print(count)
        count += 1
    ```

With loops, you can automate repetitive tasks and make your programs more dynamic and efficient.

### 4.2 Nested Loops

#### **Explanation**
- A **nested loop** is a loop inside another loop. The inner loop runs completely for each iteration of the outer loop.
- Nested loops are commonly used for handling **multi-dimensional data structures** (e.g., matrices, grids) or solving problems that involve pairs or combinations of values.

**Key Points**:
- The outer loop controls the number of iterations for the inner loop.
- The inner loop runs fully for each iteration of the outer loop.

**Syntax**:
```python
for outer_variable in outer_sequence:
    for inner_variable in inner_sequence:
        # Code block for the inner loop
```

#### **Example**: Iterating Over a Grid
```python
for i in range(3):
    for j in range(3):
        print(f"i: {i}, j: {j}")
```
**Output**:
```
i: 0, j: 0
i: 0, j: 1
i: 0, j: 2
i: 1, j: 0
i: 1, j: 1
i: 1, j: 2
i: 2, j: 0
i: 2, j: 1
i: 2, j: 2
```

#### **Example**: Working with a Matrix
- Use nested loops to handle multi-dimensional data like a matrix.
```python
matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

for row in matrix:
    for element in row:
        print(element, end=" ")
    print()  # Print a new line after each row
```
**Output**:
```
1 2 3 
4 5 6 
7 8 9
```

---

### 4.3 Loop Control Statements

Loop control statements modify the normal flow of a loop. Python provides two key control statements: `break` and `continue`.

---

#### **The `break` Statement**

**Explanation**:
- The `break` statement is used to **terminate the loop entirely** when a specific condition is met.
- It exits the loop immediately, and no further iterations are performed.

**Syntax**:
```python
for variable in sequence:
    if condition:
        break
    # Code block
```

#### **Example**: Using `break` in a Loop
```python
for i in range(5):
    if i == 3:
        break
    print(i)
```
**Output**:
```
0
1
2
```
**Explanation**:
- The loop starts with `i = 0`.
- When `i == 3`, the `break` statement is executed, stopping the loop completely.

---

#### **The `continue` Statement**

**Explanation**:
- The `continue` statement is used to **skip the current iteration** of the loop and proceed to the next one.
- It doesn’t terminate the loop but allows skipping specific iterations based on a condition.

**Syntax**:
```python
for variable in sequence:
    if condition:
        continue
    # Code block
```

#### **Example**: Using `continue` in a Loop
```python
for i in range(5):
    if i == 3:
        continue
    print(i)
```
**Output**:
```
0
1
2
4
```
**Explanation**:
- When `i == 3`, the `continue` statement skips the `print()` statement for that iteration.
- The loop continues with `i = 4`.

---

#### **Combining Nested Loops with Control Statements**

Nested loops can also include `break` or `continue` statements. 

1. **`break` in Nested Loops**:
   - Stops the **inner loop** but allows the outer loop to continue.
   ```python
   for i in range(3):
       for j in range(3):
           if j == 2:
               break
           print(f"i: {i}, j: {j}")
   ```
   **Output**:
   ```
   i: 0, j: 0
   i: 0, j: 1
   i: 1, j: 0
   i: 1, j: 1
   i: 2, j: 0
   i: 2, j: 1
   ```

2. **`continue` in Nested Loops**:
   - Skips the current iteration of the **inner loop** but doesn’t affect the outer loop.
   ```python
   for i in range(3):
       for j in range(3):
           if j == 1:
               continue
           print(f"i: {i}, j: {j}")
   ```
   **Output**:
   ```
   i: 0, j: 0
   i: 0, j: 2
   i: 1, j: 0
   i: 1, j: 2
   i: 2, j: 0
   i: 2, j: 2
   ```

---

### Summary

#### **Nested Loops**:
- Use a loop inside another loop to handle multi-dimensional data or solve problems with pairs or combinations.
- Example:
  ```python
  for i in range(3):
      for j in range(3):
          print(f"i: {i}, j: {j}")
  ```

#### **Loop Control Statements**:
1. **`break`**: Terminates the loop completely.
   - Example:
     ```python
     for i in range(5):
         if i == 3:
             break
         print(i)
     ```

2. **`continue`**: Skips the current iteration and proceeds to the next one.
   - Example:
     ```python
     for i in range(5):
         if i == 3:
             continue
         print(i)
     ```

With these tools, you can write powerful and flexible loops to handle even the most complex scenarios in your Python programs.

### 4.3 Loop Control Statements

Python provides **loop control statements** that allow you to modify the behavior of loops. These statements let you break out of a loop early or skip specific iterations based on conditions. The two primary control statements are **`break`** and **`continue`**.

---

#### **The `break` Statement**

**Explanation**:
- The `break` statement **terminates the loop entirely** when it is encountered, regardless of the iteration count or condition.
- It immediately exits the loop and moves to the next statement after the loop.

**Syntax**:
```python
for variable in sequence:
    if condition:
        break
    # Code block
```

---

**Example**: Using `break` in a Loop
```python
for i in range(5):
    if i == 3:
        break  # Exit the loop when i equals 3
    print(i)
```

**Output**:
```
0
1
2
```

**Explanation**:
- The loop starts with `i = 0` and iterates through the numbers in the range.
- When `i == 3`, the `break` statement is executed, stopping the loop entirely.
- Numbers up to (but not including) 3 are printed.

---

**Example**: `break` in a `while` Loop
```python
count = 0

while count < 10:
    if count == 5:
        break  # Exit the loop when count equals 5
    print(count)
    count += 1
```

**Output**:
```
0
1
2
3
4
```

**Explanation**:
- The `while` loop continues as long as `count < 10`.
- When `count == 5`, the `break` statement exits the loop, stopping further iterations.

---

#### **The `continue` Statement**

**Explanation**:
- The `continue` statement **skips the current iteration** of the loop and moves directly to the next iteration.
- Unlike `break`, it doesn’t terminate the loop but skips the code after `continue` for the current iteration.

**Syntax**:
```python
for variable in sequence:
    if condition:
        continue
    # Code block
```

---

**Example**: Using `continue` in a Loop
```python
for i in range(5):
    if i == 3:
        continue  # Skip the iteration when i equals 3
    print(i)
```

**Output**:
```
0
1
2
4
```

**Explanation**:
- The loop iterates through numbers in the range.
- When `i == 3`, the `continue` statement skips the `print()` statement and moves to the next iteration.
- Numbers 0, 1, 2, and 4 are printed, but 3 is skipped.

---

**Example**: `continue` in a `while` Loop
```python
count = 0

while count < 5:
    count += 1
    if count == 3:
        continue  # Skip the current iteration when count equals 3
    print(count)
```

**Output**:
```
1
2
4
5
```

**Explanation**:
- The `while` loop continues as long as `count < 5`.
- When `count == 3`, the `continue` statement skips the `print()` statement for that iteration.
- Numbers 1, 2, 4, and 5 are printed, but 3 is skipped.

---

#### **Combining `break` and `continue`**

**Example**:
```python
for i in range(10):
    if i == 3:
        continue  # Skip iteration when i equals 3
    if i == 7:
        break  # Exit the loop when i equals 7
    print(i)
```

**Output**:
```
0
1
2
4
5
6
```

**Explanation**:
- The loop skips the number 3 due to `continue`.
- When `i == 7`, the `break` statement stops the loop entirely.

---

#### Key Differences Between `break` and `continue`

| **Feature**       | **`break`**                                     | **`continue`**                                |
|--------------------|------------------------------------------------|-----------------------------------------------|
| **Effect**         | Stops the loop entirely.                       | Skips the current iteration and continues.    |
| **Use Case**       | Exit the loop when a condition is met.          | Skip specific iterations without exiting.     |
| **Example Output** | Outputs values only until the `break` condition.| Outputs all values except those skipped.      |

---

#### **Practical Use Cases**

1. **`break` Example: Searching for an Item**
   - Stop the loop when the item is found.
   ```python
   items = ["apple", "banana", "cherry"]

   for item in items:
       if item == "banana":
           print("Item found!")
           break
   ```

2. **`continue` Example: Filtering Data**
   - Skip values that don’t meet a certain condition.
   ```python
   for num in range(10):
       if num % 2 == 0:  # Skip even numbers
           continue
       print(num)  # Only prints odd numbers
   ```

---

#### Summary

- **`break`**: Terminates the loop entirely.
- **`continue`**: Skips the current iteration and moves to the next one.

**Examples Recap**:
```python
# Using break
for i in range(5):
    if i == 3:
        break
    print(i)  # Outputs: 0, 1, 2

# Using continue
for i in range(5):
    if i == 3:
        continue
    print(i)  # Outputs: 0, 1, 2, 4
```

These control statements are essential for handling complex loop behaviors and making your programs more efficient and dynamic.

---

<h2 class="workshop-title">Workshop Exercise</h2>
<div class="workshop-container">

#### Write a Program that Prints a Multiplication Table for a Given Number

- **Objective**: Create a program that takes a number as input and prints its multiplication table up to a specified range (e.g., 1 to 10).
- **Instructions**:
   1. **Get User Input**:
      - Create a Python file (e.g., `multiplication_table.py`).
      - Use `input()` to ask the user for a number and convert it to an integer.
      - Example:
        ```python
        number = int(input("Enter a number for its multiplication table: "))
        ```
   2. **Print the Multiplication Table**:
      - Use a `for` loop to iterate through a range (e.g., 1 to 10) and print the product of the number and each iteration.
      - Example:
        ```python
        for i in range(1, 11):
            print(f"{number} x {i} = {number * i}")
        ```
   3. **Test the Program**: Run the program and try different numbers to verify it prints correct multiplication tables.

</div>

<h2 class="workshop-title">Chapter Project</h2>
<div class="workshop-container">

**Project: Create a "Countdown Timer"**

- **Description**: The Countdown Timer program will take the user’s input for the number of seconds and then count down to zero, printing the remaining time at each second.

- **Objective**: Use a `while` loop to implement a countdown and introduce learners to the `time.sleep()` function for delaying execution.

- **Instructions**:
   1. **Get User Input**:
      - Create a Python file (e.g., `countdown_timer.py`).
      - Use `input()` to ask the user for the number of seconds for the countdown and convert it to an integer.
      - Example:
        ```python
        import time
        seconds = int(input("Enter the number of seconds for the countdown: "))
        ```

   2. **Implement the Countdown**:
      - Use a `while` loop to count down from the entered number to zero.
      - Inside the loop, print the current seconds remaining, subtract one from the counter, and use `time.sleep(1)` to wait one second between each print.
      - Example:
        ```python
        while seconds > 0:
            print(f"Time left: {seconds} seconds")
            seconds -= 1
            time.sleep(1)
        print("Countdown finished!")
        ```

   3. **Test the Timer**:
      - Run the timer with different countdown lengths to verify that it correctly counts down and ends.

---

This chapter introduces learners to essential loop structures in Python. The multiplication table exercise helps solidify the `for` loop, while the countdown project reinforces the `while` loop with a practical example. By the end, learners will have a firm understanding of using loops and controlling their flow with `break` and `continue` statements.

</div>

<script>
  import ChapterNavigation from '$lib/components/ChapterNavigation.svelte';
</script>

<ChapterNavigation 
    prevHref="/learn/python/ch3" 
    nextHref="/learn/python/ch5"
  />