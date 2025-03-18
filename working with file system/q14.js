// 14. Reading a File Asynchronously with Promises
// Assignment:
// Read a file using Promises and handle errors.
// Instructions:
// 1. Create a text file named promiseFile.txt with some content.
// 2. Use the fs.promises.readFile method to read the file.
// 3. Handle any potential errors using .catch() and log the contents to the console.
const fs = require('fs').promises;

const filePath = 'promiseFile.txt';

fs.readFile(filePath, 'utf8')
  .then(data => {
    console.log('File contents:', data);
  })
  .catch(error => {
    console.error('Error reading the file:', error);
  });
