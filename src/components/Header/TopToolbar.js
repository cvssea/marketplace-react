import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import MenuIcon from '@material-ui/icons/Menu';
import AccountIcon from '@material-ui/icons/AccountCircle';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasketOutlined';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
  },
  logo: {
    width: 'auto',
    height: theme.spacing(5),
  },
}));

const TopToolbar = ({ openDrawer }) => {
  const classes = useStyles();

  return (
    <Toolbar>
      <IconButton
        className={classes.menuButton}
        color="inherit"
        aria-label="menu"
        onClick={openDrawer}
      >
        <MenuIcon />
      </IconButton>
      <Link to="/">
        <img
          src={logo}
          className={classes.logo}
          alt="MarketPlace"
          title="MarketPlace"
        />
      </Link>
      <div className={classes.root}></div>
      <IconButton color="inherit">
        <AccountIcon />
      </IconButton>
      <IconButton color="inherit">
        <Badge badgeContent={1} color="secondary">
          <ShoppingBasketIcon />
        </Badge>
      </IconButton>
    </Toolbar>
  );
};

export default TopToolbar;
