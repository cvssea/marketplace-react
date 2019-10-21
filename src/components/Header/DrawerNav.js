import React from 'react';
import { Link } from 'react-router-dom';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import AccountIcon from '@material-ui/icons/AccountCircle';
import ChevronRightIcon from '@material-ui/icons/ChevronRightRounded';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import MoneyOffIcon from '@material-ui/icons/MoneyOffOutlined';

const DrawerNav = ({ categories, currentUser, open, closeDrawer }) => {
  return (
    <Drawer
      open={open}
      variant="temporary"
      onClose={closeDrawer}
      ModalProps={{ keepMounted: true }}
    >
      <List>
        <ListItemLink
          to={currentUser ? '/account' : '/account/login'}
          primary={currentUser ? `Hi ${currentUser.firstName}!` : 'Hi! Sign in'}
          icon={<AccountIcon />}
          onClick={closeDrawer}
        />
        <Divider />
        {categories &&
          categories.map(cat => (
            <ListItemLink
              key={cat.slug}
              to={`/${cat.slug}`}
              primary={cat.title}
              icon={<ChevronRightIcon />}
              onClick={closeDrawer}
            />
          ))}
        <Divider />
        <ListItemLink
          to="/deals-of-the-day"
          primary="Deals of the Day"
          icon={<MoneyOffIcon />}
          onClick={closeDrawer}
        />
        <ListItemLink
          to="/best-sellers"
          primary="Best Sellers"
          icon={<CardGiftcardIcon />}
          onClick={closeDrawer}
        />
      </List>
    </Drawer>
  );
};

function ListItemLink(props) {
  const { icon, primary, to } = props;

  const renderLink = React.useMemo(
    () =>
      React.forwardRef((itemProps, ref) => (
        <Link to={to} {...itemProps} innerRef={ref} />
      )),
    [to]
  );

  return (
    <li>
      <ListItem button component={renderLink} onClick={props.onClick}>
        {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
        <ListItemText primary={primary} />
      </ListItem>
    </li>
  );
}

export default DrawerNav;
