require('dotenv').config()
const cors = require('cors')
const express = require('express')
const app = express();

const placesRouter = require('./routes/places')

// middleware
app.use(express.json())
app.use(cors())

const path = require('path');

app.use(express.static(path.join(__dirname, '../Frontend/dist')));
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../Frontend/dist', 'index.html'));
});

app.listen(5000, ()=> {
    console.log('Listening on port 5000')
})
app.use('/api/v1', placesRouter)
