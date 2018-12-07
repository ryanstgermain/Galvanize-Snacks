const express = require('express')
const router = express.Router()
const queries = require('../queries/reviews_queries')

router.get('/', (req, res) => {
    queries.getAll().then(reviews => res.status(200).send(reviews))
})

router.get('/:id', (req, res) => {
    queries.getReviewById(req.params.id).then(review => res.status(200).send({ review }))
})

router.post('/', (req, res) => {
    queries.createReview(req.body).then(reviews => res.status(200).send(movies))
})

router.delete('/:id', (req, res) => {
    queries.deleteReview(req.params.id).then(res.sendStatus(204))
})

router.put('/:id', (req, res) => {
    queries.updateReview(req.params.id, req.body).then(updatedReview => res.json(updatedReview[0]))
})

module.exports = router