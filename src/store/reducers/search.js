import { SEARCH_PRODUCTS } from '../actionTypes';

export const searchReducer = (state = [], action) => {
  switch (action.type) {
    case SEARCH_PRODUCTS:
      return [...action.result];
    default:
      return state;
  }
};
