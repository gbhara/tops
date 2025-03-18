let score = parseFloat(prompt("Enter your score:"));

// Determine the grade using if, else if, and else
let grade;

if (score >= 90 && score <= 100) {
    grade = "A";
} else if (score >= 80 && score < 90) {
    grade = "B";
} else if (score >= 70 && score < 80) {
    grade = "C";
} else if (score >= 60 && score < 70) {
    grade = "D";
} else if (score < 60) {
    grade = "F";
} else {
    grade = "Invalid score";
}

// Display the grade to the user
alert("Your grade is: " + grade);