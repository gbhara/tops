// 10. Implementing Basic Authentication
// Assignment:
// Create a simple login system using basic authentication.
// Instructions:
// 1. Set up a login route that accepts username and password.
// 2. Validate the credentials (hardcoded for simplicity).
// 3. Respond with a success or failure message based on the validation.

const express = require("express");
const app = express();
const authRoutes = require("./authRoutes");

app.use(express.json()); // Middleware to parse JSON request bodies

// Use the authentication routes
app.use("/api/auth", authRoutes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
