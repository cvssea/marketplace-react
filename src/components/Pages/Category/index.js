import React from 'react';
import { connect } from 'react-redux';
import { fetchProdsInCat } from '../../../store/actions/categories';
import ProductList from '../../Products/ProductList';

const mapState = (state, ownProps) => {
  const list = state.categoryData.list || [];
  const products = state.categoryData[`prods-in-${ownProps.slug}`] || [];
  return {
    category: list.find(cat => cat.slug === ownProps.slug),
    products,
  };
};

export default connect(
  mapState,
  { fetchProdsInCat }
)(({ slug, category, products, fetchProdsInCat }) => {
  React.useEffect(() => {
    fetchProdsInCat(slug);
  }, [fetchProdsInCat]);
  return <ProductList category={category} products={products} />;
});
