
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('suggestions').del()
    .then(function () {
      // Inserts seed entries
      return knex('suggestions').insert([
        {suggestion_id: 1, name: 'Grand Ole Opry', type: 'attraction', description: 'Home of the famed long-running radio', address: '2804 Opryland Dr, Nashville, TN 37214', website: 'https://www.opry.com', package_id: 1},
        {suggestion_id: 2, name: 'Honkey Tonk', type: 'enterntainment', description: 'Tootsies', address: '422 Broadway, Nashville, TN 37203', website: 'http://www.tootsies.net/', package_id: 1},
        {suggestion_id: 3, name: 'The Pharmacy', type: 'food', description: '100% Tennessee-raised beef for our legendary burgers and 100% pure cane sugar in our sodas', address: '731 Mcferrin Ave, Nashville, TN 37206', website: 'https://thepharmacyburger.com/', package_id: 1}
      ]);
    });
};
