// 9. Reading Files from a Directory
// Assignment:
// List all files in a specific directory.
// Instructions:
// 1. Create a directory named myFiles and add several files to it.
// 2. Use the fs.readdir method to read the contents of the directory.
// 3. Log the names of all files to the console
const fs = require('fs');
const path = require('path');


const directoryPath = 'myFiles';


if (!fs.existsSync(directoryPath)) {
  fs.mkdirSync(directoryPath, { recursive: true });
  console.log(`Directory "${directoryPath}" created.`);
  
  
  const sampleFiles = ['file1.txt', 'file2.txt', 'file3.txt'];
  sampleFiles.forEach(file => {
    fs.writeFileSync(path.join(directoryPath, file), `Content for ${file}`);
  });
  console.log('Sample files created.');
}


fs.readdir(directoryPath, (err, files) => {
  if (err) {
    console.error('Error reading directory:', err);
    return;
  }
  
  console.log(`Files in directory "${directoryPath}":`);
  files.forEach(file => {
    console.log(file);
  });
});
