const express = require('express');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;
const SECRET_KEY = 'your-secret-key'; // Use env var in real apps

app.use(bodyParser.json());

// In-memory user store for demo
const users = [];

// Registration Route - Generates JWT
app.post('/register', (req, res) => {
    const { username } = req.body;
    if (!username) return res.status(400).json({ message: 'Username required' });

    // In a real app, save to DB and check for duplicates
    users.push(username);

    // Generate token
    const token = jwt.sign({ username }, SECRET_KEY, { expiresIn: '1h' });

    res.json({ message: 'User registered', token });
});

// Middleware to verify token
function verifyToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]; // Bearer TOKEN

    if (!token) return res.status(401).json({ message: 'Token required' });

    jwt.verify(token, SECRET_KEY, (err, user) => {
        if (err) return res.status(403).json({ message: 'Invalid token' });
        req.user = user;
        next();
    });
}

// Protected Route
app.get('/api/protected', verifyToken, (req, res) => {
    res.json({ message: `Hello ${req.user.username}, this is protected data.` });
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
