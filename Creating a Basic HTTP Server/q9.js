// 9. Creating a Basic Form and Handling Form Submission
// Solution:
const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    if (req.method === 'GET' && req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('<form method="POST" action="/submit"><input name="name"/><input name="email"/><button>Submit</button></form>');
    } else if (req.method === 'POST' && req.url === '/submit') {
        let body = '';
        req.on('data', chunk => body += chunk);
        req.on('end', () => {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(`<h1>Form Submitted: ${body}</h1>`);
        });
    } else {
        res.writeHead(404);
        res.end('Not Found');
    }
});

server.listen(3000, () => console.log('Server running on port 3000'));
