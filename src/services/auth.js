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

const checkExistingAccount = async email => {
  try {
    const response = await fetch(`${baseUrl}?email=${email}`);
    const existingAccount = await response.json();
    return existingAccount;
  } catch (err) {
    console.log(err);
  }
};

const createAccount = async userData => {
  try {
    const newUser = {
      ...userData,
      cart: [],
      reviews: [],
    };

    const response = await fetch(baseUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newUser),
    });

    const savedUser = await response.json();
    return savedUser;
  } catch (err) {
    console.log('Create account error', err);
  }
};

export default { login, checkExistingAccount, createAccount };
