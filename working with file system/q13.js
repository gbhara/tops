// 13. Writing JSON Data to a File
// Assignment:
// Write a JavaScript object to a JSON file.
// Instructions:
// 1. Create a JavaScript object with sample data (e.g., user details).
// 2. Use fs.writeFile to write the object to a file named output.json after converting it to
// a JSON string using JSON.stringify.
// 3. Log a success message once the write operation is complete
const fs = require('fs');

const userDetails = {
  name: "Jane Smith",
  age: 28,
  email: "jane.smith@example.com",
  city: "Los Angeles"
};


fs.writeFile('output.json', JSON.stringify(userDetails, null, 2), 'utf8', (err) => {
  if (err) {
    console.error('Error writing JSON to file:', err);
    return;
  }
  
  console.log('JSON data written successfully to output.json.');
});
