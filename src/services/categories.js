const baseUrl = 'http://localhost:3001/api/categories';

const getAll = async () => {
  try {
    const response = await fetch(baseUrl);
    const categories = await response.json();
    return categories;
  } catch (err) {
    console.log(err);
  }
};

export default { getAll };
