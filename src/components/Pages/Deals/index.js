import React from 'react';
import { connect } from 'react-redux';
import ProductList from '../../Products/ProductList';

const mapState = ({ products }) => {
  const deals = products.deals || [];
  return { products: deals };
};

export default connect(mapState)(({ products }) => {
  const category = {
    title: 'Deals of the day',
    slug: 'deals-of-the-day',
    imageUrl: '../images/categories/deal-of-the-day-banner.jpg',
  };

  return <ProductList products={products} category={category} />;
});
