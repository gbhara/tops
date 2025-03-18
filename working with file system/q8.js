// 8. Creating a Directory
// Assignment:
// Create a new directory.
// Instructions:
// 1. Use the fs.mkdir method to create a new directory named newDirectory.
// 2. Log a success message once the directory is created.
const fs = require('fs');


const dirPath = 'newDirectory';


fs.mkdir(dirPath, { recursive: true }, (err) => {
  if (err) {
    console.error('Error creating directory:', err);
    return;
  }
  console.log(`Directory "${dirPath}" created successfully.`);
});
