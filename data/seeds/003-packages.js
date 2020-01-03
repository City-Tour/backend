exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('packages')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('packages').insert([
        {
          package_id: 1,
          name: 'Must Haves',
          type: '1d',
          description: 'Top places in Nashville, period',
          price: 120.34,
          city_id: 1,
          creator_id: 1
        },
        {
          package_id: 2,
          name: 'Downtown Tour',
          type: '2d',
          description: 'Must go to places near down town Nashville',
          price: 9.99,
          city_id: 1,
          creator_id: 1
        },
        {
          package_id: 3,
          name: 'Nashville KUNTRY',
          type: 'weekend',
          description: 'Real tok, mayne',
          price: 120.34,
          city_id: 1,
          creator_id: 1
        },

        {
          package_id: 4,
          name: 'Golden Gate Tour',
          type: '1d',
          description: 'Places around the Golden Gate Bridge',
          price: 9.99,
          city_id: 2,
          creator_id: 1
        },
        {
          package_id: 5,
          name: 'Downtown San Fran',
          type: '2d',
          description: 'Must go to places near down town San Fransisco',
          price: 19.99,
          city_id: 2,
          creator_id: 1
        },
        {
          package_id: 6,
          name: 'City Tour',
          type: 'weekend',
          description: 'Best Town Tour',
          price: 29.99,
          city_id: 2,
          creator_id: 1
        },

        {
          package_id: 7,
          name: 'Remember the Alamo',
          type: '1d',
          description: 'Alamo Tour',
          price: 9.99,
          city_id: 3,
          creator_id: 1
        },
        {
          package_id: 8,
          name: 'Downtown Austin',
          type: '2d',
          description: 'Must go to places near down town Austin',
          price: 19.99,
          city_id: 3,
          creator_id: 1
        },
        {
          package_id: 9,
          name: 'Autin City Tour',
          type: 'weekend',
          description: 'Best Around the Town Tour',
          price: 29.99,
          city_id: 3,
          creator_id: 1
        }
      ])
    })
}
