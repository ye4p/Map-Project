const pool = require('../db/db.js');


// Shows everything in the table
const getPlaces = (req, res) => {
    const {name, russian, ukrainian, type, rating} = req.query
    let zeroReviewsInclude = true
    if (req.query.zeroReviewsInclude) {
    zeroReviewsInclude = req.query.zeroReviewsInclude === 'true';
    } 
    let query=`SELECT *,
        ST_X(location::geometry) AS lon,
        ST_Y(location::geometry) AS lat
        FROM places `
    let conditions = [];
    let values = [];
    if (name) {
        values.push(`%${name}%`)
        conditions.push(`
        name ILIKE $${values.length}
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
        type = $${values.length}
        `)
    }
    if (rating) {
        values.push(`${rating}`)
        conditions.push(`
        rating = $${values.length}
        `)
    }
    if (!zeroReviewsInclude) {
        conditions.push(`
        reviews_count > 0
        `)
    }
    conditions = conditions.join(' AND ')


    if (conditions) {
        query = query + `
        WHERE ` + conditions
    }

    console.log(query)
   // console.log(values)
    pool.query(query, values, (err, result) => {
        if (err) {
            console.error(err)
        } 
            //console.log('places')
            res.json(result.rows)
        
    })
}

const createTicket = (req, res) => {
    const {id, description} = req.body
    pool.query('INSERT INTO tickets (place_id, description) VALUES ($1, $2)', [id, description], (err, result) => {
        if (err) {
            console.error(err)
            res.status(400).send('Error submitting the ticket')
        } else {
            console.log('Ticket submitted successfully')
            res.status(201).send('Ticket submitted successfully')
        }
    })
}

const createReview = (req, res) => {        // Need to create db table for reviews.
    const {id, review, rating} = req.query
    pool.query(
        'INSERT INTO reviews (place_id, review, rating) VALUES ($1, $2, $3)', 
        [id, review, rating],
        (err, result) => {
            if (err) {
            console.error(err)
            res.status(400).send('Error creating review')
        } else {
            console.log('Review created successfully')
            res.status(201).send('Review created successfully')
        }
        }
    )
}
const editReview = (req, res) => {
    const {id, review, rating} = req.query;
    
}

module.exports = {
    getPlaces,
    createTicket,
    createReview,
    editReview
}