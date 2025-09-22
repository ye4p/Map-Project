const pool = require('./db/db.js');

const result = await pool.query('SELECT * FROM places');
console.log(result.rows);