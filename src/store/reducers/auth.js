import { LOGIN_USER } from '../actionTypes';

export const authReducer = (state = false, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return action.userData;
    default:
      return state;
  }
};
