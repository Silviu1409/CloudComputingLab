require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Rută de test
app.get('/', (req, res) => {
    res.send('Serverul funcționează!');
});

// Pornește serverul
app.listen(PORT, () => {
    console.log(`Serverul rulează la http://localhost:${PORT}`);
});
