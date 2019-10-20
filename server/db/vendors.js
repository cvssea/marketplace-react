const faker = require('faker');
const slugify = require('slugify');

const generateVendors = () => {
  const vendors = [];
  for (let i = 0; i < 10; i++) {
    const id = faker.random.uuid();
    const name = faker.company.companyName();
    const slug = slugify(name, { lower: true });
    const description = faker.lorem.sentences();
    vendors.push({ id, name, slug, description });
  }
  return vendors;
};

module.exports = generateVendors();
