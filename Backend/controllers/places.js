const pool = require('../db/db.js');


// Shows everything in the table
const getPlaces = (req, res) => {
    const {name, russian, ukrainian, type, rating, zeroReviewsInclude} = req.query
    let query=`SELECT *,
        ST_X(location::geometry) AS lon,
        ST_Y(location::geometry) AS lat
        FROM places `
    let conditions = [];
    let values = [];
    if (name) {
        values.push(`%${name}%`)
        conditions.push(`
        name ILIKE $1
        `)
    }
    if (russian) {
        conditions.push(`
        russian = true
        `)
    }
    if (ukrainian) {
        conditions.push(`
        ukrainian = true
        `)
    }
    if (type) {
        values.push(`${type}`)
        conditions.push(`
        type = $2
        `)
    }
    conditions = conditions.join(' AND ')


    if (conditions) {
        query = query + `
        WHERE ` + conditions
    }

    console.log(query)
    console.log(values)
    pool.query(query, values, (err, result) => {
        if (err) {
            console.error(err)
        } 
            //console.log('places')
            res.json(result.rows)
        
    })
}


module.exports = {
    getPlaces,
}