// Prompt the user to enter a number
let a = parseInt(prompt("Enter a number to calculate its factorial:"));

// Initialize factorial
let fact = 1;

// Calculate the factorial using a for loop
for (let i = 1; i <= a; i++) {
    fact *= i;
}

// Display the result
alert(`The factorial of ${a} is ${fact}.`);
