const db = require('../knex.js')

module.exports = {
    getAll() {
        return db('reviews')
    },
    getReviewById(id) {
        return db('reviews').where('id', id)
    },
    createReview(newReview) {
        return db('reviews').insert(newReview).returning('*')
    },
    deleteMovie(id) {
        return db('reviews').where('id', id).delete()
    },
    updateReview(id, review) {
        return db('reviews').where('id', id).update(review).returning('*')
    }
}