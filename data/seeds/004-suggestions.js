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
          type: 'entertainment',
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
          type: 'entertainment',
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
          type: 'entertainment',
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
        },

        /* === AUSTIN SEED DATA === */

        {
          suggestion_id: 19,
          name: 'Zilker Botanical Garden',
          type: 'attraction',
          description:
            'The Zilker Botanical Garden is a botanical garden of varied topography located on the south bank of the Colorado River at 2220 Barton Springs Road, near downtown Austin, Texas, United States. The Botanical Garden was established as a non-profit organization in 1955, and is the centerpiece of Zilker Park.',
          address: '2220 Barton Springs Rd, Austin, TX 78746',
          website: 'http://www.zilkergarden.org/',
          package_id: 7
        },
        {
          suggestion_id: 20,
          name: 'Penny Lane Street Bar',
          type: 'entertainment',
          description:
            'Penny Lane is a downtown Austin cocktail bar featuring live music, karaoke, and signature drinks. Join us for a premium bar experience blending classic and modern in bold colors and a unique ambiance.',
          address: '115B San Jacinto Blvd, Austin, TX 78701',
          website: 'pennylanetx.com',
          package_id: 7
        },
        {
          suggestion_id: 21,
          name: 'Franklin Barbecue',
          type: 'food',
          description:
            'Long lines form early for brisket, pulled pork & other smoked meats at this lunch-only spot.',
          address: '900 E 11th St, Austin, TX 78702',
          website: 'franklinbarbecue.com',
          package_id: 7
        },

        {
          suggestion_id: 22,
          name: 'Austin Zoo',
          type: 'attraction',
          description:
            'Austin Zoo is a non-profit rescue zoo and located in southwestern unincorporated Travis County, Texas, United States, west of Austin. The mission of Austin Zoo is to assist animals in need through rescue, rehabilitation, and education.',
          address: '10808 Rawhide Trail, Austin, TX 78736',
          website: 'http://www.austinzoo.org/',
          package_id: 8
        },
        {
          suggestion_id: 23,
          name: 'The Hideout Theatre',
          type: 'entertainment',
          description:
            'Snug comedy club featuring seasoned & up-and-coming talent, plus a coffee shop for drinks & snacks.',
          address: '617 Congress Ave, Austin, TX 78701',
          website: 'http://www.hideouttheatre.com/',
          package_id: 8
        },
        {
          suggestion_id: 24,
          name: 'Veracruz All Natural Food Truck',
          type: 'food',
          description:
            'Simple trailer with picnic tables for tacos with spit-grilled meats or veggie options, plus migas.',
          address: '1704 E Cesar Chavez St, Austin, TX 78702',
          website: 'veracruzallnatural.com',
          package_id: 8
        },

        {
          suggestion_id: 25,
          name: 'McKinney Falls State Park',
          type: 'attraction',
          description:
            'McKinney Falls State Park is a state park in Austin, Texas, United States at the confluence of Onion Creek and Williamson Creek. It is administered by the Texas Parks and Wildlife Department.',
          address: '5808 McKinney Falls Pkwy, Austin, TX 78744',
          website: 'https://tpwd.texas.gov/state-parks/mckinney-falls',
          package_id: 9
        },
        {
          suggestion_id: 26,
          name: 'Cactus Cafe',
          type: 'entertainment',
          description:
            'The Cactus Café is a live music venue and bar on the campus of The University of Texas at Austin.[1] Located in Austin, Texas, a city frequently referred to as "the live music capital of the world," a number of well-known artists have played in the Cactus, and Billboard Magazine named it as one of fifteen "solidly respected, savvy clubs" in the United States, "from which careers can be cut, that work with proven names and new faces',
          address: '2247 Guadalupe St, Austin, TX 78712',
          website: 'https://cactuscafe.org/',
          package_id: 9
        },
        {
          suggestion_id: 27,
          name: 'DEE DEE - Northern Thai Street Food',
          type: 'food',
          description:
            'Northern Thai specialties featuring market-fresh ingredients from a food trailer with picnic tables.',
          address: '4204 Manchaca Rd, Austin, TX 78745',
          website: 'https://www.deedeeatx.com/',
          package_id: 9
        }
      ])
    })
}
