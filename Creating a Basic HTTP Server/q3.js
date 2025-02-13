// 3. Handling HTTP GET Requests
// Assignment:
// Implement handling for GET requests.
// Instructions:
// 1.	Create a server that responds to a GET request to /api/users with a JSON array of user objects.
// 2.	Use res.setHeader to set the response content type to application/json.
// 3.	Include at least three sample users in the JSON response.
// Solution:
const http = require('http');

const server = http.createServer((req, res) => {
    if (req.method === 'GET' && req.url === '/api/users') {
        const users = [
            { id: 1, name: 'John Doe', email: 'john@example.com' },
            { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
            { id: 3, name: 'Sam Wilson', email: 'sam@example.com' }
        ];

        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(users));
    } else {
        res.statusCode = 404;
        res.end('Not Found');
    }
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});
