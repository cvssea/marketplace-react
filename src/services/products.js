const baseUrl = 'http://localhost:3001/api/products';

const getDeals = async () => {
  try {
    const response = await fetch(`${baseUrl}?isDeal=true`);
    const data = await response.json();
    return data;
  } catch (err) {
    console.log('Cannot get deals', err);
  }
};

const getBestSellers = async () => {
  try {
    const response = await fetch(`${baseUrl}?isBestSeller=true`);
    const data = await response.json();
    return data;
  } catch (err) {
    console.log('Cannot get best sellers', err);
  }
};

const getProdsByCat = async catSlug => {
  try {
    const response = await fetch(`${baseUrl}?category=${catSlug}`);
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(`Cannot get products in ${catSlug}`, err);
  }
};

export const getProdsByNameQuery = async query => {
  try {
    const response = await fetch(`${baseUrl}?name_like=${query}`);
    const result = await response.json();
    return result;
  } catch (err) {
    console.log('Query failed', err);
  }
};

export default { getDeals, getBestSellers, getProdsByCat, getProdsByNameQuery };
