require('dotenv').config()
const express = require('express')
const app = express();

const placesRouter = require('./routes/places')

// middleware
app.use(express.json())



app.use('/api/v1/places', placesRouter)

