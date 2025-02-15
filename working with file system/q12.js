// 12. Reading a JSON File
// Assignment:
// Read a JSON file and parse its contents.
// Instructions:
// 1. Create a JSON file named data.json with some sample data.
// 2. Use fs.readFile to read the file and parse its contents using JSON.parse.
// 3. Log the parsed object to the console.
const fs = require('fs');


const filePath = 'data.json';


if (!fs.existsSync(filePath)) {
  const sampleData = {
    name: "John Doe",
    age: 30,
    city: "New York"
  };

  fs.writeFileSync(filePath, JSON.stringify(sampleData, null, 2));
  console.log(`Created "${filePath}" with sample data.`);
}


fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading the JSON file:', err);
    return;
  }

  try {
    
    const parsedData = JSON.parse(data);
   
    console.log('Parsed JSON data:', parsedData);
  } catch (parseError) {
    console.error('Error parsing JSON:', parseError);
  }
});
