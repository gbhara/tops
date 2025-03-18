// 3. Appending Data to a File
// Assignment:
// Append data to an existing file.
// Instructions:
// 1. Create an existing file named append.txt and add some initial content.
// 2. Use the fs.appendFile method to add new content to the file.
// 3. Log the contents of the file after appending to confirm the changes.




const fs = require('fs');


const filePath = 'append.txt';


if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, 'Initial content in the file.\n');
}


fs.appendFile(filePath, 'New appended content.\n', (err) => {
    if (err) {
        console.error('Error appending to file:', err);
        return;
    }
    console.log('Content appended successfully.');

   
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            return;
        }
        console.log('Updated file content:\n', data);
    });
});
