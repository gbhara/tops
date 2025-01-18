// Prompt the user for a number
let num = parseInt(prompt("Enter a number to check if it's a prime number:"));

// Initialize the flag
let flag = false;

if (num === 0 || num === 1) {
    console.log(`${num} is not a prime number`);
} else if (num > 1) {
    // Check for factors
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            // If a factor is found, set flag to true
            flag = true;
            // Break out of the loop
            break;
        }
    }

    // Check if flag is true
    if (flag) {
        console.log(`${num} is not a prime number`);
    } else {
        console.log(`${num} is a prime number`);
    }
}

