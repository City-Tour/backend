exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cities')
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex('cities').insert([
        {
          city_id: 1,
          city_name: 'Nashville, TN',
          description: 'Not just country music.'
        },
        {
          city_id: 2,
          city_name: 'San Francisco, CA',
          description: 'Everyone here is a blue robot.'
        },
        { city_id: 3, city_name: 'Austin, TX', description: "Y'all" }
      ])
    })
}
