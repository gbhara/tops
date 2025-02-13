// 13. Setting Custom Headers
// Solution:
const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'X-Powered-By': 'Node.js',
        'Content-Type': 'text/plain'
    });
    res.end('Headers set');
});

server.listen(3000, () => console.log('Server running on port 3000'));
