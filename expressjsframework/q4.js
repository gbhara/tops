// 4. Handling Query Parameters
// Assignment:
// Handle query parameters in an Express route.
// Instructions:
// 1. Create a route /api/search that accepts a query parameter (e.g., ?q=searchTerm).
// 2. Respond with a JSON object that includes the search term and a message (e.g., {"query":
// "searchTerm", "message": "Search received"}).
// 3. Log the received query parameter to the console.

const express = require('express');
const app = express();
const PORT = 3000;

// Route to handle query parameters
app.get('/api/search', (req, res) => {
  const searchTerm = req.query.q; // Access the query parameter 'q'
  console.log(`Received search term: ${searchTerm}`);

  // Respond with a JSON object
  res.json({
    query: searchTerm,
    message: "Search received"
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
