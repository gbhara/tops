// 7. Deleting a File
// Assignment:
// Delete a specific file from the directory.
// Instructions:
// 1. Create a file named deleteMe.txt.
// 2. Use the fs.unlink method to delete the file.
// 3. Log a success message upon successful deletion.

const fs = require('fs');


const filePath = 'deleteMe.txt';


if (!fs.existsSync(filePath)) {
  fs.writeFileSync(filePath, 'This file will be deleted.');
  console.log(`File "${filePath}" created.`);
}


fs.unlink(filePath, (err) => {
  if (err) {
    console.error('Error deleting the file:', err);
    return;
  }
 
  console.log(`File "${filePath}" deleted successfully.`);
});
