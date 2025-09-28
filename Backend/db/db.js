require('dotenv').config()
const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',      
  host: 'localhost',      
  database: 'places-db',   
  password: process.env.DB_ACC, 
  port: 5432,             
});

//  pool.query('select * from places', (req,res) => {
//    return console.log(res)
//  })


module.exports = pool;