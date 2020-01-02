exports.up = function(knex) {
  return knex.schema.createTable('cities', tbl => {
    tbl.increments()
    tbl
      .string('city name', 255)
      .unique()
      .notNullable()
    tbl.string('description', 255)
  })
}

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cities')
}