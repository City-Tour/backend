exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('suggestions')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('suggestions').insert([
        {
          suggestion_id: 1,
          name: 'Grand Ole Opry',
          type: 'attraction',
          description: 'Home of the famed long-running radio',
          address: '2804 Opryland Dr, Nashville, TN 37214',
          website: 'https://www.opry.com',
          package_id: 1
        },
        {
          suggestion_id: 2,
          name: 'Honkey Tonk',
          type: 'enterntainment',
          description: 'Tootsies',
          address: '422 Broadway, Nashville, TN 37203',
          website: 'http://www.tootsies.net/',
          package_id: 1
        },
        {
          suggestion_id: 3,
          name: 'The Pharmacy',
          type: 'food',
          description:
            '100% Tennessee-raised beef for our legendary burgers and 100% pure cane sugar in our sodas',
          address: '731 Mcferrin Ave, Nashville, TN 37206',
          website: 'https://thepharmacyburger.com/',
          package_id: 1
        },

        {
          suggestion_id: 4,
          name: 'The Parthenon',
          type: 'attraction',
          description:
            'The Parthenon in Centennial Park, in Nashville, Tennessee, is a full-scale replica of the original Parthenon in Athens. It was designed by Confederate veteran William Crawford Smith and built in 1897 as part of the Tennessee Centennial Exposition',
          address: '2500 West End Ave, Nashville, TN 37203',
          website:
            'https://www.nashville.gov/Parks-and-Recreation/Parthenon.aspx',
          package_id: 2
        },
        {
          suggestion_id: 5,
          name: 'Wildhorse Saloon',
          type: 'enterntainment',
          description:
            'Southern food, live-music acts, multiple bars & free nightly dance lessons in a 3-story space.',
          address: '120 2nd Ave N, Nashville, TN 37201',
          website: 'wildhorsesaloon.com',
          package_id: 2
        },
        {
          suggestion_id: 6,
          name: 'Husk',
          type: 'food',
          description:
            'Regional ingredients cooked on an ember-fired grill create inventive meals in a historic mansion.',
          address: '37 Rutledge St, Nashville, TN 37210',
          website: 'https://husknashville.com/',
          package_id: 2
        },

        {
          suggestion_id: 7,
          name: 'Madame Tussauds Nashville',
          type: 'attraction',
          description:
            'Step into the spotlight at Madame Tussauds Nashville - the home of famous fun in Nashville. Get up close and personal with several lifelike wax figures of your favourite celebrities! So what are you waiting for? Book online now for the best savings.',
          address: '515 Opry Mills Dr, Nashville, TN 37214',
          website: 'https://www.madametussauds.com/nashville/en/',
          package_id: 3
        },
        {
          suggestion_id: 8,
          name: 'Bridgestone Arena',
          type: 'enterntainment',
          description:
            'Bridgestone Arena is a multi-purpose venue in downtown Nashville, Tennessee, that was completed in 1996, and is the home of the Nashville Predators of the National Hockey League.',
          address: '501 Broadway, Nashville, TN 37203',
          website: 'https://www.bridgestonearena.com/',
          package_id: 3
        },
        {
          suggestion_id: 9,
          name: 'Butcher & Bee',
          type: 'food',
          description:
            'Hip, happening sequel to the Charleston original with creative New American fare & house cocktails.',
          address: '902 Main St, Nashville, TN 37206',
          website: 'butcherandbee.com',
          package_id: 3
        }
      ])
    })
}
