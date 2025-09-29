//const pool = require('./db/db.js');
import pool from '../db/db.js'

const result = await pool.query('SELECT * FROM test');
console.log(result.rows);