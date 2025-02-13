// 11. Basic Authentication
// Solution:
const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/login') {
        let body = '';
        req.on('data', chunk => body += chunk);
        req.on('end', () => {
            const { username, password } = JSON.parse(body);
            if (username === 'user' && password === 'pass') {
                res.writeHead(200);
                res.end('Login successful');
            } else {
                res.writeHead(401);
                res.end('Unauthorized');
            }
        });
    } else {
        res.writeHead(403);
        res.end('Forbidden');
    }
});

server.listen(3000, () => console.log('Server running on port 3000'));
