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
      localStorage.setItem('marketUser', JSON.stringify(userData));
    }

    dispatch({
      type: LOGIN_USER,
      userData,
    });
    return userData.error ? false : true;
  } catch (err) {
    console.log('Auth action failed', err);
  }
};

export const attemptCreateAccount = newUser => async dispatch => {
  try {
    let userData;
    const existing = await authService.checkExistingAccount(newUser.email);
    const isTaken = !!existing.length;

    if (isTaken) {
      userData = { error: 'An account with this email already exists' };
    } else {
      userData = await authService.createAccount(newUser);
      localStorage.setItem('marketUser', JSON.stringify(newUser));
    }

    dispatch({
      type: LOGIN_USER,
      userData,
    });
    return userData.error ? false : true;
  } catch (err) {
    console.log('Create action failed', err);
  }
};
