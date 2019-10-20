import React from 'react';
import { connect } from 'react-redux';
import ProductList from '../../Products/ProductList';

const mapState = ({ products }) => {
  const bestSellers = products.bestSellers || [];
  return { products: bestSellers };
};

export default connect(mapState)(({ products }) => {
  const category = {
    title: 'Deals of the day',
    slug: 'deals-of-the-day',
    imageUrl: '../images/categories/best-sellers-banner.jpg',
  };

  return <ProductList products={products} category={category} />;
});
