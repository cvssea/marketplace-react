const fs = require('fs');
const path = require('path');
const faker = require('faker');
const slugify = require('slugify');
const categories = require('./categories');
const vendors = require('./vendors');

function getRandVend() {
  return Math.floor(Math.random() * vendors.length);
}

function getRandCat() {
  return Math.floor(Math.random() * categories.length);
}

function getRandIndex(upTo) {
  return Math.floor(Math.random() * upTo);
}

function generateImgList() {
  const imgPath = path.join(__dirname, '../products');
  return fs.readdirSync(imgPath);
}

// returns true based on percent
function chance(percentChance) {
  const chance = percentChance / 100;
  const random = Math.random();
  return random < chance ? true : false;
}

function generateProducts() {
  const products = [];
  const imgList = generateImgList();
  for (let i = 0; i < 100; i++) {
    const id = faker.random.uuid();
    const name = faker.commerce.productName();
    const sku = faker.random.alphaNumeric(5).toUpperCase();
    const price = faker.commerce.price();
    const slug = slugify(name, { lower: true });
    const vendor = vendors[getRandVend()].name;
    const category = categories[getRandCat()].slug;
    const description = faker.lorem.sentences();
    const reviews = [];
    const thumbImgUrl = `../../images/products/${
      imgList[getRandIndex(imgList.length)]
    }`;
    const mdImgUrl = './images/products/medium.png';

    let isDeal = false;
    i < 6 ? (isDeal = true) : (isDeal = false);

    products.push({
      id,
      name,
      sku,
      price,
      slug,
      vendor,
      category,
      description,
      reviews,
      thumbImgUrl,
      mdImgUrl,
      isDeal,
      isBestSeller: chance(20),
    });
  }
  return products;
}

module.exports = generateProducts();
