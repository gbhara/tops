// Prompt the user for a starting number
let number = parseInt(prompt("Enter a number to start the countdown:"));

if (isNaN(number) || number < 0) {
    alert("Please enter a valid non-negative number.");
} else {
    console.log("Countdown:");
    
    // Use a while loop to count down to zero
    while (number >= 0) {
        console.log(number);
        number--;
    }
    
    // Display "Blast off!" when reaching zero
    console.log("Blast off!");
}
