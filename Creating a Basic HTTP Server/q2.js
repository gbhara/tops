// 2. Handling Different URL Routes
// Assignment:
// Implement routing to handle different URL paths.
// Instructions:
// 1.	Create an HTTP server that responds with different messages based on the requested URL path: 
// o	/ should respond with "Welcome to the Home Page!"
// o	/about should respond with "This is the About Page."
// o	/contact should respond with "This is the Contact Page."
// 2.	Log the requested URL to the console.
// Solution:
const http = require('http');

const server = http.createServer((req, res) => {
    console.log(`Requested URL: ${req.url}`);

    res.setHeader('Content-Type', 'text/plain');

    switch (req.url) {
        case '/':
            res.statusCode = 200;
            res.end('Welcome to the Home Page!');
            break;
        case '/about':
            res.statusCode = 200;
            res.end('This is the About Page.');
            break;
        case '/contact':
            res.statusCode = 200;
            res.end('This is the Contact Page.');
            break;
        default:
            res.statusCode = 404;
            res.end('Page Not Found');
    }
});
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});

