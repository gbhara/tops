// 8. Using Query Parameters
// Solution:
const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
    if (req.url.startsWith('/api/search')) {
        const queryObject = url.parse(req.url, true).query;
        console.log(queryObject);
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: `You searched for: ${queryObject.q}` }));
    } else {
        res.writeHead(404);
        res.end('Not Found');
    }
});

server.listen(3000, () => console.log('Server running on port 3000'));
