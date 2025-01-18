let number = parseInt(prompt("Enter a number to display its multiplication table:"));

if (isNaN(number)) {
    alert("Please enter a valid number.");
} else {
    console.log(`Multiplication Table for ${number}`);
    console.log("--------------------------");

    // Use a for loop to generate and display the table
    for (let i = 1; i <= 10; i++) {
        console.log(`${number} x ${i} = ${number * i}`);
    }
}