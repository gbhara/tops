// 11. Watching for File Changes
// Assignment:
// Watch a file for changes and log the changes.
// Instructions:
// 1. Use the fs.watch method to monitor changes to a specific file (e.g., watch.txt).
// 2. Log a message to the console whenever the file is modified.
const fs = require('fs');


const filePath = 'watch.txt';

if (!fs.existsSync(filePath)) {
  fs.writeFileSync(filePath, 'Initial content in watch.txt');
  console.log(`Created file "${filePath}" with initial content.`);
}


fs.watch(filePath, (eventType, filename) => {
  if (filename) {
    console.log(`The file "${filename}" was modified. Event Type: ${eventType}`);
  } else {
    console.log('A change occurred, but filename was not provided.');
  }
});
