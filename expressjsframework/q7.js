const express = require('express');
const app = express();
const PORT = 3000;


// Route that intentionally triggers an error
app.get('/error', (req, res, next) => {
    const error = new Error('Something went wrong!');
    error.status = 500;
    
    
    next(error);  // Passes the error to the error-handling middleware
});
app.use((err, req, res, next) => {
    // The error object is received as 'err'
    console.error(`Error: ${err.status}`);
    res.status(err.status || 500).json({
        success: false,
        message: err.message || 'Internal Server Error',
    });
});

// Error-handling middleware


// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

