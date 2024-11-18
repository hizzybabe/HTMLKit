---
title: File Handling
---
**Chapter 9: File Handling**

### Topics

### 9.1 Reading from and Writing to Files

---

#### **Opening Files**

Python provides the `open()` function to open files for reading, writing, or appending. The function takes two main arguments:
1. **Filename**: The name of the file to open.
2. **Mode**: Specifies the operation mode (e.g., read, write).

**Common Modes**:
- `"r"`: Read (default). Opens the file for reading; an error occurs if the file doesn’t exist.
- `"w"`: Write. Opens the file for writing; creates a new file if it doesn’t exist, or truncates (overwrites) the file if it does.
- `"a"`: Append. Opens the file for appending; creates a new file if it doesn’t exist.

**Syntax**:
```python
file = open("example.txt", "r")  # Opens the file in read mode
```

---

#### **Reading Files**

There are several methods to read files:

1. **`.read()`**:
   - Reads the entire content of the file as a single string.
   ```python
   with open("example.txt", "r") as file:
       content = file.read()
       print(content)
   ```

2. **`.readline()`**:
   - Reads the file one line at a time. Subsequent calls read the next line.
   ```python
   with open("example.txt", "r") as file:
       line = file.readline()
       while line:
           print(line.strip())  # Remove extra whitespace
           line = file.readline()
   ```

3. **`.readlines()`**:
   - Reads all lines of the file into a list of strings.
   ```python
   with open("example.txt", "r") as file:
       lines = file.readlines()
       print(lines)
   ```

4. **Using a Loop**:
   - Read and process each line directly in a loop.
   ```python
   with open("example.txt", "r") as file:
       for line in file:
           print(line.strip())
   ```

---

#### **Writing to Files**

To write data to a file, use the following modes:
1. **`"w"`**: Write mode. Creates a new file or overwrites an existing file.
2. **`"a"`**: Append mode. Adds data to the end of the file without removing existing content.

**Example: Writing to a File**:
```python
with open("output.txt", "w") as file:
    file.write("Hello, World!\n")
    file.write("This is a new file.")
```

**Example: Appending to a File**:
```python
with open("output.txt", "a") as file:
    file.write("\nAppending this line.")
```

---

#### **Closing Files**

It’s important to close a file after performing file operations to release system resources. Forgetting to close a file can lead to resource leaks.

**Manual File Closure**:
```python
file = open("example.txt", "r")
content = file.read()
file.close()
```

**Best Practice: Using the `with` Statement**:
- The `with` statement ensures that the file is automatically closed after the block is executed, even if an error occurs.
```python
with open("example.txt", "r") as file:
    content = file.read()
    print(content)
# File is automatically closed here
```

---

#### **Examples**

1. **Reading a File**:
   ```python
   with open("example.txt", "r") as file:
       for line in file:
           print(line.strip())  # Outputs each line without extra spaces
   ```

2. **Writing to a File**:
   ```python
   with open("output.txt", "w") as file:
       file.write("This is the first line.\n")
       file.write("This is the second line.")
   ```

3. **Appending to a File**:
   ```python
   with open("output.txt", "a") as file:
       file.write("\nThis line is appended.")
   ```

4. **Combining Reading and Writing**:
   ```python
   with open("example.txt", "r") as infile, open("copy.txt", "w") as outfile:
       for line in infile:
           outfile.write(line)  # Copies each line to a new file
   ```

---

#### **Summary**

1. **Opening Files**:
   - Use `open()` with modes like `"r"`, `"w"`, or `"a"`.
   ```python
   file = open("example.txt", "r")
   ```

2. **Reading Files**:
   - `.read()`: Reads the entire file.
   - `.readline()`: Reads one line at a time.
   - `.readlines()`: Reads all lines as a list.
   - Example:
     ```python
     with open("example.txt", "r") as file:
         for line in file:
             print(line.strip())
     ```

3. **Writing Files**:
   - Use `"w"` mode to write or `"a"` mode to append.
   - Example:
     ```python
     with open("output.txt", "w") as file:
         file.write("Hello, World!")
     ```

4. **Closing Files**:
   - Use `file.close()` or the `with` statement for automatic closure.

