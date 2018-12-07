const db = require('../knex.js')

module.exports = {
    getAll() {
        return db('snacks')
    },
    getSnackById(id) {
        return db('snacks').where('id', id)
    },
    createSnack(newSnack) {
        return db('snacks').insert(newSnack).returning('*')
    },
    deleteSnack(id) {
        return db('snacks').where('id', id).delete()
    },
    updateSnack(id, snack) {
        return db('snacks').where('id', id).update(snack).returning('*')
    }
}
