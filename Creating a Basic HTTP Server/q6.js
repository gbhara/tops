// 6. Creating a Simple RESTful API
// Solution:
const http = require('http');

let items = [];

const server = http.createServer((req, res) => {
    if (req.method === 'GET' && req.url === '/api/items') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(items));
    } else if (req.method === 'POST' && req.url === '/api/items') {
        let body = '';
        req.on('data', chunk => body += chunk);
        req.on('end', () => {
            const item = JSON.parse(body);
            items.push(item);
            res.writeHead(201, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(item));
        });
    } else if (req.method === 'PUT' && req.url.startsWith('/api/items/')) {
        const id = parseInt(req.url.split('/')[3]);
        let body = '';
        req.on('data', chunk => body += chunk);
        req.on('end', () => {
            const updatedItem = JSON.parse(body);
            items[id] = updatedItem;
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(updatedItem));
        });
    } else if (req.method === 'DELETE' && req.url.startsWith('/api/items/')) {
        const id = parseInt(req.url.split('/')[3]);
        items.splice(id, 1);
        res.writeHead(204);
        res.end();
    } else {
        res.writeHead(404);
        res.end('Not Found');
    }
});

server.listen(3000, () => console.log('Server running on port 3000'));
