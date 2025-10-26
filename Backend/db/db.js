//Exporting access to db from here

require('dotenv').config()
const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  }   
});

//  pool.query('select * from places', (req,res) => {
//    return console.log(res)
//  })


module.exports = pool;