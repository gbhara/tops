// 10. Copying a File
// Assignment:
// Copy a file from one location to another.
// Instructions:
// 1. Create a file named original.txt with some sample content.
// 2. Use the fs.copyFile method to create a copy of the file named copy.txt.
// 3. Log a success message after the copy operation is complete.
const fs = require('fs');


const originalFile = 'original.txt';
const copyFile = 'copy.txt';


if (!fs.existsSync(originalFile)) {
  fs.writeFileSync(originalFile, 'This is sample content for the original file.');
  console.log(`File "${originalFile}" created with sample content.`);
}


fs.copyFile(originalFile, copyFile, (err) => {
  if (err) {
    console.error('Error copying the file:', err);
    return;
  }
 
  console.log(`File copied successfully from "${originalFile}" to "${copyFile}".`);
});
