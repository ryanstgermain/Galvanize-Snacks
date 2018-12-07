const express = require('express')
const router = express.Router()
const queries = require('../queries/users_queries')

router.get('/', (req, res) => {
    queries.getAll().then(users => res.status(200).send(users))
})

router.get('/:id', (req, res) => {
    queries.getUserById(req.params.id).then(user => res.status(200).send({ user }))
})

router.post('/', (req, res) => {
    queries.createUser(req.body).then(users => res.status(200).send(users))
})

router.delete('/:id', (req, res) => {
    queries.deleteUser(req.params.id).then(res.sendStatus(204))
})

router.put('/:id', (req, res) => {
    queries.updateUser(req.params.id, req.body).then(updatedUser => res.json(updatedUser[0]))
})

module.exports = router
