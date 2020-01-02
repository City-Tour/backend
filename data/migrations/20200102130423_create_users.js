exports.up = function(knex) {
  return knex.schema.createTable('users', tbl => {
    tbl.increments()
    tbl.string('first name', 255).notNullable()
    tbl.string('last name', 255).notNullable()
    tbl
      .string('email', 255)
      .unique()
      .notNullable()
    tbl.string('password', 255).notNullable()
  })
}

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('users')
}
