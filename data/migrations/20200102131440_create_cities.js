exports.up = function(knex) {
  return knex.schema.createTable('cities', tbl => {
    tbl.increments('city_id')
    tbl
      .string('city_name', 255)
      .unique()
      .notNullable()
    tbl.string('description', 255)
  })
}

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cities')
}
