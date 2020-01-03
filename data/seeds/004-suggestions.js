exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('suggestions')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('suggestions').insert([
        /* === NASHVILLE SEED DATA === */

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
        },

        /* === SAN FRANSISCO SEED DATA === */

        {
          suggestion_id: 10,
          name: 'Museum of Ice Cream',
          type: 'attraction',
          description: 'Museum of Ice Cream San Francisco',
          address: '1 Grant Ave, San Francisco, CA 94108',
          website: 'https://www.museumoficecream.com/',
          package_id: 4
        },
        {
          suggestion_id: 11,
          name: 'Gregangelos Velocity Arts & Entertainment',
          type: 'entertainment',
          description:
            'Gregangelo’s Velocity Circus/Arts and Entertainment is a San Francisco-based circus troupe and entertainment company that incorporates the arts, technology, astrophysical concepts and cultural diversity into their performance acts.',
          address: '225 San Leandro Way, San Francisco, CA 94127',
          website: 'https://www.velocityartssf.com/',
          package_id: 4
        },
        {
          suggestion_id: 12,
          name: 'Brendas French Soul Food',
          type: 'food',
          description:
            'Fresh takes on beignets, po boys & other Big Easy bites draw crowds to this narrow but airy spot.',
          address: '652 Polk St, San Francisco, CA 94102',
          website: 'frenchsoulfood.com',
          package_id: 4
        },

        {
          suggestion_id: 13,
          name: 'Japanese Tea Garden',
          type: 'attraction',
          description:
            'The Japanese Tea Garden in San Francisco, California, is a popular feature of Golden Gate Park, originally built as part of a sprawling Worlds Fair, the California Midwinter International Exposition of 1894.',
          address: '75 Hagiwara Tea Garden Dr, San Francisco, CA 94118',
          website: 'https://www.japaneseteagardensf.com/',
          package_id: 5
        },
        {
          suggestion_id: 14,
          name: 'Smugglers Cove',
          type: 'entertainment',
          description:
            'Popular bar boasting nautical-themed decor, exotic cocktails & over 700 types of rum.',
          address: '650 Gough St, San Francisco, CA 94102',
          website: 'http://www.smugglerscovesf.com/',
          package_id: 5
        },
        {
          suggestion_id: 15,
          name: 'Surisan',
          type: 'food',
          description:
            'Industrial-chic spot for classic American breakfast/brunch dishes & modern Korean dinners.',
          address: '505 Beach St, San Francisco, CA 94133',
          website: 'surisansf.com',
          package_id: 5
        },

        {
          suggestion_id: 16,
          name: 'Golden Gate Park',
          type: 'attraction',
          description:
            'Golden Gate Park, located in San Francisco, California, United States, is a large urban park consisting of 1,017 acres of public grounds. It is administered by the San Francisco Recreation & Parks Department, which began in 1871 to oversee the development of Golden Gate Park.',
          address: 'San Francisco, CA',
          website:
            'https://sfrecpark.org/parks-open-spaces/golden-gate-park-guide/',
          package_id: 6
        },
        {
          suggestion_id: 17,
          name: 'Bourbon & Branch',
          type: 'entertainment',
          description:
            'Reservations are required at this swanky, dimly lit unmarked bar known for handcrafted cocktails.',
          address: '501 Jones St, San Francisco, CA 94102',
          website: 'http://www.bourbonandbranch.com/',
          package_id: 6
        },
        {
          suggestion_id: 18,
          name: 'Berber SF',
          type: 'food',
          description:
            'Swanky choice for Moroccan eats, wine & prix-fixe dinners plus live music, dancers & aerialists.',
          address: '1516 Broadway, San Francisco, CA 94109',
          website: 'https://www.berbersf.com/',
          package_id: 6
        }
      ])
    })
}
