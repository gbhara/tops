// 12. Redirecting Requests
// Solution:
const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/old-url') {
        res.writeHead(301, { Location: '/new-url' });
        res.end();
    } else {
        res.writeHead(404);
        res.end('Not Found');
    }
});

server.listen(3000, () => console.log('Server running on port 3000'));
