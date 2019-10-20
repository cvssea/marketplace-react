const categories = require('./categories');
const vendors = require('./vendors');
const products = require('./products');
const users = require('./users');

const db = () => {
  return {
    categories,
    vendors,
    products,
    users,
  };
};

const database = db();

module.exports = database;
