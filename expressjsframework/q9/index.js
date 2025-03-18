// 9. Connecting to a MongoDB Database
// Assignment:
// Connect your Express application to a MongoDB database using Mongoose.
// Instructions:
// 1. Install and set up Mongoose in your project.
// 2. Create a User model with fields for name and email.
// 3. Set up a POST route (/api/users) to save user data to the MongoDB database.


const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./userroutes'); // Import user routes

const app = express();
const port = 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("Connected to MongoDB"))
.catch(err => console.error("Could not connect to MongoDB:", err));

// Use user routes
app.use("/api/users", userRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
