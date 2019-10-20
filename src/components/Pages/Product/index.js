import React from 'react';
import { connect } from 'react-redux';
import ProductPage from './ProductPage';

const mapState = (state, ownProps) => {
  const { id } = ownProps.match.params;
  return {
    product: getProductFromState(
      {
        cat: state.categoryData,
        prods: state.products,
      },
      id
    ),
    similarProducts: getNRandomElements(state.products.bestSellers, 8),
  };
};

export default connect(mapState)(ProductPage);

function getNRandomElements(list, numElements) {
  const startIndex = Math.floor(Math.random() * (list.length - numElements));
  return list.filter(
    (el, i) => i > startIndex && i <= startIndex + numElements
  );
}

function getProductFromState(state, id) {
  let product;
  const traverseState = (state, id) => {
    if (Array.isArray(state)) {
      let tempProduct = state.find(prod => prod.id === id);
      if (!tempProduct) return;
      else product = tempProduct;
    } else {
      Object.keys(state).forEach(key => {
        traverseState(state[key], id);
      });
    }
  };
  traverseState(state, id);
  return product;
}