Efficient file handling is essential for reading, writing, and managing data in Python programs.

### 9.2 Handling Different File Types (e.g., .txt, .csv)

---

#### **Text Files**

**What are Text Files?**
- Text files store plain text data, often with a `.txt` extension.
- They are commonly used for storing readable data such as logs, configuration files, or simple documents.

**Reading and Writing Text Files**:
- Use the methods covered in **9.1** to handle `.txt` files.

**Example: Reading a Text File**:
```python
with open("example.txt", "r") as file:
    for line in file:
        print(line.strip())  # Outputs each line without extra whitespace
```

**Example: Writing to a Text File**:
```python
with open("output.txt", "w") as file:
    file.write("This is a sample text file.\n")
    file.write("Python makes file handling easy!")
```

---

#### **CSV Files**

**What are CSV Files?**
- **CSV** (Comma-Separated Values) files store tabular data, with each row as a line of text and values separated by commas.
- They are widely used for data exchange between applications like Excel, databases, and data analysis tools.

**Handling CSV Files with Python**:
- Use Python’s built-in `csv` module to work with CSV files.
- The `csv.reader` reads data, and `csv.writer` writes data.

---

#### **Reading CSV Files**

**Using `csv.reader`**:
- The `csv.reader` reads the CSV file and returns each row as a list.
```python
import csv

# Reading a CSV file
with open("data.csv", "r") as file:
    reader = csv.reader(file)
    for row in reader:
        print(row)  # Outputs each row as a list
```

**Handling Headers**:
- If the CSV file contains headers, you can skip the first row or process it separately.
```python
with open("data.csv", "r") as file:
    reader = csv.reader(file)
    headers = next(reader)  # Reads the first row (headers)
    print("Headers:", headers)
    for row in reader:
        print("Data Row:", row)
```

---

#### **Writing CSV Files**

**Using `csv.writer`**:
- The `csv.writer` writes rows to a CSV file. Use the `writerow()` method to write a single row or `writerows()` to write multiple rows.

**Example: Writing to a CSV File**:
```python
import csv

# Writing to a CSV file
with open("output.csv", "w", newline="") as file:
    writer = csv.writer(file)
    writer.writerow(["Name", "Age", "City"])  # Writing the header
    writer.writerow(["Alice", 25, "New York"])  # Writing a single row
    writer.writerow(["Bob", 30, "Los Angeles"])
```

**Example: Writing Multiple Rows**:
```python
data = [
    ["Name", "Age", "City"],
    ["Alice", 25, "New York"],
    ["Bob", 30, "Los Angeles"]
]

with open("output.csv", "w", newline="") as file:
    writer = csv.writer(file)
    writer.writerows(data)  # Writes all rows at once
```

---

#### **Advanced CSV Handling**

**Using Dictionaries**:
- The `csv.DictReader` reads rows into dictionaries, where the keys are the column headers.
- The `csv.DictWriter` writes rows from dictionaries.

**Reading with `csv.DictReader`**:
```python
with open("data.csv", "r") as file:
    reader = csv.DictReader(file)
    for row in reader:
        print(row)  # Outputs each row as a dictionary
```

**Writing with `csv.DictWriter`**:
```python
data = [
    {"Name": "Alice", "Age": 25, "City": "New York"},
    {"Name": "Bob", "Age": 30, "City": "Los Angeles"}
]

with open("output.csv", "w", newline="") as file:
    fieldnames = ["Name", "Age", "City"]
    writer = csv.DictWriter(file, fieldnames=fieldnames)
    writer.writeheader()  # Write the header row
    writer.writerows(data)  # Write the data rows
```

---

#### **Comparison of Text and CSV Files**

| **Feature**             | **Text Files**                         | **CSV Files**                       |
|--------------------------|-----------------------------------------|-------------------------------------|
| **Structure**            | Plain text with no strict format.      | Tabular format with rows and columns. |
| **Use Cases**            | Logs, configuration files, documents.  | Data exchange, tabular data storage. |
| **Handling**             | Read/write using `.read()`/`.write()`. | Use `csv.reader`/`csv.writer`.       |

---

#### **Summary**

1. **Text Files**:
   - Read and write using the `open()` function and standard file methods.
   - Example:
     ```python
     with open("example.txt", "r") as file:
         content = file.read()
         print(content)
     ```

