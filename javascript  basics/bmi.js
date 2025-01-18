// Step 1: Prompt user for weight and height
let weight = parseFloat(prompt("Enter your weight in kilograms:"));
let height = parseFloat(prompt("Enter your height in meters:"));

// Step 2: Calculate BMI
let bmi = weight / (height * height);

// Step 3: Categorize BMI
let category;

if (bmi < 18.5) {
    category = "Underweight";
} else if (bmi >= 18.5 && bmi < 24.9) {
    category = "Normal weight";
} else if (bmi >= 25 && bmi < 29.9) {
    category = "Overweight";
} else {
    category = "Obesity";
}

// Step 4: Display BMI and category
alert(`Your BMI is ${bmi.toFixed(2)}, which is considered ${category}.`);


