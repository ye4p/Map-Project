const pool = require('../db/db.js');


// Shows everything in the table
const getAllPlaces = (req, res) => {
    pool.query('SELECT * FROM places', (err, result) => {
        if (err) {
            console.error(err)
        } 
            console.log(result.rows)
            res.json(result.rows)
        
    })
}


module.exports = {
    getAllPlaces
}