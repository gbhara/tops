// Ask the user for a number
let number = parseInt(prompt("Enter a positive number:"));

// Initialize the sum
let sum = 0;

// Use a for loop to iterate through numbers from 1 to the specified number
for (let i = 1; i <= number; i++) {
    sum += i; // Add the current number to the sum
}

// Display the result
alert(`The sum of numbers from 1 to ${number} is ${sum}.`);
