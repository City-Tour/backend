const db = require('../data/dbConfig')

module.exports = {
  add,
  findBy,
  findById
}

async function findBy(filter) {
  return await db('users')
    .where(filter)
    .first()
}

async function add(user) {
  return await db('users').insert(user, 'user_id')
}

async function findById(id) {
  return await db('users')
    .where({ id })
    .first()
}
