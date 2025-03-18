// 2. Writing to a File
// Assignment:
// Write data to a text file.
// Instructions:
// 1. Create a new text file named output.txt.
// 2. Use the fs.writeFile method to write some sample data to the file.
// 3. Log a success message to the console once the write operation is complete.
const fs=require('fs')
const data='hello world'
fs.writeFile('output.txt',data,'utf-8')