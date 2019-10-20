import catService from '../../services/categories';
import productsService from '../../services/products';
import { FETCH_CATEGORIES, FETCH_PRODS_IN_CAT } from '../actionTypes';

export const fetchCategories = () => async dispatch => {
  try {
    const categoryList = await catService.getAll();
    dispatch({
      type: FETCH_CATEGORIES,
      categoryList,
    });
  } catch (err) {
    console.log(err);
  }
};

export const fetchProdsInCat = catSlug => async dispatch => {
  try {
    const products = await productsService.getProdsByCat(catSlug);
    dispatch({
      type: FETCH_PRODS_IN_CAT,
      catSlug,
      products,
    });
  } catch (err) {
    console.log(`Cannot fetch products in ${catSlug}`, err);
  }
};
