const express = require('express')
const router = express.Router()

const { getPlaces, createTicket, createReview} = require('../controllers/places')

router.route('/places').get(getPlaces).post(createTicket)
router.route('/places/query').post(createReview)

module.exports = router 