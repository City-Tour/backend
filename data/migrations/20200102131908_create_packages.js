exports.up = function(knex) {
  return knex.schema.createTable('packages', tbl => {
    tbl.increments()
    tbl.string('name', 255).notNullable()
    tbl.string('type', 255).notNullable()
    tbl.string('decription', 255).notNullable()
    tbl.decimal('price').notNullable()
    tbl.integer('creator_id')
    tbl.foreign('creator_id').references('users.id')
  })
}

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('packages')
}
