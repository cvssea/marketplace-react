import { FETCH_CATEGORIES, FETCH_PRODS_IN_CAT } from '../actionTypes';

export const categoriesReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_CATEGORIES:
      return {
        ...state,
        list: action.categoryList,
      };
    case FETCH_PRODS_IN_CAT:
      return {
        ...state,
        [`prods-in-${action.catSlug}`]: action.products,
      };
    default:
      return state;
  }
};
