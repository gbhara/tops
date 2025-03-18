// Prompt the user for a string
let inputString = prompt("Enter a string to reverse:");

// Initialize an empty string to hold the reversed result
let reversedString = "";

// Use a for loop to reverse the string
for (let i = inputString.length - 1; i >= 0; i--) {
    reversedString += inputString[i];
}

// Display the reversed string
console.log(`The reversed string is: ${reversedString}`);
