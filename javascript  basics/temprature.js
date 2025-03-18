// Prompt the user for temperature
const temperature = parseFloat(prompt("Enter the temperature:"));

// Prompt the user for the conversion type
const conversionType = prompt("Enter the conversion type (C to F or F to C):");

let convertedTemp;

// Perform the conversion
if (conversionType === "C to F") {
    convertedTemp = (temperature * 9 / 5) + 32;
    alert(`${temperature}°C is ${convertedTemp}°F`);
} else if (conversionType === "F to C") {
    convertedTemp = (temperature - 32) * 5 / 9;
    alert(`${temperature}°F is ${convertedTemp}°C`);
} else {
    alert("Invalid conversion type. Please enter 'C to F' or 'F to C'.");
}
