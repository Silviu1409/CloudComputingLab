const oracledb = require('oracledb');
require('dotenv').config();
const express = require('express');

const app = express();
const port = process.env.PORT || 3000;  // Default to 3000 if not set in the environment

const dbConfig = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  connectString: `${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_SID}`
};

// Middleware
app.use(express.json());

// Test route for basic functionality
app.get('/', (req, res) => {
  res.send('Serverul funcționează!');
});

// Initialize Oracle DB connection pool
async function initialize() {
  console.log('Initializing database connection...');
  try {
    await oracledb.createPool(dbConfig);
    console.log('Conexiunea la baza de date Oracle a fost inițializată!');
  } catch (err) {
    console.error('Eroare la conectarea cu baza de date:', err);
    throw err;
  }
}

// Start Express server
app.listen(port, async () => {
  console.log(`Backend server running on http://localhost:${port}`);
  try {
    await initialize();  // Initialize DB connection before starting the server
  } catch (err) {
    console.error('Error during initialization:', err);
    process.exit(1);  // Exit if DB connection fails
  }
});

module.exports = {
  initialize,
  close: async () => {
    try {
      await oracledb.getPool().close();
      console.log('Conexiunea la baza de date Oracle a fost închisă.');
    } catch (err) {
      console.error('Eroare la închiderea conexiunii:', err);
    }
  },
  getConnection: () => oracledb.getConnection(),
};