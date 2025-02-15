// 4. Reading a File Line by Line
// Assignment:
// Read a text file line by line.
// Instructions:
// 1. Use the fs.readFile method to read the contents of a file.
// 2. Split the file contents into an array of lines and log each line to the console.
// 3. Use a loop to iterate through the lines and print them one by one.
const fs = require('fs');


const filePath = 'sample.txt';


fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }


  const lines = data.split(/\r?\n/);

  
  for (let i = 0; i < lines.length; i++) {
    console.log(`Line ${i + 1}: ${lines[i]}`);
  }
});
