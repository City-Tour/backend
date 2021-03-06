exports.up = function(knex) {
  return knex.schema.createTable('signup', tbl => {
    tbl.integer('user_id')
    tbl.foreign('user_id').references('users.user_id')
    tbl.integer('package_id')
    tbl.foreign('package_id').references('packages.package_id')
  })
}

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('signup')
}
