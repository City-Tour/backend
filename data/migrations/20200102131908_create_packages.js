exports.up = function(knex) {
  return knex.schema.createTable('packages', tbl => {
    tbl.increments('package_id')
    tbl.string('name', 255).notNullable()
    tbl.string('type', 255).notNullable()
    tbl.string('description', 255).notNullable()
    tbl.decimal('price').notNullable()
    tbl.integer('city_id').notNullable()
    tbl.foreign('city_id').references('cities.city_id')
    tbl.integer('creator_id')
    tbl.foreign('creator_id').references('users.user_id')
  })
}

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('packages')
}
