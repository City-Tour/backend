
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('packages').del()
    .then(function () {
      // Inserts seed entries
      return knex('packages').insert([
        {package_id: 1, name: 'Nashville KUNTRY', type: 'weekend', description: 'Real tok, mayne', price: 120.34, city_id: 1, creator_id: 1}
      ]);
    });
};
