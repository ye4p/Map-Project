require('dotenv').config()
const cors = require('cors')
const express = require('express')
const app = express();
const path = require('path');

const placesRouter = require('./routes/places');

// middleware
app.use(express.json());
app.use(cors());

app.use('/api/v1', placesRouter);

app.use(express.static(path.join(__dirname, '../Frontend/dist')));

// app.use((req, res, next) => {
//   res.sendFile(path.join(__dirname, '../Frontend/dist', 'index.html'));
// });

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
