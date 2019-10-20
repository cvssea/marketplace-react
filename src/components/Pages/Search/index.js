import React from 'react';
import { connect } from 'react-redux';
import ProductList from '../../Products/ProductList';

const mapState = state => {
  const searchResults = state.searchResults || [];
  return {
    searchResults,
  };
};

export default connect(mapState)(({ searchResults }) => (
  <ProductList products={searchResults} search />
));
