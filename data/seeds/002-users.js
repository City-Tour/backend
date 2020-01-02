const bcrypt = require('bcryptjs')

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, email: 'test@test.com', password: bcrypt.hashSync('catz', 12), first_name: 'Alexis', last_name: 'Carr'},
        {id: 2, email: 'rowValue2', password: bcrypt.hashSync('catz', 12), first_name: 'Earl', last_name: 'Cat'},
        {id: 3, email: 'rowValue3', password: bcrypt.hashSync('catz', 12), first_name: 'Birla', last_name: 'Zat'}
      ]);
    });
};
