exports.up = function(knex) {
  return knex.schema.createTable('suggestions', tbl => {
    tbl.increments('suggestion_id')
    tbl
      .string('name', 255)
      .unique()
      .notNullable()
    tbl.string('type', 255).notNullable()
    tbl.string('description', 255).notNullable()
    tbl.string('address', 255).notNullable()
    tbl.string('website', 255)
    tbl.integer('package_id')
    tbl.foreign('package_id').references('packages.package_id')
  })
}

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('suggestions')
}
