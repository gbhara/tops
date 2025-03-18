// 6. Serving Static Files
// Assignment:
// Serve static files using Express.
// Instructions:
// 1. Create a directory called public and add HTML, CSS, and JavaScript files.
// 2. Use express.static to serve the static files from the public directory.
// 3. Access the files via URLs (e.g., /index.html).

const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});