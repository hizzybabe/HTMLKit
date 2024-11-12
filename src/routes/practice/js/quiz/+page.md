---
title: Quiz App
---

Here's a simple tutorial on creating a "Quiz App" using HTML, CSS, and JavaScript. This app will allow users to answer multiple-choice questions and get feedback on their scores.

### Step 1: HTML Structure

Create an HTML file (`index.html`) to define the structure of the quiz app.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Quiz App</title>
  <style>
    body { font-family: Arial, sans-serif; display: flex; align-items: center; justify-content: center; height: 100vh; margin: 0; }
    .quiz-container { width: 300px; text-align: center; }
    .question { font-size: 20px; margin-bottom: 15px; }
    .answer { display: block; margin: 10px 0; padding: 10px; background-color: #f0f0f0; border: 1px solid #ccc; cursor: pointer; border-radius: 5px; }
    .answer:hover { background-color: #e0e0e0; }
    .score { font-size: 18px; margin-top: 20px; }
  </style>
</head>
<body>
  <div class="quiz-container">
    <h2>Quiz App</h2>
    <div id="questionContainer">
      <p id="question" class="question"></p>
      <div id="answerButtons" class="answers"></div>
    </div>
    <button id="nextButton" onclick="nextQuestion()" style="display: none;">Next</button>
    <p id="score" class="score"></p>
  </div>

  <script src="script.js"></script>
</body>
</html>
```

In this HTML file:
- We have a container to display the question and answer options.
- A "Next" button to navigate between questions.
- A `<p>` element to display the score at the end.

### Step 2: JavaScript Functionality

Create a JavaScript file (`script.js`) to add functionality for managing questions, displaying options, and keeping score.

```javascript
const questions = [
  {
    question: "What is the capital of France?",
    answers: [
      { text: "Paris", correct: true },
      { text: "Berlin", correct: false },
      { text: "Madrid", correct: false },
      { text: "Rome", correct: false },
    ],
  },
  {
    question: "What is 2 + 2?",
    answers: [
      { text: "3", correct: false },
      { text: "4", correct: true },
      { text: "5", correct: false },
      { text: "6", correct: false },
    ],
  },
  {
    question: "Which planet is known as the Red Planet?",
    answers: [
      { text: "Earth", correct: false },
      { text: "Mars", correct: true },
      { text: "Jupiter", correct: false },
      { text: "Saturn", correct: false },
    ],
  },
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answerButtons");
const nextButton = document.getElementById("nextButton");
const scoreElement = document.getElementById("score");

function showQuestion() {
  resetState();
  const currentQuestion = questions[currentQuestionIndex];
  questionElement.innerText = currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("answer");
    button.onclick = () => selectAnswer(answer);
    answerButtonsElement.appendChild(button);
  });
}

function resetState() {
  nextButton.style.display = "none";
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  }
}

function selectAnswer(answer) {
  if (answer.correct) {
    score++;
  }
  Array.from(answerButtonsElement.children).forEach((button) => {
    button.disabled = true;
    if (button.innerText === answer.text && answer.correct) {
      button.style.backgroundColor = "#66ff66"; // Green for correct
    } else if (button.innerText === answer.text && !answer.correct) {
      button.style.backgroundColor = "#ff6666"; // Red for incorrect
    }
  });
  nextButton.style.display = "block";
}

function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

function showScore() {
  resetState();
  questionElement.innerText = `You scored ${score} out of ${questions.length}!`;
  nextButton.style.display = "none";
  scoreElement.innerText = "";
}

showQuestion();
```

### Explanation of JavaScript Code

1. **Question and Answer Data**: We create an array of question objects, where each object has a `question` and `answers` (an array of answer options with a `text` and `correct` property).
2. **Showing the Question**: The `showQuestion()` function displays the current question and its answer options.
3. **Resetting State**: The `resetState()` function clears previous answer buttons and hides the "Next" button.
4. **Selecting an Answer**: The `selectAnswer()` function highlights the correct answer and disables all options after one is selected.
5. **Navigating to Next Question**: The `nextQuestion()` function loads the next question and calls `showScore()` at the end to display the score.
6. **Displaying the Score**: The `showScore()` function displays the user’s score at the end of the quiz.

### How to Use the Quiz App
1. Open `index.html` in your browser.
2. Answer each question by clicking an option.
3. Click the "Next" button to proceed to the next question.
4. At the end, you’ll see your score!