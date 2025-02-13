// 1. Creating a Basic HTTP Server
// Assignment:
// Create a simple HTTP server using Node.js.
// Instructions:
// 1.	Use the http module to create a basic server that listens on a specified port (e.g., 3000).
// 2.	Respond with a plain text message like "Hello, World!" when accessed in a browser.
// 3.	Log a message to the console when the server starts.
// Solution:
const http = require('http');

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, World!');
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});
