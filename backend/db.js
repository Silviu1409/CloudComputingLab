const oracledb = require('oracledb');

const dbConfig = {
  user: 'YOUR_USER',      // Numele utilizatorului Oracle
  password: 'YOUR_PASSWORD', // Parola Oracle
  connectString: 'localhost:1521/XE', // Conexiunea la baza de date (adaptează după cazul tău)
};

async function initialize() {
  try {
    await oracledb.createPool(dbConfig);
    console.log('Conexiunea la baza de date Oracle a fost inițializată!');
  } catch (err) {
    console.error('Eroare la conectarea cu baza de date:', err);
    throw err;
  }
}

async function close() {
  try {
    await oracledb.getPool().close();
    console.log('Conexiunea la baza de date Oracle a fost închisă.');
  } catch (err) {
    console.error('Eroare la închiderea conexiunii:', err);
  }
}

module.exports = {
  initialize,
  close,
  getConnection: () => oracledb.getConnection(),
};
