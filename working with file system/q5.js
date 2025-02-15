// 5. Checking if a File Exists
// Assignment:
// Check if a specific file exists in the directory.
// Instructions:
// 1. Use the fs.existsSync method to check for the existence of a file (e.g., check.txt).
// 2. Log a message indicating whether the file exists or not.




const fs = require('fs');

// Define the file path
const filePath = 'check.txt';

// Check if the file exists
if (fs.existsSync(filePath)) {
  console.log(`The file "${filePath}" exists.`);
} else {
  console.log(`The file "${filePath}" does not exist.`);
}
