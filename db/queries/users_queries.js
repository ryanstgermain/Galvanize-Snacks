const db = require('../knex.js')

module.exports = {
    getAll() {
        return db('users')
    },
    getUserById(id) {
        return db('users').where('id', id)
    },
    createUser(newUser) {
        return db('users').insert(newUser).returning('*')
    },
    deleteUser(id) {
        return db('users').where('id', id).delete()
    },
    updateUser(id, user) {
        return db('users').where('id', id).update(user).returning('*')
    }
}
