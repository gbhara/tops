const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;


app.use(cors());

const allowedOrigins = ['http://localhost:4000', 'https://myfrontend.com'];
app.use(cors({
    origin: function (origin, callback) {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true 
}));

app.get('/api/data', (req, res) => {
    res.json({ message: 'This data is CORS-enabled!' });
});

app.listen(PORT, () => {
    console.log(`CORS-enabled server running on http://localhost:${PORT}`);
});
