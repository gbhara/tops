// Ask the user a question
let userAnswer = prompt("What is the capital of France?");

// Correct answer
let correctAnswer = "Paris";

// Check if the user's answer matches the correct answer
if (userAnswer.trim().toLowerCase() === correctAnswer.toLowerCase()) {
    alert("Correct! The capital of France is Paris.");
} else {
    alert("Incorrect. The correct answer is Paris.");
}
