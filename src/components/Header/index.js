import React from 'react';
import { connect } from 'react-redux';
import AppBar from '@material-ui/core/AppBar';
import TopToolbar from './TopToolbar';
import SearchToolbar from './SearchToolbar';
import DrawerNav from './DrawerNav';

const Header = ({ categories, currentUser }) => {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const handleDrawerOpen = () => setDrawerOpen(true);
  const handleDrawerClose = () => setDrawerOpen(false);

  return (
    <>
      <AppBar position="sticky">
        <TopToolbar openDrawer={handleDrawerOpen} />
        <SearchToolbar />
        <DrawerNav
          currentUser={currentUser}
          categories={categories}
          open={drawerOpen}
          closeDrawer={handleDrawerClose}
        />
      </AppBar>
    </>
  );
};

const mapState = ({ categoryData, currentUser }) => ({
  categories: categoryData.list,
  currentUser,
});

export default connect(mapState)(Header);
