---
title: File Handling
---
**Chapter 9: File Handling**

### Topics

#### 9.1 Reading from and Writing to Files
   - **Opening Files**:
      - Introduce the `open()` function to open a file, with common modes such as `"r"` for reading, `"w"` for writing, and `"a"` for appending.
      - **Syntax**:
        ```python
        file = open("example.txt", "r")  # Opens file in read mode
        ```
   - **Reading Files**:
      - Explain methods for reading files: `.read()`, `.readline()`, and `.readlines()`.
      - **Examples**:
        ```python
        # Reading entire content
        with open("example.txt", "r") as file:
            content = file.read()
            print(content)

        # Reading line by line
        with open("example.txt", "r") as file:
            for line in file:
                print(line.strip())
        ```
   - **Writing to Files**:
      - Explain how to write to files using `"w"` and `"a"` modes and the `.write()` method.
      - **Example**:
        ```python
        with open("output.txt", "w") as file:
            file.write("Hello, World!")
        ```
   - **Closing Files**:
      - Discuss the importance of closing files after operations to free resources.
      - **Best Practice**: Use the `with` statement for automatic file closure.

#### 9.2 Handling Different File Types (e.g., .txt, .csv)
   - **Text Files**:
      - Explain text files as simple files storing plain text data.
   - **CSV Files**:
      - Introduce CSV files as Comma-Separated Values files, commonly used for storing tabular data.
      - Use Python’s `csv` module to read and write CSV files.
      - **Examples**:
        ```python
        import csv

        # Reading CSV
        with open("data.csv", "r") as file:
            reader = csv.reader(file)
            for row in reader:
                print(row)

        # Writing CSV
        with open("output.csv", "w", newline="") as file:
            writer = csv.writer(file)
            writer.writerow(["Name", "Age"])
            writer.writerow(["Alice", 25])
        ```

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