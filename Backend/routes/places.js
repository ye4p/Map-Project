const express = require('express')
const router = express.Router()

const { getPlaces, createTicket, createReview, editReview, getReview} = require('../controllers/places')

router.route('/places').get(getPlaces).post(createTicket)
router.route('/places/query').post(createReview).patch(editReview).get(getReview)

module.exports = router 