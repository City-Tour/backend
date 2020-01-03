exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cities')
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex('cities').insert([
        {
          city_id: 1,
          city_name: 'Nashville',
          description: 'Not just country music 🎸'
        },
        {
          city_id: 2,
          city_name: 'San Francisco',
          description: 'Tech... Tech everywhere... 💻'
        },
        { city_id: 3, city_name: 'Austin', description: "Y'all means all, y'all!" }
      ])
    })
}
