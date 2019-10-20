import authService from '../../services/auth';
import { LOGIN_USER } from '../actionTypes';

export const attemptAuth = (email, password) => async dispatch => {
  try {
    let userData;
    const authResult = await authService.login(email);
    if (!authResult.length || authResult[0].password !== password) {
      userData = { error: 'Incorrect email or password' };
    } else {
      userData = authResult[0];
    }

    localStorage.setItem('marketUser', JSON.stringify(userData));

    dispatch({
      type: LOGIN_USER,
      userData,
    });
    return userData.error ? false : true;
  } catch (err) {
    console.log('Auth action error', err);
  }
};
