import React from 'react';
import Banner from '../../Banner/Banner.js';
import DealOfDay from '../..//Modules/DealOfDay';
import BestSellers from '../..//Modules/BestSellers';
import CategoryAd from '../..//Modules/CategoryAd';
import shopBanner from '../../../images/banner-1.png';
import kitchenBanner from '../../../images/kitchen-banner.png';

const HomePage = props => {
  return (
    <>
      <Banner image={shopBanner} text="In love with shopping?" />
      <DealOfDay />
      <Banner
        image={kitchenBanner}
        text="Shop for the kitchen of your dreams"
        slug="kitchen"
      />
      <BestSellers />
      <CategoryAd slug="fashion" />
    </>
  );
};

export default HomePage;
