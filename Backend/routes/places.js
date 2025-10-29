const express = require('express')
const router = express.Router()

const { getPlaces, createTicket, createReview, editReview, getReview, createRequest} = require('../controllers/places')

router.route('/places').get(getPlaces).post(createTicket)
router.route('/places/query').post(createReview).patch(editReview).get(getReview)
router.route('/places/place').post(createRequest)

module.exports = router 