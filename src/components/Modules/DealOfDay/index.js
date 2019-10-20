import React from 'react';
import { connect } from 'react-redux';
import DealOfDay from './DealOfDay';
import { fetchDeals } from '../../../store/actions/products';

const mapState = state => {
  const deals = state.products.deals || [];
  const randomDeal = deals[Math.floor(Math.random() * deals.length)];
  return { deal: randomDeal };
};

export default connect(
  mapState,
  { fetchDeals }
)(({ deal, fetchDeals }) => {
  React.useEffect(() => {
    fetchDeals();
  }, [fetchDeals]);

  return <DealOfDay {...deal} />;
});
