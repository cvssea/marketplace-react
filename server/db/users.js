const faker = require('faker');

module.exports = [
  {
    id: faker.random.uuid(),
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@doe.com',
    password: 'secret',
    cart: [],
    reviews: [],
    isAdmin: true,
  },
  {
    id: faker.random.uuid(),
    firstName: 'Suzy',
    lastName: 'Star',
    email: 'suzy@star.com',
    password: 'secret',
    cart: [],
    reviews: [],
  },
];
