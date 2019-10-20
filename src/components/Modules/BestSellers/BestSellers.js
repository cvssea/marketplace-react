import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import image from '../../../images/products/small.png';
import Product from '../../Products/Product';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    borderRadius: 0,
  },
  list: {
    display: 'flex',
    overflow: 'scroll',
  },
  listItem: {
    flexDirection: 'column',
  },
  spacing: {
    marginBottom: theme.spacing(2),
  },
}));

const BestSellers = ({ products }) => {
  const classes = useStyles();
  return (
    <section>
      <Card className={classes.root}>
        <CardHeader title="Best Sellers" />
        <CardContent>
          <List className={classes.list}>
            {products.map(prod => (
              <ListItem key={prod.id} className={classes.listItem}>
                <Product {...prod} imageWidth={100} />
                <Typography variant="subtitle2">{prod.name}</Typography>
              </ListItem>
            ))}
          </List>
        </CardContent>
      </Card>
      <div className={classes.spacing}></div>
    </section>
  );
};

BestSellers.defaultProps = {
  bestSellers: [
    { name: 'Rustic Fresh Shirt' },
    { name: 'Small Cotton Pants' },
    { name: 'Handmade Concrete Bacon' },
    { name: 'Handcrafted Fresh Sausages' },
    { name: 'Generic Metal Gloves' },
    { name: 'Fantastic Wooden Chair' },
  ],
};

export default BestSellers;
