const baseUrl = 'http://localhost:3001/api/users';

const login = async email => {
  try {
    const response = await fetch(`${baseUrl}?email=${email}`);
    const user = await response.json();
    return user;
  } catch (err) {
    console.log('Cannot login user', err);
  }
};

export default { login };