2. **CSV Files**:
   - Use the `csv` module for handling structured tabular data.
   - Example:
     **Reading**:
     ```python
     import csv
     with open("data.csv", "r") as file:
         reader = csv.reader(file)
         for row in reader:
             print(row)
     ```
     **Writing**:
     ```python
     with open("output.csv", "w", newline="") as file:
         writer = csv.writer(file)
         writer.writerow(["Name", "Age"])
         writer.writerow(["Alice", 25])
     ```

Handling different file types effectively allows you to manage a variety of data formats in Python, making it essential for data processing and analysis tasks.

<h2 class="workshop-title">Workshop Exercise</h2>
<div class="workshop-container">

#### Write a Program that Reads a Text File and Counts Lines, Words, and Characters

- **Objective**: Create a program that reads a text file and counts the number of lines, words, and characters.
- **Instructions**:
   1. **Get the File Path**:
      - Create a Python file (e.g., `file_stats.py`).
      - Use `input()` to ask for the file name or path.
      - Example:
        ```python
        filename = input("Enter the filename: ")
        ```

   2. **Read and Analyze the File**:
      - Use the `with` statement to open the file in read mode.
      - Initialize counters for lines, words, and characters, then iterate through each line to update the counts.
      - Example:
        ```python
        line_count = 0
        word_count = 0
        char_count = 0

        with open(filename, "r") as file:
            for line in file:
                line_count += 1
                word_count += len(line.split())
                char_count += len(line)
        ```

   3. **Display the Results**:
      - Print the counts for lines, words, and characters.
      - Example:
        ```python
        print(f"Lines: {line_count}")
        print(f"Words: {word_count}")
        print(f"Characters: {char_count}")
        ```

</div>

<h2 class="workshop-title">Chapter Project</h2>
<div class="workshop-container">
**Project: Develop a "Simple Diary" App**

- **Description**: The Simple Diary app allows users to write daily entries and read past entries. Each entry is stored with a date, making it easy to organize and retrieve.

- **Objective**: Use file handling to manage diary entries in a text file, allowing users to add and read entries.

- **Instructions**:
   1. **Set Up the File**:
      - Create a Python file (e.g., `simple_diary.py`).

   2. **Define Menu Options**:
      - Create a menu loop that allows the user to choose between adding a new entry or reading past entries.
      - Example:
        ```python
        while True:
            print("\nOptions: add, read, quit")
            choice = input("Choose an option: ").lower()
            if choice == "add":
                add_entry()
            elif choice == "read":
                read_entries()
            elif choice == "quit":
                break
            else:
                print("Invalid choice, please try again.")
        ```

   3. **Adding Entries**:
      - Define an `add_entry()` function to write a new entry to the diary file.
      - Use the current date to tag each entry and allow the user to write their entry.
      - Example:
        ```python
        from datetime import datetime

        def add_entry():
            entry = input("Write your entry: ")
            date = datetime.now().strftime("%Y-%m-%d")

            with open("diary.txt", "a") as file:
                file.write(f"Date: {date}\n")
                file.write(f"{entry}\n")
                file.write("-" * 20 + "\n")
            print("Entry added.")
        ```

   4. **Reading Entries**:
      - Define a `read_entries()` function to read and display all diary entries from the file.
      - Example:
        ```python
        def read_entries():
            print("\nDiary Entries:\n")
            try:
                with open("diary.txt", "r") as file:
                    print(file.read())
            except FileNotFoundError:
                print("No entries found.")
        ```

   5. **Test the Diary App**:
      - Run the program, add multiple entries, and verify they are saved with dates.
      - Test reading entries to ensure they display correctly.

---

### Summary

This chapter introduces learners to file handling in Python, enabling them to read from and write to files, handle various file types, and organize data persistently. The workshop exercise reinforces basic file operations, while the Simple Diary project provides practical experience in managing and retrieving user-generated content, a valuable skill in real-world applications.

</div>

<script>
  import ChapterNavigation from '$lib/components/ChapterNavigation.svelte';
</script>

<ChapterNavigation 
    prevHref="/learn/python/ch8" 
    nextHref="/learn/python/ch10"
  />