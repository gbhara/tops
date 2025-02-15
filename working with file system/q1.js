// 1. Reading a File
// Assignment:
// Read the contents of a text file and log it to the console.
// Instructions:
// 1. Create a text file named sample.txt with some sample text.
// 2. Use the fs.readFile method to read the file asynchronously.
// 3. Log the contents of the file to the console.
const fs=require('fs')
const data=fs.readFileSync('sample.txt','utf-8')
console.log(data)
