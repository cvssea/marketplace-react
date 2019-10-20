import { FETCH_DEALS, FETCH_BEST_SELLERS } from '../actionTypes';

export const productsReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_DEALS:
      return {
        ...state,
        deals: action.deals,
      };
    case FETCH_BEST_SELLERS:
      return {
        ...state,
        bestSellers: action.bestSellers,
      };
    default:
      return state;
  }
};
