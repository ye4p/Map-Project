require('dotenv').config()
const express = require('express')
const app = express();

const placesRouter = require('./routes/places')

// middleware
app.use(express.json())


app.listen(5000, ()=> {
    console.log('Listening on port 5000')
})
app.use('/api/v1', placesRouter)
