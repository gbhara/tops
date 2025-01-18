let x = parseInt(prompt('Enter the number of terms for the Fibonacci sequence:'));

// Initialize the first two terms
let a = 0, b = 1;

for (let i = 0; i < x; i++) {
    if (i === 0 || i === 1) {
        console.log(i); // Print the first two terms directly
    } else {
        let sum = a + b; // Calculate the next term in the sequence
        console.log(sum);
        a = b; // Update 'a' to the previous term
        b = sum; // Update 'b' to the current term
    }
}
