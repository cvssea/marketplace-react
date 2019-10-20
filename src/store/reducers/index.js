import { combineReducers } from 'redux';
import { categoriesReducer as categoryData } from './categories';
import { productsReducer as products } from './products';
import { searchReducer as searchResults } from './search';
import { authReducer as currentUser } from './auth';

const reducer = combineReducers({
  categoryData,
  products,
  searchResults,
  currentUser,
});

export default reducer;
