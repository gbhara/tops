// 10. Implementing Middleware
// Solution:
const http = require('http');

const logger = (req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
};

const server = http.createServer((req, res) => {
    logger(req, res, () => {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Logged request');
    });
});

server.listen(3000, () => console.log('Server running on port 3000'));
