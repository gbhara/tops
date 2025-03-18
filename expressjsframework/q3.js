// 3. Using Express Middleware
// Assignment:
// Implement custom middleware in your Express application.
// Instructions:
// 1. Create a middleware function that logs the request method and URL.
// 2. Use this middleware in your Express app to log all incoming requests.
// 3. Ensure the middleware does not block the request from reaching the route handlers.

const express = require('express');
const app = express();
const PORT = 3000;

// Custom middleware to log the request method and URL
const loggerMiddleware = (req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next(); // Pass control to the next middleware or route handler
};

// Use the middleware in the app
app.use(loggerMiddleware);

// Define a simple route
app.get('/', (req, res) => {
  res.send('Welcome to Express with Middleware!');
});

app.get('/about', (req, res) => {
  res.send('This is the About page.');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
