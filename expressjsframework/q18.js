const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

// Configure session middleware
app.use(session({
  secret: 'your_secret_key', // replace with a strong key in production
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false } // secure: true for HTTPS
}));

// Dummy user
const user = {
  username: 'admin',
  password: '1234'
};

// Login route
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  if (username === user.username && password === user.password) {
    req.session.user = username;
    res.json({ message: 'Login successful!' });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

// Middleware to check if user is authenticated
function isAuthenticated(req, res, next) {
  if (req.session.user) {
    return next();
  }
  res.status(401).json({ message: 'Unauthorized' });
}

// Protected route
app.get('/dashboard', isAuthenticated, (req, res) => {
  res.json({ message: `Welcome, ${req.session.user}! This is your dashboard.` });
});

// Logout route
app.post('/logout', (req, res) => {
  req.session.destroy(err => {
    if (err) return res.status(500).json({ message: 'Logout failed' });
    res.json({ message: 'Logged out successfully' });
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
