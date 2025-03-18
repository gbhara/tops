// 4. Handling HTTP POST Requests
// Assignment:
// Implement handling for POST requests.
// Instructions:
// 1.	Set up a POST route (/api/users) to accept user data (e.g., name and email).
// 2.	Use the body-parser middleware to parse the incoming JSON data.
// 3.	Respond with a success message and the received user data in JSON format.
// Solution:
const http = require('http');

let users = [];

const server = http.createServer((req, res) => {
    if (req.method === 'POST' && req.url === '/api/users') {
        let body = '';

        req.on('data', chunk => {
            body += chunk.toString();
        });

        req.on('end', () => {
            const user = JSON.parse(body);
            users.push(user);

            res.statusCode = 201;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ message: 'User added successfully', user }));
        });
    } else {
        res.statusCode = 404;
        res.end('Not Found');
    }
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});
