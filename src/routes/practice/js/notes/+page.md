---
title: Notes App
---

Here’s a "Notes App" that lets users create, edit, and delete notes. The notes are stored in local storage to persist after a page refresh, and users can optionally categorize notes by assigning tags.

### Step 1: HTML Structure

Create an HTML file (`index.html`) to define the structure of the notes app.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Notes App</title>
  <style>
    body { font-family: Arial, sans-serif; display: flex; justify-content: center; align-items: flex-start; min-height: 100vh; margin: 0; background-color: #f5f5f5; padding: 20px; }
    .container { width: 600px; }
    h2 { text-align: center; }
    .note-form { display: flex; flex-direction: column; margin-bottom: 20px; }
    .note-form input, .note-form textarea { padding: 10px; font-size: 16px; margin-bottom: 10px; border: 1px solid #ccc; border-radius: 5px; }
    .note-form button { padding: 10px; font-size: 16px; cursor: pointer; border: none; border-radius: 5px; background-color: #4CAF50; color: white; }
    .note-form button:hover { background-color: #45a049; }
    .note { background-color: #fff; padding: 15px; margin-bottom: 15px; border-radius: 5px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); position: relative; }
    .note-title { font-size: 18px; font-weight: bold; }
    .note-tag { font-size: 14px; color: #888; margin-top: 5px; }
    .note-content { margin-top: 10px; }
    .note button { position: absolute; top: 10px; right: 10px; background-color: #ff6666; color: white; border: none; border-radius: 5px; padding: 5px; cursor: pointer; }
    .note button:hover { background-color: #ff4d4d; }
  </style>
</head>
<body>
  <div class="container">
    <h2>Notes App</h2>
    <div class="note-form">
      <input type="text" id="noteTitle" placeholder="Note Title" required>
      <input type="text" id="noteTag" placeholder="Tag (optional)">
      <textarea id="noteContent" placeholder="Write your note here..." rows="5" required></textarea>
      <button onclick="saveNote()">Add Note</button>
    </div>
    <div id="notesList"></div>
  </div>

  <script src="script.js"></script>
</body>
</html>
```

In this HTML file:
- A form (`note-form`) to add a title, optional tag, and note content.
- `notesList` displays the list of saved notes.

### Step 2: JavaScript Functionality

Create a JavaScript file (`script.js`) to handle note management and local storage.

```javascript
const notesList = document.getElementById("notesList");
const noteTitle = document.getElementById("noteTitle");
const noteTag = document.getElementById("noteTag");
const noteContent = document.getElementById("noteContent");

// Load notes from local storage on page load
document.addEventListener("DOMContentLoaded", loadNotes);

function loadNotes() {
  const notes = JSON.parse(localStorage.getItem("notes")) || [];
  notesList.innerHTML = "";
  notes.forEach(note => renderNote(note));
}

function saveNote() {
  const title = noteTitle.value.trim();
  const tag = noteTag.value.trim();
  const content = noteContent.value.trim();

  if (!title || !content) {
    alert("Please enter both title and content for the note.");
    return;
  }

  const note = {
    id: Date.now(),
    title,
    tag,
    content
  };

  const notes = JSON.parse(localStorage.getItem("notes")) || [];
  notes.push(note);
  localStorage.setItem("notes", JSON.stringify(notes));

  renderNote(note);
  noteTitle.value = "";
  noteTag.value = "";
  noteContent.value = "";
}

function renderNote(note) {
  const noteElement = document.createElement("div");
  noteElement.classList.add("note");
  noteElement.setAttribute("data-id", note.id);

  noteElement.innerHTML = `
    <div class="note-title">${note.title}</div>
    ${note.tag ? `<div class="note-tag">Tag: ${note.tag}</div>` : ""}
    <div class="note-content">${note.content}</div>
    <button onclick="deleteNote(${note.id})">Delete</button>
  `;

  notesList.appendChild(noteElement);
}

function deleteNote(id) {
  let notes = JSON.parse(localStorage.getItem("notes")) || [];
  notes = notes.filter(note => note.id !== id);
  localStorage.setItem("notes", JSON.stringify(notes));
  loadNotes();
}
```

### Explanation of JavaScript Code

1. **Load Notes**: 
   - `loadNotes()` retrieves notes from `localStorage` and displays each note by calling `renderNote()`.

2. **Save Note**:
   - `saveNote()` validates the input fields, creates a note object, and saves it to `localStorage`.
   - Each note has a unique `id` generated with `Date.now()`.
   - After saving, `renderNote()` is called to display the new note.

3. **Render Note**:
   - `renderNote(note)` creates a new `note` element in the DOM with the note's title, optional tag, content, and a delete button.
   - Adds the note to `notesList`.

4. **Delete Note**:
   - `deleteNote(id)` removes the note with the specified `id` from `localStorage` and reloads the notes list.

### Styling (CSS)

The CSS in `index.html`:
- Styles the note creation form and individual note display.
- Adds padding, background colors, and a delete button to each note.

### How to Use the Notes App

1. Open `index.html` in your browser.
2. Enter a title, an optional tag, and content for the note, then click "Add Note."
3. The new note appears below, with an option to delete it.
4. All notes are saved in `localStorage`, so they persist across page refreshes.