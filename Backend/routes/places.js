const express = require('express')
const router = express.Router()

const { getPlaces, createTicket} = require('../controllers/places')

router.route('/places').get(getPlaces).post(createTicket)

module.exports = router 