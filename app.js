require('dotenv').config();
const express = require('express');
const app = express();
const PORT1 = process.env.PORT || 4000;
const PORT2 = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Rută de test
app.get('/', (req, res) => {
    res.send('Serverul funcționează!');
});

// Pornește serverul
app.listen(PORT1, PORT2, () => {
    console.log(`Serverul rulează la http://localhost:${PORT1} si aplicatia la http://localhost:${PORT2}`);
});
