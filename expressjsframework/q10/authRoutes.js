const express = require("express");
const router = express.Router();

// Hardcoded credentials for simplicity
const validUsername = "admin";
const validPassword = "password123";

// Login route
router.post("/login", (req, res) => {
    const { username, password } = req.body;

    // Validate credentials
    if (username === validUsername && password === validPassword) {
        res.json({ message: "Login successful!" });
    } else {
        res.status(401).json({ message: "Invalid username or password." });
    }
});

module.exports = router;
