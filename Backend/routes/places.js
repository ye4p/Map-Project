const express = require('express')
const router = express.Router()

const { getPlaces, createTicket, createReview, editReview} = require('../controllers/places')

router.route('/places').get(getPlaces).post(createTicket)
router.route('/places/query').post(createReview).patch(editReview)

module.exports = router 