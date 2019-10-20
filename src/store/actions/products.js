import productsService from '../../services/products';
import {
  FETCH_DEALS,
  FETCH_BEST_SELLERS,
  SEARCH_PRODUCTS,
} from '../actionTypes';
import products from '../../services/products';

export const fetchDeals = () => async dispatch => {
  try {
    const deals = await productsService.getDeals();
    dispatch({
      type: FETCH_DEALS,
      deals,
    });
  } catch (err) {
    console.log('Action failed: getDeals', err);
  }
};

export const fetchBestSellers = () => async dispatch => {
  try {
    const bestSellers = await productsService.getBestSellers();
    dispatch({
      type: FETCH_BEST_SELLERS,
      bestSellers,
    });
  } catch (err) {
    console.log('Action failed: getBestSellers', err);
  }
};

export const fetchSearchResult = query => async dispatch => {
  try {
    const result = await productsService.getProdsByNameQuery(query);
    dispatch({
      type: SEARCH_PRODUCTS,
      result,
    });
  } catch (err) {
    console.log('Action failed: search', err);
  }
};
