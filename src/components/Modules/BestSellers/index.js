import React from 'react';
import { connect } from 'react-redux';
import BestSellers from './BestSellers';
import { fetchBestSellers } from '../../../store/actions/products';

const mapState = state => {
  const bestSellers = state.products.bestSellers || [];
  return {
    bestSellers: getNRandomElements(bestSellers, 6),
  };
};

export default connect(
  mapState,
  { fetchBestSellers }
)(({ bestSellers, fetchBestSellers }) => {
  React.useEffect(() => {
    fetchBestSellers();
  }, [fetchBestSellers]);

  return <BestSellers products={bestSellers} />;
});

function getNRandomElements(list, numElements) {
  const startIndex = Math.floor(Math.random() * (list.length - numElements));
  return list.filter(
    (el, i) => i > startIndex && i <= startIndex + numElements
  );
}
