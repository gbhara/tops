// 6. Renaming a File
// Assignment:
// Rename an existing file.
// Instructions:
// 1. Create a file named oldname.txt.
// 2. Use the fs.rename method to change the file name to newname.txt.
// 3. Log a success message once the rename operation is complete.



const fs = require('fs');

const oldFilePath = 'oldname.txt';
const newFilePath = 'newname.txt';


if (!fs.existsSync(oldFilePath)) {
  fs.writeFileSync(oldFilePath, 'This is the original file content.');
  console.log(`File "${oldFilePath}" created with initial content.`);
}


fs.rename(oldFilePath, newFilePath, (err) => {
  if (err) {
    console.error('Error renaming file:', err);
    return;
  }
  
  console.log(`File renamed successfully from "${oldFilePath}" to "${newFilePath}".`);
});
