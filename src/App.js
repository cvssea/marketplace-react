import React from 'react';
import { connect } from 'react-redux';
import { fetchCategories } from './store/actions/categories';
import { fetchDeals, fetchBestSellers } from './store/actions/products';
import { attemptAuth } from './store/actions/auth';
import { Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './components/Pages/Home';
import SearchPage from './components/Pages/Search';
import AuthPage from './components/Pages/Auth';
import CategoryPage from './components/Pages/Category';
import DealsPage from './components/Pages/Deals';
import BestSellersPage from './components/Pages/BestSellers';
import ProductPage from './components/Pages/Product';
import Footer from './components/Footer/Footer.js';

const App = ({
  categories,
  fetchCategories,
  fetchDeals,
  fetchBestSellers,
  attemptAuth,
}) => {
  React.useEffect(() => {
    fetchDeals();
    fetchBestSellers();
    fetchCategories();

    const marketUser = JSON.parse(localStorage.getItem('marketUser'));
    if (marketUser && !marketUser.error) {
      attemptAuth(marketUser.email, marketUser.password);
    }
  }, [fetchCategories, fetchDeals, fetchBestSellers]);

  return (
    <>
      <Header />
      <Route path="/login" render={props => <AuthPage {...props} />} />
      <Route path="/search" render={() => <SearchPage />} />
      <Route exact path="/" render={() => <HomePage />} />
      {categories &&
        categories.map(({ slug }) => (
          <Route
            key={slug}
            exact
            path={`/${slug}`}
            render={() => <CategoryPage slug={slug} />}
          />
        ))}
      <Route exact path="/deals-of-the-day" render={() => <DealsPage />} />
      <Route exact path="/best-sellers" render={() => <BestSellersPage />} />
      <Route
        path="/products/:product/:id"
        render={props => {
          return <ProductPage {...props} />;
        }}
      />
      <Footer />
    </>
  );
};

const mapState = ({ categoryData }) => ({
  categories: categoryData.list,
});

export default connect(
  mapState,
  { fetchCategories, fetchDeals, fetchBestSellers, attemptAuth }
)(App);
